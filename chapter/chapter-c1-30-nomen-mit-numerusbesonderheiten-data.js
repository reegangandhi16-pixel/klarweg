/* KLARWEG CHAPTER DATA — C1 · Chapter 30
   "Nomen mit Numerusbesonderheiten" — Singularetantum,
   Pluraletantum, meaning changes between singular/plural
   (Wort/Wörter vs Worte), collective nouns. Number as a lexical
   property, NOT basic plural formation (already mastered).
   Dialogue: Insa and Timo ONLY. */
const CHAPTER = {
  id: 'c1-30-nomen-mit-numerusbesonderheiten',
  phase: 'C1 · Nominalstil & Präzision',
  number: 30,
  title: 'Nomen mit Numerusbesonderheiten',
  titleEn: 'Nouns with special number behavior',
  description: 'Before making a noun plural, always ask: does this noun actually have a plural? Native speakers remember these as lexical properties, not grammar rules.',
  xp: 790, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 31, title: 'Adversativangaben & Gegensätze ausdrücken', titleEn: 'Expressing contrast and opposition precisely' , href: 'chapter-c1-31-adversativangaben-und-gegensaetze-ausdruecken.html' },
  prevChapter: { number: 29, title: 'Verben mit Präfixen sicher unterscheiden', titleEn: 'Confidently distinguishing prefix verb families', href: 'chapter-c1-29-verben-mit-praefixen-sicher-unterscheiden.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Number is a <em>lexical property</em>, not just a grammar rule.',
    intro: 'Reviewing official documents for a research project, Insa notes the costs are high and the staff too few, while Timo realizes a single word is missing from the form — nouns that exist only in singular, only in plural, or that shift meaning with number.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Singularetantum, Pluraletantum, and meaning-shifting plurals used correctly in context'],
    scene: 'Vorbereitung eines Forschungsprojekts und Durchsicht amtlicher Dokumente',
    femaleSpeakers: ['Insa'],
    dialogue: [
      { speaker: 'Insa', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem., singular form)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Forschung', role: 'r-subject', en: 'research', hi: 'शोध', pron: 'FOR-shung', type: 'Noun · fem. (nur Singular)', why: 'die Forschung has no plural, unlike English "researches" (this chapter).', ex: 'Die Forschung läuft gut.', exEn: 'The research is going well.' },
        { w: 'läuft', role: 'r-verb', en: 'is going', hi: 'चल रही है', pron: 'LOYFT', type: 'Verb · laufen' },
        { w: 'gut', role: 'r-akkusativ', en: 'well', hi: 'अच्छी', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The research is going well.', hi: 'Shodh achhi chal rahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (pl., plural form)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Kosten', role: 'r-subject', en: 'costs', hi: 'लागत', pron: 'KOS-ten', type: 'Noun · plural (nur Plural)', why: 'die Kosten has no singular form, unlike English "cost" (this chapter).', ex: 'Die Kosten sind hoch.', exEn: 'The costs are high.' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein' },
        { w: 'hoch', role: 'r-akkusativ', en: 'high', hi: 'ज़्यादा', pron: 'hokh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'But the costs are high.', hi: 'Lekin lagat zyada hai.' },
      { speaker: 'Insa', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'mehr', role: 'r-akkusativ', en: 'more', hi: 'ज़्यादा', pron: 'mair', type: 'Determiner' },
        { w: 'Personal', role: 'r-akkusativ', en: 'staff', hi: 'कर्मचारी', pron: 'per-zo-NAHL', type: 'Noun · neut. (Kollektivum, meist Singular)', why: 'das Personal = staff, a collective noun typically used in singular (this chapter).', ex: 'Wir brauchen mehr Personal.', exEn: 'We need more staff.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Projekt', role: 'r-akkusativ', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'We need more staff for the project.', hi: 'Humein pariyojana ke liye zyada karmachari chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem./pl., plural form)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Unterlagen', role: 'r-akkusativ', en: 'documents', hi: 'दस्तावेज़', pron: 'UN-ter-lah-gen', type: 'Noun · plural (meist Plural)', why: 'die Unterlagen typically appears in plural for "documents/papers" (recycled B2).', ex: 'die Unterlagen prüfen' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'vorbereitet', role: 'r-verb', en: 'prepared', hi: 'तैयार', pron: 'FOR-be-ry-tet', type: 'Adjective' },
        { w: '?', plain: true }
      ], en: 'Have you already prepared the documents?', hi: 'Kya tumne pehle se dastaavez taiyaar kar liye hain?' },
      { speaker: 'Insa', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ein', role: 'r-subject', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut.' },
        { w: 'einziges', role: 'r-subject', en: 'single', hi: 'एक ही', pron: 'INE-tsi-ges', type: 'Adjective' },
        { w: 'Wort', role: 'r-subject', en: 'word', hi: 'शब्द', pron: 'vort', type: 'Noun · neut. (Sing. "Wort" = einzelnes Wort, Pl. "Wörter" = einzelne Wörter, Pl. "Worte" = zusammenhängende Rede)', why: 'das Wort (singular) means a single word; die Wörter means individual words; die Worte means a connected speech/utterance (this chapter).', ex: 'Ein einziges Wort fehlt.', exEn: 'A single word is missing.' },
        { w: 'fehlt', role: 'r-verb', en: 'is missing', hi: 'कम है', pron: 'faylt', type: 'Verb · fehlen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. A single word is missing.', hi: 'Haan. Ek hi shabd kam hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welches', role: 'r-akkusativ', en: 'which (neut.)', hi: 'कौनसा', pron: 'VEL-khes', type: 'Question word' },
        { w: 'Wort', role: 'r-akkusativ', en: 'word', hi: 'शब्द', pron: 'vort', type: 'Noun · neut.' },
        { w: 'meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Which word do you mean?', hi: 'Tumhaara kaunsa shabd matlab hai?' },
      { speaker: 'Insa', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'letzten', role: 'r-akkusativ', en: 'last', hi: 'आख़िरी', pron: 'LETS-ten', type: 'Adjective' },
        { w: 'Worte', role: 'r-akkusativ', en: 'words (as a speech)', hi: 'शब्द', pron: 'VOR-tuh', type: 'Noun · plural (zusammenhängende Rede)', why: 'die letzten Worte = a final connected utterance (this chapter).', ex: 'die letzten Worte des Vorschlags' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Vorschlags', role: 'r-dativ', en: 'proposal (gen.)', hi: 'सुझाव के', pron: 'FOR-shlahks', type: 'Noun · masc. genitive' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen' },
        { w: 'ergänzt', role: 'r-verb', en: 'completed', hi: 'पूरा किया जाना', pron: 'er-GENTST', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: '', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: '.', plain: true }
      ], en: 'The last words of the proposal must be completed.', hi: 'Sujhaav ke aakhri shabdon ko poora karna hoga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Before making a noun plural, always ask: <b>does this noun actually have a plural?</b> Native speakers remember <span class="de r-singularetantum">Singularetantum</span> and <span class="de r-pluraletantum">Pluraletantum</span> as lexical properties, not grammar rules.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is NOMEN MIT NUMERUSBESONDERHEITEN at C1 level — nouns whose singular/plural behavior is a lexical property, NOT basic plural formation, gender rules, or declension (already mastered). Covered: Singularetantum (nouns existing only in singular: der Hunger, die Gesundheit, der Fortschritt, die Forschung, das Wissen, der Verkehr, die Musik, der Lärm — mostly abstract/uncountable concepts); Pluraletantum (nouns existing only in plural: die Eltern, die Kosten, die Ferien, die Leute, die Lebensmittel, die Finanzen, die Personalien, die Tropen); nouns whose meaning changes between singular and plural (das Glas/die Gläser = drinking glass vs. das Glas as material; das Wort → die Wörter for individual/countable words vs. die Worte for connected/meaningful words like a speech; das Gehalt/die Gehälter = salary; das Gut/die Güter = goods; die Bank/die Banken = financial bank, vs. die Bank/die Bänke = bench); collective nouns taking singular agreement despite plural meaning (das Personal, die Bevölkerung, die Mannschaft, das Publikum, die Belegschaft); register-specific number patterns in academic (die Forschung, das Wissen, die Erkenntnis), scientific (die Daten, die Messwerte, die Befunde), administrative (die Personalien, die Unterlagen, die Finanzen), and journalistic (die Behörden, die Ermittlungen, die Opfer) German. Do NOT expect or require basic plural ending rules or gender assignment — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: pluralizing a Singularetantum (e.g. "Forschungen" used incorrectly for the abstract sense, "Wissene"); using a singular form of a Pluraletantum (e.g. "der Elter", "die Koste"); confusing "Wörter" and "Worte" (individual vs. connected words); wrong verb agreement with collective nouns (should be singular); direct literal translation from English plural patterns. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag incorrect pluralization of Singularetantum nouns; flag incorrect singularization of Pluraletantum nouns; flag confusion between Wörter/Worte or other meaning-changing plurals; check collective nouns take singular verb agreement. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Number check:</b> one sentence on whether the learner treated German noun number as a lexical property rather than a purely grammatical choice.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you treat German noun number as a lexical property, like a native speaker. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Number Logic Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: before pluralizing any noun, ask whether it actually has a plural.' },
  parserSentence: [ { w: 'Meine', role: 'plain' }, { w: 'Eltern', role: 'r-pluraletantum' }, { w: 'haben', role: 'plain' }, { w: 'ein', role: 'plain' }, { w: 'Wort', role: 'r-bedeutungswechsel' }, { w: 'gesagt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: German noun number is often a lexical property, not just a grammar rule.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Insa and Timo prepare a research project, naturally using Singularetantum, Pluraletantum, and meaning-shifting plurals.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key number-restricted nouns — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master Singularetantum, Pluraletantum, meaning-changing plurals, and collective noun agreement.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific article and a government report, identifying singular-only, plural-only, and collective nouns.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify number-specific nouns and agreement in a university seminar and administrative briefing.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present research and discuss statistics using nouns with correct number behavior naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Correct singular/plural errors, and write a 350-word academic article using all number categories correctly.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill Singularetantum/Pluraletantum identification and meaning-change (singular vs plural) selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 790 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Singularetantum/Pluraletantum identification drills, meaning-change practice, and a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Number Logic Model, Usage Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Unsere Forschung braucht noch mehr Daten.', text: 'Recognize "die Forschung" as a Singularetantum with no natural plural' },
    { de: 'Zuerst müssen wir die Kosten klären.', text: 'Recognize "die Kosten" as a Pluraletantum with no natural singular' },
    { de: 'Meine Eltern haben ein Wort gesagt.', text: 'Use "die Wörter" for individual, countable words' },
    { de: 'Er wählte sehr bewegende Worte.', text: 'Distinguish "die Worte" for connected, meaningful words' },
    { de: 'Das Personal des Instituts ist sehr hilfsbereit.', text: 'Use correct singular verb agreement with a collective noun' }
  ],
  vocab: [
    { de: 'die Forschung', art: 'die', gender: 'f', plural: '— (Singularetantum)', pos: 'noun', level: 'C1', register: 'written', en: 'research', hi: 'शोध', ex: 'Unsere Forschung braucht noch mehr Daten.', exEn: 'Our research still needs more data.', exHi: 'Hamaare shodh ko abhi bhi zyaada data chahiye.', ex2: 'Die Forschung in diesem Bereich hat sich stark entwickelt.', ex2En: 'Research in this field has developed strongly.', ex2Hi: 'Iss kshetra mein shodh ne bahut vikaas kiya hai.' },
    { de: 'die Kosten', art: 'die', gender: 'plural', plural: '(Pluraletantum)', pos: 'noun', level: 'C1', register: 'both', en: 'costs', hi: 'खर्च', ex: 'Zuerst müssen wir die Kosten klären.', exEn: 'First we must clarify the costs.', exHi: 'Pehle hamein kharch spasht karne honge.', ex2: 'Die Kosten für das Projekt sind gestiegen.', ex2En: 'The costs for the project have risen.', ex2Hi: 'Project ke liye kharch badh gaya hai.' },
    { de: 'das Wort / die Wörter / die Worte', art: 'das', gender: 'n', plural: 'Wörter (countable) / Worte (connected)', pos: 'noun', level: 'C1', register: 'both', en: 'word / words', hi: 'शब्द', ex: 'Meine Eltern haben ein Wort gesagt.', exEn: 'My parents have said a word.', exHi: 'Mere maa-baap ne ek shabd kaha hai.', ex2: 'Er wählte sehr bewegende Worte.', ex2En: 'He chose very moving words.', ex2Hi: 'Usne bahut bhaavuk baatein chuni.' },
    { de: 'das Personal', art: 'das', gender: 'n', plural: '— (Kollektivum)', pos: 'noun (collective)', level: 'C1', register: 'written', en: 'staff, personnel', hi: 'कर्मचारी (सामूहिक)', ex: 'Das Personal des Instituts ist sehr hilfsbereit.', exEn: 'The staff of the institute is very helpful.', exHi: 'Institute ka staff bahut sahayak hai.', ex2: 'Das Personal wurde über die Änderungen informiert.', ex2En: 'The staff was informed about the changes.', ex2Hi: 'Staff ko badlaavon ke baare mein soochit kiya gaya.' },
    { de: 'die Unterlagen', art: 'die', gender: 'plural', plural: '(Pluraletantum, administrativ)', pos: 'noun', level: 'C1', register: 'written', en: 'documents', hi: 'दस्तावेज़', ex: 'Wir können die Unterlagen zusammen einreichen.', exEn: 'We can submit the documents together.', exHi: 'Hum dastaavez ek saath jama kar sakte hain.', ex2: 'Bitte reichen Sie alle Unterlagen vollständig ein.', ex2En: 'Please submit all documents completely.', ex2Hi: 'Kripya sabhi dastaavez poori tarah jama karein.' }
  ],
  grammar: [
    { title: 'Numerus verstehen (Understanding Numerus)', body: [ 'Noun → Lexical Meaning → Number → Context → Correct Usage. Some nouns naturally exist only in one number — this is a lexical property, not simply a grammatical rule.' ], hinglish: 'Kuch nouns sirf singular mein aate hain aur kuch sirf plural mein \u2014 aur yeh koi rule nahi hai jise tum nikaal sako, yeh shabd ki apni property hai. Isliye inhe vocabulary ki tarah yaad karna padta hai, aur sabse zaroori yeh hai ki verb sahi lage.' },
    { title: 'Singularetantum (Singular-only Nouns)', body: [ 'der Hunger, die Gesundheit, der Fortschritt, die Forschung, das Wissen, der Verkehr, die Musik, der Lärm. Plural is impossible or extremely rare for these abstract/uncountable concepts.' ], hinglish: 'Yeh abstract cheezein hain, isliye inka plural nahi banta \u2014 <span class="de">die Forschung</span>, <span class="de">das Wissen</span>, <span class="de">der Fortschritt</span>. English mein bhi \u201cknowledges\u201d nahi kehte, to yeh samajhna aasaan hai. Verb hamesha singular: <span class="de">Die Forschung <b>zeigt</b> \u2026</span>' },
    { title: 'Pluraletantum (Plural-only Nouns)', body: [ 'die Eltern, die Kosten, die Ferien, die Leute, die Lebensmittel, die Finanzen, die Personalien, die Tropen. These exist only in the plural — the singular form either does not exist or means something entirely different.' ], hinglish: 'Yeh hamesha plural mein rehte hain, aur inka verb bhi plural hi hoga \u2014 <span class="de">Die Kosten <b>sind</b> hoch</span>, <span class="de">Die Eltern <b>haben</b> \u2026</span>. <i>Der Elter</i> ya <i>die Koste</i> jaisa kuch hota hi nahi. Dhyaan do ki <b>die Ferien</b> plural hai jabki English \u201choliday\u201d singular ho sakta hai.' },
    { title: 'Bedeutungswechsel (Meaning Changes with Number)', body: [ 'das Glas → die Gläser (drinking glasses) vs. das Glas (material). das Wort → die Wörter (individual, countable words) vs. die Worte (connected, meaningful words). das Gehalt → die Gehälter (salaries). das Gut → die Güter (goods). die Bank → die Banken (financial banks).' ], hinglish: 'Kuch nouns ke do plural hote hain, aur plural hi batata hai ki matlab kya hai. Sabse important jodi: <b>W\u00f6rter</b> matlab alag-alag shabd jo gine jaa sakte hain (<span class="de">500 W\u00f6rter</span>), aur <b>Worte</b> matlab kisi ki kahi hui baat (<span class="de">seine Worte</span>). Isi tarah <b>Glas</b> material hai par <b>Gl\u00e4ser</b> peene ke glass. Aur <b>Bank</b> ke do plural hain \u2014 <b>Banken</b> (bank) aur <b>B\u00e4nke</b> (bench).' },
    { title: 'Kollektiva (Collective Nouns)', body: [ 'das Personal, die Bevölkerung, die Mannschaft, das Publikum, die Belegschaft — these take singular verb agreement despite referring to many people or things.' ], hinglish: 'Yeh shabd kai logon ko batate hain par grammar mein singular hain \u2014 isliye verb bhi singular: <span class="de">Das Personal <b>ist</b> informiert</span>, <span class="de">Die Bev\u00f6lkerung <b>w\u00e4chst</b></span>. English mein \u201cthe team are\u201d chal jaata hai, par German mein nahi. Aur ek trap yaad rakho \u2014 <b>die Leute</b> collective nahi hai, woh plural hai: <span class="de">Die Leute sind \u2026</span>' },
    { title: 'Register-spezifische Nummernmuster', body: [ 'Har register ke apne number-patterns hain. Academic writing mein singular-only shabd aate hain (<b>Forschung</b>, <b>Wissen</b>), aur scientific writing mein plural (<b>Daten</b>, <b>Befunde</b>) \u2014 isliye wahan <span class="de">die Daten <b>sind</b></span> likhna padta hai. Official texts mein <b>Unterlagen</b> aur <b>Finanzen</b>, aur news mein <b>Beh\u00f6rden</b> aur <b>Ermittlungen</b> \u2014 yeh sab plural hain.' ], hinglish: 'Har register ke apne number-patterns hain. Academic writing mein singular-only shabd aate hain (<b>Forschung</b>, <b>Wissen</b>), aur scientific writing mein plural (<b>Daten</b>, <b>Befunde</b>) \u2014 isliye wahan <span class="de">die Daten <b>sind</b></span> likhna padta hai. Official texts mein <b>Unterlagen</b> aur <b>Finanzen</b>, aur news mein <b>Beh\u00f6rden</b> aur <b>Ermittlungen</b> \u2014 yeh sab plural hain.' },
    {
      title: 'Verbkongruenz: der eigentliche Test',
      body: [
        'Knowing that a noun is Pluraletantum or a collective only matters if the verb agrees correctly \u2014 and that is where the marks are lost.',
        'The rule is purely grammatical: it follows the FORM of the noun, not how many people or things it refers to.'
      ],
      table: {
        head: ['Noun type', 'Verb', 'Example'],
        rows: [
          ['Pluraletantum', '<b>plural</b>', '<span class="de">Die Kosten <b>sind</b> hoch.</span> \u2014 <span class="de">Die Eltern <b>haben</b> \u2026</span>'],
          ['collective noun', '<b>singular</b>', '<span class="de">Das Personal <b>ist</b> \u2026</span> \u2014 <span class="de">Die Bev\u00f6lkerung <b>w\u00e4chst</b>.</span>'],
          ['Singularetantum', '<b>singular</b>', '<span class="de">Die Forschung <b>zeigt</b> \u2026</span>'],
          ['Daten, Medien, Fakten', '<b>plural</b>', '<span class="de">Die Daten <b>sind</b> vollst\u00e4ndig.</span>'],
          ['die Leute', '<b>plural</b>', '<span class="de">Die Leute <b>warten</b>.</span>']
        ]
      },
      note: 'The trap: <b>die Leute</b> is plural but <b>das Publikum</b> is singular, though both mean a group of people. Form decides, not meaning \u2014 <span class="de">Die Leute sind \u2026</span> but <span class="de">Das Publikum ist \u2026</span>',
      hinglish: 'Yeh jaan lena ki koi noun Pluraletantum hai ya collective, tabhi kaam ka hai jab verb sahi lage \u2014 aur marks yahin katte hain. Rule poori tarah grammatical hai: verb noun ki <b>form</b> dekhta hai, yeh nahi ki kitne log hain. Isliye <span class="de">Die Kosten <b>sind</b> hoch</span> (Pluraletantum, plural verb), par <span class="de">Das Personal <b>ist</b> informiert</span> (collective, singular verb) \u2014 chahe Personal mein bees log hon. Sabse badi trap: <b>die Leute</b> plural hai par <b>das Publikum</b> singular, jabki dono ka matlab log hi hai. Aur <b>Daten</b>, <b>Medien</b>, <b>Fakten</b> plural hain \u2014 <span class="de">die Daten sind</span>, na ki <i>ist</i>.'
    },
    { title: 'Meister-Tabelle', body: [ 'Type mapped to examples and typical register.' ], table: { head: ['Type', 'Examples — Typical Register'], rows: [ ['Singularetantum', 'Wissen, Forschung — Academic'], ['Pluraletantum', 'Eltern, Kosten — Everyday/Formal'], ['Collective Nouns', 'Personal, Bevölkerung — Administrative'], ['Meaning Changes', 'Wort/Wörter/Worte — All Registers'] ] }, hinglish: 'Type, examples aur register ka table \u2014 par sabse zaroori column woh hai jo batata hai ki verb singular hoga ya plural.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are verb agreement \u2014 the single most visible number error \u2014 and two are meaning pairs where the plural itself changes what the word refers to.' ], mistakes: [
      { wrong: 'Die Forschungen zeigen, dass das Wissen w\u00e4chst.', right: 'Die Forschung zeigt, dass das Wissen w\u00e4chst.', why: '<b>Forschung</b> as an abstract activity has no plural. (<i>Forschungen</i> exists, but only meaning several separate research projects.)' },
      { wrong: 'Die Kosten ist zu hoch und die Eltern hat zugestimmt.', right: 'Die Kosten sind zu hoch und die Eltern haben zugestimmt.', why: 'Pluraletantum are grammatically plural, so the verb must be plural too \u2014 <b>sind</b>, <b>haben</b>.' },
      { wrong: 'Der Text hat 500 Worte, und seine W\u00f6rter haben mich ber\u00fchrt.', right: 'Der Text hat 500 W\u00f6rter, und seine Worte haben mich ber\u00fchrt.', why: '<b>W\u00f6rter</b> = individual words you can count. <b>Worte</b> = words as connected, meaningful speech.' },
      { wrong: 'Das Personal sind informiert worden.', right: 'Das Personal ist informiert worden.', why: '<b>Personal</b> is grammatically singular even though it refers to many people \u2014 so the verb is <b>ist</b>.' },
      { wrong: 'Die Information\u200bs waren hilfreich und die Daten ist vollst\u00e4ndig.', right: 'Die Informationen waren hilfreich und die Daten sind vollst\u00e4ndig.', why: 'German builds its own plural (<b>Informationen</b>, not an English <i>-s</i>), and <b>Daten</b> is plural \u2014 so it takes <b>sind</b>.' },
      { wrong: 'Das Glas war leer, also habe ich alle Glas gesp\u00fclt.', right: 'Das Glas war leer, also habe ich alle Gl\u00e4ser gesp\u00fclt.', why: '<b>Glas</b> as a material has no plural, but <b>Gl\u00e4ser</b> as countable drinking glasses does. The plural marks which meaning you intend.' }
    ], hinglish: 'Chaar galtiyan verb agreement ki hain \u2014 aur yahi sabse zyada dikhti hai. Baaki do meaning-pairs ki hain, jahan plural badalne se shabd ka matlab hi badal jaata hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to use a noun? Check whether it has only singular, only plural, or both. If both: check whether the meaning changes. Choose the correct form.' ], note: 'Memory trick: before making a noun plural, always ask "does this noun actually have a plural?" — native speakers remember these as lexical properties, not grammar rules.', hinglish: 'Noun use karne se pehle poochho \u2014 iska sirf singular hai, sirf plural, ya dono? Agar dono hain to dekho ki plural badalne se matlab to nahi badal raha (<b>W\u00f6rter</b> vs <b>Worte</b>). Aur sabse aakhir mein verb check karo \u2014 <b>Kosten sind</b>, par <b>Personal ist</b>.' }
  ],
  reading: {
    title: 'Medizinreport: Fortschritte in der Alzheimer-Forschung',
    titleEn: 'Reading A — Medical report: progress in Alzheimer\'s research',
    tokens: [
      { w: 'Das', role: 'r-singularetantum', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Wissen', role: 'r-singularetantum', en: 'knowledge (Singularetantum, Satzende)', hi: 'ज्ञान (Singularetantum, Satzende)', type: 'Noun · neut. (Satzende)', why: '"Das Wissen" is a Singularetantum — it has no plural form even though the amount referred to can grow (this chapter).' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Präposition · Akk.' },
      { w: 'diese', role: 'plain', en: 'this (fem. akk.)', hi: 'इस', type: 'Demonstrativpronomen · Akk.' },
      { w: 'Krankheit', role: 'plain', en: 'disease (Satzende)', hi: 'बीमारी (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'बढ़ रहा है', type: 'Verb (Präsens)' },
      { w: 'stetig', role: 'plain', en: 'steadily (Satzende)', hi: 'लगातार (Satzende)', type: 'Adverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Befunde', role: 'plain', en: 'findings (Satzende, scientific register)', hi: 'निष्कर्ष (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'एक', type: 'Article · Gen.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective · Gen.' },
      { w: 'Langzeitstudie', role: 'plain', en: 'long-term study (Satzende)', hi: 'दीर्घकालिक अध्ययन (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'stimmen', role: 'plain', en: 'agree', hi: 'मेल खाते हैं', type: 'Verb (Präsens)' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Präposition · Dat.' },
      { w: 'früheren', role: 'plain', en: 'earlier', hi: 'पहले के', type: 'Adjective · Dat.' },
      { w: 'Daten', role: 'r-pluraletantum', en: 'data (Pluraletantum, Satzende)', hi: 'आँकड़ों (Pluraletantum, Satzende)', type: 'Noun · plural (Satzende)', why: '"Die Daten" behaves almost like a Pluraletantum in scientific German — a singular "das Datum" is rarely used in this sense (this chapter).' },
      { w: 'überein', role: 'plain', en: '(part of "übereinstimmen", trennbar, Satzende)', hi: '(Satzende)', type: 'Partikel · trennbar (Satzende)' },
      { w: '.', plain: true },
      { w: 'Auffällig', role: 'plain', en: 'notably', hi: 'ख़ास तौर पर', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'dabei', role: 'plain', en: 'in this regard', hi: 'इसमें', type: 'Adverb' },
      { w: 'vor', role: 'plain', en: 'above all', hi: 'सबसे ज़्यादा', type: 'Adverbiale' },
      { w: 'allem', role: 'plain', en: '(Satzende, part of "vor allem")', hi: '', type: 'Pronomen (Satzende)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Rückgang', role: 'plain', en: 'decline (Satzende)', hi: 'गिरावट (Satzende)', type: 'Noun · masc.' },
      { w: 'bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'jüngeren', role: 'plain', en: 'younger', hi: 'युवा', type: 'Adjective · Dat.' },
      { w: 'Patienten', role: 'plain', en: 'patients (Satzende)', hi: 'मरीज़ों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Knowledge about this disease is steadily growing. The findings of a new long-term study agree with earlier data. Notably striking here is above all the decline in younger patients.',
    comprehension: [
      { q: 'Was für eine Art Nomen ist "das Wissen"?', options: ['Singularetantum', 'Pluraletantum', 'Kollektivum'], answer: 0 },
      { q: 'Warum hat "das Wissen" keinen Plural in diesem Sinne?', options: ['Es ist eine lexikalische Eigenschaft des Nomens', 'Zufall', 'Grammatikfehler'], answer: 0 },
      { q: 'Welches Register verwendet häufig "die Befunde" und "die Daten"?', options: ['Wissenschaftliches Deutsch', 'Umgangssprache', 'Poesie'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Behördenbericht', titleEn: 'Reading B — Government report',
    tokens: [
      { w: 'Die', role: 'r-pluraletantum', en: 'the (plural nom.)', hi: 'ye', type: 'Article' },
      { w: 'Personalien', role: 'r-pluraletantum', en: 'personal details (Pluraletantum, administrative, Satzende)', hi: 'vyaktigat vivaran (Pluraletantum, Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'aller', role: 'plain', en: 'of all (plural gen.)', hi: 'sabhi', type: 'Pronomen · Gen.' },
      { w: 'Beteiligten', role: 'plain', en: 'those involved (Satzende, substantivized Partizip II)', hi: 'shaamil logon ki (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'wurden', role: 'plain', en: 'were', hi: '', type: 'Verb · werden (Präteritum)' },
      { w: 'überprüft', role: 'plain', en: 'checked (Satzende)', hi: 'jaanchi gayi (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Das', role: 'r-kollektivum', en: 'the (neut. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Personal', role: 'r-kollektivum', en: 'staff (collective noun, Satzende)', hi: 'staff (collective noun, Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'hat', role: 'r-kollektivum', en: 'has (singular agreement with collective noun)', hi: 'ne (singular agreement)', type: 'Verb · haben (Präsens)' },
      { w: 'alle', role: 'plain', en: 'all', hi: 'sabhi', type: 'Pronomen · Akk.' },
      { w: 'Unterlagen', role: 'r-pluraletantum', en: 'documents (Pluraletantum, Satzende)', hi: 'dastaavez (Pluraletantum, Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'bearbeitet', role: 'plain', en: 'processed (Satzende)', hi: 'process kiye (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The personal details of all those involved were checked. The staff has processed all documents.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_030_L001', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, die Kosten für dieses Projekt sind wirklich hoch, und das Personal ist viel zu knapp.', en: 'Timo, the costs for this project are really high, and the staff is far too scarce.' },
      { id: 'C1_030_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt. Moment, mir fehlt hier ein Wort im Formular — an dieser Stelle sollte "die Angaben" stehen.', en: 'True. Wait, I\'m missing a word here on the form — "the details" should be here.' },
      { id: 'C1_030_L003', speaker: 'Insa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Gut erkannt, ohne das würde die Behörde den Antrag sicher zurückschicken.', en: 'Good catch, without that the authority would surely send the application back.' },
      { id: 'C1_030_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann ergänze ich es gleich, bevor wir es einreichen.', en: 'Then I\'ll add it right away before we submit it.' }
    ],
    transcript: 'Timo, die Kosten für dieses Projekt sind wirklich hoch, und das Personal ist viel zu knapp. Stimmt. Moment, mir fehlt hier ein Wort im Formular — an dieser Stelle sollte "die Angaben" stehen. Gut erkannt, ohne das würde die Behörde den Antrag sicher zurückschicken. Dann ergänze ich es gleich, bevor wir es einreichen.',
    translation: 'Timo, the costs for this project are really high, and the staff is far too scarce. True. Wait, I\'m missing a word here on the form — "the details" should be here. Good catch, without that the authority would surely send the application back. Then I\'ll add it right away before we submit it.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Kosten' },
      { w: 'für' },
      { w: 'dieses' },
      { w: 'Projekt' },
      { w: 'sind' },
      { w: 'wirklich' },
      { w: 'hoch' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'das' },
      { w: 'Personal' },
      { w: 'ist' },
      { w: 'viel' },
      { w: 'zu' },
      { w: 'knapp' },
      { w: '.', plain: true },
      { w: 'Stimmt' },
      { w: '.', plain: true },
      { w: 'Moment' },
      { w: ',', plain: true },
      { w: 'mir' },
      { w: 'fehlt' },
      { w: 'hier' },
      { w: 'ein' },
      { w: 'Wort' },
      { w: 'im' },
      { w: 'Formular' },
      { w: '—', plain: true },
      { w: 'an' },
      { w: 'dieser' },
      { w: 'Stelle' },
      { w: 'sollte' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'Angaben' },
      { w: '"', plain: true },
      { w: 'stehen' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: 'erkannt' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'das' },
      { w: 'würde' },
      { w: 'die' },
      { w: 'Behörde' },
      { w: 'den' },
      { w: 'Antrag' },
      { w: 'sicher' },
      { w: 'zurückschicken' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'ergänze' },
      { w: 'ich' },
      { w: 'es' },
      { w: 'gleich' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'es' },
      { w: 'einreichen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was sagt Insa über das Personal?', qEn: 'What does Insa say about the staff?', options: ['es ist ausreichend', 'es ist viel zu knapp', 'es ist zu groß', 'es fehlt komplett'], optionsEn: ['it is sufficient', 'it is far too tight', 'it is too big', 'it is missing entirely'], answer: 1,
        explain: '"Das Personal ist viel zu knapp."' },
      { q: 'Was fehlt im Formular?', qEn: 'What is missing from the form?', options: ['eine Unterschrift', 'ein Wort ("die Angaben")', 'ein Foto', 'ein Stempel'], optionsEn: ['a signature', 'one word ("die Angaben")', 'a photo', 'a stamp'], answer: 1,
        explain: '"Mir fehlt hier ein Wort im Formular — \'die Angaben\'."' }
    ]
  },
  speaking: [
    { task: "Begründe im Antrag den Wert deines Vorhabens.", taskEn: "Justify the value of your project in the proposal.", de: "Die Forschung zu diesem Thema ist dünn, und das Wissen über Langzeitfolgen fehlt.", en: "Research on this topic is thin, and knowledge about long-term effects is lacking." },
    { task: "Ein Kollege fragt, wie es um Geld und Papiere steht.", taskEn: "A colleague asks how things stand with money and paperwork.", de: "Die Kosten sind gedeckt, und die Unterlagen liegen dem Amt vor.", en: "The costs are covered, and the documents are with the authority." },
    { task: "Du korrigierst mit einem Freund einen Text. Er fragt: Warum steht hier „Worte“ und nicht „Wörter“?", taskEn: "You're correcting a text with a friend. He asks: why does it say “Worte” and not “Wörter”?", de: "Hier geht es um die Worte einer Person, nicht um einzelne Wörter.", en: "Here it's about a person's words, not about individual words." },
    { task: "Berichte über die Personalsituation.", taskEn: "Report on the staffing situation.", de: "Das Personal ist überlastet und arbeitet seit Monaten in Unterbesetzung.", en: "The staff is overworked and has been understaffed for months." },
    { task: "Die Leitung fragt, was das Projekt am dringendsten braucht.", taskEn: "Management asks what the project most urgently needs.", de: "Die Forschung braucht Zeit, die Kosten steigen, und das Personal fehlt.", en: "The research needs time, the costs are rising, and staff are missing." }
  ],
  writing: {
    prompt: 'TASK 1 — Error correction (150 words): Correct incorrect singular/plural usage and explain every correction.\n\nTASK 2 — Academic article (350 words): Use singular-only nouns, plural-only nouns, collective nouns, and academic vocabulary in authentic C1 style.',
    starters: ['Unsere Forschung braucht noch mehr Daten.', 'Das Personal des Instituts ist sehr hilfsbereit.'],
    placeholder: 'Die Kosten für das Projekt sind gestiegen. Die Bevölkerung wächst weiter...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which noun is a Singularetantum?', options: ['die Forschung', 'die Eltern', 'die Kosten'], answer: 0, explain: '"Die Forschung" (research) has no natural plural in its abstract sense — a Singularetantum.' },
    gap: { sentence: ['Zuerst müssen wir die ', ' klären.'], gaps: [ { answer: 'Kosten', accepts: ['Kosten'] } ], explain: '"Die Kosten" is a Pluraletantum — it always appears in the plural form.' },
    match: { q: 'Match each noun to its number category.', pairs: [ { noun: 'das Wissen', art: 'Singularetantum' }, { noun: 'die Eltern', art: 'Pluraletantum' }, { noun: 'das Personal', art: 'Kollektivum' }, { noun: 'die Wörter / die Worte', art: 'Bedeutungswechsel' } ] },
    builder: { target: 'Build: "The staff of the institute is very helpful." (collective noun, singular agreement)', bank: ['Das', 'Personal', 'des', 'Instituts', 'ist', 'sehr', 'hilfsbereit', '.'], answer: ['Das', 'Personal', 'des', 'Instituts', 'ist', 'sehr', 'hilfsbereit', '.'], roles: { 'Personal': 'r-kollektivum', 'ist': 'r-kollektivum' } },
    errorCorrection: { title: 'Error correction', wrong: 'Meine Elter hat ein Wort gesagt.', right: 'Meine Eltern haben ein Wort gesagt.', explain: '"Die Eltern" is a Pluraletantum with no natural singular form ("der/die Elter" does not exist in standard usage) and takes plural verb agreement.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for noun number?', options: ['Before pluralizing, ask "does this noun actually have a plural?"', 'All German nouns can be freely pluralized', 'Number rules are identical to English'], answer: 0, explain: 'Number in German is often a lexical property of the noun, not simply a grammatical rule.' },
    { q: 'What is "die Eltern" an example of?', options: ['Pluraletantum', 'Singularetantum', 'Kollektivum'], answer: 0, explain: '"Die Eltern" (parents) has no natural singular form — a Pluraletantum.' },
    { q: 'What is the difference between "die Wörter" and "die Worte"?', options: ['"Wörter" = individual/countable words; "Worte" = connected/meaningful words', 'They are completely interchangeable', '"Wörter" is formal, "Worte" is informal'], answer: 0, explain: 'This is one of the most important C1 meaning-changing plurals to master.' },
    { q: 'What verb agreement do collective nouns like "das Personal" take?', options: ['Singular', 'Plural', 'Either is equally correct'], answer: 0, explain: 'Collective nouns agree as singular despite referring to many people or things.' },
    { q: 'Which register commonly uses "die Personalien" and "die Unterlagen"?', options: ['Administrative German', 'Casual conversation', 'Poetry'], answer: 0, explain: 'These Pluraletantum nouns are typical of official, administrative German.' }
  ],
  takeaways: [
    { c: 'r-singularetantum', html: 'Singularetantum (die Forschung, das Wissen) exist only in the singular — mostly abstract, uncountable concepts.' },
    { c: 'r-pluraletantum', html: 'Pluraletantum (die Eltern, die Kosten, die Unterlagen) exist only in the plural — the singular form is absent or means something else.' },
    { c: 'r-bedeutungswechsel', html: 'Some nouns shift meaning entirely with number (das Wort → die Wörter vs. die Worte) — number is a lexical property to memorize per noun.' }
  ],
  revisionTips: [
    'Make two lists — Singularetantum and Pluraletantum — and add five more nouns to each from your own reading.',
    'Write two sentences using "Wörter" and two using "Worte" to fix the meaning distinction firmly in memory.',
    'Find a German administrative document and circle every Pluraletantum you can identify (Kosten, Finanzen, Unterlagen, Personalien).'
  ]
};
window.CHAPTER = CHAPTER;
