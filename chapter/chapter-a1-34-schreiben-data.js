/* ============================================================
   KLARWEG CHAPTER DATA — A1 · Phase 4 · Chapter 34
   "Schreiben & Einladungen"  (writing messages & invitations)
   Vocabulary source: uploaded chapter-34 word list (22 words).
   Theme = inviting friends, writing a formal email. Recycles Ch1–33.
   NOTE: content only — reuses existing audio hooks, no new assets.
============================================================ */
const CHAPTER = {
  id: 'a1-34-schreiben',
  phase: 'A1 · Phase 4',
  number: 34,
  title: 'Schreiben & Einladungen',
  titleEn: 'Writing & Invitations',
  description: 'Put it in writing. Learn to send a quick invitation to a friend and a proper email to a stranger — the informal Liebe… / Liebe Grüße and the formal Sehr geehrte… / Mit freundlichen Grüßen, plus how to give the date, time and place.',
  xp: 160,
  time: 30,
  difficulty: 'Beginner',
  nextChapter: { number: 35, title: 'Goethe Mini 4', titleEn: 'Goethe Checkpoint 4' , href: 'chapter-a1-35-goethe4.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Petra is writing the invitation to her birthday party and Timo helps her build it line by line: subject, salutation, sign-off, send. By the end the shape of a German e-mail — Betreff, Anrede, Grußformel — is in place.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear informal vs formal greetings side by side'
    ],
    scene: 'Eine Einladung schreiben \u2014 im Kurs, Berlin',
    femaleSpeakers: ['Petra'],
    dialogue: [
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'am writing', hi: 'लिख रही हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Einladungs-Mail', role: 'r-akkusativ', en: 'invitation e-mail', hi: 'निमंत्रण मेल', pron: 'ine-LAH-dungs-mayl', type: 'Noun · fem.', why: 'die Einladungs-Mail (this chapter).', ex: 'Ich schreibe eine Einladungs-Mail.', exEn: 'I am writing an invitation e-mail.' },
        { w: '.', plain: true },
        { w: 'Machst', role: 'r-verb', en: 'do you make', hi: 'बनाते हो', pron: 'MAKHST', type: 'Verb · machen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'साथ', pron: 'mit', type: 'Preposition' },
        { w: 'uns', role: 'r-akkusativ', en: 'us', hi: 'हमारे', pron: 'uns', type: 'Pronoun', why: 'mit + Personalpronomen; recycled shape from Ch12.', ex: 'mit uns', exEn: 'with us' },
        { w: '?', plain: true }
      ], en: 'I am writing an invitation e-mail. Will you do that together with us?', hi: 'Main ek nimantran mail likh rahi hoon. Kya tum hamare saath yeh karoge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Was', role: 'r-question', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Betreff', role: 'r-subject', en: 'subject line', hi: 'विषय', pron: 'be-TREF', type: 'Noun · masc.', why: 'der Betreff (this chapter).', ex: 'Der Betreff ist wichtig.', exEn: 'The subject line is important.' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly! What is the subject line?', hi: 'Haan, khushi se! Subject line kya hai?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: ':', plain: true },
        { w: '„Einladung', role: 'r-akkusativ', en: '“Invitation', hi: 'निमंत्रण', pron: 'ine-LAH-dung', type: 'Noun · fem.' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'को', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Party“', role: 'r-akkusativ', en: 'to the party”', hi: 'पार्टी में', pron: 'PAR-ty', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I write: "Invitation to the party."', hi: 'Main likhti hoon: "Party ka nimantran."' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'welche', role: 'r-akkusativ', en: 'which', hi: 'कौनसी', pron: 'VEL-khuh', type: 'Question word' },
        { w: 'Anrede', role: 'r-akkusativ', en: 'salutation', hi: 'संबोधन', pron: 'AN-ray-duh', type: 'Noun · fem.', why: 'die Anrede (this chapter).', ex: 'Welche Anrede schreibst du?', exEn: 'Which salutation do you write?' },
        { w: 'schreibst', role: 'r-verb', en: 'do you write', hi: 'लिखती हो', pron: 'SHRYPST', type: 'Verb · schreiben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'Good. And which salutation do you write?', hi: 'Achha. Aur tum kaunsa sambodhan likhti ho?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: '„Liebe', role: 'r-akkusativ', en: '“Dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Adjective' },
        { w: 'Freunde“', role: 'r-akkusativ', en: 'friends”', hi: 'दोस्तों', pron: 'FROYN-duh', type: 'Noun · plural' },
        { w: ',', plain: true },
        { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'freundlich', role: 'r-adjective', en: 'friendly', hi: 'मिलनसार', pron: 'FROYNT-likh', type: 'Adjective' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'herzlich', role: 'r-adjective', en: 'warm', hi: 'आत्मीय', pron: 'HERTS-likh', type: 'Adjective', why: 'herzlich = warm/cordial (this chapter).', ex: 'Das klingt herzlich.', exEn: 'That sounds warm.' },
        { w: '.', plain: true }
      ], en: 'I write: "Dear friends," because that is friendly and warm.', hi: 'Main likhti hoon: "Priya doston," kyunki yeh milansaar aur aatmiya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Schön', role: 'r-adjective', en: 'lovely', hi: 'बढ़िया', pron: 'shern', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'schreibst', role: 'r-verb', en: 'do you write', hi: 'लिखती हो', pron: 'SHRYPST', type: 'Verb · schreiben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'zuletzt', role: 'r-adverb', en: 'lastly', hi: 'अंत में', pron: 'tsu-LETST', type: 'Adverb', why: 'zuletzt = lastly (this chapter).', ex: 'Was schreibst du zuletzt?', exEn: 'What do you write lastly?' },
        { w: '?', plain: true }
      ], en: 'Lovely! And what do you write lastly?', hi: 'Badhiya! Aur ant mein kya likhti ho?' },
      { speaker: 'Petra', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'schreibe', role: 'r-verb', en: 'write', hi: 'लिखती हूँ', pron: 'SHRY-buh', type: 'Verb · schreiben (ich)' },
        { w: '„Herzliche', role: 'r-akkusativ', en: '“Warm', hi: 'आत्मीय', pron: 'HERTS-li-khuh', type: 'Adjective' },
        { w: 'Grüße“', role: 'r-akkusativ', en: 'greetings”', hi: 'शुभकामनाएँ', pron: 'GRÜ-suh', type: 'Noun · plural', why: 'die Grüße (this chapter).', ex: 'Herzliche Grüße!', exEn: 'Warm greetings!' },
        { w: ',', plain: true },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'unterschreibe', role: 'r-verb', en: 'sign', hi: 'हस्ताक्षर करती हूँ', pron: 'un-ter-SHRY-buh', type: 'Verb · unterschreiben (ich)', why: 'unterschreiben = to sign (this chapter).', ex: 'Ich unterschreibe die Mail.', exEn: 'I sign the e-mail.' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Mail', role: 'r-akkusativ', en: 'e-mail', hi: 'मेल', pron: 'mayl', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'I write: "Warm greetings," and then I sign the e-mail.', hi: 'Main likhti hoon: "Aatmiya shubhkaamnaayein," aur phir mail par hastaakshar karti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Mail', role: 'r-subject', en: 'e-mail', hi: 'मेल', pron: 'mayl', type: 'Noun · fem.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'fertig', role: 'r-adjective', en: 'ready', hi: 'तैयार', pron: 'FAIR-tikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Perfect! The e-mail is ready.', hi: 'Badhiya! Mail taiyaar hai.' },
      { speaker: 'Petra', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Sendest', role: 'r-verb', en: 'are you sending', hi: 'भेजते हो', pron: 'ZEN-dest', type: 'Verb · senden (du)', why: 'senden = to send (this chapter).', ex: 'Sendest du sie jetzt?', exEn: 'Are you sending it now?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'jetzt', role: 'r-adverb', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'Yes! Are you sending it now?', hi: 'Haan! Kya tum use abhi bhejoge?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'sende', role: 'r-verb', en: 'send', hi: 'भेजता हूँ', pron: 'ZEN-duh', type: 'Verb · senden (ich)' },
        { w: 'sie', role: 'r-akkusativ', en: 'it (fem.)', hi: 'उसे', pron: 'zee', type: 'Pronoun · acc.' },
        { w: 'gleich', role: 'r-adverb', en: 'right away', hi: 'तुरंत', pron: 'glykh', type: 'Adverb' },
        { w: 'an', role: 'r-preposition', en: 'to', hi: 'को', pron: 'an', type: 'Preposition + person' },
        { w: 'alle', role: 'r-akkusativ', en: 'everyone', hi: 'सबको', pron: 'A-luh', type: 'Determiner' },
        { w: '.', plain: true }
      ], en: 'Yes, I send it right away to everyone.', hi: 'Haan, main use turant sabko bhej deta hoon.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'A German message has a fixed shape: a <strong>salutation</strong> (Anrede), a body, and a <strong>closing</strong> (Grußformel). The big choice is <em>informal vs formal</em>. To a friend: <span class="de">Liebe Anna, … Liebe Grüße</span>. To a stranger or official: <span class="de">Sehr geehrte Frau Weber, … Mit freundlichen Grüßen</span>. Get the bookends right and the rest is easy.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A1) tutor for a Hindi/English-speaking beginner. ' +
    'The lesson is WRITING MESSAGES & INVITATIONS (Schreiben & Einladungen): salutations, closings, and inviting/replying. ' +
    'The learner wrote a short message or invitation below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Informal salutation: "Liebe Anna," (fem.), "Lieber Max," (masc.), "Hallo zusammen,". Informal closing: "Liebe Grüße", "Herzliche Grüße", "Viele Grüße".\n' +
    '- Formal salutation: "Sehr geehrte Frau Weber," (fem.), "Sehr geehrter Herr Müller," (masc.). Formal closing: "Mit freundlichen Grüßen".\n' +
    '- The salutation is followed by a comma, and the first word of the body is lowercase (unless it is a noun or Sie/formal): "Liebe Anna, ich lade dich ein."\n' +
    '- An email also has a Betreff (subject line), e.g. "Betreff: Einladung zur Party".\n' +
    '- Inviting: "Ich lade dich/euch ein.", "Kommst du am Samstag?", "Möchtest du mitkommen?". Replying: "Ja, gern!", "Vielen Dank für die Einladung!", "Ich kann leider nicht kommen."\n' +
    '- Give details with date/time/place: "am Samstag", "um 18 Uhr", "bei mir".\n' +
    '- "schreiben an" takes the accusative: "Ich schreibe an Max / an dich."\n' +
    '- Use du-forms for friends, Sie-forms for formal addressees; keep them consistent.\n' +
    '- All nouns capitalised. If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Register check:</b> one sentence on whether the salutation and closing matched (both informal, or both formal).</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Strong — your salutation and closing match the register. On to Goethe Mini 4.',
    mid: 'Good. Re-read the informal vs formal card once, then continue.',
    low: 'Worth another pass — focus on salutations and closings in the Grammar section, then retake.'
  },

  parserSentence: [
    { w: 'Ich', role: 'r-subject' }, { w: 'lade', role: 'r-verb' },
    { w: 'dich', role: 'r-akkusativ' }, { w: 'ein', role: 'r-verb' },
    { w: '.', role: '' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the shape of a German message: salutation, body, closing.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Help Petra write a casual invite and a formal email — informal vs formal, side by side.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the message words: Nachricht, Brief, Anrede, Gruß, Betreff, Unterschrift and more.' },
    { id: 'grammar',    label: 'Writing & invitations', tag: 'core',
      objective: 'Master informal vs formal salutations and closings, and how to invite and reply.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a real invitation message and tap any word to hear it.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the date, time and place of an invitation, and answer.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Invite someone, accept, and decline politely.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a short invitation and a polite reply with the right salutation and closing.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill salutations, closings, and invitation phrases with instant feedback.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The message & invitation words with translations and example sentences.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Salutation/closing matching, invitation writing, reply practice, and a model email.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'Informal vs formal salutations and closings, invitation and reply phrases, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Liebe … / Liebe Grüße', text: 'Write an informal message' },
    { de: 'Sehr geehrte … / MfG', text: 'Write a formal email' },
    { de: 'Ich lade dich ein.', text: 'Invite someone' },
    { de: 'Ja, gern! / Leider nicht.', text: 'Accept or decline politely' },
    { de: 'Betreff, Anrede, Gruß', text: 'Use the parts of a message' }
  ],

  // ---------- Vocabulary (22 words) ----------
  vocab: [
    // ===== Core Active =====
    { de: 'Nachricht', art: 'die', gender: 'f', plural: 'Nachrichten', pos: 'noun', en: 'message', hi: 'संदेश', ex: 'Ich schreibe eine Nachricht.', exEn: 'I write a message.' },
    // ===== Active Support =====
    { de: 'an', pos: 'preposition', en: 'to (write to)', hi: 'को', ex: 'Ich schreibe an Max.', exEn: 'I write to Max.' },
    { de: 'denken', pos: 'verb', en: 'to think', hi: 'सोचना', ex: 'Ich denke an dich.', exEn: 'I think of you.', conj: { praesens: 'denkt', praeteritum: 'dachte', perfekt: 'hat gedacht' } },
    { de: 'Brief', art: 'der', gender: 'm', plural: 'Briefe', pos: 'noun', en: 'letter', hi: 'पत्र', ex: 'Der Brief ist fertig.', exEn: 'The letter is finished.' },
    { de: 'Gruß', art: 'der', gender: 'm', plural: 'Grüße', pos: 'noun', en: 'greeting', hi: 'अभिवादन', ex: 'Liebe Grüße, Anna.', exEn: 'Warm regards, Anna.' },
    { de: 'Vertrag', art: 'der', gender: 'm', plural: 'Verträge', pos: 'noun', en: 'contract', hi: 'अनुबंध', ex: 'Ich unterschreibe den Vertrag.', exEn: 'I sign the contract.' },
    { de: 'Anrede', art: 'die', gender: 'f', plural: 'Anreden', pos: 'noun', en: 'salutation', hi: 'संबोधन', ex: 'Die Anrede ist formell.', exEn: 'The salutation is formal.' },
    { de: 'Dame', art: 'die', gender: 'f', plural: 'Damen', pos: 'noun', en: 'lady, madam', hi: 'महिला', ex: 'Sehr geehrte Damen und Herren,', exEn: 'Dear Sir or Madam,' },
    { de: 'freundlich', pos: 'adjective', en: 'friendly; sincerely', hi: 'सादर', ex: 'Mit freundlichen Grüßen', exEn: 'Yours sincerely' },
    { de: 'geehrt', pos: 'adjective', en: 'honoured (dear)', hi: 'आदरणीय', ex: 'Sehr geehrte Frau Weber,', exEn: 'Dear Mrs Weber,' },
    { de: 'herzlich', pos: 'adjective', en: 'warm, hearty (regards)', hi: 'हार्दिक', ex: 'Herzliche Grüße', exEn: 'Warm regards' },
    { de: 'lieb', pos: 'adjective', en: 'kind, dear', hi: 'प्रिय', ex: 'Liebe Anna,', exEn: 'Dear Anna,' },
    { de: 'unterschreiben', pos: 'verb', en: 'to sign', hi: 'हस्ताक्षर करना', ex: 'Ich unterschreibe den Brief.', exEn: 'I sign the letter.', conj: { praesens: 'unterschreibt', praeteritum: 'unterschrieb', perfekt: 'hat unterschrieben' } },
    // ===== Passive =====
    { de: 'Absender', art: 'der', gender: 'm', plural: 'Absender', pos: 'noun', en: 'sender', hi: 'प्रेषक', ex: 'Der Absender steht oben.', exEn: 'The sender is at the top.' },
    { de: 'Betreff', art: 'der', gender: 'm', plural: 'Betreffe', pos: 'noun', en: 'subject line', hi: 'विषय', ex: 'Betreff: Einladung zur Party', exEn: 'Subject: Invitation to the party' },
    { de: 'Briefstandard', art: 'der', gender: 'm', plural: '—', pos: 'noun', en: 'letter standard, format', hi: 'पत्र प्रारूप', ex: 'Der Briefstandard ist wichtig.', exEn: 'The letter format is important.' },
    { de: 'Empfänger', art: 'der', gender: 'm', plural: 'Empfänger', pos: 'noun', en: 'recipient (m)', hi: 'प्राप्तकर्ता', ex: 'Der Empfänger ist Herr Müller.', exEn: 'The recipient is Mr Müller.' },
    { de: 'Einladungs-Mail', art: 'die', gender: 'f', plural: 'Einladungs-Mails', pos: 'noun', en: 'invitation email', hi: 'निमंत्रण ईमेल', ex: 'Die Einladungs-Mail ist kurz.', exEn: 'The invitation email is short.' },
    { de: 'Empfängerin', art: 'die', gender: 'f', plural: 'Empfängerinnen', pos: 'noun', en: 'recipient (f)', hi: 'प्राप्तकर्ता', ex: 'Die Empfängerin ist Frau Weber.', exEn: 'The recipient is Mrs Weber.' },
    { de: 'Unterschrift', art: 'die', gender: 'f', plural: 'Unterschriften', pos: 'noun', en: 'signature', hi: 'हस्ताक्षर', ex: 'Am Ende kommt die Unterschrift.', exEn: 'The signature comes at the end.' },
    // ===== Reference / System =====
    { de: 'Anredeformel', art: 'die', gender: 'f', plural: 'Anredeformeln', pos: 'noun', en: 'salutation formula', hi: 'संबोधन सूत्र', ex: '"Liebe Anna" ist eine Anredeformel.', exEn: '"Liebe Anna" is a salutation formula.' },
    { de: 'Grußformel', art: 'die', gender: 'f', plural: 'Grußformeln', pos: 'noun', en: 'closing formula', hi: 'समापन सूत्र', ex: '"Liebe Grüße" ist eine Grußformel.', exEn: '"Liebe Grüße" is a closing formula.' }
  ],

  // ---------- Writing & invitations (rule cards → accordion) ----------
  grammar: [
    {
      title: 'The shape of a message',
      body: [
        'Whether it\u2019s a WhatsApp or a letter, a German message has three parts: a <strong>salutation</strong> (Anrede), the body, and a <strong>closing</strong> (Grußformel). An email adds a <strong>Betreff</strong> (subject line) on top.'
      ],
      table: {
        head: ['Part', 'Example'],
        rows: [
          ['Betreff (email only)', '<span class="de">Einladung zur Party</span>'],
          ['Anrede (salutation)', '<span class="de">Liebe Anna, / Sehr geehrte Frau Weber,</span>'],
          ['Body', '<span class="de">Ich lade dich ein. Kommst du am Samstag?</span>'],
          ['Grußformel (closing)', '<span class="de">Liebe Grüße / Mit freundlichen Grüßen</span>']
        ]
      },
      note: 'The salutation ends with a comma, and the body then starts on a new line with a small letter: "Liebe Anna,\u2009ich lade dich ein." A signature (Unterschrift) \u2014 your name \u2014 comes last.',
      hinglish: 'Har message ke teen hisse: <b>Anrede</b> (salutation), body, aur <b>Grußformel</b> (closing). Email mein upar <b>Betreff</b> (vishay). Anrede ke baad comma, phir body chhote akshar se. Ant mein naam (Unterschrift).'
    },
    {
      title: 'Informal vs formal',
      goldenRule: 'Match the pair: <b>Liebe … / Liebe Grüße</b> (friend) or <b>Sehr geehrte … / Mit freundlichen Grüßen</b> (formal). Never mix them.',
      memoryTrick: 'Anrede aur Grußformel ek <b>jodi</b> hain — dono informal ya dono formal. Aadha-aadha mix karna sabse dikhne wali galti hai.',
      recap: [
        'Friend: <b>Liebe Anna,</b> … <b>Liebe Grüße</b>.',
        'Formal: <b>Sehr geehrte Frau Weber,</b> … <b>Mit freundlichen Grüßen</b>.',
        'Salutation takes a comma; the body then starts with a small letter.'
      ],
      body: [
        'The one big decision: are you writing to a <strong>friend</strong> or to someone you address with <strong>Sie</strong>? Match the salutation and closing to that.'
      ],
      table: {
        head: ['', 'Informal (friend)', 'Formal (Sie)'],
        rows: [
          ['Salutation', '<span class="de">Liebe Anna,</span>', '<span class="de">Sehr geehrte Frau Weber,</span>'],
          ['masc. addressee', '<span class="de">Lieber Max,</span>', '<span class="de">Sehr geehrter Herr Müller,</span>'],
          ['Closing', '<span class="de">Liebe Grüße</span>', '<span class="de">Mit freundlichen Grüßen</span>'],
          ['Pronoun', '<span class="de">du / ihr</span>', '<span class="de">Sie</span>']
        ]
      },
      note: 'Friend: <b>Liebe/Lieber …</b> + <b>Liebe Grüße</b> (or Viele/Herzliche Grüße), with <b>du/ihr</b>. Stranger/official: <b>Sehr geehrte/r …</b> + <b>Mit freundlichen Grüßen</b>, with <b>Sie</b>. Keep them consistent \u2014 don\u2019t mix!',
      hinglish: 'Ek bada faisla: dost ko ya <b>Sie</b> wale ko? Dost: <b>Liebe/Lieber …</b> + <b>Liebe Grüße</b>, <b>du/ihr</b>. Anjaan/officer: <b>Sehr geehrte/r …</b> + <b>Mit freundlichen Grüßen</b>, <b>Sie</b>. Mix mat karo!'
    },
    {
      title: 'Inviting & replying',
      body: [
        'The core phrases for an A1 invitation \u2014 and the polite ways to say yes or no.'
      ],
      table: {
        head: ['Function', 'German'],
        rows: [
          ['invite', '<span class="de">Ich lade dich ein. / Kommst du am Samstag?</span>'],
          ['give details', '<span class="de">Wir treffen uns um 18 Uhr bei mir.</span>'],
          ['accept', '<span class="de">Ja, gern! Vielen Dank für die Einladung!</span>'],
          ['decline', '<span class="de">Ich kann leider nicht kommen.</span>']
        ]
      },
      note: 'Invite with <b>einladen</b> ("Ich lade dich ein") or a simple question ("Kommst du …?"). Accept with <b>Ja, gern!</b>; decline politely with <b>Leider kann ich nicht kommen.</b> Always give date, time and place.',
      hinglish: 'Nyota: <b>einladen</b> ("Ich lade dich ein") ya simple sawaal ("Kommst du …?"). Haan: <b>Ja, gern!</b>; polite na: <b>Leider kann ich nicht kommen.</b> Invitation mein aksar date, time aur jagah dena zaroori hota hai.'
    },
    {
      title: 'Mistakes Hindi & English speakers make',
      body: [ 'Four message-writing traps to avoid.' ],
      mistakes: [
        { wrong: 'Sehr geehrte Frau Weber, … Liebe Grüße', right: 'Sehr geehrte Frau Weber, … Mit freundlichen Grüßen', why: 'Match the register: formal salutation needs a formal closing.' },
        { wrong: 'Liebe Anna, Ich lade dich ein.', right: 'Liebe Anna, ich lade dich ein.', why: 'After the salutation comma, the body starts with a small letter.' },
        { wrong: 'Ich schreibe zu Max.', right: 'Ich schreibe an Max.', why: '"schreiben an" + accusative — not zu.' },
        { wrong: 'Ich lade dich ein am Samstag kommen.', right: 'Ich lade dich für Samstag ein. / Kommst du am Samstag?', why: 'Keep the invitation simple; einladen\u2019s prefix ein goes to the end.' }
      ],
      hinglish: 'Char galtiyan common hain. Register match hona chahiye — formal Anrede ke saath formal closing hi aayega. Anrede ke comma ke baad body chhote akshar se shuru hoti hai. <b>schreiben an</b> ke saath accusative aata hai, <b>zu</b> nahi. Aur nyota simple rakho; <b>einladen</b> ka prefix <b>ein</b> sentence ke end mein jaata hai.'
    }
  ],

  // ---------- Reading passage (an invitation, clickable) ----------
  reading: {
    title: 'Eine Einladung',
    titleEn: 'An invitation',
    tokens: [
      { w: 'Liebe', role: 'r-adjective', en: 'Dear', hi: 'प्रिय', pron: 'LEE-buh', type: 'Salutation', why: 'lieb = dear; informal salutation (this chapter).', ex: 'Liebe Freunde,', exEn: 'Dear friends,' },
      { w: 'Freunde', role: 'r-subject', en: 'friends', hi: 'दोस्तो', pron: 'FROYN-duh', type: 'Noun · plural', why: 'der Freund → die Freunde (recycled — Hobbies).', ex: 'Liebe Freunde,', exEn: 'Dear friends,' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun', why: 'Body starts with a small letter after the salutation comma (this chapter).', ex: 'ich lade euch ein', exEn: 'I invite you' },
      { w: 'lade', role: 'r-verb', en: 'invite', hi: 'बुलाती हूँ', pron: 'LAH-duh', type: 'Verb · einladen (ich)', why: 'einladen splits (recycled — Trennbare Verben).', ex: 'Ich lade euch ein.', exEn: 'I invite you.' },
      { w: 'euch', role: 'r-akkusativ', en: 'you all', hi: 'तुम सबको', pron: 'oykh', type: 'Pronoun · acc.', why: 'euch (recycled — Akkusativpronomen).', ex: 'Ich lade euch ein.', exEn: 'I invite you all.' },
      { w: 'herzlich', role: 'r-adverb', en: 'warmly', hi: 'हार्दिक', pron: 'HAIRTS-likh', type: 'Adverb', why: 'herzlich (this chapter).', ex: 'herzlich einladen', exEn: 'warmly invite' },
      { w: 'ein', role: 'r-verb', en: '(invite)', hi: 'न्योता', pron: 'ine', type: 'Separable prefix', why: 'ein from einladen (recycled — Trennbare Verben).', ex: '… ein.', exEn: '… invite.' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'mache', role: 'r-verb', en: 'am having', hi: 'कर रही हूँ', pron: 'MA-khuh', type: 'Verb · machen (ich)', why: 'machen (recycled — Verben).', ex: 'Ich mache eine Party.', exEn: 'I\u2019m having a party.' },
      { w: 'eine', role: 'r-akkusativ', en: 'a (fem. acc.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · acc.' },
      { w: 'Party', role: 'r-object', en: 'party', hi: 'पार्टी', pron: 'PAR-tee', type: 'Noun · fem.', why: 'die Party (recycled — Modalverben 1).', ex: 'eine Party machen', exEn: 'have a party' },
      { w: ',', plain: true },
      { w: 'denn', role: 'r-conjunction', en: 'because', hi: 'क्योंकि', pron: 'den', type: 'Conjunction', why: 'denn (recycled — Sätze verbinden).', ex: '…, denn ich habe Geburtstag.', exEn: '… because it\u2019s my birthday.' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben', why: 'haben (recycled — Akkusativ).', ex: 'Ich habe Geburtstag.', exEn: 'It\u2019s my birthday.' },
      { w: 'Geburtstag', role: 'r-object', en: 'birthday', hi: 'जन्मदिन', pron: 'guh-BURTS-tahk', type: 'Noun · masc.', why: 'der Geburtstag (recycled — Datum).', ex: 'Ich habe Geburtstag.', exEn: 'It\u2019s my birthday.' },
      { w: '.', plain: true },
      { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun' },
      { w: 'treffen', role: 'r-verb', en: 'meet', hi: 'मिलते हैं', pron: 'TRE-fen', type: 'Verb · treffen (wir)', why: 'treffen (recycled — Unregelmäßige Verben).', ex: 'Wir treffen uns.', exEn: 'We meet.' },
      { w: 'uns', role: 'r-akkusativ', en: 'ourselves', hi: 'हम', pron: 'uns', type: 'Pronoun · acc.', why: 'uns (recycled — Akkusativpronomen).', ex: 'Wir treffen uns.', exEn: 'We meet.' },
      { w: 'am', role: 'r-preposition', en: 'on', hi: 'को', pron: 'am', type: 'Preposition · date', why: 'am + day (recycled — Datum).', ex: 'am Samstag', exEn: 'on Saturday' },
      { w: 'Samstag', role: 'r-time', en: 'Saturday', hi: 'शनिवार', pron: 'ZAMS-tahk', type: 'Noun · day', why: 'der Samstag (recycled — Uhrzeit).', ex: 'am Samstag', exEn: 'on Saturday' },
      { w: 'um', role: 'r-preposition', en: 'at', hi: 'बजे', pron: 'um', type: 'Preposition + clock', why: 'um + clock (recycled — Uhrzeit).', ex: 'um 18 Uhr', exEn: 'at 6 pm' },
      { w: 'achtzehn', role: 'r-time', en: 'eighteen (6 pm)', hi: 'अठारह', pron: 'AKHT-tsayn', type: 'Number', why: '18 Uhr (recycled — Uhrzeit).', ex: 'um 18 Uhr', exEn: 'at 18:00' },
      { w: 'Uhr', role: 'r-time', en: 'o\u2019clock', hi: 'बजे', pron: 'oor', type: 'Noun · time', why: 'die Uhr (recycled — Uhrzeit).', ex: 'um 18 Uhr', exEn: 'at 6 pm' },
      { w: 'bei', role: 'r-preposition', en: 'at', hi: 'के यहाँ', pron: 'by', type: 'Preposition' },
      { w: 'mir', role: 'r-dativ', en: 'my place', hi: 'मेरे यहाँ', pron: 'meer', type: 'Pronoun · dative', why: '"bei mir" = at my place.', ex: 'bei mir', exEn: 'at my place' },
      { w: '.', plain: true },
      { w: 'Bitte', role: 'r-adverb', en: 'please', hi: 'कृपया', pron: 'BI-tuh', type: 'Politeness', why: 'bitte (recycled — Im Café).', ex: 'Bitte kommt alle!', exEn: 'Please all come!' },
      { w: 'kommt', role: 'r-verb', en: 'come', hi: 'आओ', pron: 'komt', type: 'Verb · kommen (ihr)', why: 'kommen (recycled — Hallo!).', ex: 'Bitte kommt!', exEn: 'Please come!' },
      { w: 'alle', role: 'r-subject', en: 'everyone', hi: 'सब', pron: 'A-luh', type: 'Pronoun', why: 'alle (recycled — Modalverben 1).', ex: 'Kommt alle!', exEn: 'Everyone come!' },
      { w: '!', plain: true },
      { w: 'Liebe', role: 'r-adjective', en: 'Warm', hi: 'प्यार भरे', pron: 'LEE-buh', type: 'Closing', why: '"Liebe Grüße" = warm regards; informal closing (this chapter).', ex: 'Liebe Grüße, Anna', exEn: 'Warm regards, Anna' },
      { w: 'Grüße', role: 'r-object', en: 'regards', hi: 'अभिवादन', pron: 'GRÜ-suh', type: 'Closing', why: 'die Grußformel (this chapter).', ex: 'Liebe Grüße', exEn: 'warm regards' },
      { w: ',', plain: true },
      { w: 'Anna', role: 'r-subject', en: 'Anna', hi: 'अना', pron: 'A-na', type: 'Name', why: 'The signature (Unterschrift) comes last (this chapter).', ex: 'Liebe Grüße, Anna', exEn: 'Warm regards, Anna' },
      { w: '.', plain: true }
    ],
    translation: 'Dear friends, I warmly invite you. I\u2019m having a party, because it\u2019s my birthday. We meet on Saturday at 6 pm at my place. Please everyone come! Warm regards, Anna.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A1_034_L001', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Hallo Timo, wir machen am Samstag ein Picknick im Park. Kommst du?', en: 'Hi Timo, we\'re having a picnic in the park on Saturday. Are you coming?' },
      { id: 'A1_034_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Hallo Petra, gern! Soll ich etwas mitbringen?', en: 'Hi Petra, gladly! Should I bring something?' },
      { id: 'A1_034_L003', speaker: 'Petra', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Bring bitte Getränke mit. Wir treffen uns um zwölf Uhr.', en: 'Please bring drinks. We meet at twelve.' },
      { id: 'A1_034_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Perfekt, bis Samstag!', en: 'Perfect, see you Saturday!' }
    ],
    transcript: 'Hallo Timo, wir machen am Samstag ein Picknick im Park. Kommst du? Hallo Petra, gern! Soll ich etwas mitbringen? Bring bitte Getränke mit. Wir treffen uns um zwölf Uhr. Perfekt, bis Samstag!',
    translation: 'Hi Timo, we\'re having a picnic in the park on Saturday. Are you coming? Hi Petra, gladly! Should I bring something? Please bring drinks. We meet at twelve. Perfect, see you Saturday!',
    tokens: [
      { w: 'Hallo' },
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'wir' },
      { w: 'machen' },
      { w: 'am' },
      { w: 'Samstag' },
      { w: 'ein' },
      { w: 'Picknick' },
      { w: 'im' },
      { w: 'Park' },
      { w: '.', plain: true },
      { w: 'Kommst' },
      { w: 'du' },
      { w: '?', plain: true },
      { w: 'Hallo' },
      { w: 'Petra' },
      { w: ',', plain: true },
      { w: 'gern' },
      { w: '!', plain: true },
      { w: 'Soll' },
      { w: 'ich' },
      { w: 'etwas' },
      { w: 'mitbringen' },
      { w: '?', plain: true },
      { w: 'Bring' },
      { w: 'bitte' },
      { w: 'Getränke' },
      { w: 'mit' },
      { w: '.', plain: true },
      { w: 'Wir' },
      { w: 'treffen' },
      { w: 'uns' },
      { w: 'um' },
      { w: 'zwölf' },
      { w: 'Uhr' },
      { w: '.', plain: true },
      { w: 'Perfekt' },
      { w: ',', plain: true },
      { w: 'bis' },
      { w: 'Samstag' },
      { w: '!', plain: true }
    ],
    questions: [
      { q: 'Was machen Petra und ihre Freunde am Samstag?', qEn: 'What are Petra and friends doing on Saturday?', options: ['eine Party', 'ein Picknick', 'ein Konzert', 'ein Kurs'], optionsEn: ['a party', 'a picnic', 'a concert', 'a course'], answer: 1,
        explain: '"Wir machen am Samstag ein Picknick im Park."' },
      { q: 'Was soll Timo mitbringen?', qEn: 'What should Timo bring?', options: ['Kuchen', 'Getränke', 'Musik', 'nichts'], optionsEn: ['cake', 'drinks', 'music', 'nothing'], answer: 1,
        explain: '"Bring bitte Getränke mit."' }
    ]
  },

  speaking: [
    { task: "Du machst am Samstag ein Picknick im Park. Lade Timo ein.", taskEn: "You're having a picnic in the park on Saturday. Invite Timo.", de: "Wir machen am Samstag ein Picknick im Park. Kommst du?", en: "We're having a picnic in the park on Saturday. Are you coming?" },
    { task: "Du bekommst die Einladung und sagst zu. Frag auch nach dem Essen.", taskEn: "You get the invitation and accept. Also ask about food.", de: "Gern! Soll ich etwas mitbringen?", en: "I'd love to! Shall I bring something?" },
    { task: "Du kannst nicht kommen. Sag höflich ab und schreibe einen Gruß.", taskEn: "You can't come. Decline politely and add a greeting.", de: "Leider kann ich nicht kommen, denn ich habe keine Zeit. Herzliche Grüße!", en: "Unfortunately I can't come, because I have no time. Warm regards!" }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short invitation message (5\u20137 lines) to a friend: use the salutation "Liebe/Lieber …", invite them (Ich lade dich ein / Kommst du …?), give the date, time and place, and finish with "Liebe Grüße" and your name. Then write a one-line polite reply.',
    starters: ['Liebe/Lieber …,', 'ich lade dich ein.', 'Wir treffen uns am … um … bei …', 'Liebe Grüße, …'],
    placeholder: 'Liebe Anna, ich lade dich ein …',
    minWords: 25
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'You write to Frau Weber. Which closing fits?',
      options: ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Tschüss', 'Bis bald'],
      answer: 1,
      explain: 'A formal salutation (Sehr geehrte …) needs a formal closing: Mit freundlichen Grüßen.'
    },
    gap: {
      // formal salutation + closing
      sentence: ['Sehr ', ' Frau Weber, … Mit ', ' Grüßen.'],
      gaps: [ { answer: 'geehrte', accepts: ['geehrte'] }, { answer: 'freundlichen', accepts: ['freundlichen'] } ],
      explain: 'Formal pair: "Sehr geehrte …" + "Mit freundlichen Grüßen".'
    },
    match: {
      q: 'Match each part of a message to its meaning.',
      pairs: [
        { noun: 'die Anrede', art: 'salutation' },
        { noun: 'der Betreff', art: 'subject line' },
        { noun: 'der Gruß', art: 'greeting' },
        { noun: 'die Unterschrift', art: 'signature' }
      ]
    },
    builder: {
      target: 'Build: "I invite you." (informal)',
      bank: ['Ich', 'lade', 'dich', 'ein'],
      answer: ['Ich', 'lade', 'dich', 'ein'],
      roles: { 'Ich': 'r-subject', 'lade': 'r-verb', 'dich': 'r-akkusativ', 'ein': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is an INFORMAL salutation?', options: ['Sehr geehrte Frau Weber', 'Liebe Anna', 'Sehr geehrter Herr Müller', 'Sehr geehrte Damen und Herren'], answer: 1,
      explain: '"Liebe Anna," is informal; the others are formal.' },
    { q: 'Which closing is FORMAL?', options: ['Liebe Grüße', 'Viele Grüße', 'Mit freundlichen Grüßen', 'Bis bald'], answer: 2,
      explain: '"Mit freundlichen Grüßen" is the formal closing.' },
    { q: 'How do you invite someone?', options: ['Ich danke dich.', 'Ich lade dich ein.', 'Ich sehe dich.', 'Ich heiße dich.'], answer: 1,
      explain: 'einladen: "Ich lade dich ein."' },
    { q: 'Complete: "Ich schreibe ___ Max." (write to)', options: ['zu', 'an', 'für', 'mit'], answer: 1,
      explain: '"schreiben an" + accusative: "Ich schreibe an Max."' },
    { q: 'What is "der Betreff"?', options: ['the signature', 'the subject line', 'the greeting', 'the sender'], answer: 1,
      explain: 'der Betreff = the subject line of an email.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-object', html: 'Three parts: <span class="de">Anrede</span> (salutation), body, <span class="de">Grußformel</span> (closing) \u2014 plus a <span class="de">Betreff</span> for emails.' },
    { c: 'r-adjective', html: 'Friend: <span class="de">Liebe … / Liebe Grüße</span>. Formal: <span class="de">Sehr geehrte … / Mit freundlichen Grüßen</span>. Keep them matched.' },
    { c: 'r-verb', html: 'Invite & reply: <span class="de">Ich lade dich ein.</span> \u2192 <span class="de">Ja, gern!</span> / <span class="de">Leider kann ich nicht.</span>' }
  ],
  revisionTips: [
    'Match the bookends: informal salutation ↔ informal closing; formal ↔ formal.',
    'Every invitation needs date, time and place: am … um … bei …',
    'After the salutation comma, start the body with a small letter.'
  ]
};

window.CHAPTER = CHAPTER;
