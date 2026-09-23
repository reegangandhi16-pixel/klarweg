/* KLARWEG CHAPTER DATA — C1 · Chapter 32
   "Kohärenz & Textverknüpfung" — text-level coherence/cohesion:
   reference chains, lexical cohesion, paragraph development,
   discourse markers across registers. NOT individual conjunctions
   (already mastered) — focus is whole-text organization.
   Dialogue: Britta and Timo ONLY. */
const CHAPTER = {
  id: 'c1-32-kohaerenz-und-textverknuepfung',
  phase: 'C1 · Nominalstil & Präzision',
  number: 32,
  title: 'Kohärenz & Textverknüpfung',
  titleEn: 'Text coherence and cohesion',
  description: 'Imagine your text as a train. Each sentence is a carriage. Grammar makes every carriage work. Kohärenz connects all the carriages into one train — if one is disconnected, the reader notices immediately.',
  xp: 830, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 33, title: 'Goethe Mini 5', titleEn: 'Checkpoint: Chapters 29–32' , href: 'chapter-c1-33-goethe-mini-5.html' },
  prevChapter: { number: 31, title: 'Adversativangaben & Gegensätze ausdrücken', titleEn: 'Expressing contrast and opposition precisely', href: 'chapter-c1-31-adversativangaben-und-gegensaetze-ausdruecken.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Grammar makes each carriage work — <em>Kohärenz</em> connects them into one train.',
    intro: 'Editing the structure of a university thesis, Britta flags weak coherence and Timo works on the paragraph transitions and reference chains — not fixing grammar, but connecting every sentence into one continuous train of thought.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how reference, lexical cohesion, and discourse markers connect ideas across an entire text'],
    scene: 'Überarbeitung der Struktur einer Universitätsarbeit',
    femaleSpeakers: ['Britta'],
    dialogue: [
      { speaker: 'Britta', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Kohärenz', role: 'r-subject', en: 'coherence', hi: 'सुसंगति', pron: 'ko-hE-rents', type: 'Noun · fem.', why: 'die Kohärenz (this chapter).', ex: 'Die Kohärenz des Textes ist wichtig.', exEn: 'The coherence of the text is important.' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Textes', role: 'r-dativ', en: 'text (gen.)', hi: 'पाठ के', pron: 'TEKS-tes', type: 'Noun · masc. genitive' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'optimal', role: 'r-akkusativ', en: 'optimal', hi: 'आदर्श', pron: 'op-ti-MAHL', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The coherence of the text is not optimal.', hi: 'Paath ki susangati aadarsh nahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Folgenden', role: 'r-dativ', en: 'following (dat.)', hi: 'आगे में', pron: 'FOL-gen-den', type: 'Adjective · dative (feste Wendung)', why: 'im Folgenden = in the following, fixed structural marker for text organization (this chapter).', ex: 'Im Folgenden erklären wir die Methode.', exEn: 'In the following we explain the method.' },
        { w: 'erklären', role: 'r-verb', en: 'explain', hi: 'समझाते हैं', pron: 'er-KLAI-ren', type: 'Verb · erklären (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Methode', role: 'r-akkusativ', en: 'method', hi: 'विधि', pron: 'me-TOH-duh', type: 'Noun · fem.' },
        { w: 'genauer', role: 'r-akkusativ', en: 'more precisely', hi: 'ज़्यादा सटीक', pron: 'ge-NOW-er', type: 'Adverb · Komparativ' },
        { w: '.', plain: true }
      ], en: 'In the following we explain the method more precisely.', hi: 'Aage mein hum vidhi ko zyaada sateek samjhaate hain.' },
      { speaker: 'Britta', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Befund', role: 'r-subject', en: 'finding', hi: 'निष्कर्ष', pron: 'be-FUNT', type: 'Noun · masc.', why: 'der Befund (this chapter).', ex: 'Der Befund bezieht sich auf die erste Studie.', exEn: 'The finding refers to the first study.' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'which', hi: 'जो', pron: 'dair', type: 'Relativpronomen · nominative (recycled B1)' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'पर', pron: 'owf', type: 'Preposition (part of sich beziehen auf)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'erste', role: 'r-akkusativ', en: 'first', hi: 'पहली', pron: 'AIRS-tuh', type: 'Adjective' },
        { w: 'Studie', role: 'r-akkusativ', en: 'study', hi: 'अध्ययन', pron: 'SHTOO-dyuh', type: 'Noun · fem.' },
        { w: 'bezieht', role: 'r-verb', en: 'refers', hi: 'संदर्भित करता है', pron: 'be-TSEEKT', type: 'Verb · sich beziehen (Satzende)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'überraschend', role: 'r-akkusativ', en: 'surprising', hi: 'आश्चर्यजनक', pron: 'ü-ber-RA-shent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The finding, which refers to the first study, is surprising.', hi: 'Woh nishkarsh, jo pehle adhyayan se sandarbhit hai, aashcharyajanak hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Darüber', role: 'r-conjunction', en: 'beyond that', hi: 'इसके अलावा', pron: 'da-RÜ-ber', type: 'Conjunction · darüber hinaus (recycled C1)' },
        { w: 'hinaus', role: 'r-conjunction', en: 'beyond', hi: 'से आगे', pron: 'hi-NOWS', type: 'Conjunction · part 2' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Verweiswörter', role: 'r-akkusativ', en: 'reference words', hi: 'संदर्भ शब्द', pron: 'fer-VYSE-vör-ter', type: 'Noun · plural', why: 'die Verweiswörter = reference words like "dieser/jener" that ensure cohesion (this chapter).', ex: 'die Verweiswörter richtig verwenden' },
        { w: 'richtig', role: 'r-akkusativ', en: 'correctly', hi: 'सही से', pron: 'RIKH-tikh', type: 'Adverb' },
        { w: 'verwenden', role: 'r-verb', en: 'use', hi: 'इस्तेमाल करना', pron: 'fer-VEN-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Beyond that we should use the reference words correctly.', hi: 'Iske alaava, humein sandarbh shabdon ka sahi istemaal karna chahiye.' },
      { speaker: 'Britta', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'überarbeite', role: 'r-verb', en: 'revise', hi: 'दोबारा करती हूँ', pron: 'ü-ber-AR-by-tuh', type: 'Verb · überarbeiten (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Absatz', role: 'r-akkusativ', en: 'paragraph', hi: 'अनुच्छेद', pron: 'AP-zats', type: 'Noun · masc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then I will revise the paragraph right away.', hi: 'Achha, toh main abhi anuchhed dobara karti hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine your text as a train. Each sentence is a carriage. Grammar makes every carriage work. <span class="de r-kohaerenz">Kohärenz</span> connects all the carriages into one train.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is KOHÄRENZ & TEXTVERKNÜPFUNG at C1 level — whole-text coherence and cohesion, NOT individual conjunctions, sentence structure, or subordinate/relative clauses (already mastered). Covered: the distinction between Kohärenz (logical meaning-level connection between ideas) and Kohäsion (linguistic surface connections); reference and substitution (pronoun reference, demonstrative reference like "dieser Ansatz"/"jene Ergebnisse", pronominal adverbs like dabei/darauf/hierfür/dafür, ellipsis) to avoid repeating the same noun; lexical cohesion (synonyms, paraphrases, semantic fields, lexical chains — e.g. varying "Ergebnis" with "Befunde"/"Daten" instead of repeating the same word five times); paragraph development (Topic Sentence → Explanation → Evidence → Example → Conclusion) and transitions between paragraphs; academic/scientific discourse markers (Im Folgenden, Darüber hinaus, Dies deutet darauf hin, Auf dieser Grundlage, Abschließend); journalistic discourse markers (Inzwischen, Zugleich, Ferner, Schließlich); professional sequencing (zunächst, anschließend, daraufhin, abschließend, außerdem, ferner). Do NOT expect or require basic conjunction rules, sentence-level grammar, or punctuation — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: repeating the same connector or noun multiple times instead of using reference/synonyms; abrupt topic changes without a transition marker; weak or missing paragraph transitions; unclear pronoun/demonstrative reference (the reader cannot tell what "dies" or "diese" refers back to); disconnected arguments that lack logical progression across the whole text, even if each sentence is grammatically correct. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag excessive lexical repetition where synonym/reference would improve cohesion; flag unclear or ambiguous demonstrative/pronoun reference; flag missing or weak paragraph transitions and discourse markers; evaluate the WHOLE text\'s logical flow, not just individual sentences. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Coherence check:</b> one sentence on whether the reader can easily follow the writer\'s train of thought from beginning to end.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your writing flows as one connected train of thought, not just correct individual sentences. Ready for the next chapter.', mid: 'Good. Re-read the Text Organization Model and Coherence Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: can your reader easily follow your train of thought from beginning to end?' },
  parserSentence: [ { w: 'Wir', role: 'plain' }, { w: 'sollten', role: 'plain' }, { w: 'auf', role: 'r-referenz' }, { w: 'diesen', role: 'r-referenz' }, { w: 'Ansatz', role: 'r-referenz' }, { w: 'zurückkommen', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Kohärenz connects all your correct sentences into one connected train of thought.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Britta and Timo edit a thesis, improving logical flow, reference chains, and paragraph transitions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key coherence/cohesion expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master reference, lexical cohesion, paragraph development, and discourse markers across registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic article and an editorial, identifying cohesion devices and discourse markers.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify discourse markers and logical progression in a university lecture and research presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present structured arguments and link ideas using authentic C1 discourse strategies.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve an incoherent text with reference and transitions, and write a 350-word coherent academic essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill cohesion analysis, reference resolution, paragraph ordering, and transition selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 830 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Cohesion analysis, reference resolution, and paragraph ordering drills, plus a full academic essay writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Text Organization Model, Coherence Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Grammatikalisch ist jeder Satz korrekt, aber die Kohärenz fehlt.', text: 'Distinguish grammatical correctness (Kohäsion) from logical coherence (Kohärenz)' },
    { de: 'Wir sollten auf diesen Ansatz zurückkommen.', text: 'Use demonstrative reference to avoid repeating a noun' },
    { de: 'Im Folgenden sollten wir die Ergebnisse zusammenfassen.', text: 'Use "im Folgenden" as a scientific discourse marker' },
    { de: 'Wir könnten stattdessen Synonyme wie "die Befunde" verwenden.', text: 'Apply lexical cohesion by varying vocabulary instead of repeating' },
    { de: 'Darüber hinaus sollten wir einen klaren Übergang schreiben.', text: 'Use "darüber hinaus" to add a paragraph transition' }
  ],
  vocab: [
    { de: 'die Kohärenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'coherence', hi: 'तारकसंगति', ex: 'Grammatikalisch ist jeder Satz korrekt, aber die Kohärenz fehlt.', exEn: 'Grammatically, every sentence is correct, but the coherence is missing.', exHi: 'Vyakaran ke roop se, har vaakya sahi hai, lekin tarkasangati nahi hai.', ex2: 'Die Kohärenz des Textes wurde durch die Überarbeitung deutlich verbessert.', ex2En: 'The coherence of the text was significantly improved through the revision.', ex2Hi: 'Sanshodhan se text ki tarkasangati bahut sudhri.' },
    { de: 'sich beziehen auf', pos: 'verb (fixed with preposition)', level: 'C1', register: 'written', en: 'to refer to', hi: 'संदर्भित होना', ex: 'Wir sollten auf diesen Ansatz zurückkommen.', exEn: 'We should return to this approach.', exHi: 'Hamein iss dhang par wapas aana chahiye.', ex2: 'Dieser Absatz bezieht sich auf die vorherige Analyse.', ex2En: 'This paragraph refers to the previous analysis.', ex2Hi: 'Yeh paragraph pichhle vishleshan ka sandarbh deta hai.', conj: { praesens: 'bezieht sich auf', praeteritum: 'bezog sich auf', perfekt: 'hat sich bezogen auf' } },
    { de: 'im Folgenden', pos: 'adverbial expression', level: 'C1', register: 'written', en: 'in the following, below', hi: 'आगे, नीचे', ex: 'Im Folgenden sollten wir die Ergebnisse zusammenfassen.', exEn: 'In what follows, we should summarize the results.', exHi: 'Aage, hamein parinaam sankshep mein prastut karne chahiye.', ex2: 'Im Folgenden werden die wichtigsten Befunde vorgestellt.', ex2En: 'In the following, the most important findings are presented.', ex2Hi: 'Aage sabse mahatvapoorn niष्karsh prastut kiye jaate hain.' },
    { de: 'darüber hinaus', pos: 'adverb', level: 'C1', register: 'written', en: 'furthermore, moreover', hi: 'इसके अलावा', ex: 'Darüber hinaus sollten wir einen klaren Übergang schreiben.', exEn: 'Furthermore, we should write a clear transition.', exHi: 'Iske alaava, hamein ek spasht sankraman likhna chahiye.', ex2: 'Darüber hinaus zeigt die Studie weitere interessante Muster.', ex2En: 'Furthermore, the study shows further interesting patterns.', ex2Hi: 'Iske alaava, adhyayan aur bhi dilchasp patterns dikhaata hai.' },
    { de: 'der Befund', art: 'der', gender: 'm', plural: 'Befunde', pos: 'noun', level: 'C1', register: 'written', en: 'finding', hi: 'निष्कर्ष', ex: 'Wir könnten stattdessen Synonyme wie "die Befunde" verwenden.', exEn: 'We could instead use synonyms like "die Befunde".', exHi: 'Hum iske bajaaye "die Befunde" jaise paryaayvaachi shabd use kar sakte hain.', ex2: 'Die Befunde stimmen mit früheren Studien überein.', ex2En: 'The findings agree with earlier studies.', ex2Hi: 'Niष्karsh pehle ke adhyayanon se mel khaate hain.' }
  ],
  grammar: [
    { title: 'Was ist Kohärenz? (What is Coherence?)', body: [ 'Idea → Sentence → Paragraph → Logical Flow → Complete Text. Individual correct sentences do not automatically create a good text — coherence requires logical connection between ideas throughout.' ], hinglish: 'Har sentence sahi hone se text achha nahi ban jaata. C1 ki writing mein yeh dekha jaata hai ki ek baat doosri se judti hai ya nahi \u2014 aur reader ko kabhi guess na karna pade ki tum kis baat par wapas aa rahe ho.' },
    { title: 'Kohärenz vs Kohäsion', body: [ 'Kohärenz = logical meaning-level connection between ideas. Kohäsion = the linguistic/grammatical surface connections (pronouns, conjunctions) that signal that meaning. Both are needed for a truly connected text.' ], hinglish: 'Do alag cheezein hain. <b>Koh\u00e4renz</b> matlab ideas ka aapas mein logically judna \u2014 yeh soch ka hissa hai. Aur <b>Koh\u00e4sion</b> matlab woh shabd jinse yeh judaav <b>dikhta</b> hai \u2014 pronouns, connectors, discourse markers. Dono chahiye: sirf connectors laga dene se text juda hua nahi lagta agar soch mein hi kadi na ho.' },
    { title: 'Referenz (Reference)', body: [ 'Pronoun reference, demonstrative reference (dies, jene, dieser Ansatz, jene Ergebnisse), substitution, ellipsis, pronominal adverbs (dabei, darauf, hierfür, dafür). Reference prevents unnecessary repetition while keeping the reader oriented.' ], hinglish: 'Reference se tum wahi noun baar-baar likhne se bach jaate ho. Par teen cheezein dhyaan mein rakho. <b>dies/diese</b> us noun se match karna chahiye jiski baat ho rahi hai. Poori pichli baat uthani ho to <b>was</b> lagao. Aur <b>da(r)-</b> forms (<b>darauf</b>, <b>daf\u00fcr</b>, <b>dabei</b>) sirf <b>cheezon</b> ke liye hain \u2014 insaan ke liye preposition ke saath pronoun aata hai: <span class="de">auf ihn</span>.' },
    { title: 'Lexikalische Kohäsion (Lexical Cohesion)', body: [ 'Repetition (sparingly), synonyms, paraphrases, semantic fields, lexical chains. Native speakers vary vocabulary (Ergebnis → Befunde → Daten) rather than repeating the same word, while still maintaining clarity about the topic.' ], hinglish: 'Native speakers ek hi shabd dohraate nahi \u2014 woh chain banate hain: <span class="de">Ergebnis \u2192 Befunde \u2192 Daten</span>. Par ek limit hai: itne synonyms mat badlo ki reader ko shak ho jaaye ki ab kisi nayi cheez ki baat ho rahi hai. Variety chahiye, par topic saaf rehna chahiye.' },
    { title: 'Absatzentwicklung (Paragraph Development)', body: [ 'Topic Sentence → Explanation → Evidence → Example → Conclusion. Each paragraph needs internal structure AND a clear transition connecting it to the next paragraph.' ], hinglish: 'Har paragraph ke andar ek structure hona chahiye \u2014 pehle main baat, phir uski explanation, phir saboot ya example, aur ant mein nateeja. Aur paragraph khatam karte waqt agli baat se ek kadi jodo, warna paragraphs alag-alag jazeeron jaise lagte hain.' },
    { title: 'Diskursmarker nach Register', body: [ 'Har register ke apne markers hain. Academic writing mein <span class="de">Im Folgenden</span>, <span class="de">Dar\u00fcber hinaus</span>, <span class="de">Auf dieser Grundlage</span>, <span class="de">Abschlie\u00dfend</span>. News mein <span class="de">Inzwischen</span> aur <span class="de">Zugleich</span>. Aur office mein <span class="de">zun\u00e4chst \u2026 anschlie\u00dfend \u2026 abschlie\u00dfend</span>. Yeh sab position 1 lete hain, isliye inke baad verb turant aata hai \u2014 aur comma nahi lagta.' ], hinglish: 'Har register ke apne markers hain. Academic writing mein <span class="de">Im Folgenden</span>, <span class="de">Dar\u00fcber hinaus</span>, <span class="de">Auf dieser Grundlage</span>, <span class="de">Abschlie\u00dfend</span>. News mein <span class="de">Inzwischen</span> aur <span class="de">Zugleich</span>. Aur office mein <span class="de">zun\u00e4chst \u2026 anschlie\u00dfend \u2026 abschlie\u00dfend</span>. Yeh sab position 1 lete hain, isliye inke baad verb turant aata hai \u2014 aur comma nahi lagta.' },
    {
      title: 'Wortstellung und Referenz \u2014 die Mechanik',
      body: [
        'Coherence is taught as a matter of style, but it fails for two purely mechanical reasons: the word order after a discourse marker, and reference words that do not agree with what they point to.',
        'Both are easy to check while proofreading.'
      ],
      table: {
        head: ['Item', 'Rule', 'Example'],
        rows: [
          ['marker in position 1', '<b>verb second</b>, no comma after it', '<span class="de">Dar\u00fcber hinaus <b>zeigt</b> die Studie \u2026</span>'],
          ['dies / diese / dieser', 'agrees with the noun it refers to', '<span class="de">die Daten \u2192 <b>diese</b> waren \u2026</span>'],
          ['<b>was</b>', 'refers to a whole preceding clause', '<span class="de">\u2026, <b>was</b> f\u00fcr das Team wichtig war.</span>'],
          ['da(r)- forms', 'refer to a THING, never a person', '<span class="de">darauf, daf\u00fcr, dabei, hierf\u00fcr</span>'],
          ['preposition + pronoun', 'used for a PERSON', '<span class="de">auf ihn, f\u00fcr sie</span>']
        ]
      },
      note: 'The most useful distinction: <b>dies</b> points back to a noun, while <b>was</b> points back to an entire clause. Using <i>dies</i> where you mean the whole preceding idea is the commonest coherence error at C1.',
      hinglish: 'Coherence ko style ki baat samjha jaata hai, par yeh do bilkul mechanical wajah se toot-ti hai \u2014 discourse marker ke baad ka word order, aur reference words jo apne noun se match nahi karte. Dono proofreading mein aasaani se pakde jaa sakte hain. Pehla: agar marker position 1 par hai to verb turant baad aayega aur uske baad comma nahi lagta \u2014 <span class="de">Dar\u00fcber hinaus <b>zeigt</b> die Studie \u2026</span>. Doosra: <b>dies/diese/dieser</b> us noun se match karta hai jiski woh baat kar raha hai, isliye <span class="de">die Daten \u2192 <b>diese</b> waren</span>. Aur sabse kaam ki baat \u2014 <b>dies</b> kisi <b>noun</b> ko refer karta hai, jabki <b>was</b> poori pichli baat ko. Jahan tumhe poori baat uthani ho wahan <b>was</b> lagao, <i>dies</i> nahi.'
    },
    { title: 'Meister-Tabelle', body: [ 'Cohesion device mapped to function.' ], table: { head: ['Cohesion Device', 'Function'], rows: [ ['Pronouns', 'Reference'], ['Demonstratives', 'Reference'], ['Synonyms', 'Lexical Cohesion'], ['Repetition', 'Topic Continuity'], ['Discourse Markers', 'Logical Flow'], ['Paragraph Transitions', 'Text Organization'] ] }, hinglish: 'Cohesion device aur function ka table \u2014 par device chunne ke baad yeh bhi dekh lo ki woh kis cheez ko refer kar raha hai, aur uske baad word order kya hoga.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these are word order or punctuation after a discourse marker; three are reference errors \u2014 an ambiguous <i>dies</i>, a mismatched demonstrative, or an empty pronominal adverb.' ], mistakes: [
      { wrong: 'Dar\u00fcber hinaus die Studie zeigt weitere Effekte.', right: 'Dar\u00fcber hinaus zeigt die Studie weitere Effekte.', why: 'A discourse marker in position 1 pushes the verb to position 2 \u2014 the subject follows it.' },
      { wrong: 'Die Ergebnisse sind eindeutig. Die Kosten der Studie waren hoch.', right: 'Die Ergebnisse sind eindeutig. Problematisch ist allerdings, dass die Kosten der Studie hoch waren.', why: 'Two correct sentences with no signposting force the reader to guess the connection. A marker makes the relationship explicit.' },
      { wrong: 'Die Methode wurde ver\u00e4ndert. Dies f\u00fchrte zu besseren Ergebnissen, und dies war f\u00fcr das Team wichtig.', right: 'Die Methode wurde ver\u00e4ndert. Dies f\u00fchrte zu besseren Ergebnissen, was f\u00fcr das Team wichtig war.', why: 'The second <b>dies</b> could point to the change or to the results. Use <b>was</b> to refer back to the whole preceding clause.' },
      { wrong: 'Die Forscher untersuchten die Daten. Dieser war umfangreich.', right: 'Die Forscher untersuchten die Daten. Diese waren umfangreich.', why: 'A demonstrative agrees with the noun it refers back to. <b>die Daten</b> is plural, so it takes <b>diese</b> and a plural verb.' },
      { wrong: 'Die Ergebnisse best\u00e4tigen die Hypothese. Darauf deutet dies hin.', right: 'Die Ergebnisse best\u00e4tigen die Hypothese. Darauf deutet auch die zweite Messung hin.', why: 'A pronominal adverb like <b>darauf</b> points forward or back to a thing \u2014 pairing it with a bare <i>dies</i> leaves both references empty.' },
      { wrong: 'Die Studie ist wichtig. Deswegen, sie wurde ver\u00f6ffentlicht.', right: 'Die Studie ist wichtig. Deswegen wurde sie ver\u00f6ffentlicht.', why: 'German does not put a comma after a position-1 discourse marker, and the verb must follow it directly.' }
    ], hinglish: 'Teen galtiyan discourse marker ke baad word order ya comma ki hain, aur teen reference ki \u2014 <i>dies</i> jo saaf nahi hai, demonstrative jo noun se match nahi karta, aur pronominal adverb jiska koi reference hi nahi.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to connect two ideas? Sentence connector. Need to connect paragraphs? Transition marker. Need to avoid repetition? Reference or synonym. Need to guide the reader? Discourse marker. Need overall clarity? Maintain topic progression.' ], note: 'Memory trick: imagine your text as a train. Grammar makes every carriage work; Kohärenz connects all the carriages into one train. Always ask: can my reader easily follow my train of thought from beginning to end?', hinglish: 'Do ideas jodni hain? Sentence connector. Paragraphs jodne hain? Transition marker. Repetition se bachna hai? Reference ya synonym. Aur likhne ke baad do cheezein check karo \u2014 har marker ke baad verb doosri jagah par hai, aur har <b>dies</b> ya <b>diese</b> saaf-saaf kisi ek cheez ki taraf ishara kar raha hai?' }
  ],
  reading: {
    title: 'Wirtschaftsbericht: Trends im deutschen Einzelhandel',
    titleEn: 'Reading A — Business report: trends in German retail',
    tokens: [
      { w: 'Im', role: 'r-diskursmarker', en: 'in the (Kontraktion, "im Folgenden")', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Folgenden', role: 'r-diskursmarker', en: 'that follows (Satzende, discourse marker)', hi: 'आगे (Satzende)', type: 'Adjective (substantiviert, Dat., Satzende)', why: '"Im Folgenden" is a formal discourse marker announcing what the text will cover next (this chapter).' },
      { w: 'werden', role: 'plain', en: 'are', hi: '', type: 'Verb · werden (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'wichtigsten', role: 'plain', en: 'most important', hi: 'सबसे महत्वपूर्ण', type: 'Adjective · Superlativ' },
      { w: 'Befunde', role: 'plain', en: 'findings (Satzende)', hi: 'निष्कर्ष (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Handelskammer', role: 'plain', en: 'chamber of commerce (Satzende)', hi: 'वाणिज्य मंडल (Satzende)', type: 'Noun · fem.' },
      { w: 'vorgestellt', role: 'plain', en: 'presented (Satzende)', hi: 'प्रस्तुत किए जाते हैं (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-referenz', en: 'these (plural nom., demonstrative reference back to "die Befunde")', hi: 'ये (demonstrative reference, "die Befunde" की ओर)', type: 'Demonstrativpronomen · Nom.', why: '"Diese" refers back unambiguously to "die Befunde" from the previous sentence, giving the paragraph coherence (this chapter).' },
      { w: 'stimmen', role: 'plain', en: 'agree', hi: 'मेल खाते हैं', type: 'Verb (Präsens)' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Präposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Prognosen', role: 'plain', en: 'forecasts (Satzende)', hi: 'भविष्यवाणियों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'पिछले', type: 'Article · Dat.' },
      { w: 'Vorjahr', role: 'plain', en: 'previous year (Satzende)', hi: 'साल के (Satzende)', type: 'Noun · neut.' },
      { w: 'überein', role: 'plain', en: '(part of trennbar "übereinstimmen", Satzende)', hi: '(Satzende)', type: 'Partikel · trennbar (Satzende)' },
      { w: '.', plain: true },
      { w: 'Dabei', role: 'r-referenz', en: 'in this regard (Pronominaladverb, refers back to the whole comparison)', hi: 'इसमें', type: 'Pronominaladverb' },
      { w: 'fällt', role: 'plain', en: 'stands out', hi: 'उभरता है', type: 'Verb · auffallen' },
      { w: 'besonders', role: 'plain', en: 'particularly', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'anhaltende', role: 'plain', en: 'ongoing', hi: 'जारी', type: 'Adjective' },
      { w: 'Zuwachs', role: 'plain', en: 'growth (Satzende)', hi: 'वृद्धि (Satzende)', type: 'Noun · masc.' },
      { w: 'im', role: 'plain', en: 'in', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Online-Handel', role: 'plain', en: 'online retail (Satzende)', hi: 'ऑनलाइन व्यापार (Satzende)', type: 'Noun · masc.' },
      { w: 'auf', role: 'plain', en: '(Satzende, part of "auffallen")', hi: '(Satzende)', type: 'Separable prefix (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In what follows, the chamber of commerce\'s most important findings are presented. These agree with the forecasts from the previous year. In this regard, the ongoing growth in online retail particularly stands out.',
    comprehension: [
      { q: 'Was für ein Ausdruck ist "im Folgenden"?', options: ['Wissenschaftlicher/journalistischer Diskursmarker', 'Umgangssprachlicher Ausdruck', 'Konzession'], answer: 0 },
      { q: 'Worauf bezieht sich "Diese"?', options: ['Auf "die Befunde"', 'Auf "den Prognosen"', 'Auf nichts Bestimmtes'], answer: 0 },
      { q: 'Warum funktioniert diese Referenz gut?', options: ['Sie ist eindeutig auf ein zuvor genanntes Nomen bezogen', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Leitartikel', titleEn: 'Reading B — Editorial article',
    tokens: [
      { w: 'Zunächst', role: 'r-diskursmarker', en: 'first of all (professional/journalistic sequencing discourse marker)', hi: 'sabse pehle (professional sequencing discourse marker)', type: 'Adverb' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'badh raha hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Nachfrage', role: 'plain', en: 'demand (Satzende)', hi: 'maang (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'stetig', role: 'plain', en: 'steadily (Satzende)', hi: 'lagaataar (Satzende)', type: 'Adverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ferner', role: 'r-diskursmarker', en: 'furthermore (journalistic discourse marker)', hi: 'iske alaava (journalistic discourse marker)', type: 'Adverb' },
      { w: 'zeigen', role: 'plain', en: 'show', hi: 'dikhaate hain', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ye', type: 'Article' },
      { w: 'Zahlen', role: 'plain', en: 'figures (Satzende)', hi: 'aankde (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'ein', role: 'plain', en: 'a (neut. akk.)', hi: 'ek', type: 'Article · Akk.' },
      { w: 'positives', role: 'plain', en: 'positive', hi: 'sakaaratmak', type: 'Adjective · Akk.' },
      { w: 'Bild', role: 'plain', en: 'picture (Satzende)', hi: 'tasveer (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'First of all, demand is steadily growing. Furthermore, the figures show a positive picture.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_032_L001', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dein zweites Kapitel wirkt losgelöst vom ersten — der Übergang fehlt komplett.', en: 'Timo, your second chapter seems disconnected from the first — the transition is completely missing.' },
      { id: 'C1_032_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, ich sollte am Anfang noch einmal auf den vorherigen Gedanken verweisen.', en: 'True, I should reference the previous idea again at the beginning.' },
      { id: 'C1_032_L003', speaker: 'Britta', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und im letzten Satz des ersten Kapitels könntest du schon eine Brücke andeuten.', en: 'Exactly, and in the last sentence of the first chapter you could already hint at a bridge.' },
      { id: 'C1_032_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gute Idee, dann liest sich die ganze Arbeit wie aus einem Guss.', en: 'Good idea, then the whole thesis will read as if from one mold.' }
    ],
    transcript: 'Timo, dein zweites Kapitel wirkt losgelöst vom ersten — der Übergang fehlt komplett. Stimmt, ich sollte am Anfang noch einmal auf den vorherigen Gedanken verweisen. Genau, und im letzten Satz des ersten Kapitels könntest du schon eine Brücke andeuten. Gute Idee, dann liest sich die ganze Arbeit wie aus einem Guss.',
    translation: 'Timo, your second chapter seems disconnected from the first — the transition is completely missing. True, I should reference the previous idea again at the beginning. Exactly, and in the last sentence of the first chapter you could already hint at a bridge. Good idea, then the whole thesis will read as if from one mold.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dein' },
      { w: 'zweites' },
      { w: 'Kapitel' },
      { w: 'wirkt' },
      { w: 'losgelöst' },
      { w: 'vom' },
      { w: 'ersten' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'Übergang' },
      { w: 'fehlt' },
      { w: 'komplett' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'sollte' },
      { w: 'am' },
      { w: 'Anfang' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'auf' },
      { w: 'den' },
      { w: 'vorherigen' },
      { w: 'Gedanken' },
      { w: 'verweisen' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'im' },
      { w: 'letzten' },
      { w: 'Satz' },
      { w: 'des' },
      { w: 'ersten' },
      { w: 'Kapitels' },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'schon' },
      { w: 'eine' },
      { w: 'Brücke' },
      { w: 'andeuten' },
      { w: '.', plain: true },
      { w: 'Gute' },
      { w: 'Idee' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'liest' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'ganze' },
      { w: 'Arbeit' },
      { w: 'wie' },
      { w: 'aus' },
      { w: 'einem' },
      { w: 'Guss' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welches Problem stellt Britta fest?', qEn: 'What problem does Britta identify?', options: ['zu viele Fehler', 'fehlender Übergang zwischen den Kapiteln', 'zu kurzer Text', 'falsches Thema'], optionsEn: ['too many mistakes', 'missing transition between the chapters', 'too short a text', 'wrong topic'], answer: 1,
        explain: '"Der Übergang fehlt komplett."' },
      { q: 'Was will Timo am Anfang des zweiten Kapitels machen?', qEn: 'What does Timo plan to do at the beginning of chapter two?', options: ['ein neues Thema beginnen', 'auf den vorherigen Gedanken verweisen', 'alles löschen', 'ein Zitat einfügen'], optionsEn: ['start a new topic', 'refer back to the previous idea', 'delete everything', 'insert a quotation'], answer: 1,
        explain: '"Ich sollte am Anfang noch einmal auf den vorherigen Gedanken verweisen."' }
    ]
  },
  speaking: [
    { task: "Timo sagt, dein zweites Kapitel wirkt losgelöst. Wie löst du das?", taskEn: "Timo says your second chapter feels detached. How do you fix it?", de: "Ich sollte am Anfang noch einmal auf den vorherigen Gedanken Bezug nehmen.", en: "I should refer back to the previous idea at the start." },
    { task: "Leite im Vortrag den nächsten Abschnitt ein.", taskEn: "Introduce the next section in your talk.", de: "Im Folgenden gehe ich auf die Grenzen der Methode ein.", en: "In what follows I'll address the method's limitations." },
    { task: "Nimm auf den vorigen Befund Bezug, ohne ihn zu wiederholen.", taskEn: "Refer to the previous finding without repeating it.", de: "Dieser Befund erklärt die Abweichung jedoch nur teilweise.", en: "This finding, however, explains the deviation only in part." },
    { task: "Ergänze im Vortrag ein zusätzliches Argument.", taskEn: "Add a further argument in your talk.", de: "Darüber hinaus spricht die Kostenlage für dieses Modell.", en: "Moreover the cost situation speaks for this model." },
    { task: "Deine Betreuerin fragt, woran die Kohärenz hängt.", taskEn: "Your supervisor asks what coherence depends on.", de: "Jeder Absatz braucht einen Leitsatz, der sich auf den vorherigen bezieht.", en: "Every paragraph needs a topic sentence that refers to the previous one." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve an incoherent text by adding appropriate references, transitions, and discourse markers. Explain every improvement.\n\nTASK 2 — Academic essay (350 words): Demonstrate coherent structure, logical paragraph progression, reference chains, lexical cohesion, and authentic C1 discourse organization.',
    starters: ['Im Folgenden werden die wichtigsten Befunde vorgestellt.', 'Zunächst betrachten wir die Ausgangslage, anschließend analysieren wir die Faktoren.'],
    placeholder: 'Grammatikalisch ist jeder Satz korrekt, aber die Kohärenz fehlt. Wir sollten auf diesen Ansatz zurückkommen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'What is the difference between Kohärenz and Kohäsion?', options: ['Kohärenz is logical meaning-level connection; Kohäsion is linguistic surface connection', 'They are exactly the same thing', 'Kohäsion only applies to spoken German'], answer: 0, explain: 'Kohärenz refers to the underlying logical coherence, while Kohäsion is the grammatical/linguistic markers that create it.' },
    gap: { sentence: ['', ' werden die wichtigsten Befunde vorgestellt.'], gaps: [ { answer: 'Im Folgenden', accepts: ['Im Folgenden'] } ], explain: '"Im Folgenden" is a standard scientific discourse marker meaning "in what follows".' },
    match: { q: 'Match each cohesion device to its function.', pairs: [ { noun: 'dieser Ansatz', art: 'Demonstrative reference' }, { noun: 'die Befunde (for "die Ergebnisse")', art: 'Lexical cohesion (synonym)' }, { noun: 'darüber hinaus', art: 'Discourse marker (addition)' }, { noun: 'im Folgenden', art: 'Discourse marker (introduction)' } ] },
    builder: { target: 'Build: "We should return to this approach." (demonstrative reference)', bank: ['Wir', 'sollten', 'auf', 'diesen', 'Ansatz', 'zurückkommen', '.'], answer: ['Wir', 'sollten', 'auf', 'diesen', 'Ansatz', 'zurückkommen', '.'], roles: { 'diesen': 'r-referenz', 'Ansatz': 'r-referenz' } },
    errorCorrection: { title: 'Error correction', wrong: 'Das Ergebnis zeigt X. Das Ergebnis zeigt Y. Das Ergebnis zeigt Z.', right: 'Das Ergebnis zeigt X. Die Befunde zeigen außerdem Y. Darüber hinaus lässt sich Z beobachten.', explain: 'Repeating "das Ergebnis" three times is weak lexical cohesion — varying with synonyms and discourse markers creates a more connected, readable text.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for text coherence?', options: ['A text is a train — grammar makes each carriage work, but Kohärenz connects them all', 'Coherence is unimportant if grammar is correct', 'Every sentence should be identical in structure'], answer: 0, explain: 'Individually correct sentences do not automatically create a connected, readable text.' },
    { q: 'What does "im Folgenden" mean?', options: ['In what follows / below', 'Nevertheless', 'By the way'], answer: 0, explain: '"Im Folgenden" is a standard academic discourse marker introducing what comes next.' },
    { q: 'Why use "die Befunde" instead of repeating "die Ergebnisse"?', options: ['Lexical cohesion — varying vocabulary while maintaining topic clarity', 'They mean completely different things', 'German requires synonym use by law'], answer: 0, explain: 'Native speakers avoid excessive repetition through synonyms and paraphrase.' },
    { q: 'What does demonstrative reference like "dieser Ansatz" do?', options: ['Refers back to a previously mentioned idea, avoiding repetition', 'Introduces completely new information', 'Signals the end of a text'], answer: 0, explain: 'Demonstrative reference points back to something already established in the text.' },
    { q: 'What should every paragraph end with, according to this chapter?', options: ['A bridge/transition to the next idea', 'A completely new, unrelated topic', 'The exact same sentence as the topic sentence'], answer: 0, explain: 'Paragraph transitions keep the whole text logically connected.' }
  ],
  takeaways: [
    { c: 'r-kohaerenz', html: 'Kohärenz (logical connection) is distinct from grammatical correctness — a text of correct sentences can still lack coherence.' },
    { c: 'r-referenz', html: 'Reference (dieser Ansatz, jene Ergebnisse) and lexical cohesion (synonyms like Befunde for Ergebnisse) prevent repetition while keeping the reader oriented.' },
    { c: 'r-diskursmarker', html: 'Discourse markers (im Folgenden, darüber hinaus, abschließend) signal logical progression and connect paragraphs into one coherent text.' }
  ],
  revisionTips: [
    'Take a paragraph you have written and count how many times you repeated the same noun — replace at least two repetitions with reference or synonyms.',
    'Find a German academic article and highlight every discourse marker (im Folgenden, darüber hinaus, abschließend) you can identify.',
    'Practise writing three connected paragraphs, ending each one with an explicit transition to the next.'
  ]
};
window.CHAPTER = CHAPTER;
