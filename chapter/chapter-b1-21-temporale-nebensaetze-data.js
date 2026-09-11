/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 21
   "Temporale Nebensätze" — deepened use of als (one past event),
   wenn (repeated/future), bevor (before), nachdem (after,
   paired with Plusquamperfekt), während (simultaneous). Does
   NOT introduce seitdem, sobald, ehe, solange, bis, kaum, indem.
   IMPORTANT: dialogue uses ONLY Runa and Timo (two-voice audio
   system) — no Max, no Frau Weber.
   Vocabulary source: uploaded chapter-21 list (28 items) — a
   conflict-resolution/communication theme (Streitgespräch,
   Ich-Aussage, sich einigen, diplomatisch, nachgeben…), an
   excellent natural fit for narrating "when/before/after/while"
   an argument happened — woven into the story and reading.
   NOTE: seit and seitdem appear in the vocab list as translation
   items only (per upload) but are explicitly NOT taught as new
   grammar this chapter — flagged in vocab as recognise-only.
   NOTE: content only — existing audio engine, no new assets.
============================================================ */
const CHAPTER = {
  id: 'b1-21-temporale-nebensaetze',
  phase: 'B1 · Phase 1',
  number: 21,
  title: 'Temporale Nebensätze',
  titleEn: 'Temporal subordinate clauses',
  description: 'Als ich klein war, … Wenn ich Zeit habe, … Bevor ich schlafe, … Nachdem ich gegessen hatte, … Während wir aßen, … Five ways to answer "when?" — each one answers a slightly different question about time.',
  xp: 270,
  time: 50,
  difficulty: 'Intermediate',
  nextChapter: { number: 22, title: 'brauchen + zu + Infinitiv', titleEn: 'Expressing "don\'t need to"' , href: 'chapter-b1-22-brauchen-zu-infinitiv.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Two voices, <em>five ways to say "when."</em>',
    intro: 'Runa and Timo work through a small disagreement about noise and headphones — since she moved in, before he speaks, while she sleeps — using all five ways German answers "when?": als, wenn, bevor, nachdem, während.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear als, wenn, bevor, nachdem, and während chosen correctly based on timing'
    ],
    scene: 'Nach einem kleinen Streit',
    femaleSpeakers: ['Runa'],
    dialogue: [
      { speaker: 'Runa', tokens: [
        { w: 'Seitdem', role: 'r-conjunction', en: 'since', hi: 'जब से', pron: 'ZYT-daym', type: 'Conjunction · seitdem', why: 'seitdem = ever since, this chapter.', ex: 'Seitdem du hier wohnst, ist es lauter.', exEn: 'Since you live here, it is louder.' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'wohnst', role: 'r-verb', en: 'live', hi: 'रहते हो', pron: 'VOHNST', type: 'Verb · wohnen (du)' },
        { w: ',', plain: true },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'lauter', role: 'r-subject', en: 'louder', hi: 'ज़्यादा शोरगुल', pron: 'LOW-ter', type: 'Adjective · Komparativ' },
        { w: 'geworden', role: 'r-verb', en: 'become', hi: 'हो गया', pron: 'ge-VOR-den', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Since you live here, it has become louder.', hi: 'Jab se tum yahaan rehte ho, yeh zyada shorgul ho gaya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor', why: 'bevor + clause = before, this chapter.', ex: 'Bevor ich etwas sage, will ich zuhören.', exEn: 'Before I say something, I want to listen.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'etwas', role: 'r-akkusativ', en: 'something', hi: 'कुछ', pron: 'ET-vas', type: 'Pronoun · indefinite' },
        { w: 'sage', role: 'r-verb', en: 'say', hi: 'कहूं', pron: 'ZAH-guh', type: 'Verb · sagen (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'will', role: 'r-modalverb', en: 'want', hi: 'चाहता हूँ', pron: 'vil', type: 'Modal · wollen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zuhören', role: 'r-verb', en: 'listen', hi: 'सुनना', pron: 'TSOO-hö-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Before I say something, I want to listen.', hi: 'Kuch kehne se pehle, main sunna chahta hoon.' },
      { speaker: 'Runa', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Während', role: 'r-conjunction', en: 'while', hi: 'जबकि', pron: 'VAI-rent', type: 'Conjunction · während', why: 'während + clause = while, contrasting or simultaneous action, this chapter.', ex: 'Während ich schlafe, hörst du Musik.', exEn: 'While I sleep, you listen to music.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schlafe', role: 'r-verb', en: 'sleep', hi: 'सोती हूँ', pron: 'SHLAH-fuh', type: 'Verb · schlafen (ich, Satzende)' },
        { w: ',', plain: true },
        { w: 'hörst', role: 'r-verb', en: 'listen', hi: 'सुनते हो', pron: 'HÖRST', type: 'Verb · hören (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'Musik', role: 'r-akkusativ', en: 'music', hi: 'संगीत', pron: 'mu-ZEEK', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'While I sleep, you listen to music.', hi: 'Jabki main sotee hoon, tum sangeet sunte ho.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'tut', role: 'r-verb', en: 'sorry', hi: 'माफ़ करना', pron: 'toot', type: 'Verb · leid tun' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'leid', role: 'r-akkusativ', en: 'sorry', hi: 'अफ़सोस', pron: 'lite', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zyt', type: 'Preposition + dative', why: 'seit + dative = since (a point in time), this chapter.', ex: 'seit letzter Woche', exEn: 'since last week' },
        { w: 'letzter', role: 'r-dativ', en: 'last', hi: 'पिछले', pron: 'LETS-ter', type: 'Adjective · dative' },
        { w: 'Woche', role: 'r-dativ', en: 'week (dat.)', hi: 'हफ़्ते से', pron: 'VO-khuh', type: 'Noun · fem. dat.' },
        { w: 'trage', role: 'r-verb', en: 'wear', hi: 'पहनता हूँ', pron: 'TRAH-guh', type: 'Verb · tragen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'Kopfhörer', role: 'r-akkusativ', en: 'headphones', hi: 'हेडफ़ोन', pron: 'KOPF-hö-rer', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'I am sorry. Since last week I have been wearing headphones.', hi: 'Mujhe afsos hai. Pichhle hafte se main headphone pehanta hoon.' },
      { speaker: 'Runa', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Bevor', role: 'r-conjunction', en: 'before', hi: 'से पहले', pron: 'be-FOR', type: 'Conjunction · bevor' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'weiterreden', role: 'r-verb', en: 'continue talking', hi: 'आगे बात करते हैं', pron: 'VY-ter-ray-den', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'danken', role: 'r-verb', en: 'thank', hi: 'धन्यवाद देना', pron: 'DAN-ken', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Thanks! Before we continue talking, I would also like to thank you.', hi: 'Dhanyavaad! Aage baat karne se pehle, main tumhe dhanyavaad bhi dena chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wofür', role: 'r-question', en: 'for what', hi: 'किस लिए', pron: 'vo-FÜR', type: 'Question word' },
        { w: '?', plain: true }
      ], en: 'For what?', hi: 'Kis liye?' },
      { speaker: 'Runa', tokens: [
        { w: 'Seitdem', role: 'r-conjunction', en: 'since', hi: 'जब से', pron: 'ZYT-daym', type: 'Conjunction · seitdem' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'darüber', role: 'r-akkusativ', en: 'about it', hi: 'इस बारे में', pron: 'da-RÜ-ber', type: 'Pronoun · adverbial' },
        { w: 'sprechen', role: 'r-verb', en: 'talk', hi: 'बात करते हैं', pron: 'SHPRE-khen', type: 'Verb · sprechen (Satzende)' },
        { w: ',', plain: true },
        { w: 'fühle', role: 'r-verb', en: 'feel', hi: 'महसूस करती हूँ', pron: 'FÜ-luh', type: 'Verb · fühlen (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'erleichtert', role: 'r-akkusativ', en: 'relieved', hi: 'राहत महसूस', pron: 'er-LYKH-tert', type: 'Adjective', why: 'erleichtert = relieved (this chapter).', ex: 'Ich fühle mich erleichtert.', exEn: 'I feel relieved.' },
        { w: '.', plain: true }
      ], en: 'Since we talk about it, I feel relieved.', hi: 'Jab se hum iske baare mein baat karte hain, main raahat mehsoos karti hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Five conjunctions all answer "when?" — but each one answers it differently: <span class="de r-temporal">als</span> for ONE completed past event, <span class="de r-temporal">wenn</span> for repeated or future events, <span class="de r-temporal">bevor</span> for what happens BEFORE, <span class="de r-temporal">nachdem</span> for what happens AFTER (often with Plusquamperfekt), and <span class="de r-temporal">während</span> for two things happening AT THE SAME TIME. Ask yourself which of these five questions your sentence is really answering.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPORALE NEBENSÄTZE (B1 level only): als (ONE completed event in the past), wenn (repeated actions in present/past, or any future event), bevor (before), nachdem (after — often with Plusquamperfekt in the nachdem-clause), während (simultaneous actions). All five send the finite verb to the end of their clause, like any subordinate clause. ' +
    'Do NOT expect seitdem, sobald, ehe, solange, bis, kaum, indem, or other B2 temporal connectors — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- als is used ONLY for a single, completed event in the past — never for repeated past actions (which need wenn) and never for the future (which also needs wenn).\n' +
    '- wenn covers repeated actions in any time frame (present, past-repeated, future) — "Wenn ich klein war, spielte ich..." (repeated childhood habit) is correct wenn, while "Als ich klein war..." (a general one-time state) is also acceptable — the key contrast to catch is als for a single one-time event vs. wenn for anything repeated or future.\n' +
    '- nachdem\'s own clause is usually in Plusquamperfekt when the main clause is in Perfekt/Präteritum: "Nachdem ich gegessen hatte, ging ich," not "Nachdem ich gegessen habe, ging ich."\n' +
    '- bevor\'s own clause does NOT take Plusquamperfekt for a simple sequence — "Bevor ich schlafen gehe, putze ich meine Zähne" uses plain tenses in both clauses.\n' +
    '- während needs two clearly simultaneous actions, and the finite verb goes to the end of the während-clause: "Während wir aßen, sprach niemand."\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Temporal-clause check:</b> one sentence on whether the correct conjunction was chosen for the timing being described.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose als, wenn, bevor, nachdem, and während correctly based on timing every time. Move on to the next B1 chapter.',
    mid: 'Good. Re-read the als vs. wenn distinction once — it\'s the trickiest pair — then continue.',
    low: 'Worth another pass through the Grammar section — practise the five-question test: one past event? repeated/future? before? after? same time?'
  },

  parserSentence: [
    { w: 'Als', role: 'r-temporal' }, { w: 'ich', role: 'r-subject' },
    { w: 'klein', role: 'plain' }, { w: 'war', role: 'plain' },
    { w: ',', role: 'plain' }, { w: 'spielte', role: 'plain' },
    { w: 'ich', role: 'r-subject' }, { w: 'Fußball', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: five conjunctions, five different answers to "when?"' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Runa and Timo resolve a small disagreement using all five temporal conjunctions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 28 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master als, wenn, bevor, nachdem, and während, and when to use each.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style passage about conflict resolution, full of temporal clauses.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch all five temporal conjunctions in natural speech.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Narrate routines, childhood memories, and sequences of events using temporal clauses.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a diary entry or story using all five temporal conjunctions naturally.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill choosing the correct conjunction and timeline ordering.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 270 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 28 chapter words — conflict-resolution and communication vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '5 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Conjunction-choice drills, timeline ordering, error correction, and a story-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full temporal-clause reference — als, wenn, bevor, nachdem, während, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'als', text: 'Describe ONE completed event in the past' },
    { de: 'wenn', text: 'Describe repeated or future events' },
    { de: 'bevor', text: 'Describe what happens before another action' },
    { de: 'nachdem', text: 'Describe what happens after another action' },
    { de: 'während', text: 'Describe two simultaneous actions' }
  ],

  // ---------- Vocabulary (28 items — full chapter-21 upload list) ----------
  vocab: [
    { de: 'Konfliktsituation', art: 'die', gender: 'f', plural: 'Konfliktsituationen', pos: 'noun', level: 'B1', en: 'conflict situation', hi: 'संघर्ष की स्थिति', ex: 'In dieser Konfliktsituation blieb sie ruhig.', exEn: 'In this conflict situation, she stayed calm.', exHi: 'Is sangharsh ki sthiti mein, woh shaant rahi.' },
    { de: 'Kritik', art: 'die', gender: 'f', plural: 'Kritiken', pos: 'noun', level: 'B1', en: 'criticism', hi: 'आलोचना', ex: 'Er hat sich über die Kritik aufgeregt.', exEn: 'He got annoyed about the criticism.', exHi: 'Usne aalochana par naaraazgi jataayi.' },
    { de: 'akzeptieren', pos: 'verb', level: 'B1', en: 'to accept', hi: 'स्वीकार करना', ex: 'Wir sollten die Kritik akzeptieren.', exEn: 'We should accept the criticism.', exHi: 'Humein aalochana svikaar karni chahiye.', conj: { praesens: 'akzeptiert', praeteritum: 'akzeptierte', perfekt: 'hat akzeptiert' } },
    { de: 'bereit sein', pos: 'idiom', level: 'B1', en: 'to be ready (zu + D.)', hi: 'तैयार होना', ex: 'Wir sollten beide bereit sein, zuzuhören.', exEn: 'We should both be ready to listen.', exHi: 'Hum dono ko sunne ke liye taiyaar hona chahiye.' },
    { de: 'bevor', pos: 'conjunction', level: 'B1', en: 'before', hi: 'इससे पहले', ex: 'Bevor wir weiterreden, sollten wir zuhören.', exEn: 'Before we continue talking, we should listen.', exHi: 'Aage baat karne se pehle, humein sunna chahiye.' },
    { de: 'diplomatisch', pos: 'adjective', level: 'B1', en: 'diplomatic', hi: 'कूटनीतिक', ex: 'Das war sehr diplomatisch gesagt.', exEn: 'That was said very diplomatically.', exHi: 'Yeh bahut kootnitik roop se kaha gaya.' },
    { de: 'erleichtern', pos: 'verb', level: 'B1', en: 'to facilitate', hi: 'सरल बनाना', ex: 'Eine Ich-Aussage erleichtert das Gespräch.', exEn: 'An I-statement facilitates the conversation.', exHi: 'Ek main-kathan baatcheet ko aasaan banaata hai.', conj: { praesens: 'erleichtert', praeteritum: 'erleichterte', perfekt: 'hat erleichtert' } },
    { de: 'erschöpft', pos: 'adjective', level: 'B1', en: 'exhausted', hi: 'थका हुआ', ex: 'Wenn ich erschöpft bin, übertreibe ich oft.', exEn: 'Whenever I\'m exhausted, I often exaggerate.', exHi: 'Jab bhi main thak jaata hoon, main aksar badha-chadhakar bata deta hoon.' },
    { de: 'gehören', pos: 'verb', level: 'B1', en: 'to belong to (zu + D.)', hi: 'से संबंधित होना', ex: 'Streit gehört zu jeder Beziehung.', exEn: 'Arguments belong to every relationship.', exHi: 'Jhagda har rishte ka hissa hota hai.', conj: { praesens: 'gehört', praeteritum: 'gehörte', perfekt: 'hat gehört' } },
    { de: 'nachgeben', pos: 'verb', level: 'B1', en: 'to give in', hi: 'हार मान लेना', ex: 'Am Ende musste er nachgeben.', exEn: 'In the end, he had to give in.', exHi: 'Aakhir mein, usko haar maan-ni padi.', conj: { praesens: 'gibt nach', praeteritum: 'gab nach', perfekt: 'hat nachgegeben' } },
    { de: 'schweigen', pos: 'verb', level: 'B1', en: 'to remain silent', hi: 'चुप रहना', ex: 'Wenn ich etwas sagte, schwiegst du lange.', exEn: 'Whenever I said something, you would remain silent for a long time.', exHi: 'Jab bhi main kuch kehta tha, tum lambe samay tak chup ho jaati thi.', conj: { praesens: 'schweigt', praeteritum: 'schwieg', perfekt: 'hat geschwiegen' } },
    { de: 'seit', pos: 'preposition', level: 'B1', en: 'since (Präposition, not this chapter\'s new grammar)', hi: 'से', ex: 'Seit unserem Streit haben wir viel gelernt.', exEn: 'Since our argument, we\'ve learned a lot.', exHi: 'Hamare jhagade ke baad se, humne bahut kuch seekha hai.' },
    { de: 'seitdem', pos: 'conjunction/adverb', level: 'B1', en: 'since (recognise-only — not taught as new grammar this chapter)', hi: 'तब से', ex: 'Seitdem sprechen wir offener miteinander.', exEn: 'Since then, we talk more openly with each other.', exHi: 'Tab se, hum ek-doosre se zyada khulkar baat karte hain.' },
    { de: 'während', pos: 'conjunction', level: 'B1', en: 'while (simultaneous)', hi: 'जब', ex: 'Während wir kochen, reden wir ruhig weiter.', exEn: 'While we cook, we calmly keep talking.', exHi: 'Jab hum khaana banate hain, hum shaanti se baat karte rehte hain.' },
    { de: 'zu Ende sein', pos: 'idiom', level: 'B1', en: 'to finish, come to an end', hi: 'ख़त्म होना', ex: 'Nachdem der Streit zu Ende gewesen war, einigten wir uns schnell.', exEn: 'After the argument had come to an end, we quickly agreed.', exHi: 'Jhagda khatm hone ke baad, humne jaldi hi sahmati bana li.' },
    { de: 'übertreiben', pos: 'verb', level: 'B1', en: 'to exaggerate', hi: 'बढ़ा-चढ़ाकर बताना', ex: 'Wenn ich erschöpft bin, übertreibe ich oft.', exEn: 'Whenever I\'m exhausted, I often exaggerate.', exHi: 'Jab bhi main thak jaata hoon, main aksar badha-chadhakar bata deta hoon.', conj: { praesens: 'übertreibt', praeteritum: 'übertrieb', perfekt: 'hat übertrieben' } },
    { de: 'Streitgespräch', art: 'das', gender: 'n', plural: 'Streitgespräche', pos: 'noun', level: 'B1', en: 'argument, dispute', hi: 'बहस', ex: 'Das Streitgespräch dauerte eine Stunde.', exEn: 'The argument lasted an hour.', exHi: 'Bahas ek ghante tak chali.' },
    { de: 'Wort', art: 'das', gender: 'n', plural: 'Wörter', pos: 'noun', level: 'B1', en: 'word', hi: 'शब्द', ex: 'Er wählte seine Worte diplomatisch.', exEn: 'He chose his words diplomatically.', exHi: 'Usne apne shabd kootnitik roop se chune.' },
    { de: 'Schülerjob', art: 'der', gender: 'm', plural: 'Schülerjobs', pos: 'noun', level: 'B1', en: 'student job', hi: 'छात्र नौकरी', ex: 'Ihr Schülerjob half ihr, Geld zu verdienen.', exEn: 'Her student job helped her earn money.', exHi: 'Uski chhatra naukri ne use paisa kamaane mein madad ki.' },
    { de: 'Streit', art: 'der', gender: 'm', plural: 'Streits', pos: 'noun', level: 'B1', en: 'argument', hi: 'झगड़ा', ex: 'Als unser letzter Streit zu Ende war, einigten wir uns schnell.', exEn: 'When our last argument had ended, we quickly agreed.', exHi: 'Jab hamara pichhla jhagda khatm hua, humne jaldi hi sahmati bana li.' },
    { de: 'Goldwaage', art: 'die', gender: 'f', plural: 'Goldwaagen', pos: 'noun', level: 'B1', en: 'gold scale (idiom: to take too literally)', hi: 'सोने का तराज़ू (मुहावरा)', ex: 'Du hast jede Kritik auf die Goldwaage gelegt.', exEn: 'You took every criticism too literally.', exHi: 'Tumne har aalochana ko bahut sanjidgi se liya.' },
    { de: 'Harmonie', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B1', en: 'harmony', hi: 'सामंजस्य', ex: 'Wir wollen die Harmonie zurückgewinnen.', exEn: 'We want to win back the harmony.', exHi: 'Hum sammanjasy phir se paana chahte hain.' },
    { de: 'Ich-Aussage', art: 'die', gender: 'f', plural: 'Ich-Aussagen', pos: 'noun', level: 'B1', en: 'I-statement', hi: 'मैं-कथन', ex: 'Eine Ich-Aussage erleichtert das Gespräch.', exEn: 'An I-statement facilitates the conversation.', exHi: 'Ek main-kathan baatcheet ko aasaan banaata hai.' },
    { de: 'sich aufregen', pos: 'verb', level: 'B1', en: 'to get annoyed (über + A.)', hi: 'नाराज़ होना', ex: 'Ich hatte mich schon über die Kritik aufgeregt.', exEn: 'I had already gotten annoyed about the criticism.', exHi: 'Main pehle se hi aalochana se naaraaz ho gayi thi.', conj: { praesens: 'regt sich auf', praeteritum: 'regte sich auf', perfekt: 'hat sich aufgeregt' } },
    { de: 'sich einigen', pos: 'verb', level: 'B1', en: 'to agree (auf + A.)', hi: 'सहमति बनाना', ex: 'Wir hatten uns schnell geeinigt.', exEn: 'We had quickly agreed.', exHi: 'Humne jaldi hi aapas mein sahmati bana li thi.', conj: { praesens: 'einigt sich', praeteritum: 'einigte sich', perfekt: 'hat sich geeinigt' } },
    { de: 'undiplomatisch', pos: 'adjective', level: 'B1', en: 'undiplomatic', hi: 'असभ्य', ex: 'Wir waren beide sehr undiplomatisch.', exEn: 'We were both very undiplomatic.', exHi: 'Hum dono bahut asabhya the.' },
    { de: 'Modalpartikel', art: 'die', gender: 'f', plural: 'Modalpartikeln', pos: 'noun', level: 'B1', en: 'modal particle', hi: 'भाव-सूचक कण', ex: '"Ja" ist hier eine Modalpartikel.', exEn: '"Ja" here is a modal particle.', exHi: 'Yahan "ja" ek bhaav-soochak kan hai.' },
    { de: 'wenn', pos: 'conjunction', level: 'B1', en: 'when(ever) (repeated/future)', hi: 'जब भी', ex: 'Wenn ich Zeit habe, lese ich ein Buch.', exEn: 'Whenever I have time, I read a book.', exHi: 'Jab bhi mera paas samay hota hai, main ek kitaab padhta hoon.' },
    { de: 'als', pos: 'conjunction', level: 'B1', en: 'when (one past event)', hi: 'जब (एक बार)', ex: 'Als ich klein war, spielte ich jeden Tag Fußball.', exEn: 'When I was little, I played football every day.', exHi: 'Jab main chhota tha, main har din football khelta tha.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was sind Temporale Nebensätze?',
      body: [ 'Temporal clauses answer: When? Before when? After when? While? All five conjunctions send the finite verb to the very end of their clause.' ],
      table: {
        head: ['Question', 'Example'],
        rows: [
          ['When?', '<span class="de">Ich rufe dich an, wenn ich zu Hause bin.</span>']
        ]
      },
      hinglish: 'Temporal clauses poochte hain: Kab? Kab se pehle? Kab ke baad? Jab tak? Paanchon conjunctions finite verb ko clause ke end mein bhejte hain.'
    },
    {
      title: 'als — EIN bestimmter Zeitpunkt oder Zeitraum in der Vergangenheit',
      body: [ 'als marks ONE specific time frame in the past. That frame can be a single moment (<i>Als Anna ankam …</i>) or a whole period of your life (<i>Als ich klein war …</i>) — what matters is that you are pointing at one particular time, not at something that happens again and again. Never use als for the present or the future.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['One past period', '<span class="de">Als ich klein war, spielte ich jeden Tag Fußball.</span>'],
          ['One past moment', '<span class="de">Als Anna nach Deutschland kam, sprach sie kaum Deutsch.</span>']
        ]
      },
      hinglish: '<b>als</b> past ke <b>ek specific time</b> ke liye aata hai. Woh ek pal bhi ho sakta hai (<span class="de">Als Anna ankam …</span>) aur zindagi ka poora daur bhi (<span class="de">Als ich klein war …</span>). Dhyaan do ki us daur ke andar kaam baar-baar ho sakta hai \u2014 <span class="de">Als ich klein war, spielte ich jeden Tag Fußball</span> \u2014 phir bhi <b>als</b> hi aayega, kyunki tum ek hi time frame ki baat kar rahe ho. Present ya future ke liye <b>als</b> kabhi nahi.'
    },
    {
      title: 'wenn — wiederholte Handlungen, Gegenwart, Zukunft',
      body: [ 'wenn covers repeated actions (any time frame) and any future event.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Repeated', '<span class="de">Wenn ich Zeit habe, lese ich ein Buch.</span>'],
          ['Future', '<span class="de">Wenn wir in Deutschland sind, besuchen wir Berlin.</span>']
        ]
      },
      hinglish: 'wenn repeated actions (kisi bhi time frame mein) aur kisi bhi future event ko cover karta hai.'
    },
    {
      title: 'bevor — Handlung VOR einer anderen',
      body: [ 'bevor marks an action that happens before another action — no special tense requirement, just plain sequencing.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Before', '<span class="de">Bevor ich schlafen gehe, putze ich meine Zähne.</span>'],
          ['Before', '<span class="de">Anna lernt Deutsch, bevor sie nach Deutschland zieht.</span>']
        ]
      },
      hinglish: 'bevor ek action batata hai jo doosre se pehle hoti hai — koi special tense requirement nahi, bas plain sequencing.'
    },
    {
      title: 'nachdem — Handlung NACH einer anderen (oft mit Plusquamperfekt)',
      body: [ 'nachdem marks an action that happens after another — its own clause is usually in Plusquamperfekt when the main clause is Perfekt/Präteritum.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['After (Plusquamperfekt)', '<span class="de">Nachdem ich gegessen hatte, ging ich spazieren.</span>'],
          ['After (Plusquamperfekt)', '<span class="de">Nachdem wir die Prüfung bestanden hatten, feierten wir zusammen.</span>']
        ]
      },
      hinglish: 'nachdem ek action batata hai jo doosre ke baad hoti hai — iska apna clause aksar Plusquamperfekt mein hota hai jab main clause Perfekt/Präteritum ho.'
    },
    {
      title: 'während — zwei Handlungen zur gleichen Zeit',
      body: [ 'während marks two actions happening simultaneously.' ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Simultaneous', '<span class="de">Während Anna lernte, hörte Rohan Musik.</span>'],
          ['Simultaneous', '<span class="de">Während wir aßen, sprach niemand.</span>']
        ]
      },
      hinglish: 'während do actions batata hai jo ek hi samay par ho rahi hon.'
    },
    {
      title: 'Vollständiger Vergleich',
      body: [ 'One question decides the conjunction every time.' ],
      table: {
        head: ['Function', 'Conjunction'],
        rows: [
          ['One past time or period', 'als'],
          ['Repeated / Future', 'wenn'],
          ['Before', 'bevor'],
          ['After', 'nachdem'],
          ['At the same time', 'während']
        ]
      },
      note: 'Memory trick: ONE past time frame → als. EVERY time → wenn. BEFORE → bevor. AFTER → nachdem. AT THE SAME TIME → während.',
      hinglish: 'Ek sawaal har baar conjunction tay kar deta hai. Past ka ek specific time? <b>als</b>. Baar-baar hone wali baat? <b>wenn</b>. Pehle? <b>bevor</b>. Baad mein? <b>nachdem</b>. Ek hi samay par? <b>während</b>.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These five mistakes come from confusing als/wenn, using the wrong tense with a future/past marker, or mixing up Plusquamperfekt placement.' ],
      mistakes: [
        { wrong: 'Wenn ich klein war...', right: 'Als ich klein war...', why: 'A single, general past childhood state uses als, not wenn (wenn implies repetition each time, which doesn\'t fit "when I was little" as a single era).' },
        { wrong: 'Als ich morgen komme...', right: 'Wenn ich morgen komme...', why: 'als is never used for the future — wenn covers all future events.' },
        { wrong: 'Nachdem ich gegessen habe, ging ich.', right: 'Nachdem ich gegessen hatte, ging ich.', why: 'The nachdem-clause (earlier event) needs Plusquamperfekt, not Perfekt, when the main clause is in the past.' },
        { wrong: 'Bevor ich gegessen hatte, gehe ich duschen.', right: 'Bevor ich esse, gehe ich duschen.', why: 'bevor does not need Plusquamperfekt — plain sequencing is enough. And both halves must sit in the same time frame; Plusquamperfekt with a Präsens main clause breaks the timeline.' },
        { wrong: 'Während ich bin im Büro...', right: 'Während ich im Büro bin...', why: 'The finite verb (bin) must go to the very end of the während-clause, like any subordinate clause.' }
      ],
      hinglish: 'Yeh paanch galtiyaan als/wenn confuse karne se, galat tense use karne se, ya Plusquamperfekt placement mix karne se hoti hain.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Temporal clauses appear constantly in Goethe B1 narration — biographies, stories, and daily routines.' ],
      note: 'Quick check: one past time frame? → als. Every time / any future? → wenn. Before? → bevor. After? → nachdem. Same time? → während.',
      hinglish: 'Temporal clauses Goethe B1 ki narration mein baar-baar aate hain — biographies, kahaniyaan aur daily routine.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Wie wir wieder zueinander fanden',
    titleEn: 'How we found our way back to each other',
    tokens: [
      { w: 'Als', role: 'r-temporal', en: 'when (one past event)', hi: 'जब', type: 'Konjunktion · als' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'खुद को', type: 'Reflexivpronomen' },
      { w: 'kennenlernten', role: 'r-temporal', en: 'got to know (Satzende)', hi: 'मिले थे (Satzende)', type: 'Verb · kennenlernen (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'waren', role: 'r-verb', en: 'were (Position 2)', hi: 'थे (Position 2)', type: 'Verb · sein (Präteritum, Position 2)' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'beide', role: 'plain', en: 'both', hi: 'दोनों', type: 'Indefinitpronomen' },
      { w: 'undiplomatisch', role: 'plain', en: 'undiplomatic', hi: 'असभ्य', type: 'Adjective', why: 'undiplomatisch (this chapter).' },
      { w: '.', plain: true },
      { w: 'Wenn', role: 'r-temporal', en: 'whenever', hi: 'जब भी', type: 'Konjunktion · wenn' },
      { w: 'einer', role: 'plain', en: 'one', hi: 'एक', type: 'Indefinitpronomen' },
      { w: 'von', role: 'r-preposition', en: 'of', hi: 'में से', type: 'Preposition · Dat.' },
      { w: 'uns', role: 'r-dativ', en: 'us', hi: 'हम', type: 'Pronoun · Dativ' },
      { w: 'erschöpft', role: 'plain', en: 'exhausted', hi: 'थका हुआ', type: 'Adjective', why: 'erschöpft (this chapter).' },
      { w: 'war', role: 'r-temporal', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'übertrieben', role: 'r-verb', en: 'exaggerated (Position 2)', hi: 'बढ़ा-चढ़ाकर बताया (Position 2)', type: 'Verb · übertreiben (Präteritum, Position 2)' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'beide', role: 'plain', en: 'both', hi: 'दोनों', type: 'Indefinitpronomen' },
      { w: 'oft', role: 'plain', en: 'often', hi: 'अक्सर', type: 'Adverb' },
      { w: '.', plain: true },
      { w: 'Nachdem', role: 'r-temporal', en: 'after', hi: 'बाद में', type: 'Konjunktion · nachdem' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'größerer', role: 'plain', en: 'bigger', hi: 'बड़ा', type: 'Komparativ · gemischt · Nom.', why: 'Comparative + mixed declension (recycled — Ch.14).' },
      { w: 'Streit', role: 'plain', en: 'argument', hi: 'झगड़ा', type: 'Noun · masc.', why: 'der Streit (this chapter).' },
      { w: 'zu', role: 'r-verb', en: '(zu Ende sein)', hi: '—', type: 'Verbpartikel' },
      { w: 'Ende', role: 'plain', en: 'to an end', hi: 'ख़त्म', type: 'Noun (idiom)', why: 'zu Ende sein (this chapter).' },
      { w: 'gewesen', role: 'r-plusq', en: 'been (Satzende)', hi: 'हुआ था (Satzende)', type: 'Verb · sein (Partizip II, Satzende)' },
      { w: 'war', role: 'r-plusq', en: 'was (Satzende)', hi: 'था (Satzende)', type: 'Verb · sein (Plusquamperfekt, Satzende)', why: 'Plusquamperfekt in the nachdem-clause (recycled — Ch.20).' },
      { w: ',', plain: true },
      { w: 'einigten', role: 'r-verb', en: 'agreed (Position 2)', hi: 'सहमति बनाई (Position 2)', type: 'Verb · sich einigen (Präteritum, Position 2)' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'आपस में', type: 'Reflexivpronomen' },
      { w: 'endlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'auf', role: 'r-preposition', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Ich-Aussagen', role: 'plain', en: 'I-statements', hi: 'मैं-कथन', type: 'Noun · plural', why: 'die Ich-Aussage (this chapter).' },
      { w: '.', plain: true },
      { w: 'Bevor', role: 'r-temporal', en: 'before', hi: 'इससे पहले', type: 'Konjunktion · bevor' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'weiterredeten', role: 'r-temporal', en: 'continued talking (Satzende)', hi: 'आगे बात की (Satzende)', type: 'Verb · weiterreden (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'atmeten', role: 'r-verb', en: 'breathed (Position 2)', hi: 'साँस ली (Position 2)', type: 'Verb · atmen (Präteritum, Position 2)' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'beide', role: 'plain', en: 'both', hi: 'दोनों', type: 'Indefinitpronomen' },
      { w: 'tief', role: 'plain', en: 'deeply', hi: 'गहराई से', type: 'Adjective' },
      { w: 'durch', role: 'r-verb', en: '(durchatmen)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true },
      { w: 'Während', role: 'r-temporal', en: 'while', hi: 'जब', type: 'Konjunktion · während' },
      { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', type: 'Pronoun' },
      { w: 'sprachen', role: 'r-temporal', en: 'spoke (Satzende)', hi: 'बात की (Satzende)', type: 'Verb · sprechen (Präteritum, Satzende)' },
      { w: ',', plain: true },
      { w: 'hörte', role: 'r-verb', en: 'listened (Position 2)', hi: 'सुना (Position 2)', type: 'Verb · zuhören (Präteritum, Position 2)' },
      { w: 'jeder', role: 'plain', en: 'each one', hi: 'हर कोई', type: 'Indefinitpronomen' },
      { w: 'genau', role: 'plain', en: 'carefully', hi: 'ध्यान से', type: 'Adjective' },
      { w: 'zu', role: 'r-verb', en: '(zuhören)', hi: '—', type: 'Verbpartikel' },
      { w: '.', plain: true }
    ],
    translation: 'When we got to know each other, we were both undiplomatic. Whenever one of us was exhausted, we both often exaggerated. After a bigger argument had ended, we finally agreed on I-statements. Before we continued talking, we both breathed deeply. While we spoke, each one listened carefully.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B1_021_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Runa, seit wir letzte Woche gestritten haben, ist es komisch zwischen uns.', en: 'Runa, since we argued last week, things have been weird between us.' },
      { id: 'B1_021_L002', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ich weiß, das tut mir leid. Bevor ich wieder laut Musik höre, frage ich dich einfach.', en: 'I know, I\'m sorry. Before I play loud music again, I\'ll just ask you.' },
      { id: 'B1_021_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das reicht schon. Und ich werde leiser sein, während du schläfst.', en: 'That\'s already enough. And I\'ll be quieter while you sleep.' },
      { id: 'B1_021_L004', speaker: 'Runa', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Perfekt. Nachdem wir das geklärt haben, fühle ich mich viel besser.', en: 'Perfect. After we\'ve sorted that out, I feel much better.' }
    ],
    transcript: 'Runa, seit wir letzte Woche gestritten haben, ist es komisch zwischen uns. Ich weiß, das tut mir leid. Bevor ich wieder laut Musik höre, frage ich dich einfach. Das reicht schon. Und ich werde leiser sein, während du schläfst. Perfekt. Nachdem wir das geklärt haben, fühle ich mich viel besser.',
    translation: 'Runa, since we argued last week, things have been weird between us. I know, I\'m sorry. Before I play loud music again, I\'ll just ask you. That\'s already enough. And I\'ll be quieter while you sleep. Perfect. After we\'ve sorted that out, I feel much better.',
    tokens: [
      { w: 'Runa' },
      { w: ',', plain: true },
      { w: 'seit' },
      { w: 'wir' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'gestritten' },
      { w: 'haben' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'es' },
      { w: 'komisch' },
      { w: 'zwischen' },
      { w: 'uns' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'weiß' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'tut' },
      { w: 'mir' },
      { w: 'leid' },
      { w: '.', plain: true },
      { w: 'Bevor' },
      { w: 'ich' },
      { w: 'wieder' },
      { w: 'laut' },
      { w: 'Musik' },
      { w: 'höre' },
      { w: ',', plain: true },
      { w: 'frage' },
      { w: 'ich' },
      { w: 'dich' },
      { w: 'einfach' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'reicht' },
      { w: 'schon' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'ich' },
      { w: 'werde' },
      { w: 'leiser' },
      { w: 'sein' },
      { w: ',', plain: true },
      { w: 'während' },
      { w: 'du' },
      { w: 'schläfst' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: '.', plain: true },
      { w: 'Nachdem' },
      { w: 'wir' },
      { w: 'das' },
      { w: 'geklärt' },
      { w: 'haben' },
      { w: ',', plain: true },
      { w: 'fühle' },
      { w: 'ich' },
      { w: 'mich' },
      { w: 'viel' },
      { w: 'besser' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was macht Runa, bevor sie laute Musik hört?', qEn: 'What will Runa do before playing loud music?', options: ['nichts ändern', 'Timo fragen', 'das Zimmer verlassen', 'die Musik ganz lassen'], optionsEn: ['change nothing', 'ask Timo', 'leave the room', 'leave the music as it is'], answer: 1,
        explain: '"… frage ich dich einfach."' },
      { q: 'Wie fühlt sich Runa nach der Klärung?', qEn: 'How does Runa feel after clearing things up?', options: ['schlechter', 'viel besser', 'unverändert', 'wütend'], optionsEn: ['worse', 'much better', 'unchanged', 'angry'], answer: 1,
        explain: '"… fühle ich mich viel besser."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin sagt, seit dem Streit sei es komisch. Antworte.", taskEn: "Your friend says it's been odd since the argument. Answer.", de: "Seit wir gestritten haben, ist es komisch zwischen uns.", en: "Since we argued, it's been odd between us." },
    { task: "Sag, was du machst, bevor du laut Musik hörst.", taskEn: "Say what you do before you play loud music.", de: "Bevor ich laut Musik höre, frage ich dich einfach.", en: "Before I play loud music, I'll just ask you." },
    { task: "Ein Freund fragt, wie sich alles geändert hat.", taskEn: "A friend asks how everything has changed.", de: "Seitdem wir offen reden, gibt es weniger Streit.", en: "Since we've been talking openly, there's less arguing." },
    { task: "Deine Kollegin fragt, wann du erschöpft bist.", taskEn: "Your colleague asks when you're exhausted.", de: "Während ich arbeite, geht es, aber danach bin ich erschöpft.", en: "While I'm working it's fine, but afterwards I'm exhausted." },
    { task: "Ein Freund fragt, wann du Kritik akzeptieren kannst.", taskEn: "A friend asks when you can accept criticism.", de: "Wenn ich ruhig bin, kann ich Kritik akzeptieren.", en: "When I'm calm, I can accept criticism." },
    { task: "Deine Freundin fragt, was du im Streit machst.", taskEn: "Your friend asks what you do in an argument.", de: "Bevor ich mich aufrege, schweige ich einen Moment.", en: "Before I get worked up, I stay silent for a moment." },
    { task: "Rollenspiel: Ihr klärt einen Streit in der Wohnung.", taskEn: "Role-play: you settle an argument in the flat.", de: "Seitdem du früher aufstehst, schlafe ich schlecht. — Bevor ich dusche, mache ich die Tür zu.", en: "Since you've been getting up earlier, I sleep badly. — Before I shower, I'll close the door." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short story or diary entry (six to eight sentences) — a childhood memory, a daily routine, or an argument and its resolution — using all five temporal conjunctions (als, wenn, bevor, nachdem, während) at least once each.',
    starters: ['Als ich klein war, …', 'Wenn ich …, dann …', 'Bevor ich …, …', 'Nachdem ich … hatte, …', 'Während ich …, …'],
    placeholder: 'Als ich acht Jahre alt war, zog meine Familie um. Wenn ich heute daran denke, …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "___ ich klein war, spielte ich Fußball." (one past event)',
      options: ['Wenn', 'Als', 'Während'],
      answer: 1,
      explain: 'als marks ONE completed past event/state.'
    },
    gap: {
      sentence: ['', ' ich Zeit habe, lese ich ein Buch.'],
      gaps: [ { answer: 'Wenn', accepts: ['Wenn'] } ],
      explain: 'wenn marks a repeated action.'
    },
    match: {
      q: 'Match each conjunction to its function.',
      pairs: [
        { noun: 'als', art: 'One past event' },
        { noun: 'wenn', art: 'Repeated / Future' },
        { noun: 'bevor', art: 'Before' },
        { noun: 'nachdem', art: 'After' },
        { noun: 'während', art: 'At the same time' }
      ]
    },
    builder: {
      target: 'Build: "Before I go to sleep, I brush my teeth."',
      bank: ['Bevor', 'ich', 'schlafen', 'gehe', ',', 'putze', 'ich', 'meine', 'Zähne', '.'],
      answer: ['Bevor', 'ich', 'schlafen', 'gehe', ',', 'putze', 'ich', 'meine', 'Zähne', '.'],
      roles: { 'Bevor': 'r-temporal', 'gehe': 'r-temporal' }
    },
    chooseConjunction: {
      title: 'Choose the correct conjunction',
      prompt: '"___ wir aßen, sprach niemand." (two simultaneous actions)',
      answer: 'Während',
      explain: 'während marks two actions happening at the same time.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Nachdem ich gegessen habe, ging ich.',
      right: 'Nachdem ich gegessen hatte, ging ich.',
      explain: 'The nachdem-clause needs Plusquamperfekt, not Perfekt, when the main clause is in the past.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "___ Anna nach Deutschland kam, sprach sie kaum Deutsch."', options: ['Wenn', 'Als', 'Während'], answer: 1,
      explain: 'als marks a single completed past event.' },
    { q: 'Complete: "___ wir in Deutschland sind, besuchen wir Berlin." (future)', options: ['Als', 'Wenn', 'Nachdem'], answer: 1,
      explain: 'wenn covers future events.' },
    { q: 'Which sentence correctly uses nachdem with Plusquamperfekt?', options: ['Nachdem ich gegessen habe, ging ich.', 'Nachdem ich gegessen hatte, ging ich.', 'Nachdem ich esse, ging ich.'], answer: 1,
      explain: 'The nachdem-clause (earlier event) needs Plusquamperfekt.' },
    { q: 'Complete: "___ wir aßen, sprach niemand." (simultaneous)', options: ['Bevor', 'Nachdem', 'Während'], answer: 2,
      explain: 'während marks two simultaneous actions.' },
    { q: 'Which sentence contains an error?', options: ['Bevor ich schlafen gehe, putze ich meine Zähne.', 'Während ich bin im Büro, arbeite ich viel.', 'Als ich klein war, spielte ich Fußball.'], answer: 1,
      explain: 'The finite verb (bin) must go to the very end: "Während ich im Büro bin, …"' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-temporal', html: 'als marks ONE completed event in the past — never repeated actions, never the future.' },
    { c: 'r-temporal', html: 'wenn covers repeated actions (any time frame) and any future event.' },
    { c: 'r-temporal', html: 'bevor = before, nachdem = after (often paired with Plusquamperfekt), während = at the same time. All five send the finite verb to the end of their clause.' }
  ],
  revisionTips: [
    'Whenever you\'re unsure between als and wenn, ask: is this ONE specific past moment, or does it happen repeatedly/in the future?',
    'Practise nachdem-clauses with Plusquamperfekt specifically — it\'s the trickiest tense pairing in this chapter.',
    'Say all five conjunctions with one example each out loud daily until the five-question test becomes automatic.'
  ]
};

window.CHAPTER = CHAPTER;
