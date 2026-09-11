/* KLARWEG CHAPTER DATA — C2 · Chapter 24
   GOETHE MINI 4 — revision-only integrated checkpoint covering Chapters 1-23.
   NO NEW GRAMMAR, NO NEW VOCABULARY. Integrates: Zeitformen, Präfixverben,
   Ergänzungen, Nomen-Verb-Verbindungen, Konjunktiv I/II, Modalverben,
   Diskursmarker, Relativsätze, Passiv/Passiversatzformen, Partizipien als
   Adjektive, Nominalisierte Adjektive, Adjektivdeklination, Stilistische
   Nuancen, Adjektive mit Ergänzungen, and Wortbildung (Adjektive/Nomen/
   Verben) — across academic/scientific/legal/administrative/journalistic/
   literary registers. Follows the Chapter 20 (Goethe Mini 3) template
   exactly, extended to close out the full word-formation arc. Dialogue:
   Wibke and Timo only. */
const CHAPTER = {
  id: 'c2-24-goethe-mini-4',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 24,
  title: 'Goethe Mini 4',
  titleEn: 'Checkpoint — Chapters 1–23 integrated',
  description: 'Grammar is the building material. Morphology builds the buildings. Vocabulary furnishes the rooms. Register picks the neighborhood. At C2, your job is not one correct house — it is a whole city where every part works together naturally.',
  xp: 1800, time: 190, difficulty: 'Checkpoint',
  nextChapter: { number: 25, title: 'Appositionen', titleEn: 'Appositions' , href: 'chapter-c2-25-appositionen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Goethe Mini 4 · Integrated revision',
    headline: 'Design the <em>whole city</em> — not just one correct house.',
    intro: 'Adapting the same research findings into a journal article, a conference talk, a policy report, and a newspaper piece, Wibke worries the title\'s compound word sounds unwieldy, and Timo suggests loosening the register — designing a whole city, not just one correct house.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'A full Goethe-style integrated checkpoint across grammar, the adjective/noun/verb formation systems, and register'],
    scene: 'Vorbereitung eines Publikationspakets für ein Forschungsinstitut',
    femaleSpeakers: ['Wibke'],
    dialogue: [
      { speaker: 'Wibke', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kompositum', role: 'r-subject', en: 'compound word', hi: 'संयुक्त शब्द', pron: 'kom-PO-zi-tum', type: 'Noun · neut. (recycled C2)' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Titel', role: 'r-dativ', en: 'title (dat.)', hi: 'शीर्षक में', pron: 'TEE-tel', type: 'Noun · masc. dat.' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'etwas', role: 'r-akkusativ', en: 'somewhat', hi: 'कुछ', pron: 'ET-vas', type: 'Adverb' },
        { w: 'sperrig', role: 'r-akkusativ', en: 'unwieldy', hi: 'भारी भरकम', pron: 'SHPE-rikh', type: 'Adjective', why: 'sperrig = unwieldy/clunky (this chapter).', ex: 'Das Wort klingt sperrig.', exEn: 'The word sounds unwieldy.' },
        { w: '.', plain: true }
      ], en: 'The compound word in the title sounds somewhat unwieldy.', hi: 'Shirshak mein sanyukt shabd kuch bhaari-bharkam lagta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Register', role: 'r-akkusativ', en: 'register', hi: 'रजिस्टर', pron: 'ray-GIS-ter', type: 'Noun · neut. (recycled C2)' },
        { w: 'etwas', role: 'r-akkusativ', en: 'somewhat', hi: 'कुछ', pron: 'ET-vas', type: 'Adverb' },
        { w: 'lockern', role: 'r-verb', en: 'loosen', hi: 'ढीला करना', pron: 'LO-kern', type: 'Verb · infinitive (Satzende)', why: 'lockern = to loosen/relax (this chapter).', ex: 'das Register lockern' },
        { w: '.', plain: true }
      ], en: 'Maybe we should loosen the register somewhat.', hi: 'Shayad humein register ko kuch dheela karna chahiye.' },
      { speaker: 'Wibke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Präfigierung', role: 'r-subject', en: 'prefixation', hi: 'उपसर्गीकरण', pron: 'pray-fi-GEE-rung', type: 'Noun · fem. (recycled C2)' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'by', type: 'Preposition' },
        { w: 'diesem', role: 'r-dativ', en: 'this (neut. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Verb', role: 'r-dativ', en: 'verb (dat.)', hi: 'क्रिया के साथ', pron: 'vairp', type: 'Noun · neut. dat.' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'बनाता है', pron: 'MAKHT', type: 'Verb · machen' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Sinn', role: 'r-akkusativ', en: 'meaning', hi: 'मतलब', pron: 'zin', type: 'Noun · masc.' },
        { w: 'klarer', role: 'r-akkusativ', en: 'clearer', hi: 'ज़्यादा स्पष्ट', pron: 'KLAH-rer', type: 'Adjective · Komparativ' },
        { w: '.', plain: true }
      ], en: 'The prefixation with this verb makes the meaning clearer.', hi: 'Is kriya ke saath upsargikaran matlab ko zyaada spasht banaata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'lexikalische', role: 'r-subject', en: 'lexical', hi: 'शाब्दिक', pron: 'lek-si-KAH-li-shuh', type: 'Adjective (recycled C2)' },
        { w: 'Produktivität', role: 'r-subject', en: 'productivity', hi: 'उत्पादकता', pron: 'pro-duk-ti-vi-TAYT', type: 'Noun · fem. (recycled C2)' },
        { w: 'dieser', role: 'r-dativ', en: 'this (fem. gen.)', hi: 'इस', pron: 'DEE-zer', type: 'Determiner · genitive' },
        { w: 'Suffixe', role: 'r-dativ', en: 'suffixes (gen.)', hi: 'प्रत्ययों की', pron: 'zu-FIK-suh', type: 'Noun · plural genitive' },
        { w: 'beeindruckt', role: 'r-verb', en: 'impresses', hi: 'प्रभावित करती है', pron: 'be-INE-drukt', type: 'Verb · beeindrucken' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'The lexical productivity of these suffixes impresses me.', hi: 'In pratyayon ki shaabdik utpaadakta mujhe prabhavit karti hai.' },
      { speaker: 'Wibke', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Plan', role: 'r-akkusativ', en: 'plan', hi: 'योजना', pron: 'plahn', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'einreichen', role: 'r-verb', en: 'submit', hi: 'जमा करना', pron: 'INE-ry-khen', type: 'Verb · infinitive (Satzende, recycled C1)' },
        { w: '?', plain: true }
      ], en: 'Shall we submit the plan tomorrow?', hi: 'Kya humein kal yojana jama karni chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'zuversichtlich', role: 'r-akkusativ', en: 'confident', hi: 'आश्वस्त', pron: 'TSOO-fer-zikht-likh', type: 'Adjective (recycled C1)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Stadtrat', role: 'r-subject', en: 'city council', hi: 'नगर परिषद', pron: 'SHTAT-raht', type: 'Noun · masc.' },
        { w: 'zustimmt', role: 'r-verb', en: 'agrees', hi: 'सहमत होगा', pron: 'TSOO-shtimt', type: 'Verb · zustimmen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I am confident that the city council agrees.', hi: 'Haan. Mujhe vishwaas hai ki nagar parishad sahmat hoga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'This is Goethe Mini 4: an integrated checkpoint testing whether you can <span class="de r-stadt-metapher">design the whole city</span> — grammar, morphology, vocabulary, register and style working together — across Chapters 1–23.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 4 — an integrated revision checkpoint covering ONLY Chapters 1-23 (Zeitformen, Präfixverben, Verbergänzungen/Valenz, Nomen-Verb-Verbindungen, Konjunktiv I & II, Modalverben, Diskursmarker, Relativsätze, Passiv, Passiversatzformen, Partizipien als Adjektive, Nominalisierte Adjektive/Partizipien, Adjektivdeklination auf C2-Niveau, Stilistische Nuancen & Register von Adjektiven, Adjektive mit Ergänzungen, Wortbildung der Adjektive, Wortbildung der Nomen, Wortbildung der Verben). NO new grammar or vocabulary should be introduced or expected beyond this scope. The learner\'s essay should demonstrate register control (academic/scientific/legal/administrative/journalistic/literary), stylistic maturity, the full adjective system, Konjunktiv I for reported speech, Konjunktiv II for hypothesis/diplomacy, modal verb nuance, passive vs. passive-alternative choice, discourse markers for cohesion, AND productive word formation across adjectives (suffixes -bar/-los/-haft/-reich), nouns (derivation + compounding, head-final principle), and verbs (prefixation, -isieren/-ieren suffixation, denominal/deadjectival derivation). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag genuine grammar/register/word-formation errors across ANY of the 23 integrated topics — inconsistent register mixing, wrong Konjunktiv choice, incorrect passive/alternative choice, poor adjective/noun/verb formation, mismatched valency. Do NOT introduce new grammar concepts in your feedback — stay within the 23-chapter revision scope. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (naming which of the 23 chapters the issue relates to). If none: <li>No errors — well done.</li> 3) <p><b>City check:</b> one sentence on how well the learner\'s grammar, morphology, vocabulary, and register work together as one coherent "city" rather than isolated correct pieces.</p> Keep total feedback under 160 words. Mix in Hindi/Hinglish naturally.',
  quizRecommendation: { high: 'Outstanding — you design the whole city fluently across Chapters 1–23. Ready for Chapter 25 and the final phase of the course.', mid: 'Good integration overall. Revisit whichever Master Tables felt shakiest, then continue.', low: 'Worth revisiting the weakest chapters from 1–23 before moving on — this checkpoint exists so gaps surface now, not on exam day.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'kürzlich', role: 'r-integrations-pyramide' }, { w: 'validierte', role: 'r-integrations-pyramide' }, { w: 'Datenauswertung', role: 'r-integrations-pyramide' }, { w: 'überzeugt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Goethe Mini 4 tests whether you can design the whole city of Chapters 1–23 together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Wibke and Timo adapt one publication into four registers, integrating grammar and word formation from Chapters 1–23.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key revision vocabulary from Chapters 1–23 — no new words, full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Integrated review: verb systems, sentence architecture, the adjective system, and adjective/noun/verb word formation.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, scientific publication, government policy paper, and literary essay for integrated register and morphology.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify register, stylistic choices, and word formation in a lecture, symposium, press conference, and radio documentary.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Complete a full Goethe C2 speaking simulation across presentation, discussion, and literary interpretation.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite across four registers and write a 700-word Goethe C2 essay integrating all 23 chapters.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete a comprehensive integrated review across every grammar, morphology, and register topic from Chapters 1–23.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1800 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your Goethe C2 readiness dashboard before continuing to Chapter 25.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 1–23 with translations, register labels, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '22 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Integrated grammar and word-formation review, register transformation drills, and the full 700-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '30 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The Integration Pyramid, Goethe Readiness Scale, and a consolidated reference across all 23 chapters.', pdfUrl: '/pdfs/grammar.pdf', size: '26 pages', kind: 'Grammar' },
    { icon: '📊', title: 'Progress Dashboard PDF', desc: 'Your C2 Progress Dashboard across Chapters 1–24, with strongest/weakest area analysis and a personalized study plan.', pdfUrl: '/pdfs/progress-dashboard.pdf', size: '8 pages', kind: 'Analytics' }
  ],
  outcomes: [
    { de: 'die kürzlich validierte Datenauswertung', text: 'Integrate participial adjectives, compound nouns, and academic register in one phrase' },
    { de: 'das Team verdeutliche einen klaren Trend', text: 'Combine derived verbs (Chapter 23) with Konjunktiv I reported speech (Chapter 7)' },
    { de: 'Ein Architekt, eine Stadt.', text: 'Understand the chapter\'s core "designing the whole city" integration metaphor' },
    { de: 'Register bestimmt jede Wahl.', text: 'Consistently match every grammar and word-formation choice — tense, passive, adjective, noun, verb — to one target register' }
  ],
  vocab: [
    { de: 'die Zeitform', pos: 'noun', level: 'C2', register: 'academic (revision)', root: null, prefix: null, suffix: null, en: 'tense/verb form', hi: 'काल-रूप', synonyms: 'das Tempus', antonyms: null, ex: 'Die Wahl der Zeitform beeinflusst die Erzählperspektive.', exEn: 'The choice of tense influences the narrative perspective.', exHi: 'Zeitform ka chunaav narrative perspective ko prabhaavit karta hai.', ex2: 'In wissenschaftlichen Texten variiert die Zeitform je nach Kontext.', ex2En: 'In scientific texts, the tense varies depending on context.', ex2Hi: 'Vaigyaanik texts mein, zeitform context ke anusaar badalta hai.' },
    { de: 'die Valenz', pos: 'noun', level: 'C2', register: 'academic (revision)', root: null, prefix: null, suffix: null, en: 'verb valency', hi: 'क्रिया-संयोजकता', synonyms: 'die Ergänzung (loosely)', antonyms: null, ex: 'Die Valenz eines Verbs bestimmt, welche Ergänzungen es verlangt.', exEn: 'A verb\'s valency determines which complements it requires.', exHi: 'Verb ki valency decide karti hai ki usse kaunse complements chahiye.', ex2: 'Eine Änderung des Präfixes kann die Valenz des Verbs verändern.', ex2En: 'Changing the prefix can change the verb\'s valency.', ex2Hi: 'Prefix badalne se verb ki valency badal sakti hai.' },
    { de: 'der Konjunktiv I', pos: 'noun', level: 'C2', register: 'academic/journalism (revision)', root: null, prefix: null, suffix: null, en: 'Konjunktiv I (reported speech mood)', hi: 'कोंयुंक्तिव 1', synonyms: null, antonyms: 'der Konjunktiv II', ex: 'Der Konjunktiv I signalisiert neutrale, berichtete Information.', exEn: 'Konjunktiv I signals neutral, reported information.', exHi: 'Konjunktiv I neutral, reported information signal karta hai.', ex2: 'Journalisten verwenden den Konjunktiv I, um Objektivität zu wahren.', ex2En: 'Journalists use Konjunktiv I to maintain objectivity.', ex2Hi: 'Journalists objectivity banaaye rakhne ke liye Konjunktiv I use karte hain.' },
    { de: 'der Konjunktiv II', pos: 'noun', level: 'C2', register: 'academic/diplomatic (revision)', root: null, prefix: null, suffix: null, en: 'Konjunktiv II (hypothetical/diplomatic mood)', hi: 'कोंयुंक्तिव 2', synonyms: null, antonyms: 'der Konjunktiv I', ex: 'Der Konjunktiv II mildert eine direkte Aussage diplomatisch ab.', exEn: 'Konjunktiv II softens a direct statement diplomatically.', exHi: 'Konjunktiv II ek direct statement ko diplomatically kam karta hai.', ex2: 'In Hypothesen wird häufig der Konjunktiv II verwendet.', ex2En: 'Konjunktiv II is frequently used in hypotheses.', ex2Hi: 'Hypotheses mein aksar Konjunktiv II use hota hai.' },
    { de: 'das Passiversatzform', pos: 'noun', level: 'C2', register: 'academic/legal (revision)', root: null, prefix: null, suffix: null, en: 'passive alternative construction', hi: 'निष्क्रिय विकल्प', synonyms: null, antonyms: 'das Passiv', ex: 'Passiversatzformen wie "sich lassen" klingen oft eleganter als das Passiv.', exEn: 'Passive alternatives like "sich lassen" often sound more elegant than the passive.', exHi: '"Sich lassen" jaisi passive alternatives aksar passive se zyaada elegant lagti hain.', ex2: 'Behörden bevorzugen Passiversatzformen wie "sein + zu".', ex2En: 'Authorities prefer passive alternatives like "sein + zu".', ex2Hi: 'Authorities "sein + zu" jaisi passive alternatives ko prefer karti hain.' },
    { de: 'das Partizipialattribut', pos: 'noun', level: 'C2', register: 'academic/scientific (revision)', root: null, prefix: null, suffix: null, en: 'participial attribute', hi: 'कृदंत विशेषण', synonyms: null, antonyms: null, ex: 'Das Partizipialattribut komprimiert einen Relativsatz zu einem Adjektiv.', exEn: 'The participial attribute compresses a relative clause into an adjective.', exHi: 'Participial attribute ek relative clause ko ek adjective mein compress karta hai.', ex2: 'Wissenschaftliche Texte nutzen häufig Partizipialattribute.', ex2En: 'Scientific texts frequently use participial attributes.', ex2Hi: 'Vaigyaanik texts aksar participial attributes use karte hain.' },
    { de: 'die Adjektivdeklination', pos: 'noun', level: 'C2', register: 'academic (revision)', root: null, prefix: null, suffix: null, en: 'adjective declension', hi: 'विशेषण विभक्ति', synonyms: null, antonyms: null, ex: 'Komplexe Nominalphrasen erfordern eine präzise Adjektivdeklination.', exEn: 'Complex noun phrases require precise adjective declension.', exHi: 'Complex noun phrases ko precise adjective declension chahiye.', ex2: 'Die Adjektivdeklination organisiert Information innerhalb der Nominalphrase.', ex2En: 'Adjective declension organizes information within the noun phrase.', ex2Hi: 'Adjective declension noun phrase ke andar information organize karta hai.' },
    { de: 'die Suffigierung', pos: 'noun', level: 'C2', register: 'academic (revision)', root: 'anhängen (verb, "to attach")', prefix: null, suffix: '-ung', en: 'suffixation', hi: 'प्रत्यय-योजन', synonyms: 'die Ableitung', antonyms: 'die Präfigierung', ex: 'Die Suffigierung mit "-bar" erzeugt Adjektive der Möglichkeit.', exEn: 'Suffixation with "-bar" produces adjectives of possibility.', exHi: '"-bar" ke saath suffixation possibility ke adjectives banaata hai.', ex2: 'Produktive Suffigierung ist der Kern moderner Wortbildung.', ex2En: 'Productive suffixation is the core of modern word formation.', ex2Hi: 'Productive suffixation modern word formation ka core hai.' },
    { de: 'das Kompositum', pos: 'noun', level: 'C2', register: 'academic (revision)', root: 'zusammensetzen (verb, "to compose")', prefix: null, suffix: null, en: 'compound (word)', hi: 'यौगिक शब्द', synonyms: 'die Zusammensetzung', antonyms: null, ex: 'Das Kompositum "Arbeitsmarktpolitik" verdichtet einen ganzen Nebensatz.', exEn: 'The compound "Arbeitsmarktpolitik" condenses an entire subordinate clause.', exHi: '"Arbeitsmarktpolitik" compound ek poore subordinate clause ko condense karta hai.', ex2: 'Im Deutschen bestimmt das letzte Element eines Kompositums das Genus.', ex2En: 'In German, the last element of a compound determines its gender.', ex2Hi: 'German mein, compound ka aakhri element uska gender decide karta hai.' },
    { de: 'die Präfigierung', pos: 'noun', level: 'C2', register: 'academic (revision)', root: 'voranstellen (verb, "to place before")', prefix: null, suffix: '-ung', en: 'prefixation', hi: 'उपसर्ग-योजन', synonyms: null, antonyms: 'die Suffigierung', ex: 'Die Präfigierung mit "ent-" kehrt oft die Bedeutung des Grundverbs um.', exEn: 'Prefixation with "ent-" often reverses the meaning of the base verb.', exHi: '"ent-" ke saath prefixation aksar base verb ke meaning ko reverse karta hai.', ex2: 'Präfigierung kann die Valenz eines Verbs grundlegend verändern.', ex2En: 'Prefixation can fundamentally change a verb\'s valency.', ex2Hi: 'Prefixation ek verb ki valency ko fundamentally badal sakta hai.' },
    { de: 'die lexikalische Produktivität', pos: 'noun', level: 'C2', register: 'academic (revision)', root: null, prefix: null, suffix: null, en: 'lexical productivity', hi: 'शाब्दिक उत्पादकता', synonyms: null, antonyms: null, ex: 'Die lexikalische Produktivität des Deutschen zeigt sich in seiner Wortbildung.', exEn: 'The lexical productivity of German shows itself in its word formation.', exHi: 'German ki lexical productivity uski word formation mein dikhti hai.', ex2: 'C2-Sprecher nutzen lexikalische Produktivität, um unbekannte Wörter zu erschließen.', ex2En: 'C2 speakers use lexical productivity to work out unfamiliar words.', ex2Hi: 'C2 speakers unfamiliar words samajhne ke liye lexical productivity use karte hain.' },
    { de: 'das Register', pos: 'noun', level: 'C2', register: 'academic (revision)', root: null, prefix: null, suffix: null, en: 'register (linguistic)', hi: 'रजिस्टर', synonyms: 'der Sprachstil', antonyms: null, ex: 'Das Register bestimmt, welche Adjektive, Nomen und Verben passend sind.', exEn: 'The register determines which adjectives, nouns, and verbs are appropriate.', exHi: 'Register decide karta hai ki kaunse adjectives, nouns aur verbs appropriate hain.', ex2: 'Ein Wechsel des Registers verändert die gesamte Wortwahl.', ex2En: 'A change of register alters the entire word choice.', ex2Hi: 'Register mein badlaav poori word choice ko badal deta hai.' }
  ],
  grammar: [
    { title: 'Integrations-Pyramide (Integration Pyramid)', body: [ 'Grammar → Morphology → Sentence → Noun Phrase → Paragraph → Register → Style → Native-Level Communication. Every chapter from 1–23 is one layer of this pyramid; Goethe Mini 4 tests whether they all support each other, closing out the entire word-formation arc alongside the grammar arc.' ], hinglish: 'Yeh checkpoint alag-alag rules nahi poochhta \u2014 yeh dekhta hai ki Chapter 1 se 23 tak ki cheezein ek hi text mein saath chal rahi hain ya nahi. Isolated drills mein sab theek lagta hai; galtiyan tab dikhti hain jab ek sentence mein tense, passive, adjective endings, compound ka linking <b>-s</b> aur Partizip II sab ek saath sambhaalne padte hain.' },
    { title: 'Verb-Systeme (Chapters 1–9): Zeitformen, Präfixe, Ergänzungen, Konjunktiv, Modalverben', body: [ 'Review: stylistic tense choice, prefix-verb semantic families, verb valency and complements, Konjunktiv I (reported speech) vs. Konjunktiv II (hypothesis/diplomacy), and epistemic modal verbs for certainty gradation.' ], hinglish: 'Verb wala hissa. Tense nazariya batata hai, sirf samay nahi. Prefix verbs family mein aate hain, aur separable hai ya nahi \u2014 usse Partizip II tay hota hai. Har verb apna case maangta hai. <b>Konjunktiv I</b> (<b>sei</b>) reported speech ke liye, aur <b>Konjunktiv II</b> hypothesis ya politeness ke liye \u2014 par jahan Konjunktiv I ki form Indikativ jaisi ho jaaye, wahan Konjunktiv II lagta hai. Aur modals do kaam karte hain: majboori, ya andaaza.' },
    { title: 'Satzarchitektur (Chapters 10–14): Diskursmarker, Relativsätze, Passiv, Passiversatzformen', body: [ 'Review: cohesive discourse markers for logical flow, relative clause compression, active/passive perspective control, and passive alternatives (sein+zu, sich lassen, man) for register-appropriate style.' ], hinglish: 'Sentence-structure wala hissa. Discourse markers zyada-tar adverbs hain \u2014 position 1 par aayein to verb turant baad, aur comma nahi. Relative clause mein pronoun ka gender comma se pehle wale noun se, par case us clause ke apne verb se. Aur passive mein: <b>wird</b> se kaam ho raha hai, <b>ist</b> se ho chuka hai, Perfekt mein <b>worden</b> \u2014 aur <b>sich lassen</b> ke baad plain infinitive, <b>sein + zu</b> mein <b>zu</b> andar.' },
    { title: 'Das Adjektiv-System (Chapters 15–19): Partizipien, Nominalisierung, Deklination, Register, Ergänzungen', body: [ 'Review: participial adjectives compress relative clauses; nominalized adjectives/participles create abstraction; complex noun phrases organize modifier hierarchy; register determines adjective selection; and adjectives "attract" specific complements (preposition, case, infinitive, dass-clause).' ], hinglish: 'Adjective wala hissa, aur yahan sab kuch endings par tika hai. Participial adjective ek folda hua relative clause hai, aur uspar normal ending lagti hai. Nominalized adjective capital se likha jaata hai par decline hota rehta hai (<span class="de">der Betroffene</span>, <span class="de">dem Betroffenen</span>). Chain mein <b>har</b> adjective par wahi ending dohraani padti hai, par adverb par koi nahi. Aur har adjective apna complement laata hai \u2014 preposition ke saath sahi case bhi.' },
    { title: 'Das Wortbildungs-System (Chapters 21–23): Adjektive, Nomen, Verben', body: [ 'Review: adjective formation with productive suffixes (-bar, -f\u00e4hig, -pflichtig, -arm/-reich, -orientiert, -bedingt) \u2014 and remember the derived adjective still declines normally, while an adverb before it stays bare. Noun formation via derivation (-ung, -heit, -keit, all <b>die</b>) and compounding, governed by the head-final principle: the LAST element decides gender, plural and meaning, and a linking <b>-s</b>/<b>-n</b> usually joins the parts. Verb formation via prefixation (be-, ent-, er-, ver-, zer-, miss-) and suffixation (-ieren, -isieren, -ifizieren) \u2014 neither takes <i>ge-</i> in the Partizip II, and a prefix often changes the case that follows.' ], hinglish: 'Teeno wortbildung chapters ka nichod. <b>Adjectives</b>: suffix se matlab tay hota hai (<b>-bar</b> ho sakta hai, <b>-f\u00e4hig</b> kaabil, <b>-pflichtig</b> zaroori), aur banane ke baad uspar normal ending lagti hai \u2014 par adverb khaali rehta hai. <b>Nouns</b>: <b>-ung</b>, <b>-heit</b>, <b>-keit</b> sab <b>die</b> lete hain; aur compounds mein gender aur plural <b>aakhri</b> element se aate hain, aur beech mein aksar jodne wala <b>-s</b> ya <b>-n</b> lagta hai. <b>Verbs</b>: <b>-ieren</b> wale aur inseparable prefixes, dono ke Partizip II mein <i>ge-</i> nahi lagta \u2014 aur prefix aksar case badal deta hai.' },
    { title: 'Meister-Tabelle: Integration', body: [ 'Each system mapped to its integration role in native-level C2 communication.' ], table: { head: ['System', 'Chapters', 'Integration Role'], rows: [ ['Zeitformen & Modalität', '1, 6-8', 'Perspective and certainty'], ['Verb-Struktur', '2-4', 'Precision and formality'], ['Satzverknüpfung', '10-13', 'Cohesion and information focus'], ['Adjektiv-System', '15-19', 'Compression, abstraction, register precision'], ['Wortbildungs-System', '21-23', 'Productive vocabulary creation across adjectives, nouns, verbs'] ] }, hinglish: 'Paanch systems ka table \u2014 par revision karte waqt sirf topic mat dekho, har system ki sabse aam galti bhi yaad karo, kyunki exam mein wahi pakdi jaati hai.' },
    { title: 'Typische Integrationsfehler (common integration mistakes)', body: [ 'Each of these breaks two rules from two different chapters at once \u2014 which is exactly how errors appear once several systems run in one sentence. The chapter reference in each explanation tells you where to revise.' ], mistakes: [
      { wrong: 'Der Prozess wurde gedigitalisiert und ist echt gut gelaufen.', right: 'Der Prozess wurde digitalisiert und ist erfolgreich verlaufen.', why: 'Two systems fail at once: <b>-ieren</b> verbs take no <i>ge-</i> (Ch.23), and <i>echt gut</i> breaks the professional register (Ch.18).' },
      { wrong: 'Laut dem Bericht w\u00fcrde die Regierungbildung schwierig sein.', right: 'Laut dem Bericht sei die Regierungsbildung schwierig.', why: 'Neutral reporting takes Konjunktiv I <b>sei</b> (Ch.7), and the compound needs its linking <b>-s</b>: <i>Regierung<b>s</b>bildung</i> (Ch.22).' },
      { wrong: 'Das Verfahren l\u00e4sst sich vereinfacht werden, und die Frist ist einhalten.', right: 'Das Verfahren l\u00e4sst sich vereinfachen, und die Frist ist einzuhalten.', why: '<b>sich lassen</b> takes a plain infinitive (Ch.13), and <b>sein + zu</b> needs the <b>zu</b> inside the separable verb \u2014 <i>ein<b>zu</b>halten</i>.' },
      { wrong: 'die k\u00fcrzlich ver\u00f6ffentlichte wissenschaftliche Ergebnisse der Datenauswertungen', right: 'die k\u00fcrzlich ver\u00f6ffentlichten wissenschaftlichen Ergebnisse der Datenauswertung', why: 'Every adjective in a chain repeats the same ending (Ch.17), and an abstract process noun like <i>Datenauswertung</i> normally has no plural (Ch.22).' },
      { wrong: 'das Klimaschutzgesetz \u2026 Die Gesetz wurde ratifiziert geworden.', right: 'das Klimaschutzgesetz \u2026 Das Gesetz wurde ratifiziert.', why: 'The head <i>Gesetz</i> is neuter, so <b>das</b> (Ch.22) \u2014 and <b>ratifizieren</b> takes no <i>ge-</i>, nor a second auxiliary (Ch.23).' }
    ], hinglish: 'Har galti mein do alag chapters ke rules ek saath toot rahe hain \u2014 asli writing mein galtiyan aise hi aati hain. Har explanation ke saath chapter number diya hai, isliye jahan sochna pade wahan seedha us chapter par jao.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Identify your target register first. Then check: does my tense, my passive/alternative choice, my adjective/noun/verb formation, and my Konjunktiv match that register consistently throughout?' ], note: 'Memory trick: imagine you are an architect designing an entire city. Grammar provides the building materials. Morphology creates the buildings. Vocabulary furnishes the rooms. Register determines the neighborhood. Style gives the city its identity. A Goethe C2 candidate must not only build correct houses — they must design an entire city where every part works together naturally. Goethe Mini 4 measures whether you can create that city.', hinglish: 'Pehle tay karo ki text kis register ka hai. Uske baad chaar cheezein poore text mein check karo \u2014 tense, passive ka choice, endings (adjective chain aur compound ka linking <b>-s</b>), aur reported speech ka mood. Ek jagah bhi phisal jaaye to poora text ajeeb lagta hai.' }
  ],
  reading: {
    title: 'Fachzeitschrift: Neue Studie zu Schlafqualität und Bildschirmzeit',
    titleEn: 'Reading A — Journal: new study on sleep quality and screen time',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'kürzlich', role: 'r-integrations-pyramide', en: 'recently (adverb, part of an integrated compound-noun + participial-adjective chain)', hi: '(integrated chain)', type: 'Adverb' },
      { w: 'validierte', role: 'r-integrations-pyramide', en: 'validated (Partizip II als Adjektiv)', hi: 'सत्यापित', type: 'Partizip II als Adjektiv' },
      { w: 'Datenauswertung', role: 'r-integrations-pyramide', en: 'data evaluation (compound noun, head-final principle)', hi: 'डेटा विश्लेषण', type: 'Noun · fem. (Kompositum)' },
      { w: 'überzeugt,', role: 'r-baum-metapher', en: 'convinces, (über- derived verb, Satzende)', hi: 'आश्वस्त करता है (Satzende)', type: 'Verb (Präsens, Satzende)', why: 'This sentence combines a participial adjective, a compound noun ("Datenauswertung"), and the derived verb "überzeugen" (über- + zeugen).' },
      { w: 'so', role: 'plain', en: 'as', hi: 'जैसा', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Autorin,', role: 'plain', en: 'the author, (Satzende)', hi: 'लेखिका (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'selbst', role: 'plain', en: 'even', hi: 'भी', type: 'Adverb' },
      { w: 'kritische', role: 'plain', en: 'critical (Satzende)', hi: 'आलोचनात्मक (Satzende)', type: 'Adjective · Akk. (Satzende)' },
      { w: 'Gutachter', role: 'plain', en: 'reviewers (Satzende)', hi: 'समीक्षकों (Satzende)', type: 'Noun · masc. pl. · Akk. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The recently validated data evaluation convinces, as the author says, even critical reviewers.',
    comprehension: [
      { q: 'Welche drei Wortbildungsmuster kombiniert dieser Satz gleichzeitig?', options: ['Partizip als Adjektiv, Kompositum-Nomen, Präfixverb', 'Nur Passiv', 'Nur Konjunktiv II'], answer: 0 },
      { q: 'Welches Element von "Datenauswertung" bestimmt das Genus?', options: ['"Auswertung" (das letzte Element, feminin)', '"Daten" (das erste Element)', 'Beide Elemente gleichermaßen'], answer: 0 },
      { q: 'Woraus besteht das Verb "überzeugt"?', options: ['über- + zeugen (Präfixverb)', 'Ein einfaches, nicht abgeleitetes Verb', 'Ein Nomen mit Verb-Endung'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungspolitik-Papier', titleEn: 'Reading C — Government policy paper',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'rechtskräftig', role: 'r-integrations-pyramide', en: 'legally (adverb, integrating Chapter 17\'s register-precise adjective chains)', hi: '(Chapter 17 integration)', type: 'Adverb' },
      { w: 'genehmigte', role: 'r-baum-metapher', en: 'approved (ge- derived verb from Chapter 23, Satzende)', hi: '(Chapter 23 integration, Satzende)', type: 'Partizip II als Adjektiv (Satzende)' },
      { w: 'Verordnung', role: 'plain', en: 'regulation (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'tritt', role: 'plain', en: 'takes effect', hi: 'lagoo hoti hai', type: 'Verb (Präsens)' },
      { w: 'nächsten', role: 'plain', en: 'next (masc. akk.)', hi: 'agle', type: 'Adjective · Akk.' },
      { w: 'Monat', role: 'plain', en: 'month (Satzende)', hi: '(Satzende)', type: 'Noun · masc. · Akk. (Satzende)' },
      { w: 'in', role: 'plain', en: 'into', hi: 'mein', type: 'Präposition · Akk.' },
      { w: 'Kraft', role: 'plain', en: 'force (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The legally approved regulation takes effect next month.'
  },
  readingCArchive: {
    title: 'Literarischer Essay', titleEn: 'Reading D — Literary essay',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Roman', role: 'plain', en: 'novel', hi: 'novel', type: 'Noun · masc.' },
      { w: 'thematisiert', role: 'r-baum-metapher', en: 'thematizes (Thema + -isieren, Chapter 23 integration)', hi: '(Chapter 23 integration)', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'zunehmende', role: 'plain', en: 'increasing (Partizip I als Adjektiv, Chapter 15/16 integration)', hi: '(Chapter 15/16 integration)', type: 'Partizip I als Adjektiv · Akk.' },
      { w: 'Entfremdung', role: 'r-integrations-pyramide', en: 'alienation (nominalized abstract noun, Chapter 16/22 integration, Satzende)', hi: '(Chapter 16/22 integration, Satzende)', type: 'Noun · fem. · Akk. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The novel thematizes the increasing alienation.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_024_L001', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, der Titel mit diesem langen Kompositum klingt mir fast zu sperrig für die Zeitung.', en: 'Timo, the title with this long compound word sounds almost too unwieldy for the newspaper.' },
      { id: 'C2_024_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Für den Fachartikel passt es, aber lockern wir das Register für die Zeitungsversion.', en: 'It fits the academic article, but let\'s loosen the register for the newspaper version.' },
      { id: 'C2_024_L003', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, dann kürzen wir den Titel und verzichten auf den Fachbegriff.', en: 'Good, then we\'ll shorten the title and drop the technical term.' },
      { id: 'C2_024_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'So erreichen wir mit demselben Inhalt vier ganz verschiedene Zielgruppen.', en: 'That way we reach four completely different target groups with the same content.' }
    ],
    transcript: 'Timo, der Titel mit diesem langen Kompositum klingt mir fast zu sperrig für die Zeitung. Für den Fachartikel passt es, aber lockern wir das Register für die Zeitungsversion. Gut, dann kürzen wir den Titel und verzichten auf den Fachbegriff. So erreichen wir mit demselben Inhalt vier ganz verschiedene Zielgruppen.',
    translation: 'Timo, the title with this long compound word sounds almost too unwieldy for the newspaper. It fits the academic article, but let\'s loosen the register for the newspaper version. Good, then we\'ll shorten the title and drop the technical term. That way we reach four completely different target groups with the same content.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Titel' },
      { w: 'mit' },
      { w: 'diesem' },
      { w: 'langen' },
      { w: 'Kompositum' },
      { w: 'klingt' },
      { w: 'mir' },
      { w: 'fast' },
      { w: 'zu' },
      { w: 'sperrig' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Zeitung' },
      { w: '.', plain: true },
      { w: 'Für' },
      { w: 'den' },
      { w: 'Fachartikel' },
      { w: 'passt' },
      { w: 'es' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'lockern' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'Register' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Zeitungsversion' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'kürzen' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Titel' },
      { w: 'und' },
      { w: 'verzichten' },
      { w: 'auf' },
      { w: 'den' },
      { w: 'Fachbegriff' },
      { w: '.', plain: true },
      { w: 'So' },
      { w: 'erreichen' },
      { w: 'wir' },
      { w: 'mit' },
      { w: 'demselben' },
      { w: 'Inhalt' },
      { w: 'vier' },
      { w: 'ganz' },
      { w: 'verschiedene' },
      { w: 'Zielgruppen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was stört Wibke am Titel?', qEn: 'What worries Wibke about the title?', options: ['es ist zu kurz', 'es klingt zu sperrig für die Zeitung', 'es hat keinen Sinn', 'es ist zu billig'], optionsEn: ['it is too short', 'it sounds too clunky for the newspaper', 'there is no point', 'it is too cheap'], answer: 1,
        explain: '"Der Titel klingt mir fast zu sperrig für die Zeitung."' },
      { q: 'Was machen sie für die Zeitungsversion?', qEn: 'What do they do for the newspaper version?', options: ['das Register verschärfen', 'das Register lockern', 'den Titel verlängern', 'den Fachbegriff behalten'], optionsEn: ['tighten the register', 'loosen the register', 'lengthen the title', 'keep the technical term'], answer: 1,
        explain: '"Lockern wir das Register für die Zeitungsversion."' }
    ]
  },
  listeningBArchive: {
    transcript: 'Auf der Pressekonferenz erklärt die Sprecherin, die Regierung habe das Klimaschutzgesetz ratifiziert. Kritiker relativieren den Erfolg und werfen der Regierung vor, das Thema zu instrumentalisieren.',
    translation: 'At the press conference, the spokesperson explains that the government has ratified the climate protection law. Critics relativize the success and accuse the government of instrumentalizing the topic.'
  },
  listeningCArchive: {
    transcript: 'In der Radiodokumentation beschreibt die Autorin, wie sich die Sprache der Verwaltung im letzten Jahrhundert modernisiert und digitalisiert hat, ohne ihre bürokratische Präzision zu verlieren.',
    translation: 'In the radio documentary, the author describes how administrative language modernized and digitized over the last century without losing its bureaucratic precision.'
  },
  speaking: [
    { task: "Timo findet den Titel mit dem langen Kompositum zu sperrig. Antworte.", taskEn: "Timo finds the title with the long compound too unwieldy. Respond.", de: "Für den Fachartikel passt es, aber für die Zeitung lockern wir das Register.", en: "For the specialist article it fits, but for the newspaper we'll loosen the register." },
    { task: "Prüfung, Teil 1: Stell dein Thema in zwei Registern vor.", taskEn: "Exam, Part 1: present your topic in two registers.", de: "Fachlich: die Erhebung weist auf Lücken hin. Populär: viele warten monatelang.", en: "Academically: the survey points to gaps. Popularly: many wait for months." },
    { task: "Prüfung, Teil 2: Berichte eine strittige Aussage neutral.", taskEn: "Exam, Part 2: report a contested statement neutrally.", de: "Das Ministerium erklärte, die Mittel seien vollständig vergeben.", en: "The ministry stated the funds were fully allocated." },
    { task: "Prüfung, Teil 3: Formuliere eine vorsichtige Empfehlung.", taskEn: "Exam, Part 3: formulate a cautious recommendation.", de: "Es wäre sinnvoll, die Fristen einmalig zu verlängern.", en: "It would be sensible to extend the deadlines once." },
    { task: "Prüfung, Teil 4: Deute einen kurzen literarischen Auszug.", taskEn: "Exam, Part 4: interpret a short literary excerpt.", de: "Die kurzen Sätze verweigern die Erklärung und überlassen dem Leser das Urteil.", en: "The short sentences refuse explanation and leave the judgement to the reader." },
    { task: "Prüfung: Beschreibe ein Ereignis erst schlicht, dann verdichtet.", taskEn: "Exam: describe an event first plainly, then compressed.", de: "Die Halle brannte. Dann: die seit Jahren ungenutzte Industriehalle brannte vollständig aus.", en: "The hall burned. Then: the industrial hall unused for years burned out completely." }
  ],
  writing: {
    prompt: 'TASK 1 — Register rewrite (150 words): Rewrite a research article using more sophisticated noun, verb, and adjective formation while preserving precision.\n\nTASK 2 — Policy editing (150 words): Edit a government policy document by improving register, lexical productivity, morphology, and information density.\n\nTASK 3 — Newspaper to journal (150 words): Transform a newspaper report into a peer-reviewed academic publication using advanced C2 language.\n\nTASK 4 — Essay (700 words): Write a Goethe C2 essay naturally integrating every major grammar and word-formation topic from Chapters 1–23.',
    starters: ['Die kürzlich validierte Datenauswertung zeigt...', 'Die Autoren erklären, dass...', 'Es lässt sich argumentieren, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine integrierte Kontrolle über Grammatik, Wortbildung und Register aus Kapitel 1–23...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which mood correctly signals neutral, reported information — integrating Chapter 7?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indikativ only'], answer: 0, explain: 'Konjunktiv I marks a claim as reported rather than confirmed by the speaker/writer.' },
    gap: { sentence: ['Die Autoren erklären, die Methode ', ' reproduzierbar.'], gaps: [ { answer: 'sei', accepts: ['sei'] } ], explain: 'Konjunktiv I ("sei") integrates Chapter 7\'s reported-speech mastery into an academic register sentence.' },
    match: { q: 'Match each construction to the chapter it integrates.', pairs: [ { noun: 'die validierte Datenauswertung', art: 'Chapters 15 & 22 — Partizip als Adjektiv & Kompositum' }, { noun: 'das Team verdeutliche...', art: 'Chapters 7 & 23 — Konjunktiv I & derived verb' }, { noun: 'lässt sich verifizieren', art: 'Chapter 13 — Passiversatzformen' }, { noun: 'relevant für die Analyse', art: 'Chapter 19 — Adjektive mit Ergänzungen' } ] },
    builder: { target: 'Build: "The recently validated data evaluation convinces even critical reviewers." (integrating Chapters 15, 22, 23)', bank: ['Die', 'kürzlich', 'validierte', 'Datenauswertung', 'überzeugt', 'selbst', 'kritische', 'Gutachter', '.'], answer: ['Die', 'kürzlich', 'validierte', 'Datenauswertung', 'überzeugt', 'selbst', 'kritische', 'Gutachter', '.'], roles: { 'kürzlich': 'r-integrations-pyramide', 'validierte': 'r-integrations-pyramide', 'Datenauswertung': 'r-integrations-pyramide', 'überzeugt': 'r-baum-metapher' } },
    errorCorrection: { title: 'Error correction (integrated)', wrong: 'Die Autorin erklärt, die Ergebnisse sind groß und die Firma macht das Problem einfacher.', right: 'Die Autorin erklärt, die Ergebnisse seien erheblich, und die Firma vereinfacht das Problem.', explain: 'Fixes three integrated issues: Konjunktiv I for reported speech (seien, not sind), register-precise adjective (erheblich, not groß), and the correct deadjectival derived verb (vereinfacht, from Chapter 23) instead of a vague periphrasis.' }
  },
  quiz: [
    { q: 'What is the Goethe Mini 4 memory trick for integrating Chapters 1–23?', options: ['Be an architect: grammar is material, morphology builds, vocabulary furnishes, register picks the neighborhood — design the whole city', 'Master each grammar topic in complete isolation', 'Only focus on vocabulary, ignore grammar entirely'], answer: 0, explain: 'C2 mastery means every system — grammar, morphology, vocabulary, register — works together as one coherent whole.' },
    { q: 'Which mood is used for neutral reported speech (e.g. in newspapers)?', options: ['Konjunktiv I', 'Konjunktiv II', 'Indikativ Präsens only'], answer: 0, explain: 'Konjunktiv I signals distance from a claim — reporting it without confirming it.' },
    { q: 'What determines the gender of a German compound noun like "Datenauswertung"?', options: ['The LAST element ("Auswertung", feminine)', 'The FIRST element ("Daten")', 'Compounds have no fixed gender'], answer: 0, explain: 'The head-final principle from Chapter 22: the last element of a compound always decides gender, plural, and core meaning.' },
    { q: 'This chapter introduces:', options: ['No new grammar and no new vocabulary', 'One new grammar topic', 'Several new vocabulary families'], answer: 0, explain: 'Goethe Mini 4 is a pure integration and assessment checkpoint across Chapters 1–23.' },
    { q: 'Why does "die kürzlich validierte Datenauswertung überzeugt" demonstrate integrated mastery?', options: ['It combines a participial adjective (Ch15), a compound noun (Ch22), and a derived verb (Ch23) in one sentence', 'It uses only basic present-tense verbs', 'It avoids all word formation'], answer: 0, explain: 'This sentence layers three separate word-formation and grammar chapters into one natural, native-sounding sentence.' }
  ],
  takeaways: [
    { c: 'r-stadt-metapher', html: 'C2 mastery means designing the whole city — grammar (material), morphology (buildings), vocabulary (furnishing), and register (neighborhood) all working together.' },
    { c: 'r-integrations-pyramide', html: 'Grammar builds sentences, morphology builds precise words, sentences build noun phrases and paragraphs, and register determines every choice throughout.' },
    { c: 'r-baum-metapher', html: 'The word-formation arc (Chapters 21–23) gives native-level productivity: derived adjectives, compound/derived nouns, and derived verbs, each readable by root + affix.' },
    { c: 'r-integrations-pyramide', html: 'Konjunktiv I/II, passive/alternatives, and the adjective/noun/verb formation systems must all be chosen deliberately to match one target register — not mixed at random.' }
  ],
  revisionTips: [
    'Pick one paragraph and rewrite it in four registers (academic, legal, journalistic, literary), tracking every grammar and word-formation choice that changes.',
    'Find one sentence using Konjunktiv I and one using Konjunktiv II in authentic text; explain why each mood was chosen.',
    'Take a simple idea and compress it three ways: a derived adjective, a compound noun, and a derived verb — noting which chapter each draws from.'
  ]
};
window.CHAPTER = CHAPTER;
