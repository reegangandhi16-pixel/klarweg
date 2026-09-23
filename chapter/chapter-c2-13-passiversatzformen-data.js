/* KLARWEG CHAPTER DATA — C2 · Chapter 13
   "Passiversatzformen" (C2) — native-level stylistic decision-making
   among passive alternatives (sein+zu, sich lassen, man, -bar
   adjectives, Nominalisierung, Partizipialattribute) as more elegant,
   natural, reader-friendly choices than plain passive. NOT passive
   formation, tenses, or memorizing structures individually (already
   mastered B2, C1 Ch26, C2 Ch12). Vocabulary covers 100% of the
   uploaded 13-item -bar adjective list. Dialogue: Regine and Timo ONLY. */
const CHAPTER = {
  id: 'c2-13-passiversatzformen',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 13,
  title: 'Passiversatzformen',
  titleEn: 'Alternatives to the passive',
  description: 'Passive voice is only one road to your destination. At C2, native speakers know an entire network of roads — sometimes the highway, sometimes a shortcut, sometimes a scenic road. Mastery means choosing the best route.',
  xp: 1500, time: 150, difficulty: 'Mastery',
  nextChapter: { number: 14, title: 'Goethe Halbzeit Test', titleEn: 'Halfway checkpoint — Chapters 1–13 integrated' , href: 'chapter-c2-14-goethe-halbzeit-test.html' },
  prevChapter: { number: 12, title: 'Passiv', titleEn: 'The passive voice at native level', href: 'chapter-c2-12-passiv.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Passive is one <em>road</em> — C2 means knowing the whole network.',
    intro: 'Editing a doctoral dissertation on bridge design, Regine asks whether the new design is realizable, and Timo confirms it\'s heavily load-bearing and well scalable — choosing the right road through the whole network of passive alternatives, not just one highway.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers choose among sein+zu, sich lassen, man, -bar adjectives, and nominalization for the most elegant register-appropriate style'],
    scene: 'Überarbeitung einer Doktorarbeit',
    femaleSpeakers: ['Regine'],
    dialogue: [
      { speaker: 'Regine', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'neue', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Entwurf', role: 'r-subject', en: 'design', hi: 'डिज़ाइन', pron: 'ent-VOORF', type: 'Noun · masc.' },
        { w: 'realisierbar', role: 'r-akkusativ', en: 'realizable', hi: 'साकार करने योग्य', pron: 'ray-a-li-ZEER-bahr', type: 'Adjective', why: 'realisierbar = realizable/feasible (this chapter).', ex: 'Der Entwurf ist realisierbar.', exEn: 'The design is realizable.' },
        { w: '?', plain: true }
      ], en: 'Is the new design realizable?', hi: 'Kya naya dizain saakaar karne yogya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Brücke', role: 'r-subject', en: 'bridge', hi: 'पुल', pron: 'BRÜ-kuh', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'stark', role: 'r-akkusativ', en: 'heavily', hi: 'भारी रूप से', pron: 'shtark', type: 'Adverb' },
        { w: 'belastbar', role: 'r-akkusativ', en: 'load-bearing', hi: 'भार सहन करने योग्य', pron: 'be-LAST-bahr', type: 'Adjective', why: 'belastbar = load-bearing/resilient (recycled C2).', ex: 'Die Brücke ist stark belastbar.', exEn: 'The bridge is heavily load-bearing.' },
        { w: '.', plain: true }
      ], en: 'Yes. The bridge is heavily load-bearing.', hi: 'Haan. Pul bhaari roop se bhaar sahan karne yogya hai.' },
      { speaker: 'Regine', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Material', role: 'r-subject', en: 'material', hi: 'सामग्री', pron: 'ma-te-RYAHL', type: 'Noun · neut.' },
        { w: 'erneuerbar', role: 'r-akkusativ', en: 'renewable', hi: 'नवीकरणीय', pron: 'er-NOY-er-bahr', type: 'Adjective', why: 'erneuerbar = renewable (recycled C2).', ex: 'erneuerbares Material' },
        { w: '?', plain: true }
      ], en: 'Is the material renewable?', hi: 'Kya samagri naveekaraniya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Konstruktion', role: 'r-subject', en: 'construction', hi: 'निर्माण', pron: 'kon-struk-TSYON', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
        { w: 'skalierbar', role: 'r-akkusativ', en: 'scalable', hi: 'मापनीय', pron: 'ska-LEER-bahr', type: 'Adjective', why: 'skalierbar = scalable (this chapter).', ex: 'Die Konstruktion ist gut skalierbar.', exEn: 'The construction is well scalable.' },
        { w: '.', plain: true }
      ], en: 'And the construction is well scalable.', hi: 'Aur nirmaan achhe se maapniya hai.' },
      { speaker: 'Regine', tokens: [
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'reproduzierbar', role: 'r-akkusativ', en: 'reproducible', hi: 'दोहराने योग्य', pron: 'ray-pro-du-TSEER-bahr', type: 'Adjective', why: 'reproduzierbar = reproducible (this chapter).', ex: 'Die Ergebnisse sind reproduzierbar.', exEn: 'The results are reproducible.' },
        { w: '?', plain: true }
      ], en: 'Are the results reproducible?', hi: 'Kya parinaam dohraane yogya hain?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Alle', role: 'r-subject', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: 'Werte', role: 'r-subject', en: 'values', hi: 'मान', pron: 'VAIR-tuh', type: 'Noun · plural (recycled C2)' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'leicht', role: 'r-akkusativ', en: 'easily', hi: 'आसानी से', pron: 'LYKHT', type: 'Adverb' },
        { w: 'messbar', role: 'r-akkusativ', en: 'measurable', hi: 'मापने योग्य', pron: 'MES-bahr', type: 'Adjective', why: 'messbar = measurable (this chapter).', ex: 'Die Werte sind messbar.', exEn: 'The values are measurable.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'überprüfbar', role: 'r-akkusativ', en: 'verifiable', hi: 'सत्यापन योग्य', pron: 'ü-ber-PRÜF-bahr', type: 'Adjective', why: 'überprüfbar = verifiable (this chapter).', ex: 'Die Ergebnisse sind überprüfbar.', exEn: 'The results are verifiable.' },
        { w: '.', plain: true }
      ], en: 'Yes. All values are easily measurable and verifiable.', hi: 'Haan. Sabhi maan aasaani se maapne aur satyaapan yogya hain.' },
      { speaker: 'Regine', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Entwurf', role: 'r-subject', en: 'design', hi: 'डिज़ाइन', pron: 'ent-VOORF', type: 'Noun · masc.' },
        { w: 'vergleichbar', role: 'r-akkusativ', en: 'comparable', hi: 'तुलनीय', pron: 'fer-GLYKH-bahr', type: 'Adjective', why: 'vergleichbar = comparable (this chapter).', ex: 'Der Entwurf ist vergleichbar mit dem alten.', exEn: 'The design is comparable to the old one.' },
        { w: 'mit', role: 'r-preposition', en: 'to', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'alten', role: 'r-dativ', en: 'old', hi: 'पुराने', pron: 'AL-ten', type: 'Adjective · dative' },
        { w: '.', plain: true }
      ], en: 'Then the design is comparable to the old one.', hi: 'Toh dizain purane se tulniya hai.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Passive is only <span class="de r-strassennetz-metapher">one road</span> — C2 mastery means knowing the whole network of routes and choosing the best one.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is PASSIVERSATZFORMEN at C2 level — native-level STYLISTIC DECISION-MAKING among passive alternatives (sein+zu, sich lassen, man, -bar adjectives, Nominalisierung, Partizipialattribute), NOT passive formation, tenses, or memorizing each structure in isolation (already fully mastered B2, C1 Ch26, C2 Ch12). Covered: the event → perspective → reader → register → chosen structure model showing multiple structures can express the same idea with different tone; the main alternatives compared side by side — "Die Daten wurden analysiert" (plain passive) vs. "Die Daten lassen sich analysieren" (possibility, sich lassen) vs. "Die Daten sind zu analysieren" (obligation, sein+zu) vs. "Man analysiert die Daten" (general actor) vs. "Die Analyse der Daten..." (nominal style); academic alternatives (Es lässt sich feststellen..., Die Ergebnisse sind zu interpretieren, Die Analyse der Daten..., Das Modell ist anzuwenden); scientific alternatives (Die Methode lässt sich übertragen, Die Hypothese ist zu überprüfen, Die Ergebnisse sind reproduzierbar); legal/administrative alternatives (Der Antrag ist einzureichen, Die Frist ist einzuhalten, Die Unterlagen sind vorzulegen, Der Nachweis ist zu erbringen) for institutional preference; journalistic alternatives (Es lässt sich beobachten..., Der Bericht verweist auf..., Die Situation bleibt erklärbar); and -bar adjectives (nachvollziehbar, messbar, reproduzierbar, quantifizierbar, etc.) as a compact scientific/formal way to express a passive-like property. The most important things to catch: replacing every passive automatically without considering whether it actually improves the sentence; overusing "man" as a lazy catch-all replacement; incorrect use of "sein + zu" (using it where no obligation/necessity is meant); incorrect use of "sich lassen" (using it where no possibility is meant, just plain process); literal English-to-German translation of passive-like phrasing; ignoring register when choosing an alternative (a casual "man" in a legal document, or a stiff "sein+zu" in casual conversation). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag automatic/unmotivated passive replacement; flag overuse of "man"; flag incorrect sein+zu or sich lassen usage (wrong nuance — obligation vs. possibility); flag register-mismatched alternative choices. Do NOT flag basic passive tense/formation as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around stylistic choice/register). If none: <li>No errors — well done.</li> 3) <p><b>Road-network check:</b> one sentence on whether the learner selects the best route (passive, sein+zu, sich lassen, man, nominal style) deliberately for each sentence, rather than defaulting to the same structure.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you deliberately choose the best route for every sentence. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Style Decision Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: passive is only one road, and C2 mastery means knowing the whole network.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Ergebnisse', role: 'plain' }, { w: 'sind', role: 'r-passiversatz-seinzu' }, { w: 'reproduzierbar', role: 'r-bar-adjektiv' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: passive is one road; C2 mastery means knowing the whole network and choosing the best route.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Regine and Timo edit a dissertation, comparing passive alternatives for the most natural style.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn 13 C2 -bar adjectives (nachvollziehbar, messbar, reproduzierbar, etc.) — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master sein+zu, sich lassen, man, -bar adjectives, Nominalisierung, and register-based passive replacement.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a scientific article, government guideline, and literary essay for passive-alternative style.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify passive alternatives, stylistic choices, and register in a lecture, briefing, and research presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice rewriting passive structures and explaining stylistic choices at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite passive-heavy texts, choose the best alternative per register, and write a 600-word academic article.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill passive replacement, register selection, and passive vs. alternative comparison.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1500 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All 13 chapter -bar adjectives with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Passive replacement, register selection, and stylistic transformation drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Style Decision Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Daten lassen sich analysieren.', text: 'Use sich lassen to express possibility instead of plain passive' },
    { de: 'Der Antrag ist einzureichen.', text: 'Use sein+zu for institutional obligation' },
    { de: 'Die Ergebnisse sind reproduzierbar.', text: 'Use a -bar adjective for a compact scientific property' },
    { de: 'Die Analyse der Daten...', text: 'Use nominalization for formal academic style' },
    { de: 'Passiv ist nur eine Straße.', text: 'Understand the chapter\'s core "road network" metaphor for stylistic choice' }
  ],
  vocab: [
    { de: 'nachvollziehbar', pos: 'adjective (-bar)', level: 'C2', register: 'academic/formal', en: 'comprehensible, traceable', hi: 'समझ में आने योग्य', synonyms: 'verständlich, plausibel', antonyms: 'unnachvollziehbar', ex: 'Die Argumentation ist klar und nachvollziehbar.', exEn: 'The argumentation is clear and comprehensible.', exHi: 'Tark spashtha aur samajh mein aane yogya hai.', ex2: 'Die Entscheidung ist anhand der vorliegenden Daten nachvollziehbar.', ex2En: 'The decision is traceable on the basis of the available data.', ex2Hi: 'Faisla maujood data ke aadhaar par samajh mein aane yogya hai.' },
    { de: 'belastbar', pos: 'adjective (-bar)', level: 'C2', register: 'scientific/formal', en: 'resilient, robust, load-bearing', hi: 'भार सहन करने योग्य', synonyms: 'robust, widerstandsfähig', antonyms: 'nicht belastbar', ex: 'Die Ergebnisse sind statistisch belastbar.', exEn: 'The results are statistically robust.', exHi: 'Parinaam statistical roop se robust hain.', ex2: 'Das System ist auch unter hoher Last belastbar.', ex2En: 'The system is resilient even under high load.', ex2Hi: 'System zyaada bhaar mein bhi resilient hai.' },
    { de: 'skalierbar', pos: 'adjective (-bar)', level: 'C2', register: 'scientific/technical', en: 'scalable', hi: 'मापनीय, बड़ा किया जा सकने वाला', synonyms: 'erweiterbar', antonyms: 'nicht skalierbar', ex: 'Das Modell ist auf größere Datensätze skalierbar.', exEn: 'The model is scalable to larger datasets.', exHi: 'Model bade data sets ke liye scalable hai.', ex2: 'Die Lösung erwies sich als gut skalierbar.', ex2En: 'The solution proved to be well scalable.', ex2Hi: 'Solution achhi tarah scalable sabit hui.' },
    { de: 'erneuerbar', pos: 'adjective (-bar)', level: 'C2', register: 'both', en: 'renewable', hi: 'नवीकरणीय', synonyms: 'regenerativ', antonyms: 'nicht erneuerbar', ex: 'Erneuerbare Energien gewinnen zunehmend an Bedeutung.', exEn: 'Renewable energies are gaining increasing importance.', exHi: 'Navikaraniya urja badhti mahatvata paa rahi hai.', ex2: 'Der Vertrag ist um zwei Jahre erneuerbar.', ex2En: 'The contract is renewable for two years.', ex2Hi: 'Contract do saal ke liye renewable hai.' },
    { de: 'haftbar', pos: 'adjective (-bar)', level: 'C2', register: 'legal', en: 'liable', hi: 'उत्तरदायी', synonyms: 'verantwortlich', antonyms: 'nicht haftbar', ex: 'Das Unternehmen ist für den Schaden haftbar.', exEn: 'The company is liable for the damage.', exHi: 'Company nuksaan ke liye uttardaayi hai.', ex2: 'Der Hersteller kann für Mängel haftbar gemacht werden.', ex2En: 'The manufacturer can be held liable for defects.', ex2Hi: 'Manufacturer ko kamiyon ke liye uttardaayi thehraaya jaa sakta hai.' },
    { de: 'messbar', pos: 'adjective (-bar)', level: 'C2', register: 'scientific', en: 'measurable', hi: 'मापने योग्य', synonyms: 'quantifizierbar', antonyms: 'nicht messbar', ex: 'Der Effekt ist statistisch messbar.', exEn: 'The effect is statistically measurable.', exHi: 'Prabhaav statistical roop se maapa jaa sakta hai.', ex2: 'Die Verbesserung war innerhalb weniger Wochen messbar.', ex2En: 'The improvement was measurable within a few weeks.', ex2Hi: 'Sudhaar kuch hafton ke andar maapa jaa saka.' },
    { de: 'quantifizierbar', pos: 'adjective (-bar)', level: 'C2', register: 'scientific/academic', en: 'quantifiable', hi: 'मात्रात्मक रूप से मापने योग्य', synonyms: 'messbar', antonyms: 'nicht quantifizierbar', ex: 'Der Nutzen ist nur schwer quantifizierbar.', exEn: 'The benefit is only quantifiable with difficulty.', exHi: 'Faayda mushkil se quantifiable hai.', ex2: 'Die Risiken sind kaum quantifizierbar.', ex2En: 'The risks are hardly quantifiable.', ex2Hi: 'Jokhim mushkil se quantifiable hain.' },
    { de: 'realisierbar', pos: 'adjective (-bar)', level: 'C2', register: 'professional/formal', en: 'realizable, feasible', hi: 'साकार करने योग्य', synonyms: 'machbar, umsetzbar', antonyms: 'nicht realisierbar', ex: 'Das Projekt ist innerhalb des Budgets realisierbar.', exEn: 'The project is realizable within the budget.', exHi: 'Project budget ke andar saakar kiya jaa sakta hai.', ex2: 'Der Plan erwies sich als kaum realisierbar.', ex2En: 'The plan proved to be hardly feasible.', ex2Hi: 'Plan mushkil se feasible sabit hua.' },
    { de: 'reproduzierbar', pos: 'adjective (-bar)', level: 'C2', register: 'scientific', en: 'reproducible', hi: 'पुनरुत्पादन योग्य', synonyms: 'wiederholbar', antonyms: 'nicht reproduzierbar', ex: 'Die Ergebnisse sind unter denselben Bedingungen reproduzierbar.', exEn: 'The results are reproducible under the same conditions.', exHi: 'Parinaam usi shartein mein reproducible hain.', ex2: 'Ein zentrales Kriterium in der Wissenschaft ist, ob ein Experiment reproduzierbar ist.', ex2En: 'A central criterion in science is whether an experiment is reproducible.', ex2Hi: 'Vigyaan mein ek kendriya criterion yeh hai ki experiment reproducible hai ya nahi.' },
    { de: 'strafbar', pos: 'adjective (-bar)', level: 'C2', register: 'legal', en: 'punishable, criminal', hi: 'दंडनीय', synonyms: 'kriminell', antonyms: 'straffrei', ex: 'Diese Handlung ist nach geltendem Recht strafbar.', exEn: 'This act is punishable under current law.', exHi: 'Yeh kaarya maujooda kanoon ke tahat dandniya hai.', ex2: 'Der Versuch ist ebenfalls strafbar.', ex2En: 'The attempt is likewise punishable.', ex2Hi: 'Prayaas bhi dandniya hai.' },
    { de: 'unumkehrbar', pos: 'adjective (-bar, negated)', level: 'C2', register: 'academic/formal', en: 'irreversible', hi: 'अपरिवर्तनीय', synonyms: 'irreversibel', antonyms: 'umkehrbar', ex: 'Der Schaden an der Umwelt ist teilweise unumkehrbar.', exEn: 'The damage to the environment is partly irreversible.', exHi: 'Paryaavaran ko hua nuksaan aanshik roop se apariwartaniya hai.', ex2: 'Der Prozess erwies sich als unumkehrbar.', ex2En: 'The process proved to be irreversible.', ex2Hi: 'Prakriya apariwartaniya sabit hui.' },
    { de: 'vergleichbar', pos: 'adjective (-bar)', level: 'C2', register: 'both', en: 'comparable', hi: 'तुलनीय', synonyms: 'ähnlich', antonyms: 'unvergleichbar', ex: 'Die beiden Studien sind methodisch vergleichbar.', exEn: 'The two studies are methodologically comparable.', exHi: 'Dono studies methodological roop se tulniya hain.', ex2: 'Die Ergebnisse sind mit früheren Untersuchungen vergleichbar.', ex2En: 'The results are comparable with earlier investigations.', ex2Hi: 'Parinaam pehle ki jaanchon se tulniya hain.' },
    { de: 'überprüfbar', pos: 'adjective (-bar)', level: 'C2', register: 'academic/scientific', en: 'verifiable', hi: 'सत्यापन योग्य', synonyms: 'nachprüfbar, verifizierbar', antonyms: 'nicht überprüfbar', ex: 'Die Hypothese muss empirisch überprüfbar sein.', exEn: 'The hypothesis must be empirically verifiable.', exHi: 'Hypothesis empirical roop se verifiable honi chahiye.', ex2: 'Die Behauptung ist derzeit nicht überprüfbar.', ex2En: 'The claim is currently not verifiable.', ex2Hi: 'Daava abhi verifiable nahi hai.' }
  ],
  grammar: [
    { title: 'Warum Passiv ersetzen? (Why Replace Passive?)', body: [ 'Event → Perspective → Reader → Register → Chosen Structure. Multiple structures can express the same idea with different tone — replacing passive is a stylistic decision, not a correction.' ], hinglish: 'Yahan sabse zaroori baat yeh hai \u2014 passive galat nahi hota. Ise badalna style ka faisla hai, galti sudhaarna nahi. Ek hi baat kai structures se kahi jaa sakti hai, aur har ek ka tone alag hai. Isliye C2 par sawaal yeh nahi ki passive sahi hai, balki yeh ki is jagah kaunsa structure sabse natural lagta hai.' },
    { title: 'Die Hauptalternativen (Main Alternatives)', body: [ 'Die Daten wurden analysiert (plain passive) → Die Daten lassen sich analysieren (possibility) → Die Daten sind zu analysieren (obligation) → Man analysiert die Daten (general actor) → Die Analyse der Daten... (nominal style). Each shifts meaning, tone, and register.' ], hinglish: 'Paanch structures, aur har ek ka matlab alag \u2014 yeh aapas mein badle nahi jaa sakte. <span class="de">Die Daten wurden analysiert</span> matlab kaam hua. <span class="de">Die Daten lassen sich analysieren</span> matlab ho <b>sakta</b> hai. <span class="de">Die Daten sind zu analysieren</span> matlab karna <b>hoga</b>. <span class="de">Man analysiert die Daten</span> matlab koi bhi karta hai. Aur <span class="de">die Analyse der Daten</span> sabse formal hai. Sabse aam galti sambhavna aur zimmedaari ko mila dena hai.' },
    { title: 'Register-spezifische Alternativen (Register-Specific Alternatives)', body: [ 'Register se structure tay hota hai. Academic writing mein <span class="de">Es l\u00e4sst sich feststellen, dass \u2026</span> aur nominal roop. Scientific texts mein <b>-bar</b> adjectives bahut aate hain \u2014 <span class="de">Die Ergebnisse sind reproduzierbar</span>. Official documents mein <b>sein + zu</b>, kyunki wahan zimmedaari batani hoti hai: <span class="de">Der Antrag ist einzureichen</span>. Aur <b>man</b> zyada-tar bolchaal mein \u2014 formal writing mein woh dheela lagta hai.' ], hinglish: 'Register se structure tay hota hai. Academic writing mein <span class="de">Es l\u00e4sst sich feststellen, dass \u2026</span> aur nominal roop. Scientific texts mein <b>-bar</b> adjectives bahut aate hain \u2014 <span class="de">Die Ergebnisse sind reproduzierbar</span>. Official documents mein <b>sein + zu</b>, kyunki wahan zimmedaari batani hoti hai: <span class="de">Der Antrag ist einzureichen</span>. Aur <b>man</b> zyada-tar bolchaal mein \u2014 formal writing mein woh dheela lagta hai.' },
    { title: '-bar-Adjektive als Passiversatz (-bar Adjectives as Passive Alternative)', body: [ 'Adjectives ending in -bar (messbar, reproduzierbar, quantifizierbar) compactly express a passive-like property — "die Ergebnisse sind reproduzierbar" is more elegant than "die Ergebnisse können reproduziert werden".' ], hinglish: '<b>-bar</b> adjectives se poora passive ek shabd mein sim jaata hai. <span class="de">Die Ergebnisse sind reproduzierbar</span> wahi baat kehta hai jo <span class="de">Die Ergebnisse können reproduziert werden</span>, par bahut chhote mein. Banane ka tareeka simple hai — verb ke stem par <b>-bar</b> laga do, aur yeh sirf un verbs se banta hai jinke saath object aata hai. Scientific writing mein yeh forms bahut milengi.' },
    {
      title: 'Die Formen \u2014 und wie man -bar bildet',
      body: [
        'The chapter names five alternatives but never shows how each is built, and the errors above are almost all about merging two of them.',
        'The <b>-bar</b> adjective is the one genuinely new form here: take the verb stem and add <b>-bar</b>. It works only with transitive verbs.'
      ],
      table: {
        head: ['Structure', 'Form', 'Meaning'],
        rows: [
          ['sich lassen', 'l\u00e4sst sich + <b>Infinitiv</b>', '<span class="de">Die Daten lassen sich analysieren.</span> \u2014 possibility'],
          ['sein + zu', 'ist + <b>zu</b> + Infinitiv', '<span class="de">Der Antrag ist einzureichen.</span> \u2014 obligation'],
          ['-bar adjective', 'verb stem + <b>-bar</b>, with <b>sein</b>', '<span class="de">Die Ergebnisse sind reproduzierbar.</span> \u2014 property'],
          ['man', 'man + <b>active</b> verb', '<span class="de">Man analysiert die Daten.</span> \u2014 general agent'],
          ['Nominalisierung', 'noun + Genitiv attribute', '<span class="de">die Analyse der Daten</span> \u2014 maximum formality']
        ]
      },
      note: 'Common <b>-bar</b> forms: messbar, reproduzierbar, quantifizierbar, \u00fcbertragbar, nachweisbar, erkl\u00e4rbar. Note that <b>sich lassen</b> and a <b>-bar</b> adjective say the same thing \u2014 use one, never both.',
      hinglish: 'Chapter paanch alternatives ka naam leta hai par yeh nahi batata ki har ek banti kaise hai \u2014 aur upar wali lagbhag saari galtiyan do ko mila dene se hoti hain. Sabse zaroori teen baatein: <b>sich lassen</b> ke baad plain infinitive aata hai (sambhavna), <b>sein + zu</b> mein <b>zu</b> zaroori hai aur separable verb ho to woh andar chala jaata hai (zimmedaari), aur <b>-bar</b> adjective yahan ek nayi form hai \u2014 verb ke stem par <b>-bar</b> lagao aur uske saath <b>sein</b>: <span class="de">Die Ergebnisse sind reproduzierbar.</span> Yeh sirf transitive verbs se banta hai. Common forms: <b>messbar, reproduzierbar, quantifizierbar, \u00fcbertragbar, nachweisbar</b>. Aur ek baat pakki kar lo \u2014 <b>sich lassen</b> aur <b>-bar</b> dono ek hi baat kehte hain, isliye dono ek saath kabhi nahi.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to its main meaning and preferred register.' ], table: { head: ['Structure', 'Main Meaning', 'Preferred Register'], rows: [ ['Vorgangspassiv', 'Process', 'General'], ['sein + zu', 'Obligation', 'Administrative'], ['sich lassen', 'Possibility', 'Academic'], ['man', 'General Actor', 'Conversation'], ['-bar Adjective', 'Property', 'Scientific'], ['Nominalisierung', 'Formal Style', 'Academic'], ['Partizipialattribute', 'Compression', 'Academic'] ] }, hinglish: 'Structure, matlab aur register ka table \u2014 par structure chunne ke baad uski form bhi check karo, kyunki galtiyan wahin hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Every one of these merges two structures that each already do the job, or swaps possibility for obligation. Pick one structure and the sentence works.' ], mistakes: [
      { wrong: 'Die Daten lassen sich analysiert werden.', right: 'Die Daten lassen sich analysieren.', why: '<b>sich lassen</b> already carries the passive meaning, so it takes a plain infinitive \u2014 never a passive after it.' },
      { wrong: 'Der Antrag ist einreichen.', right: 'Der Antrag ist einzureichen.', why: 'In <b>sein + zu + Infinitiv</b> the <b>zu</b> is compulsory \u2014 and with a separable verb it goes inside the word: <i>ein<b>zu</b>reichen</i>.' },
      { wrong: 'Die Ergebnisse sind reproduzierbar werden.', right: 'Die Ergebnisse sind reproduzierbar.', why: 'A <b>-bar</b> adjective is already a complete predicate \u2014 it needs no passive auxiliary. <i>sind reproduzierbar</i> is the whole structure.' },
      { wrong: 'Der Antrag l\u00e4sst sich bis Freitag einreichen \u2014 das ist Vorschrift.', right: 'Der Antrag ist bis Freitag einzureichen \u2014 das ist Vorschrift.', why: '<b>sich lassen</b> states a possibility, which contradicts a rule. Obligation needs <b>sein + zu</b>.' },
      { wrong: 'Man wird die Daten analysiert.', right: 'Man analysiert die Daten. / Die Daten werden analysiert.', why: '<b>man</b> is already an active substitute for the passive \u2014 combining it with a passive form gives one clause two competing structures.' },
      { wrong: 'Die Methode l\u00e4sst sich \u00fcbertragbar.', right: 'Die Methode l\u00e4sst sich \u00fcbertragen. / Die Methode ist \u00fcbertragbar.', why: 'Pick one structure: <b>sich lassen</b> + Infinitiv, or <b>sein</b> + <b>-bar</b> adjective. They express the same possibility and cannot be merged.' }
    ], hinglish: 'Chhe ki chhe galtiyan ek hi tarah ki hain \u2014 do structures mila dena, ya sambhavna ki jagah zimmedaari bata dena. Ek chuno, aur sentence theek ho jaayega.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need passive meaning? Need obligation? → sein + zu. Need possibility? → sich lassen. Need general actor? → man. Need concise academic style? → Nominalisierung / Partizipialattribute. Choose the structure that best fits the register.' ], note: 'Memory trick: imagine passive voice is only one road to your destination. At C2, native speakers know an entire network of roads. Sometimes the highway (Passiv) is best. Sometimes a shortcut (sich lassen). Sometimes a formal government road (sein + zu). Sometimes a scenic road (Nominalisierung). C2 mastery means choosing the best route, not always the same one.', hinglish: 'Pehle tay karo ki tum kya kehna chahte ho. Zimmedaari? <b>sein + zu</b>. Sambhavna? <b>sich lassen</b> ya <b>-bar</b> adjective. Koi bhi karta hai? <b>man</b>. Aur formal academic style? Nominalisierung. Aur likhne ke baad ek baar dekho: kahin do structures ek saath to nahi lag gaye?' }
  ],
  reading: {
    title: 'Fachartikel: Reproduzierbarkeit in der Klimamodellierung',
    titleEn: 'Reading A — Journal article: reproducibility in climate modelling',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'sind', role: 'r-passiversatz-seinzu', en: 'are (part of a -bar adjective construction, expressing a property rather than obligation)', hi: '(property construction)', type: 'Verb (Präsens)' },
      { w: 'unter', role: 'plain', en: 'under', hi: '', type: 'Präposition · Dat.' },
      { w: 'denselben', role: 'plain', en: 'the same', hi: 'उन्हीं', type: 'Demonstrativartikel · Dat.' },
      { w: 'Bedingungen', role: 'plain', en: 'conditions', hi: 'शर्तों', type: 'Noun · plural' },
      { w: 'reproduzierbar', role: 'r-bar-adjektiv', en: 'reproducible (Satzende, -bar adjective expressing a passive-like property)', hi: 'दोहराया जा सकने योग्य (Satzende)', type: 'Adjective (Satzende)', why: '"reproduzierbar" compactly expresses "can be reproduced" — a hallmark of scientific register precision, more elegant than the full passive construction.' },
      { w: '.', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Modell', role: 'plain', en: 'model', hi: 'मॉडल', type: 'Noun · neut.' },
      { w: 'lässt', role: 'r-passiversatz-lassen', en: 'lets (part of "sich lassen" — expressing possibility)', hi: '(sich lassen, possibility)', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-passiversatz-lassen', en: 'itself (part of the same construction)', hi: '(construction का हिस्सा)', type: 'Reflexivpronomen · Akk.' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'पर', type: 'Präposition · Akk.' },
      { w: 'andere', role: 'plain', en: 'other', hi: 'दूसरे', type: 'Adjective · Akk.' },
      { w: 'Regionen', role: 'plain', en: 'regions', hi: 'क्षेत्रों', type: 'Noun · plural' },
      { w: 'übertragen', role: 'r-passiversatz-lassen', en: 'transfer (Satzende, completing "lässt sich übertragen")', hi: 'स्थानांतरित (Satzende)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The results are reproducible under the same conditions. The model can be transferred to other regions.',
    comprehension: [
      { q: 'Was drückt "reproduzierbar" hier aus?', options: ['Eine -bar-Adjektiv-Konstruktion als kompakter Passiversatz', 'Eine sein+zu-Konstruktion mit Verpflichtung', 'Ein Diskursmarker'], answer: 0 },
      { q: 'Was drückt "lässt sich übertragen" aus?', options: ['Möglichkeit (sich lassen), nicht Verpflichtung', 'Eine strikte Verpflichtung', 'Eine Erlaubnis'], answer: 0 },
      { q: 'Warum wählt der Autor "reproduzierbar" statt "kann reproduziert werden"?', options: ['Für stilistische Eleganz und Kompaktheit im wissenschaftlichen Register', 'Weil die Passivform grammatisch falsch wäre', 'Aus Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungsrichtlinie', titleEn: 'Reading B — Government guideline',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Antrag', role: 'plain', en: 'application', hi: 'application', type: 'Noun · masc.' },
      { w: 'ist', role: 'r-passiversatz-seinzu', en: 'is (part of the sein+zu obligation construction)', hi: '(sein+zu obligation)', type: 'Verb (Präsens)' },
      { w: 'fristgerecht', role: 'plain', en: 'on time', hi: 'samay par', type: 'Adjective' },
      { w: 'einzureichen', role: 'r-passiversatz-seinzu', en: 'to be submitted (Satzende, sein+zu, institutional obligation)', hi: '(Satzende, institutional obligation)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Unterlagen', role: 'plain', en: 'documents', hi: 'dastaavez', type: 'Noun · plural' },
      { w: 'sind', role: 'r-passiversatz-seinzu', en: 'are (part of a second sein+zu construction)', hi: '(sein+zu construction)', type: 'Verb (Präsens)' },
      { w: 'vollständig', role: 'plain', en: 'completely', hi: 'poori tarah', type: 'Adverb' },
      { w: 'vorzulegen', role: 'r-passiversatz-seinzu', en: 'to be submitted (Satzende, sein+zu)', hi: '(Satzende, sein+zu)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The application is to be submitted on time. The documents are to be submitted in full.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_013_L001', speaker: 'Regine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ist die neue Brückenkonstruktion überhaupt realisierbar, angesichts des Budgets?', en: 'Timo, is the new bridge construction even realizable, given the budget?' },
      { id: 'C2_013_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sie ist gut belastbar und, was wichtiger ist, hervorragend skalierbar für künftige Erweiterungen.', en: 'It\'s heavily load-bearing and, more importantly, excellently scalable for future extensions.' },
      { id: 'C2_013_L003', speaker: 'Regine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und die Wartung? Muss die alle zwei Jahre erfolgen, oder reicht ein längeres Intervall?', en: 'And the maintenance? Does it have to happen every two years, or does a longer interval suffice?' },
      { id: 'C2_013_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Laut Gutachten ist ein vierjähriges Intervall völlig ausreichend.', en: 'According to the report, a four-year interval is entirely sufficient.' }
    ],
    transcript: 'Timo, ist die neue Brückenkonstruktion überhaupt realisierbar, angesichts des Budgets? Sie ist gut belastbar und, was wichtiger ist, hervorragend skalierbar für künftige Erweiterungen. Und die Wartung? Muss die alle zwei Jahre erfolgen, oder reicht ein längeres Intervall? Laut Gutachten ist ein vierjähriges Intervall völlig ausreichend.',
    translation: 'Timo, is the new bridge construction even realizable, given the budget? It\'s heavily load-bearing and, more importantly, excellently scalable for future extensions. And the maintenance? Does it have to happen every two years, or does a longer interval suffice? According to the report, a four-year interval is entirely sufficient.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'die' },
      { w: 'neue' },
      { w: 'Brückenkonstruktion' },
      { w: 'überhaupt' },
      { w: 'realisierbar' },
      { w: ',', plain: true },
      { w: 'angesichts' },
      { w: 'des' },
      { w: 'Budgets' },
      { w: '?', plain: true },
      { w: 'Sie' },
      { w: 'ist' },
      { w: 'gut' },
      { w: 'belastbar' },
      { w: 'und' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'wichtiger' },
      { w: 'ist' },
      { w: ',', plain: true },
      { w: 'hervorragend' },
      { w: 'skalierbar' },
      { w: 'für' },
      { w: 'künftige' },
      { w: 'Erweiterungen' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Wartung' },
      { w: '?', plain: true },
      { w: 'Muss' },
      { w: 'die' },
      { w: 'alle' },
      { w: 'zwei' },
      { w: 'Jahre' },
      { w: 'erfolgen' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: 'reicht' },
      { w: 'ein' },
      { w: 'längeres' },
      { w: 'Intervall' },
      { w: '?', plain: true },
      { w: 'Laut' },
      { w: 'Gutachten' },
      { w: 'ist' },
      { w: 'ein' },
      { w: 'vierjähriges' },
      { w: 'Intervall' },
      { w: 'völlig' },
      { w: 'ausreichend' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie wird die neue Konstruktion beschrieben?', qEn: 'How is the new construction described?', options: ['kaum belastbar', 'gut belastbar und skalierbar', 'nur für kurze Zeit nutzbar', 'zu teuer'], optionsEn: ['hardly robust', 'robust and scalable', 'usable only for a short time', 'too expensive'], answer: 1,
        explain: '"Sie ist gut belastbar und hervorragend skalierbar."' },
      { q: 'Wie oft ist laut Bericht eine Wartung nötig?', qEn: 'How often is maintenance needed, according to the report?', options: ['jedes Jahr', 'alle zwei Jahre', 'alle vier Jahre', 'nie'], optionsEn: ['every year', 'every two years', 'every four years', 'never'], answer: 2,
        explain: '"Ein vierjähriges Intervall ist völlig ausreichend."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, ob die Brückenkonstruktion beim Budget realisierbar ist.", taskEn: "Timo asks whether the bridge design is feasible on the budget.", de: "Sie ist gut belastbar und hervorragend skalierbar, also realisierbar.", en: "It's highly load-bearing and excellently scalable, so it's feasible." },
    { task: "Ein Gutachter fragt, ob die Studie wiederholbar ist.", taskEn: "A reviewer asks whether the study is repeatable.", de: "Die Ergebnisse sind reproduzierbar und vollständig überprüfbar.", en: "The results are reproducible and fully verifiable." },
    { task: "Der Absatz ist passivlastig. Formuliere die Pflicht um.", taskEn: "The paragraph is passive-heavy. Recast the obligation.", de: "Die Frist ist einzuhalten, und die Angaben sind messbar zu dokumentieren.", en: "The deadline is to be observed, and the data documented measurably." },
    { task: "Deine Kollegin fragt, ob der Schaden rückgängig zu machen ist.", taskEn: "Your colleague asks whether the damage can be undone.", de: "Der Eingriff ist unumkehrbar, aber der Verlust bleibt quantifizierbar.", en: "The intervention is irreversible, but the loss remains quantifiable." },
    { task: "Ein Student liest überall eine Pflicht heraus. Kläre die Nuance.", taskEn: "A student reads obligation into everything. Clarify the nuance.", de: "Nachvollziehbar heißt möglich, nicht vorgeschrieben.", en: "'Nachvollziehbar' means possible, not prescribed." }
  ],
  writing: {
    prompt: 'TASK 1 — Passive reduction (150 words): Rewrite passive-heavy texts using authentic passive alternatives. Explain every improvement.\n\nTASK 2 — Register matching (150 words): Choose the most appropriate passive alternative for academic, legal, and journalistic contexts. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic article demonstrating sophisticated use of passive alternatives across academic, scientific, legal, and professional registers.',
    starters: ['Die Daten lassen sich...', 'Der Antrag ist...', 'Die Ergebnisse sind reproduzierbar, weil...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Passiversatzformen als stilistische Entscheidung...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which alternative most naturally expresses possibility rather than plain process or obligation?', options: ['Die Daten lassen sich analysieren.', 'Die Daten sind zu analysieren.', 'Die Daten wurden analysiert.'], answer: 0, explain: '"sich lassen" specifically expresses possibility ("can be analyzed"), distinct from obligation (sein+zu) or plain process (passive).' },
    gap: { sentence: ['Die Ergebnisse sind unter denselben Bedingungen ', '.'], gaps: [ { answer: 'reproduzierbar', accepts: ['reproduzierbar'] } ], explain: 'The -bar adjective "reproduzierbar" compactly expresses "can be reproduced" — precise scientific register.' },
    match: { q: 'Match each structure to its main meaning.', pairs: [ { noun: 'sein + zu', art: 'Obligation' }, { noun: 'sich lassen', art: 'Possibility' }, { noun: 'man', art: 'General Actor' }, { noun: '-bar Adjective', art: 'Property' } ] },
    builder: { target: 'Build: "The results are reproducible." (-bar adjective as passive alternative)', bank: ['Die', 'Ergebnisse', 'sind', 'reproduzierbar', '.'], answer: ['Die', 'Ergebnisse', 'sind', 'reproduzierbar', '.'], roles: { 'sind': 'r-passiversatz-seinzu', 'reproduzierbar': 'r-bar-adjektiv' } },
    errorCorrection: { title: 'Error correction', wrong: 'Man sollte den Antrag einreichen und man sollte die Frist einhalten in diesem offiziellen Dokument.', right: 'Der Antrag ist einzureichen, und die Frist ist einzuhalten.', explain: 'Overusing "man" in an official/legal document sounds casual and imprecise; "sein + zu" is the authentic institutional register for obligation.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for passive alternatives in this chapter?', options: ['Passive is only one road; C2 mastery means knowing the whole network and choosing the best route', 'Passive voice should always be replaced with active voice', 'All passive alternatives mean exactly the same thing'], answer: 0, explain: 'Native speakers choose among sein+zu, sich lassen, man, -bar adjectives, and nominalization deliberately, not automatically.' },
    { q: 'What does "sich lassen" express that plain passive does not?', options: ['Possibility, rather than mere process', 'Strict obligation', 'A general, unspecified actor'], answer: 0, explain: '"Die Daten lassen sich analysieren" emphasizes that analysis is possible, not just that it happens.' },
    { q: 'Which register most strongly prefers "sein + zu" constructions?', options: ['Legal/administrative', 'Casual conversation', 'Literary fiction'], answer: 0, explain: 'sein+zu expresses institutional obligation, fitting legal and administrative register precisely.' },
    { q: 'What is a classic C2-level mistake with passive alternatives?', options: ['Overusing "man" as a catch-all replacement regardless of register', 'Never using any passive alternatives', 'Using too many -bar adjectives'], answer: 0, explain: '"man" can sound casual and imprecise if overused in formal or legal writing.' },
    { q: 'Why might a writer choose "reproduzierbar" over "kann reproduziert werden"?', options: ['For stylistic elegance and compactness in scientific register', 'Because the passive form is grammatically incorrect', 'To make the sentence longer'], answer: 0, explain: '-bar adjectives compactly express a passive-like property, a hallmark of native scientific writing.' }
  ],
  takeaways: [
    { c: 'r-strassennetz-metapher', html: 'Passive is only one road — C2 mastery means knowing the whole network (sein+zu, sich lassen, man, -bar adjectives, nominalization) and choosing the best route.' },
    { c: 'r-passiversatz-lassen', html: '"sich lassen" expresses possibility (die Daten lassen sich analysieren), distinct from plain process or obligation.' },
    { c: 'r-passiversatz-seinzu', html: '"sein + zu" expresses institutional obligation (der Antrag ist einzureichen), preferred in legal/administrative register.' },
    { c: 'r-bar-adjektiv', html: '-bar adjectives (reproduzierbar, messbar, quantifizierbar) compactly express a passive-like property in scientific/formal register.' }
  ],
  revisionTips: [
    'Take one passive sentence and rewrite it four ways: sein+zu, sich lassen, man, and a -bar adjective if applicable.',
    'Read one scientific abstract and label every -bar adjective and passive alternative by function.',
    'Rewrite one paragraph of a legal or administrative text, checking that every obligation uses sein+zu rather than "man" or plain passive.'
  ]
};
window.CHAPTER = CHAPTER;
