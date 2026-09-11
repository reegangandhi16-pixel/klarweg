/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 17
   "Nebensätze mit damit & um ... zu" — purpose clauses. Same
   subject in both clauses → um + Infinitiv + zu (Satzende).
   Different subjects → damit + Nebensatz (finite verb at the
   very end). Teaches ONLY these two purpose structures.
   IMPORTANT: dialogue uses ONLY Antke and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-17 list (75 items) — a
   sustainability/recycling theme (Ökostrom, Pfandflasche,
   Mülleimer, Solarpanel, Sonnenenergie, recycelbar…), an
   excellent natural fit for purpose clauses about protecting
   the environment — woven into the story and reading passage.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-17-nebensatz-damit-um-zu',
  phase: 'B1 · Phase 1',
  number: 17,
  title: 'Nebensätze mit damit & um ... zu',
  titleEn: 'Purpose clauses: damit & um ... zu',
  description: 'Ich lerne Deutsch, um in Deutschland zu arbeiten. Ich erkläre die Grammatik, damit die Schüler sie verstehen. Same goal, two structures — the only question that matters is whether the same person performs both actions.',
  xp: 260,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 18, title: 'Relativsätze mit Präpositionen', titleEn: 'Relative clauses with prepositions' , href: 'chapter-b1-18-relativsaetze-mit-praepositionen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>one purpose.</em>',
    intro: 'Antke returns bottles for the deposit while Timo sorts the trash so the environment gets cleaner — every action justified with a purpose clause, some with um…zu, some with damit, depending on who\'s doing what.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear um...zu and damit chosen correctly based on same vs. different subject'
    ],
    scene: 'Samstagvormittag — Antke und Timo sortieren den Müll',
    femaleSpeakers: ['Antke'],
    dialogue: [
      { speaker: 'Antke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bringe', role: 'r-verb', en: 'bring', hi: 'लाती हूँ', pron: 'BRING-uh', type: 'Verb · bringen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Flaschen', role: 'r-akkusativ', en: 'bottles', hi: 'बोतलें', pron: 'FLA-shen', type: 'Noun · plural' },
        { w: 'zurück', role: 'r-verb', en: 'back', hi: 'वापस', pron: 'tsu-RÜK', type: 'Separable prefix', lexicalUnit: 'zurückbringen' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-conjunction', en: 'in order', hi: 'ताकि', pron: 'um', type: 'Conjunction · um … zu', why: 'um ... zu + infinitive = in order to, same subject in both clauses (this chapter).', ex: 'Ich bringe die Flaschen zurück, um das Pfand zu bekommen.', exEn: 'I bring the bottles back in order to get the deposit.' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Pfand', role: 'r-akkusativ', en: 'deposit', hi: 'ज़मानत', pron: 'pfant', type: 'Noun · neut.', why: 'das Pfand (this chapter).', ex: 'Wir bekommen Pfand zurück.', exEn: 'We get the deposit back.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'bekommen', role: 'r-verb', en: 'get', hi: 'पाना', pron: 'be-KO-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I bring the bottles back in order to get the deposit.', hi: 'Main bottleein wapas laati hoon taaki zamaanat wapas milen.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gute', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Idee', role: 'r-subject', en: 'idea', hi: 'विचार', pron: 'i-DAY', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'trenne', role: 'r-verb', en: 'sort', hi: 'अलग करता हूँ', pron: 'TRE-nuh', type: 'Verb · trennen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Müll', role: 'r-akkusativ', en: 'trash', hi: 'कचरा', pron: 'mül', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'damit', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'da-MIT', type: 'Conjunction · damit', why: 'damit + subordinate clause = so that, different subjects possible (this chapter).', ex: 'Ich trenne den Müll, damit die Umwelt geschützt wird.', exEn: 'I sort the trash so that the environment is protected.' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Umwelt', role: 'r-subject', en: 'environment', hi: 'पर्यावरण', pron: 'UM-velt', type: 'Noun · fem.' },
        { w: 'sauberer', role: 'r-subject', en: 'cleaner', hi: 'साफ़', pron: 'ZOW-be-rer', type: 'Adjective · Komparativ' },
        { w: 'wird', role: 'r-verb', en: 'becomes', hi: 'हो जाए', pron: 'virt', type: 'Verb · werden (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good idea. I sort the trash so that the environment becomes cleaner.', hi: 'Achha vichaar. Main kachra alag karta hoon taaki paryavaran saaf ho jaaye.' },
      { speaker: 'Antke', tokens: [
        { w: 'Machst', role: 'r-verb', en: 'do you do', hi: 'करते हो', pron: 'MAKHST', type: 'Verb · machen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-conjunction', en: 'in order', hi: 'ताकि', pron: 'um', type: 'Conjunction · um … zu' },
        { w: 'Geld', role: 'r-akkusativ', en: 'money', hi: 'पैसा', pron: 'gelt', type: 'Noun · neut.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'sparen', role: 'r-verb', en: 'save', hi: 'बचाना', pron: 'SHPAH-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you do that every day in order to save money?', hi: 'Kya tum yeh har din karte ho taaki paisa bache?' },
      { speaker: 'Timo', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'do', hi: 'करता हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'es', role: 'r-akkusativ', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'vor', role: 'r-preposition', en: 'above', hi: 'से ऊपर', pron: 'for', type: 'Preposition' },
        { w: 'allem', role: 'r-dativ', en: 'all (dat.)', hi: 'सब', pron: 'A-lem', type: 'Determiner · dative' }, { w: ',', plain: true },
        { w: 'damit', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'da-MIT', type: 'Conjunction · damit' },
        { w: 'weniger', role: 'r-subject', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'Müll', role: 'r-subject', en: 'trash', hi: 'कचरा', pron: 'mül', type: 'Noun · masc.' },
        { w: 'entsteht', role: 'r-verb', en: 'arises', hi: 'बनता है', pron: 'ent-SHTAYT', type: 'Verb · entstehen (Satzende)', why: 'entstehen = to arise (this chapter).', ex: 'Weniger Müll entsteht.', exEn: 'Less trash arises.' },
        { w: '.', plain: true }
      ], en: 'No, I do it above all so that less trash arises.', hi: 'Nahi, main yeh sabse zyada isliye karta hoon taaki kam kachra bane.' },
      { speaker: 'Antke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'wichtig', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-tikh', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kaufe', role: 'r-verb', en: 'buy', hi: 'ख़रीदती हूँ', pron: 'KOW-fuh', type: 'Verb · kaufen (ich)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'weniger', role: 'r-akkusativ', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'Plastik', role: 'r-akkusativ', en: 'plastic', hi: 'प्लास्टिक', pron: 'PLAS-tik', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'um', role: 'r-conjunction', en: 'in order', hi: 'ताकि', pron: 'um', type: 'Conjunction · um … zu' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Umwelt', role: 'r-akkusativ', en: 'environment', hi: 'पर्यावरण', pron: 'UM-velt', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'schützen', role: 'r-verb', en: 'protect', hi: 'बचाना', pron: 'SHÜ-tsen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is important. I also buy less plastic in order to protect the environment.', hi: 'Yeh zaroori hai. Main bhi kam plastic khareedti hoon taaki paryavaran bache.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Both structures answer the same question — <b>Why? For what purpose?</b> — but the choice is mechanical: ask <b>who performs both actions</b>. Same person in both clauses? Use <span class="de r-purpose">um … zu + Infinitiv</span> (<span class="de">Ich lerne Deutsch, um in Deutschland zu arbeiten.</span>). Two different people? Use <span class="de r-purpose">damit</span> + a full clause, verb at the end (<span class="de">Ich erkläre die Grammatik, damit die Schüler sie verstehen.</span>).'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NEBENSÄTZE MIT DAMIT & UM ... ZU (B1 level only): purpose clauses. um + Infinitiv + zu (Infinitiv always at the very end) is used ONLY when the subject of both clauses is the SAME person/thing. damit + a full subordinate clause (finite verb at the very end) is used when the subjects are DIFFERENT. ' +
    'Do NOT expect ohne...zu, anstatt...zu, sodass, or other B2 final-clause structures — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- um...zu requires the SAME subject in both clauses; if the learner writes um + a clause with its own explicit subject (e.g. "um ich in Deutschland arbeite"), that is wrong — um...zu never has its own conjugated subject+verb, only zu + bare Infinitiv at the end.\n' +
    '- damit requires the finite verb at the very end of its clause, like any subordinate clause: "damit die Schüler sie verstehen" not "damit die Schüler verstehen sie."\n' +
    '- damit is used (not um...zu) whenever the two clauses have different subjects, even if the difference is subtle (e.g. "ich" vs. "meine Schwester").\n' +
    '- Never combine um and damit in the same clause, and never write "um dass" (a common but incorrect blend).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Purpose-clause check:</b> one sentence on whether um...zu vs. damit was chosen correctly based on same vs. different subjects.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose um...zu vs. damit automatically based on the subject test. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the decision flowchart once — especially cases where the subjects look similar but are technically different — then continue.',
    low: 'Worth another pass through the Grammar section — practise the "same person?" test out loud on five different sentence pairs.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'lerne', role: 'plain' },
    { w: 'Deutsch', role: 'plain' }, { w: ',', role: 'plain' },
    { w: 'um', role: 'r-purpose' }, { w: 'zu', role: 'r-purpose' },
    { w: 'arbeiten', role: 'r-purpose' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: same subject → um...zu; different subjects → damit.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Antke and Timo sort recycling and plan a sustainable start-up.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 75 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master um...zu and damit, and the decision flowchart between them.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about sustainability, full of purpose clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch um...zu and damit in natural speech and identify same vs. different subjects.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain goals and reasons using purpose clauses naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a study or career plan using purpose clauses naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill um...zu ↔ damit transformation and same/different-subject classification.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 260 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 75 chapter words — sustainability and recycling vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'um...zu ↔ damit transformation drills, same/different-subject classification, error correction, and a goals-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full purpose-clause reference — formation, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'um … zu', text: 'Express purpose when the subject is the same' },
    { de: 'damit', text: 'Express purpose when the subjects are different' },
    { de: 'Gleiches Subjekt vs. verschiedene Subjekte', text: 'Apply the one-question decision test' },
    { de: 'Ich lerne Deutsch, …', text: 'Build natural purpose clauses about real goals' },
    { de: 'Goethe B1', text: 'Recognize purpose clauses in exam texts' }
  ],

  // ---------- Vocabulary (75 items — full chapter-17 upload list) ----------
  vocab: [
    { de: 'allerdings', pos: 'conjunction', level: 'B1', en: 'though, however', hi: 'हालांकि', ex: 'Allerdings müssen wir genug Kapital haben.', exEn: 'However, we need to have enough capital.', exHi: 'Halanki, humaare paas kaafi poonji honi chahiye.' },
    { de: 'dagegen', pos: 'adverb', level: 'B1', en: 'against, on the other hand', hi: 'इसके विपरीत', ex: 'Ich dagegen bevorzuge Ökostrom.', exEn: 'I, on the other hand, prefer green electricity.', exHi: 'Main, iske viparit, hariyaali wali bijli pasand karta hoon.' },
    { de: 'Stromverbrauch', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'energy usage', hi: 'ऊर्जा खपत', ex: 'Wegen des hohen Stromverbrauchs installieren wir Solarpanels.', exEn: 'Because of the high energy usage, we\'re installing solar panels.', exHi: 'Zyada oorja khapat ki wajah se, hum solar panels lagaa rahe hain.' },
    { de: 'Umwelttipp', art: 'der', gender: 'm', plural: 'Umwelttipps', pos: 'noun', level: 'B1', en: 'tip for the environment', hi: 'पर्यावरण सुझाव', ex: 'Hier ist ein guter Umwelttipp.', exEn: 'Here\'s a good environmental tip.', exHi: 'Yahan ek achha paryaavaran sujhaav hai.' },
    { de: 'Ökostrom', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'green electricity', hi: 'हरित बिजली', ex: 'Wir sollten Ökostrom nutzen.', exEn: 'We should use green electricity.', exHi: 'Humein hariyaali wali bijli upyog karni chahiye.' },
    { de: 'Verschwendung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'waste', hi: 'बर्बादी', ex: 'Ich vermeide Einwegflaschen, um Verschwendung zu vermeiden.', exEn: 'I avoid disposable bottles, to avoid waste.', exHi: 'Main disposable botlon se bachti hoon, taaki barbaadi na ho.' },
    { de: 'nachhaltig', pos: 'adjective', level: 'B1', en: 'sustainable', hi: 'टिकाऊ', ex: 'Sonnenenergie ist nachhaltig.', exEn: 'Sun energy is sustainable.', exHi: 'Surya oorja tikaau hai.' },
    { de: 'um … zu', pos: 'grammar', level: 'B1', en: 'in order to', hi: 'ताकि', ex: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', exEn: 'I\'m learning German, in order to work in Germany.', exHi: 'Main German seekh rahi hoon, taaki Germany mein kaam kar sakoon.' },
    { de: 'vermeiden', pos: 'verb', level: 'B1', en: 'to avoid', hi: 'बचना', ex: 'Ich vermeide Plastikflaschen.', exEn: 'I avoid plastic bottles.', exHi: 'Main plastic botlon se bachti hoon.', conj: { praesens: 'vermeidet', praeteritum: 'vermied', perfekt: 'hat vermieden' } },
    { de: 'allein', pos: 'adverb', level: 'B1', en: 'alone', hi: 'अकेले', ex: 'Ich kann das nicht allein schaffen.', exEn: 'I can\'t manage that alone.', exHi: 'Main yeh akela nahi kar sakta.' },
    { de: 'beschädigt', pos: 'adjective', level: 'B1', en: 'damaged', hi: 'क्षतिग्रस्त', ex: 'Die Flasche war beschädigt.', exEn: 'The bottle was damaged.', exHi: 'Botal kshatigrast thi.' },
    { de: 'damit', pos: 'grammar', level: 'B1', en: 'so that', hi: 'ताकि', ex: 'Ich erkläre die Grammatik, damit die Schüler sie verstehen.', exEn: 'I explain the grammar, so that the students understand it.', exHi: 'Main vyakaran samjhaata hoon, taaki chhatra use samjh sakein.' },
    { de: 'Aktion', art: 'die', gender: 'f', plural: 'Aktionen', pos: 'noun', level: 'B1', en: 'action, campaign', hi: 'अभियान', ex: 'Die Aktion sammelte viel Geld für Recycling.', exEn: 'The campaign raised a lot of money for recycling.', exHi: 'Abhiyaan ne recycling ke liye bahut paisa ikattha kiya.' },
    { de: 'Neugründung', art: 'die', gender: 'f', plural: 'Neugründungen', pos: 'noun', level: 'B1', en: 'start-up (founding)', hi: 'नई स्थापना', ex: 'Die Neugründung brauchte viel Kapital.', exEn: 'The new founding needed a lot of capital.', exHi: 'Nayi sthaapana ko bahut poonji chahiye thi.' },
    { de: 'effizient', pos: 'adjective', level: 'B1', en: 'efficient', hi: 'कुशल', ex: 'Das neue System ist sehr effizient.', exEn: 'The new system is very efficient.', exHi: 'Naya system bahut kushal hai.' },
    { de: 'elektronisch', pos: 'adjective', level: 'B1', en: 'electronic', hi: 'इलेक्ट्रॉनिक', ex: 'Elektronischer Müll ist ein großes Problem.', exEn: 'Electronic waste is a big problem.', exHi: 'Electronic kachra ek badi samasya hai.' },
    { de: 'entstehen', pos: 'verb', level: 'B1', en: 'to originate, come into being', hi: 'शुरू होना', ex: 'Damit das Start-up entstehen kann, brauchen wir Kapital.', exEn: 'So that the start-up can come into existence, we need capital.', exHi: 'Startup shuru ho sake, iske liye humein poonji chahiye.', conj: { praesens: 'entsteht', praeteritum: 'entstand', perfekt: 'ist entstanden' } },
    { de: 'erhältlich', pos: 'adjective', level: 'B1', en: 'available', hi: 'उपलब्ध', ex: 'Mehrwegflaschen sind überall erhältlich.', exEn: 'Reusable bottles are available everywhere.', exHi: 'Reusable botlein har jagah upalabdh hain.' },
    { de: 'erwärmen', pos: 'verb', level: 'B1', en: 'to warm', hi: 'गर्म करना', ex: 'Die Erde wird sich weiter erwärmen.', exEn: 'The earth will keep warming.', exHi: 'Prithvi aur garm hoti rahegi.', conj: { praesens: 'erwärmt', praeteritum: 'erwärmte', perfekt: 'hat erwärmt' } },
    { de: 'gedruckt', pos: 'adjective', level: 'B1', en: 'printed', hi: 'मुद्रित', ex: 'Der Umwelttipp war auf Papier gedruckt.', exEn: 'The environmental tip was printed on paper.', exHi: 'Paryaavaran sujhaav kaagaz par mudrit tha.' },
    { de: 'jederzeit', pos: 'adverb', level: 'B1', en: 'at any time', hi: 'कभी भी', ex: 'Du kannst die Flasche jederzeit zurückbringen.', exEn: 'You can bring the bottle back at any time.', exHi: 'Tum botal kabhi bhi wapas la sakte ho.' },
    { de: 'kommen', pos: 'verb', level: 'B1', en: 'to come to (zu keinem Ergebnis kommen: to reach no result)', hi: 'पहुँचना (परिणाम तक)', ex: 'Wir sind zu keinem Ergebnis gekommen.', exEn: 'We didn\'t reach any result.', exHi: 'Hum kisi nateeje par nahi pahunche.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'korrekt', pos: 'adjective', level: 'B1', en: 'correct', hi: 'सही', ex: 'Die Mülltrennung war korrekt.', exEn: 'The waste separation was correct.', exHi: 'Kachre ka vibhajan sahi tha.' },
    { de: 'landen', pos: 'verb', level: 'B1', en: 'to land, end up', hi: 'पहुँच जाना', ex: 'Der Plastikmüll landet oft im Meer.', exEn: 'Plastic waste often ends up in the sea.', exHi: 'Plastic kachra aksar samundra mein pahunch jaata hai.', conj: { praesens: 'landet', praeteritum: 'landete', perfekt: 'ist gelandet' } },
    { de: 'liefern', pos: 'verb', level: 'B1', en: 'to deliver', hi: 'पहुँचाना', ex: 'Der Online-Shop liefert die Ware schnell.', exEn: 'The online shop delivers the goods quickly.', exHi: 'Online shop maal jaldi pahunchaata hai.', conj: { praesens: 'liefert', praeteritum: 'lieferte', perfekt: 'hat geliefert' } },
    { de: 'retten', pos: 'verb', level: 'B1', en: 'to rescue', hi: 'बचाना', ex: 'Pfandbecher retten viele Kaffeebecher.', exEn: 'Deposit cups rescue many coffee cups.', exHi: 'Jamaanat cup kai coffee cupon ko bachaate hain.', conj: { praesens: 'rettet', praeteritum: 'rettete', perfekt: 'hat gerettet' } },
    { de: 'sogenannt', pos: 'adjective', level: 'B1', en: 'so-called', hi: 'तथाकथित', ex: 'Der sogenannte Ökostrom ist teurer.', exEn: 'The so-called green electricity is more expensive.', exHi: 'Tathaakathit hariyaali wali bijli zyada mehngi hai.' },
    { de: 'treffen', pos: 'verb', level: 'B1', en: 'to make (eine Wahl treffen: to make a choice)', hi: 'करना (चुनाव)', ex: 'Wir müssen eine Wahl treffen.', exEn: 'We need to make a choice.', exHi: 'Humein ek chunaav karna hoga.', conj: { praesens: 'trifft', praeteritum: 'traf', perfekt: 'hat getroffen' } },
    { de: 'unterscheiden', pos: 'verb', level: 'B1', en: 'to distinguish', hi: 'अंतर करना', ex: 'Kannst du Glasflaschen und Plastikflaschen unterscheiden?', exEn: 'Can you distinguish glass bottles from plastic bottles?', exHi: 'Kya tum glass aur plastic ki botlon mein antar kar sakte ho?', conj: { praesens: 'unterscheidet', praeteritum: 'unterschied', perfekt: 'hat unterschieden' } },
    { de: 'verlangen', pos: 'verb', level: 'B1', en: 'to ask for, demand', hi: 'माँगना', ex: 'Der Laden verlangt Pfand für die Flasche.', exEn: 'The shop asks for a deposit for the bottle.', exHi: 'Dukaan botal ke liye jamaanat maangati hai.', conj: { praesens: 'verlangt', praeteritum: 'verlangte', perfekt: 'hat verlangt' } },
    { de: 'verleihen', pos: 'verb', level: 'B1', en: 'to lend', hi: 'उधार देना', ex: 'Die Firma verleiht Fahrräder.', exEn: 'The company lends bicycles.', exHi: 'Company cycle udhaar deti hai.', conj: { praesens: 'verleiht', praeteritum: 'verlieh', perfekt: 'hat verliehen' } },
    { de: 'verschmutzen', pos: 'verb', level: 'B1', en: 'to pollute', hi: 'प्रदूषित करना', ex: 'Plastik verschmutzt die Meere.', exEn: 'Plastic pollutes the seas.', exHi: 'Plastic samundaron ko pradushit karta hai.', conj: { praesens: 'verschmutzt', praeteritum: 'verschmutzte', perfekt: 'hat verschmutzt' } },
    { de: 'zurückbekommen', pos: 'verb', level: 'B1', en: 'to get back', hi: 'वापस पाना', ex: 'Ich möchte das Pfand zurückbekommen.', exEn: 'I\'d like to get the deposit back.', exHi: 'Mujhe jamaanat wapas paani hai.', conj: { praesens: 'bekommt zurück', praeteritum: 'bekam zurück', perfekt: 'hat zurückbekommen' } },
    { de: 'zurückbringen', pos: 'verb', level: 'B1', en: 'to bring back', hi: 'वापस लाना', ex: 'Ich bringe die Pfandflaschen zurück.', exEn: 'I\'m bringing the deposit bottles back.', exHi: 'Main jamaanat botlein wapas le ja rahi hoon.', conj: { praesens: 'bringt zurück', praeteritum: 'brachte zurück', perfekt: 'hat zurückgebracht' } },
    { de: 'Müllproblem', art: 'das', gender: 'n', plural: 'Müllprobleme', pos: 'noun', level: 'B1', en: 'garbage problem', hi: 'कचरे की समस्या', ex: 'Das Müllproblem wird immer größer.', exEn: 'The garbage problem keeps growing.', exHi: 'Kachre ki samasya lagataar badi ho rahi hai.' },
    { de: 'Pfand', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'deposit', hi: 'जमानत राशि', ex: 'Ich möchte das Pfand zurückbekommen.', exEn: 'I\'d like to get the deposit back.', exHi: 'Mujhe jamaanat wapas paani hai.' },
    { de: 'Resultat', art: 'das', gender: 'n', plural: 'Resultate', pos: 'noun', level: 'B1', en: 'result', hi: 'परिणाम', ex: 'Das Resultat der Studie war eindeutig.', exEn: 'The study\'s result was clear.', exHi: 'Adhyayan ka pariṇaam spasht tha.' },
    { de: 'Satzzeichen', art: 'das', gender: 'n', plural: 'Satzzeichen', pos: 'noun', level: 'B1', en: 'punctuation mark', hi: 'विराम चिह्न', ex: 'Vergiss die Satzzeichen nicht.', exEn: 'Don\'t forget the punctuation marks.', exHi: 'Viraam chihna mat bhoolo.' },
    { de: 'Solarpanel', art: 'das', gender: 'n', plural: 'Solarpanele', pos: 'noun', level: 'B1', en: 'solar panel', hi: 'सोलर पैनल', ex: 'Wir werden ein Solarpanel installieren.', exEn: 'We\'ll install a solar panel.', exHi: 'Hum ek solar panel lagaayenge.' },
    { de: 'Start-up', art: 'das', gender: 'n', plural: 'Start-ups', pos: 'noun', level: 'B1', en: 'start-up', hi: 'स्टार्टअप', ex: 'Ich habe eine Idee für ein Start-up.', exEn: 'I have an idea for a start-up.', exHi: 'Mere paas ek startup ke liye vichaar hai.' },
    { de: 'Öko-Duell', art: 'das', gender: 'n', plural: 'Öko-Duelle', pos: 'noun', level: 'B1', en: 'eco-duel', hi: 'पर्यावरण द्वंद्व', ex: 'Das Magazin veröffentlichte ein Öko-Duell.', exEn: 'The magazine published an eco-duel.', exHi: 'Patrika ne ek paryaavaran dwandva prakaashit kiya.' },
    { de: 'Absatz', art: 'der', gender: 'm', plural: 'Absätze', pos: 'noun', level: 'B1', en: 'sales', hi: 'बिक्री', ex: 'Der Absatz von Mehrwegflaschen steigt.', exEn: 'Sales of reusable bottles are rising.', exHi: 'Reusable botlon ki bikri badh rahi hai.' },
    { de: 'Bedarf', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'need', hi: 'आवश्यकता', ex: 'Der Bedarf an Ökostrom wächst.', exEn: 'The need for green electricity is growing.', exHi: 'Hariyaali wali bijli ki zaroorat badh rahi hai.' },
    { de: 'Fall', art: 'der', gender: 'm', plural: 'Fälle', pos: 'noun', level: 'B1', en: 'case (in any case)', hi: 'मामला', ex: 'In diesem Fall haben wir keine Wahl.', exEn: 'In this case, we have no choice.', exHi: 'Is maamle mein, humaare paas koi chunaav nahi hai.' },
    { de: 'Geschirrspüler', art: 'der', gender: 'm', plural: 'Geschirrspüler', pos: 'noun', level: 'B1', en: 'dishwasher', hi: 'बर्तन धोने की मशीन', ex: 'Der neue Geschirrspüler ist sehr effizient.', exEn: 'The new dishwasher is very efficient.', exHi: 'Naya dishwasher bahut kushal hai.' },
    { de: 'Kunststoff', art: 'der', gender: 'm', plural: 'Kunststoffe', pos: 'noun', level: 'B1', en: 'plastic', hi: 'प्लास्टिक', ex: 'Ich trenne den Kunststoff sorgfältig.', exEn: 'I separate the plastic carefully.', exHi: 'Main plastic ko dhyaan se alag karta hoon.' },
    { de: 'Müllberg', art: 'der', gender: 'm', plural: 'Müllberge', pos: 'noun', level: 'B1', en: 'mountain of rubbish', hi: 'कचरे का पहाड़', ex: 'Der Müllberg wächst jedes Jahr.', exEn: 'The mountain of rubbish grows every year.', exHi: 'Kachre ka pahaad har saal badhta hai.' },
    { de: 'Mülleimer', art: 'der', gender: 'm', plural: 'Mülleimer', pos: 'noun', level: 'B1', en: 'rubbish bin', hi: 'कचरे का डिब्बा', ex: 'Der Mülleimer ist schon voll.', exEn: 'The rubbish bin is already full.', exHi: 'Kachre ka dibba pehle se bhara hai.' },
    { de: 'Online-Shop', art: 'der', gender: 'm', plural: 'Online-Shops', pos: 'noun', level: 'B1', en: 'online shop', hi: 'ऑनलाइन दुकान', ex: 'Der Online-Shop liefert schnell.', exEn: 'The online shop delivers quickly.', exHi: 'Online shop jaldi delivery karta hai.' },
    { de: 'Ökovergleich', art: 'der', gender: 'm', plural: 'Ökovergleiche', pos: 'noun', level: 'B1', en: 'eco-comparison', hi: 'पर्यावरण तुलना', ex: 'Wir sollten zuerst einen Ökovergleich machen.', exEn: 'We should first make an eco-comparison.', exHi: 'Humein pehle ek paryaavaran tulna karni chahiye.' },
    { de: 'Alternative', art: 'die', gender: 'f', plural: 'Alternativen', pos: 'noun', level: 'B1', en: 'alternative', hi: 'विकल्प', ex: 'Mehrwegflaschen sind eine gute Alternative.', exEn: 'Reusable bottles are a good alternative.', exHi: 'Reusable botlein ek achha vikalp hain.' },
    { de: 'Außenseite', art: 'die', gender: 'f', plural: 'Außenseiten', pos: 'noun', level: 'B1', en: 'outside', hi: 'बाहरी हिस्सा', ex: 'Die Außenseite der Flasche war beschädigt.', exEn: 'The outside of the bottle was damaged.', exHi: 'Botal ka baahri hissa kshatigrast tha.' },
    { de: 'Duschzeit', art: 'die', gender: 'f', plural: 'Duschzeiten', pos: 'noun', level: 'B1', en: 'shower time', hi: 'नहाने का समय', ex: 'Kürzere Duschzeiten sparen Wasser.', exEn: 'Shorter shower times save water.', exHi: 'Chhoti nahaane ka samay paani bachaata hai.' },
    { de: 'Einwegflasche', art: 'die', gender: 'f', plural: 'Einwegflaschen', pos: 'noun', level: 'B1', en: 'disposable bottle', hi: 'डिस्पोज़ेबल बोतल', ex: 'Ich vermeide Einwegflaschen.', exEn: 'I avoid disposable bottles.', exHi: 'Main disposable botlon se bachti hoon.' },
    { de: 'Energiekosten', pos: 'noun', level: 'B1', en: 'energy costs', hi: 'ऊर्जा लागत', ex: 'Wir installieren Solarpanels, um Energiekosten zu sparen.', exEn: 'We install solar panels to save energy costs.', exHi: 'Hum oorja lagat bachaane ke liye solar panels lagate hain.' },
    { de: 'Gegend', art: 'die', gender: 'f', plural: 'Gegenden', pos: 'noun', level: 'B1', en: 'area', hi: 'क्षेत्र', ex: 'In dieser Gegend gibt es viele Recyclingstationen.', exEn: 'In this area, there are many recycling stations.', exHi: 'Is kshetra mein kai recycling station hain.' },
    { de: 'Geschäftsidee', art: 'die', gender: 'f', plural: 'Geschäftsideen', pos: 'noun', level: 'B1', en: 'business idea', hi: 'व्यावसायिक विचार', ex: 'Ich habe eine Geschäftsidee für ein Start-up.', exEn: 'I have a business idea for a start-up.', exHi: 'Mere paas ek startup ke liye vyaavsayik vichaar hai.' },
    { de: 'Glasflasche', art: 'die', gender: 'f', plural: 'Glasflaschen', pos: 'noun', level: 'B1', en: 'glass bottle', hi: 'काँच की बोतल', ex: 'Glasflaschen sind gut recycelbar.', exEn: 'Glass bottles are well recyclable.', exHi: 'Kaanch ki botlein achhi tarah recycle ho sakti hain.' },
    { de: 'Mehrwegflasche', art: 'die', gender: 'f', plural: 'Mehrwegflaschen', pos: 'noun', level: 'B1', en: 'reusable bottle', hi: 'पुन: उपयोगी बोतल', ex: 'Ich kaufe immer Mehrwegflaschen.', exEn: 'I always buy reusable bottles.', exHi: 'Main hamesha reusable botlein khareedti hoon.' },
    { de: 'Pfandflasche', art: 'die', gender: 'f', plural: 'Pfandflaschen', pos: 'noun', level: 'B1', en: 'deposit bottle', hi: 'जमानत बोतल', ex: 'Ich bringe die Pfandflaschen zurück.', exEn: 'I\'m bringing the deposit bottles back.', exHi: 'Main jamaanat botlein wapas le ja rahi hoon.' },
    { de: 'Plastikflasche', art: 'die', gender: 'f', plural: 'Plastikflaschen', pos: 'noun', level: 'B1', en: 'plastic bottle', hi: 'प्लास्टिक की बोतल', ex: 'Ich vermeide Plastikflaschen.', exEn: 'I avoid plastic bottles.', exHi: 'Main plastic botlon se bachti hoon.' },
    { de: 'Seite', art: 'die', gender: 'f', plural: 'Seiten', pos: 'noun', level: 'B1', en: 'side, page', hi: 'पक्ष / पृष्ठ', ex: 'Auf dieser Seite finden Sie Umwelttipps.', exEn: 'On this page, you\'ll find environmental tips.', exHi: 'Is page par, tumhein paryaavaran sujhaav milenge.' },
    { de: 'Sonnenenergie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'sun energy', hi: 'सूर्य ऊर्जा', ex: 'Sonnenenergie ist nachhaltig.', exEn: 'Sun energy is sustainable.', exHi: 'Surya oorja tikaau hai.' },
    { de: 'Steckdose', art: 'die', gender: 'f', plural: 'Steckdosen', pos: 'noun', level: 'B1', en: 'power outlet', hi: 'बिजली का सॉकेट', ex: 'Die Steckdose ist neben der Tür.', exEn: 'The power outlet is next to the door.', exHi: 'Bijli ka socket darwaaze ke paas hai.' },
    { de: 'Tonne', art: 'die', gender: 'f', plural: 'Tonnen', pos: 'noun', level: 'B1', en: 'ton, bin', hi: 'टन / कूड़ेदान', ex: 'Wir produzieren jedes Jahr Tonnen von Müll.', exEn: 'We produce tons of garbage every year.', exHi: 'Hum har saal tanno kachra paida karte hain.' },
    { de: 'Wahl', art: 'die', gender: 'f', plural: 'Wahlen', pos: 'noun', level: 'B1', en: 'choice', hi: 'चुनाव', ex: 'Wir müssen eine Wahl treffen.', exEn: 'We need to make a choice.', exHi: 'Humein ek chunaav karna hoga.' },
    { de: 'Ökobilanz', art: 'die', gender: 'f', plural: 'Ökobilanzen', pos: 'noun', level: 'B1', en: 'life-cycle assessment', hi: 'जीवन-चक्र मूल्यांकन', ex: 'Wir vergleichen die Ökobilanz beider Optionen.', exEn: 'We compare the life-cycle assessment of both options.', exHi: 'Hum dono vikalpon ki jeevan-chakra mulyaankan tulna karte hain.' },
    { de: 'haltbar', pos: 'adjective', level: 'B1', en: 'durable', hi: 'टिकाऊ', ex: 'Glasflaschen sind sehr haltbar.', exEn: 'Glass bottles are very durable.', exHi: 'Kaanch ki botlein bahut tikaau hoti hain.' },
    { de: 'krumm', pos: 'adjective', level: 'B1', en: 'crooked', hi: 'टेढ़ा', ex: 'Die Dose war krumm und beschädigt.', exEn: 'The can was crooked and damaged.', exHi: 'Dabba tedha aur kshatigrast tha.' },
    { de: 'recycelbar', pos: 'adjective', level: 'B1', en: 'recyclable', hi: 'पुनर्चक्रण योग्य', ex: 'Glasflaschen sind gut recycelbar.', exEn: 'Glass bottles are well recyclable.', exHi: 'Kaanch ki botlein achhi tarah recycle ho sakti hain.' },
    { de: 'zu tun haben', pos: 'idiom', level: 'B1', en: 'to have to do with (mit + D.)', hi: 'से संबंधित होना', ex: 'Das hat viel mit Nachhaltigkeit zu tun.', exEn: 'That has a lot to do with sustainability.', exHi: 'Iska tikaaupan se bahut sambandh hai.' },
    { de: 'Kaffeebecher', art: 'der', gender: 'm', plural: 'Kaffeebecher', pos: 'noun', level: 'B1', en: 'coffee cup', hi: 'कॉफ़ी कप', ex: 'Pfandbecher retten viele Kaffeebecher.', exEn: 'Deposit cups rescue many coffee cups.', exHi: 'Jamaanat cup kai coffee cupon ko bachaate hain.' },
    { de: 'Pfandbecher', art: 'der', gender: 'm', plural: 'Pfandbecher', pos: 'noun', level: 'B1', en: 'deposit cup', hi: 'जमानत कप', ex: 'Ich habe eine Idee: Pfandbecher statt Wegwerfbecher.', exEn: 'I have an idea: deposit cups instead of disposable cups.', exHi: 'Mere paas ek vichaar hai: disposable cup ki jagah jamaanat cup.' },
    { de: 'Satzanfang', art: 'der', gender: 'm', plural: 'Satzanfänge', pos: 'noun', level: 'B1', en: 'beginning of a sentence', hi: 'वाक्य की शुरुआत', ex: 'Der Satzanfang beginnt immer groß.', exEn: 'The beginning of a sentence always starts capitalized.', exHi: 'Vaakya ki shuruaat hamesha bade akshar se hoti hai.' },
    { de: 'Wegwerfbecher', art: 'der', gender: 'm', plural: 'Wegwerfbecher', pos: 'noun', level: 'B1', en: 'disposable cup', hi: 'डिस्पोज़ेबल कप', ex: 'Wegwerfbecher landen oft im Müll.', exEn: 'Disposable cups often end up in the trash.', exHi: 'Disposable cup aksar kachre mein pahunch jaate hain.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist eine Zweck-Angabe?',
      body: [ 'A purpose clause answers Why? For what purpose? Both um...zu and damit express the SAME kind of goal — the choice between them is purely mechanical.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['um … zu', '<span class="de">Ich lerne Deutsch, um in Deutschland zu arbeiten.</span>'],
          ['damit', '<span class="de">Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.</span>']
        ]
      },
      hinglish: 'Purpose clause batata hai ki koi kaam <b>kis liye</b> kiya jaa raha hai. um...zu aur damit dono SAME tarah ka goal express karte hain.'
    },
    {
      title: 'um … zu — gleiches Subjekt',
      body: [ 'um + Infinitiv + zu (bare infinitive, no separate subject) — used ONLY when the same person performs both actions.' ],
      table: {
        head: ['Formation', 'Example'],
        rows: [
          ['Hauptsatz, um … zu + Infinitiv', '<span class="de">Anna spart Geld, um ein Auto zu kaufen.</span>'],
          ['Trennbares Verb', '<span class="de">Rohan fährt früher los, um pünktlich anzukommen.</span>']
        ]
      },
      hinglish: 'um + Infinitiv + zu (bina alag subject ke) — sirf tab use hota hai jab dono kaam ek hi insaan kar raha ho.'
    },
    {
      title: 'damit — verschiedene Subjekte',
      body: [ 'damit + full subordinate clause with its own subject and finite verb at the end — used when the two clauses have DIFFERENT subjects.' ],
      table: {
        head: ['Formation', 'Example'],
        rows: [
          ['Hauptsatz, damit + Subjekt … Verb (Satzende)', '<span class="de">Anna spricht langsam, damit Rohan alles versteht.</span>'],
          ['', '<span class="de">Er schreibt alles auf, damit er nichts vergisst.</span>']
        ]
      },
      note: 'damit can technically be used even with the same subject, but um...zu is preferred and more natural whenever the subjects match.',
      hinglish: 'damit + poora subordinate clause apne subject aur finite verb ke saath end mein — jab dono clauses ke ALAG subjects hon.'
    },
    {
      title: 'Vergleich: gleiches vs. verschiedenes Subjekt',
      body: [ 'The exact same goal, expressed two ways — only the subject test changes which structure is grammatically required.' ],
      table: {
        head: ['Subject', 'Example'],
        rows: [
          ['Gleiches Subjekt', '<span class="de">Ich spare Geld, um ein Auto zu kaufen.</span>'],
          ['Verschiedene Subjekte', '<span class="de">Ich spare Geld, damit meine Schwester studieren kann.</span>']
        ]
      },
      hinglish: 'Bilkul wahi goal, do tareekon se express kiya gaya — sirf subject test yeh tay karta hai ki kaun sa structure chahiye.'
    },
    {
      title: 'Die Klarweg-Entscheidungshilfe (Flowchart)',
      body: [ 'One question decides the structure every time.' ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['Who performs BOTH actions?', ''],
          ['Same person?', 'YES → um … zu'],
          ['Different people?', 'NO → damit']
        ]
      },
      note: 'Memory trick: ONE person → um...zu. TWO people → damit.',
      hinglish: 'Ek sawaal har baar structure tay karta hai: Dono kaam kaun kar raha hai? Ek hi insaan → um...zu. Alag-alag log → damit.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from giving um...zu its own subject, dropping zu, using the wrong subject test, or blending the two structures.' ],
      mistakes: [
        { wrong: 'Ich lerne Deutsch, um ich in Deutschland arbeiten.', right: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', why: 'um...zu never has its own conjugated subject — only zu + bare Infinitiv.' },
        { wrong: 'Ich spare Geld, damit ein Auto kaufen.', right: 'Ich spare Geld, um ein Auto zu kaufen.', why: 'damit always needs a full clause with its own subject and finite verb — here the subject is the same, so um...zu is required instead.' },
        { wrong: 'Anna spricht langsam, um Rohan alles versteht.', right: 'Anna spricht langsam, damit Rohan alles versteht.', why: 'The subjects are different (Anna vs. Rohan) — damit is required, not um...zu.' },
        { wrong: 'Ich komme früh, um dass...', right: 'Ich komme früh, um pünktlich zu sein. / Ich komme früh, damit alle pünktlich beginnen können.', why: '"um dass" is not a valid German structure — it blends um...zu and dass incorrectly.' },
        { wrong: 'damit zu arbeiten', right: 'um zu arbeiten (same subject) / damit sie arbeiten kann (different subject)', why: 'damit is never followed directly by zu + Infinitiv — it always introduces a full clause with a conjugated verb.' }
      ],
      hinglish: 'Yeh paanch galtiyaan um...zu ko apna subject dene se, zu chhodne se, ya dono structures ko mix karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Purpose clauses appear constantly in Goethe B1 tasks about goals, plans, and reasons for action.' ],
      note: 'Quick check: same subject in both clauses? → um...zu. Different subjects? → damit. Never mix the two, and never write "um dass."',
      hinglish: 'Purpose clauses Goethe B1 tasks mein goals, plans, aur action ke reasons ke baare mein lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Nachhaltig leben',
    titleEn: 'Living sustainably',
    tokens: [
      { w: 'Viele', role: 'plain', en: 'many', hi: 'कई', type: 'Indefinitpronomen' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदते हैं', type: 'Verb · kaufen' },
      { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'Mehrwegflaschen', role: 'plain', en: 'reusable bottles', hi: 'पुन: उपयोगी बोतलें', type: 'Noun · plural', why: 'die Mehrwegflasche (this chapter).' },
      { w: ',', plain: true },
      { w: 'um', role: 'r-purpose', en: 'in order to', hi: 'ताकि', type: 'Konjunktion · um…zu', why: 'SAME subject (Menschen … Menschen).' },
      { w: 'Verschwendung', role: 'plain', en: 'waste', hi: 'बर्बादी', type: 'Noun · fem.', why: 'die Verschwendung (this chapter).' },
      { w: 'zu', role: 'r-purpose', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'vermeiden', role: 'r-purpose', en: 'to avoid (Satzende)', hi: 'बचना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'r-preposition', en: 'because of', hi: 'की वजह से', type: 'Präposition · Genitiv', why: 'wegen + Genitiv (recycled — Ch.5).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Artikel · Genitiv' },
      { w: 'wachsenden', role: 'r-adjective', en: 'growing', hi: 'बढ़ता हुआ', type: 'Adjective · schwach · Gen.', why: 'Weak declension: Genitiv → -en (recycled — Ch.12).' },
      { w: 'Müllbergs', role: 'plain', en: 'mountain of rubbish (gen.)', hi: 'कचरे के पहाड़ का', type: 'Noun · masc.', why: 'der Müllberg (this chapter).' },
      { w: 'trennen', role: 'r-verb', en: 'separate', hi: 'अलग करते हैं', type: 'Verb · trennen' },
      { w: 'immer', role: 'r-adverb', en: 'more and more', hi: 'ज़्यादा से ज़्यादा', type: 'Adverb' },
      { w: 'mehr', role: 'r-comparative', en: 'more', hi: 'ज़्यादा', type: 'Komparativ (unveränderlich)', why: 'viel → mehr — irregular comparative (recycled — Ch.14).' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: 'ihren', role: 'plain', en: 'their (masc. acc.)', hi: 'अपना', type: 'Possessivartikel · Akk.' },
      { w: 'Kunststoff', role: 'plain', en: 'plastic', hi: 'प्लास्टिक', type: 'Noun · masc.', why: 'der Kunststoff (this chapter).' },
      { w: 'sorgfältig', role: 'r-adjective', en: 'carefully', hi: 'ध्यान से', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'damit', role: 'r-purpose', en: 'so that', hi: 'ताकि', type: 'Konjunktion · damit', why: 'DIFFERENT subjects (Menschen … der Müllberg).' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Müllberg', role: 'plain', en: 'mountain of rubbish', hi: 'कचरे का पहाड़', type: 'Noun · masc.' },
      { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'weiter', role: 'r-adverb', en: 'further', hi: 'और', type: 'Adverb' },
      { w: 'wächst', role: 'r-purpose', en: 'grows (Satzende)', hi: 'बढ़ता (Satzende)', type: 'Verb · wachsen (Satzende, Nebensatz)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Indefinitpronomen' },
      { w: 'Firmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'installieren', role: 'r-verb', en: 'install', hi: 'लगाती हैं', type: 'Verb · installieren' },
      { w: 'Solarpanele', role: 'plain', en: 'solar panels', hi: 'सोलर पैनल', type: 'Noun · plural', why: 'das Solarpanel (this chapter).' },
      { w: ',', plain: true },
      { w: 'um', role: 'r-purpose', en: 'in order to', hi: 'ताकि', type: 'Konjunktion · um…zu', why: 'SAME subject (Firmen … Firmen).' },
      { w: 'Energiekosten', role: 'plain', en: 'energy costs', hi: 'ऊर्जा लागत', type: 'Noun · plural', why: 'die Energiekosten (this chapter).' },
      { w: 'zu', role: 'r-purpose', en: 'to', hi: '—', type: 'Infinitiv-Marker' },
      { w: 'senken', role: 'r-purpose', en: 'to lower (Satzende)', hi: 'कम करना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Andere', role: 'plain', en: 'others', hi: 'कुछ अन्य', type: 'Indefinitpronomen' },
      { w: 'gründen', role: 'r-verb', en: 'found, establish', hi: 'स्थापित करती हैं', type: 'Verb · gründen' },
      { w: 'ein', role: 'plain', en: 'a (neut. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Start-up', role: 'plain', en: 'start-up', hi: 'स्टार्टअप', type: 'Noun · neut.', why: 'das Start-up (this chapter).' },
      { w: ',', plain: true },
      { w: 'damit', role: 'r-purpose', en: 'so that', hi: 'ताकि', type: 'Konjunktion · damit', why: 'DIFFERENT subjects (Andere … Kunden).' },
      { w: 'Kunden', role: 'plain', en: 'customers', hi: 'ग्राहक', type: 'Noun · plural' },
      { w: 'nachhaltiger', role: 'r-comparative', en: 'more sustainably', hi: 'ज़्यादा टिकाऊ', type: 'Komparativ (Prädikat)', why: 'Comparative in predicate position, no ending needed (recycled — Ch.14).' },
      { w: 'leben', role: 'r-purpose', en: 'live (Satzende)', hi: 'जीना (Satzende)', type: 'Verb · leben (Satzende, Nebensatz)' },
      { w: 'können', role: 'r-purpose', en: 'can (Satzende)', hi: 'सक सकें (Satzende)', type: 'Verb · Modalverb (Satzende, Nebensatz)' },
      { w: '.', plain: true }
    ],
    translation: 'Many people today buy reusable bottles, in order to avoid waste. Because of the growing mountain of rubbish, more and more people carefully separate their plastic, so that the mountain of rubbish doesn\'t keep growing. Some companies install solar panels, in order to lower energy costs. Others found a start-up, so that customers can live more sustainably.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_017_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Antke, ich mache jetzt bei Carsharing mit, um Geld zu sparen.', en: 'Antke, I\'m joining car-sharing now to save money.' },
      { id: 'B1_017_L002', speaker: 'Antke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ehrlich? Ich habe immer gezögert, damit ich nicht in Verträge gebunden bin.', en: 'Really? I always hesitated so I wouldn\'t be tied to contracts.' },
      { id: 'B1_017_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Es gibt keine Bindung! Man zahlt nur, um das Auto wirklich zu nutzen.', en: 'There\'s no commitment! You only pay to actually use the car.' },
      { id: 'B1_017_L004', speaker: 'Antke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Interessant. Dann probiere ich es aus, damit ich es mit eigenen Augen sehe.', en: 'Interesting. Then I\'ll try it out so I can see it with my own eyes.' }
    ],
    transcript: 'Antke, ich mache jetzt bei Carsharing mit, um Geld zu sparen. Ehrlich? Ich habe immer gezögert, damit ich nicht in Verträge gebunden bin. Es gibt keine Bindung! Man zahlt nur, um das Auto wirklich zu nutzen. Interessant. Dann probiere ich es aus, damit ich es mit eigenen Augen sehe.',
    translation: 'Antke, I\'m joining car-sharing now to save money. Really? I always hesitated so I wouldn\'t be tied to contracts. There\'s no commitment! You only pay to actually use the car. Interesting. Then I\'ll try it out so I can see it with my own eyes.',
    tokens: [
      { w: 'Antke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'mache' },
      { w: 'jetzt' },
      { w: 'bei' },
      { w: 'Carsharing' },
      { w: 'mit' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'Geld' },
      { w: 'zu' },
      { w: 'sparen' },
      { w: '.', plain: true },
      { w: 'Ehrlich' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'immer' },
      { w: 'gezögert' },
      { w: ',', plain: true },
      { w: 'damit' },
      { w: 'ich' },
      { w: 'nicht' },
      { w: 'in' },
      { w: 'Verträge' },
      { w: 'gebunden' },
      { w: 'bin' },
      { w: '.', plain: true },
      { w: 'Es' },
      { w: 'gibt' },
      { w: 'keine' },
      { w: 'Bindung' },
      { w: '!', plain: true },
      { w: 'Man' },
      { w: 'zahlt' },
      { w: 'nur' },
      { w: ',', plain: true },
      { w: 'um' },
      { w: 'das' },
      { w: 'Auto' },
      { w: 'wirklich' },
      { w: 'zu' },
      { w: 'nutzen' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'probiere' },
      { w: 'ich' },
      { w: 'es' },
      { w: 'aus' },
      { w: ',', plain: true },
      { w: 'damit' },
      { w: 'ich' },
      { w: 'es' },
      { w: 'mit' },
      { w: 'eigenen' },
      { w: 'Augen' },
      { w: 'sehe' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum ist Timo beim Carsharing mitgemacht?', qEn: 'Why did Timo join car-sharing?', options: ['um Freunde zu treffen', 'um Geld zu sparen', 'um schneller zu fahren', 'um Umwelt zu schützen'], optionsEn: ['to meet friends', 'to save money', 'to drive faster', 'to protect the environment'], answer: 1,
        explain: '"… um Geld zu sparen."' },
      { q: 'Warum hatte Antke gezögert?', qEn: 'Why had Antke hesitated?', options: ['sie mag keine Autos', 'damit sie nicht in Verträge gebunden ist', 'sie hat kein Geld', 'sie kann nicht fahren'], optionsEn: ['she doesn\'t like cars', 'so that she isn\'t tied into contracts', 'she has no money', 'she can\'t drive'], answer: 1,
        explain: '"… damit ich nicht in Verträge gebunden bin."' }
    ]
  },

  speaking: [
    { task: "Ein Freund fragt, warum du bei Carsharing mitmachst.", taskEn: "A friend asks why you're joining a car-sharing scheme.", de: "Ich mache mit, um Geld zu sparen.", en: "I'm joining in order to save money." },
    { task: "Deine Freundin zögert wegen der Verträge. Beruhige sie.", taskEn: "Your friend hesitates because of the contracts. Reassure her.", de: "Man zahlt nur, um das Auto zu nutzen, damit man nicht gebunden ist.", en: "You only pay in order to use the car, so that you're not tied in." },
    { task: "Eine Kollegin fragt, warum du Ökostrom nimmst.", taskEn: "A colleague asks why you use green electricity.", de: "Ich nehme Ökostrom, um Verschwendung zu vermeiden.", en: "I use green electricity in order to avoid waste." },
    { task: "Dein Nachbar fragt, warum du weniger heizt.", taskEn: "Your neighbour asks why you heat less.", de: "Ich heize weniger, damit der Stromverbrauch sinkt.", en: "I heat less so that electricity consumption falls." },
    { task: "Ein Freund fragt, warum du keine gedruckten Rechnungen willst.", taskEn: "A friend asks why you don't want printed invoices.", de: "Ich nehme elektronische Rechnungen, um Papier zu sparen.", en: "I take electronic invoices in order to save paper." },
    { task: "Deine Freundin fragt nach einem Umwelttipp für die Küche.", taskEn: "Your friend asks for an environmental tip for the kitchen.", de: "Koche mit Deckel, damit das Wasser schneller warm wird.", en: "Cook with the lid on, so the water heats faster." },
    { task: "Rollenspiel: Ihr plant eine nachhaltige Aktion im Haus.", taskEn: "Role-play: you plan a sustainable initiative in the building.", de: "Wir sammeln Papier, um es zu recyceln, damit weniger im Müll landet.", en: "We'll collect paper in order to recycle it, so less ends up in the bin." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short text (six to eight sentences) — a study plan, career plan, or sustainability plan — using at least four purpose clauses (some um...zu, some damit, based correctly on same vs. different subjects).',
    starters: ['Ich lerne Deutsch, um …', 'Ich erkläre …, damit …', 'Wir werden …, um …'],
    placeholder: 'Ich lerne jeden Tag Deutsch, um in Deutschland zu arbeiten. Ich erkläre meiner Familie die Grammatik, damit …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Ich spare Geld, ___ ein Auto zu kaufen." (same subject)',
      options: ['damit', 'um', 'weil'],
      answer: 1,
      explain: 'Same subject in both clauses → um...zu.'
    },
    gap: {
      sentence: ['Anna spricht langsam, ', ' Rohan alles versteht.'],
      gaps: [ { answer: 'damit', accepts: ['damit'] } ],
      explain: 'Different subjects (Anna vs. Rohan) → damit.'
    },
    match: {
      q: 'Match each situation to the correct structure.',
      pairs: [
        { noun: 'Same subject', art: 'um … zu' },
        { noun: 'Different subjects', art: 'damit' }
      ]
    },
    builder: {
      target: 'Build: "I save money, in order to buy a car."',
      bank: ['Ich', 'spare', 'Geld', ',', 'um', 'ein', 'Auto', 'zu', 'kaufen', '.'],
      answer: ['Ich', 'spare', 'Geld', ',', 'um', 'ein', 'Auto', 'zu', 'kaufen', '.'],
      roles: { 'um': 'r-purpose', 'zu': 'r-purpose', 'kaufen': 'r-purpose' }
    },
    umZuToDamit: {
      title: 'Transform: um...zu → damit',
      prompt: 'Rewrite with a different subject: "Ich spare Geld, um ein Auto zu kaufen." (make it: so that my sister can study)',
      answer: 'Ich spare Geld, damit meine Schwester studieren kann.',
      explain: 'When the subjects differ (ich vs. meine Schwester), damit is required instead of um...zu.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Anna spricht langsam, um Rohan alles versteht.',
      right: 'Anna spricht langsam, damit Rohan alles versteht.',
      explain: 'The subjects are different (Anna vs. Rohan) — damit is required, not um...zu.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten."', options: ['damit', 'um', 'weil'], answer: 1,
      explain: 'Same subject (ich … ich) → um...zu.' },
    { q: 'Complete: "Ich erkläre die Grammatik, ___ die Schüler sie verstehen."', options: ['um', 'damit', 'dass'], answer: 1,
      explain: 'Different subjects (ich … die Schüler) → damit.' },
    { q: 'Which sentence is correct?', options: ['Ich spare Geld, um ich ein Auto kaufe.', 'Ich spare Geld, um ein Auto zu kaufen.', 'Ich spare Geld, um ein Auto kaufen.'], answer: 1,
      explain: 'um...zu needs zu + Infinitiv, with no separate conjugated subject.' },
    { q: 'Which sentence has correct word order for damit?', options: ['damit Rohan versteht alles', 'damit Rohan alles versteht', 'damit versteht Rohan alles'], answer: 1,
      explain: 'damit sends the finite verb to the very end of its clause, like any subordinate clause.' },
    { q: 'Which sentence contains an error?', options: ['Ich lerne Deutsch, um zu arbeiten.', 'Anna spricht langsam, um Rohan versteht.', 'Wir sparen, damit unsere Kinder studieren können.'], answer: 1,
      explain: 'Different subjects (Anna vs. Rohan) require damit, not um...zu — it should be "damit Rohan versteht."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-purpose', html: 'um + Infinitiv + zu — used ONLY when the SAME subject performs both actions. No separate conjugated subject inside um...zu.' },
    { c: 'r-purpose', html: 'damit + full clause, verb at the end — used when the two clauses have DIFFERENT subjects.' },
    { c: 'r-purpose', html: 'One test decides it every time: same person? → um...zu. Different people? → damit.' }
  ],
  revisionTips: [
    'Before choosing a structure, always ask: who does BOTH actions? If it\'s the same person, um...zu; if not, damit.',
    'Practise transforming five um...zu sentences into damit sentences (and back) by changing the second subject.',
    'Watch for the "um dass" trap — it doesn\'t exist in German; it\'s always either um...zu or damit, never a blend.'
  ]
};

window.CHAPTER = CHAPTER;
