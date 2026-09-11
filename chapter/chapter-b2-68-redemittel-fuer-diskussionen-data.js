/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 7 · Chapter 68
   "Redemittel für Diskussionen" — communication strategies for
   managing a full discussion: opening, asking for opinions,
   agreeing/disagreeing, clarifying, interrupting politely,
   summarizing, concluding. Communication-focused, NOT new
   grammar. Recycling chapter — no new vocabulary.
   IMPORTANT: dialogue uses ONLY Katrin and Timo.
============================================================ */
const CHAPTER = {
  id: 'b2-68-redemittel-fuer-diskussionen',
  phase: 'B2 · Phase 7',
  number: 68,
  title: 'Redemittel für Diskussionen',
  titleEn: 'Discussion phrases',
  description: 'Grammar helps you build sentences. Redemittel help you sound natural. Open. Ask. Listen. Respond. Clarify. Summarize. Conclude.',
  xp: 940,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 69, title: 'Goethe-Zertifikat B2 Final', titleEn: 'Goethe-Zertifikat B2 — Final Examination' , href: 'chapter-b2-69-goethe-zertifikat-b2-final.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Grammar builds sentences. <em>Redemittel</em> sound natural.',
    intro: 'In a full Goethe B2 discussion on whether universities should require AI tools, Timo and Katrin manage the whole exchange with fixed phrases — asking to interrupt, summarizing, clarifying — grammar builds the sentences, Redemittel make them sound natural.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Follow the full discussion rhythm: open, ask, listen, respond, clarify, summarize, conclude'
    ],
    scene: 'Goethe B2 Partnergespräch',
    femaleSpeakers: ['Katrin'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Darf', role: 'r-modalverb', en: 'may', hi: 'सकता हूँ', pron: 'darf', type: 'Modal · dürfen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kurz', role: 'r-akkusativ', en: 'briefly', hi: 'ज़रा', pron: 'kurts', type: 'Adverb' },
        { w: 'nachfragen', role: 'r-verb', en: 'ask further', hi: 'पूछ सकता हूँ', pron: 'NAHKH-frah-gen', type: 'Verb · infinitive (Satzende)', why: 'nachfragen = to ask a follow-up question, discussion phrase (this chapter).', ex: 'Darf ich kurz nachfragen?' },
        { w: '?', plain: true }
      ], en: 'May I briefly ask a follow-up question?', hi: 'Kya main zara aur poochh sakta hoon?' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Natürlich', role: 'r-adverb', en: 'of course', hi: 'ज़रूर', pron: 'na-TÜR-likh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Of course.', hi: 'Zaroor.' },
      { speaker: 'Timo', tokens: [
        { w: 'Meinst', role: 'r-verb', en: 'do you mean', hi: 'मतलब है', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'regelmäßige', role: 'r-subject', en: 'regular', hi: 'नियमित', pron: 'RAY-gel-mai-si-guh', type: 'Adjective' },
        { w: 'Treffen', role: 'r-subject', en: 'meetings', hi: 'मुलाक़ातें', pron: 'TRE-fen', type: 'Noun · plural' },
        { w: 'genügen', role: 'r-verb', en: 'suffice', hi: 'काफ़ी हैं', pron: 'ge-NÜ-gen', type: 'Verb · genügen (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you mean that regular meetings suffice?', hi: 'Kya tumhaara matlab hai ki niyamit mulaaqaatein kaafi hain?' },
      { speaker: 'Katrin', side: 'right', tokens: [
        { w: 'Genau', role: 'r-adverb', en: 'exactly', hi: 'बिल्कुल', pron: 'ge-NOW', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Entschuldige', role: 'r-verb', en: 'sorry', hi: 'माफ़ करना', pron: 'ent-SHUL-di-guh', type: 'Verb · entschuldigen (imperative)' },
        { w: ',', plain: true },
        { w: 'darf', role: 'r-modalverb', en: 'may', hi: 'सकती हूँ', pron: 'darf', type: 'Modal · dürfen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हें', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'kurz', role: 'r-akkusativ', en: 'briefly', hi: 'ज़रा', pron: 'kurts', type: 'Adverb' },
        { w: 'unterbrechen', role: 'r-verb', en: 'interrupt', hi: 'बीच में रोकना', pron: 'un-ter-BRE-khen', type: 'Verb · infinitive (Satzende)', why: 'unterbrechen = to interrupt, discussion phrase (this chapter).', ex: 'Darf ich dich kurz unterbrechen?' },
        { w: '?', plain: true }
      ], en: 'Exactly. Sorry, may I briefly interrupt you?', hi: 'Bilkul. Maaf karna, kya main tumhe zara rok sakti hoon?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'bitte', role: 'r-akkusativ', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness' },
        { w: '.', plain: true }
      ], en: 'Yes, please.', hi: 'Haan, kripya.' },
      { speaker: 'Katrin', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'kurz', role: 'r-akkusativ', en: 'briefly', hi: 'संक्षेप में', pron: 'kurts', type: 'Adverb' },
        { w: 'zusammenfassen', role: 'r-verb', en: 'summarize', hi: 'सारांश देना', pron: 'tsu-ZA-men-fa-sen', type: 'Verb · infinitive (Satzende)', why: 'zusammenfassen = to summarize, discussion phrase (this chapter).', ex: 'Ich möchte kurz zusammenfassen.' },
        { w: ',', plain: true },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'जो', pron: 'vas', type: 'Relativpronomen · was' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'besprochen', role: 'r-verb', en: 'discussed', hi: 'चर्चा की', pron: 'be-SHPRO-khen', type: 'Partizip II' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I would like to briefly summarize what we have discussed.', hi: 'Main sankshep mein sara karna chahti hoon jo humne charcha ki hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'gairn', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Meiner', role: 'r-dativ', en: 'my (fem. gen.)', hi: 'मेरी', pron: 'MY-ner', type: 'Possessive · genitive' },
        { w: 'Meinung', role: 'r-dativ', en: 'opinion (gen.)', hi: 'राय के', pron: 'MY-nung', type: 'Noun · fem. genitive' },
        { w: 'nach', role: 'r-preposition', en: 'according to', hi: 'अनुसार', pron: 'nahkh', type: 'Preposition' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'किया', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'guten', role: 'r-akkusativ', en: 'good', hi: 'अच्छा', pron: 'GOO-ten', type: 'Adjective' },
        { w: 'Kompromiss', role: 'r-akkusativ', en: 'compromise', hi: 'समझौता', pron: 'kom-pro-MIS', type: 'Noun · masc.' },
        { w: 'gefunden', role: 'r-verb', en: 'found', hi: 'पाया', pron: 'ge-FUN-den', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Gladly. In my opinion we have found a good compromise.', hi: 'Khushi se. Meri raay mein humne ek achha samjhauta paaya hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Grammar helps you build sentences. <span class="de r-open">Redemittel</span> help you sound natural. Every successful discussion follows one rhythm: <b>Open → Ask → Listen → Respond → Clarify → Summarize → Conclude</b>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is REDEMITTEL FÜR DISKUSSIONEN (discussion phrases) at B2 level — a communication-strategy chapter, NOT new grammar. Stages: Opening (Lassen Sie uns beginnen; Wollen wir über...sprechen?; Heute geht es um...); Asking for opinions (Was denken Sie darüber?; Wie sehen Sie das?; Was halten Sie davon?); Expressing opinions (recycled from Ch66: Meiner Meinung nach...; Ich bin der Meinung, dass...); Agreeing (Ich stimme Ihnen zu; Da haben Sie recht; Genau; Das stimmt); Disagreeing politely (Ich sehe das etwas anders; Dem kann ich nicht ganz zustimmen; Allerdings denke ich...); Clarifying (Könnten Sie das näher erklären?; Was meinen Sie genau?; Können Sie ein Beispiel nennen?; Habe ich Sie richtig verstanden?); Interrupting politely (Darf ich kurz etwas sagen?; Entschuldigung, darf ich ergänzen?; Wenn ich kurz etwas hinzufügen darf...); Summarizing (Zusammenfassend kann man sagen, dass...; Kurz gesagt...); Concluding (Vielen Dank für die Diskussion; Damit können wir die Diskussion abschließen). ' +
    'Do NOT expect or require new grammar topics, C1 rhetorical strategies, debate moderation, or negotiation techniques — this chapter is entirely communication-focused; do not flag their absence. The most important thing to catch: direct English/Hindi-influenced translations that sound unnatural in German (e.g. "Ich bin einverstanden mit dir" instead of "Ich stimme dir zu"; "Ich habe gleiche Meinung" instead of "Ich bin derselben Meinung"). The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag unnatural, translated-sounding phrasing and suggest the idiomatic German Redemittel instead.\n' +
    '- Check that fixed expressions are grammatically correct (e.g. "zustimmen" needs a dative object + separable "zu"; formal "Sie" forms match consistently if the register is formal).\n' +
    '- Check that polite interruption/clarification phrases use correct modal verb + word order (e.g. "Darf ich kurz etwas sagen?", "Könnten Sie das näher erklären?").\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Discussion flow check:</b> one sentence on whether the learner\'s text moved naturally through the discussion stages (open, ask, respond, clarify, summarize, conclude) where applicable.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you manage a full discussion naturally with the right Redemittel at each stage. Ready for presentation phrases next.',
    mid: 'Good. Re-read the Discussion Flow table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: grammar builds sentences, Redemittel make you sound natural.'
  },

  parserSentence: [
    { w: 'Lassen', role: 'r-open' }, { w: 'Sie', role: 'r-open' }, { w: 'uns', role: 'r-open' }, { w: 'beginnen', role: 'r-open' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Redemittel manage the discussion rhythm — open, ask, listen, respond, clarify, summarize, conclude.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Katrin and Timo run a full Goethe B2 Partnergespräch, using discussion phrases at every stage.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key discussion words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the Discussion Flow model and its ten stages of fixed expressions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a university seminar transcript and a workplace meeting discussing flexible working hours.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify discussion opener, opinion phrases, clarification, polite interruption, summary, and conclusion.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Open discussions, ask for opinions, agree/disagree, clarify, summarize, and conclude.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a complete discussion script with 20+ Redemittel and rewrite an unnatural dialogue.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the best Redemittel, discussion ordering, and formal vs informal expressions.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 940 XP.' },
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
      desc: 'Redemittel-choice drills, discussion-ordering practice, and a full discussion-script writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '11 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Discussion Flow table, Formal vs Informal comparison, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '10 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Lassen Sie uns beginnen. / Heute geht es um ...', text: 'Open a discussion and introduce the topic naturally' },
    { de: 'Was denken Sie darüber? / Wie sehen Sie das?', text: 'Invite others into the discussion by asking for their opinion' },
    { de: 'Könnten Sie das näher erklären? / Habe ich Sie richtig verstanden?', text: 'Clarify meaning and confirm understanding' },
    { de: 'Darf ich kurz etwas sagen? / Wenn ich kurz etwas hinzufügen darf ...', text: 'Interrupt politely without being rude' },
    { de: 'Zusammenfassend kann man sagen, dass ... / Vielen Dank für die Diskussion.', text: 'Summarize the discussion and conclude naturally' }
  ],

  vocab: [
    { de: 'die Diskussion', art: 'die', gender: 'f', plural: 'Diskussionen', pos: 'noun', level: 'B2', register: 'both', en: 'discussion', hi: 'चर्चा', ex: 'Die Diskussion war sehr lebhaft.', exEn: 'The discussion was very lively.', exHi: 'Charcha bahut josh se bhari thi.', ex2: 'Sie haben die Diskussion eröffnet.', ex2En: 'They\'ve opened the discussion.', ex2Hi: 'Unhone charcha shuru ki hai.' },
    { de: 'nachfragen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to ask again, follow up', hi: 'दोबारा पूछना', ex: 'Darf ich kurz nachfragen?', exEn: 'May I briefly follow up?', exHi: 'Kya main jaldi se dobara pooch sakta hoon?', ex2: 'Sie haben mehrmals nachgefragt.', ex2En: 'They\'ve followed up several times.', ex2Hi: 'Unhone kai baar dobara poocha hai.', conj: { praesens: 'fragt nach', praeteritum: 'fragte nach', perfekt: 'hat nachgefragt' } },
    { de: 'zusammenfassen', pos: 'verb', level: 'B2', register: 'both', en: 'to summarize', hi: 'संक्षेप में बताना', ex: 'Zusammenfassend kann man sagen, dass die Idee gut ist.', exEn: 'In summary, one can say the idea is good.', exHi: 'Saaraansh mein, kaha jaa sakta hai ki vichaar achha hai.', ex2: 'Sie haben die Ergebnisse kurz zusammengefasst.', ex2En: 'They\'ve briefly summarized the results.', ex2Hi: 'Unhone parinaamon ka sankshept mein saar diya hai.', conj: { praesens: 'fasst zusammen', praeteritum: 'fasste zusammen', perfekt: 'hat zusammengefasst' } },
    { de: 'unterbrechen', pos: 'verb', level: 'B2', register: 'spoken', en: 'to interrupt', hi: 'बीच में रोकना', ex: 'Entschuldigung, darf ich Sie kurz unterbrechen?', exEn: 'Excuse me, may I briefly interrupt you?', exHi: 'Maaf kijiye, kya main aapko thodi der ke liye rok sakta hoon?', ex2: 'Sie haben ihn höflich unterbrochen.', ex2En: 'They\'ve politely interrupted him.', ex2Hi: 'Unhone use vinamrataa se roka hai.', conj: { praesens: 'unterbricht', praeteritum: 'unterbrach', perfekt: 'hat unterbrochen' } },
    { de: 'die Meinung', art: 'die', gender: 'f', plural: 'Meinungen', pos: 'noun', level: 'B2', register: 'both', en: 'opinion', hi: 'राय', ex: 'Wie ist Ihre Meinung dazu?', exEn: 'What is your opinion on this?', exHi: 'Iske baare mein aapki raay kya hai?', ex2: 'Sie haben ihre Meinung geändert.', ex2En: 'They\'ve changed their opinion.', ex2Hi: 'Unhone apni raay badli hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Redemittel?',
      body: [ 'Redemittel are fixed expressions used automatically to communicate naturally. Knowing grammar ≠ speaking fluently — Redemittel bridge that gap.' ],
      hinglish: 'Redemittel woh fixed phrases hain jo bina soche muh se nikal jaate hain. Grammar aana aur fluently bolna do alag cheezein hain \u2014 Redemittel yahi gap bharte hain. Inhe poore chunk ki tarah yaad karo, shabd-dar-shabd banane ki koshish mat karo.'
    },
    {
      title: 'Diskussionsablauf (Discussion Flow)',
      body: [ 'The full nine-stage discussion model with typical Redemittel at each stage.' ],
      table: {
        head: ['Stage', 'Typical Redemittel'],
        rows: [
          ['Opening', 'Lassen Sie uns beginnen ...'],
          ['Topic', 'Heute geht es um ...'],
          ['Opinion', 'Meiner Meinung nach ...'],
          ['Ask', 'Was denken Sie?'],
          ['Agree', 'Ich stimme Ihnen zu.'],
          ['Disagree', 'Ich sehe das anders.'],
          ['Clarify', 'Was meinen Sie genau?'],
          ['Summarize', 'Zusammenfassend ...'],
          ['End', 'Vielen Dank für die Diskussion.']
        ]
      },
      hinglish: 'Poori discussion nau stages mein chalti hai, aur har stage ka apna phrase hota hai. Exam se pehle yeh table dekh lo \u2014 har stage se ek-ek phrase yaad kar lo, itna kaafi hai.'
    },
    {
      title: 'Diskussion beginnen',
      body: [ 'Discussion shuru karne ke liye yeh phrases kaam aate hain: <span class="de">Lassen Sie uns beginnen</span>, <span class="de">Heute geht es um \u2026</span>, <span class="de">Ich w\u00fcrde gern mit \u2026 anfangen</span>. Do-teen yaad kar lo, phir har baar ek hi se shuru nahi karna padega.' ],
      hinglish: 'Discussion shuru karne ke liye yeh phrases kaam aate hain: <span class="de">Lassen Sie uns beginnen</span>, <span class="de">Heute geht es um \u2026</span>, <span class="de">Ich w\u00fcrde gern mit \u2026 anfangen</span>. Do-teen yaad kar lo, phir har baar ek hi se shuru nahi karna padega.'
    },
    {
      title: 'Nach Meinungen fragen',
      body: [ 'Saamne wale ki raay poochhne ke liye: <span class="de">Was halten Sie davon?</span>, <span class="de">Wie sehen Sie das?</span>, <span class="de">Was denken Sie dar\u00fcber?</span>. Exam mein yeh bahut kaam aata hai \u2014 partner se sawaal poochhna dikhata hai ki tum discussion chala sakte ho.' ],
      hinglish: 'Saamne wale ki raay poochhne ke liye: <span class="de">Was halten Sie davon?</span>, <span class="de">Wie sehen Sie das?</span>, <span class="de">Was denken Sie dar\u00fcber?</span>. Exam mein yeh bahut kaam aata hai \u2014 partner se sawaal poochhna dikhata hai ki tum discussion chala sakte ho.'
    },
    {
      title: 'Zustimmen (agreeing)',
      body: [ 'Expressions with formal/informal split: Ich stimme Ihnen zu; Da haben Sie recht; Das sehe ich genauso; Dem kann ich zustimmen; Genau; Das stimmt; Ich teile diese Ansicht.' ],
      hinglish: 'Sehmat hone ke liye: <span class="de">Ich stimme Ihnen zu</span>, <span class="de">Da haben Sie recht</span>, <span class="de">Das sehe ich genauso</span>. <span class="de">Genau</span> aur <span class="de">Das stimmt</span> chhote aur casual hain, jabki <span class="de">Ich teile diese Ansicht</span> formal lagta hai.'
    },
    {
      title: 'Höflich widersprechen',
      body: [ 'Asehmati ke liye: <span class="de">Ich sehe das etwas anders</span>, <span class="de">Dem kann ich nicht ganz zustimmen</span>, <span class="de">Das \u00fcberzeugt mich nicht vollst\u00e4ndig</span>. Dhyaan do ki <b>etwas</b>, <b>nicht ganz</b> aur <b>nicht vollst\u00e4ndig</b> hi woh shabd hain jo baat ko polite banate hain.' ],
      hinglish: 'Asehmati ke liye: <span class="de">Ich sehe das etwas anders</span>, <span class="de">Dem kann ich nicht ganz zustimmen</span>, <span class="de">Das \u00fcberzeugt mich nicht vollst\u00e4ndig</span>. Dhyaan do ki <b>etwas</b>, <b>nicht ganz</b> aur <b>nicht vollst\u00e4ndig</b> hi woh shabd hain jo baat ko polite banate hain.'
    },
    {
      title: 'Klären und nachfragen',
      body: [ 'Kuch samajh na aaye to poochhna kamzori nahi hai \u2014 exam mein iske marks milte hain. <span class="de">K\u00f6nnten Sie das n\u00e4her erkl\u00e4ren?</span>, <span class="de">Was meinen Sie genau?</span>, <span class="de">Habe ich Sie richtig verstanden?</span> \u2014 yeh dikhate hain ki tum dhyaan se sun rahe ho.' ],
      hinglish: 'Kuch samajh na aaye to poochhna kamzori nahi hai \u2014 exam mein iske marks milte hain. <span class="de">K\u00f6nnten Sie das n\u00e4her erkl\u00e4ren?</span>, <span class="de">Was meinen Sie genau?</span>, <span class="de">Habe ich Sie richtig verstanden?</span> \u2014 yeh dikhate hain ki tum dhyaan se sun rahe ho.'
    },
    {
      title: 'Höflich unterbrechen',
      body: [ 'Beech mein bolna ho to sawaal ki tarah bolo: <span class="de">Darf ich kurz etwas sagen?</span>, <span class="de">Entschuldigung, darf ich erg\u00e4nzen?</span> German mein seedha tok dena rukha lagta hai \u2014 permission maangne se hi baat polite ban jaati hai.' ],
      hinglish: 'Beech mein bolna ho to sawaal ki tarah bolo: <span class="de">Darf ich kurz etwas sagen?</span>, <span class="de">Entschuldigung, darf ich erg\u00e4nzen?</span> German mein seedha tok dena rukha lagta hai \u2014 permission maangne se hi baat polite ban jaati hai.'
    },
    {
      title: 'Zusammenfassen und abschließen',
      body: [ 'Ant mein summary dena zaroori hai: <span class="de">Zusammenfassend kann man sagen, dass \u2026</span>, <span class="de">Insgesamt \u2026</span>, <span class="de">Daraus l\u00e4sst sich schlie\u00dfen, dass \u2026</span>. Aur khatam karne ke liye <span class="de">Vielen Dank f\u00fcr die Diskussion</span> kaafi hai. Exam mein summary dena bhool mat jaana \u2014 isse discussion poori lagti hai.' ],
      hinglish: 'Ant mein summary dena zaroori hai: <span class="de">Zusammenfassend kann man sagen, dass \u2026</span>, <span class="de">Insgesamt \u2026</span>, <span class="de">Daraus l\u00e4sst sich schlie\u00dfen, dass \u2026</span>. Aur khatam karne ke liye <span class="de">Vielen Dank f\u00fcr die Diskussion</span> kaafi hai. Exam mein summary dena bhool mat jaana \u2014 isse discussion poori lagti hai.'
    },
    {
      title: 'Formell vs informell',
      body: [ 'Compare formal and informal versions of the same discussion function.' ],
      table: {
        head: ['Informal', 'Formal'],
        rows: [
          ['Was meinst du?', 'Wie sehen Sie das?'],
          ['Genau!', 'Dem kann ich zustimmen.'],
          ['Ich glaube nicht.', 'Dem kann ich nicht ganz zustimmen.']
        ]
      },
      hinglish: 'Ek hi kaam ke do roop dekho \u2014 informal aur formal. Exam mein aksar formal chahiye hota hai, isliye <span class="de">Genau!</span> ki jagah <span class="de">Dem kann ich zustimmen</span> behtar lagta hai.'
    },
    {
      title: 'Sie oder du \u2014 und was sich dabei \u00e4ndert',
      body: [
        'Almost every Redemittel in this chapter comes in two versions, and mixing them is one of the fastest ways to sound wrong in the Goethe speaking test. Pick one register at the start of a discussion and stay in it.',
        'The change is mechanical: the pronoun, its Dativ form, and the verb ending all move together.'
      ],
      table: {
        head: ['Function', 'du-Form', 'Sie-Form'],
        rows: [
          ['asking an opinion', '<span class="de">Was h\u00e4ltst <b>du</b> davon?</span>', '<span class="de">Was halten <b>Sie</b> davon?</span>'],
          ['agreeing', '<span class="de">Ich stimme <b>dir</b> zu.</span>', '<span class="de">Ich stimme <b>Ihnen</b> zu.</span>'],
          ['confirming', '<span class="de">Da hast <b>du</b> recht.</span>', '<span class="de">Da haben <b>Sie</b> recht.</span>'],
          ['checking', '<span class="de">Wie siehst <b>du</b> das?</span>', '<span class="de">Wie sehen <b>Sie</b> das?</span>']
        ]
      },
      note: 'Both <b>Sie</b> and <b>Ihnen</b> are always capitalised. In the Goethe B2 speaking exam the partner is usually addressed with <b>Sie</b> unless the task says otherwise.',
      hinglish: 'Is chapter ke lagbhag saare Redemittel do roop mein aate hain \u2014 <b>du</b> wala aur <b>Sie</b> wala. Speaking test mein sabse jaldi galat yahi lagta hai ki beech mein register badal jaaye. Isliye discussion ke shuru mein ek register chuno aur usi par tike raho. Badlav mechanical hai: pronoun, uska Dativ form aur verb ki ending \u2014 teeno saath badalte hain. <b>du</b> se <b>dir</b> aur <b>Sie</b> se <b>Ihnen</b>, aur dono capital letter se likhe jaate hain. Goethe B2 ke speaking mein aksar <b>Sie</b> hi use hota hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from directly translating English/Hindi expressions instead of using natural German Redemittel.' ],
      mistakes: [
        { wrong: 'Ich bin einverstanden mit dir.', right: 'Ich stimme dir zu. / Ich bin mit dir einverstanden.', why: 'The phrase itself exists, but <b>mit dir</b> comes BEFORE einverstanden. In a discussion <b>Ich stimme dir zu</b> is the more idiomatic choice.' },
        { wrong: 'Was ist deine Meinung über das?', right: 'Was hältst du davon? / Was ist deine Meinung dazu?', why: '<b>halten von</b> is the fixed pairing, so the question word is <b>wovon</b>/<b>davon</b>. With Meinung you need <b>zu</b>, not \u00fcber: <i>deine Meinung dazu</i>.' },
        { wrong: 'Ich habe gleiche Meinung.', right: 'Ich bin derselben Meinung.', why: '"derselben Meinung sein" is the fixed idiomatic phrase, not "gleiche Meinung haben".' },
        { wrong: 'Ich unterbreche.', right: 'Darf ich kurz etwas sagen?', why: 'Announcing an interruption is blunt in German. Ask permission instead \u2014 the question form is what makes it polite.' },
        { wrong: 'Ich nicht stimme zu.', right: 'Ich stimme dir nicht zu.', why: 'The finite verb stays in position 2, <b>nicht</b> comes later in the clause, and the separable prefix <b>zu</b> is last of all.' }
      ],
      hinglish: 'Yeh galtiyan aksar English ya Hindi se seedha translate karne se hoti hain. German ke apne fixed phrases hain \u2014 unhe waise hi yaad karo, shabd-dar-shabd banane ki koshish mat karo.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to participate in a discussion? Open politely, invite opinions, express your view, respond respectfully, clarify if necessary, summarize, finish naturally.' ],
      note: 'Memory trick: every successful Goethe discussion follows this rhythm — Open → Ask → Listen → Respond → Clarify → Summarize → Conclude. Grammar helps you build sentences. Redemittel help you sound natural.',
      hinglish: 'Discussion mein bolna hai? Politely shuru karo, saamne wale ki raay poochho, apni baat rakho, izzat se jawaab do, kuch samajh na aaye to poochho, ant mein summary do, aur naturally khatam karo. Grammar sentence banana sikhata hai \u2014 Redemittel natural lagna sikhate hain.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Diskussionstranskript aus einem Universitätsseminar',
    titleEn: 'Reading A — A discussion transcript from a university seminar',
    tokens: [
      { w: 'Wollen', role: 'r-open', en: 'want to (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Verb (Präsens)' },
      { w: 'wir', role: 'r-open', en: 'we (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'über', role: 'r-open', en: 'about (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Präposition · Akk.' },
      { w: 'digitale', role: 'plain', en: 'digital', hi: 'digital', type: 'Adjective' },
      { w: 'Ethik', role: 'plain', en: 'ethics (Satzende)', hi: 'naitikta (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'sprechen', role: 'r-open', en: 'talk (Satzende, fixed opener)', hi: 'baat karein (Satzende, fixed opener)', type: 'Verb · Satzende' },
      { w: '?', plain: true },
      { w: 'Wie', role: 'r-ask', en: 'how (part of fixed question)', hi: '(fixed question ka hissa)', type: 'Fragewort' },
      { w: 'ist', role: 'r-ask', en: 'is (part of fixed question)', hi: '(fixed question ka hissa)', type: 'Verb · sein (Präsens)' },
      { w: 'Ihre', role: 'r-ask', en: 'your (formal, Satzende, part of fixed question)', hi: 'aapki (Satzende, fixed question)', type: 'Possessivartikel' },
      { w: 'Meinung', role: 'r-ask', en: 'opinion (Satzende, fixed expression)', hi: 'raay (Satzende, fixed expression)', type: 'Noun · fem. (Satzende)' },
      { w: '?', plain: true },
      { w: 'Eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'Teilnehmerin', role: 'plain', en: 'participant (f.)', hi: 'प्रतिभागी', type: 'Noun · fem.' },
      { w: 'meldet', role: 'r-open', en: 'raises (part of fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Verb · sich melden' },
      { w: 'sich', role: 'r-open', en: 'herself', hi: '(हिस्सा)', type: 'Reflexivpronomen' },
      { w: 'zu', role: 'r-open', en: 'to', hi: '', type: 'Preposition · Dat.' },
      { w: 'Wort', role: 'r-open', en: 'word (Satzende, fixed expression)', hi: 'बात रखने के लिए (Satzende)', type: 'Noun · neut.', why: '"sich zu Wort melden" = to ask to speak — a standard discussion phrase (this chapter).' },
      { w: ':', plain: true },
      { w: 'Ich', role: 'r-open', en: 'I (part of fixed opener)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Pronomen · Nom.' },
      { w: 'möchte', role: 'r-open', en: 'would like (part of fixed opener)', hi: '(हिस्सा)', type: 'Verb (Präsens)' },
      { w: 'kurz', role: 'r-open', en: 'briefly (Satzende, fixed opener)', hi: 'संक्षेप में (Satzende)', type: 'Adverb' },
      { w: 'ergänzen', role: 'r-open', en: 'add (Satzende)', hi: 'जोड़ना चाहती हूँ (Satzende)', type: 'Verb · Infinitiv' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'Datenschutz', role: 'plain', en: 'data privacy', hi: 'डेटा सुरक्षा', type: 'Noun · masc.' },
      { w: 'dabei', role: 'plain', en: 'in this', hi: 'इसमें', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'zentrale', role: 'plain', en: 'central', hi: 'केंद्रीय', type: 'Adjective' },
      { w: 'Rolle', role: 'plain', en: 'role (Satzende)', hi: 'भूमिका (Satzende)', type: 'Noun · fem.' },
      { w: 'spielt', role: 'plain', en: 'plays (Satzende)', hi: 'निभाती है (Satzende)', type: 'Verb · spielen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Dozentin', role: 'plain', en: 'lecturer (f.)', hi: 'व्याख्याता', type: 'Noun · fem.' },
      { w: 'bedankt', role: 'r-ask', en: 'thanks (part of fixed expression)', hi: '(निश्चित अभिव्यक्ति का हिस्सा)', type: 'Verb · sich bedanken' },
      { w: 'sich', role: 'r-ask', en: 'herself', hi: '(हिस्सा)', type: 'Reflexivpronomen' },
      { w: 'für', role: 'plain', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'den', role: 'plain', en: 'the (masc. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Beitrag', role: 'plain', en: 'contribution (Satzende)', hi: 'योगदान (Satzende)', type: 'Noun · masc.' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'bittet', role: 'r-ask', en: 'asks (part of fixed expression)', hi: 'अनुरोध करती है', type: 'Verb · bitten' },
      { w: 'um', role: 'r-ask', en: 'for', hi: 'के लिए', type: 'Preposition · Akk.' },
      { w: 'weitere', role: 'plain', en: 'further', hi: 'और', type: 'Adjective' },
      { w: 'Wortmeldungen', role: 'plain', en: 'requests to speak (Satzende)', hi: 'बोलने के अनुरोध (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'anderer', role: 'plain', en: 'another', hi: 'दूसरा', type: 'Determiner' },
      { w: 'Teilnehmer', role: 'plain', en: 'participant', hi: 'प्रतिभागी', type: 'Noun · masc.' },
      { w: 'widerspricht', role: 'plain', en: 'objects', hi: 'विरोध करता है', type: 'Verb · widersprechen' },
      { w: 'höflich', role: 'plain', en: 'politely (Satzende)', hi: 'विनम्रता से (Satzende)', type: 'Adverb' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'schlägt', role: 'plain', en: 'proposes', hi: 'सुझाव देता है', type: 'Verb · vorschlagen' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'weiteren', role: 'plain', en: 'further', hi: 'और', type: 'Adjective' },
      { w: 'Aspekt', role: 'plain', en: 'aspect (Satzende)', hi: 'पहलू (Satzende)', type: 'Noun · masc.' },
      { w: 'vor', role: 'plain', en: '(Satzende, Präfix)', hi: '', type: 'Separable prefix · vorschlagen' },
      { w: '.', plain: true }
    ],
    translation: 'Shall we talk about digital ethics? What is your opinion? A participant asks to speak: I would like to briefly add that data privacy plays a central role in this. The lecturer thanks her for the contribution and asks for further comments. Another participant politely objects and proposes a further aspect.',
    comprehension: [
      { q: 'Welche Funktion hat "Wollen wir über...sprechen?"', options: ['Opening a discussion', 'Concluding', 'Summarizing'], answer: 0 },
      { q: 'Welche Funktion hat "Wie ist Ihre Meinung?"', options: ['Asking for opinions', 'Agreeing', 'Interrupting'], answer: 0 },
      { q: 'Ist dieser Text formell oder informell?', options: ['Formell (Sie-Form)', 'Informell (du-Form)', 'Neutral'], answer: 0 }
    ]
  },
  readingBArchive: {
    title: 'Firmenbesprechung über flexible Arbeitszeiten',
    titleEn: 'Reading B — A workplace meeting discussing flexible working hours',
    tokens: [
      { w: 'Zunächst', role: 'r-open', en: 'first of all (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Adverb' },
      { w: 'möchte', role: 'r-open', en: 'would like (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Verb (Präsens)' },
      { w: 'ich', role: 'r-open', en: 'I (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Pronomen · Nom.' },
      { w: 'sagen', role: 'r-open', en: 'say (part of fixed opener)', hi: '(fixed opener ka hissa)', type: 'Verb (Infinitiv)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-open', en: 'that (Satzende, part of fixed opener)', hi: 'ki (Satzende, fixed opener)', type: 'Konjunktion' },
      { w: 'flexible', role: 'plain', en: 'flexible', hi: 'lachilaa', type: 'Adjective' },
      { w: 'Arbeitszeiten', role: 'plain', en: 'working hours (Satzende)', hi: 'kaam ke ghante (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'wichtig', role: 'plain', en: 'important (Satzende)', hi: 'mahatvapurn (Satzende)', type: 'Adjective (Satzende)' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'hain (Satzende)', type: 'Verb · sein (Satzende)' },
      { w: '.', plain: true },
      { w: 'Was', role: 'r-ask', en: 'what (part of fixed question)', hi: '(fixed question ka hissa)', type: 'Fragewort' },
      { w: 'halten', role: 'r-ask', en: 'consider (part of fixed question)', hi: '(fixed question ka hissa)', type: 'Verb (Präsens)' },
      { w: 'Sie', role: 'r-ask', en: 'you (formal, Satzende, part of fixed question)', hi: 'aap (Satzende, fixed question)', type: 'Pronomen · Nom. (Satzende)' },
      { w: 'davon', role: 'r-ask', en: 'of that (Satzende, fixed expression)', hi: 'iske baare mein (Satzende, fixed expression)', type: 'Pronominaladverb (Satzende)' },
      { w: '?', plain: true }
    ],
    translation: 'First of all I would like to say that flexible working hours are important. What do you think of that?'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_068_L001', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Darf ich kurz unterbrechen? Ich möchte noch einen Punkt hinzufügen.', en: 'May I interrupt briefly? I\'d like to add one more point.' },
      { id: 'B2_068_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Natürlich, bitte sag, was du meinst.', en: 'Of course, go ahead and say what you mean.' },
      { id: 'B2_068_L003', speaker: 'Katrin', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Wenn ich dich richtig verstehe, sagst du, dass Universitäten KI-Tools verpflichtend einführen sollten?', en: 'If I understand you correctly, you\'re saying universities should mandatorily introduce AI tools?' },
      { id: 'B2_068_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, und zusammenfassend würde ich sagen: klare Regeln sind wichtiger als ein Verbot.', en: 'Exactly, and to summarize I\'d say: clear rules are more important than a ban.' }
    ],
    transcript: 'Darf ich kurz unterbrechen? Ich möchte noch einen Punkt hinzufügen. Natürlich, bitte sag, was du meinst. Wenn ich dich richtig verstehe, sagst du, dass Universitäten KI-Tools verpflichtend einführen sollten? Genau, und zusammenfassend würde ich sagen: klare Regeln sind wichtiger als ein Verbot.',
    translation: 'May I interrupt briefly? I\'d like to add one more point. Of course, go ahead and say what you mean. If I understand you correctly, you\'re saying universities should mandatorily introduce AI tools? Exactly, and to summarize I\'d say: clear rules are more important than a ban.',
    tokens: [
      { w: 'Darf' },
      { w: 'ich' },
      { w: 'kurz' },
      { w: 'unterbrechen' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'möchte' },
      { w: 'noch' },
      { w: 'einen' },
      { w: 'Punkt' },
      { w: 'hinzufügen' },
      { w: '.', plain: true },
      { w: 'Natürlich' },
      { w: ',', plain: true },
      { w: 'bitte' },
      { w: 'sag' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'du' },
      { w: 'meinst' },
      { w: '.', plain: true },
      { w: 'Wenn' },
      { w: 'ich' },
      { w: 'dich' },
      { w: 'richtig' },
      { w: 'verstehe' },
      { w: ',', plain: true },
      { w: 'sagst' },
      { w: 'du' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'Universitäten' },
      { w: 'KI', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Tools' },
      { w: 'verpflichtend' },
      { w: 'einführen' },
      { w: 'sollten' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'zusammenfassend' },
      { w: 'würde' },
      { w: 'ich' },
      { w: 'sagen' },
      { w: ':', plain: true },
      { w: 'klare' },
      { w: 'Regeln' },
      { w: 'sind' },
      { w: 'wichtiger' },
      { w: 'als' },
      { w: 'ein' },
      { w: 'Verbot' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Worum bittet Timo, bevor er seinen Punkt einbringt?', qEn: 'What does Timo ask before adding his point?', options: ['ob er gehen darf', 'ob er unterbrechen darf', 'ob er anrufen darf', 'ob er schweigen soll'], optionsEn: ['whether he may leave', 'whether he may interrupt', 'whether he may call', 'whether he should stay silent'], answer: 1,
        explain: '"Darf ich kurz unterbrechen?"' },
      { q: 'Wie fasst Katrin ihre Position zusammen?', qEn: 'How does Katrin summarize her position?', options: ['Ein Verbot ist am besten.', 'Klare Regeln sind wichtiger als ein Verbot.', 'KI-Tools sind nutzlos.', 'Universitäten sollten nichts ändern.'], optionsEn: ['A ban is best.', 'Clear rules matter more than a ban.', 'AI tools are useless.', 'Universities should change nothing.'], answer: 1,
        explain: '"… klare Regeln sind wichtiger als ein Verbot."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Du möchtest in der Diskussion einen Punkt ergänzen. Unterbrich höflich.", taskEn: "You'd like to add a point in the discussion. Interrupt politely.", de: "Darf ich kurz unterbrechen? Ich möchte noch einen Punkt hinzufügen.", en: "May I interrupt briefly? I'd like to add one more point." },
    { task: "Du bist nicht sicher, ob du sie verstanden hast. Frag nach.", taskEn: "You're not sure you understood her. Ask.", de: "Wenn ich dich richtig verstehe, meinst du die Kosten?", en: "If I understand you correctly, you mean the costs?" },
    { task: "Eine Teilnehmerin schweigt. Hol sie ins Gespräch.", taskEn: "A participant is silent. Bring her into the discussion.", de: "Was denken Sie darüber? Wie sehen Sie das?", en: "What do you think about it? How do you see it?" },
    { task: "Die Zeit ist um. Fass zusammen und schließe.", taskEn: "Time is up. Summarise and close.", de: "Zusammenfassend kann man sagen, dass wir uns einig sind. Vielen Dank!", en: "In summary, we're in agreement. Thank you!" },
    { task: "Rollenspiel: Du moderierst die Diskussion.", taskEn: "Role-play: you chair the discussion.", de: "Lassen Sie uns beginnen. — Und darf ich Herrn Timo um seine Meinung bitten?", en: "Let's begin. — And may I ask Mr Timo for his opinion?" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Discussion script (using at least 20 Redemittel): Write a complete discussion script including opening, opinions, agreement, disagreement, clarification, and conclusion.\n\nTASK 2 — Rewrite (8-10 sentences): Take an unnatural, translated-sounding dialogue and rewrite it using appropriate Redemittel throughout.',
    starters: ['Lassen Sie uns beginnen. Heute geht es um ...', 'Was denken Sie darüber?'],
    placeholder: 'Lassen Sie uns beginnen. Heute geht es um KI-Tools an Universitäten. Was denken Sie darüber?',
    minWords: 100
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which is the polite way to interrupt a discussion?',
      options: ['Darf ich kurz etwas sagen?', 'Ich unterbreche.', 'Sei still, ich rede.'],
      answer: 0,
      explain: '"Darf ich kurz etwas sagen?" is the standard polite way to interrupt; the others are too direct or rude.'
    },
    gap: {
      sentence: ['Zusammenfassend kann man ', ', dass Regulierung wichtig ist.'],
      gaps: [ { answer: 'sagen', accepts: ['sagen'] } ],
      explain: '"Zusammenfassend kann man sagen, dass..." is the fixed expression for summarizing a discussion.'
    },
    match: {
      q: 'Match each expression to its discussion stage.',
      pairs: [
        { noun: 'Lassen Sie uns beginnen.', art: 'Opening' },
        { noun: 'Was denken Sie darüber?', art: 'Asking for opinions' },
        { noun: 'Könnten Sie das näher erklären?', art: 'Clarifying' },
        { noun: 'Vielen Dank für die Diskussion.', art: 'Concluding' }
      ]
    },
    builder: {
      target: 'Build: "Let\'s begin." (fixed discussion opener)',
      bank: ['Lassen', 'Sie', 'uns', 'beginnen', '.'],
      answer: ['Lassen', 'Sie', 'uns', 'beginnen', '.'],
      roles: { 'Lassen': 'r-open', 'Sie': 'r-open', 'uns': 'r-open', 'beginnen': 'r-open' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich bin einverstanden mit dir.',
      right: 'Ich stimme dir zu.',
      explain: 'This is a direct translation that sounds unnatural — "Ich stimme dir zu" is the idiomatic German agreement expression.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What are Redemittel?', options: ['Fixed expressions used to communicate naturally', 'New grammar rules', 'Vocabulary lists'], answer: 0,
      explain: 'Redemittel bridge the gap between knowing grammar and speaking fluently.' },
    { q: 'Which expression opens a discussion?', options: ['Lassen Sie uns beginnen.', 'Vielen Dank für die Diskussion.', 'Ich stimme Ihnen zu.'], answer: 0,
      explain: '"Lassen Sie uns beginnen" is a standard formal discussion opener.' },
    { q: 'Which expression politely asks for clarification?', options: ['Könnten Sie das näher erklären?', 'Ich sehe das anders.', 'Genau.'], answer: 0,
      explain: '"Könnten Sie das näher erklären?" politely requests more detail.' },
    { q: 'Is "Ich unterbreche" a polite way to interrupt?', options: ['No — too direct; use "Darf ich kurz etwas sagen?"', 'Yes, perfectly polite', 'Only in formal writing'], answer: 0,
      explain: 'Announcing an interruption directly is impolite — use a polite question instead.' },
    { q: 'What is the full discussion rhythm taught in this chapter?', options: ['Open → Ask → Listen → Respond → Clarify → Summarize → Conclude', 'Question → Answer → Fact → Opinion', 'Introduction → Body → Ending'], answer: 0,
      explain: 'This seven-part rhythm structures every successful Goethe B2 discussion.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-open', html: 'Redemittel manage the whole discussion rhythm: Open (Lassen Sie uns beginnen) → Ask (Was denken Sie darüber?) → Respond (agree/disagree) → Clarify (Könnten Sie das näher erklären?) → Summarize → Conclude.' },
    { c: 'r-interrupt', html: 'Interrupt politely, never directly: Darf ich kurz etwas sagen? — never "Ich unterbreche."' },
    { c: 'r-summary', html: 'Grammar helps you build sentences. Redemittel help you sound natural — memorize these fixed expressions as complete chunks.' }
  ],
  revisionTips: [
    'For each discussion stage (opening, asking, agreeing, disagreeing, clarifying, interrupting, summarizing, concluding), memorize at least two fixed expressions.',
    'Watch or read a German discussion/interview and count how many Redemittel you recognize from this chapter.',
    'Practise running a full mock discussion using all seven stages of the rhythm: open, ask, listen, respond, clarify, summarize, conclude.'
  ]
};

window.CHAPTER = CHAPTER;
