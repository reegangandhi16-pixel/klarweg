/* KLARWEG CHAPTER DATA — C1 · Chapter 26
   "Passiv & Passiversatzformen" — passive as a STYLISTIC choice
   (spotlight-shifting), not formation mechanics: when to use
   Vorgangspassiv/Zustandspassiv vs sich lassen, sein+zu+Infinitiv,
   man, adjective constructions, and nominal style. NOT basic
   passive/tense/participle formation (already mastered).
   Dialogue: Karla and Timo ONLY. */
const CHAPTER = {
  id: 'c1-26-passiv-und-passiversatzformen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 26,
  title: 'Passiv & Passiversatzformen',
  titleEn: 'Passive and passive alternatives',
  description: 'Active: someone performs the action. Passive: the action becomes the star. Passiversatzformen achieve the same effect without the passive at all. The question is never "can I form it?" but "which structure sounds most natural?"',
  xp: 710, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 27, title: 'Funktionsverbgefüge im akademischen Deutsch', titleEn: 'Light verb constructions in academic German' , href: 'chapter-c1-27-funktionsverbgefuege-im-akademischen-deutsch.html' },
  prevChapter: { number: 25, title: 'Partizipien & Adjektive als Nomen', titleEn: 'Participles and adjectives as nouns', href: 'chapter-c1-25-partizipien-und-adjektive-als-nomen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Passive is <em>moving the spotlight</em> — sometimes without using it at all.',
    intro: 'Editing a scientific article, Karla and Timo decide sentence by sentence whether the passive, or a more natural alternative, best fits — the data being evaluated now, the protocol everyone must follow.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Vorgangspassiv, Zustandspassiv, and Passiversatzformen chosen deliberately for style, not by default'],
    scene: 'Überarbeitung eines wissenschaftlichen Artikels',
    femaleSpeakers: ['Karla'],
    dialogue: [
      { speaker: 'Karla', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Daten', role: 'r-subject', en: 'data', hi: 'डेटा', pron: 'DAH-ten', type: 'Noun · plural' },
        { w: 'werden', role: 'r-verb', en: 'are', hi: 'किए जा रहे हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv Präsens, recycled B1)' },
        { w: 'gerade', role: 'r-akkusativ', en: 'right now', hi: 'अभी', pron: 'ge-RAH-duh', type: 'Adverb' },
        { w: 'ausgewertet', role: 'r-verb', en: 'evaluated', hi: 'विश्लेषित', pron: 'OWS-ge-vair-tet', type: 'Partizip II · Satzende', why: 'auswerten = to evaluate/analyze (this chapter).', ex: 'Die Daten werden ausgewertet.', exEn: 'The data is being evaluated.' },
        { w: '.', plain: true }
      ], en: 'The data is being evaluated right now.', hi: 'Data ka abhi vishleshan kiya ja raha hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · sich lassen', why: 'sich lassen + Infinitiv = Passiversatz, "can be done" (recycled C1).', ex: 'Das Ergebnis lässt sich schnell auswerten.', exEn: 'The result can be quickly evaluated.' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Ergebnis', role: 'r-subject', en: 'result', hi: 'परिणाम', pron: 'er-GAYP-nis', type: 'Noun · neut.' },
        { w: 'schnell', role: 'r-akkusativ', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: 'auswerten', role: 'r-verb', en: 'evaluate', hi: 'विश्लेषण करना', pron: 'OWS-ge-vair-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Can the result be quickly evaluated?', hi: 'Kya parinaam ka jaldi vishleshan kiya ja sakta hai?' },
      { speaker: 'Karla', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Prozess', role: 'r-akkusativ', en: 'process', hi: 'प्रक्रिया', pron: 'pro-TSES', type: 'Noun · masc.' },
        { w: 'genau', role: 'r-akkusativ', en: 'precisely', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: 'dokumentieren', role: 'r-verb', en: 'document', hi: 'दर्ज करना', pron: 'do-ku-men-TEE-ren', type: 'Verb · infinitive (Satzende)', why: 'dokumentieren = to document (this chapter).', ex: 'den Prozess dokumentieren' },
        { w: '.', plain: true }
      ], en: 'Yes, but we must precisely document the process.', hi: 'Haan, lekin humein prakriya ko theek se darj karna hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Protokoll', role: 'r-subject', en: 'protocol', hi: 'प्रोटोकॉल', pron: 'pro-to-KOL', type: 'Noun · neut.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'A-luh', type: 'Determiner' },
        { w: 'nachvollziehbar', role: 'r-akkusativ', en: 'comprehensible', hi: 'समझने योग्य', pron: 'nahkh-FOL-tsee-bahr', type: 'Adjective', why: 'nachvollziehbar = comprehensible/traceable (this chapter).', ex: 'Das Protokoll ist nachvollziehbar.', exEn: 'The protocol is comprehensible.' },
        { w: '?', plain: true }
      ], en: 'Is the protocol comprehensible for everyone?', hi: 'Kya protocol sabke liye samajhne yogya hai?' },
      { speaker: 'Karla', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'nur', role: 'r-akkusativ', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Vorgaben', role: 'r-akkusativ', en: 'guidelines', hi: 'दिशानिर्देश', pron: 'FOR-gah-ben', type: 'Noun · plural', why: 'die Vorgabe (recycled B2/C1).', ex: 'die Vorgaben einhalten' },
        { w: 'einhalten', role: 'r-verb', en: 'follow', hi: 'मानना', pron: 'INE-hal-ten', type: 'Verb · infinitive (Satzende)', why: 'einhalten = to comply with/follow (this chapter).', ex: 'die Vorgaben einhalten' },
        { w: '.', plain: true }
      ], en: 'Yes. We must only follow the guidelines.', hi: 'Haan. Humein sirf dishaanirdesh maanne honge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकते हैं', pron: 'kan', type: 'Modal · können (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Bericht', role: 'r-akkusativ', en: 'report', hi: 'रिपोर्ट', pron: 'be-RIKHT', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'abschließen', role: 'r-verb', en: 'conclude', hi: 'पूरा करना', pron: 'AP-shlee-sen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good. Then we can conclude the report tomorrow.', hi: 'Achha. Toh hum kal report poori kar sakte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Active: someone performs the action. Passive: <b>the action becomes the star</b>. <span class="de r-passiversatz">Passiversatzformen</span> achieve the same effect without the passive at all. Never ask "can I form it?" — ask "what sounds most natural?"' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is PASSIV & PASSIVERSATZFORMEN at C1 level — passive as a STYLISTIC choice and its natural alternatives, NOT basic passive/tense/participle formation (already mastered). Covered: Vorgangspassiv (process focus: Die Daten wurden ausgewertet) vs Zustandspassiv (resulting state: Die Ergebnisse sind dokumentiert); Passiversatzformen — sich lassen (Das Problem lässt sich lösen), sein + zu + Infinitiv (Die Aufgabe ist leicht zu lösen, common in administrative German: Der Antrag ist einzureichen), sich + Verb (Die Tür öffnet sich leicht), man (Man erkennt deutlich...), adjective constructions (Die Ergebnisse sind nachvollziehbar); the stylistic principle that at C1 the actor is intentionally omitted for objectivity, and native speakers actively choose between passive, its alternatives, and active voice based on register and readability, not by default; academic/scientific writing balancing passive with nominal style; avoiding over-use of passive that creates awkward bureaucratic sentences. Do NOT expect or require basic passive formation, tense formation, or participle formation — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: overusing passive where active voice or a Passiversatzform would sound more natural; direct English passive translation that sounds unnatural in German; confusing Zustandspassiv (state) with a simple predicate adjective; missing opportunities to use elegant Passiversatzformen (sich lassen, sein+zu+Infinitiv, man) instead of a plain passive; creating unreadable, overly bureaucratic sentences through excessive passive use. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag unnecessary or repetitive passive use where a Passiversatzform or active voice would be more natural; check Vorgangspassiv vs Zustandspassiv is used correctly for process vs state meaning; check Passiversatzformen (sich lassen, sein+zu+Infinitiv, man) are formed correctly when used. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Naturalness check:</b> one sentence on whether the learner\'s passive/active/Passiversatzform choices sounded natural and avoided unnecessary bureaucratic density.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you choose between passive, active, and Passiversatzformen deliberately, like a native writer. Ready for the next chapter.', mid: 'Good. Re-read the Decision Model and Information Focus Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: the question is never "can I form the passive?" but "what sounds most natural here?"' },
  parserSentence: [ { w: 'Das', role: 'plain' }, { w: 'Problem', role: 'plain' }, { w: 'lässt', role: 'r-passiversatz' }, { w: 'sich', role: 'r-passiversatz' }, { w: 'lösen', role: 'r-passiversatz' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: choosing whether to use the passive is a stylistic decision, not a grammar exercise.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Karla and Timo edit a scientific article, deliberately choosing between passive and its alternatives.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master Vorgangspassiv vs Zustandspassiv and the major Passiversatzformen (sich lassen, sein+zu, man, adjectives).' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific journal article and a government guideline, identifying passive and its alternatives.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify passive and passive alternatives in a university lecture and company presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present research and give instructions, choosing naturally between passive and active constructions.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace unnecessary passive with natural alternatives, and write a 350-word academic report balancing all forms.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill passive vs active, Vorgangspassiv vs Zustandspassiv, and Passiversatzformen selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 710 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Passive-vs-active drills, Passiversatzformen selection, and a full academic report writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Decision Model, Information Focus Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Daten wurden ausgewertet.', text: 'Recognize Vorgangspassiv, focused on the ongoing process' },
    { de: 'Das Problem lässt sich lösen.', text: 'Use "sich lassen" as an elegant Passiversatzform for possibility' },
    { de: 'Die Ergebnisse sind dokumentiert.', text: 'Use Zustandspassiv for a resulting state, not a process' },
    { de: 'Man erkennt deutlich...', text: 'Use "man" as a natural Passiversatzform for a general agent' },
    { de: 'Die Frist ist unbedingt einzuhalten.', text: 'Use "sein + zu + Infinitiv" for administrative obligation' }
  ],
  vocab: [
    { de: 'auswerten', pos: 'verb', level: 'C1', register: 'written', en: 'to evaluate, analyze', hi: 'मूल्यांकन करना', ex: 'Die Daten wurden sorgfältig ausgewertet.', exEn: 'The data were carefully evaluated.', exHi: 'Data ka saavdhaani se mulyaankan kiya gaya.', ex2: 'Die Ergebnisse werden nächste Woche ausgewertet.', ex2En: 'The results will be evaluated next week.', ex2Hi: 'Parinaamon ka mulyaankan agle hafte kiya jaayega.', conj: { praesens: 'wertet aus', praeteritum: 'wertete aus', perfekt: 'hat ausgewertet' } },
    { de: 'sich lassen', pos: 'verb (fixed reflexive Passiversatzform)', level: 'C1', register: 'both', en: 'can be (done)', hi: 'किया जा सकना', ex: 'Das Problem lässt sich lösen.', exEn: 'The problem can be solved.', exHi: 'Samasya suljhaayi jaa sakti hai.', ex2: 'Diese Frage lässt sich nicht einfach beantworten.', ex2En: 'This question cannot be easily answered.', ex2Hi: 'Iss sawaal ka jawaab aasaani se nahi diya jaa sakta.', conj: { praesens: 'lässt sich', praeteritum: 'ließ sich', perfekt: 'hat sich lassen' } },
    { de: 'einhalten', pos: 'verb', level: 'C1', register: 'written', en: 'to keep, observe (a deadline/rule)', hi: 'पालन करना', ex: 'Die Frist ist unbedingt einzuhalten.', exEn: 'The deadline is absolutely to be kept.', exHi: 'Samayseema ka zaroor paalan karna chahiye.', ex2: 'Alle Richtlinien müssen eingehalten werden.', ex2En: 'All guidelines must be observed.', ex2Hi: 'Sabhi dishaanirdeshon ka paalan hona chahiye.', conj: { praesens: 'hält ein', praeteritum: 'hielt ein', perfekt: 'hat eingehalten' } },
    { de: 'nachvollziehbar', pos: 'adjective', level: 'C1', register: 'written', en: 'comprehensible, understandable', hi: 'समझने योग्य', ex: 'Die Ergebnisse sind gut nachvollziehbar.', exEn: 'The results are well comprehensible.', exHi: 'Parinaam achhe se samajhne yogya hain.', ex2: 'Seine Entscheidung war völlig nachvollziehbar.', ex2En: 'His decision was completely understandable.', ex2Hi: 'Uska faisla bilkul samajh mein aane laayak tha.' },
    { de: 'dokumentieren', pos: 'verb', level: 'C1', register: 'written', en: 'to document', hi: 'दस्तावेज़ करना', ex: 'Die Ergebnisse sind vollständig dokumentiert.', exEn: 'The results are completely documented.', exHi: 'Parinaam poori tarah documented hain.', ex2: 'Alle Schritte wurden sorgfältig dokumentiert.', ex2En: 'All steps were carefully documented.', ex2Hi: 'Sabhi steps ko saavdhaani se document kiya gaya.', conj: { praesens: 'dokumentiert', praeteritum: 'dokumentierte', perfekt: 'hat dokumentiert' } }
  ],
  grammar: [
    { title: 'Warum Passiv existiert', body: [ 'Actor → Action → Result → Focus on Process → Objectivity → Formal German. Passive shifts attention away from the actor toward the process or result.' ], hinglish: 'Passive ka kaam hai spotlight hatana \u2014 karne wale se hatakar kaam par. Isliye formal aur academic writing mein yeh itna aata hai: wahan yeh batana zaroori nahi hota ki kisne kiya, balki yeh ki kya hua.' },
    { title: 'Das Passiv wählen (Choosing the Passive)', body: [ 'Die Daten wurden ausgewertet. / Der Bericht wurde veröffentlicht. / Die Studie wurde durchgeführt. The actor is intentionally omitted because it is unknown, irrelevant, or obvious from context.' ], hinglish: 'Teeno mein karne wala gayab hai, aur jaan-boojhkar \u2014 kyunki ya to pata nahi, ya matlab hi nahi rakhta. Agar batana ho to <b>von</b> + Dativ lagta hai: <span class="de">von den Forschern ausgewertet</span>. Par academic writing mein aksar use chhod dete hain.' },
    { title: 'Zustandspassiv (Review)', body: [ 'Die Tür ist geschlossen. / Die Ergebnisse sind dokumentiert. / Die Daten sind gespeichert. Zustandspassiv describes the resulting STATE, not the ongoing process — contrast with Vorgangspassiv ("wird/wurde + Partizip II").' ], hinglish: 'Yahan farak dekhna zaroori hai. <span class="de">Die T\u00fcr wird geschlossen</span> matlab darwaza band <b>kiya jaa raha hai</b> \u2014 kaam ho raha hai. Aur <span class="de">Die T\u00fcr ist geschlossen</span> matlab darwaza <b>band hai</b> \u2014 kaam ho chuka, ab haalat batayi jaa rahi hai. <b>wird</b> se process, <b>ist</b> se state.' },
    { title: 'Passiversatzformen (Passive Alternatives)', body: [ 'sich lassen (Das Problem lässt sich lösen — possibility) / sein + zu + Infinitiv (Die Aufgabe ist leicht zu lösen — obligation/possibility) / sich + Verb (Die Tür öffnet sich leicht) / man (Man erkennt deutlich...) / adjective constructions (Die Ergebnisse sind nachvollziehbar). Each offers a more natural, elegant alternative to the plain passive.' ], hinglish: 'Yeh sab passive ka kaam karte hain, par har ek ka apna matlab hai. <b>sich lassen</b> batata hai ki kuch <b>ho sakta hai</b> (<span class="de">Das Problem l\u00e4sst sich l\u00f6sen</span>). <b>sein + zu + Infinitiv</b> batata hai ki kuch <b>karna hai</b> \u2014 yeh official writing mein bahut aata hai. Aur <b>man</b> tab jab koi bhi kar sakta ho. Inhe aapas mein badla nahi jaa sakta.' },
    { title: 'Wissenschaftliche Verdichtung (Scientific Compression)', body: [ 'Die Daten wurden erhoben. → Die erhobenen Daten... → Die Datenerhebung... Each step increases information density, moving from passive to participial attribute to full nominalization.' ], hinglish: 'Yeh teen step Chapter 21 aur 24 se jodte hain. Passive se participial attribute (<span class="de">die erhobenen Daten</span>), aur usse poori nominalization (<span class="de">die Datenerhebung</span>). Har step mein text zyada compact hota hai \u2014 par padhne mein bhaari bhi, isliye har jagah aakhri step tak mat jao.' },
    { title: 'Verwaltungssprache (Administrative German)', body: [ 'Der Antrag ist einzureichen. / Die Unterlagen sind vorzulegen. / Die Frist ist einzuhalten. "Sein + zu + Infinitiv" is the standard administrative Passiversatzform for stating obligations formally.' ], hinglish: 'Official German mein zimmedaari batane ka yahi standard tareeka hai \u2014 <span class="de">Der Antrag ist einzureichen</span> matlab application jama karni hi hogi. Dhyaan do ki teeno mein verb separable hai, isliye <b>zu</b> word ke andar chala gaya: <b>ein<b>zu</b>reichen</b>, <b>vor<b>zu</b>legen</b>, <b>ein<b>zu</b>halten</b>.' },
    {
      title: 'Die Formen im \u00dcberblick',
      body: [
        'The chapter names six structures but never sets out how each is built. Here they are side by side \u2014 and the errors above are almost all about mixing two of them.',
        'Note that each Passiversatzform carries a specific meaning: possibility, obligation, or a general agent. They are not interchangeable.'
      ],
      table: {
        head: ['Structure', 'Form', 'Meaning'],
        rows: [
          ['Vorgangspassiv', 'werden + Partizip II', '<span class="de">Die Daten werden ausgewertet.</span> \u2014 process'],
          ['Vorgangspassiv Perfekt', 'sein + Partizip II + <b>worden</b>', '<span class="de">Die Daten sind ausgewertet worden.</span>'],
          ['Zustandspassiv', 'sein + Partizip II', '<span class="de">Die Daten sind gespeichert.</span> \u2014 resulting state'],
          ['sich lassen', 'l\u00e4sst sich + <b>Infinitiv</b>', '<span class="de">Das Problem l\u00e4sst sich l\u00f6sen.</span> \u2014 possibility'],
          ['sein + zu + Infinitiv', 'ist + <b>zu</b> + Infinitiv', '<span class="de">Der Antrag ist einzureichen.</span> \u2014 obligation'],
          ['man', 'man + active verb', '<span class="de">Man l\u00f6st das Problem.</span> \u2014 general agent']
        ]
      },
      note: 'The one form to watch is <b>worden</b> versus <b>geworden</b>: the passive always takes <b>worden</b>. <i>geworden</i> belongs to <i>werden</i> in its own meaning \u201cto become\u201d.',
      hinglish: 'Chapter chhe structures ka naam leta hai par yeh nahi batata ki har ek banti kaise hai \u2014 isliye yeh table dekho. Upar wali lagbhag saari galtiyan do structures ko mila dene se hoti hain. Do cheezein khaas hain. Pehli, <b>sich lassen</b> ke baad plain infinitive aata hai (<span class="de">l\u00e4sst sich l\u00f6sen</span>), aur <b>sein + zu</b> mein <b>zu</b> zaroori hai \u2014 separable verb ho to woh andar chala jaata hai (<span class="de">einzureichen</span>). Doosri, passive ke Perfekt mein hamesha <b>worden</b> aata hai, <i>geworden</i> kabhi nahi \u2014 <i>geworden</i> to <i>werden</i> ka apna matlab hai, \u201cbanna\u201d.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to typical function.' ], table: { head: ['Structure', 'Typical Function'], rows: [ ['Vorgangspassiv', 'Process'], ['Zustandspassiv', 'State'], ['sich lassen', 'Possibility'], ['sein + zu + Infinitiv', 'Obligation/Possibility'], ['man', 'General Agent'], ['Nominal Style', 'Maximum Objectivity'] ] }, hinglish: 'Structure aur function ka table \u2014 pehle tay karo ki tumhe process batana hai, state batana hai, sambhavna batani hai ya zimmedaari, phir usi hisaab se form chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Every one of these combines two structures that each already do the job \u2014 two tenses, two passives, or a passive substitute plus a passive. Pick one and the sentence works.' ], mistakes: [
      { wrong: 'Die Daten sind ausgewertet worden sein.', right: 'Die Daten sind ausgewertet worden.', why: 'The Perfekt of the Vorgangspassiv ends in <b>worden</b> \u2014 nothing follows it, and it is never <i>geworden</i>.' },
      { wrong: 'Das Problem l\u00e4sst sich gel\u00f6st werden.', right: 'Das Problem l\u00e4sst sich l\u00f6sen.', why: '<b>sich lassen</b> already carries the passive meaning, so it takes a plain infinitive \u2014 never a passive after it.' },
      { wrong: 'Der Antrag ist einreichen.', right: 'Der Antrag ist einzureichen.', why: 'In <b>sein + zu + Infinitiv</b> the <b>zu</b> is compulsory \u2014 and with a separable verb it goes inside the word: <i>ein<b>zu</b>reichen</i>.' },
      { wrong: 'Die Ergebnisse wurden von den Forschern ausgewertet worden.', right: 'Die Ergebnisse wurden von den Forschern ausgewertet.', why: 'Choose one tense: <i>wurden \u2026 ausgewertet</i> (Pr\u00e4teritum) or <i>sind \u2026 ausgewertet worden</i> (Perfekt). They cannot be combined.' },
      { wrong: 'Die T\u00fcr wird geschlossen \u2014 seit gestern.', right: 'Die T\u00fcr ist geschlossen \u2014 seit gestern.', why: 'A lasting state takes the Zustandspassiv (<b>ist</b> geschlossen). <i>wird geschlossen</i> describes the act of closing, which cannot last since yesterday.' },
      { wrong: 'Man wird das Problem gel\u00f6st.', right: 'Man l\u00f6st das Problem. / Das Problem wird gel\u00f6st.', why: '<b>man</b> is already an active substitute for the passive \u2014 combining it with a passive form gives the sentence two subjects\u2019 worth of grammar.' }
    ], hinglish: 'Chhe ki chhe galtiyan ek hi tarah ki hain \u2014 do structures mila dena, jabki dono apne aap mein poore hain. Ya do tenses, ya do passives, ya passive ke saath uska substitute. Ek chuno, aur sentence theek ho jaayega.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Is the actor important? Active Voice. Is the process important? Vorgangspassiv. Is the resulting state important? Zustandspassiv. Need concise formal language? Passiversatzform. Need maximum objectivity? Nominal Style.' ], note: 'Memory trick: think of passive as moving the spotlight. Active — someone performs the action. Passive — the action becomes the star. Passiversatzformen achieve the same effect without the passive at all.', hinglish: 'Karne wala important hai? Active. Kaam ho raha hai? <b>Vorgangspassiv</b> (wird). Haalat batani hai? <b>Zustandspassiv</b> (ist). Sambhavna? <b>sich lassen</b>. Zimmedaari? <b>sein + zu</b>. Aur likhne ke baad ek baar dekho \u2014 kahin do structures ek saath to nahi lag gaye?' }
  ],
  reading: {
    title: 'Fachjournal: Studie zu Schlafmustern bestätigt frühere Annahmen',
    titleEn: 'Reading A — Journal: study on sleep patterns confirms earlier assumptions',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'erhobenen', role: 'r-nominalstil', en: 'collected (participial attribute, compressed from "die Daten, die erhoben wurden")', hi: 'एकत्रित किए गए (participial attribute)', type: 'Partizip II · Nom.' },
      { w: 'Daten', role: 'plain', en: 'data (Satzende)', hi: 'डेटा (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'über', role: 'plain', en: 'more than', hi: 'से अधिक', type: 'Adverb' },
      { w: 'zweitausend', role: 'plain', en: 'two thousand', hi: 'दो हज़ार', type: 'Number' },
      { w: 'Schlaftagebüchern', role: 'plain', en: 'sleep diaries (Satzende)', hi: 'नींद की डायरियों (Satzende)', type: 'Noun · plural' },
      { w: 'lassen', role: 'r-passiversatz', en: 'let (part of "sich lassen", Passiversatzform)', hi: '', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-passiversatz', en: 'themselves (reflexive, part of "sich lassen")', hi: '', type: 'Reflexivpronomen · Akk.' },
      { w: 'eindeutig', role: 'plain', en: 'clearly', hi: 'स्पष्ट रूप से', type: 'Adverb' },
      { w: 'interpretieren', role: 'r-passiversatz', en: 'interpret (Satzende, "sich lassen" — possibility)', hi: 'व्याख्यायित की जा सकती है (Satzende)', type: 'Verb · Satzende', why: '"Lassen sich interpretieren" is a Passiversatzform meaning "can be interpreted" — more elegant than "können interpretiert werden" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results (Satzende)', hi: 'नतीजे (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sind', role: 'r-zustandspassiv', en: 'are (Zustandspassiv, resulting state)', hi: 'हैं (Zustandspassiv)', type: 'Verb · sein (Präsens)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: 'vollständig', role: 'plain', en: 'completely', hi: 'पूरी तरह', type: 'Adverb' },
      { w: 'ausgewertet', role: 'r-zustandspassiv', en: 'evaluated (Satzende, Zustandspassiv)', hi: 'विश्लेषित (Satzende)', type: 'Partizip II (Satzende)' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'bestätigen', role: 'plain', en: 'confirm', hi: 'पुष्टि करते हैं', type: 'Verb (Präsens)' },
      { w: 'frühere', role: 'plain', en: 'earlier', hi: 'पहले के', type: 'Adjective' },
      { w: 'Annahmen', role: 'plain', en: 'assumptions (Satzende)', hi: 'अनुमानों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zur', role: 'plain', en: 'about the', hi: 'के बारे में', type: 'Contraction · zu der' },
      { w: 'Bedeutung', role: 'plain', en: 'importance (Satzende)', hi: 'महत्व (Satzende)', type: 'Noun · fem.' },
      { w: 'regelmäßiger', role: 'plain', en: 'regular', hi: 'नियमित', type: 'Adjective · Gen.' },
      { w: 'Schlafenszeiten', role: 'plain', en: 'bedtimes (Satzende)', hi: 'सोने के समय (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The data collected from over two thousand sleep diaries can be clearly interpreted. The results are by now completely evaluated and confirm earlier assumptions about the importance of regular bedtimes.',
    comprehension: [
      { q: 'Was für eine Struktur ist "lassen sich...interpretieren"?', options: ['Passiversatzform mit "sich lassen"', 'Vorgangspassiv', 'Zustandspassiv'], answer: 0 },
      { q: 'Was für eine Struktur ist "sind...ausgewertet"?', options: ['Zustandspassiv (Ergebnis)', 'Vorgangspassiv (Prozess)', 'Aktiv'], answer: 0 },
      { q: 'Warum wird hier "sich lassen" statt "können + Passiv" gewählt?', options: ['Stilistisch eleganter', 'Grammatikfehler', 'Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Behördliche Richtlinie', titleEn: 'Reading B — Government guideline',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Antrag', role: 'plain', en: 'application (Satzende)', hi: 'application (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'ist', role: 'r-passiversatz', en: 'is (part of "sein + zu + Infinitiv", administrative Passiversatzform)', hi: '(sein + zu + Infinitiv)', type: 'Verb · sein (Präsens)' },
      { w: 'spätestens', role: 'plain', en: 'at the latest', hi: 'jald se jald', type: 'Adverb' },
      { w: 'bis', role: 'plain', en: 'by', hi: 'tak', type: 'Präposition · Akk.' },
      { w: 'Freitag', role: 'plain', en: 'Friday (Satzende)', hi: 'shukrawaar (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'einzureichen', role: 'r-passiversatz', en: 'to be submitted (Satzende, "sein + zu + Infinitiv" — obligation)', hi: 'jama karna hoga (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true },
      { w: 'Alle', role: 'plain', en: 'all', hi: 'sabhi', type: 'Pronomen · Nom.' },
      { w: 'Unterlagen', role: 'plain', en: 'documents', hi: 'dastaavez', type: 'Noun · plural' },
      { w: 'sind', role: 'r-passiversatz', en: 'are (part of "sein + zu + Infinitiv")', hi: '(sein + zu + Infinitiv)', type: 'Verb · sein (Präsens)' },
      { w: 'vollständig', role: 'plain', en: 'completely', hi: 'poori tarah', type: 'Adverb' },
      { w: 'vorzulegen', role: 'r-passiversatz', en: 'to be presented (Satzende, obligation)', hi: 'prastut karne honge (Satzende)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The application is to be submitted by Friday at the latest. All documents are to be presented in full.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_026_L001', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, im Methodenteil steht: man wertet die Daten aus. Sollten wir das nicht ins Passiv setzen?', en: 'Timo, in the methods section it says: one evaluates the data. Shouldn\'t we put that in the passive?' },
      { id: 'C1_026_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Auf jeden Fall — "die Daten werden derzeit ausgewertet" klingt viel wissenschaftlicher.', en: 'Definitely — "the data is currently being evaluated" sounds much more scientific.' },
      { id: 'C1_026_L003', speaker: 'Karla', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und beim Protokoll, das jeder befolgen muss, ließe sich das auch eleganter als "einzuhalten" formulieren.', en: 'And for the protocol that everyone must follow, that could also be phrased more elegantly as "to be adhered to".' },
      { id: 'C1_026_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, das Protokoll ist einzuhalten klingt tatsächlich passender für den Bericht.', en: 'True, "the protocol is to be adhered to" actually sounds more fitting for the report.' }
    ],
    transcript: 'Timo, im Methodenteil steht: man wertet die Daten aus. Sollten wir das nicht ins Passiv setzen? Auf jeden Fall — "die Daten werden derzeit ausgewertet" klingt viel wissenschaftlicher. Und beim Protokoll, das jeder befolgen muss, ließe sich das auch eleganter als "einzuhalten" formulieren. Stimmt, das Protokoll ist einzuhalten klingt tatsächlich passender für den Bericht.',
    translation: 'Timo, in the methods section it says: one evaluates the data. Shouldn\'t we put that in the passive? Definitely — "the data is currently being evaluated" sounds much more scientific. And for the protocol that everyone must follow, that could also be phrased more elegantly as "to be adhered to". True, "the protocol is to be adhered to" actually sounds more fitting for the report.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'Methodenteil' },
      { w: 'steht' },
      { w: ':', plain: true },
      { w: 'man' },
      { w: 'wertet' },
      { w: 'die' },
      { w: 'Daten' },
      { w: 'aus' },
      { w: '.', plain: true },
      { w: 'Sollten' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'ins' },
      { w: 'Passiv' },
      { w: 'setzen' },
      { w: '?', plain: true },
      { w: 'Auf' },
      { w: 'jeden' },
      { w: 'Fall' },
      { w: '—', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'Daten' },
      { w: 'werden' },
      { w: 'derzeit' },
      { w: 'ausgewertet' },
      { w: '"', plain: true },
      { w: 'klingt' },
      { w: 'viel' },
      { w: 'wissenschaftlicher' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'beim' },
      { w: 'Protokoll' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'jeder' },
      { w: 'befolgen' },
      { w: 'muss' },
      { w: ',', plain: true },
      { w: 'ließe' },
      { w: 'sich' },
      { w: 'das' },
      { w: 'auch' },
      { w: 'eleganter' },
      { w: 'als' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'einzuhalten' },
      { w: '"', plain: true },
      { w: 'formulieren' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'Protokoll' },
      { w: 'ist' },
      { w: 'einzuhalten' },
      { w: 'klingt' },
      { w: 'tatsächlich' },
      { w: 'passender' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Bericht' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was möchte Karla im Methodenteil ändern?', qEn: 'What does Karla want to change in the methods section?', options: ['den Titel', 'man wertet aus → Passiv', 'die Länge', 'das Thema'], optionsEn: ['the title', 'one evaluates → passive', 'the length', 'the topic'], answer: 1,
        explain: '"Sollten wir das nicht ins Passiv setzen?" → "die Daten werden derzeit ausgewertet."' },
      { q: 'Wie formulieren sie den Satz zum Protokoll um?', qEn: 'How do they rephrase the protocol sentence?', options: ['man muss es befolgen', 'das Protokoll ist einzuhalten', 'es ist nicht wichtig', 'das Protokoll wird gelöscht'], optionsEn: ['it has to be followed', 'the protocol must be observed', 'it is not important', 'the record will be deleted'], answer: 1,
        explain: '"Das Protokoll ist einzuhalten klingt tatsächlich passender."' }
    ]
  },
  speaking: [
    { task: "Im Methodenteil steht „man wertet die Daten aus“. Sag es besser.", taskEn: "The methods section says 'man wertet die Daten aus'. Say it better.", de: "Die Daten werden derzeit ausgewertet.", en: "The data is currently being analysed." },
    { task: "Deine Betreuerin fragt, was schon dokumentiert ist.", taskEn: "Your supervisor asks what's already documented.", de: "Alle Schritte sind vollständig dokumentiert und nachvollziehbar.", en: "All steps are fully documented and traceable." },
    { task: "Ein Kollege fragt, ob das ohne Zusatzsoftware geht.", taskEn: "A colleague asks whether that works without extra software.", de: "Der Datensatz lässt sich auch ohne Zusatzsoftware auswerten.", en: "The dataset can also be analysed without additional software." },
    { task: "Ein Kollege fragt, wie streng die Frist im Bericht klingen soll.", taskEn: "A colleague asks how strict the deadline should sound in the report.", de: "Ich schreibe: die Frist ist von allen Beteiligten einzuhalten.", en: "I'll write: the deadline is to be observed by everyone involved." },
    { task: "Der Absatz hat dreimal Passiv. Was schlägst du vor?", taskEn: "The paragraph has three passives. What do you suggest?", de: "Einmal Passiv, einmal lässt sich, einmal aktiv — das bleibt nachvollziehbar.", en: "One passive, one 'lässt sich', one active — that stays readable." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Replace unnecessary passive with more natural C1 alternatives, and explain why each transformation improves the text.\n\nTASK 2 — Academic report (350 words): Demonstrate balanced use of Vorgangspassiv, Zustandspassiv, Passiversatzformen, nominal style, and academic precision.',
    starters: ['Das Problem lässt sich mit dieser Methode lösen.', 'Die Ergebnisse sind vollständig dokumentiert.'],
    placeholder: 'Die Daten wurden gestern erhoben. Die erhobenen Daten lassen sich eindeutig interpretieren...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which sentence uses Zustandspassiv (resulting state)?', options: ['Die Ergebnisse sind dokumentiert.', 'Die Ergebnisse wurden dokumentiert.', 'Man dokumentiert die Ergebnisse.'], answer: 0, explain: '"Sind dokumentiert" (sein + Partizip II) is Zustandspassiv, describing the resulting state.' },
    gap: { sentence: ['Das Problem ', ' sich mit dieser Methode lösen.'], gaps: [ { answer: 'lässt', accepts: ['lässt'] } ], explain: '"Lässt sich lösen" is the Passiversatzform expressing possibility.' },
    match: { q: 'Match each structure to its function.', pairs: [ { noun: 'wurde ausgewertet', art: 'Vorgangspassiv (process)' }, { noun: 'ist dokumentiert', art: 'Zustandspassiv (state)' }, { noun: 'lässt sich lösen', art: 'sich lassen (possibility)' }, { noun: 'ist einzureichen', art: 'sein + zu + Infinitiv (obligation)' } ] },
    builder: { target: 'Build: "The deadline is absolutely to be kept." (sein + zu + Infinitiv)', bank: ['Die', 'Frist', 'ist', 'unbedingt', 'einzuhalten', '.'], answer: ['Die', 'Frist', 'ist', 'unbedingt', 'einzuhalten', '.'], roles: { 'ist': 'r-passiversatz', 'einzuhalten': 'r-passiversatz' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Tür wird geschlossen jetzt.', right: 'Die Tür ist jetzt geschlossen.', explain: 'To describe the resulting state (door currently closed), Zustandspassiv ("ist geschlossen") is correct, not Vorgangspassiv ("wird geschlossen", which describes the ongoing closing action).' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for the passive?', options: ['The question is never "can I form it?" but "what sounds most natural?"', 'Always use the passive in formal writing', 'Never use the passive at all'], answer: 0, explain: 'C1 speakers choose deliberately between passive, active, and alternatives based on naturalness.' },
    { q: 'Which describes an ongoing process?', options: ['Vorgangspassiv', 'Zustandspassiv', 'Neither'], answer: 0, explain: 'Vorgangspassiv ("wird/wurde + Partizip II") focuses on the process itself.' },
    { q: 'Which describes a resulting state?', options: ['Zustandspassiv', 'Vorgangspassiv', 'Neither'], answer: 0, explain: 'Zustandspassiv ("ist/war + Partizip II") describes the state resulting from a completed action.' },
    { q: 'Which Passiversatzform expresses possibility elegantly?', options: ['sich lassen', 'man', 'sein + zu + Infinitiv'], answer: 0, explain: '"Sich lassen" (Das Problem lässt sich lösen) is a natural, elegant alternative expressing possibility.' },
    { q: 'Which Passiversatzform is standard in administrative German for obligation?', options: ['sein + zu + Infinitiv', 'sich lassen', 'man'], answer: 0, explain: '"Sein + zu + Infinitiv" (Der Antrag ist einzureichen) is the standard administrative obligation structure.' }
  ],
  takeaways: [
    { c: 'r-vorgangspassiv', html: 'Vorgangspassiv (wurde ausgewertet) focuses on the ongoing process; Zustandspassiv (ist dokumentiert) focuses on the resulting state.' },
    { c: 'r-passiversatz', html: 'Passiversatzformen (sich lassen, sein+zu+Infinitiv, man, adjective constructions) often sound more natural and elegant than the plain passive.' },
    { c: 'r-zustandspassiv', html: 'At C1, choosing between passive, active, and Passiversatzformen is a stylistic decision based on naturalness and register, not just correctness.' }
  ],
  revisionTips: [
    'Take five plain passive sentences and rewrite each using a different Passiversatzform (sich lassen, sein+zu+Infinitiv, man, adjective).',
    'Find a German administrative document and list every "sein + zu + Infinitiv" construction you can identify.',
    'Practise distinguishing Vorgangspassiv from Zustandspassiv by writing pairs of sentences describing the same event as process vs. state.'
  ]
};
window.CHAPTER = CHAPTER;
