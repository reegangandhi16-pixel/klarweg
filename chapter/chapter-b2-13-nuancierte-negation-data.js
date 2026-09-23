/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 13
   "Nuancierte Negation" — German offers many negation strengths,
   not just a single "no". Weak: kaum, kaum noch, nicht besonders,
   nicht wirklich. Partial: nicht unbedingt, nicht gerade, längst
   nicht. Strong/formal: keineswegs, keinesfalls, durchaus nicht.
   Builds on Ch11 (Stellung von nicht) and Ch12 (Litotes). Does NOT
   introduce irony, sarcasm, C1 rhetoric, or dialectal negation.
   IMPORTANT: dialogue uses ONLY Frauke and Timo.
   Vocabulary source: uploaded chapter-13 list (34 items, user-edited
   general B2 vocabulary bank — psychology/family/language themes).
============================================================ */
const CHAPTER = {
  id: 'b2-13-nuancierte-negation',
  phase: 'B2 · Phase 1',
  number: 13,
  title: 'Nuancierte Negation',
  titleEn: 'Nuanced negation',
  description: 'Not every "no" is the same strength — from the barely-there "kaum" to the formal wall of "keinesfalls", German gives you a whole scale of negation.',
  xp: 410,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 14, title: 'Goethe Mini Test 1 (Checkpoint)', titleEn: 'Goethe Mini Test 1 (checkpoint)' , href: 'chapter-b2-14-goethe-mini-test-1.html' },

  prevChapter: { number: 12, title: 'Doppelte Verneinung & Litotes', titleEn: 'Double negation & litotes', href: 'chapter-b2-12-doppelte-verneinung-litotes.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Not every <em>"no"</em> is equal.',
    intro: 'At a family-therapy session, Frauke explains her son isn\'t necessarily shy — he just gets overwhelmed quickly — while Timo weighs how strongly to doubt or reassure her, from a bare kaum to the flat wall of keinesfalls.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the full scale from weak ("kaum") to strong formal negation ("keinesfalls")'
    ],
    scene: 'Beim Therapeuten',
    femaleSpeakers: ['Frauke'],
    dialogue: [
      { speaker: 'Frauke', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Sohn', role: 'r-subject', en: 'son', hi: 'बेटा', pron: 'zohn', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'unbedingt', role: 'r-akkusativ', en: 'necessarily', hi: 'ज़रूरी नहीं', pron: 'un-be-DINKT', type: 'Adverb', why: 'nicht unbedingt = not necessarily, nuanced negation (this chapter).', ex: 'Er ist nicht unbedingt schüchtern.', exEn: 'He is not necessarily shy.' },
        { w: 'schüchtern', role: 'r-akkusativ', en: 'shy', hi: 'शर्मीला', pron: 'SHÜKH-tern', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'हो जाता है', pron: 'virt', type: 'Verb · werden' },
        { w: 'schnell', role: 'r-akkusativ', en: 'quickly', hi: 'जल्दी', pron: 'shnel', type: 'Adjective' },
        { w: 'überfordert', role: 'r-akkusativ', en: 'overwhelmed', hi: 'अभिभूत', pron: 'ü-ber-FOR-dert', type: 'Adjective', why: 'überfordert = overwhelmed (this chapter).', ex: 'Er ist überfordert.', exEn: 'He is overwhelmed.' },
        { w: '.', plain: true }
      ], en: 'My son is not necessarily shy, but he quickly gets overwhelmed.', hi: 'Mera beta zaroori nahi ki sharmeela ho, par woh jaldi abhibhoot ho jaata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gar', role: 'r-akkusativ', en: 'at all', hi: 'बिल्कुल', pron: 'gahr', type: 'Adverb', why: 'gar nicht = not at all, nuanced negation (this chapter).', ex: 'Das ist gar nicht verwunderlich.', exEn: 'That is not at all surprising.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'verwunderlich', role: 'r-akkusativ', en: 'surprising', hi: 'आश्चर्यजनक', pron: 'fer-VUN-der-likh', type: 'Adjective', why: 'verwunderlich = surprising (this chapter).', ex: 'Das ist verwunderlich.', exEn: 'That is surprising.' },
        { w: '.', plain: true }
      ], en: 'That is not at all surprising.', hi: 'Yeh bilkul aashcharyajanak nahi hai.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'mir', role: 'r-dativ', en: 'myself', hi: 'ख़ुद के लिए', pron: 'meer', type: 'Reflexive pronoun' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'ganz', role: 'r-akkusativ', en: 'completely', hi: 'पूरी तरह', pron: 'gants', type: 'Adverb', why: 'nicht ganz = not entirely, nuanced negation (this chapter).', ex: 'Ich bin mir nicht ganz sicher.', exEn: 'I am not entirely sure.' },
        { w: 'sicher', role: 'r-akkusativ', en: 'sure', hi: 'निश्चित', pron: 'ZI-kher', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'Therapeuten', role: 'r-akkusativ', en: 'therapist', hi: 'चिकित्सक', pron: 'te-ra-POY-ten', type: 'Noun · masc.', why: 'der Therapeut (this chapter).', ex: 'einen Therapeuten' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'चाहिए', pron: 'BROW-khen', type: 'Verb · brauchen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I am not entirely sure whether we need a therapist.', hi: 'Main poori tarah nishchit nahi hoon ki humein chikitsak chahiye ya nahi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'kann', role: 'r-modalverb', en: 'can', hi: 'सकता हूँ', pron: 'kan', type: 'Modal · können (ich)' },
        { w: 'kaum', role: 'r-akkusativ', en: 'hardly', hi: 'मुश्किल से', pron: 'kowm', type: 'Adverb', why: 'kaum = hardly, weakened negation (this chapter).', ex: 'Ich kann kaum etwas raten.', exEn: 'I can hardly advise anything.' },
        { w: 'etwas', role: 'r-akkusativ', en: 'anything', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'raten', role: 'r-verb', en: 'advise', hi: 'सलाह देना', pron: 'RAH-ten', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'Gespräch', role: 'r-akkusativ', en: 'conversation', hi: 'बातचीत', pron: 'ge-SHPRAYKH', type: 'Noun · neut.' },
        { w: 'schadet', role: 'r-verb', en: 'harms', hi: 'नुकसान करती है', pron: 'SHAH-det', type: 'Verb · schaden' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'I can hardly advise anything, but a conversation does not hurt.', hi: 'Main mushkil se koi salaah de sakta hoon, par baatcheet nuksaan nahi karti.' },
      { speaker: 'Frauke', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'सही', pron: 'hast', type: 'Verb · haben' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'unrecht', role: 'r-akkusativ', en: 'wrong', hi: 'ग़लत', pron: 'UN-rekht', type: 'Adjective', why: 'nicht unrecht haben = to not be wrong, nuanced negation (this chapter).', ex: 'Du hast nicht unrecht.', exEn: 'You are not wrong.' },
        { w: '.', plain: true }
      ], en: 'Yes, you are not wrong.', hi: 'Haan, tum galat nahi ho.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Not every negation has the same strength. <span class="de r-weak">kaum</span> and <span class="de r-weak">nicht wirklich</span> are weak and spoken; <span class="de r-partial">nicht unbedingt</span> and <span class="de r-partial">nicht gerade</span> soften; <span class="de r-strong">keineswegs</span> and <span class="de r-strong">keinesfalls</span> are strong, formal, and absolute. German gives you a whole scale, not just one "no".'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is NUANCIERTE NEGATION (B2 level): German offers a scale of negation strengths, not just neutral "nicht"/"kein". Weak (spoken register): kaum (hardly), kaum noch (hardly any longer), nicht besonders (not particularly), nicht wirklich (not really). Partial/softening: nicht unbedingt (not necessarily), nicht gerade (not exactly), längst nicht (far from — medium/formal). Strong (formal register): keineswegs (by no means), keinesfalls (under no circumstances), durchaus nicht (definitely not). These expressions differ not just in strength but also in register (spoken vs formal). ' +
    'Do NOT expect irony, sarcasm, C1 rhetorical devices, or dialectal negation forms — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Each nuanced negation expression should match its intended strength (weak/partial/strong) and register (spoken/formal) — do not flag a correct but informal choice as wrong.\n' +
    '- Do not flag accidental confusion between "kein" and "nicht" here — that was covered in an earlier chapter; only flag misuse of the nuanced expressions themselves.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Nuance check:</b> one sentence on whether the learner chose negation expressions of the right strength and register for their context.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly choose negation expressions of the right strength and register. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the negation strength scale once, then continue.',
    low: 'Worth another pass through the Grammar section — practise the quick decision guide: how strong does this "no" need to be, and how formal?'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'stimmt', role: 'plain' },
    { w: 'keineswegs', role: 'r-strong' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: German offers a whole scale of negation strengths, not just one "no".' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Frauke and Timo navigate a family therapy session, weighing exactly how strongly to deny each claim.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 34 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the negation strength scale — weak, partial, and strong/formal expressions.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of nuanced negation expressions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify negation strength and speaker attitude in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Disagree politely and give nuanced opinions using the right negation strength.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reviews and opinion texts using nuanced negation appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill negation strength selection, register choice, and meaning comparisons.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 410 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 34 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Negation strength selection, register choice, meaning comparison, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete nuanced negation reference — strength scale, formal vs spoken comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Ich habe kaum Zeit.', text: 'Use weak negation naturally (kaum, nicht wirklich)' },
    { de: 'Der Vorwurf ist nicht unbedingt fair.', text: 'Use partial/softening negation naturally' },
    { de: 'Das stimmt keineswegs.', text: 'Use strong, formal negation naturally' },
    { de: 'Wir sind längst nicht fertig.', text: 'Choose the right negation strength for context' },
    { de: 'nicht → nicht wirklich → kaum → keinesfalls', text: 'Understand the full negation strength scale' }
  ],

  // ---------- Vocabulary (34 items — uploaded chapter-13 list) ----------
  vocab: [
    { de: 'Strandurlaub', art: 'der', gender: 'm', plural: 'Strandurlaube', pos: 'noun', level: 'B2', en: 'beach holiday', hi: 'समुद्र तट की छुट्टी', ex: 'Wir planen einen Strandurlaub im Sommer.', exEn: 'We are planning a beach holiday in summer.', exHi: 'Hum garmiyon mein samudra tat ki chhutti ki yojana bana rahe hain.', ex2: 'Der Strandurlaub war entspannend.', ex2En: 'The beach holiday was relaxing.', ex2Hi: 'Samudra tat ki chhutti aaraam dayak thi.' },
    { de: 'systematisch', pos: 'adjective', level: 'B2', en: 'systematic', hi: 'व्यवस्थित', ex: 'Das klingt systematisch.', exEn: 'That sounds systematic.', exHi: 'Yeh vyavasthit lagta hai.', ex2: 'Er arbeitet sehr systematisch.', ex2En: 'He works very systematically.', ex2Hi: 'Woh bahut vyavasthit tareeke se kaam karta hai.' },
    { de: 'Tagebuch', art: 'das', gender: 'n', plural: 'Tagebücher', pos: 'noun', level: 'B2', en: 'diary', hi: 'दैनिकी', ex: 'Sie schreibt jeden Abend in ihr Tagebuch.', exEn: 'She writes in her diary every evening.', exHi: 'Woh har shaam apni dainiki mein likhti hai.', ex2: 'Das Tagebuch ist sehr persönlich.', ex2En: 'The diary is very personal.', ex2Hi: 'Dainiki bahut niji hai.' },
    { de: 'Talent', art: 'das', gender: 'n', plural: 'Talente', pos: 'noun', level: 'B2', en: 'talent', hi: 'प्रतिभा', ex: 'Sie hat ein großes Talent für Musik.', exEn: 'She has a great talent for music.', exHi: 'Usme sangeet ki bahut pratibha hai.', ex2: 'Talent allein reicht nicht aus.', ex2En: 'Talent alone isn\'t enough.', ex2Hi: 'Sirf pratibha kaafi nahi hai.' },
    { de: 'Teilthema', art: 'das', gender: 'n', plural: 'Teilthemen', pos: 'noun', level: 'B2', en: 'sub-topic', hi: 'उप-विषय', ex: 'Wir sollten das Teilthema wesentlich gründlicher besprechen.', exEn: 'We should discuss the sub-topic substantially more thoroughly.', exHi: 'Humein us up-vishay par kaafi zyada gehraai se charcha karni chahiye.', ex2: 'Jedes Teilthema hat seine eigene Bedeutung.', ex2En: 'Every sub-topic has its own significance.', ex2Hi: 'Har up-vishay ka apna mahatva hai.' },
    { de: 'Telefonist/in', art: 'der/die', gender: 'm/f', plural: 'Telefonisten/Telefonistinnen', pos: 'noun', level: 'B2', en: 'telephone operator', hi: 'टेलीफ़ोन ऑपरेटर', ex: 'Der Telefonist verbindet die Anrufe.', exEn: 'The telephone operator connects the calls.', exHi: 'Telephone operator calls jodta hai.', ex2: 'Sie arbeitet als Telefonistin.', ex2En: 'She works as a telephone operator.', ex2Hi: 'Woh telephone operator ke roop mein kaam karti hai.' },
    { de: 'Therapeut/in', art: 'der/die', gender: 'm/f', plural: 'Therapeuten/Therapeutinnen', pos: 'noun', level: 'B2', en: 'therapist', hi: 'चिकित्सक', ex: 'Der Therapeut meint, wir hätten Erziehungsfragen zu klären.', exEn: 'The therapist thinks we have upbringing questions to clarify.', exHi: 'Chikitsak sochta hai ki humein parvarish ke sawaalon ko spasht karna hai.', ex2: 'Der Therapeut hört sehr aufmerksam zu.', ex2En: 'The therapist listens very attentively.', ex2Hi: 'Chikitsak bahut dhyaan se sunta hai.' },
    { de: 'Türenknallen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'door-slamming', hi: 'दरवाज़ा पटकना', ex: 'Das Türenknallen ist nicht besonders ernst.', exEn: 'The door-slamming isn\'t particularly serious.', exHi: 'Darvaaza patakna khaas taur par gambhir nahi hai.', ex2: 'Das Türenknallen stört die Nachbarn.', ex2En: 'The door-slamming bothers the neighbours.', ex2Hi: 'Darvaaze ka patakna padosiyon ko pareshaan karta hai.' },
    { de: 'überfordern', pos: 'verb', level: 'B2', en: 'to overwhelm, overtax', hi: 'अत्यधिक भारित करना', ex: 'Man darf Kinder keinesfalls überfordern.', exEn: 'One must under no circumstances overwhelm children.', exHi: 'Bacchon ko kisi bhi soorat mein atyadhik bhaarit nahi karna chahiye.', ex2: 'Die Aufgabe hat ihn völlig überfordert.', ex2En: 'The task completely overwhelmed him.', ex2Hi: 'Kaam ne use poori tarah se bhaarit kar diya.', conj: { praesens: 'überfordert', praeteritum: 'überforderte', perfekt: 'hat überfordert' } },
    { de: 'Umgang', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'dealing, interaction', hi: 'व्यवहार', ex: 'Unser Umgang ist nicht gerade harmonisch.', exEn: 'Our interaction isn\'t exactly harmonious.', exHi: 'Hamaara vyavahaar theek-theek saamanjasypoorn nahi hai.', ex2: 'Der Umgang mit Kollegen erfordert Geduld.', ex2En: 'Dealing with colleagues requires patience.', ex2Hi: 'Sahakarmiyon ke saath vyavahaar mein sahansheelta chahiye.' },
    { de: 'unbedingt', pos: 'adjective', level: 'B2', en: 'absolutely, definitely', hi: 'ज़रूरी', ex: 'Der Vorwurf ist nicht unbedingt fair.', exEn: 'The accusation isn\'t necessarily fair.', exHi: 'Aarop zaroori nahi ki uchit ho.', ex2: 'Das musst du unbedingt sehen.', ex2En: 'You absolutely must see this.', ex2Hi: 'Tumhein yeh zaroor dekhna chahiye.' },
    { de: 'ungefragt', pos: 'adjective', level: 'B2', en: 'unasked, unprompted', hi: 'बिन पूछे', ex: 'Er gab ungefragt seine Meinung.', exEn: 'He gave his opinion unprompted.', exHi: 'Usne bina poochhe apni raay di.', ex2: 'Ungefragte Ratschläge sind oft unerwünscht.', ex2En: 'Unprompted advice is often unwelcome.', ex2Hi: 'Bin maange salaah aksar anaavashyak hoti hai.' },
    { de: 'unterfordern', pos: 'verb', level: 'B2', en: 'to under-challenge', hi: 'कम चुनौती देना', ex: 'Man soll Kinder auch nicht unterfordern.', exEn: 'One shouldn\'t under-challenge children either.', exHi: 'Bacchon ko kam chunauti dena bhi nahi chahiye.', ex2: 'Die Aufgabe unterfordert die Schüler.', ex2En: 'The task under-challenges the students.', ex2Hi: 'Kaam vidyaarthiyon ko kam chunauti deta hai.', conj: { praesens: 'unterfordert', praeteritum: 'unterforderte', perfekt: 'hat unterfordert' } },
    { de: 'verschuldet', pos: 'adjective', level: 'B2', en: 'in debt, indebted', hi: 'कर्ज़दार', ex: 'Die Familie ist stark verschuldet.', exEn: 'The family is heavily in debt.', exHi: 'Parivaar bahut karzdaar hai.', ex2: 'Er ist bei der Bank verschuldet.', ex2En: 'He is in debt to the bank.', ex2Hi: 'Woh bank ka karzdaar hai.' },
    { de: 'verwunderlich', pos: 'adjective', level: 'B2', en: 'surprising, astonishing', hi: 'आश्चर्यजनक', ex: 'Das ist verwunderlich.', exEn: 'That is surprising.', exHi: 'Yeh aashcharyajanak hai.', ex2: 'Es ist verwunderlich, wie schnell die Zeit vergeht.', ex2En: 'It\'s astonishing how fast time passes.', ex2Hi: 'Yeh aashcharyajanak hai ki samay kitni tezi se beet jaata hai.' },
    { de: 'Vorwurf', art: 'der', gender: 'm', plural: 'Vorwürfe', pos: 'noun', level: 'B2', en: 'accusation, reproach', hi: 'आरोप', ex: 'Der Vorwurf ist nicht unbedingt fair.', exEn: 'The accusation isn\'t necessarily fair.', exHi: 'Aarop zaroori nahi ki uchit ho.', ex2: 'Sie machte ihm schwere Vorwürfe.', ex2En: 'She made serious accusations against him.', ex2Hi: 'Usne uspar gambhir aarop lagaaye.' },
    { de: 'wahrnehmen', pos: 'verb', level: 'B2', en: 'to perceive, notice', hi: 'महसूस करना', ex: 'Ich nehme die Situation anders wahr.', exEn: 'I perceive the situation differently.', exHi: 'Main sthiti ko alag tarike se mahsoos karta hoon.', ex2: 'Kinder nehmen viel mehr wahr, als wir denken.', ex2En: 'Children perceive much more than we think.', ex2Hi: 'Bacche jitna hum sochte hain usse zyada mahsoos karte hain.', conj: { praesens: 'nimmt wahr', praeteritum: 'nahm wahr', perfekt: 'hat wahrgenommen' } },
    { de: 'Walzer', art: 'der', gender: 'm', plural: 'Walzer', pos: 'noun', level: 'B2', en: 'waltz', hi: 'वाल्ट्ज़', ex: 'Sie tanzen einen Walzer.', exEn: 'They dance a waltz.', exHi: 'Woh waltz nritya karte hain.', ex2: 'Der Walzer klang wunderschön.', ex2En: 'The waltz sounded beautiful.', ex2Hi: 'Waltz bahut sundar lag rahi thi.' },
    { de: 'wesentlich', pos: 'adjective', level: 'B2', en: 'essential, substantial', hi: 'मूल रूप से', ex: 'Wir sollten das Teilthema wesentlich gründlicher besprechen.', exEn: 'We should discuss the sub-topic substantially more thoroughly.', exHi: 'Humein us up-vishay par kaafi zyada gehraai se charcha karni chahiye.', ex2: 'Das ist ein wesentlicher Unterschied.', ex2En: 'That is an essential difference.', ex2Hi: 'Yeh ek mool antar hai.' },
    { de: 'witzig', pos: 'adjective', level: 'B2', en: 'funny, witty', hi: 'मज़ाकिया', ex: 'Er ist wirklich witzig.', exEn: 'He is really funny.', exHi: 'Woh sach mein mazaakiya hai.', ex2: 'Das war ein witziger Kommentar.', ex2En: 'That was a witty comment.', ex2Hi: 'Yeh ek mazaakiya tippani thi.' },
    { de: 'Zugabe', art: 'die', gender: 'f', plural: 'Zugaben', pos: 'noun', level: 'B2', en: 'encore, addition', hi: 'अतिरिक्त प्रस्तुति', ex: 'Das Publikum forderte eine Zugabe.', exEn: 'The audience demanded an encore.', exHi: 'Darshakon ne ek atirikt prastuti ki maang ki.', ex2: 'Die Zugabe war der Höhepunkt des Abends.', ex2En: 'The encore was the highlight of the evening.', ex2Hi: 'Atirikt prastuti shaam ka sabse khaas pal thi.' },
    { de: 'zurückkehren', pos: 'verb', level: 'B2', en: 'to return, come back', hi: 'वापस आना', ex: 'Er kehrt morgen aus dem Urlaub zurück.', exEn: 'He returns from vacation tomorrow.', exHi: 'Woh kal chhutti se vaapas aata hai.', ex2: 'Sie ist nie zurückgekehrt.', ex2En: 'She never returned.', ex2Hi: 'Woh kabhi vaapas nahi aayi.', conj: { praesens: 'kehrt zurück', praeteritum: 'kehrte zurück', perfekt: 'ist zurückgekehrt' } },
    { de: 'zusammengehören', pos: 'verb', level: 'B2', en: 'to belong together', hi: 'एक साथ होना', ex: 'Diese beiden Teile gehören zusammen.', exEn: 'These two parts belong together.', exHi: 'Yeh dono hisse ek saath hain.', ex2: 'Wir gehören einfach zusammen.', ex2En: 'We simply belong together.', ex2Hi: 'Hum bas ek saath hain.', conj: { praesens: 'gehört zusammen', praeteritum: 'gehörte zusammen', perfekt: 'hat zusammengehört' } },
    { de: 'zweisprachig', pos: 'adjective', level: 'B2', en: 'bilingual', hi: 'द्विभाषी', ex: 'Die Kinder werden zweisprachig erzogen.', exEn: 'The children are raised bilingually.', exHi: 'Bacchon ko dwibhaashi tarike se paala jaata hai.', ex2: 'Sie arbeitet in einer zweisprachigen Schule.', ex2En: 'She works at a bilingual school.', ex2Hi: 'Woh ek dwibhaashi school mein kaam karti hai.' },
    { de: 'Bibliothekar/in', art: 'der/die', gender: 'm/f', plural: 'Bibliothekare/Bibliothekarinnen', pos: 'noun', level: 'B2', en: 'librarian', hi: 'पुस्तकालयाध्यक्ष', ex: 'Der Bibliothekar hilft bei der Suche.', exEn: 'The librarian helps with the search.', exHi: 'Pustakalayaadhyaksh khoj mein madad karta hai.', ex2: 'Die Bibliothekarin kennt jedes Buch.', ex2En: 'The librarian knows every book.', ex2Hi: 'Pustakalayaadhyaksh har kitaab ko jaanti hai.' },
    { de: 'Erziehungsfragen', art: 'die', gender: 'f', plural: '(nur Plural)', pos: 'noun', level: 'B2', en: 'upbringing questions', hi: 'परवरिश के सवाल', ex: 'Der Therapeut meint, wir hätten Erziehungsfragen zu klären.', exEn: 'The therapist thinks we have upbringing questions to clarify.', exHi: 'Chikitsak sochta hai ki humein parvarish ke sawaalon ko spasht karna hai.', ex2: 'Erziehungsfragen sind oft kompliziert.', ex2En: 'Upbringing questions are often complicated.', ex2Hi: 'Parvarish ke sawaal aksar jatil hote hain.' },
    { de: 'Gebärdensprache', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'sign language', hi: 'सांकेतिक भाषा', ex: 'Sie lernt Gebärdensprache.', exEn: 'She is learning sign language.', exHi: 'Woh saanketik bhaasha seekh rahi hai.', ex2: 'Gebärdensprache ist eine vollwertige Sprache.', ex2En: 'Sign language is a fully-fledged language.', ex2Hi: 'Saanketik bhaasha ek sampoorn bhaasha hai.' },
    { de: 'Gepäckermittler/in', art: 'der/die', gender: 'm/f', plural: 'Gepäckermittler/innen', pos: 'noun', level: 'B2', en: 'baggage tracer', hi: 'सामान खोजकर्ता', ex: 'Der Gepäckermittler findet verlorene Koffer.', exEn: 'The baggage tracer finds lost suitcases.', exHi: 'Saamaan khojkarta khoye hue suitcase dhundhta hai.', ex2: 'Sie arbeitet als Gepäckermittlerin am Flughafen.', ex2En: 'She works as a baggage tracer at the airport.', ex2Hi: 'Woh airport par saamaan khojkarta ke roop mein kaam karti hai.' },
    { de: 'Psychologe/Psychologin', art: 'der/die', gender: 'm/f', plural: 'Psychologen/Psychologinnen', pos: 'noun', level: 'B2', en: 'psychologist', hi: 'मनोवैज्ञानिक', ex: 'Der Psychologe sagt, man darf Kinder keinesfalls überfordern.', exEn: 'The psychologist says one must under no circumstances overwhelm children.', exHi: 'Manovaigyaanik kehta hai ki bacchon ko kisi bhi soorat mein atyadhik bhaarit nahi karna chahiye.', ex2: 'Die Psychologin hört geduldig zu.', ex2En: 'The psychologist listens patiently.', ex2Hi: 'Manovaigyaanik dhyaan se sunti hai.' },
    { de: 'Sprachenpolitik', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'language policy', hi: 'भाषा नीति', ex: 'Die Sprachenpolitik der EU ist komplex.', exEn: 'The EU\'s language policy is complex.', exHi: 'EU ki bhaasha neeti jatil hai.', ex2: 'Sie forscht zur Sprachenpolitik in Europa.', ex2En: 'She researches language policy in Europe.', ex2Hi: 'Woh Europe mein bhaasha neeti par shodh karti hai.' },
    { de: 'Stellvertreter/in', art: 'der/die', gender: 'm/f', plural: 'Stellvertreter/innen', pos: 'noun', level: 'B2', en: 'deputy, representative', hi: 'प्रतिनिधि', ex: 'Der Stellvertreter übernimmt die Leitung.', exEn: 'The deputy takes over the leadership.', exHi: 'Pratinidhi netritva sambhaalta hai.', ex2: 'Sie ist die Stellvertreterin des Direktors.', ex2En: 'She is the director\'s deputy.', ex2Hi: 'Woh director ki pratinidhi hai.' },
    { de: 'Trendforscher/in', art: 'der/die', gender: 'm/f', plural: 'Trendforscher/innen', pos: 'noun', level: 'B2', en: 'trend researcher', hi: 'रुझान शोधकर्ता', ex: 'Der Trendforscher analysiert neue Entwicklungen.', exEn: 'The trend researcher analyzes new developments.', exHi: 'Rujhaan shodhkarta nayi vikaas ka vishleshan karta hai.', ex2: 'Die Trendforscherin sprach über Zukunftstechnologien.', ex2En: 'The trend researcher spoke about future technologies.', ex2Hi: 'Rujhaan shodhkarta ne bhavishya ki takneek ke baare mein baat ki.' },
    { de: 'Wahrnehmungsbereich', art: 'der', gender: 'm', plural: 'Wahrnehmungsbereiche', pos: 'noun', level: 'B2', en: 'range of perception', hi: 'बोध क्षेत्र', ex: 'Das liegt außerhalb meines Wahrnehmungsbereichs.', exEn: 'That lies outside my range of perception.', exHi: 'Yeh mere bodh kshetra se baahar hai.', ex2: 'Der Wahrnehmungsbereich variiert von Person zu Person.', ex2En: 'The range of perception varies from person to person.', ex2Hi: 'Bodh kshetra vyakti se vyakti mein badalta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Nuancierte Negation?',
      body: [ 'Not every negative sentence has the same strength. Compare these three sentences on a scale.' ],
      table: {
        head: ['Sentence', 'Strength'],
        rows: [
          ['<span class="de">Ich kenne ihn nicht.</span>', 'Neutral'],
          ['<span class="de">Ich kenne ihn kaum.</span>', 'Almost not'],
          ['<span class="de">Ich kenne ihn keineswegs.</span>', 'Definitely not']
        ]
      },
      hinglish: 'Har negative sentence ki strength ek jaisi nahi hoti. In teen sentences ko ek scale par rakh kar dekho \u2014 teeno "nahi" keh rahe hain, par zor alag-alag hai.'
    },
    {
      title: 'Schwache Negation (Weak, spoken)',
      body: [ 'These weak expressions are common in spoken, everyday German.' ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['kaum', 'hardly'],
          ['kaum noch', 'hardly any longer'],
          ['nicht besonders', 'not particularly'],
          ['nicht wirklich', 'not really']
        ]
      },
      hinglish: 'Yeh halke wale expressions rozmarra ki bolchaal mein sabse zyada aate hain. Inka matlab poora "nahi" nahi hota \u2014 thoda scope bacha rehta hai.'
    },
    {
      title: 'Partielle Negation (Softening)',
      body: [ 'These expressions soften a statement rather than fully denying it.' ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['nicht unbedingt', 'not necessarily'],
          ['nicht gerade', 'not exactly'],
          ['längst nicht', 'far from (medium/formal)']
        ]
      },
      hinglish: 'Yeh expressions baat ko poori tarah kaatte nahi, sirf narm kar dete hain \u2014 isliye discussion mein yeh bahut kaam aate hain.'
    },
    {
      title: 'Starke Negation (Strong, formal)',
      body: [ 'These strong, formal expressions are common in newspapers, discussions, and presentations.' ],
      table: {
        head: ['Expression', 'Meaning'],
        rows: [
          ['keineswegs', 'by no means'],
          ['keinesfalls', 'under no circumstances'],
          ['durchaus nicht', 'definitely not']
        ]
      },
      hinglish: 'Yeh strong aur formal expressions newspapers, discussions aur presentations mein aate hain. Bolchaal mein inhe use karo to baat kaafi bhaari lagti hai.'
    },
    {
      title: 'Die Bedeutungsskala',
      body: [ 'Read the scale from the mildest to the most emphatic. Two different things are happening on it: <b>nicht wirklich, nicht besonders</b> and <b>kaum</b> are PARTIAL \u2014 a little bit is still true (<span class="de">Ich kenne ihn kaum</span> means you do know him slightly). <b>nicht</b> is the plain, COMPLETE negation. And <b>l\u00e4ngst nicht, durchaus nicht, keineswegs, keinesfalls</b> are complete negations with extra emphasis added.' ],
      table: {
        head: ['Scale (weak → strong)'],
        rows: [
          ['nicht wirklich → nicht besonders → kaum → <b>nicht</b> → längst nicht → durchaus nicht → keineswegs → keinesfalls']
        ]
      },
      hinglish: 'Scale ko halke se sabse strong tak padho. Yahan do alag cheezein ho rahi hain. <b>nicht wirklich, nicht besonders</b> aur <b>kaum</b> partial hote hain \u2014 matlab thoda bahut sach rehta hai (<span class="de">Ich kenne ihn kaum</span> ka matlab hai ki thoda toh jaante ho). <b>nicht</b> seedha aur poora negation hai. Aur <b>l\u00e4ngst nicht, durchaus nicht, keineswegs, keinesfalls</b> poora negation hain, bas usme extra zor lag jaata hai.'
    },
    {
      title: 'Formell vs. Gesprochen',
      body: [ 'Choose the right register — spoken expressions in casual conversation, formal ones in writing and presentations.' ],
      table: {
        head: ['Spoken German', 'Formal German'],
        rows: [
          ['nicht wirklich, nicht besonders, kaum', 'keineswegs, keinesfalls, durchaus nicht, längst nicht']
        ]
      },
      hinglish: 'Register ka dhyaan rakho \u2014 casual baat mein spoken wale expressions, aur writing ya presentation mein formal wale.'
    },
    {
      title: 'Nuance-Vergleich',
      body: [ 'The same base statement changes meaning dramatically depending on which negation you choose.' ],
      table: {
        head: ['Sentence', 'Meaning'],
        rows: [
          ['<span class="de">Das ist nicht gut.</span>', 'neutral'],
          ['<span class="de">Das ist nicht besonders gut.</span>', 'slightly negative'],
          ['<span class="de">Das ist kaum gut.</span>', 'hardly good \u2014 barely acceptable'],
          ['<span class="de">Das ist keineswegs gut.</span>', 'strong rejection']
        ]
      },
      hinglish: 'Base sentence wahi hai, bas negation badal rahi hai \u2014 aur matlab kaafi badal jaata hai. Isliye sirf "nicht" par atakna nahi chahiye.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from stacking a nuanced expression with an extra "nicht", or picking the wrong strength for the intended meaning.' ],
      mistakes: [
        { wrong: 'Ich habe kaum nicht Zeit.', right: 'Ich habe kaum Zeit.', why: '"kaum" is already a complete negation-like expression — never add "nicht" alongside it.' },
        { wrong: 'Das ist keinesfalls gut nicht.', right: 'Das ist keinesfalls gut.', why: '"keinesfalls" alone carries the full negative force — a second "nicht" is redundant and wrong.' },
        { wrong: 'Ich habe kaum keine Zeit.', right: 'Ich habe kaum Zeit.', why: '"kaum" already carries the near-negative meaning, so it can never be combined with "kein" \u2014 that makes the sentence ungrammatical.' },
        { wrong: 'Das ist nicht keineswegs richtig.', right: 'Das ist keineswegs richtig.', why: '"keineswegs" already means "by no means" — do not add a separate "nicht" before it.' },
        { wrong: 'Sie hat kaum nichts gesagt.', right: 'Sie hat kaum etwas gesagt.', why: 'Because "kaum" is already near-negative, it pairs with "etwas", not "nichts" \u2014 "kaum nichts" is a double negative.' }
      ],
      hinglish: 'Yeh galtiyan aksar isliye hoti hain ki jo expression khud hi negative hai, uske saath ek aur negative jod diya jaata hai. Ek baat clear rakho \u2014 <span class="de">Ich bin keineswegs m\u00fcde</span> galat nahi hai, woh bas strong negation hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'These nuanced negation expressions appear frequently in Goethe B2 discussions, newspaper opinion pieces, and formal presentations.' ],
      note: 'Memory trick: simple negative? → nicht. Softer opinion? → nicht wirklich / nicht besonders. "Hardly"? → kaum. Strong formal disagreement? → keineswegs / keinesfalls.',
      hinglish: 'Yeh expressions Goethe B2 ki discussions, newspaper opinion pieces aur formal presentations mein aksar aate hain \u2014 aur inhe pehchaanna listening mein sabse zyada kaam aata hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Tagebucheintrag: Mein Weg zur Gebärdensprache',
    titleEn: 'Diary entry: my path to sign language',
    tokens: [
      { w: 'Liebes', role: 'plain', en: 'dear', hi: 'प्रिय', type: 'Adjective' },
      { w: 'Tagebuch', role: 'plain', en: 'diary', hi: 'डायरी', type: 'Noun · neut.', why: 'das Tagebuch (this chapter).' },
      { w: ',', plain: true },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'hatte', role: 'plain', en: 'had', hi: 'था', type: 'Verb · haben' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'meinen', role: 'plain', en: 'my', hi: 'अपना', type: 'Possessivartikel' },
      { w: 'ersten', role: 'plain', en: 'first', hi: 'पहला', type: 'Adjective' },
      { w: 'Termin', role: 'plain', en: 'appointment', hi: 'मुलाक़ात', type: 'Noun · masc.' },
      { w: 'bei', role: 'plain', en: 'with', hi: 'के साथ', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Psychologin', role: 'plain', en: 'psychologist (f.)', hi: 'मनोवैज्ञानिक', type: 'Noun · fem.', why: 'der/die Psychologe/Psychologin (this chapter).' },
      { w: '.', plain: true },
      { w: 'Nicht', role: 'r-negation', en: 'not (Teilnegation)', hi: 'नहीं (आंशिक निषेध)', type: 'Teilnegation (nuanciert)', why: '"Nicht die Psychologin" negates only the noun phrase, not the whole sentence — a nuanced, partial negation (this chapter).' },
      { w: 'die', role: 'r-negation', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Psychologin', role: 'r-negation', en: 'psychologist', hi: 'मनोवैज्ञानिक', type: 'Noun · fem.' },
      { w: 'selbst', role: 'plain', en: 'herself', hi: 'ख़ुद', type: 'Pronoun' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'mich', role: 'plain', en: 'me', hi: 'मुझे', type: 'Pronoun · Akk.' },
      { w: 'überzeugt', role: 'plain', en: 'convinced (Satzende)', hi: 'क़ायल किया (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'plain', en: 'but rather', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'ihre', role: 'plain', en: 'her', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Gebärdensprache', role: 'plain', en: 'sign language (Satzende)', hi: 'सांकेतिक भाषा (Satzende)', type: 'Noun · fem.', why: 'die Gebärdensprache (this chapter).' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'bin', role: 'plain', en: 'am', hi: 'हूँ', type: 'Verb · sein' },
      { w: 'zwar', role: 'r-negation', en: 'admittedly (nuancierte Konzession)', hi: 'हालांकि (nuancierte Konzession)', type: 'Adverb · zwar … aber', why: '"zwar … aber" concedes a point while still contradicting it — a nuanced way to soften disagreement (this chapter).' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'zweisprachig', role: 'plain', en: 'bilingual (Satzende)', hi: 'द्विभाषी (Satzende)', type: 'Adjective', why: 'zweisprachig (this chapter).' },
      { w: 'aufgewachsen', role: 'plain', en: 'raised (Satzende)', hi: 'बड़ी हुई (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'lerne', role: 'plain', en: 'am learning', hi: 'सीख रही हूँ', type: 'Verb · lernen' },
      { w: 'seit', role: 'plain', en: 'since', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einem', role: 'plain', en: 'a (neut. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'Monat', role: 'plain', en: 'month (Satzende)', hi: 'महीने (Satzende)', type: 'Noun · masc.' },
      { w: 'begeistert', role: 'plain', en: 'enthusiastically (Satzende)', hi: 'उत्साह से (Satzende)', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Meine', role: 'plain', en: 'my', hi: 'मेरी', type: 'Possessivartikel' },
      { w: 'Therapeutin', role: 'plain', en: 'therapist (f.)', hi: 'चिकित्सक', type: 'Noun · fem.', why: 'der/die Therapeut/in (this chapter).' },
      { w: 'meint', role: 'plain', en: 'thinks', hi: 'मानती है', type: 'Verb · meinen' },
      { w: ',', plain: true },
      { w: 'kein', role: 'r-negation', en: 'no (Nominalnegation)', hi: 'कोई नहीं (संज्ञा-निषेध)', type: 'Negationsartikel · kein', why: '"kein Wunder" negates only the noun (Wunder), giving a precise, nuanced statement rather than negating the whole clause with nicht (this chapter).' },
      { w: 'Wunder', role: 'r-negation', en: 'wonder (Satzende)', hi: 'आश्चर्य (Satzende)', type: 'Noun · neut.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'mir', role: 'plain', en: 'to me', hi: 'मुझे', type: 'Pronoun · Dat.' },
      { w: 'das', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Fingeralphabet', role: 'plain', en: 'finger alphabet', hi: 'अंगुली वर्णमाला', type: 'Noun · neut.' },
      { w: 'anfangs', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb' },
      { w: 'schwerfällt', role: 'plain', en: 'is difficult (Satzende)', hi: 'कठिन लगता है (Satzende)', type: 'Verb · schwerfallen (Nebensatz, Satzende)', why: 'schwerfallen (this chapter).' },
      { w: '.', plain: true },
      { w: 'Keineswegs', role: 'r-negation', en: 'by no means', hi: 'किसी भी तरह से नहीं', type: 'Adverb · Negation (nuanciert)', why: '"keineswegs unlogisch" — precise, emphatic negation of just the adjective, stronger and more nuanced than a plain nicht (this chapter).' },
      { w: 'unlogisch', role: 'r-negation', en: 'illogical', hi: 'अतार्किक', type: 'Adjective' },
      { w: 'findet', role: 'plain', en: 'finds', hi: 'मानती है', type: 'Verb · finden' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'meinen', role: 'plain', en: 'my', hi: 'मेरी', type: 'Possessivartikel' },
      { w: 'Wunsch', role: 'plain', en: 'wish (Satzende)', hi: 'इच्छा (Satzende)', type: 'Noun · masc.' },
      { w: ',', plain: true },
      { w: 'irgendwann', role: 'plain', en: 'someday', hi: 'किसी दिन', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as an', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Bibliothekarin', role: 'plain', en: 'librarian (f.)', hi: 'ग्रंथपाल', type: 'Noun · fem.', why: 'der/die Bibliothekar/in (this chapter).' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'plain', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'zweisprachigen', role: 'plain', en: 'bilingual', hi: 'द्विभाषी', type: 'Adjective' },
      { w: 'Bücherei', role: 'plain', en: 'library (Satzende)', hi: 'पुस्तकालय (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'to', hi: '', type: 'zu-Partikel' },
      { w: 'arbeiten', role: 'plain', en: 'work (Satzende)', hi: 'काम करना (Satzende)', type: 'Verb · Infinitiv (Satzende)' },
      { w: '.', plain: true },
      { w: 'Noch', role: 'plain', en: 'still', hi: 'अभी', type: 'Adverb' },
      { w: 'bin', role: 'plain', en: 'am', hi: 'हूँ', type: 'Verb · sein' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'keineswegs', role: 'r-negation', en: 'by no means', hi: 'बिल्कुल नहीं', type: 'Negation · nuanced', why: 'keineswegs = stronger, more formal than nicht (this chapter).' },
      { w: 'perfekt', role: 'plain', en: 'perfect', hi: 'सम्पूर्ण', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'aber', role: 'plain', en: 'but', hi: 'लेकिन', type: 'Conjunction' },
      { w: 'ich', role: 'plain', en: 'I', hi: 'मैं', type: 'Pronoun' },
      { w: 'bereue', role: 'plain', en: 'regret', hi: 'पछताती हूँ', type: 'Verb · bereuen' },
      { w: 'meine', role: 'plain', en: 'my', hi: 'अपना', type: 'Possessivartikel' },
      { w: 'Entscheidung', role: 'plain', en: 'decision', hi: 'फ़ैसला', type: 'Noun · fem.' },
      { w: 'kein', role: 'r-negation', en: 'not a', hi: 'बिल्कुल नहीं', type: 'Negation · nuanced', why: '"kein bisschen" = not a bit — a nuanced, idiomatic negation (this chapter).' },
      { w: 'bisschen', role: 'plain', en: 'bit (Satzende)', hi: 'ज़रा भी (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true }
    ],
    translation: 'Dear diary, today I had my first appointment with a psychologist. It was not the psychologist herself who convinced me, but rather her sign language. I admittedly did not grow up bilingual, but I have been learning enthusiastically for a month. My therapist thinks it is no wonder that the finger alphabet is initially difficult for me. She finds my wish to one day work as a librarian in a bilingual library by no means illogical. I am by no means perfect yet, but I don\u2019t regret my decision one bit.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_013_L001', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, mein Sohn ist nicht unbedingt schüchtern, er ist einfach schnell überfordert.', en: 'Timo, my son isn\'t necessarily shy, he just gets overwhelmed quickly.' },
      { id: 'B2_013_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Verstehe. Reagiert er dann gar nicht mehr, oder zieht er sich nur kurz zurück?', en: 'I see. Does he stop reacting entirely, or does he just withdraw briefly?' },
      { id: 'B2_013_L003', speaker: 'Frauke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Er zieht sich nie ganz zurück, aber er braucht eben etwas mehr Zeit als andere.', en: 'He never withdraws completely, but he just needs a bit more time than others.' },
      { id: 'B2_013_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das klingt keinesfalls ungewöhnlich, viele Kinder sind so.', en: 'That sounds by no means unusual, many children are like that.' }
    ],
    transcript: 'Timo, mein Sohn ist nicht unbedingt schüchtern, er ist einfach schnell überfordert. Verstehe. Reagiert er dann gar nicht mehr, oder zieht er sich nur kurz zurück? Er zieht sich nie ganz zurück, aber er braucht eben etwas mehr Zeit als andere. Das klingt keinesfalls ungewöhnlich, viele Kinder sind so.',
    translation: 'Timo, my son isn\'t necessarily shy, he just gets overwhelmed quickly. I see. Does he stop reacting entirely, or does he just withdraw briefly? He never withdraws completely, but he just needs a bit more time than others. That sounds by no means unusual, many children are like that.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'mein' },
      { w: 'Sohn' },
      { w: 'ist' },
      { w: 'nicht' },
      { w: 'unbedingt' },
      { w: 'schüchtern' },
      { w: ',', plain: true },
      { w: 'er' },
      { w: 'ist' },
      { w: 'einfach' },
      { w: 'schnell' },
      { w: 'überfordert' },
      { w: '.', plain: true },
      { w: 'Verstehe' },
      { w: '.', plain: true },
      { w: 'Reagiert' },
      { w: 'er' },
      { w: 'dann' },
      { w: 'gar' },
      { w: 'nicht' },
      { w: 'mehr' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: 'zieht' },
      { w: 'er' },
      { w: 'sich' },
      { w: 'nur' },
      { w: 'kurz' },
      { w: 'zurück' },
      { w: '?', plain: true },
      { w: 'Er' },
      { w: 'zieht' },
      { w: 'sich' },
      { w: 'nie' },
      { w: 'ganz' },
      { w: 'zurück' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'er' },
      { w: 'braucht' },
      { w: 'eben' },
      { w: 'etwas' },
      { w: 'mehr' },
      { w: 'Zeit' },
      { w: 'als' },
      { w: 'andere' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'klingt' },
      { w: 'keinesfalls' },
      { w: 'ungewöhnlich' },
      { w: ',', plain: true },
      { w: 'viele' },
      { w: 'Kinder' },
      { w: 'sind' },
      { w: 'so' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was sagt Frauke über ihren Sohn?', qEn: 'What does Frauke say about her son?', options: ['Er ist sehr schüchtern.', 'Er wird schnell überfordert.', 'Er ist nie ruhig.', 'Er mag niemanden.'], optionsEn: ['He is very shy.', 'He gets overwhelmed quickly.', 'He is never quiet.', 'He doesn\'t like anyone.'], answer: 1,
        explain: '"Er ist einfach schnell überfordert."' },
      { q: 'Zieht er sich jemals ganz zurück?', qEn: 'Does he ever completely withdraw?', options: ['Ja, oft', 'Nein, nie ganz', 'Nur am Wochenende', 'Immer'], optionsEn: ['Yes, often', 'No, never entirely', 'only at the weekend', 'Always'], answer: 1,
        explain: '"Er zieht sich nie ganz zurück."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Eine Freundin fragt, ob dein Sohn schüchtern ist.", taskEn: "A friend asks whether your son is shy.", de: "Er ist nicht unbedingt schüchtern, er ist einfach schnell überfordert.", en: "He isn't necessarily shy, he just gets overwhelmed quickly." },
    { task: "Sie fragt, ob er dann gar nicht mehr reagiert.", taskEn: "She asks whether he then stops reacting altogether.", de: "Er reagiert nicht gar nicht, er zieht sich nur kurz zurück.", en: "It's not that he stops reacting, he just withdraws briefly." },
    { task: "Ein Kollege fragt, ob der Vorwurf stimmt.", taskEn: "A colleague asks whether the accusation is true.", de: "Das ist nicht ganz falsch, aber auch nicht wesentlich.", en: "That's not entirely wrong, but it's not essential either." },
    { task: "Deine Chefin fragt, ob du den Umgang witzig fandest.", taskEn: "Your boss asks whether you found the manner funny.", de: "Ich fand es nicht besonders witzig, aber auch nicht verwunderlich.", en: "I didn't find it particularly funny, but not surprising either." },
    { task: "Ein Bekannter fragt, ob der Strandurlaub gut war.", taskEn: "An acquaintance asks whether the beach holiday was good.", de: "Er war nicht schlecht, nur nicht sehr erholsam.", en: "It wasn't bad, just not very restful." },
    { task: "Rollenspiel: Ihr widersprecht höflich in der Beratung.", taskEn: "Role-play: you disagree politely in the consultation.", de: "Ich sehe das nicht ganz so. — Das ist nicht unbedingt ein Talent, sondern Übung.", en: "I don't quite see it that way. — That isn't necessarily talent, it's practice." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short opinion text or review (six to eight sentences) about a topic of your choice — using at least one weak negation (kaum, nicht wirklich, nicht besonders), one partial negation (nicht unbedingt, nicht gerade, längst nicht), and one strong formal negation (keineswegs, keinesfalls, durchaus nicht).',
    starters: ['Ich bin nicht wirklich …', 'Das ist nicht unbedingt …', 'Das stimmt keineswegs …', 'Wir sind längst nicht …'],
    placeholder: 'Der Vorschlag ist nicht besonders überzeugend. Ich bin keineswegs …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which expression is the STRONGEST negation?',
      options: ['keinesfalls', 'nicht wirklich', 'kaum'],
      answer: 0,
      explain: '"keinesfalls" (under no circumstances) is the strongest, most formal negation in this set.'
    },
    gap: {
      sentence: ['Das stimmt ', '.'],
      gaps: [ { answer: 'keineswegs', accepts: ['keineswegs'] } ],
      explain: '"keineswegs" is a strong, formal negation meaning "by no means".'
    },
    match: {
      q: 'Match each expression to its strength.',
      pairs: [
        { noun: 'kaum', art: 'schwach' },
        { noun: 'nicht unbedingt', art: 'partiell' },
        { noun: 'keineswegs', art: 'stark' },
        { noun: 'nicht wirklich', art: 'schwach' }
      ]
    },
    builder: {
      target: 'Build (weak negation): "I hardly have time."',
      bank: ['Ich', 'habe', 'kaum', 'Zeit', '.'],
      answer: ['Ich', 'habe', 'kaum', 'Zeit', '.'],
      roles: { 'kaum': 'r-weak' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich habe kaum nicht Zeit.',
      right: 'Ich habe kaum Zeit.',
      explain: '"kaum" is already a complete negation-like expression — never add "nicht" alongside it.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which expression means "hardly"?', options: ['kaum', 'keinesfalls', 'durchaus nicht'], answer: 0,
      explain: '"kaum" is a weak negation meaning "hardly/barely".' },
    { q: 'Which register is "keineswegs" typically used in?', options: ['Formal', 'Very casual slang', 'Baby talk'], answer: 0,
      explain: '"keineswegs" is a strong, formal expression — common in newspapers and presentations.' },
    { q: 'What does "nicht unbedingt" mean?', options: ['Not necessarily', 'Absolutely not', 'Never'], answer: 0,
      explain: '"nicht unbedingt" is a partial, softening negation — "not necessarily".' },
    { q: 'Which sentence contains an error?', options: ['Er spricht kaum Deutsch.', 'Er spricht kaum nicht Deutsch.', 'Wir sind längst nicht fertig.'], answer: 1,
      explain: '"kaum" alone expresses "hardly" — combining it with "nicht" creates incorrect double negation.' },
    { q: 'Order these from weakest to strongest negation: nicht, keineswegs, kaum.', options: ['nicht → kaum → keineswegs', 'keineswegs → kaum → nicht', 'kaum → nicht → keineswegs'], answer: 0,
      explain: 'The strength scale runs from neutral "nicht" through "kaum" up to the strong, formal "keineswegs".' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-weak', html: 'Weak, spoken negation (kaum, kaum noch, nicht besonders, nicht wirklich) softens a statement in casual conversation.' },
    { c: 'r-partial', html: 'Partial negation (nicht unbedingt, nicht gerade, längst nicht) hedges or softens without fully denying.' },
    { c: 'r-strong', html: 'Strong, formal negation (keineswegs, keinesfalls, durchaus nicht) firmly rejects a statement — common in formal writing and discussions.' }
  ],
  revisionTips: [
    'Before choosing a negation expression, ask: how strong should this "no" be, and how formal is the situation?',
    'Practise rewriting a neutral "nicht" sentence at three different strengths — weak, partial, and strong.',
    'Notice which negation expressions appear in Goethe B2 newspaper articles versus casual dialogue — build a register sense.'
  ]
};

window.CHAPTER = CHAPTER;
