/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 63
   "Goethe Mini 5" — CHECKPOINT chapter, no new grammar or
   vocabulary. Recycles and integrates Chapters 54–62:
   Funktionsverbgefüge, Modalpartikeln (doch/ja, eben/halt),
   Textkohärenz (Verweiswörter, Absatzlogik), Konjunktiv I
   (Formen, Indirekte Rede Grundlagen, Zeitverschiebung,
   Berichtende Sprache).
   IMPORTANT: dialogue/speaking use ONLY Yara and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-63-goethe-mini-5',
  phase: 'B2 · Phase 6',
  number: 63,
  title: 'Goethe Mini 5',
  titleEn: 'Phase 6 checkpoint exam',
  description: 'A Goethe-style checkpoint across Chapters 54–62: Funktionsverbgefüge, Modalpartikeln, Textkohärenz, and Konjunktiv I — together.',
  xp: 850,
  time: 95,
  difficulty: 'Checkpoint',
  isCheckpoint: true,
  nextChapter: { number: 64, title: 'Präpositionen mit Genitiv', titleEn: 'Prepositions with Genitiv' , href: 'chapter-b2-64-praepositionen-mit-genitiv.html' },

  prevChapter: { number: 62, title: 'Konjunktiv I: Berichtende Sprache', titleEn: 'Konjunktiv I: reporting language', href: 'chapter-b2-62-konjunktiv-i-berichtende-sprache.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Checkpoint',
    headline: 'Nine chapters. <em>One</em> exam.',
    intro: 'Preparing for the Goethe B2 exam, Yara takes consideration of Timo\'s schedule and reports what a colleague said about an appointment being too early — moving fluidly between Funktionsverbgefüge, Modalpartikeln, text cohesion, and Konjunktiv I.',
    outcomes: [
      'No new grammar or vocabulary — pure integration and recall',
      'Every structure from Chapters 54–62 tested in context',
      'A realistic Goethe-Zertifikat B2 exam experience'
    ],
    scene: 'Letzte Vorbereitung',
    femaleSpeakers: ['Yara'],
    dialogue: [
      { speaker: 'Yara', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेती हूँ', pron: 'NAY-muh', type: 'Verb · nehmen (ich)' },
        { w: 'Rücksicht', role: 'r-akkusativ', en: 'consideration', hi: 'ख़्याल', pron: 'RÜK-zikht', type: 'Noun · fem.', why: 'Funktionsverbgefüge (recycled Ch54).', ex: 'Rücksicht nehmen' },
        { w: 'auf', role: 'r-preposition', en: 'of', hi: 'पर', pron: 'owf', type: 'Preposition · fixed' },
        { w: 'deine', role: 'r-akkusativ', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive · acc.' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I take consideration of your time.', hi: 'Main tumhaare samay ka khyaal rakhti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'doch', role: 'r-akkusativ', en: 'indeed', hi: 'वाकई', pron: 'dokh', type: 'Modalpartikel', why: 'doch (recycled Ch55).', ex: 'Das ist doch nett.' },
        { w: 'nett', role: 'r-akkusativ', en: 'kind', hi: 'दयालु', pron: 'net', type: 'Adjective' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'से', pron: 'fon', type: 'Preposition' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुमसे', pron: 'deer', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'That is indeed kind of you.', hi: 'Yeh wakai tumhaari daya hai.' },
      { speaker: 'Yara', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'erste', role: 'r-subject', en: 'first', hi: 'पहला', pron: 'AIR-stuh', type: 'Adjective' },
        { w: 'Punkt', role: 'r-subject', en: 'point', hi: 'बिंदु', pron: 'punkt', type: 'Noun · masc.' },
        { w: 'behandelt', role: 'r-verb', en: 'deals with', hi: 'संबंधित है', pron: 'be-HAN-delt', type: 'Verb · behandeln' },
        { w: 'unseren', role: 'r-akkusativ', en: 'our (masc.)', hi: 'हमारी', pron: 'UN-ze-ren', type: 'Possessive · acc.' },
        { w: 'Zeitplan', role: 'r-akkusativ', en: 'schedule', hi: 'समय सारिणी', pron: 'TSYTE-plahn', type: 'Noun · masc.' },
        { w: '.', plain: true },
        { w: 'Darin', role: 'r-subject', en: 'in it', hi: 'उसमें', pron: 'da-RIN', type: 'Pronoun · adverbial', why: 'Verweiswort (recycled Ch57).', ex: 'Darin steht alles.' },
        { w: 'steht', role: 'r-verb', en: 'stands', hi: 'है', pron: 'shtayt', type: 'Verb · stehen' },
        { w: 'alles', role: 'r-subject', en: 'everything', hi: 'सब कुछ', pron: 'A-les', type: 'Pronoun · indefinite' },
        { w: '.', plain: true }
      ], en: 'The first point deals with our schedule. In it stands everything.', hi: 'Pehla bindu hamaari samay saarini se sambandhit hai. Usmein sab kuch hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Kollegin', role: 'r-subject', en: 'colleague (f)', hi: 'सहकर्मी', pron: 'ko-LAY-gin', type: 'Noun · fem.' },
        { w: 'sagte', role: 'r-verb', en: 'said', hi: 'कहा', pron: 'ZAHK-tuh', type: 'Verb · sagen (Präteritum)' },
        { w: ',', plain: true },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Termin', role: 'r-subject', en: 'appointment', hi: 'मुलाक़ात', pron: 'ter-MEEN', type: 'Noun · masc.' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'था', pron: 'zy', type: 'Verb · sein (Konjunktiv I)', why: 'indirekte Rede (recycled Ch60).', ex: 'sei zu früh' },
        { w: 'zu', role: 'r-adverb', en: 'too', hi: 'बहुत', pron: 'tsoo', type: 'Adverb' },
        { w: 'früh', role: 'r-akkusativ', en: 'early', hi: 'जल्दी', pron: 'frü', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The colleague said the appointment was too early.', hi: 'Sahkarmi ne kaha ki mulaqaat bahut jaldi thi.' },
      { speaker: 'Yara', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'ziehen', role: 'r-verb', en: 'draw', hi: 'निकालते हैं', pron: 'TSEE-en', type: 'Verb · ziehen (wir)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Vergleich', role: 'r-akkusativ', en: 'comparison', hi: 'तुलना', pron: 'fer-GLYKH', type: 'Noun · masc.', why: 'Funktionsverbgefüge (recycled Ch54).', ex: 'einen Vergleich ziehen' },
        { w: 'zwischen', role: 'r-preposition', en: 'between', hi: 'के बीच', pron: 'TSVI-shen', type: 'Preposition' },
        { w: 'beiden', role: 'r-dativ', en: 'both (dat.)', hi: 'दोनों', pron: 'BY-den', type: 'Pronoun · dative' },
        { w: 'Terminen', role: 'r-dativ', en: 'appointments (dat.)', hi: 'मुलाक़ातों', pron: 'ter-MEE-nen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'We draw a comparison between both appointments.', hi: 'Hum dono mulaqaaton ke beech tulna karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eben', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'AY-ben', type: 'Modalpartikel', why: 'eben (recycled Ch56).', ex: 'das ist eben sinnvoll' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Good, that is simply sensible.', hi: 'Achha, yeh bas uchit hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'This is a checkpoint, not a lesson. No new grammar — every structure from Chapters 54–62 (Funktionsverbgefüge, doch/ja, eben/halt, Verweiswörter, Absatzlogik, Konjunktiv I Formen, Indirekte Rede Grundlagen, Zeitverschiebung, Berichtende Sprache) is tested together, the way the real Goethe-Zertifikat B2 exam mixes everything.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'This is a CHECKPOINT covering Chapters 54–62: Funktionsverbgefüge (noun + light verb), Modalpartikeln doch/ja and eben/halt, Textkohärenz (Verweiswörter and Absatzlogik), and Konjunktiv I (forms, basic indirect speech, time reference/Zeitverschiebung, and berichtende Sprache/journalistic reporting with source attribution). No new grammar is introduced here — evaluate the learner\'s ability to COMBINE these nine topics naturally. ' +
    'The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check Funktionsverbgefüge use the correct fixed light verb (eine Entscheidung treffen, not machen).\n' +
    '- Check Modalpartikeln (doch/ja/eben/halt) fit their intended function and are not overused.\n' +
    '- Check Verweiswörter are unambiguous and Absatzlogik keeps one idea per paragraph.\n' +
    '- Check Konjunktiv I forms are correct, time reference (Zeitverschiebung) preserves the original speaker\'s timeline, and reporting stays neutral with clear source attribution.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Integration check:</b> one sentence on how many distinct Phase 6 structures the learner used, and whether the mix felt natural.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered Phase 6. Ready to begin Phase 7.',
    mid: 'Good, but review the chapters flagged in your weak areas before moving to Phase 7.',
    low: 'Revisit Chapters 54–62 — especially the structure you missed most — before attempting Phase 7.'
  },

  parserSentence: [
    { w: 'Laut', role: 'r-source' }, { w: 'der', role: 'r-source' }, { w: 'Zeitung', role: 'r-source' },
    { w: 'sei', role: 'r-konji' }, { w: 'die', role: 'plain' }, { w: 'Wirtschaft', role: 'plain' }, { w: 'stabil', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'This is a checkpoint: no new grammar, full integration of Chapters 54–62.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Yara and Timo prepare for the Goethe B2 exam using every Phase 6 structure together.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Review key words recycled from Chapters 54–62 — full popups with two examples, register, and Hindi.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Two Goethe-style papers (newspaper article, business report) integrating all nine chapters.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Radio news and a company presentation testing source, reporting verb, and time reference.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Summarize a report, discuss workplace communication, and reorganize an unclear report.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a formal report (220-250 words) and rewrite a poorly organized article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Mixed drills across all nine Phase 6 topics: reporting verbs, modal particles, cohesion, error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Ten questions across the full Phase 6 scope. Pass to complete the checkpoint.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review your Phase 6 readiness and get a recommendation before Phase 7.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download the full Phase 6 master comparison table for revision.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📖', title: 'Phase 6 Master Comparison PDF',
      desc: 'All nine structures side by side: Funktionsverbgefüge, doch/ja, eben/halt, Verweiswörter, Absatzlogik, Konjunktiv I Formen, Indirekte Rede, Zeitverschiebung, Berichtende Sprache.',
      pdfUrl: '/pdfs/grammar.pdf', size: '15 pages', kind: 'Grammar' },
    { icon: '📝', title: 'Checkpoint Practice PDF',
      desc: 'Extra mixed drills across all nine chapters, with a full answer key.',
      pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' }
  ],

  outcomes: [
    { de: 'eine Entscheidung treffen, Kontakt aufnehmen', text: 'Choose the correct light verb for common Funktionsverbgefüge' },
    { de: 'doch (reminder/encouragement) vs ja (shared knowledge)', text: 'Distinguish and combine doch, ja, eben, and halt naturally' },
    { de: 'Er sagt, er sei krank. Klarer Bezug statt Wiederholung.', text: 'Build clear, cohesive paragraphs with Verweiswörter and one idea each' },
    { de: 'Präsens bleibt Präsens; Perfekt/Präteritum → Konjunktiv I Perfekt; Futur bleibt Futur', text: 'Preserve the original timeline in reported speech' },
    { de: 'Laut ..., nach Angaben von ..., X zufolge', text: 'Report news neutrally with clear source attribution' }
  ],

  vocab: [
    { de: 'die Funktionsverbgefüge', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'light-verb constructions', hi: 'फंक्शन-वर्ब निर्माण', ex: 'Funktionsverbgefüge machen einen Text formeller.', exEn: 'Light-verb constructions make a text more formal.', exHi: 'Funktionsverbgefüge ek text ko zyaada formal banaate hain.', ex2: 'Sie haben viele Funktionsverbgefüge im Bericht verwendet.', ex2En: 'They\'ve used many light-verb constructions in the report.', ex2Hi: 'Unhone report mein kai light-verb constructions ka istemaal kiya hai.' },
    { de: 'die Modalpartikel', art: 'die', gender: 'f', plural: 'Modalpartikeln', pos: 'noun', level: 'B2', register: 'spoken', en: 'modal particle', hi: 'मोडल पार्टिकल', ex: 'Die Modalpartikel "doch" wirkt auffordernd.', exEn: 'The modal particle "doch" sounds encouraging.', exHi: '"Doch" modal particle protsaahit karne wala lagta hai.', ex2: 'Sie haben Modalpartikeln richtig eingesetzt.', ex2En: 'They\'ve used modal particles correctly.', ex2Hi: 'Unhone modal particles sahi tarah se istemaal kiye hain.' },
    { de: 'die Textkohärenz', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'text coherence', hi: 'टेक्स्ट सामंजस्य', ex: 'Textkohärenz entsteht durch klare Verweiswörter.', exEn: 'Text coherence emerges through clear reference words.', exHi: 'Text samaanjasya spasht sandarbh shabdon se banta hai.', ex2: 'Sie haben die Textkohärenz verbessert.', ex2En: 'They\'ve improved the text coherence.', ex2Hi: 'Unhone text samaanjasya behtar banaayi hai.' },
    { de: 'die Zeitverschiebung', art: 'die', gender: 'f', plural: 'Zeitverschiebungen', pos: 'noun', level: 'B2', register: 'written', en: 'tense shift (in reported speech)', hi: 'समय परिवर्तन', ex: 'Die Zeitverschiebung in der indirekten Rede folgt festen Regeln.', exEn: 'The tense shift in indirect speech follows fixed rules.', exHi: 'Indirect speech mein samay parivartan nishchit niyamon ka paalan karta hai.', ex2: 'Sie haben die Zeitverschiebung korrekt angewendet.', ex2En: 'They\'ve applied the tense shift correctly.', ex2Hi: 'Unhone samay parivartan sahi tarah se laagu kiya hai.' },
    { de: 'berichten', pos: 'verb', level: 'B2', register: 'written', en: 'to report', hi: 'रिपोर्ट करना', ex: 'Die Zeitung berichtet, der Minister sei zurückgetreten.', exEn: 'The newspaper reports that the minister has resigned.', exHi: 'Akhbaar report karta hai ki mantri ne isteefa de diya hai.', ex2: 'Sie haben ausführlich über das Ereignis berichtet.', ex2En: 'They\'ve reported extensively on the event.', ex2Hi: 'Unhone ghatna ke baare mein vistaar se report kiya hai.', conj: { praesens: 'berichtet', praeteritum: 'berichtete', perfekt: 'hat berichtet' } }
  ],

  // ---------- Grammar (Phase 6 master review) ----------
  grammar: [
    {
      title: 'Master-Übersicht: Phase 6',
      body: [ 'This checkpoint recycles Chapters 54\u201362 into one integrated system: formal expression, natural spoken German, clear writing, and objective reporting.' ],
      table: {
        head: ['Topic', 'Key Skill'],
        rows: [
          ['Ch.54 — Funktionsverbgefüge', 'Formal expression (eine Entscheidung treffen)'],
          ['Ch.55 — Modalpartikeln: doch / ja', 'Natural spoken German'],
          ['Ch.56 — Modalpartikeln: eben / halt', 'Calm acceptance'],
          ['Ch.57 — Verweiswörter', 'Text cohesion'],
          ['Ch.58 — Absatzlogik', 'Logical writing'],
          ['Ch.59 — Konjunktiv I: Formen', 'Building the forms'],
          ['Ch.60 — Indirekte Rede: Grundlagen', 'Reporting speech'],
          ['Ch.61 — Indirekte Rede: Zeitverschiebung', 'Keeping the timeline'],
          ['Ch.62 — Berichtende Sprache', 'Objective journalism']
        ]
      },
      hinglish: 'Yeh checkpoint Chapter 54 se 62 tak ka sab kuch ek saath laata hai \u2014 formal expression, natural bolchaal, saaf writing, aur objective reporting. Yahan koi naya grammar nahi aata.'
    },
    {
      title: 'Funktionsverbgefüge Recap',
      body: [ 'Noun + fixed light verb replaces a simple verb for formal register: entscheiden → eine Entscheidung treffen. Never substitute "machen" for the fixed light verb.' ],
      hinglish: 'Noun + fixed light verb simple verb ki jagah leta hai aur register formal bana deta hai: <span class="de">entscheiden</span> se <span class="de">eine Entscheidung treffen</span>. Har noun ka apna light verb hota hai \u2014 Entscheidung ke saath <b>treffen</b>, Antrag ke saath <b>stellen</b>, Diskussion ke saath <b>f\u00fchren</b>. Har jagah <i>machen</i> lagana sabse aam galti hai.'
    },
    {
      title: 'Modalpartikeln Recap',
      body: [ 'doch = reminder, contradiction, encouragement. ja = shared knowledge, explanation. eben/halt = calm acceptance ("that\'s just how it is") — eben more neutral, halt more colloquial.' ],
      hinglish: '<b>doch</b> yaad dilata hai ya kisi baat ko kaatta hai, <b>ja</b> batata hai ki baat dono ko pehle se pata hai, aur <b>eben/halt</b> dikhate hain ki baat maan li gayi hai \u2014 <b>eben</b> neutral aur <b>halt</b> zyada casual. Chaaron Mittelfeld mein baithte hain, na shuru mein aur na end mein. Aur formal writing mein inme se koi nahi aata.'
    },
    {
      title: 'Textkohärenz Recap',
      body: [ 'Verweiswörter (er/sie/es, dieser/diese/dieses, das/dies) avoid repetition but must stay unambiguous. Absatzlogik keeps one idea per paragraph: topic sentence → explanation → example → conclusion.' ],
      hinglish: 'Verweisw\u00f6rter repetition se bachate hain, par reference saaf hona chahiye \u2014 agar do cheezon mein confusion ho sakti hai to naam dohraana behtar hai. Gender aur number us noun se aate hain jiski baat ho rahi hai, par case naye sentence se. Aur Absatzlogik ka rule ek hi hai: ek paragraph mein ek idea, aur order rehta hai Leitsatz \u2192 Erkl\u00e4rung \u2192 Beispiel \u2192 Schluss.'
    },
    {
      title: 'Konjunktiv I Recap',
      body: [ 'sein→sei, haben→habe, werden→werde. Present stays Present; Perfekt/Präteritum → Konjunktiv I Perfekt; Future stays Future. Journalistic reporting adds source attribution (laut, nach Angaben von, X zufolge) and never presents opinion as fact.' ],
      hinglish: 'Teen forms pehle pakki karo: <b>sei</b>, <b>habe</b>, <b>werde</b>. Timeline waisi hi rehti hai \u2014 present present, past ke liye Konjunktiv I Perfekt (<span class="de">habe gearbeitet</span> ya <span class="de">sei gegangen</span>), aur future ke liye <span class="de">werde</span> + infinitive. Dhyaan rakho ki <b>ich</b>, <b>wir</b> aur <b>sie</b> ki forms Indicative jaisi ho jaati hain, isliye wahan Konjunktiv II lagta hai. Aur reporting mein source dena zaroori hai \u2014 <b>laut</b> aur <b>zufolge</b> Dativ lete hain.'
    },
    {
      title: 'Goethe-Prüfungstipps',
      body: [ 'In the real exam, texts mix all nine structures freely. For each sentence ask: is this a formal expression, a spoken-German attitude marker, a cohesion device, or reported speech?' ],
      note: 'Memory trick: the exam rewards RECOGNITION speed, not memorization of rules. Practice spotting each structure quickly across a mixed text.',
      hinglish: 'Asli exam mein yeh saare structures ek hi text mein mile-jule aate hain. Har sentence par ek sawaal poochho \u2014 yeh formal expression hai, bolchaal ka attitude marker hai, cohesion ka shabd hai, ya reported speech? Yahan speed matter karti hai, rule ratna nahi.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Zeitungsartikel (Checkpoint)',
    titleEn: 'Reading A — Authentic newspaper article',
    tokens: [
      { w: 'Laut', role: 'r-source', en: 'according to (source)', hi: 'ke anusaar (source)', type: 'Präposition · Dat.' },
      { w: 'dem', role: 'r-source', en: 'the (masc. dat.)', hi: '(source ka hissa)', type: 'Article · Dat.' },
      { w: 'Ministerium', role: 'r-source', en: 'ministry (source, Satzende)', hi: 'mantraalay (source, Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: 'habe', role: 'r-konji', en: 'has (Konjunktiv I Perfekt)', hi: 'hai (Konjunktiv I Perfekt)', type: 'Verb · Konjunktiv I' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'khud ko', type: 'Reflexivpronomen · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Lage', role: 'r-antecedent', en: 'situation (antecedent, Satzende)', hi: 'sthiti (antecedent, Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'verbessert', role: 'plain', en: 'improved (Satzende)', hi: 'behtar hui (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'r-verweis', en: 'this (Demonstrativpronomen → die Lage)', hi: 'yeh (Demonstrativpronomen → sthiti)', type: 'Demonstrativpronomen · Nom.' },
      { w: 'Entwicklung', role: 'plain', en: 'development (Satzende)', hi: 'vikaas (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'freut', role: 'plain', en: 'pleases', hi: 'khush karta hai', type: 'Verb (Präsens)' },
      { w: 'viele', role: 'plain', en: 'many (Satzende)', hi: 'kai logon ko (Satzende)', type: 'Adjective (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'According to the ministry, the situation has improved. This development pleases many.',
    comprehension: [
      { q: 'Was ist die Quelle in diesem Text?', options: ['das Ministerium', 'die Zeitung', 'der Journalist'], answer: 0 },
      { q: 'Welche Konjunktiv-I-Zeitform wird für das vergangene Ereignis benutzt?', options: ['Konjunktiv I Perfekt', 'Konjunktiv I Präsens', 'Konjunktiv I Futur I'], answer: 0 },
      { q: 'Worauf verweist "Diese Entwicklung"?', options: ['die Lage, die sich verbessert hat', 'das Ministerium', 'den Journalisten'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Geschäftsbericht (Checkpoint)',
    titleEn: 'Reading B — Business report',
    tokens: [
      { w: 'Das', role: 'plain', en: 'the (neut. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Unternehmen', role: 'r-leitsatz', en: 'company (part of topic sentence)', hi: '(topic sentence ka hissa)', type: 'Noun · neut.' },
      { w: 'trifft', role: 'r-fvg', en: 'makes (light verb)', hi: '(light verb)', type: 'Verb (Präsens)' },
      { w: 'eine', role: 'r-fvg', en: 'a (fem. akk., part of FVG)', hi: '(FVG ka hissa)', type: 'Article · Akk.' },
      { w: 'wichtige', role: 'r-fvg', en: 'important (adjective, part of FVG)', hi: '(FVG ka hissa)', type: 'Adjective · Akk.' },
      { w: 'Entscheidung', role: 'r-fvg', en: 'decision (Satzende, noun, semantic center)', hi: 'nirnay (Satzende, noun)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Nach', role: 'r-source', en: 'according to (source)', hi: 'ke anusaar (source)', type: 'Präposition · Dat.' },
      { w: 'Angaben', role: 'r-source', en: 'information (part of source)', hi: '(source ka hissa)', type: 'Noun · plural' },
      { w: 'der', role: 'r-source', en: 'of the (fem. gen.)', hi: '(source ka hissa)', type: 'Article · Gen.' },
      { w: 'Geschäftsführung', role: 'r-source', en: 'management (Satzende, source)', hi: 'management (Satzende, source)', type: 'Noun · fem. (Satzende)' },
      { w: 'werde', role: 'r-konji', en: 'will be (Konjunktiv I of "werden")', hi: '(Konjunktiv I of "werden")', type: 'Verb · Konjunktiv I' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Umsatz', role: 'plain', en: 'revenue', hi: 'aay', type: 'Noun · masc.' },
      { w: 'steigen', role: 'plain', en: 'rise (Satzende)', hi: 'badhega (Satzende)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The company makes an important decision. According to management, revenue will rise.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_063_L001', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich habe deinen Zeitplan gesehen — du hast morgen früh doch noch einen Termin, oder?', en: 'Timo, I saw your schedule — you still have an appointment tomorrow morning, right?' },
      { id: 'B2_063_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, deshalb wollte ich fragen: Könnten wir die Wiederholung eine Stunde vorziehen?', en: 'True, that\'s why I wanted to ask: could we move the review an hour earlier?' },
      { id: 'B2_063_L003', speaker: 'Yara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Kein Problem. Übrigens hat mir eine Kollegin erzählt, der letzte Termin sei ihr viel zu früh gewesen.', en: 'No problem. By the way, a colleague told me the last appointment was much too early for her.' },
      { id: 'B2_063_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann sind wir ja nicht die Einzigen. Gut, dass wir das vorher klären.', en: 'Then we\'re not the only ones. Good that we\'re sorting this out beforehand.' }
    ],
    transcript: 'Timo, ich habe deinen Zeitplan gesehen — du hast morgen früh doch noch einen Termin, oder? Stimmt, deshalb wollte ich fragen: Könnten wir die Wiederholung eine Stunde vorziehen? Kein Problem. Übrigens hat mir eine Kollegin erzählt, der letzte Termin sei ihr viel zu früh gewesen. Dann sind wir ja nicht die Einzigen. Gut, dass wir das vorher klären.',
    translation: 'Timo, I saw your schedule — you still have an appointment tomorrow morning, right? True, that\'s why I wanted to ask: could we move the review an hour earlier? No problem. By the way, a colleague told me the last appointment was much too early for her. Then we\'re not the only ones. Good that we\'re sorting this out beforehand.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'habe' },
      { w: 'deinen' },
      { w: 'Zeitplan' },
      { w: 'gesehen' },
      { w: '—', plain: true },
      { w: 'du' },
      { w: 'hast' },
      { w: 'morgen' },
      { w: 'früh' },
      { w: 'doch' },
      { w: 'noch' },
      { w: 'einen' },
      { w: 'Termin' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'deshalb' },
      { w: 'wollte' },
      { w: 'ich' },
      { w: 'fragen' },
      { w: ':', plain: true },
      { w: 'Könnten' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'Wiederholung' },
      { w: 'eine' },
      { w: 'Stunde' },
      { w: 'vorziehen' },
      { w: '?', plain: true },
      { w: 'Kein' },
      { w: 'Problem' },
      { w: '.', plain: true },
      { w: 'Übrigens' },
      { w: 'hat' },
      { w: 'mir' },
      { w: 'eine' },
      { w: 'Kollegin' },
      { w: 'erzählt' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'letzte' },
      { w: 'Termin' },
      { w: 'sei' },
      { w: 'ihr' },
      { w: 'viel' },
      { w: 'zu' },
      { w: 'früh' },
      { w: 'gewesen' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'sind' },
      { w: 'wir' },
      { w: 'ja' },
      { w: 'nicht' },
      { w: 'die' },
      { w: 'Einzigen' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'vorher' },
      { w: 'klären' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum möchte Timo das Review verschieben?', qEn: 'Why does Timo want to move the review?', options: ['Er ist müde.', 'Er hat morgen früh einen Termin.', 'Er hat keine Zeit mehr.', 'Er mag den Zeitplan nicht.'], optionsEn: ['He is tired.', 'He has an appointment early tomorrow.', 'He has no time left.', 'He doesn\'t like the schedule.'], answer: 1,
        explain: '"Du hast morgen früh doch noch einen Termin" → "Könnten wir die Wiederholung eine Stunde vorziehen?"' },
      { q: 'Was hat die Kollegin über den letzten Termin gesagt?', qEn: 'What did the colleague say about the last appointment?', options: ['Er sei perfekt gewesen.', 'Er sei ihr viel zu früh gewesen.', 'Er sei abgesagt worden.', 'Sie habe ihn vergessen.'], optionsEn: ['that it was perfect.', 'that it was far too early for her.', 'that it was cancelled.', 'that she forgot him.'], answer: 1,
        explain: '"… der letzte Termin sei ihr viel zu früh gewesen."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Dein Kollege hat morgen früh einen Termin. Bitte um eine Verschiebung.", taskEn: "Your colleague has an appointment tomorrow morning. Ask to reschedule.", de: "Könnten wir die Besprechung auf den Nachmittag verschieben?", en: "Could we move the meeting to the afternoon?" },
    { task: "Prüfung, Teil 1: Fass einen Bericht neutral zusammen.", taskEn: "Exam, Part 1: summarise a report neutrally.", de: "Nach Angaben der Firma sei der Zeitplan geändert worden.", en: "According to the company, the schedule was changed." },
    { task: "Prüfung, Teil 2: Sprich über Kommunikation im Team.", taskEn: "Exam, Part 2: talk about communication in the team.", de: "Wir treffen die Entscheidungen ja gemeinsam, aber die Umsetzung dauert halt länger.", en: "We do make the decisions together, but implementation just takes longer." },
    { task: "Prüfung, Teil 3: Bring einen unklaren Bericht in eine klare Ordnung.", taskEn: "Exam, Part 3: bring an unclear report into clear order.", de: "Zuerst nennen wir das Problem. Dieses betrifft den Zeitplan. Danach folgt die Lösung.", en: "First we name the problem. This concerns the schedule. Then comes the solution." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Formal report (220-250 words): Write a report using reporting verbs, Konjunktiv I, paragraph structure, source attribution, cohesive references, and at least 8 Funktionsverbgefüge.\n\nTASK 2 — Rewrite (8-10 sentences): Take a poorly organized article and improve its Absatzlogik, Verweiswörter, reporting style, and neutrality.',
    starters: ['Laut ... berichtet, ...', 'Das Unternehmen trifft ...'],
    placeholder: 'Laut der Zeitung sei die Wirtschaft stabil. Das Unternehmen trifft eine wichtige Entscheidung.',
    minWords: 220
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which sentence correctly combines a Funktionsverbgefüge with Konjunktiv I reporting?',
      options: ['Die Firma berichtet, sie werde eine Entscheidung treffen.', 'Die Firma berichtet, sie werde eine Entscheidung machen.', 'Die Firma berichtet, sie trifft eine Entscheidung.'],
      answer: 0,
      explain: '"eine Entscheidung treffen" is the correct Funktionsverbgefüge, and "werde" is the correct Konjunktiv I Futur I form for a future report.'
    },
    gap: {
      sentence: ['Laut der Polizei ', ' der Verdächtige festgenommen worden.'],
      gaps: [ { answer: 'sei', accepts: ['sei'] } ],
      explain: '"sei" is Konjunktiv I of "sein", required after source attribution "laut der Polizei".'
    },
    match: {
      q: 'Match each example to its Phase 6 topic.',
      pairs: [
        { noun: 'eine Entscheidung treffen', art: 'Funktionsverbgefüge' },
        { noun: 'Setz dich doch.', art: 'Modalpartikel doch' },
        { noun: 'Er sagt, er sei krank.', art: 'Konjunktiv I / Indirekte Rede' },
        { noun: 'Laut der Zeitung ...', art: 'Berichtende Sprache (source attribution)' }
      ]
    },
    builder: {
      target: 'Build: "According to the ministry, the situation has improved." (source attribution + Konjunktiv I Perfekt)',
      bank: ['Laut', 'dem', 'Ministerium', 'habe', 'sich', 'die', 'Lage', 'verbessert', '.'],
      answer: ['Laut', 'dem', 'Ministerium', 'habe', 'sich', 'die', 'Lage', 'verbessert', '.'],
      roles: { 'Laut': 'r-source', 'dem': 'r-source', 'Ministerium': 'r-source', 'habe': 'r-konji' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Die Firma trifft eine Entscheidung machen.',
      right: 'Die Firma trifft eine Entscheidung.',
      explain: '"eine Entscheidung treffen" is the complete Funktionsverbgefüge — do not add "machen" redundantly.'
    }
  },

  // ---------- Quiz (10 questions — checkpoint scope) ----------
  quiz: [
    { q: '"eine Entscheidung treffen" is which structure?', options: ['Funktionsverbgefüge', 'Modalpartikel', 'Konjunktiv I'], answer: 0, explain: 'Noun + fixed light verb replaces the simple verb "entscheiden" for formal register.' },
    { q: '"Setz dich doch." uses "doch" for:', options: ['Softening a command', 'Contradiction', 'Shared knowledge'], answer: 0, explain: '"doch" here turns a bare command into a friendly, softened request.' },
    { q: '"Das ist ja normal." uses "ja" for:', options: ['Shared/obvious knowledge', 'Encouragement', 'Contradiction'], answer: 0, explain: '"ja" points to information both speakers already know or find obvious.' },
    { q: '"So ist das eben." expresses:', options: ['Calm, neutral acceptance', 'Strong disagreement', 'A question'], answer: 0, explain: '"eben" signals calm acceptance of an unchangeable reality.' },
    { q: 'Which reference word could be ambiguous: "Anna spricht mit Maria. Sie ist freundlich."?', options: ['Sie (could mean Anna or Maria)', 'Anna', 'Maria'], answer: 0, explain: '"Sie" could refer to either woman — repeating the name would remove the ambiguity.' },
    { q: 'How many main ideas should a well-structured paragraph have?', options: ['One', 'Three or four', 'As many as needed'], answer: 0, explain: 'One paragraph = one idea, per Absatzlogik.' },
    { q: 'What is the Konjunktiv I form of "sein" for "er"?', options: ['sei', 'ist', 'wäre'], answer: 0, explain: '"sein" has an irregular Konjunktiv I stem: "sei-".' },
    { q: '"Er sagt, er habe gestern gearbeitet" shows which time reference rule?', options: ['Past (Perfekt/Präteritum) → Konjunktiv I Perfekt', 'Present stays Present', 'Future stays Future'], answer: 0, explain: 'A past event is reported with Konjunktiv I Perfekt regardless of whether the original was Perfekt or Präteritum.' },
    { q: '"Laut der Polizei" is an example of:', options: ['Source attribution', 'A reporting verb', 'A Modalpartikel'], answer: 0, explain: '"laut" introduces the source of the reported information.' },
    { q: 'Is "Der Minister hat recht" appropriate neutral, journalistic reporting?', options: ['No — it states an opinion as fact', 'Yes — perfectly neutral', 'Only in casual speech'], answer: 0, explain: 'Neutral reporting attributes claims to their source instead of stating them as fact.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-fvg', html: 'Funktionsverbgefüge (eine Entscheidung treffen), Modalpartikeln (doch/ja/eben/halt), and Textkohärenz (Verweiswörter/Absatzlogik) work together in natural, formal German.' },
    { c: 'r-konji', html: 'Konjunktiv I forms (sei, habe, werde) preserve the original timeline: Present stays Present, Past becomes Konjunktiv I Perfekt, Future stays Future.' },
    { c: 'r-source', html: 'Berichtende Sprache always attributes claims to a source (laut, nach Angaben von, X zufolge) and never presents opinion as fact.' }
  ],
  revisionTips: [
    'For each Phase 6 chapter, write one example sentence from memory before moving to Phase 7.',
    'Scan any German news article and label every Funktionsverbgefüge, Modalpartikel, Verweiswort, and Konjunktiv I form you find.',
    'If any quiz question felt hard, reopen that specific chapter (54–62) before starting Phase 7.'
  ]
};

window.CHAPTER = CHAPTER;
