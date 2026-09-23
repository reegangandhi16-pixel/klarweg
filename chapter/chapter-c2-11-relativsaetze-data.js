/* KLARWEG CHAPTER DATA — C2 · Chapter 11
   "Relativsätze" (C2) — native-level mastery of relative clauses as
   tools for information packaging, stylistic variation, sentence
   compression, and register-appropriate written expression. NOT
   relative pronoun formation, case assignment, or basic word order
   (already mastered A2/B2, C1 Ch20/21). Structural chapter: no
   standalone vocabulary list uploaded — vocabulary section instead
   drills the authentic academic/scientific/journalistic/legal
   relative-clause constructions taught in Parts 5-7 of the brief.
   Dialogue: Adelheid and Timo ONLY. */
const CHAPTER = {
  id: 'c2-11-relativsaetze',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 11,
  title: 'Relativsätze',
  titleEn: 'Relative clauses at native level',
  description: 'The main clause is the box. The relative clause is a carefully wrapped note placed inside. C2 mastery means knowing exactly how much belongs inside, how much belongs outside, and how to keep the package elegant.',
  xp: 1450, time: 145, difficulty: 'Mastery',
  nextChapter: { number: 12, title: 'Passiv', titleEn: 'The passive voice at native level' , href: 'chapter-c2-12-passiv.html' },
  prevChapter: { number: 10, title: 'Adverbialsätze & Diskursmarker', titleEn: 'Adverbial clauses & discourse markers', href: 'chapter-c2-10-adverbialsaetze-und-diskursmarker.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every sentence is a <em>gift box</em> — and the relative clause is the note inside.',
    intro: 'Editing a university dissertation, Adelheid isn\'t convinced by a theory that the market regulates itself, and Timo points to the three-country data behind it — packaging every relative clause as precisely and elegantly as a note inside a gift box.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers pack information into relative clauses versus compressing it into participial or nominal structures'],
    scene: 'Überarbeitung einer Universitätsdissertation',
    femaleSpeakers: ['Adelheid'],
    dialogue: [
      { speaker: 'Adelheid', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Theorie', role: 'r-subject', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'wonach', role: 'r-subject', en: 'according to which', hi: 'जिसके अनुसार', pron: 'vo-NAHKH', type: 'Relativpronomen · da-Kompositum', why: 'wonach = according to which, a prepositional relative pronoun for abstract antecedents (this chapter).', ex: 'die Theorie, wonach der Markt sich selbst reguliert' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Markt', role: 'r-subject', en: 'market', hi: 'बाज़ार', pron: 'markt', type: 'Noun · masc.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'selbst', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zelpst', type: 'Pronoun · emphatic' },
        { w: 'reguliert', role: 'r-verb', en: 'regulates', hi: 'नियंत्रित करता है', pron: 'ray-gu-LEERT', type: 'Verb · regulieren (Satzende)' },
        { w: ',', plain: true },
        { w: 'überzeugt', role: 'r-verb', en: 'convinces', hi: 'आश्वस्त करता है', pron: 'ü-ber-TSOYKT', type: 'Verb · überzeugen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'The theory, according to which the market regulates itself, does not convince me.', hi: 'Woh siddhaant, jiske anusaar baazaar khud ko niyantrit karta hai, mujhe aashvast nahi karta.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'डेटा', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'anhand', role: 'r-subject', en: 'on the basis of', hi: 'के आधार पर', pron: 'AN-hant', type: 'Preposition (part of anhand derer)' },
        { w: 'derer', role: 'r-subject', en: 'which', hi: 'जिनके', pron: 'DAY-rer', type: 'Relativpronomen · genitive plural', why: 'anhand derer = on the basis of which, a formal genitive relative construction (this chapter).', ex: 'die Daten, anhand derer wir das prüfen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'prüfen', role: 'r-verb', en: 'check', hi: 'जांचते हैं', pron: 'PRÜ-fen', type: 'Verb · prüfen (Satzende)' },
        { w: ',', plain: true },
        { w: 'stammen', role: 'r-verb', en: 'come', hi: 'आते हैं', pron: 'SHTA-men', type: 'Verb · stammen' },
        { w: 'aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'drei', role: 'r-dativ', en: 'three', hi: 'तीन', pron: 'dry', type: 'Number' },
        { w: 'Ländern', role: 'r-dativ', en: 'countries (dat.)', hi: 'देशों से', pron: 'LEN-dern', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'The data, on the basis of which we check that, come from three countries.', hi: 'Woh data, jinke aadhaar par hum yeh jaanchte hain, teen deshon se aate hain.' },
      { speaker: 'Adelheid', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Modell', role: 'r-subject', en: 'model', hi: 'मॉडल', pron: 'mo-DEL', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'welches', role: 'r-subject', en: 'which', hi: 'जो', pron: 'VEL-khes', type: 'Relativpronomen · neuter', why: 'welches = which, a more formal alternative to das in written register (this chapter).', ex: 'das Modell, welches wir entwickelt haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'entwickelt', role: 'r-verb', en: 'developed', hi: 'विकसित', pron: 'ent-VI-kelt', type: 'Partizip II' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'bleibt', role: 'r-verb', en: 'remains', hi: 'बना रहता है', pron: 'BLYPT', type: 'Verb · bleiben' },
        { w: 'umstritten', role: 'r-akkusativ', en: 'controversial', hi: 'विवादित', pron: 'um-SHTRI-ten', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The model, which we have developed, remains controversial.', hi: 'Woh model, jo humne vikasit kiya hai, vivaadit bana rehta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'deren', role: 'r-subject', en: 'whose', hi: 'जिसके', pron: 'DAY-ren', type: 'Relativpronomen · genitive (recycled B2/C1)' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zitieren', role: 'r-verb', en: 'quote', hi: 'उद्धृत करते हैं', pron: 'tsi-TEE-ren', type: 'Verb · zitieren (Satzende, recycled C1)' },
        { w: ',', plain: true },
        { w: 'stützt', role: 'r-verb', en: 'supports', hi: 'समर्थन करता है', pron: 'SHTÜTST', type: 'Verb · stützen' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'Kritik', role: 'r-akkusativ', en: 'criticism', hi: 'आलोचना', pron: 'kri-TEEK', type: 'Noun · fem. (recycled C2)' },
        { w: '.', plain: true }
      ], en: 'The study, whose results we quote, supports our criticism.', hi: 'Woh adhyayan, jiske parinaam hum uddhrit karte hain, hamaari aalochana ka samarthan karta hai.' },
      { speaker: 'Adelheid', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'dem', role: 'r-subject', en: 'according to which', hi: 'जिसके अनुसार', pron: 'daym', type: 'Relativpronomen · dative' },
        { w: 'zufolge', role: 'r-subject', en: 'according to', hi: 'के अनुसार', pron: 'tsoo-FOL-guh', type: 'Preposition + dative (recycled C1)', why: 'dem zufolge = according to which, a formal report structure using a dative preposition after its relative pronoun (this chapter).', ex: 'der Bericht, dem zufolge die Reform scheiterte' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reform', role: 'r-subject', en: 'reform', hi: 'सुधार', pron: 're-FORM', type: 'Noun · fem. (recycled C2)' },
        { w: 'scheiterte', role: 'r-verb', en: 'failed', hi: 'विफल हुआ', pron: 'SHY-ter-tuh', type: 'Verb · scheitern (Präteritum, Satzende)' },
        { w: ',', plain: true },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'था', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'sehr', role: 'r-akkusativ', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'umstritten', role: 'r-akkusativ', en: 'controversial', hi: 'विवादित', pron: 'um-SHTRI-ten', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The report, according to which the reform failed, was very controversial.', hi: 'Woh report, jiske anusaar sudhaar viphal hua, bahut vivaadit tha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'denke', role: 'r-verb', en: 'think', hi: 'सोचता हूँ', pron: 'DEN-kuh', type: 'Verb · denken (ich)' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: 'Perspektiven', role: 'r-akkusativ', en: 'perspectives', hi: 'दृष्टिकोण', pron: 'pair-SPEK-tee-ven', type: 'Noun · plural (recycled C2)' },
        { w: 'berücksichtigen', role: 'r-verb', en: 'consider', hi: 'ध्यान में रखना', pron: 'be-RÜK-zikh-ti-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I think we should consider all perspectives.', hi: 'Mujhe lagta hai ki humein sabhi drishtikonon ko dhyaan mein rakhna chahiye.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every sentence is a <span class="de r-geschenkbox-metapher">gift box</span> — the relative clause is the carefully wrapped note placed inside.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is RELATIVSÄTZE at C2 level — native-level mastery of relative clauses as tools for INFORMATION PACKAGING, STYLISTIC VARIATION, SENTENCE COMPRESSION, and register-appropriate expression, NOT relative pronoun formation, case assignment, or basic word order (already fully mastered A2/B2 and C1 Ch20/21). Covered: restrictive relative clauses (identification: der Student, der neben mir sitzt) vs. non-restrictive/explanatory relative clauses (additional information: die Studenten, die die Prüfung bestanden haben); the compression scale from relative clause → participial attribute → nominal expression → academic reformulation, and when compression improves readability; embedded/layered relative clauses and the processing-difficulty tradeoff of nesting; academic relative structures (die Untersuchung, die...; die Ergebnisse, auf denen...; die Theorie, wonach...; die Methode, mittels derer...); scientific publication language (das Verfahren, das...; die Daten, anhand derer...; das Modell, welches...; die Studie, deren Ergebnisse...); journalism/professional structures (der Bericht, dem zufolge...; die Entscheidung, die...; die Organisation, deren...); and literary long relative chains for narrative rhythm and stylistic elegance. The most important things to catch: overusing short, choppy relative clauses instead of varying with participial/nominal compression; excessive nesting that overwhelms the reader; poor information order (burying the main point under an overloaded relative clause); awkward English-style translation of relative structures; unnecessary repetition of relative pronouns across a paragraph; choosing a stylistic register mismatched to the text (a legal-style "dem zufolge" construction in casual prose, or vice versa). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag overloaded/overlong relative clauses that should be compressed into participial or nominal structures; flag excessive embedding/nesting; flag poor information order; flag register-mismatched relative constructions. Do NOT flag basic relative pronoun/case selection as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around information packaging/register). If none: <li>No errors — well done.</li> 3) <p><b>Gift-box check:</b> one sentence on whether the learner keeps each sentence\'s "package" elegant — the right amount of information inside the relative clause, not overloaded.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — your sentences pack information elegantly, like well-wrapped gift boxes. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Density Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: the main clause is the box, and the relative clause is the note inside — don\'t overload the package.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: ',', plain: true }, { w: 'deren', role: 'r-relativsatz-akademisch' }, { w: 'Ergebnisse', role: 'r-relativsatz-akademisch' }, { w: 'signifikant', role: 'plain' }, { w: 'sind', role: 'plain' }, { w: ',', plain: true }, { w: 'überzeugt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every sentence is a gift box, and the relative clause is the note wrapped carefully inside.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Adelheid and Timo edit a dissertation, improving information packaging and compression rather than grammar.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic academic, scientific, journalistic, and legal relative-clause constructions — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master restrictive vs. non-restrictive relatives, compression, embedding, and register-based selection.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic journal article, scientific publication, and literary excerpt for relative clause style.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify relative clauses, information hierarchy, and stylistic effects in a lecture, conference, and documentary.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice summarizing, reformulating, and presenting with sophisticated relative structures.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Upgrade simple sentences, transform relatives into participial/nominal structures, and write a 600-word academic essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill restrictive vs. non-restrictive analysis, compression, participial transformation, and register selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1450 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter relative-clause constructions with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Compression, information packaging, and register selection drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Information Packaging Model, Density Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Studie, deren Ergebnisse signifikant sind, überzeugt.', text: 'Use an academic genitive relative to pack a supporting detail elegantly' },
    { de: 'Das Verfahren, anhand dessen die Daten ausgewertet wurden, ...', text: 'Choose precise scientific relative constructions over generic ones' },
    { de: 'Der Bericht, dem zufolge die Zahlen gestiegen sind, ...', text: 'Use journalistic reporting relatives naturally' },
    { de: 'Die durchgeführte Untersuchung...', text: 'Compress a relative clause into a participial attribute when it improves readability' },
    { de: 'Jeder Satz ist eine Geschenkbox.', text: 'Understand the chapter\'s core "gift box" metaphor for information packaging' }
  ],
  vocab: [
    { de: 'die Untersuchung, die ...', pos: 'academic relative construction', level: 'C2', register: 'academic', en: 'the investigation, which ...', hi: 'जाँच, जो ...', synonyms: 'die Studie, die ...', antonyms: null, ex: 'Die Untersuchung, die im letzten Jahr durchgeführt wurde, liefert neue Erkenntnisse.', exEn: 'The investigation, which was carried out last year, provides new insights.', exHi: 'Jaanch, jo pichhle saal ki gayi thi, naye insights deti hai.', ex2: 'Die Untersuchung, die zahlreiche Kritikpunkte aufwarf, wurde dennoch veröffentlicht.', ex2En: 'The investigation, which raised numerous points of criticism, was nevertheless published.', ex2Hi: 'Jaanch, jisne kai aalochanaayein uthaayin, fir bhi prakaashit hui.' },
    { de: 'die Ergebnisse, auf denen ...', pos: 'academic relative construction (Dat. + auf)', level: 'C2', register: 'academic', en: 'the results, on which ...', hi: 'परिणाम, जिन पर ...', synonyms: null, antonyms: null, ex: 'Die Ergebnisse, auf denen diese Theorie beruht, stammen aus mehreren Ländern.', exEn: 'The results, on which this theory is based, come from several countries.', exHi: 'Parinaam, jin par yeh theory aadhaarit hai, kai deshon se aaye hain.', ex2: 'Die Ergebnisse, auf denen die Prognose aufbaut, sind noch vorläufig.', ex2En: 'The results, on which the forecast builds, are still preliminary.', ex2Hi: 'Parinaam, jin par poorvaanumaan banata hai, abhi bhi anantim hain.' },
    { de: 'die Theorie, wonach ...', pos: 'academic relative construction', level: 'C2', register: 'academic', en: 'the theory, according to which ...', hi: 'सिद्धांत, जिसके अनुसार ...', synonyms: 'die Theorie, der zufolge ...', antonyms: null, ex: 'Die Theorie, wonach Sprache das Denken beeinflusst, wird weiterhin diskutiert.', exEn: 'The theory according to which language influences thought continues to be discussed.', exHi: 'Siddhant, jiske anusaar bhaasha soch ko prabhaavit karti hai, abhi bhi charcha mein hai.', ex2: 'Die Theorie, wonach der Effekt universell ist, konnte nicht bestätigt werden.', ex2En: 'The theory according to which the effect is universal could not be confirmed.', ex2Hi: 'Siddhant, jiske anusaar prabhaav vishwavyaapi hai, sabit nahi ho saka.' },
    { de: 'die Methode, mittels derer ...', pos: 'academic relative construction (Genitiv)', level: 'C2', register: 'academic/formal', en: 'the method, by means of which ...', hi: 'विधि, जिसके माध्यम से ...', synonyms: 'die Methode, mit deren Hilfe ...', antonyms: null, ex: 'Die Methode, mittels derer die Proben analysiert wurden, ist hoch präzise.', exEn: 'The method by means of which the samples were analyzed is highly precise.', exHi: 'Vidhi, jiske madhyam se samples ka vishleshan kiya gaya, bahut sateek hai.', ex2: 'Die Methode, mittels derer der Effekt gemessen wurde, wird im Anhang beschrieben.', ex2En: 'The method by means of which the effect was measured is described in the appendix.', ex2Hi: 'Vidhi, jiske madhyam se prabhaav maapa gaya, appendix mein varnit hai.' },
    { de: 'das Verfahren, das ...', pos: 'scientific relative construction', level: 'C2', register: 'scientific', en: 'the procedure, which ...', hi: 'प्रक्रिया, जो ...', synonyms: 'die Methode, die ...', antonyms: null, ex: 'Das Verfahren, das entwickelt wurde, verbessert die Genauigkeit erheblich.', exEn: 'The procedure that was developed significantly improves accuracy.', exHi: 'Prakriya, jo vikasit ki gayi, satikta ko kaafi behtar banaati hai.', ex2: 'Das Verfahren, das in Abschnitt drei beschrieben wird, basiert auf früheren Arbeiten.', ex2En: 'The procedure described in section three is based on earlier work.', ex2Hi: 'Prakriya, jo section teen mein varnit hai, pehle ke kaam par aadhaarit hai.' },
    { de: 'die Daten, anhand derer ...', pos: 'scientific relative construction (Genitiv)', level: 'C2', register: 'scientific', en: 'the data, on the basis of which ...', hi: 'डेटा, जिसके आधार पर ...', synonyms: 'die Daten, auf deren Grundlage ...', antonyms: null, ex: 'Die Daten, anhand derer die Analyse durchgeführt wurde, stammen aus einer großen Stichprobe.', exEn: 'The data on the basis of which the analysis was carried out come from a large sample.', exHi: 'Data, jiske aadhaar par analysis kiya gaya, ek bade sample se aaya hai.', ex2: 'Die Daten, anhand derer die Hypothese getestet wurde, waren unvollständig.', ex2En: 'The data on the basis of which the hypothesis was tested were incomplete.', ex2Hi: 'Data, jiske aadhaar par hypothesis test kiya gaya, apoorna tha.' },
    { de: 'das Modell, welches ...', pos: 'scientific relative construction', level: 'C2', register: 'scientific/formal', en: 'the model, which ...', hi: 'मॉडल, जो ...', synonyms: 'das Modell, das ...', antonyms: null, ex: 'Das Modell, welches die Wechselwirkungen simuliert, wurde mehrfach validiert.', exEn: 'The model, which simulates the interactions, has been validated multiple times.', exHi: 'Model, jo interactions ko simulate karta hai, kai baar validate kiya gaya hai.', ex2: 'Das Modell, welches auf statistischen Annahmen beruht, hat gewisse Grenzen.', ex2En: 'The model, which is based on statistical assumptions, has certain limitations.', ex2Hi: 'Model, jo statistical dhaarnaon par aadhaarit hai, ki kuch seemaayein hain.' },
    { de: 'die Studie, deren Ergebnisse ...', pos: 'scientific relative construction (Genitiv)', level: 'C2', register: 'scientific/academic', en: 'the study, whose results ...', hi: 'अध्ययन, जिसके परिणाम ...', synonyms: null, antonyms: null, ex: 'Die Studie, deren Ergebnisse signifikant sind, überzeugt die Fachwelt.', exEn: 'The study, whose results are significant, convinces the scientific community.', exHi: 'Adhyayan, jiske parinaam mahatvapoorna hain, vaigyaanik samuday ko convince karta hai.', ex2: 'Die Studie, deren Ergebnisse widersprüchlich ausfielen, wird derzeit wiederholt.', ex2En: 'The study, whose results turned out contradictory, is currently being repeated.', ex2Hi: 'Adhyayan, jiske parinaam vipreet nikle, abhi dohraaya jaa raha hai.' },
    { de: 'der Bericht, dem zufolge ...', pos: 'journalistic relative construction (Dat.)', level: 'C2', register: 'journalism', en: 'the report, according to which ...', hi: 'रिपोर्ट, जिसके अनुसार ...', synonyms: 'der Bericht, laut dem ...', antonyms: null, ex: 'Der Bericht, dem zufolge die Zahlen gestiegen sind, sorgte für Aufsehen.', exEn: 'The report, according to which the numbers have risen, caused a stir.', exHi: 'Report, jiske anusaar ankade badhe hain, hulchul macha di.', ex2: 'Der Bericht, dem zufolge Reformen geplant sind, wurde von der Regierung dementiert.', ex2En: 'The report, according to which reforms are planned, was denied by the government.', ex2Hi: 'Report, jiske anusaar sudhaar ki yojana hai, sarkaar ne khaarij kar diya.' },
    { de: 'die Entscheidung, die ...', pos: 'journalistic/professional relative construction', level: 'C2', register: 'journalism/professional', en: 'the decision, which ...', hi: 'निर्णय, जो ...', synonyms: null, antonyms: null, ex: 'Die Entscheidung, die gestern getroffen wurde, betrifft Tausende Mitarbeiter.', exEn: 'The decision that was made yesterday affects thousands of employees.', exHi: 'Faisla, jo kal liya gaya, hazaaron karmchaariyon ko prabhaavit karta hai.', ex2: 'Die Entscheidung, die viel Kritik hervorrief, wurde inzwischen überarbeitet.', ex2En: 'The decision, which drew much criticism, has since been revised.', ex2Hi: 'Faisla, jisne bahut aalochana bataori, ab tak dobara banaaya gaya hai.' },
    { de: 'die Organisation, deren ...', pos: 'professional relative construction (Genitiv)', level: 'C2', register: 'professional/journalism', en: 'the organization, whose ...', hi: 'संगठन, जिसका ...', synonyms: null, antonyms: null, ex: 'Die Organisation, deren Mitgliederzahl stark gestiegen ist, plant eine Expansion.', exEn: 'The organization, whose membership has grown strongly, is planning an expansion.', exHi: 'Sangathan, jiski sadasya sankhya bahut badhi hai, vistaar ki yojana bana raha hai.', ex2: 'Die Organisation, deren Ziele klar formuliert sind, genießt breite Unterstützung.', ex2En: 'The organization, whose goals are clearly formulated, enjoys broad support.', ex2Hi: 'Sangathan, jiske lakshya spashtha hain, vyapak samarthan praapt karta hai.' },
    { de: 'das Unternehmen, das ...', pos: 'professional relative construction', level: 'C2', register: 'professional/business', en: 'the company, which ...', hi: 'कंपनी, जो ...', synonyms: null, antonyms: null, ex: 'Das Unternehmen, das den Markt dominiert, investiert massiv in Forschung.', exEn: 'The company that dominates the market invests massively in research.', exHi: 'Company, jo market par haavi hai, research mein bhaari nivesh karti hai.', ex2: 'Das Unternehmen, das kürzlich fusioniert hat, meldete Rekordgewinne.', ex2En: 'The company that recently merged reported record profits.', ex2Hi: 'Company, jiska haal hi mein vilay hua, record munaafa darj kiya.' },
    { de: 'restriktiver Relativsatz', pos: 'noun (grammar term)', level: 'C2', register: 'academic/grammar', en: 'restrictive relative clause', hi: 'प्रतिबंधात्मक संबंधवाचक उपवाक्य', synonyms: null, antonyms: 'nicht-restriktiver Relativsatz', ex: 'Ein restriktiver Relativsatz identifiziert, welches Element genau gemeint ist.', exEn: 'A restrictive relative clause identifies exactly which element is meant.', exHi: 'Ek restrictive relative clause identify karta hai ki bilkul kaunsa element matlab hai.', ex2: 'Ohne den restriktiven Relativsatz bliebe unklar, welcher Student gemeint ist.', ex2En: 'Without the restrictive relative clause, it would remain unclear which student is meant.', ex2Hi: 'Restrictive relative clause ke bina, yeh ashpashtha rahega ki kaunsa student matlab hai.' },
    { de: 'nicht-restriktiver Relativsatz', pos: 'noun (grammar term)', level: 'C2', register: 'academic/grammar', en: 'non-restrictive (explanatory) relative clause', hi: 'गैर-प्रतिबंधात्मक (व्याख्यात्मक) उपवाक्य', synonyms: 'erläuternder Relativsatz', antonyms: 'restriktiver Relativsatz', ex: 'Ein nicht-restriktiver Relativsatz fügt zusätzliche Information hinzu, ohne zu identifizieren.', exEn: 'A non-restrictive relative clause adds additional information without identifying.', exHi: 'Ek non-restrictive relative clause bina identify kiye extra information jodta hai.', ex2: 'Die Studenten, die die Prüfung bestanden haben, feierten — hier ist der Relativsatz nicht-restriktiv, wenn alle gemeint sind.', ex2En: 'The students, who passed the exam, celebrated — here the relative clause is non-restrictive if all are meant.', ex2Hi: 'Students, jinhone exam paas kiya, jashn manaaya — yahaan relative clause non-restrictive hai agar sab meant hain.' }
  ],
  grammar: [
    { title: 'Warum Relativsätze existieren (Why Relative Clauses Exist)', body: [ 'Main Information → Supporting Information → Relative Clause → Reader Processing → Meaning Precision. Relative clauses are a tool for organizing information, not just a grammar rule.' ], hinglish: 'Relative clause ka kaam hai do baaton ko ek sentence mein jodna, bina noun dohraye. C2 par sawaal yeh nahi rehta ki tum relative clause bana sakte ho \u2014 sawaal yeh hai ki main baat main clause mein rakhi hai aur sirf sahayak jaankaari relative clause mein gayi hai ya nahi. Agar asli baat relative clause mein dab jaaye, to sentence kamzor lagta hai.' },
    { title: 'Restriktiv vs. Nicht-Restriktiv (Restrictive vs. Non-Restrictive)', body: [ 'Der Student, der neben mir sitzt, ... (identification — restrictive) vs. Die Studenten, die die Prüfung bestanden haben, ... (additional information — non-restrictive). The stylistic effect changes depending on whether the relative clause identifies or merely adds detail.' ], hinglish: 'Do tarah ke relative clause hote hain. <b>Restrictive</b> woh hai jo batata hai ki <b>kaunsa</b> \u2014 <span class="de">Der Student, der neben mir sitzt</span> matlab woh khaas student. Aur <b>non-restrictive</b> sirf ek extra baat jodta hai. Dhyaan do ki German mein dono par comma lagta hai, English ki tarah farak nahi hota \u2014 isliye yahan farak matlab ka hai, punctuation ka nahi.' },
    { title: 'Kompression (Compression Scale)', body: [ 'Relative Clause → Participial Attribute → Nominal Expression → Academic Reformulation. Each step compresses information further, improving density but requiring more processing from the reader.' ], hinglish: 'Ek hi baat ko chaar tarah se kaha jaa sakta hai, aur har step zyada compact hota jaata hai: <span class="de">die Daten, die erhoben wurden</span> se <span class="de">die erhobenen Daten</span> se <span class="de">die Datenerhebung</span>. Academic writing mein compression achhi lagti hai, par ek limit hai \u2014 agar sentence do baar padhna pade to relative clause hi behtar tha.' },
    { title: 'Eingebettete Relativsätze (Embedded Relative Clauses)', body: [ 'Nested relative structures require careful sentence planning and information hierarchy. Excessive nesting increases processing difficulty for the reader — native speakers balance density against readability.' ], hinglish: 'Ek relative clause ke andar doosra aa jaaye to sentence bhaari ho jaata hai. Aise sentences padhne ka tareeka yeh hai \u2014 pehle main clause dhoondo, phir ek-ek clause alag karke samjho. Aur khud likhte waqt ek nesting hi kaafi hai; teen level reader ke liye bahut ho jaate hain, chahe grammar bilkul sahi ho.' },
    { title: 'Register-spezifische Relativsätze (Register-Specific Relative Clauses)', body: [ 'Formal texts mein kuch khaas forms aati hain, aur inhe pehchaanna reading mein bahut kaam aata hai. <b>wonach</b> kisi theory ya bayaan ko refer karta hai. <b>mittels derer</b> aur <b>anhand derer</b> mein Genitiv plural form hai \u2014 yeh scientific writing mein aata hai. Aur <b>dem zufolge</b> news mein source batane ke liye, jahan <b>zufolge</b> pronoun ke <b>baad</b> aata hai. Yeh sab neeche wale block mein detail se hain.' ], hinglish: 'Formal texts mein kuch khaas forms aati hain, aur inhe pehchaanna reading mein bahut kaam aata hai. <b>wonach</b> kisi theory ya bayaan ko refer karta hai. <b>mittels derer</b> aur <b>anhand derer</b> mein Genitiv plural form hai \u2014 yeh scientific writing mein aata hai. Aur <b>dem zufolge</b> news mein source batane ke liye, jahan <b>zufolge</b> pronoun ke <b>baad</b> aata hai. Yeh sab neeche wale block mein detail se hain.' },
    {
      title: 'Die Formen \u2014 Pronomen, Pr\u00e4positionen, Kompression',
      body: [
        'The chapter uses <i>wonach</i>, <i>mittels derer</i> and <i>dem zufolge</i> without ever setting out how they are built. Here is the machinery all of it rests on.',
        'Three rules cover almost everything: the pronoun agrees with the noun before the comma, the case comes from the clause\u2019s own verb, and any preposition moves in front of the pronoun.'
      ],
      table: {
        head: ['Form', 'Rule', 'Example'],
        rows: [
          ['der / die / das', 'gender from the antecedent, case from the clause\u2019s verb', '<span class="de">der Kollege, <b>dem</b> ich vertraue</span>'],
          ['dessen / deren', 'possession \u2014 dessen for der/das, deren for die and plural', '<span class="de">die Universit\u00e4t, <b>deren</b> Bibliothek \u2026</span>'],
          ['preposition + pronoun', 'preposition goes FIRST', '<span class="de"><b>auf die</b> sich der Artikel bezieht</span>'],
          ['mittels / anhand + <b>derer</b>', 'Genitiv plural form after a Genitiv preposition', '<span class="de">die Daten, <b>anhand derer</b> \u2026</span>'],
          ['<b>dem zufolge</b>', 'zufolge FOLLOWS the pronoun, takes Dativ', '<span class="de">der Bericht, <b>dem zufolge</b> \u2026</span>'],
          ['<b>wonach</b>', 'refers to a whole statement, not a noun', '<span class="de">die Theorie, <b>wonach</b> \u2026</span>'],
          ['participial attribute', 'participle takes an adjective ending', '<span class="de">die im Labor erhoben<b>en</b> Daten</span>']
        ]
      },
      note: 'Compression recipe: drop the pronoun and the conjugated verb, move the participle in front of the noun, add an adjective ending \u2014 <span class="de">die Daten, die erhoben wurden</span> becomes <span class="de">die erhobenen Daten</span>.',
      hinglish: 'Chapter mein <i>wonach</i>, <i>mittels derer</i> aur <i>dem zufolge</i> use hote hain par yeh kabhi nahi bataya jaata ki yeh kaise bante hain \u2014 to yeh dekho. Teen rules lagbhag sab kuch cover kar lete hain. Pehla: pronoun ka gender us noun se aata hai jo <b>comma se pehle</b> hai. Doosra: uska <b>case</b> us clause ke apne verb se aata hai \u2014 <i>vertrauen</i> Dativ leta hai, isliye <span class="de">dem ich vertraue</span>. Teesra: agar koi preposition hai to woh pronoun se <b>pehle</b> aata hai \u2014 <span class="de">auf die sich der Artikel bezieht</span>, English ki tarah peeche nahi. Do khaas forms: <b>anhand derer</b> mein Genitiv plural form aati hai, aur <b>zufolge</b> apne pronoun ke <b>baad</b> aata hai (<span class="de">dem zufolge</span>, kabhi <i>zufolge dem</i> nahi). Aur <b>wonach</b> kisi noun ko nahi, balki poori baat ko refer karta hai. Compression ka tareeka: pronoun aur conjugated verb hata do, participle ko noun ke aage le aao, aur uspar adjective ki ending laga do \u2014 par ending lagana mat bhoolo: <span class="de">die erhoben<b>en</b> Daten</span>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to its function and typical register.' ], table: { head: ['Structure', 'Function', 'Typical Register'], rows: [ ['Restrictive Relative Clause', 'Identification', 'General'], ['Non-Restrictive Relative Clause', 'Additional Information', 'Academic'], ['Embedded Relative Clause', 'Dense Information', 'Scientific'], ['Participial Attribute', 'Compression', 'Academic'], ['Apposition', 'Elegant Variation', 'Literature'] ] }, hinglish: 'Structure, function aur register ka table \u2014 par structure chunne ke baad uski form bhi check karo, kyunki asli galtiyan pronoun, case aur preposition mein hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'All six are mechanical \u2014 verb-final order, the gender of dessen/deren, the case coming from the clause\u2019s own verb, preposition fronting, participial endings, and the position of <b>zufolge</b>.' ], mistakes: [
      { wrong: 'Die Studie, die gestern wurde ver\u00f6ffentlicht, ist wichtig.', right: 'Die Studie, die gestern ver\u00f6ffentlicht wurde, ist wichtig.', why: 'A relative clause is a subordinate clause, so the conjugated verb goes to the very END \u2014 after the Partizip II.' },
      { wrong: 'Die Universit\u00e4t, dessen Bibliothek neu ist, \u2026', right: 'Die Universit\u00e4t, deren Bibliothek neu ist, \u2026', why: 'The pronoun matches the noun BEFORE the comma. <i>die Universit\u00e4t</i> is feminine, so it takes <b>deren</b>.' },
      { wrong: 'Der Kollege, den ich vertraue, arbeitet hier.', right: 'Der Kollege, dem ich vertraue, arbeitet hier.', why: 'The case comes from the verb INSIDE the relative clause. <i>vertrauen</i> takes the Dativ, so the pronoun is <b>dem</b>.' },
      { wrong: 'Die Methode, die sich der Artikel bezieht, ist neu.', right: 'Die Methode, auf die sich der Artikel bezieht, ist neu.', why: '<i>sich beziehen</i> requires <b>auf</b>, and in a relative clause the preposition moves to the FRONT, before the pronoun.' },
      { wrong: 'Die im Labor erhobene Daten sind eindeutig.', right: 'Die im Labor erhobenen Daten sind eindeutig.', why: 'In a participial attribute the participle still takes a normal adjective ending \u2014 plural after <i>die</i> means <b>-en</b>.' },
      { wrong: 'Der Bericht, zufolge dem die Lage stabil ist, \u2026', right: 'Der Bericht, dem zufolge die Lage stabil ist, \u2026', why: '<b>zufolge</b> always FOLLOWS its noun or pronoun \u2014 <i>dem zufolge</i>, never <i>zufolge dem</i>. And it takes the Dativ.' }
    ], hinglish: 'Chhe ki chhe galtiyan mechanical hain \u2014 verb end mein na jaana, <b>dessen/deren</b> ka gender galat, case clause ke apne verb se na lena, preposition aage na aana, participle par ending na lagana, aur <b>zufolge</b> ko galat jagah rakhna.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need additional information? Is identification necessary? Yes → restrictive relative clause. No, and need stylistic elegance? Choose a relative clause or participial attribute that best matches the register.' ], note: 'Memory trick: imagine every sentence is a gift box. The main clause is the box. The relative clause is a carefully wrapped note placed inside. At C2, native speakers know exactly how much information belongs inside, how much belongs outside, and how to keep the package elegant instead of overloaded.', hinglish: 'Pehle tay karo \u2014 yeh clause batata hai ki <b>kaunsa</b> (restrictive), ya sirf ek extra baat jodta hai? Uske baad decide karo ki relative clause rakhna hai ya participle mein compress karna. Aur likhne ke baad teen cheezein check karo: pronoun ka gender comma se pehle wale noun se, uska case clause ke verb se, aur preposition pronoun se pehle.' }
  ],
  reading: {
    title: 'Fachzeitschrift: Studie zur Wirkung von Musiktherapie bei Demenz',
    titleEn: 'Reading A — Journal: study on the effect of music therapy in dementia',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'deren', role: 'r-relativsatz-akademisch', en: 'whose (Genitiv relative pronoun, academic construction)', hi: '', type: 'Relativpronomen · Gen.' },
      { w: 'Ergebnisse', role: 'r-relativsatz-akademisch', en: 'results (Satzende, completing the genitive relative)', hi: 'नतीजे (Satzende, genitive relative)', type: 'Noun · plural (Satzende)', why: '"deren Ergebnisse" packs a supporting detail elegantly into one genitive relative clause, avoiding two separate sentences (this chapter).' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Fachjournal', role: 'plain', en: 'specialist journal (Satzende)', hi: 'विशेषज्ञ पत्रिका (Satzende)', type: 'Noun · neut.' },
      { w: 'ausführlich', role: 'plain', en: 'extensively', hi: 'विस्तार से', type: 'Adverb' },
      { w: 'diskutiert', role: 'plain', en: 'discussed (Satzende)', hi: 'चर्चा की गई (Satzende)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv, Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'überzeugt', role: 'plain', en: 'convinces', hi: 'प्रभावित करता है', type: 'Verb (Präsens)' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'के ज़रिए', type: 'Preposition · Akk.' },
      { w: 'ihre', role: 'plain', en: 'its', hi: 'अपनी', type: 'Possessivartikel · Akk.' },
      { w: 'methodische', role: 'plain', en: 'methodological', hi: 'पद्धतिगत', type: 'Adjective · Akk.' },
      { w: 'Sorgfalt', role: 'plain', en: 'rigour (Satzende)', hi: 'सावधानी (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The study, whose results are being extensively discussed in the specialist journal, convinces through its methodological rigour.',
    comprehension: [
      { q: 'Was für ein Relativsatz ist "deren Ergebnisse...diskutiert werden"?', options: ['Ein Genitiv-Relativsatz mit akademischer Funktion', 'Ein restriktiver Relativsatz ohne Genitiv', 'Kein Relativsatz'], answer: 0 },
      { q: 'Worum geht es in der Studie?', options: ['Musiktherapie bei Demenz', 'Klimapolitik', 'Sprachtherapie'], answer: 0 },
      { q: 'Ist dieser Relativsatz restriktiv oder nicht-restriktiv?', options: ['Nicht-restriktiv — er fügt zusätzliche Information über die bereits identifizierte Studie hinzu', 'Restriktiv — er identifiziert, welche Studie gemeint ist', 'Weder noch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Wissenschaftliche Publikation', titleEn: 'Reading B — Scientific publication',
    tokens: [
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Verfahren', role: 'plain', en: 'procedure', hi: 'prakriya', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'anhand', role: 'r-relativsatz-wissenschaftlich', en: 'on the basis of (part of the fixed scientific relative construction)', hi: '(scientific construction)', type: 'Präposition · Gen.' },
      { w: 'dessen', role: 'r-relativsatz-wissenschaftlich', en: 'which (Satzende, Genitiv relative pronoun completing "anhand dessen")', hi: '(Satzende, Genitiv relative)', type: 'Relativpronomen · Gen. (Satzende)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Daten', role: 'plain', en: 'data', hi: 'data', type: 'Noun · plural' },
      { w: 'ausgewertet', role: 'plain', en: 'evaluated', hi: 'vishleshit', type: 'Partizip II' },
      { w: 'wurden', role: 'plain', en: 'were (Satzende)', hi: 'gaye the (Satzende)', type: 'Verb (Präteritum, Passiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'ist', role: 'plain', en: 'is', hi: 'hai', type: 'Verb (Präsens)' },
      { w: 'hoch', role: 'plain', en: 'highly', hi: 'bahut', type: 'Adverb' },
      { w: 'präzise', role: 'plain', en: 'precise (Satzende)', hi: 'sateek (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The procedure on the basis of which the data were evaluated is highly precise.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_011_L001', speaker: 'Adelheid', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die These, der Markt regle sich selbst, überzeugt mich in dieser Dissertation nicht.', en: 'Timo, the thesis that the market regulates itself doesn\'t convince me in this dissertation.' },
      { id: 'C2_011_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sieh dir die Daten aus den drei Ländern an, auf die sich die Autorin stützt.', en: 'Look at the data from the three countries that the author relies on.' },
      { id: 'C2_011_L003', speaker: 'Adelheid', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau die Länder, deren Wirtschaft am stärksten schwankte, fehlen hier interessanterweise.', en: 'Interestingly, exactly the countries whose economy fluctuated most are missing here.' },
      { id: 'C2_011_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ein Punkt, den wir in unserer Stellungnahme unbedingt ansprechen sollten.', en: 'A point we should definitely address in our review.' }
    ],
    transcript: 'Timo, die These, der Markt regle sich selbst, überzeugt mich in dieser Dissertation nicht. Sieh dir die Daten aus den drei Ländern an, auf die sich die Autorin stützt. Genau die Länder, deren Wirtschaft am stärksten schwankte, fehlen hier interessanterweise. Ein Punkt, den wir in unserer Stellungnahme unbedingt ansprechen sollten.',
    translation: 'Timo, the thesis that the market regulates itself doesn\'t convince me in this dissertation. Look at the data from the three countries that the author relies on. Interestingly, exactly the countries whose economy fluctuated most are missing here. A point we should definitely address in our review.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'These' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Markt' },
      { w: 'regle' },
      { w: 'sich' },
      { w: 'selbst' },
      { w: ',', plain: true },
      { w: 'überzeugt' },
      { w: 'mich' },
      { w: 'in' },
      { w: 'dieser' },
      { w: 'Dissertation' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Sieh' },
      { w: 'dir' },
      { w: 'die' },
      { w: 'Daten' },
      { w: 'aus' },
      { w: 'den' },
      { w: 'drei' },
      { w: 'Ländern' },
      { w: 'an' },
      { w: ',', plain: true },
      { w: 'auf' },
      { w: 'die' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Autorin' },
      { w: 'stützt' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'die' },
      { w: 'Länder' },
      { w: ',', plain: true },
      { w: 'deren' },
      { w: 'Wirtschaft' },
      { w: 'am' },
      { w: 'stärksten' },
      { w: 'schwankte' },
      { w: ',', plain: true },
      { w: 'fehlen' },
      { w: 'hier' },
      { w: 'interessanterweise' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'Punkt' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'wir' },
      { w: 'in' },
      { w: 'unserer' },
      { w: 'Stellungnahme' },
      { w: 'unbedingt' },
      { w: 'ansprechen' },
      { w: 'sollten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was bezweifelt Adelheid?', qEn: 'What does Adelheid doubt?', options: ['die Datenerhebung', 'die These, der Markt regle sich selbst', 'die Quellenangaben', 'das Layout'], optionsEn: ['the data collection', 'the thesis that the market regulates itself', 'the references', 'the layout'], answer: 1,
        explain: '"Die These, der Markt regle sich selbst, überzeugt mich nicht."' },
      { q: 'Was fehlt auffällig in den Daten?', qEn: 'What is conspicuously missing from the data?', options: ['die stabilsten Länder', 'die Länder mit den stärksten Schwankungen', 'alle europäischen Länder', 'die neuesten Studien'], optionsEn: ['the most stable countries', 'the countries with the strongest fluctuations', 'all European countries', 'the latest studies'], answer: 1,
        explain: '"Genau die Länder, deren Wirtschaft am stärksten schwankte, fehlen hier."' }
    ]
  },
  speaking: [
    { task: "Timo überzeugt die These vom sich selbst regelnden Markt nicht. Verweise auf die Daten.", taskEn: "Timo isn't convinced by the self-regulating market thesis. Point to the data.", de: "Sieh dir die Daten aus den drei Ländern an, auf die sich die These stützt.", en: "Look at the data from the three countries the thesis rests on." },
    { task: "Stell im Kolloquium die Untersuchung vor.", taskEn: "Present the study in the colloquium.", de: "Die Untersuchung, die auf Registerdaten beruht, ist bis heute die größte.", en: "The study, which is based on register data, is still the largest." },
    { task: "Nenne das Verfahren, mit dem ihr gemessen habt.", taskEn: "Name the procedure you measured with.", de: "Das Verfahren, mittels dessen wir gemessen haben, gilt als Standard.", en: "The procedure by means of which we measured counts as standard." },
    { task: "Gib die Aussage des Berichts weiter.", taskEn: "Pass on what the report states.", de: "Der Bericht, dem zufolge die Kosten sinken, stammt aus dem Ministerium.", en: "The report, according to which costs are falling, comes from the ministry." },
    { task: "Deine Lektorin fragt nach dem Unterschied der beiden Relativsätze.", taskEn: "Your editor asks about the difference between the two relative clauses.", de: "Ohne Komma grenzt der Satz ein, mit Komma ergänzt er nur.", en: "Without a comma the clause restricts, with a comma it merely adds." }
  ],
  writing: {
    prompt: 'TASK 1 — Sentence upgrade (150 words): Rewrite simple sentences using sophisticated relative clauses. Explain every stylistic improvement.\n\nTASK 2 — Compression (150 words): Transform relative clauses into participial or nominal structures where appropriate. Explain why the new version is more natural.\n\nTASK 3 — Essay (600 words): Write a C2 academic essay naturally integrating advanced relative clauses, embedded structures, and information-packaging techniques across multiple registers.',
    starters: ['Die Studie, deren Ergebnisse...', 'Das Verfahren, mittels dessen...', 'Der Bericht, dem zufolge...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Relativsätze als Informationsverpackung...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which relative construction most precisely signals a genitive-based supporting detail in academic writing?', options: ['die Studie, deren Ergebnisse ...', 'die Studie, die ...', 'die Studie, wenn ...'], answer: 0, explain: '"deren" (Genitiv relative pronoun) packs a possessive supporting detail elegantly into the clause.' },
    gap: { sentence: ['Das Verfahren, ', ' die Daten ausgewertet wurden, ist hoch präzise.'], gaps: [ { answer: 'anhand dessen', accepts: ['anhand dessen', 'anhand derer'] } ], explain: '"anhand dessen/derer" is the authentic scientific-register construction for "on the basis of which".' },
    match: { q: 'Match each relative construction to its typical register.', pairs: [ { noun: 'die Theorie, wonach ...', art: 'Academic' }, { noun: 'die Daten, anhand derer ...', art: 'Scientific' }, { noun: 'der Bericht, dem zufolge ...', art: 'Journalism' }, { noun: 'restriktiver Relativsatz', art: 'General (identification)' } ] },
    builder: { target: 'Build: "The study, whose results are significant, convinces." (academic genitive relative)', bank: ['Die', 'Studie', ',', 'deren', 'Ergebnisse', 'signifikant', 'sind', ',', 'überzeugt', '.'], answer: ['Die', 'Studie', ',', 'deren', 'Ergebnisse', 'signifikant', 'sind', ',', 'überzeugt', '.'], roles: { 'deren': 'r-relativsatz-akademisch', 'Ergebnisse': 'r-relativsatz-akademisch' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie ist wichtig. Die Studie zeigt neue Ergebnisse. Die Ergebnisse sind signifikant.', right: 'Die Studie, deren Ergebnisse signifikant sind, zeigt wichtige neue Erkenntnisse.', explain: 'Three choppy sentences are compressed into one elegant sentence using a genitive relative clause — a hallmark of C2 information packaging.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for relative clauses in this chapter?', options: ['Every sentence is a gift box; the relative clause is the carefully wrapped note inside', 'Relative clauses should always be avoided in formal writing', 'Relative pronouns are interchangeable regardless of register'], answer: 0, explain: 'C2 mastery means knowing exactly how much information belongs inside the relative clause without overloading the sentence.' },
    { q: 'What is the difference between a restrictive and non-restrictive relative clause?', options: ['Restrictive identifies which element is meant; non-restrictive adds extra information', 'They are always identical in meaning', 'Non-restrictive clauses are ungrammatical at C2 level'], answer: 0, explain: 'Der Student, der neben mir sitzt (identification) vs. Die Studenten, die die Prüfung bestanden haben (additional info).' },
    { q: 'Which is a classic C2-level mistake with relative clauses?', options: ['Excessive nesting that overwhelms the reader', 'Never using any relative clauses', 'Using too few embedded clauses'], answer: 0, explain: 'Native speakers balance information density against readability instead of nesting excessively.' },
    { q: 'Why might a writer compress a relative clause into a participial attribute?', options: ['To improve density and readability in formal/academic register', 'Because relative clauses are grammatically incorrect', 'To make the sentence longer'], answer: 0, explain: 'The compression scale (relative clause → participial attribute → nominal expression) increases formality and density.' },
    { q: 'Which construction is authentic for scientific writing meaning "the data, on the basis of which..."?', options: ['die Daten, anhand derer ...', 'die Daten, weil ...', 'die Daten, aber ...'], answer: 0, explain: '"anhand derer" is the precise scientific-register relative construction for this meaning.' }
  ],
  takeaways: [
    { c: 'r-geschenkbox-metapher', html: 'Every sentence is a gift box — the main clause is the box, and the relative clause is the note carefully wrapped inside.' },
    { c: 'r-relativsatz-akademisch', html: 'Academic relative constructions (deren Ergebnisse, wonach, mittels derer) pack supporting detail elegantly without extra sentences.' },
    { c: 'r-relativsatz-wissenschaftlich', html: 'Scientific relative constructions (anhand derer, welches, deren Ergebnisse) signal precision in research writing.' },
    { c: 'r-partizipialattribut', html: 'Compressing a relative clause into a participial attribute increases density and formality when appropriate.' }
  ],
  revisionTips: [
    'Take three choppy simple sentences and combine them into one elegant sentence using a genitive or prepositional relative clause.',
    'Rewrite one relative clause as a participial attribute and compare readability.',
    'Read one academic article and label each relative construction by register (academic, scientific, journalistic, legal, literary).'
  ]
};
window.CHAPTER = CHAPTER;
