/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 3 · Chapter 32
   "Konjunktiv II für Vermutungen" — dürfte (very likely, high
   probability) and könnte (maybe, lower certainty) used to
   express assumptions, distinct from Futur I für Vermutungen
   (Ch.29) and wahrscheinlich/vermutlich/wohl (Ch.30).
   Does NOT teach: permission-dürfen, ability-können, müsste,
   mag, or Konjunktiv II der Vergangenheit (already Ch.31).
   IMPORTANT: dialogue uses ONLY Nele and Timo.
   Vocabulary source: uploaded chapter-32 list (52 items).
============================================================ */
const CHAPTER = {
  id: 'b2-32-konjunktiv2-vermutungen',
  phase: 'B2 · Phase 3',
  number: 32,
  title: 'Konjunktiv II für Vermutungen',
  titleEn: 'Konjunktiv II for assumptions',
  description: 'dürfte and könnte — two more natural ways to guess, ranked by how certain you actually feel.',
  xp: 470,
  time: 65,
  difficulty: 'Advanced',
  nextChapter: { number: 33, title: 'Irreale Vergleiche: als ob', titleEn: 'Unreal comparisons: as if' , href: 'chapter-b2-33-irreale-vergleiche-als-ob.html' },

  prevChapter: { number: 31, title: 'Konjunktiv II der Vergangenheit', titleEn: 'Konjunktiv II of the past', href: 'chapter-b2-31-konjunktiv2-vergangenheit.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'How <em>sure</em> are you, really?',
    intro: 'A colleague isn\'t answering, and Nele and Timo run through the possibilities — sick, swamped with work, maybe on vacation — ranking each guess by how sure they really feel with dürfte and könnte.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the difference between dürfte (very likely) and könnte (maybe) in natural conversation'
    ],
    scene: 'Wo bleibt der Kollege?',
    femaleSpeakers: ['Nele'],
    dialogue: [
      { speaker: 'Nele', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'antwortet', role: 'r-verb', en: 'does answer', hi: 'जवाब देता है', pron: 'ANT-vor-tet', type: 'Verb · antworten' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '?', plain: true }
      ], en: 'Why does he not answer?', hi: 'Woh jawaab kyun nahi deta?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II)', why: 'könnte/dürfte/müsste + sein/Infinitiv express an assumption about the present (this chapter).', ex: 'Er könnte krank sein.', exEn: 'He could be sick.' },
        { w: 'krank', role: 'r-akkusativ', en: 'sick', hi: 'बीमार', pron: 'krank', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'He could be sick.', hi: 'Woh bimaar ho sakta hai.' },
      { speaker: 'Nele', tokens: [
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II)' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Arbeit', role: 'r-akkusativ', en: 'work', hi: 'काम', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'हो', pron: 'HAH-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'He could also simply have a lot of work.', hi: 'Uske paas bahut kaam bhi ho sakta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'dürfte', role: 'r-modalverb', en: 'might', hi: 'शायद', pron: 'DÜR-ftuh', type: 'Modal · dürfen (Konjunktiv II)', why: 'dürfte = might, expresses a fairly confident assumption (this chapter).', ex: 'Er dürfte im Urlaub sein.', exEn: 'He might be on vacation.' },
        { w: 'im', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'im', type: 'Preposition + place' },
        { w: 'Urlaub', role: 'r-dativ', en: 'vacation (dat.)', hi: 'छुट्टी', pron: 'OOR-lowp', type: 'Noun · masc. dat.' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होगा', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'He might be on vacation.', hi: 'Woh shayad chhutti par hoga.' },
      { speaker: 'Nele', tokens: [
        { w: 'Stimmt', role: 'r-verb', en: 'true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '!', plain: true },
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'müsste', role: 'r-modalverb', en: 'should', hi: 'होना चाहिए', pron: 'MÜS-tuh', type: 'Modal · müssen (Konjunktiv II)', why: 'müsste = should, a fairly confident logical assumption (this chapter).', ex: 'Er müsste eigentlich am Strand sein.', exEn: 'He should actually be at the beach.' },
        { w: 'eigentlich', role: 'r-adverb', en: 'actually', hi: 'वास्तव में', pron: 'EYE-gent-likh', type: 'Adverb' },
        { w: 'am', role: 'r-preposition', en: 'at the', hi: 'पर', pron: 'am', type: 'Preposition + place' },
        { w: 'Strand', role: 'r-dativ', en: 'beach (dat.)', hi: 'समुद्र तट', pron: 'shtrant', type: 'Noun · masc. dat.' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'True! He should actually be at the beach.', hi: 'Sahi hai! Woh vaastav mein samudra tat par hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einfach', role: 'r-akkusativ', en: 'simply', hi: 'बस', pron: 'INE-fakh', type: 'Adverb' },
        { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार', pron: 'VAR-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Maybe we should simply wait.', hi: 'Shayad humein bas intezaar karna chahiye.' },
      { speaker: 'Nele', tokens: [
        { w: 'Du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'सही', pron: 'hast', type: 'Verb · haben' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mache', role: 'r-verb', en: 'make', hi: 'करती हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'weniger', role: 'r-akkusativ', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'Sorgen', role: 'r-akkusativ', en: 'worries', hi: 'चिंता', pron: 'ZOR-gen', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'You are right. I worry less.', hi: 'Tum sahi ho. Main kam chinta karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German has a fine-grained scale of certainty. <span class="de r-vermutungen">dürfte</span> means "very likely" — high probability, almost certain. <span class="de r-vermutungen">könnte</span> means "might" — a possible but less certain guess. Both are more natural in many contexts than Futur I für Vermutungen.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II FÜR VERMUTUNGEN (B2 level): dürfte (very likely, high probability) and könnte (might, medium/lower probability) used to express assumptions. This is DISTINCT from Futur I für Vermutungen (Ch.29) and from wahrscheinlich/vermutlich/wohl (Ch.30) — all three families exist side by side as alternatives with slightly different certainty levels and registers. ' +
    'Do NOT expect or require the permission meaning of dürfen, the ability meaning of können, müsste, or mag — those are out of scope; do not flag their absence, and do not require the learner to use them. Do NOT require or flag the absence of Konjunktiv II der Vergangenheit (Ch.31) — this chapter is about present-tense assumptions only. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "dürfte" and "könnte" used to express an assumption/guess are CORRECT — do not flag them as needing permission/ability meanings instead.\n' +
    '- Flag only genuine errors: combining two probability markers redundantly (e.g. "dürfte wahrscheinlich"), wrong infinitive placement, or confusing dürfte-permission with dürfte-assumption in a way that changes the intended meaning.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Certainty check:</b> one sentence on whether the learner chose dürfte vs könnte appropriately for the confidence level they meant to express.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly distinguish dürfte (very likely) from könnte (maybe) by certainty level. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the probability comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: dürfte = very high probability, könnte = medium/lower probability. Choose based on how confident you actually feel.'
  },

  parserSentence: [
    { w: 'Der', role: 'plain' }, { w: 'Zug', role: 'plain' }, { w: 'dürfte', role: 'r-vermutungen' },
    { w: 'gleich', role: 'plain' }, { w: 'ankommen', role: 'plain' }, { w: '.', plain: true }, { w: 'Es', role: 'plain' }, { w: 'könnte', role: 'r-vermutungen' }, { w: 'regnen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: dürfte and könnte rank assumptions by certainty level.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nele and Timo guess about a delayed colleague and a meeting, choosing dürfte or könnte by confidence.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 52 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master dürfte vs könnte and how they compare with Futur I and the probability adverbs.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a business meeting and a university discussion full of dürfte/könnte assumptions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify strong vs weak probability and the certainty level intended by the speaker.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Make assumptions with the right level of certainty using dürfte and könnte.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and discussion texts using dürfte and könnte appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill dürfte-or-könnte decisions, probability ranking, and Futur I transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 470 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 52 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'dürfte-or-könnte drills, probability ranking, and a discussion-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete probability comparison table, decision flowchart, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Anna dürfte jetzt zu Hause sein.', text: 'Express a very likely assumption with dürfte' },
    { de: 'Rohan könnte krank sein.', text: 'Express a possible but less certain guess with könnte' },
    { de: 'Das dürfte stimmen. Das könnte funktionieren.', text: 'Use common fixed dürfte/könnte expressions' },
    { de: 'dürfte > wird > könnte > vielleicht', text: 'Rank assumption structures by certainty level' },
    { de: 'dürfte (formal) vs könnte (spoken + written)', text: 'Choose the right register for each context' }
  ],

  // ---------- Vocabulary (52 items — uploaded chapter-32 list) ----------
  vocab: [
    { de: 'einholen', pos: 'verb', level: 'B2', register: 'both', en: 'to catch up, obtain', hi: 'पकड़ लेना, प्राप्त करना', ex: 'Sie holten den Vorsprung ein.', exEn: 'They caught up the lead.', exHi: 'Unhone barhat pakad li.', ex2: 'Er hat eine Genehmigung eingeholt.', ex2En: 'He\'s obtained a permit.', ex2Hi: 'Usne anumati prapt ki hai.', conj: { praesens: 'holt ein', praeteritum: 'holte ein', perfekt: 'hat eingeholt' } },
    { de: 'elementar', pos: 'adjective', level: 'B2', register: 'written', en: 'elementary, fundamental', hi: 'मौलिक', ex: 'Das war ein elementarer Fehler.', exEn: 'That was a fundamental mistake.', exHi: 'Yeh ek maulik galti thi.', ex2: 'Sie haben elementare Regeln gelernt.', ex2En: 'They\'ve learned fundamental rules.', ex2Hi: 'Unhone maulik niyam seekhe hain.' },
    { de: 'Empörung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'outrage, indignation', hi: 'आक्रोश', ex: 'Die Empörung war groß.', exEn: 'The outrage was great.', exHi: 'Aakrosh bahut zyaada tha.', ex2: 'Sie haben ihre Empörung ausgedrückt.', ex2En: 'They\'ve expressed their outrage.', ex2Hi: 'Unhone apna aakrosh vyakt kiya hai.' },
    { de: 'engagieren', pos: 'verb', level: 'B2', register: 'both', en: 'to hire, get involved, commit', hi: 'नियुक्त करना, शामिल होना', ex: 'Sie engagierte sich für Umweltschutz.', exEn: 'She got involved in environmental protection.', exHi: 'Woh paryaavaran suraksha mein shaamil hui.', ex2: 'Wir haben einen neuen Berater engagiert.', ex2En: 'We\'ve hired a new advisor.', ex2Hi: 'Humne ek naya salaahkaar niyukt kiya hai.', conj: { praesens: 'engagiert', praeteritum: 'engagierte', perfekt: 'hat engagiert' } },
    { de: 'entlaufen', pos: 'verb', level: 'B2', register: 'both', en: 'to run away', hi: 'भाग जाना', ex: 'Der Hund entlief seinem Besitzer.', exEn: 'The dog ran away from its owner.', exHi: 'Kutta apne maalik se bhaag gaya.', ex2: 'Das Kind ist entlaufen.', ex2En: 'The child has run away.', ex2Hi: 'Bachcha bhaag gaya hai.', conj: { praesens: 'entläuft', praeteritum: 'entlief', perfekt: 'ist entlaufen' } },
    { de: 'erforschen', pos: 'verb', level: 'B2', register: 'written', en: 'to research, explore', hi: 'शोध करना', ex: 'Wissenschaftler erforschten das Gehirn.', exEn: 'Scientists researched the brain.', exHi: 'Vaigyaanikon ne dimaag par shodh kiya.', ex2: 'Sie haben die Region erforscht.', ex2En: 'They\'ve explored the region.', ex2Hi: 'Unhone kshetra ka shodh kiya hai.', conj: { praesens: 'erforscht', praeteritum: 'erforschte', perfekt: 'hat erforscht' } },
    { de: 'erleichtern', pos: 'verb', level: 'B2', register: 'both', en: 'to facilitate, make easier', hi: 'आसान बनाना', ex: 'Das Programm erleichterte die Arbeit.', exEn: 'The programme made the work easier.', exHi: 'Program ne kaam aasaan bana diya.', ex2: 'Sie haben den Prozess erleichtert.', ex2En: 'They\'ve made the process easier.', ex2Hi: 'Unhone prakriya aasaan bana di hai.', conj: { praesens: 'erleichtert', praeteritum: 'erleichterte', perfekt: 'hat erleichtert' } },
    { de: 'Ermunterung', art: 'die', gender: 'f', plural: 'Ermunterungen', pos: 'noun', level: 'B2', register: 'written', en: 'encouragement', hi: 'प्रोत्साहन', ex: 'Ihre Ermunterung half ihm sehr.', exEn: 'Her encouragement helped him a lot.', exHi: 'Uske protsaahan ne use bahut madad ki.', ex2: 'Sie haben viel Ermunterung erhalten.', ex2En: 'They\'ve received a lot of encouragement.', ex2Hi: 'Unhein bahut protsaahan mila hai.' },
    { de: 'ernsthaft', pos: 'adjective', level: 'B2', register: 'both', en: 'serious, earnest', hi: 'गंभीर', ex: 'Das war eine ernsthafte Warnung.', exEn: 'That was a serious warning.', exHi: 'Yeh ek gambheer chetaavani thi.', ex2: 'Sie haben ernsthaft darüber nachgedacht.', ex2En: 'They\'ve thought about it seriously.', ex2Hi: 'Unhone gambheerta se isper socha hai.' },
    { de: 'Erzeugung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'generation, production', hi: 'उत्पादन', ex: 'Die Erzeugung von Strom stieg.', exEn: 'The generation of electricity rose.', exHi: 'Bijli ka utpaadan badha.', ex2: 'Sie haben die Erzeugung optimiert.', ex2En: 'They\'ve optimised the production.', ex2Hi: 'Unhone utpaadan behtar kiya hai.' },
    { de: 'fällen', pos: 'verb', level: 'B2', register: 'both', en: 'to fell, pass (a verdict)', hi: 'काटना, फैसला सुनाना', ex: 'Das Gericht fällte ein Urteil.', exEn: 'The court passed a verdict.', exHi: 'Adaalat ne faisla sunaaya.', ex2: 'Sie haben einen Baum gefällt.', ex2En: 'They\'ve felled a tree.', ex2Hi: 'Unhone ek ped kaata hai.', conj: { praesens: 'fällt', praeteritum: 'fällte', perfekt: 'hat gefällt' } },
    { de: 'Fehlentscheidung', art: 'die', gender: 'f', plural: 'Fehlentscheidungen', pos: 'noun', level: 'B2', register: 'both', en: 'wrong decision', hi: 'गलत निर्णय', ex: 'Das war eine Fehlentscheidung.', exEn: 'That was a wrong decision.', exHi: 'Yeh ek galat faisla tha.', ex2: 'Sie haben die Fehlentscheidung korrigiert.', ex2En: 'They\'ve corrected the wrong decision.', ex2Hi: 'Unhone galat faisle ko theek kiya hai.' },
    { de: 'Gedächtnis', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'memory', hi: 'स्मृति', ex: 'Ihr Gedächtnis war ausgezeichnet.', exEn: 'Her memory was excellent.', exHi: 'Uski smriti utkrisht thi.', ex2: 'Sie haben ihr Gedächtnis trainiert.', ex2En: 'They\'ve trained their memory.', ex2Hi: 'Unhone apni smriti ka abhyaas kiya hai.' },
    { de: 'Gehirnaktivität', art: 'die', gender: 'f', plural: 'Gehirnaktivitäten', pos: 'noun', level: 'B2', register: 'written', en: 'brain activity', hi: 'मस्तिष्क गतिविधि', ex: 'Die Gehirnaktivität wurde gemessen.', exEn: 'The brain activity was measured.', exHi: 'Mastishk gatividhi maapi gayi.', ex2: 'Sie haben die Gehirnaktivität analysiert.', ex2En: 'They\'ve analysed the brain activity.', ex2Hi: 'Unhone mastishk gatividhi ka vishleshan kiya hai.' },
    { de: 'Gehirnregion', art: 'die', gender: 'f', plural: 'Gehirnregionen', pos: 'noun', level: 'B2', register: 'written', en: 'brain region', hi: 'मस्तिष्क क्षेत्र', ex: 'Diese Gehirnregion steuert die Sprache.', exEn: 'This brain region controls speech.', exHi: 'Yeh mastishk kshetra bhaashaa niyantrit karta hai.', ex2: 'Sie haben die Gehirnregion erforscht.', ex2En: 'They\'ve researched the brain region.', ex2Hi: 'Unhone mastishk kshetra par shodh kiya hai.' },
    { de: 'gelingen', pos: 'verb', level: 'B2', register: 'both', en: 'to succeed, manage', hi: 'सफल होना', ex: 'Der Plan gelang schließlich.', exEn: 'The plan finally succeeded.', exHi: 'Yojana aakhir mein safal hui.', ex2: 'Es ist ihr gelungen, die Prüfung zu bestehen.', ex2En: 'She\'s managed to pass the exam.', ex2Hi: 'Woh pareeksha paas karne mein safal hui hai.', conj: { praesens: 'gelingt', praeteritum: 'gelang', perfekt: 'ist gelungen' } },
    { de: 'golden', pos: 'adjective', level: 'B2', register: 'both', en: 'golden', hi: 'सुनहरा', ex: 'Die goldenen Blätter fielen im Herbst.', exEn: 'The golden leaves fell in autumn.', exHi: 'Sunahre patte sharad ritu mein gire.', ex2: 'Sie haben eine goldene Uhr geschenkt.', ex2En: 'They\'ve given a golden watch as a gift.', ex2Hi: 'Unhone ek sunahri ghadi tohfe mein di hai.' },
    { de: 'heldenhaft', pos: 'adjective', level: 'B2', register: 'written', en: 'heroic', hi: 'वीरतापूर्ण', ex: 'Sein heldenhaftes Verhalten beeindruckte alle.', exEn: 'His heroic behaviour impressed everyone.', exHi: 'Uske veertaapurn vyavahaar ne sabko prabhaavit kiya.', ex2: 'Sie haben heldenhaft gekämpft.', ex2En: 'They\'ve fought heroically.', ex2Hi: 'Unhone veertaapurvak ladaai ki hai.' },
    { de: 'Herzfrequenz', art: 'die', gender: 'f', plural: 'Herzfrequenzen', pos: 'noun', level: 'B2', register: 'written', en: 'heart rate', hi: 'हृदय गति', ex: 'Die Herzfrequenz stieg beim Laufen.', exEn: 'The heart rate rose while running.', exHi: 'Daudte samay hriday gati badhi.', ex2: 'Sie haben ihre Herzfrequenz gemessen.', ex2En: 'They\'ve measured their heart rate.', ex2Hi: 'Unhone apni hriday gati maapi hai.' },
    { de: 'humorvoll', pos: 'adjective', level: 'B2', register: 'both', en: 'humorous', hi: 'हास्यप्रद', ex: 'Er hielt eine humorvolle Rede.', exEn: 'He gave a humorous speech.', exHi: 'Usne ek haasyaprad bhaashan diya.', ex2: 'Sie haben humorvoll reagiert.', ex2En: 'They\'ve reacted humorously.', ex2Hi: 'Unhone haasyaprad tareeke se pratikriya di hai.' },
    { de: 'investieren', pos: 'verb', level: 'B2', register: 'both', en: 'to invest', hi: 'निवेश करना', ex: 'Sie investierten in neue Technologie.', exEn: 'They invested in new technology.', exHi: 'Unhone nayi takneek mein nivesh kiya.', ex2: 'Er hat viel Zeit investiert.', ex2En: 'He\'s invested a lot of time.', ex2Hi: 'Usne bahut samay nivesh kiya hai.', conj: { praesens: 'investiert', praeteritum: 'investierte', perfekt: 'hat investiert' } },
    { de: 'Investition', art: 'die', gender: 'f', plural: 'Investitionen', pos: 'noun', level: 'B2', register: 'written', en: 'investment', hi: 'निवेश', ex: 'Die Investition zahlte sich aus.', exEn: 'The investment paid off.', exHi: 'Nivesh safal raha.', ex2: 'Sie haben eine große Investition getätigt.', ex2En: 'They\'ve made a big investment.', ex2Hi: 'Unhone ek bada nivesh kiya hai.' },
    { de: 'ironisch', pos: 'adjective', level: 'B2', register: 'written', en: 'ironic', hi: 'व्यंग्यात्मक', ex: 'Das war eine ironische Bemerkung.', exEn: 'That was an ironic remark.', exHi: 'Yeh ek vyangyaatmak tippani thi.', ex2: 'Sie hat ironisch gelächelt.', ex2En: 'She\'s smiled ironically.', ex2Hi: 'Usne vyangyaatmak roop se muskuraaya hai.' },
    { de: 'klingen', pos: 'verb', level: 'B2', register: 'both', en: 'to sound', hi: 'लगना, सुनाई देना', ex: 'Das klang sehr überzeugend.', exEn: 'That sounded very convincing.', exHi: 'Yeh bahut vishvaas-yogya lag raha tha.', ex2: 'Es hat komisch geklungen.', ex2En: 'It\'s sounded strange.', ex2Hi: 'Yeh ajeeb sunaai diya hai.', conj: { praesens: 'klingt', praeteritum: 'klang', perfekt: 'hat geklungen' } },
    { de: 'korrigieren', pos: 'verb', level: 'B2', register: 'both', en: 'to correct', hi: 'सुधारना', ex: 'Sie korrigierte den Fehler sofort.', exEn: 'She corrected the mistake immediately.', exHi: 'Usne turant galti sudhaari.', ex2: 'Er hat den Text korrigiert.', ex2En: 'He\'s corrected the text.', ex2Hi: 'Usne text sudhaara hai.', conj: { praesens: 'korrigiert', praeteritum: 'korrigierte', perfekt: 'hat korrigiert' } },
    { de: 'laufen', pos: 'verb', level: 'B2', register: 'both', en: 'to run, walk, work', hi: 'दौड़ना, चलना', ex: 'Die Maschine lief reibungslos.', exEn: 'The machine ran smoothly.', exHi: 'Machine bina rukaawat chali.', ex2: 'Sie ist jeden Morgen gelaufen.', ex2En: 'She\'s run every morning.', ex2Hi: 'Woh har subah daudi hai.', conj: { praesens: 'läuft', praeteritum: 'lief', perfekt: 'ist gelaufen' } },
    { de: 'Liberalität', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'liberality, tolerance', hi: 'उदारता', ex: 'Ihre Liberalität war bekannt.', exEn: 'Her liberality was well known.', exHi: 'Uski udaarata jaani-maani thi.', ex2: 'Sie haben die Liberalität geschätzt.', ex2En: 'They\'ve valued the liberality.', ex2Hi: 'Unhone udaarata ki sarahna ki hai.' },
    { de: 'loslassen', pos: 'verb', level: 'B2', register: 'both', en: 'to let go', hi: 'छोड़ना', ex: 'Sie ließ seine Hand los.', exEn: 'She let go of his hand.', exHi: 'Usne uska haath chhoda.', ex2: 'Er hat den Gedanken losgelassen.', ex2En: 'He\'s let go of the thought.', ex2Hi: 'Usne vichaar chhod diya hai.', conj: { praesens: 'lässt los', praeteritum: 'ließ los', perfekt: 'hat losgelassen' } },
    { de: 'loyal', pos: 'adjective', level: 'B2', register: 'both', en: 'loyal', hi: 'वफादार', ex: 'Er war ein loyaler Mitarbeiter.', exEn: 'He was a loyal employee.', exHi: 'Woh ek wafaadaar karmchari tha.', ex2: 'Sie haben loyal zusammengearbeitet.', ex2En: 'They\'ve worked together loyally.', ex2Hi: 'Unhone wafaadaari se saath kaam kiya hai.' },
    { de: 'markant', pos: 'adjective', level: 'B2', register: 'written', en: 'striking, distinctive', hi: 'विशिष्ट', ex: 'Das Gebäude hatte eine markante Fassade.', exEn: 'The building had a distinctive facade.', exHi: 'Imaarat ki vishisht saamne wali deewaar thi.', ex2: 'Sie haben ein markantes Design gewählt.', ex2En: 'They\'ve chosen a distinctive design.', ex2Hi: 'Unhone ek vishisht design chuna hai.' },
    { de: 'millionenfach', pos: 'adjective', level: 'B2', register: 'written', en: 'millions of times', hi: 'लाखों बार', ex: 'Das Video wurde millionenfach angesehen.', exEn: 'The video was watched millions of times.', exHi: 'Video ko laakhon baar dekha gaya.', ex2: 'Sie haben das Produkt millionenfach verkauft.', ex2En: 'They\'ve sold the product millions of times.', ex2Hi: 'Unhone product laakhon baar becha hai.' },
    { de: 'mitteilen', pos: 'verb', level: 'B2', register: 'both', en: 'to inform, communicate', hi: 'सूचित करना', ex: 'Sie teilte ihm die Neuigkeit mit.', exEn: 'She informed him of the news.', exHi: 'Usne use khabar batayi.', ex2: 'Er hat seine Entscheidung mitgeteilt.', ex2En: 'He\'s communicated his decision.', ex2Hi: 'Usne apna faisla bataaya hai.', conj: { praesens: 'teilt mit', praeteritum: 'teilte mit', perfekt: 'hat mitgeteilt' } },
    { de: 'Niederlage', art: 'die', gender: 'f', plural: 'Niederlagen', pos: 'noun', level: 'B2', register: 'both', en: 'defeat', hi: 'हार', ex: 'Die Mannschaft erlitt eine Niederlage.', exEn: 'The team suffered a defeat.', exHi: 'Team ko haar mili.', ex2: 'Sie haben die Niederlage akzeptiert.', ex2En: 'They\'ve accepted the defeat.', ex2Hi: 'Unhone haar sweekaar ki hai.' },
    { de: 'nominieren', pos: 'verb', level: 'B2', register: 'written', en: 'to nominate', hi: 'नामांकित करना', ex: 'Man nominierte sie für den Preis.', exEn: 'She was nominated for the award.', exHi: 'Use puraskaar ke liye naamaankit kiya gaya.', ex2: 'Sie haben ihn als Kandidaten nominiert.', ex2En: 'They\'ve nominated him as candidate.', ex2Hi: 'Unhone use ummeedwaar ke roop mein naamaankit kiya hai.', conj: { praesens: 'nominiert', praeteritum: 'nominierte', perfekt: 'hat nominiert' } },
    { de: 'Notwendigkeit', art: 'die', gender: 'f', plural: 'Notwendigkeiten', pos: 'noun', level: 'B2', register: 'written', en: 'necessity', hi: 'आवश्यकता', ex: 'Die Notwendigkeit einer Reform war klar.', exEn: 'The necessity of a reform was clear.', exHi: 'Sudhaar ki aavashyakta spasht thi.', ex2: 'Sie haben die Notwendigkeit erkannt.', ex2En: 'They\'ve recognised the necessity.', ex2Hi: 'Unhone aavashyakta ko pahchaana hai.' },
    { de: 'nutzen', pos: 'verb', level: 'B2', register: 'both', en: 'to use', hi: 'उपयोग करना', ex: 'Sie nutzten die Gelegenheit.', exEn: 'They used the opportunity.', exHi: 'Unhone avasar ka upyog kiya.', ex2: 'Er hat die Zeit gut genutzt.', ex2En: 'He\'s used the time well.', ex2Hi: 'Usne samay ka achha upyog kiya hai.', conj: { praesens: 'nutzt', praeteritum: 'nutzte', perfekt: 'hat genutzt' } },
    { de: 'Pessimismus', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'pessimism', hi: 'निराशावाद', ex: 'Sein Pessimismus war ansteckend.', exEn: 'His pessimism was contagious.', exHi: 'Uski niraashaavaad sankraamak thi.', ex2: 'Sie haben ihren Pessimismus überwunden.', ex2En: 'They\'ve overcome their pessimism.', ex2Hi: 'Unhone apni niraashaavaad par kaabu paa liya hai.' },
    { de: 'pessimistisch', pos: 'adjective', level: 'B2', register: 'both', en: 'pessimistic', hi: 'निराशावादी', ex: 'Er war sehr pessimistisch.', exEn: 'He was very pessimistic.', exHi: 'Woh bahut niraashaavaadi tha.', ex2: 'Sie haben pessimistisch reagiert.', ex2En: 'They\'ve reacted pessimistically.', ex2Hi: 'Unhone niraashaavaadi tareeke se pratikriya di hai.' },
    { de: 'prägen', pos: 'verb', level: 'B2', register: 'written', en: 'to shape, coin, characterise', hi: 'ढालना, गढ़ना', ex: 'Diese Erfahrung prägte sein Leben.', exEn: 'This experience shaped his life.', exHi: 'Is anubhav ne uski zindagi ko dhaala.', ex2: 'Sie haben den Begriff geprägt.', ex2En: 'They\'ve coined the term.', ex2Hi: 'Unhone yeh shabd gadha hai.', conj: { praesens: 'prägt', praeteritum: 'prägte', perfekt: 'hat geprägt' } },
    { de: 'Reinheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'purity', hi: 'शुद्धता', ex: 'Die Reinheit des Wassers wurde getestet.', exEn: 'The purity of the water was tested.', exHi: 'Paani ki shuddhta ki jaanch ki gayi.', ex2: 'Sie haben die Reinheit garantiert.', ex2En: 'They\'ve guaranteed the purity.', ex2Hi: 'Unhone shuddhta ki gaarantee di hai.' },
    { de: 'relativ', pos: 'adjective', level: 'B2', register: 'both', en: 'relative(ly)', hi: 'सापेक्ष', ex: 'Das war relativ einfach.', exEn: 'That was relatively simple.', exHi: 'Yeh sapeksh roop se aasaan tha.', ex2: 'Sie haben relativ schnell reagiert.', ex2En: 'They\'ve reacted relatively quickly.', ex2Hi: 'Unhone sapeksh roop se jaldi pratikriya di hai.' },
    { de: 'retten', pos: 'verb', level: 'B2', register: 'both', en: 'to save, rescue', hi: 'बचाना', ex: 'Die Feuerwehr rettete das Kind.', exEn: 'The fire department rescued the child.', exHi: 'Fire department ne bachche ko bachaaya.', ex2: 'Sie haben das Projekt gerettet.', ex2En: 'They\'ve saved the project.', ex2Hi: 'Unhone project bachaaya hai.', conj: { praesens: 'rettet', praeteritum: 'rettete', perfekt: 'hat gerettet' } },
    { de: 'rinnen', pos: 'verb', level: 'B2', register: 'written', en: 'to flow, trickle', hi: 'बहना', ex: 'Wasser rann über den Stein.', exEn: 'Water trickled over the stone.', exHi: 'Paani patthar par baha.', ex2: 'Tränen sind ihr über das Gesicht geronnen.', ex2En: 'Tears have trickled down her face.', ex2Hi: 'Aansu uske chehre par bahe hain.', conj: { praesens: 'rinnt', praeteritum: 'rann', perfekt: 'ist geronnen' } },
    { de: 'rotschämen', pos: 'verb', level: 'B2', register: 'both', en: 'to blush with shame', hi: 'शर्म से लाल होना', ex: 'Sie schämte sich rot.', exEn: 'She blushed with shame.', exHi: 'Woh sharam se laal ho gayi.', ex2: 'Er hat sich rotgeschämt.', ex2En: 'He\'s blushed with shame.', ex2Hi: 'Woh sharam se laal ho gaya hai.', conj: { praesens: 'schämt sich rot', praeteritum: 'schämte sich rot', perfekt: 'hat sich rotgeschämt' } },
    { de: 'schmeißen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to chuck, fling (slang)', hi: 'फेंकना (बोलचाल)', ex: 'Er schmiss die Tasche in die Ecke.', exEn: 'He chucked the bag into the corner.', exHi: 'Usne bag konay mein feink diya.', ex2: 'Sie hat den Ball geschmissen.', ex2En: 'She\'s chucked the ball.', ex2Hi: 'Usne gend feinki hai.', conj: { praesens: 'schmeißt', praeteritum: 'schmiss', perfekt: 'hat geschmissen' } },
    { de: 'schwören', pos: 'verb', level: 'B2', register: 'both', en: 'to swear, vow', hi: 'कसम खाना', ex: 'Er schwor, die Wahrheit zu sagen.', exEn: 'He swore to tell the truth.', exHi: 'Usne sach bolne ki kasam khaayi.', ex2: 'Sie haben Treue geschworen.', ex2En: 'They\'ve sworn loyalty.', ex2Hi: 'Unhone wafaadaari ki kasam khaayi hai.', conj: { praesens: 'schwört', praeteritum: 'schwor', perfekt: 'hat geschworen' } },
    { de: 'sehnen', pos: 'verb', level: 'B2', register: 'written', en: 'to long, yearn', hi: 'तरसना', ex: 'Sie sehnte sich nach Ruhe.', exEn: 'She yearned for peace.', exHi: 'Woh shaanti ke liye taras rahi thi.', ex2: 'Er hat sich nach Hause gesehnt.', ex2En: 'He\'s longed for home.', ex2Hi: 'Woh ghar ke liye taras raha hai.', conj: { praesens: 'sehnt', praeteritum: 'sehnte', perfekt: 'hat gesehnt' } },
    { de: 'senken', pos: 'verb', level: 'B2', register: 'both', en: 'to lower, reduce', hi: 'कम करना', ex: 'Die Bank senkte die Zinsen.', exEn: 'The bank lowered the interest rates.', exHi: 'Bank ne byaaj dar kam ki.', ex2: 'Sie haben die Kosten gesenkt.', ex2En: 'They\'ve reduced the costs.', ex2Hi: 'Unhone lagat kam ki hai.', conj: { praesens: 'senkt', praeteritum: 'senkte', perfekt: 'hat gesenkt' } },
    { de: 'shoppen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to shop', hi: 'खरीदारी करना', ex: 'Sie shoppten den ganzen Tag.', exEn: 'They shopped all day.', exHi: 'Unhone poora din khareedaari ki.', ex2: 'Wir haben online geshoppt.', ex2En: 'We\'ve shopped online.', ex2Hi: 'Humne online khareedaari ki hai.', conj: { praesens: 'shoppt', praeteritum: 'shoppte', perfekt: 'hat geshoppt' } },
    { de: 'sozusagen', pos: 'adverb', level: 'B2', register: 'both', en: 'so to speak', hi: 'मानो, कह सकते हैं', ex: 'Er ist sozusagen der Chef.', exEn: 'He is, so to speak, the boss.', exHi: 'Woh mano boss hai.', ex2: 'Sie haben es sozusagen geschafft.', ex2En: 'They\'ve, so to speak, managed it.', ex2Hi: 'Unhone mano isse kar liya hai.' },
    { de: 'Sprachstörung', art: 'die', gender: 'f', plural: 'Sprachstörungen', pos: 'noun', level: 'B2', register: 'written', en: 'speech disorder', hi: 'वाक विकार', ex: 'Die Sprachstörung wurde früh diagnostiziert.', exEn: 'The speech disorder was diagnosed early.', exHi: 'Vaak vikaar jaldi pehchaana gaya.', ex2: 'Sie haben eine Therapie für die Sprachstörung begonnen.', ex2En: 'They\'ve started therapy for the speech disorder.', ex2Hi: 'Unhone vaak vikaar ke liye therapy shuru ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Konjunktiv II für Vermutungen?',
      body: [ 'German often uses dürfte (probably, likely) and könnte (might, could possibly) to express assumptions when the speaker doesn\'t know for certain.' ],
      table: {
        head: ['Example'],
        rows: [
          ['<span class="de">Anna dürfte jetzt zu Hause sein.</span> — Anna is probably at home.'],
          ['<span class="de">Rohan könnte krank sein.</span> — Rohan might be ill.']
        ]
      },
      hinglish: 'Jab speaker ko pakka pata nahi hota, tab German <b>d\u00fcrfte</b> aur <b>k\u00f6nnte</b> use karta hai. <b>d\u00fcrfte</b> ka matlab hai "shaayad, aur mujhe kaafi lagta hai", aur <b>k\u00f6nnte</b> ka matlab hai "ho sakta hai" \u2014 yani kam certainty.'
    },
    {
      title: 'Wahrscheinlichkeitsskala (Probability Scale)',
      body: [ 'A rough scale, from full certainty down to a soft maybe.' ],
      table: {
        head: ['Certainty', 'Expression'],
        rows: [
          ['100%', 'Ich weiß.'],
          ['90%', 'Er dürfte ...'],
          ['70%', 'Er wird ...'],
          ['50%', 'Er könnte ...'],
          ['30%', 'Vielleicht...']
        ]
      },
      hinglish: 'Yeh ek rough scale hai \u2014 poori certainty se shuru hokar halke "shaayad" tak. Isse tumhe andaaza lagega ki kaunsa shabd kitna zor deta hai.'
    },
    {
      title: 'dürfte vs könnte',
      body: [ 'dürfte = very likely, probably; könnte = maybe, possibly, lower certainty.' ],
      table: {
        head: ['dürfte (very likely)', 'könnte (possible)'],
        rows: [
          ['<span class="de">Der Zug dürfte gleich ankommen.</span>', '<span class="de">Anna könnte noch arbeiten.</span>'],
          ['<span class="de">Anna dürfte schon im Büro sein.</span>', '<span class="de">Es könnte morgen regnen.</span>']
        ]
      },
      hinglish: '<b>d\u00fcrfte</b> tab use karo jab tumhe kaafi yakeen ho \u2014 matlab "probably". Aur <b>k\u00f6nnte</b> tab jab sirf possibility ho \u2014 matlab "ho sakta hai". Certainty ka farak hi in dono ko alag karta hai.'
    },
    {
      title: 'Vergleich mit Futur I',
      body: [ 'All three structures express assumptions, but with slightly different certainty and register.' ],
      table: {
        head: ['Structure', 'Certainty', 'Register'],
        rows: [
          ['<span class="de">Er wird zu Hause sein.</span>', 'Probably', 'Neutral'],
          ['<span class="de">Er dürfte zu Hause sein.</span>', 'Probably (elegant)', 'More formal, common in writing'],
          ['<span class="de">Er könnte zu Hause sein.</span>', 'Maybe', 'Lower certainty']
        ]
      },
      hinglish: 'Teeno andaaza batate hain, par certainty aur register mein thoda farak hai. <b>wird</b> neutral hai, <b>d\u00fcrfte</b> zyada formal aur zyada confident, aur <b>k\u00f6nnte</b> sabse halka.'
    },
    {
      title: 'Register',
      body: [ 'dürfte is common in formal writing; könnte works naturally in both spoken and written German.' ],
      table: {
        head: ['dürfte', 'könnte'],
        rows: [
          ['Newspapers, reports, presentations, academic discussions, Goethe B2 Writing', 'Common in both spoken and written German']
        ]
      },
      hinglish: '<b>d\u00fcrfte</b> zyada-tar formal writing mein aata hai \u2014 reports aur presentations mein. <b>k\u00f6nnte</b> bolne aur likhne, dono mein natural lagta hai.'
    },
    {
      title: 'Typische Ausdrücke (Typical Expressions)',
      body: [ 'These fixed expressions are very common in spoken and written B2 German.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das dürfte stimmen.</span>'],
          ['<span class="de">Das könnte schwierig werden.</span>'],
          ['<span class="de">Das dürfte kein Problem sein.</span>'],
          ['<span class="de">Das könnte funktionieren.</span>']
        ]
      },
      hinglish: 'Yeh fixed expressions B2 mein bahut aate hain \u2014 inhe poore chunk ki tarah yaad kar lo, phir bolte waqt sochna nahi padega.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These are genuine errors \u2014 a doubled probability word, a dropped or conjugated verb, or two different structures crammed into one verb group. Note that <span class="de">Anna d\u00fcrfte gehen k\u00f6nnen</span> is NOT an error: it correctly means \u201cAnna is probably able to go\u201d.' ],
      mistakes: [
        { wrong: 'Er dürfte kommen vielleicht.', right: 'Er dürfte kommen.', why: 'Combining "dürfte" and "vielleicht" doubles the probability marker unnecessarily.' },
        { wrong: 'Er könnte wahrscheinlich kommen.', right: 'Er könnte kommen. (or) Er kommt wahrscheinlich.', why: 'Do not combine "könnte" with "wahrscheinlich" — pick one probability structure.' },
        { wrong: 'Anna dürfte gegangen.', right: 'Anna dürfte gegangen sein.', why: 'For an assumption about the past, d\u00fcrfte needs Partizip II + sein at the end \u2014 the sein cannot be dropped.' },
        { wrong: 'Das wird könnte stimmen.', right: 'Das dürfte stimmen. (or) Das wird stimmen.', why: 'Mixing Futur I ("wird") with Konjunktiv II ("könnte") in one verb group is ungrammatical.' },
        { wrong: 'Er dürfte morgen fährt.', right: 'Er dürfte morgen fahren.', why: 'After d\u00fcrfte the second verb is always a bare infinitive (fahren), never a conjugated form.' }
      ],
      hinglish: 'Yeh sach mein galtiyan hain \u2014 do probability words ek saath, verb chhod dena ya conjugate kar dena, ya do structures ko ek hi verb group mein mila dena. Ek baat clear rakho: <span class="de">Anna d\u00fcrfte gehen k\u00f6nnen</span> galat nahi hai, uska matlab hai ki Anna shaayad jaa sakti hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Precisely ranking your certainty with dürfte vs könnte is a strong marker of natural, native-like B2 German.' ],
      note: 'Memory trick: dürfte = probably, high certainty. könnte = maybe, lower certainty.',
      hinglish: '<b>d\u00fcrfte</b> aur <b>k\u00f6nnte</b> ka sahi choice B2 par kaafi strong signal hai, kyunki isse tum apni certainty exactly bata pate ho.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsartikel: Warum unser Gehirn Risiken falsch einschätzt',
    titleEn: 'Science article: why our brain misjudges risks',
    tokens: [
      { w: 'Warum', role: 'plain', en: 'why', hi: 'क्यों', type: 'Fragewort' },
      { w: 'trifft', role: 'plain', en: 'makes', hi: 'लेता है', type: 'Verb · treffen (Entscheidung treffen)' },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Gehirn', role: 'plain', en: 'brain', hi: 'मस्तिष्क', type: 'Noun · neut.', why: 'das Gehirn (this chapter).' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: 'irrationale', role: 'plain', en: 'irrational', hi: 'अतार्किक', type: 'Adjective' },
      { w: 'Entscheidungen', role: 'plain', en: 'decisions (Satzende)', hi: 'निर्णय (Satzende)', type: 'Noun · plural' },
      { w: '?', plain: true },
      { w: 'Eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'mögliche', role: 'plain', en: 'possible', hi: 'संभावित', type: 'Adjective' },
      { w: 'Erklärung', role: 'plain', en: 'explanation', hi: 'व्याख्या', type: 'Noun · fem.' },
      { w: 'könnte', role: 'r-verb', en: 'could (Konjunktiv II, vorsichtige Vermutung)', hi: 'हो सकती है (Konjunktiv II)', type: 'Verb · können (Konjunktiv II)', why: '"könnte" (Konjunktiv II) expresses a cautious, hedged hypothesis rather than a certain fact — softer than "kann" (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'an (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'falschen', role: 'plain', en: 'incorrect', hi: 'ग़लत', type: 'Adjective' },
      { w: 'Investition', role: 'plain', en: 'investment (Satzende)', hi: 'निवेश (Satzende)', type: 'Noun · fem.', why: 'die Investition (this chapter).' },
      { w: 'liegen', role: 'plain', en: 'lie (Satzende)', hi: 'निहित होना (Satzende)', type: 'Verb · liegen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Man', role: 'plain', en: 'one', hi: 'कोई', type: 'Pronoun' },
      { w: 'würde', role: 'r-verb', en: 'would (Konjunktiv II Vermutung)', hi: 'सोचेगा (Konjunktiv II)', type: 'Verb · werden (Konjunktiv II)', why: '"würde" + Infinitiv softens a claim into a plausible assumption (this chapter).' },
      { w: 'annehmen', role: 'plain', en: 'assume (Satzende)', hi: 'मान लेना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: ',', plain: true },
      { w: 'unser', role: 'plain', en: 'our', hi: 'हमारा', type: 'Possessivartikel' },
      { w: 'Pessimismus', role: 'plain', en: 'pessimism', hi: 'निराशावाद', type: 'Noun · masc.', why: 'der Pessimismus (this chapter).' },
      { w: 'schütze', role: 'plain', en: 'protects (Konjunktiv I, indirekte Rede)', hi: 'बचाता है (Konjunktiv I)', type: 'Verb · schützen (Konjunktiv I)' },
      { w: 'uns', role: 'plain', en: 'us', hi: 'हमें', type: 'Pronoun · Akk.' },
      { w: 'vor', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Verlusten', role: 'plain', en: 'losses (Satzende)', hi: 'नुक़सान (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronoun' },
      { w: 'wäre', role: 'r-verb', en: 'would be (Konjunktiv II)', hi: 'होगी (Konjunktiv II)', type: 'Verb · sein (Konjunktiv II)' },
      { w: 'eine', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'Ironie', role: 'plain', en: 'irony', hi: 'विडंबना', type: 'Noun · fem.', why: 'die Ironie (this chapter).' },
      { w: ',', plain: true },
      { w: 'wenn', role: 'plain', en: 'if', hi: 'अगर', type: 'Konjunktion' },
      { w: 'ausgerechnet', role: 'plain', en: 'of all things', hi: 'ख़ासकर', type: 'Adverb' },
      { w: 'diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Schutzfunktion', role: 'plain', en: 'protective function (Satzende)', hi: 'सुरक्षात्मक कार्य (Satzende)', type: 'Noun · fem.' },
      { w: 'uns', role: 'plain', en: 'us', hi: 'हमें', type: 'Pronoun · Akk.' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Ende', role: 'plain', en: 'end', hi: 'अंत', type: 'Noun · neut.' },
      { w: 'teurer', role: 'plain', en: 'more expensive', hi: 'अधिक महंगा', type: 'Adjective · Komparativ' },
      { w: 'zu', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · zu stehen kommen' },
      { w: 'stehen', role: 'plain', en: 'stands', hi: 'पड़ता है', type: 'Verb' },
      { w: 'käme', role: 'r-verb', en: 'came (Konjunktiv II Nebensatz, Satzende)', hi: 'पड़ता (Konjunktiv II, Satzende)', type: 'Verb · kommen (Konjunktiv II, Satzende)' },
      { w: '.', plain: true },
      { w: 'Vielleicht', role: 'plain', en: 'perhaps', hi: 'शायद', type: 'Adverb' },
      { w: 'würde', role: 'r-verb', en: 'would', hi: 'शायद', type: 'Verb · würde + Infinitiv (Konjunktiv II)', why: 'würde + Infinitiv: the everyday alternative to the simple Konjunktiv II form (this chapter).' },
      { w: 'uns', role: 'plain', en: 'us', hi: 'हमारी', type: 'Pronoun · Dat.' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'einfacher', role: 'plain', en: 'simple', hi: 'सरल', type: 'Adjective' },
      { w: 'Warnhinweis', role: 'plain', en: 'warning note', hi: 'चेतावनी', type: 'Noun · masc.' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'ही', type: 'Adverb' },
      { w: 'helfen', role: 'plain', en: 'help (Satzende)', hi: 'मदद करना (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'diese', role: 'plain', en: 'this', hi: 'इस', type: 'Determiner' },
      { w: 'Falle', role: 'plain', en: 'trap', hi: 'जाल', type: 'Noun · fem.' },
      { w: 'künftig', role: 'plain', en: 'in future', hi: 'भविष्य में', type: 'Adverb' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'vermeiden', role: 'plain', en: 'avoid (Satzende)', hi: 'बचना (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'dahin', role: 'plain', en: 'then (Satzende)', hi: 'तब (Satzende)', type: 'Adverb' },
      { w: 'bleibt', role: 'plain', en: 'remains', hi: 'बनी रहती है', type: 'Verb · bleiben' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Forschung', role: 'plain', en: 'research', hi: 'शोध', type: 'Noun · fem.' },
      { w: 'auf', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Vermutungen', role: 'plain', en: 'assumptions (Satzende)', hi: 'अनुमानों (Satzende)', type: 'Noun · plural' },
      { w: 'angewiesen', role: 'plain', en: 'reliant (Satzende)', hi: 'निर्भर (Satzende)', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'Why does our brain often make irrational decisions? A possible explanation could lie in an incorrect investment. One would assume that our pessimism protects us from losses. It would be an irony if precisely this protective function ended up costing us more in the end. Perhaps a simple warning note would already help us avoid this trap in future. Until then, research remains reliant on assumptions.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_032_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nele, Marco antwortet schon seit zwei Tagen nicht.', en: 'Nele, Marco hasn\'t answered for two days now.' },
      { id: 'B2_032_L002', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Er könnte krank sein, oder er dürfte einfach im Urlaub sein.', en: 'He could be sick, or he might just be on vacation.' },
      { id: 'B2_032_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Im Urlaub? Das dürfte kaum sein, er hatte doch letzte Woche noch ein Projekt fertig.', en: 'On vacation? That\'s hardly likely, he still had a project to finish last week.' },
      { id: 'B2_032_L004', speaker: 'Nele', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dann könnte er vielleicht einfach nur im Arbeitsstress untergehen.', en: 'Then maybe he could just be drowning in work stress.' }
    ],
    transcript: 'Nele, Marco antwortet schon seit zwei Tagen nicht. Er könnte krank sein, oder er dürfte einfach im Urlaub sein. Im Urlaub? Das dürfte kaum sein, er hatte doch letzte Woche noch ein Projekt fertig. Dann könnte er vielleicht einfach nur im Arbeitsstress untergehen.',
    translation: 'Nele, Marco hasn\'t answered for two days now. He could be sick, or he might just be on vacation. On vacation? That\'s hardly likely, he still had a project to finish last week. Then maybe he could just be drowning in work stress.',
    tokens: [
      { w: 'Nele' },
      { w: ',', plain: true },
      { w: 'Marco' },
      { w: 'antwortet' },
      { w: 'schon' },
      { w: 'seit' },
      { w: 'zwei' },
      { w: 'Tagen' },
      { w: 'nicht' },
      { w: '.', plain: true },
      { w: 'Er' },
      { w: 'könnte' },
      { w: 'krank' },
      { w: 'sein' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: 'er' },
      { w: 'dürfte' },
      { w: 'einfach' },
      { w: 'im' },
      { w: 'Urlaub' },
      { w: 'sein' },
      { w: '.', plain: true },
      { w: 'Im' },
      { w: 'Urlaub' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'dürfte' },
      { w: 'kaum' },
      { w: 'sein' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'hatte' },
      { w: 'doch' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'noch' },
      { w: 'ein' },
      { w: 'Projekt' },
      { w: 'fertig' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'könnte' },
      { w: 'er' },
      { w: 'vielleicht' },
      { w: 'einfach' },
      { w: 'nur' },
      { w: 'im' },
      { w: 'Arbeitsstress' },
      { w: 'untergehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was vermutet Nele zuerst über Marco?', qEn: 'What does Nele first guess about Marco?', options: ['er ist im Ausland', 'er könnte krank sein', 'er hat gekündigt', 'er ist beleidigt'], optionsEn: ['he is abroad', 'he could be ill', 'he has resigned', 'he is offended'], answer: 1,
        explain: '"Er könnte krank sein."' },
      { q: 'Warum zweifelt Timo an der Urlaubsvermutung?', qEn: 'Why does Timo doubt the vacation guess?', options: ['Marco hasst Urlaub', 'Marco hatte letzte Woche noch ein Projekt', 'Marco ist nie weg', 'es ist Winter'], optionsEn: ['Marco hates holidays', 'Marco still had a project last week', 'Marco is never away', 'it is winter'], answer: 1,
        explain: '"… er hatte doch letzte Woche noch ein Projekt fertig."' }
    ]
  },

  speaking: [
    { task: "Marco antwortet seit zwei Tagen nicht. Vermute vorsichtig.", taskEn: "Marco hasn't answered for two days. Guess cautiously.", de: "Er könnte krank sein, oder er dürfte im Urlaub sein.", en: "He could be ill, or he's most likely on holiday." },
    { task: "Deine Freundin hält Urlaub für unwahrscheinlich. Antworte.", taskEn: "Your friend thinks holiday is unlikely. Answer.", de: "Im Urlaub dürfte er kaum sein, er hat gerade angefangen.", en: "He's hardly likely to be on holiday, he's only just started." },
    { task: "Deine Chefin fragt, ob der Termin zu halten ist.", taskEn: "Your boss asks whether the deadline can be met.", de: "Es könnte klappen, wenn die Daten morgen kommen.", en: "It could work out if the data arrives tomorrow." },
    { task: "Eine Kollegin fragt, woran die Fehlentscheidung lag.", taskEn: "A colleague asks what caused the wrong decision.", de: "Es dürfte an den fehlenden Informationen gelegen haben.", en: "It was most likely down to the missing information." },
    { task: "Ein Kollege fragt, wie du die Chancen einschätzt.", taskEn: "A colleague asks how you rate the chances.", de: "Die Chancen dürften gut sein, aber es könnte am Geld scheitern.", en: "The chances are most likely good, but it could fail on money." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Discussion essay (6-8 sentences): Discuss a workplace or university topic, using "dürfte" for very likely assumptions and "könnte" for less certain possibilities.\n\nTASK 2 — Email (6-8 sentences): Write to a colleague about an uncertain situation, ranking your assumptions by certainty using dürfte, könnte, and wird.',
    starters: ['Das dürfte …', 'Es könnte …'],
    placeholder: 'Der Zug dürfte gleich ankommen. Unser Kollege könnte ihn verpasst haben …',
    minWords: 60
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which word expresses "very likely, almost certain"?',
      options: ['dürfte', 'könnte', 'vielleicht'],
      answer: 0,
      explain: '"dürfte" expresses high probability, close to certainty, without stating it as fact.'
    },
    gap: {
      sentence: ['Es ', ' morgen regnen.'],
      gaps: [ { answer: 'könnte', accepts: ['könnte'] } ],
      explain: '"könnte" naturally expresses a possible but less certain guess about the weather.'
    },
    match: {
      q: 'Match each structure to its certainty level.',
      pairs: [
        { noun: 'dürfte', art: 'Very high probability' },
        { noun: 'wird', art: 'High probability (neutral)' },
        { noun: 'könnte', art: 'Medium/lower probability' },
        { noun: 'vielleicht', art: 'Lower certainty' }
      ]
    },
    builder: {
      target: 'Build: "The meeting might have been postponed." (medium probability)',
      bank: ['Die', 'Sitzung', 'könnte', 'verschoben', 'worden', 'sein', '.'],
      answer: ['Die', 'Sitzung', 'könnte', 'verschoben', 'worden', 'sein', '.'],
      roles: { 'könnte': 'r-vermutungen', 'worden': 'r-vermutungen', 'sein': 'r-vermutungen' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Er dürfte kommen vielleicht.',
      right: 'Er dürfte kommen.',
      explain: 'Combining "dürfte" and "vielleicht" doubles the probability marker unnecessarily — use only one.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "dürfte" express in this chapter?', options: ['Very high probability, an assumption', 'Permission', 'A polite request'], answer: 0,
      explain: 'In this chapter, "dürfte" expresses very likely probability, not permission.' },
    { q: 'What does "könnte" express here?', options: ['A possible but less certain guess', 'Physical ability', 'A command'], answer: 0,
      explain: '"könnte" here expresses a medium/lower-certainty assumption, not ability.' },
    { q: 'Which has higher certainty: dürfte or könnte?', options: ['dürfte', 'könnte', 'They are equal'], answer: 0,
      explain: '"dürfte" expresses very high probability; "könnte" expresses a lower-certainty possibility.' },
    { q: 'Is "Er dürfte wahrscheinlich kommen" correct?', options: ['No — it doubles the probability marker', 'Yes, it\'s perfectly natural', 'Only in formal writing'], answer: 0,
      explain: 'Combining "dürfte" with "wahrscheinlich" is redundant — choose one probability structure.' },
    { q: 'Does this chapter teach the permission meaning of dürfen?', options: ['No — only the assumption meaning of dürfte', 'Yes, both meanings equally', 'Yes, primarily permission'], answer: 0,
      explain: 'This chapter focuses only on dürfte/könnte as assumption markers, not dürfen\'s permission meaning.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-vermutungen', html: 'dürfte expresses very high probability — an assumption the speaker is almost certain of.' },
    { c: 'r-vermutungen', html: 'könnte expresses a possible but less certain guess — lower confidence than dürfte.' },
    { c: 'r-vermutungen', html: 'Together with Futur I and wahrscheinlich/vermutlich/wohl, these give German a fine-grained scale for expressing certainty.' }
  ],
  revisionTips: [
    'Practise ranking your own assumptions by certainty — would you say dürfte, wird, or könnte?',
    'Listen for "Das dürfte stimmen" and "Das könnte funktionieren" in conversations — extremely common fixed expressions.',
    'Keep permission-dürfen, ability-können, müsste, and mag for later — this chapter is only about dürfte/könnte as assumption markers.'
  ]
};

window.CHAPTER = CHAPTER;
