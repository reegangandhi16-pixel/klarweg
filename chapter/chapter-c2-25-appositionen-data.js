/* KLARWEG CHAPTER DATA — C2 · Chapter 25
   "Appositionen" — native-level information packaging: using an apposition
   (a second noun phrase renaming the same referent) to compress a relative
   clause into an elegant, tightly-packed noun phrase. Covers restrictive vs.
   explanatory apposition, punctuation, and register (academic/scientific/
   journalistic/legal/literary). Vocabulary curated around roles/titles that
   naturally appear in apposition (academia, politics, research, administration,
   literature, media) plus core grammar terms. Follows the Chapter 24 template
   exactly. Dialogue: Jutta and Timo only. */
const CHAPTER = {
  id: 'c2-25-appositionen',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 25,
  title: 'Appositionen',
  titleEn: 'Appositions',
  description: 'The noun tells you who someone is. The apposition is the business card pinned right next to the name badge — profession, title, or function, given instantly, without a new sentence.',
  xp: 1825, time: 140, difficulty: 'Mastery',
  nextChapter: { number: 26, title: 'Nominalstil', titleEn: 'Nominal style' , href: 'chapter-c2-26-nominalstil.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every noun wears a <em>name badge</em> — the apposition is its business card.',
    intro: 'Editing an academic article, Jutta and Timo replace long relative clauses naming the author and the chancellor with elegant appositions — a business card pinned right next to each name badge.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'Decode dense academic noun phrases instantly by spotting the comma-set apposition riding along the main noun'],
    scene: 'Redaktion eines Fachartikels',
    femaleSpeakers: ['Jutta'],
    dialogue: [
      { speaker: 'Jutta', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Apposition', role: 'r-akkusativ', en: 'apposition', hi: 'समानाधिकरण', pron: 'a-po-zi-TSYON', type: 'Noun · fem.', why: 'die Apposition = an apposition, a noun placed beside another to identify it, set off by commas (this chapter).', ex: 'Wir fügen eine Apposition hinzu.', exEn: 'We add an apposition.' },
        { w: 'hinzufügen', role: 'r-verb', en: 'add', hi: 'जोड़ना', pron: 'HIN-tsoo-fü-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We should add an apposition.', hi: 'Humein ek samaanaadhikaran jodna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Verfasser', role: 'r-subject', en: 'author', hi: 'लेखक', pron: 'fer-FA-ser', type: 'Noun · masc.', why: 'der Verfasser (this chapter).', ex: 'der Verfasser des Berichts' },
        { w: ',', plain: true },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'bekannter', role: 'r-subject', en: 'well-known', hi: 'प्रसिद्ध', pron: 'be-KAN-ter', type: 'Adjective' },
        { w: 'Journalist', role: 'r-subject', en: 'journalist', hi: 'पत्रकार', pron: 'shoor-na-LIST', type: 'Noun · masc.', why: 'a noun-phrase apposition set off by commas: der Verfasser, ein bekannter Journalist, (this chapter).', ex: 'der Verfasser, ein bekannter Journalist, kommt heute' },
        { w: ',', plain: true },
        { w: 'kommt', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'komt', type: 'Verb · kommen' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'vorbei', role: 'r-akkusativ', en: 'by', hi: 'यहाँ', pron: 'for-BY', type: 'Adverb (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The author, a well-known journalist, comes by today.', hi: 'Lekhak, ek prasiddh patrakaar, aaj yahaan aata hai.' },
      { speaker: 'Jutta', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Bundeskanzlerin', role: 'r-subject', en: 'federal chancellor (f)', hi: 'संघीय चांसलर', pron: 'BUN-des-kants-le-rin', type: 'Noun · fem.', why: 'die Bundeskanzlerin (this chapter).', ex: 'die Bundeskanzlerin, Frau Weber,' },
        { w: ',', plain: true },
        { w: 'Frau', role: 'r-subject', en: 'Mrs.', hi: 'श्रीमती', pron: 'frow', type: 'Noun · title' },
        { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Noun · surname' },
        { w: ',', plain: true },
        { w: 'hält', role: 'r-verb', en: 'holds', hi: 'देती है', pron: 'HELT', type: 'Verb · halten' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Rede', role: 'r-akkusativ', en: 'speech', hi: 'भाषण', pron: 'RAY-duh', type: 'Noun · fem. (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The federal chancellor, Mrs. Weber, gives a speech today.', hi: 'Sanghiya chancellor, Shrimati Weber, aaj ek bhaashan deti hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Projektleiter', role: 'r-akkusativ', en: 'project leader', hi: 'परियोजना प्रमुख', pron: 'pro-YEKT-ly-ter', type: 'Noun · masc.', why: 'der Projektleiter (this chapter).', ex: 'den Projektleiter mit seinem Titel nennen' },
        { w: ',', plain: true },
        { w: 'Herrn', role: 'r-akkusativ', en: 'Mr.', hi: 'श्री', pron: 'hairn', type: 'Noun · title' },
        { w: 'Braun', role: 'r-akkusativ', en: 'Braun', hi: 'ब्राउन', pron: 'brown', type: 'Noun · surname' },
        { w: ',', plain: true },
        { w: 'namentlich', role: 'r-akkusativ', en: 'by name', hi: 'नाम से', pron: 'NAH-men-tlikh', type: 'Adverb' },
        { w: 'nennen', role: 'r-verb', en: 'name', hi: 'उल्लेख करना', pron: 'NE-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Shall we name the project leader, Mr. Braun, by name?', hi: 'Kya humein pariyojana pramukh, Shri Braun, ka naam se ullekh karna chahiye?' },
      { speaker: 'Jutta', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'vergiss', role: 'r-verb', en: 'forget', hi: 'भूलना', pron: 'fer-GIST', type: 'Verb · vergessen (Imperativ du)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Kommasetzung', role: 'r-akkusativ', en: 'comma placement', hi: 'अल्पविराम प्रयोग', pron: 'KO-ma-zet-sung', type: 'Noun · fem.', why: 'die Kommasetzung = comma placement, essential around an apposition (this chapter).', ex: 'Vergiss nicht die Kommasetzung.', exEn: 'Don\\u2019t forget the comma placement.' },
        { w: '!', plain: true }
      ], en: 'And do not forget the comma placement!', hi: 'Aur alpvirama prayog mat bhoolna!' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Keine', role: 'r-negation', en: 'no', hi: 'कोई नहीं', pron: 'KY-nuh', type: 'Determiner' },
        { w: 'Sorge', role: 'r-subject', en: 'worry', hi: 'चिंता', pron: 'ZOR-guh', type: 'Noun · fem.' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा करता हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich, recycled C1)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Text', role: 'r-akkusativ', en: 'text', hi: 'पाठ', pron: 'tekst', type: 'Noun · masc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'No worries. I will revise the text right away.', hi: 'Chinta mat karo. Main abhi paath dobara karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every noun wears a <span class="de r-namensschild-metapher">name badge</span> — the apposition is the business card pinned right next to it, giving profession, title, or function without a new sentence.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is APPOSITIONEN — native-level information packaging using apposition: a second noun phrase that renames the same referent as the noun before it, set off by commas, without a verb. NOT relative clauses, participial constructions, or nominalization in general (already mastered) — specifically the choice to compress a relative clause into a comma-set apposition. Covered: the concept (Noun → Additional noun phrase → Extra information → Same referent → Information compression); restrictive vs. explanatory (non-restrictive) apposition and how punctuation signals the difference; register usage — academic ("die Autorin, Professorin für Linguistik,"), scientific ("das Enzym, ein Katalysator,"), journalistic ("der Minister, ein langjähriger Abgeordneter,"), legal ("der Angeklagte, ein Rechtsanwalt,"), literary (character-introducing appositions); and when native speakers prefer an apposition over a relative clause (density, elegance, avoiding a chain of "der/die/das" clauses). The most important things to catch: keeping an unnecessary relative clause where an apposition would be more elegant; comma errors (an apposition MUST be set off by a comma on both sides mid-sentence); incorrect case agreement between the apposition and its noun (both take the SAME case); overusing "der/die/das" relative clauses instead of varying with apposition; confusing an apposition (a second noun phrase, no verb) with an ordinary adjective attribute. Answer ONLY questions about this chapter\'s apposition grammar; if asked about something else, gently redirect to Appositionen. Keep answers short, concrete, example-driven. Mix in Hindi/Hinglish naturally, like a bilingual tutor would.',
  quizRecommendation: { high: 'Outstanding — you spot every business card pinned to every name badge. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Information Packaging Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: the apposition is the business card riding right next to the name badge, in the same case, set off by commas.' },
  parserSentence: [ { w: 'Frau', role: 'plain' }, { w: 'Berger,', role: 'plain' }, { w: 'die', role: 'r-namensschild-metapher' }, { w: 'Abteilungsleiterin,', role: 'r-namensschild-metapher' }, { w: 'überzeugt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every noun wears a name badge, and the apposition is the business card pinned right next to it.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Jutta and Timo replace long relative clauses with elegant appositions for an academic article.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic titles and roles that naturally appear in apposition, across academia, politics, research, administration, literature, and media.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master restrictive vs. explanatory apposition, punctuation, case agreement, and register-based use.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic journal article for apposition, information density, and noun phrase structure.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify appositions and additional information in a university lecture.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice describing people and institutions and explaining apposition choices at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace relative clauses with appositions, edit an academic article, and write a 600-word academic essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill apposition identification, relative-clause conversion, and information compression.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1825 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter titles and role nouns with gender, register, translations, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Apposition identification, relative-clause conversion, and information compression drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Information Packaging Model, and Decision Flow.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Frau Berger, die Abteilungsleiterin,', text: 'Compress a relative clause into one precise, comma-set apposition' },
    { de: 'der Nobelpreisträger, die Bundeskanzlerin', text: 'Use authentic titles across academia, politics, and research as appositions' },
    { de: 'das Enzym, ein Katalysator,', text: 'Build scientific and journalistic appositions with correct case agreement' },
    { de: 'der Angeklagte, ein Rechtsanwalt,', text: 'Use legal-register apposition with correct punctuation' },
    { de: 'Jedes Nomen trägt ein Namensschild.', text: 'Understand the chapter\'s core "name badge / business card" metaphor' }
  ],
  vocab: [
    { de: 'die Apposition', pos: 'noun', gender: 'fem.', plural: 'die Appositionen', level: 'C2', register: 'academic (grammar term)', en: 'apposition', hi: 'समानाधिकरण', synonyms: 'der Beisatz', antonyms: null, ex: 'Die Apposition liefert zusätzliche Information, ohne einen neuen Satz zu bilden.', exEn: 'The apposition supplies additional information without forming a new sentence.', exHi: 'Apposition naya sentence banaye bina additional information deti hai.', ex2: 'Im Deutschen steht die Apposition oft direkt hinter dem Bezugsnomen.', ex2En: 'In German, the apposition often stands directly after its reference noun.', ex2Hi: 'German mein, apposition aksar apne reference noun ke seedhe baad aati hai.' },
    { de: 'der Beisatz', pos: 'noun', gender: 'masc.', plural: 'die Beisätze', level: 'C2', register: 'academic (grammar term)', en: 'apposition (synonym)', hi: 'समानाधिकरण (पर्यायवाची)', synonyms: 'die Apposition', antonyms: null, ex: 'Der Beisatz "ein bekannter Physiker" erklärt, wer Herr Klein ist.', exEn: 'The apposition "a well-known physicist" explains who Mr. Klein is.', exHi: '"ein bekannter Physiker" apposition batati hai ki Herr Klein kaun hai.', ex2: 'Grammatiker verwenden "Beisatz" und "Apposition" synonym.', ex2En: 'Grammarians use "Beisatz" and "Apposition" synonymously.', ex2Hi: 'Grammarians "Beisatz" aur "Apposition" ko synonym ki tarah use karte hain.' },
    { de: 'die Kommasetzung', pos: 'noun', gender: 'fem.', plural: null, level: 'C2', register: 'academic (grammar term)', en: 'comma placement', hi: 'अल्पविराम-प्रयोग', synonyms: null, antonyms: null, ex: 'Die Kommasetzung markiert eine Apposition eindeutig als Einschub.', exEn: 'Comma placement clearly marks an apposition as an inserted phrase.', exHi: 'Comma placement clearly ek apposition ko inserted phrase ki tarah mark karta hai.', ex2: 'Falsche Kommasetzung kann eine Apposition mit einem Attribut verwechseln.', ex2En: 'Incorrect comma placement can confuse an apposition with an attribute.', ex2Hi: 'Galat comma placement apposition ko attribute se confuse kar sakta hai.' },
    { de: 'die Informationsverdichtung', pos: 'noun', gender: 'fem.', plural: null, level: 'C2', register: 'academic', en: 'information compression', hi: 'सूचना संघनन', synonyms: null, antonyms: null, ex: 'Appositionen ermöglichen eine hohe Informationsverdichtung in einem Satz.', exEn: 'Appositions allow a high degree of information compression in one sentence.', exHi: 'Appositions ek sentence mein high information compression allow karte hain.', ex2: 'Wissenschaftliche Texte streben nach maximaler Informationsverdichtung.', ex2En: 'Scientific texts strive for maximum information compression.', ex2Hi: 'Vaigyaanik texts maximum information compression ke liye prayaas karte hain.' },
    { de: 'der Verfasser', pos: 'noun', gender: 'masc.', plural: 'die Verfasser', level: 'C2', register: 'academic', en: 'author (of a text)', hi: 'लेखक', synonyms: 'der Autor', antonyms: null, ex: 'Der Verfasser, ein renommierter Linguist, widerspricht dieser These.', exEn: 'The author, a renowned linguist, contradicts this thesis.', exHi: 'Author, ek renowned linguist, is thesis ka virodh karta hai.', ex2: 'Herr Weiß, der Verfasser der Studie, war bei der Konferenz anwesend.', ex2En: 'Mr. Weiß, the author of the study, was present at the conference.', ex2Hi: 'Herr Weiß, study ke author, conference mein maujood the.', why: '"ein renommierter Linguist" is an apposition renaming "der Verfasser" — same referent, same case (Nom.), no verb.' },
    { de: 'die Gutachterin', pos: 'noun', gender: 'fem.', plural: 'die Gutachterinnen', level: 'C2', register: 'academic', en: 'reviewer, assessor', hi: 'समीक्षक', synonyms: null, antonyms: null, ex: 'Frau Kraus, die Gutachterin des Antrags, äußerte Bedenken.', exEn: 'Ms. Kraus, the reviewer of the application, expressed concerns.', exHi: 'Frau Kraus, application ki reviewer, ne concerns express kiye.', ex2: 'Die Gutachterin, eine erfahrene Professorin, empfahl eine Überarbeitung.', ex2En: 'The reviewer, an experienced professor, recommended a revision.', ex2Hi: 'Reviewer, ek experienced professor, ne revision recommend ki.' },
    { de: 'der Doktorand', pos: 'noun', gender: 'masc.', plural: 'die Doktoranden', level: 'C2', register: 'academic', en: 'doctoral candidate', hi: 'शोधार्थी', synonyms: null, antonyms: null, ex: 'Herr Lehmann, ein Doktorand am Institut, präsentierte seine Ergebnisse.', exEn: 'Mr. Lehmann, a doctoral candidate at the institute, presented his results.', exHi: 'Herr Lehmann, institute ke ek doctoral candidate, ne apne results present kiye.', ex2: 'Der Doktorand, selbst ein ehemaliger Ingenieur, wechselte das Fach.', ex2En: 'The doctoral candidate, himself a former engineer, changed fields.', ex2Hi: 'Doctoral candidate, khud ek former engineer, ne field badal diya.' },
    { de: 'die Herausgeberin', pos: 'noun', gender: 'fem.', plural: 'die Herausgeberinnen', level: 'C2', register: 'academic/media', en: 'editor (of a publication)', hi: 'संपादक', synonyms: null, antonyms: null, ex: 'Frau Nolte, die Herausgeberin der Zeitschrift, lehnte den Beitrag ab.', exEn: 'Ms. Nolte, the editor of the journal, rejected the submission.', exHi: 'Frau Nolte, journal ki editor, ne submission reject kar diya.', ex2: 'Die Herausgeberin, eine anerkannte Expertin, schrieb das Vorwort selbst.', ex2En: 'The editor, a recognized expert, wrote the foreword herself.', ex2Hi: 'Editor, ek recognized expert, ne khud foreword likha.' },
    { de: 'die Bundeskanzlerin', pos: 'noun', gender: 'fem.', plural: 'die Bundeskanzlerinnen', level: 'C2', register: 'political', en: 'federal chancellor', hi: 'संघीय चांसलर', synonyms: null, antonyms: null, ex: 'Die Bundeskanzlerin, eine erfahrene Diplomatin, reiste nach Brüssel.', exEn: 'The chancellor, an experienced diplomat, traveled to Brussels.', exHi: 'Chancellor, ek experienced diplomat, Brussels gayi.', ex2: 'Frau Berg, die Bundeskanzlerin, äußerte sich zur Reform.', ex2En: 'Ms. Berg, the chancellor, commented on the reform.', ex2Hi: 'Frau Berg, chancellor, ne reform par apna vichaar rakha.' },
    { de: 'der Abgeordnete', pos: 'noun (nominalized adjective)', gender: 'masc.', plural: 'die Abgeordneten', level: 'C2', register: 'political', en: 'member of parliament', hi: 'सांसद', synonyms: null, antonyms: null, ex: 'Herr Voss, ein langjähriger Abgeordneter, kritisierte den Gesetzentwurf.', exEn: 'Mr. Voss, a longtime member of parliament, criticized the bill.', exHi: 'Herr Voss, ek longtime MP, ne bill ki aalochana ki.', ex2: 'Der Abgeordnete, selbst Jurist, verwies auf verfassungsrechtliche Bedenken.', ex2En: 'The MP, himself a lawyer, pointed to constitutional concerns.', ex2Hi: 'MP, khud ek lawyer, ne constitutional concerns ki taraf ishaara kiya.' },
    { de: 'die Vorsitzende', pos: 'noun (nominalized adjective)', gender: 'fem.', plural: 'die Vorsitzenden', level: 'C2', register: 'political/professional', en: 'chairperson (fem.)', hi: 'अध्यक्ष', synonyms: null, antonyms: null, ex: 'Frau Adler, die Vorsitzende des Ausschusses, eröffnete die Sitzung.', exEn: 'Ms. Adler, the committee\'s chairperson, opened the session.', exHi: 'Frau Adler, committee ki chairperson, ne session shuru kiya.', ex2: 'Die Vorsitzende, eine erfahrene Politikerin, moderierte die Debatte.', ex2En: 'The chairperson, an experienced politician, moderated the debate.', ex2Hi: 'Chairperson, ek experienced politician, ne debate moderate kiya.' },
    { de: 'der Staatssekretär', pos: 'noun', gender: 'masc.', plural: 'die Staatssekretäre', level: 'C2', register: 'political/administrative', en: 'state secretary', hi: 'राज्य सचिव', synonyms: null, antonyms: null, ex: 'Herr Brandt, der zuständige Staatssekretär, beantwortete die Fragen.', exEn: 'Mr. Brandt, the responsible state secretary, answered the questions.', exHi: 'Herr Brandt, responsible state secretary, ne sawaalon ke jawaab diye.', ex2: 'Der Staatssekretär, ein enger Vertrauter der Ministerin, verteidigte die Reform.', ex2En: 'The state secretary, a close confidant of the minister, defended the reform.', ex2Hi: 'State secretary, minister ke close confidant, ne reform ka bachaav kiya.' },
    { de: 'der Nobelpreisträger', pos: 'noun', gender: 'masc.', plural: 'die Nobelpreisträger', level: 'C2', register: 'academic/research', en: 'Nobel laureate', hi: 'नोबेल पुरस्कार विजेता', synonyms: null, antonyms: null, ex: 'Professor Hahn, ein Nobelpreisträger, hielt den Eröffnungsvortrag.', exEn: 'Professor Hahn, a Nobel laureate, gave the opening lecture.', exHi: 'Professor Hahn, ek Nobel laureate, ne opening lecture diya.', ex2: 'Der Nobelpreisträger, ein bescheidener Mann, mied die Öffentlichkeit.', ex2En: 'The Nobel laureate, a modest man, avoided public attention.', ex2Hi: 'Nobel laureate, ek modest aadmi, public attention se bachte rahe.' },
    { de: 'die Forschungsleiterin', pos: 'noun', gender: 'fem.', plural: 'die Forschungsleiterinnen', level: 'C2', register: 'research/professional', en: 'head of research', hi: 'शोध प्रमुख', synonyms: null, antonyms: null, ex: 'Dr. Fuchs, die Forschungsleiterin, präsentierte die neuen Daten.', exEn: 'Dr. Fuchs, the head of research, presented the new data.', exHi: 'Dr. Fuchs, head of research, ne naya data present kiya.', ex2: 'Die Forschungsleiterin, eine Pionierin auf ihrem Gebiet, erhielt einen Preis.', ex2En: 'The head of research, a pioneer in her field, received an award.', ex2Hi: 'Head of research, apne field mein ek pioneer, ne ek award paaya.' },
    { de: 'der Projektleiter', pos: 'noun', gender: 'masc.', plural: 'die Projektleiter', level: 'C2', register: 'research/professional', en: 'project leader', hi: 'परियोजना प्रमुख', synonyms: null, antonyms: null, ex: 'Herr Roth, der Projektleiter, koordinierte alle Teilnehmer.', exEn: 'Mr. Roth, the project leader, coordinated all participants.', exHi: 'Herr Roth, project leader, ne sabhi participants ko coordinate kiya.', ex2: 'Der Projektleiter, ein erfahrener Ingenieur, plante den Zeitrahmen.', ex2En: 'The project leader, an experienced engineer, planned the timeline.', ex2Hi: 'Project leader, ek experienced engineer, ne timeline plan ki.' },
    { de: 'der Behördenleiter', pos: 'noun', gender: 'masc.', plural: 'die Behördenleiter', level: 'C2', register: 'administrative', en: 'head of the authority/agency', hi: 'विभाग प्रमुख', synonyms: null, antonyms: null, ex: 'Herr Krause, der Behördenleiter, unterzeichnete die Verordnung.', exEn: 'Mr. Krause, the head of the authority, signed the regulation.', exHi: 'Herr Krause, authority ke head, ne regulation par sign kiya.', ex2: 'Der Behördenleiter, ein erfahrener Verwaltungsjurist, erklärte das Verfahren.', ex2En: 'The head of the authority, an experienced administrative lawyer, explained the procedure.', ex2Hi: 'Authority ke head, ek experienced administrative lawyer, ne procedure explain kiya.' },
    { de: 'die Sachbearbeiterin', pos: 'noun', gender: 'fem.', plural: 'die Sachbearbeiterinnen', level: 'C2', register: 'administrative', en: 'case officer, clerk in charge', hi: 'मामला अधिकारी', synonyms: null, antonyms: null, ex: 'Frau Peters, die zuständige Sachbearbeiterin, bearbeitet den Antrag.', exEn: 'Ms. Peters, the responsible case officer, is processing the application.', exHi: 'Frau Peters, responsible case officer, application process kar rahi hain.', ex2: 'Die Sachbearbeiterin, eine erfahrene Beamtin, prüft alle Unterlagen sorgfältig.', ex2En: 'The case officer, an experienced civil servant, carefully checks all documents.', ex2Hi: 'Case officer, ek experienced civil servant, saavdhaani se sabhi documents check karti hain.' },
    { de: 'der Bevollmächtigte', pos: 'noun (nominalized adjective)', gender: 'masc.', plural: 'die Bevollmächtigten', level: 'C2', register: 'legal/administrative', en: 'authorized representative', hi: 'अधिकृत प्रतिनिधि', synonyms: null, antonyms: null, ex: 'Herr Sommer, der Bevollmächtigte der Firma, unterschrieb den Vertrag.', exEn: 'Mr. Sommer, the company\'s authorized representative, signed the contract.', exHi: 'Herr Sommer, company ke authorized representative, ne contract par sign kiya.', ex2: 'Der Bevollmächtigte, ein erfahrener Anwalt, vertrat die Interessen des Konzerns.', ex2En: 'The authorized representative, an experienced lawyer, represented the corporation\'s interests.', ex2Hi: 'Authorized representative, ek experienced lawyer, ne corporation ke interests represent kiye.' },
    { de: 'der Erzähler', pos: 'noun', gender: 'masc.', plural: 'die Erzähler', level: 'C2', register: 'literary', en: 'narrator', hi: 'कथावाचक', synonyms: null, antonyms: null, ex: 'Der Erzähler, ein unzuverlässiger Beobachter, verzerrt die Ereignisse.', exEn: 'The narrator, an unreliable observer, distorts the events.', exHi: 'Narrator, ek unreliable observer, events ko distort karta hai.', ex2: 'Herr Klee, der Erzähler des Romans, bleibt bis zum Ende anonym.', ex2En: 'Mr. Klee, the novel\'s narrator, remains anonymous until the end.', ex2Hi: 'Herr Klee, novel ke narrator, akhir tak anonymous rehte hain.' },
    { de: 'die Protagonistin', pos: 'noun', gender: 'fem.', plural: 'die Protagonistinnen', level: 'C2', register: 'literary', en: 'protagonist (fem.)', hi: 'नायिका', synonyms: null, antonyms: 'die Antagonistin', ex: 'Die Protagonistin, eine junge Ärztin, kämpft gegen das System.', exEn: 'The protagonist, a young doctor, fights against the system.', exHi: 'Protagonist, ek young doctor, system ke khilaaf ladti hai.', ex2: 'Elena, die Protagonistin des Romans, verändert sich grundlegend.', ex2En: 'Elena, the novel\'s protagonist, changes fundamentally.', ex2Hi: 'Elena, novel ki protagonist, fundamentally badal jaati hai.' },
    { de: 'der Verleger', pos: 'noun', gender: 'masc.', plural: 'die Verleger', level: 'C2', register: 'literary/media', en: 'publisher', hi: 'प्रकाशक', synonyms: null, antonyms: null, ex: 'Herr Busch, der Verleger, lehnte das Manuskript zunächst ab.', exEn: 'Mr. Busch, the publisher, initially rejected the manuscript.', exHi: 'Herr Busch, publisher, ne pehle manuscript reject kar diya tha.', ex2: 'Der Verleger, ein Freund des Autors, überarbeitete den Vertrag.', ex2En: 'The publisher, a friend of the author, revised the contract.', ex2Hi: 'Publisher, author ke ek friend, ne contract revise kiya.' },
    { de: 'die Literaturkritikerin', pos: 'noun', gender: 'fem.', plural: 'die Literaturkritikerinnen', level: 'C2', register: 'literary/media', en: 'literary critic (fem.)', hi: 'साहित्य समीक्षक', synonyms: null, antonyms: null, ex: 'Frau Wagner, die Literaturkritikerin, lobte den stilistischen Mut des Romans.', exEn: 'Ms. Wagner, the literary critic, praised the novel\'s stylistic courage.', exHi: 'Frau Wagner, literary critic, ne novel ki stylistic himmat ki tareef ki.', ex2: 'Die Literaturkritikerin, eine scharfe Beobachterin, fand auch Schwächen.', ex2En: 'The literary critic, a sharp observer, also found weaknesses.', ex2Hi: 'Literary critic, ek sharp observer, ko kuch weaknesses bhi mili.' },
    { de: 'der Chefredakteur', pos: 'noun', gender: 'masc.', plural: 'die Chefredakteure', level: 'C2', register: 'media/journalism', en: 'editor-in-chief', hi: 'मुख्य संपादक', synonyms: null, antonyms: null, ex: 'Herr Lang, der Chefredakteur, verteidigte die Berichterstattung.', exEn: 'Mr. Lang, the editor-in-chief, defended the coverage.', exHi: 'Herr Lang, editor-in-chief, ne coverage ka bachaav kiya.', ex2: 'Der Chefredakteur, ein streitbarer Journalist, scheute keine Kontroverse.', ex2En: 'The editor-in-chief, a combative journalist, shied away from no controversy.', ex2Hi: 'Editor-in-chief, ek combative journalist, kisi bhi controversy se nahi darte the.' },
    { de: 'die Korrespondentin', pos: 'noun', gender: 'fem.', plural: 'die Korrespondentinnen', level: 'C2', register: 'media/journalism', en: 'correspondent (fem.)', hi: 'संवाददाता', synonyms: null, antonyms: null, ex: 'Frau Sander, die Korrespondentin vor Ort, berichtete live.', exEn: 'Ms. Sander, the on-site correspondent, reported live.', exHi: 'Frau Sander, on-site correspondent, live report kar rahi thin.', ex2: 'Die Korrespondentin, eine erfahrene Kriegsberichterstatterin, blieb ruhig.', ex2En: 'The correspondent, an experienced war reporter, remained calm.', ex2Hi: 'Correspondent, ek experienced war reporter, shaant rahin.' },
    { de: 'die Pressesprecherin', pos: 'noun', gender: 'fem.', plural: 'die Pressesprecherinnen', level: 'C2', register: 'media/political', en: 'press spokesperson (fem.)', hi: 'प्रेस प्रवक्ता', synonyms: null, antonyms: null, ex: 'Frau Holz, die Pressesprecherin des Ministeriums, dementierte den Bericht.', exEn: 'Ms. Holz, the ministry\'s press spokesperson, denied the report.', exHi: 'Frau Holz, ministry ki press spokesperson, ne report ka khandan kiya.', ex2: 'Die Pressesprecherin, eine geübte Rednerin, blieb auf jede Frage vorbereitet.', ex2En: 'The press spokesperson, a practiced speaker, stayed prepared for every question.', ex2Hi: 'Press spokesperson, ek practiced speaker, har sawaal ke liye taiyaar rahin.' }
  ],
  grammar: [
    { title: 'Was ist eine Apposition? (What Is an Apposition?)', body: [ 'Noun → Additional noun phrase → Extra information → Same referent → Information compression. An apposition is a second noun phrase, usually set off by commas, that renames the exact same referent as the noun before it — with no verb, no relative pronoun, and (mid-sentence) no new clause.' ], hinglish: 'Apposition ek doosra noun phrase hota hai jo usi cheez ya insaan ko dobara naam deta hai \u2014 bina kisi verb ya relative pronoun ke. Isliye <span class="de">Frau Berger, die Abteilungsleiterin,</span> mein dono hisse ek hi insaan hain. Aur yahi wajah hai ki uska case bhi pehle noun se hi aata hai.' },
    { title: 'Erklärende vs. restriktive Apposition (Explanatory vs. Restrictive Apposition)', body: [ 'Explanatory (non-restrictive) apposition adds optional extra information and is always comma-set: "Frau Berger, die Abteilungsleiterin, kommt." Restrictive apposition narrows down which referent is meant and is typically NOT comma-set: "mein Freund Thomas" (as opposed to another friend). Choosing the right type changes both meaning and punctuation.' ], hinglish: 'Do tarah ki appositions hoti hain, aur farak comma se dikhta hai. <b>Explanatory</b> extra jaankaari deti hai jo hata bhi sakte ho, aur woh dono taraf comma se ghiri rehti hai. <b>Restrictive</b> batati hai ki <b>kaunsa</b> \u2014 <span class="de">mein Freund Thomas</span> matlab kai doston mein se yeh wala \u2014 aur wahan comma nahi lagta. Yahan comma sirf punctuation nahi hai, woh matlab badal deta hai.' },
    { title: 'Kommasetzung & Kasuskongruenz (Punctuation & Case Agreement)', body: [ 'A mid-sentence explanatory apposition is set off by a comma on BOTH sides. Crucially, the apposition takes the SAME case as its reference noun: "Ich sprach mit Frau Berger, der Abteilungsleiterin" (both Dativ) — not "die Abteilungsleiterin" in that position.' ], hinglish: 'Do rules yahan sabse zyada kaam aate hain. Pehla: sentence ke beech mein aane wali explanatory apposition ke <b>dono</b> taraf comma lagta hai \u2014 sirf ek taraf lagane se reader ko pata nahi chalta ki woh kahan khatam hui. Doosra: apposition apne reference noun ka <b>case</b> leti hai. Isliye <b>mit</b> ke baad <span class="de">der Abteilungsleiterin</span>, na ki <i>die</i>.' },
    { title: 'Apposition vs. Relativsatz (Apposition vs. Relative Clause)', body: [ 'Relative Clause → Apposition: native speakers compress a relative clause into an apposition whenever the extra information is itself a noun phrase (a title, role, or category), not a full predicate. "Frau Berger, die die Abteilung leitet," becomes "Frau Berger, die Abteilungsleiterin," — denser, more elegant, and preferred in academic and journalistic prose.' ], hinglish: 'Jab extra jaankaari khud ek noun phrase ho \u2014 koi title, role ya category \u2014 to relative clause ki zaroorat nahi hoti. <span class="de">Frau Berger, die die Abteilung leitet,</span> se seedha <span class="de">Frau Berger, die Abteilungsleiterin,</span> ban jaata hai. Par agar us jaankaari mein koi poora kaam ho raha hai (verb ke saath), to relative clause hi rakhna padta hai.' },
    { title: 'Register-Verwendung (Register Usage)', body: [ 'Academic: "die Autorin, Professorin für Linguistik,". Scientific: "das Enzym, ein Katalysator,". Journalistic: "der Minister, ein langjähriger Abgeordneter,". Legal: "der Angeklagte, ein Rechtsanwalt,". Literary: character-introducing appositions ("Elena, die Protagonistin,"). Each register favors apposition for the same reason: density without sacrificing clarity.' ], hinglish: 'Yeh structure har formal register mein aata hai \u2014 academic mein <span class="de">die Autorin, Professorin f\u00fcr Linguistik,</span>, news mein <span class="de">der Minister, ein langj\u00e4hriger Abgeordneter,</span>, aur legal texts mein <span class="de">der Angeklagte, ein Rechtsanwalt,</span>. Wajah ek hi hai: kam shabdon mein zyada jaankaari, aur clarity bhi bani rehti hai. Dhyaan do ki har example mein case reference noun se match kar raha hai.' },
    {
      title: 'Kasuskongruenz in allen F\u00e4llen',
      body: [
        'The chapter states that the apposition copies its reference noun\u2019s case but shows it only in the Dativ. Here it is across all four \u2014 this is what the exercises actually test.',
        'Note the exception: after <b>als</b> and <b>wie</b> a role noun takes no article and no comma.'
      ],
      table: {
        head: ['Case of reference noun', 'Apposition', 'Trigger'],
        rows: [
          ['Nominativ', '<span class="de">Frau Berger, <b>die</b> Abteilungsleiterin, kommt.</span>', 'subject'],
          ['Akkusativ', '<span class="de">Ich kenne Frau Berger, <b>die</b> Abteilungsleiterin.</span>', 'direct object'],
          ['Dativ', '<span class="de">Ich sprach mit Frau Berger, <b>der</b> Abteilungsleiterin.</span>', 'after mit'],
          ['Genitiv', '<span class="de">die Rede des Ministers, <b>eines</b> Abgeordneten,</span>', 'genitive attribute'],
          ['after <b>als</b>', '<span class="de">Er arbeitet als Berater.</span>', 'no article, no comma'],
          ['restrictive', '<span class="de">mein Freund Thomas</span>', 'no commas \u2014 identifies which one']
        ]
      },
      note: 'The commas carry meaning: <i>mein Freund, Thomas,</i> treats the name as an aside (you have one friend), while <i>mein Freund Thomas</i> distinguishes him from other friends. Same words, different claim.',
      hinglish: 'Chapter kehta hai ki apposition apne reference noun ka case copy karti hai, par dikhata sirf Dativ mein hai \u2014 isliye yahan chaaron cases dekh lo, kyunki exercises inhi ko test karti hain. Agar reference noun Nominativ mein hai to apposition bhi Nominativ (<span class="de">Frau Berger, <b>die</b> Abteilungsleiterin, kommt</span>), aur <b>mit</b> ke baad Dativ (<span class="de">mit Frau Berger, <b>der</b> Abteilungsleiterin</span>), aur Genitiv mein <span class="de">des Ministers, <b>eines</b> Abgeordneten</span>. Ek exception yaad rakho: <b>als</b> ke baad role wale noun par na article lagta hai aur na comma \u2014 <span class="de">Er arbeitet als Berater</span>. Aur sabse dhyaan dene layak baat: comma khud matlab badal deta hai. <i>mein Freund, Thomas,</i> matlab tumhara ek hi dost hai aur naam bas bataya jaa raha hai; par <i>mein Freund Thomas</i> matlab kai doston mein se yeh wala \u2014 isliye yahan comma nahi lagta.'
    },
    { title: 'Meister-Tabelle', body: [ 'Apposition type mapped to its meaning, preferred register, and stylistic effect.' ], table: { head: ['Apposition Type', 'Meaning', 'Preferred Register'], rows: [ ['Explanatory (comma-set)', 'Optional extra information', 'Academic, journalistic, literary'], ['Restrictive (no comma)', 'Narrows down the referent', 'General, everyday'], ['Title/Role apposition', 'States profession or function', 'Academic, political, media'], ['Category apposition', 'Classifies the referent', 'Scientific, legal'] ] }, hinglish: 'Apposition type, matlab aur register ka table \u2014 par likhne se pehle do cheezein check karo: case reference noun se match kar raha hai, aur comma dono taraf laga hai ya nahi.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these are case agreement, one is the two-sided comma, and one is the restrictive/explanatory distinction \u2014 where the commas themselves change the meaning.' ], mistakes: [
      { wrong: 'Ich sprach mit Frau Berger, die Abteilungsleiterin.', right: 'Ich sprach mit Frau Berger, der Abteilungsleiterin.', why: 'After <b>mit</b> the reference noun is Dativ, so the apposition must be Dativ too \u2014 <b>der</b> Abteilungsleiterin.' },
      { wrong: 'Frau Berger, die Abteilungsleiterin kommt sp\u00e4ter.', right: 'Frau Berger, die Abteilungsleiterin, kommt sp\u00e4ter.', why: 'A mid-sentence apposition needs a comma on BOTH sides. With only the opening comma the reader cannot tell where it ends.' },
      { wrong: 'die Rede des Ministers, ein langj\u00e4hriger Abgeordneter,', right: 'die Rede des Ministers, eines langj\u00e4hrigen Abgeordneten,', why: 'The reference noun is Genitiv (<i>des Ministers</i>), so the apposition follows into the Genitiv \u2014 <b>eines langj\u00e4hrigen Abgeordneten</b>.' },
      { wrong: 'Er arbeitet als ein Berater.', right: 'Er arbeitet als Berater.', why: 'After <b>als</b> a professional role takes no article and no comma \u2014 this is the one apposition type that stays bare.' },
      { wrong: 'Mein Freund, Thomas, wohnt in Berlin \u2014 nicht Daniel.', right: 'Mein Freund Thomas wohnt in Berlin \u2014 nicht Daniel.', why: 'Here the name identifies WHICH friend, so the apposition is restrictive and takes no commas. Commas would turn it into an aside, losing the contrast.' }
    ], hinglish: 'Teen galtiyan case agreement ki hain, ek dono taraf comma lagane ki, aur ek restrictive aur explanatory ka farak \u2014 jahan comma khud matlab badal deta hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need additional information? Is it currently a relative clause? Can it become a noun phrase (title, role, category)? If yes, use an apposition — set off by commas, same case as its referent — to improve readability.' ], note: 'Memory trick: imagine every noun is a person wearing a name badge. The noun tells you who the person is. The apposition is the business card attached to the badge — it instantly gives more information (profession, title, function, description) without creating a new sentence. Native German often prefers this elegant shortcut instead of a long relative clause.', hinglish: 'Extra jaankaari deni hai? Pehle dekho ki woh ek noun phrase ban sakti hai \u2014 title, role ya category. Agar haan, to apposition use karo. Aur likhne ke baad teen cheezein check karo: case reference noun se match kar raha hai, dono taraf comma laga hai, aur agar baat \u201ckaunsa\u201d batane ki hai to comma hata do.' }
  ],
  reading: {
    title: 'Zeitungsbericht: Linguistin widerspricht gängiger Sprachtheorie',
    titleEn: 'Reading A — Newspaper report: linguist contradicts prevailing language theory',
    tokens: [
      { w: 'Professorin', role: 'plain', en: 'professor', hi: 'प्रोफ़ेसर', type: 'Noun · fem.' },
      { w: 'Reuter,', role: 'plain', en: 'Reuter, (Satzende, name badge)', hi: 'रॉयटर (Satzende)', type: 'Eigenname (Satzende)' },
      { w: 'eine', role: 'r-namensschild-metapher', en: 'a (fem. nom., start of the apposition)', hi: '(apposition)', type: 'Article' },
      { w: 'renommierte', role: 'r-namensschild-metapher', en: 'renowned (part of the apposition)', hi: 'प्रख्यात (apposition का हिस्सा)', type: 'Adjective · Nom.' },
      { w: 'Linguistin,', role: 'r-namensschild-metapher', en: 'linguist, (Satzende, the apposition — a descriptive noun phrase pinned to the name)', hi: 'भाषाविद् (Satzende, apposition)', type: 'Noun · fem. (Apposition, Satzende)', why: '"eine renommierte Linguistin" is an apposition to "Professorin Reuter" — same case (Nom.), no verb, set off by commas.' },
      { w: 'widerspricht', role: 'plain', en: 'contradicts', hi: 'विरोध करती है', type: 'Verb (Präsens)' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article' },
      { w: 'gängigen', role: 'plain', en: 'prevailing', hi: 'प्रचलित', type: 'Adjective · Dat.' },
      { w: 'These', role: 'plain', en: 'thesis (Satzende)', hi: 'सिद्धांत (Satzende)', type: 'Noun · fem. · Dat. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Professor Reuter, a renowned linguist, contradicts the prevailing thesis.',
    comprehension: [
      { q: 'Was ist "eine renommierte Linguistin" in diesem Satz?', options: ['Eine Apposition zu "Professorin Reuter" (gleicher Kasus, kein Verb)', 'Ein eigenständiger Nebensatz', 'Ein Relativsatz mit "die"'], answer: 0 },
      { q: 'Welchen Kasus trägt die Apposition "eine renommierte Linguistin"?', options: ['Nominativ, wie "Professorin Reuter"', 'Dativ, wie "der gängigen These"', 'Akkusativ'], answer: 0 },
      { q: 'Warum wird hier eine Apposition statt eines Relativsatzes verwendet?', options: ['Weil die Zusatzinformation selbst ein Nomen (eine Rolle/ein Titel) ist, nicht ein voller Nebensatz', 'Weil ein Relativsatz grammatisch falsch wäre', 'Aus stilistischem Zufall ohne Bedeutung'], answer: 0 }
    ]
  },

  
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_025_L001', speaker: 'Jutta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, statt "der Autor, der den Roman 2010 veröffentlichte" schreiben wir kürzer.', en: 'Timo, instead of "the author who published the novel in 2010" let\'s write it shorter.' },
      { id: 'C2_025_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: '"Der Autor, Gewinner des Literaturpreises 2011, äußerte sich gestern erstmals."', en: '"The author, winner of the 2011 literature prize, spoke publicly for the first time yesterday."' },
      { id: 'C2_025_L003', speaker: 'Jutta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und beim Kanzler machen wir es genauso: "der Kanzler, ein erfahrener Verhandler,".', en: 'Exactly, and we do the same with the chancellor: "the chancellor, an experienced negotiator,".' },
      { id: 'C2_025_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'So sparen wir Worte, ohne an Information zu verlieren.', en: 'That way we save words without losing information.' }
    ],
    transcript: 'Timo, statt "der Autor, der den Roman 2010 veröffentlichte" schreiben wir kürzer. "Der Autor, Gewinner des Literaturpreises 2011, äußerte sich gestern erstmals." Genau, und beim Kanzler machen wir es genauso: "der Kanzler, ein erfahrener Verhandler,". So sparen wir Worte, ohne an Information zu verlieren.',
    translation: 'Timo, instead of "the author who published the novel in 2010" let\'s write it shorter. "The author, winner of the 2011 literature prize, spoke publicly for the first time yesterday." Exactly, and we do the same with the chancellor: "the chancellor, an experienced negotiator,". That way we save words without losing information.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'statt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'der' },
      { w: 'Autor' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'den' },
      { w: 'Roman' },
      { w: '2010', plain: true },
      { w: 'veröffentlichte' },
      { w: '"', plain: true },
      { w: 'schreiben' },
      { w: 'wir' },
      { w: 'kürzer' },
      { w: '.', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Der' },
      { w: 'Autor' },
      { w: ',', plain: true },
      { w: 'Gewinner' },
      { w: 'des' },
      { w: 'Literaturpreises' },
      { w: '2011', plain: true },
      { w: ',', plain: true },
      { w: 'äußerte' },
      { w: 'sich' },
      { w: 'gestern' },
      { w: 'erstmals' },
      { w: '."', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'beim' },
      { w: 'Kanzler' },
      { w: 'machen' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'genauso' },
      { w: ':', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'der' },
      { w: 'Kanzler' },
      { w: ',', plain: true },
      { w: 'ein' },
      { w: 'erfahrener' },
      { w: 'Verhandler' },
      { w: ',".', plain: true },
      { w: 'So' },
      { w: 'sparen' },
      { w: 'wir' },
      { w: 'Worte' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'an' },
      { w: 'Information' },
      { w: 'zu' },
      { w: 'verlieren' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Apposition ergänzen sie für den Autor?', qEn: 'What apposition do they add for the author?', options: ['Gewinner des Literaturpreises 2011', 'ein unbekannter Schriftsteller', 'Autor mehrerer Romane', 'ein junger Journalist'], optionsEn: ['winner of the 2011 literature prize', 'an unknown writer', 'author of several novels', 'a young journalist'], answer: 0,
        explain: '"Der Autor, Gewinner des Literaturpreises 2011."' },
      { q: 'Wie beschreiben sie den Kanzler?', qEn: 'How do they describe the chancellor?', options: ['ein junger Politiker', 'ein erfahrener Verhandler', 'ein unbekannter Minister', 'ein neuer Kandidat'], optionsEn: ['a young politician', 'an experienced negotiator', 'an unknown minister', 'a new candidate'], answer: 1,
        explain: '"Der Kanzler, ein erfahrener Verhandler."' }
    ]
  },
  speaking: [
    { task: "Timo will „der Autor, der den Roman 2010 veröffentlichte“ kürzen. Zeig die Kurzform.", taskEn: "Timo wants to shorten 'the author who published the novel in 2010'. Show the short form.", de: "Der Autor, Gewinner des Literaturpreises 2011, äußerte sich gestern erstmals.", en: "The author, winner of the 2011 literature prize, spoke for the first time yesterday." },
    { task: "Stell die Beteiligten der Tagung knapp vor.", taskEn: "Introduce the conference participants concisely.", de: "Frau Sander, die Gutachterin, und Herr Kaya, der Doktorand, eröffnen das Panel.", en: "Mrs Sander, the reviewer, and Mr Kaya, the doctoral student, open the panel." },
    { task: "Stell die beteiligten Einrichtungen im Bericht vor.", taskEn: "Introduce the institutions involved in the report.", de: "Das Institut, eine Einrichtung des Landes, arbeitet mit der Klinik zusammen.", en: "The institute, a state body, works together with the clinic." },
    { task: "Ein Student fragt nach der Kommasetzung. Zeig beide Fälle.", taskEn: "A student asks about the commas. Show both cases.", de: "Mein Bruder Ravi grenzt ein; mein Bruder, Ravi, setzt voraus, dass ich nur einen habe.", en: "'My brother Ravi' restricts; 'my brother, Ravi,' presupposes I have only one." },
    { task: "Deine Lektorin fragt, warum die Apposition den Text kürzt.", taskEn: "Your editor asks why the apposition shortens the text.", de: "Sie liefert die Erklärung, ohne einen zweiten Satzkern zu eröffnen.", en: "It supplies the explanation without opening a second clause nucleus." }
  ],
  writing: {
    prompt: 'TASK 1 — Compression upgrade (150 words): Replace relative clauses with appositions in a short text. Explain every choice.\n\nTASK 2 — Academic editing (150 words): Edit an academic article, replacing wordy relative clauses with elegant appositions. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic essay naturally integrating sophisticated appositions across academic, scientific, journalistic, and legal registers.',
    starters: ['Frau Berger, die Abteilungsleiterin, ...', 'Der Nobelpreisträger, ein bescheidener Mann, ...', 'Das Enzym, ein Katalysator, ...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Apposition, Kommasetzung und Kasuskongruenz...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'What case must an apposition take, relative to its reference noun?', options: ['The SAME case as the reference noun', 'Always Nominativ, regardless of context', 'Always Genitiv'], answer: 0, explain: 'An apposition renames the same referent, so it must agree in case: "mit Frau Berger, der Abteilungsleiterin" (both Dativ).' },
    gap: { sentence: ['Frau Berger, ', ', eröffnete die Sitzung.'], gaps: [ { answer: 'die Abteilungsleiterin', accepts: ['die Abteilungsleiterin'] } ], explain: '"die Abteilungsleiterin" is the apposition — the business card pinned right next to the name badge "Frau Berger" — set off by commas, same case (Nom.).' },
    match: { q: 'Match each apposition to the relative clause it replaces.', pairs: [ { noun: 'Frau Berger, die Abteilungsleiterin,', art: 'Frau Berger, die die Abteilung leitet,' }, { noun: 'der Nobelpreisträger, ein bescheidener Mann,', art: 'der Nobelpreisträger, der bescheiden ist,' }, { noun: 'das Enzym, ein Katalysator,', art: 'das Enzym, das als Katalysator wirkt,' }, { noun: 'der Angeklagte, ein Rechtsanwalt,', art: 'der Angeklagte, der von Beruf Rechtsanwalt ist,' } ] },
    builder: { target: 'Build: "Ms. Berger, the department head, convinces the committee." (apposition)', bank: ['Frau', 'Berger,', 'die', 'Abteilungsleiterin,', 'überzeugt', 'den', 'Ausschuss', '.'], answer: ['Frau', 'Berger,', 'die', 'Abteilungsleiterin,', 'überzeugt', 'den', 'Ausschuss', '.'], roles: { 'die': 'r-namensschild-metapher', 'Abteilungsleiterin,': 'r-namensschild-metapher' } },
    errorCorrection: { title: 'Error correction', wrong: 'Ich sprach mit Frau Berger, die Abteilungsleiterin.', right: 'Ich sprach mit Frau Berger, der Abteilungsleiterin.', explain: 'The apposition must take the SAME case as its reference noun — "mit Frau Berger" is Dativ, so the apposition must also be "der Abteilungsleiterin" (Dativ), not "die Abteilungsleiterin" (Nominativ).' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for apposition in this chapter?', options: ['Every noun wears a name badge — the apposition is the business card pinned right next to it', 'Every apposition must be a full relative clause', 'Appositions never take a case at all'], answer: 0, explain: 'The apposition instantly adds profession, title, or function to a noun — no new sentence needed.' },
    { q: 'What case must an apposition take?', options: ['The same case as its reference noun', 'Always Akkusativ', 'Whichever case sounds better'], answer: 0, explain: 'An apposition renames the exact same referent, so case agreement with its reference noun is required.' },
    { q: 'What is a classic C2-level mistake with apposition?', options: ['Comma errors — omitting one or both commas around a mid-sentence apposition', 'Using too many appositions', 'Never using relative clauses at all'], answer: 0, explain: 'A mid-sentence explanatory apposition must be set off by a comma on both sides.' },
    { q: 'When do native speakers prefer an apposition over a relative clause?', options: ['When the extra information is itself a noun phrase — a title, role, or category', 'Only in spoken, informal German', 'Never — relative clauses are always preferred'], answer: 0, explain: 'If the extra content is a noun phrase rather than a full predicate, apposition is denser and more elegant.' },
    { q: 'Which of these is a true apposition (not an attribute)?', options: ['"die Ministerin, eine erfahrene Politikerin,"', '"die erfahrene Ministerin"', '"die Ministerin, die erfahren ist,"'], answer: 0, explain: 'An apposition is a second, comma-set noun phrase; "die erfahrene Ministerin" is simply an attributive adjective, and the third option is a relative clause.' }
  ],
  takeaways: [
    { c: 'r-namensschild-metapher', html: 'Every noun wears a name badge — the apposition is the business card pinned right next to it, giving profession, title, or function instantly.' },
    { c: 'r-namensschild-metapher', html: 'An apposition takes the SAME case as its reference noun and is set off by commas on both sides mid-sentence.' },
    { c: 'r-namensschild-metapher', html: 'Native speakers compress a relative clause into an apposition whenever the extra information is itself a noun phrase — a title, role, or category.' },
    { c: 'r-namensschild-metapher', html: 'Academic, scientific, journalistic, and legal registers all favor apposition for the same reason: density without sacrificing clarity.' }
  ],
  revisionTips: [
    'Take one relative clause from a text you know and compress it into an apposition, checking that the case still agrees with the reference noun.',
    'Read one academic or journalistic article and identify every apposition, labeling whether it is explanatory or restrictive.',
    'Introduce three people in a short paragraph using only appositions — no relative clauses at all.'
  ]
};
window.CHAPTER = CHAPTER;
