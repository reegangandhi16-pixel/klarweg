/* KLARWEG CHAPTER DATA — C1 · Chapter 34
   "Argumentieren auf C1-Niveau" — full persuasive argument
   architecture: claim, reason, evidence, example, counter-argument,
   refutation, balanced conclusion. NOT individual connectors
   (already mastered) — focus is argument construction & rhetoric.
   Dialogue: Wibke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-34-argumentieren-auf-c1-niveau',
  phase: 'C1 · Nominalstil & Präzision',
  number: 34,
  title: 'Argumentieren auf C1-Niveau',
  titleEn: 'Arguing at C1 level',
  description: 'Every strong C1 argument answers seven questions: what is my opinion, why, what evidence, what example, what would someone disagree with, how do I answer that, what conclusion follows? Strong argumentation is not emotional — it is structured and evidence-based.',
  xp: 870, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 35, title: 'Konzession & Abwägen', titleEn: 'Concession and weighing arguments' , href: 'chapter-c1-35-konzession-und-abwaegen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Strong argumentation answers <em>seven questions</em>, not just one opinion.',
    intro: 'Preparing for a Goethe C1 debate on whether AI should transform university teaching, Wibke argues remote teaching is sensible, and Timo objects that interaction is missing — building a full argument with evidence, counter-argument, and refutation, not just an opinion.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See the complete argument architecture — claim, evidence, counter-argument, refutation, conclusion — used naturally'],
    scene: 'Vorbereitung auf eine Goethe C1 Debatte über künstliche Intelligenz im Hochschulunterricht',
    femaleSpeakers: ['Wibke'],
    dialogue: [
      { speaker: 'Wibke', tokens: [
        { w: 'Meines', role: 'r-dativ', en: 'my (neut. gen.)', hi: 'मेरे', pron: 'MY-nes', type: 'Possessive · genitive', why: 'meines Erachtens = in my judgment/opinion, fixed formal phrase (this chapter).', ex: 'Meines Erachtens ist Fernunterricht sinnvoll.', exEn: 'In my judgment, remote teaching is sensible.' },
        { w: 'Erachtens', role: 'r-dativ', en: 'judgment (gen.)', hi: 'विचार में', pron: 'er-AKH-tens', type: 'Noun · neut. genitive' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Fernunterricht', role: 'r-subject', en: 'remote teaching', hi: 'दूरस्थ शिक्षा', pron: 'FAIRN-un-ter-rikht', type: 'Noun · masc.' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'In my judgment, remote teaching is sensible.', hi: 'Mere vichaar mein, doorasth shiksha uchit hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'wende', role: 'r-verb', en: 'object', hi: 'आपत्ति करता हूँ', pron: 'VEN-duh', type: 'Verb · einwenden (ich)', lexicalUnit: 'einwenden', why: 'einwenden = to object (this chapter).', ex: 'Ich wende ein, dass die Interaktion fehlt.', exEn: 'I object that the interaction is missing.' },
        { w: 'ein', role: 'r-verb', en: '(prefix of einwenden)', hi: '', pron: 'ine', type: 'Separable prefix', lexicalUnit: 'einwenden' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Interaktion', role: 'r-subject', en: 'interaction', hi: 'संपर्क', pron: 'in-ter-ak-TSYON', type: 'Noun · fem.' },
        { w: 'fehlt', role: 'r-verb', en: 'is missing', hi: 'कम है', pron: 'faylt', type: 'Verb · fehlen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I object that the interaction is missing.', hi: 'Main aapatti karta hoon ki sampark kam hai.' },
      { speaker: 'Wibke', tokens: [
        { w: 'Dem', role: 'r-dativ', en: 'that (neut. dat.)', hi: 'उसका', pron: 'daym', type: 'Pronoun · dative' },
        { w: 'halte', role: 'r-verb', en: 'oppose', hi: 'जवाब देती हूँ', pron: 'HAL-tuh', type: 'Verb · entgegenhalten (ich)', lexicalUnit: 'entgegenhalten', why: 'entgegenhalten = to counter/oppose an argument (this chapter).', ex: 'Dem halte ich entgegen, dass es digitale Foren gibt.', exEn: 'I counter that there are digital forums.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'entgegen', role: 'r-verb', en: '(prefix of entgegenhalten)', hi: '', pron: 'ent-GAY-gen', type: 'Separable prefix', lexicalUnit: 'entgegenhalten' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · formal es' },
        { w: 'digitale', role: 'r-akkusativ', en: 'digital', hi: 'डिजिटल', pron: 'di-gi-TAH-luh', type: 'Adjective' },
        { w: 'Foren', role: 'r-akkusativ', en: 'forums', hi: 'मंच', pron: 'FOH-ren', type: 'Noun · plural' },
        { w: 'gibt', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'geept', type: 'Verb · geben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I counter that there are digital forums.', hi: 'Main jawaab deti hoon ki digital manch maujood hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Welche', role: 'r-akkusativ', en: 'which (fem.)', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Evidenz', role: 'r-akkusativ', en: 'evidence', hi: 'सबूत', pron: 'ay-vi-DENTS', type: 'Noun · fem.', why: 'die Evidenz (this chapter).', ex: 'die Evidenz zeigen' },
        { w: 'kannst', role: 'r-modalverb', en: 'can', hi: 'सकती हो', pron: 'KANST', type: 'Modal · können (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dafür', role: 'r-akkusativ', en: 'for that', hi: 'उसके लिए', pron: 'da-FÜR', type: 'Adverb' },
        { w: 'vorlegen', role: 'r-verb', en: 'present', hi: 'प्रस्तुत करना', pron: 'FOR-lay-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Which evidence can you present for that?', hi: 'Uske liye tum kaunsa saboot pesh kar sakti ho?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Mehrere', role: 'r-subject', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'Studien', role: 'r-subject', en: 'studies', hi: 'अध्ययन', pron: 'SHTOO-dyen', type: 'Noun · plural' },
        { w: 'zeigen', role: 'r-verb', en: 'show', hi: 'दिखाते हैं', pron: 'TSY-gen', type: 'Verb · zeigen' },
        { w: 'positive', role: 'r-akkusativ', en: 'positive', hi: 'सकारात्मक', pron: 'po-zi-TEE-vuh', type: 'Adjective' },
        { w: 'Ergebnisse', role: 'r-akkusativ', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Several studies show positive results.', hi: 'Kayi adhyayan sakaraatmak parinaam dikhaate hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Abschließend', role: 'r-akkusativ', en: 'in conclusion', hi: 'निष्कर्ष के रूप में', pron: 'AP-shlee-sent', type: 'Adverb', why: 'abschließend = in conclusion, fixed discourse marker (this chapter).', ex: 'Abschließend stimme ich teilweise zu.', exEn: 'In conclusion, I partly agree.' },
        { w: 'stimme', role: 'r-verb', en: 'agree', hi: 'सहमत', pron: 'SHTI-muh', type: 'Verb · zustimmen (ich)', lexicalUnit: 'zustimmen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'teilweise', role: 'r-akkusativ', en: 'partly', hi: 'आंशिक रूप से', pron: 'TILE-vy-zuh', type: 'Adverb' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix · Satzende', lexicalUnit: 'zustimmen' },
        { w: '.', plain: true }
      ], en: 'In conclusion, I partly agree.', hi: 'Nishkarsh ke roop mein, main aanshik roop se sahmat hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every strong C1 argument answers seven questions — opinion, reason, evidence, example, opposing view, response, conclusion. <span class="de r-evidenz">Strong argumentation is not emotional — it is structured</span>.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is ARGUMENTIEREN AUF C1-NIVEAU at C1 level — the complete architecture of persuasive academic argumentation, NOT individual connectors, cohesion devices, or adversative expressions in isolation (already mastered in earlier chapters). Covered: the seven-stage argument structure (Claim → Reason → Evidence → Example → Counter-Argument → Refutation → Balanced Conclusion); presenting a position (Meines Erachtens, Ich vertrete die Auffassung, dass..., Es spricht vieles dafür, dass..., Es lässt sich argumentieren, dass...); supporting with evidence (Studien zeigen..., Aktuelle Forschung belegt..., Ein Beispiel hierfür ist..., Dies lässt sich daran erkennen...); introducing counter-arguments (Zwar...jedoch, Einerseits...andererseits, Gegner dieser Ansicht argumentieren..., Es könnte eingewendet werden...); refutation (Dennoch überzeugt dieses Argument nicht..., Diese Sichtweise greift zu kurz..., Dies berücksichtigt jedoch nicht..., Dem lässt sich entgegenhalten...); academic (Die Forschung legt nahe..., Auf Grundlage der Daten..., Unter Berücksichtigung aktueller Studien...), journalistic (Kritiker bemängeln..., Befürworter weisen darauf hin...), and professional (eine Entscheidung begründen, Alternativen vergleichen, Kompromisse finden) registers of argumentation. Do NOT expect or require basic conjunctions, subordinate clause formation, passive voice, or nominalization mechanics — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: expressing opinions without any supporting evidence or example; ignoring or failing to anticipate counter-arguments entirely; emotional rather than logical/evidence-based reasoning; weak or missing conclusions; repetitive sentence starters throughout an argumentative text; direct English argumentation patterns that do not match German academic discourse conventions. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag opinions stated without evidence or example; flag missing counter-argument or refutation in an argumentative text; flag weak/abrupt conclusions; check fixed argumentation phrases (Studien zeigen, dem lässt sich entgegenhalten, abschließend lässt sich sagen) are used correctly and idiomatically. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Argument structure check:</b> one sentence on whether the learner\'s text follows the full claim-evidence-counter-argument-refutation-conclusion architecture.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your arguments are structured, evidence-based, and anticipate counter-arguments like a native academic writer. Ready for the next chapter.', mid: 'Good. Re-read the Argument Map and Master Table once, then continue.', low: 'Worth another pass through the Grammar section — remember: strong C1 argumentation is not emotional, it is structured and evidence-based.' },
  parserSentence: [ { w: 'Studien', role: 'r-evidenz' }, { w: 'zeigen', role: 'r-evidenz' }, { w: ',', role: 'plain' }, { w: 'dass', role: 'plain' }, { w: 'dies', role: 'plain' }, { w: 'effektiv', role: 'plain' }, { w: 'ist', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: strong C1 argumentation answers seven questions in a structured, evidence-based way.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Wibke and Timo defend opposing positions on AI in university teaching, using the full argument architecture.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key argumentation expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master claim, evidence, counter-argument, refutation, and conclusion phrases across registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an academic argumentative article and a newspaper opinion piece, identifying claims, evidence, and conclusions.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify arguments, evidence, and counter-arguments in a university debate and panel discussion.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Defend opinions, disagree politely, and debate academic issues using authentic C1 speaking strategies.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve a weak argumentative essay, and write a 350-word essay with full argument architecture.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill claim-vs-evidence, counter-argument construction, and refutation practice.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 870 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Claim-vs-evidence and counter-argument/refutation drills, plus a full argumentative essay writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Argument Map, Persuasion Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Meines Erachtens sollte künstliche Intelligenz den Unterricht verändern.', text: 'Present a formal C1 opinion with "meines Erachtens"' },
    { de: 'Studien zeigen, dass personalisiertes Lernen effektiver ist.', text: 'Support a claim with the fixed evidence phrase "Studien zeigen"' },
    { de: 'Zwar ist die Technologie vielversprechend, jedoch könnte eingewendet werden, dass...', text: 'Introduce a counter-argument with "zwar...jedoch" and "es könnte eingewendet werden"' },
    { de: 'Dem lässt sich entgegenhalten, dass KI Lehrkräfte nicht ersetzt, sondern unterstützt.', text: 'Refute a counter-argument with the fixed phrase "dem lässt sich entgegenhalten"' },
    { de: 'Abschließend lässt sich sagen, dass KI den Unterricht sinnvoll ergänzen kann.', text: 'Draw a balanced conclusion with "abschließend lässt sich sagen"' }
  ],
  vocab: [
    { de: 'meines Erachtens', pos: 'fixed adverbial expression', level: 'C1', register: 'written', en: 'in my view, in my opinion', hi: 'मेरे विचार में', ex: 'Meines Erachtens sollte künstliche Intelligenz den Unterricht verändern.', exEn: 'In my view, artificial intelligence should change teaching.', exHi: 'Mere hisaab se, kritrim buddhimatta ko shiksha badalna chahiye.', ex2: 'Meines Erachtens ist diese Entscheidung richtig.', ex2En: 'In my view, this decision is correct.', ex2Hi: 'Mere hisaab se, yeh faisla sahi hai.' },
    { de: 'die Evidenz', art: 'die', gender: 'f', plural: 'Evidenzen', pos: 'noun', level: 'C1', register: 'written', en: 'evidence', hi: 'प्रमाण', ex: 'Die Evidenz spricht für diese Theorie.', exEn: 'The evidence supports this theory.', exHi: 'Praman iss siddhaant ka samarthan karta hai.', ex2: 'Es gibt bisher keine ausreichende Evidenz.', ex2En: 'There is not yet sufficient evidence.', ex2Hi: 'Abhi tak paryaapt praman nahi hai.' },
    { de: 'einwenden', pos: 'verb', level: 'C1', register: 'written', en: 'to object', hi: 'आपत्ति करना', ex: 'Es könnte eingewendet werden, dass menschlicher Kontakt verloren geht.', exEn: 'It could be objected that human contact is lost.', exHi: 'Yeh aapatti ki jaa sakti hai ki maanav sampark kho jaata hai.', ex2: 'Kritiker wenden ein, dass die Kosten zu hoch sind.', ex2En: 'Critics object that the costs are too high.', ex2Hi: 'Aalochak aapatti karte hain ki kharch bahut zyaada hai.', conj: { praesens: 'wendet ein', praeteritum: 'wandte ein', perfekt: 'hat eingewandt' } },
    { de: 'entgegenhalten', pos: 'verb (trennbar, fixed with "dem")', level: 'C1', register: 'written', en: 'to counter (an argument)', hi: 'प्रतिवाद करना', ex: 'Dem lässt sich entgegenhalten, dass KI Lehrkräfte nicht ersetzt.', exEn: 'One can counter this by saying that AI does not replace teachers.', exHi: 'Iske virudhh kaha jaa sakta hai ki AI shikshakon ko nahi badalti.', ex2: 'Diesem Argument lässt sich leicht entgegenhalten.', ex2En: 'This argument can easily be countered.', ex2Hi: 'Iss tark ka aasaani se pratiваad kiya jaa sakta hai.', conj: { praesens: 'hält entgegen', praeteritum: 'hielt entgegen', perfekt: 'hat entgegengehalten' } },
    { de: 'abschließend', pos: 'adverb', level: 'C1', register: 'written', en: 'in conclusion, finally', hi: 'अंत में', ex: 'Abschließend lässt sich sagen, dass KI den Unterricht sinnvoll ergänzen kann.', exEn: 'In conclusion, one can say that AI can meaningfully complement teaching.', exHi: 'Ant mein, kaha jaa sakta hai ki AI shiksha ko saarthak roop se poorak kar sakti hai.', ex2: 'Abschließend möchte ich mich bei allen Teilnehmenden bedanken.', ex2En: 'In conclusion, I would like to thank all participants.', ex2Hi: 'Ant mein, main sabhi prashikshaarthiyon ka dhanyavaad karna chahta hoon.' }
  ],
  grammar: [
    { title: 'Struktur eines starken Arguments (Structure of a Strong Argument)', body: [ 'Topic → Claim → Reason → Evidence → Example → Counter-Argument → Refutation → Balanced Conclusion. Students learn the complete architecture of persuasive academic writing.' ], hinglish: 'C1 par argument ka matlab sirf apni raay dena nahi hai. Poora dhaancha aath step ka hota hai \u2014 apni baat, uska reason, saboot, ek example, phir doosri taraf ki baat, uska jawaab, aur ant mein nateeja. Exam mein yahi structure dekha jaata hai, isliye ise ek checklist ki tarah yaad rakho.' },
    { title: 'Position präsentieren (Presenting a Position)', body: [ 'Meines Erachtens..., Ich vertrete die Auffassung, dass..., Es spricht vieles dafür, dass..., Es lässt sich argumentieren, dass..., Aus wissenschaftlicher Sicht... — formal ways to open an academic argument.' ], hinglish: 'Apni baat shuru karne ke liye yeh phrases hain, par dhyaan do ki inka grammar alag hai. <span class="de">Ich vertrete die Auffassung</span>, <span class="de">Es l\u00e4sst sich argumentieren</span> aur <span class="de">Es spricht vieles daf\u00fcr</span> ke baad <b>dass</b> aata hai. Par <span class="de">Meines Erachtens</span> aur <span class="de">Aus wissenschaftlicher Sicht</span> adverbial hain \u2014 inke baad seedha <b>verb</b> aata hai, <b>dass</b> nahi.' },
    { title: 'Argument stützen (Supporting an Argument)', body: [ 'Studien zeigen..., Aktuelle Forschung belegt..., Ein Beispiel hierfür ist..., Dies lässt sich daran erkennen... — evidence, examples, and research findings support a claim.' ], hinglish: 'Saboot dene ke liye yeh phrases sabse zyada aate hain. <span class="de">Studien zeigen, dass \u2026</span> aur <span class="de">Aktuelle Forschung belegt, dass \u2026</span> ke baad <b>dass</b>-clause aata hai. Aur <span class="de">Ein Beispiel hierf\u00fcr ist \u2026</span> ke baad seedha noun. Ek baat yaad rakho \u2014 <b>belegen</b> apna object leta hai (<span class="de">Dies belegt die These</span>), aur <b>daf\u00fcr</b> ke saath <b>sprechen</b> aata hai (<span class="de">Daf\u00fcr spricht \u2026</span>).' },
    { title: 'Gegenargumente (Counter-Arguments)', body: [ 'Zwar...jedoch..., Einerseits...andererseits..., Gegner dieser Ansicht argumentieren..., Es könnte eingewendet werden... — anticipating the opposing view is essential for balanced argumentation.' ], hinglish: 'Doosri taraf ki baat rakhna kamzori nahi \u2014 exam mein iske marks milte hain, kyunki isse dikhta hai ki tumne poora sochа hai. <b>Zwar \u2026 jedoch</b> ek fixed jodi hai, aur dono hisson mein verb doosri jagah par aata hai. <span class="de">Es k\u00f6nnte eingewendet werden, dass \u2026</span> sabse formal tareeka hai objection uthane ka.' },
    { title: 'Widerlegung (Refutation)', body: [ 'Dennoch überzeugt dieses Argument nicht..., Diese Sichtweise greift zu kurz..., Dies berücksichtigt jedoch nicht..., Dem lässt sich entgegenhalten... — responding to counter-arguments politely and logically.' ], hinglish: 'Refutation ka matlab hai objection ka <b>jawaab</b> dena \u2014 use dohraana nahi. Yahi sabse badi galti hoti hai. Sahi tareeka: objection maano, phir ek <b>nayi</b> baat rakho jo use kamzor kar de. <span class="de">Diese Sichtweise greift zu kurz</span> matlab \u201cyeh baat adhoori hai\u201d, aur <span class="de">Dem l\u00e4sst sich entgegenhalten, dass \u2026</span> ke baad <b>dass</b>-clause aata hai.' },
    { title: 'Register-spezifische Argumentation', body: [ 'Register ke hisaab se phrases badalti hain. Academic writing mein <span class="de">Die Forschung legt nahe, dass \u2026</span> aur <span class="de">Auf Grundlage der Daten \u2026</span>. News mein <span class="de">Kritiker beim\u00e4ngeln, dass \u2026</span> aur <span class="de">Bef\u00fcrworter weisen darauf hin, dass \u2026</span> \u2014 isse baat kisi aur ke naam se aati hai, tumhari raay nahi banti. Aur office mein <span class="de">eine Entscheidung begr\u00fcnden</span> aur <span class="de">Alternativen vergleichen</span>.' ], hinglish: 'Register ke hisaab se phrases badalti hain. Academic writing mein <span class="de">Die Forschung legt nahe, dass \u2026</span> aur <span class="de">Auf Grundlage der Daten \u2026</span>. News mein <span class="de">Kritiker beim\u00e4ngeln, dass \u2026</span> aur <span class="de">Bef\u00fcrworter weisen darauf hin, dass \u2026</span> \u2014 isse baat kisi aur ke naam se aati hai, tumhari raay nahi banti. Aur office mein <span class="de">eine Entscheidung begr\u00fcnden</span> aur <span class="de">Alternativen vergleichen</span>.' },
    {
      title: 'Welche Struktur folgt auf welche Wendung?',
      body: [
        'These phrases are only usable if you know what comes after them, and that is where almost every error in this chapter happens.',
        'There are three patterns: some open a <b>dass</b>-clause, some are adverbials that take position 1 and push the verb to position 2, and some are followed directly by a noun phrase.'
      ],
      table: {
        head: ['Phrase', 'Continuation', 'Example'],
        rows: [
          ['Ich vertrete die Auffassung / Es l\u00e4sst sich argumentieren / Studien zeigen', '<b>dass</b> + verb last', '<span class="de">Studien zeigen, <b>dass</b> die Kosten sinken.</span>'],
          ['Meines Erachtens / Aus wissenschaftlicher Sicht / Abschlie\u00dfend', 'position 1 \u2192 <b>verb second</b>', '<span class="de">Meines Erachtens <b>ist</b> das sinnvoll.</span>'],
          ['Zwar \u2026 jedoch / dennoch', 'both adverbs \u2192 verb second', '<span class="de">Zwar <b>ist</b> es teuer, jedoch <b>liefert</b> es Daten.</span>'],
          ['Ein Beispiel hierf\u00fcr ist', '+ noun phrase', '<span class="de">Ein Beispiel hierf\u00fcr ist die neue Studie.</span>'],
          ['Dem l\u00e4sst sich entgegenhalten', '<b>dass</b> + verb last', '<span class="de">Dem l\u00e4sst sich entgegenhalten, <b>dass</b> \u2026</span>'],
          ['Gegner dieser Ansicht argumentieren', '<b>dass</b> + verb last', '<span class="de">\u2026 argumentieren, <b>dass</b> die Kosten steigen.</span>']
        ]
      },
      note: 'Watch the false friends of syntax: <i>Meines Erachtens</i> never takes <b>dass</b>, while <i>l\u00e4sst sich sagen</i> always does. Both are extremely common in exam writing.',
      hinglish: 'Yeh phrases tabhi kaam ki hain jab tumhe pata ho ki uske baad kya aata hai \u2014 aur is chapter ki lagbhag saari galtiyan yahin hoti hain. Teen patterns hain. Kuch phrases <b>dass</b>-clause kholte hain, aur wahan verb clause ke <b>end</b> mein jaata hai: <span class="de">Studien zeigen, dass die Kosten sinken.</span> Kuch adverbial hain aur position 1 lete hain, isliye unke turant baad <b>verb</b> aata hai: <span class="de">Meines Erachtens <b>ist</b> das sinnvoll.</span> Aur kuch ke baad seedha noun phrase aata hai: <span class="de">Ein Beispiel hierf\u00fcr ist \u2026</span> Do phrases khaas dhyaan maangti hain \u2014 <b>Meines Erachtens</b> ke saath <b>dass</b> kabhi nahi aata, par <b>l\u00e4sst sich sagen</b> ke saath hamesha aata hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Stage mapped to purpose.' ], table: { head: ['Stage', 'Purpose'], rows: [ ['Claim', 'Present the position'], ['Reason', 'Explain why'], ['Evidence', 'Support the claim'], ['Example', 'Make it concrete'], ['Counter-Argument', 'Show balance'], ['Refutation', 'Defend the position'], ['Conclusion', 'Finish logically'] ] }, hinglish: 'Stage aur uske purpose ka table \u2014 likhne se pehle ise dekh lo aur check karo ki tumhare text mein saaton stage aa rahe hain ya koi chhoot gaya.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are grammatical, not rhetorical \u2014 the syntax each fixed phrase demands. The third is the one real argumentation error: a refutation that repeats the objection instead of answering it.' ], mistakes: [
      { wrong: 'Meines Erachtens, dass die Ma\u00dfnahme sinnvoll ist.', right: 'Meines Erachtens ist die Ma\u00dfnahme sinnvoll. / Ich vertrete die Auffassung, dass die Ma\u00dfnahme sinnvoll ist.', why: '<b>Meines Erachtens</b> is an adverbial in position 1 \u2014 the verb follows it directly. Only <b>Ich vertrete die Auffassung</b> opens a dass-clause.' },
      { wrong: 'Zwar ist die Methode teuer, jedoch sie liefert genaue Daten.', right: 'Zwar ist die Methode teuer, jedoch liefert sie genaue Daten.', why: '<b>jedoch</b> is an adverb, not a conjunction like <i>aber</i> \u2014 so the verb comes second, before the subject.' },
      { wrong: 'Es k\u00f6nnte eingewendet werden, dass die Daten unvollst\u00e4ndig sind. Dem l\u00e4sst sich entgegenhalten, dass sie unvollst\u00e4ndig sind.', right: 'Es k\u00f6nnte eingewendet werden, dass die Daten unvollst\u00e4ndig sind. Dem l\u00e4sst sich entgegenhalten, dass die Kernbefunde dennoch belastbar sind.', why: 'A refutation has to add a NEW point. Repeating the objection concedes it instead of answering it.' },
      { wrong: 'Abschlie\u00dfend l\u00e4sst sich sagen, die Ma\u00dfnahme ist sinnvoll.', right: 'Abschlie\u00dfend l\u00e4sst sich sagen, dass die Ma\u00dfnahme sinnvoll ist.', why: '<b>l\u00e4sst sich sagen</b> needs <b>dass</b>, and the verb then goes to the end of that clause.' },
      { wrong: 'Studien zeigen, dass die Kosten sinken. Dies belegt daf\u00fcr.', right: 'Studien zeigen, dass die Kosten sinken. Dies belegt die These. / Daf\u00fcr spricht auch die zweite Studie.', why: '<b>belegen</b> takes a direct Akkusativ object, not <i>daf\u00fcr</i>. The verb that pairs with <b>daf\u00fcr</b> is <b>sprechen</b>.' },
      { wrong: 'Diese Sichtweise greift zu kurz, weil sie ber\u00fccksichtigt nicht die Kosten.', right: 'Diese Sichtweise greift zu kurz, weil sie die Kosten nicht ber\u00fccksichtigt.', why: 'After <b>weil</b> the verb goes to the very END of the clause \u2014 and <i>nicht</i> sits before it.' }
    ], hinglish: 'Paanch galtiyan asal mein grammar ki hain \u2014 har fixed phrase apna structure maangti hai, aur wahi galat ho jaata hai. Sirf teesri asli argumentation galti hai: refutation mein objection ko dohra dena, uska jawaab dene ki jagah.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to express an opinion? State your claim. Support with evidence. Provide an example. Consider the opposite side. Refute respectfully. Conclude logically.' ], note: 'Memory trick: every strong C1 argument answers seven questions — what is my opinion, why, what evidence, what example, what would someone disagree with, how do I answer that, what conclusion follows?', hinglish: 'Apni baat rakhni hai? Pehle claim, phir reason, phir saboot, phir ek example, phir doosri taraf ki baat, uska jawaab, aur ant mein nateeja. Aur har phrase likhte waqt ek cheez check karo \u2014 iske baad <b>dass</b> aana hai, <b>verb</b> aana hai, ya seedha noun?' }
  ],
  reading: {
    title: 'Bildungsdebatte: Digitale Werkzeuge im Klassenzimmer',
    titleEn: 'Reading A — Education debate: digital tools in the classroom',
    tokens: [
      { w: 'Aktuelle', role: 'r-evidenz', en: 'current (part of "aktuelle Forschung belegt", evidence phrase)', hi: '', type: 'Adjective · Nom.' },
      { w: 'Forschung', role: 'r-evidenz', en: 'research (part of fixed evidence expression)', hi: 'शोध (fixed evidence expression)', type: 'Noun · fem.' },
      { w: 'belegt', role: 'r-evidenz', en: 'proves (Satzende, "aktuelle Forschung belegt" — standard evidence-introducing phrase)', hi: 'सिद्ध करता है (Satzende, fixed phrase)', type: 'Verb (Präsens, Satzende)', why: '"Aktuelle Forschung belegt, dass..." is a standard phrase for introducing evidence in an argumentative text (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'Tablets', role: 'plain', en: 'tablets', hi: 'टैबलेट', type: 'Noun · plural' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Unterricht', role: 'plain', en: 'lessons (Satzende)', hi: 'कक्षा (Satzende)', type: 'Noun · masc.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Motivation', role: 'plain', en: 'motivation', hi: 'प्रेरणा', type: 'Noun · fem.' },
      { w: 'vieler', role: 'plain', en: 'of many', hi: 'कई', type: 'Determiner · Gen.' },
      { w: 'Schüler', role: 'plain', en: 'students (Satzende)', hi: 'छात्रों (Satzende)', type: 'Noun · plural' },
      { w: 'steigern', role: 'plain', en: 'increase (Satzende)', hi: 'बढ़ाते हैं (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-gegenargument', en: 'this (fem. nom., part of "diese Sichtweise greift zu kurz" — refutation phrase, opens a rebuttal)', hi: '', type: 'Demonstrativpronomen · Nom.' },
      { w: 'Sichtweise', role: 'r-gegenargument', en: 'perspective (part of fixed refutation phrase)', hi: 'नज़रिया (fixed refutation phrase)', type: 'Noun · fem.' },
      { w: 'greift', role: 'r-gegenargument', en: 'grasps (part of "greift zu kurz" — falls short)', hi: '', type: 'Verb (Präsens)' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'लेकिन', type: 'Adverb' },
      { w: 'zu', role: 'r-gegenargument', en: 'too (part of "zu kurz greifen")', hi: '', type: 'Adverb' },
      { w: 'kurz', role: 'r-gegenargument', en: 'short (Satzende, "greift zu kurz" — this view falls short/is too simplistic)', hi: 'सीमित है (Satzende, "greift zu kurz")', type: 'Adjective (Satzende)', why: '"Diese Sichtweise greift zu kurz" is a fixed C1 refutation phrase meaning "this view is too simplistic" (this chapter).' },
      { w: ',', plain: true },
      { w: 'denn', role: 'plain', en: 'because', hi: 'क्योंकि', type: 'Konjunktion' },
      { w: 'sie', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'blendet', role: 'plain', en: 'blends out', hi: 'नज़रअंदाज़ करता है', type: 'Verb · ausblenden' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'wachsende', role: 'plain', en: 'growing', hi: 'बढ़ती हुई', type: 'Adjective' },
      { w: 'Ablenkung', role: 'plain', en: 'distraction (Satzende)', hi: 'ध्यान भंग (Satzende)', type: 'Noun · fem.' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'के ज़रिए', type: 'Preposition · Akk.' },
      { w: 'Social-Media-Apps', role: 'plain', en: 'social media apps (Satzende)', hi: 'सोशल मीडिया ऐप (Satzende)', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: '(Satzende, prefix)', hi: '', type: 'Separable prefix · ausblenden' },
      { w: '.', plain: true }
    ],
    translation: 'Current research proves that tablets in lessons increase the motivation of many students. This perspective, however, falls short, because it blends out the growing distraction caused by social media apps.',
    comprehension: [
      { q: 'Welche Funktion hat "aktuelle Forschung belegt"?', options: ['Evidenz einführen', 'Ein Gegenargument einführen', 'Eine Schlussfolgerung ziehen'], answer: 0 },
      { q: 'Welche Funktion hat "diese Sichtweise greift zu kurz"?', options: ['Ein Argument widerlegen', 'Evidenz präsentieren', 'Eine Position einnehmen'], answer: 0 },
      { q: 'Was bedeutet "greift zu kurz"?', options: ['Ist zu vereinfacht/unzureichend', 'Ist überzeugend', 'Ist wissenschaftlich fundiert'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar', titleEn: 'Reading B — Newspaper opinion article',
    tokens: [
      { w: 'Kritiker', role: 'r-gegenargument', en: 'critics (subject of "Kritiker bemängeln", journalistic counter-argument phrase)', hi: 'aalochak (journalistic counter-argument phrase)', type: 'Noun · plural' },
      { w: 'bemängeln', role: 'r-gegenargument', en: 'criticize (Satzende, "Kritiker bemängeln" — standard journalistic counter-argument opener)', hi: 'aalochana karte hain (Satzende, "Kritiker bemängeln")', type: 'Verb (Präsens, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Kosten', role: 'plain', en: 'costs (Satzende, Pluraletantum)', hi: 'kharch (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zu', role: 'plain', en: 'too', hi: 'bahut', type: 'Adverb' },
      { w: 'hoch', role: 'plain', en: 'high (Satzende)', hi: 'zyaada (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'seien', role: 'plain', en: 'are (Konjunktiv I, indirect speech)', hi: '(Konjunktiv I, indirect speech, Satzende)', type: 'Verb · sein (Konjunktiv I, Satzende)' },
      { w: '.', plain: true },
      { w: 'Befürworter', role: 'r-evidenz', en: 'supporters (subject of "Befürworter weisen darauf hin", journalistic evidence phrase)', hi: 'samarthak (journalistic evidence phrase)', type: 'Noun · plural' },
      { w: 'weisen', role: 'r-evidenz', en: 'point (part of "weisen darauf hin")', hi: '(weisen darauf hin ka hissa)', type: 'Verb (Präsens)' },
      { w: 'darauf', role: 'r-evidenz', en: 'to that', hi: '(fixed phrase)', type: 'Pronominaladverb' },
      { w: 'hin', role: 'r-evidenz', en: '(Satzende, "weisen darauf hin" — point out that)', hi: 'ishaara karte hain (Satzende, "weisen darauf hin")', type: 'Partikel · trennbar (Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'langfristig', role: 'plain', en: 'in the long term', hi: 'deerghkaal mein', type: 'Adverb' },
      { w: 'Einsparungen', role: 'plain', en: 'savings (Satzende)', hi: 'bachat hoti hai (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'entstehen', role: 'plain', en: 'arise (Satzende)', hi: '(Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Critics criticize that the costs are too high. Supporters point out that long-term savings arise.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_034_L001', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meiner Ansicht nach macht Fernunterricht durchaus Sinn — er spart Zeit und Wege.', en: 'Timo, in my view remote teaching makes real sense — it saves time and commuting.' },
      { id: 'C1_034_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ein berechtigter Punkt, allerdings fehlt dabei der direkte Austausch zwischen Studierenden.', en: 'A valid point, however the direct exchange between students is missing there.' },
      { id: 'C1_034_L003', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das stimmt, aber genau dafür ließen sich doch zusätzliche Diskussionsforen einrichten.', en: 'That\'s true, but exactly for that additional discussion forums could be set up.' },
      { id: 'C1_034_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ein fairer Kompromiss — vielleicht sollten wir beide Modelle einfach kombinieren.', en: 'A fair compromise — maybe we should just combine both models.' }
    ],
    transcript: 'Timo, meiner Ansicht nach macht Fernunterricht durchaus Sinn — er spart Zeit und Wege. Ein berechtigter Punkt, allerdings fehlt dabei der direkte Austausch zwischen Studierenden. Das stimmt, aber genau dafür ließen sich doch zusätzliche Diskussionsforen einrichten. Ein fairer Kompromiss — vielleicht sollten wir beide Modelle einfach kombinieren.',
    translation: 'Timo, in my view remote teaching makes real sense — it saves time and commuting. A valid point, however the direct exchange between students is missing there. That\'s true, but exactly for that additional discussion forums could be set up. A fair compromise — maybe we should just combine both models.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meiner' },
      { w: 'Ansicht' },
      { w: 'nach' },
      { w: 'macht' },
      { w: 'Fernunterricht' },
      { w: 'durchaus' },
      { w: 'Sinn' },
      { w: '—', plain: true },
      { w: 'er' },
      { w: 'spart' },
      { w: 'Zeit' },
      { w: 'und' },
      { w: 'Wege' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'berechtigter' },
      { w: 'Punkt' },
      { w: ',', plain: true },
      { w: 'allerdings' },
      { w: 'fehlt' },
      { w: 'dabei' },
      { w: 'der' },
      { w: 'direkte' },
      { w: 'Austausch' },
      { w: 'zwischen' },
      { w: 'Studierenden' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'stimmt' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'genau' },
      { w: 'dafür' },
      { w: 'ließen' },
      { w: 'sich' },
      { w: 'doch' },
      { w: 'zusätzliche' },
      { w: 'Diskussionsforen' },
      { w: 'einrichten' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'fairer' },
      { w: 'Kompromiss' },
      { w: '—', plain: true },
      { w: 'vielleicht' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'beide' },
      { w: 'Modelle' },
      { w: 'einfach' },
      { w: 'kombinieren' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welchen Vorteil sieht Wibke in der Fernlehre?', qEn: 'What advantage does Wibke see in remote teaching?', options: ['es ist billiger', 'es spart Zeit und Wege', 'es ist einfacher', 'es macht mehr Spaß'], optionsEn: ['it is cheaper', 'it saves time and travel', 'it is easier', 'it is more fun'], answer: 1,
        explain: '"Er spart Zeit und Wege."' },
      { q: 'Was fehlt laut Timo?', qEn: 'What does Timo say is missing?', options: ['der direkte Austausch zwischen Studierenden', 'die Technik', 'das Interesse', 'die Lehrer'], optionsEn: ['the direct exchange between students', 'the technology', 'the interest', 'the teachers'], answer: 0,
        explain: '"Allerdings fehlt dabei der direkte Austausch zwischen Studierenden."' }
    ]
  },
  speaking: [
    { task: "Timo findet Fernunterricht sinnvoll. Widersprich mit einem Einwand.", taskEn: "Timo thinks distance learning makes sense. Object with a counterpoint.", de: "Ein berechtigter Punkt, allerdings fehlt dabei der direkte Austausch.", en: "A fair point, though the direct exchange is missing." },
    { task: "Nimm in der Diskussion klar Stellung.", taskEn: "Take a clear position in the discussion.", de: "Meines Erachtens schaden Gebühren gerade denen, die Bildung brauchen.", en: "In my view fees harm precisely those who need education." },
    { task: "Stütze deine Position mit Evidenz.", taskEn: "Support your position with evidence.", de: "Die Evidenz zeigt, dass die Zahl der Erstakademiker sinkt.", en: "The evidence shows the number of first-generation students falls." },
    { task: "Ein Kollege nennt einen Einwand. Halte ihm etwas entgegen.", taskEn: "A colleague raises an objection. Counter it.", de: "Dem lässt sich entgegenhalten, dass Steuerfinanzierung gerechter wirkt.", en: "Against that it can be argued that tax funding is fairer." },
    { task: "Die Moderatorin bittet dich um ein Schlusswort.", taskEn: "The moderator asks you for a closing statement.", de: "Abschließend halte ich fest, dass Bildung öffentlich bleiben muss.", en: "In conclusion I maintain that education must stay public." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve a weak argumentative essay by adding evidence, examples, counter-arguments, and stronger conclusions. Explain every improvement.\n\nTASK 2 — Argumentative essay (350 words): Demonstrate logical argumentation, academic register, evidence-based discussion, counter-arguments, and a balanced conclusion in authentic C1 style.',
    starters: ['Meines Erachtens sollte künstliche Intelligenz den Hochschulunterricht verändern.', 'Studien zeigen, dass personalisiertes Lernen effektiver ist.'],
    placeholder: 'Zwar ist die Technologie vielversprechend, jedoch könnte eingewendet werden, dass... Dem lässt sich entgegenhalten, dass...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase introduces a counter-argument?', options: ['Es könnte eingewendet werden, dass...', 'Studien zeigen, dass...', 'Abschließend lässt sich sagen, dass...'], answer: 0, explain: '"Es könnte eingewendet werden" introduces an objection or counter-argument to a claim.' },
    gap: { sentence: ['', ' sollte künstliche Intelligenz den Unterricht verändern.'], gaps: [ { answer: 'Meines Erachtens', accepts: ['Meines Erachtens'] } ], explain: '"Meines Erachtens" is the standard formal C1 opening for stating a position.' },
    match: { q: 'Match each phrase to its argumentation stage.', pairs: [ { noun: 'Studien zeigen', art: 'Evidence' }, { noun: 'Zwar...jedoch', art: 'Counter-argument' }, { noun: 'Dem lässt sich entgegenhalten', art: 'Refutation' }, { noun: 'Abschließend lässt sich sagen', art: 'Conclusion' } ] },
    builder: { target: 'Build: "One can counter this by saying that AI does not replace teachers." (refutation)', bank: ['Dem', 'lässt', 'sich', 'entgegenhalten', ',', 'dass', 'KI', 'Lehrkräfte', 'nicht', 'ersetzt', '.'], answer: ['Dem', 'lässt', 'sich', 'entgegenhalten', ',', 'dass', 'KI', 'Lehrkräfte', 'nicht', 'ersetzt', '.'], roles: { 'Dem': 'r-widerlegung', 'lässt': 'r-widerlegung', 'sich': 'r-widerlegung', 'entgegenhalten': 'r-widerlegung' } },
    errorCorrection: { title: 'Error correction', wrong: 'Ich denke, KI ist gut. Fertig.', right: 'Meines Erachtens ist KI vorteilhaft, da Studien zeigen, dass sie das Lernen individualisiert. Dennoch muss auch der Verlust menschlichen Kontakts berücksichtigt werden.', explain: 'An unsupported opinion with no evidence, example, or counter-argument is not a C1-level argument — it lacks the full structure expected at this level.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for argumentation?', options: ['A strong argument answers seven questions: opinion, reason, evidence, example, opposing view, response, conclusion', 'Just state your opinion clearly and stop', 'Use as many connectors as possible'], answer: 0, explain: 'Strong C1 argumentation is structured and evidence-based, not just an opinion.' },
    { q: 'What does "meines Erachtens" mean?', options: ['In my view (formal opinion opener)', 'However', 'In conclusion'], answer: 0, explain: '"Meines Erachtens" is the standard formal C1 phrase for presenting a position.' },
    { q: 'What is the function of "dem lässt sich entgegenhalten"?', options: ['To refute a counter-argument', 'To present evidence', 'To introduce the topic'], answer: 0, explain: 'This fixed phrase is used to counter an opposing argument elegantly.' },
    { q: 'Why must a strong C1 argument include a counter-argument?', options: ['Balanced argumentation acknowledges other perspectives before refuting them', 'It is not actually necessary', 'To make the text longer'], answer: 0, explain: 'Ignoring counter-arguments is a common learner mistake that weakens persuasive writing.' },
    { q: 'What phrase typically introduces a balanced conclusion?', options: ['Abschließend lässt sich sagen', 'Studien zeigen', 'Zwar...jedoch'], answer: 0, explain: '"Abschließend lässt sich sagen" is the standard C1 phrase for a final, logical conclusion.' }
  ],
  takeaways: [
    { c: 'r-position', html: 'Formal opinion openers (meines Erachtens, ich vertrete die Auffassung) start an academic argument at the appropriate register.' },
    { c: 'r-evidenz', html: 'Evidence phrases (Studien zeigen, ein Beispiel hierfür ist) and counter-argument/refutation phrases (zwar...jedoch, dem lässt sich entgegenhalten) build a balanced, persuasive case.' },
    { c: 'r-schlussfolgerung', html: 'A strong conclusion (abschließend lässt sich sagen) ties claim, evidence, counter-argument, and refutation into one logical whole.' }
  ],
  revisionTips: [
    'Take one opinion you hold and write it out following all seven stages: claim, reason, evidence, example, counter-argument, refutation, conclusion.',
    'Find a German opinion article and label each sentence with its argumentation stage (claim, evidence, counter-argument, refutation, or conclusion).',
    'Practise refutation by writing three different counter-arguments to your own position, then respond to each using "dem lässt sich entgegenhalten".'
  ]
};
window.CHAPTER = CHAPTER;
