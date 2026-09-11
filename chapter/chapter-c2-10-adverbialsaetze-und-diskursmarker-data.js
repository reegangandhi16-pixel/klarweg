/* KLARWEG CHAPTER DATA — C2 · Chapter 10
   "Adverbialsätze & Diskursmarker" (C2) — native-level discourse
   organization: text architecture, rhetorical flow, cohesion and
   pragmatic meaning, NOT conjunction formation or subordinate clause
   word order (already mastered A2-B2, C1 Ch3/5/32). Vocabulary
   covers 100% of the uploaded 39-item discourse-marker list.
   Dialogue: Gudrun and Timo ONLY. */
const CHAPTER = {
  id: 'c2-10-adverbialsaetze-und-diskursmarker',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 10,
  title: 'Adverbialsätze & Diskursmarker',
  titleEn: 'Adverbial clauses & discourse markers',
  description: 'Every paragraph is a train carriage. Grammar builds each carriage. Discourse markers are the couplings that connect them — without strong couplings, the train falls apart.',
  xp: 1425, time: 140, difficulty: 'Mastery',
  nextChapter: { number: 11, title: 'Relativsätze', titleEn: 'Relative clauses at native level' , href: 'chapter-c2-11-relativsaetze.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Discourse markers are the <em>couplings</em> between carriages.',
    intro: 'Revising a Goethe C2 essay on rising rents, Gudrun links cause to consequence — accordingly, nevertheless, hence — and Timo adds his own couplings, discourse markers holding every paragraph-carriage of the argument together.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers connect paragraphs into a smoothly flowing text, not just grammatically correct sentences'],
    scene: 'Überarbeitung eines Goethe-C2-Essays',
    femaleSpeakers: ['Gudrun'],
    dialogue: [
      { speaker: 'Gudrun', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Mieten', role: 'r-subject', en: 'rents', hi: 'किराए', pron: 'MEE-ten', type: 'Noun · plural' },
        { w: 'steigen', role: 'r-verb', en: 'rise', hi: 'बढ़ते हैं', pron: 'SHTY-gen', type: 'Verb · steigen' },
        { w: ',', plain: true },
        { w: 'demnach', role: 'r-conjunction', en: 'accordingly', hi: 'तदनुसार', pron: 'DAYM-nahkh', type: 'Adverb · demnach', why: 'demnach = accordingly, a formal discourse marker drawing a conclusion (this chapter).', ex: 'Die Mieten steigen, demnach brauchen wir mehr Wohnungen.', exEn: 'Rents are rising, accordingly we need more housing.' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Wohnungen', role: 'r-akkusativ', en: 'apartments', hi: 'मकान', pron: 'VOH-nun-gen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Rents are rising, accordingly we need more housing.', hi: 'Kiraaye badh rahe hain, tadanusaar humein zyaada makaan chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gleichwohl', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'GLYKH-vol', type: 'Adverb · gleichwohl', why: 'gleichwohl = nevertheless, a formal discourse marker (this chapter).', ex: 'Gleichwohl fehlt das Bauland.', exEn: 'Nevertheless the building land is missing.' },
        { w: 'fehlt', role: 'r-verb', en: 'is missing', hi: 'कम है', pron: 'faylt', type: 'Verb · fehlen' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Bauland', role: 'r-subject', en: 'building land', hi: 'निर्माण भूमि', pron: 'BOW-lant', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Nevertheless the building land is missing.', hi: 'Phir bhi nirmaan bhoomi kam hai.' },
      { speaker: 'Gudrun', tokens: [
        { w: 'Wohingegen', role: 'r-conjunction', en: 'whereas', hi: 'जबकि', pron: 'vo-hin-GAY-gen', type: 'Adverb · wohingegen', why: 'wohingegen = whereas, a formal contrast marker (this chapter).', ex: 'Wohingegen die Nachfrage wächst.', exEn: 'Whereas the demand grows.' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nachfrage', role: 'r-subject', en: 'demand', hi: 'मांग', pron: 'NAHKH-frah-guh', type: 'Noun · fem.' },
        { w: 'wächst', role: 'r-verb', en: 'grows', hi: 'बढ़ रही है', pron: 'VEKST', type: 'Verb · wachsen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Whereas the demand grows.', hi: 'Jabki maang badh rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Infolgedessen', role: 'r-conjunction', en: 'as a consequence', hi: 'परिणामस्वरूप', pron: 'in-FOL-guh-de-sen', type: 'Adverb · infolgedessen', why: 'infolgedessen = as a consequence, a formal result marker (this chapter).', ex: 'Infolgedessen brauchen wir eine neue Strategie.', exEn: 'As a consequence we need a new strategy.' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नई', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Strategie', role: 'r-akkusativ', en: 'strategy', hi: 'रणनीति', pron: 'shtra-tay-GEE', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'As a consequence we need a new strategy.', hi: 'Parinaamswaroop humein ek nayi rananeeti chahiye.' },
      { speaker: 'Gudrun', tokens: [
        { w: 'Mithin', role: 'r-conjunction', en: 'hence', hi: 'अतः', pron: 'MIT-hin', type: 'Adverb · mithin', why: 'mithin = hence/therefore, a very formal concluding marker (this chapter).', ex: 'Mithin ist eine Reform notwendig.', exEn: 'Hence a reform is necessary.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'Reform', role: 'r-subject', en: 'reform', hi: 'सुधार', pron: 're-FORM', type: 'Noun · fem. (recycled C2)' },
        { w: 'notwendig', role: 'r-akkusativ', en: 'necessary', hi: 'ज़रूरी', pron: 'NOHT-ven-dikh', type: 'Adjective (recycled C2)' },
        { w: '.', plain: true }
      ], en: 'Hence a reform is necessary.', hi: 'Ataha ek sudhaar zaroori hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Zumal', role: 'r-conjunction', en: 'especially since', hi: 'ख़ास तौर पर क्योंकि', pron: 'TSOO-mahl', type: 'Adverb · zumal', why: 'zumal = especially since, a formal reason marker (this chapter).', ex: 'Zumal die Wähler das erwarten.', exEn: 'Especially since the voters expect that.' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Wähler', role: 'r-subject', en: 'voters', hi: 'मतदाता', pron: 'VAI-ler', type: 'Noun · plural' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'erwarten', role: 'r-verb', en: 'expect', hi: 'उम्मीद करते हैं', pron: 'er-VAR-ten', type: 'Verb · erwarten (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Especially since the voters expect that.', hi: 'Khaas taur par kyunki matdaata yeh ummeed karte hain.' },
      { speaker: 'Gudrun', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'fassen', role: 'r-verb', en: 'let us summarize', hi: 'संक्षेप में कहते हैं', pron: 'FA-sen', type: 'Verb · zusammenfassen (wir)', lexicalUnit: 'zusammenfassen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (pl.)', hi: 'हमारे', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'Punkte', role: 'r-akkusativ', en: 'points', hi: 'बिंदु', pron: 'PUNK-tuh', type: 'Noun · plural' },
        { w: 'zusammen', role: 'r-verb', en: '(prefix of zusammenfassen)', hi: '', pron: 'tsu-ZA-men', type: 'Separable prefix · Satzende', lexicalUnit: 'zusammenfassen' },
        { w: '.', plain: true }
      ], en: 'Good, then let us summarize our points.', hi: 'Achha, toh hum apne bindu sankshep mein kehte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every paragraph is a train carriage; <span class="de r-zugverbindung-metapher">discourse markers are the couplings</span> that connect them into a smooth-running text.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is ADVERBIALSÄTZE & DISKURSMARKER at C2 level — native-level DISCOURSE ORGANIZATION: text architecture, rhetorical flow, cohesion, and pragmatic meaning, NOT conjunction formation, subordinate clause word order, or comma rules (already fully mastered A2-B2 and C1 Ch3/5/32). Covered: the sentence→paragraph→text→reader→discourse progression showing why correct grammar alone does not create good writing; types of discourse markers (addition: darüber hinaus, ferner, des Weiteren, außerdem, zudem, zusätzlich; contrast: demgegenüber, hingegen, wohingegen; cause: folglich, daher, infolgedessen, mithin, somit; concession: dennoch, gleichwohl, nichtsdestotrotz; conclusion: zusammenfassend, alles in allem, abschließend, insgesamt); the known-information → new-information → transition → reader-orientation flow model explaining why native speakers avoid abrupt topic changes; register-specific discourse organization across academic (darüber hinaus, folglich, zusammenfassend lässt sich feststellen), scientific (zunächst, im Folgenden, darauf aufbauend, abschließend), journalism (allerdings, indessen, gleichzeitig, unterdessen, dennoch, somit), political/professional (vor diesem Hintergrund, nichtsdestotrotz, in diesem Zusammenhang, dementsprechend), and literary discourse (narrative transitions, thematic progression); and the claim → evidence → counterargument → evaluation → conclusion argumentative essay structure using authentic discourse markers. The most important things to catch: repeating the same connector (deshalb, außerdem) throughout a text instead of varying markers; overusing "aber" where a more precise contrastive marker (demgegenüber, hingegen, wohingegen) fits better; abrupt paragraph changes with no transition; weak logical progression between paragraphs; English-style linking (direct translation of English connectors rather than authentic German discourse patterns); using a discourse marker whose register mismatches the text (casual marker in an academic essay, or vice versa). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag repeated/overused connectors; flag abrupt paragraph transitions lacking any discourse marker; flag register-mismatched discourse markers; flag English-style direct-translation linking. Do NOT flag basic conjunction/subordinate-clause grammar as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around cohesion/register). If none: <li>No errors — well done.</li> 3) <p><b>Native-level cohesion check:</b> one sentence on whether the learner\'s paragraphs connect smoothly, like train carriages coupled together, rather than reading as isolated correct sentences.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — your paragraphs couple together like a well-built train. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Cohesion Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: grammar builds the carriages, but discourse markers are the couplings that keep the train together.' },
  parserSentence: [ { w: 'Darüber', role: 'r-diskursmarker' }, { w: 'hinaus', role: 'r-diskursmarker' }, { w: 'zeigt', role: 'plain' }, { w: 'die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: 'weitere', role: 'plain' }, { w: 'Ergebnisse', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: discourse markers are the couplings between paragraph-carriages, without which the train falls apart.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Gudrun and Timo edit a Goethe C2 essay, improving flow and cohesion rather than grammar.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn 39 C2 discourse markers (allerdings, folglich, demgegenüber, zusammenfassend, etc.) — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master discourse marker types, information flow, register-specific organization, and argumentative structure.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic essay, scientific article, and editorial for discourse markers and paragraph cohesion.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify transitions, discourse markers, and rhetorical organization in a lecture, conference presentation, and political speech.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice structured presentations, persuasive speeches, and debate organization at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite for cohesion, reorganize an academic article, and write a 600-word argumentative essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill cohesion analysis, paragraph linking, discourse marker selection, and register-based editing.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1425 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All 39 chapter discourse markers with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Cohesion analysis, paragraph linking, register selection drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Cohesion Model, Information Flow Model, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Darüber hinaus zeigt die Studie...', text: 'Use precise academic addition markers instead of repeating "außerdem"' },
    { de: 'Demgegenüber steht...', text: 'Choose a precise contrastive marker instead of overusing "aber"' },
    { de: 'Folglich lässt sich schließen, dass...', text: 'Signal logical consequence naturally in academic writing' },
    { de: 'Zusammenfassend lässt sich feststellen...', text: 'Conclude formal texts with an appropriate summary marker' },
    { de: 'Jeder Absatz ist ein Zugwaggon.', text: 'Understand the chapter\'s core "train coupling" metaphor for cohesion' }
  ],
  vocab: [
    { de: 'allerdings', pos: 'adverb (discourse marker)', level: 'C2', register: 'journalism/formal', en: 'however, though', hi: 'हालाँकि', synonyms: 'jedoch, indes', antonyms: null, ex: 'Die Zahlen sind positiv. Allerdings bleibt die Unsicherheit hoch.', exEn: 'The numbers are positive. However, uncertainty remains high.', exHi: 'Ankade positive hain. Halaanki, anishchitata uchch bani hui hai.', ex2: 'Er stimmte zu, allerdings mit gewissen Vorbehalten.', ex2En: 'He agreed, though with certain reservations.', ex2Hi: 'Usne sahmat hua, halaanki kuch aarakshan ke saath.' },
    { de: 'da', pos: 'conjunction/adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'since, as', hi: 'चूँकि', synonyms: 'weil, zumal', antonyms: null, ex: 'Da die Datenlage unzureichend ist, sind weitere Studien nötig.', exEn: 'Since the data situation is insufficient, further studies are necessary.', exHi: 'Chunki data sthiti apoorna hai, aur studies zaroori hain.', ex2: 'Da dies bereits erwähnt wurde, gehen wir direkt zum nächsten Punkt über.', ex2En: 'Since this has already been mentioned, we move directly to the next point.', ex2Hi: 'Chunki yeh pehle hi ullekh kiya ja chuka hai, hum seedhe agle point par jaate hain.' },
    { de: 'daher', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'therefore, hence', hi: 'इसलिए', synonyms: 'deshalb, folglich', antonyms: null, ex: 'Die Ergebnisse sind eindeutig; daher erübrigt sich eine weitere Diskussion.', exEn: 'The results are clear; hence further discussion is unnecessary.', exHi: 'Parinaam spashtha hain; isliye aur charcha ki zaroorat nahi.', ex2: 'Daher lässt sich schließen, dass die Hypothese bestätigt wurde.', ex2En: 'Hence it can be concluded that the hypothesis was confirmed.', ex2Hi: 'Isliye nishkarsh nikaala jaa sakta hai ki hypothesis confirm hui.' },
    { de: 'demgegenüber', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/scientific', en: 'in contrast, by contrast', hi: 'इसके विपरीत', synonyms: 'hingegen, im Gegensatz dazu', antonyms: 'ebenso, gleichermaßen', ex: 'Demgegenüber zeigt die zweite Studie ein völlig anderes Bild.', exEn: 'In contrast, the second study shows a completely different picture.', exHi: 'Iske viprit, dusra study ek bilkul alag tasveer dikhaata hai.', ex2: 'Die erste Gruppe profitierte stark; demgegenüber blieb die zweite Gruppe unverändert.', ex2En: 'The first group benefited greatly; by contrast, the second group remained unchanged.', ex2Hi: 'Pehla samooh bahut faayde mein raha; iske viprit, doosra samooh badla nahi.' },
    { de: 'demnach', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'accordingly, according to this', hi: 'तदनुसार', synonyms: 'folglich, somit', antonyms: null, ex: 'Demnach lässt sich die Annahme nicht länger aufrechterhalten.', exEn: 'Accordingly, the assumption can no longer be maintained.', exHi: 'Tadanusaar, yeh dhaarna aur nahi bana rakhi jaa sakti.', ex2: 'Demnach handelt es sich um einen Einzelfall.', ex2En: 'Accordingly, this is an isolated case.', ex2Hi: 'Tadanusaar, yeh ek akela maamla hai.' },
    { de: 'dennoch', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'nevertheless', hi: 'फिर भी', synonyms: 'trotzdem, gleichwohl', antonyms: null, ex: 'Die Kritik war scharf; dennoch hielt der Autor an seiner These fest.', exEn: 'The criticism was sharp; nevertheless the author stuck to his thesis.', exHi: 'Aalochana teekhi thi; fir bhi lekhak apni thesis par kaayam raha.', ex2: 'Dennoch bleibt ein Restzweifel bestehen.', ex2En: 'Nevertheless, a residual doubt remains.', ex2Hi: 'Fir bhi, ek baaki sandeh bana rehta hai.' },
    { de: 'deshalb', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'therefore, that\'s why', hi: 'इसलिए', synonyms: 'daher, folglich', antonyms: null, ex: 'Die Frist wurde verpasst; deshalb wurde der Antrag abgelehnt.', exEn: 'The deadline was missed; therefore the application was rejected.', exHi: 'Deadline chhoot gayi; isliye application reject ho gayi.', ex2: 'Deshalb sollte man diesen Punkt genauer prüfen.', ex2En: 'Therefore one should examine this point more closely.', ex2Hi: 'Isliye is point ko aur gehraai se dekhna chahiye.' },
    { de: 'exemplarisch', pos: 'adjective/adverb', level: 'C2', register: 'academic/formal', en: 'exemplary, by way of example', hi: 'उदाहरण के रूप में', synonyms: 'beispielhaft, stellvertretend', antonyms: null, ex: 'Exemplarisch sei hier ein Fall aus der Praxis genannt.', exEn: 'By way of example, one case from practice may be mentioned here.', exHi: 'Udaharan ke roop mein, yahaan practice ka ek case zikr kiya jaata hai.', ex2: 'Der Roman zeigt exemplarisch die Probleme der Nachkriegszeit.', ex2En: 'The novel exemplifies the problems of the post-war period.', ex2Hi: 'Novel udaharan ke roop mein post-war period ki samasyaon ko dikhaata hai.' },
    { de: 'folglich', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'consequently', hi: 'फलस्वरूप', synonyms: 'daher, somit, mithin', antonyms: null, ex: 'Die Prämissen sind korrekt; folglich muss die Schlussfolgerung ebenfalls zutreffen.', exEn: 'The premises are correct; consequently the conclusion must also hold.', exHi: 'Premises sahi hain; falswaroop nishkarsh bhi sahi hona chahiye.', ex2: 'Folglich lässt sich die Hypothese als bestätigt betrachten.', ex2En: 'Consequently the hypothesis can be regarded as confirmed.', ex2Hi: 'Falswaroop, hypothesis ko confirm maana jaa sakta hai.' },
    { de: 'gleichwohl', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal/literary', en: 'nonetheless, all the same', hi: 'तथापि', synonyms: 'dennoch, nichtsdestotrotz', antonyms: null, ex: 'Die Beweislage ist dünn; gleichwohl überzeugt die Argumentation.', exEn: 'The evidence is thin; nonetheless the argument is convincing.', exHi: 'Saboot kam hai; tathaapi tark mannane yogya hai.', ex2: 'Gleichwohl bleibt ein gewisses Risiko bestehen.', ex2En: 'All the same, a certain risk remains.', ex2Hi: 'Tathaapi, kuch jokhim baaki rehta hai.' },
    { de: 'hingegen', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'on the other hand, whereas', hi: 'दूसरी ओर', synonyms: 'demgegenüber, dagegen', antonyms: null, ex: 'Die erste Methode ist zeitaufwendig; die zweite hingegen liefert schnellere Ergebnisse.', exEn: 'The first method is time-consuming; the second, on the other hand, delivers faster results.', exHi: 'Pehla tareeka samay-lena hai; doosra, dusri or, tez parinaam deta hai.', ex2: 'Hingegen zeigt die Kontrollgruppe keine Veränderung.', ex2En: 'On the other hand, the control group shows no change.', ex2Hi: 'Dusri or, control group mein koi badlaav nahi dikhta.' },
    { de: 'indes', pos: 'adverb (discourse marker)', level: 'C2', register: 'journalism/literary/formal', en: 'however, meanwhile', hi: 'इस बीच, हालाँकि', synonyms: 'allerdings, jedoch', antonyms: null, ex: 'Die Regierung feierte den Erfolg. Kritiker äußerten indes erhebliche Bedenken.', exEn: 'The government celebrated the success. Critics, however, expressed considerable concerns.', exHi: 'Sarkaar ne safalta manaayi. Aalochakon ne, halaanki, kaafi chinta jataayi.', ex2: 'Indes bleibt die Situation vor Ort angespannt.', ex2En: 'Meanwhile, the situation on the ground remains tense.', ex2Hi: 'Is beech, sthiti waha tanaavpoorna bani hui hai.' },
    { de: 'infolgedessen', pos: 'adverb (discourse marker)', level: 'C2', register: 'formal/legal/academic', en: 'as a result, consequently', hi: 'परिणामस्वरूप', synonyms: 'folglich, daher', antonyms: null, ex: 'Der Vertrag wurde gebrochen; infolgedessen wurde eine Klage eingereicht.', exEn: 'The contract was broken; as a result, a lawsuit was filed.', exHi: 'Contract toota; parinaamswaroop, ek case daakhil kiya gaya.', ex2: 'Infolgedessen mussten die Pläne überarbeitet werden.', ex2En: 'As a result, the plans had to be revised.', ex2Hi: 'Parinaamswaroop, plans ko dobara banaana pada.' },
    { de: 'jedoch', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'however', hi: 'फिर भी, हालाँकि', synonyms: 'allerdings, aber', antonyms: null, ex: 'Die Theorie war lange akzeptiert; jedoch widerlegen neue Daten sie zunehmend.', exEn: 'The theory was long accepted; however, new data increasingly refute it.', exHi: 'Theory lambe samay se maani jaati thi; halaanki naya data usse khaarij kar raha hai.', ex2: 'Jedoch bleibt die Frage der Kausalität ungeklärt.', ex2En: 'However, the question of causality remains unresolved.', ex2Hi: 'Halaanki, kaaranata ka sawaal abhi bhi anutarit hai.' },
    { de: 'mithin', pos: 'adverb (discourse marker)', level: 'C2', register: 'formal/legal/academic', en: 'therefore, thus', hi: 'अतः', synonyms: 'folglich, somit', antonyms: null, ex: 'Die Voraussetzungen sind erfüllt; mithin ist der Antrag zulässig.', exEn: 'The conditions are met; therefore the application is admissible.', exHi: 'Shartein poori hain; ata: application maan-jog hai.', ex2: 'Mithin ergibt sich kein Widerspruch zur bisherigen Argumentation.', ex2En: 'Therefore no contradiction arises with the previous argumentation.', ex2Hi: 'Ata:, pichhle tark se koi virodhaabhaas nahi.' },
    { de: 'somit', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'thus, consequently', hi: 'इस प्रकार', synonyms: 'folglich, daher', antonyms: null, ex: 'Alle Daten wurden überprüft; somit ist das Ergebnis belastbar.', exEn: 'All data were checked; thus the result is robust.', exHi: 'Sabhi data check kiya gaya; is prakaar parinaam bharosemand hai.', ex2: 'Somit lässt sich die ursprüngliche Hypothese bestätigen.', ex2En: 'Thus the original hypothesis can be confirmed.', ex2Hi: 'Is prakaar, mool hypothesis ki pushti ki jaa sakti hai.' },
    { de: 'unter anderem', pos: 'phrase (discourse marker)', level: 'C2', register: 'both', en: 'among other things', hi: 'अन्य बातों के साथ', synonyms: 'insbesondere, beispielsweise', antonyms: null, ex: 'Unter anderem wurde auch die Methodik kritisiert.', exEn: 'Among other things, the methodology was also criticized.', exHi: 'Anya baaton ke saath, methodology ki bhi aalochana hui.', ex2: 'Der Bericht behandelt unter anderem wirtschaftliche und soziale Aspekte.', ex2En: 'The report addresses, among other things, economic and social aspects.', ex2Hi: 'Report anya baaton ke saath aarthik aur samajik pehluon ko sambodhit karti hai.' },
    { de: 'weil', pos: 'conjunction (discourse marker context)', level: 'C2', register: 'both', en: 'because', hi: 'क्योंकि', synonyms: 'da, zumal', antonyms: null, ex: 'Die Studie überzeugt, weil sie methodisch besonders sorgfältig ist.', exEn: 'The study is convincing because it is methodically particularly careful.', exHi: 'Study convincing hai, kyunki yeh methodological roop se bahut saavdhaan hai.', ex2: 'Weil die Ergebnisse widersprüchlich sind, sind weitere Studien nötig.', ex2En: 'Because the results are contradictory, further studies are necessary.', ex2Hi: 'Kyunki parinaam vipreet hain, aur studies zaroori hain.' },
    { de: 'wohingegen', pos: 'conjunction (discourse marker)', level: 'C2', register: 'academic/formal', en: 'whereas', hi: 'जबकि', synonyms: 'während, hingegen', antonyms: null, ex: 'Die urbanen Gebiete verzeichneten Wachstum, wohingegen ländliche Regionen stagnierten.', exEn: 'Urban areas recorded growth, whereas rural regions stagnated.', exHi: 'Shahri kshetron ne vikas darj kiya, jabki grameen kshetra ruke rahe.', ex2: 'Die erste Gruppe reagierte positiv, wohingegen die zweite keine Veränderung zeigte.', ex2En: 'The first group reacted positively, whereas the second showed no change.', ex2Hi: 'Pehle samooh ne sakaaratmak pratikriya di, jabki doosre mein koi badlaav nahi tha.' },
    { de: 'zumal', pos: 'conjunction (discourse marker)', level: 'C2', register: 'formal/academic', en: 'especially since, particularly as', hi: 'विशेष रूप से क्योंकि', synonyms: 'besonders da, vor allem weil', antonyms: null, ex: 'Die Entscheidung überrascht, zumal die Daten eindeutig dagegen sprachen.', exEn: 'The decision is surprising, especially since the data clearly spoke against it.', exHi: 'Faisla hairaani ki baat hai, khaaskar kyunki data spashtha roop se iske khilaaf tha.', ex2: 'Zumal die Frist bereits verstrichen ist, bleibt wenig Handlungsspielraum.', ex2En: 'Especially since the deadline has already passed, there is little room for action.', ex2Hi: 'Khaaskar kyunki deadline pehle hi nikal chuki hai, karyavaahi ki kam gunjaish hai.' },
    { de: 'abschließend', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'in conclusion, finally', hi: 'अंत में', synonyms: 'zusammenfassend, schließlich', antonyms: null, ex: 'Abschließend lässt sich festhalten, dass weitere Forschung nötig ist.', exEn: 'In conclusion, it can be noted that further research is necessary.', exHi: 'Ant mein, yeh kaha jaa sakta hai ki aur shodh zaroori hai.', ex2: 'Abschließend möchte ich auf die praktischen Implikationen eingehen.', ex2En: 'Finally, I would like to address the practical implications.', ex2Hi: 'Ant mein, main vyaavharik prabhaavon par baat karna chaahoonga.' },
    { de: 'alles in allem', pos: 'phrase (discourse marker)', level: 'C2', register: 'both', en: 'all in all', hi: 'कुल मिलाकर', synonyms: 'insgesamt, zusammenfassend', antonyms: null, ex: 'Alles in allem war die Konferenz ein Erfolg.', exEn: 'All in all, the conference was a success.', exHi: 'Kul milaakar, conference safal rahi.', ex2: 'Alles in allem überwiegen die Vorteile die Nachteile.', ex2En: 'All in all, the advantages outweigh the disadvantages.', ex2Hi: 'Kul milaakar, faayde nuksaan se zyaada hain.' },
    { de: 'außerdem', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'furthermore, besides', hi: 'इसके अलावा', synonyms: 'zudem, ferner, des Weiteren', antonyms: null, ex: 'Die Methode ist effizient. Außerdem lässt sie sich leicht auf andere Fälle übertragen.', exEn: 'The method is efficient. Furthermore, it can easily be transferred to other cases.', exHi: 'Tareeka kushal hai. Iske alaawa, isse asaani se doosre cases mein use kiya jaa sakta hai.', ex2: 'Außerdem sollte man die langfristigen Folgen bedenken.', ex2En: 'Furthermore, one should consider the long-term consequences.', ex2Hi: 'Iske alaawa, long-term parinaamon par vichaar karna chahiye.' },
    { de: 'bei genauer Betrachtung', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal', en: 'on closer inspection', hi: 'गहराई से देखने पर', synonyms: 'bei näherem Hinsehen', antonyms: null, ex: 'Bei genauer Betrachtung erweist sich die Annahme als unhaltbar.', exEn: 'On closer inspection, the assumption proves untenable.', exHi: 'Gehraai se dekhne par, dhaarna asambhav sabit hoti hai.', ex2: 'Bei genauer Betrachtung zeigen sich deutliche Unterschiede zwischen den Gruppen.', ex2En: 'On closer inspection, clear differences between the groups become apparent.', ex2Hi: 'Gehraai se dekhne par, samoohon ke beech spashtha antar dikhte hain.' },
    { de: 'bei näherem Hinsehen', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal', en: 'looking more closely', hi: 'बारीकी से देखने पर', synonyms: 'bei genauer Betrachtung', antonyms: null, ex: 'Bei näherem Hinsehen fallen mehrere methodische Schwächen auf.', exEn: 'Looking more closely, several methodological weaknesses stand out.', exHi: 'Baareeki se dekhne par, kai methodological kamzoriyaan nazar aati hain.', ex2: 'Bei näherem Hinsehen entpuppt sich das Argument als weniger stichhaltig.', ex2En: 'Looking more closely, the argument turns out to be less compelling.', ex2Hi: 'Baareeki se dekhne par, tark kam mazboot lagta hai.' },
    { de: 'beispielsweise', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'for example', hi: 'उदाहरण के लिए', synonyms: 'zum Beispiel, etwa', antonyms: null, ex: 'Beispielsweise zeigt die Fallstudie aus Deutschland ähnliche Muster.', exEn: 'For example, the case study from Germany shows similar patterns.', exHi: 'Udaharan ke liye, Germany ka case study samaan patterns dikhaata hai.', ex2: 'Manche Faktoren, beispielsweise das Einkommen, spielen eine wichtige Rolle.', ex2En: 'Some factors, for example income, play an important role.', ex2Hi: 'Kuch factors, udaharan ke liye income, mahatvapoorna bhoomika nibhaate hain.' },
    { de: 'darüber hinaus', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal', en: 'moreover, furthermore', hi: 'इसके अतिरिक्त', synonyms: 'außerdem, ferner', antonyms: null, ex: 'Darüber hinaus zeigt die Studie signifikante regionale Unterschiede.', exEn: 'Moreover, the study shows significant regional differences.', exHi: 'Iske atirikt, study mahatvapoorna kshetriya antar dikhaati hai.', ex2: 'Darüber hinaus sollten ethische Implikationen berücksichtigt werden.', ex2En: 'Furthermore, ethical implications should be considered.', ex2Hi: 'Iske atirikt, naitik prabhaavon par vichaar karna chahiye.' },
    { de: 'des Weiteren', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal/legal', en: 'furthermore, in addition', hi: 'इसके अलावा', synonyms: 'ferner, außerdem', antonyms: null, ex: 'Des Weiteren ist zu berücksichtigen, dass die Stichprobe klein war.', exEn: 'Furthermore, it should be considered that the sample was small.', exHi: 'Iske alaawa, dhyaan dena chahiye ki sample chhota tha.', ex2: 'Des Weiteren wird empfohlen, die Methodik zu überarbeiten.', ex2En: 'Furthermore, it is recommended to revise the methodology.', ex2Hi: 'Iske alaawa, methodology ko dobara banaane ki sifaarish ki jaati hai.' },
    { de: 'ebenso', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'likewise, equally', hi: 'उसी प्रकार', synonyms: 'gleichermaßen, genauso', antonyms: null, ex: 'Ebenso wichtig ist die Berücksichtigung sozialer Faktoren.', exEn: 'Equally important is the consideration of social factors.', exHi: 'Usi prakaar mahatvapoorna hai samaajik factors ka dhyaan rakhna.', ex2: 'Die erste Studie bestätigt dies, ebenso die zweite.', ex2En: 'The first study confirms this, and likewise the second.', ex2Hi: 'Pehla study isse confirm karta hai, aur usi prakaar doosra bhi.' },
    { de: 'eingeschränkt', pos: 'adjective/adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'with limitations, restrictedly', hi: 'सीमित रूप से', synonyms: 'begrenzt, bedingt', antonyms: 'uneingeschränkt', ex: 'Die Ergebnisse sind nur eingeschränkt auf andere Kontexte übertragbar.', exEn: 'The results are only transferable to other contexts with limitations.', exHi: 'Parinaam sirf seemit roop se doosre contexts mein laagoo kiye jaa sakte hain.', ex2: 'Eingeschränkt gilt dies auch für die zweite Untersuchung.', ex2En: 'With limitations, this also applies to the second investigation.', ex2Hi: 'Seemit roop se, yeh doosri jaanch par bhi laagoo hota hai.' },
    { de: 'etwa', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'for instance, roughly', hi: 'लगभग, उदाहरण स्वरूप', synonyms: 'beispielsweise, ungefähr', antonyms: null, ex: 'Manche Länder, etwa Norwegen, verfolgen einen anderen Ansatz.', exEn: 'Some countries, for instance Norway, pursue a different approach.', exHi: 'Kuch desh, jaise ki Norway, ek alag drishtikon apnaate hain.', ex2: 'Die Kosten belaufen sich auf etwa zwei Millionen Euro.', ex2En: 'The costs amount to roughly two million euros.', ex2Hi: 'Lagat lagbhag do million euro tak hai.' },
    { de: 'ferner', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal/scientific', en: 'furthermore, moreover', hi: 'आगे', synonyms: 'außerdem, des Weiteren', antonyms: null, ex: 'Ferner ist anzumerken, dass die Datenlage begrenzt ist.', exEn: 'Furthermore, it should be noted that the data situation is limited.', exHi: 'Aage, yeh dhyaan dena chahiye ki data sthiti seemit hai.', ex2: 'Ferner zeigt sich ein deutlicher Zusammenhang mit dem Bildungsniveau.', ex2En: 'Furthermore, a clear connection with education level becomes apparent.', ex2Hi: 'Aage, shiksha star ke saath ek spashtha sambandh dikhta hai.' },
    { de: 'insgesamt', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'overall, altogether', hi: 'कुल मिलाकर', synonyms: 'alles in allem, zusammenfassend', antonyms: null, ex: 'Insgesamt bestätigen die Ergebnisse die ursprüngliche Hypothese.', exEn: 'Overall, the results confirm the original hypothesis.', exHi: 'Kul milaakar, parinaam mool hypothesis ki pushti karte hain.', ex2: 'Insgesamt wurden 500 Teilnehmer befragt.', ex2En: 'Altogether, 500 participants were surveyed.', ex2Hi: 'Kul milaakar, 500 prathibhaagiyon se poochha gaya.' },
    { de: 'nicht zuletzt', pos: 'phrase (discourse marker)', level: 'C2', register: 'academic/formal/journalism', en: 'not least', hi: 'विशेष रूप से', synonyms: 'insbesondere, vor allem', antonyms: null, ex: 'Nicht zuletzt dank internationaler Zusammenarbeit konnte das Problem gelöst werden.', exEn: 'Not least thanks to international cooperation, the problem could be solved.', exHi: 'Vishesh roop se antarrashtriya sahyog ki wajah se, samasya hal ho sakti.', ex2: 'Nicht zuletzt spielt auch die politische Lage eine Rolle.', ex2En: 'Not least, the political situation also plays a role.', ex2Hi: 'Vishesh roop se, rajnitik sthiti bhi bhoomika nibhaati hai.' },
    { de: 'teilweise', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'partly, partially', hi: 'आंशिक रूप से', synonyms: 'zum Teil, bedingt', antonyms: 'völlig, gänzlich', ex: 'Die Hypothese wurde teilweise bestätigt.', exEn: 'The hypothesis was partly confirmed.', exHi: 'Hypothesis aanshik roop se confirm hui.', ex2: 'Teilweise lässt sich dies durch strukturelle Faktoren erklären.', ex2En: 'This can partly be explained by structural factors.', ex2Hi: 'Yeh aanshik roop se structural factors se samjhaaya jaa sakta hai.' },
    { de: 'zudem', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'moreover, in addition', hi: 'इसके अलावा', synonyms: 'außerdem, ferner', antonyms: null, ex: 'Zudem zeigt sich, dass jüngere Teilnehmer anders reagieren.', exEn: 'Moreover, it becomes apparent that younger participants react differently.', exHi: 'Iske alaawa, yeh dikhta hai ki chhote prathibhaagi alag pratikriya dete hain.', ex2: 'Zudem sollte die Stichprobengröße erhöht werden.', ex2En: 'In addition, the sample size should be increased.', ex2Hi: 'Iske alaawa, sample size badhaana chahiye.' },
    { de: 'zusammenfassend', pos: 'adverb (discourse marker)', level: 'C2', register: 'academic/formal', en: 'in summary', hi: 'संक्षेप में', synonyms: 'abschließend, alles in allem', antonyms: null, ex: 'Zusammenfassend lässt sich feststellen, dass weitere Forschung notwendig ist.', exEn: 'In summary, it can be established that further research is necessary.', exHi: 'Sankshep mein, yeh sthaapit kiya jaa sakta hai ki aur shodh zaroori hai.', ex2: 'Zusammenfassend bestätigt die Analyse die zentrale These.', ex2En: 'In summary, the analysis confirms the central thesis.', ex2Hi: 'Sankshep mein, analysis kendriya thesis ki pushti karta hai.' },
    { de: 'zusätzlich', pos: 'adverb (discourse marker)', level: 'C2', register: 'both', en: 'additionally, in addition', hi: 'अतिरिक्त रूप से', synonyms: 'zudem, außerdem', antonyms: null, ex: 'Zusätzlich wurden Interviews mit Experten geführt.', exEn: 'Additionally, interviews with experts were conducted.', exHi: 'Atirikt roop se, experts ke saath interviews kiye gaye.', ex2: 'Zusätzlich zu den quantitativen Daten wurden qualitative Analysen durchgeführt.', ex2En: 'In addition to the quantitative data, qualitative analyses were carried out.', ex2Hi: 'Quantitative data ke atirikt, qualitative analyses kiye gaye.' }
  ],
  grammar: [
    { title: 'Vom Satz zum Diskurs (From Sentence to Discourse)', body: [ 'Sentence → Paragraph → Text → Reader → Discourse. Correct grammar alone does not create good writing — cohesion between sentences and paragraphs is what guides the reader through the argument.' ], hinglish: 'Har sentence sahi hone se text achha nahi ban jaata. C2 par yeh dekha jaata hai ki ek baat doosri se judti hai ya nahi \u2014 aur reader ko kabhi guess na karna pade ki naya paragraph pichhle se kaise juda hai. Isliye markers sirf sajaawat nahi hain; woh reader ko raasta dikhate hain.' },
    { title: 'Arten von Diskursmarkern (Types of Discourse Markers)', body: [ 'Addition (darüber hinaus, ferner, zudem), Contrast (demgegenüber, hingegen, wohingegen), Cause (folglich, daher, infolgedessen), Concession (dennoch, gleichwohl), Conclusion (zusammenfassend, abschließend). Native speakers vary these deliberately rather than repeating one connector.' ], hinglish: 'Markers ko kaam ke hisaab se baant lo \u2014 jodne wale (<b>dar\u00fcber hinaus, ferner, zudem</b>), ulta batane wale (<b>demgegen\u00fcber, hingegen, wohingegen</b>), wajah wale (<b>folglich, daher, infolgedessen</b>), bawajood wale (<b>dennoch, gleichwohl</b>), aur nateeja wale (<b>zusammenfassend, abschlie\u00dfend</b>). Ek hi marker baar-baar mat dohrao. Par matlab chunne ke baad ek cheez zaroor dekho \u2014 woh marker adverb hai ya conjunction, kyunki word order usi se badalta hai.' },
    { title: 'Informationsfluss (Information Flow)', body: [ 'Known Information → New Information → Transition → Reader Orientation. Native speakers avoid abrupt topic changes by signalling how new information relates to what came before.' ], hinglish: 'German mein jaani-pehchaani baat pehle aati hai aur nayi baat baad mein \u2014 isse reader ka dhyaan tootta nahi. Isliye naya paragraph shuru karte waqt pehle pichhli baat se ek kadi jodo, phir nayi baat rakho. Achanak topic badalne se text bikhra hua lagta hai, chahe har sentence sahi ho.' },
    { title: 'Register-spezifische Diskursorganisation (Register-Specific Discourse Organization)', body: [ 'Har register ke apne markers hain. Academic writing mein <b>dar\u00fcber hinaus</b>, <b>folglich</b>, <span class="de">zusammenfassend l\u00e4sst sich feststellen, dass \u2026</span>. Scientific texts mein kram batane wale \u2014 <b>zun\u00e4chst</b>, <b>im Folgenden</b>, <b>darauf aufbauend</b>, <b>abschlie\u00dfend</b>. News mein <b>allerdings</b> aur <b>unterdessen</b>. Aur formal/political writing mein <span class="de">vor diesem Hintergrund</span> aur <b>dementsprechend</b>. Yeh sab position 1 lete hain, isliye inke turant baad verb aata hai.' ], hinglish: 'Har register ke apne markers hain. Academic writing mein <b>dar\u00fcber hinaus</b>, <b>folglich</b>, <span class="de">zusammenfassend l\u00e4sst sich feststellen, dass \u2026</span>. Scientific texts mein kram batane wale \u2014 <b>zun\u00e4chst</b>, <b>im Folgenden</b>, <b>darauf aufbauend</b>, <b>abschlie\u00dfend</b>. News mein <b>allerdings</b> aur <b>unterdessen</b>. Aur formal/political writing mein <span class="de">vor diesem Hintergrund</span> aur <b>dementsprechend</b>. Yeh sab position 1 lete hain, isliye inke turant baad verb aata hai.' },
    { title: 'Argumentative Essays', body: [ 'Claim → Evidence → Counterargument → Evaluation → Conclusion. Each stage uses authentic discourse markers to guide the reader from the initial claim to a well-supported conclusion.' ], hinglish: 'Argumentative essay paanch stage mein chalta hai \u2014 apni baat, saboot, doosri taraf ki baat, dono ka mulyankan, aur nateeja. Har stage ka apna marker hota hai, aur wahi reader ko batata hai ki ab kaunsa hissa shuru ho raha hai. Counterargument aur evaluation aksar chhoot jaate hain, aur unke bina essay adhoora lagta hai.' },
    {
      title: 'Drei Typen \u2014 drei Wortstellungen',
      body: [
        'The markers in this chapter look interchangeable but split into three grammatical types, and each demands a different word order. This is where nearly every C2 cohesion error actually is.',
        'Note especially the pairs that differ only by type: <b>hingegen</b> is an adverb, <b>wohingegen</b> a conjunction.'
      ],
      table: {
        head: ['Type', 'Word order', 'Members'],
        rows: [
          ['adverb in position 1', '<b>verb second</b>, no comma after the marker', '<span class="de">folglich, daher, dennoch, gleichwohl, nichtsdestotrotz, hingegen, demgegen\u00fcber, dar\u00fcber hinaus, ferner, zudem</span>'],
          ['adverb in the middle field', 'normal order, marker inside', '<span class="de">Die Kosten sind <b>allerdings</b> gestiegen.</span>'],
          ['subordinating conjunction', '<b>verb last</b>', '<span class="de">wohingegen, obwohl, w\u00e4hrend, sofern</span>'],
          ['coordinating conjunction', 'no position \u2014 normal order', '<span class="de">aber, denn, sondern</span>'],
          ['frame + dass', '<b>dass</b>-clause, verb last', '<span class="de">Zusammenfassend l\u00e4sst sich feststellen, <b>dass</b> \u2026</span>']
        ]
      },
      note: 'Two rules that catch most errors: no comma after a position-1 marker, and never double a relationship \u2014 <i>obwohl \u2026 dennoch</i> marks the concession twice.',
      hinglish: 'Is chapter ke markers dekhne mein ek jaise lagte hain par teen grammatical types mein bantte hain, aur har type ka word order alag hai \u2014 asli C2 galtiyan yahin hoti hain. Zyada-tar markers <b>adverb</b> hain (<b>folglich, daher, dennoch, nichtsdestotrotz, dar\u00fcber hinaus, ferner</b>), isliye position 1 par aayein to verb turant baad aata hai aur beech mein comma nahi lagta: <span class="de">Folglich <b>sind</b> die Kosten gesunken.</span> Kuch <b>subordinating conjunctions</b> hain (<b>wohingegen, obwohl, w\u00e4hrend</b>), aur inke clause ka verb <b>end</b> mein jaata hai. Aur <b>aber, denn, sondern</b> koi position hi nahi lete. Ek jodi khaas dhyaan maangti hai \u2014 <b>hingegen</b> adverb hai par <b>wohingegen</b> conjunction, isliye dono ka word order ulta hai. Aur relationship do baar mat mark karo: <i>obwohl \u2026 dennoch</i> galat hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Function mapped to a typical marker and its register.' ], table: { head: ['Function', 'Typical Marker', 'Register'], rows: [ ['Addition', 'Darüber hinaus', 'Academic'], ['Contrast', 'Demgegenüber', 'Scientific'], ['Cause', 'Folglich', 'Academic'], ['Concession', 'Nichtsdestotrotz', 'Journalism'], ['Reformulation', 'Anders ausgedrückt', 'Professional'], ['Conclusion', 'Zusammenfassend', 'All formal registers'] ] }, hinglish: 'Function, marker aur register ka table \u2014 par marker chunne ke baad neeche wala block dekho, kyunki word order uske type se tay hota hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Every one of these is word order or punctuation \u2014 the syntax each marker type demands. Choosing the right marker is useless if the sentence around it breaks.' ], mistakes: [
      { wrong: 'Folglich die Kosten sind gesunken.', right: 'Folglich sind die Kosten gesunken.', why: '<b>folglich</b> is an adverb in position 1, so the verb must follow it directly \u2014 before the subject.' },
      { wrong: 'Dar\u00fcber hinaus, zeigt die Studie weitere Effekte.', right: 'Dar\u00fcber hinaus zeigt die Studie weitere Effekte.', why: 'German puts no comma after a position-1 discourse marker \u2014 the verb follows immediately.' },
      { wrong: 'Die Kosten steigen, wohingegen sinkt die Qualit\u00e4t.', right: 'Die Kosten steigen, wohingegen die Qualit\u00e4t sinkt.', why: '<b>wohingegen</b> is a subordinating conjunction, not an adverb \u2014 so its verb goes to the END of the clause. Compare <b>hingegen</b>, which is an adverb.' },
      { wrong: 'Nichtsdestotrotz die Ergebnisse bleiben eindeutig.', right: 'Nichtsdestotrotz bleiben die Ergebnisse eindeutig.', why: 'Like <i>dennoch</i> and <i>gleichwohl</i>, <b>nichtsdestotrotz</b> is an adverb \u2014 position 1, then the verb.' },
      { wrong: 'Obwohl die Daten begrenzt sind, dennoch sind die Befunde klar.', right: 'Obwohl die Daten begrenzt sind, sind die Befunde klar.', why: '<b>obwohl</b> already carries the concession \u2014 adding <b>dennoch</b> marks the same relationship twice.' },
      { wrong: 'Zusammenfassend l\u00e4sst sich feststellen, die Entwicklung ist positiv.', right: 'Zusammenfassend l\u00e4sst sich feststellen, dass die Entwicklung positiv ist.', why: '<b>l\u00e4sst sich feststellen</b> always opens a <b>dass</b>-clause, and the verb then goes to the end.' }
    ], hinglish: 'Chhe ki chhe galtiyan word order ya comma ki hain \u2014 har marker type ka apna syntax hai. Sahi marker chun lena bekaar hai agar uske aas-paas ka sentence toot jaaye.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What relationship exists? Addition? Contrast? Cause? Concession? Conclusion? Choose the most natural discourse marker for the register.' ], note: 'Memory trick: imagine every paragraph is a train carriage. Grammar builds each carriage. Discourse markers are the couplings that connect them. Without strong couplings, the train falls apart. Native speakers don\'t merely build excellent sentences — they ensure the entire train reaches its destination smoothly.', hinglish: 'Pehle tay karo ki do baaton ka rishta kya hai \u2014 jod, ulta, wajah, bawajood, ya nateeja. Phir us group se marker chuno aur register dekh lo. Aur likhne ke baad do cheezein check karo: marker ke baad verb sahi jagah par hai (adverb ho to turant, conjunction ho to end mein), aur marker ke baad comma nahi laga?' }
  ],
  reading: {
    title: 'Essay: Warum vergessen wir Sprachen wieder, die wir gelernt haben?',
    titleEn: 'Reading A — Essay: why do we forget languages we once learned?',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Datenlage', role: 'plain', en: 'data situation', hi: 'डेटा स्थिति', type: 'Noun · fem.' },
      { w: 'zum', role: 'plain', en: 'on the', hi: 'के बारे में', type: 'Contraction · zu dem' },
      { w: 'sprachlichen', role: 'plain', en: 'linguistic', hi: 'भाषाई', type: 'Adjective · Dat.' },
      { w: 'Vergessen', role: 'plain', en: 'forgetting (Satzende)', hi: 'भूलने की प्रक्रिया (Satzende)', type: 'Noun · neut.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb (Präsens)' },
      { w: 'eindeutig', role: 'plain', en: 'clear (Satzende)', hi: 'स्पष्ट (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Darüber', role: 'r-diskursmarker', en: 'about that (part of the fixed academic addition phrase "darüber hinaus")', hi: '', type: 'Adverb' },
      { w: 'hinaus', role: 'r-diskursmarker', en: 'moreover (Satzende, completing "darüber hinaus")', hi: 'इसके अलावा (Satzende)', type: 'Adverb (Satzende)', why: '"Darüber hinaus" is a precise academic addition marker, more formal and varied than repeating "außerdem" (this chapter).' },
      { w: 'zeigt', role: 'plain', en: 'shows', hi: 'दिखाती है', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Studie', role: 'plain', en: 'study (Satzende)', hi: 'अध्ययन (Satzende)', type: 'Noun · fem.' },
      { w: 'signifikante', role: 'plain', en: 'significant', hi: 'महत्वपूर्ण', type: 'Adjective · Akk.' },
      { w: 'Unterschiede', role: 'plain', en: 'differences (Satzende)', hi: 'अंतर (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'के बीच', type: 'Präposition · Dat.' },
      { w: 'aktiv', role: 'plain', en: 'actively', hi: 'सक्रिय रूप से', type: 'Adverb' },
      { w: 'genutzten', role: 'plain', en: 'used', hi: 'इस्तेमाल की गई', type: 'Partizip II · Dat.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'verdrängten', role: 'plain', en: 'suppressed', hi: 'दबाई गई', type: 'Partizip II · Dat.' },
      { w: 'Sprachen', role: 'plain', en: 'languages (Satzende)', hi: 'भाषाओं (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Demgegenüber', role: 'r-diskursmarker', en: 'in contrast (Satzende, precise contrast marker)', hi: 'इसके विपरीत (Satzende)', type: 'Adverb (Satzende)' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'रहती है', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Frage', role: 'plain', en: 'question (Satzende)', hi: 'सवाल (Satzende)', type: 'Noun · fem.' },
      { w: 'nach', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Präposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'möglichen', role: 'plain', en: 'possible', hi: 'संभावित', type: 'Adjective · Dat.' },
      { w: 'Umkehrbarkeit', role: 'plain', en: 'reversibility (Satzende)', hi: 'प्रतिवर्तनीयता (Satzende)', type: 'Noun · fem.' },
      { w: 'unklar', role: 'plain', en: 'unclear (Satzende)', hi: 'अस्पष्ट (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The data situation on linguistic forgetting is clear. Moreover, the study shows significant differences between actively used and suppressed languages. In contrast, the question of possible reversibility remains unclear.',
    comprehension: [
      { q: 'Welche Funktion hat "darüber hinaus" im Text?', options: ['Addition — es fügt eine weitere Information hinzu', 'Contrast — es widerspricht der vorherigen Aussage', 'Conclusion — es fasst zusammen'], answer: 0 },
      { q: 'Welche Funktion hat "demgegenüber"?', options: ['Contrast — es signalisiert eine Gegenüberstellung', 'Addition — es fügt hinzu', 'Cause — es zeigt eine Ursache'], answer: 0 },
      { q: 'Worum geht es in diesem Essay?', options: ['Warum wir gelernte Sprachen wieder vergessen', 'Wie man eine neue Sprache lernt', 'Die Geschichte der deutschen Sprache'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wissenschaftlicher Artikel', titleEn: 'Reading B — Scientific article',
    tokens: [
      { w: 'Zunächst', role: 'r-diskursmarker', en: 'first (scientific structuring marker, revising research-article organization, Satzende position varies)', hi: '(scientific structuring marker)', type: 'Adverb' },
      { w: 'wurden', role: 'plain', en: 'were', hi: 'gaye the', type: 'Verb (Präteritum, Passiv)' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Daten', role: 'plain', en: 'data', hi: 'data', type: 'Noun · plural' },
      { w: 'erhoben', role: 'plain', en: 'collected (Satzende)', hi: 'ikattha kiya gaya (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Darauf', role: 'r-diskursmarker', en: 'building on this (part of the fixed scientific transition phrase)', hi: '(scientific transition)', type: 'Pronominaladverb' },
      { w: 'aufbauend', role: 'r-diskursmarker', en: 'building on (Satzende, completing "darauf aufbauend" — a scientific progression marker)', hi: '(Satzende, scientific progression)', type: 'Partizip I (Satzende)' },
      { w: 'wurde', role: 'plain', en: 'was', hi: 'gaya tha', type: 'Verb (Präteritum, Passiv)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Analyse', role: 'plain', en: 'analysis (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'durchgeführt', role: 'plain', en: 'carried out (Satzende)', hi: 'kiya gaya (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'First, the data were collected. Building on this, the analysis was carried out.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_010_L001', speaker: 'Gudrun', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Mieten steigen seit Jahren, folglich ziehen viele Familien an den Stadtrand.', en: 'Timo, rents have been rising for years, consequently many families are moving to the outskirts.' },
      { id: 'C2_010_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Trotzdem bleibt die Nachfrage im Zentrum hoch — wie erklärst du das?', en: 'Nevertheless demand in the center stays high — how do you explain that?' },
      { id: 'C2_010_L003', speaker: 'Gudrun', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Eben deshalb entstehen Konflikte zwischen Investoren und Mietervereinen.', en: 'Precisely for that reason conflicts arise between investors and tenant associations.' },
      { id: 'C2_010_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Diesen Widerspruch sollten wir im Essay stärker herausarbeiten.', en: 'We should bring out this contradiction more strongly in the essay.' }
    ],
    transcript: 'Timo, die Mieten steigen seit Jahren, folglich ziehen viele Familien an den Stadtrand. Trotzdem bleibt die Nachfrage im Zentrum hoch — wie erklärst du das? Eben deshalb entstehen Konflikte zwischen Investoren und Mietervereinen. Diesen Widerspruch sollten wir im Essay stärker herausarbeiten.',
    translation: 'Timo, rents have been rising for years, consequently many families are moving to the outskirts. Nevertheless demand in the center stays high — how do you explain that? Precisely for that reason conflicts arise between investors and tenant associations. We should bring out this contradiction more strongly in the essay.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Mieten' },
      { w: 'steigen' },
      { w: 'seit' },
      { w: 'Jahren' },
      { w: ',', plain: true },
      { w: 'folglich' },
      { w: 'ziehen' },
      { w: 'viele' },
      { w: 'Familien' },
      { w: 'an' },
      { w: 'den' },
      { w: 'Stadtrand' },
      { w: '.', plain: true },
      { w: 'Trotzdem' },
      { w: 'bleibt' },
      { w: 'die' },
      { w: 'Nachfrage' },
      { w: 'im' },
      { w: 'Zentrum' },
      { w: 'hoch' },
      { w: '—', plain: true },
      { w: 'wie' },
      { w: 'erklärst' },
      { w: 'du' },
      { w: 'das' },
      { w: '?', plain: true },
      { w: 'Eben' },
      { w: 'deshalb' },
      { w: 'entstehen' },
      { w: 'Konflikte' },
      { w: 'zwischen' },
      { w: 'Investoren' },
      { w: 'und' },
      { w: 'Mietervereinen' },
      { w: '.', plain: true },
      { w: 'Diesen' },
      { w: 'Widerspruch' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'im' },
      { w: 'Essay' },
      { w: 'stärker' },
      { w: 'herausarbeiten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Folge zieht Gudrun aus den steigenden Mieten?', qEn: 'What consequence does Gudrun draw from rising rents?', options: ['die Mieten sinken wieder', 'viele Familien ziehen an den Stadtrand', 'niemand zieht mehr um', 'die Investoren verschwinden'], optionsEn: ['the rents are falling again', 'many families are moving to the outskirts', 'nobody moves house any more', 'the investors disappear'], answer: 1,
        explain: '"Folglich ziehen viele Familien an den Stadtrand."' },
      { q: 'Was will Timo im Essay stärker herausarbeiten?', qEn: 'What does Timo want to strengthen in the essay?', options: ['die Einleitung', 'den Widerspruch zwischen hoher Nachfrage und steigenden Mieten', 'die Statistik', 'das Fazit'], optionsEn: ['the introduction', 'the contradiction between high demand and rising rents', 'the statistics', 'the conclusion'], answer: 1,
        explain: '"Diesen Widerspruch sollten wir im Essay stärker herausarbeiten."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, warum die Nachfrage im Zentrum trotzdem hoch bleibt.", taskEn: "Timo asks why demand in the centre nevertheless stays high.", de: "Die Mieten steigen, dennoch bleibt die Nachfrage im Zentrum hoch.", en: "Rents are rising, nevertheless demand in the centre stays high." },
    { task: "Timo fragt, warum immer mehr Familien wegziehen.", taskEn: "Timo asks why more and more families are moving away.", de: "Die Mieten steigen seit Jahren, folglich ziehen viele Familien an den Stadtrand.", en: "Rents have risen for years, consequently many families move to the outskirts." },
    { task: "Halte den Einstieg deines Vortrags.", taskEn: "Deliver the opening of your talk.", de: "Zunächst skizziere ich die Lage, sodann die Befunde, abschließend offene Fragen.", en: "First I'll sketch the situation, then the findings, finally open questions." },
    { task: "Stell zwei Stadtteile im Vortrag gegenüber.", taskEn: "Contrast two districts in your talk.", de: "Im Zentrum steigen die Preise; demgegenüber stagnieren sie am Rand.", en: "In the centre prices rise; by contrast they stagnate on the outskirts." },
    { task: "Der Absatz hat dreimal „deshalb“. Was setzt du ein?", taskEn: "The paragraph has three 'deshalb's. What do you use instead?", de: "Einmal daher, einmal infolgedessen, einmal mithin.", en: "Once 'daher', once 'infolgedessen', once 'mithin'." }
  ],
  writing: {
    prompt: 'TASK 1 — Cohesion rewrite (150 words): Rewrite a poorly connected essay using advanced discourse markers. Explain every improvement.\n\nTASK 2 — Academic reorganization (150 words): Reorganize an academic article by improving cohesion and logical progression.\n\nTASK 3 — Essay (600 words): Write a C2 argumentative essay demonstrating sophisticated use of adverbial clauses and discourse markers across multiple registers.',
    starters: ['Darüber hinaus...', 'Demgegenüber steht...', 'Zusammenfassend lässt sich feststellen, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Diskursmarker als Kohäsionswerkzeuge...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which discourse marker most precisely signals a scientific contrast, avoiding overuse of "aber"?', options: ['demgegenüber', 'aber', 'und'], answer: 0, explain: '"demgegenüber" is a precise academic/scientific contrast marker, more formal and varied than the basic "aber".' },
    gap: { sentence: ['Die Ergebnisse sind eindeutig; ', ' erübrigt sich eine weitere Diskussion.'], gaps: [ { answer: 'daher', accepts: ['daher', 'folglich', 'somit'] } ], explain: '"daher" (or "folglich"/"somit") signals a logical consequence, more precise than repeating "deshalb".' },
    match: { q: 'Match each discourse marker to its function.', pairs: [ { noun: 'darüber hinaus', art: 'Addition' }, { noun: 'demgegenüber', art: 'Contrast' }, { noun: 'folglich', art: 'Cause/Consequence' }, { noun: 'zusammenfassend', art: 'Conclusion' } ] },
    builder: { target: 'Build: "Moreover, the study shows further results." (academic addition)', bank: ['Darüber', 'hinaus', 'zeigt', 'die', 'Studie', 'weitere', 'Ergebnisse', '.'], answer: ['Darüber', 'hinaus', 'zeigt', 'die', 'Studie', 'weitere', 'Ergebnisse', '.'], roles: { 'Darüber': 'r-diskursmarker', 'hinaus': 'r-diskursmarker' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie zeigt positive Ergebnisse. Außerdem zeigt die zweite Studie auch positive Ergebnisse. Außerdem bestätigt die dritte Studie dies.', right: 'Die Studie zeigt positive Ergebnisse. Ebenso bestätigt die zweite Studie dies. Zusammenfassend lässt sich feststellen, dass die Ergebnisse konsistent sind.', explain: 'Repeating "außerdem" three times is a classic C2 mistake; varying markers (ebenso, zusammenfassend) and adding a proper conclusion improves cohesion.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for discourse markers in this chapter?', options: ['Every paragraph is a train carriage; discourse markers are the couplings connecting them', 'Discourse markers are optional decoration with no real function', 'Conjunctions and discourse markers are exactly the same thing'], answer: 0, explain: 'Grammar builds the carriages; discourse markers are the couplings that let the whole train run smoothly to its destination.' },
    { q: 'What is a classic C2-level mistake with discourse markers?', options: ['Repeating the same connector (deshalb, außerdem) throughout a text', 'Using too many different discourse markers', 'Never using any discourse markers at all'], answer: 0, explain: 'Native writers vary discourse markers deliberately; repetition signals limited stylistic range.' },
    { q: 'Which marker is a precise academic contrast marker, more formal than "aber"?', options: ['demgegenüber', 'und', 'weil'], answer: 0, explain: '"demgegenüber" precisely signals contrast in academic and scientific register.' },
    { q: 'Why do native speakers avoid abrupt topic changes between paragraphs?', options: ['They disorient the reader and break textual cohesion', 'Grammar rules forbid new topics', 'Paragraphs must always be the same length'], answer: 0, explain: 'The known-information → new-information → transition flow guides the reader smoothly through the text.' },
    { q: 'What is the true focus of this chapter, according to the theme?', options: ['Text architecture, rhetorical flow, cohesion, and pragmatic meaning — not conjunction formation', 'Learning new conjunctions like weil, obwohl, wenn', 'Comma placement rules in subordinate clauses'], answer: 0, explain: 'This chapter builds on already-mastered grammar to teach native-level discourse organization.' }
  ],
  takeaways: [
    { c: 'r-zugverbindung-metapher', html: 'Every paragraph is a train carriage — discourse markers are the couplings that connect them into a smoothly flowing text.' },
    { c: 'r-diskursmarker', html: 'Vary discourse markers deliberately (addition, contrast, cause, concession, conclusion) instead of repeating "deshalb" or "außerdem".' },
    { c: 'r-diskursmarker', html: 'Register shapes marker choice: academic (darüber hinaus, folglich), scientific (zunächst, darauf aufbauend), journalism (allerdings, indessen), political (vor diesem Hintergrund, nichtsdestotrotz).' },
    { c: 'r-diskursmarker', html: 'Known-information → new-information → transition → reader orientation prevents abrupt, disorienting topic changes.' }
  ],
  revisionTips: [
    'Take one paragraph you\'ve written and replace every "deshalb"/"außerdem"/"aber" with a more precise, varied discourse marker.',
    'Read one academic essay and label every discourse marker by function: addition, contrast, cause, concession, or conclusion.',
    'Write one argumentative paragraph following claim → evidence → counterargument → evaluation → conclusion, using an authentic marker at each stage.'
  ]
};
window.CHAPTER = CHAPTER;
