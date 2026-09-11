/* KLARWEG CHAPTER DATA — C2 · Chapter 29
   GOETHE C2 FINALPRÜFUNG — the final integrated assessment of the entire
   Klarweg C2 curriculum (Chapters 1-28). NO NEW GRAMMAR, NO NEW VOCABULARY.
   Integrates every grammar system (tenses, prefix verbs, valency, Konjunktiv
   I/II, modal verbs, discourse markers, relative clauses, passive/
   alternatives, the full adjective system, word formation of adjectives/
   nouns/verbs, apposition, Nominalstil, collocations, formal written
   prepositions) across academic/scientific/legal/administrative/
   journalistic/literary registers. Follows the Chapter 24 (Goethe Mini 4)
   template, extended to close the entire course. Dialogue: Adelinde and Timo
   only. */
const CHAPTER = {
  id: 'c2-29-goethe-c2-final',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 29,
  title: 'Goethe C2 Finalprüfung',
  titleEn: 'Goethe C2 final exam',
  description: 'Grammar gave you the equipment. Vocabulary showed you the route. Style taught you how to move efficiently. Register helped you choose the right path. This exam is not about learning something new — it is about proving you can use everything you have learned, confidently and naturally, in any situation.',
  xp: 2000, time: 220, difficulty: 'Final Exam',
  nextChapter: null,
  heroAnimationPath: null,
  story: {
    eyebrow: 'Goethe C2 Finalprüfung · Complete mastery assessment',
    headline: 'You climbed the <em>whole mountain</em> — this is the summit.',
    intro: 'In their last revision before the official Goethe C2 exam, Adelinde argues the data prove their thesis correct, and Timo confirms the connection between every variable — not learning anything new, just proving they can use it all, confidently, anywhere.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'A complete Goethe C2 mock assessment across grammar, word formation, register, and style from Chapters 1–28'],
    scene: 'Letzte Vorbereitung vor der Goethe-C2-Prüfung',
    femaleSpeakers: ['Adelinde'],
    dialogue: [
      { speaker: 'Adelinde', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Argumentation', role: 'r-subject', en: 'argumentation', hi: 'तर्क', pron: 'ar-gu-men-ta-TSYON', type: 'Noun · fem. (recycled C2)' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'स्पष्ट करता है', pron: 'MAKHT', type: 'Verb · machen' },
        { w: 'deutlich', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'DOYT-likh', type: 'Adjective', why: 'die Argumentation macht deutlich, dass ... = the argumentation makes clear that ..., fixed academic conclusion phrase (this chapter).', ex: 'Die Argumentation macht deutlich, dass unsere These stimmt.', exEn: 'The argumentation makes clear that our thesis is correct.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'These', role: 'r-subject', en: 'thesis', hi: 'थीसिस', pron: 'TAY-zuh', type: 'Noun · fem. (recycled C2)' },
        { w: 'stimmt', role: 'r-verb', en: 'is correct', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The argumentation makes clear that our thesis is correct.', hi: 'Tark spasht karta hai ki hamaari thesis sahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'डेटा', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'belegen', role: 'r-verb', en: 'prove', hi: 'साबित करते हैं', pron: 'be-LAY-gen', type: 'Verb · belegen', why: 'die Daten belegen, dass ... = the data prove that ..., fixed academic evidence phrase (this chapter).', ex: 'Die Daten belegen, dass der Effekt real ist.', exEn: 'The data prove that the effect is real.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Effekt', role: 'r-subject', en: 'effect', hi: 'प्रभाव', pron: 'e-FEKT', type: 'Noun · masc. (recycled C2)' },
        { w: 'real', role: 'r-akkusativ', en: 'real', hi: 'वास्तविक', pron: 'ray-AHL', type: 'Adjective (recycled C2, Satzende)' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The data prove that the effect is real.', hi: 'Data saabit karta hai ki prabhaav vaastavik hai.' },
      { speaker: 'Adelinde', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'besteht', role: 'r-verb', en: 'exists', hi: 'है', pron: 'be-SHTAYT', type: 'Verb · bestehen (recycled C1)' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'Zusammenhang', role: 'r-subject', en: 'connection', hi: 'संबंध', pron: 'tsu-ZA-men-hank', type: 'Noun · masc.', why: 'es besteht ein Zusammenhang zwischen ... = there is a connection between ..., fixed academic phrase (this chapter).', ex: 'Es besteht ein Zusammenhang zwischen den beiden Variablen.', exEn: 'There is a connection between the two variables.' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition + dative' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'beiden', role: 'r-dativ', en: 'both', hi: 'दोनों', pron: 'BY-den', type: 'Determiner · dative' },
        { w: 'Variablen', role: 'r-dativ', en: 'variables (dat.)', hi: 'चरों के बीच', pron: 'va-RYAH-blen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'There is a connection between the two variables.', hi: 'Dono chuaron ke beech ek sambandh hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Unter', role: 'r-preposition', en: 'under', hi: 'इन', pron: 'UN-ter', type: 'Preposition + dative' },
        { w: 'diesen', role: 'r-dativ', en: 'these (pl. dat.)', hi: 'इन', pron: 'DEE-zen', type: 'Determiner · dative' },
        { w: 'Voraussetzungen', role: 'r-dativ', en: 'conditions (dat.)', hi: 'शर्तों के तहत', pron: 'FOR-ows-zet-sun-gen', type: 'Noun · plural dat.', why: 'unter diesen Voraussetzungen = under these conditions, fixed academic conditional phrase (this chapter).', ex: 'Unter diesen Voraussetzungen ist unsere Studie abgeschlossen.', exEn: 'Under these conditions our study is concluded.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Studie', role: 'r-subject', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'abgeschlossen', role: 'r-akkusativ', en: 'concluded', hi: 'पूर्ण', pron: 'AP-ge-shlo-sen', type: 'Partizip II (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Under these conditions our study is concluded.', hi: 'In sharton ke tahat hamaara adhyayan poorn hai.' },
      { speaker: 'Adelinde', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'langen', role: 'r-akkusativ', en: 'long', hi: 'लंबा', pron: 'LAN-gen', type: 'Adjective' },
        { w: 'Weg', role: 'r-akkusativ', en: 'path', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc.' },
        { w: 'zurückgelegt', role: 'r-verb', en: 'covered', hi: 'तय किया', pron: 'tsu-RÜK-ge-laykt', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'We have covered a long path.', hi: 'Humne ek lamba raasta tay kiya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अब', pron: 'yetst', type: 'Adverb' },
        { w: 'stehen', role: 'r-verb', en: 'stand', hi: 'खड़े हैं', pron: 'SHTAY-en', type: 'Verb · stehen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'endlich', role: 'r-akkusativ', en: 'finally', hi: 'आख़िरकार', pron: 'ENT-likh', type: 'Adverb' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'owf', type: 'Preposition' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Gipfel', role: 'r-dativ', en: 'summit (dat.)', hi: 'शिखर पर', pron: 'GI-pfel', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Yes. And now we finally stand on the summit.', hi: 'Haan. Aur ab hum aakhirkaar shikhar par khade hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'This is the Goethe C2 Finalprüfung: proof that you can <span class="de r-berg-metapher">climb the whole mountain</span> — every grammar system, every register, every stylistic choice — working together naturally.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is the GOETHE C2 FINALPRÜFUNG — the final integrated revision assessment covering ALL of Chapters 1-28 (Zeitformen, Präfixverben, Verbergänzungen/Valenz, Nomen-Verb-Verbindungen, Konjunktiv I & II, Modalverben, Diskursmarker, Relativsätze, Passiv, Passiversatzformen, Partizipien als Adjektive, Nominalisierte Adjektive/Partizipien, Adjektivdeklination, Stilistische Nuancen, Adjektive mit Ergänzungen, Wortbildung der Adjektive/Nomen/Verben, Appositionen, Nominalstil, Kollokationen & Idiomatik, Präpositionen der Schriftsprache). NO new grammar or vocabulary should be introduced or expected beyond this scope. The learner\'s essay should demonstrate complete integration: register control (academic/scientific/legal/administrative/journalistic/literary), stylistic maturity, the full adjective/noun/verb formation systems, apposition, Nominalstil, authentic collocations, formal written prepositions, Konjunktiv I/II, passive/alternatives, and discourse markers — all working together as one coherent native-level voice. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag genuine grammar/register/lexical errors across ANY of the 28 integrated topics — inconsistent register, wrong Konjunktiv choice, incorrect passive/alternative choice, poor word formation, mismatched collocation, wrong preposition case. Do NOT introduce new grammar concepts in your feedback — stay within the 28-chapter revision scope. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (naming which chapter/topic the issue relates to). If none: <li>No errors — well done.</li> 3) <p><b>Summit check:</b> one sentence on overall Goethe C2 readiness based on this text.</p> Keep total feedback under 160 words. Mix in Hindi/Hinglish naturally.',
  quizRecommendation: { high: 'Outstanding — you have reached the summit. You are ready for the Goethe C2 exam.', mid: 'Good overall integration. Revisit whichever Master Tables felt shakiest, then you are ready.', low: 'Worth revisiting the weakest chapters before the real exam — this final checkpoint exists so gaps surface now, not on exam day.' },
  parserSentence: [ { w: 'Wir', role: 'plain' }, { w: 'haben', role: 'r-berg-metapher' }, { w: 'den', role: 'plain' }, { w: 'Gipfel', role: 'r-berg-metapher' }, { w: 'erreicht', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: the Goethe C2 Finalprüfung tests whether you can climb the whole mountain of Chapters 1–28 together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Adelinde and Timo do a final revision session before the official Goethe C2 exam.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review representative revision vocabulary from Chapters 1–28 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Complete integrated review: every grammar system, word formation, apposition, Nominalstil, collocations, and formal prepositions.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic journal research article for integrated grammar, register, and style.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify academic language, register, and advanced grammar in a university conference lecture.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Complete a full Goethe C2 speaking simulation across presentation, discussion, and literary interpretation.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite for native-level style, edit a professional document, and write a 700-word Goethe C2 essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete a comprehensive integrated review across every grammar, word-formation, and register topic from Chapters 1–28.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 2000 XP and complete the Klarweg C2 course.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your final C2 readiness dashboard and Klarweg C2 Completion Badge.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download final chapter resources for exam-day revision.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Representative revision vocabulary from Chapters 1–28 with translations, register labels, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '24 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Complete integrated grammar and register review, plus the full 700-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '32 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The Final Mastery Pyramid, Goethe Success Model, and a consolidated reference across all 28 chapters.', pdfUrl: '/pdfs/grammar.pdf', size: '30 pages', kind: 'Grammar' },
    { icon: '📊', title: 'Final C2 Dashboard PDF', desc: 'Your complete Klarweg C2 mastery dashboard across Chapters 1–29, with strongest/weakest skill analysis and a personalized study plan.', pdfUrl: '/pdfs/progress-dashboard.pdf', size: '10 pages', kind: 'Analytics' }
  ],
  outcomes: [
    { de: 'die Argumentation macht deutlich, dass...', text: 'Integrate discourse framing, Nominalstil, and academic register in one fluent sentence' },
    { de: 'die Daten belegen, dass... / dies legt nahe, dass...', text: 'Use authentic academic hedging and evidence language naturally' },
    { de: 'Wir haben den Gipfel erreicht.', text: 'Understand the chapter\'s core "mountain climb" mastery metaphor' },
    { de: 'Grammatik, Vokabular, Stil, Register.', text: 'Confirm complete integration of every C2 system from Chapters 1–28' }
  ],
  vocab: [
    { de: 'die Argumentation macht deutlich, dass', pos: 'academic discourse phrase', level: 'C2', register: 'academic', en: 'the argumentation makes clear that', hi: 'तर्क स्पष्ट करता है कि', synonyms: null, antonyms: null, ex: 'Die Argumentation macht deutlich, dass beide Faktoren zusammenwirken.', exEn: 'The argumentation makes clear that both factors work together.', exHi: 'Argumentation clear karta hai ki dono factors saath kaam karte hain.', ex2: 'Die Argumentation macht deutlich, dass die bisherige Annahme zu einfach war.', ex2En: 'The argumentation makes clear that the previous assumption was too simple.', ex2Hi: 'Argumentation clear karta hai ki purani assumption bahut simple thi.' },
    { de: 'die Daten belegen, dass', pos: 'academic discourse phrase', level: 'C2', register: 'academic/scientific', en: 'the data show/prove that', hi: 'आंकड़े साबित करते हैं कि', synonyms: null, antonyms: null, ex: 'Die Daten belegen, dass die Methode zuverlässig funktioniert.', exEn: 'The data show that the method works reliably.', exHi: 'Data show karta hai ki method reliably kaam karta hai.', ex2: 'Die Daten belegen, dass ein signifikanter Zusammenhang besteht.', ex2En: 'The data show that a significant correlation exists.', ex2Hi: 'Data show karta hai ki ek significant correlation exist karta hai.' },
    { de: 'dies legt nahe, dass', pos: 'academic discourse phrase', level: 'C2', register: 'academic/scientific', en: 'this suggests that', hi: 'यह सुझाव देता है कि', synonyms: null, antonyms: null, ex: 'Dies legt nahe, dass weitere Untersuchungen notwendig sind.', exEn: 'This suggests that further investigations are necessary.', exHi: 'Yeh suggest karta hai ki further investigations zaroori hain.', ex2: 'Dies legt nahe, dass die Hypothese teilweise bestätigt werden kann.', ex2En: 'This suggests that the hypothesis can be partly confirmed.', ex2Hi: 'Yeh suggest karta hai ki hypothesis partly confirm ki ja sakti hai.' },
    { de: 'ein Vergleich zeigt, dass', pos: 'academic discourse phrase', level: 'C2', register: 'academic', en: 'a comparison shows that', hi: 'तुलना दिखाती है कि', synonyms: null, antonyms: null, ex: 'Ein Vergleich zeigt, dass die beiden Modelle deutlich abweichen.', exEn: 'A comparison shows that the two models differ significantly.', exHi: 'Comparison show karta hai ki dono models kaafi alag hain.', ex2: 'Ein Vergleich zeigt, dass die neue Methode effizienter ist.', ex2En: 'A comparison shows that the new method is more efficient.', ex2Hi: 'Comparison show karta hai ki naya method zyaada efficient hai.' },
    { de: 'es besteht ein Zusammenhang zwischen', pos: 'academic discourse phrase', level: 'C2', register: 'academic/scientific', en: 'there is a connection between', hi: 'के बीच एक संबंध है', synonyms: null, antonyms: null, ex: 'Es besteht ein Zusammenhang zwischen Bildung und Einkommen.', exEn: 'There is a connection between education and income.', exHi: 'Education aur income ke beech ek connection hai.', ex2: 'Es besteht ein enger Zusammenhang zwischen Klimawandel und Migration.', ex2En: 'There is a close connection between climate change and migration.', ex2Hi: 'Climate change aur migration ke beech ek close connection hai.' },
    { de: 'es stellt sich die Frage, ob', pos: 'academic discourse phrase', level: 'C2', register: 'academic', en: 'the question arises whether', hi: 'सवाल उठता है कि क्या', synonyms: null, antonyms: null, ex: 'Es stellt sich die Frage, ob diese Ergebnisse verallgemeinerbar sind.', exEn: 'The question arises whether these results are generalizable.', exHi: 'Sawaal uthta hai ki kya yeh results generalizable hain.', ex2: 'Es stellt sich die Frage, ob die Politik langfristig wirksam ist.', ex2En: 'The question arises whether the policy is effective in the long term.', ex2Hi: 'Sawaal uthta hai ki kya policy long-term mein effective hai.' },
    { de: 'unter diesen Voraussetzungen', pos: 'academic discourse phrase', level: 'C2', register: 'academic/administrative', en: 'under these conditions', hi: 'इन शर्तों के अंतर्गत', synonyms: null, antonyms: null, ex: 'Unter diesen Voraussetzungen kann die Reform gelingen.', exEn: 'Under these conditions, the reform can succeed.', exHi: 'In conditions ke antargat, reform succeed kar sakti hai.', ex2: 'Unter diesen Voraussetzungen ist eine Genehmigung möglich.', ex2En: 'Under these conditions, an approval is possible.', ex2Hi: 'In conditions ke antargat, approval possible hai.' },
    { de: 'die Apposition', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'apposition', hi: 'समानाधिकरण', synonyms: 'der Beisatz', antonyms: null, ex: 'Die Apposition komprimiert einen Relativsatz zu einer eleganten Nominalphrase.', exEn: 'The apposition compresses a relative clause into an elegant noun phrase.', exHi: 'Apposition ek relative clause ko ek elegant noun phrase mein compress karta hai.', ex2: 'Frau Berger, die Abteilungsleiterin, ist ein klassisches Beispiel für Apposition.', ex2En: 'Ms. Berger, the department head, is a classic example of apposition.', ex2Hi: 'Frau Berger, department head, apposition ka classic example hai.' },
    { de: 'der Nominalstil', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'nominal style', hi: 'नाममात्र शैली', synonyms: null, antonyms: 'der Verbalstil', ex: 'Der Nominalstil verdichtet einen Verbalsatz zu einer objektiven Nominalphrase.', exEn: 'Nominal style compresses a verbal clause into an objective noun phrase.', exHi: 'Nominal style ek verbal clause ko ek objective noun phrase mein compress karta hai.', ex2: 'Wissenschaftliche Texte bevorzugen häufig den Nominalstil.', ex2En: 'Scientific texts frequently prefer nominal style.', ex2Hi: 'Scientific texts aksar nominal style prefer karte hain.' },
    { de: 'die Kollokation', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'collocation', hi: 'शब्द-युग्म', synonyms: null, antonyms: null, ex: 'Eine Kollokation wie "eine Entscheidung treffen" klingt natürlicher als eine wörtliche Übersetzung.', exEn: 'A collocation like "eine Entscheidung treffen" sounds more natural than a literal translation.', exHi: '"eine Entscheidung treffen" jaisa collocation literal translation se zyaada natural lagta hai.', ex2: 'Native Sprecher erkennen eine falsche Kollokation sofort.', ex2En: 'Native speakers recognize an incorrect collocation immediately.', ex2Hi: 'Native speakers galat collocation turant pehchaan lete hain.' },
    { de: 'die formelle Präposition', pos: 'noun phrase', level: 'C2', register: 'academic (grammar term)', en: 'formal preposition', hi: 'औपचारिक पूर्वसर्ग', synonyms: null, antonyms: null, ex: 'Formelle Präpositionen wie "aufgrund" oder "hinsichtlich" signalisieren geschriebenes, formelles Deutsch.', exEn: 'Formal prepositions like "aufgrund" or "hinsichtlich" signal formal, written German.', exHi: '"aufgrund" ya "hinsichtlich" jaise formal prepositions formal, written German signal karte hain.', ex2: 'Die richtige Rektion einer formellen Präposition ist entscheidend.', ex2En: 'The correct case government of a formal preposition is crucial.', ex2Hi: 'Ek formal preposition ki sahi rektion crucial hai.' },
    { de: 'die Wortbildung', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'word formation', hi: 'शब्द-निर्माण', synonyms: null, antonyms: null, ex: 'Die Wortbildung erlaubt es, unbekannte Wörter über Präfix und Suffix zu erschließen.', exEn: 'Word formation allows one to decode unfamiliar words via prefix and suffix.', exHi: 'Word formation prefix aur suffix ke through unfamiliar words decode karne deta hai.', ex2: 'Produktive Wortbildung ist der Schlüssel zu nativer Wortschatzerweiterung.', ex2En: 'Productive word formation is the key to native-level vocabulary expansion.', ex2Hi: 'Productive word formation native-level vocabulary expansion ki chaabi hai.' },
    { de: 'der Konjunktiv', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'subjunctive mood', hi: 'भाव्यार्थक क्रिया रूप', synonyms: null, antonyms: 'der Indikativ', ex: 'Der Konjunktiv I markiert neutrale, berichtete Rede; der Konjunktiv II markiert Hypothesen.', exEn: 'Konjunktiv I marks neutral, reported speech; Konjunktiv II marks hypotheses.', exHi: 'Konjunktiv I neutral, reported speech mark karta hai; Konjunktiv II hypotheses mark karta hai.', ex2: 'Die Wahl des richtigen Konjunktivs zeigt echte C2-Kompetenz.', ex2En: 'Choosing the right subjunctive shows genuine C2 competence.', ex2Hi: 'Sahi subjunctive choose karna genuine C2 competence dikhata hai.' },
    { de: 'die Valenz', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'verb valency', hi: 'क्रिया-संयोजकता', synonyms: null, antonyms: null, ex: 'Die Valenz eines Verbs bestimmt seine notwendigen Ergänzungen.', exEn: 'A verb\'s valency determines its necessary complements.', exHi: 'Verb ki valency uske zaroori complements decide karti hai.', ex2: 'Eine Präfigierung kann die Valenz eines Verbs grundlegend verändern.', ex2En: 'Prefixation can fundamentally change a verb\'s valency.', ex2Hi: 'Prefixation ek verb ki valency ko fundamentally badal sakta hai.' },
    { de: 'das Register', pos: 'noun', level: 'C2', register: 'academic (grammar term)', en: 'register (linguistic)', hi: 'रजिस्टर', synonyms: 'der Sprachstil', antonyms: null, ex: 'Das Register bestimmt jede stilistische Entscheidung in einem Text.', exEn: 'Register determines every stylistic decision in a text.', exHi: 'Register ek text mein har stylistic decision decide karta hai.', ex2: 'Native Sprecher wechseln das Register mühelos je nach Situation.', ex2En: 'Native speakers switch register effortlessly depending on the situation.', ex2Hi: 'Native speakers situation ke anusaar register ko bina mehnat ke badal dete hain.' }
  ],
  grammar: [
    { title: 'Finale Meisterschafts-Pyramide (Final Mastery Pyramid)', body: [ 'Grammar → Vocabulary → Sentence → Paragraph → Register → Style → Native-Level Communication → Goethe C2 Mastery. Every chapter from 1–28 is one layer of this pyramid; the Finalprüfung tests whether all 28 layers support each other simultaneously.' ], hinglish: 'Yeh chapter naya grammar nahi sikhata — yeh dekhta hai ki sab kuch <b>ek saath</b> chal raha hai ya nahi. Ek hi sentence mein sahi tense, sahi collocation, sahi case aur sahi register — chaaron. Isliye ise padhne ka tareeka thoda alag hai: neeche wali galtiyan dekho, aur jahan bhi sochna pade, wahan us chapter par wapas jao jo explanation mein diya hai.' },
    { title: 'Verb- und Satz-Systeme (Chapters 1–14)', body: [ 'Review: stylistic tense choice, prefix-verb families, verb valency, Konjunktiv I/II, modal verb nuance, discourse markers, relative clauses, and passive/passive-alternative choice.' ], hinglish: 'Yahan sabse zyada galtiyan chaar jagah hoti hain. <b>Konjunktiv I</b> mein — reported mode shuru ho gaya to har verb usi mein rehna chahiye, warna baat tumhari ban jaati hai. <b>Prefix verbs</b> mein — separable hai ya nahi, isse Partizip II mein <i>ge-</i> tay hota hai (<b>übernommen</b> par <b>eingereicht</b>). <b>Discourse markers</b> mein — adverb ho to verb doosri jagah par, conjunction ho to end mein. Aur <b>relative clauses</b> mein — case us clause ke apne verb se aata hai.' },
    { title: 'Das Adjektiv-System (Chapters 15–19)', body: [ 'Review: participial adjectives, nominalized adjectives/participles, complex adjective declension, register-specific adjective choice, and adjectives with complements.' ], hinglish: 'Is poore system ki ek hi jad hai — <b>ending</b>. Participial adjective ab adjective hai, isliye uspar normal ending lagti hai (<span class="de">die gemessenen Werte</span>). Nominalized form noun ki tarah capital hoti hai par adjective ki tarah decline hoti rehti hai (<span class="de">ein Betroffener</span>, <span class="de">dem Betroffenen</span>). Aur adjectives ke saath jo preposition aata hai woh fix hota hai, uske case ke saath.' },
    { title: 'Das Wortbildungs-System (Chapters 21–23)', body: [ 'Review: productive adjective formation (-bar, -los, -haft, -reich), productive noun formation (derivation + compounding, head-final principle), and productive verb formation (prefixation, -isieren/-ieren suffixation, denominal/deadjectival derivation).' ], hinglish: 'Word formation ka faayda yeh hai ki tum naye shabd khud bana sakte ho. Do cheezein isse aasaan karti hain: suffix se <b>gender</b> tay hota hai (<b>-ung, -heit, -keit, -ion</b> sab <b>die</b>), aur compound word ka gender uske <b>aakhri</b> hisse se aata hai. Aur <b>-bar</b> sirf un verbs se banta hai jinke saath object aata hai.' },
    { title: 'Die Kompressions-Werkzeuge (Chapters 25–28)', body: [ 'Review: apposition (compressing a relative clause into a comma-set noun phrase), Nominalstil (compressing a verbal clause into an objective noun phrase), authentic collocations (natural verb-noun partnerships instead of literal translation), and formal written prepositions (aufgrund, hinsichtlich, gemäß, mittels, zugunsten — the "business suits" of German).' ], hinglish: 'Yeh chaar tools text ko chhota aur formal banate hain, par chaaron mein ek hi cheez galat hoti hai — <b>case</b>. Apposition apne reference noun ka case leti hai. Nominalstil mein preposition case tay karta hai (<b>aufgrund</b> Genitiv, <b>durch</b> Akkusativ). Collocations apne saath preposition aur case laati hain (<b>Kritik üben an</b> + Dativ). Aur formal prepositions default <b>Genitiv</b> lete hain, sirf chaar Dativ.' },
    { title: 'Meister-Tabelle: Finale Integration', body: [ 'Each system mapped to its integration role in complete C2 mastery.' ], table: { head: ['System', 'Chapters', 'Integration Role'], rows: [ ['Verb- & Satz-Systeme', '1-14', 'Precision, perspective, and cohesion'], ['Adjektiv-System', '15-19', 'Compression, abstraction, register precision'], ['Wortbildungs-System', '21-23', 'Productive vocabulary creation'], ['Kompressions-Werkzeuge', '25-28', 'Elegant, native-level information packaging'] ] }, hinglish: 'Chaar systems ka table — aur dhyaan do ki Ch20 aur Ch24 isme nahi hain, kyunki woh checkpoints hain, naya grammar nahi.' },
    { title: 'Typische Fehler auf C2-Niveau (Common C2-Level Mistakes)', body: [ 'Each of these breaks two rules from two different chapters at once \u2014 which is exactly how errors appear in real exam writing. The chapter reference in each explanation tells you where to go back to.' ], mistakes: [
      { wrong: 'Aufgrund dem Ergebnis hat die Kommission eine Entscheidung gemacht.', right: 'Aufgrund des Ergebnisses hat die Kommission eine Entscheidung getroffen.', why: 'Two systems at once: <b>aufgrund</b> takes the Genitiv (Ch.28), and <b>Entscheidung</b> pairs with <b>treffen</b> \u2192 <b>getroffen</b> (Ch.27).' },
      { wrong: 'Ich sprach mit Frau Berger, die Abteilungsleiterin, \u00fcber die im Labor gemessene Werte.', right: 'Ich sprach mit Frau Berger, der Abteilungsleiterin, \u00fcber die im Labor gemessenen Werte.', why: 'Ch.25 and Ch.15: an apposition copies its noun\u2019s case (Dativ after <i>mit</i>), and a participial adjective takes a normal adjective ending \u2014 <b>gemessenen</b>.' },
      { wrong: 'Laut dem Bericht sei die Lage stabil, und die Kosten sind gesunken.', right: 'Laut dem Bericht sei die Lage stabil, und die Kosten seien gesunken.', why: 'Ch.7: once a passage is in reported mode, every verb stays in Konjunktiv I \u2014 slipping back into the Indikativ silently makes the second claim your own.' },
      { wrong: 'Das Problem lässt sich gelöst werden, und die Frist ist einhalten.', right: 'Das Problem lässt sich lösen, und die Frist ist einzuhalten.', why: 'Ch.13: <b>sich lassen</b> takes a plain infinitive, and <b>sein + zu</b> needs the <b>zu</b> inside the separable verb.' }
    ], hinglish: 'Inme se har galti do alag chapters ke rules ek saath todti hai — aur asli exam writing mein galtiyan aise hi aati hain, ek-ek karke nahi. Har explanation mein chapter ka number diya hai, isliye jahan sochna pade wahan seedha wahan wapas jao.' },
    { title: 'Goethe-Prüfungstipps & Finale Entscheidungshilfe', body: [ 'Before writing or speaking: identify your target register. Then check every layer of the pyramid — grammar, vocabulary, sentence structure, register, style — for consistency, from the first word to the last.' ], note: 'Memory trick: imagine the entire C2 course as climbing a mountain. Every chapter was one stage of the climb. Grammar gave you the equipment. Vocabulary showed you the route. Style taught you how to move efficiently. Register helped you choose the right path. Now you have reached the summit. The Goethe C2 Finalprüfung is not about learning something new — it is about proving that you can use everything you have learned confidently, naturally, and appropriately in any situation.', hinglish: 'Likhne se pehle ek baat tay karo — register kya hai. Aur likhne ke baad chaar cheezein check karo: har noun ke saath sahi verb hai (<i>machen</i> aur <i>nehmen</i> par shak karo), har preposition ke baad sahi case hai, har adjective aur participle par sahi ending hai, aur poore text mein <b>du</b> ya <b>Sie</b> ek hi raha. Yeh chaar check lagbhag saari C2 galtiyan pakad leti hain.' }
  ],
  reading: {
    title: 'Fachzeitschrift: Neue Untersuchung zur Stadtökologie',
    titleEn: 'Reading A — Journal: new investigation into urban ecology',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'vorliegende', role: 'plain', en: 'present (Partizip I als Adjektiv)', hi: 'प्रस्तुत', type: 'Partizip I als Adjektiv' },
      { w: 'Untersuchung,', role: 'plain', en: 'investigation, (deverbal Nominalstil noun, Satzende)', hi: 'जाँच (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'ein', role: 'r-berg-metapher', en: 'an (masc. nom., start of an apposition)', hi: '', type: 'Article' },
      { w: 'Beitrag', role: 'r-berg-metapher', en: 'contribution (apposition, Satzende)', hi: 'योगदान (Satzende, Apposition)', type: 'Noun · masc. (Apposition, Satzende)', why: 'This single sentence combines a participial adjective, a deverbal Nominalstil noun, an apposition, a formal preposition, and a collocation — true C2-level density.' },
      { w: 'zur', role: 'plain', en: 'to the (fem. dat.)', hi: '', type: 'Präposition + Article · Dat.' },
      { w: 'Stadtökologie,', role: 'plain', en: 'urban ecology, (Satzende)', hi: 'शहरी पारिस्थितिकी (Satzende)', type: 'Noun · fem. · Dat. (Satzende)' },
      { w: 'schließt', role: 'r-berg-metapher', en: 'closes (collocation "eine Lücke schließen")', hi: 'भरता है', type: 'Verb (Präsens)' },
      { w: 'hinsichtlich', role: 'r-berg-metapher', en: 'with regard to (formal written preposition)', hi: 'के संबंध में', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'यह', type: 'Article' },
      { w: 'Methodik', role: 'plain', en: 'methodology (Satzende)', hi: 'पद्धति (Satzende)', type: 'Noun · fem. · Gen. (Satzende)' },
      { w: 'eine', role: 'plain', en: 'a (fem. akk.)', hi: 'एक', type: 'Article' },
      { w: 'wichtige', role: 'plain', en: 'important (Satzende)', hi: 'महत्वपूर्ण (Satzende)', type: 'Adjective · Akk. (Satzende)' },
      { w: 'Lücke', role: 'plain', en: 'gap (Satzende)', hi: 'कमी (Satzende)', type: 'Noun · fem. · Akk. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The present investigation, a contribution to urban ecology research, closes an important gap with regard to methodology.',
    comprehension: [
      { q: 'Welche Konstruktionen kombiniert dieser Satz gleichzeitig?', options: ['Partizip als Adjektiv, Nominalstil, Apposition, formale Präposition, Kollokation', 'Nur Passiv', 'Nur Konjunktiv II'], answer: 0 },
      { q: 'Was ist "ein Beitrag zur Stadtökologie" in diesem Satz?', options: ['Eine Apposition zu "Die vorliegende Untersuchung"', 'Ein eigenständiger Relativsatz', 'Ein Konjunktiv-I-Satz'], answer: 0 },
      { q: 'Welche Kollokation verwendet der Satz?', options: ['eine Lücke schließen', 'eine Entscheidung machen', 'Kritik machen'], answer: 0 }
    ]
  },

  
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_029_L001', speaker: 'Adelinde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Daten belegen unsere These eindeutig, findest du nicht auch?', en: 'Timo, the data clearly prove our thesis, don\'t you think too?' },
      { id: 'C2_029_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ja, und der Zusammenhang zwischen den Variablen lässt sich lückenlos nachweisen.', en: 'Yes, and the connection between the variables can be demonstrated without gaps.' },
      { id: 'C2_029_L003', speaker: 'Adelinde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann müssen wir morgen nichts Neues mehr lernen, nur zeigen, dass wir es beherrschen.', en: 'Then tomorrow we don\'t need to learn anything new, just show that we\'ve mastered it.' },
      { id: 'C2_029_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, ruhig und selbstsicher, so wie wir es tausendfach geübt haben.', en: 'Exactly, calm and confident, just as we\'ve practiced it a thousand times.' }
    ],
    transcript: 'Timo, die Daten belegen unsere These eindeutig, findest du nicht auch? Ja, und der Zusammenhang zwischen den Variablen lässt sich lückenlos nachweisen. Dann müssen wir morgen nichts Neues mehr lernen, nur zeigen, dass wir es beherrschen. Genau, ruhig und selbstsicher, so wie wir es tausendfach geübt haben.',
    translation: 'Timo, the data clearly prove our thesis, don\'t you think too? Yes, and the connection between the variables can be demonstrated without gaps. Then tomorrow we don\'t need to learn anything new, just show that we\'ve mastered it. Exactly, calm and confident, just as we\'ve practiced it a thousand times.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Daten' },
      { w: 'belegen' },
      { w: 'unsere' },
      { w: 'These' },
      { w: 'eindeutig' },
      { w: ',', plain: true },
      { w: 'findest' },
      { w: 'du' },
      { w: 'nicht' },
      { w: 'auch' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'der' },
      { w: 'Zusammenhang' },
      { w: 'zwischen' },
      { w: 'den' },
      { w: 'Variablen' },
      { w: 'lässt' },
      { w: 'sich' },
      { w: 'lückenlos' },
      { w: 'nachweisen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'müssen' },
      { w: 'wir' },
      { w: 'morgen' },
      { w: 'nichts' },
      { w: 'Neues' },
      { w: 'mehr' },
      { w: 'lernen' },
      { w: ',', plain: true },
      { w: 'nur' },
      { w: 'zeigen' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'beherrschen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'ruhig' },
      { w: 'und' },
      { w: 'selbstsicher' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'wie' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'tausendfach' },
      { w: 'geübt' },
      { w: 'haben' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was belegen die Daten laut Adelinde eindeutig?', qEn: 'What do the data clearly prove, according to Adelinde?', options: ['nichts', 'ihre These', 'das Gegenteil', 'einen Fehler'], optionsEn: ['nothing', 'her thesis', 'the opposite', 'a mistake'], answer: 1,
        explain: '"Die Daten belegen unsere These eindeutig."' },
      { q: 'Was ist laut Timo das Ziel für morgen?', qEn: 'What is the goal for tomorrow, according to Timo?', options: ['neue Dinge lernen', 'zeigen, dass sie es beherrschen', 'das Thema wechseln', 'nervös sein'], optionsEn: ['learn new things', 'show that they have mastered it', 'change the subject', 'be nervous'], answer: 1,
        explain: '"Nur zeigen, dass wir es beherrschen."' }
    ]
  },
  speaking: [
    { task: "Timo sagt, die Daten belegen die These. Bestätige und ergänze.", taskEn: "Timo says the data supports the thesis. Confirm and add.", de: "Ja, und der Zusammenhang zwischen den Variablen lässt sich lückenlos nachweisen.", en: "Yes, and the correlation between the variables can be demonstrated without gaps." },
    { task: "Prüfung, Teil 1: Präsentiere dein Forschungsthema.", taskEn: "Exam, Part 1: present your research topic.", de: "Die Daten belegen, dass der Zugang ungleich verteilt ist; dies legt Reformen nahe.", en: "The data shows that access is unevenly distributed; this suggests reforms." },
    { task: "Prüfung, Teil 2: Diskutiere und stelle eine offene Frage.", taskEn: "Exam, Part 2: discuss and raise an open question.", de: "Ein Vergleich zeigt, dass die Regionen abweichen; es stellt sich die Frage, ob das strukturell ist.", en: "A comparison shows the regions diverge; the question arises whether that's structural." },
    { task: "Prüfung, Teil 3: Deute einen kurzen literarischen Text.", taskEn: "Exam, Part 3: interpret a short literary text.", de: "Der Text arbeitet mit Auslassung und überlässt dem Leser das Urteil.", en: "The text works with omission and leaves the judgement to the reader." },
    { task: "Prüfung, Teil 4: Verteidige spontan deine Position.", taskEn: "Exam, Part 4: defend your position spontaneously.", de: "Unter diesen Voraussetzungen halte ich die Kritik für nicht belegt.", en: "Under these conditions I consider the criticism unsubstantiated." }
  ],
  writing: {
    prompt: 'TASK 1 — Style rewrite (150 words): Rewrite an academic text using native-level stylistic improvements — apposition, Nominalstil, and precise word formation.\n\nTASK 2 — Professional editing (150 words): Edit a professional document by improving grammar, register, and lexical precision.\n\nTASK 3 — Essay (700 words): Write a Goethe C2 argumentative essay integrating grammar and vocabulary from the entire course naturally.',
    starters: ['Die vorliegende Untersuchung zeigt...', 'Aufgrund der Ergebnisse lässt sich schlussfolgern...', 'Es stellt sich die Frage, ob...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine vollständige Kontrolle über Grammatik, Wortbildung, Register und Stil aus dem gesamten Kurs...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which construction integrates apposition, Nominalstil, and a formal preposition all in one phrase?', options: ['"die vorliegende Untersuchung, ein Beitrag zur Forschung, schließt hinsichtlich der Methodik eine Lücke"', '"die Untersuchung ist gut"', '"wir untersuchen etwas"'], answer: 0, explain: 'This phrase layers a participial adjective, a Nominalstil noun, an apposition, and a formal preposition — true integrated C2 mastery.' },
    gap: { sentence: ['Aufgrund der Daten ', ' sich ein klarer Zusammenhang feststellen.'], gaps: [ { answer: 'lässt', accepts: ['lässt'] } ], explain: '"sich lässt" is a passive alternative (Chapter 13) governed correctly here after the formal preposition "aufgrund" (Chapter 28).' },
    match: { q: 'Match each construction to the chapter/topic it integrates.', pairs: [ { noun: 'Frau Berger, die Abteilungsleiterin,', art: 'Chapter 25 — Apposition' }, { noun: 'aufgrund der Ergebnisse', art: 'Chapter 28 — Formal preposition' }, { noun: 'eine Entscheidung treffen', art: 'Chapter 27 — Collocation' }, { noun: 'die Untersuchung ergab...', art: 'Chapter 26 — Nominalstil' } ] },
    builder: { target: 'Build: "We have reached the summit." (integrating the final metaphor)', bank: ['Wir', 'haben', 'den', 'Gipfel', 'erreicht', '.'], answer: ['Wir', 'haben', 'den', 'Gipfel', 'erreicht', '.'], roles: { 'haben': 'r-berg-metapher', 'Gipfel': 'r-berg-metapher' } },
    errorCorrection: { title: 'Error correction (final integration)', wrong: 'Wegen dem Ergebnis machen wir eine Entscheidung und die Firma macht Kritik.', right: 'Aufgrund des Ergebnisses treffen wir eine Entscheidung, und die Firma übt Kritik.', explain: 'Fixes three integrated issues: correct formal preposition and case (aufgrund des, not wegen dem), and two correct collocations (eine Entscheidung treffen, Kritik üben — not "machen" for either).' }
  },
  quiz: [
    { q: 'What is the final memory trick for the entire C2 course?', options: ['Climbing a mountain: grammar is the equipment, vocabulary the route, style the technique, register the path — you have reached the summit', 'Learning grammar alone is sufficient for C2', 'Each chapter should be forgotten once the next begins'], answer: 0, explain: 'C2 mastery means every system learned across the course works together as one coherent, native-level voice.' },
    { q: 'Which mood signals neutral, reported speech (Chapter 7)?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indikativ only'], answer: 0, explain: 'Konjunktiv I marks a claim as reported rather than confirmed by the speaker/writer.' },
    { q: 'What determines the gender of a German compound noun (Chapter 22)?', options: ['The LAST element of the compound', 'The FIRST element of the compound', 'Compounds have no fixed gender'], answer: 0, explain: 'The head-final principle: the last element always decides gender, plural, and core meaning.' },
    { q: 'Which verb correctly collocates with "eine Entscheidung" (Chapter 27)?', options: ['treffen', 'machen', 'nehmen'], answer: 0, explain: '"eine Entscheidung treffen" is the fixed collocation; "machen" is a common English-calque error.' },
    { q: 'This chapter introduces:', options: ['No new grammar and no new vocabulary — it is the final integrated assessment', 'Several new grammar topics', 'An entirely new vocabulary set'], answer: 0, explain: 'The Goethe C2 Finalprüfung is a pure integration and assessment checkpoint across the entire course, Chapters 1–28.' }
  ],
  takeaways: [
    { c: 'r-berg-metapher', html: 'The entire C2 course is a mountain climb — grammar the equipment, vocabulary the route, style the technique, register the path. You have reached the summit.' },
    { c: 'r-berg-metapher', html: 'True C2 mastery is not knowing each system in isolation, but using grammar, word formation, apposition, Nominalstil, collocations, and formal register together, naturally.' },
    { c: 'r-berg-metapher', html: 'Register consistency — matching tense, word formation, passive choice, and prepositions to one target register — is the clearest marker of native-level writing.' },
    { c: 'r-berg-metapher', html: 'The Goethe C2 Finalprüfung tests confident, natural, appropriate use of everything learned — not new material.' }
  ],
  revisionTips: [
    'Write one paragraph in four registers (academic, legal, journalistic, literary), tracking every grammar and lexical choice that changes.',
    'Take one dense academic sentence and identify every integrated system at work: word formation, apposition, Nominalstil, collocation, and formal prepositions.',
    'Review your weakest Master Table from Chapters 1–28 one final time before the real Goethe C2 exam.'
  ]
};
window.CHAPTER = CHAPTER;
