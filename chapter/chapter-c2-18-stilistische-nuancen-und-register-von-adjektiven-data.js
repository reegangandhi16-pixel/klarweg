/* KLARWEG CHAPTER DATA — C2 · Chapter 18
   "Stilistische Nuancen & Register von Adjektiven" — native-level
   adjective SELECTION: register, precision, emotional tone, and
   rhetorical effect among grammatically-correct near-synonyms. NOT
   endings, declension, or comparison (already mastered A1-B2, C1
   Ch18, C2 Ch15-17). Vocabulary curated from the uploaded Chapter 18
   word list, organized by the brief's own six register families
   (intensity/near-synonym, emotional, academic, scientific, legal/
   administrative, journalistic) — all items below appear in the
   uploaded list. Dialogue: Hildegard and Timo ONLY. */
const CHAPTER = {
  id: 'c2-18-stilistische-nuancen-und-register-von-adjektiven',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 18,
  title: 'Stilistische Nuancen & Register von Adjektiven',
  titleEn: 'Stylistic nuance & register in adjectives',
  description: 'Every adjective is a paint color. Navy, cobalt, turquoise, sapphire, indigo — all "blue," but each creates a different impression. Native speakers choose the exact shade a situation requires.',
  xp: 1650, time: 150, difficulty: 'Mastery',
  nextChapter: { number: 19, title: 'Adjektive mit Ergänzungen', titleEn: 'Adjectives with complements' , href: 'chapter-c2-19-adjektive-mit-ergaenzungen.html' },
  prevChapter: { number: 17, title: 'Adjektivdeklination auf C2-Niveau', titleEn: 'Adjective declension at native level', href: 'chapter-c2-17-adjektivdeklination-auf-c2-niveau.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every adjective is a <em>paint color</em> — choose the exact shade.',
    intro: 'Editing a publishing-house manuscript, Hildegard corrects Timo\'s plain "big" to "massive", and guides him toward "considerable" for legal contexts and "significant" for study results — choosing the exact shade of meaning, not just a correct adjective.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers choose adjectives by register, precision, and emotional tone — not just dictionary meaning'],
    scene: 'Lektorat eines Verlagsmanuskripts',
    femaleSpeakers: ['Hildegard'],
    dialogue: [
      { speaker: 'Hildegard', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'schreibst', role: 'r-verb', en: 'write', hi: 'लिखते हो', pron: 'SHRYPST', type: 'Verb · schreiben (du)' },
        { w: 'immer', role: 'r-akkusativ', en: 'always', hi: 'हमेशा', pron: 'I-mer', type: 'Adverb' },
        { w: 'groß', role: 'r-akkusativ', en: 'big', hi: 'बड़ा', pron: 'grohs', type: 'Adjective (neutral register)' },
        { w: '.', plain: true },
        { w: 'Hier', role: 'r-akkusativ', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb' },
        { w: 'wäre', role: 'r-verb', en: 'would fit', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'gewaltig', role: 'r-akkusativ', en: 'massive', hi: 'विशाल', pron: 'ge-VAL-tikh', type: 'Adjective', why: 'gewaltig = massive/immense, a stronger stylistic register than groß (this chapter).', ex: 'Hier wäre gewaltig passender.', exEn: 'Here massive would fit better.' },
        { w: 'passender', role: 'r-akkusativ', en: 'more fitting', hi: 'ज़्यादा उपयुक्त', pron: 'PA-sen-der', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'You always write big. Here massive would fit better.', hi: 'Tum hamesha bada likhte ho. Yahaan vishaal zyaada upyukt hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'juristischen', role: 'r-akkusativ', en: 'legal', hi: 'कानूनी', pron: 'yu-RIS-ti-shen', type: 'Adjective' },
        { w: 'Kontext', role: 'r-akkusativ', en: 'context', hi: 'संदर्भ', pron: 'KON-tekst', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'nehme', role: 'r-verb', en: 'shall I use', hi: 'इस्तेमाल करूं', pron: 'NAY-muh', type: 'Verb · nehmen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'besser', role: 'r-akkusativ', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adverb · Komparativ' },
        { w: 'erheblich', role: 'r-akkusativ', en: 'considerable', hi: 'काफ़ी', pron: 'er-HAYP-likh', type: 'Adjective', why: 'erheblich = considerable, the standard word for a formal/legal register (recycled C1).', ex: 'erheblich' },
        { w: '?', plain: true }
      ], en: 'And for the legal context, shall I better use considerable?', hi: 'Aur kaanooni sandarbh ke liye, kya main behtar kaafi istemaal karoon?' },
      { speaker: 'Hildegard', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'by', type: 'Preposition' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Studienergebnissen', role: 'r-dativ', en: 'study results (dat.)', hi: 'अध्ययन परिणामों के', pron: 'SHTOO-dyen-er-gayp-ni-sen', type: 'Noun · plural dat.' },
        { w: 'brauchst', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROWKHST', type: 'Verb · brauchen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'signifikant', role: 'r-akkusativ', en: 'significant', hi: 'महत्त्वपूर्ण', pron: 'zig-ni-fi-KANT', type: 'Adjective', why: 'signifikant = significant, a precise statistical/academic register word (this chapter).', ex: 'signifikant' },
        { w: '.', plain: true }
      ], en: 'Exactly. And with the study results you need significant.', hi: 'Bilkul. Aur adhyayan parinaamon ke saath tumhe mahatvpoorn chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'mutmaßlich', role: 'r-akkusativ', en: 'alleged', hi: 'कथित', pron: 'MUT-mahs-likh', type: 'Adjective', why: 'mutmaßlich = alleged, a precise legal register word (this chapter).', ex: 'mutmaßlich' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'richtige', role: 'r-subject', en: 'right', hi: 'सही', pron: 'RIKH-ti-guh', type: 'Adjective' },
        { w: 'Wort', role: 'r-subject', en: 'word', hi: 'शब्द', pron: 'vort', type: 'Noun · neut.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Täter', role: 'r-akkusativ', en: 'perpetrator', hi: 'अपराधी', pron: 'TAY-ter', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Is alleged the right word for the perpetrator?', hi: 'Kya kathit apraadhi ke liye sahi shabd hai?' },
      { speaker: 'Hildegard', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Solange', role: 'r-conjunction', en: 'as long as', hi: 'जब तक', pron: 'zo-LAN-guh', type: 'Conjunction · solange (recycled B2/C1)' },
        { w: 'nichts', role: 'r-subject', en: 'nothing', hi: 'कुछ नहीं', pron: 'NIKHTS', type: 'Pronoun · indefinite' },
        { w: 'rechtskräftig', role: 'r-akkusativ', en: 'legally binding', hi: 'कानूनी रूप से मान्य', pron: 'REKHTS-kref-tikh', type: 'Adjective', why: 'rechtskräftig = legally binding/final, a precise legal register word (recycled C1).', ex: 'rechtskräftig' },
        { w: 'entschieden', role: 'r-verb', en: 'decided', hi: 'तय', pron: 'ent-SHEE-den', type: 'Partizip II' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. As long as nothing is legally decided.', hi: 'Haan. Jab tak koi cheez kaanooni roop se maany faisla nahi hoti.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'passe', role: 'r-verb', en: 'adjust', hi: 'ठीक करता हूँ', pron: 'PA-suh', type: 'Verb · anpassen (ich)', lexicalUnit: 'anpassen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'ganzen', role: 'r-akkusativ', en: 'entire', hi: 'पूरा', pron: 'GAN-tsen', type: 'Adjective' },
        { w: 'Text', role: 'r-akkusativ', en: 'text', hi: 'पाठ', pron: 'tekst', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of anpassen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'anpassen' },
        { w: '.', plain: true }
      ], en: 'Good, then I will adjust the entire text.', hi: 'Achha, toh main poora paath theek karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every adjective is a <span class="de r-farbe-metapher">paint color</span> — native speakers choose the exact shade a situation requires.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is STILISTISCHE NUANCEN & REGISTER VON ADJEKTIVEN — native-level adjective SELECTION among grammatically correct near-synonyms, based on register, precision, emotional tone, and rhetorical effect, NOT adjective endings, declension, or comparison (already fully mastered A1-B2, C1 Ch18, C2 Ch15-17). Covered: the meaning → context → audience → register → chosen-adjective pipeline (synonyms are rarely interchangeable); near-synonym intensity families (groß → umfangreich → gewaltig → erheblich → beträchtlich → massiv); emotional nuance families (traurig → bedrückt → niedergeschlagen → bekümmert → melancholisch); academic adjective selection (relevant, empirisch, signifikant, methodisch, plausibel, konsistent replacing everyday adjectives); scientific adjective selection (reproduzierbar, statistisch signifikant, experimentell, validiert, objektiv, systematisch); legal/administrative adjective selection (rechtskräftig, ordnungsgemäß, zuständig, verbindlich, unzulässig, fristgerecht); journalism/media adjective selection (mutmaßlich, umstritten, erheblich, drastisch, beispiellos, umfassend, with an emphasis on responsible, non-exaggerated choice); and the precision ladder (generic → specific → technical → register-specific → native-level lexical precision). The most important things to catch: choosing dictionary synonyms blindly without considering register/context; translating English adjectives directly into German; mixing formal and informal vocabulary within one register; overusing generic catch-all adjectives like "gut", "schlecht", "groß" where a more precise word fits; exaggerated adjectives that overstate the claim (especially in journalism, where "mutmaßlich" vs. an unqualified claim matters); wrong emotional tone (e.g. an overly intense emotional adjective in a neutral academic context, or vice versa). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag generic/overused adjectives (gut, schlecht, groß) where the register calls for a more precise alternative; flag register-mismatched or mixed-formality adjective choices; flag literal English-to-German adjective translation; flag exaggerated or emotionally mismatched adjective choices, especially in academic/journalistic writing. Do NOT flag adjective ending or declension errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around register/precision/tone). If none: <li>No errors — well done.</li> 3) <p><b>Exact-shade check:</b> one sentence on whether the learner chooses the precise "shade" of adjective the register demands, rather than a generic catch-all.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you choose the exact shade of adjective for every register. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Precision Scale once, then continue.', why: null, low: 'Worth another pass through the Grammar section — remember: every adjective is a paint color, and native speakers choose the exact shade a situation requires.' },
  parserSentence: [ { w: 'Ein', role: 'plain' }, { w: 'erhebliches', role: 'r-register-familie' }, { w: 'Problem', role: 'plain' }, { w: 'erfordert', role: 'plain' }, { w: 'sofortiges', role: 'plain' }, { w: 'Handeln', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every adjective is a paint color, and native speakers choose the exact shade a situation requires.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Hildegard and Timo edit a manuscript, replacing grammatically correct adjectives with stylistically superior alternatives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master near-synonym intensity families and academic, scientific, legal, and journalistic register-specific adjectives — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master register-sensitive adjective selection, emotional nuance, and the precision ladder across six registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic paper, editorial, and literary excerpt for adjective choice and stylistic nuance.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify adjective nuance, emotional tone, and register in a lecture, political interview, and book reading.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice reformulating adjective choices and defending lexical decisions at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace generic adjectives, rewrite across four registers, and write a 650-word argumentative essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill register selection, synonym precision, emotional nuance, and stylistic transformation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1650 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter adjectives with translations, synonyms, antonyms, register labels, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Register selection, synonym precision, and stylistic transformation drills, plus the full 650-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '22 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Lexical Precision Model, Precision Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'erheblich statt groß', text: 'Replace generic intensity adjectives with academic-register alternatives' },
    { de: 'niedergeschlagen statt traurig', text: 'Choose emotionally precise adjectives over generic ones' },
    { de: 'reproduzierbar, validiert, objektiv', text: 'Use authentic scientific-register adjectives' },
    { de: 'rechtskräftig, verbindlich, unzulässig', text: 'Use authentic legal-register adjectives' },
    { de: 'Jedes Adjektiv ist eine Farbe.', text: 'Understand the chapter\'s core "paint color" metaphor for adjective selection' }
  ],
  vocab: [
    { de: 'groß', pos: 'adjective', level: 'C2', register: 'everyday/conversation', en: 'big', hi: 'बड़ा', synonyms: 'umfangreich, gewaltig, erheblich, beträchtlich, massiv', antonyms: 'klein, gering', ex: 'Das ist ein großes Haus.', exEn: 'That is a big house.', exHi: 'Yeh ek bada ghar hai.', ex2: 'Wir haben ein großes Problem.', ex2En: 'We have a big problem.', ex2Hi: 'Hamaare paas ek badi samasya hai.' },
    { de: 'umfangreich', pos: 'adjective', level: 'C2', register: 'professional/academic', en: 'extensive', hi: 'व्यापक', synonyms: 'groß, ausgedehnt', antonyms: 'begrenzt, gering', ex: 'Die Studie umfasst ein umfangreiches Datenmaterial.', exEn: 'The study encompasses extensive data material.', exHi: 'Study mein vyaapak data material shaamil hai.', ex2: 'Der Bericht enthält umfangreiche Analysen.', ex2En: 'The report contains extensive analyses.', ex2Hi: 'Report mein vyaapak analyses shaamil hain.' },
    { de: 'gewaltig', pos: 'adjective', level: 'C2', register: 'literary/emphatic', en: 'immense, tremendous', hi: 'विशाल', synonyms: 'enorm, immens, gigantisch', antonyms: 'winzig, gering', ex: 'Die Auswirkungen des Ereignisses waren gewaltig.', exEn: 'The impact of the event was immense.', exHi: 'Ghatna ka prabhaav vishaal tha.', ex2: 'Ein gewaltiger Sturm zog über das Land.', ex2En: 'A tremendous storm swept over the country.', ex2Hi: 'Ek vishaal aandhi desh par se guzri.' },
    { de: 'erheblich', pos: 'adjective', level: 'C2', register: 'academic/formal', en: 'considerable', hi: 'महत्वपूर्ण, काफ़ी', synonyms: 'beträchtlich, bedeutend', antonyms: 'unerheblich, geringfügig', ex: 'Es besteht ein erhebliches Risiko.', exEn: 'There is a considerable risk.', exHi: 'Kaafi jokhim hai.', ex2: 'Die Ergebnisse zeigen einen erheblichen Unterschied.', ex2En: 'The results show a considerable difference.', ex2Hi: 'Parinaam ek mahatvapurn antar dikhaate hain.' },
    { de: 'beträchtlich', pos: 'adjective', level: 'C2', register: 'formal/academic', en: 'considerable, substantial', hi: 'काफ़ी बड़ा', synonyms: 'erheblich, bedeutend', antonyms: 'geringfügig, unerheblich', ex: 'Die Kosten sind beträchtlich gestiegen.', exEn: 'The costs have risen considerably.', exHi: 'Lagat mein kaafi vriddhi hui hai.', ex2: 'Ein beträchtlicher Teil der Bevölkerung ist betroffen.', ex2En: 'A considerable portion of the population is affected.', ex2Hi: 'Aabaadi ka ek kaafi bada hissa prabhaavit hai.' },
    { de: 'massiv', pos: 'adjective', level: 'C2', register: 'journalism/formal', en: 'massive', hi: 'भारी, बड़े पैमाने पर', synonyms: 'gewaltig, erheblich', antonyms: 'minimal, gering', ex: 'Es gab massive Proteste gegen die Reform.', exEn: 'There were massive protests against the reform.', exHi: 'Sudhaar ke khilaaf bade paimaane par vidroh hue.', ex2: 'Die Firma steht unter massivem Druck.', ex2En: 'The company is under massive pressure.', ex2Hi: 'Company bhaari dabaav mein hai.' },
    { de: 'traurig', pos: 'adjective', level: 'C2', register: 'everyday', en: 'sad', hi: 'दुखी', synonyms: 'bedrückt, niedergeschlagen, bekümmert, melancholisch', antonyms: 'fröhlich, glücklich', ex: 'Sie war traurig über die Nachricht.', exEn: 'She was sad about the news.', exHi: 'Woh khabar se dukhi thi.', ex2: 'Ein trauriger Film hat sie zum Weinen gebracht.', ex2En: 'A sad film brought her to tears.', ex2Hi: 'Ek dukh bhari film ne use rula diya.' },
    { de: 'niedergeschlagen', pos: 'adjective', level: 'C2', register: 'literary/emotional', en: 'downcast, dejected', hi: 'हतोत्साहित', synonyms: 'bedrückt, deprimiert', antonyms: 'euphorisch, beschwingt', ex: 'Nach der Niederlage wirkte er sehr niedergeschlagen.', exEn: 'After the defeat, he seemed very dejected.', exHi: 'Haar ke baad, woh bahut hatotsaahit lag raha tha.', ex2: 'Sie saß niedergeschlagen am Fenster.', ex2En: 'She sat dejectedly by the window.', ex2Hi: 'Woh khidki ke paas hatotsaahit hokar baithi thi.' },
    { de: 'melancholisch', pos: 'adjective', level: 'C2', register: 'literary', en: 'melancholic', hi: 'उदासीन, विषादपूर्ण', synonyms: 'wehmütig, schwermütig', antonyms: 'heiter, ausgelassen', ex: 'Der Roman ist von einer melancholischen Stimmung geprägt.', exEn: 'The novel is marked by a melancholic mood.', exHi: 'Upanyaas ek udaaseen mahaul se prabhaavit hai.', ex2: 'Melancholische Musik begleitete die Szene.', ex2En: 'Melancholic music accompanied the scene.', ex2Hi: 'Udaaseen sangeet ne scene ke saath diya.' },
    { de: 'relevant', pos: 'adjective', level: 'C2', register: 'academic', en: 'relevant', hi: 'प्रासंगिक', synonyms: 'bedeutsam, wichtig', antonyms: 'irrelevant, unbedeutend', ex: 'Diese Daten sind für die Analyse relevant.', exEn: 'This data is relevant for the analysis.', exHi: 'Yeh data analysis ke liye prasangik hai.', ex2: 'Nur relevante Quellen wurden zitiert.', ex2En: 'Only relevant sources were cited.', ex2Hi: 'Sirf prasangik sources hi cite kiye gaye.' },
    { de: 'empirisch', pos: 'adjective', level: 'C2', register: 'academic/scientific', en: 'empirical', hi: 'अनुभवजन्य', synonyms: 'erfahrungsbasiert', antonyms: 'theoretisch, spekulativ', ex: 'Die These wird durch empirische Daten gestützt.', exEn: 'The thesis is supported by empirical data.', exHi: 'Thesis anubhavjanya data se sudridh hai.', ex2: 'Empirische Forschung erfordert sorgfältige Methodik.', ex2En: 'Empirical research requires careful methodology.', ex2Hi: 'Anubhavjanya shodh ko saavdhaan methodology ki zaroorat hoti hai.' },
    { de: 'signifikant', pos: 'adjective', level: 'C2', register: 'academic/scientific', en: 'significant', hi: 'सार्थक, महत्वपूर्ण', synonyms: 'bedeutend, erheblich', antonyms: 'unbedeutend, geringfügig', ex: 'Der Unterschied ist statistisch signifikant.', exEn: 'The difference is statistically significant.', exHi: 'Antar sankhyikeey roop se saarthak hai.', ex2: 'Eine signifikante Verbesserung wurde beobachtet.', ex2En: 'A significant improvement was observed.', ex2Hi: 'Ek saarthak sudhaar dekha gaya.' },
    { de: 'methodisch', pos: 'adjective', level: 'C2', register: 'academic', en: 'methodical', hi: 'क्रमबद्ध, पद्धतिगत', synonyms: 'systematisch, planmäßig', antonyms: 'unsystematisch, chaotisch', ex: 'Die Untersuchung wurde methodisch sauber durchgeführt.', exEn: 'The investigation was carried out methodically and cleanly.', exHi: 'Jaanch paddhatigat roop se saaf-suthri tarike se ki gayi.', ex2: 'Ein methodischer Ansatz ist für diese Forschung entscheidend.', ex2En: 'A methodical approach is crucial for this research.', ex2Hi: 'Is shodh ke liye ek paddhatigat approach mahatvapurn hai.' },
    { de: 'plausibel', pos: 'adjective', level: 'C2', register: 'academic', en: 'plausible', hi: 'तर्कसंगत', synonyms: 'nachvollziehbar, einleuchtend', antonyms: 'unplausibel', ex: 'Die Erklärung erscheint durchaus plausibel.', exEn: 'The explanation seems entirely plausible.', exHi: 'Spashteekaran bilkul tarksangat lagta hai.', ex2: 'Ein plausibler Zusammenhang wird vermutet.', ex2En: 'A plausible connection is suspected.', ex2Hi: 'Ek tarksangat sambandh ki aashanka hai.' },
    { de: 'konsistent', pos: 'adjective', level: 'C2', register: 'academic/scientific', en: 'consistent', hi: 'सुसंगत', synonyms: 'widerspruchsfrei, kohärent', antonyms: 'inkonsistent, widersprüchlich', ex: 'Die Ergebnisse sind konsistent mit früheren Studien.', exEn: 'The results are consistent with earlier studies.', exHi: 'Parinaam pehle ke studies ke saath susangat hain.', ex2: 'Ein konsistentes Argument überzeugt die Leser.', ex2En: 'A consistent argument convinces readers.', ex2Hi: 'Ek susangat tark paathakon ko convince karta hai.' },
    { de: 'reproduzierbar', pos: 'adjective', level: 'C2', register: 'scientific', en: 'reproducible', hi: 'पुनरुत्पादनीय', synonyms: 'wiederholbar, nachprüfbar', antonyms: 'einmalig, nicht wiederholbar', ex: 'Die Ergebnisse müssen reproduzierbar sein.', exEn: 'The results must be reproducible.', exHi: 'Parinaam punarutpadaneey hone chahiye.', ex2: 'Ein reproduzierbares Experiment stärkt die Glaubwürdigkeit.', ex2En: 'A reproducible experiment strengthens credibility.', ex2Hi: 'Ek punarutpadaneey experiment vishwasniyata badhaata hai.' },
    { de: 'experimentell', pos: 'adjective', level: 'C2', register: 'scientific', en: 'experimental', hi: 'प्रायोगिक', synonyms: 'empirisch, versuchsbasiert', antonyms: 'theoretisch', ex: 'Die experimentellen Daten bestätigen die Theorie.', exEn: 'The experimental data confirm the theory.', exHi: 'Prayogik data theory ki pushti karta hai.', ex2: 'Ein experimenteller Aufbau wurde sorgfältig geplant.', ex2En: 'An experimental setup was carefully planned.', ex2Hi: 'Ek prayogik setup saavdhaani se planned kiya gaya.' },
    { de: 'validiert', pos: 'adjective', level: 'C2', register: 'scientific', en: 'validated', hi: 'सत्यापित', synonyms: 'bestätigt, geprüft', antonyms: 'unvalidiert, ungeprüft', ex: 'Das Messinstrument wurde wissenschaftlich validiert.', exEn: 'The measuring instrument was scientifically validated.', exHi: 'Maapan yantra vaigyaanik roop se satyaapit kiya gaya.', ex2: 'Nur validierte Methoden werden verwendet.', ex2En: 'Only validated methods are used.', ex2Hi: 'Sirf satyaapit methods hi istemaal ki jaati hain.' },
    { de: 'objektiv', pos: 'adjective', level: 'C2', register: 'academic/journalism', en: 'objective', hi: 'निष्पक्ष', synonyms: 'unvoreingenommen, sachlich', antonyms: 'subjektiv, voreingenommen', ex: 'Die Berichterstattung sollte objektiv bleiben.', exEn: 'The reporting should remain objective.', exHi: 'Reporting nishpaksh raheni chahiye.', ex2: 'Eine objektive Analyse berücksichtigt alle Perspektiven.', ex2En: 'An objective analysis considers all perspectives.', ex2Hi: 'Ek nishpaksh analysis sabhi perspectives ko dhyaan mein rakhti hai.' },
    { de: 'systematisch', pos: 'adjective', level: 'C2', register: 'academic/scientific', en: 'systematic', hi: 'व्यवस्थित', synonyms: 'methodisch, planmäßig', antonyms: 'unsystematisch, willkürlich', ex: 'Die Daten wurden systematisch erhoben.', exEn: 'The data were collected systematically.', exHi: 'Data vyavasthit roop se ikattha kiya gaya.', ex2: 'Ein systematischer Überblick fasst die Forschung zusammen.', ex2En: 'A systematic review summarizes the research.', ex2Hi: 'Ek vyavasthit overview shodh ko summarize karta hai.' },
    { de: 'rechtskräftig', pos: 'adjective', level: 'C2', register: 'legal', en: 'legally binding, final', hi: 'कानूनी रूप से प्रभावी', synonyms: 'bindend, rechtsgültig', antonyms: 'unwirksam, anfechtbar', ex: 'Das Urteil ist rechtskräftig geworden.', exEn: 'The verdict has become legally final.', exHi: 'Faisla kaanooni roop se antim ho gaya hai.', ex2: 'Ein rechtskräftiger Vertrag kann nicht einseitig geändert werden.', ex2En: 'A legally binding contract cannot be changed unilaterally.', ex2Hi: 'Ek kaanooni roop se bandhankaari contract ekpakshiya roop se nahi badla jaa sakta.' },
    { de: 'ordnungsgemäß', pos: 'adjective', level: 'C2', register: 'legal/administrative', en: 'proper, in due order', hi: 'नियमानुसार', synonyms: 'vorschriftsmäßig, korrekt', antonyms: 'unordentlich, fehlerhaft', ex: 'Die Unterlagen wurden ordnungsgemäß eingereicht.', exEn: 'The documents were submitted in due order.', exHi: 'Dastaavez niyamaanusaar prastut kiye gaye.', ex2: 'Ein ordnungsgemäßes Verfahren garantiert Fairness.', ex2En: 'A proper procedure guarantees fairness.', ex2Hi: 'Ek niyamaanusaar prakriya nishpakshta ki guarantee deti hai.' },
    { de: 'zuständig', pos: 'adjective', level: 'C2', register: 'legal/administrative', en: 'responsible, competent (authority)', hi: 'ज़िम्मेदार, सक्षम', synonyms: 'verantwortlich, befugt', antonyms: 'unzuständig', ex: 'Die zuständige Behörde prüft den Antrag.', exEn: 'The responsible authority reviews the application.', exHi: 'Zimmedaar adhikaari application ki jaanch karta hai.', ex2: 'Welches Gericht ist für diesen Fall zuständig?', ex2En: 'Which court is competent for this case?', ex2Hi: 'Is case ke liye kaunsi adaalat saksham hai?' },
    { de: 'verbindlich', pos: 'adjective', level: 'C2', register: 'legal/formal', en: 'binding', hi: 'बाध्यकारी', synonyms: 'bindend, rechtskräftig', antonyms: 'unverbindlich, freibleibend', ex: 'Die Vereinbarung ist rechtlich verbindlich.', exEn: 'The agreement is legally binding.', exHi: 'Samjhauta kaanooni roop se bandhankaari hai.', ex2: 'Ein verbindliches Angebot kann nicht zurückgezogen werden.', ex2En: 'A binding offer cannot be withdrawn.', ex2Hi: 'Ek bandhankaari offer wapas nahi liya jaa sakta.' },
    { de: 'unzulässig', pos: 'adjective', level: 'C2', register: 'legal', en: 'inadmissible', hi: 'अस्वीकार्य', synonyms: 'unrechtmäßig, verboten', antonyms: 'zulässig, erlaubt', ex: 'Der Beweis wurde als unzulässig erklärt.', exEn: 'The evidence was declared inadmissible.', exHi: 'Saboot ko asveekaarya ghoshit kiya gaya.', ex2: 'Eine unzulässige Klausel wurde aus dem Vertrag gestrichen.', ex2En: 'An inadmissible clause was removed from the contract.', ex2Hi: 'Ek asveekaarya clause contract se hataa diya gaya.' },
    { de: 'fristgerecht', pos: 'adjective', level: 'C2', register: 'legal/administrative', en: 'on time, within the deadline', hi: 'समय पर, नियत समय के भीतर', synonyms: 'pünktlich, rechtzeitig', antonyms: 'verspätet, fristwidrig', ex: 'Der Antrag muss fristgerecht eingereicht werden.', exEn: 'The application must be submitted on time.', exHi: 'Application samay par prastut karni hogi.', ex2: 'Eine fristgerechte Zahlung vermeidet Strafgebühren.', ex2En: 'A timely payment avoids penalty fees.', ex2Hi: 'Samay par bhugtaan dand shulk se bachaata hai.' },
    { de: 'mutmaßlich', pos: 'adjective', level: 'C2', register: 'journalism/legal', en: 'alleged', hi: 'कथित', synonyms: 'angeblich, vermeintlich', antonyms: 'nachgewiesen, bestätigt', ex: 'Der mutmaßliche Täter wurde festgenommen.', exEn: 'The alleged perpetrator was arrested.', exHi: 'Kathit aparaadhi ko giraftaar kiya gaya.', ex2: 'Die mutmaßliche Ursache des Unfalls wird untersucht.', ex2En: 'The alleged cause of the accident is being investigated.', ex2Hi: 'Durghatna ka kathit kaaran jaancha jaa raha hai.' },
    { de: 'umstritten', pos: 'adjective', level: 'C2', register: 'journalism/academic', en: 'controversial', hi: 'विवादास्पद', synonyms: 'kontrovers, strittig', antonyms: 'unumstritten, unstrittig', ex: 'Die Reform bleibt politisch umstritten.', exEn: 'The reform remains politically controversial.', exHi: 'Sudhaar rajnitik roop se vivaadaaspad bana hua hai.', ex2: 'Ein umstrittenes Gesetz wurde verabschiedet.', ex2En: 'A controversial law was passed.', ex2Hi: 'Ek vivaadaaspad kaanoon paarit kiya gaya.' },
    { de: 'drastisch', pos: 'adjective', level: 'C2', register: 'journalism', en: 'drastic', hi: 'कठोर, तीव्र', synonyms: 'radikal, einschneidend', antonyms: 'moderat, geringfügig', ex: 'Die Regierung ergreift drastische Maßnahmen.', exEn: 'The government is taking drastic measures.', exHi: 'Sarkaar kathor upaay apna rahi hai.', ex2: 'Ein drastischer Rückgang der Verkaufszahlen wurde gemeldet.', ex2En: 'A drastic decline in sales figures was reported.', ex2Hi: 'Bikri sankhya mein tivra giravat ki soochna di gayi.' },
    { de: 'beispiellos', pos: 'adjective', level: 'C2', register: 'journalism/formal', en: 'unprecedented', hi: 'अभूतपूर्व', synonyms: 'noch nie dagewesen, einmalig', antonyms: 'üblich, gewöhnlich', ex: 'Die Reaktion der Bevölkerung war beispiellos.', exEn: 'The population\'s reaction was unprecedented.', exHi: 'Aabaadi ki pratikriya abhootpoorv thi.', ex2: 'Ein beispielloser Erfolg wurde erzielt.', ex2En: 'An unprecedented success was achieved.', ex2Hi: 'Ek abhootpoorv safalta praapt hui.' },
    { de: 'umfassend', pos: 'adjective', level: 'C2', register: 'journalism/academic', en: 'comprehensive', hi: 'व्यापक, समग्र', synonyms: 'ausführlich, gründlich', antonyms: 'oberflächlich, unvollständig', ex: 'Die Zeitung veröffentlichte eine umfassende Analyse.', exEn: 'The newspaper published a comprehensive analysis.', exHi: 'Akhbaar ne ek vyaapak analysis prakaashit ki.', ex2: 'Eine umfassende Reform ist geplant.', ex2En: 'A comprehensive reform is planned.', ex2Hi: 'Ek vyaapak sudhaar ki yojana hai.' }
  ],
  grammar: [
    { title: 'Bedeutung vs. Stil (Meaning vs. Style)', body: [ 'Dictionary Meaning → Context → Audience → Register → Chosen Adjective. Synonyms are rarely interchangeable — each carries a different register, intensity, or tone.' ], hinglish: 'Dictionary mein do adjectives ka matlab ek jaisa dikh sakta hai, par woh aapas mein badle nahi jaa sakte \u2014 har ek ka apna register aur apni intensity hoti hai. Isliye C2 par sawaal yeh nahi ki matlab sahi hai, balki yeh ki is jagah, is audience ke liye kaunsa shabd theek baithta hai.' },
    { title: 'Nahe Synonyme: Intensität (Near Synonyms: Intensity)', body: [ 'groß → umfangreich → gewaltig → erheblich → beträchtlich → massiv. Each differs in register and intensity, from everyday to academic to emphatic/journalistic.' ], hinglish: 'Chhe shabd, sab ka matlab \u201cbada\u201d \u2014 par kaam alag. <b>gro\u00df</b> rozmarra ka hai, <b>umfangreich</b> matlab daayre mein bada (study, report), <b>erheblich</b> aur <b>betr\u00e4chtlich</b> academic writing mein aate hain, aur <b>gewaltig</b> aur <b>massiv</b> mein zor hota hai, isliye woh news mein zyada dikhte hain. Ek baat dhyaan mein rakho \u2014 kuch nouns ke saath yeh fix hote hain: <span class="de">erhebliche Auswirkungen</span> natural hai, <i>gro\u00dfe Auswirkungen</i> kamzor.' },
    { title: 'Emotional vs. Neutral', body: [ 'traurig → bedrückt → niedergeschlagen → bekümmert → melancholisch. Emotional nuance ranges from everyday sadness to literary melancholy.' ], hinglish: 'Yeh paanch \u201cudaas\u201d ke aaspaas hain par ek jaise nahi. <b>traurig</b> aam hai, <b>bedr\u00fcckt</b> aur <b>niedergeschlagen</b> thoda gehra aur kisi wajah se, <b>bek\u00fcmmert</b> formal, aur <b>melancholisch</b> literary \u2014 woh kisi ek ghatna ka reaction nahi, balki ek sthaayi mizaaj batata hai. Isliye survey report mein <b>entt\u00e4uscht</b> theek baithta hai, <i>melancholisch</i> nahi.' },
    { title: 'Register-Familien (Register Families)', body: [ 'Har register ka apna adjective-set hai, aur inhe pehchaanna reading mein bahut kaam aata hai. Academic texts mein <b>empirisch</b>, <b>plausibel</b>, <b>konsistent</b>. Scientific mein <b>reproduzierbar</b>, <b>validiert</b>, <b>systematisch</b>. Official documents mein <b>rechtskr\u00e4ftig</b>, <b>ordnungsgem\u00e4\u00df</b>, <b>fristgerecht</b>. Aur news mein <b>mutma\u00dflich</b>, <b>umstritten</b>, <b>beispiellos</b>. Do khaas: <b>mutma\u00dflich</b> matlab abhi sabit nahi hua \u2014 isliye woh aarop ke saath aata hai, faisle ke saath nahi. Aur <b>rechtskr\u00e4ftig</b> ya <b>unzul\u00e4ssig</b> absolute hain, inpar <i>ziemlich</i> nahi lagta.' ], hinglish: 'Har register ka apna adjective-set hai, aur inhe pehchaanna reading mein bahut kaam aata hai. Academic texts mein <b>empirisch</b>, <b>plausibel</b>, <b>konsistent</b>. Scientific mein <b>reproduzierbar</b>, <b>validiert</b>, <b>systematisch</b>. Official documents mein <b>rechtskr\u00e4ftig</b>, <b>ordnungsgem\u00e4\u00df</b>, <b>fristgerecht</b>. Aur news mein <b>mutma\u00dflich</b>, <b>umstritten</b>, <b>beispiellos</b>. Do khaas: <b>mutma\u00dflich</b> matlab abhi sabit nahi hua \u2014 isliye woh aarop ke saath aata hai, faisle ke saath nahi. Aur <b>rechtskr\u00e4ftig</b> ya <b>unzul\u00e4ssig</b> absolute hain, inpar <i>ziemlich</i> nahi lagta.' },
    { title: 'Präzisions-Leiter (Precision Ladder)', body: [ 'Generic adjective → Specific adjective → Technical adjective → Register-specific adjective → Native-level lexical precision. Each step up trades generality for precision matched to audience and purpose.' ], hinglish: 'Jitna aage badhte ho, utna shabd precise hota jaata hai \u2014 par utna hi woh ek khaas register se bandh bhi jaata hai. Isliye sabse technical shabd hamesha sabse achha nahi hota; sahi shabd woh hai jo tumhare text ke register se match kare. Aur <i>gut</i>, <i>schlecht</i>, <i>gro\u00df</i> par atakna C2 par kamzor lagta hai \u2014 inki jagah precise shabd chuno.' },
    {
      title: 'Feste Verbindungen \u2014 nicht frei w\u00e4hlbar',
      body: [
        'Register is only half the decision. Many of these adjectives are locked to particular nouns, so even a register-appropriate synonym can be the wrong word.',
        'Learn these as pairs, the way you learned collocations \u2014 the noun decides the adjective.'
      ],
      table: {
        head: ['Fixed pair', 'Not', 'Register'],
        rows: [
          ['<span class="de">erhebliche Auswirkungen</span>', '<i>gro\u00dfe</i>', 'academic'],
          ['<span class="de">fundierte Kenntnisse</span>', '<i>starke</i>', 'academic'],
          ['<span class="de">scharfe Kritik</span>', '<i>starke</i>', 'journalism'],
          ['<span class="de">statistisch signifikant</span>', 'never <i>ziemlich signifikant</i>', 'scientific'],
          ['<span class="de">mutma\u00dflicher T\u00e4ter</span>', 'not a verdict', 'journalism'],
          ['<span class="de">fristgerechte Einreichung</span>', '<i>p\u00fcnktliche</i>', 'administrative']
        ]
      },
      note: 'Absolute adjectives cannot be graded: <b>signifikant</b>, <b>beispiellos</b>, <b>rechtskr\u00e4ftig</b>, <b>unzul\u00e4ssig</b>. Something either is or is not \u2014 <i>ziemlich beispiellos</i> is a contradiction.',
      hinglish: 'Register aadha faisla hai. In adjectives mein se kai kisi khaas noun ke saath <b>fix</b> hote hain \u2014 isliye register ke hisaab se sahi synonym bhi galat ho sakta hai. Jaise <span class="de">erhebliche Auswirkungen</span> natural lagta hai par <i>gro\u00dfe Auswirkungen</i> kamzor, aur <span class="de">scharfe Kritik</span> sahi hai par <i>starke Kritik</i> nahi. Inhe collocations ki tarah jodi mein yaad karo \u2014 noun tay karta hai ki kaunsa adjective aayega. Aur ek khaas baat: kuch adjectives absolute hote hain \u2014 <b>signifikant</b>, <b>beispiellos</b>, <b>rechtskr\u00e4ftig</b>, <b>unzul\u00e4ssig</b>. Yeh ya to hote hain ya nahi hote, isliye inpar <i>ziemlich</i> ya <i>sehr</i> lagana ulta matlab bigaad deta hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Adjective type mapped to its primary function and preferred register.' ], table: { head: ['Adjective Type', 'Primary Function', 'Preferred Register'], rows: [ ['Everyday', 'General Description', 'Conversation'], ['Professional', 'Workplace Precision', 'Professional'], ['Academic', 'Analytical Precision', 'University'], ['Scientific', 'Technical Accuracy', 'Research'], ['Legal', 'Institutional Precision', 'Law'], ['Literary', 'Emotional & Stylistic Effect', 'Literature'] ] }, hinglish: 'Adjective type, function aur register ka table \u2014 par shabd chunne ke baad ek baat aur check karo: kya woh us noun ke saath fix hai? Yeh neeche wale block mein hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these mix two registers in one sentence; three attach an adjective whose intensity or meaning contradicts what the sentence claims. Note that none of the flagged adjectives is wrong in itself \u2014 only wrong here.' ], mistakes: [
      { wrong: 'Die Ergebnisse sind ziemlich signifikant.', right: 'Die Ergebnisse sind signifikant. / Die Ergebnisse sind bemerkenswert.', why: '<b>signifikant</b> is a statistical term \u2014 a result either is significant or is not. Softening it with <i>ziemlich</i> contradicts the term.' },
      { wrong: 'Der Verd\u00e4chtige ist mutma\u00dflich schuldig gesprochen worden.', right: 'Der Verd\u00e4chtige ist schuldig gesprochen worden. / Der mutma\u00dfliche T\u00e4ter wurde festgenommen.', why: '<b>mutma\u00dflich</b> marks an unproven allegation, so it cannot describe a delivered verdict. It attaches to the accused, not to the judgement.' },
      { wrong: 'Die empirisch validierte Studie ist echt gut.', right: 'Die empirisch validierte Studie ist \u00fcberzeugend.', why: 'Two registers collide in one sentence \u2014 <i>empirisch validiert</i> is scientific, <i>echt gut</i> is spoken. The whole sentence has to stay at one level.' },
      { wrong: 'Die Studie zeigt große Auswirkungen auf große Bevölkerungsgruppen.', right: 'Die Studie zeigt erhebliche Auswirkungen auf große Bevölkerungsgruppen.', why: 'The collocation is fixed: <b>erhebliche Auswirkungen</b>, not <i>große</i>. With <i>Bevölkerungsgruppen</i>, however, <b>groß</b> is correct — so the fix is one word, not both.' },
      { wrong: 'Der leichte Anstieg ist beispiellos und drastisch.', right: 'Der leichte Anstieg ist bemerkenswert. / Der drastische Anstieg ist beispiellos.', why: '<b>beispiellos</b> and <b>drastisch</b> both mean an extreme change, so neither can describe a <i>leichter</i> one. The adjectives must agree with the size of the claim.' },
      { wrong: 'Die Befragten waren melancholisch \u00fcber die Ergebnisse.', right: 'Die Befragten waren entt\u00e4uscht \u00fcber die Ergebnisse.', why: '<b>melancholisch</b> is literary and describes a lasting temperament, not a reaction to findings. A survey report needs the neutral <b>entt\u00e4uscht</b>.' }
    ], hinglish: 'Teen galtiyon mein ek hi sentence mein do register mil gaye hain, aur teen mein adjective ki intensity ya matlab us baat se ulta hai jo sentence keh raha hai. Dhyaan do \u2014 inme se koi bhi adjective apne aap mein galat nahi hai, sirf <b>is jagah</b> galat hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need an adjective? Who is the audience? Conversation? Professional? Academic? Scientific? Legal? Literary? Choose the adjective that matches the register — not merely the meaning.' ], note: 'Memory trick: imagine every adjective is a paint color. At lower levels, you only know blue, red, green. At C2, you choose between navy, cobalt, turquoise, sapphire, indigo. All are "blue" — but each creates a different impression. Native speakers don\'t simply choose a color. They choose the exact shade the situation requires.', hinglish: 'Adjective chunne se pehle do sawaal poochho \u2014 audience kaun hai, aur kya yeh shabd us noun ke saath fix hai? Aur teesra check: kya yeh adjective absolute hai? Agar haan (<b>signifikant</b>, <b>beispiellos</b>, <b>rechtskr\u00e4ftig</b>), to uspar <i>ziemlich</i> ya <i>sehr</i> mat lagao.' }
  ],
  reading: {
    title: 'Fachartikel: Vergleichsstudie zu urbaner Verkehrsplanung',
    titleEn: 'Reading A — Journal article: comparative study on urban traffic planning',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'empirischen', role: 'r-register-familie', en: 'empirical (academic-register adjective, part of a precise noun phrase)', hi: 'अनुभवजन्य (academic register)', type: 'Adjective · Nom.' },
      { w: 'Ergebnisse', role: 'plain', en: 'results (Satzende)', hi: 'नतीजे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb (Präsens)' },
      { w: 'konsistent', role: 'r-register-familie', en: 'consistent (academic-register adjective, more precise than "gleich")', hi: 'सुसंगत (academic register)', type: 'Adjective (Satzende)', why: '"konsistent" is the register-appropriate academic alternative to a generic word like "gleich" or "ähnlich".' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'के साथ', type: 'Präposition · Dat.' },
      { w: 'früheren', role: 'plain', en: 'earlier', hi: 'पहले के', type: 'Adjective · Dat.' },
      { w: 'Studien', role: 'plain', en: 'studies (Satzende)', hi: 'अध्ययनों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Unterschied', role: 'plain', en: 'difference', hi: 'अंतर', type: 'Noun · masc.' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'के बीच', type: 'Präposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Städten', role: 'plain', en: 'cities (Satzende)', hi: 'शहरों (Satzende)', type: 'Noun · plural' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb (Präsens)' },
      { w: 'statistisch', role: 'plain', en: 'statistically', hi: 'सांख्यिकीय रूप से', type: 'Adverb' },
      { w: 'signifikant', role: 'r-register-familie', en: 'significant (academic/scientific-register adjective, Satzende)', hi: 'सार्थक (Satzende, academic register)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The empirical results are consistent with earlier studies. The difference between the cities is statistically significant.',
    comprehension: [
      { q: 'Warum wird "konsistent" statt "gleich" verwendet?', options: ['Weil es dem akademischen Register entspricht und präziser ist', 'Weil "gleich" grammatisch falsch wäre', 'Aus Zufall'], answer: 0 },
      { q: 'Welches Register zeigt "statistisch signifikant"?', options: ['Akademisch/wissenschaftlich', 'Alltäglich', 'Literarisch'], answer: 0 },
      { q: 'Was wäre die stilistisch schwächere Alternative zu "signifikant"?', options: ['groß', 'systematisch', 'validiert'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Literarischer Romanausschnitt', titleEn: 'Reading C — Literary novel excerpt',
    tokens: [
      { w: 'Eine', role: 'plain', en: 'a (fem. nom.)', hi: 'ek', type: 'Article' },
      { w: 'melancholische', role: 'r-emotionale-nuance', en: 'melancholic (literary-register emotional adjective, more precise than "traurig")', hi: '(literary register)', type: 'Adjective · Nom.', why: '"melancholisch" carries a literary, atmospheric weight that "traurig" lacks — the precise emotional shade fits the novel\'s tone.' },
      { w: 'Stimmung', role: 'plain', en: 'mood (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'lag', role: 'plain', en: 'lay', hi: 'chaayi hui thi', type: 'Verb (Präteritum)' },
      { w: 'über', role: 'plain', en: 'over', hi: 'oopar', type: 'Präposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'yeh', type: 'Article' },
      { w: 'Stadt', role: 'plain', en: 'city (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'A melancholic mood lay over the city.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_018_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hildegard, ich habe geschrieben, der Effekt sei "groß" — passt das für das Manuskript?', en: 'Hildegard, I wrote that the effect is "big" — does that fit for the manuscript?' },
      { id: 'C2_018_L002', speaker: 'Hildegard', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Für den Studienteil eher "signifikant", für den juristischen Abschnitt "erheblich".', en: 'For the study section rather "significant", for the legal section "considerable".' },
      { id: 'C2_018_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und im Vorwort, wo es lockerer zugehen darf?', en: 'And in the preface, where it can be more casual?' },
      { id: 'C2_018_L004', speaker: 'Hildegard', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Da reicht ruhig "beträchtlich" — es klingt gehoben, ohne steif zu wirken.', en: 'There "substantial" works fine — it sounds elevated without seeming stiff.' }
    ],
    transcript: 'Hildegard, ich habe geschrieben, der Effekt sei "groß" — passt das für das Manuskript? Für den Studienteil eher "signifikant", für den juristischen Abschnitt "erheblich". Und im Vorwort, wo es lockerer zugehen darf? Da reicht ruhig "beträchtlich" — es klingt gehoben, ohne steif zu wirken.',
    translation: 'Hildegard, I wrote that the effect is "big" — does that fit for the manuscript? For the study section rather "significant", for the legal section "considerable". And in the preface, where it can be more casual? There "substantial" works fine — it sounds elevated without seeming stiff.',
    tokens: [
      { w: 'Hildegard' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'geschrieben' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Effekt' },
      { w: 'sei' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'groß' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'passt' },
      { w: 'das' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Manuskript' },
      { w: '?', plain: true },
      { w: 'Für' },
      { w: 'den' },
      { w: 'Studienteil' },
      { w: 'eher' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'signifikant' },
      { w: '",', plain: true },
      { w: 'für' },
      { w: 'den' },
      { w: 'juristischen' },
      { w: 'Abschnitt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'erheblich' },
      { w: '".', plain: true },
      { w: 'Und' },
      { w: 'im' },
      { w: 'Vorwort' },
      { w: ',', plain: true },
      { w: 'wo' },
      { w: 'es' },
      { w: 'lockerer' },
      { w: 'zugehen' },
      { w: 'darf' },
      { w: '?', plain: true },
      { w: 'Da' },
      { w: 'reicht' },
      { w: 'ruhig' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'beträchtlich' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'es' },
      { w: 'klingt' },
      { w: 'gehoben' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'steif' },
      { w: 'zu' },
      { w: 'wirken' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Wort schlägt Hildegard für den Studienteil vor?', qEn: 'What word does Hildegard suggest for the study section?', options: ['groß', 'signifikant', 'klein', 'komisch'], optionsEn: ['big', 'significant', 'small', 'funny'], answer: 1,
        explain: '"Für den Studienteil eher \'signifikant\'."' },
      { q: 'Welches Wort passt in den juristischen Teil?', qEn: 'What word fits the legal section?', options: ['groß', 'erheblich', 'winzig', 'seltsam'], optionsEn: ['big', 'considerably', 'tiny', 'strange'], answer: 1,
        explain: '"Für den juristischen Abschnitt \'erheblich\'."' }
    ]
  },
  speaking: [
    { task: "Hildegard fragt, ob „groß“ für das Manuskript passt.", taskEn: "Hildegard asks whether 'groß' fits the manuscript.", de: "Für den Studienteil eher signifikant, für den juristischen Abschnitt erheblich.", en: "For the study section rather 'significant', for the legal section 'considerable'." },
    { task: "Die Redaktion braucht die Meldung für Fachblatt und Tageszeitung. Was schlägst du vor?", taskEn: "The desk needs the news item for a journal and a daily. What do you propose?", de: "Im Fachblatt ein signifikanter Rückgang, in der Zeitung ein massiver Einbruch.", en: "In the journal 'a significant decline', in the paper 'a massive collapse'." },
    { task: "Eine Autorin fragt nach der Nuance der drei Wörter.", taskEn: "An author asks about the nuance of the three words.", de: "Traurig ist ein Zustand, niedergeschlagen eine Folge, melancholisch eine Haltung.", en: "'Sad' is a state, 'dejected' a consequence, 'melancholy' a disposition." },
    { task: "Ein Gutachter nennt dein Ergebnis nur plausibel. Verteidige es.", taskEn: "A reviewer calls your result merely plausible. Defend it.", de: "Das Ergebnis ist konsistent und reproduzierbar, nicht bloß plausibel.", en: "The result is consistent and reproducible, not merely plausible." },
    { task: "Der Absatz sagt fünfmal „groß“. Ersetze es je nach Kontext.", taskEn: "The paragraph says 'groß' five times. Replace it by context.", de: "Erheblich im Bericht, beträchtlich im Gutachten, gewaltig in der Reportage.", en: "'Considerable' in the report, 'substantial' in the review, 'immense' in the feature." }
  ],
  writing: {
    prompt: 'TASK 1 — Register upgrade (150 words): Replace general adjectives with register-appropriate alternatives. Explain every lexical improvement.\n\nTASK 2 — Four-register rewrite (150 words): Rewrite the same text for a newspaper, an academic journal, a legal document, and a literary novel, using different adjective selections. Explain every stylistic decision.\n\nTASK 3 — Essay (650 words): Write a C2 argumentative essay demonstrating native-level adjective selection across multiple formal registers.',
    starters: ['Ein erhebliches Problem...', 'Die empirischen Ergebnisse zeigen...', 'Der mutmaßliche...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Adjektiv-Register und stilistische Nuance...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which adjective best fits an academic register when describing a "considerable" risk?', options: ['erheblich', 'groß', 'massiv'], answer: 0, explain: '"erheblich" is the academic-register alternative to the generic "groß", while "massiv" leans journalistic/emphatic.' },
    gap: { sentence: ['Der ', ' Täter wurde festgenommen.'], gaps: [ { answer: 'mutmaßliche', accepts: ['mutmaßliche'] } ], explain: '"mutmaßlich" (alleged) is the journalistically and legally responsible choice before guilt is proven.' },
    match: { q: 'Match each adjective to its register.', pairs: [ { noun: 'rechtskräftig', art: 'Legal' }, { noun: 'reproduzierbar', art: 'Scientific' }, { noun: 'signifikant', art: 'Academic' }, { noun: 'beispiellos', art: 'Journalism' } ] },
    builder: { target: 'Build: "A considerable problem requires immediate action." (register-specific adjective)', bank: ['Ein', 'erhebliches', 'Problem', 'erfordert', 'sofortiges', 'Handeln', '.'], answer: ['Ein', 'erhebliches', 'Problem', 'erfordert', 'sofortiges', 'Handeln', '.'], roles: { 'erhebliches': 'r-register-familie' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie zeigt ein großes Ergebnis, das sehr gut ist.', right: 'Die Studie zeigt ein signifikantes Ergebnis, das methodisch überzeugend ist.', explain: 'The generic "großes" and "sehr gut" are replaced with the academic-register "signifikantes" and "methodisch überzeugend", matching the text\'s register.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for adjective selection in this chapter?', options: ['Every adjective is a paint color — native speakers choose the exact shade a situation requires', 'All near-synonym adjectives are fully interchangeable', 'Adjective choice depends only on dictionary meaning'], answer: 0, explain: 'Navy, cobalt, and sapphire are all "blue," but each creates a different impression — just like near-synonym adjectives.' },
    { q: 'Why is "mutmaßlich" preferred over an unqualified claim in journalism?', options: ['It responsibly signals that guilt/fact is not yet confirmed', 'It sounds more dramatic', 'It is grammatically required before any noun'], answer: 0, explain: 'Responsible journalistic and legal language marks unproven claims explicitly as alleged.' },
    { q: 'What is a classic C2-level adjective mistake?', options: ['Overusing generic catch-all adjectives like "gut", "schlecht", "groß"', 'Never using any adjectives', 'Using too many academic adjectives'], answer: 0, explain: 'Generic adjectives signal lower proficiency; C2 writers replace them with register-specific precision.' },
    { q: 'Why might "melancholisch" be chosen over "traurig" in a novel?', options: ['It carries a more literary, atmospheric emotional register', 'It is grammatically more correct', 'It has no register difference from "traurig"'], answer: 0, explain: 'Emotional adjective families range from everyday ("traurig") to literary/atmospheric ("melancholisch").' },
    { q: 'What is the real C2-level skill this chapter teaches?', options: ['Choosing among grammatically correct adjectives based on register, precision, and tone', 'Learning new adjective endings', 'Learning comparative and superlative forms'], answer: 0, explain: 'Vocabulary choice — not grammar — is one of the strongest indicators of true C2 proficiency.' }
  ],
  takeaways: [
    { c: 'r-farbe-metapher', html: 'Every adjective is a paint color — native speakers choose the exact shade a situation requires, not just "a color."' },
    { c: 'r-register-familie', html: 'Near-synonym families shift with register: groß → erheblich (academic) → massiv (journalistic) all describe intensity differently.' },
    { c: 'r-emotionale-nuance', html: 'Emotional adjective families range from everyday (traurig) to literary/atmospheric (melancholisch).' },
    { c: 'r-praezisions-leiter', html: 'The precision ladder moves from generic to specific to technical to register-specific — the true marker of C2 vocabulary mastery.' }
  ],
  revisionTips: [
    'Take one generic adjective (gut, groß, schlecht) and list its academic, scientific, legal, and journalistic register alternatives.',
    'Read one newspaper editorial and highlight every adjective, classifying its register and emotional intensity.',
    'Rewrite one paragraph four times — for conversation, academic writing, legal drafting, and literary prose — changing only the adjectives.'
  ]
};
window.CHAPTER = CHAPTER;
