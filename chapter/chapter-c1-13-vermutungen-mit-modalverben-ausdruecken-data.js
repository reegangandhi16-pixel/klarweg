/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 13
   "Vermutungen mit Modalverben ausdrücken" — epistemic modal
   verbs, certainty scale (muss/dürfte/könnte/mag/vielleicht),
   deduction from evidence, journalism vs academic hedging.
   Builds on Ch.12's objective/subjective distinction — this
   chapter goes deeper into the epistemic (assumption) use only.
   Dialogue: Sina and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-13-vermutungen-mit-modalverben-ausdruecken',
  phase: 'C1 · Modalität & Nuance',
  number: 13,
  title: 'Vermutungen mit Modalverben ausdrücken',
  titleEn: 'Expressing assumptions with modal verbs',
  description: 'Don\'t ask "what does the modal verb mean?" Ask "how certain is the speaker?" The modal verb reveals confidence, not necessarily truth.',
  xp: 450,
  time: 100,
  difficulty: 'Advanced',
  nextChapter: { number: 14, title: 'Konjunktiv II für Irreales & Hypothesen', titleEn: 'Konjunktiv II for the unreal and hypothetical' , href: 'chapter-c1-14-konjunktiv-ii-fuer-irreales-und-hypothesen.html' },

  prevChapter: { number: 12, title: 'Modalverben präzise verwenden', titleEn: 'Using modal verbs precisely', href: 'chapter-c1-12-modalverben-praezise-verwenden.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The modal verb reveals <em>confidence</em>, not necessarily truth.',
    intro: 'Faulty sales figures have Sina suspecting a system error and Timo wondering about human error — every modal verb here reveals how confident the speaker is, not necessarily what\'s true.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See the full certainty scale (muss → dürfte → könnte → mag → vielleicht) used to draw conclusions from evidence'
    ],
    scene: 'Analyse von Forschungsergebnissen',
    femaleSpeakers: ['Sina'],
    dialogue: [
      { speaker: 'Sina', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Verkaufszahlen', role: 'r-subject', en: 'sales figures', hi: 'बिक्री आंकड़े', pron: 'fer-KOWFS-tsah-len', type: 'Noun · plural' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूर', pron: 'MÜ-sen', type: 'Modal · müssen (starke Vermutung, plural)' },
        { w: 'fehlerhaft', role: 'r-akkusativ', en: 'faulty', hi: 'ग़लत', pron: 'FAY-ler-haft', type: 'Adjective', why: 'fehlerhaft = faulty (this chapter).', ex: 'Die Zahlen sind fehlerhaft.', exEn: 'The figures are faulty.' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होंगे', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'The sales figures must be faulty.', hi: 'Bikri ke aankde zaroor galat honge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'gehe', role: 'r-verb', en: 'assume', hi: 'मानता हूँ', pron: 'GAY-uh', type: 'Verb · davon ausgehen (ich)', lexicalUnit: 'ausgehen', why: 'davon ausgehen = to assume, fixed expression (this chapter).', ex: 'Ich gehe davon aus, dass es ein Systemfehler ist.', exEn: 'I assume that it is a system error.' },
        { w: 'davon', role: 'r-subject', en: 'from that', hi: 'यह', pron: 'da-FON', type: 'Adverb · fixed part' },
        { w: 'aus', role: 'r-verb', en: '(prefix of ausgehen)', hi: '', pron: 'ows', type: 'Separable prefix', lexicalUnit: 'ausgehen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc. acc.' },
        { w: 'Systemfehler', role: 'r-akkusativ', en: 'system error', hi: 'सिस्टम त्रुटि', pron: 'ZÜS-taym-fay-ler', type: 'Noun · masc.', why: 'der Systemfehler (this chapter).', ex: 'ein Systemfehler' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I assume that it is a system error.', hi: 'Main maanta hoon ki yeh system error hai.' },
      { speaker: 'Sina', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'dürfen', role: 'r-modalverb', en: 'must not', hi: 'नहीं करना चाहिए', pron: 'DÜR-fen', type: 'Modal · dürfen (wir, Verbot einer Möglichkeit)' },
        { w: 'menschliches', role: 'r-akkusativ', en: 'human', hi: 'मानवीय', pron: 'MEN-shli-khes', type: 'Adjective' },
        { w: 'Versagen', role: 'r-akkusativ', en: 'error', hi: 'ग़लती', pron: 'fer-ZAH-gen', type: 'Noun · neut.', why: 'das Versagen (this chapter).', ex: 'menschliches Versagen' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'ausschließen', role: 'r-verb', en: 'rule out', hi: 'ख़ारिज करना', pron: 'OWS-shlee-sen', type: 'Verb · ausschließen', why: 'ausschließen = to rule out (this chapter).', ex: 'Wir können das nicht ausschließen.', exEn: 'We cannot rule that out.' },
        { w: '.', plain: true }
      ], en: 'We must not rule out human error.', hi: 'Humein maanviya galti ko khaarij nahi karna chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '.', plain: true },
        { w: 'Welche', role: 'r-akkusativ', en: 'which (masc.)', hi: 'कौनसा', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Hinweis', role: 'r-akkusativ', en: 'clue', hi: 'संकेत', pron: 'HIN-vise', type: 'Noun · masc.', why: 'der Hinweis (this chapter).', ex: 'ein wichtiger Hinweis' },
        { w: 'gibt', role: 'r-verb', en: 'gives', hi: 'देता है', pron: 'geept', type: 'Verb · geben' },
        { w: 'uns', role: 'r-dativ', en: 'us', hi: 'हमें', pron: 'uns', type: 'Pronoun · dative' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Datenbank', role: 'r-subject', en: 'database', hi: 'डेटाबेस', pron: 'DAY-ten-bank', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'That is true. Which clue does the database give us?', hi: 'Yeh sahi hai. Database humein kaunsa sanket deta hai?' },
      { speaker: 'Sina', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Schlussfolgerung', role: 'r-subject', en: 'conclusion', hi: 'निष्कर्ष', pron: 'SHLUS-fol-ge-rung', type: 'Noun · fem.', why: 'die Schlussfolgerung (recycled C1).', ex: 'meine Schlussfolgerung' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Update', role: 'r-subject', en: 'update', hi: 'अपडेट', pron: 'UP-dayt', type: 'Noun · neut.' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Fehler', role: 'r-akkusativ', en: 'error', hi: 'त्रुटि', pron: 'FAY-ler', type: 'Noun · masc.' },
        { w: 'verursacht', role: 'r-verb', en: 'caused', hi: 'किया', pron: 'fer-oor-ZAKHT', type: 'Verb · verursachen (Satzende)' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'था', pron: 'hat', type: 'Verb · haben (helper, Satzende)' },
        { w: '.', plain: true }
      ], en: 'My conclusion is that the update caused the error.', hi: 'Mera nishkarsh hai ki update ne truti pahunchai thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'हो सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II)' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'हो', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'prüfe', role: 'r-verb', en: 'check', hi: 'जांचता हूँ', pron: 'PRÜ-fuh', type: 'Verb · prüfen (ich)' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'अभी', pron: 'glykh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'That could really be. I will check that right away.', hi: 'Yeh sach mein ho sakta hai. Main abhi ise jaanchta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Don\'t ask: <b>"What does the modal verb mean?"</b> Ask: <b>"How certain is the speaker?"</b> <span class="de r-hoch">muss</span> → <span class="de r-hochwahrscheinlich">dürfte</span> → <span class="de r-moeglich">könnte</span> → <span class="de r-schwach">mag</span> → <span class="de r-schwach">vielleicht</span> — the modal verb reveals confidence, not necessarily truth.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is VERMUTUNGEN MIT MODALVERBEN AUSDRÜCKEN at C1 level — epistemic (subjective) modal verbs expressing degrees of certainty/assumption, NOT basic modal meanings, obligation, or permission (already mastered, and the objective-vs-subjective distinction was already covered in Chapter 12). This chapter goes deeper specifically into the epistemic/assumption use: the full certainty scale (100% fact > ~95% muss > ~80% dürfte > ~60% könnte > ~40% mag > low vielleicht); deduction from evidence (e.g. "Das Licht brennt noch. Rohan muss noch dort sein." — inferring conclusions from observed evidence); journalism\'s reported/unconfirmed claims (soll, will, wahrscheinlich) vs academic hedging (könnten, dürften to avoid overstatement) vs everyday spoken assumptions. ' +
    'Do NOT expect or require basic modal conjugation, obligation/permission uses, or the objective-vs-subjective conceptual distinction itself (already taught) — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: using "müssen" for simple obligation when deduction from evidence is meant; confusing "dürfte" with future tense; using "könnte" when the evidence supports much higher certainty (should be "muss" or "dürfte"); misreading "soll"/"will" as literal future/volition rather than reported claims. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag mismatches between the strength of evidence described and the certainty-scale modal chosen (e.g. very strong evidence paired with weak "vielleicht").\n' +
    '- Check that "dürfte" is not confused with future tense, and that reported "soll"/"will" are not confused with literal future/volition.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Certainty check:</b> one sentence on whether the learner\'s modal verb choices matched the strength of evidence or claim being made.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — your assumptions map precisely onto the certainty scale. Ready for Konjunktiv I in academic language next.',
    mid: 'Good. Re-read the Certainty Scale and Epistemic Scale once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: the modal verb reveals the speaker\'s confidence, not necessarily the truth.'
  },

  parserSentence: [
    { w: 'Rohan', role: 'plain' }, { w: 'muss', role: 'r-hoch' }, { w: 'noch', role: 'plain' }, { w: 'dort', role: 'plain' }, { w: 'sein', role: 'r-hoch' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the modal verb reveals the speaker\'s confidence, not necessarily the truth.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Sina and Timo analyze research evidence, drawing conclusions across the full certainty scale.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key epistemic expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the certainty scale, deduction from evidence, academic hedging, and journalistic reporting.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a scientific article and a newspaper report, identifying assumptions and certainty levels.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify assumptions, certainty levels, and implied meanings in a university lecture and radio discussion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Make assumptions, interpret evidence, and express probability using authentic epistemic modal verbs.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite factual statements as assumptions, and write a 350-word analytical article with careful hedging.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill certainty ranking, choosing the correct modal verb, and deduction from evidence.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 450 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Certainty ranking drills, deduction-from-evidence exercises, and a full analytical article writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Table, Epistemic Scale, Register Scale, and Decision Flowchart.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das Licht brennt noch. Rohan muss noch dort sein.', text: 'Draw a near-certain deduction (~95%) from clear evidence' },
    { de: 'Die Kollegin dürfte noch da sein.', text: 'Express high probability (~80%) with slightly less certainty' },
    { de: 'Das könnte an der Messmethode liegen.', text: 'Express genuine moderate uncertainty (~50%)' },
    { de: 'Vielleicht mag das stimmen, aber wir sollten andere Erklärungen ausschließen.', text: 'Express weak speculation and academic caution together' },
    { de: 'Die Ergebnisse könnten auf einen systematischen Fehler hinweisen.', text: 'Use academic hedging to avoid overstatement' }
  ],

  vocab: [
    { de: 'die Vermutung', art: 'die', gender: 'f', plural: 'Vermutungen', pos: 'noun', level: 'C1', register: 'written', en: 'assumption, conjecture', hi: 'अनुमान', ex: 'Meine Vermutung dürfte zutreffen.', exEn: 'My assumption is likely correct.', exHi: 'Mera anumaan shaayad sahi hai.', ex2: 'Sie äußerten mehrere Vermutungen zu den Ursachen.', ex2En: 'They expressed several assumptions about the causes.', ex2Hi: 'Unhone kaaranon ke baare mein kai anumaan vyakt kiye.' },
    { de: 'die Schlussfolgerung', art: 'die', gender: 'f', plural: 'Schlussfolgerungen', pos: 'noun', level: 'C1', register: 'written', en: 'conclusion, deduction', hi: 'निष्कर्ष', ex: 'Aus den Daten lässt sich eine klare Schlussfolgerung ziehen.', exEn: 'A clear conclusion can be drawn from the data.', exHi: 'Data se ek spasht nishkarsh nikaala jaa sakta hai.', ex2: 'Ihre Schlussfolgerung überzeugte das Fachpublikum.', ex2En: 'Their conclusion convinced the expert audience.', ex2Hi: 'Unka nishkarsh visheshagya sabhaa ko convince kar gaya.' },
    { de: 'der Hinweis', art: 'der', gender: 'm', plural: 'Hinweise', pos: 'noun', level: 'C1', register: 'both', en: 'clue, indication', hi: 'संकेत', ex: 'Es gibt deutliche Hinweise auf einen Zusammenhang.', exEn: 'There are clear indications of a connection.', exHi: 'Ek sambandh ke spasht sanket hain.', ex2: 'Der Hinweis half bei der Lösung des Falls.', ex2En: 'The clue helped solve the case.', ex2Hi: 'Sanket ne maamla suljhaane mein madad ki.' },
    { de: 'davon ausgehen', pos: 'verb (reflexive-like fixed expression)', level: 'C1', register: 'written', en: 'to assume, proceed on the assumption', hi: 'यह मान लेना', ex: 'Man muss davon ausgehen, dass die Daten korrekt sind.', exEn: 'One must assume that the data is correct.', exHi: 'Yeh maan lena chahiye ki data sahi hai.', ex2: 'Wir gehen davon aus, dass das Projekt pünktlich fertig wird.', ex2En: 'We assume that the project will be finished on time.', ex2Hi: 'Hum maan lete hain ki project samay par poora hoga.', conj: { praesens: 'geht davon aus', praeteritum: 'ging davon aus', perfekt: 'ist davon ausgegangen' } },
    { de: 'ausschließen', pos: 'verb', level: 'C1', register: 'written', en: 'to rule out, exclude', hi: 'खारिज करना', ex: 'Wir sollten zuerst andere Erklärungen ausschließen.', exEn: 'We should first rule out other explanations.', exHi: 'Hamein pehle anya vyaakhyaayen khaarij karni chahiye.', ex2: 'Der Arzt hat eine Infektion ausgeschlossen.', ex2En: 'The doctor has ruled out an infection.', ex2Hi: 'Doctor ne infection ko khaarij kar diya hai.', conj: { praesens: 'schließt aus', praeteritum: 'schloss aus', perfekt: 'hat ausgeschlossen' } }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist eine Vermutung?',
      body: [ 'Fact → Observation → Assumption → Probability → Speculation. German uses modal verbs to express each of these levels precisely, moving from objective reality toward the speaker\'s subjective confidence.' ],
      hinglish: 'Har baat pakki nahi hoti. Kabhi tumhare paas fact hota hai, kabhi sirf ek observation, aur kabhi sirf andaaza. German in sab levels ko modal verbs se alag-alag batata hai \u2014 aur C1 par yahi expect kiya jaata hai ki tum apni certainty exactly dikha sako.'
    },
    {
      title: 'Gewissheitsskala (Certainty Scale)',
      body: [ 'Yeh certainty ki seedhi hai, upar se neeche. <span class="de">Er ist krank</span> fact hai. <b>muss</b> matlab lagbhag pakka, <b>d\u00fcrfte</b> matlab kaafi sambhavna, <b>k\u00f6nnte</b> matlab ho sakta hai, <b>mag</b> matlab shaayad (aur isme aksar ek \u201cpar\u2026\u201d chhupa hota hai). Percentages ratne ki zaroorat nahi \u2014 bas order yaad rakho.' ],
      hinglish: 'Yeh certainty ki seedhi hai, upar se neeche. <span class="de">Er ist krank</span> fact hai. <b>muss</b> matlab lagbhag pakka, <b>d\u00fcrfte</b> matlab kaafi sambhavna, <b>k\u00f6nnte</b> matlab ho sakta hai, <b>mag</b> matlab shaayad (aur isme aksar ek \u201cpar\u2026\u201d chhupa hota hai). Percentages ratne ki zaroorat nahi \u2014 bas order yaad rakho.'
    },
    {
      title: 'Subjektive Bedeutung der Modalverben',
      body: [ 'Compare identical situations: Er muss zu Hause sein (near-certain) / Er dürfte zu Hause sein (high probability) / Er könnte zu Hause sein (moderate) / Er mag zu Hause sein (weak concession) — each expresses a different confidence level about the same fact.' ],
      hinglish: 'Chaaron sentences mein baat ek hi hai \u2014 sirf modal badla hai, aur uske saath bolne wale ka yakeen badal gaya. Isliye modal chunte waqt yeh mat socho ki sach kya hai; yeh socho ki <b>tumhe kitna yakeen hai</b>.'
    },
    {
      title: 'Ableitung aus Beweisen (Deduction from Evidence)',
      body: [ 'Assumptions are grounded in observable evidence: lights on, car parked, office closed. Students infer conclusions using the appropriate modal verb for the strength of the evidence.' ],
      hinglish: 'Andaaza kisi sabooth par tika hota hai \u2014 batti jal rahi hai, gaadi khadi hai, office band hai. Tarika yeh hai: pehle saboot dekho, phir socho ki woh kitna majboot hai, aur usi hisaab se modal chuno. Saboot pakka ho to <b>muss</b>, aur kamzor ho to <b>k\u00f6nnte</b>.'
    },
    {
      title: 'Satzbau und Alternativen zum Modalverb',
      body: [
        'Two practical points the examples above depend on. First the word order: in a deduction the modal sits in position 2 and the infinitive closes the clause \u2014 and if the sentence opens with <i>also</i>, <i>demnach</i> or <i>offenbar</i>, the subject moves behind the verb.',
        'Second, modals are not the only way to hedge. German has a parallel set of adverbs, and good C1 writing alternates between them instead of repeating <i>k\u00f6nnte</i>.'
      ],
      table: {
        head: ['Certainty', 'Modal', 'Adverb alternative'],
        rows: [
          ['very high', 'muss', '<span class="de">zweifellos, offensichtlich</span>'],
          ['high', 'd\u00fcrfte', '<span class="de">h\u00f6chstwahrscheinlich, vermutlich</span>'],
          ['medium', 'k\u00f6nnte', '<span class="de">m\u00f6glicherweise, eventuell</span>'],
          ['low', 'mag', '<span class="de">vielleicht, unter Umst\u00e4nden</span>']
        ]
      },
      note: 'Use one or the other, not both: <i>Er k\u00f6nnte m\u00f6glicherweise krank sein</i> hedges twice and sounds weaker, not more careful.',
      hinglish: 'Do practical baatein jinpar upar ke examples tike hain. Pehli, word order \u2014 deduction mein modal position 2 par baithta hai aur infinitive clause ke end mein jaata hai. Aur agar sentence <i>also</i>, <i>demnach</i> ya <i>offenbar</i> se shuru ho, to subject verb ke peeche chala jaata hai: <span class="de">Also muss er zu Hause sein.</span> Doosri, andaaza lagane ke liye sirf modals nahi hain \u2014 German mein adverbs ka ek poora set bhi hai (<b>vermutlich</b>, <b>m\u00f6glicherweise</b>, <b>offensichtlich</b>). Achhi C1 writing dono ko badal-badal kar use karti hai. Par dono ek saath mat lagao \u2014 <i>Er k\u00f6nnte m\u00f6glicherweise krank sein</i> mein do baar hedge ho gaya, aur baat kamzor lagti hai.'
    },
    {
      title: 'Journalismus (Reported vs Confirmed)',
      body: [ 'Der Politiker soll... (is said to), Der Täter könnte... (could be), Die Ursache dürfte... (is likely), Der Zeuge will... (claims to). These distinguish reported information from confirmed fact and from a journalist\'s own assumption.' ],
      hinglish: 'News mein teen alag cheezein hoti hain aur modal se pata chalta hai kaunsi. <b>soll</b> matlab doosre log keh rahe hain, <b>will</b> matlab woh insaan khud daava kar raha hai, aur <b>k\u00f6nnte</b> ya <b>d\u00fcrfte</b> matlab yeh journalist ka apna andaaza hai. Isliye newspaper padhte waqt modal dekh kar hi pata chal jaata hai ki baat kiski hai.'
    },
    {
      title: 'Akademisches Hedging',
      body: [ 'Die Ergebnisse könnten zeigen... / Dies dürfte darauf hinweisen... / Man muss davon ausgehen... Researchers avoid absolute statements to remain scientifically cautious and credible.' ],
      hinglish: 'Academic writing mein koi baat 100% dave se nahi likhi jaati \u2014 isliye <span class="de">Die Ergebnisse k\u00f6nnten zeigen, dass \u2026</span> jaisa likha jaata hai. Yeh kamzori nahi, balki professional andaaz hai. Par ek hedge kaafi hai \u2014 do saath mein lagane se baat dhili pad jaati hai.'
    },
    {
      title: 'Meister-Tabelle',
      body: [ 'Certainty level mapped to expression.' ],
      table: {
        head: ['Certainty', 'Expression'],
        rows: [
          ['100%', 'Fact'],
          ['95%', 'muss'],
          ['80%', 'dürfte'],
          ['60%', 'könnte'],
          ['40%', 'mag'],
          ['Low', 'vielleicht']
        ]
      },
      hinglish: 'Certainty aur expression ka table \u2014 likhne se pehle yeh tay karo ki tumhara saboot kitna majboot hai, phir usi row se modal uthao.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These are about matching the modal to the evidence and building the past form correctly \u2014 plus two habits that spoil an otherwise good sentence: doubling the modal, and stacking several hedges.' ],
      mistakes: [
        { wrong: 'Das Licht brennt, also er muss zu Hause sein.', right: 'Das Licht brennt, also muss er zu Hause sein.', why: '<b>also</b> takes position 1, so the verb comes second \u2014 before the subject. The deduction itself is right.' },
        { wrong: 'Er muss den Zug verpasst haben m\u00fcssen.', right: 'Er muss den Zug verpasst haben.', why: 'One modal is enough. The past assumption is carried by <b>Partizip II + haben</b>, not by repeating the modal.' },
        { wrong: 'Die Ursache d\u00fcrfte ein technischer Defekt gewesen haben.', right: 'Die Ursache d\u00fcrfte ein technischer Defekt gewesen sein.', why: '<i>sein</i> forms its perfect infinitive with <b>sein</b>, not haben \u2014 so <b>gewesen sein</b>.' },
        { wrong: 'Der Politiker soll zur\u00fcckgetreten sein, sagt er selbst.', right: 'Der Politiker will zur\u00fcckgetreten sein. / Der Politiker soll zur\u00fcckgetreten sein, berichten Medien.', why: '<b>sollen</b> reports what OTHERS say, so it clashes with <i>sagt er selbst</i>. For the person\u2019s own claim you need <b>wollen</b>.' },
        { wrong: 'Es k\u00f6nnte sein, dass das Ergebnis vielleicht m\u00f6glicherweise stimmt.', right: 'Es k\u00f6nnte sein, dass das Ergebnis stimmt.', why: 'One hedge is enough. Stacking <i>k\u00f6nnte</i>, <i>vielleicht</i> and <i>m\u00f6glicherweise</i> weakens the sentence instead of making it more careful.' },
        { wrong: 'Alle Zeugen best\u00e4tigen es \u2014 er k\u00f6nnte der T\u00e4ter sein.', right: 'Alle Zeugen best\u00e4tigen es \u2014 er muss der T\u00e4ter sein.', why: 'The modal has to match the evidence. With every witness agreeing, <b>k\u00f6nnte</b> (~60%) understates it; <b>muss</b> is the honest choice.' }
      ],
      hinglish: 'Yeh galtiyan modal ko saboot se match na karne, aur past wali form galat banane se hoti hain \u2014 aur do aadatein jo achha sentence bhi kharaab kar deti hain: modal do baar lagana, aur kai hedges ek saath thoons dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Very strong evidence? muss. Strong probability? dürfte. Possible? könnte. Weak possibility? mag. Only guessing? vielleicht.' ],
      note: 'Memory trick: don\'t ask "what does the modal verb mean?" Ask "how certain is the speaker?" The modal verb tells you the speaker\'s confidence — not necessarily the truth.',
      hinglish: 'Saboot bahut majboot? <b>muss</b>. Kaafi sambhavna? <b>d\u00fcrfte</b>. Ho sakta hai? <b>k\u00f6nnte</b>. Halki sambhavna? <b>mag</b>. Sirf andaaza? <b>vielleicht</b>. Aur agar baat past ki hai to end mein <b>Partizip II + haben/sein</b> lagana yaad rakho.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Kulturteil: Rätsel um eine Bronzezeit-Siedlung',
    titleEn: 'Reading A — Culture section: puzzle over a Bronze Age settlement',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Ausgrabungen', role: 'plain', en: 'excavations (Satzende)', hi: 'खुदाई (Satzende)', type: 'Noun · plural' },
      { w: 'könnten', role: 'r-akademisch', en: 'could (academic hedging, avoiding overstatement)', hi: 'शायद इशारा करती हैं', type: 'Modalverb (Konjunktiv II)' },
      { w: 'darauf', role: 'r-akademisch', en: 'to that (Pronominaladverb, part of expression)', hi: '', type: 'Pronominaladverb' },
      { w: 'hinweisen', role: 'r-akademisch', en: 'point (Satzende, academic hedging)', hi: '(Satzende)', type: 'Verb · Infinitiv', why: '"Könnten darauf hinweisen" is a classic academic hedge, avoiding a definitive claim (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Siedlung', role: 'plain', en: 'settlement', hi: 'बस्ती', type: 'Noun · fem.' },
      { w: 'plötzlich', role: 'plain', en: 'suddenly', hi: 'अचानक', type: 'Adverb' },
      { w: 'verlassen', role: 'plain', en: 'abandoned (Satzende)', hi: 'छोड़ी गई (Satzende)', type: 'Verb · Partizip II' },
      { w: 'wurde', role: 'plain', en: 'was (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Präteritum Passiv, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Auffällig', role: 'plain', en: 'notably', hi: 'ध्यान देने योग्य बात', type: 'Adjective' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'यह है कि कई', type: 'Adjective' },
      { w: 'Gefäße', role: 'plain', en: 'vessels', hi: 'बर्तन', type: 'Noun · plural' },
      { w: 'lagen', role: 'plain', en: 'lay', hi: 'पड़े थे', type: 'Verb · liegen (Präteritum)' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'vollständig', role: 'plain', en: 'fully', hi: 'पूरी तरह', type: 'Adverb' },
      { w: 'gefüllt', role: 'plain', en: 'filled (Satzende)', hi: 'भरे हुए (Satzende)', type: 'Adjective' },
      { w: 'an', role: 'plain', en: 'at', hi: 'अपनी जगह पर', type: 'Präposition · Dat.' },
      { w: 'Ort', role: 'plain', en: 'place', hi: '', type: 'Noun · masc.' },
      { w: 'und', role: 'plain', en: 'and', hi: '', type: 'Konjunktion' },
      { w: 'Stelle', role: 'plain', en: 'spot (Satzende)', hi: '(Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Man', role: 'plain', en: 'one', hi: 'माना जाता है', type: 'Pronomen · Nom.' },
      { w: 'muss', role: 'r-akademisch', en: 'must (academic hedging, fixed expression)', hi: 'कि', type: 'Modalverb (Präsens)' },
      { w: 'daher', role: 'plain', en: 'therefore', hi: '', type: 'Adverb' },
      { w: 'davon', role: 'r-akademisch', en: 'of that (Pronominaladverb, fixed expression)', hi: '', type: 'Pronominaladverb' },
      { w: 'ausgehen', role: 'r-akademisch', en: 'proceed on the assumption (Satzende)', hi: '(Satzende)', type: 'Verb · Infinitiv', why: '"Man muss davon ausgehen" is a standard cautious way to state a working assumption (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a (neut.)', hi: 'किसी', type: 'Article' },
      { w: 'akutes', role: 'plain', en: 'acute', hi: 'तीव्र', type: 'Adjective' },
      { w: 'Ereignis', role: 'plain', en: 'event (Satzende)', hi: 'घटना (Satzende)', type: 'Noun · neut.' },
      { w: 'die', role: 'plain', en: 'the (plural akk.)', hi: 'निवासियों को', type: 'Article · Akk.' },
      { w: 'Bewohner', role: 'plain', en: 'inhabitants (Satzende)', hi: '(Satzende)', type: 'Noun · plural' },
      { w: 'zur', role: 'plain', en: 'to the', hi: 'तत्काल भागने पर', type: 'Contraction · zu der' },
      { w: 'sofortigen', role: 'plain', en: 'immediate', hi: '', type: 'Adjective' },
      { w: 'Flucht', role: 'plain', en: 'flight (Satzende)', hi: 'मजबूर किया', type: 'Noun · fem.' },
      { w: 'zwang', role: 'plain', en: 'forced (Satzende)', hi: '(Satzende)', type: 'Verb · zwingen (Präteritum, Nebensatz, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The excavations could point to the settlement having been abandoned suddenly. Notably, many vessels still lay fully filled exactly where they had stood. One must therefore assume that some acute event forced the inhabitants to flee immediately.',
    comprehension: [
      { q: 'Welche Funktion hat "könnten darauf hinweisen"?', options: ['Vorsichtige, akademische Vermutung', 'Sichere Tatsache', 'Befehl'], answer: 0 },
      { q: 'Welche Funktion hat "man muss davon ausgehen"?', options: ['Vorsichtige Annahme formulieren', 'Erlaubnis geben', 'Zukunft ausdrücken'], answer: 0 },
      { q: 'Was deutet auf eine plötzliche Flucht hin?', options: ['Noch gefüllte Gefäße an ihrem Platz', 'Leere Häuser', 'Zerstörte Mauern'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsbericht',
    titleEn: 'Reading B — Newspaper report',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Ursache', role: 'plain', en: 'cause (Satzende)', hi: 'kaaran (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'dürfte', role: 'r-hochwahrscheinlich', en: 'is likely (journalistic speculation, high probability)', hi: 'shaayad hai (journalistic speculation, high probability)', type: 'Modalverb (Konjunktiv II)' },
      { w: 'in', role: 'plain', en: 'in', hi: 'mein', type: 'Präposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'ek', type: 'Article · Dat.' },
      { w: 'technischen', role: 'plain', en: 'technical', hi: 'takniki', type: 'Adjective · Dat.' },
      { w: 'Defekt', role: 'plain', en: 'defect (Satzende)', hi: 'khaami mein (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'liegen', role: 'plain', en: 'lie (Satzende)', hi: 'ho sakta hai (Satzende)', type: 'Verb · Satzende' },
      { w: '.', plain: true },
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Täter', role: 'plain', en: 'perpetrator (Satzende)', hi: 'aparaadhi (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'könnte', role: 'r-moeglich', en: 'could (journalistic speculation, moderate possibility)', hi: 'ho sakta hai (journalistic speculation, moderate possibility)', type: 'Modalverb (Konjunktiv II)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'yeh', type: 'Article' },
      { w: 'Gegend', role: 'plain', en: 'area (Satzende)', hi: 'ilaake ko (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'gekannt', role: 'plain', en: 'known (part of Perfekt)', hi: '(Perfekt ka hissa)', type: 'Partizip II' },
      { w: 'haben', role: 'plain', en: 'have (Satzende)', hi: 'jaanta tha (Satzende)', type: 'Verb · haben (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The cause is likely a technical defect. The perpetrator could have known the area.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_013_L001', speaker: 'Sina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, hast du dir die Verkaufszahlen von letzter Woche angesehen? Die können doch nicht stimmen.', en: 'Timo, have you looked at last week\'s sales figures? Those can\'t be right.' },
      { id: 'C1_013_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das könnte an einem Systemfehler liegen — so ein Einbruch wäre sonst unerklärlich.', en: 'That could be due to a system error — such a drop would otherwise be inexplicable.' },
      { id: 'C1_013_L003', speaker: 'Sina', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Möglich, aber es könnte auch schlicht ein menschlicher Fehler bei der Eingabe sein.', en: 'Possible, but it could also simply be a human error in the input.' },
      { id: 'C1_013_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Beides müssen wir prüfen, bevor wir dem Chef Bericht erstatten.', en: 'We need to check both before we report to the boss.' }
    ],
    transcript: 'Timo, hast du dir die Verkaufszahlen von letzter Woche angesehen? Die können doch nicht stimmen. Das könnte an einem Systemfehler liegen — so ein Einbruch wäre sonst unerklärlich. Möglich, aber es könnte auch schlicht ein menschlicher Fehler bei der Eingabe sein. Beides müssen wir prüfen, bevor wir dem Chef Bericht erstatten.',
    translation: 'Timo, have you looked at last week\'s sales figures? Those can\'t be right. That could be due to a system error — such a drop would otherwise be inexplicable. Possible, but it could also simply be a human error in the input. We need to check both before we report to the boss.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'hast' },
      { w: 'du' },
      { w: 'dir' },
      { w: 'die' },
      { w: 'Verkaufszahlen' },
      { w: 'von' },
      { w: 'letzter' },
      { w: 'Woche' },
      { w: 'angesehen' },
      { w: '?', plain: true },
      { w: 'Die' },
      { w: 'können' },
      { w: 'doch' },
      { w: 'nicht' },
      { w: 'stimmen' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'könnte' },
      { w: 'an' },
      { w: 'einem' },
      { w: 'Systemfehler' },
      { w: 'liegen' },
      { w: '—', plain: true },
      { w: 'so' },
      { w: 'ein' },
      { w: 'Einbruch' },
      { w: 'wäre' },
      { w: 'sonst' },
      { w: 'unerklärlich' },
      { w: '.', plain: true },
      { w: 'Möglich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'es' },
      { w: 'könnte' },
      { w: 'auch' },
      { w: 'schlicht' },
      { w: 'ein' },
      { w: 'menschlicher' },
      { w: 'Fehler' },
      { w: 'bei' },
      { w: 'der' },
      { w: 'Eingabe' },
      { w: 'sein' },
      { w: '.', plain: true },
      { w: 'Beides' },
      { w: 'müssen' },
      { w: 'wir' },
      { w: 'prüfen' },
      { w: ',', plain: true },
      { w: 'bevor' },
      { w: 'wir' },
      { w: 'dem' },
      { w: 'Chef' },
      { w: 'Bericht' },
      { w: 'erstatten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was könnte den Umsatzrückgang laut Timo erklären?', qEn: 'What might explain the sales drop, according to Timo?', options: ['ein Systemfehler', 'die Konkurrenz', 'das Wetter', 'ein Feiertag'], optionsEn: ['a system error', 'the competition', 'the weather', 'a public holiday'], answer: 0,
        explain: '"Das könnte an einem Systemfehler liegen."' },
      { q: 'Welche andere Erklärung bietet Sina an?', qEn: 'What alternative explanation does Sina offer?', options: ['ein Streik', 'ein menschlicher Fehler bei der Eingabe', 'ein Feiertag', 'ein neues Produkt'], optionsEn: ['a strike', 'a human input error', 'a public holiday', 'a new product'], answer: 1,
        explain: '"… es könnte auch schlicht ein menschlicher Fehler bei der Eingabe sein."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo hält die Verkaufszahlen für falsch. Nenne eine Ursache.", taskEn: "Timo thinks the sales figures are wrong. Name a cause.", de: "Das könnte an einem Systemfehler liegen.", en: "That could be down to a system error." },
    { task: "Das Labor ist offen und das Licht brennt. Was folgerst du?", taskEn: "The lab is open and the light is on. What do you conclude?", de: "Jemand muss noch hier sein, die Tür war nicht verschlossen.", en: "Somebody must still be here, the door wasn't locked." },
    { task: "Deine Kollegin fragt, ob ein Gerätefehler auszuschließen ist.", taskEn: "Your colleague asks whether an instrument error can be ruled out.", de: "Die Abweichung dürfte am Gerät liegen, ausschließen kann ich es nicht.", en: "The deviation is most likely the instrument, I can't rule it out." },
    { task: "Deine Betreuerin findet deinen Befund zu bestimmt formuliert. Sag ihn vorsichtiger.", taskEn: "Your supervisor finds your finding too assertive. Say it more cautiously.", de: "Die Daten könnten darauf hinweisen, dass der Effekt altersabhängig ist.", en: "The data could indicate that the effect is age-dependent." },
    { task: "Eine Kollegin fragt, wovon ihr im Bericht ausgeht.", taskEn: "A colleague asks what you assume in the report.", de: "Wir gehen davon aus, dass der Einbruch nur einen Monat betrifft.", en: "We assume the slump concerns only one month." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take factual statements and rewrite them using appropriate modal verbs to express varying degrees of assumption (muss, dürfte, könnte, mag, vielleicht).\n\nTASK 2 — Analytical article (350 words): Discuss a current issue, carefully expressing assumptions, probability, and evidence instead of absolute certainty.',
    starters: ['Die Ergebnisse dürften auf einen neuen Trend hinweisen.', 'Man muss davon ausgehen, dass weitere Untersuchungen notwendig sind.'],
    placeholder: 'Das Licht brennt noch, also muss sie noch dort sein. Es könnte aber auch sein, dass...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'The lab light is on and the car is parked outside. Which modal best expresses the conclusion?',
      options: ['muss (near-certain deduction)', 'könnte (moderate possibility)', 'mag (weak concession)'],
      answer: 0,
      explain: 'Strong, converging evidence supports a near-certain deduction, best expressed with "muss".'
    },
    gap: {
      sentence: ['Die Ergebnisse ', ' auf einen systematischen Fehler hinweisen.'],
      gaps: [ { answer: 'könnten', accepts: ['könnten'] } ],
      explain: '"Könnten" is standard academic hedging — avoiding an absolute claim while suggesting a possibility.'
    },
    match: {
      q: 'Match each modal verb to its certainty level.',
      pairs: [
        { noun: 'muss', art: '~95% — near-certain' },
        { noun: 'dürfte', art: '~80% — high probability' },
        { noun: 'könnte', art: '~60% — moderate' },
        { noun: 'mag', art: '~40% — weak concession' }
      ]
    },
    builder: {
      target: 'Build: "The light in the lab is still on. Rohan must still be there." (near-certain deduction)',
      bank: ['Das', 'Licht', 'im', 'Labor', 'brennt', 'noch', '.', 'Rohan', 'muss', 'noch', 'dort', 'sein', '.'],
      answer: ['Das', 'Licht', 'im', 'Labor', 'brennt', 'noch', '.', 'Rohan', 'muss', 'noch', 'dort', 'sein', '.'],
      roles: { 'muss': 'r-hoch', 'sein': 'r-hoch' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Es gibt starke Beweise, also könnte er definitiv schuldig sein.',
      right: 'Es gibt starke Beweise, also muss er schuldig sein.',
      explain: '"Könnte" understates confidence when strong evidence is present — "muss" better matches near-certainty.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What certainty level does epistemic "muss" express?', options: ['~95%, near-certain deduction', '~50%, moderate possibility', '100%, absolute fact'], answer: 0,
      explain: '"Muss" expresses near-certainty based on strong evidence, not absolute fact.' },
    { q: 'Which modal expresses moderate, genuine uncertainty (~50-60%)?', options: ['könnte', 'muss', 'dürfte'], answer: 0,
      explain: '"Könnte" sits in the middle of the certainty scale, expressing real uncertainty.' },
    { q: 'What does "dürfte" indicate?', options: ['High probability (~80%), not future tense', 'Simple future', 'Permission'], answer: 0,
      explain: '"Dürfte" looks like Konjunktiv II but functions as a high-probability marker.' },
    { q: 'What does "soll" mean in "Der Fehler soll bekannt gewesen sein"?', options: ['An unconfirmed reported claim', 'A future action', 'A definite fact'], answer: 0,
      explain: '"Soll" reports a claim without the speaker vouching for its truth.' },
    { q: 'What is the C1 memory trick for epistemic modal verbs?', options: ['Ask "how certain is the speaker?" not "what does it mean?"', 'All modal verbs mean the same thing', 'Modal verbs only express obligation'], answer: 0,
      explain: 'The modal verb reveals the speaker\'s confidence, not necessarily the objective truth.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-hoch', html: 'The certainty scale (muss ~95% → dürfte ~80% → könnte ~60% → mag ~40% → vielleicht low) lets you match your modal verb precisely to the strength of your evidence.' },
    { c: 'r-akademisch', html: 'Academic hedging (könnten darauf hinweisen, man muss davon ausgehen) avoids overstatement while still communicating a working assumption.' },
    { c: 'r-journalistisch', html: 'Journalistic "soll"/"will" report unconfirmed claims — never confuse them with future tense or literal volition.' }
  ],
  revisionTips: [
    'Take five pieces of evidence (weak to strong) and match each to the correct certainty-scale modal verb.',
    'Find a German scientific abstract and underline every hedging expression (könnten, dürften, man muss davon ausgehen).',
    'Rewrite a news headline into reported style using "soll" or "will", then explain what makes it unconfirmed.'
  ]
};

window.CHAPTER = CHAPTER;
