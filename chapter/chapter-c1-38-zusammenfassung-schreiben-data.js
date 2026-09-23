/* KLARWEG CHAPTER DATA — C1 · Chapter 38
   "Zusammenfassung schreiben" — identifying main ideas, information
   reduction, paraphrasing, objective summary writing. NOT
   argumentation/cohesion/passive (already mastered) — focus is
   summarization skill. Dialogue: Renke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-38-zusammenfassung-schreiben',
  phase: 'C1 · Nominalstil & Präzision',
  number: 38,
  title: 'Zusammenfassung schreiben',
  titleEn: 'Writing a summary',
  description: 'Imagine packing for a flight — you cannot take everything. Keep the essentials, leave unnecessary details behind, arrange everything neatly, and never change what the original author intended.',
  xp: 950, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 39, title: 'Stellungnahme schreiben', titleEn: 'Writing a statement of opinion' , href: 'chapter-c1-39-stellungnahme-schreiben.html' },
  prevChapter: { number: 37, title: 'Kollokationen & Bedeutungsnuancen', titleEn: 'Collocations and shades of meaning', href: 'chapter-c1-37-kollokationen-und-bedeutungsnuancen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'A summary communicates the <em>author\'s</em> ideas, not the writer\'s opinion.',
    intro: 'Preparing for a university exam, Renke asks Timo for the main idea of a difficult-childhood chapter, and they agree to paraphrase rather than quote — packing only the essentials, without changing what the author intended.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native writers reduce, paraphrase, and organize a long text into an objective summary'],
    scene: 'Vorbereitung auf eine Universitätsprüfung: Forschungsartikel zusammenfassen',
    femaleSpeakers: ['Renke'],
    dialogue: [
      { speaker: 'Renke', tokens: [
        { w: 'Was', role: 'r-subject', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Hauptidee', role: 'r-subject', en: 'main idea', hi: 'मुख्य विचार', pron: 'HOWPT-i-day', type: 'Noun · fem.', why: 'die Hauptidee (this chapter).', ex: 'die Hauptidee des Kapitels' },
        { w: 'dieses', role: 'r-dativ', en: 'this (neut. gen.)', hi: 'इस', pron: 'DEE-zes', type: 'Determiner · genitive' },
        { w: 'Kapitels', role: 'r-dativ', en: 'chapter (gen.)', hi: 'अध्याय के', pron: 'ka-PI-tels', type: 'Noun · neut. genitive' },
        { w: '?', plain: true }
      ], en: 'What is the main idea of this chapter?', hi: 'Is adhyaay ka mukhya vichaar kya hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Autor', role: 'r-subject', en: 'author', hi: 'लेखक', pron: 'ow-TOR', type: 'Noun · masc.' },
        { w: 'beschreibt', role: 'r-verb', en: 'describes', hi: 'वर्णन करता है', pron: 'be-SHRYPT', type: 'Verb · beschreiben', why: 'der Autor beschreibt = fixed formulation for summarizing (this chapter).', ex: 'Der Autor beschreibt eine schwierige Kindheit.', exEn: 'The author describes a difficult childhood.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'schwierige', role: 'r-akkusativ', en: 'difficult', hi: 'मुश्किल', pron: 'SHVEE-ri-guh', type: 'Adjective' },
        { w: 'Kindheit', role: 'r-akkusativ', en: 'childhood', hi: 'बचपन', pron: 'KINT-hite', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'The author describes a difficult childhood.', hi: 'Lekhak ek mushkil bachpan ka varnan karta hai.' },
      { speaker: 'Renke', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Details', role: 'r-akkusativ', en: 'details', hi: 'विवरण', pron: 'de-TAILS', type: 'Noun · plural' },
        { w: 'weglassen', role: 'r-verb', en: 'omit', hi: 'छोड़ना', pron: 'VEK-la-sen', type: 'Verb · infinitive (Satzende)', why: 'weglassen = to omit/leave out (this chapter).', ex: 'die Details weglassen' },
        { w: '?', plain: true }
      ], en: 'Shall we omit the details?', hi: 'Kya humein vivaran chhod dena chahiye?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Text', role: 'r-akkusativ', en: 'text', hi: 'पाठ', pron: 'tekst', type: 'Noun · masc.' },
        { w: 'paraphrasieren', role: 'r-verb', en: 'paraphrase', hi: 'अपने शब्दों में लिखना', pron: 'pa-ra-fra-ZEE-ren', type: 'Verb · infinitive (Satzende)', why: 'paraphrasieren = to paraphrase (this chapter).', ex: 'den Text paraphrasieren' },
        { w: 'statt', role: 'r-preposition', en: 'instead of', hi: 'के बजाय', pron: 'shtat', type: 'Preposition' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: 'के लिए', pron: 'tsoo', type: 'Infinitive marker · zu' },
        { w: 'zitieren', role: 'r-verb', en: 'quote', hi: 'उद्धृत करना', pron: 'tsi-TEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. We should paraphrase the text instead of quoting.', hi: 'Haan. Humein uddhrit karne ke bajaay paath ko apne shabdon mein likhna chahiye.' },
      { speaker: 'Renke', tokens: [
        { w: 'Zusammenfassend', role: 'r-akkusativ', en: 'in summary', hi: 'सारांश में', pron: 'tsu-ZA-men-fa-sent', type: 'Adverb (feste Wendung)', why: 'zusammenfassend lässt sich feststellen = in summary it can be stated, fixed summary phrase (this chapter).', ex: 'Zusammenfassend lässt sich feststellen, dass die Geschichte berührend ist.', exEn: 'In summary it can be stated that the story is touching.' },
        { w: 'lässt', role: 'r-verb', en: 'can', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen (part of fixed phrase)' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'feststellen', role: 'r-verb', en: 'be stated', hi: 'कहा जा', pron: 'FEST-shte-len', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Geschichte', role: 'r-subject', en: 'story', hi: 'कहानी', pron: 'ge-SHIKH-tuh', type: 'Noun · fem.' },
        { w: 'berührend', role: 'r-akkusativ', en: 'touching', hi: 'भावुक', pron: 'be-RÜ-rent', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'In summary it can be stated that the story is touching.', hi: 'Saaraansh mein, kaha ja sakta hai ki kahaani bhaavuk hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखता हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Zusammenfassung', role: 'r-akkusativ', en: 'summary', hi: 'सारांश', pron: 'tsu-ZA-men-fa-sung', type: 'Noun · fem.', why: 'die Zusammenfassung (recycled C1).', ex: 'die Zusammenfassung schreiben' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then I will write the summary now.', hi: 'Achha, toh main abhi saaraansh likhta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine packing for a flight — you cannot take everything. Keep the <span class="de r-hauptidee">essentials</span>, leave the rest behind, and never change the author\'s intention.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is ZUSAMMENFASSUNG SCHREIBEN at C1 level — identifying main ideas, information reduction, paraphrasing, and objective summary writing, NOT argumentation, cohesion, or passive voice (already mastered). Covered: the summary model (Original Text → Main Idea → Supporting Ideas → Remove Details → Paraphrase → Organize → Final Summary); identifying thesis, supporting ideas, evidence, examples, conclusions and deciding what belongs in a summary; information reduction techniques (deleting repetition, removing examples, eliminating minor details, combining similar ideas); paraphrasing (reformulating in new wording without copying the original); reporting language (der Autor beschreibt, der Text behandelt, im Mittelpunkt steht, es wird erläutert, zusammenfassend lässt sich feststellen); scientific summary phrases (die Studie untersucht, die Autorin kommt zu dem Schluss, die Ergebnisse zeigen); and the key principle that a summary communicates the author\'s ideas, not the writer\'s personal opinion. Do NOT expect or require new grammar structures, argumentation techniques, or cohesion devices — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: copying entire sentences verbatim instead of paraphrasing; inserting personal opinions into what should be an objective summary; including unnecessary details, examples, or repetition that a summary should omit; changing or distorting the author\'s original meaning; poor logical organization; summarizing sentence-by-sentence instead of synthesizing main ideas. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag copied/verbatim sentences that should be paraphrased; flag any personal opinion inserted into the summary; flag unnecessary details that should have been removed; check that the summary preserves the author\'s original meaning without distortion. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Objectivity check:</b> one sentence on whether the summary stays objective and faithful to the original author\'s intention.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your summaries are objective, well-organized, and faithful to the author\'s intention. Ready for the next chapter.', mid: 'Good. Re-read the Summary Model and Master Table once, then continue.', low: 'Worth another pass through the Grammar section — remember: keep the essentials, leave the rest behind.' },
  parserSentence: [ { w: 'Der', role: 'r-berichtsprache' }, { w: 'Autor', role: 'r-berichtsprache' }, { w: 'beschreibt', role: 'r-berichtsprache' }, { w: 'die', role: 'plain' }, { w: 'Ergebnisse', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: keep the essentials, leave the rest behind, never change the author\'s intention.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Renke and Timo summarize research articles for an exam, selecting, paraphrasing, and organizing objectively.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key summarization expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master main-idea identification, information reduction, paraphrasing, and reporting language.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic research article and a newspaper feature, identifying thesis and supporting ideas.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify main ideas, supporting arguments, and logical structure in a lecture and research presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Summarize articles orally, report key findings, and present neutral summaries.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Reduce a 700-word article to 180-220 words, and write a 250-word objective academic summary.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill main idea identification, summary reduction, and paraphrasing practice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 950 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Main idea identification and paraphrasing drills, plus a full academic summary writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Summary Model, Reduction Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Zuerst müssen wir die Hauptidee identifizieren.', text: 'Identify the main idea as the first step of any summary' },
    { de: 'Der Autor beschreibt die Auswirkungen des Klimawandels.', text: 'Use objective reporting language ("der Autor beschreibt")' },
    { de: 'Diesen Beispielsatz können wir weglassen, er ist nicht wesentlich.', text: 'Apply information reduction by omitting non-essential details' },
    { de: 'Statt die Sätze zu kopieren, sollten wir sie paraphrasieren.', text: 'Paraphrase rather than copy the original wording' },
    { de: 'Zusammenfassend lässt sich feststellen, dass der Klimawandel weitreichende Folgen hat.', text: 'Close a summary with the standard fixed phrase' }
  ],
  vocab: [
    { de: 'die Hauptidee', art: 'die', gender: 'f', plural: 'Hauptideen', pos: 'noun', level: 'C1', register: 'written', en: 'main idea', hi: 'मुख्य विचार', ex: 'Zuerst müssen wir die Hauptidee identifizieren.', exEn: 'First we must identify the main idea.', exHi: 'Sabse pehle hamein mukhya vichaar pehchaanna chahiye.', ex2: 'Die Hauptidee des Textes ist leicht zu erkennen.', ex2En: 'The main idea of the text is easy to recognize.', ex2Hi: 'Text ka mukhya vichaar aasaani se pehchaana jaa sakta hai.' },
    { de: 'weglassen', pos: 'verb (trennbar)', level: 'C1', register: 'written', en: 'to omit, leave out', hi: 'छोड़ देना', ex: 'Diesen Beispielsatz können wir weglassen, er ist nicht wesentlich.', exEn: 'We can omit this example sentence, it is not essential.', exHi: 'Hum yeh udhaaran vaakya chod sakte hain, yeh aavashyak nahi hai.', ex2: 'Unwichtige Details sollte man in einer Zusammenfassung weglassen.', ex2En: 'One should omit unimportant details in a summary.', ex2Hi: 'Zusammenfassung mein anaavashyak details chod deni chahiye.', conj: { praesens: 'lässt weg', praeteritum: 'ließ weg', perfekt: 'hat weggelassen' } },
    { de: 'paraphrasieren', pos: 'verb', level: 'C1', register: 'written', en: 'to paraphrase', hi: 'अपने शब्दों में लिखना', ex: 'Statt die Sätze zu kopieren, sollten wir sie paraphrasieren.', exEn: 'Instead of copying the sentences, we should paraphrase them.', exHi: 'Vaakyon ki nakal karne ki bajaaye, hamein unhe apne shabdon mein likhna chahiye.', ex2: 'Er hat den Absatz gut paraphrasiert.', ex2En: 'He paraphrased the paragraph well.', ex2Hi: 'Usne paragraph ko achhi tarah apne shabdon mein likha.', conj: { praesens: 'paraphrasiert', praeteritum: 'paraphrasierte', perfekt: 'hat paraphrasiert' } },
    { de: 'der Autor beschreibt', pos: 'fixed reporting phrase', level: 'C1', register: 'written', en: 'the author describes', hi: 'लेखक वर्णन करते हैं', ex: 'Der Autor beschreibt die Auswirkungen des Klimawandels.', exEn: 'The author describes the effects of climate change.', exHi: 'Lekhak jalvaayu parivartan ke prabhaav ka varnan karte hain.', ex2: 'Der Autor beschreibt die Methode detailliert.', ex2En: 'The author describes the method in detail.', ex2Hi: 'Lekhak vidhi ka vistaar se varnan karte hain.' },
    { de: 'zusammenfassend lässt sich feststellen', pos: 'fixed summary-conclusion phrase', level: 'C1', register: 'written', en: 'in summary, it can be stated', hi: 'संक्षेप में कहा जा सकता है', ex: 'Zusammenfassend lässt sich feststellen, dass der Klimawandel weitreichende Folgen hat.', exEn: 'In summary, it can be stated that climate change has far-reaching consequences.', exHi: 'Sansheiptaa mein, kaha jaa sakta hai ki jalvaayu parivartan ke deerghgaami parinaam hain.', ex2: 'Zusammenfassend lässt sich feststellen, dass die Studie signifikante Ergebnisse liefert.', ex2En: 'In summary, it can be stated that the study provides significant results.', ex2Hi: 'Sansheiptaa mein, kaha jaa sakta hai ki adhyayan mahatvapoorn parinaam deta hai.' }
  ],
  grammar: [
    { title: 'Was ist eine Zusammenfassung? (What is a Summary?)', body: [ 'Original Text → Key Ideas → Important Information → Logical Order → Objective Language → Summary. Summarizing means selecting and restructuring, not translating sentence by sentence.' ], hinglish: 'Summary ka matlab hai chunna aur naye tareeke se rakhna \u2014 ek-ek sentence ko chhota karna nahi. Isliye pehle poora text padho, phir tay karo ki asli baatein kaunsi hain, aur uske baad apne shabdon mein likho. Aur ek baat pakki \u2014 summary mein tumhari raay nahi aati, sirf author ki baat.' },
    { title: 'Hauptideen identifizieren (Identifying Main Ideas)', body: [ 'Recognize the thesis, supporting ideas, evidence, examples, and conclusions. Decide deliberately what should and should not appear in a summary.' ], hinglish: 'Text mein sab kuch barabar important nahi hota. Thesis aur main conclusions summary mein aate hain; examples, numbers aur repetition aksar nahi. Ek aasaan test \u2014 agar us baat ko hatane se author ka matlab nahi badalta, to woh summary mein nahi chahiye.' },
    { title: 'Informationsreduktion (Information Reduction)', body: [ 'Deleting repetition, removing examples, eliminating minor details, combining similar ideas, shortening explanations — techniques to reduce a long text without losing meaning.' ], hinglish: 'Text chhota karne ke paanch tareeke hain \u2014 repetition hatao, examples chhod do, chhoti details nikaal do, milti-julti baaton ko ek mein jodo, aur lambi explanation ko ek line mein le aao. Par dhyaan rakho ki hedge (<i>m\u00f6glicherweise</i>, <i>teilweise</i>) detail nahi hai \u2014 woh matlab ka hissa hai, isliye use hatana nahi.' },
    { title: 'Paraphrasieren (Paraphrasing)', body: [ 'Original → Equivalent expression → Natural reformulation. Avoid copying the author\'s exact wording; reformulate ideas in one\'s own natural German.' ], hinglish: 'Paraphrase ka matlab hai wahi baat apne shabdon mein kehna. Do tareeke sabse kaam ke hain \u2014 synonym badlo (<i>Ergebnisse</i> se <b>Befunde</b>), aur structure badlo (verb se noun, ya active se passive). Par sirf ek-do shabd badal dena paraphrase nahi hai; uska structure bhi badalna chahiye.' },
    { title: 'Berichtsprache (Reporting Language)', body: [ 'Der Autor beschreibt..., Der Text behandelt..., Im Mittelpunkt steht..., Es wird erläutert..., Abschließend wird betont... — neutral, objective phrases for reporting an author\'s ideas without personal opinion.' ], hinglish: 'Yeh phrases summary ki reedh hain, kyunki inse baat author ke naam se aati hai, tumhari nahi. Par inka grammar alag-alag hai \u2014 <span class="de">Der Autor beschreibt</span> ke baad <b>dass</b> aata hai, <span class="de">Im Mittelpunkt steht</span> ke baad seedha noun, aur <span class="de">Es wird erl\u00e4utert</span> passive hai. Yeh farak neeche wale block mein detail se hai.' },
    { title: 'Wissenschaftliche Zusammenfassungen', body: [ 'Scientific summary mein yeh phrases standard hain. Dhyaan do ki inme subject koi insaan nahi hai \u2014 <span class="de">Die Studie untersucht</span>, <span class="de">Die Ergebnisse zeigen</span> \u2014 aur yahi objective tone banata hai. Aur <span class="de">Zusammenfassend l\u00e4sst sich feststellen, dass \u2026</span> ke baad <b>dass</b> zaroori hai.' ], hinglish: 'Scientific summary mein yeh phrases standard hain. Dhyaan do ki inme subject koi insaan nahi hai \u2014 <span class="de">Die Studie untersucht</span>, <span class="de">Die Ergebnisse zeigen</span> \u2014 aur yahi objective tone banata hai. Aur <span class="de">Zusammenfassend l\u00e4sst sich feststellen, dass \u2026</span> ke baad <b>dass</b> zaroori hai.' },
    {
      title: 'Grammatik der Berichtsprache',
      body: [
        'Reporting phrases each demand a particular continuation, and that is where summaries actually go wrong \u2014 not in choosing ideas, but in the syntax around them.',
        'Two further points: a summary uses the <b>Pr\u00e4sens</b> throughout, and Konjunktiv I keeps claims attributed to the author.'
      ],
      table: {
        head: ['Phrase', 'Continuation', 'Example'],
        rows: [
          ['Der Autor beschreibt / betont', '<b>dass</b> + verb last', '<span class="de">Der Autor betont, <b>dass</b> die Kosten steigen.</span>'],
          ['Die Autorin kommt zu dem Schluss', '<b>dass</b> + verb last', '<span class="de">\u2026 kommt zu dem Schluss, <b>dass</b> \u2026</span>'],
          ['Der Text behandelt / Im Mittelpunkt steht', '+ noun phrase', '<span class="de">Im Mittelpunkt steht die Frage der Finanzierung.</span>'],
          ['Es wird erl\u00e4utert / Abschlie\u00dfend wird betont', 'passive \u2014 Partizip II last', '<span class="de">Abschlie\u00dfend <b>wird</b> die Dringlichkeit <b>betont</b>.</span>'],
          ['reporting a claim', 'Konjunktiv I', '<span class="de">Der Autor meint, die Methode <b>sei</b> wirksam.</span>']
        ]
      },
      note: 'Keep the whole summary in the Pr\u00e4sens, even when the original text narrates the past: <span class="de">Der Autor beschreibt \u2026</span>, not <i>beschrieb</i>. And never delete a hedge \u2014 if the author wrote <i>m\u00f6glicherweise</i>, your summary must keep it.',
      hinglish: 'Har reporting phrase apna structure maangti hai, aur summary mein galtiyan yahin hoti hain \u2014 ideas chunne mein nahi, unke aas-paas ke grammar mein. <span class="de">Der Autor betont</span> aur <span class="de">kommt zu dem Schluss</span> ke baad <b>dass</b> aata hai aur verb clause ke <b>end</b> mein jaata hai. <span class="de">Der Text behandelt</span> aur <span class="de">Im Mittelpunkt steht</span> ke baad seedha noun. Aur <span class="de">Es wird erl\u00e4utert</span> passive hai, isliye Partizip II sabse end mein: <span class="de">Abschlie\u00dfend wird die Dringlichkeit betont.</span> Do baatein aur \u2014 poori summary <b>Pr\u00e4sens</b> mein likho, chahe original text past mein ho. Aur agar author ne <i>m\u00f6glicherweise</i> likha hai to woh hedge tumhari summary mein bhi rehna chahiye; use hatane se uski baat badal jaati hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Step mapped to purpose.' ], table: { head: ['Step', 'Purpose'], rows: [ ['Read', 'Understand the text'], ['Identify', 'Main ideas'], ['Remove', 'Minor details'], ['Paraphrase', 'New wording'], ['Organize', 'Logical order'], ['Review', 'Accuracy & Objectivity'] ] }, hinglish: 'Chhe step ka table \u2014 exam mein isi order mein chalo, kyunki likhna shuru karne se pehle padhna aur chunna zaroori hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are grammatical \u2014 the syntax that reporting phrases demand. The other two are what actually spoils a summary: adding your own opinion, and dropping the author\u2019s hedge.' ], mistakes: [
      { wrong: 'Der Autor beschreibt, dass die Kosten steigen und die Kosten steigen weiter.', right: 'Der Autor beschreibt, dass die Kosten weiter steigen.', why: 'A summary must not repeat what it has already said. Combine the two statements into one.' },
      { wrong: 'Der Text behandelt das Thema Digitalisierung, was ich sehr interessant finde.', right: 'Der Text behandelt das Thema Digitalisierung und betont dessen Bedeutung.', why: 'A summary reports the author, not the reader. Any <i>ich finde</i> turns it into an opinion piece.' },
      { wrong: 'Die Autorin kommt zu dem Schluss, die Ma\u00dfnahmen sind wirksam.', right: 'Die Autorin kommt zu dem Schluss, dass die Ma\u00dfnahmen wirksam sind.', why: '<b>zu dem Schluss kommen</b> requires a <b>dass</b>-clause \u2014 and the verb then goes to the end.' },
      { wrong: 'Der Autor sagt, dass die Methode m\u00f6glicherweise wirksam ist. Die Methode ist wirksam.', right: 'Der Autor sagt, dass die Methode m\u00f6glicherweise wirksam sei.', why: 'Do not drop the author\u2019s hedge \u2014 <i>m\u00f6glicherweise</i> is part of the claim. Konjunktiv I (<b>sei</b>) also keeps the statement attributed to him.' },
      { wrong: 'Im Mittelpunkt steht die Frage der Finanzierung. Abschlie\u00dfend wird betont die Dringlichkeit.', right: 'Im Mittelpunkt steht die Frage der Finanzierung. Abschlie\u00dfend wird die Dringlichkeit betont.', why: 'The passive Partizip II closes the clause \u2014 nothing follows it. With <b>Abschlie\u00dfend</b> in position 1, the order is <i>wird \u2026 betont</i>.' },
      { wrong: 'Es wird erl\u00e4utert, wie funktioniert das Verfahren.', right: 'Es wird erl\u00e4utert, wie das Verfahren funktioniert.', why: 'An indirect question is a subordinate clause, so the verb goes to the END \u2014 no inversion after <b>wie</b>.' }
    ], hinglish: 'Chaar galtiyan grammar ki hain \u2014 reporting phrases ka structure. Aur do woh hain jo summary ko sach mein kharaab karti hain: apni raay daal dena, aur author ka hedge hata dena.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Is this idea essential? Yes → Keep it. Can it be shortened? Yes → Paraphrase. Maintain objectivity. Add to summary.' ], note: 'Memory trick: imagine packing for a flight. You cannot take everything — keep the essentials, leave unnecessary details behind, arrange everything neatly, and never change what the original author intended.', hinglish: 'Har baat par do sawaal poochho \u2014 yeh idea zaroori hai? Aur kya ise chhota kiya jaa sakta hai? Uske baad likhte waqt teen cheezein check karo: poori summary Pr\u00e4sens mein hai, koi <i>ich finde</i> nahi aaya, aur author ke hedge waise hi bache hue hain.' }
  ],
  reading: {
    title: 'Energiestudie: Langfristige Effekte erneuerbarer Energien',
    titleEn: 'Reading A — Energy study: long-term effects of renewable energy',
    tokens: [
      { w: 'Die', role: 'r-berichtsprache', en: 'the (fem. nom., part of "die Studie untersucht", scientific reporting phrase)', hi: '', type: 'Article' },
      { w: 'Studie', role: 'r-berichtsprache', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: 'untersucht', role: 'r-berichtsprache', en: 'examines (Satzende, "die Studie untersucht" — standard scientific reporting phrase)', hi: 'जाँच करता है (Satzende, standard reporting phrase)', type: 'Verb (Präsens, Satzende)', why: '"Die Studie untersucht" is the standard neutral phrase for introducing what a research study examines (this chapter).' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'ये', type: 'Article' },
      { w: 'langfristigen', role: 'plain', en: 'long-term', hi: 'दीर्घकालिक', type: 'Adjective · Akk.' },
      { w: 'Effekte', role: 'plain', en: 'effects', hi: 'प्रभाव', type: 'Noun · plural' },
      { w: 'erneuerbarer', role: 'plain', en: 'of renewable', hi: '', type: 'Adjective · Gen.' },
      { w: 'Energien', role: 'plain', en: 'energies (Satzende)', hi: 'ऊर्जा के (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'regionale', role: 'plain', en: 'regional', hi: 'क्षेत्रीय', type: 'Adjective' },
      { w: 'Arbeitsmärkte', role: 'plain', en: 'labour markets (Satzende)', hi: 'श्रम बाज़ारों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-berichtsprache', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'r-berichtsprache', en: 'results (part of "die Ergebnisse zeigen")', hi: '', type: 'Noun · plural' },
      { w: 'zeigen', role: 'r-berichtsprache', en: 'show (Satzende, standard scientific reporting phrase)', hi: 'दिखाते हैं (Satzende, standard reporting phrase)', type: 'Verb (Präsens, Satzende)' },
      { w: 'positive', role: 'plain', en: 'positive', hi: 'सकारात्मक', type: 'Adjective · Akk.' },
      { w: 'Trends', role: 'plain', en: 'trends (Satzende)', hi: 'रुझान (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'wobei', role: 'plain', en: 'whereby', hi: 'जिसमें', type: 'Relativadverb' },
      { w: 'ländliche', role: 'plain', en: 'rural', hi: 'ग्रामीण', type: 'Adjective' },
      { w: 'Regionen', role: 'plain', en: 'regions (Satzende)', hi: 'क्षेत्र (Satzende)', type: 'Noun · plural' },
      { w: 'besonders', role: 'plain', en: 'particularly', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'profitieren', role: 'plain', en: 'benefit (Satzende)', hi: 'लाभान्वित होते हैं (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The study examines the long-term effects of renewable energies on regional labour markets. The results show positive trends, whereby rural regions benefit particularly.',
    comprehension: [
      { q: 'Welche Funktion hat "die Studie untersucht"?', options: ['Objektive Einführung des Forschungsgegenstands', 'Eine persönliche Meinung', 'Ein Gegenargument'], answer: 0 },
      { q: 'Sollte man in einer Zusammenfassung persönliche Meinungen hinzufügen?', options: ['Nein, eine Zusammenfassung soll objektiv bleiben', 'Ja, immer', 'Es spielt keine Rolle'], answer: 0 },
      { q: 'Was ist der erste Schritt beim Zusammenfassen?', options: ['Die Hauptidee identifizieren', 'Den Text kopieren', 'Eine Meinung schreiben'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsreportage', titleEn: 'Reading B — Newspaper feature article',
    tokens: [
      { w: 'Im', role: 'r-berichtsprache', en: 'in the (masc./neut. dat., part of "im Mittelpunkt steht", fixed reporting phrase)', hi: '(im Mittelpunkt steht, fixed reporting phrase)', type: 'Präposition · Dat.' },
      { w: 'Mittelpunkt', role: 'r-berichtsprache', en: 'center (part of "im Mittelpunkt steht")', hi: 'kendra (fixed reporting phrase)', type: 'Noun · masc. · Dat.' },
      { w: 'steht', role: 'r-berichtsprache', en: 'stands (Satzende, "im Mittelpunkt steht" — standard phrase for identifying the central topic)', hi: 'hai (Satzende, standard phrase)', type: 'Verb (Präsens, Satzende)', why: '"Im Mittelpunkt steht" is a standard fixed phrase for identifying the central focus of a text or report.' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Frage', role: 'plain', en: 'question (Satzende)', hi: 'sawaal (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'nach', role: 'plain', en: 'about', hi: 'ke baare mein', type: 'Präposition · Dat.' },
      { w: 'sozialer', role: 'plain', en: 'social', hi: 'saamaajik', type: 'Adjective · Dat.' },
      { w: 'Gerechtigkeit', role: 'plain', en: 'justice (Satzende)', hi: 'nyaay (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'At the center stands the question of social justice.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_038_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Renke, was ist eigentlich der Kernpunkt dieses Kapitels über die schwierige Kindheit?', en: 'Renke, what is actually the core point of this chapter about the difficult childhood?' },
      { id: 'C1_038_L002', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Der Autor zeigt, wie frühe Entbehrungen später das gesamte Leben prägen können.', en: 'The author shows how early hardships can shape one\'s whole life later on.' },
      { id: 'C1_038_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Sollen wir das direkt zitieren oder lieber mit eigenen Worten wiedergeben?', en: 'Should we quote that directly or rather paraphrase it in our own words?' },
      { id: 'C1_038_L004', speaker: 'Renke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Eindeutig paraphrasieren, das entspricht viel eher dem Stil einer Zusammenfassung.', en: 'Clearly paraphrase, that fits the style of a summary much better.' }
    ],
    transcript: 'Renke, was ist eigentlich der Kernpunkt dieses Kapitels über die schwierige Kindheit? Der Autor zeigt, wie frühe Entbehrungen später das gesamte Leben prägen können. Sollen wir das direkt zitieren oder lieber mit eigenen Worten wiedergeben? Eindeutig paraphrasieren, das entspricht viel eher dem Stil einer Zusammenfassung.',
    translation: 'Renke, what is actually the core point of this chapter about the difficult childhood? The author shows how early hardships can shape one\'s whole life later on. Should we quote that directly or rather paraphrase it in our own words? Clearly paraphrase, that fits the style of a summary much better.',
    tokens: [
      { w: 'Renke' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'ist' },
      { w: 'eigentlich' },
      { w: 'der' },
      { w: 'Kernpunkt' },
      { w: 'dieses' },
      { w: 'Kapitels' },
      { w: 'über' },
      { w: 'die' },
      { w: 'schwierige' },
      { w: 'Kindheit' },
      { w: '?', plain: true },
      { w: 'Der' },
      { w: 'Autor' },
      { w: 'zeigt' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'frühe' },
      { w: 'Entbehrungen' },
      { w: 'später' },
      { w: 'das' },
      { w: 'gesamte' },
      { w: 'Leben' },
      { w: 'prägen' },
      { w: 'können' },
      { w: '.', plain: true },
      { w: 'Sollen' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'direkt' },
      { w: 'zitieren' },
      { w: 'oder' },
      { w: 'lieber' },
      { w: 'mit' },
      { w: 'eigenen' },
      { w: 'Worten' },
      { w: 'wiedergeben' },
      { w: '?', plain: true },
      { w: 'Eindeutig' },
      { w: 'paraphrasieren' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'entspricht' },
      { w: 'viel' },
      { w: 'eher' },
      { w: 'dem' },
      { w: 'Stil' },
      { w: 'einer' },
      { w: 'Zusammenfassung' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was zeigt das Kapitel laut Renke?', qEn: 'What does the chapter show, according to Renke?', options: ['wie man reich wird', 'wie frühe Entbehrungen das Leben prägen', 'wie man Bücher schreibt', 'wie man reist'], optionsEn: ['how to get rich', 'how early hardship shapes a life', 'how to write books', 'how to travel'], answer: 1,
        explain: '"Der Autor zeigt, wie frühe Entbehrungen später das gesamte Leben prägen können."' },
      { q: 'Wie wollen sie den Gedanken wiedergeben?', qEn: 'How do they decide to render the idea?', options: ['direkt zitieren', 'paraphrasieren', 'ignorieren', 'übersetzen'], optionsEn: ['quote directly', 'paraphrase', 'ignore', 'translate'], answer: 1,
        explain: '"Eindeutig paraphrasieren."' }
    ]
  },
  speaking: [
    { task: "Renke fragt nach dem Kernpunkt des Kapitels über die Kindheit.", taskEn: "Renke asks about the core point of the chapter on childhood.", de: "Der Autor beschreibt, wie frühe Entbehrungen das ganze Leben prägen.", en: "The author describes how early hardship shapes a whole life." },
    { task: "Fass den Artikel für die Lerngruppe in drei Sätzen zusammen.", taskEn: "Summarise the article for your study group in three sentences.", de: "Der Artikel untersucht Mieten in Mittelstädten und zeigt einen starken Anstieg.", en: "The article examines rents in mid-sized cities and shows a sharp rise." },
    { task: "Deine Betreuerin fragt, was du weglässt.", taskEn: "Your supervisor asks what you leave out.", de: "Die Hauptidee bleibt der Anstieg; die Städtenamen lasse ich weg.", en: "The main idea remains the rise; I leave out the city names." },
    { task: "Ein Kommilitone zitiert wörtlich. Zeig ihm die Alternative.", taskEn: "A fellow student quotes verbatim. Show him the alternative.", de: "Ich paraphrasiere den Gedanken statt ihn wörtlich zu übernehmen.", en: "I paraphrase the idea instead of taking it over word for word." },
    { task: "Schließe deine Zusammenfassung neutral ab.", taskEn: "Close your summary neutrally.", de: "Zusammenfassend beschreibt der Autor vor allem strukturelle Ursachen.", en: "In summary the author describes above all structural causes." }
  ],
  writing: {
    prompt: 'TASK 1 — Reduce (150 words): Reduce a 700-word article to approximately 180-220 words while preserving the author\'s message. Explain every editing decision.\n\nTASK 2 — Academic summary (250 words): Read a 900-word academic article and write an objective summary demonstrating logical organization, objective language, paraphrasing, and concise style.',
    starters: ['Der Autor beschreibt die Auswirkungen des Klimawandels auf die Landwirtschaft.', 'Die Studie untersucht die langfristigen Effekte erneuerbarer Energien.'],
    placeholder: 'Im Mittelpunkt steht die Frage... Zusammenfassend lässt sich feststellen, dass...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase introduces an objective summary of an author\'s idea?', options: ['Der Autor beschreibt...', 'Ich finde, dass...', 'Meiner Meinung nach...'], answer: 0, explain: '"Der Autor beschreibt" is neutral reporting language, appropriate for objective summarization.' },
    gap: { sentence: ['Zuerst müssen wir die ', ' identifizieren.'], gaps: [ { answer: 'Hauptidee', accepts: ['Hauptidee'] } ], explain: 'Identifying the main idea is the essential first step of any summary.' },
    match: { q: 'Match each phrase to its function.', pairs: [ { noun: 'der Autor beschreibt', art: 'Reporting language' }, { noun: 'weglassen', art: 'Information reduction' }, { noun: 'paraphrasieren', art: 'Paraphrasing' }, { noun: 'zusammenfassend lässt sich feststellen', art: 'Summary conclusion' } ] },
    builder: { target: 'Build: "We should paraphrase them." (paraphrasing technique)', bank: ['Wir', 'sollten', 'sie', 'paraphrasieren', '.'], answer: ['Wir', 'sollten', 'sie', 'paraphrasieren', '.'], roles: { 'sie': 'r-paraphrasieren', 'paraphrasieren': 'r-paraphrasieren' } },
    errorCorrection: { title: 'Error correction', wrong: 'Ich denke, der Klimawandel ist schlimm und die Regierung sollte mehr tun.', right: 'Der Autor beschreibt die Auswirkungen des Klimawandels und betont die Notwendigkeit staatlicher Maßnahmen.', explain: 'A summary should report the author\'s ideas objectively, not insert the writer\'s own personal opinion.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for summarizing?', options: ['Pack for a flight — keep only the essentials, leave the rest behind', 'Copy every sentence to be safe', 'Add your own opinion to make it interesting'], answer: 0, explain: 'A good summary keeps only essential ideas, just like packing only what fits in a suitcase.' },
    { q: 'What should a summary communicate?', options: ['The author\'s ideas, not the writer\'s personal opinion', 'The writer\'s personal opinion only', 'A word-for-word copy of the original'], answer: 0, explain: 'A summary reports the author\'s ideas objectively.' },
    { q: 'What is paraphrasing?', options: ['Reformulating ideas in new, natural wording without copying', 'Copying sentences exactly', 'Translating word by word'], answer: 0, explain: 'Paraphrasing avoids copying the original author\'s exact wording.' },
    { q: 'Which technique reduces a long text without losing meaning?', options: ['Deleting repetition and removing minor examples', 'Adding more examples', 'Repeating the same idea in different words'], answer: 0, explain: 'Information reduction techniques remove non-essential content while preserving meaning.' },
    { q: 'What phrase is a standard fixed conclusion for a summary?', options: ['Zusammenfassend lässt sich feststellen', 'Ich glaube, dass', 'Es tut mir leid, aber'], answer: 0, explain: '"Zusammenfassend lässt sich feststellen" is the standard objective phrase for closing a summary.' }
  ],
  takeaways: [
    { c: 'r-hauptidee', html: 'Identifying the main idea before writing is the essential first step of any summary.' },
    { c: 'r-informationsreduktion', html: 'Techniques like "weglassen" (omitting non-essential details) reduce a text without losing meaning.' },
    { c: 'r-paraphrasieren', html: 'Paraphrasing reformulates ideas in natural new wording, avoiding verbatim copying.' },
    { c: 'r-berichtsprache', html: 'Objective reporting phrases (der Autor beschreibt, die Studie untersucht, zusammenfassend lässt sich feststellen) keep a summary neutral and faithful to the original.' }
  ],
  revisionTips: [
    'Take a German news article and write down its main idea in one sentence before summarizing anything else.',
    'Practice paraphrasing by rewriting three sentences from an article in your own words, without reusing more than two consecutive original words.',
    'Write a 100-word summary of any German text and check: did I add any opinion? Did I copy any sentence verbatim?'
  ]
};
window.CHAPTER = CHAPTER;
