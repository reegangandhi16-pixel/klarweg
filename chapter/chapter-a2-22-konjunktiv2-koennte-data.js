/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 2 · Chapter 22
   "Konjunktiv II: könnte" — polite requests, suggestions,
   possibility, and hypothetical ability with können's Konjunktiv II.
   Present forms only: ich könnte, du könntest, er/sie/es könnte,
   wir könnten, ihr könntet, sie/Sie könnten. No würde, hätte, wäre,
   no Konjunktiv II of other modals, no B1 hypothetical structures.
   Vocabulary source: uploaded chapter-22 list (~70 items; job
   applications / workplace / freelance / inclusion theme —
   der Beamte, bewerben, das Stipendium, die Übersetzung, gehörlos,
   der Konjunktiv). Recycles Ch.6 (Modalverben im Präteritum),
   Ch.19–21 and A1 modal verbs throughout.
   NOTE: content only — existing audio engine, no new assets.
   Schema mirrors chapter-a2-21-verben-dativ-akkusativ-data.js
   exactly (flat vocab[], grammar[] rule cards, tokenized reading,
   etc.) so it runs on the shared chapter-app.js / chapter-tutor.js.

   SOURCE ISSUES corrected (flagged, not silently overridden):
   • "abllesen" → corrected to ablesen (to read off).
   • "anlstellen" → corrected to anstellen (to hire, to employ).
   • "aufgenommen - phone.)" — garbled gloss with a stray fragment
     → corrected to aufgenommen = recorded (Partizip II of
     aufnehmen), matching its use with Anrufbeantworter/Mailbox.
   • "ausldrucken" → corrected to ausdrucken (to print out).
   • "auslgeben" → corrected to ausgeben (to spend, money).
   • "der Beqmte" → corrected to der Beamte (civil servant, official).
   • "durchlatmen" → corrected to durchatmen (to breathe deeply).
   • "lang - (no direct translation)" → glossed as lang = long
     (its plain, well-known A1 meaning; the source left it blank).
   • "trägt vor - to present" → traced to the infinitive vortragen
     (to present, to give a talk); kept as vortragen, this chapter.
   • "unternehmen - todo" → corrected to unternehmen = to undertake,
     to do (an activity).
   • "das Verkehrsmittel - (see glossary)" → glossed as
     Verkehrsmittel = means of transport (recycled sense from A1).
   • "zurecht|kommen" → corrected to zurechtkommen (to manage, to
     cope — recycled from Ch.20).
   • "über - across" → über is multi-purpose; glossed here in its
     "about" sense (recycled Dativ/Akk. preposition from A1),
     since "across" alone is incomplete for A2.
