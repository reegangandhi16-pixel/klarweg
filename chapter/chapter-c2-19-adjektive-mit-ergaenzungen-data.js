/* KLARWEG CHAPTER DATA — C2 · Chapter 19
   "Adjektive mit Ergänzungen" — native-level mastery of adjective
   COMPLEMENTATION: valency, complement patterns (prepositional, case,
   zu-infinitive, dass-clause, comparative), and register-based choice.
   NOT basic adjective-preposition lists (interessiert an, stolz auf —
   already mastered B1/B2/C1, C2 Ch3/18). Structural chapter: no
   standalone word list uploaded — vocabulary section drills the
   brief's own worked complement-pattern phrases from Parts 3-7.
   Dialogue: Elfriede and Timo ONLY. */
const CHAPTER = {
  id: 'c2-19-adjektive-mit-ergaenzungen',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 19,
  title: 'Adjektive mit Ergänzungen',
  titleEn: 'Adjectives with complements',
  description: 'Some magnets attract a preposition. Some attract an infinitive. Some attract a dass-clause. Without the correct companion, the adjective feels incomplete.',
  xp: 1675, time: 150, difficulty: 'Mastery',
  nextChapter: { number: 20, title: 'Goethe Mini 3', titleEn: 'Checkpoint — Chapters 1–19 integrated' , href: 'chapter-c2-20-goethe-mini-3.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every adjective is a <em>magnet</em> — it attracts its own complement.',
    intro: 'Working on an international research proposal, Elfriede says she\'s ready for an agreement and determined to take the step, and Timo asks if she\'s capable of compromise — every adjective here a magnet pulling in its own required complement.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers choose between prepositional, case, infinitive, and dass-clause complements for precision'],
    scene: 'Überarbeitung eines Forschungsantrags',
    femaleSpeakers: ['Elfriede'],
    dialogue: [
      { speaker: 'Elfriede', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'bereit', role: 'r-akkusativ', en: 'ready', hi: 'तैयार', pron: 'be-RYTE', type: 'Adjective (recycled C1)' },
        { w: 'zu', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of bereit zu)' },
        { w: 'einer', role: 'r-dativ', en: 'an (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'Einigung', role: 'r-dativ', en: 'agreement (dat.)', hi: 'समझौते के लिए', pron: 'EYE-ni-gung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'I am ready for an agreement.', hi: 'Main ek samjhaute ke liye taiyaar hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'entschlossen', role: 'r-akkusativ', en: 'determined', hi: 'दृढ़ संकल्पित', pron: 'ent-SHLO-sen', type: 'Adjective', why: 'entschlossen zu + Dativ = determined to, fixed adjective-preposition pair (this chapter, gate).', ex: 'Bist du entschlossen zu diesem Schritt?', exEn: 'Are you determined to take this step?' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of entschlossen zu)' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Schritt', role: 'r-dativ', en: 'step (dat.)', hi: 'कदम के लिए', pron: 'shrit', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'Are you determined to take this step?', hi: 'Kya tum is kadam ke liye drirh sankalpit ho?' },
      { speaker: 'Elfriede', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'sicher', role: 'r-akkusativ', en: 'sure', hi: 'निश्चित', pron: 'ZI-kher', type: 'Adjective', why: 'sicher, dass = sure that, adjective with dass-clause complement (this chapter).', ex: 'Ich bin sicher, dass das der richtige Weg ist.', exEn: 'I am sure that this is the right path.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'richtige', role: 'r-subject', en: 'right', hi: 'सही', pron: 'RIKH-ti-guh', type: 'Adjective' },
        { w: 'Weg', role: 'r-subject', en: 'path', hi: 'रास्ता', pron: 'vayk', type: 'Noun · masc. (Satzende)' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I am sure that this is the right path.', hi: 'Haan. Mujhe yakin hai ki yeh sahi raasta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'fähig', role: 'r-akkusativ', en: 'capable', hi: 'सक्षम', pron: 'FAY-ikh', type: 'Adjective (recycled C1)' },
        { w: 'zu', role: 'r-preposition', en: 'of', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of fähig zu)' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'Kompromiss', role: 'r-dativ', en: 'compromise (dat.)', hi: 'समझौते के लिए', pron: 'kom-pro-MIS', type: 'Noun · masc. dat.' },
        { w: '?', plain: true }
      ], en: 'Are you capable of a compromise?', hi: 'Kya tum samjhaute ke liye saksham ho?' },
      { speaker: 'Elfriede', tokens: [
        { w: 'Natürlich', role: 'r-akkusativ', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'gewillt', role: 'r-akkusativ', en: 'willing', hi: 'इच्छुक', pron: 'ge-VILT', type: 'Adjective', why: 'gewillt zu = willing to, fixed adjective-preposition pair (this chapter, gate).', ex: 'Ich bin gewillt zu Zugeständnissen.', exEn: 'I am willing to concessions.' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of gewillt zu)' },
        { w: 'Zugeständnissen', role: 'r-dativ', en: 'concessions (dat.)', hi: 'रियायतों के लिए', pron: 'TSOO-ge-shtent-ni-sen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Of course. I am willing to concessions.', hi: 'Zaroor. Main riyaayaton ke liye ichhuk hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'beide', role: 'r-subject', en: 'both', hi: 'दोनों', pron: 'BY-duh', type: 'Determiner' },
        { w: 'verpflichtet', role: 'r-akkusativ', en: 'obligated', hi: 'बाध्य', pron: 'fer-PFLIKH-tet', type: 'Adjective', why: 'verpflichtet zu = obligated to, fixed adjective-preposition pair (this chapter, gate).', ex: 'Wir sind verpflichtet zu einer Lösung.', exEn: 'We are obligated to a solution.' },
        { w: 'zu', role: 'r-preposition', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Preposition (part of verpflichtet zu)' },
        { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', pron: 'EYE-ner', type: 'Article · dative' },
        { w: 'gemeinsamen', role: 'r-dativ', en: 'joint', hi: 'साझा', pron: 'ge-MYN-za-men', type: 'Adjective · dative' },
        { w: 'Lösung', role: 'r-dativ', en: 'solution (dat.)', hi: 'हल के लिए', pron: 'LÖ-zung', type: 'Noun · fem. dat.' },
        { w: '.', plain: true }
      ], en: 'Then we are both obligated to a joint solution.', hi: 'Toh hum dono ek saajha hal ke liye baadhya hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every adjective is a <span class="de r-magnet-metapher">magnet</span> — it attracts its own complement, and native speakers know which one.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is ADJEKTIVE MIT ERGÄNZUNGEN — native-level mastery of adjective COMPLEMENTATION: valency, complement patterns, and register-based choice, NOT basic adjective-preposition lists like "interessiert an" or "stolz auf" (already fully mastered B1/B2/C1, C2 Ch3/18). Covered: the adjective → meaning → missing information → complement → complete message pipeline (e.g. "Er ist bereit" vs. "Er ist bereit, die Verantwortung zu übernehmen"); the five complement types (prepositional, case-governed, zu-infinitive, dass-clause, comparative); zu-infinitive complements (bereit zu, fähig zu, entschlossen zu, gewillt zu, verpflichtet zu); dass-clause complements (sicher, dass...; überzeugt, dass...; wahrscheinlich, dass...; erstaunt, dass...; bewusst, dass...) expressing speaker certainty/attitude; academic-register complements (relevant für, abhängig von, vergleichbar mit, vereinbar mit, charakteristisch für); scientific-register complements (empfindlich gegenüber, geeignet für, konsistent mit, repräsentativ für, signifikant für); legal/administrative complements (verpflichtet zu, zuständig für, berechtigt zu, verantwortlich für, unzulässig nach); and the valency network (adjective → possible complements → meaning shift → register shift → stylistic effect). The most important things to catch: translating English complement structures directly into German; using the wrong preposition for a given adjective; choosing the wrong clause type (dass-clause where a zu-infinitive fits better, or vice versa); unnecessary/redundant infinitives; register-mismatched complement choice (casual complement in a legal/academic context or vice versa); incomplete adjective phrases that leave the meaning hanging (an adjective used alone when its meaning clearly requires a complement). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag incomplete adjective phrases lacking a needed complement; flag wrong preposition/case for a given adjective; flag wrong clause type (dass vs zu-infinitive) for the intended meaning; flag register-mismatched complement choices. Do NOT flag adjective ending/declension errors as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around complement choice/valency/register). If none: <li>No errors — well done.</li> 3) <p><b>Magnet check:</b> one sentence on whether every adjective in the learner\'s text has found its correct "magnetic" complement.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — every adjective in your writing finds its correct complement. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Valency Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: every adjective is a magnet, and it needs the right complement to feel complete.' },
  parserSentence: [ { w: 'Er', role: 'plain' }, { w: 'ist', role: 'plain' }, { w: 'bereit', role: 'r-ergaenzungs-magnet' }, { w: ',', plain: true }, { w: 'die', role: 'plain' }, { w: 'Verantwortung', role: 'plain' }, { w: 'zu', role: 'r-ergaenzungs-magnet' }, { w: 'übernehmen', role: 'r-ergaenzungs-magnet' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every adjective is a magnet, attracting its own complement to feel complete.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Elfriede and Timo improve complement structures in a research proposal for precision and formality.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic academic, scientific, and legal adjective-complement patterns — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master adjective valency, complement types, and register-based complement choice.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, scientific publication, and legal opinion for adjective complementation.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify complement patterns and adjective valency in a lecture, presentation, and policy briefing.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice explaining and reformulating adjective complement choices at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite adjective phrases, edit for valency, and write a 650-word academic discussion.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill complement selection, adjective valency, and infinitive vs. dass-clause choice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1675 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter adjective-complement patterns with translations, government (Rektion), and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '15 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Complement selection, valency, and register drills, plus the full 650-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '21 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Valency Model, Complexity Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '17 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'bereit, die Verantwortung zu übernehmen', text: 'Complete an adjective with a zu-infinitive complement' },
    { de: 'sicher, dass die Ergebnisse korrekt sind', text: 'Complete an adjective with a dass-clause of certainty' },
    { de: 'relevant für, vergleichbar mit, charakteristisch für', text: 'Use academic-register prepositional complements' },
    { de: 'zuständig für, berechtigt zu, verantwortlich für', text: 'Use legal-register adjective complements' },
    { de: 'Jedes Adjektiv ist ein Magnet.', text: 'Understand the chapter\'s core "magnet" metaphor for adjective complementation' }
  ],
  vocab: [
    { de: 'bereit zu', pos: 'adjective + zu-Infinitiv', level: 'C2', register: 'general/professional', gov: 'zu + Infinitiv', en: 'ready to', hi: 'तैयार', synonyms: 'gewillt zu, entschlossen zu', antonyms: 'unwillig', ex: 'Sie ist bereit, die Herausforderung anzunehmen.', exEn: 'She is ready to take on the challenge.', exHi: 'Woh chunauti sweekaar karne ke liye taiyaar hai.', ex2: 'Er war nicht bereit, seine Meinung zu ändern.', ex2En: 'He was not ready to change his opinion.', ex2Hi: 'Woh apni raay badalne ke liye taiyaar nahi tha.' },
    { de: 'fähig zu', pos: 'adjective + zu-Infinitiv', level: 'C2', register: 'academic/formal', gov: 'zu + Infinitiv', en: 'capable of', hi: 'सक्षम', synonyms: 'imstande zu, in der Lage zu', antonyms: 'unfähig zu', ex: 'Das System ist fähig, komplexe Muster zu erkennen.', exEn: 'The system is capable of recognizing complex patterns.', exHi: 'System complex patterns pehchaanne mein saksham hai.', ex2: 'Nicht jeder ist fähig, unter Druck ruhig zu bleiben.', ex2En: 'Not everyone is capable of staying calm under pressure.', ex2Hi: 'Har koi dabaav mein shaant rehne mein saksham nahi hota.' },
    { de: 'entschlossen zu', pos: 'adjective + zu-Infinitiv', level: 'C2', register: 'formal/literary', gov: 'zu + Infinitiv', en: 'determined to', hi: 'दृढ़ निश्चयी', synonyms: 'fest entschlossen zu', antonyms: 'unentschlossen', ex: 'Die Regierung ist entschlossen, die Reform durchzusetzen.', exEn: 'The government is determined to enforce the reform.', exHi: 'Sarkaar sudhaar laagu karne ke liye dridh nishchayi hai.', ex2: 'Sie war entschlossen, ihr Ziel zu erreichen.', ex2En: 'She was determined to reach her goal.', ex2Hi: 'Woh apna lakshya praapt karne ke liye dridh nishchayi thi.' },
    { de: 'gewillt zu', pos: 'adjective + zu-Infinitiv', level: 'C2', register: 'formal', gov: 'zu + Infinitiv', en: 'willing to', hi: 'इच्छुक', synonyms: 'bereit zu', antonyms: 'unwillig', ex: 'Er zeigte sich gewillt, Kompromisse einzugehen.', exEn: 'He showed himself willing to make compromises.', exHi: 'Usne samjhauta karne ki ichha dikhaayi.', ex2: 'Die Firma ist gewillt, in neue Technologien zu investieren.', ex2En: 'The company is willing to invest in new technologies.', ex2Hi: 'Company nayi technologies mein invest karne ke liye ichhuk hai.' },
    { de: 'verpflichtet zu', pos: 'adjective + zu-Infinitiv', level: 'C2', register: 'legal/administrative', gov: 'zu + Infinitiv', en: 'obligated to', hi: 'बाध्य', synonyms: 'gehalten zu', antonyms: 'freigestellt', ex: 'Der Mieter ist verpflichtet, die Miete pünktlich zu zahlen.', exEn: 'The tenant is obligated to pay the rent on time.', exHi: 'Kiraayedaar samay par kiraaya dene ke liye baadhya hai.', ex2: 'Die Firma ist verpflichtet, den Vertrag einzuhalten.', ex2En: 'The company is obligated to comply with the contract.', ex2Hi: 'Company contract ka paalan karne ke liye baadhya hai.' },
    { de: 'sicher, dass', pos: 'adjective + dass-Satz', level: 'C2', register: 'academic/general', gov: 'dass-Satz', en: 'certain that', hi: 'निश्चित है कि', synonyms: 'überzeugt, dass', antonyms: 'unsicher, ob', ex: 'Ich bin sicher, dass die Daten korrekt erhoben wurden.', exEn: 'I am certain that the data were collected correctly.', exHi: 'Mujhe pakka yakeen hai ki data sahi tarike se ikattha kiya gaya.', ex2: 'Die Forscher sind sicher, dass die Hypothese zutrifft.', ex2En: 'The researchers are certain that the hypothesis holds.', ex2Hi: 'Shodhkarta nishchit hain ki hypothesis sahi hai.' },
    { de: 'überzeugt, dass', pos: 'adjective + dass-Satz', level: 'C2', register: 'academic/formal', gov: 'dass-Satz', en: 'convinced that', hi: 'आश्वस्त है कि', synonyms: 'sicher, dass', antonyms: 'skeptisch, dass', ex: 'Sie ist überzeugt, dass die Methode funktioniert.', exEn: 'She is convinced that the method works.', exHi: 'Woh aashwast hai ki paddhati kaam karti hai.', ex2: 'Die Autoren sind überzeugt, dass ihre Analyse korrekt ist.', ex2En: 'The authors are convinced that their analysis is correct.', ex2Hi: 'Lekhak aashwast hain ki unka analysis sahi hai.' },
    { de: 'wahrscheinlich, dass', pos: 'adjective + dass-Satz', level: 'C2', register: 'academic/scientific', gov: 'dass-Satz', en: 'probable that', hi: 'संभावना है कि', synonyms: 'plausibel, dass', antonyms: 'unwahrscheinlich, dass', ex: 'Es ist wahrscheinlich, dass die Ergebnisse reproduzierbar sind.', exEn: 'It is probable that the results are reproducible.', exHi: 'Sambhaavna hai ki parinaam punarutpadaneey hain.', ex2: 'Es ist wahrscheinlich, dass sich der Trend fortsetzt.', ex2En: 'It is probable that the trend will continue.', ex2Hi: 'Sambhaavna hai ki trend jaari rahega.' },
    { de: 'erstaunt, dass', pos: 'adjective + dass-Satz', level: 'C2', register: 'general/literary', gov: 'dass-Satz', en: 'astonished that', hi: 'आश्चर्यचकित है कि', synonyms: 'überrascht, dass', antonyms: 'gleichgültig, dass', ex: 'Ich war erstaunt, dass die Reaktion so schnell erfolgte.', exEn: 'I was astonished that the reaction happened so quickly.', exHi: 'Mujhe aashcharya hua ki pratikriya itni jaldi hui.', ex2: 'Die Kritiker waren erstaunt, dass der Plan genehmigt wurde.', ex2En: 'The critics were astonished that the plan was approved.', ex2Hi: 'Aalochakon ko aashcharya hua ki yojana ko manzoori mili.' },
    { de: 'bewusst, dass', pos: 'adjective + dass-Satz', level: 'C2', register: 'academic/formal', gov: 'dass-Satz / Gen.', en: 'aware that', hi: 'जागरूक है कि', synonyms: 'wissend, dass', antonyms: 'ahnungslos', ex: 'Man muss sich bewusst sein, dass die Studie Grenzen hat.', exEn: 'One must be aware that the study has limitations.', exHi: 'Yeh dhyaan mein rakhna chahiye ki study ki seemaayein hain.', ex2: 'Sie ist sich bewusst, dass Fehler möglich sind.', ex2En: 'She is aware that mistakes are possible.', ex2Hi: 'Woh jaanti hai ki galtiyon ki sambhaavna hai.' },
    { de: 'relevant für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'academic', gov: 'für + Akk.', en: 'relevant for/to', hi: 'प्रासंगिक', synonyms: 'wichtig für, bedeutsam für', antonyms: 'irrelevant für', ex: 'Diese Ergebnisse sind relevant für die weitere Forschung.', exEn: 'These results are relevant for further research.', exHi: 'Yeh parinaam aage ke shodh ke liye prasangik hain.', ex2: 'Der Faktor ist besonders relevant für kleine Unternehmen.', ex2En: 'The factor is especially relevant for small businesses.', ex2Hi: 'Yeh factor chhote vyavasaayon ke liye vishesh roop se prasangik hai.' },
    { de: 'abhängig von', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'academic/scientific', gov: 'von + Dat.', en: 'dependent on', hi: 'निर्भर', synonyms: 'angewiesen auf', antonyms: 'unabhängig von', ex: 'Der Erfolg ist stark abhängig von der Finanzierung.', exEn: 'The success is strongly dependent on the funding.', exHi: 'Safalta funding par bahut nirbhar hai.', ex2: 'Die Ergebnisse sind abhängig von den Versuchsbedingungen.', ex2En: 'The results are dependent on the experimental conditions.', ex2Hi: 'Parinaam prayogik sthitiyon par nirbhar hain.' },
    { de: 'vergleichbar mit', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'academic/scientific', gov: 'mit + Dat.', en: 'comparable to', hi: 'तुलनीय', synonyms: 'ähnlich wie', antonyms: 'unvergleichbar mit', ex: 'Die Daten sind vergleichbar mit früheren Studien.', exEn: 'The data are comparable to earlier studies.', exHi: 'Data pehle ke studies ke tulniya hai.', ex2: 'Diese Situation ist kaum vergleichbar mit der letzten Krise.', ex2En: 'This situation is hardly comparable to the last crisis.', ex2Hi: 'Yeh sthiti pichhle sankat ke tulniya nahi hai.' },
    { de: 'vereinbar mit', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'legal/academic', gov: 'mit + Dat.', en: 'compatible with', hi: 'सुसंगत', synonyms: 'kompatibel mit', antonyms: 'unvereinbar mit', ex: 'Die Maßnahme ist vereinbar mit geltendem Recht.', exEn: 'The measure is compatible with current law.', exHi: 'Upaay maujuda kaanoon ke saath susangat hai.', ex2: 'Diese Position ist nicht vereinbar mit unseren Grundsätzen.', ex2En: 'This position is not compatible with our principles.', ex2Hi: 'Yeh sthiti hamaare siddhanton ke saath susangat nahi hai.' },
    { de: 'charakteristisch für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'academic', gov: 'für + Akk.', en: 'characteristic of', hi: 'विशिष्ट', synonyms: 'typisch für', antonyms: 'untypisch für', ex: 'Diese Struktur ist charakteristisch für das Genre.', exEn: 'This structure is characteristic of the genre.', exHi: 'Yeh sanrachna is genre ke liye vishisht hai.', ex2: 'Der Fehler ist charakteristisch für Anfänger.', ex2En: 'The mistake is characteristic of beginners.', ex2Hi: 'Yeh galti shuruaati logon ke liye vishisht hai.' },
    { de: 'empfindlich gegenüber', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'scientific', gov: 'gegenüber + Dat.', en: 'sensitive to', hi: 'संवेदनशील', synonyms: 'anfällig für', antonyms: 'unempfindlich gegenüber', ex: 'Das Material ist empfindlich gegenüber Feuchtigkeit.', exEn: 'The material is sensitive to moisture.', exHi: 'Material namee ke prati samvedansheel hai.', ex2: 'Der Sensor ist empfindlich gegenüber kleinsten Veränderungen.', ex2En: 'The sensor is sensitive to the smallest changes.', ex2Hi: 'Sensor sabse chhote badlaavon ke prati samvedansheel hai.' },
    { de: 'geeignet für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'scientific/professional', gov: 'für + Akk.', en: 'suitable for', hi: 'उपयुक्त', synonyms: 'passend für', antonyms: 'ungeeignet für', ex: 'Die Methode ist geeignet für kleine Stichproben.', exEn: 'The method is suitable for small samples.', exHi: 'Paddhati chhote samples ke liye upyukt hai.', ex2: 'Dieses Modell ist geeignet für komplexe Systeme.', ex2En: 'This model is suitable for complex systems.', ex2Hi: 'Yeh model complex systems ke liye upyukt hai.' },
    { de: 'konsistent mit', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'scientific/academic', gov: 'mit + Dat.', en: 'consistent with', hi: 'सुसंगत', synonyms: 'übereinstimmend mit', antonyms: 'inkonsistent mit', ex: 'Die Befunde sind konsistent mit der Theorie.', exEn: 'The findings are consistent with the theory.', exHi: 'Niष्kars theory ke saath susangat hain.', ex2: 'Das Ergebnis ist konsistent mit früheren Messungen.', ex2En: 'The result is consistent with earlier measurements.', ex2Hi: 'Parinaam pehle ke measurements ke saath susangat hai.' },
    { de: 'repräsentativ für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'scientific/academic', gov: 'für + Akk.', en: 'representative of', hi: 'प्रतिनिधि', synonyms: 'typisch für', antonyms: 'nicht repräsentativ für', ex: 'Die Stichprobe ist repräsentativ für die Gesamtbevölkerung.', exEn: 'The sample is representative of the total population.', exHi: 'Sample poori aabaadi ke liye pratinidhi hai.', ex2: 'Diese Fälle sind nicht repräsentativ für den allgemeinen Trend.', ex2En: 'These cases are not representative of the general trend.', ex2Hi: 'Yeh cases saamaanya trend ke liye pratinidhi nahi hain.' },
    { de: 'signifikant für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'scientific', gov: 'für + Akk.', en: 'significant for', hi: 'महत्वपूर्ण', synonyms: 'bedeutsam für', antonyms: 'unbedeutend für', ex: 'Dieser Faktor ist signifikant für das Endergebnis.', exEn: 'This factor is significant for the final result.', exHi: 'Yeh factor antim parinaam ke liye mahatvapurn hai.', ex2: 'Der Unterschied ist signifikant für die Interpretation.', ex2En: 'The difference is significant for the interpretation.', ex2Hi: 'Antar interpretation ke liye mahatvapurn hai.' },
    { de: 'zuständig für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'legal/administrative', gov: 'für + Akk.', en: 'responsible/competent for', hi: 'ज़िम्मेदार', synonyms: 'verantwortlich für', antonyms: 'unzuständig für', ex: 'Diese Abteilung ist zuständig für die Genehmigung.', exEn: 'This department is responsible for the approval.', exHi: 'Yeh vibhaag manzoori ke liye zimmedaar hai.', ex2: 'Welches Gericht ist zuständig für diesen Fall?', ex2En: 'Which court is competent for this case?', ex2Hi: 'Kaunsi adaalat is case ke liye saksham hai?' },
    { de: 'berechtigt zu', pos: 'adjective + zu (Dat./Infinitiv)', level: 'C2', register: 'legal', gov: 'zu + Dat. / zu + Infinitiv', en: 'entitled to', hi: 'अधिकृत', synonyms: 'befugt zu', antonyms: 'nicht berechtigt zu', ex: 'Der Mitarbeiter ist berechtigt, Urlaub zu beantragen.', exEn: 'The employee is entitled to apply for leave.', exHi: 'Karmchaari chhutti ke liye avedan karne ka adhikaari hai.', ex2: 'Sie ist berechtigt zu einer Entschädigung.', ex2En: 'She is entitled to compensation.', ex2Hi: 'Woh mudaavze ki adhikaari hai.' },
    { de: 'verantwortlich für', pos: 'adjective + Präp. (Akk.)', level: 'C2', register: 'legal/professional', gov: 'für + Akk.', en: 'responsible for', hi: 'ज़िम्मेदार', synonyms: 'zuständig für', antonyms: 'unverantwortlich für', ex: 'Der Vorstand ist verantwortlich für die Unternehmensstrategie.', exEn: 'The board is responsible for the company strategy.', exHi: 'Board company strategy ke liye zimmedaar hai.', ex2: 'Wer ist verantwortlich für diesen Fehler?', ex2En: 'Who is responsible for this mistake?', ex2Hi: 'Is galti ke liye kaun zimmedaar hai?' },
    { de: 'unzulässig nach', pos: 'adjective + Präp. (Dat.)', level: 'C2', register: 'legal', gov: 'nach + Dat.', en: 'inadmissible according to', hi: 'अस्वीकार्य', synonyms: 'unrechtmäßig nach', antonyms: 'zulässig nach', ex: 'Der Beweis ist unzulässig nach geltendem Recht.', exEn: 'The evidence is inadmissible according to current law.', exHi: 'Saboot maujuda kaanoon ke anusaar asveekaarya hai.', ex2: 'Diese Klausel ist unzulässig nach europäischem Recht.', ex2En: 'This clause is inadmissible according to European law.', ex2Hi: 'Yeh clause European kaanoon ke anusaar asveekaarya hai.' }
  ],
  grammar: [
    { title: 'Warum Adjektive Ergänzungen brauchen (Why Adjectives Need Complements)', body: [ 'Adjective → Meaning → Missing Information → Complement → Complete Message. "Er ist bereit" is incomplete; "Er ist bereit, die Verantwortung zu übernehmen" completes the meaning.' ], hinglish: 'Kuch adjectives akele adhoore lagte hain \u2014 <span class="de">Er ist bereit</span> sunkar sawaal uthta hai \u201ckis cheez ke liye?\u201d Woh missing hissa complement kehlaata hai: <span class="de">Er ist bereit, die Verantwortung zu \u00fcbernehmen.</span> Aur yeh marzi ki baat nahi hai \u2014 har adjective apna khaas complement maangta hai.' },
    { title: 'Arten von Ergänzungen (Types of Complements)', body: [ 'Adjective → Prepositional Complement → Case Complement → Infinitive Complement → Dass-Clause → Comparative Complement. Each complement type carries a different semantic and stylistic function.' ], hinglish: 'Paanch tarah ke complements hote hain. Sabse aam <b>preposition</b> wala hai (<span class="de">abh\u00e4ngig von</span>). Kuch adjectives bina preposition ke seedha <b>case</b> lete hain (<span class="de">des Problems bewusst</span>). Kuch <b>zu</b>-infinitive lete hain (<span class="de">bereit zu helfen</span>), kuch <b>dass</b>-clause (<span class="de">sicher, dass \u2026</span>), aur kuch comparison (<span class="de">vergleichbar mit</span>). Har type ka kaam alag hai, isliye inhe badla nahi jaa sakta.' },
    { title: 'Infinitiv-Ergänzungen (Infinitive Complements)', body: [ 'bereit zu, fähig zu, entschlossen zu, gewillt zu, verpflichtet zu. These attract a zu-infinitive, expressing readiness, capability, determination, willingness, or obligation.' ], hinglish: 'Yeh adjectives apne saath <b>zu</b>-infinitive laate hain: <b>bereit</b> (taiyaar), <b>f\u00e4hig</b> (kaabil), <b>entschlossen</b> (thaan liya), <b>gewillt</b> (raazi), <b>verpflichtet</b> (baadhya). Structure yeh hai \u2014 adjective, phir comma, phir clause jiske end mein <b>zu</b> + Infinitiv aata hai. Aur separable verb ho to <b>zu</b> word ke andar chala jaata hai: <span class="de">einzuhalten</span>.' },
    { title: 'Dass-Satz-Ergänzungen (Dass-Clause Complements)', body: [ 'sicher, dass...; überzeugt, dass...; wahrscheinlich, dass...; erstaunt, dass...; bewusst, dass.... These express factual certainty and speaker attitude toward a proposition.' ], hinglish: 'Yeh adjectives <b>dass</b>-clause lete hain, aur yeh batate hain ki bolne wala kitna yakeen rakhta hai ya kya mehsoos karta hai \u2014 <b>sicher</b>, <b>\u00fcberzeugt</b>, <b>erstaunt</b>, <b>bewusst</b>. Dass-clause mein verb <b>end</b> mein jaata hai. Aur zu-infinitive ke saath farak yaad rakho: dono hisson ka subject ek ho to zu-infinitive, aur alag ho to dass-clause.' },
    { title: 'Register-spezifische Ergänzungen (Register-Specific Complements)', body: [ 'Har register ke apne jodi-set hain, aur inhe jodi ki tarah yaad karna padta hai \u2014 adjective akela yaad karne se preposition guess karni padegi. Academic mein <b>relevant f\u00fcr</b>, <b>abh\u00e4ngig von</b>, <b>vereinbar mit</b>. Scientific mein <b>geeignet f\u00fcr</b>, <b>konsistent mit</b>, <b>repr\u00e4sentativ f\u00fcr</b>. Aur official documents mein <b>zust\u00e4ndig f\u00fcr</b>, <b>berechtigt zu</b>, <b>verpflichtet zu</b>. Dhyaan do ki <b>f\u00fcr</b> Akkusativ leta hai aur <b>von</b>, <b>mit</b>, <b>zu</b> Dativ.' ], hinglish: 'Har register ke apne jodi-set hain, aur inhe jodi ki tarah yaad karna padta hai \u2014 adjective akela yaad karne se preposition guess karni padegi. Academic mein <b>relevant f\u00fcr</b>, <b>abh\u00e4ngig von</b>, <b>vereinbar mit</b>. Scientific mein <b>geeignet f\u00fcr</b>, <b>konsistent mit</b>, <b>repr\u00e4sentativ f\u00fcr</b>. Aur official documents mein <b>zust\u00e4ndig f\u00fcr</b>, <b>berechtigt zu</b>, <b>verpflichtet zu</b>. Dhyaan do ki <b>f\u00fcr</b> Akkusativ leta hai aur <b>von</b>, <b>mit</b>, <b>zu</b> Dativ.' },
    {
      title: 'Kasus und Komma \u2014 die Mechanik',
      body: [
        'The chapter lists which preposition each adjective takes, but a preposition also brings a case \u2014 and that is where the marks are lost.',
        'The table also names a \u201cCase Complement\u201d, so here it is: a handful of adjectives govern a bare Genitiv or Dativ with no preposition at all.'
      ],
      table: {
        head: ['Pattern', 'Case', 'Example'],
        rows: [
          ['abh\u00e4ngig <b>von</b>, vereinbar <b>mit</b>, vergleichbar <b>mit</b>', 'Dativ', '<span class="de">abh\u00e4ngig von <b>seinen</b> Eltern</span>'],
          ['relevant <b>f\u00fcr</b>, zust\u00e4ndig <b>f\u00fcr</b>, geeignet <b>f\u00fcr</b>', 'Akkusativ', '<span class="de">zust\u00e4ndig f\u00fcr <b>den</b> Antrag</span>'],
          ['verpflichtet <b>zu</b>, berechtigt <b>zu</b>', 'Dativ', '<span class="de">berechtigt zu <b>der</b> Ma\u00dfnahme</span>'],
          ['bewusst, w\u00fcrdig (no preposition)', '<b>Genitiv</b>', '<span class="de">sich <b>des Problems</b> bewusst</span>'],
          ['zu-infinitive complement', 'comma + <b>zu</b>', '<span class="de">bereit, die Aufgabe <b>zu</b> \u00fcbernehmen</span>'],
          ['dass-clause complement', 'comma, verb <b>last</b>', '<span class="de">sicher, dass es funktioniert<b>.</b></span>']
        ]
      },
      note: 'Choosing between the two clause types: same subject in both halves \u2192 <b>zu</b>-infinitive. Different subject \u2192 <b>dass</b>-clause. <span class="de">Er ist bereit, zu helfen</span> but <span class="de">Er ist sicher, dass sie hilft</span>.',
      hinglish: 'Chapter batata hai ki kaunsa adjective kaunsa preposition leta hai \u2014 par preposition apne saath <b>case</b> bhi laata hai, aur marks wahin katte hain. <b>von</b>, <b>mit</b> aur <b>zu</b> Dativ lete hain, aur <b>f\u00fcr</b> Akkusativ. Isliye <span class="de">abh\u00e4ngig von <b>seinen</b> Eltern</span> par <span class="de">zust\u00e4ndig f\u00fcr <b>den</b> Antrag</span>. Table mein \u201cCase Complement\u201d ka naam bhi aata hai, to woh yeh hai \u2014 kuch adjectives bina kisi preposition ke seedha <b>Genitiv</b> lete hain: <span class="de">sich des Problems bewusst</span>. Aur clause chunne ka rule simple hai: dono hisson ka subject ek hi ho to <b>zu</b>-infinitive, aur alag ho to <b>dass</b>-clause \u2014 <span class="de">Er ist bereit, zu helfen</span> par <span class="de">Er ist sicher, dass sie hilft</span>. Dono mein comma lagta hai, aur dass-clause mein verb end mein jaata hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Complement type mapped to its main function and preferred register.' ], table: { head: ['Complement Type', 'Main Function', 'Preferred Register'], rows: [ ['Prepositional', 'Lexical Relationship', 'General'], ['Case Complement', 'Formal Precision', 'Literary'], ['Zu-Infinitive', 'Purpose / Readiness', 'Professional'], ['Dass-Clause', 'Evaluation / Certainty', 'Academic'], ['Comparative Complement', 'Contrast & Precision', 'Scientific'] ] }, hinglish: 'Complement type, function aur register ka table \u2014 par type chunne ke baad case aur comma zaroor check karo, kyunki asli galtiyan wahin hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are the case or comma the complement demands; two pick the wrong preposition or clause type. Note that knowing the right preposition is only half of it \u2014 the case has to follow.' ], mistakes: [
      { wrong: 'Er ist abh\u00e4ngig auf seine Eltern.', right: 'Er ist abh\u00e4ngig von seinen Eltern.', why: 'English \u201cdependent on\u201d does not transfer \u2014 <b>abh\u00e4ngig</b> takes <b>von</b> + Dativ, so the ending changes too.' },
      { wrong: 'Die Methode ist vergleichbar zu dem alten Verfahren.', right: 'Die Methode ist vergleichbar mit dem alten Verfahren.', why: '<b>vergleichbar</b> governs <b>mit</b> + Dativ. The related noun <i>im Vergleich</i> takes <b>zu</b> \u2014 which is what makes this pair confusing.' },
      { wrong: 'Er ist bereit, dass er die Verantwortung \u00fcbernimmt.', right: 'Er ist bereit, die Verantwortung zu \u00fcbernehmen.', why: 'When the subject is the same in both halves, <b>bereit</b> takes a <b>zu</b>-infinitive. A dass-clause is only needed when the second subject differs.' },
      { wrong: 'Ich bin mir das Problem bewusst.', right: 'Ich bin mir des Problems bewusst.', why: '<b>bewusst</b> takes the <b>Genitiv</b> \u2014 one of the few adjectives that still does, alongside <i>w\u00fcrdig</i> and <i>f\u00e4hig</i> in formal use.' },
      { wrong: 'Er ist verpflichtet die Frist einzuhalten.', right: 'Er ist verpflichtet, die Frist einzuhalten.', why: 'A comma separates the adjective from its zu-infinitive clause \u2014 and with a separable verb the <b>zu</b> goes inside: <i>ein<b>zu</b>halten</i>.' },
      { wrong: 'Die Beh\u00f6rde ist zust\u00e4ndig f\u00fcr dem Antrag.', right: 'Die Beh\u00f6rde ist zust\u00e4ndig f\u00fcr den Antrag.', why: '<b>f\u00fcr</b> always takes the Akkusativ, so it is <b>den</b> \u2014 knowing the preposition is only half the job; the case has to follow.' }
    ], hinglish: 'Chaar galtiyan case ya comma ki hain, aur do mein galat preposition ya galat clause type chun liya gaya hai. Yaad rakho \u2014 sahi preposition jaan lena aadha kaam hai; uske baad case bhi sahi lagana padta hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Choose an adjective. Is the meaning complete? If not, which complement is required — preposition, case, infinitive, or dass-clause? Choose the structure that best matches the register and intended meaning.' ], note: 'Memory trick: imagine every adjective is a magnet. Some magnets attract a preposition. Some attract an infinitive. Some attract a dass-clause. Some attract a case-marked noun. Without the correct companion, the adjective feels incomplete. Native speakers instinctively know which complement each adjective attracts.', hinglish: 'Adjective likhne ke baad khud se poochho \u2014 kya baat poori hui, ya kuch chhoot raha hai? Agar chhoot raha hai to tay karo ki complement kaunsa hai: preposition, seedha case, <b>zu</b>-infinitive, ya <b>dass</b>-clause. Aur uske baad do cheezein check karo \u2014 preposition ke hisaab se case sahi hai, aur clause se pehle comma laga hai?' }
  ],
  reading: {
    title: 'Fachzeitschrift: Neue Batterietechnologie überzeugt Experten',
    titleEn: 'Reading A — Journal: new battery technology convinces experts',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb (Präsens)' },
      { w: 'konsistent', role: 'r-ergaenzungs-magnet', en: 'consistent (adjective attracting the "mit" complement)', hi: '(complement magnet)', type: 'Adjective' },
      { w: 'mit', role: 'r-ergaenzungs-magnet', en: 'with (the governed preposition, part of the "konsistent mit" complement pattern)', hi: '(governed preposition)', type: 'Präposition · Dat.', why: '"konsistent" governs "mit + Dativ" — the adjective "attracts" this specific preposition, not another.' },
      { w: 'früheren', role: 'plain', en: 'earlier', hi: 'पहले के', type: 'Adjective · Dat.' },
      { w: 'Prototypen', role: 'plain', en: 'prototypes (Satzende)', hi: 'प्रोटोटाइप (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ingenieure', role: 'plain', en: 'engineers', hi: 'इंजीनियर', type: 'Noun · plural' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb (Präsens)' },
      { w: 'überzeugt,', role: 'r-ergaenzungs-magnet', en: 'convinced, (adjective attracting a dass-clause complement)', hi: '(complement magnet)', type: 'Adjective' },
      { w: 'dass', role: 'r-ergaenzungs-magnet', en: 'that (part of the dass-clause complement pattern)', hi: '(dass-clause)', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Technologie', role: 'plain', en: 'technology', hi: 'तकनीक', type: 'Noun · fem.' },
      { w: 'serienreif', role: 'plain', en: 'ready for series production (Satzende)', hi: 'उत्पादन के लिए तैयार (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The results are consistent with earlier prototypes. The engineers are convinced that the technology is ready for series production.',
    comprehension: [
      { q: 'Welche Präposition regiert "konsistent"?', options: ['mit + Dativ', 'für + Akkusativ', 'an + Dativ'], answer: 0 },
      { q: 'Welchen Ergänzungstyp verlangt "überzeugt"?', options: ['dass-Satz', 'zu-Infinitiv', 'Präposition allein'], answer: 0 },
      { q: 'Warum ist "Die Ergebnisse sind konsistent" allein unvollständig?', options: ['Weil "konsistent" eine Ergänzung ("mit + Dativ") verlangt, um die Bedeutung zu vervollständigen', 'Weil das Adjektiv grammatisch falsch ist', 'Aus Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Rechtsgutachten', titleEn: 'Reading C — Legal opinion',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Mieter', role: 'plain', en: 'tenant', hi: 'kiraayedaar', type: 'Noun · masc.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'hai', type: 'Verb (Präsens)' },
      { w: 'verpflichtet,', role: 'r-ergaenzungs-magnet', en: 'obligated, (adjective attracting a zu-infinitive complement)', hi: '(complement magnet)', type: 'Adjective' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Miete', role: 'plain', en: 'rent', hi: 'kiraaya', type: 'Noun · fem. · Akk.' },
      { w: 'fristgerecht', role: 'plain', en: 'on time', hi: 'samay par', type: 'Adjective/Adverb' },
      { w: 'zu', role: 'r-ergaenzungs-magnet', en: 'to (part of the zu-infinitive complement)', hi: '(complement ka hissa)', type: 'Partikel (zu-Infinitiv)' },
      { w: 'zahlen', role: 'r-ergaenzungs-magnet', en: 'pay (Satzende, completing the complement)', hi: '(Satzende, complement complete)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The tenant is obligated to pay the rent on time.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_019_L001', speaker: 'Elfriede', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich bin wirklich bereit für eine Einigung, wenn beide Seiten nachgeben.', en: 'Timo, I\'m really ready for an agreement if both sides give ground.' },
      { id: 'C2_019_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Bist du auch fähig zu einem echten Kompromiss, oder nur zum Nachgeben in Kleinigkeiten?', en: 'Are you also capable of a real compromise, or only of giving in on small things?' },
      { id: 'C2_019_L003', speaker: 'Elfriede', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich bin entschlossen, den entscheidenden Schritt zu gehen, wenn es sein muss.', en: 'I\'m determined to take the decisive step, if it must be.' },
      { id: 'C2_019_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann sind wir bereit für das Gespräch morgen, ohne falsche Erwartungen.', en: 'Then we\'re ready for the conversation tomorrow, without false expectations.' }
    ],
    transcript: 'Timo, ich bin wirklich bereit für eine Einigung, wenn beide Seiten nachgeben. Bist du auch fähig zu einem echten Kompromiss, oder nur zum Nachgeben in Kleinigkeiten? Ich bin entschlossen, den entscheidenden Schritt zu gehen, wenn es sein muss. Dann sind wir bereit für das Gespräch morgen, ohne falsche Erwartungen.',
    translation: 'Timo, I\'m really ready for an agreement if both sides give ground. Are you also capable of a real compromise, or only of giving in on small things? I\'m determined to take the decisive step, if it must be. Then we\'re ready for the conversation tomorrow, without false expectations.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'wirklich' },
      { w: 'bereit' },
      { w: 'für' },
      { w: 'eine' },
      { w: 'Einigung' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'beide' },
      { w: 'Seiten' },
      { w: 'nachgeben' },
      { w: '.', plain: true },
      { w: 'Bist' },
      { w: 'du' },
      { w: 'auch' },
      { w: 'fähig' },
      { w: 'zu' },
      { w: 'einem' },
      { w: 'echten' },
      { w: 'Kompromiss' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: 'nur' },
      { w: 'zum' },
      { w: 'Nachgeben' },
      { w: 'in' },
      { w: 'Kleinigkeiten' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'bin' },
      { w: 'entschlossen' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'entscheidenden' },
      { w: 'Schritt' },
      { w: 'zu' },
      { w: 'gehen' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'es' },
      { w: 'sein' },
      { w: 'muss' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'sind' },
      { w: 'wir' },
      { w: 'bereit' },
      { w: 'für' },
      { w: 'das' },
      { w: 'Gespräch' },
      { w: 'morgen' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'falsche' },
      { w: 'Erwartungen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Zu was ist Elfriede bereit?', qEn: 'What is Elfriede ready for?', options: ['einen Streit', 'eine Einigung', 'eine Kündigung', 'einen Vertrag'], optionsEn: ['an argument', 'an agreement', 'a resignation', 'a contract'], answer: 1,
        explain: '"Ich bin wirklich bereit für eine Einigung."' },
      { q: 'Wozu ist Elfriede entschlossen?', qEn: 'What is Elfriede determined to do?', options: ['aufgeben', 'den entscheidenden Schritt gehen', 'warten', 'nichts ändern'], optionsEn: ['give up', 'take the decisive step', 'wait', 'change nothing'], answer: 1,
        explain: '"Ich bin entschlossen, den entscheidenden Schritt zu gehen."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, ob du zu einem echten Kompromiss fähig bist.", taskEn: "Timo asks whether you're capable of a real compromise.", de: "Ich bin fähig zu einem echten Kompromiss, wenn beide Seiten nachgeben.", en: "I'm capable of a real compromise if both sides give ground." },
    { task: "Sag in der Verhandlung, wozu du entschlossen bist.", taskEn: "Say in the negotiation what you're determined to do.", de: "Ich bin entschlossen zu einer Einigung und verpflichtet zur Vertraulichkeit.", en: "I'm determined to reach an agreement and obliged to confidentiality." },
    { task: "Der Gutachter zweifelt an deinem Befund. Antworte klar.", taskEn: "The reviewer doubts your finding. Answer clearly.", de: "Ich bin überzeugt, dass der Effekt bestehen bleibt, und mir ist bewusst, dass die Stichprobe klein ist.", en: "I'm convinced the effect persists, and I'm aware the sample is small." },
    { task: "Ein Gutachter fragt, wovon dein Ergebnis abhängt.", taskEn: "A reviewer asks what your result depends on.", de: "Das Ergebnis ist abhängig von der Erhebung und empfindlich gegenüber Ausfällen.", en: "The result depends on the survey and is sensitive to dropouts." },
    { task: "Ein Doktorand liefert eine halbe Phrase. Vervollständige sie.", taskEn: "A doctoral student gives half a phrase. Complete it.", de: "Vergleichbar verlangt mit: vergleichbar mit den Daten von 2019.", en: "'Vergleichbar' requires 'mit': comparable with the 2019 data." }
  ],
  writing: {
    prompt: 'TASK 1 — Complement upgrade (150 words): Rewrite adjective phrases using more appropriate complement structures. Explain every improvement.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving adjective valency and complement selection. Explain every decision.\n\nTASK 3 — Essay (650 words): Write a C2 academic discussion naturally integrating sophisticated adjective complementation across academic, scientific, legal, and administrative registers.',
    starters: ['Die Ergebnisse sind konsistent mit...', 'Wir sind überzeugt, dass...', 'Das System ist bereit, ...zu...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Adjektiv-Ergänzungen und Valenz...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which complement pattern correctly completes "Der Mieter ist verpflichtet..."?', options: ['die Miete zu zahlen', 'dass er die Miete zahlt', 'für die Miete'], answer: 0, explain: '"verpflichtet" attracts a zu-infinitive complement, expressing obligation to perform an action.' },
    gap: { sentence: ['Die Ergebnisse sind konsistent ', ' früheren Studien.'], gaps: [ { answer: 'mit', accepts: ['mit'] } ], explain: '"konsistent" governs "mit + Dativ" as its fixed prepositional complement.' },
    match: { q: 'Match each adjective to its complement type.', pairs: [ { noun: 'bereit', art: 'zu + Infinitiv' }, { noun: 'überzeugt', art: 'dass-Satz' }, { noun: 'abhängig', art: 'von + Dativ' }, { noun: 'zuständig', art: 'für + Akkusativ' } ] },
    builder: { target: 'Build: "He is ready to take on the responsibility." (zu-infinitive complement)', bank: ['Er', 'ist', 'bereit', ',', 'die', 'Verantwortung', 'zu', 'übernehmen', '.'], answer: ['Er', 'ist', 'bereit', ',', 'die', 'Verantwortung', 'zu', 'übernehmen', '.'], roles: { 'bereit': 'r-ergaenzungs-magnet', 'zu': 'r-ergaenzungs-magnet', 'übernehmen': 'r-ergaenzungs-magnet' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie ist relevant von der Praxis, und wir sind sicher zu, dass sie erfolgreich ist.', right: 'Die Studie ist relevant für die Praxis, und wir sind sicher, dass sie erfolgreich ist.', explain: '"relevant" governs "für + Akkusativ", not "von"; and "sicher, dass" takes a dass-clause directly, without an inserted "zu".' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for adjective complementation in this chapter?', options: ['Every adjective is a magnet that attracts its own specific complement', 'All adjectives can take any complement interchangeably', 'Adjectives never need complements at C2 level'], answer: 0, explain: 'Some adjectives attract a preposition, some an infinitive, some a dass-clause — each has its own "magnetic" pull.' },
    { q: 'What complement type does "bereit" typically attract?', options: ['zu + Infinitiv', 'dass-Satz only', 'Genitiv allein'], answer: 0, explain: '"bereit zu" + infinitive expresses readiness to perform an action.' },
    { q: 'Which best distinguishes a dass-clause complement from a zu-infinitive complement?', options: ['Dass-clauses express certainty/evaluation of a fact; zu-infinitives express purpose/readiness for an action', 'They are always interchangeable', 'Dass-clauses are only used in legal German'], answer: 0, explain: '"sicher, dass..." evaluates a proposition; "bereit, zu..." expresses readiness for an action.' },
    { q: 'What is a classic C2-level mistake with adjective complements?', options: ['Using the wrong preposition for a specific adjective', 'Never using any complement', 'Only using dass-clauses'], answer: 0, explain: 'Adjective + preposition combinations are fixed; substituting a different preposition is a common learner error.' },
    { q: 'What is the real C2-level skill this chapter teaches?', options: ['Choosing the correct complement pattern to complete an adjective\'s meaning precisely', 'Memorizing new adjective vocabulary', 'Learning adjective endings and declension'], answer: 0, explain: 'At C2, the complement of an adjective is often more important for precision than the adjective itself.' }
  ],
  takeaways: [
    { c: 'r-magnet-metapher', html: 'Every adjective is a magnet — it attracts its own specific complement to feel complete.' },
    { c: 'r-ergaenzungs-magnet', html: 'Zu-infinitives (bereit zu), dass-clauses (sicher, dass), and prepositions (abhängig von) each serve a distinct semantic function.' },
    { c: 'r-ergaenzungs-magnet', html: 'Register shapes complement choice: academic favors dass-clauses and für/von, legal favors zu-infinitives and für/nach.' },
    { c: 'r-ergaenzungs-magnet', html: 'C2 mastery means the complement often carries more precision than the adjective itself.' }
  ],
  revisionTips: [
    'Take five common C2 adjectives and write out their fixed complement patterns (preposition + case, or zu-infinitive, or dass-clause).',
    'Read one academic abstract and underline every adjective + complement pair, labeling the complement type.',
    'Rewrite one incomplete adjective phrase (e.g. "Er ist bereit.") by adding the natural complement it "attracts."'
  ]
};
window.CHAPTER = CHAPTER;
