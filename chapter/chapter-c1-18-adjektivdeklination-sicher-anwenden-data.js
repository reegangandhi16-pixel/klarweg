/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 18
   "Adjektivdeklination sicher anwenden" — the LOGIC behind
   weak/mixed/strong adjective endings (who carries the
   grammatical information: article or adjective), long
   academic noun phrases, register density. NOT basic
   A1 adjective-ending memorization.
   Dialogue: Ines and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-18-adjektivdeklination-sicher-anwenden',
  phase: 'C1 · Nominalstil & Präzision',
  number: 18,
  title: 'Adjektivdeklination sicher anwenden',
  titleEn: 'Applying adjective declension with confidence',
  description: 'Never ask "which ending should I memorize?" Ask "who already carries the grammatical information?" If the article does the work, the adjective relaxes. If nobody does, the adjective must do the job.',
  xp: 570,
  time: 105,
  difficulty: 'Advanced',
  nextChapter: { number: 19, title: 'Steigerung & sprachliche Abstufung', titleEn: 'Gradation and linguistic nuance' , href: 'chapter-c1-19-steigerung-und-sprachliche-abstufung.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: '"Who already carries the <em>grammatical information</em>?"',
    intro: 'Reviewing research papers before a conference, Ines and Timo build long academic noun phrases — an extensive project, a recognized professor\'s new solution approach — asking each time who already carries the grammatical information, and who the adjective must carry it for.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See weak, mixed, and strong adjective declension used automatically in authentic academic noun phrases'
    ],
    scene: 'Durchsicht von Forschungsarbeiten vor einer Konferenz',
    femaleSpeakers: ['Ines'],
    dialogue: [
      { speaker: 'Ines', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'führen', role: 'r-verb', en: 'conduct', hi: 'करते हैं', pron: 'FÜ-ren', type: 'Verb · durchführen (wir)', lexicalUnit: 'durchführen', why: 'durchführen = to conduct/carry out (this chapter).', ex: 'Wir führen ein umfangreiches Projekt durch.', exEn: 'We carry out an extensive project.' },
        { w: 'ein', role: 'r-akkusativ', en: 'an (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'umfangreiches', role: 'r-akkusativ', en: 'extensive', hi: 'व्यापक', pron: 'UM-fang-ry-khes', type: 'Adjective', why: 'umfangreich = extensive (this chapter).', ex: 'ein umfangreiches Projekt' },
        { w: 'Projekt', role: 'r-akkusativ', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: 'durch', role: 'r-verb', en: '(prefix of durchführen)', hi: '', pron: 'doorkh', type: 'Separable prefix · Satzende', lexicalUnit: 'durchführen' },
        { w: '.', plain: true }
      ], en: 'We carry out an extensive project.', hi: 'Hum ek vyaapak pariyojana chalate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'anerkannte', role: 'r-subject', en: 'recognized', hi: 'मान्यता प्राप्त', pron: 'AN-er-kan-tuh', type: 'Adjective', why: 'anerkannt = recognized (this chapter).', ex: 'ein anerkannter Professor' },
        { w: 'Professor', role: 'r-subject', en: 'professor', hi: 'प्रोफ़ेसर', pron: 'pro-FE-sor', type: 'Noun · masc.' },
        { w: 'an', role: 'r-preposition', en: 'part of', hi: 'शामिल', pron: 'an', type: 'Preposition + place' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'interdisziplinären', role: 'r-dativ', en: 'interdisciplinary', hi: 'अंतःविषय', pron: 'in-ter-dis-tsi-pli-NAI-ren', type: 'Adjective · dative', why: 'interdisziplinär = interdisciplinary (this chapter).', ex: 'ein interdisziplinäres Team' },
        { w: 'Team', role: 'r-dativ', en: 'team (dat.)', hi: 'टीम में', pron: 'teem', type: 'Noun · neut. dat.' },
        { w: 'beteiligt', role: 'r-subject', en: 'involved', hi: 'शामिल', pron: 'be-TY-likht', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Is the recognized professor part of the interdisciplinary team?', hi: 'Kya maanyata prapt professor antahvishay team mein shaamil hai?' },
      { speaker: 'Ines', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Sein', role: 'r-subject', en: 'his (neut.)', hi: 'उसका', pron: 'zine', type: 'Possessive' },
        { w: 'Lösungsansatz', role: 'r-subject', en: 'solution approach', hi: 'समाधान दृष्टिकोण', pron: 'LÖ-zungs-an-zats', type: 'Noun · masc.', why: 'der Lösungsansatz (this chapter).', ex: 'ein neuer Lösungsansatz' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'neuer', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-er', type: 'Adjective' },
        { w: 'Lösungsansatz', role: 'r-subject', en: 'solution approach', hi: 'समाधान दृष्टिकोण', pron: 'LÖ-zungs-an-zats', type: 'Noun · masc.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'altes', role: 'r-akkusativ', en: 'old', hi: 'पुरानी', pron: 'AL-tes', type: 'Adjective' },
        { w: 'Problem', role: 'r-akkusativ', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Yes. His solution approach is a new solution approach for an old problem.', hi: 'Haan. Uska samadhaan drishtikon ek purani samasya ke liye naya drishtikon hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'beeindruckende', role: 'r-akkusativ', en: 'impressive', hi: 'प्रभावशाली', pron: 'be-INE-druk-en-duh', type: 'Adjective' },
        { w: 'Leistung', role: 'r-akkusativ', en: 'achievement', hi: 'उपलब्धि', pron: 'LY-stung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'That is an impressive achievement.', hi: 'Yeh ek prabhaavshaali upalabdhi hai.' },
      { speaker: 'Ines', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'unser', role: 'r-akkusativ', en: 'our (neut.)', hi: 'हमारा', pron: 'UN-zer', type: 'Possessive · acc.' },
        { w: 'nächstes', role: 'r-akkusativ', en: 'next', hi: 'अगला', pron: 'NEKS-tes', type: 'Adjective' },
        { w: 'Vorhaben', role: 'r-akkusativ', en: 'undertaking', hi: 'योजना', pron: 'FOR-hah-ben', type: 'Noun · neut.', why: 'das Vorhaben (this chapter).', ex: 'ein wichtiges Vorhaben' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'finanzielle', role: 'r-akkusativ', en: 'financial', hi: 'वित्तीय', pron: 'fi-nan-TSYE-luh', type: 'Adjective' },
        { w: 'Unterstützung', role: 'r-akkusativ', en: 'support', hi: 'समर्थन', pron: 'UN-ter-shtü-tsung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'For our next undertaking we need financial support.', hi: 'Hamaari agli yojana ke liye humein vittiya samarthan chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'करूंगा', pron: 'VAIR-duh', type: 'Verb · werden (Futur I)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Ausschuss', role: 'r-dativ', en: 'committee (dat.)', hi: 'समिति को', pron: 'OWS-shus', type: 'Noun · masc. dat.', why: 'der Ausschuss (this chapter).', ex: 'dem Ausschuss vorlegen' },
        { w: 'vorlegen', role: 'r-verb', en: 'present', hi: 'प्रस्तुत करना', pron: 'FOR-lay-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I will present that to the committee.', hi: 'Main yeh samiti ko prastut karunga.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Never ask: <b>"Which ending should I memorize?"</b> Ask: <b>"Who already carries the grammatical information?"</b> If the article does the work, the adjective <span class="de r-schwach">relaxes (weak)</span>. If nobody does, the adjective <span class="de r-stark">must do the job (strong)</span>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ADJEKTIVDEKLINATION SICHER ANWENDEN at C1 level — the LOGIC behind adjective ending choice (weak/mixed/strong based on who carries grammatical information), long academic noun phrases, and register-appropriate adjective density, NOT basic articles, cases, or A1 adjective endings (already mastered). Covered: the core rule that grammatical information (case/gender/number) must appear exactly once — if the article already carries it fully (definite articles: der/die/das/den/dem/des), the adjective takes the WEAK ending; if the article carries only partial information (indefinite/possessive articles: ein/kein/mein/unser in masc. nom., neut. nom./akk.), the adjective takes the MIXED (strong-completing) ending; if there is no article at all, the adjective takes the STRONG ending, carrying the full signal; long noun phrases chain multiple adjectives with the SAME declension type; academic/journalistic register uses higher adjective density and longer noun-phrase chains than conversation. ' +
    'Do NOT expect or require basic article/case teaching or A1-level single-adjective forms — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: choosing endings by memorized pattern-matching rather than by identifying whether the article already signals the case/gender; inconsistent endings within a chain of adjectives modifying the same noun; confusing mixed declension (ein-words) with strong declension (no article) — these differ specifically in masc. nom./neut. nom./neut. akk. positions. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- For each adjective before a noun, check whether the preceding article already signals case/gender/number; the ending should match weak/mixed/strong accordingly.\n' +
    '- Check that all adjectives in a chain modifying the same noun share the same declension type.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why referencing weak/mixed/strong logic. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Information-flow check:</b> one sentence on whether the learner\'s adjective endings correctly reflected who (article or adjective) was carrying the grammatical information.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose adjective endings by logic, not memorization. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Grammar Information Model once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: ask "who carries the grammatical information?" not "which ending do I memorize?"'
  },

  parserSentence: [
    { w: 'die', role: 'plain' }, { w: 'neue', role: 'r-schwach' }, { w: 'Studie', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: adjective endings complete whatever grammatical information the article doesn\'t already express.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ines and Timo review research papers, naturally building long academic noun phrases with all three declension types.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key academic adjectives and nouns — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master weak, mixed, and strong declension logic, and building long academic noun phrases.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific article and a newspaper analysis, identifying adjective endings and noun phrase density.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify adjective groups and noun phrases in a university lecture and research presentation.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe research, compare products, and present projects using sophisticated adjective phrases naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Expand simple noun phrases into C1 constructions, and write a 350-word academic report with dense adjective use.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill weak vs mixed vs strong, missing endings, and long noun phrase building.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 570 XP.' },
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
      desc: 'Weak/mixed/strong drills, missing-endings exercises, and a full academic report writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Grammar Information Model, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Hast du die neue Studie gelesen?', text: 'Use weak declension because the definite article already carries the information' },
    { de: 'Sie präsentiert umfangreiche empirische Untersuchungen.', text: 'Use strong declension because there is no article at all' },
    { de: 'Ein besonders innovativer technischer Lösungsansatz wird ebenfalls vorgestellt.', text: 'Use mixed declension because the indefinite article gives only partial information' },
    { de: 'Mehrere international anerkannte wissenschaftliche Studien bestätigen diese These.', text: 'Chain multiple adjectives with consistent strong declension' },
    { de: 'Unser eigener methodisch sorgfältig durchgeführter Versuch wird nächste Woche vorgestellt.', text: 'Chain multiple adjectives with consistent mixed declension' }
  ],

  vocab: [
    { de: 'umfangreich', pos: 'adjective', level: 'C1', register: 'written', en: 'extensive', hi: 'व्यापक', ex: 'Die Studie präsentiert umfangreiche empirische Untersuchungen.', exEn: 'The study presents extensive empirical investigations.', exHi: 'Adhyayan vistrit anubhavjanya jaanch prastut karta hai.', ex2: 'Der Bericht enthält umfangreiche statistische Daten.', ex2En: 'The report contains extensive statistical data.', ex2Hi: 'Report mein vistrit sankhyaatmak data hai.' },
    { de: 'der Lösungsansatz', art: 'der', gender: 'm', plural: 'Lösungsansätze', pos: 'noun', level: 'C1', register: 'written', en: 'solution approach', hi: 'समाधान दृष्टिकोण', ex: 'Ein innovativer Lösungsansatz wurde vorgestellt.', exEn: 'An innovative solution approach was presented.', exHi: 'Ek navachaari samaadhaan drishtikon prastut kiya gaya.', ex2: 'Der Lösungsansatz überzeugte das gesamte Team.', ex2En: 'The solution approach convinced the entire team.', ex2Hi: 'Samaadhaan drishtikon ne poori team ko convince kar diya.' },
    { de: 'durchführen', pos: 'verb', level: 'C1', register: 'written', en: 'to conduct, carry out', hi: 'संचालित करना', ex: 'Wir haben den Versuch methodisch sorgfältig durchgeführt.', exEn: 'We conducted the experiment methodically and carefully.', exHi: 'Humne prayog vidhipoorvak saavdhaani se sampann kiya.', ex2: 'Die Forscher führen regelmäßig neue Tests durch.', ex2En: 'The researchers regularly conduct new tests.', ex2Hi: 'Shodhkarta niyamit roop se naye test sampann karte hain.', conj: { praesens: 'führt durch', praeteritum: 'führte durch', perfekt: 'hat durchgeführt' } },
    { de: 'anerkannt', pos: 'adjective', level: 'C1', register: 'written', en: 'recognized', hi: 'मान्यता प्राप्त', ex: 'Mehrere international anerkannte Studien bestätigen die These.', exEn: 'Several internationally recognized studies confirm the thesis.', exHi: 'Kai antarrashtriya star par maanyata praapt adhyayan siddhaant ki pushti karte hain.', ex2: 'Sie ist eine anerkannte Expertin auf ihrem Gebiet.', ex2En: 'She is a recognized expert in her field.', ex2Hi: 'Woh apne kshetra mein ek maanyata praapt visheshagya hai.' },
    { de: 'interdisziplinär', pos: 'adjective', level: 'C1', register: 'written', en: 'interdisciplinary', hi: 'अंतःविषयक', ex: 'Interdisziplinäre wissenschaftliche Zusammenarbeit fördert Innovation.', exEn: 'Interdisciplinary scientific collaboration promotes innovation.', exHi: 'Antahvishayak vaigyaanik sahyog navachaar ko badhaava deta hai.', ex2: 'Das Projekt erfordert einen interdisziplinären Ansatz.', ex2En: 'The project requires an interdisciplinary approach.', ex2Hi: 'Project ko ek antahvishayak drishtikon ki zaroorat hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Die Logik hinter den Adjektivendungen',
      body: [ 'Grammar information must appear exactly once. If the article already carries the case/gender information, the adjective ending becomes weak. If the article carries only part of the information, the adjective ending completes it (mixed). If there is no article, the adjective carries all grammatical information (strong).' ],
      hinglish: 'Poore system ke peeche ek hi soch hai \u2014 grammar ki jaankaari <b>ek hi baar</b> aani chahiye. Agar article pehle se sab bata raha hai (case, gender, number), to adjective aaram kar leta hai \u2014 yeh <b>weak</b> hai. Agar article aadhi baat batata hai, to adjective baaki poori karta hai \u2014 <b>mixed</b>. Aur agar article hai hi nahi, to poora kaam adjective ko karna padta hai \u2014 <b>strong</b>. Isliye table ratne se pehle yeh poochho: yahan jaankaari de kaun raha hai?'
    },
    {
      title: 'Schwache Deklination (Weak Declension)',
      body: [ 'der große Tisch / die interessante Studie / das neue Gebäude / dem kleinen Kind / den wichtigen Bericht — the definite article already signals case/gender/number fully, so the adjective relaxes to "-e" or "-en".' ],
      hinglish: '<b>der/die/das</b> ke saath adjective ko kuch batana hi nahi padta, isliye yahan sirf do endings aati hain \u2014 <b>-e</b> ya <b>-en</b>. Yeh sabse aasaan group hai: nominative singular mein <b>-e</b>, aur baaki lagbhag har jagah <b>-en</b>.'
    },
    {
      title: 'Gemischte Deklination (Mixed Declension)',
      body: [ 'ein guter Lehrer / eine interessante Idee / kein neues Problem / mein alter Computer / unser kleines Haus — indefinite/possessive articles carry only partial information (especially in masc. nom., neut. nom./akk.), so the adjective completes the missing signal.' ],
      hinglish: '<b>ein</b>, <b>kein</b> aur possessives (<b>mein, unser</b>) ek problem create karte hain \u2014 <i>ein</i> khud se gender nahi bata pata. Masculine nominative aur neuter mein <i>ein</i> bilkul khaali hai, isliye wahan adjective ko gender batana padta hai: <b>ein guter Lehrer</b>, <b>ein neues Problem</b>. Baaki jagah yeh weak jaisa hi chalta hai.'
    },
    {
      title: 'Starke Deklination (Strong Declension)',
      body: [ 'guter Wein / frisches Brot / kaltes Wasser / spannende Forschung / wichtige Informationen — with no article at all, the adjective must carry the full grammatical signal alone.' ],
      hinglish: 'Jab article hai hi nahi \u2014 aksar khaane-peene ki cheezon, abstract nouns aur plural ke saath \u2014 to poora bojh adjective par aa jaata hai. Aur tab woh wahi endings le leta hai jo <i>der/die/das</i> ki hoti hain: <b>guter</b> Wein (jaise <i>der</i>), <b>kaltes</b> Wasser (jaise <i>das</i>).'
    },
    {
      title: 'Die Endungen selbst',
      body: [
        'The logic above tells you WHICH declension applies. Here are the endings it produces \u2014 and the good news is how little there is to learn.',
        'Weak has only two endings in total. Mixed is identical to weak except in three slots. Strong copies the definite article\u2019s own endings.'
      ],
      table: {
        head: ['Case', 'Weak (der)', 'Mixed (ein)', 'Strong (no article)'],
        rows: [
          ['Nom. masc.', 'der gut<b>e</b>', 'ein gut<b>er</b>', 'gut<b>er</b> Wein'],
          ['Nom./Akk. neut.', 'das gut<b>e</b>', 'ein gut<b>es</b>', 'gut<b>es</b> Brot'],
          ['Nom. fem.', 'die gut<b>e</b>', 'eine gut<b>e</b>', 'gut<b>e</b> Milch'],
          ['Akk. masc.', 'den gut<b>en</b>', 'einen gut<b>en</b>', 'gut<b>en</b> Wein'],
          ['Dativ (all)', 'dem/der gut<b>en</b>', 'einem gut<b>en</b>', 'gut<b>em</b> Wein'],
          ['Plural', 'die gut<b>en</b>', 'meine gut<b>en</b>', 'gut<b>e</b> Weine']
        ]
      },
      note: 'Weak uses only <b>-e</b> and <b>-en</b>: <b>-e</b> in the nominative singular (and neuter/feminine accusative), <b>-en</b> everywhere else. Mixed differs from weak in exactly three cells \u2014 the ones where <i>ein</i> shows no gender. And after <b>mehrere, viele, einige, wenige</b> the adjective is STRONG, not weak.',
      hinglish: 'Upar wali logic batati hai ki kaunsi declension lagegi \u2014 ab endings khud dekh lo, aur achhi baat yeh hai ki yaad karne ko bahut kam hai. <b>Weak</b> mein sirf do endings hain: <b>-e</b> aur <b>-en</b>. Nominative singular mein <b>-e</b> (aur neuter/feminine accusative mein bhi), aur baaki har jagah <b>-en</b>. <b>Mixed</b> weak jaisa hi hai, sirf teen jagah alag hai \u2014 wahi teen jahan <i>ein</i> gender nahi dikha pata (masculine nominative aur neuter nom./akk.). Aur <b>strong</b> mein adjective wahi endings leta hai jo <i>der/die/das</i> ki hoti hain. Ek cheez dhyaan se \u2014 <b>mehrere, viele, einige, wenige</b> article nahi maane jaate, isliye unke baad adjective <b>strong</b> hota hai: <span class="de">mehrere interessante Studien</span>.'
    },
    {
      title: 'Lange Nominalgruppen (Long Noun Phrases)',
      body: [ 'die außerordentlich gut vorbereitete wissenschaftliche Präsentation / ein besonders innovativer technischer Lösungsansatz / mehrere international anerkannte wissenschaftliche Studien — authentic C1 noun groups chain multiple adjectives, all sharing the same declension type.' ],
      hinglish: 'C1 texts mein ek noun ke aage kai adjectives lag jaate hain. Yaad rakhne ki ek hi baat hai \u2014 saare adjectives ek hi noun ko describe kar rahe hain, isliye sab par <b>ek jaisi</b> ending lagti hai. Aur jo adverb hain (<i>au\u00dferordentlich</i>, <i>besonders</i>, <i>international</i>) unpar koi ending nahi lagti, kyunki woh adjective ko describe kar rahe hain, noun ko nahi.'
    },
    {
      title: 'Nominalstil (Nominal Style Compression)',
      body: [ 'German compresses information into noun phrases instead of relative clauses: relative clauses → adjective groups → participial constructions. This is why academic and journalistic German has such adjective-dense noun phrases.' ],
      hinglish: 'German lambi baat ko relative clause ki jagah noun phrase mein daal deta hai \u2014 <span class="de">die Pr\u00e4sentation, die gut vorbereitet war</span> se <span class="de">die gut vorbereitete Pr\u00e4sentation</span>. Isi wajah se academic aur newspaper German mein noun se pehle itna kuch aa jaata hai. Padhte waqt tarika yeh hai: pehle article dekho, phir seedha noun dhoondo, aur beech ka hissa baad mein.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Article type mapped to declension.' ],
      table: {
        head: ['Article Type', 'Declension'],
        rows: [
          ['Definite Article', 'Weak'],
          ['Indefinite Article', 'Mixed'],
          ['No Article', 'Strong']
        ]
      },
      hinglish: 'Article type se declension ka table \u2014 pehle yeh dekho ki aage kaunsa article hai, phir usi hisaab se ending chuno.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Each of these is the same question asked badly: who carries the grammatical information here? Note especially the last two \u2014 chained adjectives always share one ending, and the ending follows the case, not the phrase you copied.' ],
      mistakes: [
        { wrong: 'Das ist ein guten Vorschlag.', right: 'Das ist ein guter Vorschlag.', why: '<i>ein</i> shows no gender in the masculine nominative, so the adjective has to supply it: <b>-er</b>. This is the classic mixed-declension slot.' },
        { wrong: 'Wir tranken kalter Wasser.', right: 'Wir tranken kaltes Wasser.', why: 'With no article the adjective carries everything. <i>Wasser</i> is neuter and the case is accusative, so the ending is <b>-es</b>.' },
        { wrong: 'Mit dem neue Kollegen habe ich gesprochen.', right: 'Mit dem neuen Kollegen habe ich gesprochen.', why: '<i>dem</i> already marks the dative, so the adjective relaxes \u2014 but in the dative the weak ending is <b>-en</b>, never <b>-e</b>.' },
        { wrong: 'Sie hat mehrere interessanten Studien gelesen.', right: 'Sie hat mehrere interessante Studien gelesen.', why: '<i>mehrere</i>, <i>viele</i>, <i>einige</i> and <i>wenige</i> do not count as articles \u2014 the adjective after them takes the STRONG plural ending <b>-e</b>.' },
        { wrong: 'ein besonders innovativer technischer L\u00f6sungsansatz \u2014 mit einem innovativer Ansatz', right: 'mit einem innovativen Ansatz', why: 'The ending follows the CASE, not the phrase you copied it from. After <i>mit einem</i> the adjective takes <b>-en</b>.' },
        { wrong: 'die gut vorbereitete wissenschaftlichen Pr\u00e4sentation', right: 'die gut vorbereitete wissenschaftliche Pr\u00e4sentation', why: 'Every adjective in a chain takes the SAME ending \u2014 they all describe the same noun, so they cannot differ.' }
      ],
      hinglish: 'Har galti mein sawaal ek hi hai, bas galat poochha gaya \u2014 yahan jaankaari de kaun raha hai? Aakhri do khaas dekho: chain mein saare adjectives ki ending ek jaisi hoti hai, aur ending case se aati hai, us phrase se nahi jahan se tumne copy ki.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Definite article? Weak. Indefinite article? Mixed. No article? Strong. Long noun phrase? Apply the correct ending to EVERY adjective consistently.' ],
      note: 'Memory trick: never ask "which ending should I memorize?" Ask "who already carries the grammatical information?" If the article does the work, the adjective relaxes. If nobody does, the adjective must do the job.',
      hinglish: '<b>der/die/das</b>? Weak. <b>ein/kein/mein</b>? Mixed. Koi article nahi? Strong. Aur lambe noun phrase mein har adjective par wahi ek ending lagao. Yaad rakho \u2014 ending yaad mat karo, yeh poochho ki jaankaari kaun de raha hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Architekturmagazin: Ein vielversprechender Baustoff',
    titleEn: 'Reading A — Architecture magazine: a promising building material',
    tokens: [
      { w: 'Ein', role: 'r-strong', en: 'a (masc., no preceding article marker, strong ending)', hi: 'एक', type: 'Article · Nom. (stark)', why: 'Without a definite article, the adjective itself must carry the case marker (starke Deklination) (this chapter).' },
      { w: 'neuartiger', role: 'r-strong', en: 'novel (strong ending -er)', hi: 'नई तरह का', type: 'Adjective · Nom. (stark)' },
      { w: 'Dämmstoff', role: 'plain', en: 'insulation material (Satzende)', hi: 'इंसुलेशन सामग्री (Satzende)', type: 'Noun · masc.' },
      { w: 'aus', role: 'plain', en: 'made from', hi: 'से बनी', type: 'Preposition · Dat.' },
      { w: 'recyceltem', role: 'r-strong', en: 'recycled (strong ending -em)', hi: 'पुनर्चक्रित', type: 'Adjective · Dat. (stark)' },
      { w: 'Altpapier', role: 'plain', en: 'waste paper (Satzende)', hi: 'पुराने काग़ज़ (Satzende)', type: 'Noun · neut.' },
      { w: 'sorgt', role: 'plain', en: 'is causing', hi: 'पैदा कर रही है', type: 'Verb · sorgen für (Präsens)' },
      { w: 'derzeit', role: 'plain', en: 'currently', hi: 'फ़िलहाल', type: 'Adverb' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'Aufsehen', role: 'plain', en: 'a stir (Satzende)', hi: 'हलचल (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-weak', en: 'the (fem., definite article — weak ending)', hi: 'यह', type: 'Article · Nom.', why: 'With a definite article, the adjective takes the weak ending -e (schwache Deklination) (this chapter).' },
      { w: 'ungewöhnliche', role: 'r-weak', en: 'unusual (weak ending -e)', hi: 'असाधारण', type: 'Adjective · Nom. (schwach)' },
      { w: 'Kombination', role: 'plain', en: 'combination (Satzende)', hi: 'संयोजन (Satzende)', type: 'Noun · fem.' },
      { w: 'aus', role: 'plain', en: 'of', hi: 'का', type: 'Preposition · Dat.' },
      { w: 'niedrigen', role: 'r-strong', en: 'low (Dativ plural, no article — strong ending)', hi: 'कम', type: 'Adjective · Dat. (stark)' },
      { w: 'Produktionskosten', role: 'plain', en: 'production costs (Satzende)', hi: 'उत्पादन लागत (Satzende)', type: 'Noun · plural' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'hervorragenden', role: 'r-strong', en: 'excellent (Dativ plural, no article — strong ending)', hi: 'उत्कृष्ट', type: 'Adjective · Dat. (stark)' },
      { w: 'Dämmwerten', role: 'plain', en: 'insulation values (Satzende)', hi: 'इंसुलेशन मानकों (Satzende)', type: 'Noun · plural' },
      { w: 'überzeugt', role: 'plain', en: 'convinces', hi: 'प्रभावित करती है', type: 'Verb · überzeugen (Präsens)' },
      { w: 'selbst', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'skeptische', role: 'r-mixed', en: 'skeptical (mixed declension, after "selbst" — no article)', hi: 'संदेहवादी', type: 'Adjective · Akk. (stark)' },
      { w: 'Bauingenieure', role: 'plain', en: 'civil engineers (Satzende)', hi: 'सिविल इंजीनियर (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'r-mixed', en: 'a (masc., indefinite article — mixed ending)', hi: 'एक', type: 'Article · Nom.', why: 'After an indefinite article, adjectives take mixed endings (gemischte Deklination) (this chapter).' },
      { w: 'großes', role: 'r-mixed', en: 'large (mixed ending -es)', hi: 'बड़ा', type: 'Adjective · Nom. (gemischt)' },
      { w: 'deutsches', role: 'r-mixed', en: 'German (mixed ending -es)', hi: 'जर्मन', type: 'Adjective · Nom. (gemischt)' },
      { w: 'Bauunternehmen', role: 'plain', en: 'construction company (Satzende)', hi: 'निर्माण कंपनी (Satzende)', type: 'Noun · neut.' },
      { w: 'plant', role: 'plain', en: 'is planning', hi: 'योजना बना रही है', type: 'Verb · planen' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'इस', type: 'Article · Akk.' },
      { w: 'flächendeckenden', role: 'r-weak', en: 'widespread (weak ending, definite article)', hi: 'व्यापक', type: 'Adjective · Akk. (schwach)' },
      { w: 'Einsatz', role: 'plain', en: 'use (Satzende)', hi: 'इस्तेमाल (Satzende)', type: 'Noun · masc.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'seinen', role: 'r-mixed', en: 'its (Possessivartikel — mixed ending)', hi: 'अपनी', type: 'Possessivartikel · Dat. (gemischt)' },
      { w: 'nächsten', role: 'r-mixed', en: 'next (mixed ending)', hi: 'अगली', type: 'Adjective · Dat. (gemischt)' },
      { w: 'Projekten', role: 'plain', en: 'projects (Satzende)', hi: 'परियोजनाओं (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'A novel insulation material made from recycled waste paper is currently causing a stir. The unusual combination of low production costs and excellent insulation values convinces even skeptical civil engineers. A large German construction company is already planning widespread use in its next projects.',
    comprehension: [
      { q: 'Warum hat "neuartiger" die Endung -er?', options: ['Kein Artikel davor — starke Deklination', 'Es ist ein Superlativ', 'Es steht im Plural'], answer: 0 },
      { q: 'Warum hat "ungewöhnliche" die Endung -e?', options: ['Bestimmter Artikel davor — schwache Deklination', 'Es ist unregelmäßig', 'Es ist ein Prädikativadjektiv'], answer: 0 },
      { q: 'Welche Deklination liegt bei "Ein großes deutsches Bauunternehmen" vor?', options: ['Gemischte Deklination (unbestimmter Artikel)', 'Starke Deklination', 'Schwache Deklination'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsanalyse',
    titleEn: 'Reading B — Newspaper analysis',
    tokens: [
      { w: 'Dramatische', role: 'r-stark', en: 'dramatic (strong declension — no article)', hi: 'naatakiya (strong declension — koi article nahi)', type: 'Adjective · Nom. (stark)' },
      { w: 'wirtschaftliche', role: 'r-stark', en: 'economic (strong declension, chained)', hi: 'aarthik (strong declension, chained)', type: 'Adjective · Nom. (stark)' },
      { w: 'Entwicklungen', role: 'plain', en: 'developments (Satzende)', hi: 'vikaas (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'prägen', role: 'plain', en: 'shape', hi: 'aakaar dete hain', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural akk., definite article, weak trigger)', hi: 'in (definite article, weak trigger)', type: 'Article · Akk.' },
      { w: 'internationalen', role: 'r-schwach', en: 'international (weak declension — article carries the info)', hi: 'antarrashtriya (weak declension)', type: 'Adjective · Akk. (schwach)' },
      { w: 'politischen', role: 'r-schwach', en: 'political (weak declension, chained)', hi: 'raajneetik (weak declension, chained)', type: 'Adjective · Akk. (schwach)' },
      { w: 'Spannungen', role: 'plain', en: 'tensions (Satzende)', hi: 'tanaav ko (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Dramatic economic developments are shaping the international political tensions.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_018_L001', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dieser anerkannte Professor schlägt in seinem neuen Lösungsansatz etwas ziemlich Ungewöhnliches vor.', en: 'Timo, this recognized professor proposes something quite unusual in his new solution approach.' },
      { id: 'C1_018_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wirklich? Das umfangreiche Projekt, das er beschreibt, klingt jedenfalls sehr ambitioniert.', en: 'Really? The extensive project he describes sounds very ambitious at least.' },
      { id: 'C1_018_L003', speaker: 'Ines', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber die entscheidende Frage bleibt, ob die begrenzten Ressourcen dafür überhaupt ausreichen.', en: 'Yes, but the decisive question remains whether the limited resources are even sufficient for that.' },
      { id: 'C1_018_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau das sollten wir in der Diskussion morgen ansprechen.', en: 'That\'s exactly what we should address in tomorrow\'s discussion.' }
    ],
    transcript: 'Timo, dieser anerkannte Professor schlägt in seinem neuen Lösungsansatz etwas ziemlich Ungewöhnliches vor. Wirklich? Das umfangreiche Projekt, das er beschreibt, klingt jedenfalls sehr ambitioniert. Ja, aber die entscheidende Frage bleibt, ob die begrenzten Ressourcen dafür überhaupt ausreichen. Genau das sollten wir in der Diskussion morgen ansprechen.',
    translation: 'Timo, this recognized professor proposes something quite unusual in his new solution approach. Really? The extensive project he describes sounds very ambitious at least. Yes, but the decisive question remains whether the limited resources are even sufficient for that. That\'s exactly what we should address in tomorrow\'s discussion.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dieser' },
      { w: 'anerkannte' },
      { w: 'Professor' },
      { w: 'schlägt' },
      { w: 'in' },
      { w: 'seinem' },
      { w: 'neuen' },
      { w: 'Lösungsansatz' },
      { w: 'etwas' },
      { w: 'ziemlich' },
      { w: 'Ungewöhnliches' },
      { w: 'vor' },
      { w: '.', plain: true },
      { w: 'Wirklich' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'umfangreiche' },
      { w: 'Projekt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'er' },
      { w: 'beschreibt' },
      { w: ',', plain: true },
      { w: 'klingt' },
      { w: 'jedenfalls' },
      { w: 'sehr' },
      { w: 'ambitioniert' },
      { w: '.', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'entscheidende' },
      { w: 'Frage' },
      { w: 'bleibt' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: 'die' },
      { w: 'begrenzten' },
      { w: 'Ressourcen' },
      { w: 'dafür' },
      { w: 'überhaupt' },
      { w: 'ausreichen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'das' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Diskussion' },
      { w: 'morgen' },
      { w: 'ansprechen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was schlägt die Professorin vor?', qEn: 'What does the professor propose?', options: ['nichts Neues', 'etwas ziemlich Ungewöhnliches', 'eine alte Idee', 'eine Absage'], optionsEn: ['nothing new', 'something quite unusual', 'an old idea', 'a cancellation'], answer: 1,
        explain: '"… schlägt … etwas ziemlich Ungewöhnliches vor."' },
      { q: 'Welche Frage bleibt offen?', qEn: 'What question remains open?', options: ['ob das Projekt interessant ist', 'ob die begrenzten Ressourcen ausreichen', 'ob der Professor recht hat', 'ob die Konferenz stattfindet'], optionsEn: ['whether the project is interesting', 'whether the limited resources are sufficient', 'whether the professor is right', 'whether the conference is taking place'], answer: 1,
        explain: '"… ob die begrenzten Ressourcen dafür überhaupt ausreichen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo erzählt vom Vorschlag des anerkannten Professors. Reagiere.", taskEn: "Timo talks about the renowned professor's proposal. Respond.", de: "Das umfangreiche Projekt, das er vorschlägt, ist wirklich ungewöhnlich.", en: "The extensive project he proposes really is unusual." },
    { task: "Stell im Seminar den neuen Lösungsansatz vor.", taskEn: "Present the new approach in the seminar.", de: "Der interdisziplinäre Lösungsansatz wurde in drei Kliniken durchgeführt.", en: "The interdisciplinary approach was implemented in three clinics." },
    { task: "Beschreibe im Antrag dein Vorhaben.", taskEn: "Describe your project in the proposal.", de: "Wir planen ein interdisziplinäres, langfristig angelegtes Projekt.", en: "We're planning an interdisciplinary, long-term project." },
    { task: "Ein Gutachter fragt, was deine Untersuchung insgesamt kennzeichnet.", taskEn: "A reviewer asks what characterises your study overall.", de: "Belastbare Daten, klare Effekte und methodische Grenzen prägen die Ergebnisse.", en: "Robust data, clear effects and methodological limits shape the results." },
    { task: "Eine Kollegin fragt, welcher Beitrag überzeugender ist.", taskEn: "A colleague asks which paper is more convincing.", de: "Der neue Beitrag ist präziser, aber eine umfangreiche Datenbasis fehlt.", en: "The new paper is more precise, but an extensive data basis is missing." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Expansion (150 words): Expand simple noun phrases into authentic C1 adjective constructions, using weak, mixed, and strong declension correctly.\n\nTASK 2 — Academic report (350 words): Write a report using a high density of correctly declined adjectives and complex noun phrases.',
    starters: ['Die außerordentlich gut vorbereitete wissenschaftliche Präsentation überzeugte das Publikum.', 'Mehrere international anerkannte Studien bestätigen diese These.'],
    placeholder: 'Unsere neue Untersuchung zeigt umfangreiche empirische Ergebnisse. Ein besonders innovativer Lösungsansatz wurde vorgestellt...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'In "guter Wein" (no article), which declension is used?',
      options: ['Strong (adjective carries all the grammatical information)', 'Weak (article carries it)', 'Mixed (partial information)'],
      answer: 0,
      explain: 'With no article, the adjective alone must signal case, gender, and number — strong declension.'
    },
    gap: {
      sentence: ['Ein besonders innovativ', ' technischer Lösungsansatz wurde vorgestellt.'],
      gaps: [ { answer: 'er', accepts: ['er'] } ],
      explain: '"Ein" doesn\'t clearly show masc. nom., so the adjective adds the strong "-er" ending — mixed declension.'
    },
    match: {
      q: 'Match each article type to its declension.',
      pairs: [
        { noun: 'der/die/das (definite)', art: 'Weak' },
        { noun: 'ein/kein/mein (indefinite/possessive)', art: 'Mixed' },
        { noun: 'no article', art: 'Strong' },
        { noun: 'mehrere/mehrere Studien (no article)', art: 'Strong' }
      ]
    },
    builder: {
      target: 'Build: "Have you read the new study?" (weak declension)',
      bank: ['Hast', 'du', 'die', 'neue', 'Studie', 'gelesen', '?'],
      answer: ['Hast', 'du', 'die', 'neue', 'Studie', 'gelesen', '?'],
      roles: { 'neue': 'r-schwach' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Mehrere international anerkannten wissenschaftlichen Studien bestätigen diese These.',
      right: 'Mehrere international anerkannte wissenschaftliche Studien bestätigen diese These.',
      explain: 'With no article ("mehrere" acting as a strong quantifier), all chained adjectives take the strong plural nominative "-e", not "-en".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What determines whether an adjective takes weak, mixed, or strong declension?', options: ['Whether the article already carries the grammatical information', 'Random memorization', 'The adjective\'s meaning'], answer: 0,
      explain: 'The ending fills in whatever information the article does not already express.' },
    { q: 'Which declension applies with a definite article (der/die/das)?', options: ['Weak', 'Strong', 'Mixed'], answer: 0,
      explain: 'Definite articles already carry full grammatical information, so adjectives relax to weak endings.' },
    { q: 'Which declension applies with no article at all?', options: ['Strong', 'Weak', 'Mixed'], answer: 0,
      explain: 'With no article, the adjective must carry the full grammatical signal alone.' },
    { q: 'What happens to multiple adjectives chained before one noun?', options: ['They all share the same declension type', 'Each takes a different random ending', 'Only the last adjective is declined'], answer: 0,
      explain: 'All adjectives modifying the same noun in one phrase take the same declension type.' },
    { q: 'What is the C1 memory trick for choosing adjective endings?', options: ['Ask "who carries the grammatical information?" not "which ending do I memorize?"', 'Always use the same ending', 'Endings are random'], answer: 0,
      explain: 'Adjective endings are determined by information flow, not arbitrary memorization.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-schwach', html: 'Weak declension applies when a definite article already carries the case/gender/number information in full.' },
    { c: 'r-gemischt', html: 'Mixed declension applies when an indefinite/possessive article carries only partial information, and the adjective completes it.' },
    { c: 'r-stark', html: 'Strong declension applies when no article is present, and the adjective alone must signal the full grammatical information.' }
  ],
  revisionTips: [
    'Take five noun phrases with no article and add two chained adjectives, applying consistent strong declension throughout.',
    'Find a German academic abstract and mark each adjective as weak, mixed, or strong based on its article.',
    'Practise building a four-adjective noun phrase and check that every adjective shares the same declension type.'
  ]
};

window.CHAPTER = CHAPTER;
