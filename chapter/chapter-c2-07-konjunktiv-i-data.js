/* KLARWEG CHAPTER DATA — C2 · Chapter 7
   "Konjunktiv I" (C2) — stylistic, journalistic, academic and legal
   reporting tool: epistemic distance, institutional neutrality,
   source attribution, multi-level reporting. NOT forms/conjugation
   or basic indirect speech rules (already mastered B2/C1) — focus
   is WHEN native speakers choose Konjunktiv I over Indikativ/
   Konjunktiv II and WHY it signals reported, not personally
   confirmed, information. Dialogue: Ortrud and Timo ONLY. */
const CHAPTER = {
  id: 'c2-07-konjunktiv-i',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 7,
  title: 'Konjunktiv I',
  titleEn: 'Konjunktiv I as invisible quotation marks',
  description: 'Imagine Konjunktiv I as quotation marks you cannot see. You are carrying someone else\'s words without claiming they are true. That invisible distance is the essence of C2 mastery.',
  xp: 1350, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 8, title: 'Modalverben', titleEn: 'Modal verbs as a pair of glasses' , href: 'chapter-c2-08-modalverben.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Konjunktiv I separates the <em>reporter</em> from the information.',
    intro: 'Writing a newspaper article on a controversial political event, Ortrud reports the minister postulates the reform is necessary, and Timo insists on reporting neutrally, letting every voice speak through invisible quotation marks: Konjunktiv I.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly how native speakers use Konjunktiv I to signal reported, not personally confirmed, information'],
    scene: 'Redaktion eines Zeitungsartikels über ein umstrittenes politisches Ereignis',
    femaleSpeakers: ['Ortrud'],
    dialogue: [
      { speaker: 'Ortrud', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Ministerin', role: 'r-subject', en: 'minister (f)', hi: 'मंत्री', pron: 'mi-nis-TAY-rin', type: 'Noun · fem.' },
        { w: 'postuliert', role: 'r-verb', en: 'postulates', hi: 'दावा करती है', pron: 'pos-tu-LEERT', type: 'Verb · postulieren', why: 'postulieren = to postulate/assert as a claim (this chapter).', ex: 'Die Ministerin postuliert, die Reform sei notwendig.', exEn: 'The minister postulates the reform is necessary.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reform', role: 'r-subject', en: 'reform', hi: 'सुधार', pron: 're-FORM', type: 'Noun · fem.' },
        { w: 'sei', role: 'r-verb', en: 'is', hi: 'है', pron: 'zy', type: 'Verb · sein (Konjunktiv I, recycled C1)' },
        { w: 'notwendig', role: 'r-akkusativ', en: 'necessary', hi: 'ज़रूरी', pron: 'NOHT-ven-dikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The minister postulates the reform is necessary.', hi: 'Mantri daava karti hai ki sudhaar zaroori hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Sprecher', role: 'r-subject', en: 'spokesperson', hi: 'प्रवक्ता', pron: 'SHPRE-kher', type: 'Noun · masc.' },
        { w: 'teilte', role: 'r-verb', en: 'communicated', hi: 'सूचित किया', pron: 'TILE-tuh', type: 'Verb · mitteilen (Präteritum)', lexicalUnit: 'mitteilen', why: 'mitteilen = to communicate/inform officially (this chapter).', ex: 'Der Sprecher teilte mit, der Plan sei fertig.', exEn: 'The spokesperson communicated the plan is ready.' },
        { w: 'mit', role: 'r-verb', en: '(prefix of mitteilen)', hi: '', pron: 'mit', type: 'Separable prefix', lexicalUnit: 'mitteilen' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Plan', role: 'r-subject', en: 'plan', hi: 'योजना', pron: 'plahn', type: 'Noun · masc.' },
        { w: 'sei', role: 'r-verb', en: 'is', hi: 'है', pron: 'zy', type: 'Verb · sein (Konjunktiv I)' },
        { w: 'fertig', role: 'r-akkusativ', en: 'ready', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The spokesperson communicated the plan is ready.', hi: 'Pravakta ne soochit kiya ki yojana taiyaar hai.' },
      { speaker: 'Ortrud', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Opposition', role: 'r-subject', en: 'opposition', hi: 'विपक्ष', pron: 'o-po-zi-TSYON', type: 'Noun · fem.' },
        { w: 'bekundet', role: 'r-verb', en: 'declares', hi: 'व्यक्त करता है', pron: 'be-KUN-det', type: 'Verb · bekunden', why: 'bekunden = to declare/express formally (this chapter).', ex: 'Die Opposition bekundet, sie habe Zweifel.', exEn: 'The opposition declares it has doubts.' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'it', hi: 'उसे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'has', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben (Konjunktiv I, recycled C1)' },
        { w: 'Zweifel', role: 'r-akkusativ', en: 'doubts', hi: 'संदेह', pron: 'TSVY-fel', type: 'Noun · masc. (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The opposition declares it has doubts.', hi: 'Vipaksh vyakt karta hai ki use sandeh hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'Experte', role: 'r-subject', en: 'expert', hi: 'विशेषज्ञ', pron: 'eks-PAIR-tuh', type: 'Noun · masc.' },
        { w: 'kommentiert', role: 'r-verb', en: 'comments', hi: 'टिप्पणी करता है', pron: 'ko-men-TEERT', type: 'Verb · kommentieren', why: 'kommentieren = to comment on (this chapter).', ex: 'Ein Experte kommentiert, die Reform komme zu spät.', exEn: 'An expert comments the reform comes too late.' },
        { w: ',', plain: true },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Reform', role: 'r-subject', en: 'reform', hi: 'सुधार', pron: 're-FORM', type: 'Noun · fem.' },
        { w: 'komme', role: 'r-verb', en: 'comes', hi: 'आता है', pron: 'KO-muh', type: 'Verb · kommen (Konjunktiv I)' },
        { w: 'zu', role: 'r-akkusativ', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'spät', role: 'r-akkusativ', en: 'late', hi: 'देर से', pron: 'shpayt', type: 'Adjective (Satzende)' },
        { w: '.', plain: true }
      ], en: 'An expert comments the reform comes too late.', hi: 'Ek vishesagya tippani karta hai ki sudhaar bahut der se aata hai.' },
      { speaker: 'Ortrud', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'sollen', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Artikel', role: 'r-dativ', en: 'article (dat.)', hi: 'लेख में', pron: 'ar-TEE-kel', type: 'Noun · masc. dat.' },
        { w: 'darstellen', role: 'r-verb', en: 'present', hi: 'प्रस्तुत करना', pron: 'DAHR-shte-len', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'How should we present that in the article?', hi: 'Humein yeh lekh mein kaise prastut karna chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'berichten', role: 'r-verb', en: 'report', hi: 'रिपोर्ट करते हैं', pron: 'be-RIKH-ten', type: 'Verb · berichten (wir, recycled C1)' },
        { w: 'neutral', role: 'r-akkusativ', en: 'neutral', hi: 'तटस्थ', pron: 'noy-TRAHL', type: 'Adjective' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'lassen', role: 'r-verb', en: 'let', hi: 'देते हैं', pron: 'LA-sen', type: 'Verb · lassen (wir)' },
        { w: 'jede', role: 'r-akkusativ', en: 'every (fem.)', hi: 'हर', pron: 'YAY-duh', type: 'Determiner' },
        { w: 'Stimme', role: 'r-akkusativ', en: 'voice', hi: 'आवाज़', pron: 'SHTI-muh', type: 'Noun · fem.' },
        { w: 'zu', role: 'r-akkusativ', en: 'to', hi: 'उसकी', pron: 'tsoo', type: 'Adverb (part of zu Wort kommen lassen)' },
        { w: 'Wort', role: 'r-akkusativ', en: 'word', hi: 'बात', pron: 'vort', type: 'Noun · neut.' },
        { w: 'kommen', role: 'r-verb', en: 'come', hi: 'आने', pron: 'KO-men', type: 'Verb · infinitive' },
        { w: 'lassen', role: 'r-verb', en: 'let', hi: 'देते', pron: 'LA-sen', type: 'Verb · lassen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We report neutrally and let every voice have its say.', hi: 'Hum tatasth roop se report karte hain aur har aavaaz ko baat karne dete hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Konjunktiv I is like <span class="de r-anfuehrungszeichen-metapher">invisible quotation marks</span> — you carry someone else\'s words without claiming they are true.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is KONJUNKTIV I at C2 level — its role as a STYLISTIC, JOURNALISTIC, ACADEMIC and LEGAL REPORTING tool signaling EPISTEMIC DISTANCE and INSTITUTIONAL NEUTRALITY, NOT basic forms/conjugation (sei, habe, werde) or elementary indirect speech rules (already fully mastered in B2/C1). Covered: the core distinction between stating a fact (Er ist krank.), reporting a claim (Er sagt, er sei krank.), and reporting a report (Laut dem Arzt sei er krank.) — each shifts responsibility away from the speaker/writer; levels of distance from direct quotation through indirect speech, reported report, academic citation, to anonymous source; journalistic neutrality (Die Ministerin erklärte..., Nach Angaben des Unternehmens..., Zeugen berichteten...) so the reporter never personally confirms a claim; academic/scientific reporting language (Die Autorin argumentiert..., Frühere Untersuchungen legen nahe..., Es werde angenommen...) for citing sources cautiously; legal/administrative neutrality (Der Angeklagte gab an..., Das Gericht stellte fest...) where institutional language must not imply personal endorsement; political/diplomatic reporting (Der Sprecher erklärte..., Der Präsident habe erklärt...) for neutral government-statement wording; and historical source-based narration (Zeitzeugen berichteten..., Historiker gehen davon aus...). The most important things to catch: replacing Konjunktiv I with Indikativ in formal reporting contexts (this makes the writer sound personally convinced/responsible for a claim they should merely be reporting); sounding personally convinced of a reported claim rather than maintaining neutral distance; confusing reported speech with stated fact (treating "er sei krank" as equivalent to "er ist krank"); inconsistent reporting (switching between Konjunktiv I and Indikativ without a clear reason within one report); missing or unclear source attribution (reporting a claim without indicating whose claim it is); using an inappropriate register for the reporting context (e.g. casual phrasing in a legal or academic report). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag places where Indikativ is used for a claim that should be neutrally reported with Konjunktiv I (i.e., the writer states someone else\'s claim as their own confirmed fact); flag missing/unclear source attribution; flag inconsistent switching between Konjunktiv I and Indikativ without stylistic reason. Do NOT flag basic Konjunktiv I form/conjugation errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around neutrality/distance/attribution). If none: <li>No errors — well done.</li> 3) <p><b>Native-level distance check:</b> one sentence on whether the learner maintains consistent epistemic distance (invisible quotation marks) rather than sounding personally convinced.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you consistently maintain neutral reporting distance with clear source attribution. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Reporting Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: Konjunktiv I is invisible quotation marks, carrying words without confirming them.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Ministerin', role: 'plain' }, { w: 'erklärte', role: 'plain' }, { w: ',', plain: true }, { w: 'der', role: 'plain' }, { w: 'Plan', role: 'plain' }, { w: 'sei', role: 'r-konjunktiv1' }, { w: 'erfolgreich', role: 'r-konjunktiv1' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Konjunktiv I is invisible quotation marks, carrying words without personally confirming them.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Ortrud and Timo write a news article, deciding which information can be stated as fact versus reported neutrally.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn key C2 reporting verbs (postulieren, berichten, erklären, mitteilen, sagen, bekunden, kommentieren) — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master epistemic distance, levels of reporting, neutrality, and register-based reporting language.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a newspaper report, an academic review article, and a court report for Konjunktiv I usage.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify reported speech, source marking, and neutrality in a radio bulletin, lecture, and press conference.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice summarizing interviews, reporting research findings, and distinguishing fact from reported information.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Convert quotations into Konjunktiv I, neutralize an opinionated article, and write a 550-word news report.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill reporting transformation, source attribution, and fact vs. reported claim distinctions.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1350 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Reporting transformation, source attribution, and neutrality-editing drills, plus the full 550-word news report task.', pdfUrl: '/pdfs/homework.pdf', size: '18 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Reporting Model, Responsibility Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Staatsanwaltschaft erklärt, der Minister sei schuldig.', text: 'Report a claim neutrally instead of stating it as personal fact' },
    { de: 'Die Studie kommt zu dem Ergebnis, dass ...', text: 'Use academic citation language appropriate for research reporting' },
    { de: 'Das Gericht stellte fest, der Angeklagte sei ...', text: 'Use institutional neutrality in legal reporting' },
    { de: 'Der Präsident habe erklärt, ...', text: 'Use diplomatic Konjunktiv I in political/governmental reporting' },
    { de: 'Konjunktiv I sind unsichtbare Anführungszeichen.', text: 'Understand the chapter\'s core "invisible quotation marks" metaphor' }
  ],
  vocab: [
    { de: 'postulieren', pos: 'verb', level: 'C2', register: 'academic/scientific', en: 'to postulate', hi: 'प्रतिपादित करना', synonyms: 'annehmen, voraussetzen', antonyms: 'widerlegen', ex: 'Die Autorin postuliert, dass die beiden Phänomene ursächlich zusammenhängen.', exEn: 'The author postulates that the two phenomena are causally connected.', exHi: 'Lekhika postulate karti hai ki dono phenomena kaaranaatmak roop se juday hain.', ex2: 'Frühere Theorien postulierten einen direkten Zusammenhang.', ex2En: 'Earlier theories postulated a direct connection.', ex2Hi: 'Pehle ki theories ne ek seedha sambandh postulate kiya.' },
    { de: 'berichten', pos: 'verb', level: 'C2', register: 'journalism/academic', en: 'to report', hi: 'रिपोर्ट करना', synonyms: 'mitteilen, melden', antonyms: null, ex: 'Zeugen berichteten, der Vorfall sei am späten Abend geschehen.', exEn: 'Witnesses reported that the incident happened late in the evening.', exHi: 'Gawaahon ne report kiya ki ghatna raat der se hui thi.', ex2: 'Die Forscher berichten, die Ergebnisse seien signifikant.', ex2En: 'The researchers report that the results are significant.', ex2Hi: 'Shodhkarta report karte hain ki parinaam significant hain.' },
    { de: 'erklären', pos: 'verb', level: 'C2', register: 'both', en: 'to declare, explain', hi: 'घोषित करना, समझाना', synonyms: 'ausführen, darlegen', antonyms: null, ex: 'Die Ministerin erklärte, der Plan sei erfolgreich.', exEn: 'The minister declared that the plan was successful.', exHi: 'Mantri ne ghoshit kiya ki plan safal hai.', ex2: 'Der Sprecher erklärte, es gebe keine weiteren Kommentare.', ex2En: 'The spokesperson declared there were no further comments.', ex2Hi: 'Prawakta ne ghoshit kiya ki koi aur comment nahi hai.' },
    { de: 'mitteilen', pos: 'verb', level: 'C2', register: 'formal/administrative', en: 'to communicate, notify', hi: 'सूचित करना', synonyms: 'informieren, bekanntgeben', antonyms: null, ex: 'Die Behörde teilte mit, das Verfahren sei abgeschlossen.', exEn: 'The authority communicated that the proceedings were concluded.', exHi: 'Adhikaari ne suchit kiya ki karyavaahi samaapt ho gayi hai.', ex2: 'Das Unternehmen teilte mit, die Zahlen seien vorläufig.', ex2En: 'The company communicated that the figures were preliminary.', ex2Hi: 'Company ne suchit kiya ki aankde asthaayi hain.' },
    { de: 'sagen', pos: 'verb', level: 'C2', register: 'both', en: 'to say', hi: 'कहना', synonyms: 'äußern, bemerken', antonyms: null, ex: 'Er sagt, er sei krank.', exEn: 'He says he is sick.', exHi: 'Voh kehta hai ki voh bimaar hai.', ex2: 'Sie sagte, sie habe die Unterlagen bereits geprüft.', ex2En: 'She said she had already reviewed the documents.', ex2Hi: 'Usne kaha ki usne pehle hi documents check kar liye hain.' },
    { de: 'bekunden', pos: 'verb', level: 'C2', register: 'formal/diplomatic', en: 'to express, state (formally)', hi: 'औपचारिक रूप से व्यक्त करना', synonyms: 'ausdrücken, äußern', antonyms: null, ex: 'Die Delegation bekundete, man werde die Verhandlungen fortsetzen.', exEn: 'The delegation stated that negotiations would continue.', exHi: 'Delegation ne kaha ki baatcheet jaari rahegi.', ex2: 'Der Präsident bekundete sein Interesse an einer Zusammenarbeit.', ex2En: 'The president expressed his interest in cooperation.', ex2Hi: 'Rashtrapati ne sahyog mein apni ruchi vyakt ki.' },
    { de: 'kommentieren', pos: 'verb', level: 'C2', register: 'journalism/academic', en: 'to comment on', hi: 'टिप्पणी करना', synonyms: 'sich äußern zu, Stellung nehmen', antonyms: null, ex: 'Der Experte kommentierte, die Entscheidung sei nachvollziehbar.', exEn: 'The expert commented that the decision was understandable.', exHi: 'Expert ne comment kiya ki faisla samajh mein aata hai.', ex2: 'Kritiker kommentierten, die Studie weise methodische Schwächen auf.', ex2En: 'Critics commented that the study showed methodological weaknesses.', ex2Hi: 'Aalochakon ne comment kiya ki study mein methodological kamzoriyaan hain.' }
  ],
  grammar: [
    { title: 'Berichten vs. Behaupten (Reporting vs. Claiming)', body: [ 'Fact → Speaker → Source → Distance → Chosen Mood. Compare: Er ist krank. (fact) → Er sagt, er sei krank. (reported claim) → Laut dem Arzt sei er krank. (reported report). Responsibility shifts away from the speaker at each step.' ], hinglish: 'Konjunktiv I ka ek hi kaam hai \u2014 kisi ki baat aage pahunchana bina uski sachai ki zimmedaari liye. Farak dekho: <span class="de">Er ist krank</span> tumhara dava hai; <span class="de">Er sagt, er sei krank</span> uska dava hai; aur <span class="de">Laut dem Arzt sei er krank</span> mein source bhi juda hai. Har step par zimmedaari tumse door hoti jaati hai \u2014 aur yeh koi shak nahi jataata, sirf batata hai ki shabd tumhare nahi hain.' },
    { title: 'Abstufungen der Distanz (Levels of Distance)', body: [ 'Direct quotation → Indirect speech → Reported report → Academic citation → Anonymous source. Distance from the original claim increases progressively, each level signaling less personal responsibility.' ], hinglish: 'Doori badhane ke kai star hain. Seedha quotation sabse paas hai, phir indirect speech, phir kisi report ka hawaala, phir academic citation, aur sabse aakhir mein anonymous source \u2014 jahan naam hi nahi hota. Jitna aage jaate ho, utni kam zimmedaari tumhari rehti hai. Isliye news aur research mein yeh star soch-samajh kar chune jaate hain.' },
    { title: 'Journalismus (Journalism)', body: [ 'Die Ministerin erklärte, ... Die Polizei teilte mit, ... Nach Angaben des Unternehmens ... Zeugen berichteten, ... These constructions maintain journalistic neutrality — the reporter never personally confirms the claim.' ], hinglish: 'Journalism mein reporter kabhi khud dava nahi karta \u2014 woh sirf batata hai ki kisne kya kaha. <span class="de">Die Ministerin erkl\u00e4rte, \u2026</span>, <span class="de">Die Polizei teilte mit, \u2026</span>, <span class="de">Zeugen berichteten, \u2026</span>. Do baatein dhyaan mein rakho \u2014 <b>nach Angaben</b> ke baad Genitiv aata hai (<span class="de">des Unternehmens</span>), aur ek baar reported mode shuru ho jaaye to poore passage mein Konjunktiv I hi chalta rehna chahiye.' },
    { title: 'Akademisches & Wissenschaftliches Deutsch (Academic & Scientific German)', body: [ 'Die Autorin argumentiert, ... Die Studie kommt zu dem Ergebnis, ... Frühere Untersuchungen legen nahe, ... Es werde angenommen ... These constructions cite sources cautiously without the writer personally endorsing every claim.' ], hinglish: 'Academic writing mein har baat kisi source se judi hoti hai, aur Konjunktiv I se saaf ho jaata hai ki woh baat kis ki hai. <span class="de">Die Autorin argumentiert, \u2026</span>, <span class="de">Fr\u00fchere Untersuchungen legen nahe, dass \u2026</span>, <span class="de">Es werde angenommen, dass \u2026</span>. Dhyaan do ki <b>werde</b> yahan passive ke saath Konjunktiv I hai \u2014 yeh formal texts mein bahut aata hai.' },
    { title: 'Rechtliche, Politische & Historische Sprache (Legal, Political & Historical Reporting)', body: [ 'Legal: Der Angeklagte gab an ..., Das Gericht stellte fest ... Political: Der Sprecher erklärte ..., Der Präsident habe erklärt ... Historical: Zeitzeugen berichteten ..., Historiker gehen davon aus ... Institutional and historical language maintains neutral, source-based distance.' ], hinglish: 'Legal aur political texts mein yeh farak bahut maayne rakhta hai. <span class="de">Der Angekl\u00e4gte gab an, er sei \u2026</span> matlab yeh uska bayaan hai, sach sabit nahi hua. Par <span class="de">Das Gericht stellte fest, dass \u2026</span> mein Indikativ aata hai, kyunki adaalat ne use sthapit kar diya. Isliye reporting mein mood dekh kar hi pata chal jaata hai ki baat sabit hai ya sirf daava.' },
    {
      title: 'Die Formen \u2014 und die Ausweichregel',
      body: [
        'Konjunktiv I is built from the INFINITIVE stem plus <b>-e</b>: <i>kommen \u2192 er komme</i>, <i>haben \u2192 er habe</i>. Present-tense vowel changes disappear \u2014 <i>er spricht</i> becomes <b>er spreche</b>.',
        'Only the 3rd person singular is reliably distinct. Everywhere else the form collides with the Indikativ, and German then switches to Konjunktiv II.'
      ],
      table: {
        head: ['Person', 'Indikativ', 'Konjunktiv I', 'Usable?'],
        rows: [
          ['er/sie/es', 'kommt / hat / ist', '<b>komme / habe / sei</b>', 'yes \u2014 always distinct'],
          ['ich', 'komme', 'komme', 'no \u2192 <b>k\u00e4me</b> / <b>w\u00fcrde kommen</b>'],
          ['wir, sie/Sie', 'kommen / haben', 'kommen / haben', 'no \u2192 <b>k\u00e4men</b> / <b>h\u00e4tten</b>'],
          ['past', '\u2014', '<b>sei / habe + Partizip II</b>', '<span class="de">er sei gekommen</span>'],
          ['modal', 'muss', '<b>m\u00fcsse</b>', '<span class="de">die Regierung m\u00fcsse handeln</span>']
        ]
      },
      note: '<b>sein</b> is the exception that rescues you: <i>sei, seiest, sei, seien, seiet, seien</i> \u2014 every form differs from the Indikativ, which is why <b>sei</b> is everywhere in reported speech. And note the modals form a clean Konjunktiv I too: <b>m\u00fcsse, k\u00f6nne, solle, wolle</b>.',
      hinglish: 'Konjunktiv I banta hai <b>infinitive ke stem</b> par <b>-e</b> lagakar: <i>kommen</i> se <b>er komme</b>, <i>haben</i> se <b>er habe</b>. Present tense wale vowel changes yahan gayab ho jaate hain \u2014 <i>er spricht</i> se <b>er spreche</b>. Ab asli baat: sirf <b>er/sie/es</b> wali form hamesha Indikativ se alag dikhti hai. <b>ich</b>, <b>wir</b> aur <b>sie/Sie</b> mein form bilkul same ho jaati hai, aur wahin German Konjunktiv II par switch kar deta hai \u2014 isliye <span class="de">sie h\u00e4tten nichts gesehen</span>, na ki <i>sie haben</i>. Yahi wajah hai ki newspapers mein zyada-tar <b>er/sie</b> wali reporting dikhti hai. Ek verb tumhe bacha leta hai \u2014 <b>sein</b>, jiski har form alag hai, isliye <b>sei</b> har jagah milta hai. Aur modals ki bhi saaf form banti hai: <b>m\u00fcsse, k\u00f6nne, solle, wolle</b>. Past ke liye <b>sei</b> ya <b>habe</b> + Partizip II \u2014 ek hi auxiliary, do nahi.'
    },
    { title: 'Meister-Tabelle', body: [ 'Situation mapped to the preferred reporting structure and typical register.' ], table: { head: ['Situation', 'Preferred Structure', 'Typical Register'], rows: [ ['Newspaper', 'Konjunktiv I', 'Journalism'], ['Research Summary', 'Reporting verbs + Konjunktiv I', 'Academic'], ['Court Report', 'Neutral reporting', 'Legal'], ['Government Statement', 'Source attribution', 'Political'], ['Historical Source', 'Reported narration', 'History'] ] }, hinglish: 'Situation, structure aur register ka table \u2014 par asli kaam ki cheez neeche wala block hai, jo batata hai ki kaunsi form use ho sakti hai aur kahan Konjunktiv II par jaana padta hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are formal \u2014 the collision with the Indikativ, the past form, the case after a source expression, and a doubled auxiliary. The fourth is the one that changes meaning silently: dropping out of reported mode mid-passage.' ], mistakes: [
      { wrong: 'Die Ministerin erkl\u00e4rte, die Lage ist stabil.', right: 'Die Ministerin erkl\u00e4rte, die Lage sei stabil.', why: 'The Indikativ makes the reporter vouch for the claim. <b>sei</b> keeps it as the minister\u2019s statement.' },
      { wrong: 'Die Zeugen berichteten, sie haben nichts gesehen.', right: 'Die Zeugen berichteten, sie h\u00e4tten nichts gesehen.', why: 'For <b>sie</b> the Konjunktiv I form <i>haben</i> is identical to the Indikativ, so German switches to Konjunktiv II \u2014 <b>h\u00e4tten</b>.' },
      { wrong: 'Der Angeklagte gab an, er sei gestern dort gewesen sein.', right: 'Der Angeklagte gab an, er sei gestern dort gewesen.', why: 'The past in reported speech is <b>sei/habe + Partizip II</b> \u2014 one auxiliary only, and it comes first.' },
      { wrong: 'Laut dem Bericht sei die Lage stabil, und die Kosten sind gesunken.', right: 'Laut dem Bericht sei die Lage stabil, und die Kosten seien gesunken.', why: 'Once a passage is in reported mode, every verb in it stays in Konjunktiv I \u2014 switching back to the Indikativ silently turns the second claim into the reporter\u2019s own.' },
      { wrong: 'Nach Angaben von Unternehmen sei die Produktion gestiegen.', right: 'Nach Angaben des Unternehmens sei die Produktion gestiegen.', why: '<b>nach Angaben</b> takes the Genitiv \u2014 <i>des Unternehmens</i>. With <b>von</b> you would need a Dativ: <i>von dem Unternehmen</i>.' },
      { wrong: 'Der Sprecher erkl\u00e4rte, dass die Regierung handeln m\u00fcsse werden.', right: 'Der Sprecher erkl\u00e4rte, dass die Regierung handeln m\u00fcsse.', why: 'A modal in Konjunktiv I already carries the reported mood \u2014 <b>m\u00fcsse</b> needs no auxiliary added to it.' }
    ], hinglish: 'Paanch galtiyan form ki hain \u2014 Indikativ se takraav, past wali form, source expression ke baad case, aur do auxiliary. Aur chauthi woh hai jo chupke se matlab badal deti hai: beech passage mein reported mode se bahar nikal jaana.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Am I stating a fact? NO. Am I reporting someone else\'s statement? YES. Should I remain neutral? YES. Use Konjunktiv I with clear source attribution.' ], note: 'Memory trick: imagine Konjunktiv I as quotation marks that you cannot see. You are carrying someone else\'s words without claiming they are true. Native speakers use Konjunktiv I to say: "These are not my words — I am simply reporting them."', hinglish: 'Khud se poochho \u2014 yeh meri baat hai ya kisi aur ki? Kisi aur ki ho to Konjunktiv I lagao aur source batao. Aur likhne ke baad do cheezein check karo: form Indikativ jaisi nahi lag rahi (agar lag rahi hai to Konjunktiv II par jao), aur poore passage mein reported mood bana hua hai?' }
  ],
  reading: {
    title: 'Zeitungsbericht: Ermittlungen gegen Bürgermeister eingeleitet',
    titleEn: 'Reading A — Newspaper report: investigation launched against mayor',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Staatsanwaltschaft', role: 'plain', en: 'prosecutor\'s office', hi: 'अभियोजन कार्यालय', type: 'Noun · fem.' },
      { w: 'erklärte', role: 'r-konjunktiv1', en: 'declared (part of the neutral reporting construction)', hi: '', type: 'Verb (Präteritum)' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Bürgermeister', role: 'plain', en: 'mayor', hi: 'महापौर', type: 'Noun · masc.' },
      { w: 'habe', role: 'r-konjunktiv1', en: 'has (Konjunktiv I, Satzende, reporting the claim without personally confirming it)', hi: '(Konjunktiv I, Satzende, reported claim)', type: 'Verb · haben (Konjunktiv I, Satzende)', why: 'The journalist reports the prosecutor\'s claim using Konjunktiv I ("habe"), maintaining neutral distance instead of personally confirming guilt (this chapter).' },
      { w: 'öffentliche', role: 'plain', en: 'public', hi: 'सार्वजनिक', type: 'Adjective · Akk.' },
      { w: 'Gelder', role: 'plain', en: 'funds (Satzende)', hi: 'धन (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zweckentfremdet', role: 'r-konjunktiv1', en: 'misappropriated (Satzende, Konjunktiv I)', hi: 'ग़लत इस्तेमाल किया (Satzende, Konjunktiv I)', type: 'Verb · Partizip II (Konjunktiv I, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Zeitung', role: 'plain', en: 'newspaper (Satzende)', hi: 'अख़बार (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'bestätigt', role: 'r-fakt', en: 'confirms (part of the discussion of what a journalist may/may not personally confirm)', hi: '', type: 'Verb (Präsens)' },
      { w: 'diesen', role: 'plain', en: 'this (masc. akk.)', hi: 'इस', type: 'Determiner · Akk.' },
      { w: 'Vorwurf', role: 'plain', en: 'accusation (Satzende)', hi: 'आरोप (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'ausdrücklich', role: 'r-fakt', en: 'explicitly (part of negation)', hi: 'स्पष्ट रूप से (negation का हिस्सा)', type: 'Adverb' },
      { w: 'nicht', role: 'r-fakt', en: 'not (part of the negation, Satzende — contrast, the newspaper does NOT personally confirm the claim)', hi: 'नहीं (Satzende)', type: 'Negation (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The prosecutor\'s office declared that the mayor has misappropriated public funds. The newspaper explicitly does not confirm this accusation itself.',
    comprehension: [
      { q: 'Warum verwendet die Zeitung Konjunktiv I ("habe")?', options: ['Um neutral zu bleiben und die Aussage nicht selbst zu bestätigen', 'Weil Indikativ grammatisch falsch wäre', 'Aus stilistischem Zufall'], answer: 0 },
      { q: 'Wer trägt die Verantwortung für die Behauptung?', options: ['Die Staatsanwaltschaft, nicht die Zeitung', 'Die Zeitung selbst', 'Niemand'], answer: 0 },
      { q: 'Was würde passieren, wenn die Zeitung Indikativ verwendet?', options: ['Die Zeitung würde die Aussage als eigene bestätigte Tatsache darstellen', 'Nichts würde sich ändern', 'Es wäre grammatisch falsch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Akademischer Rezensionsartikel', titleEn: 'Reading B — Academic review article',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'study', type: 'Noun · fem.' },
      { w: 'komme', role: 'r-konjunktiv1', en: 'comes (Konjunktiv I, academic citation language, Satzende)', hi: '(Konjunktiv I, academic citation)', type: 'Verb (Konjunktiv I, Satzende)' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'Präposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (neut. dat.)', hi: '', type: 'Article' },
      { w: 'Ergebnis', role: 'plain', en: 'result (Satzende)', hi: '(Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: ',', plain: true },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Stichprobe', role: 'plain', en: 'sample', hi: 'sample', type: 'Noun · fem.' },
      { w: 'sei', role: 'r-konjunktiv1', en: 'is (Konjunktiv I, Satzende)', hi: '(Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: 'repräsentativ', role: 'plain', en: 'representative', hi: 'pratinidhik', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'The study comes to the conclusion that the sample is representative.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_007_L001', speaker: 'Ortrud', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, im Artikel schreibe ich: die Opposition behaupte, die Zahlen seien geschönt.', en: 'Timo, in the article I write: the opposition claims the figures are embellished.' },
      { id: 'C2_007_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, und die Regierungsseite? Wie gibst du deren Position wieder?', en: 'Good, and the government side? How do you render their position?' },
      { id: 'C2_007_L003', speaker: 'Ortrud', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ein Sprecher erklärt, alle Angaben seien korrekt und unabhängig geprüft worden.', en: 'A spokesperson states that all figures are correct and have been independently verified.' },
      { id: 'C2_007_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'So bleibst du neutral, ohne selbst Partei zu ergreifen.', en: 'That way you stay neutral without taking sides yourself.' }
    ],
    transcript: 'Timo, im Artikel schreibe ich: die Opposition behaupte, die Zahlen seien geschönt. Gut, und die Regierungsseite? Wie gibst du deren Position wieder? Ein Sprecher erklärt, alle Angaben seien korrekt und unabhängig geprüft worden. So bleibst du neutral, ohne selbst Partei zu ergreifen.',
    translation: 'Timo, in the article I write: the opposition claims the figures are embellished. Good, and the government side? How do you render their position? A spokesperson states that all figures are correct and have been independently verified. That way you stay neutral without taking sides yourself.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'Artikel' },
      { w: 'schreibe' },
      { w: 'ich' },
      { w: ':', plain: true },
      { w: 'die' },
      { w: 'Opposition' },
      { w: 'behaupte' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: 'seien' },
      { w: 'geschönt' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'die' },
      { w: 'Regierungsseite' },
      { w: '?', plain: true },
      { w: 'Wie' },
      { w: 'gibst' },
      { w: 'du' },
      { w: 'deren' },
      { w: 'Position' },
      { w: 'wieder' },
      { w: '?', plain: true },
      { w: 'Ein' },
      { w: 'Sprecher' },
      { w: 'erklärt' },
      { w: ',', plain: true },
      { w: 'alle' },
      { w: 'Angaben' },
      { w: 'seien' },
      { w: 'korrekt' },
      { w: 'und' },
      { w: 'unabhängig' },
      { w: 'geprüft' },
      { w: 'worden' },
      { w: '.', plain: true },
      { w: 'So' },
      { w: 'bleibst' },
      { w: 'du' },
      { w: 'neutral' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'selbst' },
      { w: 'Partei' },
      { w: 'zu' },
      { w: 'ergreifen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was behauptet die Opposition laut Ortruds Artikel?', qEn: 'What does the opposition claim, according to Ortrud\'s article?', options: ['die Zahlen seien korrekt', 'die Zahlen seien geschönt', 'es gebe keine Zahlen', 'die Regierung lüge nie'], optionsEn: ['that the figures are correct', 'that the figures were massaged', 'that there are no figures', 'that the government never lies'], answer: 1,
        explain: '"Die Opposition behaupte, die Zahlen seien geschönt."' },
      { q: 'Wie reagiert der Regierungssprecher?', qEn: 'How does the government spokesperson respond?', options: ['er gibt Fehler zu', 'er sagt, alle Angaben seien korrekt und geprüft worden', 'er schweigt', 'er tritt zurück'], optionsEn: ['he admits mistakes', 'he says all the figures are correct and have been checked', 'he says nothing', 'he is resigning'], answer: 1,
        explain: '"Alle Angaben seien korrekt und unabhängig geprüft worden."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie du im Artikel die Regierungsseite wiedergibst.", taskEn: "Timo asks how you report the government's position in the article.", de: "Die Regierung erklärt, die Zahlen seien geprüft worden.", en: "The government states the figures were checked." },
    { task: "Gib die Position der Opposition neutral wieder.", taskEn: "Report the opposition's position neutrally.", de: "Die Opposition behauptet, die Zahlen seien geschönt.", en: "The opposition claims the figures were massaged." },
    { task: "Ein Student fragt, was die Fachliteratur zu dem Effekt sagt.", taskEn: "A student asks what the literature says about the effect.", de: "Die Autoren postulieren, der Effekt sei robust.", en: "The authors postulate the effect is robust." },
    { task: "Berichte, was die Sprecherin mitgeteilt hat.", taskEn: "Report what the spokeswoman communicated.", de: "Die Sprecherin teilte mit, das Verfahren werde fortgesetzt.", en: "The spokeswoman communicated that the procedure would continue." },
    { task: "Deine Lektorin fragt, warum der Konjunktiv im Artikel bleiben muss.", taskEn: "Your editor asks why the subjunctive must stay in the article.", de: "Ohne ihn machen wir fremde Aussagen zu eigenen Behauptungen.", en: "Without it we turn other people's statements into our own assertions." }
  ],
  writing: {
    prompt: 'TASK 1 — Reported speech conversion (150 words): Convert direct quotations into authentic Konjunktiv I. Explain every reporting choice.\n\nTASK 2 — Neutrality upgrade (150 words): Rewrite an opinionated article into a neutral newspaper report using authentic reporting language.\n\nTASK 3 — Essay (550 words): Write a C2 news report naturally integrating Konjunktiv I, source attribution, journalistic neutrality, academic reporting, and institutional language.',
    starters: ['Die Ministerin erklärte, ...', 'Nach Angaben des Unternehmens ...', 'Die Studie kommt zu dem Ergebnis, dass ...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Konjunktiv I als Berichterstattungswerkzeug...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Why does a newspaper write "Die Ministerin erklärte, der Plan sei erfolgreich" instead of "Der Plan ist erfolgreich"?', options: ['To report the claim neutrally without personally confirming it', 'Because Indikativ is grammatically incorrect here', 'Because it is shorter'], answer: 0, explain: 'Konjunktiv I lets the journalist report the claim while remaining neutral about its truth.' },
    gap: { sentence: ['Die Staatsanwaltschaft erklärte, der Minister ', ' schuldig.'], gaps: [ { answer: 'sei', accepts: ['sei'] } ], explain: '"sei" (Konjunktiv I) reports the claim neutrally, without the newspaper personally confirming guilt.' },
    match: { q: 'Match each reporting context to its typical Konjunktiv I construction.', pairs: [ { noun: 'Journalism', art: 'Die Ministerin erklärte, ...' }, { noun: 'Academic', art: 'Die Studie kommt zu dem Ergebnis, dass ...' }, { noun: 'Legal', art: 'Das Gericht stellte fest, ...' }, { noun: 'Political', art: 'Der Präsident habe erklärt, ...' } ] },
    builder: { target: 'Build: "The prosecutor\'s office declared the minister is guilty." (neutral journalism)', bank: ['Die', 'Staatsanwaltschaft', 'erklärte', ',', 'der', 'Minister', 'sei', 'schuldig', '.'], answer: ['Die', 'Staatsanwaltschaft', 'erklärte', ',', 'der', 'Minister', 'sei', 'schuldig', '.'], roles: { 'erklärte': 'r-konjunktiv1', 'sei': 'r-konjunktiv1' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Zeitung schreibt: Der Minister ist schuldig, sagt die Staatsanwaltschaft.', right: 'Die Staatsanwaltschaft erklärte, der Minister sei schuldig.', explain: 'The Indikativ "ist schuldig" makes the newspaper sound personally convinced; Konjunktiv I ("sei schuldig") reports the claim neutrally instead.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for Konjunktiv I in this chapter?', options: ['It is invisible quotation marks, carrying someone else\'s words without confirming them', 'It always means the same as Indikativ', 'It only appears in unreal conditional sentences'], answer: 0, explain: 'Konjunktiv I signals "these are not my words — I am simply reporting them."' },
    { q: 'Why does replacing Konjunktiv I with Indikativ cause problems in journalism?', options: ['It makes the writer sound personally convinced of/responsible for the claim', 'It is always grammatically incorrect', 'It changes the tense of the sentence'], answer: 0, explain: 'Switching to Indikativ collapses the neutral distance a reporter should maintain.' },
    { q: 'What is the difference between "Er ist krank" and "Er sagt, er sei krank"?', options: ['The first states a fact; the second reports a claim without confirming it', 'They mean exactly the same thing', 'The second is always false'], answer: 0, explain: 'Konjunktiv I shifts responsibility for the claim to the original source.' },
    { q: 'Why is source attribution important when using Konjunktiv I?', options: ['It clarifies whose claim is being reported, maintaining credibility', 'It has no real function', 'It replaces the need for Konjunktiv I entirely'], answer: 0, explain: 'Clear attribution (e.g. "Nach Angaben des Unternehmens") is essential for journalistic and academic credibility.' },
    { q: 'What is a common C2 learner mistake with Konjunktiv I?', options: ['Inconsistently switching between Konjunktiv I and Indikativ within one report', 'Using Konjunktiv I too rarely in casual conversation', 'Avoiding all reporting verbs'], answer: 0, explain: 'Inconsistent switching confuses the reader about what is confirmed versus merely reported.' }
  ],
  takeaways: [
    { c: 'r-anfuehrungszeichen-metapher', html: 'Konjunktiv I is invisible quotation marks — it carries someone else\'s words without the speaker/writer claiming they are true.' },
    { c: 'r-konjunktiv1', html: 'Neutral reporting constructions (erklärte, ... sei; komme zu dem Ergebnis, dass ... sei) maintain journalistic, academic, legal, and political distance from a claim.' },
    { c: 'r-fakt', html: 'Stating something in Indikativ (Der Minister ist schuldig) means personally confirming it — a critical distinction from neutral Konjunktiv I reporting.' }
  ],
  revisionTips: [
    'Take five direct quotations and convert each into neutral Konjunktiv I reporting with clear source attribution.',
    'Rewrite one opinionated paragraph as a neutral newspaper report, checking every claim is properly attributed.',
    'Read one newspaper article and identify every Konjunktiv I construction, noting whose claim is being reported.'
  ]
};
window.CHAPTER = CHAPTER;
