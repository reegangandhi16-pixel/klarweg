/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 24
   "Zweiteilige Konnektoren" — entweder...oder (choice),
   sowohl...als auch (both), weder...noch (neither), nicht
   nur...sondern auch (surprising addition), zwar...aber
   (contrast). Does NOT introduce einerseits...andererseits,
   je...desto, or other B2 connectors.
   IMPORTANT: dialogue uses ONLY Nike and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-24 list (123 items) — a
   music/media/pop-culture theme (Komponist, Jazz, Musikgeschmack,
   Konzertreise, Fernsehkrimiserie, Promi…), an excellent natural
   fit for comparing music tastes and shows with two-part
   connectors — woven into the story and reading passage.
============================================================ */
const CHAPTER = {
  id: 'b1-24-zweiteilige-konnektoren',
  phase: 'B1 · Phase 1',
  number: 24,
  title: 'Zweiteilige Konnektoren',
  titleEn: 'Two-part connectors',
  description: 'entweder...oder (choice), sowohl...als auch (both), weder...noch (neither), nicht nur...sondern auch (surprising extra), zwar...aber (contrast). Five connector pairs, five distinct relationships between two ideas.',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 25, title: 'Stellung von „nicht" im Satz', titleEn: 'Position of "nicht" in the sentence' , href: 'chapter-b1-25-stellung-von-nicht.html' },

  prevChapter: { number: 23, title: 'Reflexivpronomen: Akkusativ & Dativ', titleEn: 'Reflexive pronouns: Akkusativ & Dativ', href: 'chapter-b1-23-reflexivpronomen-akkusativ-dativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>five ways to connect ideas.</em>',
    intro: 'Nike and Timo compare music tastes and plan a concert trip — she likes both jazz and metal, he likes neither; she listens to not only music but also podcasts — every opinion built on a two-part connector.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear all five two-part connectors used naturally in one conversation'
    ],
    scene: 'Musikgeschmäcker im Vergleich',
    femaleSpeakers: ['Nike'],
    dialogue: [
      { speaker: 'Nike', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'sowohl', role: 'r-conjunction', en: 'both', hi: 'दोनों', pron: 'zo-VOHL', type: 'Conjunction · sowohl … als auch', why: 'sowohl ... als auch = both ... and, this chapter.', ex: 'Ich mag sowohl Jazz als auch Metal.', exEn: 'I like both jazz and metal.' },
        { w: 'Jazz', role: 'r-akkusativ', en: 'jazz', hi: 'जैज़', pron: 'dzhez', type: 'Noun · masc.' },
        { w: 'als', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'als', type: 'Conjunction · part 2' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Metal', role: 'r-akkusativ', en: 'metal', hi: 'मेटल', pron: 'ME-tal', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I like both jazz and metal.', hi: 'Mujhe jazz aur metal dono pasand hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'weder', role: 'r-conjunction', en: 'neither', hi: 'न तो', pron: 'VAY-der', type: 'Conjunction · weder … noch', why: 'weder ... noch = neither ... nor, this chapter.', ex: 'Ich mag weder Jazz noch Metal.', exEn: 'I like neither jazz nor metal.' },
        { w: 'Jazz', role: 'r-akkusativ', en: 'jazz', hi: 'जैज़', pron: 'dzhez', type: 'Noun · masc.' },
        { w: 'noch', role: 'r-conjunction', en: 'nor', hi: 'न ही', pron: 'nokh', type: 'Conjunction · part 2' },
        { w: 'Metal', role: 'r-akkusativ', en: 'metal', hi: 'मेटल', pron: 'ME-tal', type: 'Noun · neut.' },
        { w: '.', plain: true }
      ], en: 'I like neither jazz nor metal.', hi: 'Mujhe na jazz pasand hai, na metal.' },
      { speaker: 'Nike', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'magst', role: 'r-modalverb', en: 'do you like', hi: 'पसंद है', pron: 'MAHKST', type: 'Modal · mögen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'What do you like then?', hi: 'Toh tumhe kya pasand hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mag', role: 'r-modalverb', en: 'like', hi: 'पसंद है', pron: 'mahk', type: 'Modal · mögen (ich)' },
        { w: 'zwar', role: 'r-conjunction', en: 'indeed', hi: 'हालांकि', pron: 'tsvahr', type: 'Conjunction · zwar … aber', why: 'zwar ... aber = admittedly ... but, this chapter.', ex: 'Ich mag zwar Salsa, aber lieber Klassik.', exEn: 'I do admittedly like salsa, but classical more.' },
        { w: 'Salsa', role: 'r-akkusativ', en: 'salsa', hi: 'साल्सा', pron: 'ZAL-za', type: 'Noun · fem.' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction · part 2' },
        { w: 'lieber', role: 'r-adverb', en: 'rather', hi: 'ज़्यादा', pron: 'LEE-ber', type: 'Comparative' },
        { w: 'Klassik', role: 'r-akkusativ', en: 'classical music', hi: 'शास्त्रीय संगीत', pron: 'KLA-sik', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I do admittedly like salsa, but classical music more.', hi: 'Mujhe salsa toh pasand hai, par shastriya sangeet zyada pasand hai.' },
      { speaker: 'Nike', tokens: [
        { w: 'Interessant', role: 'r-subject', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'höre', role: 'r-verb', en: 'listen', hi: 'सुनती हूँ', pron: 'HÖ-ruh', type: 'Verb · hören (ich)' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: 'sondern', role: 'r-conjunction', en: 'but', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction · nicht nur … sondern auch', why: 'nicht nur ... sondern auch = not only ... but also, this chapter.', ex: 'Ich höre nicht nur Musik, sondern auch Podcasts.', exEn: 'I listen to not only music, but also podcasts.' },
        { w: 'auch', role: 'r-akkusativ', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'Podcasts', role: 'r-akkusativ', en: 'podcasts', hi: 'पॉडकास्ट', pron: 'POT-kests', type: 'Noun · plural' },
        { w: '.', plain: true }
      ], en: 'I listen to not only music, but also podcasts.', hi: 'Main sirf sangeet nahi, balki podcast bhi sunti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Sollen', role: 'r-modalverb', en: 'shall', hi: 'चाहिए', pron: 'ZO-len', type: 'Modal · sollen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'entweder', role: 'r-conjunction', en: 'either', hi: 'या तो', pron: 'ent-VAY-der', type: 'Conjunction · entweder … oder', why: 'entweder ... oder = either ... or, this chapter.', ex: 'Entweder gehen wir ins Konzert, oder wir bleiben zu Hause.', exEn: 'Either we go to the concert, or we stay home.' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Konzert', role: 'r-akkusativ', en: 'concert', hi: 'कॉन्सर्ट', pron: 'kon-TSAIRT', type: 'Noun · neut.' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाएं', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: ',', plain: true },
        { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'O-der', type: 'Conjunction · part 2' },
        { w: 'zu', role: 'r-preposition', en: 'at', hi: 'पर', pron: 'tsoo', type: 'Preposition' },
        { w: 'Hause', role: 'r-place', en: 'home', hi: 'घर', pron: 'HOW-zuh', type: 'Noun · place' },
        { w: 'bleiben', role: 'r-verb', en: 'stay', hi: 'रहें', pron: 'BLY-ben', type: 'Verb · bleiben (wir)' },
        { w: '?', plain: true }
      ], en: 'Shall we either go to the concert, or stay home?', hi: 'Kya ya toh hum concert jaayein, ya ghar par rahein?' },
      { speaker: 'Nike', tokens: [
        { w: 'Lass', role: 'r-verb', en: 'let us', hi: 'चलो', pron: 'las', type: 'Verb · lassen (imperative)' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमें', pron: 'uns', type: 'Pronoun · acc.' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Konzert', role: 'r-akkusativ', en: 'concert', hi: 'कॉन्सर्ट', pron: 'kon-TSAIRT', type: 'Noun · neut.' },
        { w: 'gehen', role: 'r-verb', en: 'go', hi: 'जाना', pron: 'GAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '!', plain: true }
      ], en: 'Let us go to the concert!', hi: 'Chalo concert chalte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Five connector pairs, five different relationships between two ideas: <span class="de r-connector">entweder…oder</span> (only one is true — a choice), <span class="de r-connector">sowohl…als auch</span> (both are true), <span class="de r-connector">weder…noch</span> (neither is true), <span class="de r-connector">nicht nur…sondern auch</span> (a surprising extra), and <span class="de r-connector">zwar…aber</span> (true, but contrasted). Ask which relationship your sentence needs, then reach for the matching pair.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ZWEITEILIGE KONNEKTOREN (B1 level only): entweder...oder (choice — only one option), sowohl...als auch (both are true), weder...noch (neither is true — note weder...noch triggers no additional negation elsewhere in the clause), nicht nur...sondern auch (a surprising addition), zwar...aber (concession then contrast). ' +
    'Do NOT expect einerseits...andererseits, je...desto, or other B2 connectors — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Each connector must appear as a genuine PAIR — never just the first half alone, and never mixed with the wrong second half (e.g. "entweder...und" or "sowohl...oder" or "weder...oder" or "nicht nur...auch" without sondern, or "zwar...sondern" instead of "zwar...aber" — all of these are incorrect blends).\n' +
    '- weder...noch already carries the negation itself — do not add an extra nicht in the same clause.\n' +
    '- nicht nur...sondern auch introduces a genuinely additional/surprising second element, not a contrasting one.\n' +
    '- zwar...aber concedes something true in the zwar-clause, then contrasts with aber — it is not simply an "and" connector.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Connector check:</b> one sentence on whether the right connector pair was chosen for the relationship being expressed (choice/both/neither/addition/contrast).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose all five two-part connectors correctly based on the relationship between ideas. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the five-connector comparison table once — especially weder...noch and nicht nur...sondern auch, which are often confused — then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: choice? both? neither? addition? contrast?'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'mag', role: 'plain' },
    { w: 'sowohl', role: 'r-connector' }, { w: 'Jazz', role: 'plain' },
    { w: 'als', role: 'r-connector' }, { w: 'auch', role: 'r-connector' },
    { w: 'Metal', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: five connector pairs, five relationships between ideas.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Nike and Timo compare music tastes using all five two-part connectors.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 123 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master entweder...oder, sowohl...als auch, weder...noch, nicht nur...sondern auch, zwar...aber.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about a concert trip, full of two-part connectors.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch all five two-part connectors in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Give alternatives, express contrast, and compare options using two-part connectors.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write an opinion or comparison using all five connectors naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct connector and sentence transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 123 chapter words — music, media, and pop-culture vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '19 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Connector-choice drills, sentence transformation, error correction, and an opinion-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full two-part connector reference — all five pairs, decision flowchart, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'entweder … oder', text: 'Express a choice between two options' },
    { de: 'sowohl … als auch', text: 'Express that both things are true' },
    { de: 'weder … noch', text: 'Express that neither thing is true' },
    { de: 'nicht nur … sondern auch', text: 'Add a surprising extra piece of information' },
    { de: 'zwar … aber', text: 'Concede a point, then contrast it' }
  ],

  // ---------- Vocabulary (123 items — full chapter-24 upload list) ----------
  vocab: [
    { de: 'andererseits', pos: 'adverb', level: 'B1', en: 'on the other hand', hi: 'दूसरी तरफ़', ex: 'Andererseits ist der Preis fair.', exEn: 'On the other hand, the price is fair.', exHi: 'Doosri taraf, keemat uchit hai.' },
    { de: 'behaupten', pos: 'verb', level: 'B1', en: 'to claim', hi: 'दावा करना', ex: 'Er behauptet, alles zu wissen.', exEn: 'He claims to know everything.', exHi: 'Woh sab kuch jaanne ka daava karta hai.', conj: { praesens: 'behauptet', praeteritum: 'behauptete', perfekt: 'hat behauptet' } },
    { de: 'Behauptung', art: 'die', gender: 'f', plural: 'Behauptungen', pos: 'noun', level: 'B1', en: 'claim', hi: 'दावा', ex: 'Seine Behauptung war falsch.', exEn: 'His claim was wrong.', exHi: 'Uska daava galat tha.' },
    { de: 'Mehrheit', art: 'die', gender: 'f', plural: 'Mehrheiten', pos: 'noun', level: 'B1', en: 'majority', hi: 'बहुमत', ex: 'Die Mehrheit mag Jazz.', exEn: 'The majority likes jazz.', exHi: 'Bahumat ko jazz pasand hai.' },
    { de: 'Wirkung', art: 'die', gender: 'f', plural: 'Wirkungen', pos: 'noun', level: 'B1', en: 'effect', hi: 'प्रभाव', ex: 'Musik hat eine beruhigende Wirkung.', exEn: 'Music has a soothing effect.', exHi: 'Sangeet ka shaant karne wala prabhaav hota hai.' },
    { de: 'entweder … oder', pos: 'grammar', level: 'B1', en: 'either … or', hi: 'या तो … या', ex: 'Entweder lernst du, oder du bestehst nicht.', exEn: 'Either you study, or you don\'t pass.', exHi: 'Ya to tum padho, ya tum paas nahi hoge.' },
    { de: 'nicht nur … sondern auch', pos: 'grammar', level: 'B1', en: 'not only … but also', hi: 'सिर्फ़ … ही नहीं, बल्कि … भी', ex: 'Sie spricht nicht nur Deutsch, sondern auch Französisch.', exEn: 'She speaks not only German, but also French.', exHi: 'Woh sirf German hi nahi, balki French bhi bolti hai.' },
    { de: 'sowohl … als auch', pos: 'grammar', level: 'B1', en: '… as well as …', hi: '… के साथ-साथ …', ex: 'Ich mag sowohl Kaffee als auch Tee.', exEn: 'I like both coffee and tea.', exHi: 'Mujhe coffee aur chai dono pasand hain.' },
    { de: 'vermutlich', pos: 'adverb', level: 'B1', en: 'presumably', hi: 'शायद', ex: 'Vermutlich kommt er später.', exEn: 'Presumably, he\'ll come later.', exHi: 'Shayad woh baad mein aayega.' },
    { de: 'weder … noch', pos: 'grammar', level: 'B1', en: 'neither … nor', hi: 'न तो … न ही', ex: 'Ich mag weder Kaffee noch Tee.', exEn: 'I like neither coffee nor tea.', exHi: 'Mujhe na coffee pasand hai na chai.' },
    { de: 'zwar … aber', pos: 'grammar', level: 'B1', en: 'admittedly … but', hi: 'हालांकि … लेकिन', ex: 'Das Auto ist zwar teuer, aber zuverlässig.', exEn: 'The car is admittedly expensive, but reliable.', exHi: 'Gaadi halanki mehngi hai, lekin bharosemand hai.' },
    { de: 'angeblich', pos: 'adjective', level: 'B1', en: 'allegedly', hi: 'कथित रूप से', ex: 'Er ist angeblich krank.', exEn: 'He\'s allegedly sick.', exHi: 'Woh kathit roop se beemar hai.' },
    { de: 'arm', pos: 'adjective', level: 'B1', en: 'poor', hi: 'ग़रीब', ex: 'Der Komponist war zeitlebens arm.', exEn: 'The composer was poor throughout his life.', exHi: 'Sangeetakaar poori zindagi gareeb raha.' },
    { de: 'auslösen', pos: 'verb', level: 'B1', en: 'to elicit, trigger', hi: 'उत्पन्न करना', ex: 'Die Musik löst starke Gefühle aus.', exEn: 'The music elicits strong feelings.', exHi: 'Sangeet mazboot bhaavnaayein utpann karta hai.', conj: { praesens: 'löst aus', praeteritum: 'löste aus', perfekt: 'hat ausgelöst' } },
    { de: 'beruhigend', pos: 'adjective', level: 'B1', en: 'soothing', hi: 'शांत करने वाला', ex: 'Klassische Musik wirkt beruhigend.', exEn: 'Classical music has a soothing effect.', exHi: 'Shastriya sangeet shaant karne wala hota hai.' },
    { de: 'beschäftigt sein', pos: 'idiom', level: 'B1', en: 'to be busy (mit + D.)', hi: 'व्यस्त होना', ex: 'Er ist mit dem neuen Album beschäftigt.', exEn: 'He\'s busy with the new album.', exHi: 'Woh naye album mein vyast hai.' },
    { de: 'beweisen', pos: 'verb', level: 'B1', en: 'to prove', hi: 'साबित करना', ex: 'Die Forscherin bewies ihre These.', exEn: 'The researcher proved her thesis.', exHi: 'Shodhkarta ne apna siddhaant saabit kiya.', conj: { praesens: 'beweist', praeteritum: 'bewies', perfekt: 'hat bewiesen' } },
    { de: 'Beerdigung', art: 'die', gender: 'f', plural: 'Beerdigungen', pos: 'noun', level: 'B1', en: 'funeral', hi: 'अंतिम संस्कार', ex: 'Die Musik bei der Beerdigung war tragisch schön.', exEn: 'The music at the funeral was tragically beautiful.', exHi: 'Antim sanskaar mein sangeet dukhad roop se sundar tha.' },
    { de: 'Einschränkung', art: 'die', gender: 'f', plural: 'Einschränkungen', pos: 'noun', level: 'B1', en: 'limitation', hi: 'सीमा', ex: 'Es gab keine Einschränkung für die Musikwahl.', exEn: 'There was no limitation on the music choice.', exHi: 'Sangeet chunaav par koi seema nahi thi.' },
    { de: 'Einzelheit', art: 'die', gender: 'f', plural: 'Einzelheiten', pos: 'noun', level: 'B1', en: 'detail', hi: 'विवरण', ex: 'Er erinnert sich an jede Einzelheit.', exEn: 'He remembers every detail.', exHi: 'Use har vivaran yaad hai.' },
    { de: 'Gedächtnisleistung', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'memory skills', hi: 'स्मरण शक्ति', ex: 'Musik verbessert die Gedächtnisleistung.', exEn: 'Music improves memory skills.', exHi: 'Sangeet smaran shakti ko behtar banaata hai.' },
    { de: 'Heilung', art: 'die', gender: 'f', plural: 'Heilungen', pos: 'noun', level: 'B1', en: 'cure', hi: 'इलाज', ex: 'Musiktherapie hilft bei der Heilung.', exEn: 'Music therapy helps with the cure.', exHi: 'Sangeet chikitsa ilaaj mein madad karti hai.' },
    { de: 'Inspiration', art: 'die', gender: 'f', plural: 'Inspirationen', pos: 'noun', level: 'B1', en: 'inspiration', hi: 'प्रेरणा', ex: 'Der Komponist fand seine Inspiration in der Natur.', exEn: 'The composer found his inspiration in nature.', exHi: 'Sangeetakaar ne apni prerna prakriti mein paayi.' },
    { de: 'Konzentration', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'concentration', hi: 'एकाग्रता', ex: 'Musik hilft mir bei der Konzentration.', exEn: 'Music helps me concentrate.', exHi: 'Sangeet mujhe ekaagrata mein madad karta hai.' },
    { de: 'Motivation', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'motivation', hi: 'प्रेरणा', ex: 'Sein Musikgeschmack gibt ihm Motivation.', exEn: 'His music taste gives him motivation.', exHi: 'Uski sangeet pasand use prerna deti hai.' },
    { de: 'Sammlung', art: 'die', gender: 'f', plural: 'Sammlungen', pos: 'noun', level: 'B1', en: 'collection', hi: 'संग्रह', ex: 'Er hat eine große Plattensammlung.', exEn: 'He has a large record collection.', exHi: 'Uske paas ek bada record sangrah hai.' },
    { de: 'Scheidung', art: 'die', gender: 'f', plural: 'Scheidungen', pos: 'noun', level: 'B1', en: 'divorce', hi: 'तलाक़', ex: 'Nach der Scheidung schrieb sie viele Lieder.', exEn: 'After the divorce, she wrote many songs.', exHi: 'Talaak ke baad, usne kai gaane likhe.' },
    { de: 'Unsicherheit', art: 'die', gender: 'f', plural: 'Unsicherheiten', pos: 'noun', level: 'B1', en: 'uncertainty', hi: 'अनिश्चितता', ex: 'Trotz der Unsicherheit spielte er weiter.', exEn: 'Despite the uncertainty, he kept playing.', exHi: 'Anishchitata ke bawajood, woh bajaata raha.' },
    { de: 'dokumentieren', pos: 'verb', level: 'B1', en: 'to document', hi: 'दस्तावेज़ीकरण करना', ex: 'Die Presse dokumentierte die Konzertreise.', exEn: 'The press documented the concert tour.', exHi: 'Press ne sangeet yatra ka dastavezikaran kiya.', conj: { praesens: 'dokumentiert', praeteritum: 'dokumentierte', perfekt: 'hat dokumentiert' } },
    { de: 'eigen', pos: 'adjective', level: 'B1', en: 'own', hi: 'अपना', ex: 'Er hat einen eigenen Musikstil.', exEn: 'He has his own music style.', exHi: 'Uski apni sangeet shaili hai.' },
    { de: 'empfinden', pos: 'verb', level: 'B1', en: 'to feel', hi: 'महसूस करना', ex: 'Sie empfindet große Freude beim Singen.', exEn: 'She feels great joy while singing.', exHi: 'Gaana gaate waqt use bahut khushi mehsoos hoti hai.', conj: { praesens: 'empfindet', praeteritum: 'empfand', perfekt: 'hat empfunden' } },
    { de: 'erhalten sein', pos: 'idiom', level: 'B1', en: 'to be preserved', hi: 'संरक्षित होना', ex: 'Das Original ist gut erhalten.', exEn: 'The original is well preserved.', exHi: 'Mool roop achhi tarah surakshit hai.' },
    { de: 'geheim', pos: 'adjective', level: 'B1', en: 'secret', hi: 'गुप्त', ex: 'Er hielt seine Komposition geheim.', exEn: 'He kept his composition secret.', exHi: 'Usne apni rachna gupt rakhi.' },
    { de: 'gelangen', pos: 'verb', level: 'B1', en: 'to reach, attain', hi: 'पहुँचना', ex: 'Er gelangte zu großem Ruhm.', exEn: 'He attained great fame.', exHi: 'Usne badi prasiddhi paayi.', conj: { praesens: 'gelangt', praeteritum: 'gelangte', perfekt: 'ist gelangt' } },
    { de: 'klassisch', pos: 'adjective', level: 'B1', en: 'classic', hi: 'शास्त्रीय', ex: 'Er hört gern klassische Musik.', exEn: 'He likes listening to classical music.', exHi: 'Use shastriya sangeet sunna pasand hai.' },
    { de: 'klicken', pos: 'verb', level: 'B1', en: 'to click (auf + A.)', hi: 'क्लिक करना', ex: 'Klick auf den Link.', exEn: 'Click on the link.', exHi: 'Link par click karo.', conj: { praesens: 'klickt', praeteritum: 'klickte', perfekt: 'hat geklickt' } },
    { de: 'kommen', pos: 'verb', level: 'B1', en: 'to think (auf die Lösung kommen)', hi: 'समाधान पर पहुँचना', ex: 'Sie kam schnell auf die Lösung.', exEn: 'She quickly thought of the solution.', exHi: 'Usne jaldi hi samadhaan soch liya.', conj: { praesens: 'kommt', praeteritum: 'kam', perfekt: 'ist gekommen' } },
    { de: 'kommerziell', pos: 'adjective', level: 'B1', en: 'commercial', hi: 'व्यावसायिक', ex: 'Das Album war ein kommerzieller Erfolg.', exEn: 'The album was a commercial success.', exHi: 'Album ek vyaavsayik safalta tha.' },
    { de: 'komponieren', pos: 'verb', level: 'B1', en: 'to compose', hi: 'रचना करना', ex: 'Er komponierte sein bestes Stück.', exEn: 'He composed his best piece.', exHi: 'Usne apni sabse achhi rachna banaayi.', conj: { praesens: 'komponiert', praeteritum: 'komponierte', perfekt: 'hat komponiert' } },
    { de: 'leiden', pos: 'verb', level: 'B1', en: 'to suffer (an + D.)', hi: 'पीड़ित होना', ex: 'Er litt an Alzheimer.', exEn: 'He suffered from Alzheimer\'s.', exHi: 'Woh Alzheimer se peedit tha.', conj: { praesens: 'leidet', praeteritum: 'litt', perfekt: 'hat gelitten' } },
    { de: 'leidenschaftlich', pos: 'adjective', level: 'B1', en: 'passionate', hi: 'भावुक', ex: 'Sie spielt leidenschaftlich Klavier.', exEn: 'She plays piano passionately.', exHi: 'Woh bhavukta se piano bajaati hai.' },
    { de: 'Metal', pos: 'noun', level: 'B1', en: 'metal (music, kein Artikel)', hi: 'मेटल संगीत', ex: 'Rohan mag Metal.', exEn: 'Rohan likes metal.', exHi: 'Rohan ko metal pasand hai.' },
    { de: 'mithilfe', pos: 'preposition', level: 'B1', en: 'with the help of (von + D.)', hi: 'की मदद से', ex: 'Mithilfe von Musik entspannt er sich.', exEn: 'With the help of music, he relaxes.', exHi: 'Sangeet ki madad se, woh aaraam karta hai.' },
    { de: 'motiviert', pos: 'adjective', level: 'B1', en: 'motivated', hi: 'प्रेरित', ex: 'Sie ist sehr motiviert zu üben.', exEn: 'She\'s very motivated to practise.', exHi: 'Woh abhyaas karne ke liye bahut prerit hai.' },
    { de: 'Salsa', pos: 'noun', level: 'B1', en: 'salsa music (kein Artikel)', hi: 'साल्सा संगीत', ex: 'Anna mag Salsa.', exEn: 'Anna likes salsa.', exHi: 'Anna ko salsa pasand hai.' },
    { de: 'sich ausdenken', pos: 'verb', level: 'B1', en: 'to think of', hi: 'सोचना', ex: 'Er dachte sich eine neue Melodie aus.', exEn: 'He thought of a new melody.', exHi: 'Usne ek nayi dhun sochi.', conj: { praesens: 'denkt sich aus', praeteritum: 'dachte sich aus', perfekt: 'hat sich ausgedacht' } },
    { de: 'sich fürchten', pos: 'verb', level: 'B1', en: 'to be scared', hi: 'डरना', ex: 'Sie fürchtet sich vor der Bühne.', exEn: 'She\'s scared of the stage.', exHi: 'Woh stage se darti hai.', conj: { praesens: 'fürchtet sich', praeteritum: 'fürchtete sich', perfekt: 'hat sich gefürchtet' } },
    { de: 'sinken', pos: 'verb', level: 'B1', en: 'to sink', hi: 'गिरना', ex: 'Die Verkaufszahlen sanken.', exEn: 'Sales figures sank.', exHi: 'Bikri ke aankde gir gaye.', conj: { praesens: 'sinkt', praeteritum: 'sank', perfekt: 'ist gesunken' } },
    { de: 'um', pos: 'preposition', level: 'B1', en: 'around (die Gegend um Leipzig)', hi: 'के आस-पास', ex: 'Die Gegend um Leipzig ist musikalisch berühmt.', exEn: 'The area around Leipzig is musically famous.', exHi: 'Leipzig ke aas-paas ka ilaaka sangeetatmak roop se prasiddh hai.' },
    { de: 'ungewöhnlich', pos: 'adjective', level: 'B1', en: 'unusual', hi: 'असामान्य', ex: 'Sein Musikstil ist ungewöhnlich.', exEn: 'His music style is unusual.', exHi: 'Uski sangeet shaili asaamaanya hai.' },
    { de: 'verarbeiten', pos: 'verb', level: 'B1', en: 'to process', hi: 'संसाधित करना', ex: 'Sie verarbeitete ihre Trauer in Musik.', exEn: 'She processed her grief in music.', exHi: 'Usne apna dukh sangeet mein sansaadhit kiya.', conj: { praesens: 'verarbeitet', praeteritum: 'verarbeitete', perfekt: 'hat verarbeitet' } },
    { de: 'verhindern', pos: 'verb', level: 'B1', en: 'to prevent', hi: 'रोकना', ex: 'Die Presse konnte die Schlagzeile nicht verhindern.', exEn: 'The press couldn\'t prevent the headline.', exHi: 'Press headline ko nahi rok saki.', conj: { praesens: 'verhindert', praeteritum: 'verhinderte', perfekt: 'hat verhindert' } },
    { de: 'vermitteln', pos: 'verb', level: 'B1', en: 'to convey (Techniken vermitteln)', hi: 'सिखाना', ex: 'Der Lerncoach vermittelt gute Techniken.', exEn: 'The learning coach conveys good techniques.', exHi: 'Learning coach achhi takneek sikhaata hai.', conj: { praesens: 'vermittelt', praeteritum: 'vermittelte', perfekt: 'hat vermittelt' } },
    { de: 'woran', pos: 'pronoun', level: 'B1', en: 'what (question about a thing, an + D./A.)', hi: 'किस चीज़ के बारे में', ex: 'Woran erinnerst du dich?', exEn: 'What do you remember?', exHi: 'Tumhein kis cheez ki yaad aati hai?' },
    { de: 'wundervoll', pos: 'adjective', level: 'B1', en: 'wonderful', hi: 'अद्भुत', ex: 'Die Musikgeschichte dieses Komponisten ist wundervoll.', exEn: 'This composer\'s musical history is wonderful.', exHi: 'Is sangeetakaar ka sangeet itihaas adbhut hai.' },
    { de: 'zweiteilig', pos: 'adjective', level: 'B1', en: 'two-part', hi: 'दो-भाग वाला', ex: 'Dies ist ein zweiteiliger Konnektor.', exEn: 'This is a two-part connector.', exHi: 'Yeh ek do-bhaag wala connector hai.' },
    { de: 'zwingen', pos: 'verb', level: 'B1', en: 'to force', hi: 'मजबूर करना', ex: 'Niemand zwingt dich zum Üben.', exEn: 'Nobody forces you to practise.', exHi: 'Koi tumhein abhyaas ke liye majboor nahi karta.', conj: { praesens: 'zwingt', praeteritum: 'zwang', perfekt: 'hat gezwungen' } },
    { de: 'überfragt sein', pos: 'idiom', level: 'B1', en: 'to be stumped', hi: 'हैरान होना', ex: 'Bei dieser Frage bin ich überfragt.', exEn: 'I\'m stumped by this question.', exHi: 'Is sawaal se main hairaan hoon.' },
    { de: 'überprüfen', pos: 'verb', level: 'B1', en: 'to check', hi: 'जाँचना', ex: 'Der Forscher überprüfte die Behauptung.', exEn: 'The researcher checked the claim.', exHi: 'Shodhkarta ne daave ki jaanch ki.', conj: { praesens: 'überprüft', praeteritum: 'überprüfte', perfekt: 'hat überprüft' } },
    { de: 'Dur', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'major (music key)', hi: 'मेजर स्केल', ex: 'Das Stück steht in Dur.', exEn: 'The piece is in major.', exHi: 'Rachna major mein hai.' },
    { de: 'Familienleben', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'family life', hi: 'पारिवारिक जीवन', ex: 'Sein Familienleben war schwierig.', exEn: 'His family life was difficult.', exHi: 'Uska paarivaarik jeevan mushkil tha.' },
    { de: 'Gericht', art: 'das', gender: 'n', plural: 'Gerichte', pos: 'noun', level: 'B1', en: 'court (of law)', hi: 'अदालत', ex: 'Der Fall kam vor Gericht.', exEn: 'The case went to court.', exHi: 'Maamla adaalat mein gaya.' },
    { de: 'Moll', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'minor (music key)', hi: 'माइनर स्केल', ex: 'Traurige Musik steht oft in Moll.', exEn: 'Sad music is often in minor.', exHi: 'Dukhad sangeet aksar minor mein hota hai.' },
    { de: 'Musikstudium', art: 'das', gender: 'n', plural: 'Musikstudien', pos: 'noun', level: 'B1', en: 'study of music', hi: 'संगीत अध्ययन', ex: 'Sie begann ihr Musikstudium mit 18.', exEn: 'She began her music studies at 18.', exHi: 'Usne 18 saal ki umra mein sangeet adhyayan shuru kiya.' },
    { de: 'Stück', art: 'das', gender: 'n', plural: 'Stücke', pos: 'noun', level: 'B1', en: 'piece (of music)', hi: 'रचना', ex: 'Er komponierte sein bestes Stück.', exEn: 'He composed his best piece.', exHi: 'Usne apni sabse achhi rachna banaayi.' },
    { de: 'Wort', art: 'das', gender: 'n', plural: 'Wörter', pos: 'noun', level: 'B1', en: 'word', hi: 'शब्द', ex: 'Kein Wort konnte seine Trauer beschreiben.', exEn: 'No word could describe his grief.', exHi: 'Koi shabd uske dukh ko bayaan nahi kar saka.' },
    { de: 'Alzheimer', pos: 'noun', level: 'B1', en: 'Alzheimer\'s disease', hi: 'अल्ज़ाइमर रोग', ex: 'Er litt an Alzheimer.', exEn: 'He suffered from Alzheimer\'s.', exHi: 'Woh Alzheimer se peedit tha.' },
    { de: 'Ehegatte', art: 'der', gender: 'm', plural: 'Ehegatten', pos: 'noun', level: 'B1', en: 'spouse (male)', hi: 'पति', ex: 'Ihr Ehegatte spielte Klavier.', exEn: 'Her spouse played piano.', exHi: 'Uska pati piano bajaata tha.' },
    { de: 'Einfluss', art: 'der', gender: 'm', plural: 'Einflüsse', pos: 'noun', level: 'B1', en: 'influence', hi: 'प्रभाव', ex: 'Sein Einfluss auf die Musikgeschichte war groß.', exEn: 'His influence on musical history was great.', exHi: 'Sangeet itihaas par uska prabhaav bada tha.' },
    { de: 'Ersatz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'replacement', hi: 'प्रतिस्थापन', ex: 'Es gibt keinen Ersatz für diese Stimme.', exEn: 'There\'s no replacement for this voice.', exHi: 'Is aavaaz ka koi pratisthaapan nahi hai.' },
    { de: 'Forscher', art: 'der', gender: 'm', plural: 'Forscher', pos: 'noun', level: 'B1', en: 'researcher (male)', hi: 'शोधकर्ता', ex: 'Der Forscher untersuchte den Effekt von Musik.', exEn: 'The researcher studied the effect of music.', exHi: 'Shodhkarta ne sangeet ke prabhaav ki jaanch ki.' },
    { de: 'Jazz', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'jazz', hi: 'जैज़', ex: 'Ich mag sowohl Jazz als auch Metal.', exEn: 'I like both jazz and metal.', exHi: 'Mujhe jazz aur metal dono pasand hain.' },
    { de: 'Komponist', art: 'der', gender: 'm', plural: 'Komponisten', pos: 'noun', level: 'B1', en: 'composer (male)', hi: 'संगीतकार', ex: 'Dieser Komponist war seiner Zeit voraus.', exEn: 'This composer was ahead of his time.', exHi: 'Yeh sangeetakaar apne samay se aage tha.' },
    { de: 'Kopf', art: 'der', gender: 'm', plural: 'Köpfe', pos: 'noun', level: 'B1', en: 'head', hi: 'सिर', ex: 'Die Melodie geht mir nicht aus dem Kopf.', exEn: 'The melody won\'t leave my head.', exHi: 'Dhun mere dimaag se nahi jaa rahi.' },
    { de: 'Käsekuchen', art: 'der', gender: 'm', plural: 'Käsekuchen', pos: 'noun', level: 'B1', en: 'cheesecake', hi: 'चीज़केक', ex: 'Zum Nachtisch gibt es Käsekuchen.', exEn: 'For dessert, there\'s cheesecake.', exHi: 'Dessert mein cheesecake hai.' },
    { de: 'Lerncoach', art: 'der', gender: 'm', plural: 'Lerncoaches', pos: 'noun', level: 'B1', en: 'learning coach', hi: 'शिक्षण प्रशिक्षक', ex: 'Der Lerncoach gab gute Tipps.', exEn: 'The learning coach gave good tips.', exHi: 'Learning coach ne achhe tips diye.' },
    { de: 'Lerntipp', art: 'der', gender: 'm', plural: 'Lerntipps', pos: 'noun', level: 'B1', en: 'learning tip', hi: 'सीखने की सलाह', ex: 'Dieser Lerntipp hilft beim Üben.', exEn: 'This learning tip helps with practice.', exHi: 'Yeh sujhaav abhyaas mein madad karta hai.' },
    { de: 'Lerntyp', art: 'der', gender: 'm', plural: 'Lerntypen', pos: 'noun', level: 'B1', en: 'learning type', hi: 'सीखने की शैली', ex: 'Jeder Lerntyp braucht andere Methoden.', exEn: 'Every learning type needs different methods.', exHi: 'Har seekhne ki shaili ko alag tareeke chahiye.' },
    { de: 'Moderator', art: 'der', gender: 'm', plural: 'Moderatoren', pos: 'noun', level: 'B1', en: 'moderator (male)', hi: 'संचालक', ex: 'Der Moderator stellte den Studiogast vor.', exEn: 'The moderator introduced the studio guest.', exHi: 'Sanchaalak ne studio guest ka parichay diya.' },
    { de: 'Musikgeschmack', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'music taste', hi: 'संगीत की पसंद', ex: 'Ihr Musikgeschmack ist sehr breit.', exEn: 'Her music taste is very broad.', exHi: 'Uski sangeet pasand bahut vishaal hai.' },
    { de: 'Pianist', art: 'der', gender: 'm', plural: 'Pianisten', pos: 'noun', level: 'B1', en: 'piano player (male)', hi: 'पियानो वादक', ex: 'Der Pianist spielte wundervoll.', exEn: 'The pianist played wonderfully.', exHi: 'Pianist ne adbhut roop se bajaaya.' },
    { de: 'Puls', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'pulse', hi: 'नब्ज़', ex: 'Der Rhythmus folgt dem Puls.', exEn: 'The rhythm follows the pulse.', exHi: 'Taal nabz ka anusaran karti hai.' },
    { de: 'Studiogast', art: 'der', gender: 'm', plural: 'Studiogäste', pos: 'noun', level: 'B1', en: 'studio guest', hi: 'स्टूडियो अतिथि', ex: 'Der Studiogast war ein bekannter Komponist.', exEn: 'The studio guest was a famous composer.', exHi: 'Studio atithi ek prasiddh sangeetakaar tha.' },
    { de: 'Tod', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'death', hi: 'मृत्यु', ex: 'Nach seinem Tod wurde er berühmt.', exEn: 'After his death, he became famous.', exHi: 'Uski mrityu ke baad, woh prasiddh ho gaya.' },
    { de: 'Ton', art: 'der', gender: 'm', plural: 'Töne', pos: 'noun', level: 'B1', en: 'tone', hi: 'स्वर', ex: 'Jeder Ton hat seine eigene Bedeutung.', exEn: 'Every tone has its own meaning.', exHi: 'Har swar ka apna arth hota hai.' },
    { de: 'Promi', pos: 'noun', level: 'B1', en: 'famous person', hi: 'प्रसिद्ध व्यक्ति', ex: 'Der Promi gab ein Interview.', exEn: 'The celebrity gave an interview.', exHi: 'Prasiddh vyakti ne interview diya.' },
    { de: 'Ehegattin', art: 'die', gender: 'f', plural: 'Ehegattinnen', pos: 'noun', level: 'B1', en: 'spouse (female)', hi: 'पत्नी', ex: 'Seine Ehegattin unterstützte ihn.', exEn: 'His spouse supported him.', exHi: 'Uski patni ne uska saath diya.' },
    { de: 'Fake News', pos: 'noun', level: 'B1', en: 'fake news', hi: 'फ़र्ज़ी ख़बर', ex: 'Die Schlagzeile war Fake News.', exEn: 'The headline was fake news.', exHi: 'Headline farzi khabar thi.' },
    { de: 'Fernsehkrimiserie', art: 'die', gender: 'f', plural: 'Fernsehkrimiserien', pos: 'noun', level: 'B1', en: 'TV crime series', hi: 'टीवी अपराध धारावाहिक', ex: 'Diese Fernsehkrimiserie ist sehr beliebt.', exEn: 'This TV crime series is very popular.', exHi: 'Yeh TV apraadh dhaaravaahik bahut lokpriya hai.' },
    { de: 'Filmbranche', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'film industry', hi: 'फ़िल्म उद्योग', ex: 'Sie arbeitet in der Filmbranche.', exEn: 'She works in the film industry.', exHi: 'Woh film udyog mein kaam karti hai.' },
    { de: 'Forscherin', art: 'die', gender: 'f', plural: 'Forscherinnen', pos: 'noun', level: 'B1', en: 'researcher (female)', hi: 'शोधकर्ता (महिला)', ex: 'Die Forscherin bewies ihre These.', exEn: 'The researcher proved her thesis.', exHi: 'Shodhkarta ne apna siddhaant saabit kiya.' },
    { de: 'Klassik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'classical (music)', hi: 'शास्त्रीय संगीत', ex: 'Er hört gern Klassik.', exEn: 'He likes listening to classical music.', exHi: 'Use shastriya sangeet sunna pasand hai.' },
    { de: 'Komponistin', art: 'die', gender: 'f', plural: 'Komponistinnen', pos: 'noun', level: 'B1', en: 'composer (female)', hi: 'संगीतकार (महिला)', ex: 'Die Komponistin schrieb ein neues Stück.', exEn: 'The composer wrote a new piece.', exHi: 'Sangeetakaar ne ek nayi rachna likhi.' },
    { de: 'Konzertreise', art: 'die', gender: 'f', plural: 'Konzertreisen', pos: 'noun', level: 'B1', en: 'concert tour', hi: 'संगीत यात्रा', ex: 'Die Konzertreise dauerte drei Wochen.', exEn: 'The concert tour lasted three weeks.', exHi: 'Sangeet yatra teen hafte tak chali.' },
    { de: 'Krimireihe', art: 'die', gender: 'f', plural: 'Krimireihen', pos: 'noun', level: 'B1', en: 'crime series', hi: 'अपराध धारावाहिक', ex: 'Diese Krimireihe hat viele Fans.', exEn: 'This crime series has many fans.', exHi: 'Is apraadh dhaaravaahik ke kai fan hain.' },
    { de: 'Kursstunde', art: 'die', gender: 'f', plural: 'Kursstunden', pos: 'noun', level: 'B1', en: 'lesson', hi: 'पाठ', ex: 'Die Kursstunde dauert 60 Minuten.', exEn: 'The lesson lasts 60 minutes.', exHi: 'Paath 60 minute tak chalta hai.' },
    { de: 'Lernzeit', art: 'die', gender: 'f', plural: 'Lernzeiten', pos: 'noun', level: 'B1', en: 'learning time', hi: 'सीखने का समय', ex: 'Er nutzte seine Lernzeit effizient.', exEn: 'He used his learning time efficiently.', exHi: 'Usne apna seekhne ka samay kushalta se upyog kiya.' },
    { de: 'Liebesszene', art: 'die', gender: 'f', plural: 'Liebesszenen', pos: 'noun', level: 'B1', en: 'love scene', hi: 'प्रेम दृश्य', ex: 'Die Musik in der Liebesszene war passend.', exEn: 'The music in the love scene was fitting.', exHi: 'Prem drishya mein sangeet uchit tha.' },
    { de: 'Medizin', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'medicine', hi: 'चिकित्सा', ex: 'Sie studiert Medizin.', exEn: 'She studies medicine.', exHi: 'Woh chikitsa padhti hai.' },
    { de: 'Moderatorin', art: 'die', gender: 'f', plural: 'Moderatorinnen', pos: 'noun', level: 'B1', en: 'moderator (female)', hi: 'संचालक (महिला)', ex: 'Die Moderatorin stellte viele Fragen.', exEn: 'The moderator asked many questions.', exHi: 'Sanchaalak ne kai sawaal poochhe.' },
    { de: 'Musikgeschichte', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'musical history', hi: 'संगीत का इतिहास', ex: 'Die Musikgeschichte dieses Komponisten ist wundervoll.', exEn: 'This composer\'s musical history is wonderful.', exHi: 'Is sangeetakaar ka sangeet itihaas adbhut hai.' },
    { de: 'Nachfrage', art: 'die', gender: 'f', plural: 'Nachfragen', pos: 'noun', level: 'B1', en: 'demand, inquiry', hi: 'माँग', ex: 'Wegen der großen Nachfrage ist das Konzert fast ausverkauft.', exEn: 'Because of the great demand, the concert is almost sold out.', exHi: 'Zyada maang ki wajah se, concert lagbhag bik chuka hai.' },
    { de: 'Parade-Rolle', art: 'die', gender: 'f', plural: 'Parade-Rollen', pos: 'noun', level: 'B1', en: 'main role', hi: 'मुख्य भूमिका', ex: 'Das war seine Parade-Rolle.', exEn: 'That was his main role.', exHi: 'Yeh uski mukhya bhoomika thi.' },
    { de: 'Pianistin', art: 'die', gender: 'f', plural: 'Pianistinnen', pos: 'noun', level: 'B1', en: 'piano player (female)', hi: 'पियानो वादक (महिला)', ex: 'Die Pianistin spielte ein schwieriges Stück.', exEn: 'The pianist played a difficult piece.', exHi: 'Pianist ne ek mushkil rachna bajaayi.' },
    { de: 'Presse', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'press', hi: 'प्रेस', ex: 'Die Presse dokumentierte die Konzertreise.', exEn: 'The press documented the concert tour.', exHi: 'Press ne sangeet yatra ka dastavezikaran kiya.' },
    { de: 'Programmankündigung', art: 'die', gender: 'f', plural: 'Programmankündigungen', pos: 'noun', level: 'B1', en: 'program announcement', hi: 'कार्यक्रम घोषणा', ex: 'Die Programmankündigung kam gestern.', exEn: 'The program announcement came yesterday.', exHi: 'Karyakram ghoshna kal aayi.' },
    { de: 'Reklame', art: 'die', gender: 'f', plural: 'Reklamen', pos: 'noun', level: 'B1', en: 'advertisement', hi: 'विज्ञापन', ex: 'Die Reklame lief im Fernsehen.', exEn: 'The advertisement ran on TV.', exHi: 'Vigyaapan TV par chala.' },
    { de: 'Schauspielkarriere', art: 'die', gender: 'f', plural: 'Schauspielkarrieren', pos: 'noun', level: 'B1', en: 'acting career', hi: 'अभिनय करियर', ex: 'Seine Schauspielkarriere begann spät.', exEn: 'His acting career started late.', exHi: 'Uska abhinay career der se shuru hua.' },
    { de: 'Schlagzeile', art: 'die', gender: 'f', plural: 'Schlagzeilen', pos: 'noun', level: 'B1', en: 'headline', hi: 'सुर्खी', ex: 'Die Schlagzeile war übertrieben.', exEn: 'The headline was exaggerated.', exHi: 'Surkhi badha-chadhakar thi.' },
    { de: 'Seite', art: 'die', gender: 'f', plural: 'Seiten', pos: 'noun', level: 'B1', en: 'side', hi: 'पक्ष', ex: 'Auf der einen Seite ist Jazz besser.', exEn: 'On the one hand, jazz is better.', exHi: 'Ek taraf, jazz behtar hai.' },
    { de: 'Tonart', art: 'die', gender: 'f', plural: 'Tonarten', pos: 'noun', level: 'B1', en: 'key (music)', hi: 'स्वर कुंजी', ex: 'Das Stück wechselt die Tonart.', exEn: 'The piece changes key.', exHi: 'Rachna swar kunji badalti hai.' },
    { de: 'Zunge', art: 'die', gender: 'f', plural: 'Zungen', pos: 'noun', level: 'B1', en: 'tongue', hi: 'जीभ', ex: 'Das Wort lag mir auf der Zunge.', exEn: 'The word was on the tip of my tongue.', exHi: 'Shabd meri zubaan par tha.' },
    { de: 'fantasievoll', pos: 'adjective', level: 'B1', en: 'imaginative', hi: 'कल्पनाशील', ex: 'Seine Kompositionen sind fantasievoll.', exEn: 'His compositions are imaginative.', exHi: 'Uski rachnaayein kalpanaasheel hain.' },
    { de: 'feierlich', pos: 'adjective', level: 'B1', en: 'festive', hi: 'उत्सवपूर्ण', ex: 'Die Musik war feierlich.', exEn: 'The music was festive.', exHi: 'Sangeet utsavapoorn tha.' },
    { de: 'Heavy Metal', pos: 'noun', level: 'B1', en: 'heavy metal', hi: 'हैवी मेटल', ex: 'Rohan liebt Heavy Metal.', exEn: 'Rohan loves heavy metal.', exHi: 'Rohan ko heavy metal bahut pasand hai.' },
    { de: 'sich amüsieren', pos: 'verb', level: 'B1', en: 'to amuse oneself (über + A.)', hi: 'आनंदित होना', ex: 'Er amüsiert sich über die Reklame.', exEn: 'He amuses himself with the advertisement.', exHi: 'Woh vigyaapan se manoranjan karta hai.', conj: { praesens: 'amüsiert sich', praeteritum: 'amüsierte sich', perfekt: 'hat sich amüsiert' } },
    { de: 'sich wundern', pos: 'verb', level: 'B1', en: 'to marvel (über + A.)', hi: 'आश्चर्यचकित होना', ex: 'Ich wundere mich über die hohen Preise.', exEn: 'I\'m amazed at the high prices.', exHi: 'Mujhe oonchi keemton par aashcharya hota hai.', conj: { praesens: 'wundert sich', praeteritum: 'wunderte sich', perfekt: 'hat sich gewundert' } },
    { de: 'tragisch', pos: 'adjective', level: 'B1', en: 'tragic', hi: 'दुखद', ex: 'Sein Tod war tragisch.', exEn: 'His death was tragic.', exHi: 'Uski mrityu dukhad thi.' },
    { de: 'würzig', pos: 'adjective', level: 'B1', en: 'spicy', hi: 'मसालेदार', ex: 'Das Gericht war würzig.', exEn: 'The dish was spicy.', exHi: 'Vyanjan masaledaar tha.' },
    { de: 'amerikanisch', pos: 'adjective', level: 'B1', en: 'American', hi: 'अमेरिकी', ex: 'Die amerikanische Krimireihe ist beliebt.', exEn: 'The American crime series is popular.', exHi: 'Amerikan apraadh dhaaravaahik lokpriya hai.' },
    { de: 'Konnektor', art: 'der', gender: 'm', plural: 'Konnektoren', pos: 'noun', level: 'B1', en: 'connector', hi: 'संयोजक', ex: 'Dies ist ein zweiteiliger Konnektor.', exEn: 'This is a two-part connector.', exHi: 'Yeh ek do-bhaag wala connector hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'entweder … oder — Wahl',
      body: [ 'Only ONE of the two options is possible — a genuine choice.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['entweder … oder', '<span class="de">Entweder fahren wir nach Berlin, oder wir bleiben zu Hause.</span>']
        ]
      },
      hinglish: 'Do options mein se sirf EK hi possible hai — yahan asli choice hai.'
    },
    {
      title: 'sowohl … als auch — Beides',
      body: [ 'Both things are true — no choice needed, both are included.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['sowohl … als auch', '<span class="de">Anna spricht sowohl Deutsch als auch Englisch.</span>']
        ]
      },
      hinglish: 'Dono cheezein sach hain — yahan koi choice nahi karni, dono shaamil hain.'
    },
    {
      title: 'weder … noch — Keins von beiden',
      body: [ 'Both options are negative — neither is true.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['weder … noch', '<span class="de">Ich habe weder Zeit noch Geld.</span>']
        ]
      },
      note: 'weder...noch already carries the negation — never add an extra "nicht" in the same clause.',
      hinglish: 'Dono options negative hain — koi bhi sach nahi hai.'
    },
    {
      title: 'nicht nur … sondern auch — Hinzufügung',
      body: [ 'Adds surprising or emphatic extra information.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['nicht nur … sondern auch', '<span class="de">Anna spricht nicht nur Deutsch, sondern auch Französisch.</span>']
        ]
      },
      hinglish: 'Yeh ek surprising ya emphatic extra jaankari jodta hai.'
    },
    {
      title: 'zwar … aber — Kontrast',
      body: [ 'The first statement is true, but the second contrasts with it (a concession).' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['zwar … aber', '<span class="de">Das Auto ist zwar teuer, aber sehr zuverlässig.</span>']
        ]
      },
      hinglish: 'Pehli baat sach hai, lekin doosri baat usse contrast karti hai.'
    },
    {
      title: 'Vollständiger Vergleich',
      body: [ 'One question decides the connector every time.' ],
      table: {
        head: ['Meaning', 'Connector'],
        rows: [
          ['Choice', 'entweder … oder'],
          ['Both', 'sowohl … als auch'],
          ['Neither', 'weder … noch'],
          ['Addition', 'nicht nur … sondern auch'],
          ['Contrast', 'zwar … aber']
        ]
      },
      note: 'Memory trick: Choose → entweder...oder. Both → sowohl...als auch. None → weder...noch. Extra → nicht nur...sondern auch. Contrast → zwar...aber.',
      hinglish: 'Ek sawaal har baar connector tay karta hai: Choice hai? entweder...oder. Dono? sowohl...als auch. Koi nahi? weder...noch. Extra baat? nicht nur...sondern auch. Contrast? zwar...aber.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from mixing the wrong second half with the first half of each pair.' ],
      mistakes: [
        { wrong: 'entweder … und', right: 'entweder … oder', why: 'entweder is only ever paired with oder, never und.' },
        { wrong: 'sowohl … oder', right: 'sowohl … als auch', why: 'sowohl is only ever paired with als auch, never oder.' },
        { wrong: 'weder … oder', right: 'weder … noch', why: 'weder is only ever paired with noch, never oder.' },
        { wrong: 'nicht nur … auch', right: 'nicht nur … sondern auch', why: 'The second half needs both sondern AND auch together — "auch" alone is not enough.' },
        { wrong: 'zwar … sondern', right: 'zwar … aber', why: 'zwar is only ever paired with aber for contrast, never sondern.' }
      ],
      hinglish: 'Yeh paanch galtiyaan har pair ke galat second half mix karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Two-part connectors appear constantly in Goethe B1 opinion texts and comparisons.' ],
      note: 'Quick check: two options, only one true? entweder...oder. Both true? sowohl...als auch. Both false? weder...noch. Surprising addition? nicht nur...sondern auch. True but contrasted? zwar...aber.',
      hinglish: 'Two-part connectors Goethe B1 opinion texts aur comparisons mein lagataar aate hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Musik verbindet',
    titleEn: 'Music connects',
    tokens: [
      { w: 'Musik', role: 'plain', en: 'music', hi: 'संगीत', type: 'Noun · fem.' },
      { w: 'kann', role: 'plain', en: 'can', hi: 'सकती है', type: 'Verb · Modalverb' },
      { w: 'sowohl', role: 'r-connector', en: 'both', hi: 'दोनों', type: 'Konnektor · sowohl…als auch (1/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Konzentration', role: 'plain', en: 'concentration', hi: 'एकाग्रता', type: 'Noun · fem.', why: 'die Konzentration (this chapter).' },
      { w: 'als', role: 'r-connector', en: 'as', hi: '', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konnektor · sowohl…als auch (2/2)' },
      { w: 'die', role: 'plain', en: 'the (fem. acc.)', hi: 'यह', type: 'Article · Akk.' },
      { w: 'Gedächtnisleistung', role: 'plain', en: 'memory skills', hi: 'स्मरण शक्ति', type: 'Noun · fem.', why: 'die Gedächtnisleistung (this chapter).' },
      { w: 'verbessern', role: 'plain', en: 'to improve (Satzende)', hi: 'बेहतर बनाना', type: 'Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Manche', role: 'plain', en: 'some', hi: 'कुछ', type: 'Indefinitpronomen' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural', why: 'der Forscher (this chapter).' },
      { w: 'behaupten', role: 'plain', en: 'claim (Satzende)', hi: 'दावा करते हैं (Satzende)', type: 'Verb · behaupten (Satzende)', why: 'behaupten (this chapter): to claim.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Musik', role: 'plain', en: 'music', hi: 'संगीत', type: 'Noun · fem.' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dativ' },
      { w: 'Heilung', role: 'plain', en: 'cure', hi: 'इलाज', type: 'Noun · fem.', why: 'die Heilung (this chapter).' },
      { w: 'helfen', role: 'plain', en: 'to help (Satzende)', hi: 'मदद करना', type: 'Infinitiv (Satzende)' },
      { w: 'kann', role: 'plain', en: 'can (Satzende)', hi: 'सकता है (Satzende)', type: 'Verb · Modalverb (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zwar', role: 'r-connector', en: 'admittedly', hi: 'हालांकि', type: 'Konnektor · zwar…aber (1/2)' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'diese', role: 'plain', en: 'this (fem.)', hi: 'यह', type: 'Determiner' },
      { w: 'Behauptung', role: 'plain', en: 'claim', hi: 'दावा', type: 'Noun · fem.', why: 'die Behauptung (this chapter).' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'vollständig', role: 'plain', en: 'fully', hi: 'पूरी तरह', type: 'Adjective' },
      { w: 'bewiesen', role: 'plain', en: 'proven (Satzende)', hi: 'साबित (Satzende)', type: 'Verb · beweisen (Partizip II, Satzende)', why: 'beweisen (this chapter): to prove.' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-connector', en: 'but', hi: 'लेकिन', type: 'Konnektor · zwar…aber (2/2)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Mehrheit', role: 'plain', en: 'majority', hi: 'बहुमत', type: 'Noun · fem.', why: 'die Mehrheit (this chapter).' },
      { w: 'der', role: 'plain', en: 'of the (plural gen.)', hi: 'का', type: 'Article · Genitiv' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'stimmt', role: 'plain', en: 'agrees (Satzende)', hi: 'सहमत है (Satzende)', type: 'Verb · stimmen (Satzende)' },
      { w: 'zu', role: 'plain', en: '(zustimmen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'bekannter', role: 'plain', en: 'well-known', hi: 'प्रसिद्ध', type: 'Adjective · gemischt · Nom.', why: 'Mixed declension: ein + Nominativ masculine → -er (recycled — Ch.12).' },
      { w: 'Komponist', role: 'plain', en: 'composer', hi: 'संगीतकार', type: 'N-Deklination · Nom. Sg.', why: 'der Komponist (this chapter) — N-Deklination noun (recycled — Ch.15).' },
      { w: 'litt', role: 'plain', en: 'suffered (Satzende)', hi: 'पीड़ित था (Satzende)', type: 'Verb · leiden (Präteritum, Satzende)', why: 'leiden (an + D.) (this chapter).' },
      { w: 'an', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Alzheimer', role: 'plain', en: 'Alzheimer\'s', hi: 'अल्ज़ाइमर', type: 'Noun (this chapter)' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Konjunktion' },
      { w: 'nicht', role: 'r-connector', en: 'not only', hi: 'सिर्फ़ नहीं', type: 'Konnektor · nicht nur…sondern auch (1/2)' },
      { w: 'nur', role: 'r-connector', en: 'only', hi: '', type: 'Konnektor · nicht nur…sondern auch (1/2)' },
      { w: 'seine', role: 'plain', en: 'his (fem. nom.)', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Gedächtnisleistung', role: 'plain', en: 'memory skills', hi: 'स्मरण शक्ति', type: 'Noun · fem.' },
      { w: 'blieb', role: 'plain', en: 'remained (Satzende)', hi: 'बरकरार रहा (Satzende)', type: 'Verb · bleiben (Präteritum, Satzende)' },
      { w: 'erhalten', role: 'plain', en: '(erhalten sein: preserved)', hi: '—', type: 'Adjective (idiom)' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but', hi: 'बल्कि', type: 'Konnektor · nicht nur…sondern auch (2/2)' },
      { w: 'auch', role: 'r-connector', en: 'also', hi: 'भी', type: 'Konnektor · nicht nur…sondern auch (2/2)' },
      { w: 'seine', role: 'plain', en: 'his (fem. nom.)', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Freude', role: 'plain', en: 'joy', hi: 'खुशी', type: 'Noun · fem.' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Komponieren', role: 'plain', en: 'composing', hi: 'रचना करने में', type: 'Noun · neut. (substantiviert)', why: 'komponieren (this chapter): to compose.' },
      { w: '.', plain: true }
    ],
    translation: 'Music can improve both concentration and memory skills. Some researchers claim that music can even help with healing. Admittedly this claim isn\'t fully proven, but the majority of researchers agree. A well-known composer suffered from Alzheimer\'s, but not only did his memory skills remain preserved, but also his joy in composing.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_024_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nike, sollen wir sowohl das Konzert am Freitag als auch das am Samstag besuchen?', en: 'Nike, should we attend both the Friday concert and the Saturday one?' },
      { id: 'B1_024_L002', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Zwei Konzerte? Ich habe weder genug Geld noch genug Energie dafür!', en: 'Two concerts? I have neither enough money nor enough energy for that!' },
      { id: 'B1_024_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, dann nehmen wir entweder Freitag oder Samstag.', en: 'True, then we\'ll take either Friday or Saturday.' },
      { id: 'B1_024_L004', speaker: 'Nike', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Samstag ist besser — da mag ich nicht nur die Band, sondern auch den Support-Act.', en: 'Saturday is better — I like not only the band but also the support act.' }
    ],
    transcript: 'Nike, sollen wir sowohl das Konzert am Freitag als auch das am Samstag besuchen? Zwei Konzerte? Ich habe weder genug Geld noch genug Energie dafür! Stimmt, dann nehmen wir entweder Freitag oder Samstag. Samstag ist besser — da mag ich nicht nur die Band, sondern auch den Support-Act.',
    translation: 'Nike, should we attend both the Friday concert and the Saturday one? Two concerts? I have neither enough money nor enough energy for that! True, then we\'ll take either Friday or Saturday. Saturday is better — I like not only the band but also the support act.',
    tokens: [
      { w: 'Nike' },
      { w: ',', plain: true },
      { w: 'sollen' },
      { w: 'wir' },
      { w: 'sowohl' },
      { w: 'das' },
      { w: 'Konzert' },
      { w: 'am' },
      { w: 'Freitag' },
      { w: 'als' },
      { w: 'auch' },
      { w: 'das' },
      { w: 'am' },
      { w: 'Samstag' },
      { w: 'besuchen' },
      { w: '?', plain: true },
      { w: 'Zwei' },
      { w: 'Konzerte' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'habe' },
      { w: 'weder' },
      { w: 'genug' },
      { w: 'Geld' },
      { w: 'noch' },
      { w: 'genug' },
      { w: 'Energie' },
      { w: 'dafür' },
      { w: '!', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: 'dann' },
      { w: 'nehmen' },
      { w: 'wir' },
      { w: 'entweder' },
      { w: 'Freitag' },
      { w: 'oder' },
      { w: 'Samstag' },
      { w: '.', plain: true },
      { w: 'Samstag' },
      { w: 'ist' },
      { w: 'besser' },
      { w: '—', plain: true },
      { w: 'da' },
      { w: 'mag' },
      { w: 'ich' },
      { w: 'nicht' },
      { w: 'nur' },
      { w: 'die' },
      { w: 'Band' },
      { w: ',', plain: true },
      { w: 'sondern' },
      { w: 'auch' },
      { w: 'den' },
      { w: 'Support', noSpaceAfter: true },
      { w: '-', plain: true, noSpaceAfter: true },
      { w: 'Act' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum will Nike nicht zu beiden Konzerten gehen?', qEn: 'Why doesn\'t Nike want to go to both concerts?', options: ['sie mag die Bands nicht', 'weder Geld noch Energie', 'sie hat keine Zeit', 'das Konzert ist ausverkauft'], optionsEn: ['she doesn\'t like the bands', 'neither money nor energy', 'she has no time', 'the concert is sold out'], answer: 1,
        explain: '"Ich habe weder genug Geld noch genug Energie dafür!"' },
      { q: 'Welchen Tag wählen sie?', qEn: 'Which day do they choose?', options: ['Freitag', 'Samstag', 'beide', 'keinen'], optionsEn: ['Friday', 'Saturday', 'both', 'none'], answer: 1,
        explain: '"Samstag ist besser."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt, ob ihr beide Konzerte besuchen sollt.", taskEn: "Your friend asks whether you should go to both concerts.", de: "Ich habe weder genug Geld noch genug Energie für zwei Konzerte.", en: "I have neither enough money nor enough energy for two concerts." },
    { task: "Deine Freundin hat zwei Konzertkarten, eine für Freitag und eine für Samstag. Sie fragt, welche ihr nehmt.", taskEn: "Your friend has two concert tickets, one for Friday and one for Saturday. She asks which one you'll take.", de: "Wir nehmen entweder das Konzert am Freitag oder das am Samstag.", en: "We'll take either the Friday concert or the Saturday one." },
    { task: "Ein Kollege fragt, wie du Musik findest.", taskEn: "A colleague asks what you think of music.", de: "Musik ist nicht nur beruhigend, sondern auch gut für die Konzentration.", en: "Music is not only calming, but also good for concentration." },
    { task: "Deine Freundin fragt, was für dich wichtig ist.", taskEn: "Your friend asks what matters to you.", de: "Für mich zählen sowohl die Inspiration als auch die Ruhe.", en: "For me both inspiration and calm count." },
    { task: "Ein Bekannter behauptet, Musik heile Krankheiten. Antworte.", taskEn: "An acquaintance claims music cures illness. Answer.", de: "Die Behauptung ist zwar interessant, aber nicht bewiesen.", en: "The claim is interesting, but not proven." },
    { task: "Eine Kollegin fragt, wie deine Woche war.", taskEn: "A colleague asks how your week was.", de: "Ich war zwar beschäftigt, aber die Woche war schön.", en: "I was busy, but the week was nice." },
    { task: "Rollenspiel: Ihr diskutiert, wie ihr den Abend verbringt.", taskEn: "Role-play: you discuss how to spend the evening.", de: "Entweder wir gehen ins Konzert oder wir bleiben hier. — Ich möchte sowohl Musik hören als auch früh schlafen.", en: "Either we go to the concert or we stay here. — I'd like both to hear music and to sleep early." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion text or comparison (six to eight sentences) — comparing two cities, products, or plans — using all five two-part connectors (entweder...oder, sowohl...als auch, weder...noch, nicht nur...sondern auch, zwar...aber) at least once each.',
    starters: ['Entweder …, oder …', 'Sowohl … als auch …', 'Weder … noch …', 'Nicht nur …, sondern auch …', 'Zwar …, aber …'],
    placeholder: 'Entweder fahren wir nach Berlin, oder wir bleiben zu Hause. Die Stadt ist sowohl …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Entweder lernst du, ___ du bestehst nicht."',
      options: ['und', 'oder', 'aber'],
      answer: 1,
      explain: 'entweder is only ever paired with oder.'
    },
    gap: {
      sentence: ['Ich mag sowohl Kaffee ', ' auch Tee.'],
      gaps: [ { answer: 'als', accepts: ['als'] } ],
      explain: 'sowohl is only ever paired with als auch.'
    },
    match: {
      q: 'Match each connector pair to its meaning.',
      pairs: [
        { noun: 'entweder … oder', art: 'Choice' },
        { noun: 'sowohl … als auch', art: 'Both' },
        { noun: 'weder … noch', art: 'Neither' },
        { noun: 'nicht nur … sondern auch', art: 'Addition' },
        { noun: 'zwar … aber', art: 'Contrast' }
      ]
    },
    builder: {
      target: 'Build: "I like neither coffee nor tea."',
      bank: ['Ich', 'mag', 'weder', 'Kaffee', 'noch', 'Tee', '.'],
      answer: ['Ich', 'mag', 'weder', 'Kaffee', 'noch', 'Tee', '.'],
      roles: { 'weder': 'r-connector', 'noch': 'r-connector' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich mag weder Kaffee oder Tee.',
      right: 'Ich mag weder Kaffee noch Tee.',
      explain: 'weder is only ever paired with noch, never oder.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ fahren wir nach Berlin, oder wir bleiben zu Hause."', options: ['Sowohl', 'Entweder', 'Weder'], answer: 1,
      explain: 'entweder pairs with oder for a choice.' },
    { q: 'Complete: "Anna spricht sowohl Deutsch ___ auch Englisch."', options: ['und', 'als', 'oder'], answer: 1,
      explain: 'sowohl pairs with als auch.' },
    { q: 'Which connector expresses that NEITHER option is true?', options: ['sowohl … als auch', 'weder … noch', 'zwar … aber'], answer: 1,
      explain: 'weder...noch means neither is true.' },
    { q: 'Complete: "Das Auto ist ___ teuer, aber zuverlässig."', options: ['zwar', 'sowohl', 'weder'], answer: 0,
      explain: 'zwar pairs with aber for a contrast.' },
    { q: 'Which sentence contains an error?', options: ['Sie spricht nicht nur Deutsch, sondern auch Französisch.', 'Ich mag weder Kaffee oder Tee.', 'Er arbeitet sowohl im Büro als auch von zu Hause.'], answer: 1,
      explain: 'weder pairs with noch, not oder — it should be "weder Kaffee noch Tee."' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-connector', html: 'entweder…oder = choice (only one true). sowohl…als auch = both true. weder…noch = neither true (no extra negation needed).' },
    { c: 'r-connector', html: 'nicht nur…sondern auch = a surprising extra. zwar…aber = concede, then contrast.' },
    { c: 'r-connector', html: 'Each connector is a fixed PAIR — never mix the wrong second half with the first half (no "entweder...und", "sowohl...oder", "weder...oder", "nicht nur...auch" alone, or "zwar...sondern").' }
  ],
  revisionTips: [
    'Whenever you connect two ideas, ask: is this a choice, both, neither, an addition, or a contrast? That answer picks your connector pair.',
    'Practise saying each pair as a fixed unit — never split them apart or swap the second half.',
    'Watch for weder...noch specifically: it already carries the negation, so never add an extra "nicht" in the same clause.'
  ]
};

window.CHAPTER = CHAPTER;
