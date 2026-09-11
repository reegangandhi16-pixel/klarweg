/* KLARWEG CHAPTER DATA — C1 · Chapter 20
   "Relativsätze erweitern und variieren" — relative clauses as
   information-packaging tools: complex/nested/prepositional/
   genitive relative clauses, relative adverbs, participial &
   nominal alternatives. NOT basic A2/B1 relative pronouns.
   Dialogue: Runa and Timo ONLY. */
const CHAPTER = {
  id: 'c1-20-relativsaetze-erweitern-und-variieren',
  phase: 'C1 · Nominalstil & Präzision',
  number: 20,
  title: 'Relativsätze erweitern und variieren',
  titleEn: 'Expanding and varying relative clauses',
  description: 'A2 uses relative clauses to identify nouns. C1 uses them to organize information efficiently. Always ask: is a relative clause the clearest option, or can the sentence be expressed more elegantly?',
  xp: 610, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 21, title: 'Partizipialattribute verstehen und nutzen', titleEn: 'Understanding and using participial attributes' , href: 'chapter-c1-21-partizipialattribute-verstehen-und-nutzen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Relative clauses <em>organize information</em> — they don\'t just identify nouns.',
    intro: 'Preparing a research article, Runa and Timo weigh whether a relative clause is the clearest way to reference a document or whether a compressed academic alternative reads better — organizing information, not just identifying nouns.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See relative clauses, participial constructions, and nominal style used to control density and clarity'],
    scene: 'Vorbereitung eines Forschungsartikels',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Dokument', role: 'r-subject', en: 'document', hi: 'दस्तावेज़', pron: 'do-ku-MENT', type: 'Noun · neut.' },
        { w: ',', plain: true },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'जिसका', pron: 'owf', type: 'Preposition · fixed' },
        { w: 'das', role: 'r-akkusativ', en: 'which', hi: 'जिसका', pron: 'das', type: 'Relativpronomen · accusative + preposition', why: 'sich beziehen auf + Akkusativ = to refer to, forms a Relativsatz with preposition (this chapter).', ex: 'das Dokument, auf das sich der Bericht bezieht' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'bezieht', role: 'r-verb', en: 'refers', hi: 'संदर्भित करती है', pron: 'be-TSEEKT', type: 'Verb · sich beziehen (Satzende)' },
        { w: ',', plain: true },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'archivieren', role: 'r-verb', en: 'archive', hi: 'संग्रहित करना', pron: 'ar-khi-VEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The document, to which the report refers, we must archive.', hi: 'Woh dastaavez, jiska report sandarbh deti hai, humein sangrahit karna hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Spezifizierung', role: 'r-subject', en: 'specification', hi: 'विवरण', pron: 'shpe-tsi-fi-TSEE-rung', type: 'Noun · fem.', why: 'die Spezifizierung (this chapter).', ex: 'die Spezifizierung, die wir brauchen' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-akkusativ', en: 'which', hi: 'जो', pron: 'dee', type: 'Relativpronomen · accusative' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'detailliert', role: 'r-akkusativ', en: 'detailed', hi: 'विस्तृत', pron: 'de-ta-LEERT', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The specification, which we need, is very detailed.', hi: 'Woh vivaran, jiski humein zaroorat hai, bahut vistrit hai.' },
      { speaker: 'Runa', tokens: [
        { w: 'Wer', role: 'r-subject', en: 'whoever', hi: 'जो कोई', pron: 'vair', type: 'Relativpronomen · verallgemeinernd (recycled B2)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Dokument', role: 'r-akkusativ', en: 'document', hi: 'दस्तावेज़', pron: 'do-ku-MENT', type: 'Noun · neut.' },
        { w: 'erhebt', role: 'r-verb', en: 'collects', hi: 'संग्रह करता है', pron: 'er-HAYPT', type: 'Verb · erheben', why: 'erheben = to collect/raise (this chapter, e.g. Daten erheben).', ex: 'Daten erheben.', exEn: 'To collect data.' },
        { w: ',', plain: true },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'sofort', role: 'r-akkusativ', en: 'immediately', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'archivieren', role: 'r-verb', en: 'archive', hi: 'संग्रहित करना', pron: 'ar-khi-VEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Whoever collects the document should archive it immediately.', hi: 'Jo koi bhi dastaavez sangrah karta hai, use ise abhi sangrahit karna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Bericht', role: 'r-subject', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'aussagekräftig', role: 'r-akkusativ', en: 'compelling', hi: 'प्रभावशाली', pron: 'OWS-zah-guh-kref-tikh', type: 'Adjective', why: 'aussagekräftig = compelling/meaningful (recycled B1/B2).', ex: 'aussagekräftig sein' },
        { w: 'genug', role: 'r-akkusativ', en: 'enough', hi: 'पर्याप्त', pron: 'ge-NOOK', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Is the report compelling enough?', hi: 'Kya report kaafi prabhaavshaali hai?' },
      { speaker: 'Runa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Quelle', role: 'r-subject', en: 'source', hi: 'स्रोत', pron: 'KVE-luh', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'von', role: 'r-preposition', en: 'from', hi: 'जिससे', pron: 'fon', type: 'Preposition · fixed' },
        { w: 'der', role: 'r-dativ', en: 'which', hi: 'जिससे', pron: 'dair', type: 'Relativpronomen · dative + preposition', why: 'von der = from which, forms a Relativsatz with preposition (this chapter).', ex: 'die Quelle, von der wir das Zitat haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Zitat', role: 'r-akkusativ', en: 'quote', hi: 'उद्धरण', pron: 'tsi-TAHT', type: 'Noun · neut.' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'zuverlässig', role: 'r-akkusativ', en: 'reliable', hi: 'भरोसेमंद', pron: 'TSOO-fer-le-sikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes. The source, from which we have the quote, is very reliable.', hi: 'Haan. Woh srot, jisse humein uddharan mila hai, bahut bharosemand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'können', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'KÖ-nen', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Projekt', role: 'r-akkusativ', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: 'abschließen', role: 'r-verb', en: 'conclude', hi: 'पूरा करना', pron: 'AP-shlee-sen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good. Then we can conclude the project.', hi: 'Achha. Toh hum pariyojana poori kar sakte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'A2 uses relative clauses to <b>identify</b> nouns. C1 uses them to <b>organize information efficiently</b>. Always ask: is a <span class="de r-relativ">relative clause</span> the clearest option, or can the sentence be expressed more elegantly?' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is RELATIVSÄTZE ERWEITERN UND VARIIEREN at C1 level — relative clauses as information-packaging tools (complex/nested/prepositional/genitive relative clauses, relative adverbs, and stylistic alternatives like participial constructions and nominal style), NOT basic der/die/das relative pronouns (already mastered). Covered: complex relative clauses (Die Studie, die gestern veröffentlicht wurde,...); genitive relative clauses with dessen/deren for possession; prepositional relative clauses (auf die, mit dem, über den); relative adverbs (worauf, wodurch, womit, worüber, wobei, weshalb) referring to whole ideas rather than single nouns; compressing relative clauses into participial constructions (Die im Rahmen der Studie erhobenen Ergebnisse...) and nominal style for academic/journalistic density. Do NOT expect or require basic relative pronoun formation — this chapter assumes that is mastered; do not flag its absence. The most important things to catch: repetitive short relative clauses ("der...der...der") where compression would be more elegant; incorrect preposition placement in prepositional relative clauses; avoiding dessen/deren where genitive relative clauses would be more precise; excessively long, unreadable nested sentences; not using participial/nominal alternatives where academic register calls for compression. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag repetitive relative clause chains that should be varied or compressed; check dessen/deren usage for possession; check prepositional relative clause structure (preposition + relative pronoun matching the verb\'s fixed preposition); if unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Elegance check:</b> one sentence on whether the learner varied relative clause structures or compressed them appropriately for the register.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you vary relative clauses and compress them elegantly for academic register. Ready for Konjunktiv I in academic language next.', mid: 'Good. Re-read the Information Packaging Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: relative clauses organize information, they don\'t just identify nouns.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: 'die', role: 'r-relativ' }, { w: 'veröffentlicht', role: 'plain' }, { w: 'wurde', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: relative clauses organize information efficiently, not just identify nouns.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Runa and Timo prepare a research article, using complex, prepositional, and genitive relative clauses naturally.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key academic expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master complex, prepositional, and genitive relative clauses, relative adverbs, and stylistic alternatives.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific article and newspaper commentary, identifying relative clauses and compressed alternatives.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify relative clauses and sentence organization in a lecture and research presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Explain research and describe institutions using varied relative constructions naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite repetitive sentences elegantly, and write a 350-word academic article with varied relative structures.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill relative clause expansion/reduction, preposition selection, and participial transformation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 610 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Relative clause expansion/reduction drills, preposition selection, and a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Information Packaging Model, Compression Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Studie, die gestern veröffentlicht wurde, ist sehr relevant.', text: 'Use a standard relative clause to add information elegantly' },
    { de: 'Der Professor, dessen Forschung international anerkannt ist, hat diese Methode entwickelt.', text: 'Use a genitive relative clause with "dessen" for possession' },
    { de: 'Die Methode, auf die sich der Artikel bezieht, wurde bereits mehrfach zitiert.', text: 'Use a prepositional relative clause matching a fixed verb-preposition pair' },
    { de: 'Die im Rahmen der Studie erhobenen Ergebnisse überzeugen.', text: 'Compress a relative clause into a participial construction' },
    { de: 'Das ist der Grund, weshalb wir diese Studie zitieren sollten.', text: 'Use a relative adverb referring to a whole idea' }
  ],
  vocab: [
    { de: 'sich beziehen auf', pos: 'verb (fixed with preposition)', level: 'C1', register: 'written', en: 'to refer to', hi: 'संदर्भित करना', ex: 'Die Methode, auf die sich der Artikel bezieht, wurde mehrfach zitiert.', exEn: 'The method to which the article refers has been cited multiple times.', exHi: 'Vidhi, jispar lekh sandarbhit karta hai, kai baar udhrit ki gayi hai.', ex2: 'Der Bericht bezieht sich auf frühere Studien.', ex2En: 'The report refers to earlier studies.', ex2Hi: 'Report pehle ke adhyayanon ka sandarbh deta hai.', conj: { praesens: 'bezieht sich auf', praeteritum: 'bezog sich auf', perfekt: 'hat sich bezogen auf' } },
    { de: 'erheben', pos: 'verb', level: 'C1', register: 'written', en: 'to collect (data)', hi: 'एकत्रित करना', ex: 'Die im Rahmen der Studie erhobenen Daten sind aussagekräftig.', exEn: 'The data collected within the study is meaningful.', exHi: 'Adhyayan mein ekatrit kiya gaya data mahatvapoorn hai.', ex2: 'Die Forscher haben umfangreiche Daten erhoben.', ex2En: 'The researchers have collected extensive data.', ex2Hi: 'Shodhkartaon ne vistrit data ekatrit kiya hai.', conj: { praesens: 'erhebt', praeteritum: 'erhob', perfekt: 'hat erhoben' } },
    { de: 'die Spezifizierung', art: 'die', gender: 'f', plural: 'Spezifizierungen', pos: 'noun', level: 'C1', register: 'written', en: 'specification', hi: 'विनिर्देश', ex: 'Die Spezifizierung der Methode erfolgt im nächsten Abschnitt.', exEn: 'The specification of the method follows in the next section.', exHi: 'Vidhi ki specification agle section mein hogi.', ex2: 'Eine genaue Spezifizierung ist notwendig.', ex2En: 'A precise specification is necessary.', ex2Hi: 'Ek sateek specification zaroori hai.' },
    { de: 'archivieren', pos: 'verb', level: 'C1', register: 'written', en: 'to archive', hi: 'संग्रहीत करना', ex: 'Die Bibliothek archiviert diese Zeitschriften.', exEn: 'The library archives these journals.', exHi: 'Library in journals ko archive karti hai.', ex2: 'Alle Dokumente wurden sorgfältig archiviert.', ex2En: 'All documents have been carefully archived.', ex2Hi: 'Sabhi documents ko saavdhaani se archive kiya gaya.', conj: { praesens: 'archiviert', praeteritum: 'archivierte', perfekt: 'hat archiviert' } },
    { de: 'aussagekräftig', pos: 'adjective', level: 'C1', register: 'written', en: 'meaningful, telling', hi: 'सारगर्भित', ex: 'Die Ergebnisse sind aussagekräftig und überzeugend.', exEn: 'The results are meaningful and convincing.', exHi: 'Parinaam saargarbhit aur convincing hain.', ex2: 'Eine aussagekräftige Stichprobe ist entscheidend.', ex2En: 'A meaningful sample is crucial.', ex2Hi: 'Ek saargarbhit namoona mahatvapoorn hai.' }
  ],
  grammar: [
    { title: 'Warum Relativsätze existieren', body: [ 'Main Idea → Additional Information → Specification → Restriction → Elegant Information Packaging. Relative clauses prevent repetition while increasing precision.' ], hinglish: 'Relative clause ka kaam do sentences ko ek mein jodna hai, bina noun dohraye. C1 par sawaal yeh nahi rehta ki relative clause bana sakte ho ya nahi \u2014 sawaal yeh hai ki kab use rakhna hai aur kab use chhota karke participle ya nominal style mein badal dena hai.' },
    { title: 'Komplexe Relativsätze', body: [ 'Die Studie, die gestern veröffentlicht wurde, ... / Der Professor, dessen Forschung international anerkannt ist, ... / Die Methode, auf die sich der Artikel bezieht, ... — authentic C1 examples native speakers prefer over short, choppy sentences.' ], hinglish: 'Teeno examples mein ek hi baat pakki hai \u2014 relative clause ek Nebensatz hai, isliye uska conjugated verb <b>end</b> mein jaata hai: <span class="de">\u2026, die gestern ver\u00f6ffentlicht <b>wurde</b>, \u2026</span>. Aur clause dono taraf comma se ghira rehta hai.' },
    { title: 'Relativsätze mit Präpositionen', body: [ 'an dem, mit dem, über den, für die, auf die, unter denen, zwischen denen, gegen die — the preposition is determined by the fixed verb-preposition combination (e.g. "sich beziehen auf" → "auf die").' ], hinglish: 'Yahan do cheezein tay karni hoti hain. Preposition <b>verb</b> se aata hai \u2014 <i>sich beziehen auf</i> hai, isliye <b>auf</b>. Aur case bhi usi preposition se aata hai. Sabse important baat: preposition relative pronoun se <b>pehle</b> aata hai, <span class="de">auf die sich der Artikel bezieht</span> \u2014 English ki tarah use peeche nahi chhoda jaata.' },
    { title: 'Genitiv-Relativsätze (dessen/deren)', body: [ 'Der Forscher, dessen Theorie... / Die Universität, deren Bibliothek... — "dessen" (masc./neut.) and "deren" (fem./plural) express possession within a relative clause, more elegant than a separate possessive sentence.' ], hinglish: '<b>dessen</b> aur <b>deren</b> ka matlab hai \u201cjiska\u201d. Chunav us noun se hota hai jo <b>comma se pehle</b> hai \u2014 masculine aur neuter ke liye <b>dessen</b>, feminine aur plural ke liye <b>deren</b>. Aur uske baad wale noun par koi article nahi lagta: <span class="de">dessen Theorie</span>, na ki <i>dessen die Theorie</i>.' },
    { title: 'Relativadverbien', body: [ 'worauf, wodurch, womit, worüber, wobei, weshalb, woran — these refer to a whole preceding idea or situation, not a single noun, distinct from der/die/das relative pronouns.' ], hinglish: 'Yeh alag hain \u2014 yeh kisi ek noun ko nahi, balki poori pichli baat ko refer karte hain. Sabse common <b>was</b> hai: <span class="de">Er kam zu sp\u00e4t, was mich ge\u00e4rgert hat.</span> Yahan <i>was</i> \u201clate aana\u201d poori baat ko uthata hai. Aur agar verb koi preposition maangta hai, to <b>wo(r)-</b> form banti hai \u2014 <b>wodurch</b>, <b>wor\u00fcber</b>.' },
    { title: 'Relativsätze ersetzen (Stylistic Alternatives)', body: [ 'Relative Clause → Partizip I → Partizip II → Nominal Style → Prepositional Phrase. "Die Ergebnisse, die im Rahmen der Studie erhoben wurden" compresses to "Die im Rahmen der Studie erhobenen Ergebnisse" — typical academic compression.' ], hinglish: 'Academic German mein relative clause ko aksar chhota kar diya jaata hai: <span class="de">Die Ergebnisse, die im Rahmen der Studie erhoben wurden</span> se <span class="de">Die im Rahmen der Studie erhobenen Ergebnisse</span>. Isse text zyada dense aur formal lagta hai. Par yeh har jagah achha nahi hai \u2014 agar sentence padhne mein bhaari ho jaaye, to relative clause hi behtar hai.' },
    {
      title: 'Partizipialkonstruktion: wie man sie bildet',
      body: [
        'The compression this chapter recommends follows a fixed recipe. Take the relative clause, drop the pronoun and the conjugated verb, move the participle in front of the noun, and give it an adjective ending.',
        'Which participle you use depends on voice: <b>Partizip I</b> for something active and ongoing, <b>Partizip II</b> for something passive or completed.'
      ],
      table: {
        head: ['Relative clause', 'Compressed', 'Type'],
        rows: [
          ['die Ergebnisse, die erhoben <b>wurden</b>', 'die erhoben<b>en</b> Ergebnisse', 'Partizip II \u2014 passive'],
          ['der Professor, der in Berlin <b>forscht</b>', 'der in Berlin forschend<b>e</b> Professor', 'Partizip I \u2014 active'],
          ['ein Problem, das nicht gel\u00f6st <b>wurde</b>', 'ein <b>un</b>gel\u00f6st<b>es</b> Problem', 'Partizip II + un-'],
          ['die Studie, die gerade <b>l\u00e4uft</b>', 'die gerade laufend<b>e</b> Studie', 'Partizip I']
        ]
      },
      note: 'Partizip I is formed with <b>Infinitiv + d</b> (<i>laufen \u2192 laufend</i>), then the adjective ending. The participle keeps normal adjective endings, so <i>die erhobenen Ergebnisse</i>, not <i>die erhobene Ergebnisse</i>.',
      hinglish: 'Jo compression yeh chapter sikhata hai, uska ek fix tareeka hai. Relative clause lo, usme se pronoun aur conjugated verb hata do, participle ko noun ke <b>aage</b> le aao, aur uspar adjective ki ending laga do. Kaunsa participle lagega yeh voice se tay hota hai \u2014 agar kaam ho raha hai to <b>Partizip I</b> (<i>laufen</i> se <b>laufend</b>, matlab Infinitiv + d), aur agar kaam ho chuka hai ya passive hai to <b>Partizip II</b>. Sabse zyada galti ending mein hoti hai: participle ab adjective ban gaya hai, isliye <span class="de">die erhoben<b>en</b> Ergebnisse</span> \u2014 <i>die erhobene Ergebnisse</i> galat hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to typical use.' ], table: { head: ['Structure', 'Typical Use'], rows: [ ['Standard Relative Clause', 'Additional information'], ['Prepositional Relative Clause', 'Verb-preposition combinations'], ['Genitive Relative Clause', 'Possession'], ['Relative Adverb', 'Reference to ideas or situations'], ['Participial Phrase', 'Academic compression'], ['Nominal Style', 'Scientific writing'] ] }, hinglish: 'Structure aur uske use ka table \u2014 isse tay karo ki kahan simple relative clause rakhna hai aur kahan compression karni hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are mechanical \u2014 verb-final order, preposition fronting, the gender of dessen/deren, and the case coming from the clause\u2019s own verb. The last two are about endings and about knowing when to stop compressing.' ], mistakes: [
      { wrong: 'Die Studie, die gestern wurde ver\u00f6ffentlicht, ist wichtig.', right: 'Die Studie, die gestern ver\u00f6ffentlicht wurde, ist wichtig.', why: 'A relative clause is a subordinate clause, so the conjugated verb goes to the very END \u2014 after the Partizip II.' },
      { wrong: 'Die Methode, die sich der Artikel bezieht, ist neu.', right: 'Die Methode, auf die sich der Artikel bezieht, ist neu.', why: '<i>sich beziehen</i> requires <b>auf</b>, and in a relative clause the preposition moves to the FRONT, before the pronoun.' },
      { wrong: 'Die Universit\u00e4t, dessen Bibliothek neu ist, \u2026', right: 'Die Universit\u00e4t, deren Bibliothek neu ist, \u2026', why: 'The pronoun matches the noun BEFORE the comma. <i>die Universit\u00e4t</i> is feminine, so it takes <b>deren</b>.' },
      { wrong: 'Die im Rahmen der Studie erhobene Ergebnisse sind eindeutig.', right: 'Die im Rahmen der Studie erhobenen Ergebnisse sind eindeutig.', why: 'In a participial attribute the participle still takes a normal adjective ending \u2014 plural after <i>die</i> means <b>-en</b>.' },
      { wrong: 'Der Kollege, den ich vertraue, arbeitet hier.', right: 'Der Kollege, dem ich vertraue, arbeitet hier.', why: 'The case comes from the verb INSIDE the relative clause. <i>vertrauen</i> takes the Dativ, so the pronoun is <b>dem</b>.' },
      { wrong: 'Er kam zu sp\u00e4t, was mich ge\u00e4rgert hat, aber wodurch niemand \u00fcberrascht war.', right: 'Er kam zu sp\u00e4t, was mich ge\u00e4rgert hat \u2014 \u00fcberrascht war dar\u00fcber niemand.', why: 'Chaining two relative adverbs onto one clause is hard to read. Split the sentence instead \u2014 compression has limits.' }
    ], hinglish: 'Inme se chaar galtiyan mechanical hain \u2014 verb end mein na jaana, preposition aage na aana, <b>dessen/deren</b> ka gender galat, aur case ko clause ke apne verb se na lena. Aakhri do ending ki hain aur yeh jaanne ki ki compression kahan rok deni chahiye.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need extra information? Relative Clause. Need possession? dessen/deren. Need a verb with a preposition? Prepositional Relative Clause. Need concise academic writing? Participial Construction. Need maximum density? Nominal Style.' ], note: 'Memory trick: A2 uses relative clauses to identify nouns. C1 uses them to organize information efficiently. Always ask: is a relative clause the clearest option, or can the sentence be expressed more elegantly?', hinglish: 'Extra jaankaari? Relative clause. Kiska hai? <b>dessen/deren</b>. Verb apna preposition maangta hai? Preposition ko pronoun se pehle rakho. Academic writing? Participle mein compress karo. Aur likhne ke baad ek baar padho \u2014 agar sentence samajhne mein ruk-ruk kar padhna pad raha hai, to compression zyada ho gayi hai.' }
  ],
  reading: {
    title: 'Umweltreport: Mikroplastik im Zürichsee entdeckt',
    titleEn: 'Reading A — Environmental report: microplastics found in Lake Zurich',
    tokens: [
      { w: 'Die', role: 'r-nominalstil', en: 'the (fem. plural nom., compressed nominal style)', hi: '', type: 'Article' },
      { w: 'im', role: 'r-nominalstil', en: 'in the (Kontraktion)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Frühjahr', role: 'r-nominalstil', en: 'spring (part of compressed phrase)', hi: '', type: 'Noun · neut.' },
      { w: 'durchgeführten', role: 'r-nominalstil', en: 'conducted (participle-as-adjective, replacing a relative clause)', hi: 'की गई (participle-as-adjective)', type: 'Partizip II · Nom.', why: '"Die im Frühjahr durchgeführten Wasseranalysen" compresses "die Analysen, die im Frühjahr durchgeführt wurden" into one dense noun phrase (this chapter).' },
      { w: 'Wasseranalysen', role: 'plain', en: 'water analyses (Satzende)', hi: 'जल विश्लेषण (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'दिखाते हैं', type: 'Verb (Präsens)' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'überraschend', role: 'plain', en: 'surprisingly', hi: 'आश्चर्यजनक रूप से', type: 'Adverb' },
      { w: 'hohe', role: 'plain', en: 'high (Satzende)', hi: 'उच्च (Satzende)', type: 'Adjective' },
      { w: 'Mikroplastik-Konzentration', role: 'plain', en: 'microplastic concentration (Satzende)', hi: 'माइक्रोप्लास्टिक सांद्रता (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'weshalb', role: 'r-relativadverb', en: 'why (relative adverb, referring to the whole preceding clause)', hi: 'जिस वजह से (relative adverb)', type: 'Relativadverb', why: '"weshalb" refers back to the entire preceding statement, not to a single noun (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'kantonale', role: 'plain', en: 'cantonal', hi: 'कैंटन', type: 'Adjective' },
      { w: 'Umweltbehörde', role: 'plain', en: 'environmental authority (Satzende)', hi: 'पर्यावरण प्राधिकरण (Satzende)', type: 'Noun · fem.' },
      { w: 'nun', role: 'plain', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'strengere', role: 'plain', en: 'stricter', hi: 'सख़्त', type: 'Adjective' },
      { w: 'Grenzwerte', role: 'plain', en: 'limit values (Satzende)', hi: 'सीमा मूल्य (Satzende)', type: 'Noun · plural' },
      { w: 'fordert', role: 'plain', en: 'demands (Satzende)', hi: 'माँग करता है (Satzende)', type: 'Verb · fordern' },
      { w: '.', plain: true },
      { w: 'Besonders', role: 'plain', en: 'especially', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'betroffen', role: 'plain', en: 'affected (Satzende)', hi: 'प्रभावित (Satzende)', type: 'Adjective' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'jene', role: 'r-relativpron', en: 'those (demonstrative, antecedent of the relative clause)', hi: 'वे', type: 'Determiner' },
      { w: 'Uferabschnitte', role: 'plain', en: 'shore sections (Satzende)', hi: 'किनारे के हिस्से (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'an', role: 'r-relativpron', en: 'at (preposition + relative pronoun)', hi: 'जिन पर', type: 'Präposition · Dat.' },
      { w: 'denen', role: 'r-relativpron', en: 'which (Satzende, relative pronoun with preposition)', hi: '(Satzende)', type: 'Relativpronomen · Dat.', why: '"an denen" combines a preposition directly with the relative pronoun, a hallmark of elevated written style (this chapter).' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'Wassersportler', role: 'plain', en: 'water sports enthusiasts (Satzende)', hi: 'जल क्रीड़ा प्रेमी (Satzende)', type: 'Noun · plural' },
      { w: 'regelmäßig', role: 'plain', en: 'regularly', hi: 'नियमित रूप से', type: 'Adverb' },
      { w: 'aufhalten', role: 'plain', en: 'spend time (Satzende)', hi: 'समय बिताते हैं (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The water analyses conducted in spring show a surprisingly high concentration of microplastics, which is why the cantonal environmental authority is now demanding stricter limit values. Particularly affected are those shore sections at which water sports enthusiasts regularly spend time.',
    comprehension: [
      { q: 'Was ersetzt "die im Frühjahr durchgeführten"?', options: ['Einen Relativsatz ("die Analysen, die im Frühjahr durchgeführt wurden")', 'Einen Hauptsatz', 'Eine Frage'], answer: 0 },
      { q: 'Welche Funktion hat "weshalb"?', options: ['Relativadverb, bezieht sich auf die ganze Aussage', 'Relativpronomen für ein Nomen', 'Frage'], answer: 0 },
      { q: 'Was zeigt "an denen"?', options: ['Präposition direkt mit Relativpronomen kombiniert', 'Ein Fragewort', 'Eine Zeitangabe'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar', titleEn: 'Reading B — Newspaper commentary',
    tokens: [
      { w: 'Die', role: 'r-nominalstil', en: 'the (plural nom., compressed nominal style)', hi: '(compressed nominal style)', type: 'Article' },
      { w: 'gestern', role: 'r-nominalstil', en: 'yesterday (part of compressed phrase)', hi: '(compressed phrase ka hissa)', type: 'Adverb' },
      { w: 'beschlossenen', role: 'r-nominalstil', en: 'decided (participle-as-adjective, replacing a relative clause)', hi: 'tay ki gayi (participle-as-adjective)', type: 'Partizip II · Nom.' },
      { w: 'Maßnahmen', role: 'plain', en: 'measures (Satzende)', hi: 'upaay (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'betreffen', role: 'plain', en: 'affect', hi: 'prabhaavit karte hain', type: 'Verb (Präsens)' },
      { w: 'vor', role: 'plain', en: 'above all', hi: '', type: 'Präposition · Dat.' },
      { w: 'allem', role: 'plain', en: '(part of "vor allem")', hi: 'khaas taur par', type: 'Pronomen · Dat.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Industrie', role: 'plain', en: 'industry (Satzende)', hi: 'udyog ko (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The measures decided yesterday affect above all the industry.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_020_L001', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, sollen wir das Dokument, das wir letzte Woche diskutiert haben, noch einmal zitieren?', en: 'Timo, should we quote the document we discussed last week again?' },
      { id: 'C1_020_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielleicht reicht auch ein kürzerer Verweis darauf statt eines ganzen Relativsatzes.', en: 'Maybe a shorter reference to it is enough instead of a whole relative clause.' },
      { id: 'C1_020_L003', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Guter Punkt, das genannte Dokument könnten wir einfach als Fußnote einfügen.', en: 'Good point, we could simply insert the aforementioned document as a footnote.' },
      { id: 'C1_020_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, das liest sich viel kompakter.', en: 'Exactly, that reads much more compactly.' }
    ],
    transcript: 'Timo, sollen wir das Dokument, das wir letzte Woche diskutiert haben, noch einmal zitieren? Vielleicht reicht auch ein kürzerer Verweis darauf statt eines ganzen Relativsatzes. Guter Punkt, das genannte Dokument könnten wir einfach als Fußnote einfügen. Genau, das liest sich viel kompakter.',
    translation: 'Timo, should we quote the document we discussed last week again? Maybe a shorter reference to it is enough instead of a whole relative clause. Good point, we could simply insert the aforementioned document as a footnote. Exactly, that reads much more compactly.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'sollen' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'Dokument' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'wir' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'diskutiert' },
      { w: 'haben' },
      { w: ',', plain: true },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'zitieren' },
      { w: '?', plain: true },
      { w: 'Vielleicht' },
      { w: 'reicht' },
      { w: 'auch' },
      { w: 'ein' },
      { w: 'kürzerer' },
      { w: 'Verweis' },
      { w: 'darauf' },
      { w: 'statt' },
      { w: 'eines' },
      { w: 'ganzen' },
      { w: 'Relativsatzes' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Punkt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'genannte' },
      { w: 'Dokument' },
      { w: 'könnten' },
      { w: 'wir' },
      { w: 'einfach' },
      { w: 'als' },
      { w: 'Fußnote' },
      { w: 'einfügen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'liest' },
      { w: 'sich' },
      { w: 'viel' },
      { w: 'kompakter' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was erwägen sie erneut zu zitieren?', qEn: 'What do they consider quoting again?', options: ['ein neues Buch', 'das Dokument von letzter Woche', 'einen Artikel', 'eine E-Mail'], optionsEn: ['a new book', 'last week\'s document', 'an article', 'an email'], answer: 1,
        explain: '"Sollen wir das Dokument, das wir letzte Woche diskutiert haben, noch einmal zitieren?"' },
      { q: 'Welche Alternative schlägt Timo vor?', qEn: 'What alternative does Timo suggest?', options: ['ganz weglassen', 'ein kürzerer Verweis', 'einen längeren Absatz', 'ein neues Kapitel'], optionsEn: ['leave it out entirely', 'a shorter reference', 'a longer paragraph', 'a new chapter'], answer: 1,
        explain: '"Vielleicht reicht auch ein kürzerer Verweis darauf."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, ob ihr das Dokument noch einmal zitieren sollt.", taskEn: "Timo asks whether you should cite the document again.", de: "Ein kürzerer Verweis reicht: das Dokument, auf das wir uns beziehen, ist archiviert.", en: "A shorter reference is enough: the document we refer to is archived." },
    { task: "Stell die Studie vor, auf die sich dein Vortrag stützt.", taskEn: "Present the study your talk relies on.", de: "Die Studie, die 2023 erhoben wurde, ist besonders aussagekräftig.", en: "The study collected in 2023 is particularly informative." },
    { task: "Stell die Forscherin vor, deren Modell ihr nutzt.", taskEn: "Introduce the researcher whose model you use.", de: "Die Forscherin, deren Modell wir verwenden, arbeitet in Wien.", en: "The researcher whose model we use works in Vienna." },
    { task: "Beschreibe das Verfahren, mit dem ihr gearbeitet habt.", taskEn: "Describe the procedure you worked with.", de: "Das Verfahren, mit dem wir erhoben haben, gilt als Standard.", en: "The procedure we collected with counts as standard." },
    { task: "Die Herausgeberin bittet dich, den langen Satz für den Abstract zu kürzen. Was liest du ihr vor?", taskEn: "The editor asks you to shorten the long sentence for the abstract. What do you read out to her?", de: "Die 2023 erhobene Studie zeigt einen deutlichen Zusammenhang.", en: "The study collected in 2023 shows a clear correlation." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Rewrite repetitive sentences using elegant, varied relative clauses.\n\nTASK 2 — Compression (100 words): Rewrite long relative-clause sentences into participial and nominal alternatives, then compare stylistic effects.\n\nTASK 3 — Academic article (350 words): Demonstrate varied relative clauses, participial alternatives, and sophisticated information packaging.',
    starters: ['Die im Rahmen der Studie erhobenen Ergebnisse überzeugen.', 'Der Professor, dessen Forschung international anerkannt ist, hat diese Methode entwickelt.'],
    placeholder: 'Die Studie, die gestern veröffentlicht wurde, ist sehr relevant. Die Methode, auf die sich der Artikel bezieht...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which structure expresses possession within a relative clause?', options: ['dessen / deren', 'auf die', 'weshalb'], answer: 0, explain: '"Dessen" (masc./neut.) and "deren" (fem./plural) are genitive relative pronouns expressing possession.' },
    gap: { sentence: ['Die Methode, auf die sich der Artikel ', ', wurde mehrfach zitiert.'], gaps: [ { answer: 'bezieht', accepts: ['bezieht'] } ], explain: '"Sich beziehen auf" is the fixed verb-preposition pair matching "auf die" in the prepositional relative clause.' },
    match: { q: 'Match each structure to its typical use.', pairs: [ { noun: 'dessen / deren', art: 'Possession' }, { noun: 'auf die / mit dem', art: 'Verb-preposition combinations' }, { noun: 'weshalb / wodurch', art: 'Reference to ideas or situations' }, { noun: 'die erhobenen Ergebnisse', art: 'Academic compression (participial)' } ] },
    builder: { target: 'Build: "The study, which was published yesterday, is very relevant." (standard relative clause)', bank: ['Die', 'Studie', ',', 'die', 'gestern', 'veröffentlicht', 'wurde', ',', 'ist', 'sehr', 'relevant', '.'], answer: ['Die', 'Studie', ',', 'die', 'gestern', 'veröffentlicht', 'wurde', ',', 'ist', 'sehr', 'relevant', '.'], roles: { 'die': 'r-relativ' } },
    errorCorrection: { title: 'Error correction', wrong: 'Der Professor, der Forschung ist bekannt, hat die Methode entwickelt.', right: 'Der Professor, dessen Forschung bekannt ist, hat die Methode entwickelt.', explain: 'Possession within a relative clause requires the genitive relative pronoun "dessen", not "der...ist" as a separate structure.' }
  },
  quiz: [
    { q: 'What is the C1 purpose of relative clauses, beyond identifying nouns?', options: ['Organizing information efficiently', 'Only naming objects', 'Replacing all main clauses'], answer: 0, explain: 'C1 relative clauses are an information-packaging tool, not just identification.' },
    { q: 'Which relative pronoun expresses possession?', options: ['dessen / deren', 'die / das', 'wo / was'], answer: 0, explain: '"Dessen" and "deren" are genitive relative pronouns for possession.' },
    { q: 'What determines the preposition in a prepositional relative clause?', options: ['The verb\'s fixed preposition combination', 'Random choice', 'The noun\'s gender only'], answer: 0, explain: 'The preposition matches fixed verb-preposition pairs like "sich beziehen auf".' },
    { q: 'What do relative adverbs like "weshalb" refer to?', options: ['A whole preceding idea or situation', 'A single noun only', 'Nothing — they are meaningless'], answer: 0, explain: 'Relative adverbs reference entire ideas, unlike der/die/das which reference nouns.' },
    { q: 'What is the C1 memory trick for this chapter?', options: ['Ask whether a relative clause is the clearest option, or if compression is more elegant', 'Always use the longest possible sentence', 'Avoid relative clauses entirely'], answer: 0, explain: 'Native speakers alternate between relative clauses, participial constructions, and nominal style for rhythm and clarity.' }
  ],
  takeaways: [
    { c: 'r-relativ', html: 'Complex relative clauses (die, dessen, deren, prepositional) pack additional information elegantly without repetition.' },
    { c: 'r-relativadverb', html: 'Relative adverbs (weshalb, wodurch, worauf) refer to whole ideas or situations, distinct from noun-referencing der/die/das.' },
    { c: 'r-nominalstil', html: 'Compressing relative clauses into participial constructions and nominal style creates the information density expected in academic and journalistic German.' }
  ],
  revisionTips: [
    'Take three simple sentences using "der...ist..." and rewrite each with dessen/deren for possession.',
    'Find a German academic abstract and identify every compressed participial phrase that could be expanded back into a relative clause.',
    'Practise converting one relative clause into a participial construction and one into nominal style, comparing the stylistic effect.'
  ]
};
window.CHAPTER = CHAPTER;
