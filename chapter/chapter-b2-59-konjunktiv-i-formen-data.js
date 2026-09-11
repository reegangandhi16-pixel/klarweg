/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 6 · Chapter 59
   "Konjunktiv I: Formen" — FORMATION ONLY. Verb stem + endings
   (-e, -est, -e, -en, -et, -en); sein/haben/werden; modal verbs;
   identical-to-Indicative forms flagged for Chapter 60. Does
   NOT teach indirect-speech usage, Konjunktiv II, or
   Ersatzformen — those come in later chapters.
   IMPORTANT: dialogue uses ONLY Ida and Timo.
   Vocabulary source: uploaded Chapter 59 list (22 items).
============================================================ */
const CHAPTER = {
  id: 'b2-59-konjunktiv-i-formen',
  phase: 'B2 · Phase 6',
  number: 59,
  title: 'Konjunktiv I: Formen',
  titleEn: 'Konjunktiv I: forms',
  description: 'er ist → er sei. Learn the verb forms first — indirect speech comes next chapter.',
  xp: 760,
  time: 75,
  difficulty: 'Advanced',
  nextChapter: { number: 60, title: 'Indirekte Rede: Grundlagen', titleEn: 'Reported speech: basics' , href: 'chapter-b2-60-indirekte-rede-grundlagen.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'er ist → er <em>sei</em>.',
    intro: 'Reading a newspaper quote from a coach about an exciting kart race, Ida and Timo notice the verb forms look slightly off — ist becomes sei — the foundation for reported speech next chapter.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Recognize Konjunktiv I forms before learning how to use them'
    ],
    scene: 'Zeitungslektüre',
    femaleSpeakers: ['Ida'],
    dialogue: [
      { speaker: 'Ida', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Trainer', role: 'r-subject', en: 'coach', hi: 'कोच', pron: 'TRAY-ner', type: 'Noun · masc.' },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'Kartrennen', role: 'r-subject', en: 'kart race', hi: 'कार्ट रेस', pron: 'KART-re-nen', type: 'Noun · neut.' },
        { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I)', hi: 'थी (Konjunktiv I)', pron: 'zy', type: 'Verb · sein (Konjunktiv I, er/sie/es)', why: 'Konjunktiv I: sei = 3rd person form used in indirect/reported speech (this chapter).', ex: 'Er sagt, das Rennen sei spannend gewesen.', exEn: 'He says the race was exciting.' },
        { w: 'spannend', role: 'r-akkusativ', en: 'exciting', hi: 'रोमांचक', pron: 'SHPA-nent', type: 'Adjective' },
        { w: 'gewesen', role: 'r-verb', en: 'been', hi: 'थी', pron: 'ge-VAY-zen', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'The coach says the kart race was exciting.', hi: 'Coach kehta hai ki kart race romaanchak thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'über', role: 'r-preposition', en: 'about', hi: 'के बारे में', pron: 'Ü-ber', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Lernphase', role: 'r-akkusativ', en: 'learning phase', hi: 'सीखने का चरण', pron: 'LAIRN-fah-zuh', type: 'Noun · fem.', why: 'die Lernphase (this chapter).', ex: 'die Lernphase' },
        { w: '?', plain: true }
      ], en: 'And what does he say about the learning phase?', hi: 'Aur woh seekhne ke charan ke baare mein kya kehta hai?' },
      { speaker: 'Ida', tokens: [
        { w: 'Er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'meint', role: 'r-verb', en: 'thinks', hi: 'सोचता है', pron: 'MYNT', type: 'Verb · meinen' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'hätten', role: 'r-verb', en: 'had (Konjunktiv I, wir)', hi: 'था', pron: 'HE-ten', type: 'Verb · haben (Konjunktiv I, wir)', why: 'Konjunktiv I plural often equals Konjunktiv II when identical to Präsens (wir haben → hätten, this chapter).', ex: 'Er meint, wir hätten viel gelernt.', exEn: 'He thinks we had learned a lot.' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'gelernt', role: 'r-verb', en: 'learned', hi: 'सीखा', pron: 'ge-LAIRNT', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'He thinks we had learned a lot.', hi: 'Woh sochta hai ki humne bahut seekha.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Glaubt', role: 'r-verb', en: 'does he believe', hi: 'मानता है', pron: 'GLOWPT', type: 'Verb · glauben' },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'könnten', role: 'r-modalverb', en: 'could (Konjunktiv I, wir)', hi: 'सकते हैं', pron: 'KÖN-ten', type: 'Modal · können (Konjunktiv I, wir)', why: 'Konjunktiv I of können for wir equals Konjunktiv II (this chapter).', ex: 'Er glaubt, wir könnten gewinnen.', exEn: 'He believes we could win.' },
        { w: 'bald', role: 'r-time', en: 'soon', hi: 'जल्द', pron: 'balt', type: 'Adverb · time' },
        { w: 'gewinnen', role: 'r-verb', en: 'win', hi: 'जीतना', pron: 'ge-VI-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '?', plain: true }
      ], en: 'Does he believe we could win soon?', hi: 'Kya woh maanta hai ki hum jald jeet sakte hain?' },
      { speaker: 'Ida', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'er', role: 'r-subject', en: 'he', hi: 'वह', pron: 'air', type: 'Pronoun · subject' },
        { w: 'sagt', role: 'r-verb', en: 'says', hi: 'कहता है', pron: 'zahkt', type: 'Verb · sagen' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'Team', role: 'r-subject', en: 'team', hi: 'टीम', pron: 'teem', type: 'Noun · neut.' },
        { w: 'werde', role: 'r-verb', en: 'will (Konjunktiv I, es)', hi: 'होगी', pron: 'VAIR-duh', type: 'Verb · werden (Konjunktiv I, es)', why: 'Konjunktiv I of werden for es/sie: werde, distinct from Präsens wird (this chapter).', ex: 'Er sagt, das Team werde erfolgreich sein.', exEn: 'He says the team will be successful.' },
        { w: 'bestimmt', role: 'r-adverb', en: 'surely', hi: 'ज़रूर', pron: 'be-SHTIMT', type: 'Adverb' },
        { w: 'erfolgreich', role: 'r-akkusativ', en: 'successful', hi: 'सफल', pron: 'er-FOLK-rykh', type: 'Adjective' },
        { w: 'sein', role: 'r-verb', en: 'be', hi: 'होना', pron: 'zine', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes, he says the team will surely be successful.', hi: 'Haan, woh kehta hai ki team zaroor safal hogi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'That pleases me very much.', hi: 'Mujhe iski bahut khushi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de">er ist</span> → <span class="de r-konji">er sei</span>. Konjunktiv I = verb stem + special endings (-e, -est, -e, -en, -et, -en). This chapter teaches ONLY the forms — using them for reported speech comes next chapter.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is KONJUNKTIV I: FORMEN (forms only) at B2 level: verb stem + Konjunktiv I endings (ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en). The three most important forms are sein → sei, haben → habe, werden → werde. Regular and irregular verbs follow the same pattern (er komme, er gehe, er spreche, er lese, er schreibe). Modal verbs also form Konjunktiv I (er könne, er müsse, er dürfe, er solle, er wolle, er möge). Many forms (especially wir/sie plural) are IDENTICAL to the Indicative — this ambiguity is acknowledged but not resolved here; the fix (Konjunktiv II substitution) is Chapter 60\'s topic. ' +
    'Do NOT expect or require actual indirect-speech USAGE rules, Konjunktiv II, or Ersatzformen — those are the next chapter\'s scope; do not penalise the learner for not yet applying Konjunktiv I in reported-speech sentences. Focus ONLY on whether the FORMS themselves are built correctly. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Check that each Konjunktiv I form uses the correct stem + ending combination for its person (ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en).\n' +
    '- Check sein (sei/seiest/sei/seien/seiet/seien), haben (habe/habest/habe/haben/habet/haben), and werden (werde/werdest/werde/werden/werdet/werden) specifically, since these are the most error-prone.\n' +
    '- Do not flag an identical-to-Indicative form (e.g. "wir kommen") as wrong — it is formally correct Konjunktiv I even though it looks like the Indicative; that ambiguity is expected and addressed later.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Form-mastery check:</b> one sentence on whether sei/habe/werde (the three most important forms) were used correctly.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you\'ve mastered the Konjunktiv I forms, especially sei/habe/werde. Ready for indirect speech next.',
    mid: 'Good. Re-read the Master Table once, then continue.',
    low: 'Worth another pass through the Grammar section — memorize sei, habe, werde first; the rest follows the same pattern.'
  },

  parserSentence: [
    { w: 'Er', role: 'plain' }, { w: 'sei', role: 'r-konji' }, { w: 'krank', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: Konjunktiv I = verb stem + special endings, forms only.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Ida and Timo read newspaper quotations and notice Konjunktiv I forms.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 22 words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the endings, sein/haben/werden, modal verbs, and identical-to-Indicative forms.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper article and business report full of Konjunktiv I verb forms.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify Konjunktiv I forms, speaker, verb, and person in radio news and a meeting summary.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Read Konjunktiv I forms aloud and recognize verb endings, person, and infinitive.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Transform Indicative tables into Konjunktiv I and complete missing forms in short texts.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill table completion, Indicative→Konjunktiv I transformation, and identifying identical forms.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 760 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 22 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '6 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Full conjugation drills, Indicative-to-Konjunktiv I transformation, and identical-form spotting.',
      pdfUrl: '/pdfs/homework.pdf', size: '10 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Konjunktiv I ending table, Master Table, and common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '9 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en', text: 'Build Konjunktiv I from any verb stem using the standard endings' },
    { de: 'sein → sei, haben → habe, werden → werde', text: 'Memorize the three most important, most frequent Konjunktiv I forms' },
    { de: 'er komme, er gehe, er spreche, er könne', text: 'Form Konjunktiv I for regular, irregular, and modal verbs' },
    { de: 'wir kommen (Indikativ = Konjunktiv I)', text: 'Recognize when Konjunktiv I forms are identical to the Indicative' },
    { de: 'Newspaper articles, radio news, business reports', text: 'Spot Konjunktiv I forms in authentic B2 texts before learning to use them' }
  ],

  // ---------- Vocabulary (22 items — uploaded chapter-59 list) ----------
  vocab: [
    { de: 'Jugendbereich', art: 'der', gender: 'm', plural: 'Jugendbereiche', pos: 'noun', level: 'B2', register: 'written', en: 'youth section', hi: 'युवा अनुभाग', ex: 'Der Verein hat einen großen Jugendbereich.', exEn: 'The club has a large youth section.', exHi: 'Club ka ek bada yuva anubhaag hai.', ex2: 'Sie arbeiten im Jugendbereich.', ex2En: 'They work in the youth section.', ex2Hi: 'Woh yuva anubhaag mein kaam karte hain.' },
    { de: 'Kader', art: 'der', gender: 'm', plural: 'Kader', pos: 'noun', level: 'B2', register: 'written', en: 'squad, cadre', hi: 'दल', ex: 'Der Trainer wählte den Kader aus.', exEn: 'The coach selected the squad.', exHi: 'Coach ne dal chuna.', ex2: 'Sie gehören zum Nationalkader.', ex2En: 'They belong to the national squad.', ex2Hi: 'Woh rashtriya dal ke sadasya hain.' },
    { de: 'Kartrennen', art: 'das', gender: 'n', plural: 'Kartrennen', pos: 'noun', level: 'B2', register: 'both', en: 'go-kart race', hi: 'कार्ट रेस', ex: 'Sie nahm an einem Kartrennen teil.', exEn: 'She took part in a go-kart race.', exHi: 'Usne ek kart race mein bhaag liya.', ex2: 'Sie haben das Kartrennen gewonnen.', ex2En: 'They\'ve won the go-kart race.', ex2Hi: 'Unhone kart race jeeti hai.' },
    { de: 'Kaufvertrag', art: 'der', gender: 'm', plural: 'Kaufverträge', pos: 'noun', level: 'B2', register: 'written', en: 'purchase contract', hi: 'क्रय अनुबंध', ex: 'Sie unterschrieb den Kaufvertrag.', exEn: 'She signed the purchase contract.', exHi: 'Usne kray anubandh par hastaakshar kiye.', ex2: 'Sie haben den Kaufvertrag geprüft.', ex2En: 'They\'ve checked the purchase contract.', ex2Hi: 'Unhone kray anubandh jaancha hai.' },
    { de: 'klarmachen', pos: 'verb', level: 'B2', register: 'both', en: 'to make clear, clarify', hi: 'स्पष्ट करना', ex: 'Das klären wir im nächsten Kapitel.', exEn: 'We\'ll clarify that in the next chapter.', exHi: 'Hum yeh agle adhyaay mein spasht karenge.', ex2: 'Sie hat ihre Meinung klargemacht.', ex2En: 'She\'s made her opinion clear.', ex2Hi: 'Usne apni raay spasht ki hai.', conj: { praesens: 'macht klar', praeteritum: 'machte klar', perfekt: 'hat klargemacht' } },
    { de: 'Konsument', art: 'der/die', gender: 'm/f', plural: 'Konsumenten', pos: 'noun', level: 'B2', register: 'written', en: 'consumer', hi: 'उपभोक्ता', ex: 'Der Konsument erwartet Qualität.', exEn: 'The consumer expects quality.', exHi: 'Upbhokta gunwatta ki ummeed karta hai.', ex2: 'Sie haben die Konsumenten befragt.', ex2En: 'They\'ve surveyed the consumers.', ex2Hi: 'Unhone upbhoktaon se poocha hai.' },
    { de: 'Kontodaten', art: 'die', gender: 'plural', plural: '— (Pl.)', pos: 'noun', level: 'B2', register: 'written', en: 'account details', hi: 'खाता विवरण', ex: 'Sie gab ihre Kontodaten ein.', exEn: 'She entered her account details.', exHi: 'Usne apna khaata vivaran darj kiya.', ex2: 'Sie haben die Kontodaten aktualisiert.', ex2En: 'They\'ve updated the account details.', ex2Hi: 'Unhone khaata vivaran update kiya hai.' },
    { de: 'kritikfähig', pos: 'adjective', level: 'B2', register: 'written', en: 'able to take criticism', hi: 'आलोचना सहनशील', ex: 'Ein guter Mitarbeiter ist kritikfähig.', exEn: 'A good employee is able to take criticism.', exHi: 'Ek achha karmchaari aalochana sahansheel hota hai.', ex2: 'Sie haben sich kritikfähig gezeigt.', ex2En: 'They\'ve shown themselves able to take criticism.', ex2Hi: 'Unhone khud ko aalochana sahansheel dikhaaya hai.' },
    { de: 'Kritisierte', art: 'der/die', gender: 'm/f', plural: 'Kritisierten', pos: 'noun', level: 'B2', register: 'written', en: 'person being criticised', hi: 'आलोचना का पात्र', ex: 'Der Kritisierte reagierte ruhig.', exEn: 'The person being criticised reacted calmly.', exHi: 'Aalochana ka paatra shaanti se pratikriya diya.', ex2: 'Sie haben den Kritisierten unterstützt.', ex2En: 'They\'ve supported the person being criticised.', ex2Hi: 'Unhone aalochana ke paatra ka samarthan kiya hai.' },
    { de: 'Kundenkonto', art: 'das', gender: 'n', plural: 'Kundenkonten', pos: 'noun', level: 'B2', register: 'written', en: 'customer account', hi: 'ग्राहक खाता', ex: 'Sie eröffnete ein Kundenkonto.', exEn: 'She opened a customer account.', exHi: 'Usne ek grahak khaata khola.', ex2: 'Sie haben das Kundenkonto gesperrt.', ex2En: 'They\'ve blocked the customer account.', ex2Hi: 'Unhone grahak khaata block kiya hai.' },
    { de: 'Kunstturnen', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'artistic gymnastics', hi: 'कलात्मक जिमनास्टिक', ex: 'Sie trainiert im Kunstturnen.', exEn: 'She trains in artistic gymnastics.', exHi: 'Woh kalaatmak jimnastic mein practice karti hai.', ex2: 'Sie haben im Kunstturnen eine Medaille gewonnen.', ex2En: 'They\'ve won a medal in artistic gymnastics.', ex2Hi: 'Unhone kalaatmak jimnastic mein medal jeeta hai.' },
    { de: 'Kunstturner', art: 'der/die', gender: 'm/f', plural: 'Kunstturner/innen', pos: 'noun', level: 'B2', register: 'written', en: 'artistic gymnast', hi: 'कलात्मक जिमनास्ट', ex: 'Der Kunstturner zeigte eine perfekte Übung.', exEn: 'The artistic gymnast showed a perfect routine.', exHi: 'Kalaatmak jimnast ne ek perfect abhyaas dikhaaya.', ex2: 'Sie haben viele Kunstturner ausgebildet.', ex2En: 'They\'ve trained many artistic gymnasts.', ex2Hi: 'Unhone kai kalaatmak jimnast taiyaar kiye hain.' },
    { de: 'kurios', pos: 'adjective', level: 'B2', register: 'both', en: 'curious, odd', hi: 'अजीब', ex: 'Das ist kurios.', exEn: 'That\'s curious.', exHi: 'Yeh ajeeb hai.', ex2: 'Sie haben eine kuriose Geschichte erzählt.', ex2En: 'They\'ve told a curious story.', ex2Hi: 'Unhone ek ajeeb kahaani sunaayi hai.' },
    { de: 'Lebensjahr', art: 'das', gender: 'n', plural: 'Lebensjahre', pos: 'noun', level: 'B2', register: 'written', en: 'year of life', hi: 'जीवन वर्ष', ex: 'Im zwanzigsten Lebensjahr zog sie um.', exEn: 'In her twentieth year of life, she moved.', exHi: 'Apne beeswein jeevan varsh mein woh sthaanaantarit hui.', ex2: 'Sie haben das dreißigste Lebensjahr erreicht.', ex2En: 'They\'ve reached their thirtieth year of life.', ex2Hi: 'Unhone apna tiswaan jeevan varsh poora kiya hai.' },
    { de: 'Lernphase', art: 'die', gender: 'f', plural: 'Lernphasen', pos: 'noun', level: 'B2', register: 'written', en: 'learning phase', hi: 'सीखने का चरण', ex: 'Die Lernphase dauerte drei Monate.', exEn: 'The learning phase lasted three months.', exHi: 'Seekhne ka charan teen mahine chala.', ex2: 'Sie haben die Lernphase abgeschlossen.', ex2En: 'They\'ve completed the learning phase.', ex2Hi: 'Unhone seekhne ka charan poora kiya hai.' },
    { de: 'Lernstoff', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'written', en: 'learning material', hi: 'अध्ययन सामग्री', ex: 'Der Lernstoff war umfangreich.', exEn: 'The learning material was extensive.', exHi: 'Adhyayan saamagri vistrit thi.', ex2: 'Sie haben den Lernstoff wiederholt.', ex2En: 'They\'ve reviewed the learning material.', ex2Hi: 'Unhone adhyayan saamagri dohraayi hai.' },
    { de: 'Lieferzeit', art: 'die', gender: 'f', plural: 'Lieferzeiten', pos: 'noun', level: 'B2', register: 'written', en: 'delivery time', hi: 'डिलीवरी समय', ex: 'Die Lieferzeit beträgt drei Tage.', exEn: 'The delivery time is three days.', exHi: 'Delivery samay teen din hai.', ex2: 'Sie haben die Lieferzeit verkürzt.', ex2En: 'They\'ve shortened the delivery time.', ex2Hi: 'Unhone delivery samay kam kiya hai.' },
    { de: 'logisch', pos: 'adjective', level: 'B2', register: 'both', en: 'logical', hi: 'तार्किक', ex: 'Das klingt logisch.', exEn: 'That sounds logical.', exHi: 'Yeh taarkik lagta hai.', ex2: 'Sie haben logisch argumentiert.', ex2En: 'They\'ve argued logically.', ex2Hi: 'Unhone taarkik roop se tark diya hai.' },
    { de: 'mitbestimmen', pos: 'verb', level: 'B2', register: 'written', en: 'to have a say in, co-decide', hi: 'सहभागिता से निर्णय लेना', ex: 'Die Mitarbeiter dürfen mitbestimmen.', exEn: 'The employees are allowed to have a say.', exHi: 'Karmchaari sahbhaagita se faisla le sakte hain.', ex2: 'Sie haben bei der Entscheidung mitbestimmt.', ex2En: 'They\'ve had a say in the decision.', ex2Hi: 'Unhone faisle mein sahbhaagita di hai.', conj: { praesens: 'bestimmt mit', praeteritum: 'bestimmte mit', perfekt: 'hat mitbestimmt' } },
    { de: 'Monoski', art: 'der', gender: 'm', plural: 'Monoskis', pos: 'noun', level: 'B2', register: 'written', en: 'mono-ski', hi: 'मोनो-स्की', ex: 'Er fuhr mit einem Monoski.', exEn: 'He rode a mono-ski.', exHi: 'Woh ek mono-ski par chala.', ex2: 'Sie haben einen Monoski ausprobiert.', ex2En: 'They\'ve tried a mono-ski.', ex2Hi: 'Unhone ek mono-ski try ki hai.' },
    { de: 'Oberbegriff', art: 'der', gender: 'm', plural: 'Oberbegriffe', pos: 'noun', level: 'B2', register: 'written', en: 'generic term, umbrella term', hi: 'सामान्य शब्द', ex: '"Fahrzeug" ist ein Oberbegriff.', exEn: '"Vehicle" is a generic term.', exHi: '"Vehicle" ek saamaanya shabd hai.', ex2: 'Sie haben einen passenden Oberbegriff gefunden.', ex2En: 'They\'ve found a fitting umbrella term.', ex2Hi: 'Unhein ek achha saamaanya shabd mila hai.' },
    { de: 'Onlinebanking', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', register: 'both', en: 'online banking', hi: 'ऑनलाइन बैंकिंग', ex: 'Sie nutzt regelmäßig Onlinebanking.', exEn: 'She regularly uses online banking.', exHi: 'Woh niyamit roop se online banking use karti hai.', ex2: 'Sie haben Onlinebanking eingerichtet.', ex2En: 'They\'ve set up online banking.', ex2Hi: 'Unhone online banking set up ki hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist Konjunktiv I?',
      body: [ 'German has different moods. Indicative expresses facts. Konjunktiv I is mainly used to report someone else\'s words objectively. This chapter teaches ONLY the verb forms — the actual use of indirect speech comes in the next chapter.' ],
      table: {
        head: ['Direct speech', 'Reported (Konjunktiv I)'],
        rows: [
          ['Er sagt: "Ich bin krank."', 'Er sagt, er <span class="de r-konji">sei</span> krank.']
        ]
      },
      hinglish: 'German mein verb ke alag-alag moods hote hain. Indicative fact batata hai, aur <b>Konjunktiv I</b> tab aata hai jab tum kisi aur ki baat report kar rahe ho. Iska matlab yeh nahi hota ki baat sach hai ya jhooth \u2014 yeh sirf signal deta hai ki shabd tumhare nahi, kisi aur ke hain. Isliye news aur reports mein yeh bahut aata hai. Is chapter mein sirf forms banana seekhoge; inka asli use agle chapter mein aayega.'
    },
    {
      title: 'Wie wird Konjunktiv I gebildet?',
      body: [ 'Formula: verb stem + Konjunktiv I endings.' ],
      table: {
        head: ['Person', 'Ending'],
        rows: [
          ['ich', '-e'],
          ['du', '-est'],
          ['er/sie/es', '-e'],
          ['wir', '-en'],
          ['ihr', '-et'],
          ['sie/Sie', '-en']
        ]
      },
      hinglish: 'Formula seedha hai: infinitive se <b>-en</b> hatao, aur uspar Konjunktiv I ki ending laga do. Dhyaan do ki <b>ich</b> aur <b>er/sie/es</b> dono <b>-e</b> lete hain \u2014 yeh Indicative se ulta lagta hai, isliye yahi sabse zyada confuse karta hai.'
    },
    {
      title: 'Regelmäßige Verben',
      body: [ 'Regular verbs (machen, lernen, arbeiten, spielen, kaufen) follow the pattern directly on the stem.' ],
      table: {
        head: ['Person', 'machen'],
        rows: [
          ['ich', 'mache'],
          ['du', 'machest'],
          ['er', 'mache'],
          ['wir', 'machen'],
          ['ihr', 'machet'],
          ['sie', 'machen']
        ]
      },
      hinglish: 'Regular verbs mein stem waise ka waisa rehta hai aur uspar ending lag jaati hai. Dhyaan do ki <span class="de">du machest</span> aur <span class="de">ihr machet</span> Indicative se alag dikhte hain, par <span class="de">ich mache</span>, <span class="de">wir machen</span> aur <span class="de">sie machen</span> bilkul same hain \u2014 is baat par neeche wapas aayenge.'
    },
    {
      title: 'Wichtige unregelmäßige Verben',
      body: [
        'Here is the good news: verbs that are irregular in the present tense are NOT irregular in Konjunktiv I. The vowel changes you know from the Indicative (er spr<b>i</b>cht, er l<b>ie</b>st, er n<b>imm</b>t, er g<b>i</b>bt) disappear completely \u2014 you go back to the plain infinitive stem and add the ending.'
      ],
      table: {
        head: ['Infinitive', 'Indicative (er)', 'Konjunktiv I (er)'],
        rows: [
          ['sprechen', 'spricht', '<b>spreche</b>'],
          ['lesen', 'liest', '<b>lese</b>'],
          ['nehmen', 'nimmt', '<b>nehme</b>'],
          ['geben', 'gibt', '<b>gebe</b>'],
          ['sehen', 'sieht', '<b>sehe</b>'],
          ['kommen', 'kommt', 'komme'],
          ['wissen', 'wei\u00df', '<b>wisse</b>']
        ]
      },
      note: 'This is why Konjunktiv I is often the clearest signal that something is reported speech: <span class="de">er spreche</span> can only be Konjunktiv I, because the Indicative would be <i>spricht</i>.',
      hinglish: 'Yahan ek achhi khabar hai \u2014 jo verbs present tense mein irregular hain, woh Konjunktiv I mein irregular nahi hote. Indicative wale vowel changes (er spr<b>i</b>cht, er l<b>ie</b>st, er n<b>imm</b>t) yahan bilkul gayab ho jaate hain. Tum seedha infinitive ke stem par wapas jaate ho aur ending laga dete ho: <span class="de">er spreche</span>, <span class="de">er lese</span>, <span class="de">er nehme</span>. Isliye yeh forms turant pehchaan mein aa jaati hain \u2014 <span class="de">er spreche</span> Indicative ho hi nahi sakta.'
    },
    {
      title: 'Die drei wichtigsten Verben: sein, haben, werden',
      body: [ 'These three verbs appear constantly in indirect speech — memorize them first.' ],
      table: {
        head: ['sein', 'haben', 'werden'],
        rows: [
          ['ich sei', 'ich habe', 'ich werde'],
          ['du seiest', 'du habest', 'du werdest'],
          ['er sei', 'er habe', 'er werde'],
          ['wir seien', 'wir haben', 'wir werden'],
          ['ihr seiet', 'ihr habet', 'ihr werdet'],
          ['sie seien', 'sie haben', 'sie werden']
        ]
      },
      hinglish: 'Yeh teen verbs reported speech mein sabse zyada aate hain, isliye inhe sabse pehle yaad karo. <b>sein</b> sabse important hai kyunki uska stem poora badal jaata hai (<b>sei</b>) aur uski koi bhi form Indicative jaisi nahi hoti.'
    },
    {
      title: 'Modalverben',
      body: [ 'Modal verbs (dürfen, können, müssen, sollen, wollen, mögen) also form Konjunktiv I with the same endings. Some forms are identical to the Indicative.' ],
      table: {
        head: ['Infinitive', '3rd Person Singular'],
        rows: [
          ['können', 'könne'],
          ['müssen', 'müsse'],
          ['dürfen', 'dürfe'],
          ['sollen', 'solle'],
          ['wollen', 'wolle']
        ]
      },
      hinglish: 'Modal verbs bhi wahi endings lete hain. Achhi baat yeh hai ki inka umlaut wapas aa jaata hai \u2014 Indicative mein <span class="de">er kann</span> hai, par Konjunktiv I mein <span class="de">er k\u00f6nne</span>. Isliye singular mein yeh forms saaf pehchaan mein aati hain.'
    },
    {
      title: 'Identische Formen',
      body: [
        'There is a clear pattern to this. The <b>er/sie/es</b> form is always distinct, because the Indicative takes <i>-t</i> while Konjunktiv I takes <i>-e</i>. But <b>ich</b>, <b>wir</b> and <b>sie/Sie</b> come out identical to the Indicative for almost every verb \u2014 and those are exactly the forms you cannot use as they stand.',
        'That is why <b>er sagt, er komme</b> is unmistakably reported speech, while <i>sie sagen, sie kommen</i> tells the reader nothing. This chapter only flags the problem; the fix (switching to Konjunktiv II) is Chapter 60.'
      ],
      table: {
        head: ['Person', 'Indicative', 'Konjunktiv I', 'Usable?'],
        rows: [
          ['ich', 'komme', 'komme', 'no \u2014 identical'],
          ['du', 'kommst', '<b>kommest</b>', 'yes'],
          ['er/sie/es', 'kommt', '<b>komme</b>', 'yes \u2014 always clear'],
          ['wir', 'kommen', 'kommen', 'no \u2014 identical'],
          ['ihr', 'kommt', '<b>kommet</b>', 'yes'],
          ['sie/Sie', 'kommen', 'kommen', 'no \u2014 identical']
        ]
      },
      note: '<b>sein</b> is the exception that saves you: sei, seiest, sei, seien, seiet, seien \u2014 every single form differs from the Indicative. That is why <i>sei</i> is everywhere in reported speech.',
      hinglish: 'Isme ek saaf pattern hai. <b>er/sie/es</b> ki form hamesha alag dikhti hai, kyunki Indicative mein <i>-t</i> lagta hai aur Konjunktiv I mein <i>-e</i>. Par <b>ich</b>, <b>wir</b> aur <b>sie/Sie</b> lagbhag har verb mein Indicative jaisi hi ho jaati hain \u2014 aur wahi forms tum aise use nahi kar sakte. Isliye <span class="de">er komme</span> se turant pata chal jaata hai ki yeh reported speech hai, par <i>sie kommen</i> se kuch pata nahi chalta. Ek verb tumhe bacha leta hai \u2014 <b>sein</b>, jiski har form Indicative se alag hai. Isi wajah se reported speech mein <b>sei</b> itna dikhta hai. Iska solution Chapter 60 mein aayega.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from confusing Konjunktiv I with the Indicative, or misapplying the endings.' ],
      mistakes: [
        { wrong: 'Er sagt, er ist krank.', right: 'Er sagt, er sei krank.', why: 'In reported speech the verb goes into Konjunktiv I, and <i>sein</i> has the irregular stem <b>sei</b> \u2014 not the Indicative <i>ist</i>.' },
        { wrong: 'du komme', right: 'du kommest', why: 'The 2nd person singular ending is "-est", not "-e" — "-e" is only for ich and er/sie/es.' },
        { wrong: 'ihr sei', right: 'ihr seiet', why: 'The "ihr" form of "sein" in Konjunktiv I is "seiet", following the "-et" ending pattern.' },
        { wrong: 'wir seiet', right: 'wir seien', why: '"wir" takes the "-en" ending ("seien"), not "-et" (which belongs to "ihr").' },
        { wrong: 'ich werdest', right: 'ich werde', why: '"ich" takes the "-e" ending ("werde"); "-est" belongs to "du" ("du werdest").' }
      ],
      hinglish: 'Yeh galtiyan do wajah se hoti hain \u2014 Indicative ki form hi likh dena, ya endings ko aapas mein badal dena. Ek baat pakki kar lo: <b>-e</b> sirf <b>ich</b> aur <b>er/sie/es</b> ke liye hai, <b>-est</b> sirf <b>du</b> ke liye, aur <b>-et</b> sirf <b>ihr</b> ke liye.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to build Konjunktiv I? Take the infinitive, remove "-en", add the Konjunktiv I ending, then compare with the Indicative. If they\'re the same, remember it for Chapter 60.' ],
      note: 'Memory trick: Konjunktiv I = infinitive stem + special endings. Memorize sei, habe, werde first — once these are automatic, the rest becomes much easier.',
      hinglish: 'Konjunktiv I banane ka tarika: infinitive lo, <b>-en</b> hatao, aur ending jodo. Phir ek step aur karo \u2014 use Indicative se compare karo. Agar dono same nikle, to woh form kaam nahi aayegi, aur uska solution Chapter 60 mein hai. Aur <b>sei, habe, werde</b> ko pehle pakka kar lo; inhi se zyada-tar kaam chal jaata hai.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Sportnachricht: Die Kunstturnerin nach dem Wettkampf',
    titleEn: 'Sports news: the gymnast after the competition',
    tokens: [
      { w: 'Nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (masc. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Finale', role: 'plain', en: 'final (Satzende)', hi: 'फ़ाइनल (Satzende)', type: 'Noun · neut.' },
      { w: 'im', role: 'plain', en: 'in', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Kunstturnen', role: 'plain', en: 'gymnastics (Satzende)', hi: 'कलात्मक जिमनास्टिक (Satzende)', type: 'Noun · neut.', why: 'das Kunstturnen (this chapter).' },
      { w: 'sagte', role: 'plain', en: 'said', hi: 'कहा', type: 'Verb · sagen (Präteritum)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Athletin', role: 'plain', en: 'athlete (f.) (Satzende)', hi: 'खिलाड़ी (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I, indirekte Rede)', hi: 'थी (Konjunktiv I)', type: 'Verb · sein (Konjunktiv I)', why: 'Konjunktiv I (sei) is used in reported speech to distance the reporter from the claim, without implying doubt (this chapter).' },
      { w: 'überglücklich', role: 'plain', en: 'overjoyed (Satzende)', hi: 'अत्यंत ख़ुश (Satzende)', type: 'Adjective' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'lange', role: 'plain', en: 'long', hi: 'लंबी', type: 'Adjective' },
      { w: 'Lernphase', role: 'plain', en: 'learning phase (Satzende)', hi: 'सीखने की अवधि (Satzende)', type: 'Noun · fem.', why: 'die Lernphase (this chapter).' },
      { w: 'habe', role: 'r-verb', en: 'had (Konjunktiv I Perfekt)', hi: 'था (Konjunktiv I Perfekt)', type: 'Verb · haben (Konjunktiv I)' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'endlich', role: 'plain', en: 'finally', hi: 'आख़िरकार', type: 'Adverb' },
      { w: 'ausgezahlt', role: 'plain', en: 'paid off (Satzende)', hi: 'फल दिया (Satzende)', type: 'Verb · Partizip II' },
      { w: ',', plain: true },
      { w: 'fügte', role: 'plain', en: 'added', hi: 'जोड़ा', type: 'Verb · hinzufügen (Präteritum)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'hinzu', role: 'plain', en: '(prefix, Satzende)', hi: '', type: 'Separable prefix · hinzufügen (Satzende)' },
      { w: '.', plain: true },
      { w: 'Ihr', role: 'plain', en: 'her', hi: 'उसके', type: 'Possessivartikel' },
      { w: 'Trainer', role: 'plain', en: 'coach', hi: 'प्रशिक्षक', type: 'Noun · masc.' },
      { w: 'erklärte', role: 'plain', en: 'explained', hi: 'बताया', type: 'Verb · erklären (Präteritum)' },
      { w: ',', plain: true },
      { w: 'er', role: 'plain', en: 'he', hi: 'उसने', type: 'Pronoun' },
      { w: 'habe', role: 'r-verb', en: 'had (Konjunktiv I Perfekt)', hi: 'था (Konjunktiv I Perfekt)', type: 'Verb · haben (Konjunktiv I)' },
      { w: 'nie', role: 'plain', en: 'never', hi: 'कभी नहीं', type: 'Adverb' },
      { w: 'gezweifelt', role: 'plain', en: 'doubted (Satzende)', hi: 'शक किया (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Selbst', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'beim', role: 'plain', en: 'with', hi: 'में', type: 'Contraction · bei dem' },
      { w: 'Onlinebanking', role: 'plain', en: 'online banking (Satzende)', hi: 'ऑनलाइन बैंकिंग (Satzende)', type: 'Noun · neut.', why: 'das Onlinebanking (this chapter).' },
      { w: 'sei', role: 'r-verb', en: 'was (Konjunktiv I, Satzende)', hi: 'रही (Konjunktiv I, Satzende)', type: 'Verb · sein (Konjunktiv I, Nebensatz-Satzende)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इतनी', type: 'Adverb' },
      { w: 'diszipliniert', role: 'plain', en: 'disciplined (Satzende)', hi: 'अनुशासित (Satzende)', type: 'Adjective' },
      { w: 'gewesen', role: 'plain', en: 'been (Satzende)', hi: 'रही थी (Satzende)', type: 'Verb · sein (Konjunktiv I Perfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'berichtete', role: 'plain', en: 'reported', hi: 'बताया', type: 'Verb · berichten (Präteritum)' },
      { w: 'ihre', role: 'plain', en: 'her', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Managerin', role: 'plain', en: 'manager (f.) (Satzende)', hi: 'प्रबंधक (Satzende)', type: 'Noun · fem.' },
      { w: 'lachend', role: 'plain', en: 'laughing (Satzende)', hi: 'हँसते हुए (Satzende)', type: 'Adjective (Partizip I)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Presse', role: 'plain', en: 'press', hi: 'प्रेस', type: 'Noun · fem.' },
      { w: 'schrieb', role: 'plain', en: 'wrote', hi: 'लिखा', type: 'Verb · schreiben (Präteritum)' },
      { w: ',', plain: true },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'sei', role: 'r-konji', en: 'was (Konjunktiv I)', hi: '(Konjunktiv I)', type: 'Verb · sein (Konjunktiv I)', why: 'sei = Konjunktiv I of sein: the standard form for reported speech (this chapter).' },
      { w: 'nun', role: 'plain', en: 'now', hi: 'अब', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem.)', hi: 'एक', type: 'Article' },
      { w: 'echte', role: 'plain', en: 'genuine', hi: 'सच्ची', type: 'Adjective' },
      { w: 'Vorbildfigur', role: 'plain', en: 'role-model figure (Satzende)', hi: 'आदर्श व्यक्तित्व (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'ihre', role: 'plain', en: 'her', hi: 'उसकी', type: 'Possessivartikel' },
      { w: 'Teamkollegin', role: 'plain', en: 'teammate (f.)', hi: 'साथी खिलाड़ी', type: 'Noun · fem.' },
      { w: 'betonte', role: 'plain', en: 'emphasised', hi: 'ज़ोर दिया', type: 'Verb · betonen (Präteritum)' },
      { w: ',', plain: true },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Erfolg', role: 'plain', en: 'success', hi: 'सफलता', type: 'Noun · masc.' },
      { w: 'sei', role: 'r-konji', en: 'was (Konjunktiv I)', hi: '(Konjunktiv I)', type: 'Verb · sein (Konjunktiv I)' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Verdienst', role: 'plain', en: 'achievement (Satzende)', hi: 'योगदान (Satzende)', type: 'Noun · neut.' },
      { w: 'des', role: 'plain', en: 'of the (masc. gen.)', hi: 'की', type: 'Article · Genitiv' },
      { w: 'ganzen', role: 'plain', en: 'whole', hi: 'पूरी', type: 'Adjective' },
      { w: 'Teams', role: 'plain', en: 'team (Satzende)', hi: 'टीम की (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true }
    ],
    translation: 'After the gymnastics final, the athlete said she was overjoyed. The long learning phase had finally paid off, she added. Her coach explained that he had never doubted her. Even with online banking she had been so disciplined, her manager reported, laughing. The press wrote that she was now a genuine role model. Her teammate also emphasised that the success was an achievement of the whole team.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_059_L001', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, schau, in der Zeitung steht: der Trainer sagt, das Rennen sei sehr spannend gewesen.', en: 'Timo, look, the newspaper says: the coach says the race was very exciting.' },
      { id: 'B2_059_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: '"Sei" statt "ist" — das ist der Konjunktiv I, oder?', en: '"Sei" instead of "ist" — that\'s Konjunktiv I, right?' },
      { id: 'B2_059_L003', speaker: 'Ida', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, und weiter unten steht, der Fahrer habe keine Angst gehabt.', en: 'Exactly, and further down it says the driver had no fear.' },
      { id: 'B2_059_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Klingt fast wie ein anderes Verb, dabei ist es einfach nur "haben" im Konjunktiv I.', en: 'Sounds almost like a different verb, yet it\'s simply just "haben" in Konjunktiv I.' }
    ],
    transcript: 'Timo, schau, in der Zeitung steht: der Trainer sagt, das Rennen sei sehr spannend gewesen. "Sei" statt "ist" — das ist der Konjunktiv I, oder? Genau, und weiter unten steht, der Fahrer habe keine Angst gehabt. Klingt fast wie ein anderes Verb, dabei ist es einfach nur "haben" im Konjunktiv I.',
    translation: 'Timo, look, the newspaper says: the coach says the race was very exciting. "Sei" instead of "ist" — that\'s Konjunktiv I, right? Exactly, and further down it says the driver had no fear. Sounds almost like a different verb, yet it\'s simply just "haben" in Konjunktiv I.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'schau' },
      { w: ',', plain: true },
      { w: 'in' },
      { w: 'der' },
      { w: 'Zeitung' },
      { w: 'steht' },
      { w: ':', plain: true },
      { w: 'der' },
      { w: 'Trainer' },
      { w: 'sagt' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'Rennen' },
      { w: 'sei' },
      { w: 'sehr' },
      { w: 'spannend' },
      { w: 'gewesen' },
      { w: '.', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Sei' },
      { w: '"', plain: true },
      { w: 'statt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'ist' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'der' },
      { w: 'Konjunktiv' },
      { w: 'I', plain: true },
      { w: ',', plain: true },
      { w: 'oder' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'und' },
      { w: 'weiter' },
      { w: 'unten' },
      { w: 'steht' },
      { w: ',', plain: true },
      { w: 'der' },
      { w: 'Fahrer' },
      { w: 'habe' },
      { w: 'keine' },
      { w: 'Angst' },
      { w: 'gehabt' },
      { w: '.', plain: true },
      { w: 'Klingt' },
      { w: 'fast' },
      { w: 'wie' },
      { w: 'ein' },
      { w: 'anderes' },
      { w: 'Verb' },
      { w: ',', plain: true },
      { w: 'dabei' },
      { w: 'ist' },
      { w: 'es' },
      { w: 'einfach' },
      { w: 'nur' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'haben' },
      { w: '"', plain: true },
      { w: 'im' },
      { w: 'Konjunktiv' },
      { w: 'I', plain: true },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Verbform ersetzt "ist" im Artikel?', qEn: 'What verb form replaces "ist" in the article?', options: ['war', 'sei', 'wäre', 'ist gewesen'], optionsEn: ['was', 'were (subjunctive)', 'would be', 'has been'], answer: 1,
        explain: '"Das Rennen sei sehr spannend gewesen." — sei = Konjunktiv I of sein.' },
      { q: 'Was sagt der Artikel über den Fahrer?', qEn: 'What does the article say about the driver?', options: ['er hatte Angst', 'er habe keine Angst gehabt', 'er ist gestürzt', 'er hat gewonnen'], optionsEn: ['he was afraid', 'that he hadn\'t been afraid', 'he fell', 'he won'], answer: 1,
        explain: '"Der Fahrer habe keine Angst gehabt."' }
    ]
  },

  speaking: [
    { task: "Dein Freund liest in der Zeitung „das Rennen sei spannend gewesen“. Erklär die Form.", taskEn: "Your friend reads in the paper “the race sei exciting”. Explain the form.", de: "Sei statt ist zeigt, dass der Trainer das gesagt hat.", en: "'Sei' instead of 'ist' shows that the coach said it." },
    { task: "Er fragt nach den drei häufigsten Formen.", taskEn: "He asks about the three most common forms.", de: "Er sei, er habe, er werde — das sind die drei wichtigsten.", en: "'Er sei', 'er habe', 'er werde' — those are the three most important." },
    { task: "Lies für die Lerngruppe die Meldung über den Kaufvertrag vor.", taskEn: "Read the report about the sales contract to your study group.", de: "Der Konsument sagte, er habe den Kaufvertrag nie unterschrieben.", en: "The consumer said he had never signed the sales contract." },
    { task: "Eine Lernpartnerin fragt, warum wir kommen gleich aussieht.", taskEn: "A study partner asks why 'wir kommen' looks the same.", de: "Bei wir fällt die Form mit dem Indikativ zusammen, deshalb nimmt man würde.", en: "With 'wir' the form coincides with the indicative, so people use 'würde'." },
    { task: "Rollenspiel: Ihr lest Sportmeldungen vor.", taskEn: "Role-play: you read out sports reports.", de: "Der Kunstturner erklärte, er sei fit. — Und der Trainer sagte, der Kader werde größer.", en: "The gymnast stated he was fit. — And the coach said the squad would grow." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Transform (6-8 items): Take an Indicative verb table (ich, du, er, wir, ihr, sie for at least two verbs) and transform it into Konjunktiv I.\n\nTASK 2 — Fill in the blanks (8-10 sentences): Complete short texts with the missing Konjunktiv I forms, focusing ONLY on correct formation, not usage.',
    starters: ['Er sagt, er ...', 'Sie erklärt, die Firma ...'],
    placeholder: 'ich mache, du machest, er mache, wir machen, ihr machet, sie machen.',
    minWords: 40
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'What is the Konjunktiv I form of "sein" for "er"?',
      options: ['er sei', 'er ist', 'er seiest'],
      answer: 0,
      explain: '"sein" has an irregular Konjunktiv I stem: "sei-", giving "er sei".'
    },
    gap: {
      sentence: ['Er sagt, er ', ' krank.'],
      gaps: [ { answer: 'sei', accepts: ['sei'] } ],
      explain: '"sei" is the Konjunktiv I form of "sein" for 3rd person singular.'
    },
    match: {
      q: 'Match each infinitive to its Konjunktiv I form (3rd person singular).',
      pairs: [
        { noun: 'sein', art: 'sei' },
        { noun: 'haben', art: 'habe' },
        { noun: 'werden', art: 'werde' },
        { noun: 'können', art: 'könne' }
      ]
    },
    builder: {
      target: 'Build: "He is confident." (Konjunktiv I of sein)',
      bank: ['Er', 'sei', 'zuversichtlich', '.'],
      answer: ['Er', 'sei', 'zuversichtlich', '.'],
      roles: { 'sei': 'r-konji' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'du komme',
      right: 'du kommest',
      explain: 'The 2nd person singular Konjunktiv I ending is "-est", not "-e" — "-e" belongs to ich and er/sie/es.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is Konjunktiv I mainly used for?', options: ['Reporting someone else\'s words objectively', 'Expressing hypothetical wishes', 'Giving direct commands'], answer: 0,
      explain: 'Konjunktiv I is the mood used for objective reported speech.' },
    { q: 'What is the Konjunktiv I ending for "wir"?', options: ['-en', '-e', '-est'], answer: 0,
      explain: '"wir" takes the "-en" ending, same as the Indicative in most cases.' },
    { q: 'What is the Konjunktiv I form of "haben" for "er"?', options: ['er habe', 'er hat', 'er habest'], answer: 0,
      explain: '"habe" is the correct 3rd person singular Konjunktiv I form of "haben".' },
    { q: 'What is the Konjunktiv I form of "können" for "er"?', options: ['er könne', 'er kann', 'er könnest'], answer: 0,
      explain: 'Modal verbs follow the same ending pattern: "er könne".' },
    { q: 'Are some Konjunktiv I forms identical to the Indicative?', options: ['Yes — e.g. "wir kommen" looks the same in both', 'No, they are always different', 'Only for irregular verbs'], answer: 0,
      explain: 'Many plural forms (wir, sie) are identical between Indicative and Konjunktiv I — this ambiguity is resolved in the next chapter.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-konji', html: 'Konjunktiv I = verb stem + special endings (ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en).' },
    { c: 'r-konji', html: 'Memorize the three most important forms first: sein → sei, haben → habe, werden → werde.' },
    { c: 'r-identical', html: 'Many forms (especially wir/sie plural) look identical to the Indicative — this ambiguity is addressed in the next chapter on indirect speech.' }
  ],
  revisionTips: [
    'Write out the full Konjunktiv I conjugation table for sein, haben, and werden from memory until it\'s automatic.',
    'Scan a German newspaper article for unusual verb forms like "sei", "habe", "werde" — these are Konjunktiv I markers of reported speech.',
    'Practise transforming five Indicative sentences into their Konjunktiv I equivalents, focusing only on the verb form.'
  ]
};

window.CHAPTER = CHAPTER;
