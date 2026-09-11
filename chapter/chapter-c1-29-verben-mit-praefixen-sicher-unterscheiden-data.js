/* KLARWEG CHAPTER DATA — C1 · Chapter 29
   "Verben mit Präfixen sicher unterscheiden" — semantic verb
   families sharing one root (schreiben/stellen/ziehen/setzen/
   tragen + prefixes), context-based verb choice, NOT separable/
   inseparable prefix mechanics (already mastered).
   Dialogue: Yara and Timo ONLY. */
const CHAPTER = {
  id: 'c1-29-verben-mit-praefixen-sicher-unterscheiden',
  phase: 'C1 · Nominalstil & Präzision',
  number: 29,
  title: 'Verben mit Präfixen sicher unterscheiden',
  titleEn: 'Confidently distinguishing prefix verb families',
  description: 'Never memorize beschreiben, unterschreiben, umschreiben, aufschreiben as separate words. Memorize schreiben, then learn what each prefix answers. Native speakers think in verb families, not isolated vocabulary.',
  xp: 770, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 30, title: 'Nomen mit Numerusbesonderheiten', titleEn: 'Nouns with special number behavior' , href: 'chapter-c1-30-nomen-mit-numerusbesonderheiten.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Think in <em>verb families</em>, not isolated vocabulary.',
    intro: 'Preparing presentations on a painting, Yara wants to describe it more precisely and Timo suggests portraying the artist\'s technique instead — choosing between prefix verbs from the same root, schreiben, stellen, ziehen, by context, not memorization.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how one root verb branches into an entire semantic family of prefix verbs'],
    scene: 'Vorbereitung von Präsentationen und Forschungsarbeiten',
    femaleSpeakers: ['Yara'],
    dialogue: [
      { speaker: 'Yara', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Gemälde', role: 'r-akkusativ', en: 'painting', hi: 'चित्रकारी', pron: 'ge-MEL-duh', type: 'Noun · neut.' },
        { w: 'genauer', role: 'r-akkusativ', en: 'more precisely', hi: 'ज़्यादा सटीक', pron: 'ge-NOW-er', type: 'Adverb · Komparativ' },
        { w: 'beschreiben', role: 'r-verb', en: 'describe', hi: 'वर्णन करना', pron: 'be-SHRY-ben', type: 'Verb · infinitive (Satzende)', why: 'beschreiben = to describe in detail (this chapter).', ex: 'das Gemälde beschreiben' },
        { w: '.', plain: true }
      ], en: 'I would like to describe the painting more precisely.', hi: 'Main chitrakaari ka zyada sateek varnan karna chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Technik', role: 'r-akkusativ', en: 'technique', hi: 'तकनीक', pron: 'tekh-NEEK', type: 'Noun · fem.' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Künstlers', role: 'r-dativ', en: 'artist (gen.)', hi: 'कलाकार के', pron: 'KÜNST-lers', type: 'Noun · masc. genitive' },
        { w: 'darstellen', role: 'r-verb', en: 'portray', hi: 'प्रस्तुत करना', pron: 'DAHR-shte-len', type: 'Verb · infinitive (Satzende)', why: 'darstellen = to portray/depict (this chapter).', ex: 'die Technik darstellen' },
        { w: '?', plain: true }
      ], en: 'Shall we portray the technique of the artist?', hi: 'Kya humein kalaakaar ki takneek prastut karni chahiye?' },
      { speaker: 'Yara', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'stelle', role: 'r-verb', en: 'establish', hi: 'कहती हूँ', pron: 'SHTE-luh', type: 'Verb · feststellen (ich)', lexicalUnit: 'feststellen', why: 'feststellen = to establish/note (recycled C1).', ex: 'feststellen' },
        { w: 'fest', role: 'r-verb', en: '(prefix of feststellen)', hi: '', pron: 'fest', type: 'Separable prefix', lexicalUnit: 'feststellen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Gemälde', role: 'r-subject', en: 'painting', hi: 'चित्रकारी', pron: 'ge-MEL-duh', type: 'Noun · neut.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'einzigartig', role: 'r-akkusativ', en: 'unique', hi: 'अद्वितीय', pron: 'INE-tsikh-ar-tikh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I note that the painting is very unique.', hi: 'Haan. Main kehti hoon ki chitrakaari bahut adviteey hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Würdest', role: 'r-verb', en: 'would you', hi: 'पसंद करोगी', pron: 'VÜR-dest', type: 'Verb · werden (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'andere', role: 'r-akkusativ', en: 'other', hi: 'दूसरी', pron: 'AN-de-ruh', type: 'Adjective' },
        { w: 'Beschreibung', role: 'r-akkusativ', en: 'description', hi: 'वर्णन', pron: 'be-SHRY-bung', type: 'Noun · fem.' },
        { w: 'vorziehen', role: 'r-verb', en: 'prefer', hi: 'पसंद करना', pron: 'FOR-tsee-en', type: 'Verb · infinitive (Satzende)', why: 'vorziehen = to prefer (recycled B2/C1).', ex: 'eine andere Beschreibung vorziehen' },
        { w: '?', plain: true }
      ], en: 'Would you prefer another description?', hi: 'Kya tum doosra varnan pasand karogi?' },
      { speaker: 'Yara', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'diese', role: 'r-subject', en: 'this (fem.)', hi: 'यह', pron: 'DEE-zuh', type: 'Determiner' },
        { w: 'Beschreibung', role: 'r-subject', en: 'description', hi: 'वर्णन', pron: 'be-SHRY-bung', type: 'Noun · fem.' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'am', role: 'r-preposition', en: 'the most', hi: 'सबसे ज़्यादा', pron: 'am', type: 'Preposition + place' },
        { w: 'besten', role: 'r-dativ', en: 'best', hi: 'अच्छी', pron: 'BES-ten', type: 'Superlative' },
        { w: '.', plain: true }
      ], en: 'No, this description pleases me the most.', hi: 'Nahi, yeh varnan mujhe sabse zyada pasand hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Willst', role: 'r-modalverb', en: 'do you want', hi: 'चाहती हो', pron: 'VILST', type: 'Modal · wollen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'diesem', role: 'r-dativ', en: 'this (neut. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Text', role: 'r-dativ', en: 'text (dat.)', hi: 'पाठ से', pron: 'tekst', type: 'Noun · masc. dat.' },
        { w: 'zum', role: 'r-preposition', en: 'to the', hi: 'के लिए', pron: 'tsum', type: 'Preposition + place' },
        { w: 'Erfolg', role: 'r-dativ', en: 'success (dat.)', hi: 'सफलता के', pron: 'er-FOLK', type: 'Noun · masc. dat.' },
        { w: 'beitragen', role: 'r-verb', en: 'contribute', hi: 'योगदान देना', pron: 'BY-trah-gen', type: 'Verb · infinitive (Satzende)', why: 'beitragen zu + Dativ = to contribute to (this chapter).', ex: 'zum Erfolg beitragen' },
        { w: '?', plain: true }
      ], en: 'Do you want to contribute to the success with this text?', hi: 'Kya tum is paath se safalta mein yogdaan dena chahti ho?' },
      { speaker: 'Yara', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, exactly.', hi: 'Haan, bilkul.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'German prefixes create entire semantic networks. Never memorize <span class="de r-praefixfamilie">beschreiben, unterschreiben, darstellen, feststellen</span> as separate words — memorize the root, then learn what each prefix answers.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is VERBEN MIT PRÄFIXEN SICHER UNTERSCHEIDEN at C1 level — distinguishing semantic verb families sharing one root, choosing the correct prefix based on meaning and context, NOT separable/inseparable prefix mechanics, conjugation, or pronunciation (already mastered). Covered: semantic prefix families for schreiben (beschreiben=describe, verschreiben=prescribe, umschreiben=paraphrase, aufschreiben=write down, unterschreiben=sign, abschreiben=copy, anschreiben=write to, zuschreiben=attribute), stellen (bestellen=order, vorstellen=introduce, darstellen=depict/present, feststellen=determine/establish, herstellen=produce, anstellen=employ, einstellen=hire/adjust, ausstellen=issue/exhibit, abstellen=turn off/park), ziehen (erziehen=raise/educate, entziehen=withdraw, beziehen=refer to/obtain, vorziehen=prefer, durchziehen=carry through, umziehen=move house, einziehen=move in, ausziehen=move out/undress), setzen (einsetzen=deploy/insert, absetzen=deduct/drop off, durchsetzen=enforce, übersetzen=translate, fortsetzen=continue, umsetzen=implement, aussetzen=suspend/expose), tragen (übertragen=transfer, vortragen=recite/present, eintragen=register/enter, auftragen=apply/commission, beitragen=contribute, ertragen=endure, austragen=carry out/deliver); the principle that native speakers select prefixes based on meaning within a semantic family, not by memorizing verbs individually; register variation across academic (durchführen, darstellen, feststellen, belegen, begründen, ableiten), scientific (nachweisen, entwickeln, darlegen), administrative (beantragen, bewilligen, einreichen, vorlegen), and journalistic (bekanntgeben, ankündigen, hervorheben, zurückweisen) usage. Do NOT expect or require basic separable/inseparable prefix rules, stress patterns, or conjugation — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: choosing the wrong prefix within a semantic family (e.g. "vorstellen" when "darstellen" is meant, or "einstellen" when "anstellen" is meant); direct literal translation from English that picks the wrong German prefix verb; treating clearly distinct family members (e.g. beschreiben vs. unterschreiben) as interchangeable; register mismatches (using a casual prefix verb where academic/scientific/administrative register expects a different family member). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag wrong prefix choice within a semantic family based on intended meaning; check that the chosen prefix verb matches the register of the surrounding text; flag any confusion between visually similar but semantically distinct family members. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Family check:</b> one sentence on whether the learner chose the correct member of each verb family for the intended meaning and register.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you distinguish prefix verb families by meaning like a native speaker. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Semantic Network Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: think in verb families rooted in one base verb, not isolated vocabulary.' },
  parserSentence: [ { w: 'Kannst', role: 'plain' }, { w: 'du', role: 'plain' }, { w: 'das', role: 'plain' }, { w: 'Problem', role: 'plain' }, { w: 'beschreiben', role: 'r-praefixfamilie' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: German prefixes create semantic networks around one root verb, not isolated vocabulary.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Yara and Timo prepare presentations, choosing between prefix verbs from the same root based on meaning.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key prefix verb families — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master the schreiben, stellen, ziehen, setzen, and tragen verb families and their distinct meanings.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific article and a newspaper analysis, identifying prefix verbs and their semantic relationships.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify prefix verbs and contextual meaning in a university lecture and business meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present projects and compare verb meanings, choosing the correct prefix verb naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Choose the correct prefix verb from a semantic family, and write a 350-word academic article using varied families.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill prefix selection, semantic family matching, and context-based verb choice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 770 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Prefix selection and semantic family matching drills, plus a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Semantic Network Model, Prefix Meaning Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Kannst du das Problem beschreiben?', text: 'Recognize "beschreiben" (be- + schreiben) as "to describe"' },
    { de: 'Du musst noch das Formular unterschreiben.', text: 'Distinguish "unterschreiben" (unter- + schreiben) as "to sign"' },
    { de: 'Wir sollten die Ergebnisse klar darstellen.', text: 'Use "darstellen" (dar- + stellen) for "to present/depict"' },
    { de: 'Wir sollten genau feststellen, was die Ursache ist.', text: 'Distinguish "feststellen" (fest- + stellen) as "to determine"' },
    { de: 'Damit können wir einen wichtigen Beitrag zur Forschung beitragen.', text: 'Use "beitragen" (bei- + tragen) for "to contribute"' }
  ],
  vocab: [
    { de: 'beschreiben', pos: 'verb (untrennbar, "schreiben"-Familie)', level: 'C1', register: 'both', en: 'to describe', hi: 'वर्णन करना', ex: 'Kannst du das Problem kurz beschreiben?', exEn: 'Can you briefly describe the problem?', exHi: 'Kya aap samasya ka thoda varnan kar sakte hain?', ex2: 'Die Autorin beschreibt die Ereignisse detailliert.', ex2En: 'The author describes the events in detail.', ex2Hi: 'Lekhika ghatnaaon ka vistrit varnan karti hain.', conj: { praesens: 'beschreibt', praeteritum: 'beschrieb', perfekt: 'hat beschrieben' } },
    { de: 'darstellen', pos: 'verb (trennbar, "stellen"-Familie)', level: 'C1', register: 'written', en: 'to present, depict', hi: 'प्रस्तुत करना', ex: 'Wir sollten die Ergebnisse klar darstellen.', exEn: 'We should clearly present the results.', exHi: 'Hamein parinaamon ko spasht roop se prastut karna chahiye.', ex2: 'Die Grafik stellt die Entwicklung dar.', ex2En: 'The graphic depicts the development.', ex2Hi: 'Graphic vikaas ko darshaata hai.', conj: { praesens: 'stellt dar', praeteritum: 'stellte dar', perfekt: 'hat dargestellt' } },
    { de: 'feststellen', pos: 'verb (trennbar, "stellen"-Familie)', level: 'C1', register: 'both', en: 'to determine, establish, notice', hi: 'निर्धारित करना', ex: 'Wir müssen genau feststellen, was die Ursache ist.', exEn: 'We must precisely determine what the cause is.', exHi: 'Hamein sateek roop se nirdhaarit karna hoga ki kaaran kya hai.', ex2: 'Die Forscher haben einen Zusammenhang festgestellt.', ex2En: 'The researchers have established a connection.', ex2Hi: 'Shodhkartaon ne ek sambandh nirdhaarit kiya hai.', conj: { praesens: 'stellt fest', praeteritum: 'stellte fest', perfekt: 'hat festgestellt' } },
    { de: 'vorziehen', pos: 'verb (trennbar, "ziehen"-Familie)', level: 'C1', register: 'both', en: 'to prefer', hi: 'प्राथमिकता देना', ex: 'Ich würde diese Methode vorziehen.', exEn: 'I would prefer this method.', exHi: 'Main iss vidhi ko prathamikta doongi.', ex2: 'Sie zieht es vor, allein zu arbeiten.', ex2En: 'She prefers to work alone.', ex2Hi: 'Woh akele kaam karna prefer karti hai.', conj: { praesens: 'zieht vor', praeteritum: 'zog vor', perfekt: 'hat vorgezogen' } },
    { de: 'beitragen', pos: 'verb (trennbar, "tragen"-Familie)', level: 'C1', register: 'written', en: 'to contribute', hi: 'योगदान देना', ex: 'Wir können einen wichtigen Beitrag zur Forschung beitragen.', exEn: 'We can make an important contribution to research.', exHi: 'Hum shodh mein ek mahatvapoorn yogdaan de sakte hain.', ex2: 'Jeder kann zum Erfolg des Projekts beitragen.', ex2En: 'Everyone can contribute to the project\'s success.', ex2Hi: 'Har koi project ki safalta mein yogdaan de sakta hai.', conj: { praesens: 'trägt bei', praeteritum: 'trug bei', perfekt: 'hat beigetragen' } }
  ],
  grammar: [
    { title: 'Präfixlogik verstehen (Understanding Prefix Logic)', body: [ 'Root Verb → Prefix → Meaning Shift → Context → Correct Verb Choice. Prefixes modify the core meaning rather than simply creating new vocabulary — native speakers select based on meaning, not memorization.' ], hinglish: 'Prefix verbs ko alag-alag shabd samajh kar ratna sabse mushkil raasta hai. Behtar tareeka yeh hai \u2014 root verb pakdo (<i>schreiben</i>), phir dekho ki har prefix uske matlab ko kis taraf modh raha hai. Ek baar family samajh aa gayi to naye shabd apne aap samajh mein aane lagte hain.' },
    { title: 'Die "schreiben"-Familie', body: [ 'beschreiben (describe), verschreiben (prescribe), umschreiben (paraphrase), aufschreiben (write down), unterschreiben (sign), abschreiben (copy), anschreiben (write to), zuschreiben (attribute). Each prefix answers a distinct question about the meaning of "schreiben".' ], hinglish: 'Ek hi root se aath verbs. Dhyaan do ki prefix ka apna matlab jhalakta hai \u2014 <b>auf-</b> mein \u201cupar likhna\u201d yani note karna, <b>unter-</b> mein \u201cneeche likhna\u201d yani sign karna, <b>ab-</b> mein \u201cutaar lena\u201d yani copy karna. Do sabse zyada confuse karne wale: <b>beschreiben</b> (varnan karna) aur <b>verschreiben</b> (dawa likhna) \u2014 ek akshar ka farak, matlab bilkul alag.' },
    { title: 'Die "stellen"-Familie', body: [ '<i>stellen</i> ki family academic writing mein sabse zyada kaam aati hai. Teen sabse important: <b>feststellen</b> (kisi baat ko sthapit karna), <b>darstellen</b> (data ya graph dikhana), aur <b>herstellen</b> (banana). Sabse aam galti <b>vorstellen</b> aur <b>darstellen</b> ko mila dena hai \u2014 <b>vorstellen</b> kisi <b>insaan</b> ya idea ko pesh karna hai, aur <b>darstellen</b> kisi cheez ko <b>dikhana</b>.' ], hinglish: '<i>stellen</i> ki family academic writing mein sabse zyada kaam aati hai. Teen sabse important: <b>feststellen</b> (kisi baat ko sthapit karna), <b>darstellen</b> (data ya graph dikhana), aur <b>herstellen</b> (banana). Sabse aam galti <b>vorstellen</b> aur <b>darstellen</b> ko mila dena hai \u2014 <b>vorstellen</b> kisi <b>insaan</b> ya idea ko pesh karna hai, aur <b>darstellen</b> kisi cheez ko <b>dikhana</b>.' },
    { title: 'Die "ziehen"-Familie', body: [ '<i>ziehen</i> ki family mein do group hain. Ek group ghar-badalne wala hai \u2014 <b>umziehen</b>, <b>einziehen</b>, <b>ausziehen</b> \u2014 aur yeh sab movement hain, isliye Perfekt mein <b>sein</b> lete hain. Doosra group abstract hai \u2014 <b>beziehen</b> (hawaala dena), <b>vorziehen</b> (tarjeeh dena), <b>entziehen</b> (waapas lena) \u2014 aur yeh <b>haben</b> lete hain.' ], hinglish: '<i>ziehen</i> ki family mein do group hain. Ek group ghar-badalne wala hai \u2014 <b>umziehen</b>, <b>einziehen</b>, <b>ausziehen</b> \u2014 aur yeh sab movement hain, isliye Perfekt mein <b>sein</b> lete hain. Doosra group abstract hai \u2014 <b>beziehen</b> (hawaala dena), <b>vorziehen</b> (tarjeeh dena), <b>entziehen</b> (waapas lena) \u2014 aur yeh <b>haben</b> lete hain.' },
    { title: 'Die "setzen"- & "tragen"-Familien', body: [ 'setzen: einsetzen (deploy), absetzen (deduct/drop off), durchsetzen (enforce), übersetzen (translate), fortsetzen (continue), umsetzen (implement), aussetzen (suspend). tragen: übertragen (transfer), vortragen (recite), eintragen (register), auftragen (apply/commission), beitragen (contribute), ertragen (endure), austragen (carry out/deliver).' ], hinglish: 'Do aur families. <i>setzen</i> se: <b>umsetzen</b> (kisi plan ko amal mein laana), <b>durchsetzen</b> (manwana), <b>fortsetzen</b> (jaari rakhna), <b>\u00fcbersetzen</b> (tarjuma karna). Aur <i>tragen</i> se: <b>beitragen</b> (yogdaan dena), <b>\u00fcbertragen</b> (transfer karna), <b>eintragen</b> (darj karna), <b>ertragen</b> (sehna). Dhyaan do ki <b>\u00fcbersetzen</b> aur <b>\u00fcbertragen</b> dono untrennbar hain \u2014 inme <i>ge-</i> nahi lagta.' },
    { title: 'Register Differences', body: [ 'Har register ke apne prefix verbs hain, aur yeh pehchaanna exam mein kaam aata hai. Academic texts mein <b>feststellen</b>, <b>darstellen</b>, <b>belegen</b>, <b>ableiten</b> milenge. Official documents mein <b>einreichen</b>, <b>bewilligen</b>, <b>vorlegen</b>. Aur news mein <b>bekanntgeben</b>, <b>ank\u00fcndigen</b>, <b>zur\u00fcckweisen</b>. Text ka register dekh kar hi verb chuno.' ], hinglish: 'Har register ke apne prefix verbs hain, aur yeh pehchaanna exam mein kaam aata hai. Academic texts mein <b>feststellen</b>, <b>darstellen</b>, <b>belegen</b>, <b>ableiten</b> milenge. Official documents mein <b>einreichen</b>, <b>bewilligen</b>, <b>vorlegen</b>. Aur news mein <b>bekanntgeben</b>, <b>ank\u00fcndigen</b>, <b>zur\u00fcckweisen</b>. Text ka register dekh kar hi verb chuno.' },
    {
      title: 'Trennbar oder untrennbar?',
      body: [
        'Meaning is only half the job \u2014 you also have to know whether the prefix detaches, because that decides the word order and the Partizip II.',
        'The rule is fixed for most prefixes, and stress tells you the rest: if you stress the prefix, it separates.'
      ],
      table: {
        head: ['Prefixes', 'Behaviour', 'Example'],
        rows: [
          ['be-, ver-, er-, ent-, zer-, emp-, ge-', 'always <b>inseparable</b>, no <i>ge-</i>', '<span class="de">Er beschreibt \u2026 / hat beschrieben</span>'],
          ['an-, auf-, aus-, ein-, vor-, mit-, zu-, ab-', 'always <b>separable</b>', '<span class="de">Er schreibt es auf / hat aufgeschrieben</span>'],
          ['\u00fcber-, unter-, um-, durch-, wieder-', '<b>either</b> \u2014 stress decides', '<span class="de">\u00fcberSETZen</span> (translate, inseparable) vs <span class="de">\u00dcBERsetzen</span> (ferry, separable)'],
          ['movement verbs', 'take <b>sein</b> in the Perfekt', '<span class="de">Wir sind umgezogen.</span>'],
          ['non-movement', 'take <b>haben</b>', '<span class="de">Wir haben uns darauf bezogen.</span>']
        ]
      },
      note: 'The <b>um-</b> pair is the clearest case: <i>UMziehen</i> (move house) separates, while <i>umGEHen</i> in the sense \u201cto handle something\u201d does not. Same spelling, different stress, different behaviour.',
      hinglish: 'Matlab jaan lena aadha kaam hai \u2014 yeh bhi pata hona chahiye ki prefix alag hota hai ya nahi, kyunki isi se word order aur Partizip II tay hote hain. <b>be-, ver-, er-, ent-, zer-</b> hamesha jude rehte hain aur inme <i>ge-</i> nahi lagta: <span class="de">hat beschrieben</span>. Aur <b>an-, auf-, aus-, ein-, vor-, ab-</b> hamesha alag hote hain: <span class="de">hat aufgeschrieben</span>. Beech mein <b>\u00fcber-, unter-, um-, durch-</b> hain \u2014 yeh dono tarah chalte hain, aur faisla <b>zor</b> se hota hai: agar prefix par zor hai to woh alag hoga. Isliye <span class="de">\u00fcberSETZen</span> (tarjuma karna) juda rehta hai par <span class="de">\u00dcBERsetzen</span> (paar le jaana) alag ho jaata hai. Ek aur baat \u2014 jo prefix verbs movement batate hain woh Perfekt mein <b>sein</b> lete hain (<span class="de">wir sind umgezogen</span>), baaki <b>haben</b>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Root verb mapped to prefix verb and core meaning.' ], table: { head: ['Root Verb', 'Prefix Verb — Core Meaning'], rows: [ ['schreiben', 'beschreiben (describe) / unterschreiben (sign) / umschreiben (paraphrase)'], ['stellen', 'vorstellen (introduce) / feststellen (determine) / herstellen (produce)'], ['ziehen', 'vorziehen (prefer) / beziehen (refer to)'], ['tragen', 'beitragen (contribute)'] ] }, hinglish: 'Root verb, prefix verb aur core meaning ka table \u2014 ise family ki tarah padho, alag-alag shabdon ki tarah nahi.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these are meaning errors within one family, and three are formal: separable vs inseparable, the Perfekt auxiliary, and register.' ], mistakes: [
      { wrong: 'Die Grafik stellt die Ergebnisse vor.', right: 'Die Grafik stellt die Ergebnisse dar.', why: '<b>vorstellen</b> is for introducing a PERSON or an idea to an audience. For depicting data you need <b>darstellen</b>.' },
      { wrong: 'Bitte schreiben Sie den Vertrag unter \u2014 ich habe ihn schon abgeschrieben.', right: 'Bitte unterschreiben Sie den Vertrag \u2014 ich habe ihn schon abgeschrieben.', why: '<b>unterschreiben</b> is inseparable, so the prefix never moves to the end. Compare <b>abschreiben</b>, which IS separable: <i>ich schreibe ab</i>.' },
      { wrong: 'Der Arzt hat mir ein Medikament beschrieben.', right: 'Der Arzt hat mir ein Medikament verschrieben.', why: '<b>verschreiben</b> = prescribe, <b>beschreiben</b> = describe. One letter of difference, entirely different meaning.' },
      { wrong: 'Wir haben letzten Monat eingezogen.', right: 'Wir sind letzten Monat eingezogen.', why: 'Prefix verbs of movement take <b>sein</b> in the Perfekt \u2014 <i>einziehen</i>, <i>umziehen</i>, <i>ausziehen</i>. But <i>beziehen</i> (obtain) takes <b>haben</b>.' },
      { wrong: 'Der Text \u00fcbersetzt sich schwer \u2014 ich habe ihn gestern \u00fcbergesetzt.', right: 'Der Text l\u00e4sst sich schwer \u00fcbersetzen \u2014 ich habe ihn gestern \u00fcbersetzt.', why: '<b>\u00fcbersetzen</b> (translate) is inseparable, so its Partizip II has no <i>ge-</i>. The separable <i>\u00fcbersetzen</i> (ferry across) is a different verb with different stress.' },
      { wrong: 'Ich habe einen Antrag gemacht und hoffe, dass die Beh\u00f6rde ihn macht.', right: 'Ich habe einen Antrag eingereicht und hoffe, dass die Beh\u00f6rde ihn bewilligt.', why: 'Administrative German has its own prefix verbs: you <b>einreichen</b> an application and the authority <b>bewilligt</b> it.' }
    ], hinglish: 'Teen galtiyan matlab ki hain \u2014 ek hi family ke andar galat prefix chun lena. Aur teen form ki hain \u2014 trennbar/untrennbar ka farak, Perfekt mein galat auxiliary, aur galat register.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Know the root verb? Identify the intended meaning. Select the correct semantic prefix. Check the context. Choose the appropriate register. Use the correct prefix verb.' ], note: 'Memory trick: never memorize beschreiben, unterschreiben, umschreiben, aufschreiben as separate words. Memorize schreiben, then learn what each prefix answers.', hinglish: 'Tarika yeh hai \u2014 pehle root verb pakdo, phir tay karo ki tumhe kya kehna hai, phir us matlab wala prefix chuno, aur text ka register dekh lo. Aur likhne se pehle ek cheez aur check karo: prefix alag hoga ya nahi? Isi se word order aur Partizip II tay hoga.' }
  ],
  reading: {
    title: 'Medizinjournal: Zusammenhang zwischen Bewegung und Gedächtnis nachgewiesen',
    titleEn: 'Reading A — Medical journal: link between exercise and memory demonstrated',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers (Satzende)', hi: 'शोधकर्ता (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'konnten', role: 'plain', en: 'could', hi: 'सके', type: 'Modalverb (Präteritum)' },
      { w: 'einen', role: 'plain', en: 'a (masc. akk.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'klaren', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective · Akk.' },
      { w: 'Zusammenhang', role: 'plain', en: 'connection (Satzende)', hi: 'सम्बन्ध (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'के बीच', type: 'Preposition · Dat.' },
      { w: 'regelmäßiger', role: 'plain', en: 'regular', hi: 'नियमित', type: 'Adjective · Dat.' },
      { w: 'Bewegung', role: 'plain', en: 'exercise', hi: 'व्यायाम', type: 'Noun · fem.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Gedächtnisleistung', role: 'plain', en: 'memory performance (Satzende)', hi: 'स्मृति क्षमता (Satzende)', type: 'Noun · fem.' },
      { w: 'nachweisen', role: 'r-praefixfamilie', en: 'prove, demonstrate (from "weisen" + "nach-", scientific register verb)', hi: 'सिद्ध करना ("weisen" + "nach-", scientific register)', type: 'Verb (Infinitiv, Satzende)', why: '"Nachweisen" is a scientific-register prefix verb meaning "to prove/demonstrate", from the root "weisen" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Testreihe', role: 'plain', en: 'test series (Satzende)', hi: 'परीक्षण श्रृंखला (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wurde', role: 'plain', en: 'was', hi: '', type: 'Verb · werden (Präteritum)' },
      { w: 'kürzlich', role: 'plain', en: 'recently', hi: 'हाल ही में', type: 'Adverb' },
      { w: 'an', role: 'plain', en: 'at', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'drei', role: 'plain', en: 'three', hi: 'तीन', type: 'Number' },
      { w: 'Kliniken', role: 'plain', en: 'clinics (Satzende)', hi: 'क्लीनिकों (Satzende)', type: 'Noun · plural' },
      { w: 'entwickelt', role: 'r-praefixfamilie', en: 'developed (Satzende, common scientific-register verb)', hi: 'विकसित की गई (Satzende)', type: 'Verb · Partizip II (Satzende)', why: '"Entwickeln" (to develop) is another core scientific-register verb, frequently used in research writing (this chapter).' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'anschließend', role: 'plain', en: 'subsequently', hi: 'इसके बाद', type: 'Adverb' },
      { w: 'gemeinsam', role: 'plain', en: 'jointly', hi: 'मिलकर', type: 'Adverb' },
      { w: 'ausgewertet', role: 'plain', en: 'evaluated (Satzende)', hi: 'विश्लेषित की गई (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The researchers were able to prove a clear connection between regular exercise and memory performance. The test series was recently developed at three clinics and subsequently jointly evaluated.',
    comprehension: [
      { q: 'Was bedeutet "nachweisen" in diesem Kontext?', options: ['beweisen/zeigen', 'schreiben', 'vorstellen'], answer: 0 },
      { q: 'Zu welchem Register gehört "nachweisen"?', options: ['Wissenschaftliches Deutsch', 'Umgangssprache', 'Verwaltungssprache'], answer: 0 },
      { q: 'Warum verwendet der Text diese Verben?', options: ['Präzise wissenschaftliche Beschreibung', 'Zufall', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsanalyse', titleEn: 'Reading B — Newspaper analysis',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Minister', role: 'plain', en: 'minister (Satzende)', hi: 'minister (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'ne', type: 'Verb · haben (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'in', type: 'Article' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'nayi', type: 'Adjective · Akk.' },
      { w: 'Maßnahmen', role: 'plain', en: 'measures', hi: 'yojanaon ki (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'bekanntgegeben', role: 'r-praefixfamilie', en: 'announced (Satzende, journalistic-register prefix verb, from "geben" + "bekannt-")', hi: 'ghoshna ki (Satzende, journalistic register)', type: 'Partizip II (Satzende)', why: '"Bekanntgeben" is a journalistic-register prefix verb meaning "to announce publicly".' },
      { w: '.', plain: true },
      { w: 'Kritiker', role: 'plain', en: 'critics (Satzende)', hi: 'aalochak (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'haben', role: 'plain', en: 'have', hi: 'ne', type: 'Verb · haben (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'iss', type: 'Article' },
      { w: 'Entscheidung', role: 'plain', en: 'decision (Satzende)', hi: 'faisle ko (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'zurückgewiesen', role: 'r-praefixfamilie', en: 'rejected (Satzende, journalistic-register prefix verb, "zurückweisen")', hi: 'khaarij kar diya (Satzende, journalistic register)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The minister announced the new measures. Critics have rejected the decision.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_029_L001', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wie beschreibe ich am besten die Farben in diesem Gemälde für die Präsentation?', en: 'Timo, how do I best describe the colors in this painting for the presentation?' },
      { id: 'C1_029_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Vielleicht solltest du eher die Technik des Künstlers schildern als nur die Farben aufzuzählen.', en: 'Maybe you should portray the artist\'s technique rather than just listing the colors.' },
      { id: 'C1_029_L003', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Guter Gedanke — ich könnte auch beschreiben, wie er das Licht auf die Leinwand aufträgt.', en: 'Good thought — I could also describe how he applies the light onto the canvas.' },
      { id: 'C1_029_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, das zieht das Publikum viel mehr in den Bann.', en: 'Exactly, that captivates the audience much more.' }
    ],
    transcript: 'Timo, wie beschreibe ich am besten die Farben in diesem Gemälde für die Präsentation? Vielleicht solltest du eher die Technik des Künstlers schildern als nur die Farben aufzuzählen. Guter Gedanke — ich könnte auch beschreiben, wie er das Licht auf die Leinwand aufträgt. Genau, das zieht das Publikum viel mehr in den Bann.',
    translation: 'Timo, how do I best describe the colors in this painting for the presentation? Maybe you should portray the artist\'s technique rather than just listing the colors. Good thought — I could also describe how he applies the light onto the canvas. Exactly, that captivates the audience much more.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'beschreibe' },
      { w: 'ich' },
      { w: 'am' },
      { w: 'besten' },
      { w: 'die' },
      { w: 'Farben' },
      { w: 'in' },
      { w: 'diesem' },
      { w: 'Gemälde' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Präsentation' },
      { w: '?', plain: true },
      { w: 'Vielleicht' },
      { w: 'solltest' },
      { w: 'du' },
      { w: 'eher' },
      { w: 'die' },
      { w: 'Technik' },
      { w: 'des' },
      { w: 'Künstlers' },
      { w: 'schildern' },
      { w: 'als' },
      { w: 'nur' },
      { w: 'die' },
      { w: 'Farben' },
      { w: 'aufzuzählen' },
      { w: '.', plain: true },
      { w: 'Guter' },
      { w: 'Gedanke' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'könnte' },
      { w: 'auch' },
      { w: 'beschreiben' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'er' },
      { w: 'das' },
      { w: 'Licht' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Leinwand' },
      { w: 'aufträgt' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'zieht' },
      { w: 'das' },
      { w: 'Publikum' },
      { w: 'viel' },
      { w: 'mehr' },
      { w: 'in' },
      { w: 'den' },
      { w: 'Bann' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was soll Yara laut Timo stattdessen darstellen?', qEn: 'What does Timo suggest Yara portray instead?', options: ['nur die Farben', 'die Technik des Künstlers', 'den Rahmen', 'den Preis'], optionsEn: ['only the colours', 'the artist\'s technique', 'the frame', 'the price'], answer: 1,
        explain: '"Vielleicht solltest du eher die Technik des Künstlers schildern."' },
      { q: 'Was erwägt Yara zusätzlich zu beschreiben?', qEn: 'What does Yara consider describing additionally?', options: ['den Preis des Bildes', 'wie er das Licht aufträgt', 'den Namen des Künstlers', 'das Museum'], optionsEn: ['the price of the painting', 'how he applies the light', 'the artist\'s name', 'the museum'], answer: 1,
        explain: '"Ich könnte auch beschreiben, wie er das Licht auf die Leinwand aufträgt."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, wie er die Farben im Gemälde vorstellen soll.", taskEn: "Timo asks how to present the colours in the painting.", de: "Ich würde eher die Technik des Künstlers darstellen als die Farben zu beschreiben.", en: "I'd rather present the artist's technique than describe the colours." },
    { task: "Deine Kollegin fragt, was die Grafik macht und was du machst.", taskEn: "Your colleague asks what the chart does and what you do.", de: "Die Grafik stellt den Verlauf dar, und ich beschreibe die Ergebnisse.", en: "The chart presents the trend, and I describe the results." },
    { task: "Berichte, was ihr bei der Prüfung bemerkt habt.", taskEn: "Report what you noticed during the check.", de: "Wir haben einen Fehler in der Erhebung festgestellt.", en: "We identified an error in the data collection." },
    { task: "Man fragt, welches Verfahren du wählen würdest.", taskEn: "You're asked which procedure you'd choose.", de: "Ich ziehe das zweite Verfahren vor, weil es weniger Aufwand bedeutet.", en: "I prefer the second procedure because it involves less effort." },
    { task: "Deine Betreuerin fragt, was dein Kapitel zum Projekt beisteuert.", taskEn: "Your supervisor asks what your chapter contributes to the project.", de: "Mein Kapitel trägt vor allem zur Methodik bei.", en: "My chapter contributes above all to the methodology." }
  ],
  writing: {
    prompt: 'TASK 1 — Choose and justify (150 words): Choose the correct prefix verb from the same semantic family for a given context, and justify your choice.\n\nTASK 2 — Academic article (350 words): Use a wide variety of prefix verbs from different semantic families (schreiben, stellen, ziehen, setzen, tragen) while maintaining authentic C1 style.',
    starters: ['Die Forscher konnten einen klaren Zusammenhang nachweisen.', 'Wir sollten die Ergebnisse klar darstellen.'],
    placeholder: 'Wir müssen zunächst feststellen, was die Ursache ist. Anschließend können wir die Methode darstellen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which verb means "to sign" (from the schreiben family)?', options: ['unterschreiben', 'beschreiben', 'umschreiben'], answer: 0, explain: '"Unterschreiben" (unter- + schreiben) specifically means "to sign", distinct from "beschreiben" (describe).' },
    gap: { sentence: ['Wir sollten die Ergebnisse klar ', '.'], gaps: [ { answer: 'darstellen', accepts: ['darstellen'] } ], explain: '"Darstellen" (dar- + stellen) means "to present/depict", the correct choice for presenting results.' },
    match: { q: 'Match each prefix verb to its root family.', pairs: [ { noun: 'beschreiben', art: '"schreiben"-Familie' }, { noun: 'feststellen', art: '"stellen"-Familie' }, { noun: 'vorziehen', art: '"ziehen"-Familie' }, { noun: 'beitragen', art: '"tragen"-Familie' } ] },
    builder: { target: 'Build: "We must precisely determine what the cause is." (feststellen)', bank: ['Wir', 'müssen', 'genau', 'feststellen', ',', 'was', 'die', 'Ursache', 'ist', '.'], answer: ['Wir', 'müssen', 'genau', 'feststellen', ',', 'was', 'die', 'Ursache', 'ist', '.'], roles: { 'feststellen': 'r-praefixfamilie' } },
    errorCorrection: { title: 'Error correction', wrong: 'Wir sollten die Ergebnisse klar vorstellen.', right: 'Wir sollten die Ergebnisse klar darstellen.', explain: '"Vorstellen" means "to introduce" (a person), while "darstellen" means "to present/depict" (information, data) — different meanings within the same root family.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for prefix verb families?', options: ['Memorize the root verb, then learn what each prefix answers, not isolated words', 'Memorize every prefix verb individually', 'Prefixes have no systematic meaning'], answer: 0, explain: 'Native speakers think in verb families rooted in one base verb, not isolated vocabulary.' },
    { q: 'What does "unterschreiben" mean?', options: ['to sign', 'to describe', 'to paraphrase'], answer: 0, explain: '"Unter-" + "schreiben" specifically means "to sign" a document.' },
    { q: 'What is the difference between "vorstellen" and "darstellen"?', options: ['"Vorstellen" = introduce (a person); "darstellen" = present/depict (information)', 'They are interchangeable', '"Vorstellen" means to sign, "darstellen" means to describe'], answer: 0, explain: 'Both come from "stellen" but have distinct, non-interchangeable meanings.' },
    { q: 'Which family does "beitragen" belong to?', options: ['"tragen"-Familie', '"stellen"-Familie', '"ziehen"-Familie'], answer: 0, explain: '"Beitragen" (bei- + tragen) means "to contribute", part of the tragen family.' },
    { q: 'What register is "nachweisen" typically used in?', options: ['Scientific/academic German', 'Casual conversation', 'They are equally common everywhere'], answer: 0, explain: '"Nachweisen" (to prove/demonstrate) is a core scientific-register verb.' }
  ],
  takeaways: [
    { c: 'r-praefixfamilie', html: 'German prefixes create semantic networks around one root verb (schreiben, stellen, ziehen, setzen, tragen) — each prefix answers a distinct question about meaning.' },
    { c: 'r-praefixfamilie', html: 'Family members that look similar (vorstellen vs. darstellen, beschreiben vs. unterschreiben) often have completely distinct, non-interchangeable meanings.' },
    { c: 'r-praefixfamilie', html: 'Register matters: academic (darstellen, feststellen), scientific (nachweisen, entwickeln), administrative (beantragen, einreichen), and journalistic (bekanntgeben, zurückweisen) each favor different family members.' }
  ],
  revisionTips: [
    'Take one root verb (stellen, ziehen, tragen, setzen, or schreiben) and write out every prefix verb you know from that family with its distinct meaning.',
    'Find a German academic or newspaper article and identify every prefix verb, then trace each back to its root.',
    'Practise distinguishing near-confusable pairs (vorstellen/darstellen, beschreiben/unterschreiben, einstellen/anstellen) by writing one sentence for each showing the meaning difference.'
  ]
};
window.CHAPTER = CHAPTER;
