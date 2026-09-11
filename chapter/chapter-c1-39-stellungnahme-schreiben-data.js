/* KLARWEG CHAPTER DATA — C1 · Chapter 39
   "Stellungnahme schreiben" — structured opinion writing: position,
   justification, counter-argument, evaluation, convincing
   conclusion. NOT summary/passive/cohesion (already mastered) —
   focus is the balanced-judge Stellungnahme model.
   Dialogue: Alina and Timo ONLY. */
const CHAPTER = {
  id: 'c1-39-stellungnahme-schreiben',
  phase: 'C1 · Nominalstil & Präzision',
  number: 39,
  title: 'Stellungnahme schreiben',
  titleEn: 'Writing a statement of opinion',
  description: 'Imagine you\'re a judge, not a fan. A fan supports one side immediately. A judge listens to both sides, evaluates the evidence, explains the reasoning, then reaches a justified decision.',
  xp: 970, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 40, title: 'Forumsbeitrag schreiben', titleEn: 'Writing a forum post' , href: 'chapter-c1-40-forumsbeitrag-schreiben.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'A Stellungnahme is written like a <em>judge</em>, not a fan.',
    intro: 'Preparing for the Goethe C1 Writing exam on whether AI should change exams, Alina states her view clearly while Timo weighs the reasons against it — writing like a judge, not a fan, toward one balanced conclusion.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See the full Stellungnahme architecture — position, evidence, counter-argument, evaluation, conclusion — in natural use'],
    scene: 'Vorbereitung auf die Goethe C1 Schreibprüfung: Soll künstliche Intelligenz Prüfungen verändern?',
    femaleSpeakers: ['Alina'],
    dialogue: [
      { speaker: 'Alina', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Auffassung', role: 'r-subject', en: 'view', hi: 'दृष्टिकोण', pron: 'OWF-fa-sung', type: 'Noun · fem.', why: 'die Auffassung (this chapter).', ex: 'meine Auffassung ist klar' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'klar', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'klahr', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'My view is clear.', hi: 'Mera drishtikon spasht hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dafür', role: 'r-akkusativ', en: 'for that', hi: 'उसके लिए', pron: 'da-FÜR', type: 'Adverb (feste Wendung)', why: 'dafür sprechen mehrere Gründe = several reasons speak for that, fixed argumentative phrase (this chapter).', ex: 'Dafür sprechen mehrere Gründe.', exEn: 'Several reasons speak for that.' },
        { w: 'sprechen', role: 'r-verb', en: 'speak', hi: 'कहते हैं', pron: 'SHPRE-khen', type: 'Verb · sprechen' },
        { w: 'mehrere', role: 'r-subject', en: 'several', hi: 'कई', pron: 'MAY-re-ruh', type: 'Determiner' },
        { w: 'Gründe', role: 'r-subject', en: 'reasons', hi: 'कारण', pron: 'GRÜN-duh', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'Several reasons speak for that.', hi: 'Uske liye kayi kaaran hain.' },
      { speaker: 'Alina', tokens: [
        { w: 'Manche', role: 'r-subject', en: 'some', hi: 'कुछ', pron: 'MAN-khuh', type: 'Determiner' },
        { w: 'würden', role: 'r-verb', en: 'would', hi: 'सकते हैं', pron: 'VÜR-den', type: 'Verb · werden (Konjunktiv II, plural)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'bestreiten', role: 'r-verb', en: 'dispute', hi: 'विरोध कर', pron: 'be-SHTRY-ten', type: 'Verb · infinitive (Satzende)', why: 'bestreiten = to dispute/contest (this chapter).', ex: 'das bestreiten' },
        { w: '.', plain: true }
      ], en: 'Some would dispute that.', hi: 'Kuch log ise vivaad kar sakte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'gründliche', role: 'r-akkusativ', en: 'thorough', hi: 'अच्छी तरह से', pron: 'GRÜNT-li-khuh', type: 'Adjective' },
        { w: 'Abwägung', role: 'r-akkusativ', en: 'weighing', hi: 'तुलना', pron: 'AP-vay-gung', type: 'Noun · fem.', why: 'die Abwägung (this chapter).', ex: 'eine Abwägung vornehmen' },
        { w: 'zeigt', role: 'r-verb', en: 'shows', hi: 'दिखाता है', pron: 'TSY-kt', type: 'Verb · zeigen' },
        { w: 'jedoch', role: 'r-adverb', en: 'however', hi: 'हालांकि', pron: 'yay-DOKH', type: 'Adverb' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'anderes', role: 'r-akkusativ', en: 'different', hi: 'अलग', pron: 'AN-de-res', type: 'Pronoun' },
        { w: '.', plain: true }
      ], en: 'A thorough weighing however shows something different.', hi: 'Halaanki ek acchi tarah se tulna kuch alag dikhaati hai.' },
      { speaker: 'Alina', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'halte', role: 'r-verb', en: 'maintain', hi: 'कहती हूँ', pron: 'HAL-tuh', type: 'Verb · festhalten (ich)', lexicalUnit: 'festhalten', why: 'festhalten = to maintain/state firmly (this chapter).', ex: 'Ich halte fest, dass die Politik falsch ist.', exEn: 'I maintain that the policy is wrong.' },
        { w: 'fest', role: 'r-verb', en: '(prefix of festhalten)', hi: '', pron: 'fest', type: 'Separable prefix', lexicalUnit: 'festhalten' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Politik', role: 'r-subject', en: 'policy', hi: 'राजनीति', pron: 'po-li-TEEK', type: 'Noun · fem.' },
        { w: 'falsch', role: 'r-akkusativ', en: 'wrong', hi: 'ग़लत', pron: 'falsh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I maintain that the policy is wrong.', hi: 'Main kehti hoon ki niti galat hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखता हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Stellungnahme', role: 'r-akkusativ', en: 'statement of opinion', hi: 'मत विवरण', pron: 'SHTE-lungs-nah-muh', type: 'Noun · fem.', why: 'die Stellungnahme (this chapter).', ex: 'die Stellungnahme schreiben' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Good, then I will write the statement right away.', hi: 'Achha, toh main abhi mat vivaran likhta hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine you\'re a <span class="de r-abwaegen">judge</span>, not a fan. A judge listens to both sides, evaluates the evidence, and reaches a justified conclusion.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is STELLUNGNAHME SCHREIBEN at C1 level — the full structure of a balanced, evidence-based opinion statement (position, justification, counter-argument, evaluation, conclusion), NOT an Erörterung, Zusammenfassung, passive voice, cohesion, or collocations (already mastered). Covered: introducing a position (Meines Erachtens, Ich bin der Auffassung, dass..., Aus meiner Sicht, Ich vertrete die Ansicht, dass..., Meiner Meinung nach); supporting the position (Dafür sprechen mehrere Gründe, Ein wesentlicher Aspekt ist..., Studien zeigen..., Ein überzeugendes Beispiel ist..., Daraus lässt sich schließen...); considering opposing views (Zwar...allerdings, Gegner dieser Ansicht argumentieren..., Es lässt sich nicht bestreiten, dass..., Dennoch...); academic evaluation (Unter Berücksichtigung der Forschung, Aus wissenschaftlicher Sicht, Die Daten deuten darauf hin..., Diese Ergebnisse sind kritisch zu bewerten); the evaluation-before-conclusion transition (Nach Abwägung beider Seiten); and a convincing final conclusion (Abschließend lässt sich festhalten, dass...). Do NOT expect or require passive constructions, cohesion devices, collocational precision, or summary-writing mechanics — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: writing emotionally rather than with reasoned justification; giving an unsupported opinion with no evidence; ignoring counter-arguments entirely; repeating the same argument in different words instead of adding new support; a weak or missing conclusion; mixing spoken and written German within the Stellungnahme. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag unsupported opinions, missing counter-arguments, and weak/missing conclusions; check that fixed Stellungnahme phrases (meines Erachtens, dafür sprechen mehrere Gründe, nach Abwägung beider Seiten, abschließend lässt sich festhalten) are used correctly and idiomatically. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Structure check:</b> one sentence on whether the learner\'s text follows the full position-evidence-counter-argument-evaluation-conclusion Stellungnahme model, judge-like rather than fan-like.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — your Stellungnahme reasons like a judge, weighing both sides before a justified conclusion. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Stellungnahme Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: write like a judge, not a fan.' },
  parserSentence: [ { w: 'Meines', role: 'r-position' }, { w: 'Erachtens', role: 'r-position' }, { w: 'ist', role: 'plain' }, { w: 'das', role: 'plain' }, { w: 'sinnvoll', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: write a Stellungnahme like a judge — weighing both sides before a justified conclusion.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Alina and Timo build a full Stellungnahme on AI in exams, using position, evidence, counter-argument, and conclusion.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key Stellungnahme expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master position, justification, counter-argument, evaluation, and conclusion phrases across registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read an opinion article and an academic commentary, identifying thesis, arguments, and conclusion.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify a speaker\'s opinion, supporting arguments, and conclusion in a university debate and expert interview.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Present opinions, defend viewpoints, and react to opposing arguments using authentic C1 speaking strategies.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Improve a weak Stellungnahme, and write a full 350-word Goethe C1 Stellungnahme.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill opinion selection, argument ordering, counter-argument practice, and conclusion improvement.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 970 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Argument ordering, counter-argument, and conclusion drills, plus a full Stellungnahme writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Stellungnahme Model, Persuasion Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Meines Erachtens sollte künstliche Intelligenz Prüfungen verändern.', text: 'Introduce a formal position with "meines Erachtens"' },
    { de: 'Dafür sprechen mehrere Gründe. Studien zeigen, dass individuelles Feedback hilfreich ist.', text: 'Support a position with the fixed justification phrase "dafür sprechen mehrere Gründe"' },
    { de: 'Zwar bestehen Bedenken hinsichtlich des Datenschutzes, allerdings lassen sich diese lösen.', text: 'Concede a counter-argument with "zwar...allerdings"' },
    { de: 'Nach Abwägung beider Seiten überwiegen die Vorteile.', text: 'Signal a justified evaluation with "nach Abwägung beider Seiten"' },
    { de: 'Abschließend lässt sich festhalten, dass KI Prüfungen verantwortungsvoll verbessern kann.', text: 'Draw a convincing conclusion with "abschließend lässt sich festhalten"' }
  ],
  vocab: [
    { de: 'die Auffassung', art: 'die', gender: 'f', plural: 'Auffassungen', pos: 'noun (fixed with "ich bin der Auffassung, dass")', level: 'C1', register: 'written', en: 'view, opinion', hi: 'दृष्टिकोण', ex: 'Ich bin der Auffassung, dass diese Reform notwendig ist.', exEn: 'I am of the view that this reform is necessary.', exHi: 'Mera drishtikon hai ki yeh reform zaroori hai.', ex2: 'Diese Auffassung wird von vielen Experten geteilt.', ex2En: 'This view is shared by many experts.', ex2Hi: 'Yeh drishtikon kai visheshagyon dwaara saanjha kiya jaata hai.' },
    { de: 'dafür sprechen mehrere Gründe', pos: 'fixed collocation', level: 'C1', register: 'written', en: 'several reasons speak for this', hi: 'iske kai kaaran हैं', ex: 'Dafür sprechen mehrere Gründe: Erstens..., zweitens...', exEn: 'Several reasons speak for this: firstly..., secondly...', exHi: 'Iske kai kaaran hain: pehla..., doosra...', ex2: 'Für diese Entscheidung sprechen mehrere Gründe.', ex2En: 'Several reasons speak for this decision.', ex2Hi: 'Iss faisle ke kai kaaran hain.' },
    { de: 'bestreiten', pos: 'verb', level: 'C1', register: 'written', en: 'to dispute, deny', hi: 'विवाद करना', ex: 'Es lässt sich nicht bestreiten, dass Vorteile bestehen.', exEn: 'It cannot be disputed that advantages exist.', exHi: 'Iss baat se inkaar nahi kiya jaa sakta ki faayde hain.', ex2: 'Niemand bestreitet den Wert der Bildung.', ex2En: 'No one disputes the value of education.', ex2Hi: 'Koi bhi shiksha ke mahatva par vivaad nahi karta.', conj: { praesens: 'bestreitet', praeteritum: 'bestritt', perfekt: 'hat bestritten' } },
    { de: 'die Abwägung', art: 'die', gender: 'f', plural: 'Abwägungen', pos: 'noun', level: 'C1', register: 'written', en: 'weighing, balancing (of evidence/arguments)', hi: 'तुलनात्मक मूल्यांकन', ex: 'Nach Abwägung beider Seiten überwiegen die Vorteile.', exEn: 'After weighing both sides, the advantages outweigh.', exHi: 'Dono paksh tolne ke baad, faayde zyaada hain.', ex2: 'Eine sorgfältige Abwägung ist bei dieser Entscheidung nötig.', ex2En: 'A careful weighing is necessary for this decision.', ex2Hi: 'Iss faisle ke liye saavdhaan tulna zaroori hai.' },
    { de: 'festhalten', pos: 'verb (trennbar, fixed with "abschließend lässt sich...")', level: 'C1', register: 'written', en: 'to establish, conclude (formally)', hi: 'निष्कर्ष निकालना', ex: 'Abschließend lässt sich festhalten, dass KI Prüfungen verbessern kann.', exEn: 'In conclusion, one can establish that AI can improve exams.', exHi: 'Ant mein, kaha jaa sakta hai ki AI pareekshaayon ko behtar bana sakti hai.', ex2: 'Man kann festhalten, dass sich die Lage verbessert hat.', ex2En: 'One can establish that the situation has improved.', ex2Hi: 'Kaha jaa sakta hai ki sthiti behtar hui hai.', conj: { praesens: 'hält fest', praeteritum: 'hielt fest', perfekt: 'hat festgehalten' } }
  ],
  grammar: [
    { title: 'Was ist eine Stellungnahme? (What is a Stellungnahme?)', body: [ 'Issue → Position → Arguments → Evidence → Counter-Argument → Evaluation → Conclusion. A Stellungnahme presents a well-reasoned position, not an emotional reaction.' ], hinglish: 'Stellungnahme mein tumhari raay aati hai, par saboot ke saath \u2014 sirf \u201cmujhe achha lagta hai\u201d kaafi nahi. Dhaancha saat step ka hai: issue, apni position, arguments, saboot, doosri taraf ki baat, dono ka mulyankan, aur ant mein ek saaf nateeja. Exam mein yahi structure dekha jaata hai.' },
    { title: 'Position einführen (Introducing Your Position)', body: [ 'Meines Erachtens..., Ich bin der Auffassung, dass..., Aus meiner Sicht..., Ich vertrete die Ansicht, dass..., Meiner Meinung nach... — formal ways to state your opinion at the start.' ], hinglish: 'Yeh paanch phrases formal hain, par inka grammar alag hai \u2014 aur yahi sabse zyada galat hota hai. <b>Ich bin der Auffassung</b> aur <b>Ich vertrete die Ansicht</b> ke baad <b>dass</b> aata hai. Par <b>Meines Erachtens</b>, <b>Aus meiner Sicht</b> aur <b>Meiner Meinung nach</b> ke baad seedha <b>verb</b> aata hai, <i>dass</i> nahi.' },
    { title: 'Position stützen (Supporting Your Position)', body: [ 'Dafür sprechen mehrere Gründe. Ein wesentlicher Aspekt ist..., Studien zeigen..., Ein überzeugendes Beispiel ist..., Daraus lässt sich schließen... — evidence and reasoning support the stated position.' ], hinglish: 'Support dene ke liye yeh phrases kaam aati hain, par ek baat dhyaan mein rakho \u2014 support mein <b>nayi</b> baat aani chahiye. Apni hi baat dohra dena support nahi hai, woh circular ho jaata hai. Aur <b>Daraus l\u00e4sst sich schlie\u00dfen</b> ke baad <b>dass</b> aata hai.' },
    { title: 'Gegensätzliche Ansichten berücksichtigen (Considering Opposing Views)', body: [ 'Zwar..., Allerdings..., Gegner dieser Ansicht argumentieren..., Es lässt sich nicht bestreiten, dass..., Dennoch... — respectful acknowledgement of the opposing view strengthens the Stellungnahme.' ], hinglish: 'Doosri taraf ki baat maan lena tumhari position kamzor nahi karta \u2014 mazboot karta hai, kyunki dikhta hai ki tumne poora socha. <span class="de">Es l\u00e4sst sich nicht bestreiten, dass \u2026</span> sabse formal tareeka hai kisi baat ko maan-ne ka. Aur dhyaan do ki <b>Allerdings</b> aur <b>Dennoch</b> adverbs hain, isliye inke turant baad verb aata hai.' },
    { title: 'Register-spezifische Bewertung (Register-Specific Evaluation)', body: [ 'Register ke hisaab se phrases badalti hain. Academic mein <span class="de">Aus wissenschaftlicher Sicht</span> aur <span class="de">Unter Ber\u00fccksichtigung der Forschung</span> \u2014 dono position 1 lete hain, isliye verb turant baad. Scientific mein <span class="de">Die Daten deuten darauf hin, dass \u2026</span>. Aur journalism mein <span class="de">Bef\u00fcrworter argumentieren, dass \u2026</span> \u2014 isse baat kisi aur ke naam se aati hai.' ], hinglish: 'Register ke hisaab se phrases badalti hain. Academic mein <span class="de">Aus wissenschaftlicher Sicht</span> aur <span class="de">Unter Ber\u00fccksichtigung der Forschung</span> \u2014 dono position 1 lete hain, isliye verb turant baad. Scientific mein <span class="de">Die Daten deuten darauf hin, dass \u2026</span>. Aur journalism mein <span class="de">Bef\u00fcrworter argumentieren, dass \u2026</span> \u2014 isse baat kisi aur ke naam se aati hai.' },
    { title: 'Eine überzeugende Schlussfolgerung bauen (Building a Convincing Conclusion)', body: [ 'Arguments → Evaluation → Personal Position → Recommendation → Strong Final Statement. "Nach Abwägung beider Seiten" signals the transition to the justified conclusion; "abschließend lässt sich festhalten" delivers it.' ], hinglish: 'Conclusion mein faisla dena zaroori hai, warna Stellungnahme adhoora lagta hai. <span class="de">Nach Abw\u00e4gung beider Seiten</span> se pata chalta hai ki ab tum nateeje par aa rahe ho \u2014 aur yeh position 1 leta hai, isliye uske baad verb aata hai aur comma nahi lagta. Uske baad <span class="de">Abschlie\u00dfend l\u00e4sst sich festhalten, <b>dass</b> \u2026</span> se faisla do.' },
    {
      title: 'dass oder kein dass? Die Syntax der Einleitungen',
      body: [
        'The opening phrases of a Stellungnahme split into two groups, and confusing them is the most common error in this genre.',
        'Phrases built on a NOUN (Auffassung, Ansicht, Meinung) take a <b>dass</b>-clause. Adverbial phrases take position 1, so the verb follows immediately and no comma intervenes.'
      ],
      table: {
        head: ['Phrase', 'Continuation', 'Example'],
        rows: [
          ['Ich bin der Auffassung / Ich vertrete die Ansicht', '<b>dass</b> + verb last', '<span class="de">Ich bin der Auffassung, <b>dass</b> es notwendig ist.</span>'],
          ['Meines Erachtens / Meiner Meinung nach / Aus meiner Sicht', 'position 1 \u2192 <b>verb second</b>, no comma', '<span class="de">Meines Erachtens <b>ist</b> es notwendig.</span>'],
          ['Nach Abw\u00e4gung beider Seiten', 'position 1 \u2192 <b>verb second</b>, no comma', '<span class="de">Nach Abw\u00e4gung beider Seiten <b>bin</b> ich \u2026</span>'],
          ['Abschlie\u00dfend l\u00e4sst sich festhalten', '<b>dass</b> + verb last', '<span class="de">\u2026 festhalten, <b>dass</b> die Vorteile \u00fcberwiegen.</span>'],
          ['Allerdings / Dennoch', 'adverb \u2192 <b>verb second</b>', '<span class="de">Allerdings <b>\u00fcberwiegen</b> sie nicht.</span>']
        ]
      },
      note: 'The pair worth memorising: <b>Meiner Meinung nach ist \u2026</b> (no dass) versus <b>Ich bin der Meinung, dass \u2026</b> (dass). Same noun, different syntax.',
      hinglish: 'Stellungnahme ki opening phrases do groups mein bantti hain, aur inhe mila dena is genre ki sabse aam galti hai. Jo phrases kisi <b>noun</b> par bani hain \u2014 <b>Auffassung</b>, <b>Ansicht</b>, <b>Meinung</b> \u2014 unke baad <b>dass</b> aata hai aur verb clause ke end mein jaata hai: <span class="de">Ich bin der Auffassung, dass es notwendig ist.</span> Aur jo adverbial hain \u2014 <b>Meines Erachtens</b>, <b>Meiner Meinung nach</b>, <b>Aus meiner Sicht</b>, <b>Nach Abw\u00e4gung beider Seiten</b> \u2014 woh position 1 lete hain, isliye unke turant baad <b>verb</b> aata hai aur beech mein comma nahi lagta. Ek jodi khaas yaad rakho \u2014 <span class="de">Meiner Meinung nach <b>ist</b> \u2026</span> par <span class="de">Ich bin der Meinung, <b>dass</b> \u2026</span>: noun wahi hai, syntax alag.'
    },
    { title: 'Meister-Tabelle', body: [ 'Section mapped to purpose.' ], table: { head: ['Section', 'Purpose'], rows: [ ['Introduction', 'Present the issue'], ['Position', 'State your opinion'], ['Arguments', 'Justify your opinion'], ['Counter-Argument', 'Show balance'], ['Evaluation', 'Weigh both sides'], ['Conclusion', 'Final recommendation'] ] }, hinglish: 'Chhe section ka table \u2014 likhne se pehle check karo ki saare aa rahe hain, khaas kar counter-argument aur evaluation, jo aksar chhoot jaate hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are the syntax that each opening phrase demands \u2014 <b>dass</b> or no <b>dass</b>, comma or no comma, verb-second. The other two are circular support and a register break.' ], mistakes: [
      { wrong: 'Ich bin der Auffassung, die Ma\u00dfnahme ist notwendig.', right: 'Ich bin der Auffassung, dass die Ma\u00dfnahme notwendig ist.', why: '<b>Ich bin der Auffassung</b> requires a <b>dass</b>-clause \u2014 and the verb then goes to the end. (Compare <b>Meines Erachtens</b>, which takes no <i>dass</i> at all.)' },
      { wrong: 'Daf\u00fcr sprechen mehrere Gr\u00fcnde: die Ma\u00dfnahme ist notwendig.', right: 'Daf\u00fcr sprechen mehrere Gr\u00fcnde: Erstens senkt sie die Kosten, zweitens erh\u00f6ht sie die Sicherheit.', why: 'A supporting section must add NEW information. Repeating the claim as its own reason is circular.' },
      { wrong: 'Es l\u00e4sst sich nicht bestreiten, dass die Kosten hoch sind. Allerdings sie \u00fcberwiegen nicht.', right: 'Es l\u00e4sst sich nicht bestreiten, dass die Kosten hoch sind. Allerdings \u00fcberwiegen sie nicht.', why: '<b>Allerdings</b> is an adverb in position 1, so the verb follows it directly \u2014 before the subject.' },
      { wrong: 'Nach Abw\u00e4gung beider Seiten, bin ich der Meinung, dass \u2026', right: 'Nach Abw\u00e4gung beider Seiten bin ich der Meinung, dass \u2026', why: 'German puts no comma after a position-1 adverbial phrase \u2014 and the verb must come immediately after it.' },
      { wrong: 'Abschlie\u00dfend l\u00e4sst sich festhalten, die Vorteile \u00fcberwiegen.', right: 'Abschlie\u00dfend l\u00e4sst sich festhalten, dass die Vorteile \u00fcberwiegen.', why: '<b>l\u00e4sst sich festhalten</b> always opens a <b>dass</b>-clause. Without it the sentence breaks in two.' },
      { wrong: 'Meines Erachtens, dass die Regelung sinnvoll ist \u2014 finde ich echt gut.', right: 'Meines Erachtens ist die Regelung sinnvoll.', why: 'Two errors: <b>Meines Erachtens</b> never takes <i>dass</i>, and <i>echt gut</i> is spoken register in a formal written genre.' }
    ], hinglish: 'Chaar galtiyan opening phrases ke syntax ki hain \u2014 <b>dass</b> aayega ya nahi, comma lagega ya nahi, aur verb kahan. Baaki do: support mein wahi baat dohra dena, aur formal text mein bolchaal ke shabd aa jaana.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What is the issue? Choose your position. Support it with evidence. Address opposing views. Evaluate both sides. Write a convincing conclusion.' ], note: 'Memory trick: write like a judge, not a fan. A fan supports one side immediately; a judge listens to both sides, evaluates the evidence, then reaches a justified decision.', hinglish: 'Issue samjho, apni position tay karo, saboot do, doosri taraf ki baat rakho, dono ko tolo, aur ek saaf nateeja do. Aur har opening phrase likhte waqt ek cheez check karo \u2014 iske baad <b>dass</b> aana hai ya seedha <b>verb</b>?' }
  ],
  reading: {
    title: 'Leserbrief: Sollte Homeoffice zur Regel werden?',
    titleEn: 'Reading A — Letter to the editor: should remote work become the norm?',
    tokens: [
      { w: 'Ich', role: 'r-position', en: 'I (part of "ich vertrete die Ansicht, dass" — position-opener)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'vertrete', role: 'r-position', en: 'represent (part of fixed position expression)', hi: '', type: 'Verb (Präsens)' },
      { w: 'die', role: 'r-position', en: 'the (fem. akk., part of expression)', hi: '', type: 'Article · Akk.' },
      { w: 'Ansicht', role: 'r-position', en: 'view (Satzende, "ich vertrete die Ansicht, dass" — standard formal position opener)', hi: 'नज़रिया रखता हूँ (Satzende, standard formal position opener)', type: 'Noun · fem. (Satzende)', why: '"Ich vertrete die Ansicht, dass" is a standard formal alternative to "meines Erachtens" for introducing a position (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'Homeoffice', role: 'plain', en: 'remote work', hi: 'होमऑफिस', type: 'Noun · neut.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Produktivität', role: 'plain', en: 'productivity', hi: 'उत्पादकता', type: 'Noun · fem.' },
      { w: 'vieler', role: 'plain', en: 'of many', hi: 'कई', type: 'Determiner · Gen.' },
      { w: 'Angestellter', role: 'plain', en: 'employees (Satzende)', hi: 'कर्मचारियों की (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'nachweislich', role: 'plain', en: 'demonstrably', hi: 'सिद्ध रूप से', type: 'Adverb' },
      { w: 'steigert', role: 'plain', en: 'increases (Satzende)', hi: 'बढ़ाता है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-gegenargument', en: 'it (part of "es lässt sich nicht bestreiten, dass" — refutation-resistant admission)', hi: '', type: 'Pronomen · Nom.' },
      { w: 'lässt', role: 'r-gegenargument', en: 'lets (part of fixed expression)', hi: '', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'r-gegenargument', en: '(reflexive)', hi: '', type: 'Reflexivpronomen · Akk.' },
      { w: 'nicht', role: 'r-gegenargument', en: 'not (part of expression)', hi: 'नहीं (expression का हिस्सा)', type: 'Negation' },
      { w: 'bestreiten', role: 'r-gegenargument', en: 'dispute (Satzende, "es lässt sich nicht bestreiten, dass" — it cannot be denied that)', hi: 'इनकार किया जा सकता (Satzende, "cannot be denied that")', type: 'Verb (Infinitiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'spontane', role: 'plain', en: 'spontaneous', hi: 'स्वाभाविक', type: 'Adjective · Nom.' },
      { w: 'Gespräche', role: 'plain', en: 'conversations (Satzende)', hi: 'बातचीत (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'zwischen', role: 'plain', en: 'between', hi: 'के बीच', type: 'Preposition · Dat.' },
      { w: 'Kollegen', role: 'plain', en: 'colleagues (Satzende)', hi: 'सहकर्मियों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'seltener', role: 'plain', en: 'rarer (Satzende)', hi: 'दुर्लभ (Satzende)', type: 'Adjective · Komparativ' },
      { w: 'werden', role: 'plain', en: 'become (Satzende)', hi: 'हो जाती हैं (Satzende)', type: 'Verb · werden (Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'I hold the view that remote work demonstrably increases the productivity of many employees. It cannot be denied that spontaneous conversations between colleagues become rarer.',
    comprehension: [
      { q: 'Welche Funktion hat "ich vertrete die Ansicht, dass"?', options: ['Eine Position einführen', 'Ein Gegenargument einführen', 'Eine Schlussfolgerung ziehen'], answer: 0 },
      { q: 'Welche Funktion hat "es lässt sich nicht bestreiten, dass"?', options: ['Ein Gegenargument respektvoll anerkennen', 'Die Position stärken', 'Evidenz präsentieren'], answer: 0 },
      { q: 'Ist diese Passage emotional oder begründet?', options: ['Begründet, mit anerkannter Gegenposition', 'Rein emotional', 'Ohne jede Struktur'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Akademischer Kommentar', titleEn: 'Reading B — Academic commentary',
    tokens: [
      { w: 'Unter', role: 'r-begruendung', en: 'under (part of "unter Berücksichtigung der Forschung" — fixed academic evaluation phrase)', hi: '(unter Berücksichtigung der Forschung, academic phrase)', type: 'Präposition · Dat.' },
      { w: 'Berücksichtigung', role: 'r-begruendung', en: 'consideration (part of fixed phrase)', hi: '(fixed phrase)', type: 'Noun · fem. · Dat.' },
      { w: 'der', role: 'r-begruendung', en: 'the (fem. gen.)', hi: '(fixed phrase ka hissa)', type: 'Article · Gen.' },
      { w: 'Forschung', role: 'r-begruendung', en: 'research (Satzende, "unter Berücksichtigung der Forschung" — considering the research)', hi: 'shodh ko dhyaan mein rakhte hue (Satzende, fixed phrase)', type: 'Noun · fem. (Satzende)', why: '"Unter Berücksichtigung der Forschung" is a standard academic phrase for grounding an evaluation in existing research.' },
      { w: 'lässt', role: 'plain', en: 'lets', hi: '(fixed expression)', type: 'Verb (Präsens)' },
      { w: 'sich', role: 'plain', en: '(reflexive)', hi: '(reflexive)', type: 'Reflexivpronomen · Akk.' },
      { w: 'diese', role: 'plain', en: 'this (fem. nom.)', hi: 'yeh', type: 'Demonstrativpronomen · Nom.' },
      { w: 'Position', role: 'plain', en: 'position (Satzende)', hi: 'position ka (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'rechtfertigen', role: 'plain', en: 'justify (Satzende)', hi: 'औचित्य siddh hota hai (Satzende)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Considering the research, this position can be justified.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_039_L001', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, meine These ist klar: KI-gestützte Prüfungen sollten die Ausnahme bleiben, nicht die Regel.', en: 'Timo, my thesis is clear: AI-assisted exams should remain the exception, not the rule.' },
      { id: 'C1_039_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Interessant, aber welche Gegenargumente berücksichtigst du in deiner Stellungnahme?', en: 'Interesting, but what counterarguments do you consider in your position paper?' },
      { id: 'C1_039_L003', speaker: 'Alina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich erwähne die Effizienz, gewichte sie aber geringer als die Frage der Fairness.', en: 'I mention efficiency, but weight it less than the question of fairness.' },
      { id: 'C1_039_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das ergibt eine ausgewogene Argumentation, genau das erwartet die Prüfung.', en: 'That makes for a balanced argument, exactly what the exam expects.' }
    ],
    transcript: 'Timo, meine These ist klar: KI-gestützte Prüfungen sollten die Ausnahme bleiben, nicht die Regel. Interessant, aber welche Gegenargumente berücksichtigst du in deiner Stellungnahme? Ich erwähne die Effizienz, gewichte sie aber geringer als die Frage der Fairness. Das ergibt eine ausgewogene Argumentation, genau das erwartet die Prüfung.',
    translation: 'Timo, my thesis is clear: AI-assisted exams should remain the exception, not the rule. Interesting, but what counterarguments do you consider in your position paper? I mention efficiency, but weight it less than the question of fairness. That makes for a balanced argument, exactly what the exam expects.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'meine' },
      { w: 'These' },
      { w: 'ist' },
      { w: 'klar' },
      { w: ':', plain: true },
      { w: 'KI', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'gestützte' },
      { w: 'Prüfungen' },
      { w: 'sollten' },
      { w: 'die' },
      { w: 'Ausnahme' },
      { w: 'bleiben' },
      { w: ',', plain: true },
      { w: 'nicht' },
      { w: 'die' },
      { w: 'Regel' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'welche' },
      { w: 'Gegenargumente' },
      { w: 'berücksichtigst' },
      { w: 'du' },
      { w: 'in' },
      { w: 'deiner' },
      { w: 'Stellungnahme' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'erwähne' },
      { w: 'die' },
      { w: 'Effizienz' },
      { w: ',', plain: true },
      { w: 'gewichte' },
      { w: 'sie' },
      { w: 'aber' },
      { w: 'geringer' },
      { w: 'als' },
      { w: 'die' },
      { w: 'Frage' },
      { w: 'der' },
      { w: 'Fairness' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'ergibt' },
      { w: 'eine' },
      { w: 'ausgewogene' },
      { w: 'Argumentation' },
      { w: ',', plain: true },
      { w: 'genau' },
      { w: 'das' },
      { w: 'erwartet' },
      { w: 'die' },
      { w: 'Prüfung' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was ist Alinas These?', qEn: 'What is Alina\'s thesis?', options: ['KI-Prüfungen sollten Standard werden', 'KI-Prüfungen sollten die Ausnahme bleiben', 'Prüfungen sollten abgeschafft werden', 'KI sollte verboten werden'], optionsEn: ['AI exams should become standard', 'AI exams should remain the exception', 'Exams should be abolished', 'AI should be banned'], answer: 1,
        explain: '"KI-gestützte Prüfungen sollten die Ausnahme bleiben, nicht die Regel."' },
      { q: 'Wie behandelt Alina die Effizienz in ihrer Argumentation?', qEn: 'How does Alina treat efficiency in her argument?', options: ['sie ignoriert sie komplett', 'sie gewichtet sie geringer als Fairness', 'sie hält sie für am wichtigsten', 'sie erwähnt sie nicht'], optionsEn: ['she ignores them completely', 'she weighs it lower than fairness', 'she considers them the most important', 'she doesn\'t mention them'], answer: 1,
        explain: '"Ich erwähne die Effizienz, gewichte sie aber geringer als die Frage der Fairness."' }
    ]
  },
  speaking: [
    { task: "Timo will KI-Prüfungen als Ausnahme. Frag nach den Gegenargumenten.", taskEn: "Timo wants AI exams to remain the exception. Ask about counter-arguments.", de: "Welche Gegenargumente berücksichtigst du in deiner Abwägung?", en: "Which counter-arguments do you take into account in your assessment?" },
    { task: "Nimm zur Anwesenheitspflicht klar Stellung.", taskEn: "State your position clearly on compulsory attendance.", de: "Meine Auffassung ist, dass eine Anwesenheitspflicht der falsche Weg ist.", en: "My view is that compulsory attendance is the wrong approach." },
    { task: "Begründe deine Position mit zwei Gründen.", taskEn: "Justify your position with two reasons.", de: "Dafür sprechen mehrere Gründe: viele arbeiten nebenher, und Präsenz sagt wenig.", en: "There are several reasons: many work alongside, and attendance says little." },
    { task: "Ein Kollege behauptet, die Beteiligung steige dadurch. Bestreite es.", taskEn: "A colleague claims participation rises as a result. Dispute it.", de: "Das bestreite ich; die Motivation sinkt eher.", en: "I dispute that; motivation tends to fall." },
    { task: "Timo fragt, wie du deine Stellungnahme beendest.", taskEn: "Timo asks how you'll end your position statement.", de: "Nach der Abwägung halte ich freiwillige Angebote für wirksamer.", en: "After weighing it up I consider voluntary provision more effective." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve a weak Stellungnahme by adding stronger arguments, better evidence, counter-arguments, and a clearer conclusion. Explain every improvement.\n\nTASK 2 — Stellungnahme (350 words): Demonstrate clear structure, balanced reasoning, academic register, authentic C1 vocabulary, and a convincing conclusion.',
    starters: ['Meines Erachtens sollte künstliche Intelligenz Prüfungen verändern.', 'Dafür sprechen mehrere Gründe. Studien zeigen, dass individuelles Feedback hilfreich ist.'],
    placeholder: 'Zwar bestehen Bedenken hinsichtlich..., allerdings lassen sich diese lösen. Nach Abwägung beider Seiten...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase acknowledges a counter-argument before continuing the argument?', options: ['Zwar...allerdings', 'Meines Erachtens', 'Abschließend lässt sich festhalten'], answer: 0, explain: '"Zwar...allerdings" concedes a point before returning to the writer\'s position, showing balance.' },
    gap: { sentence: ['', ' sollte künstliche Intelligenz Prüfungen verändern.'], gaps: [ { answer: 'Meines Erachtens', accepts: ['Meines Erachtens'] } ], explain: '"Meines Erachtens" is the standard formal C1 opening for a Stellungnahme position.' },
    match: { q: 'Match each phrase to its Stellungnahme section.', pairs: [ { noun: 'Meines Erachtens', art: 'Position' }, { noun: 'Dafür sprechen mehrere Gründe', art: 'Justification' }, { noun: 'Zwar...allerdings', art: 'Counter-argument' }, { noun: 'Abschließend lässt sich festhalten', art: 'Conclusion' } ] },
    builder: { target: 'Build: "After weighing both sides, the advantages outweigh." (evaluation)', bank: ['Nach', 'Abwägung', 'beider', 'Seiten', 'überwiegen', 'die', 'Vorteile', '.'], answer: ['Nach', 'Abwägung', 'beider', 'Seiten', 'überwiegen', 'die', 'Vorteile', '.'], roles: { 'Nach': 'r-abwaegen', 'Abwägung': 'r-abwaegen', 'beider': 'r-abwaegen', 'Seiten': 'r-abwaegen' } },
    errorCorrection: { title: 'Error correction', wrong: 'Ich finde KI ist super für Prüfungen. Fertig.', right: 'Meines Erachtens kann KI Prüfungen verbessern, da Studien positive Effekte belegen. Zwar bestehen Bedenken hinsichtlich der Fairness, allerdings lassen sich diese durch klare Standards lösen.', explain: 'An unsupported, emotional opinion with no evidence or counter-argument is not a C1-level Stellungnahme — it lacks the full judge-like structure.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for the Stellungnahme?', options: ['Write like a judge, not a fan — weigh both sides before a justified conclusion', 'State your opinion once and stop', 'Use as many fixed phrases as possible'], answer: 0, explain: 'A C1 Stellungnahme presents a well-reasoned position, evaluating evidence like a judge.' },
    { q: 'What does "meines Erachtens" do?', options: ['Introduces a formal position', 'Signals a counter-argument', 'Closes the conclusion'], answer: 0, explain: '"Meines Erachtens" is the standard C1 phrase for introducing an opinion.' },
    { q: 'What is the function of "zwar...allerdings"?', options: ['To concede a counter-argument before continuing the position', 'To introduce the topic', 'To present the final conclusion'], answer: 0, explain: 'This pair acknowledges an opposing point while maintaining the overall argument.' },
    { q: 'Why must a Stellungnahme include a counter-argument?', options: ['A judge-like approach weighs both sides explicitly, strengthening credibility', 'It is not actually necessary', 'To make the text longer'], answer: 0, explain: 'Ignoring counter-arguments turns reasoned writing into one-sided opinion.' },
    { q: 'What phrase typically signals the transition to a justified conclusion?', options: ['Nach Abwägung beider Seiten', 'Dafür sprechen mehrere Gründe', 'Ich bin der Auffassung, dass'], answer: 0, explain: '"Nach Abwägung beider Seiten" signals that both sides have been weighed before the final decision.' }
  ],
  takeaways: [
    { c: 'r-position', html: 'Formal position openers (meines Erachtens, ich vertrete die Ansicht) begin a Stellungnahme with a clear, stated opinion.' },
    { c: 'r-begruendung', html: 'Justification phrases (dafür sprechen mehrere Gründe, unter Berücksichtigung der Forschung) ground the position in evidence and reasoning.' },
    { c: 'r-gegenargument', html: 'Counter-argument acknowledgement (zwar...allerdings, es lässt sich nicht bestreiten) shows judge-like balance rather than one-sided opinion.' },
    { c: 'r-abwaegen', html: 'The evaluation transition (nach Abwägung beider Seiten) and conclusion (abschließend lässt sich festhalten) deliver a justified, convincing final judgement.' }
  ],
  revisionTips: [
    'Take one opinion you hold and write it out following all six sections: introduction, position, arguments, counter-argument, evaluation, conclusion.',
    'Find a German opinion article and label each paragraph with its Stellungnahme function (position, evidence, counter-argument, evaluation, or conclusion).',
    'Practise the judge mindset: for one topic, write down the strongest argument for and against, then weigh them explicitly before concluding.'
  ]
};
window.CHAPTER = CHAPTER;
