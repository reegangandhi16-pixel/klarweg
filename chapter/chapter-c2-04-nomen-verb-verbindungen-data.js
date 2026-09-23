/* KLARWEG CHAPTER DATA — C2 · Chapter 4
   "Nomen-Verb-Verbindungen" (C2) — native-level nominal style:
   semantic precision, stylistic variation, register control and
   idiomatic academic usage of noun-verb constructions. NOT basic
   Funktionsverbgefüge or Nominalisierung (already mastered in C1) —
   focus is WHY native speakers choose a nominal construction over a
   simple verb. Dialogue: Henrike and Timo ONLY. Vocabulary is a
   curated representative set spanning academic, scientific,
   administrative/legal, journalistic and professional registers
   from the full uploaded Chapter 4 word list. */
const CHAPTER = {
  id: 'c2-04-nomen-verb-verbindungen',
  phase: 'C2 · Das Verbalsystem auf C2-Niveau',
  number: 4,
  title: 'Nomen-Verb-Verbindungen',
  titleEn: 'Noun-verb constructions at native level',
  description: 'Every simple verb has a formal twin. The verb is what people say in conversation. The noun-verb construction is what professors, researchers, journalists and officials choose when precision matters.',
  xp: 1275, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 5, title: 'Goethe Mini 1', titleEn: 'Checkpoint — Chapters 1–4 integrated' , href: 'chapter-c2-05-goethe-mini-1.html' },
  prevChapter: { number: 3, title: 'Verben und ihre Ergänzungen', titleEn: 'Verbs and their complements at native level', href: 'chapter-c2-03-verben-und-ihre-ergaenzungen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every simple verb has a <em>formal twin</em>.',
    intro: 'Revising a master\'s thesis, Henrike insists a decision must be brought about today, and Timo voices criticism of the procedure — trading simple verbs for their more formal noun-verb twins throughout.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly when educated native speakers choose a nominal construction over a simple verb, and why'],
    scene: 'Überarbeitung einer Masterarbeit',
    femaleSpeakers: ['Henrike'],
    dialogue: [
      { speaker: 'Henrike', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Entscheidung', role: 'r-akkusativ', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: 'herbeiführen', role: 'r-verb', en: 'bring about', hi: 'लाना', pron: 'her-BY-fü-ren', type: 'Verb · infinitive (Satzende)', why: 'eine Entscheidung herbeiführen = to bring about a decision, formal noun-verb construction (this chapter).', ex: 'eine Entscheidung herbeiführen' },
        { w: '.', plain: true }
      ], en: 'We must bring about a decision today.', hi: 'Humein aaj ek faisla laana hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'übe', role: 'r-verb', en: 'exercise', hi: 'करता हूँ', pron: 'Ü-buh', type: 'Verb · Kritik üben (ich)', why: 'Kritik üben = to exercise/voice criticism (this chapter).', ex: 'Ich übe Kritik an dem Verfahren.', exEn: 'I voice criticism of the procedure.' },
        { w: 'Kritik', role: 'r-akkusativ', en: 'criticism', hi: 'आलोचना', pron: 'kri-TEEK', type: 'Noun · fem.' },
        { w: 'an', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'an', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Verfahren', role: 'r-dativ', en: 'procedure (dat.)', hi: 'प्रक्रिया पर', pron: 'fer-FAH-ren', type: 'Noun · neut. dat.' },
        { w: '.', plain: true }
      ], en: 'I voice criticism of the procedure.', hi: 'Main prakriya par aalochana karta hoon.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Welchen', role: 'r-akkusativ', en: 'which (masc.)', hi: 'कौनसा', pron: 'VEL-khen', type: 'Question word' },
        { w: 'Standpunkt', role: 'r-akkusativ', en: 'standpoint', hi: 'दृष्टिकोण', pron: 'SHTANT-punkt', type: 'Noun · masc.' },
        { w: 'vertrittst', role: 'r-verb', en: 'do you hold', hi: 'रखते हो', pron: 'fer-TRITST', type: 'Verb · vertreten (du)', why: 'einen Standpunkt vertreten = to hold/represent a standpoint, formal noun-verb construction (this chapter).', ex: 'einen Standpunkt vertreten' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Which standpoint do you hold?', hi: 'Tum kaunsa drishtikon rakhte ho?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'vertrete', role: 'r-verb', en: 'hold', hi: 'रखता हूँ', pron: 'fer-TRAY-tuh', type: 'Verb · vertreten (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Standpunkt', role: 'r-akkusativ', en: 'standpoint', hi: 'दृष्टिकोण', pron: 'SHTANT-punkt', type: 'Noun · masc.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'wiederholt', role: 'r-verb', en: 'repeated', hi: 'दोहराया', pron: 'vee-der-HOHLT', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: '', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: 'sollte', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-tuh', type: 'Modal · sollen (Konjunktiv II)' },
        { w: '.', plain: true }
      ], en: 'I hold the standpoint that the study should be repeated.', hi: 'Main woh drishtikon rakhta hoon ki adhyayan dobara karna chahiye.' },
      { speaker: 'Henrike', tokens: [
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Urteil', role: 'r-akkusativ', en: 'judgment', hi: 'फ़ैसला', pron: 'OOR-tile', type: 'Noun · neut.' },
        { w: 'fällen', role: 'r-verb', en: 'render', hi: 'सुनाना', pron: 'FE-len', type: 'Verb · infinitive (Satzende)', why: 'ein Urteil fällen = to render a judgment, formal noun-verb construction (this chapter).', ex: 'ein Urteil fällen' },
        { w: ',', plain: true },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Nachweis', role: 'r-akkusativ', en: 'proof', hi: 'सबूत', pron: 'NAHKH-vyse', type: 'Noun · masc.' },
        { w: 'erbringen', role: 'r-verb', en: 'provide', hi: 'देना', pron: 'er-BRIN-gen', type: 'Verb · infinitive (Satzende)', why: 'einen Nachweis erbringen = to provide proof, formal noun-verb construction (this chapter).', ex: 'einen Nachweis erbringen' },
        { w: '.', plain: true }
      ], en: 'Before we render a judgment, we should provide proof.', hi: 'Faisla sunane se pehle, humein saboot dena chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'übernehme', role: 'r-verb', en: 'take on', hi: 'संभालता हूँ', pron: 'ü-ber-NAY-muh', type: 'Verb · übernehmen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Verantwortung', role: 'r-akkusativ', en: 'responsibility', hi: 'ज़िम्मेदारी', pron: 'fer-ANT-vor-tung', type: 'Noun · fem.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Nachweis', role: 'r-akkusativ', en: 'proof', hi: 'सबूत', pron: 'NAHKH-vyse', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Agreed. I take on the responsibility for the proof.', hi: 'Sahmat. Main saboot ki zimmedaari lete hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every simple verb has a <span class="de r-formeller-zwilling">formal twin</span> — professors, researchers and officials choose it when precision matters.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is NOMEN-VERB-VERBINDUNGEN at C2 level — native-level NOMINAL STYLE: semantic precision, stylistic variation, register control and idiomatic academic usage of noun-verb constructions (e.g. eine Analyse durchführen, eine Entscheidung herbeiführen, Verantwortung übernehmen, eine Hypothese aufstellen, Kritik üben), NOT basic Funktionsverbgefüge introduction or basic Nominalisierung mechanics (already fully mastered in C1). Covered: WHY native speakers prefer a nominal construction over a simple verb (analysieren → eine Analyse durchführen; prüfen → eine Prüfung durchführen; entwickeln → eine Entwicklung durchlaufen; empfehlen → eine Empfehlung aussprechen; begründen → eine Begründung liefern); semantic nuances among near-synonymous nominal constructions for the same base verb (entscheiden → eine Entscheidung treffen vs. zu einer Entscheidung gelangen vs. eine Entscheidung herbeiführen — each with a different nuance of process/effort); register-specific nominal constructions across academic (eine Hypothese aufstellen, eine Schlussfolgerung ziehen, eine Argumentation entwickeln), scientific (eine Messung durchführen, eine Auswertung vornehmen, eine Validierung durchführen), administrative/legal (einen Antrag stellen, eine Genehmigung erteilen, eine Verfügung erlassen), and journalistic (Kritik üben, Druck ausüben, eine Debatte auslösen) usage; and stylistic reformulation (rewriting a simple/informal sentence progressively into professional, academic, scientific, and administrative registers). The most important things to catch: overusing simple verbs where a nominal construction is register-appropriate; using unnecessary nominal style in casual/conversational contexts (over-formality can be as unnatural as under-formality); mixing an informal verb with a formal noun (register mismatch within one construction); literal translation from English (English rarely has equivalent noun-verb collocations, so word-for-word translation produces unnatural German); incorrect collocations (using the wrong support verb for a given noun, e.g. "eine Entscheidung machen" instead of "eine Entscheidung treffen"); ignoring register entirely (choosing the same construction regardless of audience or genre). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag simple-verb usage that would sound more native as a nominal construction in the given register; flag over-formal nominal constructions in clearly informal/conversational contexts; flag incorrect noun-verb collocations (wrong support verb for a given noun); flag register mismatches within one construction. Do NOT flag basic Funktionsverbgefüge formation errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around register/precision). If none: <li>No errors — well done.</li> 3) <p><b>Native-level nominal style check:</b> one sentence on whether the learner chooses nominal constructions deliberately for register, rather than by default or never.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you choose nominal constructions deliberately, not by default. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Reformulation Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: every simple verb has a formal twin, and C2 mastery means knowing when each twin belongs.' },
  parserSentence: [ { w: 'Wir', role: 'plain' }, { w: 'führen', role: 'r-nomen-verb-verbindung' }, { w: 'eine', role: 'r-nomen-verb-verbindung' }, { w: 'Analyse', role: 'r-nomen-verb-verbindung' }, { w: 'durch', role: 'r-nomen-verb-verbindung' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every simple verb has a formal twin — a noun-verb construction chosen when precision and formality matter.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Henrike and Timo revise a thesis, replacing simple verbs with sophisticated noun-verb constructions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn a curated set of C2 noun-verb constructions across academic, scientific, legal/administrative, and journalistic registers — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master why native speakers prefer nominal constructions, semantic nuances among near-synonyms, and register-based selection.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic research article, a government policy document, and a literary essay for noun-verb constructions.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominal constructions and their stylistic purpose in a university lecture, conference presentation, and press conference.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice reformulating sentences, replacing simple verbs, and discussing stylistic choices at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace simple verbs with authentic constructions, upgrade an informal article to academic style, and write a 500-word essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill verb vs. nominal style, register selection, and lexical reformulation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1275 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Verb-to-nominal reformulation, register selection, and stylistic transformation drills, plus the full 500-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '18 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Reformulation Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir führen eine Analyse durch.', text: 'Use "eine Analyse durchführen" instead of the plain verb "analysieren" in academic writing' },
    { de: 'Der Ausschuss führt eine Entscheidung herbei.', text: 'Distinguish nuances among "eine Entscheidung treffen / gelangen zu / herbeiführen"' },
    { de: 'Die Regierung erlässt eine Verfügung.', text: 'Use administrative/legal noun-verb constructions precisely' },
    { de: 'Die Studie löst eine Debatte aus.', text: 'Use journalistic noun-verb constructions for media-appropriate style' },
    { de: 'Jedes einfache Verb hat einen formellen Zwilling.', text: 'Understand the chapter\'s core "formal twin" metaphor for register choice' }
  ],
  vocab: [
    { de: 'eine Analyse durchführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to carry out an analysis', hi: 'विश्लेषण करना', synonyms: 'analysieren', antonyms: null, ex: 'Statt "analysieren" schreibst du besser "eine Analyse durchführen".', exEn: 'Instead of "analysieren" you should better write "eine Analyse durchführen".', exHi: '"Analysieren" ki jagah tum behtar "eine Analyse durchführen" likh sakte ho.', ex2: 'Die Forscher führen eine umfassende Analyse der Daten durch.', ex2En: 'The researchers carry out a comprehensive analysis of the data.', ex2Hi: 'Shodhkarta data ka vyapak vishleshan karte hain.' },
    { de: 'eine Entscheidung herbeiführen', pos: 'noun-verb construction', level: 'C2', register: 'academic/formal', en: 'to bring about a decision (through deliberate process)', hi: 'निर्णय लाना (प्रक्रिया के जरिए)', synonyms: 'eine Entscheidung treffen, zu einer Entscheidung gelangen', antonyms: null, ex: 'Ich ersetze "entscheiden" durch "eine Entscheidung herbeiführen".', exEn: 'I replace "entscheiden" with "eine Entscheidung herbeiführen".', exHi: '"Entscheiden" ko main "eine Entscheidung herbeiführen" se badloon.', ex2: 'Der Ausschuss führte nach langer Debatte eine Entscheidung herbei.', ex2En: 'The committee brought about a decision after a long debate.', ex2Hi: 'Committee ne lambi bahas ke baad nirnay lekar aaya.' },
    { de: 'eine Hypothese aufstellen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to formulate a hypothesis', hi: 'परिकल्पना बनाना', synonyms: null, antonyms: 'eine Hypothese widerlegen', ex: 'Wir stellen zunächst eine Hypothese auf, bevor wir das Experiment beginnen.', exEn: 'We first formulate a hypothesis before beginning the experiment.', exHi: 'Experiment shuru karne se pehle hum ek hypothesis banate hain.', ex2: 'Die Hypothese, die er aufstellt, ist empirisch überprüfbar.', ex2En: 'The hypothesis he formulates is empirically testable.', ex2Hi: 'Voh jo hypothesis banaata hai voh empirically parikshan-yogya hai.' },
    { de: 'eine Schlussfolgerung ziehen', pos: 'noun-verb construction', level: 'C2', register: 'academic', en: 'to draw a conclusion', hi: 'निष्कर्ष निकालना', synonyms: 'schlussfolgern', antonyms: null, ex: 'Aus den Daten lässt sich eine klare Schlussfolgerung ziehen.', exEn: 'A clear conclusion can be drawn from the data.', exHi: 'Data se ek saaf nishkarsh nikaala jaa sakta hai.', ex2: 'Wir ziehen die Schlussfolgerung, dass weitere Forschung nötig ist.', ex2En: 'We draw the conclusion that further research is necessary.', ex2Hi: 'Hum yeh nishkarsh nikaalte hain ki aur shodh zaroori hai.' },
    { de: 'eine Empfehlung aussprechen', pos: 'noun-verb construction', level: 'C2', register: 'professional/formal', en: 'to make a recommendation', hi: 'सिफारिश करना', synonyms: 'empfehlen', antonyms: null, ex: 'Der Ausschuss spricht eine klare Empfehlung für die Reform aus.', exEn: 'The committee makes a clear recommendation for the reform.', exHi: 'Committee sudhaar ke liye ek saaf sifaarish karti hai.', ex2: 'Wir sprechen eine Empfehlung aus, ohne die Entscheidung zu erzwingen.', ex2En: 'We make a recommendation without forcing the decision.', ex2Hi: 'Hum nirnay ko majboor kiye bina sifaarish karte hain.' },
    { de: 'eine Begründung liefern', pos: 'noun-verb construction', level: 'C2', register: 'academic/formal', en: 'to provide a justification', hi: 'औचित्य प्रदान करना', synonyms: 'begründen', antonyms: null, ex: 'Der Autor liefert eine überzeugende Begründung für seine These.', exEn: 'The author provides a convincing justification for his thesis.', exHi: 'Lekhak apni thesis ke liye ek convincing auchitya deta hai.', ex2: 'Ohne eine solide Begründung wirkt das Argument schwach.', ex2En: 'Without a solid justification the argument seems weak.', ex2Hi: 'Bina ek thos auchitya ke tark kamzor lagta hai.' },
    { de: 'einen Antrag stellen', pos: 'noun-verb construction', level: 'C2', register: 'administrative/formal', en: 'to submit an application/motion', hi: 'आवेदन प्रस्तुत करना', synonyms: 'beantragen', antonyms: null, ex: 'Sie stellt einen Antrag auf finanzielle Unterstützung.', exEn: 'She submits an application for financial support.', exHi: 'Voh vittiya sahaayata ke liye ek application prastut karti hai.', ex2: 'Der Antrag wurde fristgerecht gestellt.', ex2En: 'The application was submitted on time.', ex2Hi: 'Application samay par prastut ki gayi.' },
    { de: 'eine Genehmigung erteilen', pos: 'noun-verb construction', level: 'C2', register: 'administrative/legal', en: 'to grant approval', hi: 'अनुमति देना', synonyms: 'genehmigen', antonyms: 'eine Genehmigung verweigern', ex: 'Die Behörde erteilt die Genehmigung nach eingehender Prüfung.', exEn: 'The authority grants approval after thorough review.', exHi: 'Adhikaari poori jaanch ke baad anumati dete hain.', ex2: 'Ohne diese Genehmigung darf das Projekt nicht beginnen.', ex2En: 'Without this approval the project may not begin.', ex2Hi: 'Iss anumati ke bina project shuru nahi ho sakta.' },
    { de: 'eine Verfügung erlassen', pos: 'noun-verb construction', level: 'C2', register: 'legal/administrative', en: 'to issue a decree/order', hi: 'आदेश जारी करना', synonyms: 'verfügen', antonyms: null, ex: 'Die Regierung erlässt eine Verfügung zur Beschränkung des Verkehrs.', exEn: 'The government issues a decree restricting traffic.', exHi: 'Sarkaar traffic seemit karne ke liye ek aadesh jaari karti hai.', ex2: 'Das Gericht erließ eine einstweilige Verfügung.', ex2En: 'The court issued a temporary injunction.', ex2Hi: 'Adaalat ne ek asthaayi aadesh jaari kiya.' },
    { de: 'Kritik üben', pos: 'noun-verb construction', level: 'C2', register: 'journalism/formal', en: 'to criticize, exercise criticism', hi: 'आलोचना करना', synonyms: 'kritisieren', antonyms: 'loben', ex: 'Kritiker üben scharfe Kritik an der neuen Politik.', exEn: 'Critics sharply criticize the new policy.', exHi: 'Aalochak nayi policy ki teevra alochna karte hain.', ex2: 'Er übt Kritik, ohne konkrete Lösungen anzubieten.', ex2En: 'He criticizes without offering concrete solutions.', ex2Hi: 'Voh thos solutions diye bina alochna karta hai.' },
    { de: 'eine Debatte auslösen', pos: 'noun-verb construction', level: 'C2', register: 'journalism/academic', en: 'to trigger a debate', hi: 'बहस छेड़ना', synonyms: 'eine Diskussion entfachen', antonyms: null, ex: 'Die Veröffentlichung löst eine kulturelle Debatte aus.', exEn: 'The publication triggers a cultural debate.', exHi: 'Publication ek saanskritik bahas chhed deti hai.', ex2: 'Der Vorschlag löste eine heftige Debatte im Parlament aus.', ex2En: 'The proposal triggered a fierce debate in parliament.', ex2Hi: 'Proposal ne sansad mein ek teevra bahas chhed di.' },
    { de: 'Verantwortung übernehmen', pos: 'noun-verb construction', level: 'C2', register: 'both', en: 'to take responsibility', hi: 'ज़िम्मेदारी लेना', synonyms: 'Verantwortung tragen', antonyms: 'Verantwortung ablehnen', ex: 'Das Unternehmen übernimmt Verantwortung für den Fehler.', exEn: 'The company takes responsibility for the error.', exHi: 'Company galti ke liye zimmedaari leti hai.', ex2: 'Führungskräfte müssen für ihre Entscheidungen Verantwortung übernehmen.', ex2En: 'Leaders must take responsibility for their decisions.', ex2Hi: 'Leaders ko apne faislon ke liye zimmedaari leni chahiye.' },
    { de: 'einen Beitrag leisten', pos: 'noun-verb construction', level: 'C2', register: 'formal/academic', en: 'to make a contribution', hi: 'योगदान देना', synonyms: 'beitragen', antonyms: null, ex: 'Diese Studie leistet einen wichtigen Beitrag zur Forschung.', exEn: 'This study makes an important contribution to research.', exHi: 'Yeh study research mein ek mahatvapurn yogdaan deti hai.', ex2: 'Jeder Einzelne kann einen Beitrag zum Umweltschutz leisten.', ex2En: 'Every individual can make a contribution to environmental protection.', ex2Hi: 'Har vyakti paryavaran suraksha mein yogdaan de sakta hai.' },
    { de: 'einen Zusammenhang herstellen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to establish a connection', hi: 'संबंध स्थापित करना', synonyms: 'verbinden', antonyms: null, ex: 'Die Autorin stellt einen überzeugenden Zusammenhang zwischen den Variablen her.', exEn: 'The author establishes a convincing connection between the variables.', exHi: 'Lekhika variables ke beech ek convincing sambandh sthaapit karti hai.', ex2: 'Es ist schwierig, hier einen kausalen Zusammenhang herzustellen.', ex2En: 'It is difficult to establish a causal connection here.', ex2Hi: 'Yahaan ek kaaranaatmak sambandh sthaapit karna mushkil hai.' },
    { de: 'einen Standpunkt vertreten', pos: 'noun-verb construction', level: 'C2', register: 'academic/formal', en: 'to hold/represent a position', hi: 'दृष्टिकोण रखना', synonyms: 'eine Meinung vertreten', antonyms: null, ex: 'Der Autor vertritt einen kontroversen Standpunkt.', exEn: 'The author holds a controversial position.', exHi: 'Lekhak ek vivaadaaspad drishtikon rakhta hai.', ex2: 'Sie vertritt ihren Standpunkt mit überzeugenden Argumenten.', ex2En: 'She represents her position with convincing arguments.', ex2Hi: 'Voh convincing tarko ke saath apna drishtikon rakhti hai.' },
    { de: 'einen Nachweis erbringen', pos: 'noun-verb construction', level: 'C2', register: 'academic/legal', en: 'to provide proof', hi: 'प्रमाण देना', synonyms: 'nachweisen, beweisen', antonyms: null, ex: 'Die Forscher erbringen einen empirischen Nachweis für ihre These.', exEn: 'The researchers provide empirical proof for their thesis.', exHi: 'Shodhkarta apni thesis ke liye empirical praman dete hain.', ex2: 'Ohne einen klaren Nachweis bleibt die Behauptung unbestätigt.', ex2En: 'Without clear proof, the claim remains unconfirmed.', ex2Hi: 'Bina spashtha praman ke daava anpushti rehta hai.' },
    { de: 'ein Urteil fällen', pos: 'noun-verb construction', level: 'C2', register: 'legal/formal', en: 'to pass judgment', hi: 'फैसला सुनाना', synonyms: 'urteilen', antonyms: null, ex: 'Das Gericht fällt sein Urteil nach monatelanger Verhandlung.', exEn: 'The court passes its judgment after months of proceedings.', exHi: 'Adaalat mahinon ki karyavaahi ke baad apna faisla sunaati hai.', ex2: 'Man sollte nicht vorschnell ein Urteil fällen.', ex2En: 'One should not pass judgment prematurely.', ex2Hi: 'Jaldbaazi mein faisla nahi sunaana chahiye.' },
    { de: 'einen Konflikt schlichten', pos: 'noun-verb construction', level: 'C2', register: 'formal/professional', en: 'to mediate a conflict', hi: 'संघर्ष सुलझाना', synonyms: 'einen Konflikt lösen', antonyms: 'einen Konflikt eskalieren', ex: 'Der Vermittler schlichtete den Konflikt zwischen beiden Parteien.', exEn: 'The mediator resolved the conflict between both parties.', exHi: 'Madhyasth ne dono paksho ke beech sangharsh sulzhaya.', ex2: 'Diplomatische Verhandlungen können solche Konflikte schlichten.', ex2En: 'Diplomatic negotiations can mediate such conflicts.', ex2Hi: 'Diplomatic baatcheet aise sangharshon ko sulzha sakti hai.' },
    { de: 'eine Krise bewältigen', pos: 'noun-verb construction', level: 'C2', register: 'professional/journalism', en: 'to manage/overcome a crisis', hi: 'संकट का सामना करना', synonyms: null, antonyms: null, ex: 'Das Unternehmen bewältigt die Krise durch strategische Entscheidungen.', exEn: 'The company manages the crisis through strategic decisions.', exHi: 'Company strategic faislon ke zariye sankat ka saamna karti hai.', ex2: 'Länder mit starken Institutionen bewältigen Krisen besser.', ex2En: 'Countries with strong institutions manage crises better.', ex2Hi: 'Mazboot institutions waale desh sankaton ka behtar saamna karte hain.' },
    { de: 'Druck ausüben', pos: 'noun-verb construction', level: 'C2', register: 'journalism/professional', en: 'to exert pressure', hi: 'दबाव डालना', synonyms: null, antonyms: null, ex: 'Die Öffentlichkeit übt zunehmend Druck auf die Regierung aus.', exEn: 'The public increasingly exerts pressure on the government.', exHi: 'Public sarkaar par lagaataar dabaav daal rahi hai.', ex2: 'Internationaler Druck kann politische Veränderungen beschleunigen.', ex2En: 'International pressure can accelerate political change.', ex2Hi: 'Antarrashtriya dabaav rajneetik badlaav ko tez kar sakta hai.' },
    { de: 'Erkenntnisse gewinnen', pos: 'noun-verb construction', level: 'C2', register: 'academic/scientific', en: 'to gain insights', hi: 'अंतर्दृष्टि प्राप्त करना', synonyms: null, antonyms: null, ex: 'Durch die Studie gewinnen wir neue Erkenntnisse über das Phänomen.', exEn: 'Through the study we gain new insights into the phenomenon.', exHi: 'Study ke zariye hum is phenomenon ke baare mein naye insights prapt karte hain.', ex2: 'Diese Erkenntnisse gewinnt man nur durch langfristige Beobachtung.', ex2En: 'These insights are only gained through long-term observation.', ex2Hi: 'Yeh insights sirf long-term observation se hi prapt hote hain.' }
  ],
  grammar: [
    { title: 'Warum Nomen-Verb-Verbindungen? (Why Native Speakers Prefer Nominal Constructions)', body: [ 'Nomen-Verb-Verbindung ka matlab hai kaam ko naam mein badal dena — <i>analysieren</i> se <span class="de">eine Analyse durchführen</span>. Matlab wahi rehta hai, par text zyada formal aur objective lagta hai. Isliye academic, scientific aur official writing mein yeh har jagah milta hai. Aur dhyaan do — noun ke saath jo verb aata hai woh fix hota hai; use badla nahi jaa sakta.' ] },
    { title: 'Verb vs. Nomen-Verb-Verbindung', body: [ 'prüfen → eine Prüfung durchführen; entwickeln → eine Entwicklung durchlaufen; empfehlen → eine Empfehlung aussprechen; begründen → eine Begründung liefern. Each pair carries the same core meaning but a different register.' ], hinglish: 'Har simple verb ka ek formal roop hota hai, par uska support verb har baar alag hai \u2014 aur yahi yaad karna padta hai. <span class="de">Pr\u00fcfung <b>durchf\u00fchren</b></span>, <span class="de">Empfehlung <b>aussprechen</b></span>, <span class="de">Begr\u00fcndung <b>liefern</b></span>. Ek noun ka verb pata hone se doosre ka pata nahi chalta, isliye inhe jodi mein yaad karo.' },
    { title: 'Semantische Nuancen (Semantic Nuances)', body: [ 'entscheiden → eine Entscheidung treffen (neutral) → zu einer Entscheidung gelangen (process-emphasizing, after deliberation) → eine Entscheidung herbeiführen (deliberately bring about, often through effort or negotiation). Native speakers select among these based on subtle nuance.' ], hinglish: 'C2 par ek hi noun ke saath kai support verbs chal sakte hain, aur har ek se matlab thoda badal jaata hai. <span class="de">eine Entscheidung treffen</span> neutral hai \u2014 bas faisla hua. <span class="de">zu einer Entscheidung gelangen</span> mein soch-vichaar ka process jhalakta hai. Aur <span class="de">eine Entscheidung herbeif\u00fchren</span> matlab koshish karke faisla karwana. Isliye C2 par sawaal yeh nahi rehta ki kaunsa sahi hai, balki yeh ki kaunsa <b>theek matlab</b> deta hai.' },
    { title: 'Stilistische Umformulierung (Stylistic Reformulation)', body: [ 'Simple sentence → Formal sentence → Academic sentence → Scientific sentence → Administrative sentence. The same idea is progressively reformulated with increasing nominal density as formality increases.' ], hinglish: 'Ek hi baat ko jitna formal banana ho, utne zyada nouns aate jaate hain. Par ek limit hai \u2014 agar sentence mein teen-chaar Genitiv attributes ek ke baad ek aa jaayein, to padhna mushkil ho jaata hai. Uss soorat mein ek noun ko wapas verb bana dena behtar hai.' },
    { title: 'Register-spezifische Verbindungen (Register-Based Nominal Constructions)', body: [ 'Har register ki apni jodiyan hain. Academic mein <span class="de">eine Hypothese <b>aufstellen</b></span> aur <span class="de">eine Schlussfolgerung <b>ziehen</b></span>. Scientific mein <span class="de">eine Messung <b>durchf\u00fchren</b></span> aur <span class="de">eine Auswertung <b>vornehmen</b></span>. Official documents mein <span class="de">einen Antrag <b>stellen</b></span> aur <span class="de">eine Genehmigung <b>erteilen</b></span> \u2014 aur dhyaan do ki yeh do ulti nahi ho sakti: tum Antrag stellen karte ho, aur authority Genehmigung erteilen karti hai. News mein <span class="de">Kritik <b>\u00fcben</b></span> aur <span class="de">Druck <b>aus\u00fcben</b></span>.' ], hinglish: 'Har register ki apni jodiyan hain. Academic mein <span class="de">eine Hypothese <b>aufstellen</b></span> aur <span class="de">eine Schlussfolgerung <b>ziehen</b></span>. Scientific mein <span class="de">eine Messung <b>durchf\u00fchren</b></span> aur <span class="de">eine Auswertung <b>vornehmen</b></span>. Official documents mein <span class="de">einen Antrag <b>stellen</b></span> aur <span class="de">eine Genehmigung <b>erteilen</b></span> \u2014 aur dhyaan do ki yeh do ulti nahi ho sakti: tum Antrag stellen karte ho, aur authority Genehmigung erteilen karti hai. News mein <span class="de">Kritik <b>\u00fcben</b></span> aur <span class="de">Druck <b>aus\u00fcben</b></span>.' },
    {
      title: 'Die St\u00fctzverben \u2014 Gruppen, Formen, Objekte',
      body: [
        'A handful of support verbs cover most Nomen-Verb-Verbindungen, and each has a rough sense. Learning them in groups is far faster than learning fifty separate collocations.',
        'Two further points the examples above depend on: several of these verbs are separable, and the object of the original verb becomes a Genitiv attribute or a prepositional phrase.'
      ],
      table: {
        head: ['Support verb', 'Rough sense', 'Partizip II', 'Typical nouns'],
        rows: [
          ['<b>treffen</b>', 'reach, settle', 'getroffen', '<span class="de">Entscheidung, Vereinbarung, Ma\u00dfnahmen</span>'],
          ['<b>durchf\u00fchren</b>', 'carry out', 'durchgef\u00fchrt', '<span class="de">Analyse, Messung, Pr\u00fcfung, Untersuchung</span>'],
          ['<b>vornehmen</b>', 'undertake, effect', 'vorgenommen', '<span class="de">Auswertung, Bewertung, Differenzierung</span>'],
          ['<b>stellen</b>', 'put forward', 'gestellt', '<span class="de">Antrag, Frage, Forderung</span>'],
          ['<b>\u00fcben</b> / <b>aus\u00fcben</b>', 'exert', 'ge\u00fcbt / ausge\u00fcbt', '<span class="de">Kritik \u00fcben</span>, <span class="de">Druck aus\u00fcben</span>'],
          ['<b>aussprechen</b>', 'express formally', 'ausgesprochen', '<span class="de">Empfehlung, Dank, Warnung</span>'],
          ['<b>ziehen</b>', 'draw', 'gezogen', '<span class="de">Schlussfolgerung, Bilanz</span>'],
          ['<b>erteilen</b>', 'grant', 'erteilt', '<span class="de">Genehmigung, Auskunft, Erlaubnis</span>']
        ]
      },
      note: 'What happens to the old object: <span class="de">Sie analysiert <b>die Daten</b></span> becomes <span class="de">die Analyse <b>der Daten</b></span> (Genitiv) or <span class="de">eine Analyse <b>der Daten</b> durchf\u00fchren</span>. And note <b>durchf\u00fchren</b>, <b>vornehmen</b>, <b>aussprechen</b> and <b>aus\u00fcben</b> are separable, so their prefix closes the clause: <span class="de">Wir f\u00fchren eine Analyse <b>durch</b>.</span>',
      hinglish: 'Kuch hi support verbs zyada-tar Nomen-Verb-Verbindungen cover kar lete hain, aur har ek ka apna matlab hai \u2014 isliye inhe group mein yaad karna pachaas collocations ratne se bahut tez hai. <b>treffen</b> matlab kisi nateeje par pahunchna (<span class="de">eine Entscheidung treffen</span>), <b>durchf\u00fchren</b> matlab koi kaam poora karna (<span class="de">eine Analyse durchf\u00fchren</span>), <b>stellen</b> matlab kuch saamne rakhna (<span class="de">einen Antrag stellen</span>), aur <b>erteilen</b> matlab dena (<span class="de">eine Genehmigung erteilen</span>). Do baatein saath dhyaan mein rakho. Pehli \u2014 inme se kai separable hain, isliye main clause mein prefix end mein jaata hai: <span class="de">Wir f\u00fchren eine Analyse <b>durch</b>.</span> Aur unka Partizip II bhi usi hisaab se banta hai: <b>durchgef\u00fchrt</b>, <b>vorgenommen</b>, <b>ausgesprochen</b>. Doosri \u2014 purane verb ka object ab <b>Genitiv</b> mein aa jaata hai: <span class="de">Sie analysiert die Daten</span> se <span class="de">die Analyse <b>der Daten</b></span>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Simple verb mapped to its noun-verb construction and typical register.' ], table: { head: ['Simple Verb', 'Nomen-Verb-Verbindung', 'Register'], rows: [ ['analysieren', 'eine Analyse durchführen', 'Academic'], ['entscheiden', 'eine Entscheidung treffen', 'General'], ['empfehlen', 'eine Empfehlung aussprechen', 'Professional'], ['messen', 'eine Messung durchführen', 'Scientific'], ['beantragen', 'einen Antrag stellen', 'Administrative'] ] }, hinglish: 'Simple verb, uska nominal roop aur register \u2014 teen column. Ise dekh kar tay karo ki tumhare text mein kaunsa roop theek baithega.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these substitute the wrong support verb \u2014 usually <i>machen</i> or <i>nehmen</i>. The others get the case wrong or use administrative style where it does not belong.' ], mistakes: [
      { wrong: 'Die Kommission hat eine Entscheidung gemacht.', right: 'Die Kommission hat eine Entscheidung getroffen.', why: '<b>Entscheidung</b> takes the support verb <b>treffen</b>. <i>machen</i> is the default learners reach for and is wrong with almost every noun in this chapter.' },
      { wrong: 'Der Beh\u00f6rde hat eine Genehmigung erteilt.', right: 'Die Beh\u00f6rde hat eine Genehmigung erteilt.', why: 'The authority is the <b>subject</b>, so it stands in the Nominativ. In these constructions the giver is nominative and the thing given is accusative.' },
      { wrong: 'Wir haben eine Messung gemacht und eine Auswertung genommen.', right: 'Wir haben eine Messung durchgef\u00fchrt und eine Auswertung vorgenommen.', why: 'Scientific nouns have precise partners: <b>Messung durchf\u00fchren</b>, <b>Auswertung vornehmen</b>. Note both support verbs are separable \u2014 <b>durchgef\u00fchrt</b>, <b>vorgenommen</b>.' },
      { wrong: 'Der Professor hat eine Empfehlung gesprochen.', right: 'Der Professor hat eine Empfehlung ausgesprochen.', why: 'The support verb is <b>aussprechen</b>, not plain <i>sprechen</i> \u2014 and because it is separable, the Partizip II is <b>ausgesprochen</b>.' },
      { wrong: 'Sie hat Kritik gemacht und Druck gemacht.', right: 'Sie hat Kritik ge\u00fcbt und Druck ausge\u00fcbt.', why: 'Two related nouns, two different verbs: <b>Kritik \u00fcben</b> but <b>Druck aus\u00fcben</b>. Knowing one does not give you the other.' },
      { wrong: 'Hallo Anna! Ich m\u00f6chte hiermit einen Antrag auf Urlaub stellen.', right: 'Hallo Anna! Ich w\u00fcrde n\u00e4chste Woche gern Urlaub nehmen.', why: 'Administrative nominal style after a casual greeting is a register clash. Over-formality is as much an error as under-formality.' }
    ], hinglish: 'Chaar galtiyan galat support verb chunne se hain \u2014 aksar <i>machen</i> ya <i>nehmen</i> laga dene se. Baaki do mein case galat hai, ya official bhaasha wahan use ki gayi hai jahan uski zaroorat nahi thi.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to express an action? Is informal style appropriate? If NO, can a noun-verb construction improve precision? Check register. Choose authentic collocation. Produce native-level expression.' ], note: 'Memory trick: every simple verb has a formal twin. The simple verb is what people say in everyday conversation. The noun-verb construction is what professors, researchers, journalists and officials choose when precision, objectivity and formality matter. C2 mastery means knowing when each twin belongs.', hinglish: 'Kuch likhna hai? Pehle register tay karo \u2014 bolchaal mein simple verb hi behtar hai. Formal ya academic text ho to nominal roop chuno, par uska <b>sahi</b> support verb yaad hona chahiye; shak ho to simple verb likh do, woh galat jodi se behtar hai. Aur likhne ke baad do cheezein check karo: separable support verb ka prefix end mein gaya, aur purana object Genitiv mein aaya?' }
  ],
  reading: {
    title: 'Forschungsbericht: Rätselhafte Signale aus der Frühzeit des Kosmos',
    titleEn: 'Reading A — Research report: puzzling signals from the early cosmos',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Astronominnen', role: 'plain', en: 'astronomers (f.)', hi: 'खगोलविद', type: 'Noun · plural' },
      { w: 'führen', role: 'r-nomen-verb-verbindung', en: 'carry out (part of "eine Analyse durchführen" — the formal academic construction)', hi: '', type: 'Verb (Präsens)' },
      { w: 'eine', role: 'r-nomen-verb-verbindung', en: 'an (fem. akk., part of the construction)', hi: 'एक', type: 'Article' },
      { w: 'aufwendige', role: 'plain', en: 'elaborate', hi: 'व्यापक', type: 'Adjective · Akk.' },
      { w: 'Analyse', role: 'r-nomen-verb-verbindung', en: 'analysis (part of the construction)', hi: 'विश्लेषण', type: 'Noun · fem. · Akk.' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'इन', type: 'Article · Gen.' },
      { w: 'Radiodaten', role: 'plain', en: 'radio data (Satzende)', hi: 'रेडियो डेटा (Satzende)', type: 'Noun · plural' },
      { w: 'durch', role: 'r-nomen-verb-verbindung', en: '(separable prefix completing "durchführen", Satzende)', hi: '', type: 'Verbpräfix (Satzende)', why: 'The nominal construction "eine Analyse durchführen" signals precise academic method rather than the vague simple verb "analysieren" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Anschließend', role: 'plain', en: 'subsequently', hi: 'इसके बाद', type: 'Adverb' },
      { w: 'stellen', role: 'r-nomen-verb-verbindung', en: 'formulate (part of "eine Hypothese aufstellen")', hi: '', type: 'Verb (Präsens)' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronomen · Nom.' },
      { w: 'eine', role: 'r-nomen-verb-verbindung', en: 'a (fem. akk.)', hi: 'एक', type: 'Article' },
      { w: 'gewagte', role: 'plain', en: 'daring', hi: 'साहसी', type: 'Adjective · Akk.' },
      { w: 'Hypothese', role: 'r-nomen-verb-verbindung', en: 'hypothesis (part of the construction)', hi: 'परिकल्पना', type: 'Noun · fem. · Akk.' },
      { w: 'auf', role: 'r-nomen-verb-verbindung', en: '(separable prefix completing "aufstellen", Satzende)', hi: '', type: 'Verbpräfix (Satzende)' },
      { w: ':', plain: true },
      { w: 'Das', role: 'plain', en: 'the (neut.)', hi: 'यह', type: 'Article' },
      { w: 'Signal', role: 'plain', en: 'signal (Satzende)', hi: 'संकेत (Satzende)', type: 'Noun · neut.' },
      { w: 'könnte', role: 'plain', en: 'could', hi: 'हो सकता है', type: 'Verb · Modalverb (Konjunktiv II)' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'kollidierenden', role: 'plain', en: 'colliding', hi: 'टकराते हुए', type: 'Partizip I · Dat.' },
      { w: 'Galaxie', role: 'plain', en: 'galaxy (Satzende)', hi: 'आकाशगंगा (Satzende)', type: 'Noun · fem.' },
      { w: 'stammen', role: 'plain', en: 'originate (Satzende)', hi: 'से उत्पन्न होना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'The astronomers carry out an elaborate analysis of the radio data. Subsequently they formulate a daring hypothesis: the signal could originate from a colliding galaxy.',
    comprehension: [
      { q: 'Warum bevorzugt der Bericht "eine Analyse durchführen" statt "analysieren"?', options: ['Für akademische Präzision und Formalität', 'Weil "analysieren" grammatisch falsch ist', 'Aus Zufall'], answer: 0 },
      { q: 'Welche zwei Nomen-Verb-Verbindungen erscheinen im Text?', options: ['eine Analyse durchführen / eine Hypothese aufstellen', 'ein Urteil fällen / einen Antrag stellen', 'Druck ausüben / Kritik üben'], answer: 0 },
      { q: 'Ist "durchführen" hier trennbar oder untrennbar?', options: ['Trennbar', 'Untrennbar', 'Weder noch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungsdokument', titleEn: 'Reading B — Government policy document',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Behörde', role: 'plain', en: 'authority', hi: 'adhikaari', type: 'Noun · fem.' },
      { w: 'erteilt', role: 'r-nomen-verb-verbindung', en: 'grants (part of "eine Genehmigung erteilen" — administrative construction)', hi: '(eine Genehmigung erteilen, administrative)', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: '', type: 'Article' },
      { w: 'Genehmigung', role: 'r-nomen-verb-verbindung', en: 'approval (Satzende, part of the construction)', hi: 'anumati (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The authority grants the approval.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_004_L001', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, "wir entscheiden das heute" klingt in der Zusammenfassung zu locker.', en: 'Timo, "we decide that today" sounds too casual in the summary.' },
      { id: 'C2_004_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wie wäre "eine Entscheidung treffen"? Das passt eher zum Stil.', en: 'How about "to make a decision"? That fits the style better.' },
      { id: 'C2_004_L003', speaker: 'Henrike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, und statt "wir kritisieren das Verfahren" schreiben wir "Kritik am Verfahren üben".', en: 'Good, and instead of "we criticize the procedure" we write "to voice criticism of the procedure".' },
      { id: 'C2_004_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, das liest sich gleich viel formeller.', en: 'Perfect, that reads much more formally right away.' }
    ],
    transcript: 'Timo, "wir entscheiden das heute" klingt in der Zusammenfassung zu locker. Wie wäre "eine Entscheidung treffen"? Das passt eher zum Stil. Gut, und statt "wir kritisieren das Verfahren" schreiben wir "Kritik am Verfahren üben". Perfekt, das liest sich gleich viel formeller.',
    translation: 'Timo, "we decide that today" sounds too casual in the summary. How about "to make a decision"? That fits the style better. Good, and instead of "we criticize the procedure" we write "to voice criticism of the procedure". Perfect, that reads much more formally right away.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'wir' },
      { w: 'entscheiden' },
      { w: 'das' },
      { w: 'heute' },
      { w: '"', plain: true },
      { w: 'klingt' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Zusammenfassung' },
      { w: 'zu' },
      { w: 'locker' },
      { w: '.', plain: true },
      { w: 'Wie' },
      { w: 'wäre' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'eine' },
      { w: 'Entscheidung' },
      { w: 'treffen' },
      { w: '"?', plain: true },
      { w: 'Das' },
      { w: 'passt' },
      { w: 'eher' },
      { w: 'zum' },
      { w: 'Stil' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'statt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'wir' },
      { w: 'kritisieren' },
      { w: 'das' },
      { w: 'Verfahren' },
      { w: '"', plain: true },
      { w: 'schreiben' },
      { w: 'wir' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Kritik' },
      { w: 'am' },
      { w: 'Verfahren' },
      { w: 'üben' },
      { w: '".', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'liest' },
      { w: 'sich' },
      { w: 'gleich' },
      { w: 'viel' },
      { w: 'formeller' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche formelle Wendung ersetzt "wir entscheiden das"?', qEn: 'What formal phrase replaces "wir entscheiden das"?', options: ['eine Entscheidung treffen', 'das entscheiden', 'entscheiden wir', 'Entscheidung machen'], optionsEn: ['make a decision', 'decide that', 'we decide', 'make a decision'], answer: 0,
        explain: '"Eine Entscheidung treffen" — a Nomen-Verb-Verbindung.' },
      { q: 'Was ersetzt "wir kritisieren das Verfahren"?', qEn: 'What replaces "wir kritisieren das Verfahren"?', options: ['Kritik machen', 'Kritik am Verfahren üben', 'das Verfahren kritisiert', 'Verfahren kritisch'], optionsEn: ['make criticism', 'criticise the procedure', 'criticised the procedure', 'procedure critical'], answer: 1,
        explain: '"Kritik am Verfahren üben."' }
    ]
  },
  speaking: [
    { task: "Timo findet „wir entscheiden das heute“ zu locker. Formuliere es um.", taskEn: "Timo finds 'we'll decide that today' too casual. Reformulate it.", de: "Wir treffen heute eine Entscheidung.", en: "We will make a decision today." },
    { task: "Deine Betreuerin fragt, was dein Kapitel methodisch leistet.", taskEn: "Your supervisor asks what your chapter achieves methodologically.", de: "Wir führen eine Analyse durch und stellen eine Hypothese auf.", en: "We carry out an analysis and put forward a hypothesis." },
    { task: "Trag im Gremium vor, was du beantragen willst.", taskEn: "Present to the committee what you want to apply for.", de: "Ich stelle einen Antrag und übernehme die Verantwortung für die Umsetzung.", en: "I'm submitting an application and taking responsibility for implementation." },
    { task: "Ein Gutachter kritisiert scharf. Gib es förmlich weiter.", taskEn: "A reviewer criticises sharply. Report it formally.", de: "Der Gutachter hat Kritik geübt und eine Empfehlung ausgesprochen.", en: "The reviewer voiced criticism and issued a recommendation." },
    { task: "Ein Gutachter fragt, was dein Beitrag am Ende leistet.", taskEn: "A reviewer asks what your contribution ultimately achieves.", de: "Wir ziehen eine Schlussfolgerung und erbringen den Nachweis für den Zusammenhang.", en: "We draw a conclusion and provide the evidence for the correlation." }
  ],
  writing: {
    prompt: 'TASK 1 — Precision upgrade (150 words): Replace simple verbs with authentic noun-verb constructions. Explain every stylistic improvement.\n\nTASK 2 — Transform (150 words): Transform an informal article into an academic text using appropriate nominal constructions.\n\nTASK 3 — Essay (500 words): Write a C2 academic essay demonstrating sophisticated use of noun-verb constructions across multiple registers.',
    starters: ['Wir führen eine Analyse durch...', 'Statt "entscheiden" nutze ich...', 'Die Behörde erteilt...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Beherrschung der Nomen-Verb-Verbindungen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which nominal construction precisely replaces the generic "analysieren" in academic writing?', options: ['eine Analyse durchführen', 'Druck ausüben', 'einen Antrag stellen'], answer: 0, explain: '"eine Analyse durchführen" is the register-appropriate academic construction over the simple verb.' },
    gap: { sentence: ['Die Behörde ', ' die Genehmigung.'], gaps: [ { answer: 'erteilt', accepts: ['erteilt'] } ], explain: '"eine Genehmigung erteilen" is the conventional administrative/legal noun-verb construction.' },
    match: { q: 'Match each simple verb to its formal nominal construction.', pairs: [ { noun: 'analysieren', art: 'eine Analyse durchführen' }, { noun: 'empfehlen', art: 'eine Empfehlung aussprechen' }, { noun: 'begründen', art: 'eine Begründung liefern' }, { noun: 'beantragen', art: 'einen Antrag stellen' } ] },
    builder: { target: 'Build: "We carry out an analysis." (academic register)', bank: ['Wir', 'führen', 'eine', 'Analyse', 'durch', '.'], answer: ['Wir', 'führen', 'eine', 'Analyse', 'durch', '.'], roles: { 'führen': 'r-nomen-verb-verbindung', 'eine': 'r-nomen-verb-verbindung', 'Analyse': 'r-nomen-verb-verbindung', 'durch': 'r-nomen-verb-verbindung' } },
    errorCorrection: { title: 'Error correction', wrong: 'Wir machen eine Entscheidung in der offiziellen Sitzung.', right: 'Wir treffen eine Entscheidung in der offiziellen Sitzung.', explain: 'The conventional support verb for "eine Entscheidung" is "treffen", not "machen" — collocations are fixed, not freely substitutable.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for noun-verb constructions?', options: ['Every simple verb has a formal twin, chosen when precision and formality matter', 'Nominal constructions should always replace simple verbs', 'Simple verbs and nominal constructions mean completely different things'], answer: 0, explain: 'Native speakers deliberately choose between the "twins" based on register, not randomly.' },
    { q: 'Why do academic writers prefer "eine Analyse durchführen" over "analysieren"?', options: ['It signals formality and precision appropriate to academic register', 'Because "analysieren" is grammatically incorrect', '"Durchführen" is shorter'], answer: 0, explain: 'Register-appropriate nominal style is a hallmark of native academic writing.' },
    { q: 'What is the nuance difference between "eine Entscheidung treffen" and "eine Entscheidung herbeiführen"?', options: ['"herbeiführen" emphasizes a deliberate process of bringing the decision about', 'They are always fully interchangeable with no nuance', '"herbeiführen" is used only in casual speech'], answer: 0, explain: 'Near-synonymous nominal constructions carry subtle process/effort nuances that native speakers select deliberately.' },
    { q: 'Why is "eine Entscheidung machen" a common learner mistake?', options: ['The conventional support verb for "eine Entscheidung" is "treffen", not "machen"', '"machen" is always correct with any noun', 'German has no fixed collocations'], answer: 0, explain: 'Noun-verb collocations are largely fixed; substituting the wrong support verb sounds foreign.' },
    { q: 'What is a common C2 learner mistake with nominal constructions?', options: ['Overusing simple verbs in registers that call for formality', 'Using too many nominal constructions in casual conversation', 'Avoiding all noun-verb collocations'], answer: 0, explain: 'Learners often default to simple verbs even in academic/legal/scientific contexts where a nominal construction is more native.' }
  ],
  takeaways: [
    { c: 'r-formeller-zwilling', html: 'Every simple verb has a formal twin — the noun-verb construction chosen by professors, researchers, journalists and officials when precision matters.' },
    { c: 'r-nomen-verb-verbindung', html: 'Register determines construction choice: academic (eine Hypothese aufstellen), scientific (eine Messung durchführen), legal/administrative (eine Genehmigung erteilen), and journalism (Kritik üben, eine Debatte auslösen) each favor different constructions.' },
    { c: 'r-einfaches-verb', html: 'Simple verbs remain natural and correct in conversation — the mistake is defaulting to them in formal, academic, or legal registers where the nominal "twin" is expected.' }
  ],
  revisionTips: [
    'Take five simple verbs from this chapter and write their formal noun-verb "twins", noting the register each belongs to.',
    'Rewrite one informal paragraph as an academic paragraph by replacing every simple verb with its nominal construction.',
    'Read one academic abstract and one government notice, and list every noun-verb construction you find, noting its register.'
  ]
};
window.CHAPTER = CHAPTER;
