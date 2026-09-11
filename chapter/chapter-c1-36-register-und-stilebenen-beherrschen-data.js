/* KLARWEG CHAPTER DATA — C1 · Chapter 36
   "Register & Stilebenen beherrschen" — audience-aware register
   switching (informal/professional/academic/scientific/
   administrative/journalistic), formal vs informal vocabulary
   pairs, spoken vs written German. NOT new grammar structures
   (already mastered) — focus is stylistic adaptation.
   Dialogue: Solveig and Timo ONLY. */
const CHAPTER = {
  id: 'c1-36-register-und-stilebenen-beherrschen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 36,
  title: 'Register & Stilebenen beherrschen',
  titleEn: 'Mastering register and style levels',
  description: 'Imagine you own six different suits. You would never wear a wedding suit to the gym or pajamas to a lecture. Every situation has its own linguistic dress code — native speakers instinctively choose the right one.',
  xp: 910, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 37, title: 'Kollokationen & Bedeutungsnuancen', titleEn: 'Collocations and shades of meaning' , href: 'chapter-c1-37-kollokationen-und-bedeutungsnuancen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every situation has its own <em>linguistic dress code</em>.',
    intro: 'Before a business dinner, Solveig briefs Timo on the formal dress code and how to address the director — preparing the same information five different ways, for friends, an email, a presentation, a report, and a formal application.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See identical information expressed in six distinct registers, chosen deliberately for audience and purpose'],
    scene: 'Vorbereitung mehrerer Versionen derselben Information für verschiedene Zielgruppen',
    femaleSpeakers: ['Solveig'],
    dialogue: [
      { speaker: 'Solveig', tokens: [
        { w: 'Beim', role: 'r-preposition', en: 'at the', hi: 'में', pron: 'byme', type: 'Preposition + place' },
        { w: 'Geschäftsessen', role: 'r-dativ', en: 'business dinner (dat.)', hi: 'व्यावसायिक भोज में', pron: 'ge-SHEFTS-e-sen', type: 'Noun · neut. dat.' },
        { w: 'musst', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MUST', type: 'Modal · müssen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'förmlicher', role: 'r-akkusativ', en: 'more formal', hi: 'ज़्यादा औपचारिक', pron: 'FÖRM-li-kher', type: 'Adjective · Komparativ' },
        { w: 'reden', role: 'r-verb', en: 'speak', hi: 'बात करना', pron: 'RAY-den', type: 'Verb · infinitive (Satzende)', why: 'reden = to speak/talk (this chapter).', ex: 'förmlicher reden' },
        { w: '.', plain: true }
      ], en: 'At the business dinner you must speak more formally.', hi: 'Vyavasayik bhoj mein tumhe zyaada aupcharik roop se baat karni hogi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'benötige', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'be-NÖ-ti-guh', type: 'Verb · benötigen (ich)', why: 'benötigen = to need, formal register (this chapter).', ex: 'Was benötige ich für den Abend?', exEn: 'What do I need for the evening?' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Abend', role: 'r-akkusativ', en: 'evening', hi: 'शाम', pron: 'AH-bent', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'What do I need for the evening?', hi: 'Mujhe shaam ke liye kya zaroorat hai?' },
      { speaker: 'Solveig', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Kleidungscode', role: 'r-subject', en: 'dress code', hi: 'पोशाक संहिता', pron: 'KLY-dungs-kohd', type: 'Noun · masc.', why: 'der Kleidungscode (this chapter).', ex: 'der Kleidungscode ist formell' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'formell', role: 'r-akkusativ', en: 'formal', hi: 'औपचारिक', pron: 'for-MEL', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The dress code is formal.', hi: 'Poshaak samhita aupcharik hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'spreche', role: 'r-verb', en: 'do I speak', hi: 'बात करूं', pron: 'SHPRE-khuh', type: 'Verb · sprechen (ich)', lexicalUnit: 'ansprechen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Direktor', role: 'r-akkusativ', en: 'director', hi: 'निर्देशक', pron: 'di-REK-tor', type: 'Noun · masc.' },
        { w: 'an', role: 'r-verb', en: '(prefix of ansprechen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende', lexicalUnit: 'ansprechen' },
        { w: '?', plain: true }
      ], en: 'And how do I address the director?', hi: 'Aur main nirdeshak ko kaise sambodhit karoon?' },
      { speaker: 'Solveig', tokens: [
        { w: 'Mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: '"Sehr', role: 'r-akkusativ', en: '"Dear', hi: 'प्रिय', pron: 'zair', type: 'Adjective (formal opener)', why: 'sehr geehrte(r) = "dear" in a formal letter/address, highest formal register (this chapter).', ex: 'Sehr geehrter Herr Direktor.', exEn: 'Dear Mr. Director.' },
        { w: 'geehrter', role: 'r-akkusativ', en: 'esteemed', hi: 'सम्मानित', pron: 'ge-AIR-ter', type: 'Adjective' },
        { w: 'Herr', role: 'r-akkusativ', en: 'Mr.', hi: 'महोदय', pron: 'hair', type: 'Noun · title' },
        { w: 'Direktor"', role: 'r-akkusativ', en: 'Director"', hi: 'निर्देशक', pron: 'di-REK-tor', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'With "Dear Mr. Director".', hi: '"Priya nirdeshak mahoday" se.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'lasse', role: 'r-verb', en: 'let', hi: 'देता हूँ', pron: 'LA-suh', type: 'Verb · lassen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'beobachten', role: 'r-verb', en: 'observe', hi: 'देखने', pron: 'be-OP-akh-ten', type: 'Verb · infinitive' },
        { w: ',', plain: true },
        { w: 'bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'sage', role: 'r-verb', en: 'say', hi: 'कहता हूँ', pron: 'ZAH-guh', type: 'Verb · sagen (ich, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good, then I let myself be observed before I say something.', hi: 'Achha, toh main kuch kehne se pehle khud ko dekhne deta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine you own six different suits. Every situation has its own <span class="de r-register">linguistic dress code</span> — native speakers instinctively choose the right one.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is REGISTER & STILEBENEN BEHERRSCHEN at C1 level — audience-aware register switching across six style levels, NOT new grammar structures (already mastered). Covered: formal vs informal vocabulary pairs (sprechen vs reden, erhalten vs bekommen, benötigen vs brauchen, wohnen vs leben, informieren vs Bescheid geben); the six style levels (everyday/informal, professional, academic, scientific, administrative, journalistic) and where each is naturally used; spoken vs written discourse markers (spoken: Na ja, Eigentlich, Also; written: Darüber hinaus, Im Folgenden, Zusammenfassend, Demnach); academic tone (objective, precise, cautious conclusions, evidence-based language, e.g. "lassen sich...beobachten"); administrative register (formal, impersonal phrasing, e.g. "benötigen" rather than "brauchen", "sehr geehrte..." salutations); professional workplace communication (meetings, emails, presentations, professional politeness); the metaphor that every situation has its own "linguistic dress code" that native speakers instinctively match. Do NOT expect or require new grammar constructions like passive, nominalization, conjunctions, or argumentation structure — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: mixing spoken and written German within one text (e.g. "na ja" in an academic essay); using informal vocabulary (reden, brauchen) where formal register calls for its counterpart (sprechen, benötigen); direct translation from English that ignores German register conventions; exaggerated or inappropriate formality where a more natural register fits better; inconsistent register within a single text — starting formal and drifting casual, or vice versa. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag register mixing (spoken markers in written/academic text, or vice versa); flag informal vocabulary in contexts requiring formal register (and vice versa); check register consistency throughout the whole text, not just individual sentences. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Register check:</b> one sentence on whether the learner maintained one consistent, audience-appropriate register throughout.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you switch registers deliberately and consistently, like a native speaker choosing the right linguistic dress code. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Register Selection Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: every situation has its own linguistic dress code.' },
  parserSentence: [ { w: 'Sehr', role: 'r-register' }, { w: 'geehrte', role: 'r-register' }, { w: 'Damen', role: 'plain' }, { w: 'und', role: 'plain' }, { w: 'Herren', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every situation has its own linguistic dress code, and native speakers dress accordingly.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Solveig and Timo write five versions of the same information, each matched to its audience and purpose.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key register pairs and expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master formal/informal vocabulary pairs, the six style levels, and spoken vs written discourse markers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic journal article and an official/newspaper text, identifying register and stylistic choices.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify register, politeness, and audience adaptation in a university lecture and business meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Adapt language to different audiences using formal presentations, professional discussions, and register switching.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite the same text into four registers, and write a 350-word formal article with consistent tone.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill register identification, style transformation, and formal-vs-informal vocabulary selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 910 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Register identification and style transformation drills, plus a full formal article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Register Selection Model, Formality Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wenn ich mit Freunden rede, sage ich einfach: "Na ja".', text: 'Recognize informal register vocabulary ("reden") and spoken discourse markers' },
    { de: 'Für die Geschäfts-E-Mail brauchen wir einen formelleren Ton: "Sehr geehrte...".', text: 'Use the standard formal salutation for professional emails' },
    { de: 'Die Ergebnisse lassen sich systematisch beobachten.', text: 'Use objective, cautious academic phrasing' },
    { de: 'Für den offiziellen Antrag benötigen wir eine unpersönliche Formulierung.', text: 'Use "benötigen" (formal) instead of "brauchen" (informal) in administrative register' },
    { de: 'Jede Situation hat ihren eigenen sprachlichen Kleidungscode.', text: 'Understand the chapter\'s core metaphor for register appropriateness' }
  ],
  vocab: [
    { de: 'reden', pos: 'verb', level: 'C1', register: 'informal', en: 'to talk (informal)', hi: 'बात करना (अनौपचारिक)', ex: 'Wenn ich mit Freunden rede, sage ich einfach: "Na ja".', exEn: 'When I talk with friends, I simply say: "Well...".', exHi: 'Jab main doston ke saath baat karti hoon, main bas kehti hoon: "Acha..."', ex2: 'Wir haben stundenlang geredet.', ex2En: 'We talked for hours.', ex2Hi: 'Hum ghanton baat karte rahe.', conj: { praesens: 'redet', praeteritum: 'redete', perfekt: 'hat geredet' } },
    { de: 'benötigen', pos: 'verb', level: 'C1', register: 'formal', en: 'to require (formal)', hi: 'आवश्यकता होना (औपचारिक)', ex: 'Für den offiziellen Antrag benötigen wir eine unpersönliche Formulierung.', exEn: 'For the official application, we require an impersonal phrasing.', exHi: 'Aadhikaarik aavedan ke liye, hamein anaupacharik shabdaavali ki zaroorat hai.', ex2: 'Der Antrag benötigt zusätzliche Unterlagen.', ex2En: 'The application requires additional documents.', ex2Hi: 'Aavedan ke liye aur dastaavez ki zaroorat hai.', conj: { praesens: 'benötigt', praeteritum: 'benötigte', perfekt: 'hat benötigt' } },
    { de: 'der Kleidungscode', art: 'der', gender: 'm', plural: 'Kleidungscodes', pos: 'noun', level: 'C1', register: 'written', en: 'dress code', hi: 'पोशाक संहिता', ex: 'Jede Situation hat ihren eigenen sprachlichen Kleidungscode.', exEn: 'Every situation has its own linguistic dress code.', exHi: 'Har sthiti ki apni khaas bhaashaayi poshaak sanhita hai.', ex2: 'Der Kleidungscode für die Konferenz ist formell.', ex2En: 'The dress code for the conference is formal.', ex2Hi: 'Conference ke liye poshaak sanhita formal hai.' },
    { de: 'sehr geehrte(r)', pos: 'fixed formal salutation', level: 'C1', register: 'formal', en: 'dear (formal letter/email opener)', hi: 'प्रिय (औपचारिक)', ex: 'Sehr geehrte Damen und Herren, ...', exEn: 'Dear Sir or Madam, ...', exHi: 'Pyaare mahoday, ...', ex2: 'Sehr geehrter Herr Schmidt, vielen Dank für Ihre Anfrage.', ex2En: 'Dear Mr. Schmidt, thank you for your inquiry.', ex2Hi: 'Pyaare Mr. Schmidt, aapke sawaal ke liye dhanyavaad.' },
    { de: 'sich beobachten lassen', pos: 'verb (fixed academic construction)', level: 'C1', register: 'written', en: 'to be observable', hi: 'देखा जा सकना', ex: 'Die Ergebnisse lassen sich systematisch beobachten.', exEn: 'The results can be systematically observed.', exHi: 'Parinaam vyavasthit roop se dekhi jaa sakti hain.', ex2: 'Ein klarer Trend lässt sich beobachten.', ex2En: 'A clear trend can be observed.', ex2Hi: 'Ek spasht trend dekha jaa sakta hai.' }
  ],
  grammar: [
    { title: 'Was ist Register? (What is Register?)', body: [ 'Situation → Audience → Purpose → Register → Language Choice → Successful Communication. Identical information can be expressed differently depending on context.' ], hinglish: 'Ek hi baat kai tarah se kahi jaa sakti hai, aur kaunsa tareeka sahi hai yeh situation tay karti hai \u2014 kisse baat kar rahe ho aur kyun. C1 par sirf grammar nahi dekha jaata, balki yeh bhi ki tumne mauke ke hisaab se sahi bhaasha chuni ya nahi.' },
    { title: 'Formell vs Informell (Formal vs Informal Vocabulary Pairs)', body: [ 'sprechen (formal) vs reden (informal); erhalten (formal) vs bekommen (neutral/informal); benötigen (formal) vs brauchen (informal); wohnen (neutral) vs leben (broader); informieren (formal) vs Bescheid geben (informal). Register differences, not "correct vs incorrect".' ], hinglish: 'Yeh jodiyan yaad karne layak hain, aur dhyaan rakho \u2014 dono sahi hain, bas register alag hai. <b>ben\u00f6tigen</b> aur <b>erhalten</b> formal writing ke liye, aur <b>brauchen</b> aur <b>bekommen</b> rozmarra ke liye. Isi tarah <b>informieren</b> formal aur <b>Bescheid geben</b> informal. Sabse zaroori baat: ek hi text mein dono taraf se shabd mat uthao.' },
    { title: 'Sechs Stilebenen (Six Style Levels)', body: [ 'Everyday German, Professional German, Academic German, Scientific German, Administrative German, Journalistic German — each is naturally used in its own context.' ], hinglish: 'Chhe register hain, aur inhe ek seedhi ki tarah socho \u2014 rozmarra, office, university, research, sarkari daftar, aur akhbaar. Jitna aage badhte ho, utna zyada passive, nominalization aur formal vocabulary aata hai, aur utna kam \u201cmain\u201d aur \u201ctum\u201d.' },
    { title: 'Gesprochenes vs geschriebenes Deutsch (Spoken vs Written German)', body: [ 'Spoken: Na ja..., Eigentlich..., Also... Written: Darüber hinaus..., Im Folgenden..., Zusammenfassend..., Demnach... Mixing these registers within one text is a common learner mistake.' ], hinglish: 'Bolne aur likhne wale German mein saaf farak hai. <b>Na ja</b>, <b>eigentlich</b>, <b>also</b> \u2014 yeh baat karte waqt aate hain, aur likhne mein inhe bilkul nahi lagana. Likhne ke apne connectors hain: <b>dar\u00fcber hinaus</b>, <b>im Folgenden</b>, <b>zusammenfassend</b>, <b>demnach</b>. Yeh sab position 1 lete hain, isliye inke baad verb turant aata hai.' },
    { title: 'Akademisches & Wissenschaftliches Deutsch', body: [ 'Academic: objective tone, precise wording, cautious conclusions, evidence-based language. Scientific: neutral language, methodological wording, interpretation, limitation statements ("die Ergebnisse lassen sich systematisch beobachten").' ], hinglish: 'Academic aur scientific German ki pehchaan yeh hai ki writer khud sentence se hat jaata hai \u2014 isliye wahan passive aur nominalization bahut aate hain: <i>wir haben untersucht</i> ki jagah <span class="de">es wurde untersucht</span>. Aur nateeje aksar hedge ke saath aate hain (<b>k\u00f6nnte</b>, <b>d\u00fcrfte</b>), poore dave ke saath nahi.' },
    { title: 'Verwaltungssprache & Professionelle Kommunikation', body: [ 'Administrative: impersonal phrasing, formal salutations (sehr geehrte...), official document conventions. Professional: meetings, emails, presentations, professional politeness in the workplace.' ], hinglish: 'Sarkari bhaasha sabse impersonal hoti hai \u2014 wahan <b>Sehr geehrte Damen und Herren</b>, <b>hiermit</b> aur <b>mitteilen</b> jaise shabd aate hain. Office ki bhaasha thodi narm hoti hai: <b>Sehr geehrte Frau \u2026</b> ke saath <b>K\u00f6nnten Sie \u2026?</b> Par ek baat dhyaan mein rakho \u2014 sarkari bhaasha ko dost ke message mein use karna bhi galti hai.' },
    {
      title: 'Woran man das Register erkennt',
      body: [
        'Register is not decided by single words \u2014 four things move together, and consistency across all four is what makes a text sound right.',
        'This is also the checklist to use when proofreading: if any one of the four slips, the whole text sounds off.'
      ],
      table: {
        head: ['Feature', 'Informal', 'Formal / academic'],
        rows: [
          ['address', '<span class="de">du, dir, dich</span>', '<span class="de">Sie, Ihnen</span> (always capitalised)'],
          ['vocabulary', '<span class="de">brauchen, bekommen, reden</span>', '<span class="de">ben\u00f6tigen, erhalten, sprechen</span>'],
          ['agent', '<span class="de">wir haben untersucht</span>', 'passive: <span class="de">es wurde untersucht</span>'],
          ['connectors', '<span class="de">also, na ja, und dann</span>', '<span class="de">dar\u00fcber hinaus, demnach, zusammenfassend</span>'],
          ['requests', '<span class="de">Schick mir das!</span>', '<span class="de">K\u00f6nnten Sie mir das zusenden?</span>']
        ]
      },
      note: 'Over-formality is an error too: administrative vocabulary in a message to a friend sounds as wrong as slang in a thesis. Match the situation, not the maximum.',
      hinglish: 'Register ek shabd se tay nahi hota \u2014 chaar cheezein saath chalti hain, aur inme se ek bhi phisal jaaye to poora text ajeeb lagta hai. Pehla, address: <b>du</b> ya <b>Sie</b> \u2014 aur <b>Sie</b> hamesha capital letter se. Doosra, vocabulary: <b>brauchen/bekommen</b> informal hain aur <b>ben\u00f6tigen/erhalten</b> formal. Teesra, karne wala: informal mein <i>wir haben untersucht</i>, par academic mein passive \u2014 <i>es wurde untersucht</i>. Chautha, connectors: <i>also, na ja</i> bolchaal ke hain aur <b>dar\u00fcber hinaus, demnach</b> likhne ke. Proofreading mein yeh chaar cheezein check karo. Aur ek baat yaad rakho \u2014 zyada formal hona bhi galti hai: dost ko official bhaasha mein likhna utna hi ajeeb lagta hai jitna thesis mein slang.'
    },
    { title: 'Meister-Tabelle', body: [ 'Situation mapped to appropriate register.' ], table: { head: ['Situation', 'Appropriate Register'], rows: [ ['Friends', 'Informal'], ['Workplace', 'Professional'], ['University', 'Academic'], ['Research', 'Scientific'], ['Government', 'Administrative'], ['Newspaper', 'Journalistic'] ] }, hinglish: 'Situation aur register ka table \u2014 likhne se pehle yeh tay karo ki tum kis khaane mein ho, phir poore text mein usi mein raho.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Every one of these is grammatically correct German \u2014 the error is the mismatch. Note that being too formal is just as wrong as being too casual.' ], mistakes: [
      { wrong: 'Sehr geehrte Frau M\u00fcller, ich wollte dir kurz Bescheid geben, dass \u2026', right: 'Sehr geehrte Frau M\u00fcller, ich m\u00f6chte Sie dar\u00fcber informieren, dass \u2026', why: 'A formal salutation commits you to <b>Sie</b> and formal vocabulary for the rest of the text \u2014 <i>dir</i> and <i>Bescheid geben</i> break both.' },
      { wrong: 'Die Studie hat gezeigt, dass wir mehr Daten brauchen \u2014 na ja, das ist klar.', right: 'Die Studie hat gezeigt, dass mehr Daten ben\u00f6tigt werden.', why: 'Three register breaks at once: the filler <i>na ja</i>, the informal <i>brauchen</i>, and the personal <i>wir</i> where academic German prefers the passive.' },
      { wrong: 'Ich habe deine Mail erhalten und werde dir Bescheid geben.', right: 'Ich habe deine Mail bekommen und sage dir Bescheid. / Ich habe Ihre Mail erhalten und werde Sie informieren.', why: 'Pick one level: <b>erhalten</b> and <b>informieren</b> are formal, <b>bekommen</b> and <b>Bescheid sagen</b> informal. Mixing them inside one sentence is what sounds wrong.' },
      { wrong: 'Hallo Anna! Hiermit teile ich dir mit, dass ich morgen ben\u00f6tigte Unterlagen \u00fcbermittle.', right: 'Hallo Anna! Ich schicke dir die Unterlagen morgen.', why: 'Administrative vocabulary (<i>hiermit</i>, <i>mitteilen</i>, <i>\u00fcbermitteln</i>) after a casual greeting sounds stilted. Over-formality is a register error too.' },
      { wrong: 'Sehr geehrter Herr Wagner, schick mir bitte den Bericht.', right: 'Sehr geehrter Herr Wagner, k\u00f6nnten Sie mir bitte den Bericht zusenden?', why: 'A <b>du</b>-imperative under a formal salutation is the sharpest register clash there is \u2014 formal contexts need the <b>Sie</b>-form and a modal question.' },
      { wrong: 'Zusammenfassend l\u00e4sst sich sagen, dass das Projekt echt gut gelaufen ist.', right: 'Zusammenfassend l\u00e4sst sich sagen, dass das Projekt erfolgreich verlaufen ist.', why: 'A formal opener followed by <i>echt gut</i> collapses mid-sentence. Once you start in an academic register, the vocabulary has to follow.' }
    ], hinglish: 'In sab mein grammar bilkul sahi hai \u2014 galti sirf yeh hai ki bhaasha situation se match nahi karti. Aur dhyaan do ki zyada formal hona bhi utni hi badi galti hai jitna zyada casual hona.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Who is the audience? Friend? Informal German. Professor? Academic German. Employer? Professional German. Research Community? Scientific German. Government Office? Administrative German.' ], note: 'Memory trick: imagine you own six different suits. You would never wear a wedding suit to the gym or pajamas to a university lecture. Language works the same way.', hinglish: 'Pehla sawaal hamesha yeh \u2014 kisse baat kar rahe ho? Dost se? Informal. Professor se? Academic. Boss se? Professional. Sarkari daftar? Administrative. Aur uske baad chaar cheezein poore text mein ek jaisi rakho: address (du/Sie), vocabulary, passive ya \u201cwir\u201d, aur connectors.' }
  ],
  reading: {
    title: 'Fachartikel: Windkraft und lokale Ökosysteme',
    titleEn: 'Reading A — Journal article: wind power and local ecosystems',
    tokens: [
      { w: 'Die', role: 'r-akademischessprache', en: 'the (plural nom., academic register opener)', hi: '', type: 'Article' },
      { w: 'Ergebnisse', role: 'r-akademischessprache', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'lassen', role: 'r-akademischessprache', en: 'let (part of "lassen sich...interpretieren", academic construction)', hi: '', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-akademischessprache', en: '(reflexive)', hi: '', type: 'Reflexivpronomen · Akk.' },
      { w: 'vorsichtig', role: 'r-akademischessprache', en: 'cautiously (part of academic hedge)', hi: 'सावधानी से (academic hedge)', type: 'Adjective (Adverbial)' },
      { w: 'dahingehend', role: 'r-akademischessprache', en: 'to the effect (formal academic connector)', hi: 'इस अर्थ में', type: 'Adverb' },
      { w: 'interpretieren', role: 'r-akademischessprache', en: 'interpret (Satzende, cautious academic phrasing)', hi: 'व्याख्यायित की जा सकती हैं (Satzende)', type: 'Verb (Infinitiv, Satzende)', why: 'This cautious, objective phrasing is characteristic of academic register — direct opinions are avoided in favor of hedged interpretation (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'Windparks', role: 'plain', en: 'wind farms', hi: 'पवन फार्म', type: 'Noun · plural' },
      { w: 'das', role: 'plain', en: 'the (neut. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Verhalten', role: 'plain', en: 'behaviour', hi: 'व्यवहार', type: 'Noun · neut.' },
      { w: 'bestimmter', role: 'plain', en: 'certain', hi: 'कुछ', type: 'Adjective · Gen.' },
      { w: 'Zugvogelarten', role: 'plain', en: 'migratory bird species (Satzende)', hi: 'प्रवासी पक्षी प्रजातियों (Satzende)', type: 'Noun · plural' },
      { w: 'beeinflussen', role: 'plain', en: 'influence (Satzende)', hi: 'प्रभावित करते हैं (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'abschließendes', role: 'plain', en: 'conclusive (Satzende)', hi: 'निर्णायक (Satzende)', type: 'Adjective' },
      { w: 'Urteil', role: 'plain', en: 'judgement (Satzende)', hi: 'फ़ैसला (Satzende)', type: 'Noun · neut.' },
      { w: 'lässt', role: 'r-akademischessprache', en: 'lets (part of academic hedge)', hi: '', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-akademischessprache', en: '(reflexive)', hi: '', type: 'Reflexivpronomen' },
      { w: 'auf', role: 'plain', en: 'on the basis of', hi: 'के आधार पर', type: 'Präposition · Akk.' },
      { w: 'dieser', role: 'plain', en: 'this (fem. dat.)', hi: 'इस', type: 'Demonstrativpronomen · Dat.' },
      { w: 'Datenlage', role: 'plain', en: 'data situation (Satzende)', hi: 'डेटा स्थिति (Satzende)', type: 'Noun · fem.' },
      { w: 'noch', role: 'plain', en: 'yet', hi: 'अभी', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'fällen', role: 'plain', en: 'reach (Satzende)', hi: 'लिया जा सकता (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true }
    ],
    translation: 'The results can be cautiously interpreted to the effect that wind farms influence the behaviour of certain migratory bird species. A conclusive judgement, however, cannot yet be reached on this data basis.',
    comprehension: [
      { q: 'Welche Stilebene zeigt dieser Text?', options: ['Akademisches/wissenschaftliches Deutsch', 'Umgangssprache', 'Verwaltungssprache'], answer: 0 },
      { q: 'Warum verwendet der Text "lassen sich...interpretieren" statt einer direkten Meinung?', options: ['Um objektiv und vorsichtig zu klingen', 'Zufall', 'Grammatikfehler'], answer: 0 },
      { q: 'Wäre "Na ja, das könnte stimmen" in diesem Kontext angemessen?', options: ['Nein, das wäre gesprochene Umgangssprache', 'Ja, absolut passend', 'Es spielt keine Rolle'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Amtliches Schreiben', titleEn: 'Reading B — Official administrative communication',
    tokens: [
      { w: 'Sehr', role: 'r-register', en: 'very (fixed formal salutation opener)', hi: '(fixed formal salutation)', type: 'Adverb' },
      { w: 'geehrte', role: 'r-register', en: 'honored (Satzende, standard formal salutation)', hi: 'mahoday (Satzende)', type: 'Adjective · Vokativ (Satzende)' },
      { w: 'Damen', role: 'plain', en: 'ladies', hi: 'mahilaaon', type: 'Noun · plural' },
      { w: 'und', role: 'plain', en: 'and', hi: 'aur', type: 'Konjunktion' },
      { w: 'Herren', role: 'plain', en: 'gentlemen (Satzende)', hi: 'sajjanon (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'für', role: 'plain', en: 'for', hi: 'ke liye', type: 'Präposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Antrag', role: 'plain', en: 'application (Satzende)', hi: 'aavedan (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'benötigen', role: 'r-verwaltungssprache', en: 'require (formal register verb, distinct from casual "brauchen")', hi: 'zaroorat hai (formal register verb)', type: 'Verb (Präsens)' },
      { w: 'wir', role: 'plain', en: 'we', hi: 'hamein', type: 'Pronomen · Akk.' },
      { w: 'weitere', role: 'plain', en: 'further', hi: 'aur', type: 'Adjective · Akk.' },
      { w: 'Unterlagen', role: 'plain', en: 'documents (Satzende)', hi: 'dastaavez ki (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Dear Sir or Madam, for the application we require further documents.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_036_L001', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, zum heutigen Geschäftsessen solltest du unbedingt einen dunklen Anzug tragen.', en: 'Timo, for tonight\'s business dinner you should definitely wear a dark suit.' },
      { id: 'C1_036_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstanden. Und wie spreche ich den Direktor am besten an?', en: 'Understood. And how do I best address the director?' },
      { id: 'C1_036_L003', speaker: 'Solveig', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Am Anfang mit "Herr Direktor", später reicht auch ein einfaches "Sie".', en: 'At the beginning with "Herr Direktor", later a simple "Sie" is enough too.' },
      { id: 'C1_036_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut zu wissen, dann bin ich für heute Abend gewappnet.', en: 'Good to know, then I\'m prepared for tonight.' }
    ],
    transcript: 'Timo, zum heutigen Geschäftsessen solltest du unbedingt einen dunklen Anzug tragen. Verstanden. Und wie spreche ich den Direktor am besten an? Am Anfang mit "Herr Direktor", später reicht auch ein einfaches "Sie". Gut zu wissen, dann bin ich für heute Abend gewappnet.',
    translation: 'Timo, for tonight\'s business dinner you should definitely wear a dark suit. Understood. And how do I best address the director? At the beginning with "Herr Direktor", later a simple "Sie" is enough too. Good to know, then I\'m prepared for tonight.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'zum' },
      { w: 'heutigen' },
      { w: 'Geschäftsessen' },
      { w: 'solltest' },
      { w: 'du' },
      { w: 'unbedingt' },
      { w: 'einen' },
      { w: 'dunklen' },
      { w: 'Anzug' },
      { w: 'tragen' },
      { w: '.', plain: true },
      { w: 'Verstanden' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wie' },
      { w: 'spreche' },
      { w: 'ich' },
      { w: 'den' },
      { w: 'Direktor' },
      { w: 'am' },
      { w: 'besten' },
      { w: 'an' },
      { w: '?', plain: true },
      { w: 'Am' },
      { w: 'Anfang' },
      { w: 'mit' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Herr' },
      { w: 'Direktor' },
      { w: '",', plain: true },
      { w: 'später' },
      { w: 'reicht' },
      { w: 'auch' },
      { w: 'ein' },
      { w: 'einfaches' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Sie' },
      { w: '".', plain: true },
      { w: 'Gut' },
      { w: 'zu' },
      { w: 'wissen' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'bin' },
      { w: 'ich' },
      { w: 'für' },
      { w: 'heute' },
      { w: 'Abend' },
      { w: 'gewappnet' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was soll Timo heute Abend tragen?', qEn: 'What should Timo wear tonight?', options: ['einen hellen Anzug', 'einen dunklen Anzug', 'Jeans', 'ein Hemd ohne Jacke'], optionsEn: ['a light suit', 'a dark suit', 'jeans', 'a shirt without a jacket'], answer: 1,
        explain: '"Du solltest unbedingt einen dunklen Anzug tragen."' },
      { q: 'Wie soll Timo den Direktor zunächst anreden?', qEn: 'How should Timo address the director at first?', options: ['mit Vornamen', 'mit "Herr Direktor"', 'gar nicht', 'mit "Du"'], optionsEn: ['by first name', 'with "Herr Direktor"', 'not at all', 'with "du"'], answer: 1,
        explain: '"Am Anfang mit \'Herr Direktor\'."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, was er zum Geschäftsessen tragen soll.", taskEn: "Timo asks what to wear to the business dinner.", de: "Der Kleidungscode ist streng; du benötigst unbedingt einen dunklen Anzug.", en: "The dress code is strict; you definitely need a dark suit." },
    { task: "Timo fragt, wie er den Direktor anspricht.", taskEn: "Timo asks how to address the director.", de: "Am Anfang sagst du Sehr geehrter Herr Direktor, später reicht Herr Weber.", en: "At first say 'Sehr geehrter Herr Direktor', later 'Herr Weber' is enough." },
    { task: "Sag einem Freund und dann einem Kunden dieselbe Absage.", taskEn: "Give the same refusal to a friend, then a client.", de: "Das schaffe ich leider nicht. Förmlich: leider ist mir das nicht möglich.", en: "I can't manage that, sorry. Formally: unfortunately that isn't possible for me." },
    { task: "Beginne den Brief an die Behörde.", taskEn: "Begin the letter to the authority.", de: "Sehr geehrte Damen und Herren, mit Bezug auf Ihr Schreiben vom dritten Mai.", en: "Dear Sir or Madam, with reference to your letter of the third of May." },
    { task: "Ein Kollege redet beim Empfang zu salopp. Rate ihm.", taskEn: "A colleague speaks too casually at the reception. Advise him.", de: "Beim Empfang hört jeder mit; ich würde deutlich förmlicher reden.", en: "At a reception everybody is listening; I'd speak considerably more formally." }
  ],
  writing: {
    prompt: 'TASK 1 — Style transformation (150 words): Rewrite the same text into informal conversation, professional email, academic paragraph, and scientific report. Explain every stylistic change.\n\nTASK 2 — Formal article (350 words): Demonstrate consistent register, audience awareness, stylistic precision, authentic C1 vocabulary, and appropriate tone.',
    starters: ['Sehr geehrte Damen und Herren, für den Antrag benötigen wir weitere Unterlagen.', 'Die Ergebnisse lassen sich systematisch beobachten und interpretieren.'],
    placeholder: 'Im Folgenden möchte ich die wichtigsten Punkte zusammenfassen. Demnach lässt sich Folgendes feststellen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which verb pair shows a formal vs informal register distinction?', options: ['benötigen (formal) vs brauchen (informal)', 'gehen vs laufen', 'sein vs werden'], answer: 0, explain: '"Benötigen" and "brauchen" mean the same thing but differ in register — formal vs informal.' },
    gap: { sentence: ['Für den offiziellen Antrag ', ' wir eine unpersönliche Formulierung.'], gaps: [ { answer: 'benötigen', accepts: ['benötigen'] } ], explain: 'Administrative register calls for the formal "benötigen" rather than casual "brauchen".' },
    match: { q: 'Match each expression to its register.', pairs: [ { noun: 'Na ja...', art: 'Spoken/informal' }, { noun: 'Sehr geehrte...', art: 'Formal/professional' }, { noun: 'lassen sich beobachten', art: 'Academic/scientific' }, { noun: 'benötigen', art: 'Formal (vs "brauchen")' } ] },
    builder: { target: 'Build: "The results can be systematically observed." (academic register)', bank: ['Die', 'Ergebnisse', 'lassen', 'sich', 'systematisch', 'beobachten', '.'], answer: ['Die', 'Ergebnisse', 'lassen', 'sich', 'systematisch', 'beobachten', '.'], roles: { 'lassen': 'r-akademischessprache', 'sich': 'r-akademischessprache', 'beobachten': 'r-akademischessprache' } },
    errorCorrection: { title: 'Error correction', wrong: 'Sehr geehrte Damen und Herren, na ja, wir brauchen mehr Unterlagen.', right: 'Sehr geehrte Damen und Herren, für den Antrag benötigen wir weitere Unterlagen.', explain: 'Mixing the formal salutation with the spoken filler "na ja" and casual "brauchen" creates an inconsistent register within one sentence.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for register?', options: ['Every situation has its own linguistic dress code, just like you would not wear a wedding suit to the gym', 'All German registers are interchangeable', 'Formal is always better than informal'], answer: 0, explain: 'Native speakers instinctively match language to context, just as they match clothing to occasion.' },
    { q: 'Which is the more formal register partner of "brauchen"?', options: ['benötigen', 'reden', 'wohnen'], answer: 0, explain: '"Benötigen" is the formal-register equivalent of "brauchen".' },
    { q: 'What discourse marker belongs to spoken, not written, German?', options: ['Na ja', 'Im Folgenden', 'Darüber hinaus'], answer: 0, explain: '"Na ja" is a spoken filler, inappropriate in formal written texts.' },
    { q: 'What characterizes academic register?', options: ['Objective tone, precise wording, cautious conclusions', 'Casual conversation and slang', 'Emotional persuasion'], answer: 0, explain: 'Academic German values evidence-based, hedged, objective phrasing.' },
    { q: 'What mistake occurs when a text starts formal and drifts casual?', options: ['Inconsistent register/style', 'Correct code-switching', 'A stylistic strength'], answer: 0, explain: 'Maintaining one consistent register throughout a text is essential at C1 level.' }
  ],
  takeaways: [
    { c: 'r-register', html: 'Formal/informal vocabulary pairs (sprechen/reden, benötigen/brauchen, erhalten/bekommen) let speakers match register precisely to context.' },
    { c: 'r-gesprochenessprache', html: 'Spoken discourse markers (na ja, eigentlich, also) belong to conversation; written markers (im Folgenden, darüber hinaus, demnach) belong to formal text — never mix them.' },
    { c: 'r-akademischessprache', html: 'Academic/scientific register favors objective, hedged phrasing (lassen sich beobachten/interpretieren) over direct personal opinion.' }
  ],
  revisionTips: [
    'Take one piece of information and write it in three different registers: informal conversation, formal email, and academic paragraph.',
    'List five formal/informal vocabulary pairs (like benötigen/brauchen) and use each in one sentence per register.',
    'Find a German business email and a German academic abstract, and compare their salutations, vocabulary, and sentence structure side by side.'
  ]
};
window.CHAPTER = CHAPTER;
