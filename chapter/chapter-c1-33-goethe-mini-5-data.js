/* KLARWEG CHAPTER DATA — C1 · Chapter 33 — Goethe Mini 5
   Revision checkpoint covering Chapters 29-32 ONLY:
   Verben mit Präfixen, Nomen mit Numerusbesonderheiten,
   Adversativangaben & Gegensätze, Kohärenz & Textverknüpfung.
   NO new grammar/vocabulary. Dialogue: Doreen and Timo ONLY. */
const CHAPTER = {
  id: 'c1-33-goethe-mini-5',
  phase: 'C1 · Nominalstil & Präzision',
  number: 33,
  title: 'Goethe Mini 5',
  titleEn: 'Checkpoint: Chapters 29–32',
  description: 'Well-structured academic German combines precise prefix verbs, correct noun number, sophisticated contrast, and coherent discourse. This checkpoint tests whether that combination has become automatic.',
  xp: 850, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 34, title: 'Argumentieren auf C1-Niveau', titleEn: 'Arguing at C1 level' , href: 'chapter-c1-34-argumentieren-auf-c1-niveau.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'The final polish: <em>precision, number, contrast, and coherence</em> working together.',
    intro: 'Preparing a research presentation and paper for an international conference, Doreen checks her talk once more and Timo commits to making an important contribution — recycling prefix verbs, number-sensitive nouns, adversative structures, and cohesive discourse.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Chapters 29–32 combined into one fluent, authentic academic conversation'],
    scene: 'Vorbereitung einer Forschungspräsentation für eine internationale Konferenz',
    femaleSpeakers: ['Doreen'],
    dialogue: [
      { speaker: 'Doreen', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vortrag', role: 'r-akkusativ', en: 'talk', hi: 'व्याख्यान', pron: 'FOR-trahk', type: 'Noun · masc.' },
        { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी और', pron: 'nokh', type: 'Adverb' },
        { w: 'einmal', role: 'r-akkusativ', en: 'once', hi: 'एक बार', pron: 'INE-mahl', type: 'Adverb' },
        { w: 'überprüfen', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'ü-ber-PRÜ-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I must still check the talk once more.', hi: 'Mujhe abhi aur ek baar vyakhyaan jaanchna hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Thema', role: 'r-subject', en: 'topic', hi: 'विषय', pron: 'TAY-ma', type: 'Noun · neut.' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'vielversprechend', role: 'r-akkusativ', en: 'promising', hi: 'आशाजनक', pron: 'FEEL-fer-shpre-khent', type: 'Adjective', why: 'vielversprechend (recycled C1).', ex: 'vielversprechend' },
        { w: '.', plain: true }
      ], en: 'The topic sounds promising.', hi: 'Vishay aashaajanak lagta hai.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'schon', role: 'r-adverb', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'zugesagt', role: 'r-verb', en: 'confirmed', hi: 'सहमति दी', pron: 'TSOO-ge-zahkt', type: 'Partizip II · Satzende', why: 'zusagen = to confirm/agree to (this chapter).', ex: 'Hast du zugesagt?' },
        { w: '?', plain: true }
      ], en: 'Have you already confirmed?', hi: 'Kya tumne pehle se sahmati de di hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'करूंगा', pron: 'VAIR-duh', type: 'Verb · werden (Futur I)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'wichtigen', role: 'r-akkusativ', en: 'important', hi: 'ज़रूरी', pron: 'VIKH-ti-gen', type: 'Adjective' },
        { w: 'Beitrag', role: 'r-akkusativ', en: 'contribution', hi: 'योगदान', pron: 'BY-trahk', type: 'Noun · masc.' },
        { w: 'leisten', role: 'r-verb', en: 'make', hi: 'देना', pron: 'LY-sten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I will make an important contribution.', hi: 'Haan. Main ek zaroori yogdaan dunga.' },
      { speaker: 'Doreen', tokens: [
        { w: 'Möchtest', role: 'r-modalverb', en: 'would you like', hi: 'चाहोगे', pron: 'MÖKH-test', type: 'Modal · möchten (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'am', role: 'r-preposition', en: 'at the', hi: 'के अंत में', pron: 'am', type: 'Preposition + place' },
        { w: 'Ende', role: 'r-dativ', en: 'end (dat.)', hi: 'अंत में', pron: 'EN-duh', type: 'Noun · neut. dat.' },
        { w: 'auf', role: 'r-preposition', en: 'back to', hi: 'पर', pron: 'owf', type: 'Preposition (part of zurückkommen auf)' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Thema', role: 'r-akkusativ', en: 'topic', hi: 'विषय', pron: 'TAY-ma', type: 'Noun · neut.' },
        { w: 'zurückkommen', role: 'r-verb', en: 'come back', hi: 'वापस आना', pron: 'tsu-RÜK-ko-men', type: 'Verb · infinitive (Satzende)', why: 'zurückkommen auf + Akkusativ = to come back to (this chapter).', ex: 'zurückkommen auf ein Thema' },
        { w: '?', plain: true }
      ], en: 'Would you like to come back to the topic at the end?', hi: 'Kya tum ant mein vishay par wapas aana chahoge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Yes, that would be sensible.', hi: 'Haan, yeh uchit hoga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'This is not a new lesson — it is a mirror. See how <span class="de r-praefixfamilie">prefix verb families</span>, <span class="de r-numerusbesonderheit">noun number</span>, <span class="de r-adversativ">contrast</span>, and <span class="de r-diskursmarker">coherence</span> work together.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. This is GOETHE MINI 5, a revision checkpoint covering ONLY Chapters 29–32: Verben mit Präfixen sicher unterscheiden (semantic verb families sharing one root: schreiben, stellen, ziehen, setzen, tragen — choosing the correct prefix by meaning, e.g. darstellen vs. vorstellen), Nomen mit Numerusbesonderheiten (Singularetantum like die Forschung/das Wissen, Pluraletantum like die Eltern/die Kosten, meaning-changing plurals like Wort→Wörter/Worte, collective nouns like das Personal with singular agreement), Adversativangaben & Gegensätze ausdrücken (precise choice among aber/jedoch/allerdings/hingegen for contrast, obwohl/wenngleich for concession, einerseits...andererseits for balanced argument, demgegenüber/dem steht...entgegen for scientific contrast), and Kohärenz & Textverknüpfung (Kohärenz vs Kohäsion, demonstrative/pronominal reference like darauf/dieser Ansatz, lexical cohesion via synonyms like Befunde for Ergebnisse, discourse markers like im Folgenden/darüber hinaus/abschließend). Introduce and expect NOTHING beyond these four chapters — no new grammar, no C2 structures. The most important things to catch, spanning all four chapters: wrong prefix choice within a verb family; incorrect pluralization of a Singularetantum or incorrect singularization of a Pluraletantum, or wrong verb agreement with a collective noun; using "aber" everywhere instead of the more precise C1 connector, or confusing contrast with concession; excessive lexical repetition instead of reference/synonym, or missing/weak paragraph transitions. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Check prefix verb choice within semantic families; check Singularetantum/Pluraletantum usage and collective noun agreement; check adversative connector precision (contrast vs concession vs balanced argument); check reference/lexical cohesion and discourse marker use for whole-text coherence. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Readiness check:</b> one sentence on whether the learner\'s formal academic German felt natural and coherent across all four structures.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you combine prefix precision, correct noun number, sophisticated contrast, and coherent discourse fluently. Ready for the next phase.', mid: 'Good progress. Revisit whichever of Chapters 29–32 felt least automatic, then retake this checkpoint.', low: 'Worth a full pass back through Chapters 29–32 — the goal is for these structures to feel automatic, not memorized.' },
  parserSentence: [ { w: 'Das', role: 'plain' }, { w: 'Personal', role: 'r-numerusbesonderheit' }, { w: 'hat', role: 'r-numerusbesonderheit' }, { w: 'zugesagt', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See how prefix precision, noun number, contrast, and coherence work together.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Doreen and Timo prepare a research presentation, naturally recycling all four chapters at once.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Review key expressions from Chapters 29–32 — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Revise prefix verb families, numerus-sensitive nouns, adversative structures, and cohesion devices together.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific article and an editorial, identifying all four structures.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify prefix verbs, number-sensitive nouns, and discourse markers in a lecture and conference discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present, discuss, and collaboratively edit using all four Phase structures naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve a B2 article into C1 style and write a 350-word academic essay combining all structures.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Mixed drills across prefix families, numerus, adversative connectors, and cohesion.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 850 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'Revision vocabulary from Chapters 29–32 with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Mixed revision drills across prefix families, numerus, adversative connectors, and cohesion, plus a full academic writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'Combined Master Tables and Decision Flowcharts for Chapters 29–32.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Bevor wir die Präsentation darstellen, sollten wir die Forschung überprüfen.', text: 'Recall prefix families and Singularetantum (Ch. 29-30)' },
    { de: 'Allerdings müssen wir zuerst die Kosten klären.', text: 'Recall adversative "allerdings" and Pluraletantum "die Kosten" (Ch. 30-31)' },
    { de: 'Einerseits sind die Befunde vielversprechend, andererseits braucht es mehr Daten.', text: 'Recall balanced argumentation and lexical cohesion (Ch. 31-32)' },
    { de: 'Im Folgenden sollten wir darauf zurückkommen.', text: 'Recall discourse markers and pronominal reference (Ch. 32)' },
    { de: 'Darüber hinaus sollten wir einen wichtigen Beitrag beitragen.', text: 'Combine a discourse marker with a prefix-family Funktionsverbgefüge' }
  ],
  vocab: [
    { de: 'überprüfen', pos: 'verb', level: 'C1', register: 'both', en: 'to check, verify', hi: 'जाँचना', ex: 'Wir sollten die Forschung noch einmal überprüfen.', exEn: 'We should check the research once more.', exHi: 'Hamein shodh ek baar aur jaanchna chahiye.', ex2: 'Die Daten wurden sorgfältig überprüft.', ex2En: 'The data were carefully checked.', ex2Hi: 'Data ki saavdhaani se jaanch ki gayi.', conj: { praesens: 'überprüft', praeteritum: 'überprüfte', perfekt: 'hat überprüft' } },
    { de: 'vielversprechend', pos: 'adjective', level: 'C1', register: 'written', en: 'promising', hi: 'आशाजनक', ex: 'Einerseits sind die Befunde vielversprechend.', exEn: 'On the one hand, the findings are promising.', exHi: 'Ek taraf, niष्karsh aashaajanak hain.', ex2: 'Die ersten Ergebnisse sehen vielversprechend aus.', ex2En: 'The first results look promising.', ex2Hi: 'Pehle parinaam aashaajanak lagte hain.' },
    { de: 'zusagen', pos: 'verb', level: 'C1', register: 'both', en: 'to confirm, promise', hi: 'पुष्टि करना', ex: 'Das Personal des Instituts hat schon zugesagt.', exEn: 'The staff of the institute has already confirmed.', exHi: 'Institute ke staff ne pehle hi confirm kiya hai.', ex2: 'Sie hat ihre Teilnahme zugesagt.', ex2En: 'She has confirmed her participation.', ex2Hi: 'Usne apni bhagidaari ki pushti ki hai.', conj: { praesens: 'sagt zu', praeteritum: 'sagte zu', perfekt: 'hat zugesagt' } },
    { de: 'der Beitrag', art: 'der', gender: 'm', plural: 'Beiträge', pos: 'noun', level: 'C1', register: 'written', en: 'contribution', hi: 'योगदान', ex: 'Wir sollten einen wichtigen Beitrag beitragen.', exEn: 'We should make an important contribution.', exHi: 'Hamein ek mahatvapoorn yogdaan dena chahiye.', ex2: 'Der Beitrag zur Forschung ist bedeutend.', ex2En: 'The contribution to research is significant.', ex2Hi: 'Shodh mein yogdaan mahatvapoorn hai.' },
    { de: 'zurückkommen (auf)', pos: 'verb (trennbar)', level: 'C1', register: 'written', en: 'to return (to a topic)', hi: 'वापस आना (किसी विषय पर)', ex: 'Im Folgenden sollten wir darauf zurückkommen.', exEn: 'In what follows, we should return to that.', exHi: 'Aage, hamein iske ooper wapas aana chahiye.', ex2: 'Wir kommen später auf diesen Punkt zurück.', ex2En: 'We will return to this point later.', ex2Hi: 'Hum baad mein iss point par wapas aayenge.', conj: { praesens: 'kommt zurück', praeteritum: 'kam zurück', perfekt: 'ist zurückgekommen' } }
  ],
  grammar: [
    { title: 'Revision: Präfixfamilien (Chapter 29)', body: [ 'One root, many meanings: schreiben (beschreiben=describe, unterschreiben=sign), stellen (darstellen=present, feststellen=determine, vorstellen=introduce), tragen (beitragen=contribute, übertragen=transfer). Think in families rooted in one base verb, not isolated vocabulary.' ], hinglish: 'Ek root se kai verbs bante hain \u2014 <i>schreiben</i>, <i>stellen</i>, <i>tragen</i>, <i>ziehen</i>. Family mein socho, alag-alag shabd ki tarah nahi. Aur do cheezein saath check karo: prefix alag hota hai ya nahi (<b>be-, ver-, er-, ent-</b> hamesha jude, <b>an-, auf-, aus-, ein-, vor-</b> hamesha alag), aur movement wale prefix verbs Perfekt mein <b>sein</b> lete hain \u2014 <span class="de">wir sind umgezogen</span>.' },
    { title: 'Revision: Numerusbesonderheiten (Chapter 30)', body: [ 'Singularetantum (die Forschung, das Wissen) exist only in singular. Pluraletantum (die Eltern, die Kosten) exist only in plural. Collective nouns (das Personal) take singular agreement despite plural meaning. Before pluralizing, always ask: does this noun actually have a plural?' ], hinglish: 'Kuch nouns sirf singular mein aate hain (<b>die Forschung</b>, <b>das Wissen</b>) aur kuch sirf plural (<b>die Eltern</b>, <b>die Kosten</b>). Asli test verb agreement hai, aur woh <b>form</b> dekhta hai, matlab nahi: <span class="de">Die Kosten <b>sind</b></span>, par <span class="de">Das Personal <b>ist</b></span> \u2014 chahe Personal mein bees log hon. Aur <b>die Leute</b> plural hai jabki <b>das Publikum</b> singular.' },
    { title: 'Revision: Adversativangaben (Chapter 31)', body: [ 'aber (simple contrast), allerdings (formal counter-argument), obwohl (concession — different from contrast), einerseits...andererseits (balanced academic argument), demgegenüber/dem steht...entgegen (formal scientific contrast). Different bridges serve different purposes.' ], hinglish: 'Matlab ke saath word order bhi yaad rakho, kyunki asli galtiyan wahin hoti hain. <b>aber</b> aur <b>sondern</b> conjunctions hain \u2014 normal order chalta hai. <b>jedoch, dennoch, hingegen, demgegen\u00fcber</b> adverbs hain \u2014 position 1 par aayein to verb turant baad. Aur <b>obwohl</b> subordinating hai \u2014 verb clause ke end mein. Ek aur baat: contrast do baar mat lagao (<i>obwohl \u2026 trotzdem</i> galat hai).' },
    { title: 'Revision: Kohärenz & Textverknüpfung (Chapter 32)', body: [ 'Reference (darauf, dieser Ansatz) and lexical cohesion (Befunde for Ergebnisse) avoid repetition. Discourse markers (im Folgenden, darüber hinaus, abschließend) connect paragraphs into one coherent train of thought.' ], hinglish: 'Reference aur synonyms se repetition bachti hai, aur discourse markers paragraphs ko jodte hain. Do mechanical baatein yaad rakho \u2014 marker position 1 par ho to verb doosri jagah par aur uske baad comma nahi; aur <b>dies</b> kisi <b>noun</b> ko refer karta hai jabki <b>was</b> poori pichli baat ko.' },
    { title: 'Wie alles zusammenwirkt (How it all works together)', body: [ 'Read this passage first and try to name each structure yourself: <span class="de">Einerseits sind die Befunde vielversprechend, andererseits braucht die Forschung mehr Daten. Im Folgenden sollten wir auf diesen Punkt zur\u00fcckkommen und einen eigenen Beitrag leisten.</span>', '<b>Einerseits \u2026 andererseits</b> \u2014 balanced adversative pair (Ch.31). <b>die Befunde</b> \u2014 lexical cohesion, a synonym for <i>Ergebnisse</i> (Ch.32). <b>die Forschung</b> \u2014 Singularetantum, so a singular verb (Ch.30). <b>Im Folgenden</b> \u2014 discourse marker in position 1, verb second (Ch.32). <b>zur\u00fcckkommen auf</b> \u2014 prefix verb with its fixed preposition (Ch.29). Note <b>einen Beitrag leisten</b>: the fixed support verb is <i>leisten</i>, never <i>beitragen</i>.' ], hinglish: 'Ek hi passage mein chaaron chapters ki cheezein saath aa jaati hain \u2014 aur yahi asli C1 hai. Pehle khud pehchaanne ki koshish karo, phir labels dekho. Ek cheez khaas dhyaan do: <span class="de">einen Beitrag <b>leisten</b></span> sahi hai, kyunki <i>Beitrag</i> ka fixed support verb <b>leisten</b> hai \u2014 <i>beitragen</i> ek alag verb hai aur woh <b>zu</b> ke saath aata hai (<span class="de">zu etwas beitragen</span>).' },
    { title: 'Typische Fehler (mixed review of common learner mistakes)', body: [ 'One error from each chapter, in the form it actually takes in writing \u2014 if any of these still needs thinking about, that is the chapter to revisit.' ], mistakes: [
      { wrong: 'Die Tabelle stellt die Werte vor.', right: 'Die Tabelle stellt die Werte dar.', why: 'Ch.29: <b>vorstellen</b> introduces a person or idea; <b>darstellen</b> depicts data.' },
      { wrong: 'Die Kosten ist hoch, und die Forschungen zeigt das.', right: 'Die Kosten sind hoch, und die Forschung zeigt das.', why: 'Ch.30: <b>Kosten</b> is Pluraletantum \u2192 plural verb; abstract <b>Forschung</b> has no plural \u2192 singular verb.' },
      { wrong: 'Obwohl die Daten unvollst\u00e4ndig sind, dennoch sind die Befunde klar.', right: 'Obwohl die Daten unvollst\u00e4ndig sind, sind die Befunde klar.', why: 'Ch.31: <b>obwohl</b> already carries the concession \u2014 adding <b>dennoch</b> marks it twice.' },
      { wrong: 'Dar\u00fcber hinaus die Studie zeigt weitere Effekte.', right: 'Dar\u00fcber hinaus zeigt die Studie weitere Effekte.', why: 'Ch.32: a discourse marker in position 1 pushes the verb to position 2 \u2014 the subject follows it.' }
    ], hinglish: 'Yeh galtiyaan sabhi chaar chapters mein baar-baar aati hain aur final check ke laayak hain.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Before you write a sentence, ask: Is this the right prefix for the intended meaning? Does this noun have this number? Is this the right connector for contrast vs. concession vs. balanced argument? Does this paragraph connect clearly to the last one?' ], note: 'Memory trick: this checkpoint is a mirror, not a new lesson. If any of the four questions above feels unfamiliar, that is exactly the chapter to revisit.', hinglish: 'Sentence likhne se pehle chaar sawaal poochho. Prefix sahi hai us matlab ke liye? Is noun ka yeh number hota hai \u2014 aur verb uske saath match kar raha hai? Connector sahi type ka hai, aur uske baad word order theek hai? Aur yeh paragraph pichhle se saaf-saaf judta hai? Yeh checkpoint naya kuch nahi sikhata \u2014 sirf dikhata hai ki chaaron cheezein apne aap aa rahi hain ya nahi.' }
  ],
  reading: {
    title: 'Klimaforschung: Neue Erkenntnisse zur Gletscherschmelze',
    titleEn: 'Reading A — Climate research: new findings on glacier melt',
    tokens: [
      { w: 'Im', role: 'r-diskursmarker', en: 'in the (Kontraktion, "im Folgenden")', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Folgenden', role: 'r-diskursmarker', en: 'that follows (Satzende, discourse marker)', hi: 'आगे (Satzende)', type: 'Adjective (substantiviert, Dat., Satzende)' },
      { w: 'werden', role: 'plain', en: 'are', hi: '', type: 'Verb · werden (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Alpenexpedition', role: 'plain', en: 'Alpine expedition (Satzende)', hi: 'आल्प्स अभियान (Satzende)', type: 'Noun · fem.' },
      { w: 'dargestellt', role: 'r-praefixfamilie', en: 'presented (from "stellen" + "dar-", scientific register prefix verb, Satzende)', hi: 'प्रस्तुत किए जाते हैं ("stellen" + "dar-", Satzende)', type: 'Partizip II (Satzende)', why: '"Dargestellt" belongs to the "stellen" prefix family common in scientific register (this chapter).' },
      { w: '.', plain: true },
      { w: 'Allerdings', role: 'r-adversativ', en: 'however (formal counter-argument connector)', hi: 'हालांकि', type: 'Adverb', why: '"Allerdings" introduces a formal counter-argument, common in academic writing (this chapter).' },
      { w: 'benötigt', role: 'plain', en: 'requires', hi: 'चाहिए', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Forschung', role: 'r-numerusbesonderheit', en: 'research (Singularetantum, Satzende)', hi: 'शोध (Singularetantum, Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'weitere', role: 'plain', en: 'further', hi: 'और', type: 'Adjective · Akk.' },
      { w: 'Messreihen', role: 'plain', en: 'measurement series (Satzende)', hi: 'माप श्रृंखलाएँ (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: ',', plain: true },
      { w: 'da', role: 'plain', en: 'since', hi: 'क्योंकि', type: 'Konjunktion' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Schmelzrate', role: 'plain', en: 'melt rate (Satzende)', hi: 'पिघलने की दर (Satzende)', type: 'Noun · fem.' },
      { w: 'von', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Gletscher', role: 'plain', en: 'glacier', hi: 'हिमनद', type: 'Noun · masc.' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Gletscher', role: 'plain', en: 'glacier (Satzende)', hi: 'हिमनद (Satzende)', type: 'Noun · masc.' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'unterscheidet', role: 'plain', en: 'differs (Satzende)', hi: 'भिन्न होती है (Satzende)', type: 'Verb · unterscheiden (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'In what follows, the results of the Alpine expedition are presented. However, the research requires further measurement series, since the melt rate differs noticeably from glacier to glacier.',
    comprehension: [
      { q: 'Woher stammt "dargestellt"?', options: ['Präfixfamilie "stellen"', 'Präfixfamilie "tragen"', 'Numerusbesonderheit'], answer: 0 },
      { q: 'Was für eine Art Nomen ist "die Forschung"?', options: ['Singularetantum', 'Pluraletantum', 'Kollektivum'], answer: 0 },
      { q: 'Welche Funktion hat "allerdings"?', options: ['Formaler Gegenargument-Konnektor', 'Diskursmarker', 'Präfixfamilie'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Leitartikel', titleEn: 'Reading B — Editorial article',
    tokens: [
      { w: 'Einerseits', role: 'r-adversativ', en: 'on the one hand (Ch. 31, balanced argumentation)', hi: 'ek taraf (Ch. 31)', type: 'Adverb' },
      { w: 'wächst', role: 'plain', en: 'grows', hi: 'badh rahi hai', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Bevölkerung', role: 'r-numerusbesonderheit', en: 'population (collective noun, Ch. 30 — singular agreement)', hi: 'aabaadi (collective noun, Ch. 30)', type: 'Noun · fem. (Satzende)' },
      { w: 'stetig', role: 'plain', en: 'steadily (Satzende)', hi: 'lagaataar (Satzende)', type: 'Adverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'andererseits', role: 'r-adversativ', en: 'on the other hand (completes the balanced pair)', hi: 'dusri taraf', type: 'Adverb' },
      { w: 'steigen', role: 'plain', en: 'rise', hi: 'badhte hain', type: 'Verb (Präsens)' },
      { w: 'die', role: 'plain', en: 'the (plural nom.)', hi: 'ye', type: 'Article' },
      { w: 'Kosten', role: 'r-numerusbesonderheit', en: 'costs (Pluraletantum, Ch. 30, Satzende)', hi: 'kharch (Pluraletantum, Ch. 30, Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'On the one hand, the population continues to grow steadily, on the other hand, costs are rising.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_033_L001', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich gehe meinen Vortrag noch einmal durch — fehlt dir noch etwas Wichtiges?', en: 'Timo, I\'m going through my talk once more — is anything important still missing for you?' },
      { id: 'C1_033_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich verpflichte mich, den Teil über die Methodik zu übernehmen, wenn du dich um die Ergebnisse kümmerst.', en: 'I commit to taking over the part about the methodology if you take care of the results.' },
      { id: 'C1_033_L003', speaker: 'Doreen', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Abgemacht, dann sind wir für die Konferenz morgen bestens vorbereitet.', en: 'Deal, then we\'re perfectly prepared for the conference tomorrow.' },
      { id: 'C1_033_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, jetzt fehlt nur noch der letzte Blick auf die Folien.', en: 'Right, now all that\'s left is one last look at the slides.' }
    ],
    transcript: 'Timo, ich gehe meinen Vortrag noch einmal durch — fehlt dir noch etwas Wichtiges? Ich verpflichte mich, den Teil über die Methodik zu übernehmen, wenn du dich um die Ergebnisse kümmerst. Abgemacht, dann sind wir für die Konferenz morgen bestens vorbereitet. Genau, jetzt fehlt nur noch der letzte Blick auf die Folien.',
    translation: 'Timo, I\'m going through my talk once more — is anything important still missing for you? I commit to taking over the part about the methodology if you take care of the results. Deal, then we\'re perfectly prepared for the conference tomorrow. Right, now all that\'s left is one last look at the slides.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'gehe' },
      { w: 'meinen' },
      { w: 'Vortrag' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'durch' },
      { w: '—', plain: true },
      { w: 'fehlt' },
      { w: 'dir' },
      { w: 'noch' },
      { w: 'etwas' },
      { w: 'Wichtiges' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'verpflichte' },
      { w: 'mich' },
      { w: ',', plain: true },
      { w: 'den' },
      { w: 'Teil' },
      { w: 'über' },
      { w: 'die' },
      { w: 'Methodik' },
      { w: 'zu' },
      { w: 'übernehmen' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'du' },
      { w: 'dich' },
      { w: 'um' },
      { w: 'die' },
      { w: 'Ergebnisse' },
      { w: 'kümmerst' },
      { w: '.', plain: true },
      { w: 'Abgemacht' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'sind' },
      { w: 'wir' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Konferenz' },
      { w: 'morgen' },
      { w: 'bestens' },
      { w: 'vorbereitet' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'jetzt' },
      { w: 'fehlt' },
      { w: 'nur' },
      { w: 'noch' },
      { w: 'der' },
      { w: 'letzte' },
      { w: 'Blick' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Folien' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wozu verpflichtet sich Timo?', qEn: 'What does Timo commit to?', options: ['den Teil über die Methodik', 'den ganzen Vortrag', 'nichts', 'die Ergebnisse'], optionsEn: ['the part on methodology', 'the whole talk', 'nothing', 'the results'], answer: 0,
        explain: '"Ich verpflichte mich, den Teil über die Methodik zu übernehmen."' },
      { q: 'Was bleibt vor der Konferenz noch zu tun?', qEn: 'What is left to do before the conference?', options: ['alles neu schreiben', 'ein letzter Blick auf die Folien', 'ein neues Thema wählen', 'nichts mehr'], optionsEn: ['rewrite everything', 'one last look at the slides', 'choose a new topic', 'nothing more'], answer: 1,
        explain: '"Jetzt fehlt nur noch der letzte Blick auf die Folien."' }
    ]
  },
  speaking: [
    { task: "Timo fragt, ob in seinem Vortrag etwas Wichtiges fehlt.", taskEn: "Timo asks whether anything important is missing from his talk.", de: "Ich würde den Teil über die Methodik überprüfen; sonst ist er vielversprechend.", en: "I'd check the part on methodology; otherwise it's promising." },
    { task: "Timo will die Methodik übernehmen. Sage zu und teile den Rest auf.", taskEn: "Timo wants to take the methodology. Agree and divide the rest.", de: "Das sage ich gern zu; ich übernehme dann den Beitrag zur Auswertung.", en: "I'm happy to agree to that; then I'll take the section on analysis." },
    { task: "Prüfung: Komm am Ende auf einen früheren Punkt zurück.", taskEn: "Exam: come back to an earlier point at the end.", de: "Abschließend komme ich auf die Frage der Datenqualität zurück.", en: "Finally I'll come back to the question of data quality." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve a B2-level argumentative article by making it fully C1 — improving coherence, cohesion, academic vocabulary, adversative structures, and semantic precision.\n\nTASK 2 — Academic essay (350 words): Use cohesive paragraph structure, advanced discourse markers, adversative expressions, prefix verbs, and numerus-sensitive nouns together, in authentic C1 academic style.',
    starters: ['Im Folgenden werden die wichtigsten Befunde dargestellt.', 'Einerseits sind die Ergebnisse vielversprechend, andererseits fehlen noch wichtige Daten.'],
    placeholder: 'Die Forschung benötigt weitere Daten. Allerdings zeigen die Befunde bereits ein klares Muster...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which structure combines Chapters 29 and 32 in "sollten wir darauf zurückkommen"?', options: ['Pronominal reference ("darauf") + separable prefix verb ("zurückkommen")', 'Singularetantum', 'Balanced argumentation'], answer: 0, explain: '"Darauf" (Ch. 32 reference) and "zurückkommen" (a prefix verb) combine naturally in fluent C1 German.' },
    gap: { sentence: ['Einerseits sind die Befunde vielversprechend, ', ' braucht die Forschung mehr Daten.'], gaps: [ { answer: 'andererseits', accepts: ['andererseits'] } ], explain: '"Einerseits...andererseits" is the fixed balanced-argument pair from Chapter 31.' },
    match: { q: 'Match each example to its source chapter.', pairs: [ { noun: 'darstellen', art: 'Chapter 29 — Präfixfamilie' }, { noun: 'die Forschung / die Kosten', art: 'Chapter 30 — Numerusbesonderheiten' }, { noun: 'allerdings / einerseits...andererseits', art: 'Chapter 31 — Adversativangaben' }, { noun: 'im Folgenden / darüber hinaus', art: 'Chapter 32 — Kohärenz & Textverknüpfung' } ] },
    builder: { target: 'Build: "The staff of the institute has already confirmed." (combining Ch. 30 collective noun + verb agreement)', bank: ['Das', 'Personal', 'des', 'Instituts', 'hat', 'schon', 'zugesagt', '.'], answer: ['Das', 'Personal', 'des', 'Instituts', 'hat', 'schon', 'zugesagt', '.'], roles: { 'Personal': 'r-numerusbesonderheit', 'hat': 'r-numerusbesonderheit' } },
    errorCorrection: { title: 'Error correction', wrong: 'die Forschungen aber die Kosten sind hoch.', right: 'Die Forschung ist vielversprechend, allerdings sind die Kosten hoch.', explain: 'Two errors: "die Forschung" is a Singularetantum (Ch. 30, no natural plural in this sense), and "allerdings" is the more precise formal counter-argument connector than plain "aber" here (Ch. 31).' }
  },
  quiz: [
    { q: 'What connects all four chapters in this checkpoint?', options: ['They all sharpen precision in formal, academic German through careful lexical and structural choices', 'They are all about basic grammar formation', 'They only apply to spoken German'], answer: 0, explain: 'Prefix precision, correct noun number, precise contrast, and text coherence all serve formal written precision.' },
    { q: 'What must you check before pluralizing a noun?', options: ['Whether it actually has a plural (or singular) in that sense', 'Nothing — all German nouns can be freely pluralized', 'Only its gender'], answer: 0, explain: 'Chapter 30\'s core lesson: number is a lexical property, not automatic.' },
    { q: 'What is the difference between "aber" and "obwohl"?', options: ['"Aber" is simple contrast; "obwohl" is concession', 'They are interchangeable', '"Obwohl" is more casual than "aber"'], answer: 0, explain: 'Chapter 31 distinguished these as different logical relationships, not synonyms.' },
    { q: 'What does "im Folgenden" do in a text?', options: ['Signals a transition to the next section (discourse marker)', 'Corrects a previous statement', 'Introduces a prefix verb'], answer: 0, explain: 'Chapter 32\'s discourse markers guide the reader through a coherent text.' },
    { q: 'Why choose "darstellen" over "vorstellen"?', options: ['"Darstellen" means to present/depict information; "vorstellen" means to introduce a person', 'They mean exactly the same thing', '"Vorstellen" is more formal'], answer: 0, explain: 'Chapter 29 taught that prefix family members are not interchangeable despite looking similar.' }
  ],
  takeaways: [
    { c: 'r-praefixfamilie', html: 'Prefix verb families (Ch. 29) and noun number rules (Ch. 30) sharpen lexical precision in formal writing.' },
    { c: 'r-adversativ', html: 'Precise adversative connectors (Ch. 31) express distinct logical relationships — contrast, concession, or balanced argument.' },
    { c: 'r-diskursmarker', html: 'Reference and discourse markers (Ch. 32) connect individually correct sentences into one coherent, readable text.' }
  ],
  revisionTips: [
    'Write one paragraph deliberately combining all four structures: a correct prefix verb, a numerus-sensitive noun, a precise adversative connector, and a discourse marker.',
    'Review your weakest area from the quiz by rereading that specific chapter\'s Master Table before retaking this checkpoint.',
    'Find one authentic German academic abstract and label every instance of the four Phase structures you can find.'
  ]
};
window.CHAPTER = CHAPTER;
