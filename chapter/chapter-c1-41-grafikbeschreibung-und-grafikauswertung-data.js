/* KLARWEG CHAPTER DATA — C1 · Chapter 41
   "Grafikbeschreibung & Grafikauswertung" — structured graph
   description: introduction, data description, comparison, trend
   language, interpretation, evaluation, conclusion. NOT
   argumentation/passive/cohesion (already mastered) — focus is
   statistical description and data-analyst thinking.
   Dialogue: Katrin and Timo ONLY. */
const CHAPTER = {
  id: 'c1-41-grafikbeschreibung-und-grafikauswertung',
  phase: 'C1 · Nominalstil & Präzision',
  number: 41,
  title: 'Grafikbeschreibung & Grafikauswertung',
  titleEn: 'Describing and evaluating graphics',
  description: 'Think like a data analyst, not a calculator. A calculator only reads numbers. A data analyst asks: what changed, why, what matters, and what conclusion can reasonably be drawn?',
  xp: 1010, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 42, title: 'Goethe-Zertifikat C1 Probeprüfung', titleEn: 'Goethe-Zertifikat C1 mock examination' , href: 'chapter-c1-42-goethe-zertifikat-c1-probepruefung.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'A C1 Grafikbeschreibung explains the <em>meaning</em> behind the numbers.',
    intro: 'Preparing a university presentation on AI, climate change, and digitalization statistics, Katrin describes rising revenue over three years, and Timo offers a possible explanation — reading the graphic like data analysts, not calculators.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See the full graph-analysis architecture — introduction, description, comparison, interpretation, conclusion — in natural use'],
    scene: 'Vorbereitung auf eine Universitätspräsentation: Statistiken zu KI, Klimawandel und Digitalisierung analysieren',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Katrin', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'vorliegende', role: 'r-subject', en: 'present (given)', hi: 'दी गई', pron: 'FOR-lee-gen-duh', type: 'Adjective (feste Wendung)', why: 'die vorliegende Grafik = the present/given graphic, fixed formal opener for graph description (this chapter).', ex: 'Die vorliegende Grafik zeigt den Umsatz.', exEn: 'The present graphic shows the revenue.' },
        { w: 'Grafik', role: 'r-subject', en: 'graphic', hi: 'ग्राफ़िक', pron: 'GRAH-fik', type: 'Noun · fem.' },
        { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाता है', pron: 'TSY-kt', type: 'Verb · zeigen' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Umsatz', role: 'r-akkusativ', en: 'revenue', hi: 'आय', pron: 'UM-zats', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'The present graphic shows the revenue.', hi: 'Di gayi graphic aay dikhaati hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Umsatz', role: 'r-subject', en: 'revenue', hi: 'आय', pron: 'UM-zats', type: 'Noun · masc.' },
        { w: 'beläuft', role: 'r-verb', en: 'amounts', hi: 'होती है', pron: 'be-LOYFT', type: 'Verb · sich belaufen', why: 'sich belaufen auf + Akkusativ = to amount to (this chapter).', ex: 'Der Umsatz beläuft sich auf zwei Millionen.', exEn: 'The revenue amounts to two million.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'पर', pron: 'owf', type: 'Preposition (part of sich belaufen auf)' },
        { w: 'zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number' },
        { w: 'Millionen', role: 'r-akkusativ', en: 'million', hi: 'मिलियन', pron: 'mi-LYO-nen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'The revenue amounts to two million.', hi: 'Aay do million tak hoti hai.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'steigt', role: 'r-verb', en: 'rises', hi: 'बढ़ती है', pron: 'SHTYKT', type: 'Verb · steigen' },
        { w: 'kontinuierlich', role: 'r-akkusativ', en: 'continuously', hi: 'निरंतर', pron: 'kon-ti-nu-EER-likh', type: 'Adverb', why: 'kontinuierlich = continuously/steadily (this chapter).', ex: 'Er steigt kontinuierlich.', exEn: 'It rises continuously.' },
        { w: 'seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zyte', type: 'Preposition + dative' },
        { w: 'drei', role: 'r-dativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Jahren', role: 'r-dativ', en: 'years (dat.)', hi: 'सालों से', pron: 'YAH-ren', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'It rises continuously since three years.', hi: 'Yeh teen saalon se nirantar badh rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'mögliche', role: 'r-akkusativ', en: 'possible', hi: 'संभावित', pron: 'MÖK-li-khuh', type: 'Adjective (feste Wendung)', why: 'eine mögliche Erklärung wäre = a possible explanation would be, fixed hedging phrase (this chapter).', ex: 'Eine mögliche Erklärung wäre der neue Markt.', exEn: 'A possible explanation would be the new market.' },
        { w: 'Erklärung', role: 'r-akkusativ', en: 'explanation', hi: 'स्पष्टीकरण', pron: 'er-KLAI-rung', type: 'Noun · fem.' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'neue', role: 'r-subject', en: 'new', hi: 'नया', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Markt', role: 'r-subject', en: 'market', hi: 'बाज़ार', pron: 'markt', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'A possible explanation would be the new market.', hi: 'Ek sambhaavit spashtikaran naya baazaar hoga.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Abschließend', role: 'r-akkusativ', en: 'in conclusion', hi: 'निष्कर्ष के रूप में', pron: 'AP-shlee-sent', type: 'Adverb (feste Wendung)', why: 'abschließend lässt sich feststellen = in conclusion it can be established, formal closing phrase (this chapter).', ex: 'Abschließend lässt sich feststellen, dass der Trend positiv ist.', exEn: 'In conclusion it can be established that the trend is positive.' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen (part of fixed phrase)' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'feststellen', role: 'r-verb', en: 'be established', hi: 'कहा जा', pron: 'FEST-shte-len', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Trend', role: 'r-subject', en: 'trend', hi: 'रुझान', pron: 'trent', type: 'Noun · masc.' },
        { w: 'positiv', role: 'r-akkusativ', en: 'positive', hi: 'सकारात्मक', pron: 'po-zi-TEEF', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'In conclusion it can be established that the trend is positive.', hi: 'Nishkarsh ke roop mein, kaha ja sakta hai ki rujhaan sakaraatmak hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'präsentieren', role: 'r-verb', en: 'let us present', hi: 'प्रस्तुत करते हैं', pron: 'pray-zen-TEE-ren', type: 'Verb · präsentieren (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Grafik', role: 'r-akkusativ', en: 'graphic', hi: 'ग्राफ़िक', pron: 'GRAH-fik', type: 'Noun · fem.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Good, then let us present the graphic tomorrow.', hi: 'Achha, toh hum kal graphic prastut karte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think like a <span class="de r-interpretation">data analyst</span>, not a calculator. Ask what changed, why, and what conclusion can reasonably be drawn.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is GRAFIKBESCHREIBUNG & GRAFIKAUSWERTUNG at C1 level — the full structure of statistical graph description and analysis (introduction, overview, description, comparison, trend, interpretation, conclusion), NOT argumentation, passive voice, cohesion, or nominalization mechanics (already mastered). Covered: introducing a graphic (Die vorliegende Grafik zeigt..., Das Schaubild informiert über..., Die Statistik stellt dar..., Die Abbildung verdeutlicht..., Die Daten stammen aus...); describing data with precise statistical verbs (beträgt, beläuft sich auf, liegt bei, macht aus, entfällt auf, umfasst); comparing values (höher als, niedriger als, doppelt so hoch, halb so groß, im Vergleich zu, im Gegensatz zu, deutlich mehr, geringfügig weniger); describing trends (steigt kontinuierlich, nimmt deutlich zu, geht zurück, stagniert, erreicht seinen Höchststand, fällt leicht ab, entwickelt sich positiv, schwankt); academic/scientific interpretation with appropriate hedging (Die Daten legen nahe..., Eine mögliche Erklärung wäre..., Die Ergebnisse weisen darauf hin..., Es besteht eine signifikante Korrelation..., Die Entwicklung könnte auf...zurückzuführen sein); and a justified conclusion (Abschließend lässt sich feststellen, dass...). Do NOT expect or require passive constructions, argumentative counter-argument structure, or cohesion-device drilling as separate requirements — this chapter assumes those skills exist; do not flag their absence. The most important things to catch: listing numbers without any interpretation of what they mean; giving personal opinions too early, before the data has been described; confusing observation (what the data shows) with explanation (why it might be so) — explanation should be hedged (e.g. "eine mögliche Erklärung wäre", Konjunktiv II), not stated as fact; ignoring necessary comparisons between data points; repeating percentages/numbers unnecessarily instead of varying description; a weak or missing conclusion. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag numbers presented with no interpretation; flag interpretation/explanation stated as unhedged fact rather than cautious possibility; flag missing comparison language; check that statistical description verbs (beläuft sich auf, macht aus, entfällt auf) and trend verbs (steigt kontinuierlich, geht zurück) are used correctly and idiomatically. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Analysis check:</b> one sentence on whether the learner\'s text explains the meaning behind the numbers like a data analyst, not just reports them like a calculator.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your Grafikbeschreibung explains the meaning behind the numbers like a true data analyst. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Grafikbeschreibung Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: think like a data analyst, not a calculator.' },
  parserSentence: [ { w: 'Die', role: 'r-einleitung' }, { w: 'vorliegende', role: 'r-einleitung' }, { w: 'Grafik', role: 'r-einleitung' }, { w: 'zeigt', role: 'r-einleitung' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: think like a data analyst, explaining the meaning behind the numbers, not just reporting them.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Katrin and Timo analyze a graph on AI usage, using introduction, description, comparison, trend, and interpretation.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key statistical and graph-analysis expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master introduction, data description, comparison, trend, interpretation, and conclusion phrases.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic report with graphs and a business market analysis, identifying statistical language and trends.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify key figures, trends, comparisons, and interpretations in a university presentation and business analyst talk.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present graphs, interpret statistics, compare data, and draw conclusions using authentic C1 speaking strategies.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Analyze a statistical graphic step by step, and write a full 350-word Grafikbeschreibung & Grafikauswertung.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill chart identification, trend description, comparison practice, and data interpretation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1010 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Trend description, comparison, and data interpretation drills, plus a full Grafikbeschreibung writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Grafikbeschreibung Model, Analysis Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die vorliegende Grafik zeigt die Entwicklung der KI-Nutzung seit 2018.', text: 'Introduce a graphic with the standard opener "die vorliegende Grafik zeigt"' },
    { de: 'Die Zahl beläuft sich auf 68 Prozent im aktuellen Jahr.', text: 'Describe data precisely using "sich belaufen auf"' },
    { de: 'Im Vergleich zu 2018 ist das deutlich mehr.', text: 'Compare values using "im Vergleich zu" and "deutlich mehr"' },
    { de: 'Die Kurve steigt kontinuierlich. Eine mögliche Erklärung wäre, dass Universitäten KI-Tools aktiv fördern.', text: 'Describe a trend and offer a hedged interpretation with Konjunktiv II' },
    { de: 'Abschließend lässt sich feststellen, dass KI im universitären Alltag weiter zunehmen wird.', text: 'Draw a justified conclusion with "abschließend lässt sich feststellen"' }
  ],
  vocab: [
    { de: 'die vorliegende Grafik', pos: 'fixed expression (graph introduction)', level: 'C1', register: 'written', en: 'the graphic at hand / the present graphic', hi: 'साथ में दी गई ग्राफिक', ex: 'Die vorliegende Grafik zeigt die Entwicklung der KI-Nutzung seit 2018.', exEn: 'The present graphic shows the development of AI usage since 2018.', exHi: 'Saamne wali graphic 2018 se AI istemaal ke vikaas ko dikhaati hai.', ex2: 'Die vorliegende Grafik stammt aus einer aktuellen Studie.', ex2En: 'The present graphic comes from a current study.', ex2Hi: 'Yeh graphic ek current study se aayi hai.' },
    { de: 'sich belaufen auf', pos: 'verb (fixed statistical expression)', level: 'C1', register: 'written', en: 'to amount to', hi: 'तक पहुँचना', ex: 'Die Zahl beläuft sich auf 68 Prozent im aktuellen Jahr.', exEn: 'The number amounts to 68 percent in the current year.', exHi: 'Yeh sankhya iss saal 68 pratishat hai.', ex2: 'Die Kosten belaufen sich auf mehrere Millionen Euro.', ex2En: 'The costs amount to several million euros.', ex2Hi: 'Kharch kai million euro tak hai.', conj: { praesens: 'beläuft sich', praeteritum: 'belief sich', perfekt: 'hat sich belaufen' } },
    { de: 'kontinuierlich', pos: 'adverb', level: 'C1', register: 'written', en: 'continuously, steadily', hi: 'लगातार', ex: 'Die Kurve steigt kontinuierlich.', exEn: 'The curve rises continuously.', exHi: 'Yeh curve lagataar badh rahi hai.', ex2: 'Der Umsatz ist kontinuierlich gestiegen.', ex2En: 'Revenue has continuously increased.', ex2Hi: 'Revenue lagataar badha hai.' },
    { de: 'eine mögliche Erklärung wäre', pos: 'fixed expression (Konjunktiv II, hedged interpretation)', level: 'C1', register: 'written', en: 'a possible explanation would be', hi: 'एक संभावित व्याख्या यह हो सकती है', ex: 'Eine mögliche Erklärung wäre, dass Universitäten KI-Tools aktiv fördern.', exEn: 'A possible explanation would be that universities actively promote AI tools.', exHi: 'Ek sambhaavit vyaakhya ho sakti hai ki universities AI tools ko saqriya roop se badhaava dete hain.', ex2: 'Eine mögliche Erklärung wäre der demografische Wandel.', ex2En: 'A possible explanation would be demographic change.', ex2Hi: 'Ek sambhaavit vyaakhya demographic parivartan ho sakta hai.' },
    { de: 'abschließend lässt sich feststellen', pos: 'fixed expression (conclusion phrase)', level: 'C1', register: 'written', en: 'in conclusion, one can establish', hi: 'अंत में, यह कहा जा सकता है', ex: 'Abschließend lässt sich feststellen, dass KI im universitären Alltag weiter zunehmen wird.', exEn: 'In conclusion, one can establish that AI will continue to increase in university daily life.', exHi: 'Ant mein, kaha jaa sakta hai ki university ke rozmarra mein AI aur badhegi.', ex2: 'Abschließend lässt sich feststellen, dass die Reform erfolgreich war.', ex2En: 'In conclusion, one can establish that the reform was successful.', ex2Hi: 'Ant mein, kaha jaa sakta hai ki reform safal rahi.' }
  ],
  grammar: [
    { title: 'Struktur einer Grafikbeschreibung (Structure of a Grafikbeschreibung)', body: [ 'Introduction → Overview → Description → Comparison → Interpretation → Evaluation → Conclusion. A C1 Grafikbeschreibung explains the meaning behind the numbers, not only the numbers themselves.' ], hinglish: 'C1 par Grafikbeschreibung mein sirf numbers padhna kaafi nahi \u2014 unka matlab batana hota hai. Isliye dhaancha do hisson mein chalta hai: pehle objective description aur comparison, aur uske <b>baad</b> interpretation. Yeh order ulta karna is genre ki sabse badi galti hai.' },
    { title: 'Eine Grafik einführen (Introducing a Graphic)', body: [ 'Die vorliegende Grafik zeigt..., Das Schaubild informiert über..., Die Statistik stellt dar..., Die Abbildung verdeutlicht..., Die Daten stammen aus... — introduce source, topic, and time period at the start.' ], hinglish: 'Shuruaat mein teen cheezein aani chahiye \u2014 graphic kya dikhati hai, data kahan se aaya, aur kis samay ka hai. <span class="de">Die vorliegende Grafik zeigt \u2026</span> sabse standard opening hai. Aur <span class="de">Die Daten stammen aus \u2026</span> se source batate hain, jo exam mein aksar chhoot jaata hai.' },
    { title: 'Daten beschreiben (Describing Data)', body: [ 'beträgt, beläuft sich auf, liegt bei, macht aus, entfällt auf, umfasst — objective statistical verbs for reporting values without editorializing.' ], hinglish: 'Yeh verbs numbers batane ke liye hain, aur inme koi raay nahi hoti \u2014 isliye yeh objective lagte hain. Par har ek ka apna pattern hai: <b>betr\u00e4gt</b> ke baad seedha number, <b>liegt</b> ke saath <b>bei</b>, aur <b>bel\u00e4uft sich</b> aur <b>entf\u00e4llt</b> ke saath <b>auf</b>. Yeh farak neeche wale block mein detail se hai \u2014 aur yahi sabse zyada galat hota hai.' },
    { title: 'Werte vergleichen (Comparing Values)', body: [ 'höher als, niedriger als, doppelt so hoch, halb so groß, im Vergleich zu, im Gegensatz zu, deutlich mehr, geringfügig weniger — comparison language turns isolated numbers into meaningful relationships.' ], hinglish: 'Akele numbers ka koi matlab nahi hota \u2014 comparison hi unhe meaning deta hai. Do patterns yaad rakho: comparative ke baad <b>als</b> (<span class="de">h\u00f6her als</span>), aur barabari mein <b>wie</b> (<span class="de">doppelt so hoch wie</span>, <span class="de">halb so gro\u00df wie</span>). Aur <b>im Vergleich</b> ke saath hamesha <b>zu</b> aata hai, <i>mit</i> nahi.' },
    { title: 'Trends beschreiben (Describing Trends)', body: [ 'steigt kontinuierlich, nimmt deutlich zu, geht zurück, stagniert, erreicht seinen Höchststand, fällt leicht ab, entwickelt sich positiv, schwankt — precise vocabulary for describing movement over time.' ], hinglish: 'Trend batane ke liye yeh verbs hain, aur inke saath degree words lagte hain \u2014 <b>kontinuierlich</b>, <b>deutlich</b>, <b>leicht</b>, <b>geringf\u00fcgig</b>. Dhyaan do ki <b>zunehmen</b> aur <b>abfallen</b> separable hain, isliye <span class="de">nimmt deutlich <b>zu</b></span> \u2014 prefix end mein. Aur <b>stagniert</b> matlab koi badlav nahi, jo bhoolna aasaan hai.' },
    { title: 'Interpretation & Bewertung (Interpretation & Evaluation)', body: [ 'Observation → Comparison → Interpretation → Possible Cause → Evaluation → Conclusion. Interpretation must be hedged and supported by the data (Die Daten legen nahe..., Eine mögliche Erklärung wäre..., Konjunktiv II), never stated as unhedged fact.' ], hinglish: 'Yahan is genre ka sabse zaroori rule hai. Graphic batati hai ki <b>kya</b> hua \u2014 <b>kyun</b> hua yeh woh kabhi nahi batati. Isliye cause hamesha hedge ke saath likho: <span class="de">Eine m\u00f6gliche Erkl\u00e4rung w\u00e4re, dass \u2026</span> ya <span class="de">Dies d\u00fcrfte darauf zur\u00fcckzuf\u00fchren sein, dass \u2026</span>. Cause ko fact ki tarah likh dena yahan sabse bhaari galti hai.' },
    {
      title: 'Die festen Muster der Datenverben',
      body: [
        'The statistical verbs are not interchangeable \u2014 each takes its own preposition or case, and that is where nearly every error in this chapter comes from.',
        'Learn each verb together with the pattern that follows it, exactly as you learned collocations in Chapter 37.'
      ],
      table: {
        head: ['Verb / phrase', 'Pattern', 'Example'],
        rows: [
          ['betragen', '+ figure, <b>no preposition</b>', '<span class="de">Der Anteil betr\u00e4gt 45 Prozent.</span>'],
          ['liegen', '+ <b>bei</b>', '<span class="de">Der Wert liegt <b>bei</b> 45 Prozent.</span>'],
          ['sich belaufen', '+ <b>auf</b> + Akkusativ', '<span class="de">Die Kosten belaufen sich <b>auf</b> zwei Millionen.</span>'],
          ['entfallen', '+ <b>auf</b> + Akkusativ', '<span class="de">Ein Drittel entf\u00e4llt <b>auf</b> Deutschland.</span>'],
          ['im Vergleich', '+ <b>zu</b> + Dativ (zum/zur)', '<span class="de">im Vergleich <b>zum</b> Vorjahr</span>'],
          ['doppelt so hoch', '+ <b>wie</b> (never als)', '<span class="de">doppelt so hoch <b>wie</b> 2020</span>'],
          ['zur\u00fcckzuf\u00fchren sein', '+ <b>auf</b> + Akkusativ', '<span class="de">Dies ist <b>auf</b> die Preise zur\u00fcckzuf\u00fchren.</span>']
        ]
      },
      note: 'The one distinction to internalise: <b>wie</b> for equality (so hoch wie, doppelt so hoch wie) and <b>als</b> only after a comparative (h\u00f6her als, niedriger als).',
      hinglish: 'Statistical verbs aapas mein badle nahi jaa sakte \u2014 har ek apna preposition ya case leta hai, aur is chapter ki lagbhag saari galtiyan wahin se aati hain. <b>betragen</b> ke baad seedha number aata hai, bina preposition: <span class="de">Der Anteil betr\u00e4gt 45 Prozent.</span> Par <b>liegen</b> ke saath <b>bei</b> lagta hai: <span class="de">Der Wert liegt bei 45 Prozent.</span> <b>sich belaufen</b> aur <b>entfallen</b> dono <b>auf</b> + Akkusativ lete hain. <b>im Vergleich</b> ke saath <b>zu</b> + Dativ aata hai, aur woh aksar <b>zum</b> ya <b>zur</b> ban jaata hai. Aur ek cheez pakki kar lo \u2014 barabari mein <b>wie</b> (<span class="de">doppelt so hoch wie</span>) aur comparative ke baad <b>als</b> (<span class="de">h\u00f6her als</span>). Inhe Chapter 37 wali collocations ki tarah jodi mein yaad karo.'
    },
    { title: 'Meister-Tabelle', body: [ 'Stage mapped to purpose.' ], table: { head: ['Stage', 'Purpose'], rows: [ ['Introduction', 'Present the graphic'], ['Overview', 'Main trend'], ['Description', 'Report data'], ['Comparison', 'Compare values'], ['Interpretation', 'Explain meaning'], ['Conclusion', 'Final evaluation'] ] }, hinglish: 'Chhe stage ka table \u2014 aur inka order maayne rakhta hai: description aur comparison pehle, interpretation baad mein.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are the fixed patterns the data verbs demand \u2014 <i>betragen</i> vs <i>liegen bei</i>, <b>wie</b> vs <b>als</b>, <b>im Vergleich zu</b>, and verb-final after <b>dass</b>. The third is the genre error that costs most: stating a cause as fact.' ], mistakes: [
      { wrong: 'Der Anteil betr\u00e4gt <b>bei</b> 45 Prozent.', right: 'Der Anteil betr\u00e4gt 45 Prozent. / Der Anteil liegt bei 45 Prozent.', why: '<b>betragen</b> takes the figure directly, while <b>liegen</b> needs <b>bei</b>. Mixing the two patterns is the commonest error in this chapter.' },
      { wrong: 'Die Zahl ist doppelt so hoch <b>als</b> im Vorjahr.', right: 'Die Zahl ist doppelt so hoch <b>wie</b> im Vorjahr.', why: 'Equality comparisons take <b>wie</b> \u2014 <i>so hoch wie</i>, <i>doppelt so hoch wie</i>. Only a comparative (<i>h\u00f6her</i>) takes <b>als</b>.' },
      { wrong: 'Der R\u00fcckgang ist eindeutig auf die Preise zur\u00fcckzuf\u00fchren.', right: 'Eine m\u00f6gliche Erkl\u00e4rung w\u00e4re, dass die Preise gestiegen sind.', why: 'A graphic shows WHAT changed, never WHY. The cause has to be hedged \u2014 with Konjunktiv II or <i>d\u00fcrfte</i>/<i>k\u00f6nnte</i>.' },
      { wrong: 'Im Vergleich <b>mit</b> dem Vorjahr steigt die Zahl.', right: 'Im Vergleich <b>zu</b> dem Vorjahr steigt die Zahl. / Im Vergleich zum Vorjahr \u2026', why: 'The fixed form is <b>im Vergleich zu</b> + Dativ, normally contracted to <b>zum</b> / <b>zur</b>.' },
      { wrong: 'Die Grafik zeigt, dass die Zahl steigt kontinuierlich.', right: 'Die Grafik zeigt, dass die Zahl kontinuierlich steigt.', why: 'Inside a <b>dass</b>-clause the verb goes to the very END \u2014 after the adverb.' },
      { wrong: 'Abschlie\u00dfend l\u00e4sst sich feststellen, die Entwicklung ist positiv.', right: 'Abschlie\u00dfend l\u00e4sst sich feststellen, dass die Entwicklung positiv ist.', why: '<b>l\u00e4sst sich feststellen</b> always opens a <b>dass</b>-clause \u2014 without it the sentence breaks in two.' }
    ], hinglish: 'Paanch galtiyan data verbs ke fixed patterns ki hain \u2014 <i>betragen</i> aur <i>liegen bei</i> ka farak, <b>wie</b> aur <b>als</b>, <b>im Vergleich zu</b>, aur <b>dass</b> ke baad verb end mein. Aur teesri woh hai jo is genre mein sabse zyada marks kaatti hai: cause ko fact ki tarah likh dena.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What does the graphic show? Identify the main trend. Describe the important data. Compare values. Interpret the results. Suggest possible explanations. Write an objective conclusion.' ], note: 'Memory trick: think like a data analyst, not a calculator. A calculator only reads numbers; a data analyst asks what changed, why, what matters, and what conclusion follows.', hinglish: 'Graphic dekho, main trend pakdo, zaroori data batao, values compare karo, phir interpretation do, aur ant mein nateeja. Aur likhte waqt do cheezein check karo \u2014 har data verb ke saath sahi preposition (<b>betr\u00e4gt</b> ke baad kuch nahi, <b>liegt</b> ke saath <b>bei</b>), aur koi bhi cause hedge ke saath likha gaya hai?' }
  ],
  reading: {
    title: 'Umweltbundesamt: CO2-Emissionen Deutschlands im Rückgang',
    titleEn: 'Reading A — Federal Environment Agency: Germany\'s CO2 emissions in decline',
    tokens: [
      { w: 'Das', role: 'r-einleitung', en: 'the (neut. nom., part of "das Schaubild informiert über" — graph-introduction phrase)', hi: '', type: 'Article' },
      { w: 'Schaubild', role: 'r-einleitung', en: 'diagram/chart (part of expression)', hi: 'चार्ट (expression का हिस्सा)', type: 'Noun · neut.' },
      { w: 'des', role: 'plain', en: 'of the (neut. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Umweltbundesamts', role: 'plain', en: 'Federal Environment Agency (Satzende)', hi: 'संघीय पर्यावरण कार्यालय की (Satzende)', type: 'Noun · neut.' },
      { w: 'informiert', role: 'r-einleitung', en: 'informs (part of expression)', hi: '', type: 'Verb (Präsens)' },
      { w: 'über', role: 'r-einleitung', en: 'about (Satzende, "das Schaubild informiert über" — standard graph-introduction phrase)', hi: 'के बारे में बताता है (Satzende, standard opener)', type: 'Präposition · Akk. (Satzende)', why: '"Das Schaubild informiert über" is the standard opening phrase for introducing what a chart shows (this chapter).' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: '', type: 'Article' },
      { w: 'Rückgang', role: 'plain', en: 'decline (Satzende)', hi: 'गिरावट (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'CO2 उत्सर्जन की', type: 'Article · Gen.' },
      { w: 'CO2-Emissionen', role: 'plain', en: 'CO2 emissions (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Energiesektor', role: 'plain', en: 'energy sector (Satzende)', hi: 'ऊर्जा क्षेत्र (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Kurve', role: 'plain', en: 'curve', hi: 'वक्र रेखा', type: 'Noun · fem.' },
      { w: 'geht', role: 'r-trend', en: 'goes (part of "geht zurück" — trend-description phrase)', hi: '', type: 'Verb (Präsens)' },
      { w: 'seit', role: 'plain', en: 'since', hi: '2020 से', type: 'Präposition · Dat.' },
      { w: '2020', role: 'plain', en: '2020', hi: '', type: 'Number · year', pron: 'tsvy-TOW-zent-tsvahn-tsikh', ex: 'zweitausendzwanzig' },
      { w: 'deutlich', role: 'r-trend', en: 'clearly (part of trend phrase)', hi: 'स्पष्ट रूप से (trend phrase)', type: 'Adverb' },
      { w: 'zurück', role: 'r-trend', en: '(Satzende, "geht deutlich zurück" — standard downward-trend phrase)', hi: 'कम हो रही है (Satzende, standard downward-trend phrase)', type: 'Adverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'was', role: 'plain', en: 'which', hi: 'जो', type: 'Relativpronomen' },
      { w: 'vor', role: 'plain', en: 'above all', hi: 'सबसे ज़्यादा', type: 'Adverbiale' },
      { w: 'allem', role: 'plain', en: '(Satzende, part of "vor allem")', hi: '', type: 'Pronomen (Satzende)' },
      { w: 'auf', role: 'plain', en: 'to', hi: 'को', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: '', type: 'Article · Akk.' },
      { w: 'Kohleausstieg', role: 'plain', en: 'coal phase-out (Satzende)', hi: 'कोयला बंद करने के फ़ैसले (Satzende)', type: 'Noun · masc.' },
      { w: 'zurückzuführen', role: 'plain', en: 'attributable (Satzende)', hi: 'का श्रेय दिया जा सकता है (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The Federal Environment Agency\'s chart informs about the decline in CO2 emissions in the energy sector. The curve has clearly gone down since 2020, which is above all attributable to the coal phase-out.',
    comprehension: [
      { q: 'Welche Funktion hat "das Schaubild informiert über"?', options: ['Die Grafik einführen', 'Ein Gegenargument einführen', 'Eine Schlussfolgerung ziehen'], answer: 0 },
      { q: 'Welche Funktion hat "geht deutlich zurück"?', options: ['Einen fallenden Trend beschreiben', 'Werte vergleichen', 'Eine Ursache erklären'], answer: 0 },
      { q: 'Ist diese Beschreibung objektiv oder emotional?', options: ['Objektiv, mit präziser statistischer Sprache', 'Rein emotional', 'Ohne jede Struktur'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Geschäftliche Marktanalyse', titleEn: 'Reading B — Business market analysis',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Umsatz', role: 'plain', en: 'revenue', hi: 'revenue', type: 'Noun · masc.' },
      { w: 'entwickelt', role: 'r-trend', en: 'develops (part of "sich positiv entwickeln" — trend-description phrase)', hi: '(sich positiv entwickeln, trend-description phrase)', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-trend', en: '(reflexive, part of expression)', hi: '(reflexive)', type: 'Reflexivpronomen · Akk.' },
      { w: 'positiv', role: 'r-trend', en: 'positively (Satzende, "entwickelt sich positiv" — standard trend-description phrase)', hi: 'sakaaratmak roop se badh raha hai (Satzende, standard trend phrase)', type: 'Adjective (Adverbial, Satzende)', why: '"Entwickelt sich positiv" is the standard C1 phrase for describing a favorable, ongoing trend.' },
      { w: '.', plain: true },
      { w: 'Im', role: 'r-vergleich', en: 'in the (contracted, part of "im Gegensatz zu" — contrast comparison phrase)', hi: '(im Gegensatz zu, contrast comparison phrase)', type: 'Präposition (contracted)' },
      { w: 'Gegensatz', role: 'r-vergleich', en: 'contrast (part of expression)', hi: 'ke virudhh (expression ka hissa)', type: 'Noun · masc.' },
      { w: 'zu', role: 'r-vergleich', en: 'to (Satzende, "im Gegensatz zu" — standard contrast-comparison phrase)', hi: '(Satzende, standard contrast-comparison phrase)', type: 'Präposition · Dat. (Satzende)' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: '', type: 'Article' },
      { w: 'Vorjahren', role: 'plain', en: 'previous years (Satzende)', hi: 'pichhale saalon (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'stagniert', role: 'r-trend', en: 'stagnates (Satzende, trend-description verb for no change)', hi: 'sthir hai (Satzende, trend-description verb)', type: 'Verb (Präsens, Satzende)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'grahak', type: 'Article' },
      { w: 'Kundenzuwachs', role: 'plain', en: 'customer growth (Satzende)', hi: 'vriddhi (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'lekin', type: 'Adverb' },
      { w: '.', plain: true }
    ],
    translation: 'Revenue is developing positively. In contrast to previous years, however, customer growth is stagnating.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_041_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, sieh dir diese Grafik an — der Umsatz steigt seit drei Jahren kontinuierlich an.', en: 'Timo, look at this chart — revenue has been rising continuously for three years.' },
      { id: 'C1_041_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, das könnte an der neuen Digitalisierungsstrategie liegen, die letztes Jahr eingeführt wurde.', en: 'True, that could be due to the new digitalization strategy that was introduced last year.' },
      { id: 'C1_041_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Möglich, aber der stärkste Anstieg war schon vorher, also müssen wir vorsichtig mit dieser Erklärung sein.', en: 'Possible, but the strongest rise was already before that, so we need to be careful with that explanation.' },
      { id: 'C1_041_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Guter Einwand, dann sollten wir mehrere mögliche Ursachen in der Präsentation nennen.', en: 'Good point, then we should mention several possible causes in the presentation.' }
    ],
    transcript: 'Timo, sieh dir diese Grafik an — der Umsatz steigt seit drei Jahren kontinuierlich an. Stimmt, das könnte an der neuen Digitalisierungsstrategie liegen, die letztes Jahr eingeführt wurde. Möglich, aber der stärkste Anstieg war schon vorher, also müssen wir vorsichtig mit dieser Erklärung sein. Guter Einwand, dann sollten wir mehrere mögliche Ursachen in der Präsentation nennen.',
    translation: 'Timo, look at this chart — revenue has been rising continuously for three years. True, that could be due to the new digitalization strategy that was introduced last year. Possible, but the strongest rise was already before that, so we need to be careful with that explanation. Good point, then we should mention several possible causes in the presentation.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'sieh' },
      { w: 'dir' },
      { w: 'diese' },
      { w: 'Grafik' },
      { w: 'an' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'Umsatz' },
      { w: 'steigt' },
      { w: 'seit' },
      { w: 'drei' },
      { w: 'Jahren' },
      { w: 'kontinuierlich' },
      { w: 'an' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'könnte' },
      { w: 'an' },
      { w: 'der' },
      { w: 'neuen' },
      { w: 'Digitalisierungsstrategie' },
      { w: 'liegen' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'letztes' },
      { w: 'Jahr' },
      { w: 'eingeführt' },
      { w: 'wurde' },
      { w: '.', plain: true },
      { w: 'Möglich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'der' },
      { w: 'stärkste' },
      { w: 'Anstieg' },
      { w: 'war' },
      { w: 'schon' },
      { w: 'vorher' },
      { w: ',', plain: true },
      { w: 'also' },
      { w: 'müssen' },
      { w: 'wir' },
      { w: 'vorsichtig' },
      { w: 'mit' },
      { w: 'dieser' },
      { w: 'Erklärung' },
      { w: 'sein' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Einwand' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'mehrere' },
      { w: 'mögliche' },
      { w: 'Ursachen' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Präsentation' },
      { w: 'nennen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was zeigt die Grafik?', qEn: 'What does the chart show?', options: ['sinkender Umsatz', 'kontinuierlich steigender Umsatz', 'stabiler Umsatz', 'kein klares Muster'], optionsEn: ['falling revenue', 'continuously rising revenue', 'stable revenue', 'no clear pattern'], answer: 1,
        explain: '"Der Umsatz steigt seit drei Jahren kontinuierlich an."' },
      { q: 'Warum mahnt Katrin bei Timos Erklärung zur Vorsicht?', qEn: 'Why does Katrin urge caution about Timo\'s explanation?', options: ['sie ist falsch', 'der stärkste Anstieg war schon vorher', 'sie ist zu kompliziert', 'sie ist unwichtig'], optionsEn: ['it is wrong', 'the strongest rise came earlier', 'it is too complicated', 'it is unimportant'], answer: 1,
        explain: '"Der stärkste Anstieg war schon vorher, also müssen wir vorsichtig mit dieser Erklärung sein."' }
    ]
  },
  speaking: [
    { task: "Timo zeigt die Grafik mit steigendem Umsatz. Deute die Ursache.", taskEn: "Timo shows the chart with rising turnover. Interpret the cause.", de: "Eine mögliche Erklärung wäre die neue Digitalisierungsstrategie.", en: "A possible explanation would be the new digitalisation strategy." },
    { task: "Beginne die Auswertung im Vortrag.", taskEn: "Begin the analysis in your talk.", de: "Die vorliegende Grafik zeigt die Entwicklung zwischen 2010 und 2024.", en: "The chart shown here depicts the development between 2010 and 2024." },
    { task: "Ein Zuhörer fragt nach dem höchsten Wert in der Grafik.", taskEn: "A listener asks about the highest figure in the chart.", de: "Der Umsatz belief sich 2024 auf zwölf Millionen Euro.", en: "In 2024 turnover amounted to twelve million euros." },
    { task: "Deine Betreuerin fragt, wie sich die Kurve entwickelt hat.", taskEn: "Your supervisor asks how the curve has developed.", de: "Die Kurve steigt seit drei Jahren kontinuierlich an.", en: "The curve has been rising continuously for three years." },
    { task: "Vergleiche zwei Gruppen in der Grafik.", taskEn: "Compare two groups in the chart.", de: "Im Vergleich zu Kleinstädten liegt der Wert in Großstädten deutlich höher.", en: "Compared with small towns the figure is considerably higher in large cities." }
  ],
  writing: {
    prompt: 'TASK 1 — Analyze (150 words): Analyze a statistical graphic — introduce it, describe the data, compare values, interpret developments, and conclude objectively. Explain every writing step.\n\nTASK 2 — Grafikbeschreibung & Grafikauswertung (350 words): Demonstrate academic register, authentic statistical vocabulary, logical organization, interpretation, comparison, and balanced evaluation.',
    starters: ['Die vorliegende Grafik zeigt die Entwicklung der KI-Nutzung seit 2018.', 'Im Vergleich zu 2018 beläuft sich die Zahl heute auf 68 Prozent.'],
    placeholder: 'Die Kurve steigt kontinuierlich. Eine mögliche Erklärung wäre... Abschließend lässt sich feststellen, dass...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase is the standard C1 opener for introducing a graphic?', options: ['Die vorliegende Grafik zeigt...', 'Ich persönlich denke...', 'Abschließend lässt sich feststellen...'], answer: 0, explain: '"Die vorliegende Grafik zeigt" is the standard opening phrase for a Grafikbeschreibung.' },
    gap: { sentence: ['Die Zahl ', ' sich auf 68 Prozent.'], gaps: [ { answer: 'beläuft', accepts: ['beläuft'] } ], explain: '"Sich belaufen auf" is the standard statistical expression for stating a numeric value.' },
    match: { q: 'Match each phrase to its Grafikbeschreibung stage.', pairs: [ { noun: 'Die vorliegende Grafik zeigt', art: 'Introduction' }, { noun: 'Im Vergleich zu', art: 'Comparison' }, { noun: 'Steigt kontinuierlich', art: 'Trend' }, { noun: 'Eine mögliche Erklärung wäre', art: 'Interpretation' } ] },
    builder: { target: 'Build: "The curve rises continuously." (trend description)', bank: ['Die', 'Kurve', 'steigt', 'kontinuierlich', '.'], answer: ['Die', 'Kurve', 'steigt', 'kontinuierlich', '.'], roles: { 'steigt': 'r-trend', 'kontinuierlich': 'r-trend' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Zahl ist 68 Prozent. Fertig.', right: 'Die vorliegende Grafik zeigt, dass die Zahl sich auf 68 Prozent beläuft. Im Vergleich zu 2018 ist das deutlich mehr. Eine mögliche Erklärung wäre, dass...', explain: 'A bare number with no introduction, comparison, or interpretation is not a C1-level Grafikbeschreibung — it is a calculator\'s report, not a data analyst\'s analysis.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for Grafikbeschreibung?', options: ['Think like a data analyst, not a calculator — explain what changed, why, and what it means', 'Just report every number you see', 'Give your personal opinion first, then look at the data'], answer: 0, explain: 'A C1 Grafikbeschreibung explains the meaning behind the numbers, not only the numbers themselves.' },
    { q: 'What does "sich belaufen auf" mean?', options: ['To amount to (a value)', 'To decrease', 'To compare'], answer: 0, explain: '"Sich belaufen auf" is a precise statistical verb for stating a numeric value.' },
    { q: 'What is the function of "eine mögliche Erklärung wäre"?', options: ['To offer a hedged, cautious interpretation using Konjunktiv II', 'To state an unhedged fact', 'To introduce the graphic'], answer: 0, explain: 'This phrase signals that the explanation is a possibility, not a certainty.' },
    { q: 'Why must observation be distinguished from explanation?', options: ['What the data shows is certain; why it shows that is only possible and should be hedged', 'They are always the same thing', 'Explanation should always be stated as unhedged fact'], answer: 0, explain: 'Confusing observation with explanation is a common learner mistake that weakens the analysis.' },
    { q: 'What phrase typically introduces the final conclusion?', options: ['Abschließend lässt sich feststellen', 'Die vorliegende Grafik zeigt', 'Im Vergleich zu'], answer: 0, explain: '"Abschließend lässt sich feststellen" is the standard C1 phrase for a justified, evidence-based conclusion.' }
  ],
  takeaways: [
    { c: 'r-einleitung', html: 'Standard graph-introduction phrases (die vorliegende Grafik zeigt, das Schaubild informiert über) establish source, topic, and time period from the first sentence.' },
    { c: 'r-datenbeschreibung', html: 'Precise statistical verbs (sich belaufen auf, liegt bei, macht aus) report values objectively, without editorializing.' },
    { c: 'r-vergleich', html: 'Comparison language (im Vergleich zu, im Gegensatz zu, deutlich mehr) turns isolated figures into meaningful relationships.' },
    { c: 'r-trend', html: 'Trend vocabulary (steigt kontinuierlich, geht zurück, entwickelt sich positiv) describes movement over time precisely.' },
    { c: 'r-interpretation', html: 'Hedged interpretation (eine mögliche Erklärung wäre, Konjunktiv II) distinguishes cautious explanation from certain observation, closing with a justified conclusion (abschließend lässt sich feststellen).' }
  ],
  revisionTips: [
    'Find a German-language statistic or chart online and write a full six-stage Grafikbeschreibung: introduction, overview, description, comparison, trend, interpretation, conclusion.',
    'Practise the observation-vs-explanation distinction: for one data point, write one sentence stating what the data shows, then a separate hedged sentence for why it might be so.',
    'List five trend verbs (steigt kontinuierlich, geht zurück, stagniert, schwankt, entwickelt sich positiv) and use each to describe a different real-world statistic you know.'
  ]
};
window.CHAPTER = CHAPTER;
