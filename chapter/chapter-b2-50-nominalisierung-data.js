/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 5 · Chapter 50
   "Nominalisierung (Verb → Nomen / Adjektiv → Nomen)" —
   turning verbs and adjectives into nouns for formal/academic
   register: analysieren → die Analyse; wichtig → die Wichtigkeit.
   Verbalstil (informal, action-focused) vs Nominalstil (formal,
   concept-focused). Does NOT teach Funktionsverbgefüge or C1
   nominal chains.
   IMPORTANT: dialogue uses ONLY Katja and Timo.
   Vocabulary source: uploaded Chapter 50 list (61 items).
============================================================ */
const CHAPTER = {
  id: 'b2-50-nominalisierung',
  phase: 'B2 · Phase 5',
  number: 50,
  title: 'Nominalisierung',
  titleEn: 'Verb → noun / adjective → noun',
  description: 'Wir analysieren die Daten. → Die Analyse der Daten erfolgt. The formal style German prefers.',
  xp: 600,
  time: 70,
  difficulty: 'Advanced',
  nextChapter: { number: 51, title: 'Erweiterte Partizipialattribute', titleEn: 'Extended participial attributes' , href: 'chapter-b2-51-erweiterte-partizipialattribute.html' },

  prevChapter: { number: 49, title: 'Passiv in Wissenschaft & Beruf', titleEn: 'Passive voice in science & the workplace', href: 'chapter-b2-49-passiv-in-wissenschaft-und-beruf.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'From <em>action</em> to <em>concept</em>.',
    intro: 'In a seminar, Katja and Timo turn everyday complaints — rising rents, a problem that took weeks to pin down — into the formal nouns German prefers: die Erhöhung der Mietkosten, die Untersuchung der Ursache.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear how Verbalstil sentences transform into Nominalstil, and why formal German prefers nouns'
    ],
    scene: 'Im Seminarraum',
    femaleSpeakers: ['Katja'],
    dialogue: [
      { speaker: 'Katja', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Erhöhung', role: 'r-subject', en: 'increase', hi: 'वृद्धि', pron: 'er-HÖ-hung', type: 'Noun · fem.', why: 'Nominalisierung: verb erhöhen → noun die Erhöhung (this chapter).', ex: 'die Erhöhung der Mietkosten' },
        { w: 'der', role: 'r-dativ', en: 'of the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Mietkosten', role: 'r-dativ', en: 'rent costs (gen.)', hi: 'किराए के', pron: 'MEET-kos-ten', type: 'Noun · plural genitive' },
        { w: 'ärgert', role: 'r-verb', en: 'annoys', hi: 'नाराज़ करती है', pron: 'ER-gert', type: 'Verb · ärgern' },
        { w: 'viele', role: 'r-akkusativ', en: 'many', hi: 'कई', pron: 'FEE-luh', type: 'Determiner' },
        { w: 'Mieter', role: 'r-akkusativ', en: 'tenants', hi: 'किरायेदार', pron: 'MEE-ter', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'The increase of the rent costs annoys many tenants.', hi: 'Kiraaye ki lagat ki vriddhi kai kiraayedaaron ko naaraaz karti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verringerung', role: 'r-subject', en: 'reduction', hi: 'कमी', pron: 'fer-RIN-ge-rung', type: 'Noun · fem.', why: 'verringern → die Verringerung (this chapter).', ex: 'die Verringerung der Nebenkosten' },
        { w: 'der', role: 'r-dativ', en: 'of the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Nebenkosten', role: 'r-dativ', en: 'extra costs (gen.)', hi: 'अतिरिक्त लागत के', pron: 'NAY-ben-kos-ten', type: 'Noun · plural genitive' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगी', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gute', role: 'r-akkusativ', en: 'good', hi: 'अच्छी', pron: 'GOO-tuh', type: 'Adjective' },
        { w: 'Lösung', role: 'r-akkusativ', en: 'solution', hi: 'हल', pron: 'LÖ-zung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The reduction of the extra costs would be a good solution.', hi: 'Atirikt lagat ki kami ek achha hal hogi.' },
      { speaker: 'Katja', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Feststellung', role: 'r-subject', en: 'determination', hi: 'निर्धारण', pron: 'FEST-shte-lung', type: 'Noun · fem.', why: 'feststellen → die Feststellung (this chapter).', ex: 'die Feststellung des Problems' },
        { w: 'des', role: 'r-dativ', en: 'of the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Problems', role: 'r-dativ', en: 'problem (gen.)', hi: 'समस्या के', pron: 'pro-BLAYMS', type: 'Noun · neut. genitive' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'einfach', role: 'r-akkusativ', en: 'easy', hi: 'आसान', pron: 'INE-fakh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The determination of the problem was not easy.', hi: 'Samasya ka nirdharan aasaan nahi tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Untersuchung', role: 'r-subject', en: 'investigation', hi: 'जांच', pron: 'UN-ter-zoo-khung', type: 'Noun · fem.', why: 'untersuchen → die Untersuchung (this chapter).', ex: 'die Untersuchung der Ursache' },
        { w: 'der', role: 'r-dativ', en: 'of the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Ursache', role: 'r-dativ', en: 'cause (gen.)', hi: 'कारण की', pron: 'OOR-zah-khuh', type: 'Noun · fem. genitive' },
        { w: 'dauerte', role: 'r-verb', en: 'took', hi: 'लगे', pron: 'DOW-er-tuh', type: 'Verb · dauern (Präteritum)' },
        { w: 'mehrere', role: 'r-akkusativ', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'Wochen', role: 'r-akkusativ', en: 'weeks', hi: 'हफ़्ते', pron: 'VO-khen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'The investigation of the cause took several weeks.', hi: 'Kaaran ki jaanch ko kai hafte lage.' },
      { speaker: 'Katja', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'froh', role: 'r-akkusativ', en: 'glad', hi: 'ख़ुश', pron: 'froh', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Betrachtung', role: 'r-subject', en: 'consideration', hi: 'विचार', pron: 'be-TRAKH-tung', type: 'Noun · fem.', why: 'betrachten → die Betrachtung (this chapter).', ex: 'die Betrachtung des Falls' },
        { w: 'des', role: 'r-dativ', en: 'of the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Falls', role: 'r-dativ', en: 'case (gen.)', hi: 'मामले के', pron: 'fals', type: 'Noun · masc. genitive' },
        { w: 'endlich', role: 'r-akkusativ', en: 'finally', hi: 'अंततः', pron: 'ENT-likh', type: 'Adverb' },
        { w: 'abgeschlossen', role: 'r-akkusativ', en: 'finished', hi: 'पूर्ण', pron: 'AP-ge-shlo-sen', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Nevertheless I am glad that the consideration of the case is finally finished.', hi: 'Phir bhi mujhe khushi hai ki maamle ka vichaar aakhirkar poorn hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Verbesserung', role: 'r-subject', en: 'improvement', hi: 'सुधार', pron: 'fer-BE-se-rung', type: 'Noun · fem.', why: 'verbessern → die Verbesserung (recycled B1).', ex: 'die Verbesserung der Situation' },
        { w: 'der', role: 'r-dativ', en: 'of the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Situation', role: 'r-dativ', en: 'situation (gen.)', hi: 'स्थिति की', pron: 'zi-too-a-TSYON', type: 'Noun · fem. genitive' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमें', pron: 'uns', type: 'Pronoun · acc.' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: '.', plain: true }
      ], en: 'I also. The improvement of the situation pleases all of us.', hi: 'Main bhi. Sthiti mein sudhaar humein sabko khushi deta hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German formal writing prefers nouns over verbs. <span class="de">Wir analysieren die Daten.</span> (Verbalstil, action) becomes <span class="de r-nominal">Die Analyse der Daten erfolgt.</span> (Nominalstil, concept) — same meaning, more formal register.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NOMINALISIERUNG (turning verbs and adjectives into nouns) at B2 level: e.g. analysieren → die Analyse, entscheiden → die Entscheidung, entwickeln → die Entwicklung, untersuchen → die Untersuchung, diskutieren → die Diskussion, verbessern → die Verbesserung, bewerben → die Bewerbung, beschreiben → die Beschreibung; and from adjectives: wichtig → die Wichtigkeit, möglich → die Möglichkeit, gesund → die Gesundheit, frei → die Freiheit, aktiv → die Aktivität, sicher → die Sicherheit, verantwortlich → die Verantwortung. Nominalstil (noun-heavy, formal) contrasts with Verbalstil (verb-heavy, everyday/informal). ' +
    'Do NOT expect or require Funktionsverbgefüge or complex C1 nominal chains — those are separate topics taught later; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that nominalised forms use the correct noun and correct grammatical gender/article (e.g. "die Analyse", not "der Analyse").\n' +
    '- Check that nominalised phrases use Genitiv or a "von" construction correctly for the acted-upon object (e.g. "die Analyse der Daten", not "die Analyse die Daten").\n' +
    '- If the text is meant to be informal/conversational, do not penalise Verbalstil — nominalisation is a REGISTER choice, not a correctness requirement.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the learner\'s balance of Nominalstil vs Verbalstil fits the apparent purpose of the text (formal report vs casual note).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you fluidly transform verbs and adjectives into their formal noun equivalents. Ready for Funktionsverbgefüge next.',
    mid: 'Good. Re-read the Master Transformation Table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: formal writing prefers Analyse over analysieren.'
  },

  parserSentence: [
    { w: 'Die', role: 'plain' }, { w: 'Analyse', role: 'r-nominal' }, { w: 'der', role: 'plain' },
    { w: 'Daten', role: 'plain' }, { w: 'erfolgt', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: formal German turns verbs and adjectives into nouns.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katja and Timo draft a research report and presentation, converting Verbalstil into Nominalstil.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 61 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master Verb→Nomen and Adjektiv→Nomen transformation and compare Verbalstil with Nominalstil.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific article excerpt and a company annual report full of Nominalisierung.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify nouns derived from verbs and adjectives, and distinguish register.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Present research and summarise reports using both Verbalstil and Nominalstil appropriately.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite an informal email formally and write a short academic report using nominalised forms.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill Verb→Nomen, Adjektiv→Nomen, and Verbalstil↔Nominalstil transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 600 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 61 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Verb→Nomen and Adjektiv→Nomen drills, style-rewriting exercises, and an academic-report task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full transformation tables, style comparison, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'analysieren → die Analyse', text: 'Transform verbs into their formal noun equivalents' },
    { de: 'wichtig → die Wichtigkeit', text: 'Transform adjectives into their formal noun equivalents' },
    { de: 'Wir analysieren die Daten. → Die Analyse der Daten erfolgt.', text: 'Rewrite Verbalstil sentences into Nominalstil' },
    { de: 'Genitiv oder von + Dativ: die Analyse der Daten / die Analyse von Daten', text: 'Attach the object correctly to the nominalised form' },
    { de: 'Common in reports, theses, and Goethe B2 Writing', text: 'Recognize when Nominalstil is expected vs Verbalstil' }
  ],

  // ---------- Vocabulary (61 items — uploaded chapter-50 list) ----------
  vocab: [
    { de: 'experimentieren', pos: 'verb', level: 'B2', register: 'written', en: 'to experiment', hi: 'प्रयोग करना', ex: 'Die Forscher experimentierten mit neuen Methoden.', exEn: 'The researchers experimented with new methods.', exHi: 'Shodhkartaon ne nayi vidhiyon ke saath prayog kiya.', ex2: 'Sie haben lange experimentiert.', ex2En: 'They\'ve experimented for a long time.', ex2Hi: 'Unhone lambe samay tak prayog kiya hai.', conj: { praesens: 'experimentiert', praeteritum: 'experimentierte', perfekt: 'hat experimentiert' } },
    { de: 'Fazit', art: 'das', gender: 'n', plural: 'Fazits', pos: 'noun', level: 'B2', register: 'written', en: 'conclusion, verdict', hi: 'निष्कर्ष', ex: 'Nach Abschluss der Analyse schreiben wir das Fazit.', exEn: 'After the conclusion of the analysis, we\'ll write the conclusion.', exHi: 'Vishleshan ke samaapan ke baad, hum nishkarsh likhenge.', ex2: 'Ihr Fazit war klar.', ex2En: 'Her verdict was clear.', ex2Hi: 'Uska nishkarsh spasht tha.' },
    { de: 'Feind/in', art: 'der/die', gender: 'm/f', plural: 'Feinde/Feindinnen', pos: 'noun', level: 'B2', register: 'written', en: 'enemy', hi: 'दुश्मन', ex: 'Sie betrachteten sich nicht als Feinde.', exEn: 'They did not consider each other enemies.', exHi: 'Woh ek doosre ko dushman nahi maante the.', ex2: 'Sie haben einen Feind besiegt.', ex2En: 'They\'ve defeated an enemy.', ex2Hi: 'Unhone ek dushman ko haraaya hai.' },
    { de: 'Feldtheorie', art: 'die', gender: 'f', plural: 'Feldtheorien', pos: 'noun', level: 'B2', register: 'written', en: 'field theory', hi: 'क्षेत्र सिद्धांत', ex: 'Die Feldtheorie erklärt viele Phänomene.', exEn: 'Field theory explains many phenomena.', exHi: 'Kshetra siddhaant kai ghatnaayen samjhaata hai.', ex2: 'Sie haben die Feldtheorie studiert.', ex2En: 'They\'ve studied field theory.', ex2Hi: 'Unhone kshetra siddhaant padha hai.' },
    { de: 'Forscher/in', art: 'der/die', gender: 'm/f', plural: 'Forscher/innen', pos: 'noun', level: 'B2', register: 'written', en: 'researcher', hi: 'शोधकर्ता', ex: 'Die Forscher experimentierten mit neuen Methoden.', exEn: 'The researchers experimented with new methods.', exHi: 'Shodhkartaon ne nayi vidhiyon ke saath prayog kiya.', ex2: 'Sie ist eine bekannte Forscherin.', ex2En: 'She\'s a well-known researcher.', ex2Hi: 'Woh ek prasiddh shodhkarta hai.' },
    { de: 'Gealterte', art: 'der/die', gender: 'm/f', plural: 'Gealterten', pos: 'noun', level: 'B2', register: 'written', en: 'aged person', hi: 'वृद्ध व्यक्ति', ex: 'Die Gealterten brauchten besondere Pflege.', exEn: 'The aged needed special care.', exHi: 'Vriddhon ko vishesh dekhbhaal ki zaroorat thi.', ex2: 'Sie haben sich um die Gealterten gekümmert.', ex2En: 'They\'ve taken care of the aged.', ex2Hi: 'Unhone vriddhon ki dekhbhaal ki hai.' },
    { de: 'Geldbörse', art: 'die', gender: 'f', plural: 'Geldbörsen', pos: 'noun', level: 'B2', register: 'both', en: 'wallet, purse', hi: 'बटुआ', ex: 'Sie verlor ihre Geldbörse.', exEn: 'She lost her wallet.', exHi: 'Usne apna batua kho diya.', ex2: 'Sie haben eine neue Geldbörse gekauft.', ex2En: 'They\'ve bought a new wallet.', ex2Hi: 'Unhone ek naya batua khareeda hai.' },
    { de: 'Genie', art: 'das', gender: 'n', plural: 'Genies', pos: 'noun', level: 'B2', register: 'written', en: 'genius', hi: 'प्रतिभाशाली व्यक्ति', ex: 'Er wurde als Genie bezeichnet.', exEn: 'He was called a genius.', exHi: 'Use pratibhaashaali kaha gaya.', ex2: 'Sie haben sein Genie bewundert.', ex2En: 'They\'ve admired his genius.', ex2Hi: 'Unhone uski pratibha ki sarahna ki hai.' },
    { de: 'gesamt', pos: 'adjective', level: 'B2', register: 'written', en: 'entire, total', hi: 'संपूर्ण', ex: 'Die Verantwortung liegt bei dem gesamten Team.', exEn: 'The responsibility lies with the entire team.', exHi: 'Zimmedaari poori team ke paas hai.', ex2: 'Sie haben das gesamte Projekt überarbeitet.', ex2En: 'They\'ve revised the entire project.', ex2Hi: 'Unhone poora project sudhaara hai.' },
    { de: 'geschützt', pos: 'adjective', level: 'B2', register: 'written', en: 'protected', hi: 'संरक्षित', ex: 'Die Art ist geschützt.', exEn: 'The species is protected.', exHi: 'Prajaati sanrakshit hai.', ex2: 'Sie haben ein geschütztes Gebiet besucht.', ex2En: 'They\'ve visited a protected area.', ex2Hi: 'Unhone ek sanrakshit kshetra dekha hai.' },
    { de: 'Gewinner/in', art: 'der/die', gender: 'm/f', plural: 'Gewinner/innen', pos: 'noun', level: 'B2', register: 'both', en: 'winner', hi: 'विजेता', ex: 'Der Gewinner erhielt einen Preis.', exEn: 'The winner received a prize.', exHi: 'Vijeta ko ek puraskaar mila.', ex2: 'Sie haben den Gewinner bekannt gegeben.', ex2En: 'They\'ve announced the winner.', ex2Hi: 'Unhone vijeta ki ghoshna ki hai.' },
    { de: 'Gießkanne', art: 'die', gender: 'f', plural: 'Gießkannen', pos: 'noun', level: 'B2', register: 'both', en: 'watering can', hi: 'पानी देने का डिब्बा', ex: 'Sie füllte die Gießkanne.', exEn: 'She filled the watering can.', exHi: 'Usne watering can bhari.', ex2: 'Sie haben eine neue Gießkanne gekauft.', ex2En: 'They\'ve bought a new watering can.', ex2Hi: 'Unhone ek naya watering can khareeda hai.' },
    { de: 'global', pos: 'adjective', level: 'B2', register: 'written', en: 'global', hi: 'वैश्विक', ex: 'Das Problem ist global.', exEn: 'The problem is global.', exHi: 'Samasya vaishvik hai.', ex2: 'Sie haben eine globale Strategie entwickelt.', ex2En: 'They\'ve developed a global strategy.', ex2Hi: 'Unhone ek vaishvik rananeeti vikasit ki hai.' },
    { de: 'Grundwasser', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'groundwater', hi: 'भूजल', ex: 'Das Grundwasser war verschmutzt.', exEn: 'The groundwater was polluted.', exHi: 'Bhoojal dooshit tha.', ex2: 'Sie haben das Grundwasser getestet.', ex2En: 'They\'ve tested the groundwater.', ex2Hi: 'Unhone bhoojal ki jaanch ki hai.' },
    { de: 'Gymnastik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'gymnastics', hi: 'व्यायाम', ex: 'Sie macht jeden Morgen Gymnastik.', exEn: 'She does gymnastics every morning.', exHi: 'Woh har subah vyaayaam karti hai.', ex2: 'Sie haben an einem Gymnastikkurs teilgenommen.', ex2En: 'They\'ve attended a gymnastics course.', ex2Hi: 'Unhone ek vyaayaam course mein bhaag liya hai.' },
    { de: 'Hauptwerk', art: 'das', gender: 'n', plural: 'Hauptwerke', pos: 'noun', level: 'B2', register: 'written', en: 'main work, masterpiece', hi: 'मुख्य कृति', ex: 'Das Hauptwerk des Autors war berühmt.', exEn: 'The author\'s main work was famous.', exHi: 'Lekhak ki mukhya kriti prasiddh thi.', ex2: 'Sie haben sein Hauptwerk analysiert.', ex2En: 'They\'ve analysed his masterpiece.', ex2Hi: 'Unhone uski mukhya kriti ka vishleshan kiya hai.' },
    { de: 'Herzinfarkt', art: 'der', gender: 'm', plural: 'Herzinfarkte', pos: 'noun', level: 'B2', register: 'written', en: 'heart attack', hi: 'दिल का दौरा', ex: 'Er erlitt einen Herzinfarkt.', exEn: 'He suffered a heart attack.', exHi: 'Use dil ka daura pada.', ex2: 'Sie haben ihn nach dem Herzinfarkt versorgt.', ex2En: 'They\'ve cared for him after the heart attack.', ex2Hi: 'Unhone dil ke daure ke baad uski dekhbhaal ki hai.' },
    { de: 'Herzproblem', art: 'das', gender: 'n', plural: 'Herzprobleme', pos: 'noun', level: 'B2', register: 'written', en: 'heart problem', hi: 'दिल की समस्या', ex: 'Sie hat ein Herzproblem.', exEn: 'She has a heart problem.', exHi: 'Use dil ki samasya hai.', ex2: 'Sie haben das Herzproblem behandelt.', ex2En: 'They\'ve treated the heart problem.', ex2Hi: 'Unhone dil ki samasya ka ilaaj kiya hai.' },
    { de: 'Hieroglyphe', art: 'die', gender: 'f', plural: 'Hieroglyphen', pos: 'noun', level: 'B2', register: 'written', en: 'hieroglyph', hi: 'चित्रलिपि', ex: 'Die Hieroglyphen waren schwer zu entziffern.', exEn: 'The hieroglyphs were hard to decipher.', exHi: 'Chitralipi ko samjhna mushkil tha.', ex2: 'Sie haben die Hieroglyphen entschlüsselt.', ex2En: 'They\'ve deciphered the hieroglyphs.', ex2Hi: 'Unhone chitralipi ka arth nikaala hai.' },
    { de: 'hinterlassen', pos: 'verb', level: 'B2', register: 'written', en: 'to leave behind', hi: 'छोड़ जाना', ex: 'Sie hinterließ eine Nachricht.', exEn: 'She left behind a message.', exHi: 'Usne ek sandesh chhoda.', ex2: 'Er hat einen bleibenden Eindruck hinterlassen.', ex2En: 'He\'s left behind a lasting impression.', ex2Hi: 'Usne ek sthaayi prabhaav chhoda hai.', conj: { praesens: 'hinterlässt', praeteritum: 'hinterließ', perfekt: 'hat hinterlassen' } },
    { de: 'Hirn', art: 'das', gender: 'n', plural: 'Hirne', pos: 'noun', level: 'B2', register: 'both', en: 'brain', hi: 'मस्तिष्क', ex: 'Das Hirn verarbeitet Informationen.', exEn: 'The brain processes information.', exHi: 'Mastishk jaankaari ko process karta hai.', ex2: 'Sie haben das Hirn erforscht.', ex2En: 'They\'ve researched the brain.', ex2Hi: 'Unhone mastishk par shodh kiya hai.' },
    { de: 'ignorieren', pos: 'verb', level: 'B2', register: 'both', en: 'to ignore', hi: 'नज़रअंदाज़ करना', ex: 'Sie ignorierte die Warnung.', exEn: 'She ignored the warning.', exHi: 'Usne chetaavani nazarandaaz ki.', ex2: 'Sie haben das Problem ignoriert.', ex2En: 'They\'ve ignored the problem.', ex2Hi: 'Unhone samasya nazarandaaz ki hai.', conj: { praesens: 'ignoriert', praeteritum: 'ignorierte', perfekt: 'hat ignoriert' } },
    { de: 'Inbegriff', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'epitome', hi: 'प्रतिरूप', ex: 'Sie war der Inbegriff von Eleganz.', exEn: 'She was the epitome of elegance.', exHi: 'Woh sundarta ka pratiroop thi.', ex2: 'Sie haben ihn als Inbegriff des Erfolgs bezeichnet.', ex2En: 'They\'ve called him the epitome of success.', ex2Hi: 'Unhone use safalta ka pratiroop kaha hai.' },
    { de: 'inhaltlich', pos: 'adjective', level: 'B2', register: 'written', en: 'in terms of content', hi: 'सामग्री के संदर्भ में', ex: 'Der Bericht war inhaltlich stark.', exEn: 'The report was strong in terms of content.', exHi: 'Report saamagri ke roop mein majboot thi.', ex2: 'Sie haben inhaltliche Änderungen vorgenommen.', ex2En: 'They\'ve made changes to the content.', ex2Hi: 'Unhone saamagri mein badlaav kiye hain.' },
    { de: 'Inhaltspunkt', art: 'der', gender: 'm', plural: 'Inhaltspunkte', pos: 'noun', level: 'B2', register: 'written', en: 'content point', hi: 'सामग्री बिंदु', ex: 'Jeder Inhaltspunkt wurde erklärt.', exEn: 'Every content point was explained.', exHi: 'Har saamagri bindu samjhaaya gaya.', ex2: 'Sie haben die Inhaltspunkte zusammengefasst.', ex2En: 'They\'ve summarised the content points.', ex2Hi: 'Unhone saamagri bindu saaraansh kiya hai.' },
    { de: 'Initiative', art: 'die', gender: 'f', plural: 'Initiativen', pos: 'noun', level: 'B2', register: 'written', en: 'initiative', hi: 'पहल', ex: 'Sie ergriff die Initiative.', exEn: 'She took the initiative.', exHi: 'Usne pehal ki.', ex2: 'Sie haben eine neue Initiative gestartet.', ex2En: 'They\'ve started a new initiative.', ex2Hi: 'Unhone ek nayi pehal shuru ki hai.' },
    { de: 'intakt', pos: 'adjective', level: 'B2', register: 'written', en: 'intact', hi: 'बरकरार', ex: 'Das System war intakt.', exEn: 'The system was intact.', exHi: 'System barkaraar tha.', ex2: 'Sie haben das intakte Gerät gefunden.', ex2En: 'They\'ve found the intact device.', ex2Hi: 'Unhein barkaraar upkaran mila hai.' },
    { de: 'intellektuell', pos: 'adjective', level: 'B2', register: 'written', en: 'intellectual', hi: 'बौद्धिक', ex: 'Die Diskussion war intellektuell anregend.', exEn: 'The discussion was intellectually stimulating.', exHi: 'Charcha baudhik roop se prerak thi.', ex2: 'Sie haben eine intellektuelle Debatte geführt.', ex2En: 'They\'ve had an intellectual debate.', ex2Hi: 'Unhone ek baudhik bahas ki hai.' },
    { de: 'Intellektuelle', art: 'der/die', gender: 'm/f', plural: 'Intellektuellen', pos: 'noun', level: 'B2', register: 'written', en: 'intellectual', hi: 'बुद्धिजीवी', ex: 'Die Intellektuellen diskutierten das Thema.', exEn: 'The intellectuals discussed the topic.', exHi: 'Buddhijeevi vishay par charcha kar rahe the.', ex2: 'Sie haben mit Intellektuellen gesprochen.', ex2En: 'They\'ve spoken with intellectuals.', ex2Hi: 'Unhone buddhijeeviyon se baat ki hai.' },
    { de: 'kahl', pos: 'adjective', level: 'B2', register: 'both', en: 'bare, bald', hi: 'गंजा, नंगा', ex: 'Der Baum war kahl.', exEn: 'The tree was bare.', exHi: 'Ped nanga tha.', ex2: 'Sie haben eine kahle Wand bemalt.', ex2En: 'They\'ve painted a bare wall.', ex2Hi: 'Unhone ek nangi deewaar rangi hai.' },
    { de: 'Kakerlake', art: 'die', gender: 'f', plural: 'Kakerlaken', pos: 'noun', level: 'B2', register: 'both', en: 'cockroach', hi: 'तिलचट्टा', ex: 'Sie sah eine Kakerlake.', exEn: 'She saw a cockroach.', exHi: 'Usne ek tilchatta dekha.', ex2: 'Sie haben die Kakerlaken bekämpft.', ex2En: 'They\'ve fought the cockroaches.', ex2Hi: 'Unhone tilchattton se ladaai ki hai.' },
    { de: 'Kalorie', art: 'die', gender: 'f', plural: 'Kalorien', pos: 'noun', level: 'B2', register: 'both', en: 'calorie', hi: 'कैलोरी', ex: 'Sie zählte die Kalorien.', exEn: 'She counted the calories.', exHi: 'Usne calories ginin.', ex2: 'Sie haben die Kalorien reduziert.', ex2En: 'They\'ve reduced the calories.', ex2Hi: 'Unhone calories kam ki hain.' },
    { de: 'Kämpfer/in', art: 'der/die', gender: 'm/f', plural: 'Kämpfer/innen', pos: 'noun', level: 'B2', register: 'written', en: 'fighter', hi: 'लड़ाका', ex: 'Der Kämpfer gab nicht auf.', exEn: 'The fighter did not give up.', exHi: 'Ladaaka haar nahi maana.', ex2: 'Sie haben den Kämpfer bewundert.', ex2En: 'They\'ve admired the fighter.', ex2Hi: 'Unhone ladaake ki sarahna ki hai.' },
    { de: 'Kandidat/in', art: 'der/die', gender: 'm/f', plural: 'Kandidaten/Kandidatinnen', pos: 'noun', level: 'B2', register: 'written', en: 'candidate', hi: 'उम्मीदवार', ex: 'Der Kandidat überzeugte alle.', exEn: 'The candidate convinced everyone.', exHi: 'Ummeedvaar ne sabko convince kiya.', ex2: 'Sie haben einen neuen Kandidaten gewählt.', ex2En: 'They\'ve chosen a new candidate.', ex2Hi: 'Unhone ek naya ummeedvaar chuna hai.' },
    { de: 'Keilschrift', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'cuneiform script', hi: 'कीलाकार लिपि', ex: 'Die Keilschrift war eine der ältesten Schriften.', exEn: 'Cuneiform script was one of the oldest writing systems.', exHi: 'Keelaakaar lipi sabse puraani lipiyon mein se ek thi.', ex2: 'Sie haben die Keilschrift studiert.', ex2En: 'They\'ve studied cuneiform script.', ex2Hi: 'Unhone keelaakaar lipi padhi hai.' },
    { de: 'Kinderzahl', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'number of children', hi: 'बच्चों की संख्या', ex: 'Die Kinderzahl sank in den letzten Jahren.', exEn: 'The number of children has fallen in recent years.', exHi: 'Pichhle saalon mein bachchon ki sankhya ghati hai.', ex2: 'Sie haben die Kinderzahl analysiert.', ex2En: 'They\'ve analysed the number of children.', ex2Hi: 'Unhone bachchon ki sankhya ka vishleshan kiya hai.' },
    { de: 'Kompliment', art: 'das', gender: 'n', plural: 'Komplimente', pos: 'noun', level: 'B2', register: 'both', en: 'compliment', hi: 'तारीफ़', ex: 'Sie machte ihm ein Kompliment.', exEn: 'She gave him a compliment.', exHi: 'Usne uski tareef ki.', ex2: 'Sie haben viele Komplimente erhalten.', ex2En: 'They\'ve received many compliments.', ex2Hi: 'Unhein kai tareefein mili hain.' },
    { de: 'konfiszieren', pos: 'verb', level: 'B2', register: 'written', en: 'to confiscate', hi: 'ज़ब्त करना', ex: 'Die Polizei konfiszierte die Ware.', exEn: 'The police confiscated the goods.', exHi: 'Police ne saamaan zabt kiya.', ex2: 'Sie haben das Eigentum konfisziert.', ex2En: 'They\'ve confiscated the property.', ex2Hi: 'Unhone sampatti zabt ki hai.', conj: { praesens: 'konfisziert', praeteritum: 'konfiszierte', perfekt: 'hat konfisziert' } },
    { de: 'kontinuierlich', pos: 'adjective', level: 'B2', register: 'written', en: 'continuous(ly)', hi: 'निरंतर', ex: 'Der Prozess verlief kontinuierlich.', exEn: 'The process ran continuously.', exHi: 'Prakriya nirantar chal rahi thi.', ex2: 'Sie haben kontinuierlich Fortschritte gemacht.', ex2En: 'They\'ve made continuous progress.', ex2Hi: 'Unhone nirantar pragati ki hai.' },
    { de: 'konzipieren', pos: 'verb', level: 'B2', register: 'written', en: 'to design, conceive', hi: 'डिज़ाइन करना', ex: 'Sie konzipierte das Projekt.', exEn: 'She designed the project.', exHi: 'Usne project design kiya.', ex2: 'Sie haben eine neue Strategie konzipiert.', ex2En: 'They\'ve conceived a new strategy.', ex2Hi: 'Unhone ek nayi rananeeti banaayi hai.', conj: { praesens: 'konzipiert', praeteritum: 'konzipierte', perfekt: 'hat konzipiert' } },
    { de: 'Kraftwerk', art: 'das', gender: 'n', plural: 'Kraftwerke', pos: 'noun', level: 'B2', register: 'written', en: 'power plant', hi: 'बिजली संयंत्र', ex: 'Das Kraftwerk produzierte Strom.', exEn: 'The power plant produced electricity.', exHi: 'Bijli sanyantr bijli utpaadit karta tha.', ex2: 'Sie haben ein neues Kraftwerk gebaut.', ex2En: 'They\'ve built a new power plant.', ex2Hi: 'Unhone ek naya bijli sanyantr banaaya hai.' },
    { de: 'Kreditkarte', art: 'die', gender: 'f', plural: 'Kreditkarten', pos: 'noun', level: 'B2', register: 'both', en: 'credit card', hi: 'क्रेडिट कार्ड', ex: 'Sie bezahlte mit der Kreditkarte.', exEn: 'She paid with the credit card.', exHi: 'Usne credit card se bhugtaan kiya.', ex2: 'Sie haben eine neue Kreditkarte beantragt.', ex2En: 'They\'ve applied for a new credit card.', ex2Hi: 'Unhone ek naye credit card ke liye aavedan kiya hai.' },
    { de: 'Kühlsystem', art: 'das', gender: 'n', plural: 'Kühlsysteme', pos: 'noun', level: 'B2', register: 'written', en: 'cooling system', hi: 'शीतलन प्रणाली', ex: 'Das Kühlsystem funktionierte einwandfrei.', exEn: 'The cooling system worked flawlessly.', exHi: 'Sheetalan pranaali theek se kaam kar rahi thi.', ex2: 'Sie haben das Kühlsystem repariert.', ex2En: 'They\'ve repaired the cooling system.', ex2Hi: 'Unhone sheetalan pranaali theek ki hai.' },
    { de: 'Kulturwandel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'cultural change', hi: 'सांस्कृतिक बदलाव', ex: 'Der Kulturwandel war spürbar.', exEn: 'The cultural change was noticeable.', exHi: 'Saanskritik badlaav mahsoos ho raha tha.', ex2: 'Sie haben den Kulturwandel gefördert.', ex2En: 'They\'ve promoted the cultural change.', ex2Hi: 'Unhone saanskritik badlaav ko badhaava diya hai.' },
    { de: 'Kundengespräch', art: 'das', gender: 'n', plural: 'Kundengespräche', pos: 'noun', level: 'B2', register: 'written', en: 'customer conversation', hi: 'ग्राहक बातचीत', ex: 'Das Kundengespräch verlief gut.', exEn: 'The customer conversation went well.', exHi: 'Graahak baatcheet achhi rahi.', ex2: 'Sie haben viele Kundengespräche geführt.', ex2En: 'They\'ve conducted many customer conversations.', ex2Hi: 'Unhone kai graahak baatcheet ki hain.' },
    { de: 'kurzfristig', pos: 'adjective', level: 'B2', register: 'written', en: 'short-term', hi: 'अल्पकालिक', ex: 'Es war eine kurzfristige Lösung.', exEn: 'It was a short-term solution.', exHi: 'Yeh ek alpkaalik samaadhaan tha.', ex2: 'Sie haben kurzfristig reagiert.', ex2En: 'They\'ve reacted in the short term.', ex2Hi: 'Unhone alpkaalik roop se pratikriya di hai.' },
    { de: 'Laborkittel', art: 'der', gender: 'm', plural: 'Laborkittel', pos: 'noun', level: 'B2', register: 'written', en: 'lab coat', hi: 'लैब कोट', ex: 'Sie trug einen Laborkittel.', exEn: 'She wore a lab coat.', exHi: 'Usne lab coat pehna.', ex2: 'Sie haben neue Laborkittel bestellt.', ex2En: 'They\'ve ordered new lab coats.', ex2Hi: 'Unhone naye lab coat mangvaaye hain.' },
    { de: 'längerfristig', pos: 'adjective', level: 'B2', register: 'written', en: 'longer-term', hi: 'दीर्घकालिक', ex: 'Sie planten längerfristig.', exEn: 'They planned in the longer term.', exHi: 'Unhone deerghakaalik roop se yojana banaayi.', ex2: 'Sie haben eine längerfristige Strategie entwickelt.', ex2En: 'They\'ve developed a longer-term strategy.', ex2Hi: 'Unhone ek deerghakaalik rananeeti vikasit ki hai.' },
    { de: 'langlebig', pos: 'adjective', level: 'B2', register: 'written', en: 'durable, long-lasting', hi: 'टिकाऊ', ex: 'Das Material war langlebig.', exEn: 'The material was durable.', exHi: 'Saamagri tikaau thi.', ex2: 'Sie haben ein langlebiges Produkt entwickelt.', ex2En: 'They\'ve developed a long-lasting product.', ex2Hi: 'Unhone ek tikaau product vikasit kiya hai.' },
    { de: 'langwierig', pos: 'adjective', level: 'B2', register: 'written', en: 'lengthy, protracted', hi: 'लंबा, दीर्घसूत्री', ex: 'Der Prozess war langwierig.', exEn: 'The process was lengthy.', exHi: 'Prakriya lambi thi.', ex2: 'Sie haben eine langwierige Verhandlung geführt.', ex2En: 'They\'ve conducted a protracted negotiation.', ex2Hi: 'Unhone ek lambi baatcheet ki hai.' },
    { de: 'Laus', art: 'die', gender: 'f', plural: 'Läuse', pos: 'noun', level: 'B2', register: 'both', en: 'louse', hi: 'जूं', ex: 'Sie fand eine Laus.', exEn: 'She found a louse.', exHi: 'Usne ek jun paayi.', ex2: 'Sie haben die Läuse behandelt.', ex2En: 'They\'ve treated the lice.', ex2Hi: 'Unhone jooon ka ilaaj kiya hai.' },
    { de: 'Lebenskunst', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'art of living', hi: 'जीवन कला', ex: 'Er beherrschte die Lebenskunst.', exEn: 'He mastered the art of living.', exHi: 'Usne jeevan kala mein maharat haasil ki.', ex2: 'Sie haben über die Lebenskunst philosophiert.', ex2En: 'They\'ve philosophised about the art of living.', ex2Hi: 'Unhone jeevan kala par vichaar kiya hai.' },
    { de: 'Leiter/in', art: 'der/die', gender: 'm/f', plural: 'Leiter/innen', pos: 'noun', level: 'B2', register: 'written', en: 'leader, head', hi: 'प्रमुख', ex: 'Die Leiterin traf die Entscheidung.', exEn: 'The head made the decision.', exHi: 'Pramukh ne faisla liya.', ex2: 'Sie haben einen neuen Leiter ernannt.', ex2En: 'They\'ve appointed a new leader.', ex2Hi: 'Unhone ek naya pramukh niyukt kiya hai.' },
    { de: 'Leserbrief', art: 'der', gender: 'm', plural: 'Leserbriefe', pos: 'noun', level: 'B2', register: 'written', en: 'reader\'s letter', hi: 'पाठक पत्र', ex: 'Sie schrieb einen Leserbrief.', exEn: 'She wrote a reader\'s letter.', exHi: 'Usne ek paathak patra likha.', ex2: 'Sie haben viele Leserbriefe erhalten.', ex2En: 'They\'ve received many readers\' letters.', ex2Hi: 'Unhein kai paathak patra mile hain.' },
    { de: 'Lippe', art: 'die', gender: 'f', plural: 'Lippen', pos: 'noun', level: 'B2', register: 'both', en: 'lip', hi: 'होंठ', ex: 'Sie biss sich auf die Lippe.', exEn: 'She bit her lip.', exHi: 'Usne apna honth kaata.', ex2: 'Sie haben ihre Lippen geschminkt.', ex2En: 'They\'ve done their lipstick.', ex2Hi: 'Unhone apne honthon par lipstick lagaayi hai.' },
    { de: 'maßgeblich', pos: 'adjective', level: 'B2', register: 'written', en: 'decisive, significant', hi: 'निर्णायक', ex: 'Ihr Beitrag war maßgeblich.', exEn: 'Her contribution was decisive.', exHi: 'Uska yogdaan nirnaayak tha.', ex2: 'Sie haben eine maßgebliche Rolle gespielt.', ex2En: 'They\'ve played a significant role.', ex2Hi: 'Unhone ek mahatvapurn bhoomika nibhaayi hai.' },
    { de: 'mathematisch', pos: 'adjective', level: 'B2', register: 'written', en: 'mathematical', hi: 'गणितीय', ex: 'Sie löste das mathematische Problem.', exEn: 'She solved the mathematical problem.', exHi: 'Usne ganitiya samasya suljhaayi.', ex2: 'Sie haben ein mathematisches Modell entwickelt.', ex2En: 'They\'ve developed a mathematical model.', ex2Hi: 'Unhone ek ganitiya model vikasit kiya hai.' },
    { de: 'Matratze', art: 'die', gender: 'f', plural: 'Matratzen', pos: 'noun', level: 'B2', register: 'both', en: 'mattress', hi: 'गद्दा', ex: 'Sie kaufte eine neue Matratze.', exEn: 'She bought a new mattress.', exHi: 'Usne ek naya gadda khareeda.', ex2: 'Sie haben die Matratze gewechselt.', ex2En: 'They\'ve changed the mattress.', ex2Hi: 'Unhone gadda badla hai.' },
    { de: 'Mediziner/in', art: 'der/die', gender: 'm/f', plural: 'Mediziner/innen', pos: 'noun', level: 'B2', register: 'written', en: 'medic, physician', hi: 'चिकित्सक', ex: 'Der Mediziner untersuchte den Patienten.', exEn: 'The physician examined the patient.', exHi: 'Chikitsak ne mareez ki jaanch ki.', ex2: 'Sie haben mit einem Mediziner gesprochen.', ex2En: 'They\'ve spoken with a physician.', ex2Hi: 'Unhone ek chikitsak se baat ki hai.' },
    { de: 'Mitbewohner/in', art: 'der/die', gender: 'm/f', plural: 'Mitbewohner/innen', pos: 'noun', level: 'B2', register: 'both', en: 'flatmate, roommate', hi: 'सहवासी', ex: 'Ihr Mitbewohner war sehr ordentlich.', exEn: 'Her flatmate was very tidy.', exHi: 'Uska roommate bahut saaf-suthra tha.', ex2: 'Sie haben einen neuen Mitbewohner gefunden.', ex2En: 'They\'ve found a new flatmate.', ex2Hi: 'Unhein ek naya roommate mila hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Nominalisierung?',
      body: [ 'German has two styles. Verbalstil focuses on the action; Nominalstil turns the same idea into a formal noun-based concept.' ],
      table: {
        head: ['Verbalstil', 'Nominalstil'],
        rows: [ ['Wir analysieren die Daten.', '<span class="de r-nominal">Die Analyse der Daten erfolgt.</span>'] ]
      },
      hinglish: 'German mein likhne ke do styles hain. <b>Verbalstil</b> mein verb par focus hota hai \u2014 yeh normal, bolne wali German hai. <b>Nominalstil</b> mein wahi baat noun ke roop mein aati hai, aur tab sentence formal aur official lagta hai.'
    },
    {
      title: 'Verb → Nomen',
      body: [ 'Many verbs have a natural noun equivalent, often carrying the same meaning but changing the style to formal.' ],
      table: {
        head: ['Verb', 'Noun'],
        rows: [
          ['analysieren', 'die Analyse'],
          ['entscheiden', 'die Entscheidung'],
          ['entwickeln', 'die Entwicklung'],
          ['diskutieren', 'die Diskussion'],
          ['untersuchen', 'die Untersuchung'],
          ['bewerben', 'die Bewerbung'],
          ['verbessern', 'die Verbesserung'],
          ['beschreiben', 'die Beschreibung']
        ]
      },
      hinglish: 'Kai verbs ka apna noun form hota hai, aur matlab wahi rehta hai \u2014 bas style formal ho jaata hai. Dhyaan do ki <b>-ung</b> wale saare nouns feminine hote hain (die Entwicklung, die Bewerbung), isliye article yaad karna aasaan hai.'
    },
    {
      title: 'Adjektiv → Nomen',
      body: [ 'Adjective-based nouns are also extremely common in formal writing.' ],
      table: {
        head: ['Adjective', 'Noun'],
        rows: [
          ['wichtig', 'die Wichtigkeit'],
          ['möglich', 'die Möglichkeit'],
          ['gesund', 'die Gesundheit'],
          ['frei', 'die Freiheit'],
          ['aktiv', 'die Aktivität'],
          ['sicher', 'die Sicherheit'],
          ['verantwortlich', 'die Verantwortung']
        ]
      },
      hinglish: 'Adjectives se bane nouns bhi formal writing mein bahut aate hain. Yahan bhi ek pattern hai \u2014 <b>-heit</b>, <b>-keit</b> aur <b>-t\u00e4t</b> wale sab feminine hote hain.'
    },
    {
      title: 'Verbalstil vs Nominalstil',
      body: [ 'Comparing full sentences shows how the register shifts from everyday to formal without changing the core meaning.' ],
      table: {
        head: ['Verbalstil', 'Nominalstil'],
        rows: [
          ['Wir prüfen den Vertrag.', 'Die Prüfung des Vertrags erfolgt.'],
          ['Die Firma verbessert den Service.', 'Die Verbesserung des Services ist wichtig.']
        ]
      },
      hinglish: 'Poore sentences saath rakh kar dekho \u2014 matlab wahi rehta hai, bas register everyday se formal ho jaata hai. Dhyaan do ki nominal version mein aksar <b>erfolgen</b> ya <b>ist</b> jaisa halka verb aa jaata hai, kyunki asli kaam ab noun kar raha hai.'
    },
    {
      title: 'Das Objekt kommt in den Genitiv',
      body: [
        'When you nominalise a verb, its object does not disappear \u2014 it moves into the <b>Genitiv</b> behind the new noun. This is the single most important mechanical step, and the one learners most often skip.'
      ],
      table: {
        head: ['Verbalstil', 'Nominalstil', 'Genitiv ending'],
        rows: [
          ['Wir pr\u00fcfen <b>den Vertrag</b>.', 'die Pr\u00fcfung <b>des Vertrags</b>', 'der \u2192 des + -s'],
          ['Wir analysieren <b>die Daten</b>.', 'die Analyse <b>der Daten</b>', 'die (pl.) \u2192 der'],
          ['Wir verbessern <b>die Kommunikation</b>.', 'die Verbesserung <b>der Kommunikation</b>', 'die (f.) \u2192 der'],
          ['Wir f\u00fchren <b>das Projekt</b> durch.', 'die Durchf\u00fchrung <b>des Projekts</b>', 'das \u2192 des + -s']
        ]
      },
      note: 'If the verb had a fixed preposition, that preposition stays instead of a Genitiv: <i>sich bewerben um</i> \u2192 <span class="de">die Bewerbung um die Stelle</span>, not <i>die Bewerbung der Stelle</i>.',
      hinglish: 'Jab tum verb ko noun banate ho, to uska object gayab nahi hota \u2014 woh naye noun ke peeche <b>Genitiv</b> mein chala jaata hai. Yeh sabse zaroori step hai aur yahi sabse zyada chhoot jaata hai. Masculine aur neuter mein <b>des</b> aata hai aur noun par ek <b>-s</b> bhi lagta hai (<span class="de">des Vertrags</span>), aur feminine aur plural mein <b>der</b> (<span class="de">der Kommunikation</span>, <span class="de">der Daten</span>). Ek exception yaad rakho \u2014 agar verb ka apna fixed preposition tha, to woh preposition hi rehta hai: <span class="de">die Bewerbung um die Stelle</span>.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These fixed phrases appear constantly in Goethe B2 reading and writing tasks.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Nach der Anmeldung ...', 'After the registration ...'],
          ['Vor der Entscheidung ...', 'Before the decision ...'],
          ['Während der Untersuchung ...', 'During the investigation ...'],
          ['Nach Abschluss der Analyse ...', 'After the conclusion of the analysis ...'],
          ['Die Verbesserung der Kommunikation ...', 'The improvement of communication ...']
        ]
      },
      hinglish: 'Yeh fixed phrases Goethe B2 ki reading aur writing mein baar-baar aati hain. Dhyaan do ki <b>nach</b>, <b>vor</b> aur <b>w\u00e4hrend</b> ke baad Dativ ya Genitiv aata hai \u2014 isliye inhe poore chunk ki tarah yaad kar lo.'
    },
    {
      title: 'Typische akademische Sprache',
      body: [ 'Academic German is dominated by Nominalstil because it sounds objective and precise.' ],
      table: {
        head: ['German', 'English'],
        rows: [
          ['Die Entwicklung neuer Technologien ...', 'The development of new technologies ...'],
          ['Die Untersuchung zeigt ...', 'The investigation shows ...'],
          ['Die Analyse ergibt ...', 'The analysis yields ...'],
          ['Die Durchführung des Projekts ...', 'The implementation of the project ...']
        ]
      },
      hinglish: 'Academic German mein Nominalstil sabse zyada aata hai, kyunki isse baat objective aur precise lagti hai \u2014 focus kaam par hota hai, karne wale par nahi.'
    },
    {
      title: 'Register',
      body: [ 'Nominalisierung appears constantly in university papers, reports, scientific articles, official documents, business communication, newspapers, and legal German.' ],
      hinglish: 'Nominalisierung university papers, reports, official documents aur legal German mein bahut aati hai. Reading mein ise pehchaanna zaroori hai, aur formal writing mein thoda use karo to German mature lagta hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These come from forgetting the Genitiv after the nominalisation, picking the wrong verb to pair with it, or redundantly repeating the base word.' ],
      mistakes: [
        { wrong: 'Die Analyse die Daten erfolgt.', right: 'Die Analyse der Daten erfolgt.', why: 'A nominalisation takes its object in the <b>Genitiv</b>: die Analyse <b>der</b> Daten. This is the ending learners most often get wrong.' },
        { wrong: 'Die Entscheidung machen.', right: 'Eine Entscheidung treffen. / Die Entscheidung erfolgt.', why: 'In German, you "treffen" (make) a decision, not "machen" — and the nominal form pairs with "erfolgen" in formal writing.' },
        { wrong: 'Die Möglichkeit ist möglich.', right: 'Es besteht die Möglichkeit, dass ... / Etwas ist möglich.', why: 'Redundant: don\'t pair the nominalised form with its own base adjective in the same clause.' },
        { wrong: 'Die Entwicklung entwickeln.', right: 'Die Entwicklung erfolgt. / Etwas entwickeln.', why: 'Choose EITHER the noun (Nominalstil) OR the verb (Verbalstil) — don\'t combine both forms of the same word.' },
        { wrong: 'Die Gesundheit gesund.', right: 'Die Gesundheit ist wichtig. / Etwas ist gesund.', why: 'Again, redundant pairing of the nominalised form with its own base adjective.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 nominalisation ke baad Genitiv lagana bhool jaana, uske saath galat verb chunna, ya wahi shabd do baar dohra dena (jaise "die M\u00f6glichkeit ist m\u00f6glich").'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Writing an email to a friend? Prefer Verbalstil. Writing a report, thesis, article, business document, or Goethe B2 formal writing? Prefer Nominalstil.' ],
      note: 'Memory trick: Verb → Action. Noun → Formal concept. Nominalisierung makes German sound more academic and professional.',
      hinglish: 'Dost ko email likh rahe ho? To <b>Verbalstil</b> hi theek hai. Report, thesis ya business document likh rahe ho? To <b>Nominalstil</b> use karo. Aur ek baat \u2014 poora text Nominalstil mein likhne se woh bhaari ho jaata hai, isliye dono ko mila kar likhna sabse natural lagta hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Gesundheitsartikel: Die Erforschung des Herzinfarkts',
    titleEn: 'Health article: the research into heart attacks',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Erforschung', role: 'r-verb', en: 'the research (Nominalisierung von erforschen)', hi: 'शोध (erforschen से Nominalisierung)', type: 'Noun · fem. (Nominalisierung)', why: 'Erforschung is the noun form of the verb erforschen — nominalisation lets a whole action become a single noun (this chapter).' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Herzinfarkts', role: 'plain', en: 'heart attack (gen., Satzende)', hi: 'दिल का दौरा (gen., Satzende)', type: 'Noun · masc.', why: 'der Herzinfarkt (this chapter).' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (dat. pl.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'letzten', role: 'plain', en: 'last', hi: 'पिछले', type: 'Adjective' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'große', role: 'plain', en: 'great', hi: 'बड़ी', type: 'Adjective' },
      { w: 'Fortschritte', role: 'plain', en: 'progress (Satzende)', hi: 'प्रगति (Satzende)', type: 'Noun · plural' },
      { w: 'gemacht', role: 'plain', en: 'made (Satzende)', hi: 'की (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researcher', hi: 'शोधकर्ता', type: 'Noun · masc.', why: 'der/die Forscher/in (this chapter): itself a nominalisation of forschen.' },
      { w: 'nennt', role: 'plain', en: 'calls', hi: 'कहता है', type: 'Verb · nennen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'frühzeitige', role: 'plain', en: 'early', hi: 'शीघ्र', type: 'Adjective' },
      { w: 'Erkennung', role: 'r-verb', en: 'detection (Nominalisierung von erkennen)', hi: 'पहचान (erkennen से Nominalisierung)', type: 'Noun · fem. (Nominalisierung)', why: 'Erkennung comes from erkennen — another action turned into a compact noun (this chapter).' },
      { w: 'entscheidend', role: 'plain', en: 'decisive (Satzende)', hi: 'निर्णायक (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Verbesserung', role: 'r-verb', en: 'improvement (Nominalisierung von verbessern)', hi: 'सुधार (verbessern से Nominalisierung)', type: 'Noun · fem. (Nominalisierung)', why: 'Verbesserung, from verbessern (recycled), shows how -ung consistently nominalises verbs.' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Ernährung', role: 'plain', en: 'nutrition (Satzende)', hi: 'पोषण (Satzende)', type: 'Noun · fem.' },
      { w: 'spielt', role: 'plain', en: 'plays', hi: 'भूमिका निभाता है', type: 'Verb · spielen' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Rolle', role: 'plain', en: 'role (Satzende)', hi: 'भूमिका (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Determiner' },
      { w: 'sprechen', role: 'plain', en: 'speak', hi: 'बात करते हैं', type: 'Verb · sprechen' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'vom', role: 'plain', en: 'of the', hi: 'का', type: 'Contraction · von dem' },
      { w: 'Genie', role: 'plain', en: 'genius', hi: 'प्रतिभाशाली', type: 'Noun · neut.', why: 'das Genie (this chapter).' },
      { w: 'hinter', role: 'plain', en: 'behind', hi: 'के पीछे', type: 'Preposition · Dat.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. dat.)', hi: 'इस', type: 'Determiner · Dat.' },
      { w: 'Entdeckung', role: 'r-verb', en: 'discovery (Nominalisierung von entdecken, Satzende)', hi: 'खोज (Satzende)', type: 'Noun · fem. (Nominalisierung, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Erforschung', role: 'r-verb', en: 'research (Nominalisierung von erforschen)', hi: 'अनुसंधान', type: 'Noun · fem. (Nominalisierung)', why: 'die Erforschung ← erforschen: verb turned into a noun, typical of academic style (this chapter).' },
      { w: 'neuer', role: 'plain', en: 'new', hi: 'नई', type: 'Adjective' },
      { w: 'Medikamente', role: 'plain', en: 'medicines', hi: 'दवाओं', type: 'Noun · plural' },
      { w: 'wird', role: 'plain', en: 'is', hi: 'है', type: 'Verb · werden (Passiv)' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'के ज़रिए', type: 'Preposition · Akk.' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'इस', type: 'Determiner' },
      { w: 'Entdeckung', role: 'plain', en: 'discovery (Satzende)', hi: 'खोज (Satzende)', type: 'Noun · fem.' },
      { w: 'erheblich', role: 'plain', en: 'considerably (Satzende)', hi: 'काफ़ी हद तक (Satzende)', type: 'Adverb' },
      { w: 'beschleunigt', role: 'r-verb', en: 'accelerated (Satzende)', hi: 'तेज़ की जाती है (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Betroffenen', role: 'plain', en: 'those affected (Satzende)', hi: 'प्रभावित लोगों (Satzende)', type: 'Noun · plural' },
      { w: 'bedeutet', role: 'plain', en: 'means', hi: 'मतलब है', type: 'Verb · bedeuten' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Entwicklung', role: 'plain', en: 'development (Satzende)', hi: 'विकास (Satzende)', type: 'Noun · fem.' },
      { w: 'vor', role: 'plain', en: 'above', hi: 'से', type: 'Preposition' },
      { w: 'allem', role: 'plain', en: 'all (Satzende)', hi: 'ऊपर (Satzende)', type: 'Pronoun' },
      { w: 'eines', role: 'plain', en: 'one thing', hi: 'एक बात', type: 'Pronoun' },
      { w: ':', plain: true },
      { w: 'Hoffnung', role: 'plain', en: 'hope (Satzende)', hi: 'उम्मीद (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Weiterentwicklung', role: 'r-verb', en: 'further development (Nominalisierung von weiterentwickeln)', hi: 'आगे का विकास', type: 'Noun · fem. (Nominalisierung)' },
      { w: 'dieser', role: 'plain', en: 'of this', hi: 'इस', type: 'Determiner · Genitiv' },
      { w: 'Therapie', role: 'plain', en: 'therapy (Satzende)', hi: 'चिकित्सा (Satzende)', type: 'Noun · fem.' },
      { w: 'erfordert', role: 'plain', en: 'requires', hi: 'माँगती है', type: 'Verb · erfordern' },
      { w: 'allerdings', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'erhebliche', role: 'plain', en: 'considerable', hi: 'काफ़ी', type: 'Adjective' },
      { w: 'Investitionen', role: 'plain', en: 'investments (Satzende)', hi: 'निवेश (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'The research into heart attacks has made great progress in recent years. A researcher calls early detection decisive. The improvement of nutrition also plays a role. Some even speak of the genius behind this discovery. The research into new medicines is being considerably accelerated by this discovery. For those affected, this development means above all one thing: hope. The further development of this therapy, however, still requires considerable investment.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_050_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Katja, hast du deinen Vermieter schon wegen der Erhöhung der Mietkosten angeschrieben?', en: 'Katja, have you already written to your landlord about the rent increase?' },
      { id: 'B2_050_L002', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, aber die Untersuchung der Ursache dauert wohl noch ein paar Wochen.', en: 'Yes, but the investigation of the cause will probably take a few more weeks.' },
      { id: 'B2_050_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das klingt frustrierend. Und was macht die Verbesserung der Heizung?', en: 'That sounds frustrating. And what about the improvement of the heating?' },
      { id: 'B2_050_L004', speaker: 'Katja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Die soll angeblich bis nächsten Monat fertig sein — wir werden sehen.', en: 'That\'s supposedly supposed to be done by next month — we\'ll see.' }
    ],
    transcript: 'Katja, hast du deinen Vermieter schon wegen der Erhöhung der Mietkosten angeschrieben? Ja, aber die Untersuchung der Ursache dauert wohl noch ein paar Wochen. Das klingt frustrierend. Und was macht die Verbesserung der Heizung? Die soll angeblich bis nächsten Monat fertig sein — wir werden sehen.',
    translation: 'Katja, have you already written to your landlord about the rent increase? Yes, but the investigation of the cause will probably take a few more weeks. That sounds frustrating. And what about the improvement of the heating? That\'s supposedly supposed to be done by next month — we\'ll see.',
    tokens: [
      { w: 'Katja' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'deinen' },
      { w: 'Vermieter' },
      { w: 'schon' },
      { w: 'wegen' },
      { w: 'der' },
      { w: 'Erhöhung' },
      { w: 'der' },
      { w: 'Mietkosten' },
      { w: 'angeschrieben' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Untersuchung' },
      { w: 'der' },
      { w: 'Ursache' },
      { w: 'dauert' },
      { w: 'wohl' },
      { w: 'noch' },
      { w: 'ein' },
      { w: 'paar' },
      { w: 'Wochen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'klingt' },
      { w: 'frustrierend' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'was' },
      { w: 'macht' },
      { w: 'die' },
      { w: 'Verbesserung' },
      { w: 'der' },
      { w: 'Heizung' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'soll' },
      { w: 'angeblich' },
      { w: 'bis' },
      { w: 'nächsten' },
      { w: 'Monat' },
      { w: 'fertig' },
      { w: 'sein' },
      { w: '—', plain: true },
      { w: 'wir' },
      { w: 'werden' },
      { w: 'sehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was dauert noch ein paar Wochen?', qEn: 'What is taking a few more weeks?', options: ['die Reparatur der Heizung', 'die Untersuchung der Ursache', 'der Umzug', 'die Kündigung'], optionsEn: ['the repair of the heating', 'the investigation of the cause', 'the move', 'the resignation'], answer: 1,
        explain: '"Die Untersuchung der Ursache dauert wohl noch ein paar Wochen."' },
      { q: 'Wann soll die Verbesserung der Heizung fertig sein?', qEn: 'When should the heating improvement be done?', options: ['morgen', 'nächste Woche', 'nächsten Monat', 'nie'], optionsEn: ['tomorrow', 'next week', 'next month', 'never'], answer: 2,
        explain: '"Die soll angeblich bis nächsten Monat fertig sein."' }
    ]
  },

  speaking: [
    { task: "Eine Freundin fragt, ob du wegen der Mieterhöhung geschrieben hast.", taskEn: "A friend asks whether you've written about the rent increase.", de: "Ja, aber die Untersuchung der Ursache dauert noch ein paar Wochen.", en: "Yes, but the investigation of the cause will take a few more weeks." },
    { task: "Sie fragt, was der Vermieter geantwortet hat.", taskEn: "She asks what the landlord replied.", de: "Die Prüfung der Nebenkosten erfolgt erst im nächsten Monat.", en: "The examination of the service charges will only take place next month." },
    { task: "Ein Praktikant fragt, warum der Bericht so anders klingt.", taskEn: "An intern asks why the report sounds so different.", de: "Wir prüfen die Kosten klingt gesprochen, die Prüfung der Kosten klingt schriftlich.", en: "'We check the costs' sounds spoken, 'the examination of the costs' sounds written." },
    { task: "Deine Chefin will den Satz im Bericht förmlicher.", taskEn: "Your boss wants the sentence in the report more formal.", de: "Aus wir haben viel geändert wird die Änderung der Abläufe wurde vorgenommen.", en: "'We changed a lot' becomes 'the modification of the processes was carried out'." },
    { task: "Rollenspiel: Ihr macht aus einer Mail einen offiziellen Brief.", taskEn: "Role-play: you turn an email into an official letter.", de: "Gesprochen sagen wir, die Miete steigt. — Im Brief schreiben wir, die Erhöhung der Miete wurde angekündigt.", en: "Spoken we say the rent is going up. — In the letter we write that a rent increase has been announced." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite formally (6-8 sentences): Take an informal email and rewrite it using Nominalisierung throughout.\n\nTASK 2 — Short academic report (8-10 sentences): Write about a research topic using at least 12 nominalised forms (from verbs and adjectives).',
    starters: ['Die Analyse ...', 'Die Entwicklung ...'],
    placeholder: 'Die Analyse der Daten erfolgt. Die Entwicklung neuer Methoden ist notwendig.',
    minWords: 70
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which noun correctly derives from "entscheiden"?',
      options: ['die Entscheidung', 'die Entscheidnis', 'der Entscheider'],
      answer: 0,
      explain: '"entscheiden" → "die Entscheidung" (feminine noun) is the standard formal nominalisation.'
    },
    gap: {
      sentence: ['Die ', ' der Daten erfolgt.'],
      gaps: [ { answer: 'Analyse', accepts: ['Analyse'] } ],
      explain: '"analysieren" → "die Analyse" fits the Nominalstil pattern: Die Analyse der Daten erfolgt.'
    },
    match: {
      q: 'Match each verb or adjective to its nominalised noun.',
      pairs: [
        { noun: 'untersuchen', art: 'die Untersuchung' },
        { noun: 'wichtig', art: 'die Wichtigkeit' },
        { noun: 'verantwortlich', art: 'die Verantwortung' },
        { noun: 'möglich', art: 'die Möglichkeit' }
      ]
    },
    builder: {
      target: 'Build: "The improvement of the service is important." (Nominalstil)',
      bank: ['Die', 'Verbesserung', 'des', 'Services', 'ist', 'wichtig', '.'],
      answer: ['Die', 'Verbesserung', 'des', 'Services', 'ist', 'wichtig', '.'],
      roles: { 'Verbesserung': 'r-nominal' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Entwicklung entwickeln.',
      right: 'Die Entwicklung erfolgt. / Etwas entwickeln.',
      explain: 'Choose EITHER the noun (Nominalstil) OR the verb (Verbalstil) — don\'t redundantly combine both forms of the same word.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is Nominalisierung?', options: ['Turning verbs or adjectives into nouns for formal register', 'Turning nouns into verbs', 'A type of passive voice'], answer: 0,
      explain: 'Nominalisierung transforms verbs/adjectives into their noun equivalents, shifting from Verbalstil to Nominalstil.' },
    { q: 'Which noun correctly derives from "wichtig"?', options: ['die Wichtigkeit', 'der Wichtiger', 'das Wichtigen'], answer: 0,
      explain: '"wichtig" (adjective) → "die Wichtigkeit" (feminine noun).' },
    { q: 'Which style is more appropriate for a formal report?', options: ['Nominalstil', 'Verbalstil', 'Neither — reports avoid nouns entirely'], answer: 0,
      explain: 'Formal writing — reports, theses, business documents — prefers Nominalstil.' },
    { q: 'How does the object attach to a nominalised verb, e.g. "die Analyse ... Daten"?', options: ['Via Genitiv or "von": die Analyse der Daten', 'Directly, with no connector', 'Via a separate sentence'], answer: 0,
      explain: '"die Analyse der Daten" uses Genitiv to attach the acted-upon object to the noun.' },
    { q: 'Which sentence pair correctly shows Verbalstil → Nominalstil?', options: ['Wir prüfen den Vertrag. → Die Prüfung des Vertrags erfolgt.', 'Wir prüfen den Vertrag. → Wir prüfen die Prüfung.', 'Die Prüfung erfolgt. → Wir prüfen die Prüfung.'], answer: 0,
      explain: 'The verb "prüfen" becomes the noun "die Prüfung", and the object attaches via Genitiv.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-nominal', html: 'Nominalisierung turns verbs and adjectives into formal nouns: analysieren → die Analyse; wichtig → die Wichtigkeit.' },
    { c: 'r-nominal', html: 'Verbalstil (action-focused, informal) contrasts with Nominalstil (concept-focused, formal) — the same idea, different register.' },
    { c: 'r-nominal', html: 'The acted-upon object attaches via Genitiv or "von": die Analyse der Daten. Nominalstil dominates reports, theses, and Goethe B2 formal writing.' }
  ],
  revisionTips: [
    'For every common B2 verb you know, practise finding its noun equivalent and building a Nominalstil sentence.',
    'Scan a scientific article or business report for nominalised forms — count how many verbs and adjectives were converted.',
    'Ask yourself before formal writing: am I in Verbalstil or Nominalstil? Rewrite one paragraph in the opposite style to check your range.'
  ]
};

window.CHAPTER = CHAPTER;
