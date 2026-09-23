/* ============================================================
   KLARWEG CHAPTER DATA — A2 · Phase 1 · Chapter 9
   "Vergleiche mit als / wie"  (comparisons: difference = Komparativ
   + als; equality = (genau)so ... wie). Teaches ONLY als vs wie.
   No je ... desto, no als ob / als wenn.
   Vocabulary source: uploaded chapter-09 list (~100 items; cinema /
   media / apartment-hunt / pets theme). Recycles Ch.8 (Komparativ/
   Superlativ), Ch.4-7 (weil/dass, modal Pr\u00e4t., Dativ possessives),
   Ch.3 (Artikel), and A1 adjectives.
   NOTE: content only \u2014 existing audio engine, no new assets.

   SOURCE TYPOS corrected (flagged, not silently overridden):
   • "ablmalen" \u2192 abmalen (to copy by drawing)
   • "herunter]laden" \u2192 herunterladen (to download)
   • "wegllaufen" \u2192 weglaufen (to run away)
   • "das Hasilein" \u2192 das H\u00e4slein (little rabbit)
   • "grammaor exercise" \u2192 grammar exercise (die Grammatikaufgabe)
   • "leicht - lighter" glossed as leicht = light/easy (leichter is
     its Komparativ, recycled from Ch.8)
   • "legen - to lie" \u2192 legen = to lay/put (down); glossed so.
   • "sollen - to be the point" glossed as sollen = to be meant to.
   • Combining prefixes kept in natural compounds: "-j\u00e4hrig"
     (zehnj\u00e4hrig), "hell-" (hellblau).
============================================================ */
const CHAPTER = {
  id: 'a2-9-vergleiche-als-wie',
  phase: 'A2 · Phase 1',
  number: 9,
  title: 'Vergleiche mit als / wie',
  titleEn: 'Comparisons with als / wie',
  description: 'One small choice decides every comparison. When two things are DIFFERENT, use the Komparativ with als: Anna ist gr\u00f6\u00dfer als Max. When they are the SAME, use (genau)so ... wie: Ich bin so gro\u00df wie du. Mix them up \u2014 "gr\u00f6\u00dfer wie", "so gr\u00f6\u00dfer als" \u2014 and it sounds instantly off. Learn one checklist: different? \u2192 als. Same? \u2192 wie. That\u2019s the whole chapter.',
  xp: 160,
  time: 25,
  difficulty: 'Elementary',
  nextChapter: { number: 10, title: 'Goethe Mini 1', titleEn: 'Goethe Checkpoint 1' , href: 'chapter-a2-10-goethe-mini-1.html' },

  prevChapter: { number: 8, title: 'Komparativ & Superlativ', titleEn: 'Comparative & Superlative', href: 'chapter-a2-8-komparativ-superlativ.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'Film night is being planned, and Jara and Timo can\'t agree — is this trailer better than the last one, or just as exciting? The evening becomes a live drill in als for a difference and wie for an equality.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear gr\u00f6\u00dfer als and genauso gut wie side by side'
    ],
    scene: 'Filmabend-Planung im Kurs \u2014 Sprachschule Berlin',
    femaleSpeakers: ['Jara'],
    dialogue: [
      { speaker: 'Jara', tokens: [
        { w: 'Dieser', role: 'r-subject', en: 'this (masc.)', hi: 'यह', pron: 'DEE-zer', type: 'Determiner' },
        { w: 'Trailer', role: 'r-subject', en: 'trailer', hi: 'ट्रेलर', pron: 'TRAY-ler', type: 'Noun · masc.', why: 'der Trailer (this chapter).', ex: 'Dieser Trailer ist spannend.', exEn: 'This trailer is exciting.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'genauso', role: 'r-adverb', en: 'just as', hi: 'उतना ही', pron: 'ge-NOW-zo', type: 'Adverb', why: 'genauso … wie = just as … as (this chapter).', ex: 'Er ist genauso gut wie der erste.', exEn: 'It is just as good as the first one.' },
        { w: 'spannend', role: 'r-adjective', en: 'exciting', hi: 'रोमांचक', pron: 'SHPAN-ent', type: 'Adjective' },
        { w: 'wie', role: 'r-conjunction', en: 'as', hi: 'जितना', pron: 'vee', type: 'Conjunction · wie', why: 'wie names an equal comparison (this chapter).', ex: 'genauso spannend wie' },
        { w: 'der', role: 'r-subject', en: 'the', hi: 'वह', pron: 'dair', type: 'Article · masc.' },
        { w: 'erste', role: 'r-subject', en: 'first', hi: 'पहला', pron: 'AIRS-tuh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'This trailer is just as exciting as the first one.', hi: 'Yeh trailer pehle jitna hi romaanchak hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Findest', role: 'r-verb', en: 'do you find', hi: 'सोचती हो', pron: 'FIN-dest', type: 'Verb · finden (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: '?', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचता हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Handlung', role: 'r-akkusativ', en: 'plot', hi: 'कहानी', pron: 'HANT-lung', type: 'Noun · fem.', why: 'die Handlung (this chapter).', ex: 'Die Handlung ist interessant.', exEn: 'The plot is interesting.' },
        { w: 'weniger', role: 'r-adverb', en: 'less', hi: 'कम', pron: 'VAY-ni-ger', type: 'Adverb' },
        { w: 'interessant', role: 'r-adjective', en: 'interesting', hi: 'दिलचस्प', pron: 'in-te-re-SANT', type: 'Adjective' },
        { w: 'als', role: 'r-conjunction', en: 'than', hi: 'से', pron: 'als', type: 'Conjunction · als' },
        { w: 'vorher', role: 'r-adverb', en: 'before', hi: 'पहले', pron: 'FOR-hair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Do you really find that? I find the plot less interesting than before.', hi: 'Kya sach mein tumhe aisa lagta hai? Mujhe kahaani pehle se kam dilchasp lagti hai.' },
      { speaker: 'Jara', tokens: [
        { w: 'Hmm', role: 'r-subject', en: 'hmm', hi: 'हम्म', pron: 'hm', type: 'Filler' },
        { w: '.', plain: true },
        { w: 'Vielleicht', role: 'r-adverb', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'recht', role: 'r-akkusativ', en: 'right', hi: 'सही', pron: 'rekht', type: 'Fixed phrase' },
        { w: '.', plain: true },
        { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Filmmusik', role: 'r-subject', en: 'film music', hi: 'फ़िल्म संगीत', pron: 'FILM-moo-zeek', type: 'Noun · fem.', why: 'die Filmmusik (this chapter).', ex: 'Die Filmmusik ist besser.', exEn: 'The film music is better.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'viel', role: 'r-adverb', en: 'much', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'besser', role: 'r-adjective', en: 'better', hi: 'बेहतर', pron: 'BE-ser', type: 'Adjective · Komparativ' },
        { w: 'als', role: 'r-conjunction', en: 'than', hi: 'से', pron: 'als', type: 'Conjunction · als' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'ersten', role: 'r-dativ', en: 'first', hi: 'पहले', pron: 'AIRS-ten', type: 'Adjective · dative' },
        { w: 'Film', role: 'r-dativ', en: 'film (dat.)', hi: 'फ़िल्म में', pron: 'film', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Hmm. Maybe you are right. But the film music is much better than in the first film.', hi: 'Hmm. Shayad tum sahi ho. Par film sangeet pehli film se kaafi behtar hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'stimmt', role: 'r-verb', en: 'is true', hi: 'सही है', pron: 'SHTIMT', type: 'Verb · stimmen' },
        { w: '!', plain: true },
        { w: 'Der', role: 'r-subject', en: 'the', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Titel', role: 'r-subject', en: 'title', hi: 'शीर्षक', pron: 'TEE-tel', type: 'Noun · masc.', why: 'der Titel (this chapter).', ex: 'Der Titel gefällt mir.', exEn: 'I like the title.' },
        { w: 'gefällt', role: 'r-verb', en: 'pleases', hi: 'पसंद है', pron: 'ge-FELT', type: 'Verb · gefallen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'That is true! I also like the title.', hi: 'Yeh sahi hai! Mujhe title bhi pasand hai.' },
      { speaker: 'Jara', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'finde', role: 'r-verb', en: 'find', hi: 'सोचती हूँ', pron: 'FIN-duh', type: 'Verb · finden (ich)' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'उसे', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Film', role: 'r-akkusativ', en: 'film', hi: 'फ़िल्म', pron: 'film', type: 'Noun · masc.' },
        { w: 'sehenswert', role: 'r-adjective', en: 'worth watching', hi: 'देखने लायक', pron: 'ZAY-enz-vairt', type: 'Adjective', why: 'sehenswert = worth watching (this chapter).', ex: 'Der Film ist sehenswert.', exEn: 'The film is worth watching.' },
        { w: '.', plain: true },
        { w: 'Gehen', role: 'r-verb', en: 'shall we go', hi: 'चलें', pron: 'GAY-en', type: 'Verb · gehen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'zusammen', role: 'r-adverb', en: 'together', hi: 'साथ में', pron: 'tsu-ZA-men', type: 'Adverb' },
        { w: 'ins', role: 'r-preposition', en: 'to the', hi: 'में', pron: 'ins', type: 'Preposition + place' },
        { w: 'Kino', role: 'r-akkusativ', en: 'cinema', hi: 'सिनेमा', pron: 'KEE-no', type: 'Noun · neut.' },
        { w: '?', plain: true }
      ], en: 'I find the film worth watching. Shall we go to the cinema together?', hi: 'Mujhe yeh film dekhne layak lagti hai. Chalein saath cinema?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'gern', role: 'r-adverb', en: 'gladly', hi: 'खुशी से', pron: 'gairn', type: 'Adverb' },
        { w: '!', plain: true },
        { w: 'Wann', role: 'r-question', en: 'when', hi: 'कब', pron: 'van', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'do you have', hi: 'है', pron: 'hast', type: 'Verb · haben (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'Zeit', role: 'r-akkusativ', en: 'time', hi: 'समय', pron: 'tsyte', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Yes, gladly! When do you have time?', hi: 'Haan, khushi se! Tumhare paas kab time hai?' },
      { speaker: 'Jara', tokens: [
        { w: 'Am', role: 'r-preposition', en: 'on the', hi: 'को', pron: 'am', type: 'Preposition + time' },
        { w: 'Freitag', role: 'r-time', en: 'Friday', hi: 'शुक्रवार', pron: 'FRY-tahk', type: 'Noun · day' },
        { w: '.', plain: true },
        { w: 'Passt', role: 'r-verb', en: 'does that suit', hi: 'ठीक है', pron: 'past', type: 'Verb · passen' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'On Friday. Does that suit you?', hi: 'Shukravaar ko. Kya tumhe theek hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Perfekt', role: 'r-subject', en: 'perfect', hi: 'बढ़िया', pron: 'per-FEKT', type: 'Reaction' },
        { w: '!', plain: true },
        { w: 'Bis', role: 'r-subject', en: 'until', hi: 'तक', pron: 'bis', type: 'Phrase (part)' },
        { w: 'Freitag', role: 'r-time', en: 'Friday', hi: 'शुक्रवार', pron: 'FRY-tahk', type: 'Noun · day' },
        { w: '!', plain: true }
      ], en: 'Perfect! See you Friday!', hi: 'Badhiya! Shukravaar ko milte hain!' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German splits comparisons in two, and one small word tells them apart. When two things are <strong>different</strong>, use the <strong>Komparativ + <span class="de r-vergleich">als</span></strong>: <span class="de">Anna ist gr\u00f6\u00dfer <span class="r-vergleich">als</span> Max.</span> When two things are <strong>the same</strong>, use <strong>(genau)so + plain adjective + <span class="de r-vergleich">wie</span></strong>: <span class="de">Ich bin so gro\u00df <span class="r-vergleich">wie</span> du.</span> Notice the equality form keeps the adjective in its <em>base</em> shape (gro\u00df, gut, sch\u00f6n \u2014 never gr\u00f6\u00dfer). You can strengthen it with <span class="de">genauso ... wie</span> or <span class="de">ebenso ... wie</span> ("just as ... as"). The classic slip is crossing the wires \u2014 <span class="de" style="text-decoration:line-through">gr\u00f6\u00dfer wie</span>, <span class="de" style="text-decoration:line-through">so gr\u00f6\u00dfer als</span>. One checklist keeps you safe: <strong>different \u2192 als, same \u2192 wie</strong>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (A2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is COMPARISONS with als vs wie. Difference = Komparativ + als; equality = (genau/eben)so + POSITIVE adjective + wie. ' +
    'No je...desto, no als ob. The learner wrote comparisons below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES \u2014 follow these exactly; never contradict them:\n' +
    '- DIFFERENT things: Komparativ (adj + -er, umlaut where needed) + als: "Anna ist gr\u00f6\u00dfer als Max." "Heute ist es w\u00e4rmer als gestern."\n' +
    '- SAME / equal: (genau)so / ebenso + the PLAIN (positive) adjective + wie: "Ich bin so gro\u00df wie du." "Deutsch ist genauso interessant wie Englisch." The adjective must NOT be a comparative here (never "so gr\u00f6\u00dfer wie").\n' +
    '- "than" is ALWAYS als, never wie: flag "gr\u00f6\u00dfer wie" \u2192 "gr\u00f6\u00dfer als"; flag "besser wie" \u2192 "besser als".\n' +
    '- "as ... as" is so ... wie, never so ... als: flag "genauso interessant als" \u2192 "genauso interessant wie".\n' +
    '- Negation of equality: "nicht so ... wie" = not as ... as. This is correct.\n' +
    '- Do not confuse with the earlier meaning of als = "when/as a" (Als Kind ...); in comparisons als means "than". If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> \u2026 </span>, then "\u2192", then the fix in <span class="de"> \u2026 </span>, then a short plain-English why. If there are no errors, write a single <li>No errors \u2014 well done.</li>\n' +
    '3) <p><b>als/wie check:</b> one sentence on whether als (difference) and wie (equality) were chosen correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'You never cross the wires \u2014 als for a difference, wie for a match. You\u2019ve finished Phase 1! Next: the Goethe Mini 1 checkpoint.',
    mid: 'Good. Re-read the decision checklist once (different \u2192 als, same \u2192 wie), then continue.',
    low: 'Worth another pass \u2014 the whole chapter is one question: are the two things the same (\u2192 wie) or different (\u2192 als)? Review the Grammar cards, then retake.'
  },

  parserSentence: [
    { w: 'Anna', role: 'r-subject' }, { w: 'ist', role: 'r-verb' },
    { w: 'so', role: 'r-vergleich' }, { w: 'gro\u00df', role: 'r-adjective' },
    { w: 'wie', role: 'r-vergleich' }, { w: 'Max', role: 'r-place' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the split: different \u2192 als, same \u2192 wie.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'A film-night argument \u2014 als and wie in every line.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the cinema/media/home words: der Trailer, die Handlung, wertvoll, m\u00f6bliert.' },
    { id: 'grammar',    label: 'als / wie',  tag: 'core',
      objective: 'Master Komparativ + als, (genau)so ... wie, and the classic mix-ups.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read two flats compared \u2014 als and wie back to back.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch each als and each wie in a quick comparison chat.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Compare yourself, family and Germany vs India out loud.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a comparison paragraph mixing als and so ... wie.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill the als/wie choice and fix the classic errors.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 160 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '\ud83d\udcda', title: 'Vocabulary PDF',
      desc: 'The chapter\u2019s cinema, media and home words \u2014 der Trailer, die Handlung, der Musikstil, m\u00f6bliert, wertvoll \u2014 with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '16 pages', kind: 'Vocabulary' },
    { icon: '\ud83d\udcdd', title: 'Homework PDF',
      desc: 'als-vs-wie drills, so ... wie practice, error-correction, and a compare-two-things paragraph task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '\ud83d\udcd6', title: 'Grammar Rules PDF',
      desc: 'The two comparison types, the equality forms (so/genauso/ebenso ... wie), the classic mistakes, and the decision checklist.',
      pdfUrl: '/pdfs/grammar.pdf', size: '7 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'gr\u00f6\u00dfer als \u2026', text: 'Mark a difference with Komparativ + als' },
    { de: 'so gro\u00df wie \u2026', text: 'Mark an equality with so ... wie' },
    { de: 'genauso / ebenso ... wie', text: 'Strengthen "just as ... as"' },
    { de: 'nicht so \u2026 wie \u2026', text: 'Say "not as ... as"' },
    { de: 'different \u2192 als \u00b7 same \u2192 wie', text: 'Never cross the wires again' }
  ],

  // ---------- Vocabulary (~100 items) ----------
  vocab: [
    // ===== Comparison core =====
    { de: 'wie', pos: 'conjunction', en: 'as, like (for equality: so ... wie)', hi: 'जैसा', ex: 'Ich bin so gro\u00df wie du.', exEn: 'I am as tall as you.' },
    { de: 'so ein', pos: 'phrase', en: 'such a', hi: 'ऐसा', ex: 'So ein Film ist genauso gut wie ein Buch.', exEn: 'Such a film is just as good as a book.' },
    { de: 'manche', pos: 'pronoun', en: 'some, several', hi: 'कुछ', ex: 'Manche Filme sind besser als das Buch.', exEn: 'Some films are better than the book.' },
    { de: 'eben', pos: 'adverb', en: 'just, simply', hi: 'बस', ex: 'Das ist eben so.', exEn: 'That\u2019s just how it is.' },
    { de: 'einfach', pos: 'adverb', en: 'simply', hi: 'बस, आसानी से', ex: 'Sag es einfach so wie immer.', exEn: 'Just say it as always.' },
    { de: 'n\u00e4mlich', pos: 'adverb', en: 'you see, namely', hi: 'दरअसल', ex: 'Der Trailer ist n\u00e4mlich besser als der Film.', exEn: 'The trailer, you see, is better than the film.' },
    { de: 'meinen', pos: 'verb', en: 'to think, to mean', hi: 'सोचना, मतलब होना', ex: 'Ich meine, der Titel ist so wichtig wie die Handlung.', exEn: 'I think the title is as important as the plot.', conj: { praesens: 'meint', praeteritum: 'meinte', perfekt: 'hat gemeint' } },
    { de: 'sollen', pos: 'verb', en: 'to be meant to; to be the point', hi: 'चाहिए; मतलब होना', ex: 'Was soll dieser Vergleich?', exEn: 'What\u2019s the point of this comparison?', conj: { praesens: 'soll', praeteritum: 'sollte', perfekt: 'hat gesollt' } },
    { de: 'Realit\u00e4t', art: 'die', gender: 'f', plural: 'Realit\u00e4ten', pos: 'noun', en: 'reality', hi: 'वास्तविकता', ex: 'Der Film ist spannender als die Realit\u00e4t.', exEn: 'The film is more exciting than reality.' },
    { de: 'Grammatikaufgabe', art: 'die', gender: 'f', plural: 'Grammatikaufgaben', pos: 'noun', en: 'grammar exercise', hi: 'व्याकरण अभ्यास', ex: 'Diese Grammatikaufgabe ist leichter als die letzte.', exEn: 'This grammar exercise is easier than the last one.' },
    // ===== Cinema & media =====
    { de: 'Fantasy-Film', art: 'der', gender: 'm', plural: 'Fantasy-Filme', pos: 'noun', en: 'fantasy film', hi: 'फ़ैंटेसी फ़िल्म', ex: 'Ein Fantasy-Film ist l\u00e4nger als eine Kom\u00f6die.', exEn: 'A fantasy film is longer than a comedy.' },
    { de: 'Trailer', art: 'der', gender: 'm', plural: 'Trailer', pos: 'noun', en: 'trailer', hi: 'ट्रेलर', ex: 'Der Trailer ist oft besser als der Film.', exEn: 'The trailer is often better than the film.' },
    { de: 'Handlung', art: 'die', gender: 'f', plural: 'Handlungen', pos: 'noun', en: 'plot, storyline', hi: 'कथानक', ex: 'Die Handlung ist so wichtig wie die Musik.', exEn: 'The plot is as important as the music.' },
    { de: 'Titel', art: 'der', gender: 'm', plural: 'Titel', pos: 'noun', en: 'title', hi: 'शीर्षक', ex: 'Ein guter Titel ist genauso wichtig wie ein gutes Ende.', exEn: 'A good title is just as important as a good ending.' },
    { de: 'Kinobesuch', art: 'der', gender: 'm', plural: 'Kinobesuche', pos: 'noun', en: 'cinema visit', hi: 'सिनेमा जाना', ex: 'Der Kinobesuch war teurer als gedacht.', exEn: 'The cinema visit was more expensive than expected.' },
    { de: 'Kurzbeschreibung', art: 'die', gender: 'f', plural: 'Kurzbeschreibungen', pos: 'noun', en: 'abstract, short description', hi: 'संक्षिप्त विवरण', ex: 'Die Kurzbeschreibung ist k\u00fcrzer als der Trailer.', exEn: 'The abstract is shorter than the trailer.' },
    { de: 'Ticketwahl', art: 'die', gender: 'f', plural: 'Ticketwahlen', pos: 'noun', en: 'ticket choice', hi: 'टिकट चयन', ex: 'Die Ticketwahl online ist einfacher als am Automaten.', exEn: 'Choosing tickets online is easier than at the machine.' },
    { de: 'Werk', art: 'das', gender: 'n', plural: 'Werke', pos: 'noun', en: 'work, piece', hi: 'कृति', ex: 'Dieses Werk ist so wertvoll wie ein Gem\u00e4lde.', exEn: 'This work is as valuable as a painting.' },
    { de: 'Musikstil', art: 'der', gender: 'm', plural: 'Musikstile', pos: 'noun', en: 'music genre', hi: 'संगीत शैली', ex: 'Mein Musikstil ist ruhiger als deiner.', exEn: 'My music genre is calmer than yours.' },
    { de: 'Stil', art: 'der', gender: 'm', plural: 'Stile', pos: 'noun', en: 'style', hi: 'शैली', ex: 'Ihr Stil ist moderner als der alte.', exEn: 'Her style is more modern than the old one.' },
    { de: 'Indie', pos: 'adjective', en: 'indie (independent)', hi: 'इंडी', ex: 'Ein Indie-Film ist oft ehrlicher als ein gro\u00dfer Film.', exEn: 'An indie film is often more honest than a big film.' },
    { de: 'Malerei', art: 'die', gender: 'f', plural: 'Malereien', pos: 'noun', en: 'painting (art form)', hi: 'चित्रकला', ex: 'Die Malerei im Film ist wertvoll.', exEn: 'The painting in the film is valuable.' },
    { de: 'abmalen', pos: 'verb', en: 'to copy by drawing, to depict', hi: 'नक़ल कर बनाना', ex: 'Sie malt das Bild so genau ab wie das Original.', exEn: 'She copies the picture as exactly as the original.', conj: { praesens: 'malt ab', praeteritum: 'malte ab', perfekt: 'hat abgemalt' } },
    { de: 'Witz', art: 'der', gender: 'm', plural: 'Witze', pos: 'noun', en: 'joke', hi: 'चुटकुला', ex: 'Sein Witz war lustiger als der Film.', exEn: 'His joke was funnier than the film.' },
    // ===== Tech / devices =====
    { de: 'Laptop', art: 'der', gender: 'm', plural: 'Laptops', pos: 'noun', en: 'laptop', hi: 'लैपटॉप', ex: 'Mein Laptop ist schneller als dein Mobiltelefon.', exEn: 'My laptop is faster than your mobile phone.' },
    { de: 'Mobiltelefon', art: 'das', gender: 'n', plural: 'Mobiltelefone', pos: 'noun', en: 'mobile phone', hi: 'मोबाइल फ़ोन', ex: 'Das Mobiltelefon ist so teuer wie ein Laptop.', exEn: 'The mobile phone is as expensive as a laptop.' },
    { de: 'Tastatur', art: 'die', gender: 'f', plural: 'Tastaturen', pos: 'noun', en: 'keyboard', hi: 'कीबोर्ड', ex: 'Diese Tastatur ist leiser als die alte.', exEn: 'This keyboard is quieter than the old one.' },
    { de: 'Lautsprecher', art: 'der', gender: 'm', plural: 'Lautsprecher', pos: 'noun', en: 'speaker, loudspeaker', hi: 'स्पीकर', ex: 'Der Lautsprecher ist fast so laut wie im Kino.', exEn: 'The speaker is almost as loud as in the cinema.' },
    { de: 'Spielekonsole', art: 'die', gender: 'f', plural: 'Spielekonsolen', pos: 'noun', en: 'games console', hi: 'गेम कंसोल', ex: 'Die neue Spielekonsole ist teurer als mein Laptop.', exEn: 'The new games console is more expensive than my laptop.' },
    { de: 'VR-Brille', art: 'die', gender: 'f', plural: 'VR-Brillen', pos: 'noun', en: 'VR goggles', hi: 'वीआर चश्मा', ex: 'Mit der VR-Brille ist das Spiel realer als im Kino.', exEn: 'With the VR goggles the game is more real than in the cinema.' },
    { de: 'Web-Adresse', art: 'die', gender: 'f', plural: 'Web-Adressen', pos: 'noun', en: 'web address, URL', hi: 'वेब पता', ex: 'Die Web-Adresse ist k\u00fcrzer als die alte.', exEn: 'The web address is shorter than the old one.' },
    { de: 'Rufnummer', art: 'die', gender: 'f', plural: 'Rufnummern', pos: 'noun', en: 'phone number', hi: 'फ़ोन नंबर', ex: 'Meine Rufnummer ist leichter als deine.', exEn: 'My phone number is easier than yours.' },
    { de: 'Vorwahl', art: 'die', gender: 'f', plural: 'Vorwahlen', pos: 'noun', en: 'dialling code, area code', hi: 'एरिया कोड', ex: 'Die Vorwahl von Berlin ist bekannter als die von M\u00fcnchen.', exEn: 'Berlin\u2019s dialling code is better known than Munich\u2019s.' },
    { de: 'herunterladen', pos: 'verb', en: 'to download (separable)', hi: 'डाउनलोड करना', ex: 'Ich lade den Film schneller herunter als du.', exEn: 'I download the film faster than you.', conj: { praesens: 'l\u00e4dt herunter', praeteritum: 'lud herunter', perfekt: 'hat heruntergeladen' } },
    { de: 'posten', pos: 'verb', en: 'to post (online)', hi: 'पोस्ट करना', ex: 'Sie postet mehr Fotos als ich.', exEn: 'She posts more photos than me.', conj: { praesens: 'postet', praeteritum: 'postete', perfekt: 'hat gepostet' } },
    { de: 'mailen', pos: 'verb', en: 'to email', hi: 'ईमेल करना', ex: 'Mail mir die Web-Adresse!', exEn: 'Email me the web address!', conj: { praesens: 'mailt', praeteritum: 'mailte', perfekt: 'hat gemailt' } },
    { de: 'senden', pos: 'verb', en: 'to send', hi: 'भेजना', ex: 'Ich sende dir das P\u00e4ckchen morgen.', exEn: 'I\u2019ll send you the package tomorrow.', conj: { praesens: 'sendet', praeteritum: 'sandte', perfekt: 'hat gesendet' } },
    { de: 'programmieren', pos: 'verb', en: 'to program, to code', hi: 'प्रोग्राम करना', ex: 'Er programmiert besser als die meisten.', exEn: 'He codes better than most.', conj: { praesens: 'programmiert', praeteritum: 'programmierte', perfekt: 'hat programmiert' } },
    // ===== Apartment hunt =====
    { de: 'm\u00f6bliert', pos: 'adjective', en: 'furnished', hi: 'सुसज्जित', ex: 'Die m\u00f6blierte Wohnung ist teurer als die leere.', exEn: 'The furnished flat is more expensive than the empty one.' },
    { de: 'Quadratmeter', art: 'der', gender: 'm', plural: 'Quadratmeter', pos: 'noun', en: 'square metre', hi: 'वर्ग मीटर', ex: 'Diese Wohnung hat mehr Quadratmeter als meine.', exEn: 'This flat has more square metres than mine.' },
    { de: 'Keller', art: 'der', gender: 'm', plural: 'Keller', pos: 'noun', en: 'basement, cellar', hi: 'तहख़ाना', ex: 'Der Keller ist k\u00fchler als das Wohnzimmer.', exEn: 'The basement is cooler than the living room.' },
    { de: 'Gartenhaus', art: 'das', gender: 'n', plural: 'Gartenh\u00e4user', pos: 'noun', en: 'summer house, garden shed', hi: 'बाग़ीचा घर', ex: 'Das Gartenhaus ist kleiner als die Wohnung.', exEn: 'The summer house is smaller than the flat.' },
    { de: 'Hausboot', art: 'das', gender: 'n', plural: 'Hausboote', pos: 'noun', en: 'houseboat', hi: 'हाउसबोट', ex: 'Ein Hausboot ist so gem\u00fctlich wie ein kleines Haus.', exEn: 'A houseboat is as cosy as a small house.' },
    { de: 'Campingplatz', art: 'der', gender: 'm', plural: 'Campingpl\u00e4tze', pos: 'noun', en: 'campsite', hi: 'शिविर स्थल', ex: 'Der Campingplatz ist billiger als das Hotel.', exEn: 'The campsite is cheaper than the hotel.' },
    { de: 'Zuhause', art: 'das', gender: 'n', plural: '\u2014', pos: 'noun', en: 'home', hi: 'घर', ex: 'Mein Zuhause ist so wichtig wie meine Familie.', exEn: 'My home is as important as my family.' },
    { de: 'Ufer', art: 'das', gender: 'n', plural: 'Ufer', pos: 'noun', en: 'shore, bank', hi: 'किनारा', ex: 'Das Ufer ist n\u00e4her als der Park.', exEn: 'The shore is nearer than the park.' },
    { de: 'Lampion', art: 'der', gender: 'm', plural: 'Lampions', pos: 'noun', en: 'paper lantern', hi: 'काग़ज़ी लालटेन', ex: 'Der Lampion macht den Garten so sch\u00f6n wie ein Fest.', exEn: 'The lantern makes the garden as nice as a festival.' },
    { de: 'k\u00fcndigen', pos: 'verb', en: 'to give notice, to quit', hi: 'त्यागपत्र देना', ex: 'Ich k\u00fcndige die Wohnung fr\u00fcher als geplant.', exEn: 'I\u2019m giving notice on the flat earlier than planned.', conj: { praesens: 'k\u00fcndigt', praeteritum: 'k\u00fcndigte', perfekt: 'hat gek\u00fcndigt' } },
    { de: 'legen', pos: 'verb', en: 'to lay, to put (down)', hi: 'रखना', ex: 'Leg den Schl\u00fcssel so wie immer auf den Tisch.', exEn: 'Put the key on the table as always.', conj: { praesens: 'legt', praeteritum: 'legte', perfekt: 'hat gelegt' } },
    { de: 'auspacken', pos: 'verb', en: 'to unpack (separable)', hi: 'सामान खोलना', ex: 'Wir packen die Kisten schneller aus als gedacht.', exEn: 'We unpack the boxes faster than expected.', conj: { praesens: 'packt aus', praeteritum: 'packte aus', perfekt: 'hat ausgepackt' } },
    { de: 'ausprobieren', pos: 'verb', en: 'to try out (separable)', hi: 'आज़माना', ex: 'Probier die neue Tastatur aus \u2014 sie ist besser als die alte.', exEn: 'Try out the new keyboard \u2014 it\u2019s better than the old one.', conj: { praesens: 'probiert aus', praeteritum: 'probierte aus', perfekt: 'hat ausprobiert' } },
    { de: 'au\u00dferhalb von', pos: 'preposition', en: 'outside of', hi: 'के बाहर', ex: 'Au\u00dferhalb von Berlin ist es ruhiger als in der Stadt.', exEn: 'Outside of Berlin it\u2019s calmer than in the city.' },
    { de: 'L\u00e4nge', art: 'die', gender: 'f', plural: 'L\u00e4ngen', pos: 'noun', en: 'length', hi: 'लंबाई', ex: 'Die L\u00e4nge des Films ist gr\u00f6\u00dfer als die des Buches.', exEn: 'The length of the film is greater than that of the book.' },
    { de: 'Zeitraum', art: 'der', gender: 'm', plural: 'Zeitr\u00e4ume', pos: 'noun', en: 'period of time', hi: 'समयावधि', ex: 'In diesem Zeitraum ist die Miete h\u00f6her als sonst.', exEn: 'In this period the rent is higher than usual.' },
    { de: 'Zulassung', art: 'die', gender: 'f', plural: 'Zulassungen', pos: 'noun', en: 'admission, registration', hi: 'प्रवेश, पंजीकरण', ex: 'Die Zulassung dauert l\u00e4nger als die Anmeldung.', exEn: 'The admission takes longer than the registration.' },
    { de: 'AGB', art: 'die', gender: 'pl', plural: 'AGB', pos: 'noun', en: 'terms and conditions (T&Cs)', hi: 'नियम व शर्तें', ex: 'Die AGB sind l\u00e4nger als der Vertrag selbst.', exEn: 'The T&Cs are longer than the contract itself.' },
    { de: 'Gesch\u00e4ftsbedingungen', art: 'die', gender: 'pl', plural: 'Gesch\u00e4ftsbedingungen', pos: 'noun', en: 'business conditions, terms of business', hi: 'व्यापार शर्तें', ex: 'Die Gesch\u00e4ftsbedingungen sind so wichtig wie der Preis.', exEn: 'The business conditions are as important as the price.' },
    { de: 'best\u00e4tigen', pos: 'verb', en: 'to confirm', hi: 'पुष्टि करना', ex: 'Bitte best\u00e4tige die Zulassung schneller als letztes Mal.', exEn: 'Please confirm the admission faster than last time.', conj: { praesens: 'best\u00e4tigt', praeteritum: 'best\u00e4tigte', perfekt: 'hat best\u00e4tigt' } },
    { de: 'R\u00fcckfrage', art: 'die', gender: 'f', plural: 'R\u00fcckfragen', pos: 'noun', en: 'follow-up question, query', hi: 'प्रति-प्रश्न', ex: 'Eine R\u00fcckfrage ist besser als ein Fehler.', exEn: 'A follow-up question is better than a mistake.' },
    { de: 'P\u00e4ckchen', art: 'das', gender: 'n', plural: 'P\u00e4ckchen', pos: 'noun', en: 'small parcel, package', hi: 'छोटा पार्सल', ex: 'Das P\u00e4ckchen ist leichter als der Koffer.', exEn: 'The parcel is lighter than the suitcase.' },
    { de: 'K\u00e4sebrot', art: 'das', gender: 'n', plural: 'K\u00e4sebrote', pos: 'noun', en: 'cheese sandwich', hi: 'चीज़ सैंडविच', ex: 'Ein K\u00e4sebrot ist schneller gemacht als eine Torte.', exEn: 'A cheese sandwich is made faster than a gateau.' },
    { de: 'Torte', art: 'die', gender: 'f', plural: 'Torten', pos: 'noun', en: 'gateau, layer cake', hi: 'केक', ex: 'Die Torte ist s\u00fc\u00dfer als das K\u00e4sebrot.', exEn: 'The gateau is sweeter than the cheese sandwich.' },
    // ===== Pets & animals =====
    { de: 'Tier', art: 'das', gender: 'n', plural: 'Tiere', pos: 'noun', en: 'animal', hi: 'जानवर', ex: 'Ein Tier ist manchmal treuer als ein Mensch.', exEn: 'An animal is sometimes more loyal than a person.' },
    { de: 'H\u00e4slein', art: 'das', gender: 'n', plural: 'H\u00e4slein', pos: 'noun', en: 'little rabbit, bunny', hi: 'नन्हा खरगोश', ex: 'Mein H\u00e4slein ist kleiner als eine Katze.', exEn: 'My little rabbit is smaller than a cat.' },
    { de: 'M\u00e4uschen', art: 'das', gender: 'n', plural: 'M\u00e4uschen', pos: 'noun', en: 'little mouse (term of endearment)', hi: 'नन्ही चुहिया', ex: 'Das M\u00e4uschen ist so leise wie ein Schatten.', exEn: 'The little mouse is as quiet as a shadow.' },
    { de: 'Ratte', art: 'die', gender: 'f', plural: 'Ratten', pos: 'noun', en: 'rat', hi: 'चूहा', ex: 'Eine Ratte ist gr\u00f6\u00dfer als eine Maus.', exEn: 'A rat is bigger than a mouse.' },
    { de: 'Schwein', art: 'das', gender: 'n', plural: 'Schweine', pos: 'noun', en: 'pig', hi: 'सूअर', ex: 'Ein Schwein ist kl\u00fcger als viele denken.', exEn: 'A pig is smarter than many think.' },
    { de: 'Vogel', art: 'der', gender: 'm', plural: 'V\u00f6gel', pos: 'noun', en: 'bird', hi: 'पक्षी', ex: 'Der Vogel singt fr\u00f6hlicher als am Morgen.', exEn: 'The bird sings more cheerfully than in the morning.' },
    { de: 'f\u00fcttern', pos: 'verb', en: 'to feed', hi: 'खिलाना', ex: 'Ich f\u00fcttere mein H\u00e4slein \u00f6fter als den Vogel.', exEn: 'I feed my rabbit more often than the bird.', conj: { praesens: 'f\u00fcttert', praeteritum: 'f\u00fctterte', perfekt: 'hat gef\u00fcttert' } },
    { de: 'weglaufen', pos: 'verb', en: 'to run away (separable)', hi: 'भाग जाना', ex: 'Das Tier lief schneller weg als der Hund.', exEn: 'The animal ran away faster than the dog.', conj: { praesens: 'l\u00e4uft weg', praeteritum: 'lief weg', perfekt: 'ist weggelaufen' } },
    { de: 'Besitzerin', art: 'die', gender: 'f', plural: 'Besitzerinnen', pos: 'noun', en: 'owner (f.)', hi: 'मालकिन', ex: 'Die Besitzerin ist so ruhig wie ihr Tier.', exEn: 'The owner is as calm as her animal.' },
    // ===== People / society =====
    { de: 'Enkel', art: 'der', gender: 'm', plural: 'Enkel', pos: 'noun', en: 'grandchild, grandson', hi: 'पोता', ex: 'Ihr Enkel ist so gro\u00df wie sein Vater.', exEn: 'Her grandson is as tall as his father.' },
    { de: 'Entertainer', art: 'der', gender: 'm', plural: 'Entertainer', pos: 'noun', en: 'entertainer (m.)', hi: 'मनोरंजनकर्ता', ex: 'Der Entertainer ist lauter als der Radiosprecher.', exEn: 'The entertainer is louder than the radio announcer.' },
    { de: 'Radiosprecher', art: 'der', gender: 'm', plural: 'Radiosprecher', pos: 'noun', en: 'radio announcer', hi: 'रेडियो उद्घोषक', ex: 'Der Radiosprecher spricht deutlicher als im Film.', exEn: 'The radio announcer speaks more clearly than in the film.' },
    { de: 'Gesellschaft', art: 'die', gender: 'f', plural: 'Gesellschaften', pos: 'noun', en: 'society; company', hi: 'समाज', ex: 'In guter Gesellschaft ist ein Abend sch\u00f6ner als allein.', exEn: 'In good company an evening is nicer than alone.' },
    { de: 'Verzeihung', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'pardon, excuse me', hi: 'माफ़ करें', ex: 'Verzeihung, ist der Platz so frei wie dieser?', exEn: 'Excuse me, is that seat as free as this one?' },
    // ===== Adjectives / adverbs =====
    { de: 'bl\u00f6d', pos: 'adjective', en: 'daft, silly, dumb', hi: 'बेवकूफ़', ex: 'Der Film war bl\u00f6der als der Trailer.', exEn: 'The film was dafter than the trailer.' },
    { de: 'fr\u00f6hlich', pos: 'adjective', en: 'happy, cheerful', hi: 'प्रसन्न', ex: 'Heute bin ich fr\u00f6hlicher als gestern.', exEn: 'Today I\u2019m happier than yesterday.' },
    { de: 'wertvoll', pos: 'adjective', en: 'valuable', hi: 'मूल्यवान', ex: 'Zeit ist wertvoller als Geld.', exEn: 'Time is more valuable than money.' },
    { de: 'vorsichtig', pos: 'adjective', en: 'careful', hi: 'सावधान', ex: 'Sei so vorsichtig wie m\u00f6glich.', exEn: 'Be as careful as possible.' },
    { de: 'still', pos: 'adjective', en: 'silent, quiet', hi: 'शांत', ex: 'Der Keller ist stiller als das Wohnzimmer.', exEn: 'The basement is quieter than the living room.' },
    { de: 'Stille', art: 'die', gender: 'f', plural: '\u2014', pos: 'noun', en: 'silence, stillness', hi: 'ख़ामोशी', ex: 'Die Stille am Ufer ist so sch\u00f6n wie Musik.', exEn: 'The silence by the shore is as beautiful as music.' },
    { de: 'unendlich', pos: 'adjective', en: 'endless, infinite', hi: 'अनंत', ex: 'Der Film war so unendlich lang wie eine Grammatikaufgabe.', exEn: 'The film was as endless as a grammar exercise.' },
    { de: 'uninteressant', pos: 'adjective', en: 'uninteresting', hi: 'नीरस', ex: 'Die Doku ist nicht so uninteressant wie du denkst.', exEn: 'The documentary isn\u2019t as uninteresting as you think.' },
    { de: 'nah', pos: 'adjective', en: 'near, close', hi: 'नज़दीक', ex: 'Das Kino ist so nah wie der Park.', exEn: 'The cinema is as near as the park.' },
    { de: 'knapp', pos: 'adjective', en: 'around, just under; scarce', hi: 'लगभग; कम', ex: 'Die Wohnung hat knapp so viele Quadratmeter wie deine.', exEn: 'The flat has just about as many square metres as yours.' },
    { de: 'leicht', pos: 'adjective', en: 'light, easy', hi: 'हल्का, आसान', ex: 'Das P\u00e4ckchen ist leichter als der Koffer.', exEn: 'The parcel is lighter than the suitcase.' },
    { de: 'hell-', pos: 'prefix', en: 'light- (as in hellblau)', hi: 'हल्का', ex: 'Die W\u00e4nde sind hellblau, heller als vorher.', exEn: 'The walls are light blue, lighter than before.' },
    { de: 'pl\u00f6tzlich', pos: 'adverb', en: 'suddenly', hi: 'अचानक', ex: 'Pl\u00f6tzlich war es so still wie nachts.', exEn: 'Suddenly it was as quiet as at night.' },
    { de: 'mehrmals', pos: 'adverb', en: 'repeatedly, several times', hi: 'कई बार', ex: 'Ich habe den Trailer mehrmals gesehen.', exEn: 'I watched the trailer several times.' },
    { de: 'mehrmalig', pos: 'adjective', en: 'repeated', hi: 'बार-बार होने वाला', ex: 'Nach mehrmaligem Fragen kam die Best\u00e4tigung.', exEn: 'After repeated asking the confirmation came.' },
    // ===== Emotion / life verbs =====
    { de: 'lachen', pos: 'verb', en: 'to laugh', hi: 'हँसना', ex: 'Bei der Kom\u00f6die lacht man mehr als beim Fantasy-Film.', exEn: 'You laugh more at the comedy than at the fantasy film.', conj: { praesens: 'lacht', praeteritum: 'lachte', perfekt: 'hat gelacht' } },
    { de: 'weinen', pos: 'verb', en: 'to cry', hi: 'रोना', ex: 'Am Ende weinte sie mehr als im ganzen Film.', exEn: 'At the end she cried more than in the whole film.', conj: { praesens: 'weint', praeteritum: 'weinte', perfekt: 'hat geweint' } },
    { de: 'fl\u00fcstern', pos: 'verb', en: 'to whisper', hi: 'फुसफुसाना', ex: 'Im Kino fl\u00fcstert man leiser als zu Hause.', exEn: 'In the cinema you whisper more quietly than at home.', conj: { praesens: 'fl\u00fcstert', praeteritum: 'fl\u00fcsterte', perfekt: 'hat gefl\u00fcstert' } },
    { de: 'sterben', pos: 'verb', en: 'to die', hi: 'मरना', ex: 'Im Fantasy-Film sterben mehr Figuren als in der Kom\u00f6die.', exEn: 'More characters die in the fantasy film than in the comedy.', conj: { praesens: 'stirbt', praeteritum: 'starb', perfekt: 'ist gestorben' } },
    { de: '-j\u00e4hrig', pos: 'suffix', en: '-year-old (as in zehnj\u00e4hrig)', hi: 'साल का', ex: 'Der zehnj\u00e4hrige Enkel ist so gro\u00df wie ich.', exEn: 'The ten-year-old grandson is as tall as me.' }
  ],

  // ---------- als / wie (rule cards) ----------
  grammar: [
    {
      title: 'The split: different \u2192 als, same \u2192 wie',
      goldenRule: 'Different \u2192 <b>Komparativ + als</b>. Same \u2192 <b>so + plain adjective + wie</b>.',
      formula: [
        'different:  Anna ist gr\u00f6\u00df<b>er als</b> Max.',
        'same:       Ich bin <b>so</b> gro\u00df <b>wie</b> du.'
      ],
      memoryTrick: 'Pehle rishta dekho, phir shabd chuno: <b>barabar \u2192 wie</b>, <b>alag \u2192 als</b>. Aur barabar wale mein adjective <b>simple</b> rehta hai \u2014 "so gr\u00f6\u00dfer wie" kabhi nahi.',
      recap: [
        'Komparativ (<b>-er</b>) always pairs with <b>als</b>.',
        'Equality keeps the <b>plain</b> adjective and pairs with <b>wie</b>.',
        'Never mix: no <i>so \u2026 als</i>, no <i>gr\u00f6\u00dfer wie</i>.'
      ],
      body: [
        'Every comparison is one of two kinds. If the two things are <strong>different</strong>, use the <strong>Komparativ + <span class="de r-vergleich">als</span></strong>. If they are <strong>the same</strong>, use <strong>(genau)so + plain adjective + <span class="de r-vergleich">wie</span></strong>.'
      ],
      table: {
        head: ['Relationship', 'Structure', 'Example'],
        rows: [
          ['different', '<span class="de">Komparativ + <span class="r-vergleich">als</span></span>', '<span class="de">Anna ist gr\u00f6\u00dfer <span class="r-vergleich">als</span> Max.</span>'],
          ['different', '<span class="de">Komparativ + <span class="r-vergleich">als</span></span>', '<span class="de">Heute ist es w\u00e4rmer <span class="r-vergleich">als</span> gestern.</span>'],
          ['same', '<span class="de">so + Positiv + <span class="r-vergleich">wie</span></span>', '<span class="de">Ich bin so gro\u00df <span class="r-vergleich">wie</span> du.</span>'],
          ['same', '<span class="de">genauso + Positiv + <span class="r-vergleich">wie</span></span>', '<span class="de">Deutsch ist genauso interessant <span class="r-vergleich">wie</span> Englisch.</span>']
        ]
      },
      note: 'The equality form keeps the adjective in its <b>plain</b> shape: <b>so gro\u00df wie</b>, <b>so gut wie</b> \u2014 never "so gr\u00f6\u00dfer wie". Only the als-side uses the Komparativ.',
      hinglish: 'Comparison do tarah ka hota hai. Agar dono cheezein alag hain, to Komparativ ke saath <b>als</b> lagta hai: <b>gr\u00f6\u00dfer als</b>. Aur agar dono barabar hain, to <b>(genau)so</b> + plain adjective + <b>wie</b> aata hai: <b>so gro\u00df wie</b>. Equality mein adjective apni simple form mein rehta hai \u2014 Komparativ nahi banta.'
    },
    {
      title: 'Equality: so / genauso / ebenso ... wie',
      goldenRule: 'The frame is <b>so \u2026 wie</b>. Strengthen with <b>genauso</b> / <b>ebenso</b>; negate with <b>nicht so \u2026 wie</b>.',
      memoryTrick: 'Frame ke do sire hain: <b>so</b> \u2026 <b>wie</b>. Beech mein adjective bina badle. Zor dena ho to <b>genauso</b>, ulta karna ho to <b>nicht so \u2026 wie</b>.',
      body: [
        'For "as ... as", the frame is <span class="de">so \u2026 wie</span>. Strengthen it to "just as ... as" with <span class="de">genauso</span> or <span class="de">ebenso</span>. Negate it for "not as ... as".'
      ],
      table: {
        head: ['Form', 'Meaning', 'Example'],
        rows: [
          ['<span class="de">so \u2026 <span class="r-vergleich">wie</span></span>', 'as \u2026 as', '<span class="de">Das Kino ist so nah <span class="r-vergleich">wie</span> der Park.</span>'],
          ['<span class="de">genauso \u2026 <span class="r-vergleich">wie</span></span>', 'just as \u2026 as', '<span class="de">Mein Film ist genauso gut <span class="r-vergleich">wie</span> deiner.</span>'],
          ['<span class="de">ebenso \u2026 <span class="r-vergleich">wie</span></span>', 'just as \u2026 as', '<span class="de">Der Titel ist ebenso wichtig <span class="r-vergleich">wie</span> die Handlung.</span>'],
          ['<span class="de">nicht so \u2026 <span class="r-vergleich">wie</span></span>', 'not as \u2026 as', '<span class="de">Die Doku ist nicht so lang <span class="r-vergleich">wie</span> der Film.</span>']
        ]
      },
      note: 'genauso and ebenso mean the same thing \u2014 "exactly/just as". They still take the <b>plain</b> adjective and <b>wie</b>, never als.',
      hinglish: 'Equality ka frame <b>so \u2026 wie</b> hai. Zor dena ho to <b>genauso</b> ya <b>ebenso \u2026 wie</b> use karo, jiska matlab hai \u201cbilkul utna hi\u201d. Ulta karna ho to <b>nicht so \u2026 wie</b>. In sab mein adjective plain form mein hi rehta hai.'
    },
    {
      title: 'Comparison table \u2014 at a glance',
      body: [
        'Keep this two-row picture in your head. The relationship decides the word.'
      ],
      table: {
        head: ['If the two things are \u2026', 'use \u2026', 'signal word'],
        rows: [
          ['<b>equal</b> (=)', '<span class="de">so / genauso / ebenso + Positiv</span>', '<span class="de r-vergleich">wie</span>'],
          ['<b>unequal</b> (\u2260, more/less)', '<span class="de">Komparativ (adj + -er)</span>', '<span class="de r-vergleich">als</span>']
        ]
      },
      note: 'One-line memory: <b>Gleich \u2192 wie. Verschieden \u2192 als.</b> (Same \u2192 wie. Different \u2192 als.)',
      hinglish: 'Ek line yaad rakho: Gleich (barabar) \u2192 wie. Verschieden (alag) \u2192 als. Rishta dekho, phir shabd chuno.'
    },
    {
      title: 'Common mistakes \u2014 and the fixes',
      body: [ 'These four are the classic als/wie slips. Learn them as "never" patterns.' ],
      mistakes: [
        { wrong: 'Anna ist gr\u00f6\u00dfer wie Max.', right: 'Anna ist gr\u00f6\u00dfer als Max.', why: 'A Komparativ (gr\u00f6\u00dfer) needs als for "than", never wie.' },
        { wrong: 'Mein Film ist so gr\u00f6\u00dfer als deiner.', right: 'Mein Film ist so gro\u00df wie deiner.', why: 'Equality uses so + PLAIN adjective + wie \u2014 not the Komparativ, not als.' },
        { wrong: 'Deutsch ist genauso interessant als Englisch.', right: 'Deutsch ist genauso interessant wie Englisch.', why: '"as ... as" is so/genauso ... wie, never so ... als.' },
        { wrong: 'Der Trailer ist besser wie der Film.', right: 'Der Trailer ist besser als der Film.', why: 'besser is a Komparativ \u2192 als.' }
      ],
      hinglish: 'Char classic galtiyan hoti hain. <b>gr\u00f6\u00dfer wie</b> ki jagah <b>gr\u00f6\u00dfer als</b> aana chahiye. <b>so gr\u00f6\u00dfer als</b> ki jagah <b>so gro\u00df wie</b>. <b>genauso interessant als</b> ki jagah <b>genauso interessant wie</b>. Aur <b>besser wie</b> ki jagah <b>besser als</b>. Yaad rakho ki Komparativ ke saath <b>als</b> hi aata hai.'
    },
    {
      title: 'Decision checklist',
      body: [
        'When you build any comparison, ask one question first.'
      ],
      table: {
        head: ['Ask yourself', 'Answer', 'Choose'],
        rows: [
          ['Are the two things the <b>same</b>?', 'yes', '<span class="de">so \u2026 <span class="r-vergleich">wie</span></span> (plain adjective)'],
          ['Are they <b>different</b> (more/less)?', 'yes', '<span class="de">Komparativ + <span class="r-vergleich">als</span></span>']
        ]
      },
      note: 'Say it before every comparison: <b>Same? \u2192 wie. Different? \u2192 als.</b> Two seconds of thinking removes the most common A2 error.',
      hinglish: 'Har comparison se pehle ek sawaal poochho: dono cheezein barabar hain ya alag? Barabar hain to <b>so \u2026 wie</b>, aur alag hain to Komparativ ke saath <b>als</b>. Do second sochne se A2 ki sabse common galti bach jaati hai.'
    }
  ],

  // ---------- Reading passage (Zwei Wohnungen, clickable) ----------
  reading: {
    title: 'Zwei Wohnungen',
    titleEn: 'Two flats',
    tokens: [
      { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'suche', role: 'r-verb', en: 'am looking for', hi: 'ढूँढ रहा हूँ', pron: 'ZOO-khuh', type: 'Verb \u00b7 suchen', why: 'suchen (recycled \u2014 Wohnung).', ex: 'Ich suche eine Wohnung.', exEn: 'I\u2019m looking for a flat.' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (neut. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'neues', role: 'r-adjective', en: 'new', hi: 'नया', pron: 'NOY-es', type: 'Adjective' },
      { w: 'Zuhause', role: 'r-object', en: 'home', hi: 'घर', pron: 'tsoo-HOW-zuh', type: 'Noun \u00b7 neut.', why: 'das Zuhause (this chapter).', ex: 'ein Zuhause', exEn: 'a home' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'vergleiche', role: 'r-verb', en: 'compare', hi: 'तुलना करता हूँ', pron: 'fair-GLY-khuh', type: 'Verb \u00b7 vergleichen', why: 'vergleichen (recycled \u2014 Komparativ).', ex: 'Ich vergleiche zwei Wohnungen.', exEn: 'I compare two flats.' },
      { w: 'zwei', role: 'r-akkusativ', en: 'two', hi: 'दो', pron: 'tsvy', type: 'Number' },
      { w: 'Wohnungen', role: 'r-object', en: 'flats', hi: 'फ़्लैट', pron: 'VO-nung-en', type: 'Noun \u00b7 plural', why: 'die Wohnung \u2192 die Wohnungen (recycled \u2014 Wohnung).', ex: 'zwei Wohnungen', exEn: 'two flats' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'पहली', pron: 'dee', type: 'Article' },
      { w: 'erste', role: 'r-adjective', en: 'first', hi: 'पहली', pron: 'AIRS-tuh', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'm\u00f6bliert', role: 'r-adjective', en: 'furnished', hi: 'सुसज्जित', pron: 'm\u00f6-BLEERT', type: 'Adjective', why: 'm\u00f6bliert (this chapter).', ex: 'm\u00f6bliert', exEn: 'furnished' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'gr\u00f6\u00dfer', role: 'r-adjective', en: 'bigger', hi: 'ज़्यादा बड़ी', pron: 'GR\u00d6-ser', type: 'Komparativ \u00b7 gro\u00df', why: 'gro\u00df \u2192 gr\u00f6\u00dfer (recycled \u2014 Komparativ).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference', why: 'DIFFERENT \u2192 als (this chapter).', ex: 'gr\u00f6\u00dfer als \u2026', exEn: 'bigger than \u2026' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'दूसरी', pron: 'dee', type: 'Article' },
      { w: 'zweite', role: 'r-adjective', en: 'second', hi: 'दूसरी', pron: 'TSVY-tuh', type: 'Adjective' },
      { w: ':', plain: true },
      { w: 'knapp', role: 'r-adjective', en: 'around', hi: 'लगभग', pron: 'knap', type: 'Adjective', why: 'knapp = just under/around (this chapter).', ex: 'knapp 60 Quadratmeter', exEn: 'around 60 square metres' },
      { w: 'sechzig', role: 'r-akkusativ', en: 'sixty', hi: 'साठ', pron: 'ZEKH-tsikh', type: 'Number' },
      { w: 'Quadratmeter', role: 'r-object', en: 'square metres', hi: 'वर्ग मीटर', pron: 'kva-DRAHT-may-ter', type: 'Noun \u00b7 masc.', why: 'der Quadratmeter (this chapter).', ex: 'sechzig Quadratmeter', exEn: 'sixty square metres' },
      { w: '.', plain: true },
      { w: 'Aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'दूसरी', pron: 'dee', type: 'Article' },
      { w: 'zweite', role: 'r-subject', en: 'second (one)', hi: 'दूसरी', pron: 'TSVY-tuh', type: 'Adjective' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'genauso', role: 'r-vergleich', en: 'just as', hi: 'बिल्कुल उतनी', pron: 'guh-NOW-zo', type: 'Comparison \u00b7 equality', why: 'genauso ... wie = just as ... as: SAME (this chapter).', ex: 'genauso hell wie \u2026', exEn: 'just as bright as \u2026' },
      { w: 'hell', role: 'r-adjective', en: 'bright', hi: 'रोशन', pron: 'hel', type: 'Adjective \u00b7 Positiv', why: 'hell (this chapter, hell-).', ex: 'so hell wie \u2026', exEn: 'as bright as \u2026' },
      { w: 'wie', role: 'r-vergleich', en: 'as', hi: 'जैसी', pron: 'vee', type: 'Comparison \u00b7 equality' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'पहली', pron: 'dee', type: 'Article' },
      { w: 'erste', role: 'r-object', en: 'first (one)', hi: 'पहली', pron: 'AIRS-tuh', type: 'Adjective' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
      { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb \u00b7 haben' },
      { w: 'einen', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'INE-en', type: 'Article \u00b7 acc.' },
      { w: 'Keller', role: 'r-object', en: 'basement', hi: 'तहख़ाना', pron: 'KE-ler', type: 'Noun \u00b7 masc.', why: 'der Keller (this chapter).', ex: 'einen Keller', exEn: 'a basement' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'r-subject', en: 'it', hi: 'यह', pron: 'zee', type: 'Pronoun' },
      { w: 'liegt', role: 'r-verb', en: 'is (located)', hi: 'स्थित है', pron: 'leekt', type: 'Verb \u00b7 liegen', why: 'liegen (recycled \u2014 Modalverben Pr\u00e4t.).', ex: 'Sie liegt am Ufer.', exEn: 'It\u2019s by the shore.' },
      { w: 'au\u00dferhalb', role: 'r-preposition', en: 'outside', hi: 'बाहर', pron: 'OW-ser-halp', type: 'Preposition', why: 'au\u00dferhalb von = outside of (this chapter).', ex: 'au\u00dferhalb von Berlin', exEn: 'outside of Berlin' },
      { w: 'von', role: 'r-preposition', en: 'of', hi: 'के', pron: 'fon', type: 'Preposition \u00b7 Dativ' },
      { w: 'Berlin', role: 'r-place', en: 'Berlin', hi: 'बर्लिन', pron: 'bair-LEEN', type: 'Name' },
      { w: ',', plain: true },
      { w: 'am', role: 'r-preposition', en: 'by the', hi: 'किनारे', pron: 'am', type: 'Preposition \u00b7 Dativ' },
      { w: 'Ufer', role: 'r-place', en: 'shore', hi: 'किनारे', pron: 'OO-fer', type: 'Noun \u00b7 neut.', why: 'das Ufer (this chapter).', ex: 'am Ufer', exEn: 'by the shore' },
      { w: ',', plain: true },
      { w: 'wo', role: 'r-place', en: 'where', hi: 'जहाँ', pron: 'vo', type: 'Adverb' },
      { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Stille', role: 'r-subject', en: 'silence', hi: 'ख़ामोशी', pron: 'SHTI-luh', type: 'Noun \u00b7 fem.', why: 'die Stille (this chapter).', ex: 'die Stille', exEn: 'the silence' },
      { w: 'so', role: 'r-vergleich', en: 'as', hi: 'इतनी', pron: 'zo', type: 'Comparison \u00b7 equality' },
      { w: 'sch\u00f6n', role: 'r-adjective', en: 'beautiful', hi: 'सुंदर', pron: 'sh\u00f6n', type: 'Adjective \u00b7 Positiv' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'wie', role: 'r-vergleich', en: 'as', hi: 'जैसी', pron: 'vee', type: 'Comparison \u00b7 equality' },
      { w: 'Musik', role: 'r-object', en: 'music', hi: 'संगीत', pron: 'moo-ZEEK', type: 'Noun \u00b7 fem.', why: 'die Musik (recycled \u2014 Freizeit).', ex: 'wie Musik', exEn: 'like music' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article' },
      { w: 'Miete', role: 'r-subject', en: 'rent', hi: 'किराया', pron: 'MEE-tuh', type: 'Noun \u00b7 fem.', why: 'die Miete (recycled \u2014 Wohnung).', ex: 'die Miete', exEn: 'the rent' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'niedriger', role: 'r-adjective', en: 'lower', hi: 'कम', pron: 'NEE-dri-ger', type: 'Komparativ \u00b7 niedrig', why: 'niedrig \u2192 niedriger (recycled \u2014 Komparativ).', ex: 'niedriger als \u2026', exEn: 'lower than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference' },
      { w: 'in', role: 'r-preposition', en: 'in', hi: 'में', pron: 'in', type: 'Preposition' },
      { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: 'शहर', pron: 'dair', type: 'Article \u00b7 dative' },
      { w: 'Stadt', role: 'r-place', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun \u00b7 fem.', why: 'die Stadt (recycled \u2014 Ort).', ex: 'in der Stadt', exEn: 'in the city' },
      { w: ',', plain: true },
      { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
      { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article' },
      { w: 'Weg', role: 'r-subject', en: 'way, commute', hi: 'रास्ता', pron: 'vayk', type: 'Noun \u00b7 masc.', why: 'der Weg (recycled \u2014 Verkehr).', ex: 'der Weg', exEn: 'the way' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'l\u00e4nger', role: 'r-adjective', en: 'longer', hi: 'लंबा', pron: 'LENG-er', type: 'Komparativ \u00b7 lang', why: 'lang \u2192 l\u00e4nger with umlaut (recycled \u2014 Komparativ).', ex: 'l\u00e4nger als \u2026', exEn: 'longer than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference' },
      { w: 'jetzt', role: 'r-time', en: 'now', hi: 'अभी', pron: 'yetst', type: 'Adverb \u00b7 time' },
      { w: '.', plain: true },
      { w: 'Ehrlich', role: 'r-adverb', en: 'honestly', hi: 'सच में', pron: 'AIR-likh', type: 'Adverb', why: 'ehrlich (recycled \u2014 weil).', ex: 'Ehrlich \u2026', exEn: 'Honestly \u2026' },
      { w: ':', plain: true },
      { w: 'Ruhe', role: 'r-subject', en: 'calm', hi: 'शांति', pron: 'ROO-uh', type: 'Noun \u00b7 fem.', why: 'die Ruhe (recycled \u2014 Adjektive).', ex: 'die Ruhe', exEn: 'the calm' },
      { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb \u00b7 sein' },
      { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मेरे लिए', pron: 'meer', type: 'Pronoun \u00b7 dative' },
      { w: 'wertvoller', role: 'r-adjective', en: 'more valuable', hi: 'ज़्यादा मूल्यवान', pron: 'VAIRT-fo-ler', type: 'Komparativ \u00b7 wertvoll', why: 'wertvoll \u2192 wertvoller (this chapter).', ex: 'wertvoller als \u2026', exEn: 'more valuable than \u2026' },
      { w: 'als', role: 'r-vergleich', en: 'than', hi: 'से', pron: 'als', type: 'Comparison \u00b7 difference' },
      { w: 'ein', role: 'r-akkusativ', en: 'a (masc. acc.)', hi: 'एक', pron: 'ine', type: 'Article \u00b7 acc.' },
      { w: 'kurzer', role: 'r-adjective', en: 'short', hi: 'छोटा', pron: 'KUR-tser', type: 'Adjective' },
      { w: 'Weg', role: 'r-object', en: 'commute', hi: 'रास्ता', pron: 'vayk', type: 'Noun \u00b7 masc.' },
      { w: '.', plain: true },
      { w: 'Deshalb', role: 'r-adverb', en: 'therefore', hi: 'इसलिए', pron: 'DES-halp', type: 'Adverb', why: 'deshalb (recycled \u2014 S\u00e4tze verbinden).', ex: 'Deshalb nehme ich \u2026', exEn: 'Therefore I\u2019ll take \u2026' },
      { w: 'nehme', role: 'r-verb', en: 'take', hi: 'लेता हूँ', pron: 'NAY-muh', type: 'Verb \u00b7 nehmen' },
      { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun' },
      { w: 'die', role: 'r-akkusativ', en: 'the (fem. acc.)', hi: 'दूसरी', pron: 'dee', type: 'Article \u00b7 acc.' },
      { w: 'zweite', role: 'r-object', en: 'second (one)', hi: 'दूसरी', pron: 'TSVY-tuh', type: 'Adjective' },
      { w: '.', plain: true }
    ],
    translation: 'I\u2019m looking for a new home and comparing two flats. The first is furnished and bigger than the second: around sixty square metres. But the second is just as bright as the first and has a basement. It\u2019s located outside of Berlin, by the shore, where the silence is as beautiful as music. The rent is lower than in the city, but the commute is longer than now. Honestly: calm is more valuable to me than a short commute. That\u2019s why I\u2019ll take the second one. \u2014 Watch the two types: gr\u00f6\u00dfer als, niedriger als, l\u00e4nger als, wertvoller als (difference, als) vs. genauso hell wie, so sch\u00f6n wie (equality, wie).'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — not a copy of the Story Dialogue.
    dialogue: [
      { id: 'A2_009_L001', speaker: 'Jara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Jara, ist das neue Restaurant besser als das alte?', en: 'Jara, is the new restaurant better than the old one?' },
      { id: 'A2_009_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich finde es nicht besser, aber genauso gut wie das alte.', en: 'I don\'t find it better, but just as good as the old one.' },
      { id: 'A2_009_L003', speaker: 'Jara', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Das Essen ist bestimmt teurer als vorher, oder?', en: 'The food is surely more expensive than before, right?' },
      { id: 'A2_009_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Nein, es ist genauso teuer wie früher.', en: 'No, it\'s just as expensive as before.' }
    ],
    transcript: 'Jara, ist das neue Restaurant besser als das alte? Ich finde es nicht besser, aber genauso gut wie das alte. Das Essen ist bestimmt teurer als vorher, oder? Nein, es ist genauso teuer wie früher.',
    translation: 'Jara, is the new restaurant better than the old one? I don\'t find it better, but just as good as the old one. The food is surely more expensive than before, right? No, it\'s just as expensive as before.',
    tokens: [
      { w: 'Jara' },
      { w: ',', plain: true },
      { w: 'ist' },
      { w: 'das' },
      { w: 'neue' },
      { w: 'Restaurant' },
      { w: 'besser' },
      { w: 'als' },
      { w: 'das' },
      { w: 'alte' },
      { w: '?', plain: true },
      { w: 'Ich' },
      { w: 'finde' },
      { w: 'es' },
      { w: 'nicht' },
      { w: 'besser' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'genauso' },
      { w: 'gut' },
      { w: 'wie' },
      { w: 'das' },
      { w: 'alte' },
      { w: '.', plain: true },
      { w: 'Das' },
      { w: 'Essen' },
      { w: 'ist' },
      { w: 'bestimmt' },
      { w: 'teurer' },
      { w: 'als' },
      { w: 'vorher' },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Nein' },
      { w: ',', plain: true },
      { w: 'es' },
      { w: 'ist' },
      { w: 'genauso' },
      { w: 'teuer' },
      { w: 'wie' },
      { w: 'früher' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie bewertet Timo das neue Restaurant?', qEn: 'How does Timo rate the new restaurant?', options: ['schlechter als das alte', 'besser als das alte', 'genauso gut wie das alte', 'viel teurer'], optionsEn: ['worse than the old one', 'better than the old one', 'just as good as the old one', 'much more expensive'], answer: 2,
        explain: '"… genauso gut wie das alte."' },
      { q: 'Wie ist der Preis im Vergleich?', qEn: 'How does the price compare?', options: ['viel teurer', 'genauso teuer wie früher', 'viel billiger', 'unbekannt'], optionsEn: ['much more expensive', 'just as expensive as before', 'much cheaper', 'unknown'], answer: 1,
        explain: '"Es ist genauso teuer wie früher."' }
    ]
  },

  speaking: [
    { task: "Deine Freundin fragt: Ist der Film so gut wie der Trailer?", taskEn: "Your friend asks: is the film as good as the trailer?", de: "Der Film ist nicht so gut wie der Trailer.", en: "The film isn't as good as the trailer." },
    { task: "Dein Partner fragt: Ist die Handlung besser als im Buch?", taskEn: "Your partner asks: is the plot better than in the book?", de: "Die Handlung ist besser als im Buch, nämlich viel logischer.", en: "The plot is better than in the book, in fact much more logical." },
    { task: "Dein Freund fragt: Ist das Kino so gut wie früher?", taskEn: "Your friend asks: is the cinema as good as it used to be?", de: "Das Kino ist nicht so gut wie früher, aber die Filme sind besser.", en: "The cinema isn't as good as it used to be, but the films are better." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a comparison paragraph (six sentences) about two things you know well \u2014 two cities, two flats, two jobs, or Germany vs India. Use at least two Komparativ + als sentences (gr\u00f6\u00dfer als, besser als \u2026) and two equality sentences (so ... wie / genauso ... wie). Include one "nicht so ... wie". Try this chapter\u2019s words: das Zuhause, der Quadratmeter, wertvoll, m\u00f6bliert, die Stille.',
    starters: ['\u2026 ist gr\u00f6\u00dfer als \u2026', '\u2026 ist genauso \u2026 wie \u2026', '\u2026 ist nicht so \u2026 wie \u2026', 'Am liebsten \u2026'],
    placeholder: 'Meine neue Wohnung ist gr\u00f6\u00dfer als die alte, aber nicht so ruhig wie am Ufer. Die Miete ist genauso hoch wie \u2026',
    minWords: 35
  },

  // ---------- Exercises (4 types) ----------
  exercises: {
    mcq: {
      q: 'Choose the correct comparison: "Anna ist gr\u00f6\u00dfer ___ Max."',
      options: ['wie', 'als', 'so wie', 'genauso'],
      answer: 1,
      explain: 'A Komparativ (gr\u00f6\u00dfer) needs als for "than".'
    },
    gap: {
      // equality (so ... wie) then difference (als)
      sentence: ['Mein Laptop ist so schnell ', ' deiner, aber dein Handy ist teurer ', ' meins.'],
      gaps: [ { answer: 'wie', accepts: ['wie'] }, { answer: 'als', accepts: ['als'] } ],
      explain: 'Equality: so schnell wie. Difference (teurer): als.'
    },
    match: {
      q: 'Match each sentence start to the right comparison word.',
      pairs: [
        { noun: 'Berlin ist gr\u00f6\u00dfer ___ M\u00fcnchen.', art: 'als' },
        { noun: 'Ich bin so gro\u00df ___ du.', art: 'wie' },
        { noun: 'Der Trailer war besser ___ der Film.', art: 'als (2)' },
        { noun: 'Deutsch ist genauso interessant ___ Englisch.', art: 'wie (2)' },
        { noun: 'Heute ist es w\u00e4rmer ___ gestern.', art: 'als (3)' }
      ]
    },
    builder: {
      target: 'Build (equality): "I am as tall as you."',
      bank: ['Ich', 'bin', 'so', 'gro\u00df', 'wie', 'du'],
      answer: ['Ich', 'bin', 'so', 'gro\u00df', 'wie', 'du'],
      roles: { 'Ich': 'r-subject', 'bin': 'r-verb', 'so': 'r-vergleich', 'gro\u00df': 'r-adjective', 'wie': 'r-vergleich', 'du': 'r-place' }
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Which word means "than" after a comparative?', options: ['wie', 'als', 'so', 'genauso'], answer: 1,
      explain: 'Komparativ + als: gr\u00f6\u00dfer als.' },
    { q: 'Complete (equality): "Ich bin so gro\u00df ___ du."', options: ['als', 'wie', 'als wie', 'genauso'], answer: 1,
      explain: 'Equality uses so ... wie: so gro\u00df wie du.' },
    { q: 'Which sentence is correct?', options: ['Anna ist gr\u00f6\u00dfer wie Max.', 'Anna ist so gr\u00f6\u00dfer als Max.', 'Anna ist gr\u00f6\u00dfer als Max.', 'Anna ist gr\u00f6\u00dfer als wie Max.'], answer: 2,
      explain: 'Komparativ (gr\u00f6\u00dfer) + als. Never "wie", never "so gr\u00f6\u00dfer".' },
    { q: 'How do you say "just as good as"?', options: ['genauso gut als', 'genauso besser wie', 'genauso gut wie', 'so besser wie'], answer: 2,
      explain: 'Equality keeps the plain adjective: genauso gut wie.' },
    { q: 'Two things are DIFFERENT. Which do you use?', options: ['so ... wie', 'Komparativ + als', 'genauso ... wie', 'ebenso ... wie'], answer: 1,
      explain: 'Different \u2192 Komparativ + als. Same \u2192 so ... wie.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-vergleich', html: 'Different \u2192 <b>Komparativ + <span class="de r-vergleich">als</span></b>: <span class="de">Anna ist gr\u00f6\u00dfer als Max.</span> "than" is always als, never wie.' },
    { c: 'r-vergleich', html: 'Same \u2192 <b>(genau)so + plain adjective + <span class="de r-vergleich">wie</span></b>: <span class="de">Ich bin so gro\u00df wie du.</span> Never a Komparativ here.' },
    { c: 'r-vergleich', html: 'One checklist: <b>Same? \u2192 wie. Different? \u2192 als.</b> Strengthen equality with genauso / ebenso ... wie; negate it with nicht so ... wie.' }
  ],
  revisionTips: [
    'Ask first: same or different? Same \u2192 wie. Different \u2192 als.',
    'Equality keeps the plain adjective: so gro\u00df wie, never "so gr\u00f6\u00dfer wie".',
    'A Komparativ (gr\u00f6\u00dfer, besser, w\u00e4rmer) always takes als, never wie.'
  ]
};

window.CHAPTER = CHAPTER;
