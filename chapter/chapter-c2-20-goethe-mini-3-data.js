/* KLARWEG CHAPTER DATA — C2 · Chapter 20
   GOETHE MINI 3 — revision-only checkpoint covering Chapters 1-19.
   NO NEW GRAMMAR, NO NEW VOCABULARY. Integrates: Zeitformen, Präfixverben,
   Ergänzungen, Nomen-Verb-Verbindungen, Konjunktiv I/II, Modalverben,
   Diskursmarker, Relativsätze, Passiv/Passiversatzformen, Partizipien als
   Adjektive, Nominalisierte Adjektive, Adjektivdeklination, Stilistische
   Nuancen, Adjektive mit Ergänzungen — across academic/scientific/legal/
   administrative/journalistic/literary registers. Dialogue: Anna & Rohan only. */
const CHAPTER = {
  id: 'c2-20-goethe-mini-3',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 20,
  title: 'Goethe Mini 3',
  titleEn: 'Checkpoint — Chapters 1–19 integrated',
  description: 'Every grammar topic is an instrument. Knowing each one is not enough — at C2, your job is to conduct the entire orchestra so every part works together naturally.',
  xp: 1700, time: 180, difficulty: 'Checkpoint',
  nextChapter: { number: 21, title: 'Wortbildung der Adjektive', titleEn: 'Word formation: adjectives' , href: 'chapter-c2-21-wortbildung-der-adjektive.html' },
  prevChapter: { number: 19, title: 'Adjektive mit Ergänzungen', titleEn: 'Adjectives with complements', href: 'chapter-c2-19-adjektive-mit-ergaenzungen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Goethe Mini 3 · Integrated revision',
    headline: 'Conduct the <em>whole orchestra</em> — not just one instrument.',
    intro: 'Revising a research publication meant to become an article, a report, and a conference talk, Kordula notices Timo\'s nominalization has improved, though participial attributes still challenge him — conducting the whole grammar orchestra from Chapters 1–19 at once.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'A full Goethe-style integrated checkpoint across tenses, prefix verbs, valency, Konjunktiv, passive, and the entire adjective system'],
    scene: 'Überarbeitung einer mehrsprachigen Forschungspublikation',
    femaleSpeakers: ['Kordula'],
    dialogue: [
      { speaker: 'Kordula', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Nominalisierung', role: 'r-subject', en: 'nominalization', hi: 'संज्ञाकरण', pron: 'no-mi-na-li-ZEE-rung', type: 'Noun · fem.' },
        { w: 'gelingt', role: 'r-verb', en: 'succeeds', hi: 'सफल होती है', pron: 'ge-LINKT', type: 'Verb · gelingen' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'mittlerweile', role: 'r-akkusativ', en: 'by now', hi: 'अब तक', pron: 'MIT-ler-vy-luh', type: 'Adverb' },
        { w: 'sehr', role: 'r-akkusativ', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छे से', pron: 'goot', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'The nominalization succeeds for you very well by now.', hi: 'Ab tak sangyakaran tumhaare liye bahut achhi tarah se safal hota hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Register', role: 'r-akkusativ', en: 'register', hi: 'रजिस्टर', pron: 'ray-GIS-ter', type: 'Noun · neut.' },
        { w: 'wird', role: 'r-verb', en: 'becomes', hi: 'होता है', pron: 'virt', type: 'Verb · werden' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मेरे लिए', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'klarer', role: 'r-akkusativ', en: 'clearer', hi: 'ज़्यादा स्पष्ट', pron: 'KLAH-rer', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'Also the register becomes clearer for me.', hi: 'Register bhi mere liye zyaada spasht ho raha hai.' },
      { speaker: 'Kordula', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'fühlst', role: 'r-verb', en: 'do you feel', hi: 'महसूस करते हो', pron: 'FÜLST', type: 'Verb · fühlen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'yourself', hi: 'अपने आप को', pron: 'dikh', type: 'Reflexive pronoun' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'by', type: 'Preposition' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Partizipialattributen', role: 'r-dativ', en: 'participial attributes (dat.)', hi: 'कृदंत विशेषण के साथ', pron: 'par-ti-tsi-PYAHL-a-tri-boo-ten', type: 'Noun · plural dat.' },
        { w: '?', plain: true }
      ], en: 'How do you feel with the participial attributes?', hi: 'Kridant visheshan ke saath tumhe kaisa mahsoos hota hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ehrlich', role: 'r-akkusativ', en: 'honestly', hi: 'ईमानदारी से', pron: 'AIR-likh', type: 'Adverb' },
        { w: ',', plain: true },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'ये', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'noch', role: 'r-akkusativ', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Herausforderung', role: 'r-akkusativ', en: 'challenge', hi: 'चुनौती', pron: 'he-ROWS-for-de-rung', type: 'Noun · fem. (recycled B1)' },
        { w: '.', plain: true }
      ], en: 'Honestly, they are still a challenge.', hi: 'Imaandaari se, ye abhi bhi ek chunauti hain.' },
      { speaker: 'Kordula', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'normal', role: 'r-akkusativ', en: 'normal', hi: 'सामान्य', pron: 'nor-MAHL', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'etwas', role: 'r-dativ', en: 'some', hi: 'थोड़े', pron: 'ET-vas', type: 'Determiner' },
        { w: 'Übung', role: 'r-dativ', en: 'practice (dat.)', hi: 'अभ्यास के साथ', pron: 'Ü-bung', type: 'Noun · fem. dat.' },
        { w: 'wird', role: 'r-verb', en: 'becomes', hi: 'होगा', pron: 'virt', type: 'Verb · werden' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'leichter', role: 'r-akkusativ', en: 'easier', hi: 'आसान', pron: 'LY-khter', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'That is normal. With some practice it becomes easier.', hi: 'Yeh saamaany hai. Thode abhyaas ke saath yeh aasaan ho jaayega.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Ermutigung', role: 'r-akkusativ', en: 'encouragement', hi: 'प्रोत्साहन', pron: 'air-MOO-ti-gung', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'Thanks for the encouragement.', hi: 'Protsaahan ke liye dhanyavaad.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'This is Goethe Mini 3: an integrated checkpoint testing whether you can <span class="de r-orchester-metapher">conduct the whole orchestra</span> of Chapters 1–19 together, not just play one instrument.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 3 — an integrated revision checkpoint covering ONLY Chapters 1-19 (Zeitformen, Präfixverben, Verbergänzungen/Valenz, Nomen-Verb-Verbindungen, Konjunktiv I & II, Modalverben, Diskursmarker, Relativsätze, Passiv, Passiversatzformen, Partizipien als Adjektive, Nominalisierte Adjektive/Partizipien, Adjektivdeklination auf C2-Niveau, Stilistische Nuancen & Register von Adjektiven, Adjektive mit Ergänzungen). NO new grammar or vocabulary should be introduced or expected beyond this scope. The learner\'s essay should demonstrate register control (academic/scientific/legal/administrative/journalistic/literary), stylistic maturity, adjective-system mastery (participial adjectives, nominalized adjectives, adjective declension in complex noun phrases, register-appropriate adjective/complement choice), Konjunktiv I for reported speech, Konjunktiv II for hypothesis/diplomacy, appropriate modal verb nuance, passive vs. passive-alternative choice, and discourse markers for cohesion. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag genuine grammar/register errors across ANY of the 19 integrated topics — inconsistent register mixing, wrong Konjunktiv choice, incorrect passive/alternative choice, poor adjective chain construction, mismatched adjective complement. Do NOT introduce new grammar concepts in your feedback — stay within the 19-chapter revision scope. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (naming which of the 19 chapters the issue relates to). If none: <li>No errors — well done.</li> 3) <p><b>Orchestra check:</b> one sentence on how well the learner integrates multiple grammar systems together, not just one at a time.</p> Keep under 140 words.',
  quizRecommendation: { high: 'Outstanding — you conduct the whole orchestra of Chapters 1–19 fluently. Ready for Chapter 21 and the final third of the course.', mid: 'Good integration overall. Revisit whichever Master Tables felt shakiest, then continue.', low: 'Worth revisiting the weakest chapters from 1–19 before moving on — this checkpoint exists so gaps surface now, not on exam day.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'international', role: 'r-integrations-pyramide' }, { w: 'anerkannten', role: 'r-integrations-pyramide' }, { w: 'Ergebnisse', role: 'plain' }, { w: 'überzeugen', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Goethe Mini 3 tests whether you can conduct the whole orchestra of Chapters 1–19 together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Kordula and Timo revise a publication across academic, legal, journalistic, and conference registers.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key revision vocabulary from Chapters 1–19 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Integrated review: tenses, prefix verbs, valency, nominal style, Konjunktiv I/II, modal verbs, discourse markers, relative clauses, passive/alternatives, and the full adjective system.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, scientific publication, supreme court commentary, and literary essay for integrated register and grammar.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify register, stylistic choices, and reporting language in a lecture, symposium, press conference, and radio feature.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Complete a full Goethe C2 speaking simulation across presentation, discussion, and diplomatic negotiation.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite across four registers and write a 700-word Goethe C2 argumentative essay integrating all 19 chapters.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete a comprehensive integrated review across every grammar and register topic from Chapters 1–19.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1700 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your Goethe C2 readiness dashboard before continuing to Chapter 21.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 1–19 with translations, register labels, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '20 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Integrated grammar review, register transformation drills, and the full 700-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '28 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The Integration Pyramid, Goethe Readiness Scale, and a consolidated reference across all 19 chapters.', pdfUrl: '/pdfs/grammar.pdf', size: '24 pages', kind: 'Grammar' },
    { icon: '📊', title: 'Progress Dashboard PDF', desc: 'Your C2 Progress Dashboard across Chapters 1–20, with strongest/weakest area analysis and a personalized study plan.', pdfUrl: '/pdfs/progress-dashboard.pdf', size: '6 pages', kind: 'Analytics' }
  ],
  outcomes: [
    { de: 'die international anerkannten, empirisch validierten Ergebnisse', text: 'Integrate participial adjectives, nominalization, and adjective declension in one noun phrase' },
    { de: 'die Forscherin erkläre, die Ergebnisse seien überraschend', text: 'Use Konjunktiv I for neutral, objective reported speech' },
    { de: 'Ein Dirigent, ein Orchester.', text: 'Understand the chapter\'s core "conducting the orchestra" integration metaphor' },
    { de: 'Register bestimmt jede Wahl.', text: 'Consistently match every grammar choice — tense, passive, adjective, discourse marker — to one target register' }
  ],
  vocab: [
    { de: 'die Zeitform', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'tense/verb form', hi: 'काल-रूप', synonyms: 'das Tempus', antonyms: null, ex: 'Die Wahl der Zeitform beeinflusst die Erzählperspektive.', exEn: 'The choice of tense influences the narrative perspective.', exHi: 'Zeitform ka chunaav narrative perspective ko prabhaavit karta hai.', ex2: 'In wissenschaftlichen Texten variiert die Zeitform je nach Kontext.', ex2En: 'In scientific texts, the tense varies depending on context.', ex2Hi: 'Vaigyaanik texts mein, zeitform context ke anusaar badalta hai.' },
    { de: 'das Präfixverb', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'prefix verb', hi: 'उपसर्ग-क्रिया', synonyms: null, antonyms: null, ex: 'Präfixverben verändern die Bedeutung des Grundverbs erheblich.', exEn: 'Prefix verbs change the meaning of the base verb considerably.', exHi: 'Prefix verbs base verb ke meaning ko kaafi badal dete hain.', ex2: 'Man muss die Semantik jedes Präfixverbs einzeln lernen.', ex2En: 'One must learn the semantics of each prefix verb individually.', ex2Hi: 'Har prefix verb ki semantics alag se seekhni hoti hai.' },
    { de: 'die Ergänzung', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'complement', hi: 'पूरक', synonyms: 'die Valenz', antonyms: null, ex: 'Jedes Verb verlangt bestimmte Ergänzungen.', exEn: 'Every verb requires certain complements.', exHi: 'Har verb ko kuch specific complements chahiye.', ex2: 'Die Ergänzung vervollständigt die Bedeutung des Verbs.', ex2En: 'The complement completes the meaning of the verb.', ex2Hi: 'Complement verb ke meaning ko poora karta hai.' },
    { de: 'die Nominalisierung', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'nominalization', hi: 'संज्ञाकरण', synonyms: null, antonyms: 'der Verbalstil', ex: 'Die Nominalisierung verleiht dem Text einen formellen Charakter.', exEn: 'Nominalization gives the text a formal character.', exHi: 'Nominalization text ko formal character deta hai.', ex2: 'Wissenschaftliche Texte nutzen häufig Nominalisierung.', ex2En: 'Scientific texts frequently use nominalization.', ex2Hi: 'Vaigyaanik texts aksar nominalization use karte hain.' },
    { de: 'der Konjunktiv I', pos: 'noun', level: 'C2', register: 'academic/journalism (revision)', en: 'Konjunktiv I (reported speech mood)', hi: 'कोंयुंक्तिव 1', synonyms: null, antonyms: 'der Konjunktiv II', ex: 'Der Konjunktiv I signalisiert neutrale, berichtete Information.', exEn: 'Konjunktiv I signals neutral, reported information.', exHi: 'Konjunktiv I neutral, reported information signal karta hai.', ex2: 'Journalisten verwenden den Konjunktiv I, um Objektivität zu wahren.', ex2En: 'Journalists use Konjunktiv I to maintain objectivity.', ex2Hi: 'Journalists objectivity banaaye rakhne ke liye Konjunktiv I use karte hain.' },
    { de: 'der Konjunktiv II', pos: 'noun', level: 'C2', register: 'academic/diplomatic (revision)', en: 'Konjunktiv II (hypothetical/diplomatic mood)', hi: 'कोंयुंक्तिव 2', synonyms: null, antonyms: 'der Konjunktiv I', ex: 'Der Konjunktiv II mildert eine direkte Aussage diplomatisch ab.', exEn: 'Konjunktiv II softens a direct statement diplomatically.', exHi: 'Konjunktiv II ek direct statement ko diplomatically kam karta hai.', ex2: 'In Hypothesen wird häufig der Konjunktiv II verwendet.', ex2En: 'Konjunktiv II is frequently used in hypotheses.', ex2Hi: 'Hypotheses mein aksar Konjunktiv II use hota hai.' },
    { de: 'der Diskursmarker', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'discourse marker', hi: 'प्रवचन चिह्नक', synonyms: null, antonyms: null, ex: 'Diskursmarker strukturieren die Argumentation eines Textes.', exEn: 'Discourse markers structure the argumentation of a text.', exHi: 'Discourse markers ek text ki argumentation ko structure karte hain.', ex2: 'Ohne Diskursmarker wirkt der Text unzusammenhängend.', ex2En: 'Without discourse markers, the text seems disjointed.', ex2Hi: 'Discourse markers ke bina, text disjointed lagta hai.' },
    { de: 'das Passiversatzform', pos: 'noun', level: 'C2', register: 'academic/legal (revision)', en: 'passive alternative construction', hi: 'निष्क्रिय विकल्प', synonyms: null, antonyms: 'das Passiv', ex: 'Passiversatzformen wie "sich lassen" klingen oft eleganter als das Passiv.', exEn: 'Passive alternatives like "sich lassen" often sound more elegant than the passive.', exHi: '"Sich lassen" jaisi passive alternatives aksar passive se zyaada elegant lagti hain.', ex2: 'Behörden bevorzugen Passiversatzformen wie "sein + zu".', ex2En: 'Authorities prefer passive alternatives like "sein + zu".', ex2Hi: 'Authorities "sein + zu" jaisi passive alternatives ko prefer karti hain.' },
    { de: 'das Partizipialattribut', pos: 'noun', level: 'C2', register: 'academic/scientific (revision)', en: 'participial attribute', hi: 'कृदंत विशेषण', synonyms: null, antonyms: null, ex: 'Das Partizipialattribut komprimiert einen Relativsatz zu einem Adjektiv.', exEn: 'The participial attribute compresses a relative clause into an adjective.', exHi: 'Participial attribute ek relative clause ko ek adjective mein compress karta hai.', ex2: 'Wissenschaftliche Texte nutzen häufig Partizipialattribute.', ex2En: 'Scientific texts frequently use participial attributes.', ex2Hi: 'Vaigyaanik texts aksar participial attributes use karte hain.' },
    { de: 'die Adjektivdeklination', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'adjective declension', hi: 'विशेषण विभक्ति', synonyms: null, antonyms: null, ex: 'Komplexe Nominalphrasen erfordern eine präzise Adjektivdeklination.', exEn: 'Complex noun phrases require precise adjective declension.', exHi: 'Complex noun phrases ko precise adjective declension chahiye.', ex2: 'Die Adjektivdeklination organisiert Information innerhalb der Nominalphrase.', ex2En: 'Adjective declension organizes information within the noun phrase.', ex2Hi: 'Adjective declension noun phrase ke andar information organize karta hai.' },
    { de: 'das Register', pos: 'noun', level: 'C2', register: 'academic (revision)', en: 'register (linguistic)', hi: 'रजिस्टर', synonyms: 'der Sprachstil', antonyms: null, ex: 'Das Register bestimmt, welche Adjektive und Konstruktionen passend sind.', exEn: 'The register determines which adjectives and constructions are appropriate.', exHi: 'Register decide karta hai ki kaunse adjectives aur constructions appropriate hain.', ex2: 'Ein Wechsel des Registers verändert die gesamte Wortwahl.', ex2En: 'A change of register alters the entire word choice.', ex2Hi: 'Register mein badlaav poori word choice ko badal deta hai.' }
  ],
  grammar: [
    { title: 'Integrations-Pyramide (Integration Pyramid)', body: [ 'Grammar → Sentence → Noun Phrase → Paragraph → Register → Style → Native-Level Communication. Every chapter from 1–19 is one layer of this pyramid; Goethe Mini 3 tests whether they all support each other.' ], hinglish: 'Yeh checkpoint alag-alag rules nahi poochhta \u2014 yeh dekhta hai ki Chapter 1 se 19 tak ki cheezein ek hi text mein saath chal rahi hain ya nahi. Isolated drills mein sab theek lagta hai; galtiyan tab dikhti hain jab ek sentence mein tense, passive, adjective endings aur register sab ek saath sambhaalne padte hain.' },
    { title: 'Verb-Systeme (Chapters 1–9): Zeitformen, Präfixe, Ergänzungen, Konjunktiv, Modalverben', body: [ 'Review: stylistic tense choice, prefix-verb semantic families, verb valency and complements, Konjunktiv I (reported speech) vs. Konjunktiv II (hypothesis/diplomacy), and epistemic modal verbs for certainty gradation.' ], hinglish: 'Verb wala hissa. Tense nazariya batata hai, sirf samay nahi. Prefix verbs family mein aate hain, aur separable hai ya nahi \u2014 usse Partizip II tay hota hai (<b>nachgewiesen</b> par <b>\u00fcbernommen</b>). Har verb apna complement aur case maangta hai. <b>Konjunktiv I</b> (<b>sei</b>) reported speech ke liye hai aur <b>Konjunktiv II</b> hypothesis ya politeness ke liye \u2014 par jahan Konjunktiv I ki form Indikativ jaisi ho jaaye, wahan Konjunktiv II lagta hai. Aur modals do kaam karte hain: majboori, ya andaaza.' },
    { title: 'Satzarchitektur (Chapters 10–14): Diskursmarker, Relativsätze, Passiv, Passiversatzformen', body: [ 'Review: cohesive discourse markers for logical flow, relative clause compression, active/passive perspective control, and passive alternatives (sein+zu, sich lassen, man) for register-appropriate style.' ], hinglish: 'Sentence-structure wala hissa. Discourse markers zyada-tar adverbs hain, isliye position 1 par aayein to verb turant baad aata hai aur comma nahi lagta. Relative clause mein pronoun ka gender comma se pehle wale noun se aata hai, par case us clause ke apne verb se. Aur passive mein: <b>wird</b> se kaam ho raha hai, <b>ist</b> se ho chuka hai, Perfekt mein <b>worden</b> \u2014 aur alternatives ke apne matlab hain, <b>sich lassen</b> sambhavna aur <b>sein + zu</b> zimmedaari.' },
    { title: 'Das Adjektiv-System (Chapters 15–19): Partizipien, Nominalisierung, Deklination, Register, Ergänzungen', body: [ 'Review: participial adjectives compress relative clauses; nominalized adjectives/participles create abstraction; complex noun phrases organize modifier hierarchy; register determines adjective selection; and adjectives "attract" specific complements (preposition, case, infinitive, dass-clause).' ], hinglish: 'Adjective wala hissa, aur yahan sab kuch endings par tika hai. Participial adjective ek folda hua relative clause hai, aur uspar normal adjective ki ending lagti hai. Nominalized adjective capital letter se likha jaata hai par decline hota rehta hai (<span class="de">der Betroffene</span>, <span class="de">dem Betroffenen</span>). Chain mein <b>har</b> adjective par wahi ending dohraani padti hai, par adverb par koi nahi. Aur har adjective apna complement laata hai \u2014 uske preposition ke saath sahi case bhi.' },
    { title: 'Meister-Tabelle: Integration', body: [ 'Each system mapped to its integration role in native-level C2 communication.' ], table: { head: ['System', 'Chapters', 'Integration Role'], rows: [ ['Zeitformen & Modalität', '1, 6-8', 'Perspective and certainty'], ['Verb-Struktur', '2-4', 'Precision and formality'], ['Satzverknüpfung', '10-13', 'Cohesion and information focus'], ['Adjektiv-System', '15-19', 'Compression, abstraction, register precision'] ] }, hinglish: 'Chaar systems ka table \u2014 par revision karte waqt sirf topic mat dekho, har system ki sabse aam galti bhi yaad karo, kyunki exam mein wahi pakdi jaati hai.' },
    { title: 'Typische Integrationsfehler (common integration mistakes)', body: [ 'Each of these breaks two rules from two different chapters at once \u2014 which is exactly how errors appear once several systems run in one sentence. The chapter reference in each explanation tells you where to revise.' ], mistakes: [
      { wrong: 'Die empirisch validierte Studie ist echt gut, und die Daten sind ausgewertet geworden.', right: 'Die empirisch validierte Studie ist \u00fcberzeugend, und die Daten sind ausgewertet worden.', why: 'Two systems fail at once: <i>echt gut</i> breaks the scientific register (Ch.18), and the passive Perfekt takes <b>worden</b>, never <i>geworden</i> (Ch.12).' },
      { wrong: 'Laut dem Bericht w\u00fcrde die Lage stabil sein, und die Kosten sind gesunken.', right: 'Laut dem Bericht sei die Lage stabil, und die Kosten seien gesunken.', why: 'Neutral reporting takes Konjunktiv I (<b>sei</b>) \u2014 <i>w\u00fcrde</i> makes it hypothetical. And once in reported mode every verb stays there, so <b>seien</b> too (Ch.7).' },
      { wrong: 'Das Problem l\u00e4sst sich gel\u00f6st werden, und die Frist ist einhalten.', right: 'Das Problem l\u00e4sst sich l\u00f6sen, und die Frist ist einzuhalten.', why: '<b>sich lassen</b> takes a plain infinitive, and <b>sein + zu</b> needs the <b>zu</b> inside the separable verb \u2014 <i>ein<b>zu</b>halten</i> (Ch.13).' },
      { wrong: 'Die k\u00fcrzlich ver\u00f6ffentlichte wissenschaftliche Ergebnisse zeigen, dass die betroffenen informiert wurden.', right: 'Die k\u00fcrzlich ver\u00f6ffentlichten wissenschaftlichen Ergebnisse zeigen, dass die Betroffenen informiert wurden.', why: 'Two adjective-system rules: every adjective in a chain repeats the same ending (Ch.17), and a nominalized adjective is capitalised \u2014 <b>die Betroffenen</b> (Ch.16).' }
    ], hinglish: 'Har galti mein do alag chapters ke rules ek saath toot rahe hain \u2014 asli writing mein galtiyan aise hi aati hain. Har explanation ke saath chapter number diya hai, isliye jahan sochna pade wahan seedha us chapter par jao.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Identify your target register first. Then check: does my tense, my passive/alternative choice, my adjective density, and my Konjunktiv match that register consistently throughout?' ], note: 'Memory trick: imagine you are a concert conductor. Every grammar topic is an instrument — tenses, participles, nominalizations, adjective chains, register, discourse markers, reporting language. Knowing each instrument is not enough. At C2, your job is to conduct the entire orchestra so every part works together naturally.', hinglish: 'Pehle tay karo ki text kis register ka hai. Uske baad chaar cheezein poore text mein check karo \u2014 tense, passive ka choice, adjective endings, aur reported speech ka mood. Ek jagah bhi register phisal jaaye to poora text ajeeb lagta hai.' }
  ],
  reading: {
    title: 'Fachjournal: Studie zu Mikroplastik in Trinkwasser',
    titleEn: 'Reading A — Journal: study on microplastics in drinking water',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'kürzlich', role: 'r-integrations-pyramide', en: 'recently (adverb, part of an integrated academic adjective chain)', hi: '(integrated chain)', type: 'Adverb' },
      { w: 'veröffentlichten', role: 'r-integrations-pyramide', en: 'published (Partizip II als Adjektiv)', hi: 'प्रकाशित', type: 'Partizip II als Adjektiv' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'seien', role: 'r-orchester-metapher', en: 'were (Konjunktiv I, neutral reported speech, Satzende)', hi: '(Satzende, Konjunktiv I)', type: 'Verb · sein (Konjunktiv I, Satzende)', why: 'This sentence combines a layered participial adjective chain with Konjunktiv I for neutral, reported information.' },
      { w: ',', plain: true },
      { w: 'so', role: 'plain', en: 'as', hi: 'जैसा', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Autorin,', role: 'plain', en: 'the author, (Satzende)', hi: 'लेखिका (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'alarmierend', role: 'r-integrations-pyramide', en: 'alarming (register-precise adjective, Satzende)', hi: 'चिंताजनक (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The recently published results were, according to the author, alarming.',
    comprehension: [
      { q: 'Welche zwei Konzepte kombiniert dieser Satz gleichzeitig?', options: ['Partizip als Adjektivkette und Konjunktiv I', 'Nur Passiv', 'Nur Konjunktiv II'], answer: 0 },
      { q: 'Warum wird "alarmierend" gewählt?', options: ['Weil es dem akademischen Register entspricht und präzise ist', 'Aus Zufall', 'Weil es grammatisch die einzig mögliche Wahl ist'], answer: 0 },
      { q: 'Was signalisiert "seien" hier?', options: ['Neutrale, berichtete Information (Konjunktiv I)', 'Eine Hypothese (Konjunktiv II)', 'Eine direkte, bestätigte Tatsache'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Kommentar des Obersten Gerichtshofs', titleEn: 'Reading C — Supreme court legal commentary',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'rechtskräftig', role: 'r-integrations-pyramide', en: 'legally (adverb, integrating Chapter 17\'s legal-register adjective chains)', hi: '(Chapter 17 integration)', type: 'Adverb' },
      { w: 'festgestellten', role: 'r-integrations-pyramide', en: 'established (Partizip II als Adjektiv, Satzende)', hi: '(Satzende)', type: 'Partizip II als Adjektiv (Satzende)' },
      { w: 'Tatsachen', role: 'plain', en: 'facts (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'hain', type: 'Verb (Präsens)' },
      { w: 'bindend', role: 'plain', en: 'binding (Satzende)', hi: '(Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The legally established facts are binding.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_020_L001', speaker: 'Kordula', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dein Nominalstil im letzten Entwurf ist wirklich besser geworden.', en: 'Timo, your nominal style in the last draft has really improved.' },
      { id: 'C2_020_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Danke, aber die Partizipialattribute machen mir immer noch Schwierigkeiten.', en: 'Thanks, but the participial attributes still give me trouble.' },
      { id: 'C2_020_L003', speaker: 'Kordula', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Welchen Satz meinst du genau? Zeig mir eine Stelle.', en: 'Which sentence do you mean exactly? Show me a spot.' },
      { id: 'C2_020_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Diesen hier — ich weiß nicht, ob "die zunehmend diskutierte Frage" richtig gebildet ist.', en: 'This one here — I don\'t know if "the increasingly discussed question" is formed correctly.' }
    ],
    transcript: 'Timo, dein Nominalstil im letzten Entwurf ist wirklich besser geworden. Danke, aber die Partizipialattribute machen mir immer noch Schwierigkeiten. Welchen Satz meinst du genau? Zeig mir eine Stelle. Diesen hier — ich weiß nicht, ob "die zunehmend diskutierte Frage" richtig gebildet ist.',
    translation: 'Timo, your nominal style in the last draft has really improved. Thanks, but the participial attributes still give me trouble. Which sentence do you mean exactly? Show me a spot. This one here — I don\'t know if "the increasingly discussed question" is formed correctly.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dein' },
      { w: 'Nominalstil' },
      { w: 'im' },
      { w: 'letzten' },
      { w: 'Entwurf' },
      { w: 'ist' },
      { w: 'wirklich' },
      { w: 'besser' },
      { w: 'geworden' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Partizipialattribute' },
      { w: 'machen' },
      { w: 'mir' },
      { w: 'immer' },
      { w: 'noch' },
      { w: 'Schwierigkeiten' },
      { w: '.', plain: true },
      { w: 'Welchen' },
      { w: 'Satz' },
      { w: 'meinst' },
      { w: 'du' },
      { w: 'genau' },
      { w: '?', plain: true },
      { w: 'Zeig' },
      { w: 'mir' },
      { w: 'eine' },
      { w: 'Stelle' },
      { w: '.', plain: true },
      { w: 'Diesen' },
      { w: 'hier' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'weiß' },
      { w: 'nicht' },
      { w: ',', plain: true },
      { w: 'ob' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'zunehmend' },
      { w: 'diskutierte' },
      { w: 'Frage' },
      { w: '"', plain: true },
      { w: 'richtig' },
      { w: 'gebildet' },
      { w: 'ist' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat sich in Timos Entwurf verbessert?', qEn: 'What has improved in Timo\'s draft?', options: ['die Rechtschreibung', 'der Nominalstil', 'die Länge', 'das Layout'], optionsEn: ['the spelling', 'the nominal style', 'the length', 'the layout'], answer: 1,
        explain: '"Dein Nominalstil im letzten Entwurf ist wirklich besser geworden."' },
      { q: 'Was macht Timo noch Schwierigkeiten?', qEn: 'What still gives Timo trouble?', options: ['der Nominalstil', 'die Partizipialattribute', 'die Zeitformen', 'das Passiv'], optionsEn: ['the nominal style', 'the participial attributes', 'the tenses', 'the passive'], answer: 1,
        explain: '"Die Partizipialattribute machen mir immer noch Schwierigkeiten."' }
    ]
  },
  speaking: [
    { task: "Timo lobt deinen Nominalstil, kämpft aber mit Partizipialattributen. Hilf ihm.", taskEn: "Timo praises your nominal style but struggles with participial attributes. Help him.", de: "Nimm den Satz im dritten Absatz: die kürzlich veröffentlichten Ergebnisse.", en: "Take the sentence in the third paragraph: the recently published results." },
    { task: "Prüfung, Teil 1: Halte einen dichten Vortragseinstieg.", taskEn: "Exam, Part 1: deliver a dense opening to your talk.", de: "Zunächst die Fragestellung, sodann die Befunde, abschließend die offenen Punkte.", en: "First the research question, then the findings, finally the open points." },
    { task: "Prüfung, Teil 2: Berichte eine strittige Aussage neutral.", taskEn: "Exam, Part 2: report a contested statement neutrally.", de: "Die Behörde erklärte, das Verfahren sei nicht zu beschleunigen.", en: "The authority stated the procedure cannot be accelerated." },
    { task: "Prüfung, Teil 3: Widersprich diplomatisch.", taskEn: "Exam, Part 3: disagree diplomatically.", de: "Es wäre zu prüfen, ob das Register für die Zeitung passt.", en: "It would have to be examined whether the register suits the newspaper." },
    { task: "Prüfung: Verbessert gemeinsam einen Absatz.", taskEn: "Exam: improve a paragraph together.", de: "Wir ersetzen den Relativsatz durch ein Partizipialattribut und lockern das Register.", en: "We'll replace the relative clause with a participial attribute and loosen the register." }
  ],
  writing: {
    prompt: 'TASK 1 — Register rewrite (150 words): Rewrite an academic article passage using participial adjectives, nominalized adjectives, and adjective complementation.\n\nTASK 2 — Legal editing (150 words): Edit a legal document by improving register, adjective precision, and nominal style.\n\nTASK 3 — Newspaper to journal (150 words): Rewrite a newspaper report into a university journal article using native-level lexical and stylistic choices.\n\nTASK 4 — Essay (700 words): Write a Goethe C2 argumentative essay integrating every major grammar topic from Chapters 1–19 naturally.',
    starters: ['Die international anerkannten Ergebnisse zeigen...', 'Die Autoren erklären, dass...', 'Es lässt sich argumentieren, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine integrierte Kontrolle über alle Grammatikthemen aus Kapitel 1–19...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which mood correctly signals neutral, reported information — integrating Chapter 7?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indikativ only'], answer: 0, explain: 'Konjunktiv I marks a claim as reported rather than confirmed by the speaker/writer.' },
    gap: { sentence: ['Die Ergebnisse ', ' konsistent mit früheren Studien.'], gaps: [ { answer: 'seien', accepts: ['seien'] } ], explain: 'Konjunktiv I ("seien") integrates Chapter 7\'s reported-speech mastery into an academic register sentence.' },
    match: { q: 'Match each construction to the chapter it integrates.', pairs: [ { noun: 'die veröffentlichten Ergebnisse', art: 'Chapter 15 — Partizipien als Adjektive' }, { noun: 'die Autorin erkläre, dass...', art: 'Chapter 7 — Konjunktiv I' }, { noun: 'lässt sich reproduzieren', art: 'Chapter 13 — Passiversatzformen' }, { noun: 'relevant für die Analyse', art: 'Chapter 19 — Adjektive mit Ergänzungen' } ] },
    builder: { target: 'Build: "The internationally recognized results were, according to the author, significant." (integrating Chapters 15, 7, 18)', bank: ['Die', 'international', 'anerkannten', 'Ergebnisse', 'seien', ',', 'so', 'die', 'Autorin', ',', 'signifikant', '.'], answer: ['Die', 'international', 'anerkannten', 'Ergebnisse', 'seien', ',', 'so', 'die', 'Autorin', ',', 'signifikant', '.'], roles: { 'international': 'r-integrations-pyramide', 'anerkannten': 'r-integrations-pyramide', 'seien': 'r-orchester-metapher', 'signifikant': 'r-integrations-pyramide' } },
    errorCorrection: { title: 'Error correction (integrated)', wrong: 'Die Autorin erklärt, die Ergebnisse sind groß und die Firma lässt reparieren das Problem.', right: 'Die Autorin erklärt, die Ergebnisse seien erheblich, und das Problem lässt sich beheben.', explain: 'Fixes three integrated issues: Konjunktiv I for reported speech (seien, not sind), register-precise adjective (erheblich, not groß), and correct sich-lassen word order.' }
  },
  quiz: [
    { q: 'What is the Goethe Mini 3 memory trick for integrating Chapters 1–19?', options: ['Be a conductor: know every instrument, then conduct the whole orchestra together', 'Master each grammar topic in complete isolation', 'Only focus on the adjective system, ignore verb systems'], answer: 0, explain: 'C2 mastery means every grammar system works together naturally, not one at a time.' },
    { q: 'Which mood is used for neutral reported speech (e.g. in newspapers)?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indikativ Präsens only'], answer: 0, explain: 'Konjunktiv I signals distance from a claim — reporting it without confirming it.' },
    { q: 'What integration mistake is most common when combining multiple C2 systems?', options: ['Mixing registers within one paragraph', 'Using too many discourse markers', 'Avoiding the passive voice entirely'], answer: 0, explain: 'Register consistency across tense, adjectives, and passive choice is the hardest integration skill.' },
    { q: 'This chapter introduces:', options: ['No new grammar and no new vocabulary', 'One new grammar topic', 'Several new vocabulary families'], answer: 0, explain: 'Goethe Mini 3 is a pure integration and assessment checkpoint across Chapters 1–19.' },
    { q: 'Why does "die international anerkannten, empirisch validierten Ergebnisse" demonstrate integrated mastery?', options: ['It combines participial adjectives (Ch15), adjective chains (Ch17), and register-precise vocabulary (Ch18) in one phrase', 'It uses only basic adjective endings', 'It avoids all adjective modification'], answer: 0, explain: 'This phrase layers multiple C2 adjective-system chapters into a single, elegant noun phrase.' }
  ],
  takeaways: [
    { c: 'r-orchester-metapher', html: 'C2 mastery means conducting the whole orchestra — every grammar system supporting one consistent register.' },
    { c: 'r-integrations-pyramide', html: 'Grammar builds sentences, sentences build noun phrases and paragraphs, and register determines every choice throughout.' },
    { c: 'r-orchester-metapher', html: 'Konjunktiv I (reported speech) and Konjunktiv II (hypothesis/diplomacy) must be chosen deliberately, not interchangeably.' },
    { c: 'r-integrations-pyramide', html: 'The adjective system (Chapters 15–19) is the clearest marker of integrated C2 writing — participial adjectives, nominalization, declension, register, and complementation working together.' }
  ],
  revisionTips: [
    'Pick one paragraph and rewrite it in four registers (academic, legal, journalistic, literary), tracking every grammar choice that changes.',
    'Find one sentence using Konjunktiv I and one using Konjunktiv II in authentic text; explain why each mood was chosen.',
    'Take a simple noun phrase and layer it with a participial adjective, then a nominalized adjective, then a full adjective chain — noting how each chapter contributes.'
  ]
};
window.CHAPTER = CHAPTER;
