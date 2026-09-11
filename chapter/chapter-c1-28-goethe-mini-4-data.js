/* KLARWEG CHAPTER DATA — C1 · Chapter 28 — Goethe Mini 4
   Revision checkpoint covering Chapters 24-27 ONLY:
   Nominalisierung, Substantivierung (Adjektive/Partizipien),
   Passiv & Passiversatzformen, Funktionsverbgefüge.
   NO new grammar/vocabulary. Dialogue: Merit and Timo ONLY. */
const CHAPTER = {
  id: 'c1-28-goethe-mini-4',
  phase: 'C1 · Nominalstil & Präzision',
  number: 28,
  title: 'Goethe Mini 4',
  titleEn: 'Checkpoint: Chapters 24–27',
  description: 'Native-like academic German balances nominal style, passive alternatives, and Funktionsverbgefüge while staying fluent and readable. This checkpoint tests whether that balance has become automatic.',
  xp: 750, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 29, title: 'Verben mit Präfixen sicher unterscheiden', titleEn: 'Confidently distinguishing prefix verb families' , href: 'chapter-c1-29-verben-mit-praefixen-sicher-unterscheiden.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'The final polish: <em>nominal style, passive, and Funktionsverbgefüge</em> working together.',
    intro: 'Finalizing a research paper for publication, Merit must review the documents and postpone an appointment, while Timo stays confident it\'ll go in on time — recycling nominalization, passive alternatives, and Funktionsverbgefüge together.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Chapters 24–27 combined into one fluent, authentic academic conversation'],
    scene: 'Letzte Überarbeitung eines Forschungsartikels vor der Veröffentlichung',
    femaleSpeakers: ['Merit'],
    dialogue: [
      { speaker: 'Merit', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Unterlagen', role: 'r-akkusativ', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun · plural' },
        { w: 'überprüfen', role: 'r-verb', en: 'review', hi: 'जांचना', pron: 'ü-ber-PRÜ-fen', type: 'Verb · infinitive (Satzende)', why: 'überprüfen = to review/verify (this chapter).', ex: 'die Unterlagen überprüfen' },
        { w: ',', plain: true },
        { w: 'bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor (recycled B1)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Einreichung', role: 'r-akkusativ', en: 'submission', hi: 'प्रस्तुति', pron: 'INE-ry-khung', type: 'Noun · fem.', why: 'die Einreichung (this chapter).', ex: 'die Einreichung vornehmen' },
        { w: 'vornehme', role: 'r-verb', en: 'make', hi: 'करती हूँ', pron: 'FOR-nay-muh', type: 'Verb · vornehmen (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I must review the documents before I make the submission.', hi: 'Prastuti karne se pehle mujhe dastaavez jaanchne honge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'ये', pron: 'dee', type: 'Article · fem.' },
        { w: 'Unterlagen', role: 'r-subject', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun · plural' },
        { w: 'vollständig', role: 'r-akkusativ', en: 'complete', hi: 'पूर्ण', pron: 'FOL-shtan-dikh', type: 'Adjective', why: 'vollständig = complete (this chapter).', ex: 'vollständig sein' },
        { w: '?', plain: true }
      ], en: 'Are the documents complete?', hi: 'Kya dastaavez poorn hain?' },
      { speaker: 'Merit', tokens: [
        { w: 'Fast', role: 'r-akkusativ', en: 'almost', hi: 'लगभग', pron: 'fast', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Termin', role: 'r-akkusativ', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.' },
        { w: 'leider', role: 'r-akkusativ', en: 'unfortunately', hi: 'दुर्भाग्य से', pron: 'LY-der', type: 'Adverb' },
        { w: 'verschieben', role: 'r-verb', en: 'postpone', hi: 'टालना', pron: 'fer-SHEE-ben', type: 'Verb · infinitive (Satzende)', why: 'verschieben = to postpone (recycled A2/C1).', ex: 'den Termin verschieben' },
        { w: '.', plain: true }
      ], en: 'Almost. I must unfortunately postpone the appointment.', hi: 'Lagbhag. Mujhe durbhagya se mulaqat taalni hogi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारा', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'endgültige', role: 'r-subject', en: 'final', hi: 'अंतिम', pron: 'ENT-gül-ti-guh', type: 'Adjective', why: 'endgültig = final (this chapter).', ex: 'die endgültige Entscheidung' },
        { w: 'Entscheidung', role: 'r-subject', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Is that your final decision?', hi: 'Kya yeh tumhaara antim faisla hai?' },
      { speaker: 'Merit', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective', why: 'zuversichtlich (recycled C1).', ex: 'zuversichtlich sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Einreichung', role: 'r-subject', en: 'submission', hi: 'प्रस्तुति', pron: 'INE-ry-khung', type: 'Noun · fem.' },
        { w: 'rechtzeitig', role: 'r-akkusativ', en: 'on time', hi: 'समय पर', pron: 'REKHT-tsy-tikh', type: 'Adjective' },
        { w: 'erfolgt', role: 'r-verb', en: 'happens', hi: 'होती है', pron: 'er-FOLKT', type: 'Verb · erfolgen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I am confident that the submission happens on time.', hi: 'Haan. Mujhe vishwaas hai ki prastuti samay par ho jaayegi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'drücke', role: 'r-verb', en: 'press', hi: 'दबाता हूँ', pron: 'DRÜ-kuh', type: 'Verb · drücken (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Daumen', role: 'r-akkusativ', en: 'thumbs', hi: 'अंगूठे', pron: 'DOW-men', type: 'Noun · plural', why: 'die Daumen drücken (recycled B1).', ex: 'die Daumen drücken' },
        { w: '.', plain: true }
      ], en: 'Then I keep my fingers crossed for you.', hi: 'Toh main tumhare liye ungliyaan crossed rakhta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'This is not a new lesson — it is a mirror. See how <span class="de r-nominalisierung">Nominalisierung</span>, <span class="de r-substantivierung">Substantivierung</span>, <span class="de r-passiversatz">Passiv</span>, and <span class="de r-fvg">Funktionsverbgefüge</span> work together in one fluent conversation.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 4, a revision checkpoint covering ONLY Chapters 24–27: Nominalisierung im formellen Stil (verb/adjective/infinitive nominalization, verbal vs nominal style), Partizipien & Adjektive als Nomen (substantivized adjectives like der Deutsche/die Verantwortlichen, substantivized Partizip I like die Studierenden/die Forschenden for active reference, substantivized Partizip II like die Verletzten/die Befragten for passive reference, abstract das+adjective), Passiv & Passiversatzformen (Vorgangspassiv vs Zustandspassiv, and alternatives: sich lassen, sein+zu+Infinitiv, man, adjective constructions), and Funktionsverbgefüge im akademischen Deutsch (light verb constructions: eine Entscheidung treffen, eine Analyse durchführen, eine Rolle spielen, in Betracht ziehen, Verantwortung übernehmen, einen Beitrag leisten). Introduce and expect NOTHING beyond these four chapters — no new grammar, no C2 structures. The most important things to catch, spanning all four chapters: over-nominalization or under-nominalization for the register; missing capitalization on substantivized forms or wrong declension endings; confusing active Partizip I reference with passive Partizip II reference; unnecessary passive where a Passiversatzform would sound more natural, or vice versa; wrong support-verb collocations in Funktionsverbgefüge (e.g. "eine Entscheidung machen" instead of "treffen"). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Check nominalization density and naturalness; check substantivized-form capitalization and declension; check active vs passive participle reference; check passive/Passiversatzform choice for naturalness; check Funktionsverbgefüge collocations are fixed correctly. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Readiness check:</b> one sentence on whether the learner\'s formal academic German felt natural and balanced across all four structures.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you combine nominal style, substantivized forms, passive, and Funktionsverbgefüge fluently. Ready for the next phase.', mid: 'Good progress. Revisit whichever of Chapters 24–27 felt least automatic, then retake this checkpoint.', low: 'Worth a full pass back through Chapters 24–27 — the goal is for these structures to feel automatic, not memorized.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Verantwortlichen', role: 'r-substantivierung' }, { w: 'haben', role: 'plain' }, { w: 'entschieden', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See how nominalization, substantivization, passive, and Funktionsverbgefüge work together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Merit and Timo finalize a research paper, naturally recycling all four chapters at once.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key expressions from Chapters 24–27 — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Revise nominalization, substantivized forms, passive/Passiversatzformen, and Funktionsverbgefüge together.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific article and an administrative/newspaper text, identifying all four structures.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify nominalization, passive alternatives, and Funktionsverbgefüge in a lecture and conference discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present, discuss, and collaboratively edit using all four Phase structures naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite a B2 text into C1 style and write a 350-word academic article combining all structures.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Mixed drills across nominalization, substantivization, passive, and Funktionsverbgefüge.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 750 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 24–27 with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Mixed revision drills across nominalization, substantivization, passive, and Funktionsverbgefüge, plus a full academic writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'Combined Master Tables and Decision Flowcharts for Chapters 24–27.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir sollten die Analyse noch einmal überprüfen.', text: 'Recall verb-to-noun nominalization (Ch. 24)' },
    { de: 'Die Verantwortlichen haben die Frist verschoben.', text: 'Recall substantivized adjectives for groups (Ch. 25)' },
    { de: 'Das Problem lässt sich gut lösen.', text: 'Recall "sich lassen" as a natural Passiversatzform (Ch. 26)' },
    { de: 'Wir sollten einen Beitrag zur aktuellen Debatte leisten.', text: 'Recall fixed Funktionsverbgefüge collocations (Ch. 27)' },
    { de: 'Die Ergebnisse sind vollständig dokumentiert, und die Forschenden sind bereit.', text: 'Combine Zustandspassiv and substantivized Partizip I in one sentence' }
  ],
  vocab: [
    { de: 'überprüfen', pos: 'verb', level: 'C1', register: 'both', en: 'to check, verify', hi: 'जाँचना', ex: 'Wir sollten die Analyse noch einmal überprüfen.', exEn: 'We should check the analysis once more.', exHi: 'Hamein vishleshan ek baar aur jaanchna chahiye.', ex2: 'Die Ergebnisse wurden sorgfältig überprüft.', ex2En: 'The results were carefully checked.', ex2Hi: 'Parinaamon ki saavdhaani se jaanch ki gayi.', conj: { praesens: 'überprüft', praeteritum: 'überprüfte', perfekt: 'hat überprüft' } },
    { de: 'verschieben', pos: 'verb', level: 'C1', register: 'both', en: 'to postpone', hi: 'स्थगित करना', ex: 'Die Verantwortlichen haben die Frist verschoben.', exEn: 'Those responsible have postponed the deadline.', exHi: 'Zimmedaar logon ne deadline badha diya hai.', ex2: 'Die Konferenz wurde auf nächsten Monat verschoben.', ex2En: 'The conference was postponed to next month.', ex2Hi: 'Conference agle mahine tak badhaayi gayi.', conj: { praesens: 'verschiebt', praeteritum: 'verschob', perfekt: 'hat verschoben' } },
    { de: 'die Einreichung', art: 'die', gender: 'f', plural: 'Einreichungen', pos: 'noun (nominalization)', level: 'C1', register: 'written', en: 'submission', hi: 'जमा करना (संज्ञा)', ex: 'Wir können die Entscheidung zur Einreichung treffen.', exEn: 'We can make the decision about the submission.', exHi: 'Hum submission ke baare mein faisla le sakte hain.', ex2: 'Die Einreichung erfolgt bis Freitag.', ex2En: 'The submission takes place by Friday.', ex2Hi: 'Submission shukrawaar tak hogi.' },
    { de: 'vollständig', pos: 'adjective/adverb', level: 'C1', register: 'both', en: 'complete(ly)', hi: 'पूरी तरह', ex: 'Die Ergebnisse sind vollständig dokumentiert.', exEn: 'The results are completely documented.', exHi: 'Parinaam poori tarah documented hain.', ex2: 'Der Bericht ist noch nicht vollständig.', ex2En: 'The report is not yet complete.', ex2Hi: 'Report abhi poora nahi hai.' },
    { de: 'endgültig', pos: 'adjective/adverb', level: 'C1', register: 'written', en: 'final(ly), definitive(ly)', hi: 'अंतिम रूप से', ex: 'Wir können die Entscheidung endgültig treffen.', exEn: 'We can finally make the definitive decision.', exHi: 'Hum aakhir mein faisla le sakte hain.', ex2: 'Die endgültige Fassung wird morgen veröffentlicht.', ex2En: 'The final version will be published tomorrow.', ex2Hi: 'Antim sanskaran kal prakashit hoga.' }
  ],
  grammar: [
    { title: 'Revision: Nominalisierung (Chapter 24)', body: [ 'Verb → Noun: analysieren → die Analyse. Adjective → Noun: notwendig → die Notwendigkeit. Infinitive → Noun: das Abwägen. Formal German shifts actions into nouns for objectivity — but over-nominalization harms readability.' ], hinglish: 'Gender suffix se tay hota hai \u2014 <b>-ung</b>, <b>-heit</b>, <b>-keit</b>, <b>-ion</b> sab <b>die</b>, aur nominalized infinitive hamesha <b>das</b> (<span class="de">das Abw\u00e4gen</span>). Verb ka object ab <b>Genitiv</b> mein aata hai aur karne wala <b>durch</b> ke saath. Aur ek limit yaad rakho: teen se zyada Genitiv attributes ek saath aa jaayein to ek noun ko wapas verb bana do.' },
    { title: 'Revision: Substantivierung (Chapter 25)', body: [ 'Substantivized adjective: die Verantwortlichen. Substantivized Partizip I (active): die Studierenden, die Forschenden. Substantivized Partizip II (passive): die Verletzten, die Befragten. Abstract: das Wesentliche. Always capitalize, always take an article.' ], hinglish: 'Capital letter aur article to chahiye hi, par asli baat yeh hai ki <b>ending badalti rehti hai</b> \u2014 yeh shabd kaam noun ka karte hain par form adjective wali rakhte hain. <span class="de">der Deutsche</span>, par <span class="de">ein Deutsch<b>er</b></span>, aur Dativ mein <span class="de">dem Deutsch<b>en</b></span>. <b>Partizip I</b> matlab jo kaam kar raha hai (Studierende), <b>Partizip II</b> matlab jiske saath kuch hua (Befragte).' },
    { title: 'Revision: Passiv & Passiversatzformen (Chapter 26)', body: [ 'Vorgangspassiv (process): wurde ausgewertet. Zustandspassiv (state): ist dokumentiert. Passiversatzformen: sich lassen (lässt sich lösen), sein+zu+Infinitiv (ist einzuhalten), man (man erkennt). The choice is stylistic — ask what sounds most natural, not just what is grammatically possible.' ], hinglish: 'Farak yaad rakho: <b>wird/wurde</b> se kaam ho raha hai, aur <b>ist</b> se kaam ho chuka hai aur haalat batayi jaa rahi hai. Passiversatzformen ke apne matlab hain \u2014 <b>sich lassen</b> sambhavna (aur uske baad plain infinitive), <b>sein + zu</b> zimmedaari (aur <b>zu</b> separable verb ke andar), aur <b>man</b> jab koi bhi ho sakta hai. Aur Perfekt mein hamesha <b>worden</b>, kabhi <i>geworden</i> nahi.' },
    { title: 'Revision: Funktionsverbgefüge (Chapter 27)', body: [ 'entscheiden → eine Entscheidung treffen. analysieren → eine Analyse durchführen. Fixed collocations: eine Rolle spielen, in Betracht ziehen, Verantwortung übernehmen, einen Beitrag leisten. The noun carries meaning, the verb carries grammar — support verbs are fixed, not interchangeable.' ], hinglish: 'Noun matlab rakhta hai aur verb sirf grammar. Support verbs group mein yaad karo \u2014 <b>treffen</b> (Entscheidung, Vereinbarung), <b>durchf\u00fchren</b> (Analyse, Untersuchung), <b>stellen</b> (Antrag, Frage), <b>ergreifen</b> (Ma\u00dfnahmen). Aur preposition bhi unit ka hissa hai: <b>in</b> Betracht ziehen, <b>zur</b> Verf\u00fcgung stehen. Sabse aam galti har jagah <i>machen</i> lagana hai.' },
    { title: 'Wie alles zusammenwirkt (How it all works together)', body: [ 'Read this sentence and identify each structure before checking the labels: <span class="de">Die Verantwortlichen haben eine Entscheidung getroffen, nachdem die Ergebnisse vollst\u00e4ndig dokumentiert waren und die Analyse abgeschlossen war.</span>', '<b>Die Verantwortlichen</b> \u2014 substantivized adjective (Ch.25). <b>eine Entscheidung getroffen</b> \u2014 Funktionsverbgef\u00fcge (Ch.27). <b>dokumentiert waren</b> \u2014 Zustandspassiv, a state rather than a process (Ch.26). <b>die Analyse</b> \u2014 nominalization of <i>analysieren</i> (Ch.24).' ], hinglish: 'Ek hi sentence mein chaaron structures saath aa jaate hain \u2014 aur yahi asli C1 hai. Pehle khud pehchaanne ki koshish karo, phir labels dekho: <b>Die Verantwortlichen</b> substantivized adjective hai, <b>eine Entscheidung getroffen</b> Funktionsverbgef\u00fcge, <b>dokumentiert waren</b> Zustandspassiv (haalat, kaam nahi), aur <b>die Analyse</b> nominalization. Dhyaan do ki <i>getroffen</i> hi woh verb hai jo <i>Entscheidung</i> ke saath fix hai.' },
    { title: 'Typische Fehler (mixed review of common learner mistakes)', body: [ 'One error from each chapter, in the form it actually takes in writing \u2014 if any of these still needs thinking about, that is the chapter to revisit.' ], mistakes: [
      { wrong: 'Die Durchf\u00fchrung der \u00dcberpr\u00fcfung der Einhaltung der Vorschriften erfolgte.', right: 'Es wurde \u00fcberpr\u00fcft, ob die Vorschriften eingehalten werden.', why: 'Four stacked Genitiv nominalizations are grammatical but unreadable \u2014 Chapter 24\u2019s limit. Turn one noun back into a verb.' },
      { wrong: 'Die verantwortlichen haben den Betroffene geholfen.', right: 'Die Verantwortlichen haben den Betroffenen geholfen.', why: 'Two Chapter 25 rules at once: capitalise the substantivized form, and keep declining it \u2014 <i>helfen</i> takes the Dativ, so plural <b>den Betroffenen</b>.' },
      { wrong: 'Die Frist ist einhalten und das Problem l\u00e4sst sich gel\u00f6st werden.', right: 'Die Frist ist einzuhalten und das Problem l\u00e4sst sich l\u00f6sen.', why: 'Chapter 26 forms: <b>sein + zu</b> needs the <b>zu</b> inside the separable verb, and <b>sich lassen</b> takes a plain infinitive, never a passive.' },
      { wrong: 'Die Kommission hat eine Entscheidung gemacht und Ma\u00dfnahmen genommen.', right: 'Die Kommission hat eine Entscheidung getroffen und Ma\u00dfnahmen ergriffen.', why: 'Both support verbs are fixed: <b>Entscheidung treffen</b> and <b>Ma\u00dfnahmen ergreifen</b>. <i>machen</i> and <i>nehmen</i> do not work here.' }
    ], hinglish: 'Har chapter se ek galti \u2014 aur wahi roop jisme woh asli writing mein aati hai. Agar inme se kisi par sochna pad raha hai, to wahi chapter dobara dekhna chahiye.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Before you write a sentence, ask: Does this need a nominalization? Does this refer to a person/group that could be substantivized? Would passive, Zustandspassiv, or a Passiversatzform sound most natural? Is there a fixed Funktionsverbgefüge for this idea?' ], note: 'Memory trick: this checkpoint is a mirror, not a new lesson. If any of the four questions above feels unfamiliar, that is exactly the chapter to revisit.', hinglish: 'Sentence likhne se pehle chaar sawaal poochho. Kya yahan nominalization theek rahegi? Kya kisi group ki baat ho rahi hai jise substantivize kiya jaa sakta hai? Kaam ho raha hai (wird) ya ho chuka hai (ist)? Aur kya is idea ke liye koi fixed Funktionsverbgef\u00fcge hai? Yeh checkpoint naya kuch nahi sikhata \u2014 sirf dikhata hai ki chaaron cheezein apne aap aa rahi hain ya nahi.' }
  ],
  reading: {
    title: 'Bildungsforschung: Zweisprachigkeit im Fokus',
    titleEn: 'Reading A — Education research: bilingualism in focus',
    tokens: [
      { w: 'Die', role: 'r-substantivierung', en: 'the (plural nom., substantivized Partizip I opener)', hi: '', type: 'Article' },
      { w: 'Forschenden', role: 'r-substantivierung', en: 'researchers (substantivized Partizip I — active reference)', hi: 'शोधकर्ता', type: 'Noun · plural (Satzende)' },
      { w: 'haben', role: 'plain', en: 'have', hi: 'ने', type: 'Verb · haben (Präsens)' },
      { w: 'eine', role: 'r-fvg', en: 'a (fem. akk., part of Funktionsverbgefüge)', hi: '', type: 'Article · Akk.' },
      { w: 'Untersuchung', role: 'r-fvg', en: 'investigation (part of Funktionsverbgefüge)', hi: 'जाँच', type: 'Noun · fem.' },
      { w: 'zur', role: 'plain', en: 'into the', hi: 'के बारे में', type: 'Contraction · zu der' },
      { w: 'Zweisprachigkeit', role: 'plain', en: 'bilingualism (Satzende)', hi: 'द्विभाषिता (Satzende)', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'of', hi: 'के', type: 'Preposition · Dat.' },
      { w: 'Grundschulkindern', role: 'plain', en: 'primary-school children (Satzende)', hi: 'प्राथमिक विद्यालय के बच्चों (Satzende)', type: 'Noun · plural' },
      { w: 'durchgeführt', role: 'r-fvg', en: 'carried out (Satzende, Funktionsverbgefüge)', hi: 'सम्पन्न की (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'sind', role: 'r-zustandspassiv', en: 'are (Zustandspassiv)', hi: 'हैं', type: 'Verb · sein (Präsens)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'vollständig', role: 'plain', en: 'completely', hi: 'पूरी तरह', type: 'Adverb' },
      { w: 'dokumentiert', role: 'r-zustandspassiv', en: 'documented (Satzende, Zustandspassiv)', hi: 'दस्तावेज़ीकृत (Satzende)', type: 'Partizip II (Satzende)' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'दिखाते हैं', type: 'Verb (Präsens)' },
      { w: 'klare', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective' },
      { w: 'Vorteile', role: 'plain', en: 'advantages (Satzende)', hi: 'फ़ायदे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'beim', role: 'plain', en: 'in (contraction)', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Textverständnis', role: 'plain', en: 'text comprehension (Satzende)', hi: 'पाठ समझ (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true }
    ],
    translation: 'The researchers have carried out an investigation into the bilingualism of primary-school children. The results are by now completely documented and show clear advantages in text comprehension.',
    comprehension: [
      { q: 'Woher stammt "die Forschenden"?', options: ['Substantiviertes Partizip I', 'Substantiviertes Partizip II', 'Substantiviertes Adjektiv'], answer: 0 },
      { q: 'Was für eine Struktur ist "eine Untersuchung durchgeführt"?', options: ['Funktionsverbgefüge', 'Nominalisierung', 'Zustandspassiv'], answer: 0 },
      { q: 'Was für eine Struktur ist "sind...dokumentiert"?', options: ['Zustandspassiv', 'Vorgangspassiv', 'Funktionsverbgefüge'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Verwaltungstext', titleEn: 'Reading B — Administrative text',
    tokens: [
      { w: 'Die', role: 'r-substantivierung', en: 'the (plural nom., substantivized adjective opener)', hi: '(substantivized adjective)', type: 'Article' },
      { w: 'Verantwortlichen', role: 'r-substantivierung', en: 'those responsible (substantivized adjective, Ch. 25)', hi: 'zimmedaar log (Ch. 25)', type: 'Noun · plural (Satzende)' },
      { w: 'haben', role: 'plain', en: 'have', hi: 'ne', type: 'Verb · haben (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Entscheidung', role: 'r-fvg', en: 'decision (part of Funktionsverbgefüge, Ch. 27)', hi: 'faisla (Funktionsverbgefüge)', type: 'Noun · fem.' },
      { w: 'getroffen', role: 'r-fvg', en: 'made (Satzende, "eine Entscheidung treffen")', hi: 'liya (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Frist', role: 'plain', en: 'deadline (Satzende)', hi: 'samayseema (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'ist', role: 'r-passiversatz', en: 'is (part of "sein + zu + Infinitiv", Ch. 26)', hi: '(sein + zu + Infinitiv, Ch. 26)', type: 'Verb · sein (Präsens)' },
      { w: 'unbedingt', role: 'plain', en: 'absolutely', hi: 'zaroor', type: 'Adverb' },
      { w: 'einzuhalten', role: 'r-passiversatz', en: 'to be kept (Satzende, "sein + zu + Infinitiv")', hi: 'maani jaani chahiye (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Those responsible have made the decision. The deadline is absolutely to be kept.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_028_L001', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich muss die Unterlagen noch einmal durchgehen, bevor wir sie veröffentlichen.', en: 'Timo, I still need to go through the documents once more before we publish them.' },
      { id: 'C1_028_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Kein Problem, dann verschiebe ich unseren Termin einfach um einen Tag.', en: 'No problem, then I\'ll just postpone our appointment by a day.' },
      { id: 'C1_028_L003', speaker: 'Merit', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Danke, ich bin zuversichtlich, dass wir es trotzdem rechtzeitig schaffen.', en: 'Thanks, I\'m confident we\'ll still make it in time.' },
      { id: 'C1_028_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das denke ich auch, der Artikel steht ja inhaltlich schon.', en: 'I think so too, the article is already solid content-wise.' }
    ],
    transcript: 'Timo, ich muss die Unterlagen noch einmal durchgehen, bevor wir sie veröffentlichen. Kein Problem, dann verschiebe ich unseren Termin einfach um einen Tag. Danke, ich bin zuversichtlich, dass wir es trotzdem rechtzeitig schaffen. Das denke ich auch, der Artikel steht ja inhaltlich schon.',
    translation: 'Timo, I still need to go through the documents once more before we publish them. No problem, then I\'ll just postpone our appointment by a day. Thanks, I\'m confident we\'ll still make it in time. I think so too, the article is already solid content-wise.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'muss' },
      { w: 'die' },
      { w: 'Unterlagen' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'durchgehen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'sie' },
      { w: 'veröffentlichen' },
      { w: '.', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'verschiebe' },
      { w: 'ich' },
      { w: 'unseren' },
      { w: 'Termin' },
      { w: 'einfach' },
      { w: 'um' },
      { w: 'einen' },
      { w: 'Tag' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'zuversichtlich' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'trotzdem' },
      { w: 'rechtzeitig' },
      { w: 'schaffen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'denke' },
      { w: 'ich' },
      { w: 'auch' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Artikel' },
      { w: 'steht' },
      { w: 'ja' },
      { w: 'inhaltlich' },
      { w: 'schon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was muss Merit vor der Veröffentlichung machen?', qEn: 'What does Merit need to do before publishing?', options: ['die Unterlagen noch einmal durchgehen', 'alles löschen', 'neu schreiben', 'nichts'], optionsEn: ['go through the documents again', 'delete everything', 'rewrite', 'nothing'], answer: 0,
        explain: '"Ich muss die Unterlagen noch einmal durchgehen, bevor wir sie veröffentlichen."' },
      { q: 'Wozu entscheidet sich Timo?', qEn: 'What does Timo decide to do?', options: ['den Termin absagen', 'den Termin um einen Tag verschieben', 'sofort veröffentlichen', 'die Konferenz verlassen'], optionsEn: ['cancel the appointment', 'move the appointment by a day', 'publish immediately', 'leave the conference'], answer: 1,
        explain: '"Dann verschiebe ich unseren Termin einfach um einen Tag."' }
    ]
  },
  speaking: [
    { task: "Du musst die Unterlagen vor der Veröffentlichung durchgehen. Sag es Timo.", taskEn: "You need to go through the documents before publication. Tell Timo.", de: "Ich muss die Unterlagen noch einmal überprüfen, bevor wir sie einreichen.", en: "I have to check the documents again before we submit them." },
    { task: "Timo verschiebt den Termin. Sag, wann die Einreichung endgültig ist.", taskEn: "Timo postpones the meeting. Say when the submission is final.", de: "Die Einreichung ist erst endgültig, wenn die Unterlagen vollständig sind.", en: "The submission is only final once the documents are complete." },
    { task: "Prüfung: Deine Partnerin fragt, warum du im Absatz das Passiv gewählt hast.", taskEn: "Exam: your partner asks why you chose the passive in the paragraph.", de: "Weil der Handelnde unwichtig ist; so bleibt der Blick auf dem Verfahren.", en: "Because the agent is unimportant; that keeps the focus on the procedure." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Transform a B2-level article into authentic C1 German by improving nominalization, Funktionsverbgefüge, passive alternatives, and formal style.\n\nTASK 2 — Academic article (350 words): Use nominal style, Funktionsverbgefüge, passive and passive alternatives, substantivized adjectives, and substantivized participles together, in authentic scientific style.',
    starters: ['Die Forschenden haben eine umfangreiche Untersuchung durchgeführt.', 'Die Verantwortlichen haben eine wichtige Entscheidung getroffen.'],
    placeholder: 'Die Studierenden haben die Analyse abgeschlossen. Die Ergebnisse lassen sich eindeutig interpretieren...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which structure combines Chapters 25 and 26 in "Die Forschenden sind bereit"?', options: ['Substantivized Partizip I as subject', 'Vorgangspassiv', 'Funktionsverbgefüge'], answer: 0, explain: '"Die Forschenden" is a substantivized Partizip I (Ch. 25) functioning as the sentence subject.' },
    gap: { sentence: ['Wir sollten einen Beitrag zur Debatte ', '.'], gaps: [ { answer: 'leisten', accepts: ['leisten'] } ], explain: '"Einen Beitrag leisten" is the fixed Funktionsverbgefüge from Chapter 27.' },
    match: { q: 'Match each example to its source chapter.', pairs: [ { noun: 'die Analyse', art: 'Chapter 24 — Nominalisierung' }, { noun: 'die Verantwortlichen', art: 'Chapter 25 — Substantivierung' }, { noun: 'ist einzuhalten', art: 'Chapter 26 — Passiversatzform' }, { noun: 'eine Entscheidung treffen', art: 'Chapter 27 — Funktionsverbgefüge' } ] },
    builder: { target: 'Build: "Those responsible have made the decision." (combining Ch. 25 substantivization + Ch. 27 Funktionsverbgefüge)', bank: ['Die', 'Verantwortlichen', 'haben', 'die', 'Entscheidung', 'getroffen', '.'], answer: ['Die', 'Verantwortlichen', 'haben', 'die', 'Entscheidung', 'getroffen', '.'], roles: { 'Verantwortlichen': 'r-substantivierung', 'Entscheidung': 'r-fvg' } },
    errorCorrection: { title: 'Error correction', wrong: 'die verantwortlichen haben eine Entscheidung gemacht.', right: 'Die Verantwortlichen haben eine Entscheidung getroffen.', explain: 'Two errors: substantivized adjectives must be capitalized (Ch. 25), and "Entscheidung" collocates only with "treffen", not "machen" (Ch. 27).' }
  },
  quiz: [
    { q: 'What connects all four chapters in this checkpoint?', options: ['They all shape formal, objective academic German through stylistic choices', 'They are all about basic grammar formation', 'They only apply to spoken German'], answer: 0, explain: 'Nominalization, substantivization, passive choice, and Funktionsverbgefüge are all stylistic tools for formal writing.' },
    { q: 'What must you always do with a substantivized adjective or participle?', options: ['Capitalize it and give it an article', 'Leave it lowercase', 'Avoid using an article'], answer: 0, explain: 'Once functioning as a noun, it follows noun capitalization and article rules (Ch. 25).' },
    { q: 'What is the C1 approach to choosing passive vs. Passiversatzform?', options: ['Ask what sounds most natural for the context', 'Always use the passive', 'Never use the passive'], answer: 0, explain: 'Chapter 26\'s core lesson: it is a stylistic decision, not a fixed rule.' },
    { q: 'In a Funktionsverbgefüge, what carries the main meaning?', options: ['The noun', 'The verb', 'Neither — meaning is random'], answer: 0, explain: 'The noun carries the meaning; the verb mainly supplies grammar (Ch. 27).' },
    { q: 'What is the risk of over-nominalizing every sentence?', options: ['The text becomes unreadably bureaucratic', 'The text becomes too casual', 'There is no risk'], answer: 0, explain: 'Chapter 24 warned that excessive nominal style harms readability even in formal writing.' }
  ],
  takeaways: [
    { c: 'r-nominalisierung', html: 'Nominalization (Ch. 24) shifts actions into nouns for objectivity — balanced with verbal style for readability.' },
    { c: 'r-substantivierung', html: 'Substantivized adjectives and participles (Ch. 25) refer to people/groups with active (Partizip I) or passive (Partizip II) reference.' },
    { c: 'r-passiversatz', html: 'Passive choice (Ch. 26) and Funktionsverbgefüge (Ch. 27) are both stylistic decisions — the goal is natural, fluent, formal German.' }
  ],
  revisionTips: [
    'Write one paragraph deliberately combining all four structures: a nominalization, a substantivized form, a passive/Passiversatzform, and a Funktionsverbgefüge.',
    'Review your weakest area from the quiz by rereading that specific chapter\'s Master Table before retaking this checkpoint.',
    'Find one authentic German academic abstract and label every instance of the four Phase structures you can find.'
  ]
};
window.CHAPTER = CHAPTER;
