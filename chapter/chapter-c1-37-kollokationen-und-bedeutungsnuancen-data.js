/* KLARWEG CHAPTER DATA — C1 · Chapter 37
   "C1 Kollokationen & Bedeutungsnuancen" — verb+noun and
   adjective+noun collocations, verb meaning nuances (sehen vs
   beobachten vs betrachten...), near-synonym precision
   (Problem/Schwierigkeit/Herausforderung...). NOT grammar rules
   or sentence structure (already mastered) — focus is lexical
   precision and native-like word combinations.
   Dialogue: Petra and Timo ONLY. */
const CHAPTER = {
  id: 'c1-37-kollokationen-und-bedeutungsnuancen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 37,
  title: 'Kollokationen & Bedeutungsnuancen',
  titleEn: 'Collocations and shades of meaning',
  description: 'Imagine every German word has close friends. Entscheidungen are treffen, not machen. Maßnahmen are ergreifen, not nehmen. Learning one word is useful — learning its friends is what makes you sound native.',
  xp: 930, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 38, title: 'Zusammenfassung schreiben', titleEn: 'Writing a summary' , href: 'chapter-c1-38-zusammenfassung-schreiben.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Native speakers remember words in <em>combinations</em>, not as isolated entries.',
    intro: 'Revising an academic article before submission, Petra says they must take measures right away, and Timo regards the situation as critical — not fixing grammar, but making sure every word pairs with its natural collocation partner.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly which words are "close friends" in authentic German — and which near-synonym fits each context'],
    scene: 'Überarbeitung eines wissenschaftlichen Artikels vor der Einreichung',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'sofort', role: 'r-akkusativ', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'Maßnahmen', role: 'r-akkusativ', en: 'measures', hi: 'उपाय', pron: 'MAHS-nah-men', type: 'Noun · plural', why: 'Maßnahmen ergreifen = to take measures, fixed collocation (this chapter).', ex: 'Maßnahmen ergreifen' },
        { w: 'ergreifen', role: 'r-verb', en: 'take', hi: 'उठाना', pron: 'er-GRY-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'We must take measures right away.', hi: 'Humein abhi upaay uthaane honge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'betrachte', role: 'r-verb', en: 'regard', hi: 'मानता हूँ', pron: 'be-TRAKH-tuh', type: 'Verb · betrachten (ich)', why: 'betrachten = to regard/consider (this chapter).', ex: 'Ich betrachte die Situation als kritisch.', exEn: 'I regard the situation as critical.' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Situation', role: 'r-akkusativ', en: 'situation', hi: 'स्थिति', pron: 'zi-tu-a-TSYON', type: 'Noun · fem.' },
        { w: 'als', role: 'r-akkusativ', en: 'as', hi: 'के रूप में', pron: 'als', type: 'Preposition' },
        { w: 'kritisch', role: 'r-akkusativ', en: 'critical', hi: 'गंभीर', pron: 'KRI-tish', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'I regard the situation as critical.', hi: 'Main sthiti ko gambheer maanta hoon.' },
      { speaker: 'Petra', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Entscheidung', role: 'r-akkusativ', en: 'decision', hi: 'फ़ैसला', pron: 'ent-SHY-dung', type: 'Noun · fem.' },
        { w: 'treffen', role: 'r-verb', en: 'make', hi: 'लेना', pron: 'TRE-fen', type: 'Verb · infinitive (Satzende)', why: 'eine Entscheidung treffen (recycled B1/C1).', ex: 'eine Entscheidung treffen' },
        { w: '.', plain: true }
      ], en: 'We must make a decision today.', hi: 'Humein aaj ek faisla lena hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'fundierte', role: 'r-akkusativ', en: 'solid', hi: 'ठोस', pron: 'fun-DEER-tuh', type: 'Adjective', why: 'fundierte Kenntnisse = solid/well-grounded knowledge, fixed collocation (this chapter).', ex: 'fundierte Kenntnisse haben' },
        { w: 'Kenntnisse', role: 'r-akkusativ', en: 'knowledge', hi: 'ज्ञान', pron: 'KENT-ni-suh', type: 'Noun · plural' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Markt', role: 'r-akkusativ', en: 'market', hi: 'बाज़ार', pron: 'markt', type: 'Noun · masc.' },
        { w: '?', plain: true }
      ], en: 'Do you have solid knowledge about the market?', hi: 'Kya tumhe baazaar ke baare mein thos gyaan hai?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Herausforderung', role: 'r-subject', en: 'challenge', hi: 'चुनौती', pron: 'he-ROWS-for-de-rung', type: 'Noun · fem.', why: 'die Herausforderung (recycled B1/B2).', ex: 'die Herausforderung meistern' },
        { w: 'liegt', role: 'r-verb', en: 'lies', hi: 'में है', pron: 'leekt', type: 'Verb · liegen' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'के पास', pron: 'by', type: 'Preposition + dative' },
        { w: 'den', role: 'r-dativ', en: 'the (pl. dat.)', hi: '', pron: 'dayn', type: 'Article · dative' },
        { w: 'Lieferanten', role: 'r-dativ', en: 'suppliers (dat.)', hi: 'सप्लायरों के', pron: 'LEE-fe-ran-ten', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'Yes. The challenge lies with the suppliers.', hi: 'Haan. Chunauti supplieron ke paas hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'ergreifen', role: 'r-verb', en: 'let us take', hi: 'उठाते हैं', pron: 'er-GRY-fen', type: 'Verb · ergreifen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'sofort', role: 'r-akkusativ', en: 'right away', hi: 'अभी', pron: 'zo-FORT', type: 'Adverb' },
        { w: 'Maßnahmen', role: 'r-akkusativ', en: 'measures', hi: 'उपाय', pron: 'MAHS-nah-men', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Good, then let us take measures right away.', hi: 'Achha, toh hum abhi upaay uthaate hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine every German word has close friends. Entscheidungen are <span class="de r-kollokation">getroffen</span>, not gemacht. Learning a word\'s friends is what makes you sound native.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is KOLLOKATIONEN & BEDEUTUNGSNUANCEN at C1 level — verb+noun and adjective+noun collocations and precise near-synonym selection, NOT grammar rules or sentence structure (already mastered). Covered: verb+noun collocations (Maßnahmen ergreifen, Kritik üben, Verantwortung übernehmen, Einfluss ausüben, Zweifel hegen, Vertrauen genießen, Forschung betreiben, Aufmerksamkeit schenken, eine Entscheidung treffen); adjective+noun collocations (erhebliche Auswirkungen, fundierte Kenntnisse, nachhaltige Entwicklung, wissenschaftliche Erkenntnisse, differenzierte Betrachtung, berechtigtes Interesse); verb meaning nuances (sehen → beobachten → betrachten → wahrnehmen → erkennen → feststellen — each with a distinct precision level); academic/scientific collocations (eine Hypothese aufstellen, Ergebnisse liefern, eine Studie durchführen, Schlussfolgerungen ziehen, Daten auswerten, empirische Untersuchung, methodisches Vorgehen, signifikante Unterschiede); journalistic collocations (eine Debatte entfachen, Kritik hervorrufen, unter Druck geraten); professional collocations (ein Projekt umsetzen, Verhandlungen führen); and near-synonym nuance sets (Problem → Schwierigkeit → Herausforderung → Konflikt → Dilemma). Do NOT expect or require grammar structure corrections (word order, case, conjunctions) — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: literal/calque translations of collocations from English (eine Entscheidung machen instead of treffen; Maßnahmen nehmen instead of ergreifen); treating near-synonyms as fully interchangeable without regard to nuance or register; combining grammatically correct words that simply do not collocate naturally in German; overusing one generic verb (e.g. sehen, machen) where a more precise collocation exists. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag unnatural/calqued collocations and give the authentic German partner word; flag near-synonyms used imprecisely for context; check that verb+noun and adjective+noun pairings match genuine German usage, not literal translation. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Lexical precision check:</b> one sentence on whether the learner\'s word choices sound like natural German collocations rather than translated English.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your word choices sound like natural German collocations, not translated English. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Lexical Precision Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: every German word has close friends.' },
  parserSentence: [ { w: 'Wir', role: 'plain' }, { w: 'müssen', role: 'plain' }, { w: 'Maßnahmen', role: 'r-kollokation' }, { w: 'ergreifen', role: 'r-kollokation' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every German word has close friends — its natural collocational partners.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Petra and Timo revise an academic paper, sharpening collocations and lexical precision instead of grammar.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key collocations and near-synonyms — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master verb+noun, adjective+noun collocations, and verb/noun meaning nuances across registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic research article and a newspaper editorial, identifying collocations and lexical precision.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify collocations, synonym choice, and lexical nuances in a university seminar and editorial discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Paraphrase naturally, select precise vocabulary, and replace unnatural expressions.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace awkward word combinations with authentic collocations, and write a 350-word academic article.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill collocation matching, verb/adjective selection, and synonym nuance practice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 930 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Collocation matching and synonym nuance drills, plus a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Lexical Precision Model, Precision Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Wir sollten "eine Entscheidung treffen" schreiben, nicht "machen".', text: 'Recognize the authentic collocation "eine Entscheidung treffen"' },
    { de: '"Beobachten" passt für diesen wissenschaftlichen Kontext besser als "sehen".', text: 'Select the precise verb from a meaning-nuance chain' },
    { de: 'Statt "Maßnahmen nehmen" sollten wir "Maßnahmen ergreifen" schreiben.', text: 'Recognize the authentic collocation "Maßnahmen ergreifen"' },
    { de: 'Fundierte Kenntnisse und wissenschaftliche Erkenntnisse sind zentrale akademische Kollokationen.', text: 'Use adjective+noun collocations in academic register' },
    { de: 'Ein Wort zu lernen ist nützlich, aber seine Freunde zu kennen macht uns authentisch.', text: 'Understand the chapter\'s core "word friends" metaphor' }
  ],
  vocab: [
    { de: 'eine Entscheidung treffen', pos: 'fixed collocation (verb + noun)', level: 'C1', register: 'both', en: 'to make a decision', hi: 'फ़ैसला लेना', ex: 'Wir sollten "eine Entscheidung treffen" schreiben, nicht "machen".', exEn: 'We should write "make a decision" (treffen), not "machen".', exHi: 'Hamein "faisla lena" (treffen) likhna chahiye, "machen" nahi.', ex2: 'Die Regierung muss bald eine Entscheidung treffen.', ex2En: 'The government must make a decision soon.', ex2Hi: 'Sarkaar ko jald faisla lena hoga.' },
    { de: 'Maßnahmen ergreifen', pos: 'fixed collocation (verb + noun)', level: 'C1', register: 'written', en: 'to take measures', hi: 'उपाय करना', ex: 'Statt "Maßnahmen nehmen" sollten wir "Maßnahmen ergreifen" schreiben.', exEn: 'Instead of "take measures" (nehmen), we should write "ergreifen".', exHi: 'Hamein "upaay lena" ki bajaaye "upaay karna" (ergreifen) likhna chahiye.', ex2: 'Die Firma hat sofort Maßnahmen ergriffen.', ex2En: 'The company immediately took measures.', ex2Hi: 'Company ne turant upaay kiye.' },
    { de: 'betrachten', pos: 'verb', level: 'C1', register: 'written', en: 'to view, consider (precise, analytical)', hi: 'विचार करना', ex: 'Wir sollten diese Frage differenziert betrachten.', exEn: 'We should consider this question in a differentiated way.', exHi: 'Hamein iss sawaal ko vibhinn drishtikon se dekhna chahiye.', ex2: 'Man muss das Problem aus mehreren Perspektiven betrachten.', ex2En: 'One must consider the problem from multiple perspectives.', ex2Hi: 'Samasya ko kai drishtikon se dekhna zaroori hai.' },
    { de: 'fundierte Kenntnisse', pos: 'fixed collocation (adjective + noun)', level: 'C1', register: 'written', en: 'well-founded/solid knowledge', hi: 'सुदृढ़ ज्ञान', ex: 'Fundierte Kenntnisse und wissenschaftliche Erkenntnisse sind zentrale akademische Kollokationen.', exEn: 'Well-founded knowledge and scientific findings are central academic collocations.', exHi: 'Sudridh gyaan aur vaigyaanik anveshan zaroori academic collocations hain.', ex2: 'Er verfügt über fundierte Kenntnisse im Bereich der Statistik.', ex2En: 'He has solid knowledge in the field of statistics.', ex2Hi: 'Uske paas statistics mein sudridh gyaan hai.' },
    { de: 'die Herausforderung', art: 'die', gender: 'f', plural: 'Herausforderungen', pos: 'noun', level: 'C1', register: 'both', en: 'challenge (neutral-to-positive nuance, distinct from Problem)', hi: 'चुनौती', ex: 'Das ist keine Schwierigkeit, sondern eine Herausforderung.', exEn: 'That is not a difficulty, but a challenge.', exHi: 'Yeh koi kathinaai nahi, balki ek chunauti hai.', ex2: 'Die Digitalisierung bringt neue Herausforderungen mit sich.', ex2En: 'Digitalization brings new challenges.', ex2Hi: 'Digitalization nayi chunautiyaan laata hai.' }
  ],
  grammar: [
    { title: 'Was ist eine Kollokation? (What is a Collocation?)', body: [ 'Word → Natural Partner → Collocation → Native-like German. Examples: eine Entscheidung treffen, Interesse wecken, Verantwortung übernehmen, Maßnahmen ergreifen. Literal combinations often sound unnatural.' ], hinglish: 'Kollokation ka matlab hai woh jodi jo German mein <b>natural</b> lagti hai \u2014 grammar se nahi nikalti, sunne se aati hai. <span class="de">eine Entscheidung treffen</span> sahi hai par <i>eine Entscheidung machen</i> nahi, jabki grammar dono mein theek hai. Isliye shabd akela yaad karne se kaam nahi chalta \u2014 jodi yaad karni padti hai.' },
    { title: 'Verb + Nomen Kollokationen', body: [ 'Maßnahmen ergreifen, Kritik üben, Verantwortung übernehmen, Einfluss ausüben, Zweifel hegen, Vertrauen genießen, Forschung betreiben, Aufmerksamkeit schenken — these are the authentic natural partners of each noun.' ], hinglish: 'Yeh aath jodiyan C1 mein sabse zyada aati hain, aur dhyaan do ki inme se kisi mein bhi <i>machen</i> ya <i>nehmen</i> nahi hai \u2014 yahi sabse badi galti ki jagah hai. <span class="de">Ma\u00dfnahmen ergreifen</span>, <span class="de">Kritik \u00fcben</span>, <span class="de">Verantwortung \u00fcbernehmen</span>, <span class="de">Einfluss aus\u00fcben</span>. Inhe poore chunk ki tarah yaad karo, kyunki verb badalne se yeh turant galat lagne lagta hai.' },
    { title: 'Adjektiv + Nomen Kollokationen', body: [ 'erhebliche Auswirkungen, fundierte Kenntnisse, nachhaltige Entwicklung, wissenschaftliche Erkenntnisse, differenzierte Betrachtung, berechtigtes Interesse — fixed adjective partners for academic nouns.' ], hinglish: 'Sirf verb hi fix nahi hota \u2014 adjective bhi. <span class="de">erhebliche Auswirkungen</span> natural lagta hai par <i>gro\u00dfe Auswirkungen</i> kamzor, aur <span class="de">fundierte Kenntnisse</span> sahi hai par <i>starke Kenntnisse</i> nahi. Yeh jodiyan academic writing mein bahut kaam aati hain, isliye inhe bhi saath yaad karo.' },
    { title: 'Verb-Bedeutungsnuancen (Verb Meaning Nuances)', body: [ 'sehen (general) → beobachten (systematic observation) → betrachten (analytical consideration) → wahrnehmen (perceive) → erkennen (recognize/realize) → feststellen (determine/establish). Context determines the precise choice.' ], hinglish: 'Yeh chhe verbs \u201cdekhna\u201d ke aaspaas hain par ek jaise nahi. <b>sehen</b> aam hai. <b>beobachten</b> matlab dhyaan se aur lagataar dekhna. <b>betrachten</b> matlab soch-samajh kar dekhna, analysis ki tarah. <b>wahrnehmen</b> matlab mehsoos karna. <b>erkennen</b> matlab pehchaan lena. Aur <b>feststellen</b> matlab jaanch kar pakka karna \u2014 yahi academic writing mein sabse zyada aata hai. Isliye <i>wir haben gesehen</i> ki jagah <span class="de">es wurde festgestellt</span> likho.' },
    { title: 'Akademische & Wissenschaftliche Kollokationen', body: [ 'Academic writing ki apni jodiyan hain, aur har noun ka apna verb: <span class="de">eine Hypothese <b>aufstellen</b></span>, <span class="de">eine Studie <b>durchf\u00fchren</b></span>, <span class="de">Schlussfolgerungen <b>ziehen</b></span>, <span class="de">Daten <b>auswerten</b></span>. Aur scientific writing mein adjective wali jodiyan aati hain: <span class="de">empirische Untersuchung</span>, <span class="de">signifikante Unterschiede</span>. Ek baat dhyaan mein rakho \u2014 <b>signifikant</b> technical shabd hai, ise <i>ziemlich</i> se halka mat karo.' ], hinglish: 'Academic writing ki apni jodiyan hain, aur har noun ka apna verb: <span class="de">eine Hypothese <b>aufstellen</b></span>, <span class="de">eine Studie <b>durchf\u00fchren</b></span>, <span class="de">Schlussfolgerungen <b>ziehen</b></span>, <span class="de">Daten <b>auswerten</b></span>. Aur scientific writing mein adjective wali jodiyan aati hain: <span class="de">empirische Untersuchung</span>, <span class="de">signifikante Unterschiede</span>. Ek baat dhyaan mein rakho \u2014 <b>signifikant</b> technical shabd hai, ise <i>ziemlich</i> se halka mat karo.' },
    { title: 'Bedeutungsnuancen: Nahe Synonyme (Near-Synonym Nuances)', body: [ 'Problem → Schwierigkeit → Herausforderung → Konflikt → Dilemma — each carries a distinct nuance of severity, tone, and register, not full interchangeability.' ], hinglish: 'Yeh paanch ek jaise lagte hain par matlab alag hai. <b>Problem</b> aam hai. <b>Schwierigkeit</b> matlab koi mushkil jo raste mein aati hai. <b>Herausforderung</b> matlab mushkil kaam jise tum karna chahte ho \u2014 isme positive tone hai, isliye yeh academic aur professional writing mein bahut aata hai. <b>Konflikt</b> matlab do pakshon ka takraav. Aur <b>Dilemma</b> matlab do buri cheezon mein se ek chunna \u2014 isliye ise har mushkil ke liye use mat karo.' },
    {
      title: 'Die Verben, die man ersetzen muss',
      body: [
        'Almost every collocation error in this chapter comes from one of three over-used verbs. Learning what replaces them fixes most of the problem at once.',
        'Note also that some of these verbs are irregular in the Partizip II, which is a second, separate error.'
      ],
      table: {
        head: ['Instead of', 'Use', 'Partizip II'],
        rows: [
          ['Ma\u00dfnahmen <i>nehmen</i>', '<b>ergreifen</b>', '<span class="de">ergriffen</span>'],
          ['Kritik <i>machen</i>', '<b>\u00fcben</b>', '<span class="de">ge\u00fcbt</span>'],
          ['Einfluss <i>machen</i>', '<b>aus\u00fcben</b>', '<span class="de">ausge\u00fcbt</span>'],
          ['Verantwortung <i>nehmen</i>', '<b>\u00fcbernehmen</b>', '<span class="de">\u00fcbernommen</span>'],
          ['eine Hypothese <i>machen</i>', '<b>aufstellen</b>', '<span class="de">aufgestellt</span>'],
          ['Schlussfolgerungen <i>machen</i>', '<b>ziehen</b>', '<span class="de">gezogen</span>']
        ]
      },
      note: 'The adjective partner is fixed too: <b>scharfe</b> Kritik, <b>erhebliche</b> Auswirkungen, <b>fundierte</b> Kenntnisse, <b>berechtigtes</b> Interesse. A literally correct adjective can still be the wrong one.',
      hinglish: 'Is chapter ki lagbhag saari galtiyan teen over-used verbs se aati hain \u2014 <i>machen</i>, <i>nehmen</i> aur <i>sehen</i>. Inke asli partner yaad kar lo to zyada-tar samasya khatam: <span class="de">Ma\u00dfnahmen <b>ergreifen</b></span>, <span class="de">Kritik <b>\u00fcben</b></span>, <span class="de">Einfluss <b>aus\u00fcben</b></span>, <span class="de">Verantwortung <b>\u00fcbernehmen</b></span>, <span class="de">eine Hypothese <b>aufstellen</b></span>, <span class="de">Schlussfolgerungen <b>ziehen</b></span>. Ek doosri galti bhi saath aati hai \u2014 inme se kai ka Partizip II irregular hai: <b>ergriffen</b>, <b>\u00fcbernommen</b>, <b>gezogen</b>. Aur adjective bhi fix hota hai: <b>scharfe</b> Kritik, <b>erhebliche</b> Auswirkungen, <b>fundierte</b> Kenntnisse \u2014 grammar ke hisaab se sahi adjective bhi galat ho sakta hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Type mapped to example.' ], table: { head: ['Type', 'Example'], rows: [ ['Verb + Noun', 'Maßnahmen ergreifen'], ['Adjective + Noun', 'fundierte Kenntnisse'], ['Verb Nuance', 'beobachten vs betrachten'], ['Academic', 'Schlussfolgerungen ziehen'], ['Scientific', 'empirische Untersuchung'] ] }, hinglish: 'Type aur example ka table \u2014 par sabse kaam ki cheez neeche wala block hai, jo batata hai ki kaunse verb ki jagah kya aata hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these reach for <i>machen</i>, <i>nehmen</i> or <i>sehen</i> where German has a precise partner. The other two pick a near-synonym whose nuance does not fit.' ], mistakes: [
      { wrong: 'Die Regierung hat strenge Ma\u00dfnahmen genommen.', right: 'Die Regierung hat strenge Ma\u00dfnahmen ergriffen.', why: 'English \u201ctake measures\u201d does not transfer \u2014 <b>Ma\u00dfnahmen</b> pairs with <b>ergreifen</b>. Note the Partizip II is <b>ergriffen</b>, not <i>geergriffen</i>.' },
      { wrong: 'Die Kritiker haben starke Kritik gemacht.', right: 'Die Kritiker haben scharfe Kritik ge\u00fcbt.', why: 'Two collocations at once: <b>Kritik \u00fcben</b> is the fixed verb, and the natural adjective partner is <b>scharf</b>, not <i>stark</i>.' },
      { wrong: 'Der Klimawandel ist ein gro\u00dfes Dilemma f\u00fcr die Politik.', right: 'Der Klimawandel ist eine gro\u00dfe Herausforderung f\u00fcr die Politik.', why: 'A <b>Dilemma</b> is a forced choice between two bad options. A demanding task you intend to tackle is a <b>Herausforderung</b>.' },
      { wrong: 'Die Forscher haben eine Hypothese gemacht und Daten gemacht.', right: 'Die Forscher haben eine Hypothese aufgestellt und Daten ausgewertet.', why: 'Academic nouns have precise partners: a <b>Hypothese</b> is <b>aufgestellt</b> and <b>Daten</b> are <b>ausgewertet</b>. <i>machen</i> fits neither.' },
      { wrong: 'Er hat gro\u00dfen Einfluss gemacht und Verantwortung genommen.', right: 'Er hat gro\u00dfen Einfluss ausge\u00fcbt und Verantwortung \u00fcbernommen.', why: '<b>Einfluss aus\u00fcben</b> and <b>Verantwortung \u00fcbernehmen</b> \u2014 two of the most frequent C1 collocations, and both resist the English verb.' },
      { wrong: 'In der Studie haben wir gesehen, dass die Werte steigen.', right: 'In der Studie wurde festgestellt, dass die Werte steigen. / \u2026 haben wir beobachtet, dass \u2026', why: '<b>sehen</b> is everyday German. For a systematic finding academic writing uses <b>feststellen</b> or <b>beobachten</b>.' }
    ], hinglish: 'Chaar galtiyan <i>machen</i>, <i>nehmen</i> ya <i>sehen</i> lagane se hoti hain, jahan German ka apna precise partner hai. Aur do mein aisa near-synonym chun liya gaya hai jiska nuance situation se match nahi karta.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to express an idea? Choose the correct meaning. Check the register. Choose the natural collocation. Confirm contextual nuance. Use the most authentic expression.' ], note: 'Memory trick: every German word has close friends. Learning one word is useful — learning its friends is what makes you sound like a native speaker.', hinglish: 'Koi baat likhni hai? Pehle matlab tay karo, phir register dekho, aur phir us noun ka <b>natural partner</b> chuno. Ek aasaan check \u2014 agar tumne <i>machen</i>, <i>nehmen</i> ya <i>sehen</i> likha hai, to ruk kar socho: kya German ka koi precise verb hai? Lagbhag hamesha hota hai.' }
  ],
  reading: {
    title: 'Forschungsmagazin: Stressbewältigung am Arbeitsplatz',
    titleEn: 'Reading A — Research magazine: coping with stress at work',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'haben', role: 'r-kollokation', en: 'have (part of "eine Studie durchführen", academic collocation)', hi: '', type: 'Verb · haben (Präsens)' },
      { w: 'eine', role: 'r-kollokation', en: 'a (fem. akk., part of collocation)', hi: '', type: 'Article · Akk.' },
      { w: 'umfassende', role: 'plain', en: 'comprehensive', hi: 'व्यापक', type: 'Adjective · Akk.' },
      { w: 'Studie', role: 'r-kollokation', en: 'study (part of "eine Studie durchführen")', hi: 'अध्ययन (collocation)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'Stressbewältigung', role: 'plain', en: 'stress coping (Satzende)', hi: 'तनाव प्रबंधन (Satzende)', type: 'Noun · fem.' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Homeoffice', role: 'plain', en: 'home office (Satzende)', hi: 'होमऑफिस (Satzende)', type: 'Noun · neut.' },
      { w: 'durchgeführt', role: 'r-kollokation', en: 'conducted (Satzende, "eine Studie durchführen" — standard academic collocation, not "eine Studie machen")', hi: 'किया (Satzende, standard academic collocation)', type: 'Partizip II (Satzende)', why: '"Eine Studie durchführen" is the authentic academic collocation for conducting a study, not the generic "machen" (this chapter).' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'r-kollokation', en: 'results (part of "Ergebnisse liefern")', hi: '', type: 'Noun · plural' },
      { w: 'liefern', role: 'r-kollokation', en: 'deliver/provide (Satzende, "Ergebnisse liefern" — standard academic collocation)', hi: 'देते हैं (Satzende, standard academic collocation)', type: 'Verb (Präsens, Satzende)' },
      { w: 'wichtige', role: 'plain', en: 'important', hi: 'महत्वपूर्ण', type: 'Adjective · Akk.' },
      { w: 'Erkenntnisse', role: 'plain', en: 'findings (Satzende)', hi: 'निष्कर्ष (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'darüber', role: 'plain', en: 'about it', hi: 'इसके बारे में', type: 'Pronominaladverb' },
      { w: ',', plain: true },
      { w: 'welche', role: 'plain', en: 'which', hi: 'कौन सी', type: 'Determiner' },
      { w: 'Pausenrituale', role: 'plain', en: 'break rituals (Satzende)', hi: 'ब्रेक की आदतें (Satzende)', type: 'Noun · plural' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Konzentration', role: 'plain', en: 'concentration (Satzende)', hi: 'एकाग्रता (Satzende)', type: 'Noun · fem.' },
      { w: 'nachweislich', role: 'plain', en: 'demonstrably', hi: 'सिद्ध रूप से', type: 'Adverb' },
      { w: 'fördern', role: 'plain', en: 'promote (Satzende)', hi: 'बढ़ाते हैं (Satzende)', type: 'Verb · Infinitiv (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The researchers conducted a comprehensive study on stress coping in the home office. The results provide important findings on which break rituals demonstrably promote concentration.',
    comprehension: [
      { q: 'Welche Kollokation wird verwendet, um eine Studie zu beschreiben?', options: ['eine Studie durchführen', 'eine Studie machen', 'eine Studie nehmen'], answer: 0 },
      { q: 'Welche Kollokation passt zu "Ergebnisse"?', options: ['Ergebnisse liefern', 'Ergebnisse machen', 'Ergebnisse nehmen'], answer: 0 },
      { q: 'Warum ist "eine Studie machen" weniger authentisch?', options: ['Es ist eine wörtliche Übersetzung, keine natürliche Kollokation', 'Es ist grammatisch falsch', 'Es gibt keinen Unterschied'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar', titleEn: 'Reading B — Newspaper editorial',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Vorschlag', role: 'plain', en: 'proposal (Satzende)', hi: 'prastaav ne (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'hat', role: 'r-kollokation', en: 'has (part of "eine Debatte entfachen", journalistic collocation)', hi: '(journalistic collocation)', type: 'Verb · haben (Präsens)' },
      { w: 'eine', role: 'r-kollokation', en: 'a (fem. akk., part of collocation)', hi: '(collocation ka hissa)', type: 'Article · Akk.' },
      { w: 'hitzige', role: 'plain', en: 'heated', hi: 'garam', type: 'Adjective · Akk.' },
      { w: 'Debatte', role: 'r-kollokation', en: 'debate (part of "eine Debatte entfachen")', hi: 'behes (collocation ka hissa)', type: 'Noun · fem.' },
      { w: 'entfacht', role: 'r-kollokation', en: 'ignited (Satzende, "eine Debatte entfachen" — standard journalistic collocation, not "machen")', hi: 'chhedi (Satzende, standard journalistic collocation)', type: 'Partizip II (Satzende)', why: '"Eine Debatte entfachen" (to ignite a debate) is the authentic journalistic collocation, more vivid than a generic verb.' },
      { w: '.', plain: true }
    ],
    translation: 'The proposal has ignited a heated debate.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_037_L001', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, wir müssen dringend Maßnahmen ergreifen, bevor sich die Lage weiter zuspitzt.', en: 'Timo, we urgently need to take measures before the situation escalates further.' },
      { id: 'C1_037_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da stimme ich zu, ich betrachte die Situation ebenfalls als kritisch.', en: 'I agree, I also regard the situation as critical.' },
      { id: 'C1_037_L003', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut, dann sollten wir schnellstmöglich einen Beschluss fassen.', en: 'Good, then we should reach a decision as quickly as possible.' },
      { id: 'C1_037_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Einverstanden, ich berufe noch heute eine Sitzung ein.', en: 'Agreed, I\'ll convene a meeting today.' }
    ],
    transcript: 'Timo, wir müssen dringend Maßnahmen ergreifen, bevor sich die Lage weiter zuspitzt. Da stimme ich zu, ich betrachte die Situation ebenfalls als kritisch. Gut, dann sollten wir schnellstmöglich einen Beschluss fassen. Einverstanden, ich berufe noch heute eine Sitzung ein.',
    translation: 'Timo, we urgently need to take measures before the situation escalates further. I agree, I also regard the situation as critical. Good, then we should reach a decision as quickly as possible. Agreed, I\'ll convene a meeting today.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'müssen' },
      { w: 'dringend' },
      { w: 'Maßnahmen' },
      { w: 'ergreifen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Lage' },
      { w: 'weiter' },
      { w: 'zuspitzt' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'stimme' },
      { w: 'ich' },
      { w: 'zu' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'betrachte' },
      { w: 'die' },
      { w: 'Situation' },
      { w: 'ebenfalls' },
      { w: 'als' },
      { w: 'kritisch' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'schnellstmöglich' },
      { w: 'einen' },
      { w: 'Beschluss' },
      { w: 'fassen' },
      { w: '.', plain: true },
      { w: 'Einverstanden' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'berufe' },
      { w: 'noch' },
      { w: 'heute' },
      { w: 'eine' },
      { w: 'Sitzung' },
      { w: 'ein' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was müssen sie laut Petra machen?', qEn: 'What does Petra say they need to do?', options: ['abwarten', 'Maßnahmen ergreifen', 'die Situation ignorieren', 'nichts tun'], optionsEn: ['wait and see', 'take measures', 'ignore the situation', 'do nothing'], answer: 1,
        explain: '"Wir müssen dringend Maßnahmen ergreifen."' },
      { q: 'Was will Timo heute machen?', qEn: 'What does Timo decide to do today?', options: ['eine Sitzung einberufen', 'nach Hause gehen', 'einen Brief schreiben', 'eine Pause machen'], optionsEn: ['call a meeting', 'go home', 'write a letter', 'take a break'], answer: 0,
        explain: '"Ich berufe noch heute eine Sitzung ein."' }
    ]
  },
  speaking: [
    { task: "Timo will handeln, bevor sich die Lage zuspitzt. Stimm zu.", taskEn: "Timo wants to act before the situation escalates. Agree.", de: "Da stimme ich zu; wir müssen dringend Maßnahmen ergreifen.", en: "I agree; we urgently need to take measures." },
    { task: "Berichte im Protokoll, was das Gremium beschlossen hat.", taskEn: "Report in the minutes what the committee decided.", de: "Das Gremium hat eine Entscheidung getroffen und die Frist verlängert.", en: "The committee made a decision and extended the deadline." },
    { task: "Man fragt im Gespräch nach deinen Qualifikationen.", taskEn: "In the interview you're asked about your qualifications.", de: "Ich habe fundierte Kenntnisse in der Statistik.", en: "I have sound knowledge of statistics." },
    { task: "Ein Kollege nennt alles ein Problem. Differenziere.", taskEn: "A colleague calls everything a problem. Differentiate.", de: "Der Fehler ist ein Problem, der Fachkräftemangel eine Herausforderung.", en: "The error is a problem, the skills shortage a challenge." },
    { task: "Deine Kollegin schreibt „ich sehe die Lage kritisch“. Sag es fachlich.", taskEn: "Your colleague writes 'I see the situation critically'. Say it professionally.", de: "Ich betrachte die Situation ebenfalls als kritisch.", en: "I likewise regard the situation as critical." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Replace awkward word combinations with authentic German collocations. Explain every correction.\n\nTASK 2 — Academic article (350 words): Demonstrate authentic collocations, lexical precision, meaning nuances, academic register, and native-like vocabulary selection.',
    starters: ['Die Forscher haben eine Studie durchgeführt und wichtige Erkenntnisse geliefert.', 'Wir sollten Maßnahmen ergreifen, um erhebliche Auswirkungen zu vermeiden.'],
    placeholder: 'Fundierte Kenntnisse und eine differenzierte Betrachtung sind für diese Frage notwendig...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which is the authentic German collocation for "make a decision"?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung nehmen'], answer: 0, explain: '"Eine Entscheidung treffen" is the natural collocation — decisions are "hit/met", not "made", in German.' },
    gap: { sentence: ['Statt Maßnahmen zu nehmen, sollten wir Maßnahmen ', '.'], gaps: [ { answer: 'ergreifen', accepts: ['ergreifen'] } ], explain: '"Maßnahmen ergreifen" is the authentic collocation, not "Maßnahmen nehmen".' },
    match: { q: 'Match each noun to its authentic collocational verb.', pairs: [ { noun: 'eine Entscheidung', art: 'treffen' }, { noun: 'Maßnahmen', art: 'ergreifen' }, { noun: 'Verantwortung', art: 'übernehmen' }, { noun: 'Kritik', art: 'üben' } ] },
    builder: { target: 'Build: "We should take measures." (authentic collocation)', bank: ['Wir', 'sollten', 'Maßnahmen', 'ergreifen', '.'], answer: ['Wir', 'sollten', 'Maßnahmen', 'ergreifen', '.'], roles: { 'Maßnahmen': 'r-kollokation', 'ergreifen': 'r-kollokation' } },
    errorCorrection: { title: 'Error correction', wrong: 'Wir müssen eine Entscheidung machen und Maßnahmen nehmen.', right: 'Wir müssen eine Entscheidung treffen und Maßnahmen ergreifen.', explain: 'Both "Entscheidung machen" and "Maßnahmen nehmen" are literal-translation calques; "treffen" and "ergreifen" are the authentic German collocations.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for collocations?', options: ['Every German word has close friends — its natural collocational partners', 'All synonyms are fully interchangeable', 'Grammar correctness guarantees natural-sounding German'], answer: 0, explain: 'Native speakers store vocabulary in natural word combinations, not isolated dictionary entries.' },
    { q: 'What is the authentic collocation for "make a decision"?', options: ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung nehmen'], answer: 0, explain: '"Treffen" is the natural verb partner of "Entscheidung", unlike the literal-translation "machen".' },
    { q: 'Which verb is most precise for systematic, scientific observation?', options: ['beobachten', 'sehen', 'schauen'], answer: 0, explain: '"Beobachten" implies careful, systematic observation, more precise than the general "sehen".' },
    { q: 'Why are Problem, Schwierigkeit, Herausforderung, Konflikt, and Dilemma not interchangeable?', options: ['Each carries a distinct nuance of severity, tone, and register', 'They are exact synonyms with no difference', 'Only Problem is a real German word'], answer: 0, explain: 'Near-synonyms carry subtle but important differences in meaning and register.' },
    { q: 'Why is "eine Studie machen" considered less authentic than "eine Studie durchführen"?', options: ['It is a literal translation, not the natural German collocation', 'It is grammatically incorrect', 'There is no difference'], answer: 0, explain: '"Durchführen" is the authentic academic collocation for conducting a study.' }
  ],
  takeaways: [
    { c: 'r-kollokation', html: 'Verb+noun and adjective+noun collocations (Maßnahmen ergreifen, eine Entscheidung treffen, fundierte Kenntnisse) are fixed natural word partnerships — not freely substitutable.' },
    { c: 'r-bedeutungsnuance', html: 'Verb nuance chains (sehen → beobachten → betrachten → erkennen → feststellen) and near-synonym sets (Problem → Herausforderung → Dilemma) each carry distinct shades of meaning.' }
  ],
  revisionTips: [
    'Take five common English-to-German literal translations you tend to make (e.g. "eine Entscheidung machen") and write the authentic collocation next to each.',
    'Pick one near-synonym chain (Problem/Schwierigkeit/Herausforderung/Konflikt/Dilemma) and write one sentence per word showing its distinct nuance.',
    'Find a German academic abstract and underline every verb+noun and adjective+noun collocation you can identify.'
  ]
};
window.CHAPTER = CHAPTER;
