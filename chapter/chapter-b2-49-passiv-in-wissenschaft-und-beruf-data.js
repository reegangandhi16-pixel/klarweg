/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 49
   "Passiv in Wissenschaft & Beruf" — INTEGRATION chapter.
   No new grammar: reviews and combines Vorgangspassiv,
   Zustandspassiv, sich-lassen-Passiversatz, Unpersönliches
   Passiv, bekommen-/kriegen-Passiv, and haben+zu/sein+zu,
   teaching WHEN to choose each in academic vs professional
   German.
   IMPORTANT: dialogue uses ONLY Antje and Timo.
   Vocabulary source: uploaded Chapter 49 list (62 items).
============================================================ */
const CHAPTER = {
  id: 'b2-49-passiv-in-wissenschaft-und-beruf',
  phase: 'B2 · Phase 5',
  number: 49,
  title: 'Passiv in Wissenschaft & Beruf',
  titleEn: 'Passive voice in science & the workplace',
  description: 'Seven passive structures, one decision: which one fits this sentence?',
  xp: 580,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 50, title: 'Nominalisierung', titleEn: 'Verb → noun / adjective → noun' , href: 'chapter-b2-50-nominalisierung.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Seven tools. <em>One</em> right choice each time.',
    intro: 'Antje and Timo prepare a research presentation and internship report side by side, moving fluidly through every passive structure they know — the experiment being carried out now, the results soon to be published.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear all six B2 passive alternatives used naturally, side by side'
    ],
    scene: 'Vor der Präsentation',
    femaleSpeakers: ['Antje'],
    dialogue: [
      { speaker: 'Antje', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Experiment', role: 'r-subject', en: 'experiment', hi: 'प्रयोग', pron: 'eks-pe-ri-MENT', type: 'Noun · neut.' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जा रहा है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'gerade', role: 'r-adverb', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'durchgeführt', role: 'r-verb', en: 'carried out', hi: 'किया जा रहा', pron: 'DOORKH-ge-fürt', type: 'Partizip II', why: 'durchführen → durchgeführt = to carry out (this chapter, formal/scientific Passiv).', ex: 'Das Experiment wird durchgeführt.', exEn: 'The experiment is being carried out.' },
        { w: '.', plain: true }
      ], en: 'The experiment is being carried out right now.', hi: 'Prayog abhi kiya ja raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Effekt', role: 'r-subject', en: 'effect', hi: 'प्रभाव', pron: 'e-FEKT', type: 'Noun · masc.' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'gemessen', role: 'r-verb', en: 'measured', hi: 'मापा', pron: 'ge-ME-sen', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Is the effect measured precisely?', hi: 'Kya prabhaav theek se maapa jaata hai?' },
      { speaker: 'Antje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'werden', role: 'r-verb', en: 'are', hi: 'किए जाते हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv Präsens, plural)' },
        { w: 'anschließend', role: 'r-akkusativ', en: 'subsequently', hi: 'उसके बाद', pron: 'AN-shlee-sent', type: 'Adverb', why: 'anschließend = subsequently (this chapter).', ex: 'Die Ergebnisse werden anschließend ausgewertet.', exEn: 'The results are subsequently evaluated.' },
        { w: 'ausgewertet', role: 'r-verb', en: 'evaluated', hi: 'विश्लेषित', pron: 'OWS-ge-vair-tet', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Yes, and the results are subsequently evaluated.', hi: 'Haan, aur parinaam uske baad vishleshit kiye jaate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wurde', role: 'r-verb', en: 'was', hi: 'किया गया था', pron: 'VUR-duh', type: 'Verb · werden (Passiv Präteritum)' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Verfahren', role: 'r-subject', en: 'procedure', hi: 'प्रक्रिया', pron: 'fer-FAH-ren', type: 'Noun · neut.' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'getestet', role: 'r-verb', en: 'tested', hi: 'जांचा', pron: 'ge-TES-tet', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'Was the procedure already tested?', hi: 'Kya prakriya pehle se jaanchi gayi thi?' },
      { speaker: 'Antje', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'has', hi: 'है', pron: 'ist', type: 'Verb · sein (helper)' },
        { w: 'von', role: 'r-preposition', en: 'by', hi: 'द्वारा', pron: 'fon', type: 'Preposition + dative' },
        { w: 'unserem', role: 'r-dativ', en: 'our (masc. dat.)', hi: 'हमारे', pron: 'UN-ze-raym', type: 'Possessive · dative' },
        { w: 'Team', role: 'r-dativ', en: 'team (dat.)', hi: 'टीम द्वारा', pron: 'teem', type: 'Noun · neut. dat.' },
        { w: 'mehrmals', role: 'r-akkusativ', en: 'multiple times', hi: 'कई बार', pron: 'MAIR-mahls', type: 'Adverb' },
        { w: 'getestet', role: 'r-verb', en: 'tested', hi: 'जांचा', pron: 'ge-TES-tet', type: 'Partizip II' },
        { w: 'worden', role: 'r-verb', en: 'been', hi: '', pron: 'VOR-den', type: 'Partizip II · werden (Passiv Perfekt, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, it has been tested multiple times by our team.', hi: 'Haan, humaari team dwara kayi baar jaancha ja chuka hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता है', pron: 'kan', type: 'Modal · können' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'veröffentlicht', role: 'r-verb', en: 'published', hi: 'प्रकाशित', pron: 'fer-Ö-fent-likht', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'किया जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Perfect! Then the report can soon be published.', hi: 'Badhiya! Toh report jald prakaashit ki ja sakti hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Seven B2 passive structures, one decision: <span class="de r-vorgang">Vorgangspassiv</span> (process) · <span class="de r-zustand">Zustandspassiv</span> (result) · <span class="de r-lassen">sich lassen</span> (possibility) · <span class="de r-impersonal">Unpersönliches Passiv</span> (general activity) · <span class="de r-bekommen">bekommen-Passiv</span> (recipient) · <span class="de r-habenzu">haben + zu</span> (responsibility) · <span class="de r-seinzu">sein + zu</span> (required task). Academic and professional German never uses just one — the CONTEXT chooses the structure.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is an INTEGRATION chapter combining all B2 passive structures learned so far: Vorgangspassiv (werden + Partizip II, process), Zustandspassiv (sein + Partizip II, result), Passiversatz mit sich lassen (possibility), Unpersönliches Passiv ((es) + werden + Partizip II, general activity with no subject), bekommen-/kriegen-/erhalten-Passiv (recipient as subject), and Modalitätsersatz haben+zu/sein+zu (responsibility vs required task). This chapter introduces NO new grammar — it is purely about choosing the RIGHT structure for the context (academic vs professional German). ' +
    'The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- For each passive-like sentence, check whether the learner chose the structure that matches their intended meaning (process vs result vs possibility vs general activity vs recipient vs responsibility vs task) — flag only genuine mismatches, not stylistic preferences.\n' +
    '- Check standard formation rules for whichever structure was used (correct auxiliary, Partizip II or Infinitiv placement, "zu" placement for haben+zu/sein+zu, "sich" for sich lassen).\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Structure-choice check:</b> one sentence on whether the learner varied their passive structures appropriately instead of overusing one.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you fluidly choose the right passive structure for the context. Ready for the Phase 5 checkpoint next.',
    mid: 'Good. Re-read the Master Comparison Table once, then continue.',
    low: 'Worth another pass through the Grammar section — walk through the Decision Flowchart for each sentence type.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Daten', role: 'plain' }, { w: 'werden', role: 'r-vorgang' },
    { w: 'analysiert', role: 'r-vorgang' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: seven structures, one decision each time — which fits the context?' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Antje and Timo move fluidly between all six passive alternatives while preparing two projects.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 62 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Review all seven structures side by side and master the decision flowchart for choosing between them.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific research report and a corporate project report integrating multiple passive structures.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify which passive structure is used and why, across a lecture and a business meeting.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present research and give project updates choosing the appropriate passive structure naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a scientific report and a formal company report choosing structures by context, not by habit.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct passive and academic-vs-business rewriting.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 580 XP.' },
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
      desc: 'Structure-choice drills, academic/business rewriting, and a report-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete master comparison table and decision flowchart for all seven passive structures.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Die Daten werden analysiert. / Die Daten sind analysiert.', text: 'Choose Vorgangspassiv (process) vs Zustandspassiv (result) correctly' },
    { de: 'Die Studie lässt sich replizieren.', text: 'Use sich lassen for possibility, more elegantly than können + Passiv' },
    { de: 'Im Labor wird gearbeitet.', text: 'Use Unpersönliches Passiv when no subject matters at all' },
    { de: 'Der Professor bekommt den Bericht vorgelegt.', text: 'Use bekommen-Passiv to foreground the recipient' },
    { de: 'haben + zu (responsibility) vs sein + zu (task)', text: 'Pick the right Modalitätsersatz for academic and professional writing' }
  ],

  // ---------- Vocabulary (62 items — uploaded chapter-49 list) ----------
  vocab: [
    { de: 'verfügen', pos: 'verb', level: 'B2', register: 'written', en: 'to have at one\'s disposal, decree', hi: 'निर्णय लेना, उपलब्ध होना', ex: 'Das Labor verfügt über moderne Geräte.', exEn: 'The laboratory has modern equipment at its disposal.', exHi: 'Prayogshala ke paas aadhunik upkaran hain.', ex2: 'Die Regierung hat neue Regeln verfügt.', ex2En: 'The government has decreed new rules.', ex2Hi: 'Sarkaar ne naye niyam jaari kiye hain.', conj: { praesens: 'verfügt', praeteritum: 'verfügte', perfekt: 'hat verfügt' } },
    { de: 'vergehen', pos: 'verb', level: 'B2', register: 'written', en: 'to pass, elapse', hi: 'बीत जाना', ex: 'Die Zeit verging schnell.', exEn: 'Time passed quickly.', exHi: 'Samay tezi se beet gaya.', ex2: 'Ein Jahr ist vergangen.', ex2En: 'A year has passed.', ex2Hi: 'Ek saal beet chuka hai.', conj: { praesens: 'vergeht', praeteritum: 'verging', perfekt: 'ist vergangen' } },
    { de: 'vermehren', pos: 'verb', level: 'B2', register: 'written', en: 'to multiply, increase', hi: 'बढ़ाना', ex: 'Die Bakterien vermehrten sich schnell.', exEn: 'The bacteria multiplied quickly.', exHi: 'Bacteria tezi se badh gaye.', ex2: 'Sie haben ihr Vermögen vermehrt.', ex2En: 'They\'ve increased their wealth.', ex2Hi: 'Unhone apni sampatti badhaayi hai.', conj: { praesens: 'vermehrt', praeteritum: 'vermehrte', perfekt: 'hat vermehrt' } },
    { de: 'verpennen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to oversleep (slang)', hi: 'देर तक सो जाना', ex: 'Er hat total verpennt.', exEn: 'He\'s totally overslept.', exHi: 'Woh bilkul der tak so gaya.', ex2: 'Sie haben den Termin verpennt.', ex2En: 'They\'ve missed the appointment by oversleeping.', ex2Hi: 'Woh so kar appointment chook gaye.', conj: { praesens: 'verpennt', praeteritum: 'verpennte', perfekt: 'hat verpennt' } },
    { de: 'Verschwendung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'waste, squandering', hi: 'बर्बादी', ex: 'Das ist reine Verschwendung.', exEn: 'That is pure waste.', exHi: 'Yeh bilkul bardaadi hai.', ex2: 'Sie haben die Verschwendung reduziert.', ex2En: 'They\'ve reduced the waste.', ex2Hi: 'Unhone bardaadi kam ki hai.' },
    { de: 'versinken', pos: 'verb', level: 'B2', register: 'written', en: 'to sink, be submerged', hi: 'डूब जाना', ex: 'Das Schiff versank langsam.', exEn: 'The ship sank slowly.', exHi: 'Jahaaz dheere doob gaya.', ex2: 'Sie sind im Chaos versunken.', ex2En: 'They\'ve sunk into chaos.', ex2Hi: 'Woh afraatafri mein doob gaye hain.', conj: { praesens: 'versinkt', praeteritum: 'versank', perfekt: 'ist versunken' } },
    { de: 'vertreten', pos: 'verb', level: 'B2', register: 'written', en: 'to represent, stand in for', hi: 'प्रतिनिधित्व करना', ex: 'Sie vertrat das Unternehmen.', exEn: 'She represented the company.', exHi: 'Usne company ka pratinidhitv kiya.', ex2: 'Er hat seinen Kollegen vertreten.', ex2En: 'He\'s stood in for his colleague.', ex2Hi: 'Usne apne sahyogi ki jagah li hai.', conj: { praesens: 'vertritt', praeteritum: 'vertrat', perfekt: 'hat vertreten' } },
    { de: 'Vision', art: 'die', gender: 'f', plural: 'Visionen', pos: 'noun', level: 'B2', register: 'written', en: 'vision', hi: 'दृष्टि', ex: 'Sie hatte eine klare Vision.', exEn: 'She had a clear vision.', exHi: 'Uske paas ek spasht drishti thi.', ex2: 'Sie haben eine gemeinsame Vision entwickelt.', ex2En: 'They\'ve developed a shared vision.', ex2Hi: 'Unhone ek saanjhi drishti vikasit ki hai.' },
    { de: 'wackeln', pos: 'verb', level: 'B2', register: 'both', en: 'to wobble, shake', hi: 'हिलना', ex: 'Der Tisch wackelte.', exEn: 'The table wobbled.', exHi: 'Table hil raha tha.', ex2: 'Sie haben den Tisch stabilisiert, damit er nicht wackelt.', ex2En: 'They\'ve stabilised the table so it doesn\'t wobble.', ex2Hi: 'Unhone table sthir kiya taaki woh na hile.', conj: { praesens: 'wackelt', praeteritum: 'wackelte', perfekt: 'hat gewackelt' } },
    { de: 'wälzen', pos: 'verb', level: 'B2', register: 'both', en: 'to roll, heave, pore over', hi: 'लुढ़काना, गहराई से पढ़ना', ex: 'Sie wälzte Bücher für die Prüfung.', exEn: 'She pored over books for the exam.', exHi: 'Usne pareeksha ke liye kitaabein gahraai se padhi.', ex2: 'Er hat den Stein gewälzt.', ex2En: 'He\'s rolled the stone.', ex2Hi: 'Usne patthar ludhkaaya hai.', conj: { praesens: 'wälzt', praeteritum: 'wälzte', perfekt: 'hat gewälzt' } },
    { de: 'wegwerfen', pos: 'verb', level: 'B2', register: 'both', en: 'to throw away', hi: 'फेंक देना', ex: 'Sie warf die alten Papiere weg.', exEn: 'She threw away the old papers.', exHi: 'Usne puraane kaagazaat phenke.', ex2: 'Sie haben viel Essen weggeworfen.', ex2En: 'They\'ve thrown away a lot of food.', ex2Hi: 'Unhone bahut saara khaana phenka hai.', conj: { praesens: 'wirft weg', praeteritum: 'warf weg', perfekt: 'hat weggeworfen' } },
    { de: 'wenden', pos: 'verb', level: 'B2', register: 'both', en: 'to turn', hi: 'मोड़ना', ex: 'Sie wendete das Auto.', exEn: 'She turned the car around.', exHi: 'Usne car ghumaayi.', ex2: 'Sie haben sich an die Behörde gewendet.', ex2En: 'They\'ve turned to the authority.', ex2Hi: 'Woh adhikaari ki taraf mude hain.', conj: { praesens: 'wendet', praeteritum: 'wendete', perfekt: 'hat gewendet' } },
    { de: 'zerfallen', pos: 'verb', level: 'B2', register: 'written', en: 'to disintegrate, decay', hi: 'बिखर जाना', ex: 'Das Gebäude zerfiel langsam.', exEn: 'The building decayed slowly.', exHi: 'Imaarat dheere dheere bikhar gayi.', ex2: 'Das Reich ist zerfallen.', ex2En: 'The empire has disintegrated.', ex2Hi: 'Saamraajya bikhar gaya hai.', conj: { praesens: 'zerfällt', praeteritum: 'zerfiel', perfekt: 'ist zerfallen' } },
    { de: 'absolvieren', pos: 'verb', level: 'B2', register: 'written', en: 'to complete, graduate', hi: 'पूरा करना, स्नातक होना', ex: 'Sie absolvierte ihr Studium.', exEn: 'She completed her studies.', exHi: 'Usne apni padhaai poori ki.', ex2: 'Er hat die Ausbildung absolviert.', ex2En: 'He\'s completed the training.', ex2Hi: 'Usne prashikshan poora kiya hai.', conj: { praesens: 'absolviert', praeteritum: 'absolvierte', perfekt: 'hat absolviert' } },
    { de: 'abstrakt', pos: 'adjective', level: 'B2', register: 'written', en: 'abstract', hi: 'अमूर्त', ex: 'Das Konzept ist sehr abstrakt.', exEn: 'The concept is very abstract.', exHi: 'Yeh avdhaarna bahut amoort hai.', ex2: 'Sie haben ein abstraktes Kunstwerk gemalt.', ex2En: 'They\'ve painted an abstract artwork.', ex2Hi: 'Unhone ek amoort kalaakriti banaayi hai.' },
    { de: 'akustisch', pos: 'adjective', level: 'B2', register: 'written', en: 'acoustic', hi: 'ध्वनि संबंधी', ex: 'Der Raum hatte gute akustische Eigenschaften.', exEn: 'The room had good acoustic properties.', exHi: 'Kamre mein achhi dhwani gunwatta thi.', ex2: 'Sie haben ein akustisches Signal gemessen.', ex2En: 'They\'ve measured an acoustic signal.', ex2Hi: 'Unhone ek dhwani sanket maapa hai.' },
    { de: 'analytisch', pos: 'adjective', level: 'B2', register: 'written', en: 'analytical', hi: 'विश्लेषणात्मक', ex: 'Sie hat einen analytischen Verstand.', exEn: 'She has an analytical mind.', exHi: 'Uska dimaag vishleshanaatmak hai.', ex2: 'Sie haben eine analytische Methode entwickelt.', ex2En: 'They\'ve developed an analytical method.', ex2Hi: 'Unhone ek vishleshanaatmak vidhi vikasit ki hai.' },
    { de: 'ankündigen', pos: 'verb', level: 'B2', register: 'written', en: 'to announce', hi: 'घोषणा करना', ex: 'Sie kündigte das Ergebnis an.', exEn: 'She announced the result.', exHi: 'Usne parinaam ghoshit kiya.', ex2: 'Sie haben eine neue Studie angekündigt.', ex2En: 'They\'ve announced a new study.', ex2Hi: 'Unhone ek nayi study ghoshit ki hai.', conj: { praesens: 'kündigt an', praeteritum: 'kündigte an', perfekt: 'hat angekündigt' } },
    { de: 'ansprechen', pos: 'verb', level: 'B2', register: 'both', en: 'to address, speak to', hi: 'संबोधित करना', ex: 'Sie sprach das Problem an.', exEn: 'She addressed the problem.', exHi: 'Usne samasya ka zikr kiya.', ex2: 'Er hat den Professor angesprochen.', ex2En: 'He\'s spoken to the professor.', ex2Hi: 'Usne professor se baat ki hai.', conj: { praesens: 'spricht an', praeteritum: 'sprach an', perfekt: 'hat angesprochen' } },
    { de: 'arg', pos: 'adverb', level: 'B2', register: 'both', en: 'badly, very', hi: 'बुरी तरह', ex: 'Sie war arg enttäuscht.', exEn: 'She was very disappointed.', exHi: 'Woh bahut nirash thi.', ex2: 'Es hat arg geregnet.', ex2En: 'It rained badly.', ex2Hi: 'Bahut zyaada baarish hui.' },
    { de: 'Atombombe', art: 'die', gender: 'f', plural: 'Atombomben', pos: 'noun', level: 'B2', register: 'written', en: 'atomic bomb', hi: 'परमाणु बम', ex: 'Die Atombombe veränderte die Geschichte.', exEn: 'The atomic bomb changed history.', exHi: 'Parmaanu bomb ne itihaas badla.', ex2: 'Sie haben über die Atombombe diskutiert.', ex2En: 'They\'ve discussed the atomic bomb.', ex2Hi: 'Unhone parmaanu bomb par charcha ki hai.' },
    { de: 'Atomenergie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'nuclear energy', hi: 'परमाणु ऊर्जा', ex: 'Die Atomenergie ist umstritten.', exEn: 'Nuclear energy is controversial.', exHi: 'Parmaanu oorja vivaadaaspad hai.', ex2: 'Sie haben in Atomenergie investiert.', ex2En: 'They\'ve invested in nuclear energy.', ex2Hi: 'Unhone parmaanu oorja mein nivesh kiya hai.' },
    { de: 'Atomkraftwerk', art: 'das', gender: 'n', plural: 'Atomkraftwerke', pos: 'noun', level: 'B2', register: 'written', en: 'nuclear power plant', hi: 'परमाणु ऊर्जा संयंत्र', ex: 'Das Atomkraftwerk wurde abgeschaltet.', exEn: 'The nuclear power plant was shut down.', exHi: 'Parmaanu oorja sanyantr band kiya gaya.', ex2: 'Sie haben ein neues Atomkraftwerk gebaut.', ex2En: 'They\'ve built a new nuclear power plant.', ex2Hi: 'Unhone ek naya parmaanu oorja sanyantr banaaya hai.' },
    { de: 'Atommeiler', art: 'der', gender: 'm', plural: 'Atommeiler', pos: 'noun', level: 'B2', register: 'written', en: 'reactor, nuclear pile', hi: 'परमाणु रिएक्टर', ex: 'Der Atommeiler wurde untersucht.', exEn: 'The reactor was examined.', exHi: 'Reactor ki jaanch ki gayi.', ex2: 'Sie haben den Atommeiler modernisiert.', ex2En: 'They\'ve modernised the reactor.', ex2Hi: 'Unhone reactor ko aadhunik banaaya hai.' },
    { de: 'Aufbau', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'structure, build-up', hi: 'संरचना', ex: 'Der Aufbau des Experiments war komplex.', exEn: 'The structure of the experiment was complex.', exHi: 'Prayog ki sanrachna jatil thi.', ex2: 'Sie haben den Aufbau erklärt.', ex2En: 'They\'ve explained the structure.', ex2Hi: 'Unhone sanrachna samjhaayi hai.' },
    { de: 'ausgewechselt', pos: 'adjective', level: 'B2', register: 'written', en: 'substituted, swapped out', hi: 'बदला हुआ', ex: 'Der Sensor wurde ausgewechselt.', exEn: 'The sensor was swapped out.', exHi: 'Sensor badla gaya.', ex2: 'Sie haben das Bauteil ausgewechselt.', ex2En: 'They\'ve substituted the component.', ex2Hi: 'Unhone hissa badla hai.' },
    { de: 'ausreichend', pos: 'adjective', level: 'B2', register: 'written', en: 'sufficient', hi: 'पर्याप्त', ex: 'Die Ergebnisse waren ausreichend.', exEn: 'The results were sufficient.', exHi: 'Parinaam paryaapt the.', ex2: 'Sie haben ausreichend Daten gesammelt.', ex2En: 'They\'ve collected sufficient data.', ex2Hi: 'Unhone paryaapt data ekatra kiya hai.' },
    { de: 'ausschlafen', pos: 'verb', level: 'B2', register: 'both', en: 'to sleep in', hi: 'देर तक सोना', ex: 'Sie schlief am Wochenende aus.', exEn: 'She slept in on the weekend.', exHi: 'Woh weekend par der tak soyi.', ex2: 'Er hat endlich ausgeschlafen.', ex2En: 'He\'s finally slept in.', ex2Hi: 'Woh aakhirkaar der tak soya hai.', conj: { praesens: 'schläft aus', praeteritum: 'schlief aus', perfekt: 'hat ausgeschlafen' } },
    { de: 'außergewöhnlich', pos: 'adjective', level: 'B2', register: 'both', en: 'extraordinary', hi: 'असाधारण', ex: 'Das Ergebnis war außergewöhnlich.', exEn: 'The result was extraordinary.', exHi: 'Parinaam asaadharan tha.', ex2: 'Sie haben eine außergewöhnliche Leistung gezeigt.', ex2En: 'They\'ve shown an extraordinary performance.', ex2Hi: 'Unhone asaadharan pradarshan dikhaaya hai.' },
    { de: 'Ausweis', art: 'der', gender: 'm', plural: 'Ausweise', pos: 'noun', level: 'B2', register: 'both', en: 'ID card', hi: 'पहचान पत्र', ex: 'Sie zeigte ihren Ausweis.', exEn: 'She showed her ID card.', exHi: 'Usne apna pehchaan patra dikhaaya.', ex2: 'Sie haben einen neuen Ausweis beantragt.', ex2En: 'They\'ve applied for a new ID card.', ex2Hi: 'Unhone ek naya pehchaan patra ke liye aavedan kiya hai.' },
    { de: 'Bakterie', art: 'die', gender: 'f', plural: 'Bakterien', pos: 'noun', level: 'B2', register: 'written', en: 'bacterium', hi: 'जीवाणु', ex: 'Die Bakterien vermehrten sich schnell.', exEn: 'The bacteria multiplied quickly.', exHi: 'Bacteria tezi se badh gaye.', ex2: 'Sie haben die Bakterie identifiziert.', ex2En: 'They\'ve identified the bacterium.', ex2Hi: 'Unhone bacteria ki pehchaan ki hai.' },
    { de: 'Bauwerk', art: 'das', gender: 'n', plural: 'Bauwerke', pos: 'noun', level: 'B2', register: 'written', en: 'structure, edifice', hi: 'भवन संरचना', ex: 'Das Bauwerk war beeindruckend.', exEn: 'The structure was impressive.', exHi: 'Yeh bhavan sanrachna prabhaavshaali thi.', ex2: 'Sie haben ein historisches Bauwerk besichtigt.', ex2En: 'They\'ve visited a historical structure.', ex2Hi: 'Unhone ek aitihaasik bhavan dekha hai.' },
    { de: 'Becher', art: 'der', gender: 'm', plural: 'Becher', pos: 'noun', level: 'B2', register: 'both', en: 'cup, mug', hi: 'प्याला', ex: 'Sie trank aus einem Becher.', exEn: 'She drank from a cup.', exHi: 'Usne pyaale se piya.', ex2: 'Sie haben neue Becher gekauft.', ex2En: 'They\'ve bought new cups.', ex2Hi: 'Unhone naye pyaale khareede hain.' },
    { de: 'Bedarf', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'need, demand', hi: 'आवश्यकता', ex: 'Es gibt großen Bedarf an Fachkräften.', exEn: 'There is great demand for skilled workers.', exHi: 'Kushal karmchaariyon ki bahut zaroorat hai.', ex2: 'Sie haben den Bedarf ermittelt.', ex2En: 'They\'ve determined the need.', ex2Hi: 'Unhone zaroorat nirdhaarit ki hai.' },
    { de: 'bedroht', pos: 'adjective', level: 'B2', register: 'written', en: 'threatened, endangered', hi: 'खतरे में', ex: 'Die Art war vom Aussterben bedroht.', exEn: 'The species was threatened with extinction.', exHi: 'Prajaati vilupt hone ke khatre mein thi.', ex2: 'Sie haben bedrohte Tierarten geschützt.', ex2En: 'They\'ve protected endangered animal species.', ex2Hi: 'Unhone khatre mein prajaatiyon ki raksha ki hai.' },
    { de: 'Beleg', art: 'der', gender: 'm', plural: 'Belege', pos: 'noun', level: 'B2', register: 'written', en: 'receipt, proof', hi: 'रसीद, प्रमाण', ex: 'Sie bewahrte den Beleg auf.', exEn: 'She kept the receipt.', exHi: 'Usne raseed sambhaal kar rakhi.', ex2: 'Sie haben Belege für ihre Ausgaben gesammelt.', ex2En: 'They\'ve collected proof of their expenses.', ex2Hi: 'Unhone apne kharch ke liye pramaan ekatra kiye hain.' },
    { de: 'beleuchten', pos: 'verb', level: 'B2', register: 'written', en: 'to illuminate, shed light on', hi: 'रोशन करना', ex: 'Der Bericht beleuchtete das Thema.', exEn: 'The report shed light on the topic.', exHi: 'Report ne vishay par prakaash daala.', ex2: 'Sie haben den Raum beleuchtet.', ex2En: 'They\'ve illuminated the room.', ex2Hi: 'Unhone kamra roshan kiya hai.', conj: { praesens: 'beleuchtet', praeteritum: 'beleuchtete', perfekt: 'hat beleuchtet' } },
    { de: 'Benzinmotor', art: 'der', gender: 'm', plural: 'Benzinmotoren', pos: 'noun', level: 'B2', register: 'written', en: 'petrol engine', hi: 'पेट्रोल इंजन', ex: 'Der Benzinmotor war laut.', exEn: 'The petrol engine was loud.', exHi: 'Petrol engine tez awaaz kar raha tha.', ex2: 'Sie haben den Benzinmotor ersetzt.', ex2En: 'They\'ve replaced the petrol engine.', ex2Hi: 'Unhone petrol engine badla hai.' },
    { de: 'Beschäftigte', art: 'der/die', gender: 'm/f', plural: 'Beschäftigten', pos: 'noun', level: 'B2', register: 'written', en: 'employee', hi: 'कर्मचारी', ex: 'Die Beschäftigten bekamen eine Gehaltserhöhung.', exEn: 'The employees got a salary increase.', exHi: 'Karmchaariyon ko vetan vridhi mili.', ex2: 'Sie haben neue Beschäftigte eingestellt.', ex2En: 'They\'ve hired new employees.', ex2Hi: 'Unhone naye karmchaari rakhe hain.' },
    { de: 'Besitzer/in', art: 'der/die', gender: 'm/f', plural: 'Besitzer/innen', pos: 'noun', level: 'B2', register: 'both', en: 'owner', hi: 'मालिक', ex: 'Der Besitzer verkaufte das Haus.', exEn: 'The owner sold the house.', exHi: 'Maalik ne ghar becha.', ex2: 'Sie haben den Besitzer kontaktiert.', ex2En: 'They\'ve contacted the owner.', ex2Hi: 'Unhone maalik se sampark kiya hai.' },
    { de: 'bestmöglich', pos: 'adjective', level: 'B2', register: 'written', en: 'best possible', hi: 'सर्वोत्तम संभव', ex: 'Sie strebten das bestmögliche Ergebnis an.', exEn: 'They aimed for the best possible result.', exHi: 'Unhone sarvottam sambhav parinaam ka lakshya rakha.', ex2: 'Sie haben die bestmögliche Lösung gefunden.', ex2En: 'They\'ve found the best possible solution.', ex2Hi: 'Unhein sarvottam sambhav samaadhaan mila hai.' },
    { de: 'Bettflüchter', art: 'der', gender: 'm', plural: 'Bettflüchter', pos: 'noun', level: 'B2', register: 'spoken', en: 'early riser (out of bed)', hi: 'जल्दी उठने वाला', ex: 'Er war schon immer ein Bettflüchter.', exEn: 'He\'s always been an early riser.', exHi: 'Woh hamesha se jaldi uthne waala raha hai.', ex2: 'Sie sind keine Bettflüchter.', ex2En: 'They are not early risers.', ex2Hi: 'Woh jaldi uthne waale nahi hain.' },
    { de: 'Blei', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'lead (metal)', hi: 'सीसा', ex: 'Blei ist ein schweres Metall.', exEn: 'Lead is a heavy metal.', exHi: 'Seesa ek bhaari dhaatu hai.', ex2: 'Sie haben Blei aus dem Wasser entfernt.', ex2En: 'They\'ve removed lead from the water.', ex2Hi: 'Unhone paani se seesa hataaya hai.' },
    { de: 'Bluthochdruck', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'high blood pressure', hi: 'उच्च रक्तचाप', ex: 'Sie leidet an Bluthochdruck.', exEn: 'She suffers from high blood pressure.', exHi: 'Woh uchch raktachaap se peedit hai.', ex2: 'Sie haben den Bluthochdruck behandelt.', ex2En: 'They\'ve treated the high blood pressure.', ex2Hi: 'Unhone uchch raktachaap ka ilaaj kiya hai.' },
    { de: 'Damm', art: 'der', gender: 'm', plural: 'Dämme', pos: 'noun', level: 'B2', register: 'written', en: 'dam, embankment', hi: 'बांध', ex: 'Der Damm hielt dem Druck stand.', exEn: 'The dam withstood the pressure.', exHi: 'Baandh ne dabaav ko jhela.', ex2: 'Sie haben einen neuen Damm gebaut.', ex2En: 'They\'ve built a new dam.', ex2Hi: 'Unhone ek naya baandh banaaya hai.' },
    { de: 'dauerhaft', pos: 'adjective', level: 'B2', register: 'written', en: 'lasting, permanent', hi: 'स्थायी', ex: 'Sie fanden eine dauerhafte Lösung.', exEn: 'They found a lasting solution.', exHi: 'Unhein ek sthaayi samaadhaan mila.', ex2: 'Sie haben eine dauerhafte Verbindung geschaffen.', ex2En: 'They\'ve created a lasting connection.', ex2Hi: 'Unhone ek sthaayi sambandh banaaya hai.' },
    { de: 'deprimierend', pos: 'adjective', level: 'B2', register: 'both', en: 'depressing', hi: 'निराशाजनक', ex: 'Die Nachricht war deprimierend.', exEn: 'The news was depressing.', exHi: 'Khabar niraashaajanak thi.', ex2: 'Sie haben eine deprimierende Statistik gesehen.', ex2En: 'They\'ve seen a depressing statistic.', ex2Hi: 'Unhone ek niraashaajanak aankda dekha hai.' },
    { de: 'derzeit', pos: 'adverb', level: 'B2', register: 'written', en: 'currently, at present', hi: 'फिलहाल', ex: 'Derzeit läuft die Untersuchung.', exEn: 'Currently, the investigation is running.', exHi: 'Filhaal jaanch chal rahi hai.', ex2: 'Sie sind derzeit im Ausland.', ex2En: 'They are currently abroad.', ex2Hi: 'Woh filhaal videsh mein hain.' },
    { de: 'dramatisch', pos: 'adjective', level: 'B2', register: 'both', en: 'dramatic', hi: 'नाटकीय', ex: 'Die Lage war dramatisch.', exEn: 'The situation was dramatic.', exHi: 'Sthiti naatakiya thi.', ex2: 'Sie haben eine dramatische Wendung erlebt.', ex2En: 'They\'ve experienced a dramatic turn.', ex2Hi: 'Unhone ek naatakiya mod dekha hai.' },
    { de: 'durcharbeiten', pos: 'verb', level: 'B2', register: 'written', en: 'to work through', hi: 'गहराई से पढ़ना', ex: 'Sie arbeitete den Bericht durch.', exEn: 'She worked through the report.', exHi: 'Usne report gahraai se padhi.', ex2: 'Sie haben die Nacht durchgearbeitet.', ex2En: 'They\'ve worked through the night.', ex2Hi: 'Woh raat bhar kaam karte rahe hain.', conj: { praesens: 'arbeitet durch', praeteritum: 'arbeitete durch', perfekt: 'hat durchgearbeitet' } },
    { de: 'durchführbar', pos: 'adjective', level: 'B2', register: 'written', en: 'feasible, practicable', hi: 'व्यवहार्य', ex: 'Der Plan war durchführbar.', exEn: 'The plan was feasible.', exHi: 'Yojana vyavhaarik thi.', ex2: 'Sie haben eine durchführbare Lösung gefunden.', ex2En: 'They\'ve found a feasible solution.', ex2Hi: 'Unhein ek vyavhaarik samaadhaan mila hai.' },
    { de: 'Durchschnitt', art: 'der', gender: 'm', plural: 'Durchschnitte', pos: 'noun', level: 'B2', register: 'written', en: 'average', hi: 'औसत', ex: 'Der Durchschnitt lag bei 80 Prozent.', exEn: 'The average was 80 percent.', exHi: 'Ausat 80 pratishat tha.', ex2: 'Sie haben den Durchschnitt berechnet.', ex2En: 'They\'ve calculated the average.', ex2Hi: 'Unhone ausat nikaala hai.' },
    { de: 'Effekt', art: 'der', gender: 'm', plural: 'Effekte', pos: 'noun', level: 'B2', register: 'written', en: 'effect', hi: 'प्रभाव', ex: 'Der Effekt war sofort sichtbar.', exEn: 'The effect was immediately visible.', exHi: 'Prabhaav turant dikhaayi diya.', ex2: 'Sie haben den Effekt gemessen.', ex2En: 'They\'ve measured the effect.', ex2Hi: 'Unhone prabhaav maapa hai.' },
    { de: 'Eifer', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'zeal, eagerness', hi: 'उत्साह', ex: 'Sie arbeitete mit großem Eifer.', exEn: 'She worked with great eagerness.', exHi: 'Usne bade utsaah se kaam kiya.', ex2: 'Sie haben ihren Eifer bewundert.', ex2En: 'They\'ve admired her eagerness.', ex2Hi: 'Unhone uske utsaah ki sarahna ki hai.' },
    { de: 'eigensinnig', pos: 'adjective', level: 'B2', register: 'both', en: 'stubborn, wilful', hi: 'हठी', ex: 'Das Kind war eigensinnig.', exEn: 'The child was stubborn.', exHi: 'Bachcha hathi tha.', ex2: 'Sie haben eine eigensinnige Entscheidung getroffen.', ex2En: 'They\'ve made a wilful decision.', ex2Hi: 'Unhone ek hathi faisla liya hai.' },
    { de: 'eingerechnet', pos: 'adjective', level: 'B2', register: 'written', en: 'included, factored in', hi: 'शामिल किया गया', ex: 'Die Steuer ist eingerechnet.', exEn: 'The tax is included.', exHi: 'Tax shaamil kiya gaya hai.', ex2: 'Sie haben alle Kosten eingerechnet.', ex2En: 'They\'ve factored in all costs.', ex2Hi: 'Unhone saare kharch shaamil kiye hain.' },
    { de: 'Einsatz', art: 'der', gender: 'm', plural: 'Einsätze', pos: 'noun', level: 'B2', register: 'both', en: 'deployment, commitment', hi: 'तैनाती, प्रतिबद्धता', ex: 'Ihr Einsatz war beeindruckend.', exEn: 'Her commitment was impressive.', exHi: 'Uski pratibaddhata prabhaavshaali thi.', ex2: 'Sie haben den Einsatz geplant.', ex2En: 'They\'ve planned the deployment.', ex2Hi: 'Unhone tainaati plan ki hai.' },
    { de: 'einstürzen', pos: 'verb', level: 'B2', register: 'written', en: 'to collapse', hi: 'गिर जाना', ex: 'Das Gebäude stürzte ein.', exEn: 'The building collapsed.', exHi: 'Imaarat gir gayi.', ex2: 'Die Brücke ist eingestürzt.', ex2En: 'The bridge has collapsed.', ex2Hi: 'Pul gir gaya hai.', conj: { praesens: 'stürzt ein', praeteritum: 'stürzte ein', perfekt: 'ist eingestürzt' } },
    { de: 'Erfinder/in', art: 'der/die', gender: 'm/f', plural: 'Erfinder/innen', pos: 'noun', level: 'B2', register: 'written', en: 'inventor', hi: 'आविष्कारक', ex: 'Der Erfinder präsentierte seine Idee.', exEn: 'The inventor presented his idea.', exHi: 'Aavishkaark ne apna vichaar prastut kiya.', ex2: 'Sie haben mit dem Erfinder gesprochen.', ex2En: 'They\'ve spoken with the inventor.', ex2Hi: 'Unhone aavishkaark se baat ki hai.' },
    { de: 'erfolglos', pos: 'adjective', level: 'B2', register: 'written', en: 'unsuccessful', hi: 'असफल', ex: 'Der Versuch war erfolglos.', exEn: 'The attempt was unsuccessful.', exHi: 'Prayaas asafal raha.', ex2: 'Sie haben erfolglos verhandelt.', ex2En: 'They\'ve negotiated unsuccessfully.', ex2Hi: 'Unhone asafal roop se baatcheet ki hai.' },
    { de: 'Experiment', art: 'das', gender: 'n', plural: 'Experimente', pos: 'noun', level: 'B2', register: 'written', en: 'experiment', hi: 'प्रयोग', ex: 'Das Experiment wurde wiederholt.', exEn: 'The experiment was repeated.', exHi: 'Prayog dohraaya gaya.', ex2: 'Sie haben ein neues Experiment entwickelt.', ex2En: 'They\'ve developed a new experiment.', ex2Hi: 'Unhone ek naya prayog vikasit kiya hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum ist Passiv wichtig?',
      body: [ 'Academic German focuses on experiments, procedures, and results — NOT on the person performing the action. Der Wissenschaftler untersucht die Daten → Die Daten werden untersucht.' ],
      hinglish: 'Academic German mein focus experiment, process aur result par hota hai \u2014 us insaan par nahi jo kaam kar raha hai. Isliye wahan passive itna zyada aata hai.'
    },
    {
      title: 'Passiv in der Wissenschaftssprache',
      body: [ 'Scientific writing emphasises reproducibility and objectivity through consistent Vorgangspassiv and Zustandspassiv use.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Daten wurden analysiert.', 'The data was analysed.'],
          ['Die Ergebnisse werden anschließend verglichen.', 'The results are subsequently compared.'],
          ['Die Proben wurden untersucht.', 'The samples were examined.'],
          ['Die Messungen wurden wiederholt.', 'The measurements were repeated.']
        ]
      },
      hinglish: 'Scientific writing mein passive isliye use hota hai ki baat objective lage \u2014 kaam kisne kiya yeh important nahi hota, kaam kya hua yeh important hota hai.'
    },
    {
      title: 'Passiv in der Berufssprache',
      body: [ 'Business German uses a mix of all passive structures, chosen by what the sentence needs to emphasise.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Rechnung wurde erstellt.', 'The invoice was created.'],
          ['Die Unterlagen werden überprüft.', 'The documents are being checked.'],
          ['Die Bewerbung wird bearbeitet.', 'The application is being processed.'],
          ['Der Vertrag ist unterschrieben.', 'The contract is signed.']
        ]
      },
      hinglish: 'Business German mein saare passive structures aate hain. Kaunsa lagega yeh is baat par depend karta hai ki tum kis cheez par zor dena chahte ho \u2014 kaam, result, ya paane wala.'
    },
    {
      title: 'Master-Vergleichstabelle: Die richtige Wahl treffen',
      body: [ 'Every situation has a natural best fit — this table is the master decision reference for the whole B2 passive system.' ],
      table: {
        head: ['Situation', 'Best Structure', 'Example'],
        rows: [
          ['Process', 'Vorgangspassiv', 'Die Daten werden analysiert.'],
          ['Result', 'Zustandspassiv', 'Die Daten sind analysiert.'],
          ['Possibility', 'sich lassen', 'Die Daten lassen sich analysieren.'],
          ['Responsibility', 'haben + zu', 'Die Mitarbeiter haben die Daten zu prüfen.'],
          ['Required task', 'sein + zu', 'Die Daten sind zu prüfen.'],
          ['Recipient', 'bekommen-Passiv', 'Der Kunde bekommt die Rechnung geschickt.'],
          ['General activity', 'Unpersönliches Passiv', 'Hier wird gearbeitet.']
        ]
      },
      hinglish: 'Har situation ke liye ek structure sabse natural baithta hai. Yeh table poore B2 passive system ka summary hai \u2014 exam se pehle ise ek baar zaroor dekh lo.'
    },
    {
      title: 'Akademisches Register',
      body: [ 'These fixed expressions dominate academic writing and are worth memorising as whole chunks.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Es wird angenommen, dass ...', 'It is assumed that ...'],
          ['Es wird festgestellt, dass ...', 'It is determined that ...'],
          ['Die Ergebnisse werden dargestellt.', 'The results are presented.'],
          ['Die Hypothese wird überprüft.', 'The hypothesis is checked.'],
          ['Die Untersuchung wurde durchgeführt.', 'The investigation was carried out.']
        ]
      },
      hinglish: 'Yeh fixed expressions academic writing mein baar-baar aate hain. Inhe poore chunk ki tarah yaad kar lo \u2014 phir writing mein seedha use kar sakte ho.'
    },
    {
      title: 'Berufliches Register',
      body: [ 'These examples reflect realistic B2 workplace situations across different passive structures.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Lieferung wurde bestätigt.', 'The delivery was confirmed.'],
          ['Der Termin wurde verschoben.', 'The appointment was postponed.'],
          ['Die Dokumente sind einzureichen.', 'The documents are to be submitted.'],
          ['Die Präsentation ist vorbereitet.', 'The presentation is prepared.'],
          ['Der Kunde erhält die Rechnung zugeschickt.', 'The customer receives the invoice sent.']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki office ke asli kaam mein kaunsa passive kab aata hai \u2014 har line ek alag structure use kar rahi hai.'
    },
    {
      title: 'Textsorten mit häufigem Passiv',
      body: [ 'Passive voice dominates: reports, scientific articles, business emails, company guidelines, laboratory reports, product manuals, official notices, and university assignments — exactly the text types tested in Goethe B2 Reading and Writing.' ],
      hinglish: 'Passive in text types mein sabse zyada aata hai: reports, scientific articles, business emails, guidelines, manuals aur official notices. Yahi text types Goethe B2 ki Reading aur Writing mein aate hain, isliye inhe pehchaanna zaroori hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from inventing a reflexive where a passive is needed, confusing worden with geworden, stacking two auxiliaries, choosing haben where the task needs sein, or losing subject agreement.' ],
      mistakes: [
        { wrong: 'Die Daten analysieren sich.', right: 'Die Daten werden analysiert. / Die Daten lassen sich analysieren.', why: 'Data cannot "analysieren sich" on its own — use Vorgangspassiv for the process or "sich lassen" for possibility.' },
        { wrong: 'Die Ergebnisse sind analysiert geworden.', right: 'Die Ergebnisse sind analysiert worden.', why: 'The Perfekt of Vorgangspassiv takes <b>worden</b>, never geworden. (And if you only mean the current state, drop it entirely: <span class="de">Die Ergebnisse sind analysiert.</span>)' },
        { wrong: 'Der Vertrag wird unterschrieben werden sein.', right: 'Der Vertrag wird unterschrieben. / Der Vertrag wird unterschrieben sein.', why: 'You cannot stack werden and sein in one verb group. Note that <span class="de">Der Vertrag wird unterschrieben sein</span> on its own IS correct \u2014 it predicts a future state (\u201cwill be signed by then\u201d).' },
        { wrong: 'Der Bericht hat geschrieben zu.', right: 'Der Bericht ist zu schreiben.', why: 'A report cannot "haben" a duty — use "sein + zu" for the task, with "zu" directly before the infinitive.' },
        { wrong: 'Es wird die Daten analysiert.', right: 'Die Daten werden analysiert. / Es werden die Daten analysiert.', why: 'The verb must agree with the plural subject "die Daten" ("werden", not "wird") when it is the grammatical subject.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki structures aadhe-aadhe mila diye jaate hain \u2014 <b>worden</b> aur <b>geworden</b> confuse ho jaate hain, do auxiliary ek saath lag jaate hain, ya subject ke saath verb match nahi karta. Har structure ka apna banane ka tarika hai, isliye ek chuno aur poora chuno.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Academic German asks: what happened? → use passive. Business German asks: which passive best expresses THIS situation? Never use one construction for every context — choose by Action, Result, Recipient, Possibility, or Responsibility.' ],
      note: 'Memory trick: seven tools, one job each. Match the situation to the structure using the Master Comparison Table.',
      hinglish: 'Academic German mein sawaal hota hai \u2014 kya hua? Wahan seedha passive chalta hai. Business German mein sawaal hota hai \u2014 is situation ke liye kaunsa passive sahi hai? Ek hi structure har jagah mat lagao; situation dekh kar chuno.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsnachricht: Ein Experiment mit Bakterien',
    titleEn: 'Science news: an experiment with bacteria',
    tokens: [
      { w: 'In', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'aufwendigen', role: 'plain', en: 'elaborate', hi: 'विस्तृत', type: 'Adjective' },
      { w: 'Experiment', role: 'plain', en: 'experiment (Satzende)', hi: 'प्रयोग (Satzende)', type: 'Noun · neut.', why: 'das Experiment (this chapter).' },
      { w: 'werden', role: 'r-verb', en: 'are (Passiv, Position 2)', hi: 'किए जाते हैं (Passiv)', type: 'Verb · werden (Passiv, Linke Klammer)' },
      { w: 'Bakterien', role: 'plain', en: 'bacteria', hi: 'बैक्टीरिया', type: 'Noun · plural', why: 'die Bakterie (this chapter).' },
      { w: 'gezielt', role: 'plain', en: 'deliberately', hi: 'लक्षित रूप से', type: 'Adjective' },
      { w: 'verändert', role: 'r-verb', en: 'altered (rechte Klammer)', hi: 'बदला जाता है (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Anschließend', role: 'plain', en: 'subsequently', hi: 'उसके बाद', type: 'Adverb' },
      { w: 'wird', role: 'r-verb', en: 'is (Passiv)', hi: 'की जाती है', type: 'Verb · werden (Passiv, Linke Klammer)' },
      { w: 'ihr', role: 'plain', en: 'their', hi: 'उनकी', type: 'Possessivartikel' },
      { w: 'Wachstum', role: 'plain', en: 'growth (Satzende)', hi: 'वृद्धि (Satzende)', type: 'Noun · neut.' },
      { w: 'genau', role: 'plain', en: 'exactly', hi: 'ठीक', type: 'Adverb' },
      { w: 'dokumentiert', role: 'r-verb', en: 'documented (rechte Klammer)', hi: 'दर्ज किया जाता है (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'परिणाम', type: 'Noun · plural' },
      { w: 'werden', role: 'r-verb', en: 'are (Passiv)', hi: 'की जाती है', type: 'Verb · werden (Passiv, Linke Klammer)' },
      { w: 'derzeit', role: 'plain', en: 'currently', hi: 'फ़िलहाल', type: 'Adverb', why: 'derzeit (this chapter).' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'ähnlichen', role: 'plain', en: 'similar', hi: 'समान', type: 'Adjective' },
      { w: 'Studien', role: 'plain', en: 'studies (Satzende)', hi: 'अध्ययनों (Satzende)', type: 'Noun · plural' },
      { w: 'verglichen', role: 'r-verb', en: 'compared (rechte Klammer)', hi: 'तुलना की जाती है (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Sollten', role: 'plain', en: 'should', hi: 'अगर', type: 'Verb · Modalverb (Konjunktiv II, invertiert)' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Resultate', role: 'plain', en: 'results (Satzende)', hi: 'परिणाम (Satzende)', type: 'Noun · plural' },
      { w: 'bestätigt', role: 'r-verb', en: 'confirmed (rechte Klammer)', hi: 'पुष्टि की जाती है (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Passiv, Rechte Klammer)' },
      { w: 'werden', role: 'r-verb', en: 'be (Satzende)', hi: 'होना (Satzende)', type: 'Verb · werden (Infinitiv Passiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'könnte', role: 'plain', en: 'could', hi: 'सकता है', type: 'Verb · Modalverb (Konjunktiv II, Linke Klammer)' },
      { w: 'dies', role: 'plain', en: 'this', hi: 'यह', type: 'Pronoun' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Atomkraftwerke', role: 'plain', en: 'nuclear power plants (Satzende)', hi: 'परमाणु ऊर्जा संयंत्रों (Satzende)', type: 'Noun · plural', why: 'das Atomkraftwerk (this chapter).' },
      { w: 'von', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'Bedeutung', role: 'plain', en: 'significance (Satzende)', hi: 'महत्व (Satzende)', type: 'Noun · fem.' },
      { w: 'sein', role: 'plain', en: 'be (rechte Klammer, Satzende)', hi: 'होना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer, Satzende)' },
      { w: '.', plain: true },
      { w: 'Erst', role: 'plain', en: 'only', hi: 'तभी', type: 'Adverb' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'jahrelanger', role: 'plain', en: 'years-long', hi: 'सालों की', type: 'Adjective · Dat.' },
      { w: 'Forschung', role: 'plain', en: 'research (Satzende)', hi: 'शोध (Satzende)', type: 'Noun · fem.' },
      { w: 'werden', role: 'r-verb', en: 'are (Passiv)', hi: 'किए जाते हैं', type: 'Verb · werden (Passiv Präsens)' },
      { w: 'solche', role: 'plain', en: 'such', hi: 'ऐसे', type: 'Determiner' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'üblicherweise', role: 'plain', en: 'usually', hi: 'आमतौर पर', type: 'Adverb' },
      { w: 'veröffentlicht', role: 'r-verb', en: 'published (Satzende)', hi: 'प्रकाशित (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'dahin', role: 'plain', en: 'then (Satzende)', hi: 'तब (Satzende)', type: 'Adverb' },
      { w: 'wird', role: 'r-verb', en: 'is (Passiv)', hi: 'रखी जाती है', type: 'Verb · werden (Passiv)' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Messung', role: 'plain', en: 'measurement (Satzende)', hi: 'माप (Satzende)', type: 'Noun · fem.' },
      { w: 'sorgfältig', role: 'plain', en: 'carefully', hi: 'सावधानी से', type: 'Adverb' },
      { w: 'archiviert', role: 'r-verb', en: 'archived (Satzende)', hi: 'संग्रहीत (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'unabhängige', role: 'plain', en: 'independent', hi: 'स्वतंत्र', type: 'Adjective' },
      { w: 'Kommission', role: 'plain', en: 'commission', hi: 'आयोग', type: 'Noun · fem.' },
      { w: 'wird', role: 'plain', en: 'is', hi: 'है', type: 'Verb · werden (Passiv)' },
      { w: 'zudem', role: 'plain', en: 'moreover', hi: 'इसके अलावा', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Überprüfung', role: 'plain', en: 'review (Satzende)', hi: 'समीक्षा (Satzende)', type: 'Noun · fem.' },
      { w: 'aller', role: 'plain', en: 'of all', hi: 'सभी', type: 'Determiner · Genitiv' },
      { w: 'Daten', role: 'plain', en: 'data (Satzende)', hi: 'डेटा (Satzende)', type: 'Noun · plural' },
      { w: 'beauftragt', role: 'r-verb', en: 'commissioned (Satzende)', hi: 'सौंपा जाता है (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'so', role: 'plain', en: 'thus', hi: 'इस तरह', type: 'Adverb' },
      { w: 'kann', role: 'plain', en: 'can', hi: 'सकता है', type: 'Verb · können' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Glaubwürdigkeit', role: 'plain', en: 'credibility (Satzende)', hi: 'विश्वसनीयता (Satzende)', type: 'Noun · fem.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Forschung', role: 'plain', en: 'research (Satzende)', hi: 'शोध (Satzende)', type: 'Noun · fem.' },
      { w: 'gewahrt', role: 'plain', en: 'preserved (Satzende)', hi: 'बनी रह सकती है (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true }
    ],
    translation: 'In an elaborate experiment, bacteria are deliberately altered. Subsequently, their growth is precisely documented. The results are currently being compared with similar studies. Should the results be confirmed, this could be of significance for nuclear power plants. Only after years of research are such results usually published. Until then, every measurement is carefully archived. Moreover, an independent commission is tasked with reviewing all data. Only this way can the credibility of the research be preserved.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_049_L001', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie weit ist dein Praktikumsbericht?', en: 'Timo, how far along is your internship report?' },
      { id: 'B2_049_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das Experiment wird gerade durchgeführt, die Ergebnisse werden bald veröffentlicht.', en: 'The experiment is being carried out right now, the results will be published soon.' },
      { id: 'B2_049_L003', speaker: 'Antje', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Meine Präsentation wurde schon zweimal überarbeitet, aber jetzt ist sie fertig.', en: 'My presentation has already been revised twice, but now it\'s finished.' },
      { id: 'B2_049_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zeig sie mir, bevor sie morgen vorgestellt wird.', en: 'Show it to me before it\'s presented tomorrow.' }
    ],
    transcript: 'Timo, wie weit ist dein Praktikumsbericht? Das Experiment wird gerade durchgeführt, die Ergebnisse werden bald veröffentlicht. Meine Präsentation wurde schon zweimal überarbeitet, aber jetzt ist sie fertig. Zeig sie mir, bevor sie morgen vorgestellt wird.',
    translation: 'Timo, how far along is your internship report? The experiment is being carried out right now, the results will be published soon. My presentation has already been revised twice, but now it\'s finished. Show it to me before it\'s presented tomorrow.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'weit' },
      { w: 'ist' },
      { w: 'dein' },
      { w: 'Praktikumsbericht' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'Experiment' },
      { w: 'wird' },
      { w: 'gerade' },
      { w: 'durchgeführt' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Ergebnisse' },
      { w: 'werden' },
      { w: 'bald' },
      { w: 'veröffentlicht' },
      { w: '.', plain: true },
      { w: 'Meine' },
      { w: 'Präsentation' },
      { w: 'wurde' },
      { w: 'schon' },
      { w: 'zweimal' },
      { w: 'überarbeitet' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'jetzt' },
      { w: 'ist' },
      { w: 'sie' },
      { w: 'fertig' },
      { w: '.', plain: true },
      { w: 'Zeig' },
      { w: 'sie' },
      { w: 'mir' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'sie' },
      { w: 'morgen' },
      { w: 'vorgestellt' },
      { w: 'wird' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was wird gerade durchgeführt?', qEn: 'What is being carried out right now?', options: ['die Präsentation', 'das Experiment', 'der Bericht', 'die Prüfung'], optionsEn: ['the presentation', 'the experiment', 'the report', 'the exam'], answer: 1,
        explain: '"Das Experiment wird gerade durchgeführt."' },
      { q: 'Wie oft wurde Antjes Präsentation überarbeitet?', qEn: 'How many times was Antje\'s presentation revised?', options: ['einmal', 'zweimal', 'dreimal', 'nie'], optionsEn: ['once', 'twice', 'three times', 'never'], answer: 1,
        explain: '"Meine Präsentation wurde schon zweimal überarbeitet."' }
    ]
  },

  speaking: [
    { task: "Ein Kollege fragt, wie weit dein Praktikumsbericht ist.", taskEn: "A colleague asks how far your placement report has got.", de: "Das Experiment wird gerade durchgeführt, die Ergebnisse werden bald veröffentlicht.", en: "The experiment is being carried out right now, the results will be published soon." },
    { task: "Er fragt nach deiner Präsentation.", taskEn: "He asks about your presentation.", de: "Meine Präsentation wurde letzte Woche bewertet.", en: "My presentation was assessed last week." },
    { task: "Deine Betreuerin fragt, was schon fertig ist.", taskEn: "Your supervisor asks what's already finished.", de: "Die Daten sind erhoben, und der Text ist abgeschlossen.", en: "The data is collected, and the text is finished." },
    { task: "Eine Kollegin fragt, ob sich die Auswertung beschleunigen lässt.", taskEn: "A colleague asks whether the analysis can be sped up.", de: "Sie lässt sich mit dem neuen Programm schneller machen.", en: "It can be done faster with the new program." },
    { task: "Rollenspiel: Ihr gebt der Leitung ein Projekt-Update.", taskEn: "Role-play: you give management a project update.", de: "Die Messungen wurden abgeschlossen. — Und die Ergebnisse werden Ihnen morgen zugeschickt.", en: "The measurements have been completed. — And the results will be sent to you tomorrow." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Short scientific report (6-8 sentences): Describe an experiment or study, choosing the appropriate passive structure (process, result, possibility) for each sentence.\n\nTASK 2 — Formal company report (6-8 sentences): Describe a project\'s status, choosing between bekommen-Passiv, haben+zu, and sein+zu naturally.',
    starters: ['Die Daten wurden ...', 'Der Kunde bekommt ...'],
    placeholder: 'Die Daten wurden analysiert. Die Ergebnisse sind dokumentiert. Der Kunde bekommt die Rechnung geschickt.',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which structure best fits: "The data collection is currently happening"?',
      options: ['Die Daten werden gesammelt. (Vorgangspassiv)', 'Die Daten sind gesammelt. (Zustandspassiv)', 'Die Daten lassen sich sammeln. (sich lassen)'],
      answer: 0,
      explain: 'An ongoing process calls for Vorgangspassiv (werden + Partizip II), not the finished-result Zustandspassiv or the possibility-focused "sich lassen".'
    },
    gap: {
      sentence: ['Der Bericht ', ' zu schreiben.'],
      gaps: [ { answer: 'ist', accepts: ['ist'] } ],
      explain: '"ist" (sein + zu) puts the TASK in focus impersonally — the report needs writing, regardless of who does it.'
    },
    match: {
      q: 'Match each situation to its best-fit passive structure.',
      pairs: [
        { noun: 'Process (action happening now)', art: 'Vorgangspassiv' },
        { noun: 'Result (finished state)', art: 'Zustandspassiv' },
        { noun: 'Possibility (can be done)', art: 'sich lassen' },
        { noun: 'Recipient (who receives it)', art: 'bekommen-Passiv' }
      ]
    },
    builder: {
      target: 'Build: "The customer gets the invoice sent." (bekommen-Passiv)',
      bank: ['Der', 'Kunde', 'bekommt', 'die', 'Rechnung', 'geschickt', '.'],
      answer: ['Der', 'Kunde', 'bekommt', 'die', 'Rechnung', 'geschickt', '.'],
      roles: { 'bekommt': 'r-bekommen', 'geschickt': 'r-bekommen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Ergebnisse sind analysiert worden.',
      right: 'Die Ergebnisse sind analysiert.',
      explain: 'Zustandspassiv never adds "worden" — that word belongs to the Perfekt of Vorgangspassiv, not to describing a present state.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which structure emphasises a process happening right now?', options: ['Vorgangspassiv (werden + Partizip II)', 'Zustandspassiv (sein + Partizip II)', 'haben + zu'], answer: 0,
      explain: 'Vorgangspassiv focuses on the action IN PROGRESS.' },
    { q: 'Which structure emphasises a finished result?', options: ['Zustandspassiv (sein + Partizip II)', 'Vorgangspassiv (werden + Partizip II)', 'Unpersönliches Passiv'], answer: 0,
      explain: 'Zustandspassiv describes the current state after an action is complete.' },
    { q: 'Which structure emphasises possibility, more elegantly than können + Passiv?', options: ['sich lassen', 'bekommen-Passiv', 'sein + zu'], answer: 0,
      explain: '"sich lassen" = "kann ... werden", but sounds more natural and concise.' },
    { q: 'Which structure has no subject at all — only the general action matters?', options: ['Unpersönliches Passiv', 'bekommen-Passiv', 'Zustandspassiv'], answer: 0,
      explain: 'Unpersönliches Passiv is used when WHO acts is completely irrelevant.' },
    { q: 'Which structure puts the RECEIVER as the grammatical subject?', options: ['bekommen-/kriegen-/erhalten-Passiv', 'Vorgangspassiv', 'sein + zu'], answer: 0,
      explain: 'bekommen-Passiv makes the recipient — not the action — the subject.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-vorgang', html: 'Seven passive structures, one context each: Vorgangspassiv (process), Zustandspassiv (result), sich lassen (possibility), Unpersönliches Passiv (general activity), bekommen-Passiv (recipient), haben+zu (responsibility), sein+zu (task).' },
    { c: 'r-zustand', html: 'Academic German uses passive to focus on experiments, procedures, and results — never on the person acting.' },
    { c: 'r-bekommen', html: 'Professional German mixes all seven structures fluidly, choosing by what the sentence needs to emphasise — never forcing one construction everywhere.' }
  ],
  revisionTips: [
    'For any English sentence with "is/are being done", practise choosing between all seven German passive alternatives and picking the best fit.',
    'Scan a scientific abstract or business email — count how many different passive structures appear, and identify why each was chosen.',
    'Before writing any formal German sentence, ask: process, result, possibility, general activity, recipient, responsibility, or task? That question is the whole chapter.'
  ]
};

window.CHAPTER = CHAPTER;