============================================================ */
const CHAPTER = {
  id: 'a2-22-konjunktiv2-koennte',
  phase: 'A2 · Phase 2',
  number: 22,
  title: 'Konjunktiv II: könnte',
  titleEn: 'Konjunktiv II: könnte',
  description: 'Ich kann Deutsch sprechen states a fact. Ich könnte dir helfen softens it into an offer — polite, hypothetical, less direct. This chapter drills können\'s Konjunktiv II (ich könnte, du könntest, wir könnten …) across its four everyday jobs: polite requests, suggestions, possibility, and hypothetical ability.',
  xp: 180,
  time: 30,
  difficulty: 'Elementary',
  nextChapter: { number: 23, title: 'Konjunktiv II: sollte (Ratschläge)', titleEn: 'Konjunktiv II: sollte (advice)' , href: 'chapter-a2-23-konjunktiv2-sollte.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Ronja is putting together a job application while Timo\'s cable breaks nearby — and every fix becomes a chance to soften a request: not "Kannst du?" but "Könntest du?", the same offer of help, asked more politely.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear kann and könnte side by side'
    ],
    scene: 'Bewerbung schreiben — Sprachschule Berlin',
    femaleSpeakers: ['Ronja'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Mein', role: 'r-subject', en: 'my', hi: 'मेरा', pron: 'mine', type: 'Possessive' },
        { w: 'Kabel', role: 'r-subject', en: 'cable', hi: 'केबल', pron: 'KAH-bel', type: 'Noun · neut.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'kaputt', role: 'r-adjective', en: 'broken', hi: 'ख़राब', pron: 'ka-PUT', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Könntest', role: 'r-modalverb', en: 'could you', hi: 'सकती हो', pron: 'KÖN-test', type: 'Modal · können (Konjunktiv II, du)', why: 'könnte(st) = polite/hypothetical could (this chapter).', ex: 'Könntest du mir helfen?', exEn: 'Could you help me?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरी', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'helfen', role: 'r-verb', en: 'help', hi: 'मदद करना', pron: 'HEL-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'My cable is broken. Could you help me?', hi: 'Mera cable kharaab hai. Kya tum meri madad kar sakti ho?' },
      { speaker: 'Ronja', side: 'right', tokens: [
        { w: 'Klar', role: 'r-adverb', en: 'sure', hi: 'बिल्कुल', pron: 'klahr', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, wir)', why: 'könnten = could (plural), this chapter.', ex: 'Wir könnten es reparieren.', exEn: 'We could repair it.' },
        { w: 'es', role: 'r-akkusativ', en: 'it (neut.)', hi: 'इसे', pron: 'es', type: 'Pronoun · acc.' },
        { w: 'reparieren', role: 'r-verb', en: 'repair', hi: 'ठीक करना', pron: 're-pa-REE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Sure. We could repair it.', hi: 'Bilkul. Hum ise theek kar sakte hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Meinst', role: 'r-verb', en: 'do you think', hi: 'सोचती हो', pron: 'MYNST', type: 'Verb · meinen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II, es)', why: 'könnte = could (singular), this chapter.', ex: 'Das könnte funktionieren.', exEn: 'That could work.' },
        { w: 'funktionieren', role: 'r-verb', en: 'work', hi: 'काम करे', pron: 'funk-tsyo-NEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Do you think that could work?', hi: 'Kya tumhe lagta hai yeh kaam kar sakta hai?' },
      { speaker: 'Ronja', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'neues', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-es', type: 'Adjective' },
        { w: 'Kabel', role: 'r-akkusativ', en: 'cable', hi: 'केबल', pron: 'KAH-bel', type: 'Noun · neut.' },
        { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदना', pron: 'KOW-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, maybe we could also buy a new cable.', hi: 'Haan, shayad hum ek naya cable bhi khareed sakte hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Könntest', role: 'r-modalverb', en: 'could you', hi: 'सकती हो', pron: 'KÖN-test', type: 'Modal · können (Konjunktiv II, du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मेरा', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'dein', role: 'r-akkusativ', en: 'your (neut.)', hi: 'अपना', pron: 'dine', type: 'Possessive · acc.' },
        { w: 'Kabel', role: 'r-akkusativ', en: 'cable', hi: 'केबल', pron: 'KAH-bel', type: 'Noun · neut.' },
        { w: 'kurz', role: 'r-adverb', en: 'briefly', hi: 'थोड़ी देर के लिए', pron: 'kurts', type: 'Adverb' },
        { w: 'leihen', role: 'r-verb', en: 'lend', hi: 'उधार देना', pron: 'LY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Could you briefly lend me your cable?', hi: 'Kya tum mujhe apna cable thodi der ke liye udhaar de sakti ho?' },
      { speaker: 'Ronja', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '!', plain: true },
        { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहाँ', pron: 'heer', type: 'Adverb · place' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: '.', plain: true }
      ], en: 'Yes! Here it is.', hi: 'Haan! Yeh raha.' },
      { speaker: 'Timo', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'nett', role: 'r-adjective', en: 'kind', hi: 'दयालु', pron: 'net', type: 'Adjective' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'से', pron: 'fon', type: 'Preposition' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हारी', pron: 'deer', type: 'Pronoun · dative' },
        { w: '.', plain: true }
      ], en: 'Thanks! That is really kind of you.', hi: 'Dhanyavaad! Yeh sach mein tumhari daya hai.' },
      { speaker: 'Ronja', side: 'right', tokens: [
        { w: 'Kein', role: 'r-subject', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Problem', role: 'r-subject', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: 'könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'ein', role: 'r-akkusativ', en: 'a (neut.)', hi: 'एक', pron: 'ine', type: 'Article · neut. acc.' },
        { w: 'neues', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-es', type: 'Adjective' },
        { w: 'kaufen', role: 'r-verb', en: 'buy', hi: 'ख़रीदना', pron: 'KOW-fen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'No problem! And tomorrow we could buy a new one together.', hi: 'Koi baat nahi! Aur kal hum saath mein naya khareed sakte hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">Ich kann Deutsch sprechen.</span> states a plain fact. <span class="de r-modalverb">Ich könnte</span> dir helfen. softens the same idea — an offer, a suggestion, a possibility, not a blunt statement. <strong>könnte is Konjunktiv II of können</strong>: ich könnte, du könntest, er/sie/es könnte, wir könnten, ihr könntet, sie/Sie könnten. It does four jobs — <b>polite request</b> (Könntest du…?), <b>suggestion</b> (Wir könnten…), <b>possibility</b> (Es könnte…), and <b>hypothetical ability</b> (Ich könnte…) — always softer and less direct than plain kann.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV II OF KÖNNEN (könnte) for polite requests, suggestions, possibility, and hypothetical ability. ' +
    'No würde, hätte, wäre, no Konjunktiv II of other modal verbs, no B1 hypothetical structures. The learner wrote requests/suggestions below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Conjugation: ich könnte, du könntest, er/sie/es könnte, wir könnten, ihr könntet, sie/Sie könnten. Flag wrong endings (e.g. "du könnte" should be "du könntest").\n' +
    '- könnte + bare infinitive at the end: "Könntest du mir helfen?" — flag a second modal or "können" stacked on könnte (e.g. "Ich könnte gehen können" is wrong; just "Ich könnte gehen.").\n' +
    '- For politeness with "Sie", flag plain "Kannst Sie mir helfen?" as ungrammatical (Sie takes können, not kannst) and suggest "Könnten Sie mir helfen?" for politeness.\n' +
    '- kann = real, direct ability/fact; könnte = softer, polite, hypothetical. If the learner uses kann where a request should sound polite, gently suggest könnte — but don\'t mark kann as wrong when a plain fact is intended.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>kann vs. könnte check:</b> one sentence on whether the learner picked the right level of politeness.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You use könnte naturally for polite requests, suggestions and possibility. Next: give advice with sollte.',
    mid: 'Good. Re-read the könnte conjugation and the kann vs. könnte card once, then continue.',
    low: 'Worth another pass — remember: könnte softens kann into a request, suggestion, or possibility. Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Könntest', role: 'r-modalverb' }, { w: 'du', role: 'r-subject' },
    { w: 'mir', role: 'r-dativ' }, { w: 'bitte', role: 'r-adverb' },
    { w: 'helfen', role: 'r-verb' }, { w: '?', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See how könnte softens kann into a request, suggestion, or possibility.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A job-application afternoon full of polite könnte offers and suggestions.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter words: sich bewerben, der Beamte, das Stipendium, die Übersetzung, freiberuflich.' },
    { id: 'grammar',    label: 'könnte',     tag: 'core',
      objective: 'Master the conjugation, the four uses, kann vs. könnte, and the classic mistakes.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a job-application email full of polite könnte requests.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each könnte use in a workplace phone call.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Make polite requests, suggestions and offer possibilities.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a polite email or invitation using könnte.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill conjugation, kann vs. könnte, and error correction.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 180 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'The chapter\'s job-application and workplace words — sich bewerben, der Beamte, das Stipendium, freiberuflich, die Übersetzung — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'könnte conjugation drills, kann vs. könnte sorting, and a polite-email writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '8 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full könnte conjugation table, the four-use breakdown, common mistakes, and Hindi-speaker notes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '6 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Könntest du mir helfen?', text: 'Make a polite request instead of a blunt one' },
    { de: 'Wir könnten heute ins Kino gehen.', text: 'Offer a suggestion softly' },
    { de: 'Es könnte morgen regnen.', text: 'Express a possibility' },
    { de: 'Ich könnte das machen.', text: 'Offer a hypothetical ability' },
    { de: 'kann = fact · könnte = polite/possible', text: 'Choose the right one every time' }
  ],

  // ---------- Vocabulary (~70 items) ----------
  vocab: [
    { de: 'ablesen', pos: 'verb', en: 'to read off', hi: 'पढ़ना', ex: 'Könntest du mir die Zahl ablesen?', exEn: 'Could you read the number off for me?', conj: { praesens: 'liest ab', praeteritum: 'las ab', perfekt: 'hat abgelesen' } },
    { de: 'anstellen', pos: 'verb', en: 'to hire, to employ', hi: 'नौकरी देना', ex: 'Der Betrieb könnte dich anstellen.', exEn: 'The firm could hire you.', conj: { praesens: 'stellt an', praeteritum: 'stellte an', perfekt: 'hat angestellt' } },
    { de: 'aufgenommen', pos: 'adjective', en: 'recorded', hi: 'रिकॉर्ड किया गया', ex: 'Die Nachricht wurde auf der Mailbox aufgenommen.', exEn: 'The message was recorded on the voicemail.' },
    { de: 'ausdrucken', pos: 'verb', en: 'to print out', hi: 'प्रिंट करना', ex: 'Ich könnte das Dokument ausdrucken.', exEn: 'I could print out the document.', conj: { praesens: 'druckt aus', praeteritum: 'druckte aus', perfekt: 'hat ausgedruckt' } },
    { de: 'ausgeben', pos: 'verb', en: 'to spend (money)', hi: 'ख़र्च करना', ex: 'Wir könnten nicht so viel Geld ausgeben.', exEn: 'We couldn\'t spend that much money.', conj: { praesens: 'gibt aus', praeteritum: 'gab aus', perfekt: 'hat ausgegeben' } },
    { de: 'Autor', art: 'der', gender: 'm', plural: 'Autoren', pos: 'noun', en: 'author', hi: 'लेखक', ex: 'Könnte der Autor auch dolmetschen?', exEn: 'Could the author also interpret?' },
    { de: 'beantragen', pos: 'verb', en: 'to apply for', hi: 'आवेदन देना', ex: 'Du könntest ein Stipendium beantragen.', exEn: 'You could apply for a scholarship.', conj: { praesens: 'beantragt', praeteritum: 'beantragte', perfekt: 'hat beantragt' } },
    { de: 'Beamte', art: 'der', gender: 'm', plural: 'Beamte', pos: 'noun', en: 'civil servant, official', hi: 'अधिकारी', ex: 'Der Beamte könnte uns den PC leihen.', exEn: 'The official could lend us the PC.' },
    { de: 'Beste', art: 'das', gender: 'n', plural: '—', pos: 'noun', en: 'best', hi: 'सर्वश्रेष्ठ', ex: 'Das wäre das Beste für dich.', exEn: 'That would be the best for you.' },
    { de: 'bewerben (sich)', pos: 'verb', en: 'to apply', hi: 'आवेदन करना', ex: 'Ich muss mich bei einem Betrieb bewerben.', exEn: 'I have to apply at a firm.', conj: { praesens: 'bewirbt sich', praeteritum: 'bewarb sich', perfekt: 'hat sich beworben' } },
    { de: 'blicken', pos: 'verb', en: 'to understand', hi: 'समझना', ex: 'Ich blicke das nicht ganz.', exEn: 'I don\'t quite understand that.', conj: { praesens: 'blickt', praeteritum: 'blickte', perfekt: 'hat geblickt' } },
    { de: 'bunt', pos: 'adjective', en: 'colourful', hi: 'रंगीन', ex: 'Der Katalog ist sehr bunt.', exEn: 'The catalogue is very colourful.' },
    { de: 'dabei haben', pos: 'phrase', en: 'to have sth. on oneself', hi: 'साथ रखना', ex: 'Könntest du deinen Ausweis dabei haben?', exEn: 'Could you have your ID with you?' },
    { de: 'Disco', art: 'die', gender: 'f', plural: 'Discos', pos: 'noun', en: 'disco', hi: 'डिस्को', ex: 'Wir könnten heute in die Disco gehen.', exEn: 'We could go to the disco today.' },
    { de: 'Dokument', art: 'das', gender: 'n', plural: 'Dokumente', pos: 'noun', en: 'document', hi: 'दस्तावेज़', ex: 'Könntest du mir das Dokument zeigen?', exEn: 'Could you show me the document?' },
    { de: 'dolmetschen', pos: 'verb', en: 'to translate (interpret)', hi: 'अनुवाद करना', ex: 'Sie könnte für die Gehörlosen dolmetschen.', exEn: 'She could interpret for the deaf people.', conj: { praesens: 'dolmetscht', praeteritum: 'dolmetschte', perfekt: 'hat gedolmetscht' } },
    { de: 'dringend', pos: 'adjective', en: 'urgent', hi: 'ज़रूरी', ex: 'Das Dokument ist dringend.', exEn: 'The document is urgent.' },
    { de: 'durchatmen', pos: 'verb', en: 'to breathe deeply', hi: 'गहरी सांस लेना', ex: 'Ich muss kurz durchatmen.', exEn: 'I need to breathe deeply for a moment.', conj: { praesens: 'atmet durch', praeteritum: 'atmete durch', perfekt: 'hat durchgeatmet' } },
    { de: 'erfahren', pos: 'adjective', en: 'experienced', hi: 'अनुभवी', ex: 'Der Kursleiter ist sehr erfahren.', exEn: 'The course director is very experienced.' },
    { de: 'freiberuflich', pos: 'adjective', en: 'freelance', hi: 'स्वतंत्र', ex: 'Man könnte auch freiberuflich arbeiten.', exEn: 'One could also work freelance.' },
    { de: 'Gebäude', art: 'das', gender: 'n', plural: 'Gebäude', pos: 'noun', en: 'building', hi: 'इमारत', ex: 'Wir könnten den PC im Gebäude benutzen.', exEn: 'We could use the PC in the building.' },
    { de: 'gehörlos', pos: 'adjective', en: 'deaf, hearing-impaired', hi: 'बधिर', ex: 'Meine gehörlose Kollegin braucht eine Übersetzung.', exEn: 'My deaf colleague needs a translation.' },
    { de: 'Geldbörse', art: 'die', gender: 'f', plural: 'Geldbörsen', pos: 'noun', en: 'purse', hi: 'पर्स', ex: 'Könntest du deine Geldbörse dabei haben?', exEn: 'Could you have your purse with you?' },
    { de: 'Gitarre', art: 'die', gender: 'f', plural: 'Gitarren', pos: 'noun', en: 'guitar', hi: 'गिटार', ex: 'Er könnte uns seine Gitarre leihen.', exEn: 'He could lend us his guitar.' },
    { de: 'hart', pos: 'adjective', en: 'difficult, harsh', hi: 'कठिन', ex: 'Der Lohn ist hart für Teilzeit.', exEn: 'The wage is tough for part-time.' },
    { de: 'Katalog', art: 'der', gender: 'm', plural: 'Kataloge', pos: 'noun', en: 'catalogue', hi: 'सूची', ex: 'Der Autor unseres Katalogs könnte auch dolmetschen.', exEn: 'The author of our catalogue could also interpret.' },
    { de: 'klug', pos: 'adjective', en: 'clever', hi: 'चतुर', ex: 'Meine Prüferin sagte, ich sei klug genug.', exEn: 'My examiner said I was clever enough.' },
    { de: 'kompliziert', pos: 'adjective', en: 'complicated', hi: 'जटिल', ex: 'Die Bewerbung ist kompliziert.', exEn: 'The application is complicated.' },
    { de: 'kümmern (sich)', pos: 'verb', en: 'to take care of', hi: 'ध्यान रखना', ex: 'Könntest du dich um das Dokument kümmern?', exEn: 'Could you take care of the document?', conj: { praesens: 'kümmert sich', praeteritum: 'kümmerte sich', perfekt: 'hat sich gekümmert' } },
    { de: 'lang', pos: 'adjective', en: 'long', hi: 'लंबा', ex: 'Die Bewerbung ist sehr lang.', exEn: 'The application is very long.' },
    { de: 'lassen', pos: 'verb', en: 'to leave; to let', hi: 'छोड़ना; देना', ex: 'Der Beamte lässt uns den PC benutzen.', exEn: 'The official lets us use the PC.', conj: { praesens: 'lässt', praeteritum: 'ließ', perfekt: 'hat gelassen' } },
    { de: 'leihen', pos: 'verb', en: 'to borrow, to lend', hi: 'उधार लेना/देना', ex: 'Könntest du mir deine Gitarre leihen?', exEn: 'Could you lend me your guitar?', conj: { praesens: 'leiht', praeteritum: 'lieh', perfekt: 'hat geliehen' } },
    { de: 'Lernproblem', art: 'das', gender: 'n', plural: 'Lernprobleme', pos: 'noun', en: 'learning problem', hi: 'सीखने की समस्या', ex: 'Der Lernhelfer könnte bei Lernproblemen helfen.', exEn: 'The tutor could help with learning problems.' },
    { de: 'Lohn', art: 'der', gender: 'm', plural: 'Löhne', pos: 'noun', en: 'wage', hi: 'मज़दूरी', ex: 'Der Lohn ist hart für Teilzeit.', exEn: 'The wage is tough for part-time.' },
    { de: 'Mailbox', art: 'die', gender: 'f', plural: 'Mailboxen', pos: 'noun', en: 'voicemail', hi: 'वॉइसमेल', ex: 'Die Nachricht wurde auf der Mailbox aufgenommen.', exEn: 'The message was recorded on the voicemail.' },
    { de: 'Maler', art: 'der', gender: 'm', plural: 'Maler', pos: 'noun', en: 'painter', hi: 'चित्रकार', ex: 'Der Maler könnte das Gebäude bunt gestalten.', exEn: 'The painter could make the building colourful.' },
    { de: 'notwendig', pos: 'adjective', en: 'necessary', hi: 'आवश्यक', ex: 'Eine Übersetzung ist manchmal notwendig.', exEn: 'A translation is sometimes necessary.' },
    { de: 'Operation', art: 'die', gender: 'f', plural: 'Operationen', pos: 'noun', en: 'operation', hi: 'ऑपरेशन', ex: 'Der Herzchirurg könnte die Operation erklären.', exEn: 'The heart surgeon could explain the operation.' },
    { de: 'PC', art: 'der', gender: 'm', plural: 'PCs', pos: 'noun', en: 'PC', hi: 'पीसी', ex: 'Wir könnten den PC im Büro benutzen.', exEn: 'We could use the PC in the office.' },
    { de: 'Prüferin', art: 'die', gender: 'f', plural: 'Prüferinnen', pos: 'noun', en: 'examiner (f.)', hi: 'परीक्षक (महिला)', ex: 'Meine Prüferin sagte, ich sei klug genug.', exEn: 'My examiner said I was clever enough.' },
    { de: 'Rente', art: 'die', gender: 'f', plural: 'Renten', pos: 'noun', en: 'retirement, pension', hi: 'पेंशन', ex: 'Er könnte bald in Rente gehen.', exEn: 'He could soon go into retirement.' },
    { de: 'reparieren', pos: 'verb', en: 'to repair', hi: 'मरम्मत करना', ex: 'Könntest du den PC reparieren?', exEn: 'Could you repair the PC?', conj: { praesens: 'repariert', praeteritum: 'reparierte', perfekt: 'hat repariert' } },
    { de: 'Schrift', art: 'die', gender: 'f', plural: 'Schriften', pos: 'noun', en: 'script, font', hi: 'लिपि', ex: 'Die Schrift auf dem Dokument ist zu klein.', exEn: 'The script on the document is too small.' },
    { de: 'schriftlich', pos: 'adjective', en: 'written', hi: 'लिखित', ex: 'Könntest du das schriftlich schicken?', exEn: 'Could you send that in writing?' },
    { de: 'servieren', pos: 'verb', en: 'to serve', hi: 'परोसना', ex: 'Der Kellner könnte uns das Essen servieren.', exEn: 'The waiter could serve us the food.', conj: { praesens: 'serviert', praeteritum: 'servierte', perfekt: 'hat serviert' } },
    { de: 'sorgen (für)', pos: 'verb', en: 'to ensure, to take care of', hi: 'सुनिश्चित करना', ex: 'Sie könnte für die Übersetzung sorgen.', exEn: 'She could take care of the translation.', conj: { praesens: 'sorgt', praeteritum: 'sorgte', perfekt: 'hat gesorgt' } },
    { de: 'spülen', pos: 'verb', en: 'to rinse', hi: 'धोना', ex: 'Könntest du das Geschirr spülen?', exEn: 'Could you rinse the dishes?', conj: { praesens: 'spült', praeteritum: 'spülte', perfekt: 'hat gespült' } },
    { de: 'stundenweise', pos: 'adverb', en: 'hourly', hi: 'घंटे के हिसाब से', ex: 'Man könnte auch stundenweise arbeiten.', exEn: 'One could also work by the hour.' },
    { de: 'Teilzeit', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'part-time', hi: 'अंशकालिक', ex: 'Der Lohn ist hart für Teilzeit.', exEn: 'The wage is tough for part-time.' },
    { de: 'vortragen', pos: 'verb', en: 'to present, to give a talk', hi: 'प्रस्तुत करना', ex: 'Könntest du das Projekt vortragen?', exEn: 'Could you present the project?', conj: { praesens: 'trägt vor', praeteritum: 'trug vor', perfekt: 'hat vorgetragen' } },
    { de: 'unternehmen', pos: 'verb', en: 'to undertake, to do (an activity)', hi: 'करना', ex: 'Wir könnten heute etwas unternehmen.', exEn: 'We could do something today.', conj: { praesens: 'unternimmt', praeteritum: 'unternahm', perfekt: 'hat unternommen' } },
    { de: 'Verkehrsmittel', art: 'das', gender: 'n', plural: 'Verkehrsmittel', pos: 'noun', en: 'means of transport', hi: 'परिवहन का साधन', ex: 'Welches Verkehrsmittel könntest du nehmen?', exEn: 'Which means of transport could you take?' },
    { de: 'verlängern', pos: 'verb', en: 'to extend', hi: 'बढ़ाना', ex: 'Könnten Sie meinen Vertrag verlängern?', exEn: 'Could you extend my contract?', conj: { praesens: 'verlängert', praeteritum: 'verlängerte', perfekt: 'hat verlängert' } },
    { de: 'Werkzeug', art: 'das', gender: 'n', plural: 'Werkzeuge', pos: 'noun', en: 'tool', hi: 'औज़ार', ex: 'Könntest du mir dein Werkzeug leihen?', exEn: 'Could you lend me your tool?' },
    { de: 'Workshop', art: 'der', gender: 'm', plural: 'Workshops', pos: 'noun', en: 'workshop', hi: 'कार्यशाला', ex: 'Wir könnten einen Workshop besuchen.', exEn: 'We could attend a workshop.' },
    { de: 'wovon', pos: 'adverb', en: 'about what', hi: 'किस बारे में', ex: 'Wovon könnte der Workshop handeln?', exEn: 'What could the workshop be about?' },
    { de: 'Wunder', art: 'das', gender: 'n', plural: 'Wunder', pos: 'noun', en: 'miracle, wonder', hi: 'आश्चर्य', ex: 'Kein Wunder, dass du müde bist.', exEn: 'No wonder you\'re tired.' },
    { de: 'zurechtkommen', pos: 'verb', en: 'to manage, to cope', hi: 'सामंजस्य बनाना', ex: 'Könntest du mit dem neuen Lohn zurechtkommen?', exEn: 'Could you manage with the new wage?', conj: { praesens: 'kommt zurecht', praeteritum: 'kam zurecht', perfekt: 'ist zurechtgekommen' } },
    { de: 'über', pos: 'preposition', en: 'about', hi: 'के बारे में', ex: 'Erzähl mir über deine Bewerbung.', exEn: 'Tell me about your application.' },
    { de: 'Babysitterin', art: 'die', gender: 'f', plural: 'Babysitterinnen', pos: 'noun', en: 'babysitter (f.)', hi: 'बच्चा-देखभालक (महिला)', ex: 'Könnte die Babysitterin auch stundenweise kommen?', exEn: 'Could the babysitter also come by the hour?' },
    { de: 'Filmprojekt', art: 'das', gender: 'n', plural: 'Filmprojekte', pos: 'noun', en: 'film project', hi: 'फ़िल्म प्रोजेक्ट', ex: 'Ich schicke dir die Gliederung für das Filmprojekt.', exEn: 'I\'ll send you the outline for the film project.' },
    { de: 'Gliederung', art: 'die', gender: 'f', plural: 'Gliederungen', pos: 'noun', en: 'outline', hi: 'रूपरेखा', ex: 'Könntest du mir die Gliederung schicken?', exEn: 'Could you send me the outline?' },
    { de: 'Müllabfuhr', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'garbage disposal', hi: 'कचरा निपटान', ex: 'Die Müllabfuhr könnte später kommen.', exEn: 'The garbage disposal could come later.' },
    { de: 'Nervosität', art: 'die', gender: 'f', plural: '—', pos: 'noun', en: 'nervousness', hi: 'घबराहट', ex: 'Ein bisschen Nervosität vor der Prüfung ist normal.', exEn: 'A bit of nervousness before the exam is normal.' },
    { de: 'Politikerin', art: 'die', gender: 'f', plural: 'Politikerinnen', pos: 'noun', en: 'politician (f.)', hi: 'राजनेता (महिला)', ex: 'Die Politikerin könnte das Stipendium unterstützen.', exEn: 'The politician could support the scholarship.' },
    { de: 'Stipendium', art: 'das', gender: 'n', plural: 'Stipendien', pos: 'noun', en: 'scholarship', hi: 'छात्रवृत्ति', ex: 'Du könntest ein Stipendium beantragen.', exEn: 'You could apply for a scholarship.' },
    { de: 'Verwaltung', art: 'die', gender: 'f', plural: 'Verwaltungen', pos: 'noun', en: 'administration', hi: 'प्रशासन', ex: 'Ich schicke die Übersetzung für die Verwaltung.', exEn: 'I\'ll send the translation for the administration.' },
    { de: 'Übersetzung', art: 'die', gender: 'f', plural: 'Übersetzungen', pos: 'noun', en: 'translation', hi: 'अनुवाद', ex: 'Ich brauche eine Übersetzung für meine gehörlose Kollegin.', exEn: 'I need a translation for my deaf colleague.' },
    { de: 'Konjunktiv', art: 'der', gender: 'm', plural: 'Konjunktive', pos: 'noun', en: 'subjunctive', hi: 'सम्भाव्य क्रिया रूप', ex: 'Könnte ist der Konjunktiv II von können.', exEn: 'Könnte is the Konjunktiv II of können.' }
  ],

  // ---------- Konjunktiv II: könnte (rule cards) ----------
  grammar: [
    {
      title: 'Conjugation and kann vs. könnte',
      body: [
        '<span class="de r-modalverb">könnte</span> is the Konjunktiv II of können — same meaning family as "can", but softer, less direct, more hypothetical.'
      ],
      table: {
        head: ['Person', 'können (kann)', 'Konjunktiv II (könnte)'],
        rows: [
          ['ich', 'kann', '<span class="de r-modalverb">könnte</span>'],
          ['du', 'kannst', '<span class="de r-modalverb">könntest</span>'],
          ['er/sie/es', 'kann', '<span class="de r-modalverb">könnte</span>'],
          ['wir', 'können', '<span class="de r-modalverb">könnten</span>'],
          ['ihr', 'könnt', '<span class="de r-modalverb">könntet</span>'],
          ['sie/Sie', 'können', '<span class="de r-modalverb">könnten</span>']
        ]
      },
      note: '<span class="de">Ich kann Deutsch sprechen.</span> (plain fact) vs. <span class="de">Ich könnte dir helfen.</span> (softer offer).',
      hinglish: '<b>könnte</b> <b>können</b> ka Konjunktiv II hai. Matlab lagbhag \u201ccan\u201d jaisa hi hai, lekin yeh zyada polite lagta hai aur kam seedha. Saari forms neeche table mein hain.'
    },
    {
      title: 'Four everyday uses',
      body: [
        'könnte does four jobs in everyday German — all softer than a plain statement.'
      ],
      table: {
        head: ['Use', 'Example'],
        rows: [
          ['Polite request', '<span class="de">Könnten Sie mir helfen?</span> / <span class="de">Könntest du bitte das Fenster öffnen?</span>'],
          ['Suggestion', '<span class="de">Wir könnten heute ins Kino gehen.</span> / <span class="de">Du könntest mehr Deutsch sprechen.</span>'],
          ['Possibility', '<span class="de">Es könnte morgen regnen.</span> / <span class="de">Er könnte später kommen.</span>'],
          ['Hypothetical ability', '<span class="de">Ich könnte das machen.</span> / <span class="de">Sie könnte uns helfen.</span>']
        ]
      },
      note: 'Common frames: <span class="de">Könnten Sie … / Könntest du … / Wir könnten … / Man könnte … / Es könnte …</span>',
      hinglish: '<b>könnte</b> chaar kaam karta hai: polite request, suggestion, possibility, aur hypothetical ability. In sab mein yeh <b>kann</b> se zyada polite lagta hai.'
    },
    {
      title: 'kann vs. könnte',
      body: [
        'kann states real, direct ability or fact. könnte softens it — polite, suggested, or merely possible, not certain.'
      ],
      table: {
        head: ['kann (direct)', 'könnte (soft)'],
        rows: [
          ['<span class="de">Ich kann Deutsch sprechen.</span>', '<span class="de">Ich könnte dir helfen.</span>'],
          ['<span class="de">Kannst du das machen?</span> (direct question)', '<span class="de">Könntest du das machen?</span> (polite request)'],
          ['<span class="de">Er kann kommen.</span> (he is able to / will)', '<span class="de">Er könnte kommen.</span> (he might, possibly)']
        ]
      },
      hinglish: 'kann = seedha fact/ability. könnte = polite, suggestion, ya sirf possibility — pakka nahi.'
    },
    {
      title: 'Common learner mistakes',
      body: [
        '<span class="de strike">Ich könnte gehen können.</span> → <span class="de">Ich könnte gehen.</span> — never stack können on top of könnte; könnte already carries the "can" meaning.',
        '<span class="de strike">Kannst Sie mir helfen?</span> → <span class="de">Können Sie mir helfen?</span> / <span class="de">Könnten Sie mir helfen?</span> — Sie always takes the können/könnten form, never kannst.',
        '<span class="de strike">Ich kann Ihnen helfen?</span> (meant politely) → <span class="de">Könnte ich Ihnen helfen?</span> — when politeness is intended, reach for könnte, not a question mark on kann.'
      ],
      hinglish: 'Teen galtiyan common hain. <b>könnte</b> ke saath <b>können</b> dobara nahi jodna hai. Polite <b>Sie</b> ke saath <b>kannst</b> nahi chalega \u2014 <b>können</b> ya <b>könnten</b> aayega. Aur agar politeness chahiye to <b>könnte</b> use karo, <b>kann</b> nahi.'
    },
    {
      title: 'Quick decision guide',
      body: [ 'One question decides the verb every time.' ],
      table: {
        head: ['Situation', 'Use'],
        rows: [
          ['Real, direct ability or fact?', '→ <span class="de">kann</span>'],
          ['Polite request?', '→ <span class="de r-modalverb">könnte</span>'],
          ['Suggestion?', '→ <span class="de r-modalverb">könnte</span>'],
          ['Possibility (not certain)?', '→ <span class="de r-modalverb">könnte</span>']
        ]
      },
      hinglish: 'Seedha fact/ability? kann. Polite request, suggestion, ya possibility? könnte — teeno jagah könnte hi sahi hai.'
    }
  ],

  // ---------- Reading passage (Bewerbungs-E-Mail, clickable) ----------
  reading: {
    title: 'Eine E-Mail für die Bewerbung',
    titleEn: 'An email for the application',
    tokens: [
      { w: 'Sehr', role: 'r-adjective', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
      { w: 'geehrte', role: 'r-adjective', en: 'dear (formal)', hi: 'प्रिय', pron: 'guh-AIR-tuh', type: 'Adjective' },
      { w: 'Frau', role: 'r-subject', en: 'Ms', hi: 'श्रीमती', pron: 'frow', type: 'Noun · fem.' },
      { w: 'Weber', role: 'r-subject', en: 'Weber', hi: 'वेबर', pron: 'VAY-ber', type: 'Name' },
      { w: ',', plain: true },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूं', pron: 'MOEKH-tuh', type: 'Modalverb' },
      { w: 'mich', role: 'r-reflexiv', en: 'myself', hi: 'खुद', pron: 'mikh', type: 'Reflexivpronomen' },
      { w: 'bei', role: 'r-preposition', en: 'at', hi: 'में', pron: 'by', type: 'Preposition · Dat.' },
      { w: 'Ihrem', role: 'r-dativ', en: 'your (formal)', hi: 'आपका', pron: 'EE-rem', type: 'Possessivartikel · Dat.' },
      { w: 'Betrieb', role: 'r-dativ', en: 'firm', hi: 'कंपनी', pron: 'buh-TREEP', type: 'Noun · masc.' },
      { w: 'bewerben', role: 'r-verb', en: 'apply', hi: 'आवेदन करना', pron: 'buh-VAIR-ben', type: 'Verb · sich bewerben', why: 'sich bewerben (this chapter).', ex: 'sich bei einem Betrieb bewerben', exEn: 'to apply to a firm' },
      { w: '.', plain: true },
      { w: 'Könnten', role: 'r-modalverb', en: 'could', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Konjunktiv II · können (Sie)', why: 'könnten Sie — polite request (this chapter).', ex: 'Könnten Sie mir mitteilen, ob die Stelle noch frei ist?', exEn: 'Could you let me know whether the position is still open?' },
      { w: 'Sie', role: 'r-subject', en: 'you (formal)', hi: 'आप', pron: 'zee', type: 'Pronoun' },
      { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · Dativ' },
      { w: 'mitteilen', role: 'r-verb', en: 'let know', hi: 'बताना', pron: 'MIT-ty-len', type: 'Verb · mitteilen' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-frage', en: 'whether', hi: 'क्या', pron: 'op', type: 'Konjunktion · ob' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Stelle', role: 'r-subject', en: 'position', hi: 'पद', pron: 'SHTE-luh', type: 'Noun · fem.' },
      { w: 'noch', role: 'r-adverb', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
      { w: 'frei', role: 'r-adjective', en: 'free, open', hi: 'खाली', pron: 'fry', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: '?', plain: true },
      { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun' },
      { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAY-ruh', type: 'Verb · sein (Konj.)' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
      { w: 'hilfreich', role: 'r-adjective', en: 'helpful', hi: 'मदद', pron: 'HILF-ryhh', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'zu', role: 'r-preposition', en: 'to', hi: 'को', pron: 'tsoo', type: 'Preposition' },
      { w: 'wissen', role: 'r-verb', en: 'know', hi: 'जानना', pron: 'VI-sen', type: 'Verb · wissen' },
      { w: ',', plain: true },
      { w: 'ob', role: 'r-frage', en: 'whether', hi: 'क्या', pron: 'op', type: 'Konjunktion · ob' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Stelle', role: 'r-subject', en: 'position', hi: 'पद', pron: 'SHTE-luh', type: 'Noun · fem.' },
      { w: 'in', role: 'r-wechsel', en: 'in', hi: 'में', pron: 'in', type: 'Wechselpräposition' },
      { w: 'Teilzeit', role: 'r-akkusativ', en: 'part-time', hi: 'अंशकालिक', pron: 'TILE-tsyte', type: 'Noun · fem.', why: 'die Teilzeit (this chapter).', ex: 'in Teilzeit', exEn: 'part-time' },
      { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', pron: 'OH-der', type: 'Konjunktion' },
      { w: 'stundenweise', role: 'r-adverb', en: 'hourly', hi: 'घंटे के हिसाब से', pron: 'SHTOON-den-vy-zuh', type: 'Adverb', why: 'stundenweise (this chapter).', ex: 'stundenweise arbeiten', exEn: 'to work by the hour' },
      { w: 'möglich', role: 'r-adjective', en: 'possible', hi: 'संभव', pron: 'MOEG-likh', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
      { w: '.', plain: true },
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'सकता हूं', pron: 'KÖN-tuh', type: 'Konjunktiv II · können', why: 'könnte for hypothetical ability (this chapter).', ex: 'Ich könnte alle nötigen Dokumente ausdrucken.', exEn: 'I could print out all the necessary documents.' },
      { w: 'alle', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'AL-uh', type: 'Determiner' },
      { w: 'nötigen', role: 'r-adjective', en: 'necessary', hi: 'ज़रूरी', pron: 'NÖ-ti-gen', type: 'Adjective' },
      { w: 'Dokumente', role: 'r-akkusativ', en: 'documents', hi: 'दस्तावेज़', pron: 'do-koo-MEN-tuh', type: 'Noun · plural', why: 'das Dokument (this chapter).', ex: 'die Dokumente ausdrucken', exEn: 'to print out the documents' },
      { w: 'ausdrucken', role: 'r-verb', en: 'print out', hi: 'प्रिंट करना', pron: 'OWS-droo-ken', type: 'Verb · ausdrucken', why: 'ausdrucken (this chapter).', ex: 'ein Dokument ausdrucken', exEn: 'to print out a document' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Konjunktion' },
      { w: 'schriftlich', role: 'r-adjective', en: 'written', hi: 'लिखित', pron: 'SHRIFT-likh', type: 'Adjective', why: 'schriftlich (this chapter).', ex: 'schriftlich schicken', exEn: 'to send in writing' },
      { w: 'schicken', role: 'r-verb', en: 'send', hi: 'भेजना', pron: 'SHI-ken', type: 'Infinitive' },
      { w: '.', plain: true },
      { w: 'Vielen', role: 'r-akkusativ', en: 'many', hi: 'बहुत', pron: 'FEE-len', type: 'Determiner' },
      { w: 'Dank', role: 'r-object', en: 'thanks', hi: 'धन्यवाद', pron: 'dank', type: 'Noun · masc.' },
      { w: 'im', role: 'r-preposition', en: 'in', hi: 'में', pron: 'im', type: 'Preposition' },
      { w: 'Voraus', role: 'r-object', en: 'advance', hi: 'पहले से', pron: 'FOH-rows', type: 'Noun · masc.' },
      { w: '.', plain: true }
    ],
    translation: 'Dear Ms Weber, I would like to apply at your firm. Could you let me know whether the position is still open? It would also be helpful to know whether the position is possible part-time or by the hour. I could print out all the necessary documents and send them in writing. Thank you very much in advance. — Watch the three könnte/könnten uses: könnten Sie … mitteilen (polite request), and ich könnte … ausdrucken und schicken (hypothetical ability).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_022_L001', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, könntest du mir bei meiner Bewerbung helfen?', en: 'Timo, could you help me with my application?' },
      { id: 'A2_022_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klar, könntest du mir zuerst deinen Lebenslauf zeigen?', en: 'Sure, could you first show me your résumé?' },
      { id: 'A2_022_L003', speaker: 'Ronja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, einen Moment. Könnten wir uns morgen treffen?', en: 'Yes, one moment. Could we meet tomorrow?' },
      { id: 'A2_022_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Das könnte klappen, ich schaue in meinen Kalender.', en: 'That could work, I\'ll check my calendar.' }
    ],
    transcript: 'Timo, könntest du mir bei meiner Bewerbung helfen? Klar, könntest du mir zuerst deinen Lebenslauf zeigen? Ja, einen Moment. Könnten wir uns morgen treffen? Das könnte klappen, ich schaue in meinen Kalender.',
    translation: 'Timo, could you help me with my application? Sure, could you first show me your résumé? Yes, one moment. Could we meet tomorrow? That could work, I\'ll check my calendar.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'bei' },
      { w: 'meiner' },
      { w: 'Bewerbung' },
      { w: 'helfen' },
      { w: '?', plain: true },
      { w: 'Klar' },
      { w: ',', plain: true },
      { w: 'könntest' },
      { w: 'du' },
      { w: 'mir' },
      { w: 'zuerst' },
      { w: 'deinen' },
      { w: 'Lebenslauf' },
      { w: 'zeigen' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'einen' },
      { w: 'Moment' },
      { w: '.', plain: true },
      { w: 'Könnten' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'morgen' },
      { w: 'treffen' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'könnte' },
      { w: 'klappen' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'schaue' },
      { w: 'in' },
      { w: 'meinen' },
      { w: 'Kalender' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wobei braucht Ronja Hilfe?', qEn: 'What does Ronja need help with?', options: ['ihrer Wohnung', 'ihrer Bewerbung', 'ihrem Auto', 'ihrem Deutsch'], optionsEn: ['her flat', 'her application', 'her car', 'her German'], answer: 1,
        explain: '"Könntest du mir bei meiner Bewerbung helfen?"' },
      { q: 'Was möchte Timo zuerst sehen?', qEn: 'What does Timo want to see first?', options: ['ihre Fotos', 'ihren Lebenslauf', 'ihr Zeugnis', 'ihren Pass'], optionsEn: ['her photos', 'her CV', 'her certificate', 'her passport'], answer: 1,
        explain: '"Könntest du mir zuerst deinen Lebenslauf zeigen?"' }
    ]
  },

  speaking: [
    { task: "Du brauchst dringend ein Dokument. Frag höflich im Büro.", taskEn: "You urgently need a document. Ask politely at the office.", de: "Könnten Sie mir das Dokument ausdrucken?", en: "Could you print the document for me?" },
    { task: "Dein Freund weiß nicht, was er am Abend machen soll.", taskEn: "Your friend doesn't know what to do this evening.", de: "Wir könnten in die Disco gehen oder zu Hause bleiben.", en: "We could go to the club or stay at home." },
    { task: "Auf dem Amt brauchst du einen Dolmetscher. Frag den Beamten.", taskEn: "At the office you need an interpreter. Ask the official.", de: "Könnte jemand für mich dolmetschen?", en: "Could somebody interpret for me?" },
    { task: "Deine Freundin will sich bewerben, hat aber Angst.", taskEn: "Your friend wants to apply but is afraid.", de: "Du könntest dich einfach bewerben. Du hast gute Chancen.", en: "You could simply apply. You have good chances." },
    { task: "Dein Kollege hat das Dokument nicht dabei. Was schlägst du vor?", taskEn: "Your colleague hasn't got the document with him. What do you suggest?", de: "Du könntest es später schicken.", en: "You could send it later." },
    { task: "Frag höflich, ob du das Gebäude fotografieren darfst.", taskEn: "Ask politely whether you may photograph the building.", de: "Könnte ich hier ein Foto machen?", en: "Could I take a photo here?" },
    { task: "Deine Freundin ist nervös vor dem Amt. Beruhige sie.", taskEn: "Your friend is nervous about the office visit. Reassure her.", de: "Du könntest kurz durchatmen. Es wird gut gehen.", en: "You could take a deep breath. It'll be fine." },
    { task: "Du brauchst einen Termin, aber es ist dringend.", taskEn: "You need an appointment, but it's urgent.", de: "Könnten Sie mir einen Termin diese Woche geben? Es ist dringend.", en: "Could you give me an appointment this week? It's urgent." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short polite email (six sentences) making a request or suggestion, using at least four könnte/könntest/könnten sentences. Cover at least two of the four uses: polite request, suggestion, possibility, hypothetical ability. Try this chapter\'s words: sich bewerben, das Stipendium, freiberuflich, die Übersetzung.',
    starters: ['Könnten Sie …?', 'Könntest du …?', 'Wir könnten …', 'Es könnte …', 'Ich könnte …'],
    placeholder: 'Sehr geehrte Frau Weber, könnten Sie mir bitte mitteilen, ob …',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the polite request: "___ du mir bitte helfen?"',
      options: ['Kannst', 'Könntest', 'Kann'],
      answer: 1,
      explain: 'Könntest is the polite Konjunktiv II form for "du" — softer than the direct "Kannst".'
    },
    gap: {
      sentence: ['Es ', ' morgen regnen.'],
      gaps: [ { answer: 'könnte', accepts: ['könnte'] } ],
      explain: 'Es könnte + infinitive expresses possibility.'
    },
    match: {
      q: 'Match each könnte sentence to its use.',
      pairs: [
        { noun: 'Könnten Sie mir helfen?', art: 'polite request' },
        { noun: 'Wir könnten heute ins Kino gehen.', art: 'suggestion' },
        { noun: 'Es könnte morgen regnen.', art: 'possibility' },
        { noun: 'Ich könnte das machen.', art: 'hypothetical ability' },
        { noun: 'Man könnte auch freiberuflich arbeiten.', art: 'general suggestion' }
      ]
    },
    builder: {
      target: 'Build: "Could you show me the document?"',
      bank: ['Könntest', 'du', 'mir', 'das', 'Dokument', 'zeigen', '?'],
      answer: ['Könntest', 'du', 'mir', 'das', 'Dokument', 'zeigen', '?'],
      roles: { 'Könntest': 'r-modalverb', 'du': 'r-subject', 'mir': 'r-dativ', 'das': 'r-akkusativ', 'Dokument': 'r-akkusativ', 'zeigen': 'r-verb' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which is the polite Konjunktiv II form for "du"?', options: ['könntest', 'kannst', 'könnte'], answer: 0,
      explain: 'du könntest is the Konjunktiv II form for du.' },
    { q: 'Which sentence expresses a suggestion, not a fact?', options: ['Ich kann Deutsch sprechen.', 'Wir könnten heute ins Kino gehen.', 'Er kann schwimmen.'], answer: 1,
      explain: 'könnten softens the idea into a suggestion, not a statement of fact.' },
    { q: 'Complete: "___ Sie mir bitte helfen?" (polite, formal)', options: ['Kannst', 'Könnten', 'Kann'], answer: 1,
      explain: 'Sie always takes können/könnten, never kannst; könnten is the polite form.' },
    { q: 'Which is wrong?', options: ['Ich könnte gehen.', 'Ich könnte gehen können.', 'Ich könnte das machen.'], answer: 1,
      explain: 'Never stack können on top of könnte — könnte already carries the "can" meaning.' },
    { q: 'Which sentence expresses a possibility, not certainty?', options: ['Es regnet.', 'Es könnte regnen.', 'Es hat geregnet.'], answer: 1,
      explain: 'könnte marks something as possible, not certain.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-modalverb', html: '<span class="de r-modalverb">könnte</span> is the Konjunktiv II of können — <b>softer</b> than kann: ich könnte, du könntest, er/sie/es könnte, wir könnten, ihr könntet, sie/Sie könnten.' },
    { c: 'r-modalverb', html: 'könnte does four jobs: <b>polite request</b> (Könntest du…?), <b>suggestion</b> (Wir könnten…), <b>possibility</b> (Es könnte…), and <b>hypothetical ability</b> (Ich könnte…).' },
    { c: 'r-modalverb', html: 'Never stack können on könnte, and Sie always takes <span class="de">können/könnten</span>, never kannst.' }
  ],
  revisionTips: [
    'Real, direct ability or fact? → kann. Polite request, suggestion, or possibility? → könnte.',
    'könnte already means "could" — never add können after it.',
    'Sie takes können or könnten, never kannst — even for polite requests.'
  ]
};

window.CHAPTER = CHAPTER;
