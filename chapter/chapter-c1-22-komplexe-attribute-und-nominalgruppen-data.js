/* KLARWEG CHAPTER DATA — C1 · Chapter 21
   "Komplexe Attribute & Nominalgruppen" — compressing large
   amounts of information into dense noun phrases: adjective/
   participial/genitive/prepositional attributes, appositions,
   attribute hierarchy/ordering. NOT basic adjective endings,
   relative clauses, or participles (already mastered).
   Dialogue: Britta and Timo ONLY. */
const CHAPTER = {
  id: 'c1-22-komplexe-attribute-und-nominalgruppen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 22,
  title: 'Komplexe Attribute & Nominalgruppen',
  titleEn: 'Complex attributes and noun groups',
  description: 'A2 sentences grow by adding new clauses. C1 sentences grow by enriching the noun phrase. The more formal German becomes, the more information moves into the noun phrase.',
  xp: 630, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 23, title: 'Goethe Mini 3', titleEn: 'Checkpoint: Chapters 18–22' , href: 'chapter-c1-23-goethe-mini-3.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'C1 sentences grow by enriching the <em>noun phrase</em>, not by adding clauses.',
    intro: 'Editing a research paper before submission, Britta and Timo condense an unclear thought from the last paragraph into a dense, sophisticated noun phrase — C1 sentences grow by enriching the noun, not by adding more clauses.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See adjective, participial, genitive, and prepositional attributes combined into authentic C1 noun phrases'],
    scene: 'Überarbeitung eines Forschungsartikels vor der Einreichung',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place (part of complex Nominalgruppe)' },
        { w: 'letzten', role: 'r-dativ', en: 'last', hi: 'पिछले', pron: 'LETS-ten', type: 'Adjective · dative' },
        { w: 'Absatz', role: 'r-dativ', en: 'paragraph (dat.)', hi: 'अनुच्छेद में', pron: 'AP-zats', type: 'Noun · masc. dat.' },
        { w: 'formulierte', role: 'r-subject', en: 'formulated', hi: 'व्यक्त किया गया', pron: 'for-mu-LEER-tuh', type: 'Partizip II als Attribut' },
        { w: 'Gedanke', role: 'r-subject', en: 'thought', hi: 'विचार', pron: 'ge-DAN-kuh', type: 'Noun · masc.', why: 'a complex noun group: der [im letzten Absatz formulierte] Gedanke, this chapter.', ex: 'der im letzten Absatz formulierte Gedanke', exEn: 'the thought formulated in the last paragraph' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'unklar', role: 'r-akkusativ', en: 'unclear', hi: 'अस्पष्ट', pron: 'UN-klahr', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The thought formulated in the last paragraph is unclear.', hi: 'Pichhle anuchhed mein vyakt kiya gaya vichaar aspasht hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Nominalgruppe', role: 'r-akkusativ', en: 'noun group', hi: 'नाम समूह', pron: 'no-mi-NAHL-gru-puh', type: 'Noun · fem.', why: 'die Nominalgruppe (this chapter).', ex: 'eine lange Nominalgruppe' },
        { w: 'verdichten', role: 'r-verb', en: 'condense', hi: 'संघनित करना', pron: 'fer-DIKH-ten', type: 'Verb · infinitive (Satzende)', why: 'verdichten = to condense (this chapter).', ex: 'einen Satz verdichten' },
        { w: '.', plain: true }
      ], en: 'We should condense the noun group.', hi: 'Humein naam samooh ko sangnhit karna chahiye.' },
      { speaker: 'Britta', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Präzision', role: 'r-subject', en: 'precision', hi: 'सटीकता', pron: 'pray-tsi-ZYON', type: 'Noun · fem.', why: 'die Präzision (this chapter).', ex: 'mehr Präzision' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'gesamten', role: 'r-dativ', en: 'entire', hi: 'संपूर्ण', pron: 'ge-ZAM-ten', type: 'Adjective · genitive' },
        { w: 'Textes', role: 'r-dativ', en: 'text (gen.)', hi: 'पाठ के', pron: 'TEKS-tes', type: 'Noun · masc. genitive' },
        { w: 'basiert', role: 'r-verb', en: 'is based', hi: 'आधारित है', pron: 'ba-ZEERT', type: 'Verb · basieren auf', why: 'basieren auf + Dativ = to be based on (this chapter).', ex: 'Der Text basiert auf Fakten.', exEn: 'The text is based on facts.' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition (part of basieren auf)' },
        { w: 'klaren', role: 'r-dativ', en: 'clear', hi: 'स्पष्ट', pron: 'KLAH-ren', type: 'Adjective · dative' },
        { w: 'Sätzen', role: 'r-dativ', en: 'sentences (dat.)', hi: 'वाक्यों पर', pron: 'ZET-sen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'The precision of the entire text is based on clear sentences.', hi: 'Poore paath ki sateekta spasht vaakyon par aadhaarit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Auswirkung', role: 'r-akkusativ', en: 'effect', hi: 'प्रभाव', pron: 'OWS-vir-kung', type: 'Noun · fem.', why: 'die Auswirkung (recycled C1).', ex: 'eine positive Auswirkung' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'होगा', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: 'eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'Kürzung', role: 'r-subject', en: 'shortening', hi: 'संक्षिप्तीकरण', pron: 'KÜR-tsung', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Which effect would a shortening have?', hi: 'Sankshiptikaran ka kya prabhaav hoga?' },
      { speaker: 'Britta', tokens: [
        { w: 'Eine', role: 'r-subject', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem.' },
        { w: 'gekürzte', role: 'r-subject', en: 'shortened', hi: 'संक्षिप्त', pron: 'ge-KÜR-tsuh', type: 'Adjective' },
        { w: 'Version', role: 'r-subject', en: 'version', hi: 'संस्करण', pron: 'fer-ZYON', type: 'Noun · fem.' },
        { w: 'würde', role: 'r-verb', en: 'would', hi: 'होगा', pron: 'VÜR-duh', type: 'Verb · werden (Konjunktiv II)' },
        { w: 'viel', role: 'r-akkusativ', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'klarer', role: 'r-akkusativ', en: 'clearer', hi: 'ज़्यादा स्पष्ट', pron: 'KLAH-rer', type: 'Adjective · Komparativ' },
        { w: 'wirken', role: 'r-verb', en: 'appear', hi: 'लगना', pron: 'VIR-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'A shortened version would appear much clearer.', hi: 'Ek sankshipt sanskaran bahut zyada spasht lagega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kürze', role: 'r-verb', en: 'shorten', hi: 'संक्षिप्त करता हूँ', pron: 'KÜR-tsuh', type: 'Verb · kürzen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Absatz', role: 'r-akkusativ', en: 'paragraph', hi: 'अनुच्छेद', pron: 'AP-zats', type: 'Noun · masc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then I will shorten the paragraph right away.', hi: 'Achha, toh main abhi anuchhed sankshipt karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'A2 sentences grow by adding new clauses. C1 sentences grow by enriching <b>the noun phrase</b>. The more formal German becomes, the more information moves into the <span class="de r-nominalgruppe">noun phrase</span>.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is KOMPLEXE ATTRIBUTE & NOMINALGRUPPEN at C1 level — compressing information into dense noun phrases using multiple attribute types (adjective, participial, genitive, prepositional attributes, appositions) and correct attribute hierarchy/ordering, NOT basic adjective endings, relative clauses, or participle formation (already mastered). Covered: attribute types (adjective: "wissenschaftliche Studie"; participial: "die im Labor entwickelte Methode"; genitive: "die Ergebnisse der Untersuchung"; prepositional: "die Bedeutung von Forschung"; apposition); attribute hierarchy/natural ordering (quantity → evaluation → size → age → origin → purpose → noun); building progressively denser nominal groups by embedding attributes within attributes (e.g. a prepositional attribute embedded inside a participial attribute); transforming relative-clause-heavy sentences into compressed nominal style, typical of academic/scientific/legal/journalistic register. Do NOT expect or require basic single-adjective declension or simple relative clauses — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: English-style noun phrase order (adjectives not properly compressed into German pre-noun position); overusing relative clauses where nominal compression is expected in formal register; incorrect attribute ordering when multiple attributes stack; separating attributes that should stay together, or creating unreadably dense noun groups where breaking into two sentences would be clearer. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag English-style or malformed noun phrase attribute order; check that participial/genitive/prepositional attributes are correctly compressed rather than left as relative clauses in academic-register text; check attribute stacking is readable, not excessively dense; if unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Density check:</b> one sentence on whether the learner\'s nominal groups achieved appropriate information density for the register, without sacrificing readability.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you compress information into dense, precise nominal groups like a native academic writer. Ready for Konjunktiv I in academic language next.', mid: 'Good. Re-read the Nominal Group Architecture and Attribute Hierarchy once, then continue.', low: 'Worth another pass through the Grammar section — remember: C1 sentences grow by enriching the noun phrase, not by adding clauses.' },
  parserSentence: [ { w: 'die', role: 'plain' }, { w: 'letztes', role: 'r-partizipialattribut' }, { w: 'Jahr', role: 'r-partizipialattribut' }, { w: 'veröffentlichte', role: 'r-partizipialattribut' }, { w: 'Studie', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: C1 sentences grow by enriching the noun phrase, not by adding clauses.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Britta and Timo edit a research paper, compressing relative clauses into dense, sophisticated nominal groups.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key academic expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master adjective, participial, genitive, and prepositional attributes, plus attribute hierarchy.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific research article and a government policy paper, identifying attribute types and density.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominal groups and attribute chains in a university lecture and research symposium.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present research and describe complex processes using sophisticated nominal groups naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Expand noun phrases with multiple attribute types, and write a 350-word academic article in dense C1 style.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill attribute identification, attribute ordering, and relative-clause-to-attribute transformation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 630 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Attribute identification and ordering drills, plus a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Nominal Group Architecture, Information Density Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir könnten das zu einer Nominalgruppe verdichten.', text: 'Recognize when a clause should be compressed into a noun group' },
    { de: 'Die letztes Jahr veröffentlichte Studie ist relevant.', text: 'Use a participial attribute to replace a relative clause' },
    { de: 'Die Ergebnisse der Untersuchung basieren auf umfangreichen empirischen Untersuchungen.', text: 'Combine a genitive attribute with a prepositional attribute' },
    { de: 'Die auf umfangreichen empirischen Untersuchungen basierenden Forschungsergebnisse überzeugen.', text: 'Build a fully expanded C1 nominal group with embedded attributes' },
    { de: 'Das ist ein gutes Beispiel für echte wissenschaftliche Präzision.', text: 'Use a fixed academic collocation summarizing nominal-style writing' }
  ],
  vocab: [
    { de: 'verdichten', pos: 'verb', level: 'C1', register: 'written', en: 'to compress, condense', hi: 'सघन बनाना', ex: 'Wir könnten das zu einer Nominalgruppe verdichten.', exEn: 'We could compress that into a noun group.', exHi: 'Hum ise ek nominal group mein sangathit kar sakte hain.', ex2: 'Der Autor hat den Absatz stilistisch verdichtet.', ex2En: 'The author has stylistically condensed the paragraph.', ex2Hi: 'Lekhak ne paragraph ko stylistically sangathit kiya hai.', conj: { praesens: 'verdichtet', praeteritum: 'verdichtete', perfekt: 'hat verdichtet' } },
    { de: 'die Nominalgruppe', art: 'die', gender: 'f', plural: 'Nominalgruppen', pos: 'noun', level: 'C1', register: 'written', en: 'noun group, noun phrase', hi: 'नाममात्र समूह', ex: 'Die Nominalgruppe enthält mehrere Attribute.', exEn: 'The noun group contains several attributes.', exHi: 'Nominal group mein kai attributes hain.', ex2: 'Lange Nominalgruppen sind typisch für wissenschaftliche Texte.', ex2En: 'Long noun groups are typical of scientific texts.', ex2Hi: 'Lambe nominal groups vaigyaanik texts ki khaasiyat hain.' },
    { de: 'basieren auf', pos: 'verb (fixed with preposition)', level: 'C1', register: 'written', en: 'to be based on', hi: 'आधारित होना', ex: 'Die Ergebnisse basieren auf umfangreichen Untersuchungen.', exEn: 'The results are based on extensive investigations.', exHi: 'Parinaam vistrit jaanch par aadhaarit hain.', ex2: 'Die Theorie basiert auf empirischen Daten.', ex2En: 'The theory is based on empirical data.', ex2Hi: 'Siddhaant anubhavjanya data par aadhaarit hai.', conj: { praesens: 'basiert auf', praeteritum: 'basierte auf', perfekt: 'hat basiert auf' } },
    { de: 'die Präzision', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'precision', hi: 'सटीकता', ex: 'Das ist ein gutes Beispiel für wissenschaftliche Präzision.', exEn: 'That is a good example of scientific precision.', exHi: 'Yeh vaigyaanik sateekta ka ek achha udhaaran hai.', ex2: 'Präzision ist in der Forschung entscheidend.', ex2En: 'Precision is crucial in research.', ex2Hi: 'Shodh mein sateekta mahatvapoorn hai.' },
    { de: 'die Auswirkung', art: 'die', gender: 'f', plural: 'Auswirkungen', pos: 'noun', level: 'C1', register: 'written', en: 'effect, impact', hi: 'प्रभाव', ex: 'Die Auswirkungen des Klimawandels sind spürbar.', exEn: 'The effects of climate change are noticeable.', exHi: 'Jalvaayu parivartan ke prabhaav mahsoos ho rahe hain.', ex2: 'Man untersucht die langfristigen Auswirkungen der Reform.', ex2En: 'The long-term effects of the reform are being studied.', ex2Hi: 'Sudhaar ke deerghkaalik prabhaavon ka adhyayan kiya jaa raha hai.' }
  ],
  grammar: [
    { title: 'Was ist ein Attribut?', body: [ 'Noun → Additional Information → Attribute → Expanded Attribute → Complex Nominal Group. German places information both before and after the noun, building increasingly dense nominal groups.' ], hinglish: 'German noun ke aage aur peeche dono taraf jaankaari jodta hai \u2014 adjectives aur participles aage aate hain, aur Genitiv, preposition wale phrases aur apposition peeche. C1 par sentences naye clauses se nahi, balki isi noun phrase ko bhar kar lambe hote hain.' },
    { title: 'Attributtypen (Attribute Types)', body: [ 'Paanch tarah ke attributes hain. Do noun ke <b>aage</b> aate hain \u2014 adjective aur participle. Aur teen <b>peeche</b> \u2014 Genitiv (<span class="de">die Ergebnisse der Untersuchung</span>), preposition wala (<span class="de">die Bedeutung von Forschung</span>), aur apposition (<span class="de">Anna, die Forscherin</span>). Har ek ka case alag jagah se aata hai, jo neeche wale block mein hai.' ], hinglish: 'Paanch tarah ke attributes hain. Do noun ke <b>aage</b> aate hain \u2014 adjective aur participle. Aur teen <b>peeche</b> \u2014 Genitiv (<span class="de">die Ergebnisse der Untersuchung</span>), preposition wala (<span class="de">die Bedeutung von Forschung</span>), aur apposition (<span class="de">Anna, die Forscherin</span>). Har ek ka case alag jagah se aata hai, jo neeche wale block mein hai.' },
    { title: 'Nominalgruppen aufbauen (Building Nominal Groups)', body: [ 'Studie → wissenschaftliche Studie → umfangreiche wissenschaftliche Studie → umfangreiche internationale wissenschaftliche Studie → die im letzten Jahr veröffentlichte umfangreiche internationale wissenschaftliche Studie. Each step increases information density.' ], hinglish: 'Yeh dikhata hai ki noun phrase kaise bhari jaati hai \u2014 har step par ek aur attribute jud jaata hai. Par dhyaan rakho: aakhri wala example padhne mein bhaari hai. Practice ke liye theek hai, likhne ke liye do-teen attributes hi kaafi hote hain.' },
    { title: 'Attributhierarchie (Attribute Hierarchy)', body: [ 'Natural ordering: quantity → evaluation → size → age → origin → purpose → noun. Attributes stack in a predictable order — reversing it sounds unnatural even if grammatically valid.' ], hinglish: 'Adjectives ka order random nahi hota. Aasaan rule yeh hai \u2014 jo attribute noun ko <b>classify</b> karta hai woh noun ke sabse paas aata hai, aur jo sirf raay ya maap batata hai woh door. Isliye <span class="de">eine umfangreiche wissenschaftliche Studie</span> sahi lagta hai, kyunki <i>wissenschaftlich</i> batata hai ki yeh <b>kis kism</b> ki study hai.' },
    { title: 'Partizipialattribute (Participial Attributes)', body: [ 'die im Labor entwickelte Methode / die kürzlich veröffentlichte Studie / der international anerkannte Experte — these compress a relative clause into a single attribute before the noun, typical of formal written German.' ], hinglish: 'Yeh Chapter 21 wali compression hai \u2014 relative clause ko noun ke aage samet dena. Yahan sirf itna yaad rakho ki participle par adjective ki ending lagti hai, aur uske saare modifiers uske aage aate hain.' },
    { title: 'Genitiv- & Präpositionalattribute', body: [ 'die Ergebnisse der Untersuchung (genitive) / die Auswirkungen des Klimawandels (genitive) / die Bedeutung von Forschung (prepositional) / die Strategie für nachhaltige Entwicklung (prepositional) — compact alternatives to full relative clauses expressing relation.' ], hinglish: 'Genitiv attribute rishta batata hai \u2014 kiska, kiske. Academic writing mein <b>Genitiv</b> hi behtar lagta hai: <span class="de">die Ergebnisse der Untersuchung</span>, na ki <i>von der Untersuchung</i>. Aur masculine ya neuter noun par <b>-s</b> lagana mat bhoolo: <span class="de">des Klimawandel<b>s</b></span>. <b>von</b> tab theek hai jab article hai hi nahi \u2014 <span class="de">die Bedeutung von Forschung</span>.' },
    {
      title: 'Kasus im Attribut',
      body: [
        'Every attribute type takes its case from a different source, and that is where the errors happen \u2014 not in choosing the attribute, but in the endings inside it.',
        'Learn the source, and the ending follows.'
      ],
      table: {
        head: ['Attribute type', 'Case comes from', 'Example'],
        rows: [
          ['adjective', 'the noun\u2019s own case and article', '<span class="de">mit einer wissenschaftlich<b>en</b> Studie</span>'],
          ['participial', 'same as an adjective', '<span class="de">die im Labor erhoben<b>en</b> Daten</span>'],
          ['genitive', 'always Genitiv \u2014 plus <b>-s</b> on masc./neut.', '<span class="de">die Ergebnisse <b>des</b> Versuch<b>s</b></span>'],
          ['prepositional', 'the preposition', '<span class="de">die Strategie <b>f\u00fcr</b> nachhaltig<b>e</b> Entwicklung</span>'],
          ['apposition', 'copies the noun it explains', '<span class="de">mit Anna, <b>der</b> Forscherin</span>']
        ]
      },
      note: 'The apposition is the one most often missed: it agrees in case, not just in gender \u2014 <i>mit Anna, der Forscherin</i>, never <i>die Forscherin</i>.',
      hinglish: 'Har attribute apna case alag jagah se leta hai \u2014 aur galtiyan yahin hoti hain, attribute chunne mein nahi balki uske andar ki ending mein. Adjective aur participle apna case us noun se lete hain jispar woh lage hain. Genitiv attribute hamesha Genitiv mein rehta hai, aur masculine ya neuter par <b>-s</b> bhi lagta hai: <span class="de">die Ergebnisse des Versuchs</span>. Prepositional attribute mein case <b>preposition</b> tay karta hai \u2014 <b>f\u00fcr</b> Akkusativ leta hai. Aur apposition sabse zyada chhooti hai: woh us noun ka <b>case copy</b> karti hai jiski woh baat kar rahi hai \u2014 <span class="de">mit Anna, der Forscherin</span>, na ki <i>die Forscherin</i>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Attribute type mapped to function.' ], table: { head: ['Attribute Type', 'Function'], rows: [ ['Adjective', 'Description'], ['Participle', 'Compressed Action'], ['Genitive', 'Possession/Relation'], ['Prepositional', 'Additional Information'], ['Apposition', 'Explanation'], ['Relative Clause', 'Expanded Attribute'] ] }, hinglish: 'Attribute type aur function ka table \u2014 pehle socho ki tumhe kya batana hai (description, kaam, rishta, ya explanation), phir usi row se attribute chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are case and ending errors inside the attribute \u2014 the Genitiv, the apposition, and the preposition. The last two are about order and about knowing when a nominal group has grown too dense.' ], mistakes: [
      { wrong: 'Die Ergebnisse von der Untersuchung sind eindeutig.', right: 'Die Ergebnisse der Untersuchung sind eindeutig.', why: 'A genitive attribute needs the Genitiv itself \u2014 <b>der Untersuchung</b>. The <i>von</i> version is spoken German and sounds weak in academic writing.' },
      { wrong: 'Die Auswirkungen des Klimawandel sind sichtbar.', right: 'Die Auswirkungen des Klimawandels sind sichtbar.', why: 'In the Genitiv a masculine or neuter noun adds <b>-s</b> or <b>-es</b> \u2014 the article alone is not enough.' },
      { wrong: 'Eine wissenschaftliche umfangreiche Studie wurde ver\u00f6ffentlicht.', right: 'Eine umfangreiche wissenschaftliche Studie wurde ver\u00f6ffentlicht.', why: 'The attribute closest to the noun is the one that classifies it. <i>wissenschaftlich</i> says what KIND of study it is, so it sits last.' },
      { wrong: 'Anna, die Forscherin, hat den Vortrag gehalten \u2014 mit der Kollegin, die Forscher.', right: 'Anna, die Forscherin, hat den Vortrag gehalten \u2014 mit der Kollegin, der Forscherin.', why: 'An apposition takes the SAME case as the noun it explains. After <i>mit</i> that is the Dativ, so it is <b>der Forscherin</b>.' },
      { wrong: 'Die Strategie f\u00fcr nachhaltiger Entwicklung wurde vorgestellt.', right: 'Die Strategie f\u00fcr nachhaltige Entwicklung wurde vorgestellt.', why: 'In a prepositional attribute the case comes from the preposition. <b>f\u00fcr</b> takes the Akkusativ, so the adjective ending is <b>-e</b>.' },
      { wrong: 'Die im letzten Jahr von internationalen Forschern unter schwierigen Bedingungen durchgef\u00fchrte umfangreiche wissenschaftliche Studie zeigt \u2026', right: 'Die umfangreiche Studie wurde im letzten Jahr von internationalen Forschern durchgef\u00fchrt. Sie zeigt \u2026', why: 'Grammatically this is correct, but the reader waits too long for the noun. Even formal German has a readability limit \u2014 split the sentence.' }
    ], hinglish: 'Inme se chaar galtiyan attribute ke <b>andar</b> ke case aur ending ki hain \u2014 Genitiv, apposition aur preposition. Baaki do order ki hain aur yeh jaanne ki ki noun phrase kab zyada bhari ho gayi hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need one description? Adjective Attribute. Need compressed action? Participial Attribute. Need possession? Genitive Attribute. Need additional specification? Prepositional Attribute. Need maximum information density? Complex Nominal Group.' ], note: 'Memory trick: A2 sentences grow by adding new clauses. C1 sentences grow by enriching the noun phrase. When reading C1 texts, always locate the head noun first, then unpack each attribute one by one.', hinglish: 'Description? Adjective. Kaam ko compress karna hai? Participle. Rishta ya kiska? <b>Genitiv</b> \u2014 aur <b>-s</b> lagana yaad rakho. Extra specification? Preposition wala attribute. Aur padhte waqt hamesha pehle <b>head noun</b> dhoondo, phir ek-ek attribute kholo.' }
  ],
  reading: {
    title: 'Wirtschaftsteil: Wie internationale Lieferketten den Klimawandel spüren',
    titleEn: 'Reading A — Business section: how international supply chains feel climate change',
    tokens: [
      { w: 'Die', role: 'r-nominalgruppe', en: 'the (fem. nom., complex nominal group opener)', hi: '', type: 'Article' },
      { w: 'auf', role: 'r-nominalgruppe', en: 'on (part of embedded prepositional attribute)', hi: '', type: 'Präposition · Dat.' },
      { w: 'internationalen', role: 'r-nominalgruppe', en: 'international (part of nominal group)', hi: '', type: 'Adjective · Dat.' },
      { w: 'Lieferketten', role: 'r-nominalgruppe', en: 'supply chains (part of nominal group)', hi: '', type: 'Noun · plural' },
      { w: 'basierende', role: 'r-nominalgruppe', en: 'based (participial attribute completing the nominal group)', hi: 'आधारित (nominal group को complete करता है)', type: 'Partizip I · Nom.', why: '"Auf internationalen Lieferketten basierende Produktion" fuses a prepositional phrase and a participle into one dense noun-group attribute (this chapter).' },
      { w: 'Produktion', role: 'plain', en: 'production (Satzende)', hi: 'उत्पादन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'spürt', role: 'plain', en: 'feels', hi: 'महसूस करता है', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'ये', type: 'Article' },
      { w: 'Folgen', role: 'plain', en: 'consequences', hi: 'परिणाम', type: 'Noun · plural' },
      { w: 'des', role: 'r-genitivattribut', en: 'of the (masc. gen., genitive attribute)', hi: '', type: 'Article · Gen.' },
      { w: 'Klimawandels', role: 'r-genitivattribut', en: 'climate change (Satzende, genitive attribute)', hi: 'जलवायु परिवर्तन के (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'unmittelbar', role: 'plain', en: 'directly (Satzende)', hi: 'सीधे (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'auf', role: 'r-nominalgruppe', en: 'on (part of embedded prepositional attribute)', hi: '', type: 'Präposition · Akk.' },
      { w: 'mehrere', role: 'r-nominalgruppe', en: 'several', hi: '', type: 'Determiner · Akk.' },
      { w: 'Kontinente', role: 'r-nominalgruppe', en: 'continents (part of nominal group)', hi: '', type: 'Noun · plural' },
      { w: 'verteiltes', role: 'r-nominalgruppe', en: 'distributed (participial attribute completing the nominal group)', hi: 'फैला हुआ (nominal group को complete करता है)', type: 'Partizip II · Nom.' },
      { w: 'Zuliefernetzwerk', role: 'plain', en: 'supplier network (Satzende)', hi: 'आपूर्तिकर्ता नेटवर्क (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'gilt', role: 'plain', en: 'is considered', hi: 'माना जाता है', type: 'Verb · gelten als' },
      { w: 'dabei', role: 'plain', en: 'in this regard', hi: 'इसमें', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'besonders', role: 'plain', en: 'especially', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'anfällig', role: 'plain', en: 'vulnerable (Satzende)', hi: 'संवेदनशील (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The production based on international supply chains feels the consequences of climate change directly by now. A supplier network distributed across several continents is considered particularly vulnerable in this regard.',
    comprehension: [
      { q: 'Was für ein Attribut ist "auf internationalen Lieferketten basierende"?', options: ['Eine Kombination aus präpositionalem und Partizipialattribut', 'Ein Relativsatz', 'Ein Genitivattribut'], answer: 0 },
      { q: 'Was für ein Attribut ist "des Klimawandels"?', options: ['Genitivattribut', 'Präpositionalattribut', 'Apposition'], answer: 0 },
      { q: 'Warum verwendet der Text diese kompakten Attribute?', options: ['Für hohe Informationsdichte im Wirtschaftsjournalismus', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungsstrategiepapier', titleEn: 'Reading B — Government policy paper',
    tokens: [
      { w: 'Die', role: 'r-nominalgruppe', en: 'the (fem. nom., complex nominal group opener)', hi: '(complex nominal group opener)', type: 'Article' },
      { w: 'gestern', role: 'r-nominalgruppe', en: 'yesterday (part of participial attribute)', hi: '(participial attribute ka hissa)', type: 'Adverb' },
      { w: 'vorgestellte', role: 'r-nominalgruppe', en: 'presented (participial attribute)', hi: 'prastut ki gayi (participial attribute)', type: 'Partizip II · Nom.' },
      { w: 'Regierungsstrategie', role: 'plain', en: 'government strategy (Satzende)', hi: 'sarkaari raNaniti (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'für', role: 'r-praeposattribut', en: 'for (part of prepositional attribute)', hi: '(prepositional attribute)', type: 'Präposition · Akk.' },
      { w: 'nachhaltige', role: 'r-praeposattribut', en: 'sustainable (part of prepositional attribute)', hi: '(prepositional attribute ka hissa)', type: 'Adjective · Akk.' },
      { w: 'Entwicklung', role: 'r-praeposattribut', en: 'development (Satzende, prepositional attribute)', hi: 'vikaas ke liye (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wird', role: 'plain', en: 'is', hi: 'ki', type: 'Verb · werden (Präsens)' },
      { w: 'international', role: 'plain', en: 'internationally', hi: 'antarrashtriya star par', type: 'Adverb' },
      { w: 'kritisiert', role: 'plain', en: 'criticized (Satzende)', hi: 'aalochana ki jaa rahi hai (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The government strategy for sustainable development, presented yesterday, is being criticized internationally.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_022_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dieser Gedanke im letzten Absatz ist noch etwas unklar formuliert.', en: 'Timo, this thought in the last paragraph is still phrased a bit unclearly.' },
      { id: 'C1_022_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie würdest du das verdichten?', en: 'How would you condense that?' },
      { id: 'C1_022_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Zum Beispiel so: die seit Jahren stetig steigende, europaweit viel diskutierte Arbeitslosenquote.', en: 'For example like this: the for years steadily rising, Europe-wide much discussed unemployment rate.' },
      { id: 'C1_022_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Beeindruckend, das packt drei Ideen in eine einzige Nominalgruppe.', en: 'Impressive, that packs three ideas into a single noun group.' }
    ],
    transcript: 'Timo, dieser Gedanke im letzten Absatz ist noch etwas unklar formuliert. Wie würdest du das verdichten? Zum Beispiel so: die seit Jahren stetig steigende, europaweit viel diskutierte Arbeitslosenquote. Beeindruckend, das packt drei Ideen in eine einzige Nominalgruppe.',
    translation: 'Timo, this thought in the last paragraph is still phrased a bit unclearly. How would you condense that? For example like this: the for years steadily rising, Europe-wide much discussed unemployment rate. Impressive, that packs three ideas into a single noun group.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dieser' },
      { w: 'Gedanke' },
      { w: 'im' },
      { w: 'letzten' },
      { w: 'Absatz' },
      { w: 'ist' },
      { w: 'noch' },
      { w: 'etwas' },
      { w: 'unklar' },
      { w: 'formuliert' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'würdest' },
      { w: 'du' },
      { w: 'das' },
      { w: 'verdichten' },
      { w: '?', plain: true },
      { w: 'Zum' },
      { w: 'Beispiel' },
      { w: 'so' },
      { w: ':', plain: true },
      { w: 'die' },
      { w: 'seit' },
      { w: 'Jahren' },
      { w: 'stetig' },
      { w: 'steigende' },
      { w: ',', plain: true },
      { w: 'europaweit' },
      { w: 'viel' },
      { w: 'diskutierte' },
      { w: 'Arbeitslosenquote' },
      { w: '.', plain: true },
      { w: 'Beeindruckend' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'packt' },
      { w: 'drei' },
      { w: 'Ideen' },
      { w: 'in' },
      { w: 'eine' },
      { w: 'einzige' },
      { w: 'Nominalgruppe' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was sagt Britta über den letzten Absatz?', qEn: 'What does Britta say about the last paragraph?', options: ['er ist perfekt', 'er ist noch etwas unklar formuliert', 'er ist zu kurz', 'er fehlt komplett'], optionsEn: ['it is perfect', 'it is still worded a little unclearly', 'it is too short', 'it is missing entirely'], answer: 1,
        explain: '"Dieser Gedanke im letzten Absatz ist noch etwas unklar formuliert."' },
      { q: 'Was bündelt Brittas verdichtete Formulierung?', qEn: 'What does Britta\'s condensed phrase pack together?', options: ['eine Idee', 'drei Ideen in eine Nominalgruppe', 'vier Sätze', 'nur ein Adjektiv'], optionsEn: ['an idea', 'three ideas in one noun phrase', 'four sentences', 'only an adjective'], answer: 1,
        explain: '"Das packt drei Ideen in eine einzige Nominalgruppe."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie du den unklaren Gedanken verdichten würdest.", taskEn: "Timo asks how you'd compress the unclear idea.", de: "Zum Beispiel so: die seit Jahren stetig steigenden Kosten der Versorgung.", en: "For example: the steadily rising costs of care over recent years." },
    { task: "Stell die Methode im Vortrag knapp vor.", taskEn: "Present the method concisely in your talk.", de: "Die vom Team entwickelte Methode senkt den Aufwand deutlich.", en: "The method developed by the team markedly reduces the effort." },
    { task: "Sag, worauf deine Ergebnisse basieren.", taskEn: "State what your results are based on.", de: "Die Ergebnisse basieren auf der zweiten Erhebung.", en: "The results are based on the second survey." },
    { task: "Die Tagungsleitung fragt nach dem Titel deines Beitrags.", taskEn: "The conference organisers ask for the title of your paper.", de: "Mein Beitrag heißt: die vom Bund geförderte Untersuchung der Mobilität älterer Menschen.", en: "My paper is called: the federally funded study of older people's mobility." },
    { task: "Eine Kollegin fragt nach der Auswirkung der Nominalgruppe auf die Lesbarkeit.", taskEn: "A colleague asks about the noun phrase's effect on readability.", de: "Die Nominalgruppe verdichtet, aber zu viel Präzision kostet Lesbarkeit.", en: "The noun phrase compresses, but too much precision costs readability." }
  ],
  writing: {
    prompt: 'TASK 1 — Expansion (150 words): Expand simple noun phrases into sophisticated C1 nominal groups using multiple attribute types.\n\nTASK 2 — Compression (100 words): Transform relative-clause-heavy paragraphs into elegant nominal style.\n\nTASK 3 — Academic article (350 words): Use complex nominal groups, participial attributes, and authentic C1 scientific style.',
    starters: ['Die auf umfangreichen empirischen Untersuchungen basierenden Forschungsergebnisse überzeugen.', 'Die Ergebnisse der Untersuchung bestätigen die ursprüngliche Hypothese.'],
    placeholder: 'Die letztes Jahr veröffentlichte Studie zeigt die Auswirkungen des Klimawandels auf die Landwirtschaft...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which attribute type expresses possession/relation compactly?', options: ['Genitive attribute', 'Adjective attribute', 'Apposition'], answer: 0, explain: 'A genitive attribute ("die Ergebnisse der Untersuchung") expresses relation without a relative clause.' },
    gap: { sentence: ['Die letztes Jahr ', ' Studie ist relevant.'], gaps: [ { answer: 'veröffentlichte', accepts: ['veröffentlichte'] } ], explain: 'The participial attribute "veröffentlichte" compresses "die Studie, die veröffentlicht wurde" into a single pre-noun attribute.' },
    match: { q: 'Match each attribute type to its example.', pairs: [ { noun: 'wissenschaftliche Studie', art: 'Adjective attribute' }, { noun: 'die entwickelte Methode', art: 'Participial attribute' }, { noun: 'die Ergebnisse der Untersuchung', art: 'Genitive attribute' }, { noun: 'die Strategie für Entwicklung', art: 'Prepositional attribute' } ] },
    builder: { target: 'Build: "The research results based on extensive empirical investigations are convincing." (complex nominal group)', bank: ['Die', 'auf', 'umfangreichen', 'empirischen', 'Untersuchungen', 'basierenden', 'Forschungsergebnisse', 'überzeugen', '.'], answer: ['Die', 'auf', 'umfangreichen', 'empirischen', 'Untersuchungen', 'basierenden', 'Forschungsergebnisse', 'überzeugen', '.'], roles: { 'basierenden': 'r-nominalgruppe' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie veröffentlichte letztes Jahr ist relevant.', right: 'Die letztes Jahr veröffentlichte Studie ist relevant.', explain: 'The participial attribute must precede the noun with correct adjective-style declension, not follow it like a separate verb phrase.' }
  },
  quiz: [
    { q: 'How do C1 sentences typically grow, compared to A2?', options: ['By enriching the noun phrase, not by adding new clauses', 'By adding more independent clauses', 'They don\'t grow — length stays constant'], answer: 0, explain: 'C1 style compresses information into dense nominal groups rather than chaining clauses.' },
    { q: 'Which attribute type compresses a relative clause into a single pre-noun form?', options: ['Participial attribute', 'Genitive attribute', 'Apposition'], answer: 0, explain: 'Participial attributes (die...entwickelte Methode) replace relative clauses compactly.' },
    { q: 'What is the natural attribute ordering hierarchy?', options: ['Quantity → evaluation → size → age → origin → purpose → noun', 'Random order', 'Noun first, then attributes'], answer: 0, explain: 'Native speakers follow this predictable sequence when stacking attributes.' },
    { q: 'Which register uses the densest nominal groups?', options: ['Scientific/legal/journalistic', 'Casual conversation', 'They are all identical'], answer: 0, explain: 'Formal written registers compress the most information into noun phrases.' },
    { q: 'What is the C1 memory trick for reading dense nominal groups?', options: ['Locate the head noun first, then unpack each attribute one by one', 'Ignore noun phrases entirely', 'Read only the first word'], answer: 0, explain: 'Finding the head noun first makes complex nominal groups much easier to parse.' }
  ],
  takeaways: [
    { c: 'r-partizipialattribut', html: 'Participial attributes (die...entwickelte Methode) compress relative clauses into dense pre-noun modifiers.' },
    { c: 'r-genitivattribut', html: 'Genitive and prepositional attributes (die Ergebnisse der Untersuchung, die Strategie für...) express relation and specification compactly.' },
    { c: 'r-nominalgruppe', html: 'Complex nominal groups combine multiple attribute types, following a natural hierarchy, to achieve scientific and academic information density.' }
  ],
  revisionTips: [
    'Take a simple noun and build it up step by step: noun → adjective → multiple adjectives → participial attribute → full nominal group.',
    'Find a German scientific abstract and identify every genitive, prepositional, and participial attribute in one long noun phrase.',
    'Practise locating the head noun first in three dense sentences, then unpacking each attribute working outward from it.'
  ]
};
window.CHAPTER = CHAPTER;
