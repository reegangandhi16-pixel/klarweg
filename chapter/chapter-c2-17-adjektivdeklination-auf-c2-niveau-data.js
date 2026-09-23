/* KLARWEG CHAPTER DATA — C2 · Chapter 17
   "Adjektivdeklination auf C2-Niveau" — native-level mastery of
   adjective declension INSIDE complex noun phrases: modifier
   hierarchy, adjective chains, participial+adjective combinations,
   and information density across registers. NOT strong/weak/mixed
   endings or declension tables (already mastered A1/B1/B2, C1 Ch18,
   C2 Ch15/16). Structural chapter: no standalone vocab list uploaded
   — vocabulary section drills the brief's own worked adjective-chain
   phrases from Parts 4-7. Dialogue: Traudl and Timo ONLY. */
const CHAPTER = {
  id: 'c2-17-adjektivdeklination-auf-c2-niveau',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 17,
  title: 'Adjektivdeklination auf C2-Niveau',
  titleEn: 'Adjective declension at native level',
  description: 'Every noun is the center of a solar system. The adjectives are planets orbiting it. At C2, the entire system is perfectly organized — every modifier has its exact orbit and purpose.',
  xp: 1625, time: 145, difficulty: 'Mastery',
  nextChapter: { number: 18, title: 'Stilistische Nuancen & Register von Adjektiven', titleEn: 'Stylistic nuance & register in adjectives' , href: 'chapter-c2-18-stilistische-nuancen-und-register-von-adjektiven.html' },
  prevChapter: { number: 16, title: 'Nominalisierte Adjektive und Partizipien', titleEn: 'Nominalised adjectives and participles', href: 'chapter-c2-16-nominalisierte-adjektive-und-partizipien.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every noun is a <em>solar system</em> of orbiting modifiers.',
    intro: 'Editing a doctoral dissertation, Traudl wants to describe a newly developed medical method more precisely, and Timo points to the recently published results supporting it — organizing every adjective into its exact orbit around the noun.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers organize adjective chains, participial modifiers, and information hierarchy inside dense noun phrases'],
    scene: 'Überarbeitung einer Doktorarbeit',
    femaleSpeakers: ['Traudl'],
    dialogue: [
      { speaker: 'Traudl', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'neu', role: 'r-akkusativ', en: 'newly', hi: 'नई', pron: 'noy', type: 'Adverb (part of multi-modifier attribute)' },
        { w: 'entwickelte', role: 'r-akkusativ', en: 'developed', hi: 'विकसित', pron: 'ent-VI-kel-tuh', type: 'Partizip II · attributive' },
        { w: 'medizinische', role: 'r-akkusativ', en: 'medical', hi: 'चिकित्सा', pron: 'me-di-TSEE-ni-shuh', type: 'Adjective', why: 'a chain of stacked modifiers before the noun: die neu entwickelte medizinische Methode (this chapter).', ex: 'die neu entwickelte medizinische Methode', exEn: 'the newly developed medical method' },
        { w: 'Methode', role: 'r-akkusativ', en: 'method', hi: 'विधि', pron: 'me-TOH-duh', type: 'Noun · fem.' },
        { w: 'genauer', role: 'r-akkusativ', en: 'more precisely', hi: 'ज़्यादा सटीक', pron: 'ge-NOW-er', type: 'Adverb · Komparativ' },
        { w: 'beschreiben', role: 'r-verb', en: 'describe', hi: 'वर्णन करना', pron: 'be-SHRY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We should describe the newly developed medical method more precisely.', hi: 'Humein nayi vikasit chikitsa vidhi ka zyaada sateek varnan karna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'kürzlich', role: 'r-subject', en: 'recently', hi: 'हाल ही में', pron: 'KÜRTS-likh', type: 'Adverb' },
        { w: 'veröffentlichten', role: 'r-subject', en: 'published', hi: 'प्रकाशित', pron: 'fer-Ö-fent-likh-ten', type: 'Partizip II · attributive' },
        { w: 'wissenschaftlichen', role: 'r-subject', en: 'scientific', hi: 'वैज्ञानिक', pron: 'vi-sen-SHAFT-li-khen', type: 'Adjective', why: 'a chain of stacked modifiers: die kürzlich veröffentlichten wissenschaftlichen Ergebnisse (this chapter).', ex: 'die kürzlich veröffentlichten wissenschaftlichen Ergebnisse', exEn: 'the recently published scientific results' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'stützen', role: 'r-verb', en: 'support', hi: 'समर्थन करते हैं', pron: 'SHTÜT-sen', type: 'Verb · stützen' },
        { w: 'unsere', role: 'r-akkusativ', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive · acc.' },
        { w: 'These', role: 'r-akkusativ', en: 'thesis', hi: 'थीसिस', pron: 'TAY-zuh', type: 'Noun · fem. (recycled C2)' },
        { w: '.', plain: true }
      ], en: 'The recently published scientific results support our thesis.', hi: 'Haal hi mein prakaashit vaigyaanik parinaam hamaari thesis ka samarthan karte hain.' },
      { speaker: 'Traudl', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'empirisch', role: 'r-subject', en: 'empirically', hi: 'अनुभवजन्य रूप से', pron: 'em-PEE-rish', type: 'Adverb' },
        { w: 'erhobenen', role: 'r-subject', en: 'collected', hi: 'एकत्रित', pron: 'air-HOH-be-nen', type: 'Partizip II · attributive' },
        { w: 'statistischen', role: 'r-subject', en: 'statistical', hi: 'सांख्यिकीय', pron: 'shta-TIS-ti-shen', type: 'Adjective', why: 'a chain of stacked modifiers: die empirisch erhobenen statistischen Daten (this chapter).', ex: 'die empirisch erhobenen statistischen Daten', exEn: 'the empirically collected statistical data' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'डेटा', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'vollständig', role: 'r-akkusativ', en: 'complete', hi: 'पूर्ण', pron: 'FOL-shten-dikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The empirically collected statistical data are complete.', hi: 'Anubhavjanya roop se ekatrit saankhyikiya data poorn hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'experimentell', role: 'r-subject', en: 'experimentally', hi: 'प्रायोगिक रूप से', pron: 'eks-pe-ri-men-TEL', type: 'Adverb' },
        { w: 'überprüften', role: 'r-subject', en: 'verified', hi: 'सत्यापित', pron: 'ü-ber-PRÜF-ten', type: 'Partizip II · attributive' },
        { w: 'theoretischen', role: 'r-subject', en: 'theoretical', hi: 'सैद्धांतिक', pron: 'tay-o-RAY-ti-shen', type: 'Adjective', why: 'a chain of stacked modifiers: die experimentell überprüften theoretischen Modelle (this chapter).', ex: 'die experimentell überprüften theoretischen Modelle', exEn: 'the experimentally verified theoretical models' },
        { w: 'Modelle', role: 'r-subject', en: 'models', hi: 'मॉडल', pron: 'mo-DE-luh', type: 'Noun · plural' },
        { w: 'bereits', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'be-RITES', type: 'Adverb' },
        { w: 'reproduzierbar', role: 'r-akkusativ', en: 'reproducible', hi: 'दोहराने योग्य', pron: 'ray-pro-du-TSEER-bahr', type: 'Adjective (recycled C2)' },
        { w: '?', plain: true }
      ], en: 'Are the experimentally verified theoretical models already reproducible?', hi: 'Kya prayogik roop se satyaapit saidhaantik model pehle se dohraane yogya hain?' },
      { speaker: 'Traudl', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'internationale', role: 'r-akkusativ', en: 'international', hi: 'अंतरराष्ट्रीय', pron: 'in-ter-na-tsyo-NAH-luh', type: 'Adjective' },
        { w: 'Zusammenarbeit', role: 'r-akkusativ', en: 'collaboration', hi: 'सहयोग', pron: 'tsu-ZA-men-ar-byte', type: 'Noun · fem. (recycled C1)' },
        { w: 'koordinieren', role: 'r-verb', en: 'coordinate', hi: 'समन्वयित करना', pron: 'ko-or-di-NEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. We only must coordinate the international collaboration.', hi: 'Haan. Humein sirf antararashtriya sahyog samanvit karna hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'reiche', role: 'r-verb', en: 'submit', hi: 'जमा करता हूँ', pron: 'RY-khuh', type: 'Verb · einreichen (ich, recycled C1)', lexicalUnit: 'einreichen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Antrag', role: 'r-akkusativ', en: 'application', hi: 'आवेदन', pron: 'AN-trahk', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'ein', role: 'r-verb', en: '(prefix of einreichen)', hi: '', pron: 'ine', type: 'Separable prefix · Satzende', lexicalUnit: 'einreichen' },
        { w: '.', plain: true }
      ], en: 'Good, then I will submit the application tomorrow.', hi: 'Achha, toh main kal aavedan jama karunga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every noun is a <span class="de r-sonnensystem-metapher">solar system</span> — adjectives are planets, and each needs its exact orbit.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is ADJEKTIVDEKLINATION AUF C2-NIVEAU — native-level mastery of adjective declension INSIDE complex noun phrases: modifier hierarchy, adjective chains, and information density, NOT strong/weak/mixed adjective endings or declension tables (already fully mastered A1/B1/B2, C1 Ch18, C2 Ch15/16). Covered: the noun → single modifier → multiple modifiers → participial modifier → complex noun phrase → reader processing progression; natural modifier hierarchy/ordering (die neu entwickelte medizinische Methode; die langfristig geplante internationale Zusammenarbeit; die wissenschaftlich fundierten wirtschaftspolitischen Maßnahmen); participial+adjective layering (die entwickelte Methode → die neu entwickelte Methode → die wissenschaftlich entwickelte Methode → die international anerkannte wissenschaftlich entwickelte Methode); academic noun phrases (die kürzlich veröffentlichten wissenschaftlichen Ergebnisse, die empirisch erhobenen statistischen Daten); scientific noun phrases (die experimentell überprüften theoretischen Modelle, die reproduzierbaren experimentellen Ergebnisse); legal/administrative noun phrases (die rechtskräftig festgestellten persönlichen Angaben, die ordnungsgemäß eingereichten vollständigen Unterlagen); journalism (die international bekannten politischen Persönlichkeiten); and the information-density trade-off (simple NP → relative clause → participial modifier → adjective chain → maximum density) where readability must be balanced against precision. The most important things to catch: overloading noun phrases with too many stacked modifiers past readability; unnatural adjective ordering (not following the native hierarchy of adverb-modified-participle + descriptive adjective + noun); translating English adjective order directly instead of the natural German modifier sequence; excessive modifier stacking that obscures the core noun; ignoring readability in favor of maximal density; using a register-inappropriate adjective chain (heavily stacked legal-style phrase in casual writing, or vice versa). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag overloaded/unreadable adjective chains; flag unnatural modifier ordering; flag English-style adjective order; flag register-mismatched noun phrase density. Do NOT flag basic adjective ending/declension errors as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around modifier hierarchy/readability/register). If none: <li>No errors — well done.</li> 3) <p><b>Solar-system check:</b> one sentence on whether every modifier in the learner\'s noun phrases has its "exact orbit" — well-ordered and readable, not overloaded.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — every modifier in your noun phrases has its exact orbit. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Density Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: every noun is a solar system, and every adjective needs its exact orbit.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'neu', role: 'r-adjektivkette' }, { w: 'entwickelte', role: 'r-adjektivkette' }, { w: 'medizinische', role: 'r-adjektivkette' }, { w: 'Methode', role: 'plain' }, { w: 'überzeugt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every noun is a solar system, and every adjective needs its exact orbit.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Traudl and Timo reorganize noun phrases in a dissertation for hierarchy and readability.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic academic, scientific, legal, and journalistic adjective-chain noun phrases — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master modifier hierarchy, adjective chains, participial+adjective layering, and register-based density.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, scientific publication, and legal commentary for noun phrase architecture.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify complex noun phrases, adjective sequences, and information hierarchy in a lecture, conference, and policy presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice reformulating noun phrases and explaining modifier order at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Upgrade simple noun phrases, edit for hierarchy, and write a 600-word academic paper.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill modifier hierarchy, adjective chain construction, participial integration, and information density.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1625 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter adjective-chain noun phrases with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Modifier hierarchy, adjective chain construction, and register selection drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Noun Phrase Architecture Model, Density Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'die neu entwickelte medizinische Methode', text: 'Layer adverb + participial adjective + descriptive adjective before one noun' },
    { de: 'die international anerkannte wissenschaftlich entwickelte Methode', text: 'Build a four-layer adjective chain with clear information hierarchy' },
    { de: 'die kürzlich veröffentlichten wissenschaftlichen Ergebnisse', text: 'Use academic-register stacked modifiers naturally' },
    { de: 'die rechtskräftig festgestellten persönlichen Angaben', text: 'Use legal-register adjective chains for maximum precision' },
    { de: 'Ein Sonnensystem aus Adjektiven.', text: 'Understand the chapter\'s core "solar system" metaphor for modifier hierarchy' }
  ],
  vocab: [
    { de: 'die neu entwickelte medizinische Methode', pos: 'adjective chain (adverb + Partizip II + adjective)', level: 'C2', register: 'academic/scientific', en: 'the newly developed medical method', hi: 'नई विकसित चिकित्सा पद्धति', synonyms: null, antonyms: null, ex: 'Die neu entwickelte medizinische Methode zeigt vielversprechende Ergebnisse.', exEn: 'The newly developed medical method shows promising results.', exHi: 'Nayi vikasit chikitsa paddhati aashaajanak parinaam dikhaati hai.', ex2: 'Ärzte weltweit testen die neu entwickelte medizinische Methode.', ex2En: 'Doctors worldwide are testing the newly developed medical method.', ex2Hi: 'Duniya bhar ke doctors nayi vikasit chikitsa paddhati ko test kar rahe hain.' },
    { de: 'die langfristig geplante internationale Zusammenarbeit', pos: 'adjective chain', level: 'C2', register: 'political/professional', en: 'the long-term planned international cooperation', hi: 'दीर्घकालिक नियोजित अंतरराष्ट्रीय सहयोग', synonyms: null, antonyms: null, ex: 'Die langfristig geplante internationale Zusammenarbeit stärkt beide Länder.', exEn: 'The long-term planned international cooperation strengthens both countries.', exHi: 'Deerghkaalik niyojit antarrashtriya sahyog dono deshon ko majboot karta hai.', ex2: 'Ohne die langfristig geplante internationale Zusammenarbeit wäre das Projekt gescheitert.', ex2En: 'Without the long-term planned international cooperation, the project would have failed.', ex2Hi: 'Deerghkaalik niyojit antarrashtriya sahyog ke bina, project vifal ho jaata.' },
    { de: 'die wissenschaftlich fundierten wirtschaftspolitischen Maßnahmen', pos: 'adjective chain', level: 'C2', register: 'academic/political', en: 'the scientifically well-founded economic policy measures', hi: 'वैज्ञानिक रूप से सुदृढ़ आर्थिक-नीतिगत उपाय', synonyms: null, antonyms: null, ex: 'Die wissenschaftlich fundierten wirtschaftspolitischen Maßnahmen wurden einstimmig beschlossen.', exEn: 'The scientifically well-founded economic policy measures were adopted unanimously.', exHi: 'Vaigyaanik roop se sudridh aarthik-neetigat upaay sarvasammati se paarit kiye gaye.', ex2: 'Kritiker bezweifeln die Wirksamkeit der wissenschaftlich fundierten wirtschaftspolitischen Maßnahmen.', ex2En: 'Critics doubt the effectiveness of the scientifically well-founded economic policy measures.', ex2Hi: 'Aalochak vaigyaanik roop se sudridh aarthik-neetigat upaayon ki prabhaavshiiltha par sandeh karte hain.' },
    { de: 'die international anerkannte wissenschaftlich entwickelte Methode', pos: 'layered adjective chain (4 modifiers)', level: 'C2', register: 'academic/scientific', en: 'the internationally recognized, scientifically developed method', hi: 'अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त, वैज्ञानिक रूप से विकसित पद्धति', synonyms: null, antonyms: null, ex: 'Die international anerkannte wissenschaftlich entwickelte Methode wird nun weltweit eingesetzt.', exEn: 'The internationally recognized, scientifically developed method is now used worldwide.', exHi: 'Antarrashtriya maanyata praapt, vaigyaanik roop se vikasit paddhati ab duniya bhar mein istemaal ki jaati hai.', ex2: 'Die Kommission bewertete die international anerkannte wissenschaftlich entwickelte Methode positiv.', ex2En: 'The commission evaluated the internationally recognized, scientifically developed method positively.', ex2Hi: 'Commission ne antarrashtriya maanyata praapt, vaigyaanik roop se vikasit paddhati ka sakaaraatmak moolyaankan kiya.' },
    { de: 'die kürzlich veröffentlichten wissenschaftlichen Ergebnisse', pos: 'adjective chain (adverb + Partizip II + adjective)', level: 'C2', register: 'academic', en: 'the recently published scientific results', hi: 'हाल ही में प्रकाशित वैज्ञानिक परिणाम', synonyms: null, antonyms: null, ex: 'Die kürzlich veröffentlichten wissenschaftlichen Ergebnisse überraschten die Fachwelt.', exEn: 'The recently published scientific results surprised the scientific community.', exHi: 'Haal hi mein prakashit vaigyaanik parinaam ne vaigyaanik samuday ko hairaan kar diya.', ex2: 'Die kürzlich veröffentlichten wissenschaftlichen Ergebnisse widersprechen früheren Studien.', ex2En: 'The recently published scientific results contradict earlier studies.', ex2Hi: 'Haal hi mein prakashit vaigyaanik parinaam pehle ke studies se vipreet hain.' },
    { de: 'die empirisch erhobenen statistischen Daten', pos: 'adjective chain', level: 'C2', register: 'academic/scientific', en: 'the empirically collected statistical data', hi: 'अनुभवजन्य रूप से एकत्रित सांख्यिकीय डेटा', synonyms: null, antonyms: null, ex: 'Die empirisch erhobenen statistischen Daten bestätigen die Hypothese.', exEn: 'The empirically collected statistical data confirm the hypothesis.', exHi: 'Anubhavjanya roop se ikattha kiya gaya statistical data hypothesis ki pushti karta hai.', ex2: 'Die empirisch erhobenen statistischen Daten wurden sorgfältig ausgewertet.', ex2En: 'The empirically collected statistical data were carefully evaluated.', ex2Hi: 'Anubhavjanya roop se ikattha kiya gaya statistical data saavdhaani se vishleshit kiya gaya.' },
    { de: 'die experimentell überprüften theoretischen Modelle', pos: 'adjective chain', level: 'C2', register: 'scientific', en: 'the experimentally verified theoretical models', hi: 'प्रायोगिक रूप से सत्यापित सैद्धांतिक मॉडल', synonyms: null, antonyms: null, ex: 'Die experimentell überprüften theoretischen Modelle stimmen mit den Beobachtungen überein.', exEn: 'The experimentally verified theoretical models agree with the observations.', exHi: 'Prayogik roop se satyaapit saidhantik models observations se mel khaate hain.', ex2: 'Die experimentell überprüften theoretischen Modelle bilden die Grundlage der Theorie.', ex2En: 'The experimentally verified theoretical models form the basis of the theory.', ex2Hi: 'Prayogik roop se satyaapit saidhantik models theory ka aadhaar banaate hain.' },
    { de: 'die reproduzierbaren experimentellen Ergebnisse', pos: 'adjective chain', level: 'C2', register: 'scientific', en: 'the reproducible experimental results', hi: 'पुनरुत्पादनीय प्रायोगिक परिणाम', synonyms: null, antonyms: null, ex: 'Die reproduzierbaren experimentellen Ergebnisse stärken die Glaubwürdigkeit der Studie.', exEn: 'The reproducible experimental results strengthen the credibility of the study.', exHi: 'Punarutpadaneey prayogik parinaam study ki vishwasniyata ko majboot karte hain.', ex2: 'Nur die reproduzierbaren experimentellen Ergebnisse wurden veröffentlicht.', ex2En: 'Only the reproducible experimental results were published.', ex2Hi: 'Sirf punarutpadaneey prayogik parinaam hi prakashit kiye gaye.' },
    { de: 'die rechtskräftig festgestellten persönlichen Angaben', pos: 'adjective chain', level: 'C2', register: 'legal/administrative', en: 'the legally established personal details', hi: 'कानूनी रूप से स्थापित व्यक्तिगत विवरण', synonyms: null, antonyms: null, ex: 'Die rechtskräftig festgestellten persönlichen Angaben dürfen nicht verändert werden.', exEn: 'The legally established personal details may not be changed.', exHi: 'Kaanooni roop se sthaapit vyaktigat vivaran badle nahi jaa sakte.', ex2: 'Die rechtskräftig festgestellten persönlichen Angaben werden vertraulich behandelt.', ex2En: 'The legally established personal details are treated confidentially.', ex2Hi: 'Kaanooni roop se sthaapit vyaktigat vivaran gopniya taur par treat kiye jaate hain.' },
    { de: 'die ordnungsgemäß eingereichten vollständigen Unterlagen', pos: 'adjective chain', level: 'C2', register: 'legal/administrative', en: 'the properly submitted complete documents', hi: 'नियमानुसार प्रस्तुत पूर्ण दस्तावेज़', synonyms: null, antonyms: null, ex: 'Die ordnungsgemäß eingereichten vollständigen Unterlagen wurden fristgerecht geprüft.', exEn: 'The properly submitted complete documents were reviewed on time.', exHi: 'Niyamaanusaar prastut poorna dastaavez samay par jaanche gaye.', ex2: 'Nur die ordnungsgemäß eingereichten vollständigen Unterlagen werden bearbeitet.', ex2En: 'Only the properly submitted complete documents will be processed.', ex2Hi: 'Sirf niyamaanusaar prastut poorna dastaavez hi process kiye jaate hain.' },
    { de: 'die gesetzlich vorgeschriebenen administrativen Verfahren', pos: 'adjective chain', level: 'C2', register: 'legal/administrative', en: 'the legally prescribed administrative procedures', hi: 'कानूनी रूप से निर्धारित प्रशासनिक प्रक्रियाएँ', synonyms: null, antonyms: null, ex: 'Die gesetzlich vorgeschriebenen administrativen Verfahren müssen eingehalten werden.', exEn: 'The legally prescribed administrative procedures must be observed.', exHi: 'Kaanooni roop se nirdhaarit prashaasanik prakriyaon ka paalan karna hoga.', ex2: 'Die gesetzlich vorgeschriebenen administrativen Verfahren wurden vereinfacht.', ex2En: 'The legally prescribed administrative procedures have been simplified.', ex2Hi: 'Kaanooni roop se nirdhaarit prashaasanik prakriyaayein saral banaayi gayi hain.' },
    { de: 'die international bekannten politischen Persönlichkeiten', pos: 'adjective chain', level: 'C2', register: 'journalism', en: 'the internationally known political figures', hi: 'अंतरराष्ट्रीय स्तर पर प्रसिद्ध राजनीतिक हस्तियाँ', synonyms: null, antonyms: null, ex: 'Die international bekannten politischen Persönlichkeiten trafen sich zum Gipfel.', exEn: 'The internationally known political figures met for the summit.', exHi: 'Antarrashtriya star par prasiddh rajnitik hastiyaan summit ke liye milin.', ex2: 'Mehrere international bekannte politische Persönlichkeiten äußerten sich kritisch.', ex2En: 'Several internationally known political figures spoke critically.', ex2Hi: 'Kai antarrashtriya star par prasiddh rajnitik hastiyon ne aalochanaatmak roop se baat ki.' },
    { de: 'die wirtschaftlich besonders betroffenen Regionen', pos: 'adjective chain', level: 'C2', register: 'journalism/academic', en: 'the economically especially affected regions', hi: 'आर्थिक रूप से विशेष रूप से प्रभावित क्षेत्र', synonyms: null, antonyms: null, ex: 'Die wirtschaftlich besonders betroffenen Regionen erhalten zusätzliche Unterstützung.', exEn: 'The economically especially affected regions receive additional support.', exHi: 'Aarthik roop se vishesh roop se prabhaavit kshetron ko atirikt sahaayata milti hai.', ex2: 'Die wirtschaftlich besonders betroffenen Regionen liegen vor allem im Norden.', ex2En: 'The economically especially affected regions lie mainly in the north.', ex2Hi: 'Aarthik roop se vishesh roop se prabhaavit kshetra mukhya roop se uttar mein hain.' }
  ],
  grammar: [
    { title: 'Warum komplexe Adjektivdeklination zählt (Why Complex Adjective Declension Matters)', body: [ 'Noun → Single Modifier → Multiple Modifiers → Participial Modifier → Complex Noun Phrase → Reader Processing. Advanced German prefers rich noun phrases over multiple short sentences.' ], hinglish: 'C2 par sentences naye clauses jodkar lambe nahi hote \u2014 woh noun phrase ko bhar kar lambe hote hain. Isliye kai chhote sentences ki jagah ek hi noun ke aage teen-chaar modifiers aa jaate hain. Par yaad rakho: jitne bhi adjectives aayein, sab par <b>ek hi</b> ending lagti hai.' },
    { title: 'Modifikator-Hierarchie (Modifier Hierarchy)', body: [ 'die neu entwickelte medizinische Methode → die langfristig geplante internationale Zusammenarbeit → die wissenschaftlich fundierten wirtschaftspolitischen Maßnahmen. Adjective ordering follows a natural hierarchy, not arbitrary stacking.' ], hinglish: 'Adjectives ka order random nahi hota. Aasaan rule yeh hai \u2014 jo adjective noun ko <b>classify</b> karta hai woh noun ke sabse paas baithta hai, aur jo sirf raay ya samay batata hai woh door. Isliye <span class="de">die neu entwickelte <b>medizinische</b> Methode</span> \u2014 <i>medizinisch</i> batata hai ki yeh <b>kis kism</b> ki method hai, isliye woh noun se sat kar aata hai.' },
    { title: 'Partizip + Adjektiv Kombinationen (Participial + Adjective Combinations)', body: [ 'die entwickelte Methode → die neu entwickelte Methode → die wissenschaftlich entwickelte Methode → die international anerkannte wissenschaftlich entwickelte Methode. Each layer adds one piece of information hierarchically.' ], hinglish: 'Har step par ek nayi layer judti hai. Dhyaan do ki <i>neu</i>, <i>wissenschaftlich</i> aur <i>international</i> par koi ending nahi lagti \u2014 yeh adverbs hain aur participle ko bata rahe hain. Aur ek practical baat: aakhri example padhne mein bhaari hai. Do-teen modifiers tak theek hai, uske baad baaki ko relative clause mein daal dena behtar hai.' },
    { title: 'Register-spezifische Adjektivketten (Register-Specific Adjective Chains)', body: [ 'Chaaron examples ka pattern ek hi hai \u2014 pehle ek adverb (bina ending), phir ek participle, phir ek classifying adjective, phir noun. Aur dhyaan do ki chaaron plural hain, isliye har adjective par <b>-en</b> laga hai. Yeh forms academic, scientific, official aur news texts mein baar-baar milengi, isliye inhe pehchaanna reading mein bahut kaam aata hai.' ], hinglish: 'Chaaron examples ka pattern ek hi hai \u2014 pehle ek adverb (bina ending), phir ek participle, phir ek classifying adjective, phir noun. Aur dhyaan do ki chaaron plural hain, isliye har adjective par <b>-en</b> laga hai. Yeh forms academic, scientific, official aur news texts mein baar-baar milengi, isliye inhe pehchaanna reading mein bahut kaam aata hai.' },
    {
      title: 'Die Endungen in der Kette',
      body: [
        'This chapter is about declension, so here is the rule it turns on: every adjective in a chain takes the SAME ending, decided by the article, gender and case of the noun \u2014 not by its own position.',
        'One thing does NOT take an ending: an adverb modifying the adjective (<i>neu</i>, <i>wissenschaftlich</i>, <i>international</i>, <i>k\u00fcrzlich</i>) stays bare.'
      ],
      table: {
        head: ['Phrase', 'Ending on every adjective'],
        rows: [
          ['Nom. sg. after die', '<span class="de">die neu entwickelt<b>e</b> medizinisch<b>e</b> Methode</span>'],
          ['Nom. pl. after die', '<span class="de">die neu entwickelt<b>en</b> medizinisch<b>en</b> Methoden</span>'],
          ['after ein (fem.)', '<span class="de">eine wissenschaftlich fundiert<b>e</b> Ma\u00dfnahme</span>'],
          ['after ein (neut.)', '<span class="de">ein wissenschaftlich fundiert<b>es</b> Modell</span>'],
          ['Dativ pl. after mit', '<span class="de">mit den ver\u00f6ffentlicht<b>en</b> Ergebniss<b>en</b></span>'],
          ['Genitiv pl.', '<span class="de">der festgestellt<b>en</b> pers\u00f6nlich<b>en</b> Angaben</span>']
        ]
      },
      note: 'Test for the bare word: if it describes the ADJECTIVE it is an adverb and takes nothing (<i>neu entwickelt</i>). If it describes the NOUN it is an adjective and must be declined (<i>medizinische Methode</i>).',
      hinglish: 'Yeh chapter declension ke baare mein hai, isliye asli rule yeh hai \u2014 chain mein <b>har</b> adjective par <b>ek hi</b> ending lagti hai, aur woh noun ke article, gender aur case se tay hoti hai, adjective ki jagah se nahi. Isliye <span class="de">die neu entwickelt<b>en</b> medizinisch<b>en</b> Methoden</span> \u2014 dono par <b>-en</b>. Aadhe raste mein declension band nahi hoti. Ek cheez par ending <b>nahi</b> lagti: jo shabd adjective ko describe kar raha hai (<i>neu</i>, <i>wissenschaftlich</i>, <i>international</i>) woh adverb hai aur khaali rehta hai. Test simple hai \u2014 agar woh shabd <b>adjective</b> ko bata raha hai to adverb hai, aur agar <b>noun</b> ko bata raha hai to adjective hai aur uspar ending lagegi.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to its main function and preferred register.' ], table: { head: ['Structure', 'Main Function', 'Preferred Register'], rows: [ ['Single Adjective', 'Basic Description', 'General'], ['Multiple Adjectives', 'Detailed Description', 'Professional'], ['Participial Modifier', 'Compression', 'Academic'], ['Adjective Chain', 'Information Density', 'Scientific'], ['Complex Noun Phrase', 'Maximum Precision', 'Legal & Administrative'] ] }, hinglish: 'Structure, function aur register ka table \u2014 par structure chunne ke baad endings zaroor check karo, kyunki asli galtiyan wahin hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are endings \u2014 the article, the case, and the fact that EVERY adjective in a chain repeats the same ending. The last shows the readability limit.' ], mistakes: [
      { wrong: 'die neu entwickelte medizinische Methoden', right: 'die neu entwickelten medizinischen Methoden', why: 'ALL adjectives in a chain take the same ending. Plural after <i>die</i> means <b>-en</b> on every one of them, not just the last.' },
      { wrong: 'die medizinische neu entwickelte Methode', right: 'die neu entwickelte medizinische Methode', why: 'The adjective that classifies the noun sits closest to it. <i>medizinisch</i> says what KIND of method it is, so it comes last.' },
      { wrong: 'ein wissenschaftlich fundierte Ma\u00dfnahme', right: 'eine wissenschaftlich fundierte Ma\u00dfnahme', why: 'The article agrees too. <i>die Ma\u00dfnahme</i> is feminine, so it is <b>eine</b> \u2014 and note <i>wissenschaftlich</i> is an adverb here, so it takes no ending at all.' },
      { wrong: 'mit den k\u00fcrzlich ver\u00f6ffentlichte Ergebnissen', right: 'mit den k\u00fcrzlich ver\u00f6ffentlichten Ergebnissen', why: 'After <b>mit</b> the phrase is Dativ plural, so the adjective takes <b>-en</b> \u2014 the case reaches every adjective in the chain.' },
      { wrong: 'die international anerkannte wissenschaftlich entwickelte umfassend gepr\u00fcfte sorgf\u00e4ltig dokumentierte Methode', right: 'die international anerkannte Methode, die wissenschaftlich entwickelt und sorgf\u00e4ltig dokumentiert wurde', why: 'Grammatically possible, but the reader waits too long for the noun. Beyond two or three modifiers, move the rest into a relative clause.' },
      { wrong: 'des rechtskr\u00e4ftig festgestellten pers\u00f6nliche Angaben', right: 'der rechtskr\u00e4ftig festgestellten pers\u00f6nlichen Angaben', why: 'Genitiv plural takes <b>der</b>, and both adjectives take <b>-en</b>. A chain does not let you stop declining halfway.' }
    ], hinglish: 'Paanch galtiyan endings ki hain \u2014 article, case, aur yeh baat ki chain ke <b>har</b> adjective par wahi ending dohraani padti hai. Aur aakhri wali readability ki limit dikhati hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need more detail? Can it fit into a modifier? Need a participial construction? Need additional adjective layers? Will readability remain high? Choose the most elegant noun phrase.' ], note: 'Memory trick: imagine every noun is the center of a solar system. The adjectives are planets orbiting it. At A1 there is only one planet. At B2 there are two or three. At C2, the entire solar system is perfectly organized — every modifier has its exact orbit and purpose. If one planet is misplaced, the whole system feels unnatural.', hinglish: 'Detail jodni hai? Pehle dekho ki woh ek modifier mein aa sakti hai ya nahi. Aur jodne ke baad do cheezein check karo \u2014 classifying adjective noun ke sabse paas hai, aur chain ke har adjective par ek hi ending lagi hai. Aur agar noun tak pahunchne mein reader ko der lag rahi hai, to baaki jaankaari relative clause mein daal do.' }
  ],
  reading: {
    title: 'Fachjournal: Neue Antikörper gegen resistente Bakterien entdeckt',
    titleEn: 'Reading A — Journal: new antibodies against resistant bacteria discovered',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'kürzlich', role: 'r-adjektivkette', en: 'recently (adverb, part of the layered academic adjective chain)', hi: '(adjective chain)', type: 'Adverb' },
      { w: 'entdeckten', role: 'r-adjektivkette', en: 'discovered (Partizip II as adjective, part of the chain)', hi: 'खोजे गए (chain का हिस्सा)', type: 'Partizip II als Adjektiv' },
      { w: 'mikrobiologischen', role: 'r-adjektivkette', en: 'microbiological (descriptive adjective, Satzende, completing the three-layer chain)', hi: 'सूक्ष्मजैविक (Satzende, adjective chain)', type: 'Adjective · Nom. (Satzende)', why: 'This three-layer chain (adverb + participial adjective + descriptive adjective) packs recency, discovery status, and field into one noun phrase before the noun.' },
      { w: 'Wirkstoffe', role: 'plain', en: 'active compounds (Satzende)', hi: 'सक्रिय यौगिक (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'überraschten', role: 'plain', en: 'surprised', hi: 'हैरान कर दिया', type: 'Verb (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article' },
      { w: 'Fachwelt', role: 'plain', en: 'scientific community (Satzende)', hi: 'वैज्ञानिक समुदाय (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The recently discovered microbiological active compounds surprised the scientific community.',
    comprehension: [
      { q: 'Wie viele Modifikatoren stehen vor "Wirkstoffe"?', options: ['Drei (kürzlich, entdeckten, mikrobiologischen)', 'Nur einer', 'Keiner'], answer: 0 },
      { q: 'Welche Information trägt "kürzlich" bei?', options: ['Zeitangabe (Rezenz)', 'Entdeckungsstatus', 'Fachgebiet'], answer: 0 },
      { q: 'Warum wird diese Adjektivkette einem einzelnen Adjektiv vorgezogen?', options: ['Um mehrere Informationsebenen kompakt zu bündeln', 'Weil ein einzelnes Adjektiv grammatisch falsch wäre', 'Aus Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Rechtlicher Kommentar', titleEn: 'Reading C — Legal commentary',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'yeh', type: 'Article' },
      { w: 'rechtskräftig', role: 'r-adjektivkette', en: 'legally (adverb, part of the legal adjective chain)', hi: '(legal adjective chain)', type: 'Adverb' },
      { w: 'festgestellten', role: 'r-adjektivkette', en: 'established (Partizip II as adjective, part of the chain)', hi: '(chain ka hissa)', type: 'Partizip II als Adjektiv' },
      { w: 'persönlichen', role: 'r-adjektivkette', en: 'personal (descriptive adjective, Satzende, completing the chain)', hi: '(Satzende, adjective chain)', type: 'Adjective · Nom. (Satzende)' },
      { w: 'Angaben', role: 'plain', en: 'details (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'dürfen', role: 'plain', en: 'may', hi: 'sakte hain', type: 'Modalverb (Präsens)' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'nahi', type: 'Negationspartikel' },
      { w: 'verändert', role: 'plain', en: 'changed', hi: 'badla', type: 'Partizip II' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: 'jaana (Satzende)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The legally established personal details may not be changed.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_017_L001', speaker: 'Traudl', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie beschreibe ich diese neu entwickelte Methode am treffendsten?', en: 'Timo, how do I describe this newly developed method most fittingly?' },
      { id: 'C2_017_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Die kürzlich veröffentlichten Ergebnisse unterstützen sie jedenfalls eindeutig.', en: 'The recently published results clearly support it, in any case.' },
      { id: 'C2_017_L003', speaker: 'Traudl', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht: eine bisher wenig erprobte, aber äußerst vielversprechende Methode.', en: 'Maybe: a so-far little-tested but extremely promising method.' },
      { id: 'C2_017_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau diese Formulierung sollten wir in der Zusammenfassung übernehmen.', en: 'We should adopt exactly that phrasing in the summary.' }
    ],
    transcript: 'Timo, wie beschreibe ich diese neu entwickelte Methode am treffendsten? Die kürzlich veröffentlichten Ergebnisse unterstützen sie jedenfalls eindeutig. Vielleicht: eine bisher wenig erprobte, aber äußerst vielversprechende Methode. Genau diese Formulierung sollten wir in der Zusammenfassung übernehmen.',
    translation: 'Timo, how do I describe this newly developed method most fittingly? The recently published results clearly support it, in any case. Maybe: a so-far little-tested but extremely promising method. We should adopt exactly that phrasing in the summary.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'beschreibe' },
      { w: 'ich' },
      { w: 'diese' },
      { w: 'neu' },
      { w: 'entwickelte' },
      { w: 'Methode' },
      { w: 'am' },
      { w: 'treffendsten' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'kürzlich' },
      { w: 'veröffentlichten' },
      { w: 'Ergebnisse' },
      { w: 'unterstützen' },
      { w: 'sie' },
      { w: 'jedenfalls' },
      { w: 'eindeutig' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: ':', plain: true },
      { w: 'eine' },
      { w: 'bisher' },
      { w: 'wenig' },
      { w: 'erprobte' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'äußerst' },
      { w: 'vielversprechende' },
      { w: 'Methode' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: 'diese' },
      { w: 'Formulierung' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'in' },
      { w: 'der' },
      { w: 'Zusammenfassung' },
      { w: 'übernehmen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was stützt die neue Methode?', qEn: 'What supports the new method?', options: ['ältere Studien', 'die kürzlich veröffentlichten Ergebnisse', 'Traudls Meinung', 'nichts'], optionsEn: ['older studies', 'the recently published results', 'Traudl\'s opinion', 'nothing'], answer: 1,
        explain: '"Die kürzlich veröffentlichten Ergebnisse unterstützen sie eindeutig."' },
      { q: 'Wie formuliert Traudl ihre Beschreibung?', qEn: 'How does Traudl phrase her description?', options: ['eine bewährte, sichere Methode', 'eine bisher wenig erprobte, aber vielversprechende Methode', 'eine veraltete Methode', 'eine unbrauchbare Methode'], optionsEn: ['a proven, safe method', 'a so far little-tested but promising method', 'an outdated method', 'an unusable method'], answer: 1,
        explain: '"Eine bisher wenig erprobte, aber äußerst vielversprechende Methode."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie er die neu entwickelte Methode am treffendsten beschreibt.", taskEn: "Timo asks how best to describe the newly developed method.", de: "Die kürzlich veröffentlichten Ergebnisse unterstützen die neu entwickelte Methode eindeutig.", en: "The recently published results clearly support the newly developed method." },
    { task: "Die Herausgeberin fragt nach dem Titel deines Aufsatzes.", taskEn: "The editor asks for the title of your essay.", de: "Er heißt: die anhaltend hohe soziale Ungleichheit in ostdeutschen Kleinstädten.", en: "It's called: the persistently high social inequality in small East German towns." },
    { task: "Stell dein Ergebnis in zwei dichten Phrasen vor.", taskEn: "Present your result in two dense phrases.", de: "Ein methodisch sorgfältig angelegter Vergleich und eine überraschend stabile Struktur.", en: "A methodologically careful comparison and a surprisingly stable structure." },
    { task: "Ein Student stellt die Adjektive falsch. Sag die richtige Reihenfolge.", taskEn: "A student orders the adjectives wrongly. Give the correct sequence.", de: "Erst die Bewertung, dann die Eigenschaft, zuletzt die Herkunft.", en: "First the evaluation, then the quality, last the origin." },
    { task: "Vier Adjektive tragen den Satz nicht mehr. Was schlägst du vor?", taskEn: "Four adjectives no longer carry the sentence. What do you propose?", de: "Wir behalten zwei und verschieben die Herkunft in einen Nebensatz.", en: "We'll keep two and move the origin into a subordinate clause." }
  ],
  writing: {
    prompt: 'TASK 1 — Noun phrase upgrade (150 words): Rewrite simple noun phrases using sophisticated adjective chains. Explain every stylistic improvement.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving noun phrase architecture and adjective hierarchy. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic paper naturally integrating advanced adjective chains, participial modifiers, and information-dense noun phrases across academic, scientific, and legal registers.',
    starters: ['Die neu entwickelte...', 'Die international anerkannte...', 'Die rechtskräftig festgestellten...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Adjektivketten und Modifikator-Hierarchie...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which best demonstrates a well-organized, layered adjective chain?', options: ['die neu entwickelte medizinische Methode', 'die neue medizinisch Methode entwickelt', 'die Methode neu entwickelte medizinische'], answer: 0, explain: 'The natural hierarchy places the adverb-modified participle before the descriptive adjective, both before the noun.' },
    gap: { sentence: ['Die ', ' Ergebnisse überraschten die Fachwelt.'], gaps: [ { answer: 'kürzlich veröffentlichten wissenschaftlichen', accepts: ['kürzlich veröffentlichten wissenschaftlichen'] } ], explain: 'This three-layer academic adjective chain packs recency, publication status, and field into one compact phrase.' },
    match: { q: 'Match each adjective chain to its typical register.', pairs: [ { noun: 'die rechtskräftig festgestellten persönlichen Angaben', art: 'Legal/Administrative' }, { noun: 'die experimentell überprüften theoretischen Modelle', art: 'Scientific' }, { noun: 'die kürzlich veröffentlichten wissenschaftlichen Ergebnisse', art: 'Academic' }, { noun: 'die international bekannten politischen Persönlichkeiten', art: 'Journalism' } ] },
    builder: { target: 'Build: "The newly developed medical method convinces." (layered adjective chain)', bank: ['Die', 'neu', 'entwickelte', 'medizinische', 'Methode', 'überzeugt', '.'], answer: ['Die', 'neu', 'entwickelte', 'medizinische', 'Methode', 'überzeugt', '.'], roles: { 'neu': 'r-adjektivkette', 'entwickelte': 'r-adjektivkette', 'medizinische': 'r-adjektivkette' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Methode neu wissenschaftlich international anerkannt entwickelte ist gut.', right: 'Die international anerkannte, wissenschaftlich entwickelte, neue Methode ist gut.', explain: 'The original scrambles modifier order past readability; the correction follows the natural hierarchy while keeping all four pieces of information intact.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for adjective declension in this chapter?', options: ['Every noun is a solar system; adjectives are planets, and each needs its exact orbit', 'Adjective order in German is completely random', 'Only one adjective can ever precede a noun'], answer: 0, explain: 'C2 mastery means organizing modifiers hierarchically, like planets in orbit, not stacking them arbitrarily.' },
    { q: 'What is the real C2-level challenge with adjective declension, according to this chapter?', options: ['Organizing information inside noun phrases, not choosing endings', 'Memorizing strong/weak/mixed declension tables', 'Learning new adjective endings'], answer: 0, explain: 'At C2, declension endings are already mastered — the challenge is modifier hierarchy and information density.' },
    { q: 'Which is a classic C2-level mistake with adjective chains?', options: ['Overloading noun phrases with too many stacked modifiers', 'Never using more than one adjective', 'Avoiding participial modifiers entirely'], answer: 0, explain: 'Excessive stacking overwhelms the reader even if each individual ending is grammatically correct.' },
    { q: 'Why does "die rechtskräftig festgestellten persönlichen Angaben" suit legal register?', options: ['Legal German favors dense, precise adjective chains for maximum precision', 'Because legal register avoids all adjectives', 'Because it is shorter than alternatives'], answer: 0, explain: 'Legal and administrative register relies on dense modifier chains for institutional precision.' },
    { q: 'What is the natural order in a layered adjective chain like "die neu entwickelte medizinische Methode"?', options: ['Adverb-modified participle, then descriptive adjective, then noun', 'Descriptive adjective, then adverb, then noun, then participle', 'Completely free word order with no hierarchy'], answer: 0, explain: 'German follows a natural modifier hierarchy rather than arbitrary or English-style ordering.' }
  ],
  takeaways: [
    { c: 'r-sonnensystem-metapher', html: 'Every noun is a solar system — adjectives are planets orbiting it, each needing its exact place in the hierarchy.' },
    { c: 'r-adjektivkette', html: 'Layered adjective chains (die neu entwickelte medizinische Methode) pack multiple pieces of information hierarchically before one noun.' },
    { c: 'r-adjektivkette', html: 'Register shapes chain density: legal/scientific favor dense chains, casual conversation favors single adjectives.' },
    { c: 'r-adjektivkette', html: 'C2 mastery is information architecture, not ending selection — organizing modifiers, not memorizing declension tables.' }
  ],
  revisionTips: [
    'Take one simple adjective + noun and build it into a three-layer adjective chain, checking the natural hierarchy.',
    'Read one scientific abstract and identify every adjective chain, labeling how many modifiers precede each noun.',
    'Rewrite one overloaded, scrambled noun phrase into a properly ordered, readable adjective chain.'
  ]
};
window.CHAPTER = CHAPTER;
