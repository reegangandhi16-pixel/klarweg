/* KLARWEG CHAPTER DATA — C1 · Chapter 31
   "Adversativangaben & Gegensätze ausdrücken" — nuanced contrast,
   concession, counter-argument, and balanced academic discussion.
   NOT basic aber/sondern/trotzdem/obwohl (already mastered) —
   focus on precise choice among C1-level connectors.
   Dialogue: Meike and Timo ONLY. */
const CHAPTER = {
  id: 'c1-31-adversativangaben-und-gegensaetze-ausdruecken',
  phase: 'C1 · Nominalstil & Präzision',
  number: 31,
  title: 'Adversativangaben & Gegensätze ausdrücken',
  titleEn: 'Expressing contrast and opposition precisely',
  description: 'Think of German argumentation as a bridge. One idea stands on one side, the opposing idea on the other. Different bridges serve different purposes — native speakers choose the bridge by the relationship between ideas, not because all of them mean "but".',
  xp: 810, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 32, title: 'Kohärenz & Textverknüpfung', titleEn: 'Text coherence and cohesion' , href: 'chapter-c1-32-kohaerenz-und-textverknuepfung.html' },
  prevChapter: { number: 30, title: 'Nomen mit Numerusbesonderheiten', titleEn: 'Nouns with special number behavior', href: 'chapter-c1-30-nomen-mit-numerusbesonderheiten.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Different <em>bridges</em> serve different purposes — not all of them just mean "but".',
    intro: 'Preparing opposing viewpoints for a university debate on artificial intelligence, Meike calls the bike path expensive but sensible, and Timo insists it\'s worth it despite the cost — choosing the right bridge between contrasting ideas, not just "aber".',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See precise adversative connectors chosen for their exact logical relationship, not interchangeably'],
    scene: 'Vorbereitung einer Universitätsdebatte über künstliche Intelligenz',
    femaleSpeakers: ['Meike'],
    dialogue: [
      { speaker: 'Meike', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Radweg', role: 'r-subject', en: 'bike path', hi: 'साइकिल पथ', pron: 'RAHT-vayk', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'teuer', role: 'r-akkusativ', en: 'expensive', hi: 'महंगा', pron: 'TOY-er', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'allerdings', role: 'r-conjunction', en: 'however', hi: 'हालांकि', pron: 'A-ler-dings', type: 'Adverb · allerdings', why: 'allerdings = however (this chapter).', ex: 'Der Radweg ist teuer, allerdings sinnvoll.', exEn: 'The bike path is expensive, however sensible.' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The bike path is expensive, however sensible.', hi: 'Cycle path mehanga hai, halaanki uchit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wenngleich', role: 'r-conjunction', en: 'even though', hi: 'हालांकि', pron: 'ven-GLYKH', type: 'Conjunction · wenngleich', why: 'wenngleich = even though, formal concessive conjunction (this chapter).', ex: 'Wenngleich es teuer ist, lohnt sich das Projekt.', exEn: 'Even though it is expensive, the project is worth it.' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'teuer', role: 'r-akkusativ', en: 'expensive', hi: 'महंगा', pron: 'TOY-er', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: ',', plain: true },
        { w: 'lohnt', role: 'r-verb', en: 'is worth', hi: 'लायक है', pron: 'LOHNT', type: 'Verb · sich lohnen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Projekt', role: 'r-subject', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'Even though it is expensive, the project is worth it.', hi: 'Halaanki yeh mehanga hai, pariyojana layak hai.' },
      { speaker: 'Meike', tokens: [
        { w: 'Demgegenüber', role: 'r-conjunction', en: 'in contrast to that', hi: 'इसके विपरीत', pron: 'daym-ge-gen-Ü-ber', type: 'Adverb · demgegenüber', why: 'demgegenüber = in contrast to that, formal contrast connector (recycled C1).', ex: 'Demgegenüber stehen die Kosten für Parkplätze.', exEn: 'In contrast to that stand the costs for parking spaces.' },
        { w: 'stehen', role: 'r-verb', en: 'stand', hi: 'हैं', pron: 'SHTAY-en', type: 'Verb · stehen' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Kosten', role: 'r-subject', en: 'costs', hi: 'लागत', pron: 'KOS-ten', type: 'Noun · plural (nur Plural)' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'Parkplätze', role: 'r-akkusativ', en: 'parking spaces', hi: 'पार्किंग स्थान', pron: 'PARK-ple-tsuh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'In contrast to that stand the costs for parking spaces.', hi: 'Iske viparit paarking sthaan ki lagat hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nichtsdestotrotz', role: 'r-conjunction', en: 'nevertheless', hi: 'फिर भी', pron: 'nikhts-des-to-TROTS', type: 'Adverb · nichtsdestotrotz', why: 'nichtsdestotrotz = nevertheless, emphatic formal adverb (this chapter).', ex: 'Nichtsdestotrotz sollten wir den Radweg bauen.', exEn: 'Nevertheless we should build the bike path.' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Radweg', role: 'r-akkusativ', en: 'bike path', hi: 'साइकिल पथ', pron: 'RAHT-vayk', type: 'Noun · masc.' },
        { w: 'bauen', role: 'r-verb', en: 'build', hi: 'बनाना', pron: 'BOW-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Nevertheless we should build the bike path.', hi: 'Phir bhi humein cycle path banaana chahiye.' },
      { speaker: 'Meike', tokens: [
        { w: 'Einerseits', role: 'r-conjunction', en: 'on the one hand', hi: 'एक तरफ़', pron: 'EYE-ner-zyts', type: 'Conjunction · einerseits … andererseits (recycled B1/C1)' },
        { w: 'verstehe', role: 'r-verb', en: 'understand', hi: 'समझती हूँ', pron: 'fer-SHTAY-uh', type: 'Verb · verstehen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: ',', plain: true },
        { w: 'andererseits', role: 'r-conjunction', en: 'on the other hand', hi: 'दूसरी तरफ़', pron: 'AN-de-rer-zyts', type: 'Conjunction · part 2' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'besorgt', role: 'r-akkusativ', en: 'worried', hi: 'चिंतित', pron: 'be-ZORKT', type: 'Adjective' },
        { w: 'wegen', role: 'r-preposition', en: 'because of', hi: 'के कारण', pron: 'VAY-gen', type: 'Preposition + genitive' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Budgets', role: 'r-dativ', en: 'budget (gen.)', hi: 'बजट के', pron: 'BUD-shets', type: 'Noun · neut. genitive' },
        { w: '.', plain: true }
      ], en: 'On the one hand I understand that, on the other hand I am worried because of the budget.', hi: 'Ek taraf main yeh samajhti hoon, doosri taraf main budget ke kaaran chintit hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'suchen', role: 'r-verb', en: 'let us search', hi: 'ढूंढते हैं', pron: 'ZOO-khen', type: 'Verb · suchen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Kompromiss', role: 'r-akkusativ', en: 'compromise', hi: 'समझौता', pron: 'kom-pro-MIS', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'Good, then let us search for a compromise.', hi: 'Achha, toh hum samjhauta dhoondhte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think of German argumentation as a bridge. Different <span class="de r-adversativ">bridges</span> serve different purposes — native speakers choose the bridge by the exact relationship between ideas, not because all of them mean "but".' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is ADVERSATIVANGABEN & GEGENSÄTZE AUSDRÜCKEN at C1 level — precise, nuanced choice among many contrast/concession/counter-argument connectors, NOT basic aber/sondern/trotzdem/obwohl/dennoch/jedoch (already mastered at earlier levels). Covered: basic contrast review at C1 precision (aber, sondern, jedoch, allerdings, dagegen, hingegen — each with a distinct shade of formality/strength); concession structures (obwohl, obgleich, wenngleich, selbst wenn, auch wenn, ungeachtet dessen — varying in strength and register); adversative adverbs for discourse (dennoch — surprise/unexpected persistence, trotzdem, gleichwohl, indessen, hingegen, andererseits, demgegenüber); academic balanced argumentation (einerseits...andererseits, zwar...aber, einer Studie zufolge...demgegenüber); scientific contrast (im Gegensatz dazu, dem steht...gegenüber/entgegen, dennoch zeigen die Ergebnisse, allerdings muss berücksichtigt werden); journalistic (während...hingegen, demgegenüber, gleichzeitig); professional (dem steht entgegen, nichtsdestotrotz); and the argumentative structure Claim → Evidence → Counter-Argument → Concession → Conclusion. Do NOT expect or require basic conjunction position rules, punctuation basics, or elementary aber/sondern distinction — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: using "aber" everywhere instead of the more precise C1 connector the context calls for; repeating the same connector multiple times in one text; confusing simple contrast (aber/jedoch) with concession (obwohl) — these express different logical relationships, not interchangeable synonyms; direct literal translation of English "however" that picks an inappropriate German connector for the register; register mismatches (using a scientific/formal connector like "demgegenüber" in casual conversation, or a casual one in academic writing). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag overuse or repetition of the same connector; flag confusion between contrast and concession relationships; check register match between the connector chosen and the surrounding text\'s formality; check "einerseits...andererseits" and similar paired structures are used correctly and completely. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Precision check:</b> one sentence on whether the learner chose connectors precisely for their logical relationship and register, rather than defaulting to "aber".</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you choose adversative connectors precisely for their logical relationship and register, like a native speaker. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Argument Structure Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: different bridges serve different purposes, not all of them just mean "but".' },
  parserSentence: [ { w: 'Einerseits', role: 'r-balancierteargumentation' }, { w: 'bietet', role: 'plain' }, { w: 'sie', role: 'plain' }, { w: 'Chancen', role: 'plain' }, { w: ',', role: 'plain' }, { w: 'andererseits', role: 'r-balancierteargumentation' }, { w: 'Risiken', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: different adversative expressions each convey a distinct logical relationship, not simply "but".' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Meike and Timo prepare a university debate, precisely choosing contrast, concession, and counter-argument connectors.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key adversative expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master contrast, concession, adversative adverbs, and balanced academic argumentation.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an argumentative academic article and a newspaper opinion piece, identifying adversative connectors.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify contrasting viewpoints and concession in a university debate and expert panel discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Express agreement/disagreement and present balanced opinions using authentic C1 adversative structures.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace repetitive connectors with precise alternatives, and write a 350-word argumentative essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill connector selection, contrast vs concession distinction, and counter-argument construction.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 810 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Connector selection and contrast-vs-concession drills, plus a full argumentative essay writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Argument Structure Model, Contrast Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Allerdings entstehen neue ethische Fragen.', text: 'Use "allerdings" for a formal counter-argument' },
    { de: 'Obwohl viele Experten noch diskutieren, wird die Technologie bereits eingesetzt.', text: 'Distinguish concession ("obwohl") from simple contrast' },
    { de: 'Einerseits bietet die Technologie Chancen, andererseits bestehen Risiken.', text: 'Construct balanced academic argumentation with "einerseits...andererseits"' },
    { de: 'Dem steht jedoch entgegen, dass viele Arbeitsplätze gefährdet sind.', text: 'Use the formal scientific-register expression "dem steht...entgegen"' },
    { de: 'Dennoch zeigen die Ergebnisse, dass neue Arbeitsplätze entstehen.', text: 'Use "dennoch" to express surprising or unexpected persistence' }
  ],
  vocab: [
    { de: 'allerdings', pos: 'adverb', level: 'C1', register: 'both', en: 'however, admittedly', hi: 'फिर भी, हालाँकि', ex: 'Allerdings entstehen neue ethische Fragen.', exEn: 'However, new ethical questions arise.', exHi: 'Phir bhi, naye naitik sawaal utpann hote hain.', ex2: 'Die Idee ist gut, allerdings fehlt das nötige Budget.', ex2En: 'The idea is good, however the necessary budget is missing.', ex2Hi: 'Vichaar achha hai, phir bhi zaroori budget nahi hai.' },
    { de: 'wenngleich', pos: 'Konjunktion', level: 'C1', register: 'written', en: 'although, even though', hi: 'यद्यपि', ex: 'Wenngleich die Ergebnisse vielversprechend sind, braucht es weitere Forschung.', exEn: 'Although the results are promising, further research is needed.', exHi: 'Yadyapi parinaam aashaajanak hain, aur shodh ki zarurat hai.', ex2: 'Wenngleich er müde war, arbeitete er weiter.', ex2En: 'Although he was tired, he continued working.', ex2Hi: 'Yadyapi woh thaka hua tha, usne kaam jaari rakha.' },
    { de: 'demgegenüber', pos: 'adverb', level: 'C1', register: 'written', en: 'in contrast to this, whereas', hi: 'इसके विपरीत', ex: 'Demgegenüber zeigen andere Studien ein anderes Bild.', exEn: 'In contrast to this, other studies show a different picture.', exHi: 'Iske viparit, doosre adhyayan ek alag tasveer dikhaate hain.', ex2: 'Die Kosten sind hoch; demgegenüber steht ein großer Nutzen.', ex2En: 'The costs are high; in contrast, there is great benefit.', ex2Hi: 'Kharch zyaada hai; iske viparit, bhaari laabh hai.' },
    { de: 'nichtsdestotrotz', pos: 'adverb', level: 'C1', register: 'both', en: 'nevertheless, nonetheless', hi: 'फिर भी', ex: 'Nichtsdestotrotz setzte das Team das Projekt fort.', exEn: 'Nevertheless, the team continued the project.', exHi: 'Phir bhi, team ne project jaari rakha.', ex2: 'Die Kritik war scharf, nichtsdestotrotz blieb er bei seiner Meinung.', ex2En: 'The criticism was sharp, nevertheless he stuck to his opinion.', ex2Hi: 'Aalochana teekhi thi, phir bhi woh apni raay par kaayam raha.' },
    { de: 'einerseits ... andererseits', pos: 'Konnektorpaar', level: 'C1', register: 'both', en: 'on the one hand ... on the other hand', hi: 'एक तरफ ... दूसरी तरफ', ex: 'Einerseits bietet die Technologie Chancen, andererseits bestehen Risiken.', exEn: 'On the one hand, the technology offers opportunities, on the other hand, there are risks.', exHi: 'Ek taraf, takneek avsar deti hai, dusri taraf, khatre maujood hain.', ex2: 'Einerseits möchte ich reisen, andererseits fehlt mir die Zeit.', ex2En: 'On the one hand I want to travel, on the other hand I lack the time.', ex2Hi: 'Ek taraf main yatra karna chahta hoon, dusri taraf mere paas samay nahi hai.' }
  ],
  grammar: [
    { title: 'Kontrast verstehen (Understanding Contrast)', body: [ 'Statement → Opposition → Contrast → Concession → Counter-Argument → Balanced Conclusion. German structures opposing ideas through a logical progression, not a single interchangeable word.' ], hinglish: 'German mein contrast ke liye ek shabd nahi, ek poora system hai \u2014 aur har shabd ka apna kaam aur apna word order hai. C1 par sirf yeh nahi dekha jaata ki tumne contrast dikhaya, balki yeh ki tumne sahi tarah ka contrast chuna.' },
    { title: 'Grundlegender Kontrast (Basic Contrast, C1 precision)', body: [ 'aber (neutral), sondern (correction after negation), jedoch (formal), allerdings (formal counter-argument), dagegen (contrast), hingegen (formal contrast, often comparative). Each carries a distinct shade of formality and function.' ], hinglish: '<b>aber</b> neutral hai aur har jagah chalta hai. <b>sondern</b> sirf negation ke baad aata hai, jab tum galat baat ko sahi se badal rahe ho: <span class="de">nicht \u00fcberraschend, sondern erwartbar</span>. <b>jedoch</b> aur <b>allerdings</b> formal writing ke hain, aur <b>hingegen</b> aksar do cheezon ki tulna mein. Sabse zaroori baat \u2014 <b>aber</b> aur <b>sondern</b> conjunctions hain, par baaki sab <b>adverbs</b> hain, isliye unke baad word order badal jaata hai.' },
    { title: 'Konzession (Concession)', body: [ 'obwohl, obgleich, wenngleich, selbst wenn, auch wenn, ungeachtet dessen — these introduce a fact that does NOT prevent the main conclusion, distinct from simple contrast.' ], hinglish: 'Concession ka matlab hai \u2014 ek baat sach hai, phir bhi nateeja nahi badla. <b>obwohl</b> sabse common hai, <b>obgleich</b> aur <b>wenngleich</b> zyada formal aur likhne mein aate hain. Yeh sab subordinating conjunctions hain, isliye inke clause ka verb <b>end</b> mein jaata hai: <span class="de">obwohl die Methode neu <b>ist</b></span>.' },
    { title: 'Adversative Adverbien (Adversative Adverbs)', body: [ 'dennoch (surprise/unexpected persistence), trotzdem, gleichwohl, indessen, hingegen, andererseits, demgegenüber — these function as discourse markers connecting independent clauses, not subordinating conjunctions.' ], hinglish: 'Yeh adverbs hain, conjunctions nahi \u2014 aur yahi sabse important baat hai. Yeh naya main clause shuru karte hain, isliye inke turant baad <b>verb</b> aata hai aur subject uske baad: <span class="de">Dennoch <b>zeigen</b> die Ergebnisse \u2026</span>. Matlab ke hisaab se <b>dennoch</b> aur <b>trotzdem</b> mein hairaani hoti hai, <b>hingegen</b> aur <b>demgegen\u00fcber</b> tulna karte hain, aur <b>gleichwohl</b> kaafi formal hai.' },
    { title: 'Akademische Argumentation (Academic Argumentation)', body: [ 'Academic writing mein yeh jodiyan bahut kaam aati hain. <b>Einerseits \u2026 andererseits</b> se dono taraf ki baat rakhi jaati hai, aur <b>zwar \u2026 aber</b> se pehle ek baat maan lete ho phir apni baat rakhte ho. Dhyaan do ki <b>zwar</b> ke saath hamesha <b>aber</b> aata hai \u2014 <i>sondern</i> kabhi nahi \u2014 aur dono position 1 par aayein to verb turant baad aayega.' ], hinglish: 'Academic writing mein yeh jodiyan bahut kaam aati hain. <b>Einerseits \u2026 andererseits</b> se dono taraf ki baat rakhi jaati hai, aur <b>zwar \u2026 aber</b> se pehle ek baat maan lete ho phir apni baat rakhte ho. Dhyaan do ki <b>zwar</b> ke saath hamesha <b>aber</b> aata hai \u2014 <i>sondern</i> kabhi nahi \u2014 aur dono position 1 par aayein to verb turant baad aayega.' },
    { title: 'Wissenschaftlicher & Journalistischer Kontrast', body: [ 'Formal texts ki apni contrast phrases hain. Scientific writing mein <span class="de">Im Gegensatz dazu</span> aur <span class="de">Allerdings muss ber\u00fccksichtigt werden</span> bahut aate hain \u2014 yeh dono position 1 lete hain, isliye verb turant baad. News mein <span class="de">Demgegen\u00fcber</span> aur <span class="de">W\u00e4hrend \u2026 hingegen</span> milte hain.' ], hinglish: 'Formal texts ki apni contrast phrases hain. Scientific writing mein <span class="de">Im Gegensatz dazu</span> aur <span class="de">Allerdings muss ber\u00fccksichtigt werden</span> bahut aate hain \u2014 yeh dono position 1 lete hain, isliye verb turant baad. News mein <span class="de">Demgegen\u00fcber</span> aur <span class="de">W\u00e4hrend \u2026 hingegen</span> milte hain.' },
    {
      title: 'Wortstellung: der eigentliche Unterschied',
      body: [
        'The connectors in this chapter fall into three grammatical types, and choosing the right meaning is useless if the word order is wrong.',
        'This is what most C1 contrast errors actually are \u2014 not the wrong word, but the wrong syntax after it.'
      ],
      table: {
        head: ['Type', 'Word order', 'Members'],
        rows: [
          ['coordinating conjunction', 'no position \u2014 normal order follows', '<span class="de">aber, sondern, doch</span>'],
          ['adverb in position 1', '<b>verb second</b>, subject after', '<span class="de">jedoch, dennoch, trotzdem, hingegen, demgegen\u00fcber, allerdings</span>'],
          ['adverb in the middle field', 'normal order, adverb inside', '<span class="de">Sie hat <b>jedoch</b> Schw\u00e4chen.</span>'],
          ['subordinating conjunction', '<b>verb last</b>', '<span class="de">obwohl, obgleich, wenngleich, w\u00e4hrend</span>'],
          ['fixed pair', 'zwar in pos. 1 \u2192 verb second', '<span class="de">zwar \u2026 aber</span>']
        ]
      },
      note: 'Never double a contrast: <i>obwohl \u2026 trotzdem</i> and <i>zwar \u2026 sondern</i> are both wrong. One connector already does the work.',
      hinglish: 'Is chapter ke connectors teen grammatical types mein bantte hain \u2014 aur sahi matlab chun lena bekaar hai agar uske baad word order galat ho. Asli C1 galtiyan yahi hoti hain. <b>aber</b> aur <b>sondern</b> conjunctions hain, yeh koi position nahi lete aur uske baad normal order chalta hai. <b>jedoch, dennoch, trotzdem, hingegen, demgegen\u00fcber</b> adverbs hain \u2014 agar yeh position 1 par aayein to verb turant aayega, subject se pehle: <span class="de">jedoch <b>hat</b> sie Schw\u00e4chen</span>. Inhe beech mein bhi rakh sakte ho: <span class="de">Sie hat jedoch Schw\u00e4chen.</span> Aur <b>obwohl</b> subordinating conjunction hai, isliye uska verb clause ke <b>end</b> mein jaata hai. Ek aakhri baat \u2014 contrast do baar mat lagao: <i>obwohl \u2026 trotzdem</i> aur <i>zwar \u2026 sondern</i> dono galat hain.'
    },
    { title: 'Meister-Tabelle', body: [ 'Function mapped to typical expressions.' ], table: { head: ['Function', 'Typical Expressions'], rows: [ ['Contrast', 'aber, jedoch, hingegen'], ['Concession', 'obwohl, obgleich, wenngleich'], ['Counter-Argument', 'allerdings, dennoch'], ['Balanced Discussion', 'einerseits ... andererseits'], ['Scientific Contrast', 'demgegenüber, im Gegensatz dazu'] ] }, hinglish: 'Function aur expression ka table \u2014 par expression chunne ke baad uska type bhi dekh lo, kyunki word order usi se tay hoga.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are word order \u2014 the adverbs need verb-second, <b>obwohl</b> needs verb-final. The other two are about doubling a contrast that one word already carries.' ], mistakes: [
      { wrong: 'Die Studie ist umfangreich, jedoch sie hat methodische Schw\u00e4chen.', right: 'Die Studie ist umfangreich, jedoch hat sie methodische Schw\u00e4chen. / \u2026, sie hat jedoch methodische Schw\u00e4chen.', why: '<b>jedoch</b> is an adverb, not a conjunction like <i>aber</i>. In position 1 the verb must follow immediately \u2014 or move <b>jedoch</b> into the middle field.' },
      { wrong: 'Das Ergebnis ist nicht \u00fcberraschend, sondern es best\u00e4tigt fr\u00fchere Studien nicht.', right: 'Das Ergebnis ist nicht \u00fcberraschend, sondern erwartbar.', why: '<b>sondern</b> replaces what the negation cancelled. If the second half adds a new idea instead of correcting the first, you need <b>aber</b>.' },
      { wrong: 'Obwohl die Daten unvollst\u00e4ndig sind, trotzdem sind die Ergebnisse eindeutig.', right: 'Obwohl die Daten unvollst\u00e4ndig sind, sind die Ergebnisse eindeutig.', why: '<b>obwohl</b> already carries the concession, so adding <b>trotzdem</b> marks it twice. Use one or the other, never both.' },
      { wrong: 'Obwohl die Methode ist neu, \u00fcberzeugt sie nicht.', right: 'Obwohl die Methode neu ist, \u00fcberzeugt sie nicht.', why: '<b>obwohl</b> is a subordinating conjunction, so its verb goes to the END of the clause \u2014 unlike the adverbs <i>jedoch</i> and <i>dennoch</i>.' },
      { wrong: 'Zwar ist die Methode aufwendig, sondern sie liefert genaue Ergebnisse.', right: 'Zwar ist die Methode aufwendig, aber sie liefert genaue Ergebnisse.', why: '<b>zwar</b> is fixed with <b>aber</b>. <i>sondern</i> only ever follows a negation, and there is none here.' },
      { wrong: 'Die Kosten sind hoch, demgegen\u00fcber der Nutzen ist gering.', right: 'Die Kosten sind hoch, demgegen\u00fcber ist der Nutzen gering.', why: '<b>demgegen\u00fcber</b> is an adverb in position 1, so the verb comes second \u2014 before the subject.' }
    ], hinglish: 'Chaar galtiyan word order ki hain \u2014 adverbs ke baad verb doosri jagah par, aur <b>obwohl</b> ke baad verb end mein. Baaki do mein contrast do baar laga diya gaya hai, jabki ek hi shabd kaafi tha.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need simple opposition? aber. Need correction? sondern. Need concession? obwohl / auch wenn / wenngleich. Need formal contrast? hingegen / demgegenüber. Need academic discussion? einerseits...andererseits → balanced conclusion.' ], note: 'Memory trick: think of German argumentation as a bridge. Different bridges (aber, jedoch, hingegen, obwohl, dennoch, einerseits...andererseits) serve different purposes — choose by the relationship between ideas.', hinglish: 'Simple contrast? <b>aber</b>. Negation ke baad sudhaar? <b>sondern</b>. Concession? <b>obwohl</b> \u2014 aur verb end mein. Formal contrast? <b>hingegen</b> ya <b>demgegen\u00fcber</b> \u2014 aur verb turant baad. Aur likhne ke baad ek baar check karo: word order us connector ke type se match kar raha hai?' }
  ],
  reading: {
    title: 'Kommentar: Autonomes Fahren zwischen Fortschritt und Risiko',
    titleEn: 'Reading A — Commentary: autonomous driving between progress and risk',
    tokens: [
      { w: 'Zwar', role: 'r-konzession', en: 'admittedly (part of "zwar...aber" concession-contrast bridge)', hi: 'सच है कि', type: 'Adverb', why: '"Zwar...aber" concedes a point before introducing the real contrast — a hallmark of balanced argumentation (this chapter).' },
      { w: 'verbessert', role: 'plain', en: 'improves', hi: 'सुधारती है', type: 'Verb (Präsens)' },
      { w: 'autonomes', role: 'plain', en: 'autonomous', hi: 'स्वचालित', type: 'Adjective · Nom.' },
      { w: 'Fahren', role: 'plain', en: 'driving (Satzende)', hi: 'ड्राइविंग (Satzende)', type: 'Noun · neut.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Verkehrssicherheit', role: 'plain', en: 'road safety (Satzende)', hi: 'सड़क सुरक्षा (Satzende)', type: 'Noun · fem.' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'Testregionen', role: 'plain', en: 'test regions (Satzende)', hi: 'परीक्षण क्षेत्रों (Satzende)', type: 'Noun · plural' },
      { w: 'nachweislich', role: 'plain', en: 'demonstrably (Satzende)', hi: 'सिद्ध रूप से (Satzende)', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-konzession', en: 'but (Satzende, closes the bridge, introduces the real contrast)', hi: 'लेकिन (Satzende)', type: 'Konjunktion (Satzende)' },
      { w: 'gleichzeitig', role: 'plain', en: 'at the same time', hi: 'साथ ही', type: 'Adverb' },
      { w: 'wachsen', role: 'plain', en: 'grow', hi: 'बढ़ रही हैं', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Bedenken', role: 'plain', en: 'concerns (Satzende)', hi: 'चिंताएँ (Satzende)', type: 'Noun · plural' },
      { w: 'hinsichtlich', role: 'plain', en: 'regarding', hi: 'के संबंध में', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Haftungsfrage', role: 'plain', en: 'liability question (Satzende)', hi: 'दायित्व के सवाल (Satzende)', type: 'Noun · fem.' },
      { w: 'bei', role: 'plain', en: 'in the event of', hi: 'की स्थिति में', type: 'Preposition · Dat.' },
      { w: 'Unfällen', role: 'plain', en: 'accidents (Satzende)', hi: 'दुर्घटनाओं (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true }
    ],
    translation: 'Admittedly, autonomous driving demonstrably improves road safety in test regions, but at the same time concerns are growing regarding the liability question in the event of accidents.',
    comprehension: [
      { q: 'Welche Funktion hat "zwar...aber"?', options: ['Ein Zugeständnis machen und dann den Hauptkontrast einführen', 'Eine Ursache angeben', 'Eine Bedingung stellen'], answer: 0 },
      { q: 'Was wird im Text konzediert?', options: ['Dass autonomes Fahren die Sicherheit verbessert', 'Dass es keine Risiken gibt', 'Dass die Technik ausgereift ist'], answer: 0 },
      { q: 'Welches Gegenargument folgt?', options: ['Wachsende Bedenken zur Haftungsfrage', 'Höhere Kosten', 'Fehlende Nachfrage'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar', titleEn: 'Reading B — Newspaper opinion piece',
    tokens: [
      { w: 'Während', role: 'r-adversativ', en: 'while (part of "während...hingegen", journalistic contrast pair)', hi: '(während...hingegen, journalistic contrast pair)', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ek', type: 'Article' },
      { w: 'Regierung', role: 'plain', en: 'government (Satzende)', hi: 'sarkaar (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'Fortschritte', role: 'plain', en: 'progress', hi: 'pragati ki', type: 'Noun · plural' },
      { w: 'betont', role: 'plain', en: 'emphasizes (Satzende)', hi: 'baat karti hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'berichten', role: 'plain', en: 'report', hi: 'batate hain', type: 'Verb (Präsens)' },
      { w: 'Kritiker', role: 'plain', en: 'critics', hi: 'aalochak', type: 'Noun · plural' },
      { w: 'hingegen', role: 'r-adversativ', en: 'in contrast (completes the "während...hingegen" pair)', hi: 'iske viparit ("während...hingegen" ka doosra hissa)', type: 'Adverb', why: '"Während...hingegen" is a journalistic contrast pair, common in reporting opposing viewpoints.' },
      { w: 'von', role: 'plain', en: 'about', hi: 'ke baare mein', type: 'Präposition · Dat.' },
      { w: 'erheblichen', role: 'plain', en: 'considerable', hi: 'kaafi', type: 'Adjective · Dat.' },
      { w: 'Problemen', role: 'plain', en: 'problems (Satzende)', hi: 'samasyaon ke (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'While the government emphasizes progress, critics, in contrast, report considerable problems.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_031_L001', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, der neue Radweg ist zwar teuer, aber meiner Meinung nach absolut sinnvoll.', en: 'Timo, the new bike path is expensive, but in my opinion absolutely worthwhile.' },
      { id: 'C1_031_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Da stimme ich dir zu, trotz der Kosten lohnt sich die Investition langfristig.', en: 'I agree with you there, despite the costs the investment pays off in the long run.' },
      { id: 'C1_031_L003', speaker: 'Meike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, während die Autofahrer sich beschweren, freuen sich die Radfahrer schon jetzt.', en: 'Exactly, while the drivers complain, the cyclists are already happy.' },
      { id: 'C1_031_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gegensätzliche Interessen eben — aber am Ende profitiert die ganze Stadt davon.', en: 'Conflicting interests indeed — but in the end the whole city benefits from it.' }
    ],
    transcript: 'Timo, der neue Radweg ist zwar teuer, aber meiner Meinung nach absolut sinnvoll. Da stimme ich dir zu, trotz der Kosten lohnt sich die Investition langfristig. Genau, während die Autofahrer sich beschweren, freuen sich die Radfahrer schon jetzt. Gegensätzliche Interessen eben — aber am Ende profitiert die ganze Stadt davon.',
    translation: 'Timo, the new bike path is expensive, but in my opinion absolutely worthwhile. I agree with you there, despite the costs the investment pays off in the long run. Exactly, while the drivers complain, the cyclists are already happy. Conflicting interests indeed — but in the end the whole city benefits from it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'neue' },
      { w: 'Radweg' },
      { w: 'ist' },
      { w: 'zwar' },
      { w: 'teuer' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'meiner' },
      { w: 'Meinung' },
      { w: 'nach' },
      { w: 'absolut' },
      { w: 'sinnvoll' },
      { w: '.', plain: true },
      { w: 'Da' },
      { w: 'stimme' },
      { w: 'ich' },
      { w: 'dir' },
      { w: 'zu' },
      { w: ',', plain: true },
      { w: 'trotz' },
      { w: 'der' },
      { w: 'Kosten' },
      { w: 'lohnt' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Investition' },
      { w: 'langfristig' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'während' },
      { w: 'die' },
      { w: 'Autofahrer' },
      { w: 'sich' },
      { w: 'beschweren' },
      { w: ',', plain: true },
      { w: 'freuen' },
      { w: 'sich' },
      { w: 'die' },
      { w: 'Radfahrer' },
      { w: 'schon' },
      { w: 'jetzt' },
      { w: '.', plain: true },
      { w: 'Gegensätzliche' },
      { w: 'Interessen' },
      { w: 'eben' },
      { w: '—', plain: true },
      { w: 'aber' },
      { w: 'am' },
      { w: 'Ende' },
      { w: 'profitiert' },
      { w: 'die' },
      { w: 'ganze' },
      { w: 'Stadt' },
      { w: 'davon' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was hält Meike vom Radweg?', qEn: 'What does Meike think of the bike path?', options: ['zu teuer und unnötig', 'teuer, aber sinnvoll', 'völlig überflüssig', 'zu billig'], optionsEn: ['too expensive and unnecessary', 'expensive but worthwhile', 'completely superfluous', 'too cheap'], answer: 1,
        explain: '"Der neue Radweg ist zwar teuer, aber meiner Meinung nach absolut sinnvoll."' },
      { q: 'Wer freut sich schon über den Radweg?', qEn: 'Who is already happy about the bike path?', options: ['die Autofahrer', 'die Radfahrer', 'niemand', 'die Politiker'], optionsEn: ['the drivers', 'the cyclists', 'nobody', 'the politicians'], answer: 1,
        explain: '"… freuen sich die Radfahrer schon jetzt."' }
    ]
  },
  speaking: [
    { task: "Timo hält den teuren Radweg für sinnvoll. Stimm mit Einschränkung zu.", taskEn: "Timo thinks the expensive cycle path is worthwhile. Agree with a caveat.", de: "Da stimme ich dir zu; trotz der Kosten lohnt sich die Investition langfristig.", en: "I agree with you; despite the costs the investment pays off long-term." },
    { task: "Bring im Gutachten einen Einwand förmlich vor.", taskEn: "Raise an objection formally in the review.", de: "Die Methode ist überzeugend; allerdings fehlt eine Kontrollgruppe.", en: "The method is convincing; however a control group is missing." },
    { task: "Stell in der Debatte eine ausgewogene Position vor.", taskEn: "Present a balanced position in the debate.", de: "Einerseits sinken die Kosten, andererseits wächst die Abhängigkeit.", en: "On the one hand costs fall, on the other dependence grows." },
    { task: "Halte an deiner Position fest, obwohl die Kritik berechtigt ist.", taskEn: "Hold your position although the criticism is justified.", de: "Nichtsdestotrotz halte ich den Ausbau für richtig.", en: "Nevertheless I consider the expansion right." },
    { task: "Stell zwei Standorte im Vortrag gegenüber.", taskEn: "Contrast two locations in your talk.", de: "Der neue Standort ist teuer; demgegenüber spart der alte kaum Zeit.", en: "The new site is expensive; the old one, by contrast, saves hardly any time." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Replace repetitive connectors with more precise adversative expressions, and explain why each replacement improves the style.\n\nTASK 2 — Argumentative essay (350 words): Use concession, counter-arguments, adversative connectors, and balanced academic style with authentic C1 discourse markers.',
    starters: ['Einerseits bietet die Technologie enorme Chancen, andererseits bestehen erhebliche Risiken.', 'Zwar verbessert die Technologie die Effizienz, aber gleichzeitig steigen die Sicherheitsrisiken.'],
    placeholder: 'Obwohl viele Experten noch diskutieren, wird die Technologie bereits eingesetzt. Dennoch zeigen die Ergebnisse...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which connector expresses concession, not simple contrast?', options: ['obwohl', 'aber', 'jedoch'], answer: 0, explain: '"Obwohl" introduces a concession — a fact that does not prevent the conclusion — distinct from simple contrast.' },
    gap: { sentence: ['', ' bietet die Technologie Chancen, andererseits bestehen Risiken.'], gaps: [ { answer: 'Einerseits', accepts: ['Einerseits'] } ], explain: '"Einerseits...andererseits" is the standard paired structure for balanced academic argumentation.' },
    match: { q: 'Match each connector to its function.', pairs: [ { noun: 'allerdings', art: 'Formal counter-argument' }, { noun: 'obwohl', art: 'Concession' }, { noun: 'einerseits...andererseits', art: 'Balanced discussion' }, { noun: 'demgegenüber', art: 'Scientific contrast' } ] },
    builder: { target: 'Build: "However, opposed to this stands the fact that many jobs are endangered." (formal scientific contrast)', bank: ['Dem', 'steht', 'jedoch', 'entgegen', ',', 'dass', 'viele', 'Arbeitsplätze', 'gefährdet', 'sind', '.'], answer: ['Dem', 'steht', 'jedoch', 'entgegen', ',', 'dass', 'viele', 'Arbeitsplätze', 'gefährdet', 'sind', '.'], roles: { 'Dem': 'r-wissenschaftlicherkontrast', 'steht': 'r-wissenschaftlicherkontrast', 'jedoch': 'r-adversativ', 'entgegen': 'r-wissenschaftlicherkontrast' } },
    errorCorrection: { title: 'Error correction', wrong: 'Aber viele Experten noch diskutieren, aber die Technologie wird eingesetzt.', right: 'Obwohl viele Experten noch diskutieren, wird die Technologie bereits eingesetzt.', explain: '"Aber" cannot introduce a subordinate concessive clause — "obwohl" is required for concession, with the verb moving to the end of the clause.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for adversative expressions?', options: ['Different bridges serve different purposes — choose by the relationship between ideas, not because they all mean "but"', 'All adversative connectors are interchangeable', 'Only use "aber" in formal writing'], answer: 0, explain: 'German offers many distinct connectors, each expressing a different logical relationship.' },
    { q: 'What does "obwohl" express?', options: ['Concession — a fact that does not prevent the conclusion', 'Simple contrast', 'Correction after negation'], answer: 0, explain: '"Obwohl" introduces a concessive subordinate clause, distinct from simple contrast connectors like "aber".' },
    { q: 'What structure is "einerseits...andererseits"?', options: ['Balanced academic argumentation', 'Scientific contrast only', 'Simple correction'], answer: 0, explain: 'This paired structure presents two equally valid sides of an argument.' },
    { q: 'What does "dennoch" imply that "jedoch" does not necessarily?', options: ['Surprise or unexpected persistence', 'Formal register only', 'Correction after negation'], answer: 0, explain: '"Dennoch" often carries a stronger sense of surprise than the more neutral "jedoch".' },
    { q: 'Which connector is typical of formal scientific writing?', options: ['demgegenüber / dem steht...entgegen', 'aber', 'trotzdem (in casual speech)'], answer: 0, explain: 'These formal expressions are characteristic of academic and scientific register.' }
  ],
  takeaways: [
    { c: 'r-adversativ', html: 'Contrast connectors (aber, jedoch, allerdings, hingegen, dennoch) each carry a distinct shade of formality and logical strength.' },
    { c: 'r-konzession', html: 'Concession (obwohl, wenngleich, auch wenn) introduces a fact that does NOT prevent the conclusion — logically distinct from simple contrast.' },
    { c: 'r-balancierteargumentation', html: '"Einerseits...andererseits" and "zwar...aber" are the standard C1 structures for balanced academic argumentation.' }
  ],
  revisionTips: [
    'Take one topic and write three versions of the same argument: one using simple contrast (aber), one using concession (obwohl), one using balanced discussion (einerseits...andererseits).',
    'Find a German opinion article and highlight every adversative expression, noting whether each is contrast, concession, or balanced discussion.',
    'Practise distinguishing "dennoch" from "jedoch" by writing one sentence for each showing the difference in emotional strength.'
  ]
};
window.CHAPTER = CHAPTER;
