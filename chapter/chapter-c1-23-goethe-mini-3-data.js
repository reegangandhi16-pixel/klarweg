/* KLARWEG CHAPTER DATA — C1 · Chapter 23 (Goethe Mini 3)
   Checkpoint chapter — NO new grammar, NO new vocabulary.
   Reviews ONLY Chapters 18-22: Adjektivdeklination sicher
   anwenden, Steigerung & sprachliche Abstufung, Relativsätze
   erweitern und variieren, Partizipialattribute verstehen und
   nutzen, Komplexe Attribute & Nominalgruppen.
   Dialogue: Nadine and Timo ONLY. */
const CHAPTER = {
  id: 'c1-23-goethe-mini-3',
  phase: 'C1 · Nominalstil & Präzision',
  number: 23,
  title: 'Goethe Mini 3',
  titleEn: 'Checkpoint: Chapters 18–22',
  description: 'Goethe Mini 3 verifies whether the learner can automatically produce authentic C1 sentence architecture before entering the final phase of the course. The focus is fluency and information density, not isolated grammar knowledge.',
  xp: 650, time: 120, difficulty: 'Checkpoint',
  nextChapter: { number: 24, title: 'Nominalisierung im formellen Stil', titleEn: 'Nominalization in formal style' , href: 'chapter-c1-24-nominalisierung-im-formellen-stil.html' },
  prevChapter: { number: 22, title: 'Komplexe Attribute & Nominalgruppen', titleEn: 'Complex attributes and noun groups', href: 'chapter-c1-22-komplexe-attribute-und-nominalgruppen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not a new chapter — a <em>mirror</em> for Chapters 18–22.',
    intro: 'Finalizing a research paper before submission, Nadine praises Timo\'s condensed, precise text — naturally recycling adjective declension, comparison, relative clauses, participial attributes, and complex nominal groups.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See all five Chapter 18-22 skills woven into one authentic academic editing session'],
    scene: 'Letzte Überarbeitung eines Forschungsartikels vor der Einreichung',
    femaleSpeakers: ['Nadine'],
    dialogue: [
      { speaker: 'Nadine', tokens: [
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Präsentation', role: 'r-subject', en: 'presentation', hi: 'प्रस्तुति', pron: 'pray-zen-ta-TSYON', type: 'Noun · fem.' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum)' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'überzeugend', role: 'r-akkusativ', en: 'convincing', hi: 'मनाने वाली', pron: 'ü-ber-TSOY-gent', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Your presentation was very convincing.', hi: 'Tumhaari prastuti bahut manaane waali thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Text', role: 'r-akkusativ', en: 'text', hi: 'पाठ', pron: 'tekst', type: 'Noun · masc.' },
        { w: 'verdichtet', role: 'r-verb', en: 'condensed', hi: 'संघनित', pron: 'fer-DIKH-tet', type: 'Partizip II · Satzende' },
        { w: ',', plain: true },
        { w: 'sodass', role: 'r-conjunction', en: 'so that', hi: 'ताकि', pron: 'zo-DAS', type: 'Conjunction · sodass' },
        { w: 'er', role: 'r-subject', en: 'it', hi: 'यह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'eleganter', role: 'r-akkusativ', en: 'more elegant', hi: 'ज़्यादा सुरुचिपूर्ण', pron: 'ay-le-GAN-ter', type: 'Adjective · Komparativ' },
        { w: 'wirkt', role: 'r-verb', en: 'appears', hi: 'लगता है', pron: 'virkt', type: 'Verb · wirken (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! I have condensed the text, so that it appears more elegant.', hi: 'Dhanyavaad! Maine paath sanghanit kiya hai, taaki yeh zyada suruchipoorn lagta hai.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lobe', role: 'r-verb', en: 'praise', hi: 'सराहती हूँ', pron: 'LO-buh', type: 'Verb · loben (ich)', why: 'loben = to praise (this chapter).', ex: 'Ich lobe deine Arbeit.', exEn: 'I praise your work.' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारा', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Präzision', role: 'r-akkusativ', en: 'precision', hi: 'सटीकता', pron: 'pray-tsi-ZYON', type: 'Noun · fem.' },
        { w: 'besonders', role: 'r-akkusativ', en: 'especially', hi: 'ख़ास तौर पर', pron: 'be-ZON-ders', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'I especially praise your precision.', hi: 'Main khaas taur par tumhaari sateekta ki saraahna karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! That pleases me very much.', hi: 'Dhanyavaad! Mujhe iski bahut khushi hai.' },
      { speaker: 'Nadine', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Präsentation', role: 'r-akkusativ', en: 'presentation', hi: 'प्रस्तुति', pron: 'pray-zen-ta-TSYON', type: 'Noun · fem.' },
        { w: 'nächste', role: 'r-akkusativ', en: 'next', hi: 'अगली', pron: 'NEKS-tuh', type: 'Adjective' },
        { w: 'Woche', role: 'r-akkusativ', en: 'week', hi: 'हफ़्ते', pron: 'VO-khuh', type: 'Noun · fem.' },
        { w: 'wieder', role: 'r-akkusativ', en: 'again', hi: 'फिर से', pron: 'VEE-der', type: 'Adverb' },
        { w: 'halten', role: 'r-verb', en: 'hold', hi: 'देना', pron: 'HAL-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Shall we hold the presentation again next week?', hi: 'Kya humein agle hafte phir se prastuti deni chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gerne', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'GAIR-nuh', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bereite', role: 'r-verb', en: 'prepare', hi: 'तैयार करता हूँ', pron: 'be-RY-tuh', type: 'Verb · vorbereiten (ich)', lexicalUnit: 'vorbereiten' },
        { w: 'alles', role: 'r-akkusativ', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: 'vor', role: 'r-verb', en: '(prefix of vorbereiten)', hi: '', pron: 'for', type: 'Separable prefix · Satzende', lexicalUnit: 'vorbereiten' },
        { w: '.', plain: true }
      ], en: 'Gladly. I will prepare everything.', hi: 'Khushi se. Main sab kuch taiyaar karta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'A Goethe Mini chapter is <b>not another chapter</b> — it measures whether Chapters 18–22 have become automatic. Zero new content: only <span class="de r-schwach">Adjektivdeklination</span>, <span class="de r-vergleich">Steigerung</span>, <span class="de r-relativ">Relativsätze</span>, <span class="de r-partizip2-attribut">Partizipialattribute</span>, and <span class="de r-nominalgruppe">Nominalgruppen</span>.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 3 — a checkpoint chapter reviewing ONLY Chapters 18-22, with ZERO new grammar or vocabulary. Covered material: Chapter 18 adjective declension logic (weak/mixed/strong based on what the article already signals); Chapter 19 gradation and linguistic nuance (equality, comparative nuance, intensifiers, downtoners beyond basic größer/am größten); Chapter 20 expanding and varying relative clauses (complex/genitive/prepositional relative clauses, relative adverbs, participial/nominal alternatives); Chapter 21 participial attributes as a stylistic device (Partizip I/II attributes folding relative clauses, expanded participial attributes); Chapter 22 complex attributes and noun groups (adjective/participial/genitive/prepositional attributes combined, attribute hierarchy). Do NOT expect, require, or introduce ANY grammar or vocabulary beyond these five chapters — flag nothing from C1 Chapter 23 onward or from C2. The most important thing to catch: whether the learner integrates MULTIPLE Chapter 18-22 skills naturally together (correct adjective declension + varied comparison + compressed participial/nominal style in the same piece of writing), since that is what this checkpoint measures. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Check adjective declension logic, comparison/intensifier precision, relative clause variation, participial attribute formation, and nominal group density — drawing only on Chapters 18-22 concepts. Flag confusions such as inconsistent adjective endings in a chain, weak intensifiers ("sehr") in formal register, or missed opportunities to compress relative clauses into participial attributes. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Readiness check:</b> one sentence on whether the learner combined multiple Chapter 18-22 skills naturally, as a real C1 exam would require.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — Chapters 18-22 are automatic for you. Ready to move on to the final phase of C1.', mid: 'Good — but re-read whichever chapter you found hardest before continuing.', low: 'Worth repeating Chapters 18-22 before continuing — this checkpoint exists to catch that now, not on exam day.' },
  parserSentence: [ { w: 'Die', role: 'r-schwach' }, { w: 'neue', role: 'r-schwach' }, { w: 'Version', role: 'plain' }, { w: 'ist', role: 'plain' }, { w: 'überzeugender', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: this checkpoint measures whether Chapters 18-22 are automatic, not new content.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Nadine and Timo finalize a research paper, naturally weaving all five chapters\' skills together.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key words recycled from Chapters 18-22 — full popups with two examples, case, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Review the Revision Map and Skill Integration covering Chapters 18-22 — zero new grammar.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific journal article and a newspaper feature, identifying adjective, comparison, and attribute structures.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify adjective groups, comparisons, relative clauses, and participial constructions in a lecture and conference discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Give a Goethe C1-style presentation, discussion, and collaborative editing task using Chapters 18-22 naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve a B2 text into formal C1 German and write a 350-400 word academic article.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Complete integrated grammar, vocabulary, and academic/scientific editing exercises from Chapters 18-22 only.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 650 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review your Goethe C1 readiness dashboard and recommended revision order.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: '100 grammar questions and 70 vocabulary questions covering Chapters 18-22, plus a full academic article task.', pdfUrl: '/pdfs/homework.pdf', size: '17 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The complete Revision Map, Skill Integration, and Goethe Readiness Scale for Chapters 18-22.', pdfUrl: '/pdfs/grammar.pdf', size: '15 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die neue Version ist deutlich überzeugender.', text: 'Combine weak declension (Ch.18) with comparative nuance (Ch.19)' },
    { de: 'Die letztes Jahr veröffentlichte Studie klingt wesentlich eleganter.', text: 'Combine a participial attribute (Ch.21) with a strong intensifier (Ch.19)' },
    { de: 'Die auf umfangreichen empirischen Daten basierenden Ergebnisse überzeugen.', text: 'Build a fully expanded complex nominal group (Ch.22)' },
    { de: 'Mehrere international anerkannte Forscher haben unsere Methode gelobt.', text: 'Use strong declension with chained adjectives (Ch.18)' },
    { de: 'Das ist ein gutes Beispiel für echte wissenschaftliche Präzision.', text: 'Use a fixed academic collocation summarizing nominal-style writing (Ch.22)' }
  ],
  vocab: [
    { de: 'überzeugend', pos: 'adjective', level: 'C1', register: 'written', en: 'convincing', hi: 'विश्वसनीय', ex: 'Die neue Version ist deutlich überzeugender.', exEn: 'The new version is noticeably more convincing.', exHi: 'Nayi sanskaran spasht roop se zyaada convincing hai.', ex2: 'Die Argumente waren äußerst überzeugend.', ex2En: 'The arguments were extremely convincing.', ex2Hi: 'Tark nihaayat convincing the.' },
    { de: 'eleganter', pos: 'adjective (Komparativ)', level: 'C1', register: 'written', en: 'more elegant', hi: 'अधिक सुरुचिपूर्ण', ex: 'Diese Formulierung klingt wesentlich eleganter.', exEn: 'This phrasing sounds substantially more elegant.', exHi: 'Yeh formulation kaafi zyaada elegant lagta hai.', ex2: 'Ein eleganterer Stil verbessert die Lesbarkeit.', ex2En: 'A more elegant style improves readability.', ex2Hi: 'Ek zyaada elegant style padhna aasaan banaata hai.' },
    { de: 'loben', pos: 'verb', level: 'C1', register: 'both', en: 'to praise', hi: 'प्रशंसा करना', ex: 'Mehrere Forscher haben unsere Methode gelobt.', exEn: 'Several researchers have praised our method.', exHi: 'Kai shodhkartaon ne hamaari vidhi ki prashansa ki hai.', ex2: 'Der Gutachter lobte die klare Struktur der Arbeit.', ex2En: 'The reviewer praised the clear structure of the paper.', ex2Hi: 'Samiksha karta ne kaam ki spasht structure ki prashansa ki.', conj: { praesens: 'lobt', praeteritum: 'lobte', perfekt: 'hat gelobt' } },
    { de: 'die Präzision', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'precision', hi: 'सटीकता', ex: 'Das ist ein gutes Beispiel für wissenschaftliche Präzision.', exEn: 'That is a good example of scientific precision.', exHi: 'Yeh vaigyaanik sateekta ka ek achha udhaaran hai.', ex2: 'Präzision ist in der Forschung entscheidend.', ex2En: 'Precision is crucial in research.', ex2Hi: 'Shodh mein sateekta mahatvapoorn hai.' },
    { de: 'verdichten', pos: 'verb', level: 'C1', register: 'written', en: 'to compress, condense', hi: 'सघन बनाना', ex: 'Wir haben den Satz zu einem Partizipialattribut verdichtet.', exEn: 'We compressed the sentence into a participial attribute.', exHi: 'Humne vaakya ko ek participial attribute mein sangathit kar diya.', ex2: 'Der Autor hat den Absatz stilistisch verdichtet.', ex2En: 'The author has stylistically condensed the paragraph.', ex2Hi: 'Lekhak ne paragraph ko stylistically sangathit kiya hai.', conj: { praesens: 'verdichtet', praeteritum: 'verdichtete', perfekt: 'hat verdichtet' } }
  ],
  grammar: [
    { title: 'Revisionskarte (Revision Map)', body: [ 'Chapter 18 → Chapter 19 → Chapter 20 → Chapter 21 → Chapter 22 → Goethe Mini 3. This checkpoint tests all five chapters together, not in isolation.' ], hinglish: 'Yeh checkpoint Chapter 18 se 22 tak ka sab kuch ek saath test karta hai. Paanchon chapters ek hi cheez ke hisse hain \u2014 noun phrase ko sahi tarah se banana \u2014 isliye inhe alag-alag nahi, saath mein dekhna hi sahi hai.' },
    { title: 'Kompetenzintegration (Skill Integration)', body: [ 'Grammar → Vocabulary → Reading → Listening → Speaking → Writing → Academic Writing → Scientific Communication. Every skill recycles Chapters 18-22 exclusively.' ], hinglish: 'Har skill wahi Chapter 18 se 22 wala material dobara laati hai \u2014 kuch naya nahi aayega.' },
    { title: 'Kapitel 18 — Adjektivdeklination sicher anwenden (Rückblick)', body: [ 'Weak (after der/die/das \u2014 endings are only <b>-e</b> or <b>-en</b>), mixed (after ein-words \u2014 the adjective supplies what the article lacks: <b>-er</b>, <b>-es</b>), strong (no article \u2014 the adjective takes the article\u2019s own ending). Quick test: does the article already show gender and case? If yes, weak.' ], hinglish: 'Teen declensions ka faisla ek hi sawaal se hota hai \u2014 kya article pehle se gender aur case dikha raha hai? Agar haan (der/die/das), to <b>weak</b>, aur endings sirf <b>-e</b> ya <b>-en</b> hoti hain. Agar article adhoora hai (<i>ein</i>, <i>mein</i>), to <b>mixed</b> \u2014 adjective woh kami poori karta hai (<b>-er</b>, <b>-es</b>). Aur agar article hai hi nahi, to <b>strong</b> \u2014 adjective khud article wali ending le leta hai.' },
    { title: 'Kapitel 19 — Steigerung & sprachliche Abstufung (Rückblick)', body: [ 'Equality takes <b>wie</b> (ebenso \u2026 wie), comparison takes <b>als</b>. Degree words split: <b>\u00e4u\u00dferst</b>/<b>ausgesprochen</b> attach to a plain adjective, <b>deutlich</b>/<b>erheblich</b>/<b>wesentlich</b> only to a comparative, and <b>mit Abstand</b>/<b>bei weitem</b> to a superlative. Downtoners: nur bedingt, vergleichsweise.' ], hinglish: 'Do cheezein pakki kar lo. Barabari mein <b>wie</b> aata hai aur comparison mein <b>als</b> \u2014 yeh sabse zyada galat hota hai. Aur degree words apni jagah dekhte hain: <b>\u00e4u\u00dferst</b> saadharan adjective ke saath, <b>deutlich</b> aur <b>erheblich</b> sirf comparative ke saath, aur <b>bei weitem</b> superlative ke saath.' },
    { title: 'Kapitel 20 — Relativsätze erweitern und variieren (Rückblick)', body: [ 'The verb goes to the END of the relative clause; the case comes from the clause\u2019s OWN verb (<i>dem ich vertraue</i>); a preposition moves in FRONT of the pronoun (<i>auf die sich der Artikel bezieht</i>); and <b>dessen</b>/<b>deren</b> agree with the noun BEFORE the comma. Relative adverbs (was, wodurch, weshalb) refer to a whole idea.' ], hinglish: 'Chaar baatein yaad rakho. Verb clause ke <b>end</b> mein jaata hai. Case us clause ke <b>apne verb</b> se aata hai \u2014 <span class="de">dem ich vertraue</span>. Preposition pronoun se <b>pehle</b> aata hai \u2014 <span class="de">auf die sich der Artikel bezieht</span>. Aur <b>dessen/deren</b> ka gender comma se <b>pehle</b> wale noun se aata hai.' },
    { title: 'Kapitel 21 — Partizipialattribute verstehen und nutzen (Rückblick)', body: [ '<b>Partizip I</b> = Infinitiv + <b>d</b>, active and ongoing (die wachsende Wirtschaft). <b>Partizip II</b> = completed or passive (die erhobenen Daten). The participle takes a normal adjective ending, and every modifier stands BEFORE it: article \u2192 modifiers \u2192 participle \u2192 noun.' ], hinglish: '<b>Partizip I</b> banta hai Infinitiv + <b>d</b> se, aur batata hai ki kaam ho raha hai (<span class="de">die wachsende Wirtschaft</span>). <b>Partizip II</b> batata hai ki kaam ho chuka hai (<span class="de">die erhobenen Daten</span>). Do cheezein check karo \u2014 participle par adjective ki ending hai, aur uske saare modifiers uske <b>aage</b> hain.' },
    { title: 'Kapitel 22 — Komplexe Attribute & Nominalgruppen (Rückblick)', body: [ 'Each attribute takes its case from a different source: adjective and participle from the noun, genitive always Genitiv (plus <b>-s</b> on masc./neut.), prepositional from its preposition, and apposition copies the case of the noun it explains. The classifying adjective sits closest to the noun.' ], hinglish: 'Har attribute apna case alag jagah se leta hai \u2014 adjective aur participle noun se, Genitiv hamesha Genitiv (aur masculine/neuter par <b>-s</b>), prepositional apne preposition se, aur apposition us noun ka case <b>copy</b> karti hai. Aur jo adjective noun ko classify karta hai woh noun ke sabse paas baithta hai.' },
    { title: 'Goethe-Bereitschaftsskala (Readiness Scale)', body: [ 'Excellent → Very Good → Good → Needs Revision → Repeat Chapters. Use this scale honestly to plan your next study session.' ], hinglish: 'Apne score ko imaandaari se dekho \u2014 yeh scale batata hai ki aage badhna hai ya kisi chapter par wapas jaana hai.' },
    { title: 'Erinnerung (Memory Reminder)', body: [ 'Goethe Mini 3 verifies whether the learner can automatically produce authentic C1 sentence architecture before entering the final phase of the course. The focus is fluency and information density, not isolated grammar knowledge.' ], note: 'If you find yourself stopping to recall a specific rule from Chapters 18-22, that chapter needs another revision pass before moving forward.', hinglish: 'Yeh checkpoint dekhta hai ki C1 wali sentence architecture ab apne aap ban rahi hai ya nahi. Agar kisi ending ya case ke liye rukna pad raha hai, to us chapter par ek baar aur jaao \u2014 aage ke chapters inhi par tike hain.' }
  ],
  reading: {
    title: 'Fachzeitschrift: Neue Erkenntnisse zur Legasthenie-Früherkennung',
    titleEn: 'Reading A — Journal: new findings on early dyslexia detection',
    tokens: [
      { w: 'Die', role: 'r-nominalgruppe', en: 'the (plural nom., complex nominal group opener)', hi: '', type: 'Article' },
      { w: 'im', role: 'r-nominalgruppe', en: 'in the (Kontraktion)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'letzten', role: 'r-nominalgruppe', en: 'last (part of nominal group)', hi: '', type: 'Adjective · Dat.' },
      { w: 'Jahr', role: 'r-nominalgruppe', en: 'year (part of nominal group)', hi: '', type: 'Noun · neut.' },
      { w: 'durchgeführten', role: 'r-nominalgruppe', en: 'conducted (participial attribute)', hi: 'की गई', type: 'Partizip II · Nom.' },
      { w: 'Untersuchungen', role: 'plain', en: 'investigations (Satzende)', hi: 'जाँच (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein (Präsens)' },
      { w: 'erheblich', role: 'r-vergleich', en: 'considerably (strong intensifier)', hi: 'काफ़ी ज़्यादा', type: 'Adverb' },
      { w: 'aussagekräftiger', role: 'plain', en: 'more meaningful (Satzende, Komparativ)', hi: 'ज़्यादा सारगर्भित (Satzende, Komparativ)', type: 'Adjective · Komparativ (Satzende)' },
      { w: 'als', role: 'r-vergleich', en: 'than (comparison marker)', hi: 'की तुलना में', type: 'Konjunktion' },
      { w: 'frühere', role: 'plain', en: 'earlier (Satzende)', hi: 'पहले की (Satzende)', type: 'Adjective · Nom. (Satzende)' },
      { w: 'Studien', role: 'plain', en: 'studies (Satzende, part of comparison)', hi: 'अध्ययन (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Wird', role: 'plain', en: 'is (Satzende)', hi: 'है (Satzende)', type: 'Verb · werden (Passiv, Frage)' },
      { w: 'Legasthenie', role: 'plain', en: 'dyslexia', hi: 'डिस्लेक्सिया', type: 'Noun · fem.' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Vorschulalter', role: 'plain', en: 'preschool age (Satzende)', hi: 'पूर्व-विद्यालय आयु (Satzende)', type: 'Noun · neut.' },
      { w: 'erkannt', role: 'plain', en: 'recognised (Satzende)', hi: 'पहचाना जाता है (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'lässt', role: 'plain', en: 'lets', hi: 'देता है', type: 'Verb · lassen' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'schulische', role: 'plain', en: 'school-related', hi: 'शैक्षिक', type: 'Adjective' },
      { w: 'Rückstand', role: 'plain', en: 'setback (Satzende)', hi: 'पिछड़ापन (Satzende)', type: 'Noun · masc.' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'verringern', role: 'plain', en: 'reduce (Satzende)', hi: 'कम करना (Satzende)', type: 'Verb · Infinitiv (Passiversatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The investigations conducted last year are considerably more meaningful than earlier studies. If dyslexia is recognised already at preschool age, the resulting setback at school can often be noticeably reduced.',
    comprehension: [
      { q: 'Was ersetzt "die im letzten Jahr durchgeführten"?', options: ['Einen Relativsatz', 'Einen Hauptsatz', 'Eine Frage'], answer: 0 },
      { q: 'Welche Funktion hat "erheblich...als"?', options: ['Vergleich mit starker Steigerung', 'Zeitangabe', 'Bedingung'], answer: 0 },
      { q: 'Welche Deklination hat "aussagekräftiger" hier (Prädikativ)?', options: ['Prädikativ, keine Deklination nötig', 'Schwach', 'Stark'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsreportage (Revision)', titleEn: 'Reading B — Newspaper feature article',
    tokens: [
      { w: 'Die', role: 'r-genitivattribut', en: 'the (plural nom., part of genitive attribute, Ch.22)', hi: '(genitive attribute ka hissa, Ch.22)', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'parinaam', type: 'Noun · plural' },
      { w: 'der', role: 'r-genitivattribut', en: 'of the (fem. gen., genitive attribute, Ch.22)', hi: '(genitive attribute, Ch.22)', type: 'Article · Gen.' },
      { w: 'Untersuchung', role: 'r-genitivattribut', en: 'investigation (Satzende, genitive attribute)', hi: 'jaanch ke (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-relativ', en: 'which (relative pronoun, Ch.20)', hi: 'jo (Ch.20)', type: 'Relativpronomen · Nom.' },
      { w: 'international', role: 'plain', en: 'internationally', hi: 'antarrashtriya star par', type: 'Adverb' },
      { w: 'kritisiert', role: 'plain', en: 'criticized (part of Passiv)', hi: '(Passiv ka hissa)', type: 'Partizip II' },
      { w: 'wurde', role: 'plain', en: 'was (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Satzende)' },
      { w: ',', plain: true },
      { w: 'waren', role: 'plain', en: 'were', hi: 'the', type: 'Verb · sein (Präteritum)' },
      { w: 'weitgehend', role: 'r-abschwaechung', en: 'largely (downtoner, Ch.19)', hi: 'kaafi hadd tak (downtoner, Ch.19)', type: 'Adverb' },
      { w: 'zuverlässig', role: 'plain', en: 'reliable (Satzende)', hi: 'vishwasneey (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The results of the investigation, which was criticized internationally, were largely reliable.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_023_L001', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, dein überarbeiteter Absatz liest sich jetzt richtig dicht und präzise.', en: 'Timo, your revised paragraph now reads really dense and precise.' },
      { id: 'C1_023_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Danke, ich habe versucht, die Nominalgruppen konsequent zu verdichten.', en: 'Thanks, I tried to consistently condense the noun groups.' },
      { id: 'C1_023_L003', speaker: 'Nadine', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Man merkt es — der Vergleich am Ende wirkt jetzt viel überzeugender.', en: 'You can tell — the comparison at the end now seems much more convincing.' },
      { id: 'C1_023_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, dann können wir den Artikel morgen einreichen.', en: 'Good, then we can submit the article tomorrow.' }
    ],
    transcript: 'Timo, dein überarbeiteter Absatz liest sich jetzt richtig dicht und präzise. Danke, ich habe versucht, die Nominalgruppen konsequent zu verdichten. Man merkt es — der Vergleich am Ende wirkt jetzt viel überzeugender. Gut, dann können wir den Artikel morgen einreichen.',
    translation: 'Timo, your revised paragraph now reads really dense and precise. Thanks, I tried to consistently condense the noun groups. You can tell — the comparison at the end now seems much more convincing. Good, then we can submit the article tomorrow.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'dein' },
      { w: 'überarbeiteter' },
      { w: 'Absatz' },
      { w: 'liest' },
      { w: 'sich' },
      { w: 'jetzt' },
      { w: 'richtig' },
      { w: 'dicht' },
      { w: 'und' },
      { w: 'präzise' },
      { w: '.', plain: true },
      { w: 'Danke' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'versucht' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Nominalgruppen' },
      { w: 'konsequent' },
      { w: 'zu' },
      { w: 'verdichten' },
      { w: '.', plain: true },
      { w: 'Man' },
      { w: 'merkt' },
      { w: 'es' },
      { w: '—', plain: true },
      { w: 'der' },
      { w: 'Vergleich' },
      { w: 'am' },
      { w: 'Ende' },
      { w: 'wirkt' },
      { w: 'jetzt' },
      { w: 'viel' },
      { w: 'überzeugender' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'können' },
      { w: 'wir' },
      { w: 'den' },
      { w: 'Artikel' },
      { w: 'morgen' },
      { w: 'einreichen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hat Timo durchgängig versucht?', qEn: 'What did Timo try to do consistently?', options: ['die Sätze verlängern', 'die Nominalgruppen verdichten', 'mehr Beispiele hinzufügen', 'das Thema wechseln'], optionsEn: ['lengthen the sentences', 'condense the noun phrases', 'add more examples', 'change the subject'], answer: 1,
        explain: '"Ich habe versucht, die Nominalgruppen konsequent zu verdichten."' },
      { q: 'Was planen sie für morgen?', qEn: 'What do they plan to do tomorrow?', options: ['den Artikel einreichen', 'das Thema ändern', 'die Konferenz absagen', 'neu anfangen'], optionsEn: ['submit the article', 'change the topic', 'cancel the conference', 'start again'], answer: 0,
        explain: '"Dann können wir den Artikel morgen einreichen."' }
    ]
  },
  speaking: [
    { task: "Timo lobt deinen überarbeiteten Absatz. Erklär, was du gemacht hast.", taskEn: "Timo praises your revised paragraph. Explain what you did.", de: "Danke, ich habe versucht, die Nominalgruppen konsequent zu verdichten.", en: "Thanks, I tried to compress the noun phrases consistently." },
    { task: "Prüfung, Teil 1: Stell eine Studie in verdichteter Sprache vor.", taskEn: "Exam, Part 1: present a study in compressed language.", de: "Die 2024 abgeschlossene Untersuchung liefert deutlich präzisere Ergebnisse.", en: "The study completed in 2024 delivers considerably more precise results." },
    { task: "Prüfung, Teil 2: Diskutiere, was einen Text überzeugend macht.", taskEn: "Exam, Part 2: discuss what makes a text convincing.", de: "Präzision überzeugt mehr als Länge; eleganter wirkt ein kurzer, dichter Satz.", en: "Precision convinces more than length; a short, dense sentence works more elegantly." },
    { task: "Prüfung, Teil 3: Verbessert gemeinsam einen Absatz.", taskEn: "Exam, Part 3: improve a paragraph together.", de: "Wir ersetzen den Relativsatz durch ein Partizipialattribut und verdichten den Rest.", en: "We'll replace the relative clause with a participial attribute and compress the rest." },
    { task: "Deine Partnerin fragt, was du an ihrem Text loben würdest.", taskEn: "Your partner asks what you'd praise in her text.", de: "Ich lobe die Präzision im dritten Absatz; er ist deutlich eleganter geworden.", en: "I'd praise the precision in the third paragraph; it's become far more elegant." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150-200 words): Improve a B2-level text into authentic C1 German by upgrading adjective phrases, relative clauses, participial attributes, nominal style, and comparison language — recycling ONLY Chapters 18-22.\n\nTASK 2 — Academic article (350-400 words): Demonstrate sophisticated adjective declension, advanced comparison, varied relative clauses, participial attributes, complex nominal groups, and authentic scientific style.',
    starters: ['Die im letzten Jahr durchgeführten Untersuchungen sind erheblich aussagekräftiger als frühere Studien.', 'Die auf jahrelanger Forschung basierende Methode hat sich als zuverlässig erwiesen.'],
    placeholder: 'Die neue Version des Artikels ist deutlich überzeugender. Die letztes Jahr veröffentlichte Studie...',
    minWords: 200
  },
  exercises: {
    mcq: { q: 'Which declension applies in "mehrere international anerkannte Forscher" (Chapter 18 review)?', options: ['Strong (no article)', 'Weak (definite article)', 'Mixed (indefinite article)'], answer: 0, explain: 'With no article, "mehrere" and its chained adjectives take strong declension — reviewed from Chapter 18.' },
    gap: { sentence: ['Die letztes Jahr ', ' Studie klingt eleganter.'], gaps: [ { answer: 'veröffentlichte', accepts: ['veröffentlichte'] } ], explain: '"Veröffentlichte" folds a relative clause into a Partizip II attribute — reviewed from Chapter 21.' },
    match: { q: 'Match each expression to the chapter it comes from.', pairs: [ { noun: 'schwach / gemischt / stark', art: 'Kapitel 18' }, { noun: 'deutlich...als / erheblich...als', art: 'Kapitel 19' }, { noun: 'dessen / deren / weshalb', art: 'Kapitel 20' }, { noun: 'die veröffentlichte Studie', art: 'Kapitel 21' } ] },
    builder: { target: 'Build: "The new version is noticeably more convincing." (Ch.18-19 review)', bank: ['Die', 'neue', 'Version', 'ist', 'deutlich', 'überzeugender', '.'], answer: ['Die', 'neue', 'Version', 'ist', 'deutlich', 'überzeugender', '.'], roles: { 'neue': 'r-schwach', 'deutlich': 'r-vergleich' } },
    errorCorrection: { title: 'Error correction (mixed review)', wrong: 'Die Studie veröffentlichte letztes Jahr ist relevant.', right: 'Die letztes Jahr veröffentlichte Studie ist relevant.', explain: 'Reviewing Chapter 21: the participial attribute must precede the noun with correct declension, not follow it like a separate verb phrase.' }
  },
  quiz: [
    { q: 'Which chapter covers weak/mixed/strong adjective declension logic?', options: ['Chapter 18', 'Chapter 20', 'Chapter 22'], answer: 0, explain: 'Chapter 18 (Adjektivdeklination sicher anwenden) covers this logic.' },
    { q: 'Which chapter covers intensifiers and downtoners?', options: ['Chapter 19', 'Chapter 21', 'Chapter 18'], answer: 0, explain: 'Chapter 19 (Steigerung & sprachliche Abstufung) covers gradation and nuance.' },
    { q: 'Which chapter covers genitive relative clauses (dessen/deren) and relative adverbs?', options: ['Chapter 20', 'Chapter 19', 'Chapter 22'], answer: 0, explain: 'Chapter 20 (Relativsätze erweitern und variieren) covers this.' },
    { q: 'Which chapter covers Partizip I vs Partizip II attributes?', options: ['Chapter 21', 'Chapter 18', 'Chapter 20'], answer: 0, explain: 'Chapter 21 (Partizipialattribute verstehen und nutzen) covers this distinction.' },
    { q: 'What does this Goethe Mini checkpoint measure?', options: ['Whether Chapters 18-22 have become automatic', 'New C1 grammar not yet taught', 'Only vocabulary memorization'], answer: 0, explain: 'A Goethe Mini chapter verifies automatic, fluent use of prior chapters, focusing on information density and sentence architecture.' }
  ],
  takeaways: [
    { c: 'r-schwach', html: 'This checkpoint introduces zero new grammar — it recycles Chapters 18-22: adjective declension logic, comparison/gradation, relative clause variation, participial attributes, and complex nominal groups.' },
    { c: 'r-partizip2-attribut', html: 'Real C1 fluency means combining several of these skills naturally in one sentence — correct declension, precise comparison, and compressed nominal style together.' },
    { c: 'r-nominalgruppe', html: 'Use your Goethe Readiness Scale result honestly: Excellent/Very Good → move on; Good/Needs Revision → repeat the weakest chapter before continuing.' }
  ],
  revisionTips: [
    'Identify your single weakest chapter from this Mini Test and re-read only that chapter\'s Grammar section before continuing.',
    'Write one paragraph that deliberately combines correct adjective declension (Ch.18), a comparison structure (Ch.19), and one participial attribute (Ch.21).',
    'Create flashcards mixing relative clause alternatives (Ch.20) with complex nominal groups (Ch.22) to test which structure fits which register.'
  ]
};
window.CHAPTER = CHAPTER;
