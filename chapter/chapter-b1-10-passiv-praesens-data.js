/* ============================================================
   KLARWEG CHAPTER DATA — B1 · Phase 1 · Chapter 10
   "Passiv (Präsens)" — the present passive voice. Teaches
   ONLY: werden + Partizip II, when the actor is unknown/
   unimportant/obvious, and the full werden conjugation.
   Deliberately does NOT introduce Passiv Präteritum, Passiv
   Perfekt, Zustandspassiv, Passiv with Modalverben, passive
   infinitives, or other B2 passive structures.
   Vocabulary source: uploaded chapter-10 list (27 items — an
   everyday-household/hairdresser theme: Besteck, Hammer, Kamm,
   Bürste, Schere, färben, föhnen, …), woven into passive-voice
   examples throughout (things being done TO objects).
   Every vocab entry carries: de/art/gender/plural/pos/level/en/
   hi/ex+exEn+exHi/advanced{synonyms,opposites,collocations}
   where natural — one full example per word (per this
   chapter's spec).
============================================================ */
const CHAPTER = {
  id: 'b1-10-passiv-praesens',
  phase: 'B1 · Phase 1',
  number: 10,
  title: 'Passiv (Präsens)',
  titleEn: 'The passive voice (present tense)',
  description: 'Das Auto wird repariert. Die Tür wird geöffnet. Hier wird nicht geraucht. This chapter shifts the focus from WHO does something to WHAT happens — the present passive, built from werden + Partizip II, for announcements, instructions, and formal descriptions where the actor is unknown, unimportant, or simply obvious.',
  xp: 250,
  time: 45,
  difficulty: 'Intermediate',
  nextChapter: { number: 11, title: 'Relativsätze im Dativ', titleEn: 'Relative clauses in the Dativ' , href: 'chapter-b1-11-relativsaetze-dativ.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Stories that <em>stick.</em>',
    intro: 'At the hairdresser\'s, Timo asks what\'s being done to his hair today, and Frau Bruns answers step by step — washed, then cut, coloured only on request. The present passive puts the process front and centre, not who\'s doing it.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear werden + Partizip II shifting focus from WHO to WHAT HAPPENS'
    ],
    scene: 'Ein Besuch im Museum und beim Friseur',
    femaleSpeakers: ['Frau Bruns'],
    dialogue: [
      { speaker: 'Timo', tokens: [
        { w: 'Was', role: 'r-akkusativ', en: 'what', hi: 'क्या', pron: 'vas', type: 'Question word' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv, es)', why: 'werden + Partizip II = Passiv Präsens (this chapter).', ex: 'Was wird gemacht?', exEn: 'What is being done?' },
        { w: 'heute', role: 'r-time', en: 'today', hi: 'आज', pron: 'HOY-tuh', type: 'Adverb · time' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'What is being done today?', hi: 'Aaj kya kiya jaata hai?' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'पहले', pron: 'tsoo-AIRST', type: 'Adverb' },
        { w: 'werden', role: 'r-verb', en: 'are', hi: 'किए जाते हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv, plural)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Haare', role: 'r-subject', en: 'hair', hi: 'बाल', pron: 'HAH-ruh', type: 'Noun · plural' },
        { w: 'gewaschen', role: 'r-verb', en: 'washed', hi: 'धोए', pron: 'ge-VA-shen', type: 'Partizip II · Satzende', why: 'waschen → gewaschen (recycled).', ex: 'Die Haare werden gewaschen.', exEn: 'The hair is washed.' },
        { w: '.', plain: true }
      ], en: 'First the hair is washed.', hi: 'Pehle baal dhoye jaate hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'And after that?', hi: 'Uske baad?' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'werden', role: 'r-verb', en: 'are', hi: 'किए जाते हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv, plural)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Haare', role: 'r-subject', en: 'hair', hi: 'बाल', pron: 'HAH-ruh', type: 'Noun · plural' },
        { w: 'geschnitten', role: 'r-verb', en: 'cut', hi: 'काटे', pron: 'ge-SHNI-ten', type: 'Partizip II · Satzende', why: 'schneiden → geschnitten (this chapter).', ex: 'Die Haare werden geschnitten.', exEn: 'The hair is cut.' },
        { w: '.', plain: true }
      ], en: 'After that the hair is cut.', hi: 'Uske baad baal kaate jaate hain.' },
      { speaker: 'Timo', tokens: [
        { w: 'Werden', role: 'r-verb', en: 'are', hi: 'किए जाते हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv, plural)' },
        { w: 'sie', role: 'r-subject', en: 'they', hi: 'वे', pron: 'zee', type: 'Pronoun · subject' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'gefärbt', role: 'r-verb', en: 'coloured', hi: 'रंगे', pron: 'ge-FAIRPT', type: 'Partizip II · Satzende', why: 'färben → gefärbt (this chapter).', ex: 'Die Haare werden gefärbt.', exEn: 'The hair is coloured.' },
        { w: '?', plain: true }
      ], en: 'Are they also coloured?', hi: 'Kya woh range bhi jaate hain?' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'gewünscht', role: 'r-verb', en: 'wished', hi: 'चाहा गया', pron: 'ge-VÜNSHT', type: 'Partizip II' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'हो', pron: 'virt', type: 'Verb · werden (Passiv, es, Satzende)' },
        { w: '.', plain: true }
      ], en: 'Only if it is wished.', hi: 'Sirf agar chaha jaaye.' },
      { speaker: 'Timo', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहता हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'nur', role: 'r-adverb', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'geschnitten', role: 'r-verb', en: 'cut', hi: 'काटे', pron: 'ge-SHNI-ten', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: 'जाना', pron: 'VAIR-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Good, then I would only like to be cut.', hi: 'Achha, toh main sirf kaata jaana chahta hoon.' },
      { speaker: 'Frau Bruns', side: 'right', tokens: [
        { w: 'Kein', role: 'r-subject', en: 'no', hi: 'कोई नहीं', pron: 'kine', type: 'Determiner' },
        { w: 'Problem', role: 'r-subject', en: 'problem', hi: 'समस्या', pron: 'pro-BLAYM', type: 'Noun · neut.' },
        { w: '!', plain: true },
        { w: 'Danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'werden', role: 'r-verb', en: 'are', hi: 'किए जाते हैं', pron: 'VAIR-den', type: 'Verb · werden (Passiv, plural)' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Haare', role: 'r-subject', en: 'hair', hi: 'बाल', pron: 'HAH-ruh', type: 'Noun · plural' },
        { w: 'geföhnt', role: 'r-verb', en: 'blow-dried', hi: 'सुखाए', pron: 'ge-FÖNT', type: 'Partizip II · Satzende', why: 'föhnen → geföhnt (this chapter).', ex: 'Die Haare werden geföhnt.', exEn: 'The hair is blow-dried.' },
        { w: '.', plain: true }
      ], en: 'No problem! After that the hair is blow-dried.', hi: 'Koi baat nahi! Uske baad baal sukhaaye jaate hain.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'Active sentences ask WHO does something: <span class="de">Der Koch kocht das Essen.</span> Passive sentences ask WHAT HAPPENS: <span class="de">Das Essen wird gekocht.</span> Build it with <span class="de r-verb">werden</span> (conjugated, Position 2) + <b>Partizip II</b> (Satzende) — used when the actor is unknown, unimportant, or simply obvious: rules, announcements, instructions, newspapers.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is PASSIV PRÄSENS (B1 level only): the present passive, formed with werden (conjugated, Position 2) + Partizip II (end of clause). Used when the actor is unknown, unimportant, or obvious — rules, announcements, instructions, formal descriptions. ' +
    'Do NOT expect or require Passiv Präteritum, Passiv Perfekt, Zustandspassiv, Passiv with Modalverben, passive infinitives, or other B2 passive structures — those are out of scope for this chapter; do not flag their absence and do not correct toward them. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- werden must be correctly conjugated for the subject: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.\n' +
    '- The second verb must be a Partizip II at the end of the clause, never a plain infinitive: "Das Auto wird reparieren" is wrong; "Das Auto wird repariert" is correct.\n' +
    '- Never use sein instead of werden for the present passive: "Das Auto ist repariert" describes a resulting state (Zustandspassiv, out of scope), not the passive process being taught here — if the learner seems to intend the passive action, flag sein as the wrong auxiliary and suggest werden.\n' +
    '- If an agent is mentioned, it takes von + Dativ, not von + Nominativ or a bare noun: "Das Auto wird repariert von der Mechaniker" is wrong (wrong case) — it should be "von dem/vom Mechaniker".\n' +
    '- The passive verb must agree with the new subject (the former object): "Das Essen werden gekocht" is wrong — Essen is singular, so it must be "wird", not "werden".\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Passive check:</b> one sentence on whether werden was conjugated correctly and the Partizip II landed at the end.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you shift fluently between active and passive, and werden + Partizip II feels automatic. Move on to <span class="de">Relativsätze im Dativ</span>.',
    mid: 'Good. Re-read the werden conjugation table once — especially subject-verb agreement in the passive — then continue.',
    low: 'Worth another pass — revisit the Grammar section (especially the active vs. passive comparison), then retake.'
  },

  parserSentence: [
    { w: 'Das', role: 'plain' }, { w: 'Auto', role: 'plain' },
    { w: 'wird', role: 'r-verb' }, { w: 'repariert', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: active asks WHO, passive asks WHAT HAPPENS.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Friends visit a museum and hairdresser, hearing rules and processes described in the passive.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 27 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master werden + Partizip II, the full werden conjugation, and active vs. passive.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style museum-rules passage full of passive constructions.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch passive constructions in announcements and instructions.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Describe processes, rules, and services using the passive.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a notice or product description using Passiv Präsens.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill active→passive and passive→active transformation.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 27 chapter words — Besteck, Hammer, Kamm, Bürste, Schere, färben, föhnen — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '9 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Active↔Passive transformation drills, werden conjugation practice, error correction, and a notice-writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Passiv Präsens reference — formation table, werden conjugation, active vs. passive, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das Auto wird repariert.', text: 'Build the present passive with werden + Partizip II' },
    { de: 'ich werde, du wirst, er/sie/es wird…', text: 'Conjugate werden correctly for the passive' },
    { de: 'Der Mechaniker repariert das Auto. → Das Auto wird repariert.', text: 'Transform active sentences into passive' },
    { de: 'Hier wird nicht geraucht.', text: 'Describe public rules and announcements' },
    { de: 'WHO? → Active. WHAT HAPPENS? → Passive.', text: 'Choose active vs. passive appropriately' }
  ],

  // ---------- Vocabulary (27 items — full chapter-10 upload list) ----------
  vocab: [
    { de: 'Absicht', art: 'die', gender: 'f', plural: 'Absichten', pos: 'noun', level: 'B1', en: 'intention', hi: 'इरादा', ex: 'Es wird nicht seine Absicht gewesen sein.', exEn: 'It probably wasn\'t his intention.', exHi: 'Yeh shayad uska irada nahi tha.' },
    { de: 'freinehmen', pos: 'verb', level: 'B1', en: 'to take time off', hi: 'छुट्टी लेना', ex: 'Am Freitag wird freigenommen.', exEn: 'On Friday, time off is being taken.', exHi: 'Shukravaar ko chutti li ja rahi hai.', conj: { praesens: 'nimmt frei', praeteritum: 'nahm frei', perfekt: 'hat freigenommen' } },
    { de: 'irreal', pos: 'adjective', level: 'B1', en: 'surreal', hi: 'अवास्तविक', ex: 'Die ganze Situation wirkte irreal.', exEn: 'The whole situation seemed surreal.', exHi: 'Poori sthiti avastavik lag rahi thi.' },
    { de: 'kürzlich', pos: 'adverb', level: 'B1', en: 'shortly, recently', hi: 'हाल ही में', ex: 'Das Gemälde wurde kürzlich restauriert.', exEn: 'The painting was recently restored.', exHi: 'Chitra haal hi mein bahal kiya gaya tha.' },
    { de: 'schrecklich', pos: 'adjective', level: 'B1', en: 'terrible', hi: 'भयानक', ex: 'Der Fehler wird schrecklich genannt.', exEn: 'The mistake is called terrible.', exHi: 'Galti ko bhayaanak kaha jaata hai.' },
    { de: 'unfreundlich', pos: 'adjective', level: 'B1', en: 'unfriendly', hi: 'अमित्रतापूर्ण', ex: 'So etwas wird als unfreundlich empfunden.', exEn: 'Something like that is perceived as unfriendly.', exHi: 'Aisi cheez amitrata-purn maani jaati hai.' },
    { de: 'verwechseln', pos: 'verb', level: 'B1', en: 'to confuse', hi: 'भ्रमित करना', ex: 'Die beiden Wörter werden oft verwechselt.', exEn: 'The two words are often confused.', exHi: 'Yeh do shabd aksar bhram me daale jaate hain.', conj: { praesens: 'verwechselt', praeteritum: 'verwechselte', perfekt: 'hat verwechselt' } },
    { de: 'verzeihen', pos: 'verb', level: 'B1', en: 'to forgive', hi: 'माफ़ करना', ex: 'So ein Fehler wird schnell verziehen.', exEn: 'Such a mistake is quickly forgiven.', exHi: 'Aisi galti jaldi maaf kar di jaati hai.', conj: { praesens: 'verzeiht', praeteritum: 'verzieh', perfekt: 'hat verziehen' } },
    { de: 'zusammensitzen', pos: 'verb', level: 'B1', en: 'to sit with, sit together', hi: 'साथ बैठना', ex: 'Abends wird oft lange zusammengesessen.', exEn: 'In the evenings, people often sit together for a long time.', exHi: 'Shaam ko aksar log lambe samay tak saath baithte hain.', conj: { praesens: 'sitzt zusammen', praeteritum: 'saß zusammen', perfekt: 'hat zusammengesessen' } },
    { de: 'Besteck', art: 'das', gender: 'n', plural: 'Bestecke', pos: 'noun', level: 'B1', en: 'cutlery', hi: 'बर्तन', ex: 'Dort wird das Besteck immer traditionell gedeckt.', exEn: 'There, the cutlery is always set traditionally.', exHi: 'Wahan bartan hamesha paramparik tareeke se sajaye jaate hain.' },
    { de: 'Versehen', art: 'das', gender: 'n', plural: 'Versehen', pos: 'noun', level: 'B1', en: 'accident, oversight (aus Versehen: accidentally)', hi: 'ग़लती से', ex: 'Aus Versehen wird die falsche Tasse benutzt.', exEn: 'By accident, the wrong cup is used.', exHi: 'Galti se, galat cup istemaal kiya jaata hai.' },
    { de: 'Hammer', art: 'der', gender: 'm', plural: 'Hämmer', pos: 'noun', level: 'B1', en: 'hammer', hi: 'हथौड़ा', ex: 'Der Nagel wird mit einem Hammer eingeschlagen.', exEn: 'The nail is driven in with a hammer.', exHi: 'Kaanta hathoda se andar thaunka jaata hai.' },
    { de: 'Imbiss', art: 'der', gender: 'm', plural: 'Imbisse', pos: 'noun', level: 'B1', en: 'takeaway (food stand)', hi: 'फास्ट फ़ूड स्टॉल', ex: 'Am Imbiss wird schnell gegessen.', exEn: 'At the takeaway stand, people eat quickly.', exHi: 'Fast food stall par jaldi khaya jaata hai.' },
    { de: 'Kamm', art: 'der', gender: 'm', plural: 'Kämme', pos: 'noun', level: 'B1', en: 'comb', hi: 'कंघी', ex: 'Wird dabei auch ein Kamm benutzt?', exEn: 'Is a comb also used in the process?', exHi: 'Kya is dauran kanghi bhi istemaal ki jaati hai?' },
    { de: 'Karton', art: 'der', gender: 'm', plural: 'Kartons', pos: 'noun', level: 'B1', en: 'carton, box', hi: 'डिब्बा', ex: 'Der Karton wird vorsichtig transportiert.', exEn: 'The box is transported carefully.', exHi: 'Dibba savdhaani se le jaya jaata hai.' },
    { de: 'Rechner', art: 'der', gender: 'm', plural: 'Rechner', pos: 'noun', level: 'B1', en: 'calculator, computer', hi: 'कैलकुलेटर', ex: 'Der Rechner wird für die Buchhaltung benutzt.', exEn: 'The calculator is used for bookkeeping.', exHi: 'Kaikuletar khaate-baahi ke liye istemaal kiya jaata hai.' },
    { de: 'Umschlag', art: 'der', gender: 'm', plural: 'Umschläge', pos: 'noun', level: 'B1', en: 'envelope', hi: 'लिफ़ाफ़ा', ex: 'Der Brief wird in einen Umschlag gesteckt.', exEn: 'The letter is put into an envelope.', exHi: 'Patra ek lifafe mein rakha jaata hai.' },
    { de: 'Bürste', art: 'die', gender: 'f', plural: 'Bürsten', pos: 'noun', level: 'B1', en: 'brush', hi: 'ब्रश', ex: 'Ja, beides wird benutzt: Kamm und Bürste.', exEn: 'Yes, both are used: comb and brush.', exHi: 'Haan, dono istemaal ki jaati hain: kanghi aur brush.' },
    { de: 'Gaststätte', art: 'die', gender: 'f', plural: 'Gaststätten', pos: 'noun', level: 'B1', en: 'restaurant', hi: 'भोजनालय', ex: 'Könnten wir noch zu einer Gaststätte gehen?', exEn: 'Could we still go to a restaurant?', exHi: 'Kya hum ek restaurant bhi ja sakte hain?' },
    { de: 'Schere', art: 'die', gender: 'f', plural: 'Scheren', pos: 'noun', level: 'B1', en: 'scissors', hi: 'कैंची', ex: 'Die Haare werden mit einer Schere geschnitten.', exEn: 'The hair is cut with scissors.', exHi: 'Baal kainchi se kaate jaate hain.' },
    { de: 'Variante', art: 'die', gender: 'f', plural: 'Varianten', pos: 'noun', level: 'B1', en: 'variant', hi: 'रूपांतर', ex: 'Diese Variante wird oft empfohlen.', exEn: 'This variant is often recommended.', exHi: 'Yeh roopantar aksar suggest kiya jaata hai.' },
    { de: 'färben', pos: 'verb', level: 'B1', en: 'to colour', hi: 'रंगना', ex: 'Meine Haare werden heute gefärbt.', exEn: 'My hair is being coloured today.', exHi: 'Mere baal aaj range jaa rahe hain.', conj: { praesens: 'färbt', praeteritum: 'färbte', perfekt: 'hat gefärbt' } },
    { de: 'föhnen', pos: 'verb', level: 'B1', en: 'to blow-dry (hair)', hi: 'बाल सुखाना', ex: 'Zum Schluss werden die Haare geföhnt.', exEn: 'In the end, the hair is blow-dried.', exHi: 'Ant mein, baal sukhaaye jaate hain.', conj: { praesens: 'föhnt', praeteritum: 'föhnte', perfekt: 'hat geföhnt' } },
    { de: 'schütten', pos: 'verb', level: 'B1', en: 'to spill, pour', hi: 'गिराना, डालना', ex: 'Aus Versehen wird der Kaffee geschüttet.', exEn: 'By accident, the coffee is spilled.', exHi: 'Galti se, coffee gira di jaati hai.', conj: { praesens: 'schüttet', praeteritum: 'schüttete', perfekt: 'hat geschüttet' } },
    { de: 'sich irren', pos: 'verb', level: 'B1', en: 'to be wrong, confuse (in + Dativ)', hi: 'ग़लती करना', ex: 'Man irrt sich manchmal in der Person.', exEn: 'One is sometimes mistaken about the person.', exHi: 'Kabhi-kabhi vyakti ke baare mein galti ho jaati hai.', conj: { praesens: 'irrt sich', praeteritum: 'irrte sich', perfekt: 'hat sich geirrt' } },
    { de: 'Bedingungssatz', art: 'der', gender: 'm', plural: 'Bedingungssätze', pos: 'noun', level: 'B1', en: 'conditional clause', hi: 'सशर्त वाक्य', ex: 'Ein Bedingungssatz wird mit "wenn" gebildet.', exEn: 'A conditional clause is formed with "wenn".', exHi: 'Ek sashart vaakya "wenn" se banaya jaata hai.' },
    { de: 'Konjunktivform', art: 'die', gender: 'f', plural: 'Konjunktivformen', pos: 'noun', level: 'B1', en: 'subjunctive form', hi: 'सम्भाव्य रूप', ex: 'Die Konjunktivform wird hier richtig benutzt.', exEn: 'The subjunctive form is used correctly here.', exHi: 'Sambhavya roop yahan sahi tareeke se istemaal kiya jaata hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist das Passiv?',
      body: [
        '<b>Active</b> sentences focus on WHO does the action. <b>Passive</b> sentences focus on THE ACTION itself — the actor may be unknown, unimportant, or simply obvious.'
      ],
      example: [
        { html: '<span class="de">Der Koch kocht das Essen.</span> → <span class="de">Das Essen wird gekocht.</span>' },
        { html: '<span class="de">Die Lehrerin erklärt die Grammatik.</span> → <span class="de">Die Grammatik wird erklärt.</span>' },
        { html: '<span class="de">Die Firma baut ein neues Hotel.</span> → <span class="de">Ein neues Hotel wird gebaut.</span>' }
      ],
      hinglish: 'Active sentences batate hain KAUN action karta hai. Passive sentences ACTION par focus karte hain — karta unknown, unimportant, ya obvious ho sakta hai.'
    },
    {
      title: 'Bildung: werden + Partizip II',
      body: [
        'Structure: <b>Subjekt</b> … <span class="de r-verb">werden</span> (conjugated, Position 2) … <b>Partizip II</b> (Satzende).'
      ],
      example: [
        { html: '<span class="de">Das Auto wird repariert.</span>' },
        { html: '<span class="de">Die Tür wird geöffnet.</span>' },
        { html: '<span class="de">Das Haus wird verkauft.</span>' },
        { html: '<span class="de">Der Brief wird geschrieben.</span>' }
      ],
      hinglish: 'Structure: Subjekt … werden (conjugated, Position 2) … Partizip II (end mein).'
    },
    {
      title: 'Konjugation von werden (Präsens)',
      body: [ 'werden must agree with the new subject — the former object of the active sentence.' ],
      table: {
        head: ['Person', 'Form'],
        rows: [
          ['ich', 'werde'], ['du', 'wirst'], ['er/sie/es', 'wird'],
          ['wir', 'werden'], ['ihr', 'werdet'], ['sie/Sie', 'werden']
        ]
      },
      example: [
        { html: '<span class="de">Ich werde gefragt.</span>' },
        { html: '<span class="de">Du wirst eingeladen.</span>' },
        { html: '<span class="de">Wir werden informiert.</span>' }
      ],
      hinglish: 'werden ko naye subject (active sentence ke purane object) ke saath match karna hota hai.'
    },
    {
      title: 'Aktiv vs. Passiv — das Objekt wird zum Subjekt',
      body: [
        'The object of the active sentence becomes the subject of the passive sentence; the original subject (the doer) can be dropped entirely, or added with von + Dativ if needed.'
      ],
      table: {
        head: ['Aktiv', 'Passiv'],
        rows: [
          ['<span class="de">Der Mechaniker repariert das Auto.</span>', '<span class="de">Das Auto wird repariert.</span>'],
          ['<span class="de">Die Verkäuferin verkauft das Fahrrad.</span>', '<span class="de">Das Fahrrad wird verkauft.</span>'],
          ['<span class="de">Die Schüler machen die Hausaufgaben.</span>', '<span class="de">Die Hausaufgaben werden gemacht.</span>']
        ]
      },
      hinglish: 'Active sentence ka object passive sentence ka subject ban jaata hai; original subject (karne wala) bilkul chhoda ja sakta hai, ya von + Dativ se joda ja sakta hai.'
    },
    {
      title: 'Typische Goethe-B1-Situationen',
      body: [
        'The passive is everywhere in formal/public German: newspapers, announcements, museums, airports, hospitals, offices, factories, hotels, public rules, manuals, recipes.'
      ],
      example: [
        { html: '<span class="de">Hier wird nicht geraucht.</span>' },
        { html: '<span class="de">Im Museum darf nicht fotografiert werden.</span>' },
        { html: '<span class="de">Deutsch wird in vielen Ländern gesprochen.</span>' },
        { html: '<span class="de">Das Büro wird um 9 Uhr geöffnet.</span>' }
      ],
      hinglish: 'Passive formal/public German mein har jagah hai: akhbaar, ghoshnaayein, museum, airport, hospital, office, factory, hotel, public rules, manuals, recipes.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [
        'These four mistakes are extremely common at B1 — forgetting Partizip II, using sein instead of werden, wrong preposition case, or subject-verb disagreement.'
      ],
      mistakes: [
        { wrong: 'Das Auto wird reparieren.', right: 'Das Auto wird repariert.', why: 'The second verb must be a Partizip II, not a plain infinitive.' },
        { wrong: 'Das Auto ist repariert. (when Passiv is intended)', right: 'Das Auto wird repariert.', why: 'werden builds the ongoing passive action; sein describes a resulting state (a different structure, out of scope this chapter).' },
        { wrong: 'Das Auto wird von der Mechaniker repariert.', right: 'Das Auto wird vom Mechaniker repariert.', why: 'The agent after von takes the Dativ, so von dem \u2192 vom Mechaniker. Note the position too: the agent sits before the Partizip II, not after it.' },
        { wrong: 'Das Essen werden gekocht.', right: 'Das Essen wird gekocht.', why: 'werden must agree with its subject — das Essen is singular, so it needs wird, not werden.' }
      ],
      hinglish: 'Sabse aam galtiyaan: Partizip II bhool jaana, sein ko werden ki jagah use karna, von ke baad galat case, ya subject-verb agreement na milna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [
        'For the Goethe exam: passive constructions dominate reading passages about rules, museums, factories, and newspapers — recognising werden + Partizip II quickly speeds up comprehension.'
      ],
      table: {
        head: ['Question', 'Answer'],
        rows: [
          ['WHO is important?', 'Active'],
          ['ACTION is important?', 'Passive'],
          ['Unknown person doing it?', 'Passive'],
          ['Public announcements?', 'Passive'],
          ['Newspapers?', 'Often Passive']
        ]
      },
      hinglish: 'Goethe exam ke liye: passive constructions rules, museums, factories aur akhbaaron ke reading passages mein bahut aate hain — werden + Partizip II ko jaldi pehchaanna samajhne mein madad karta hai.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Der Ablauf beim Friseur',
    titleEn: 'What happens at the hairdresser',
    tokens: [
      { w: 'Willkommen', role: 'r-subject', en: 'welcome', hi: 'स्वागत है', type: 'Greeting' },
      { w: 'im', role: 'r-place', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Salon', role: 'r-place', en: 'salon', hi: 'सैलून', type: 'Noun · masc.' },
      { w: 'Krause', role: 'r-place', en: 'Krause', hi: 'क्राउसे', type: 'Name' },
      { w: '!', plain: true },
      { w: 'Hier', role: 'r-place', en: 'here', hi: 'यहां', type: 'Adverb · place' },
      { w: 'wird', role: 'r-verb', en: 'is (Position 2)', hi: 'जाता है', type: 'Verb · werden (Passiv, Position 2)', why: 'Passiv: werden + Partizip II.' },
      { w: 'jeder', role: 'r-subject', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Besuch', role: 'r-subject', en: 'visit', hi: 'यात्रा', type: 'Noun · masc.' },
      { w: 'entspannt', role: 'r-adjective', en: 'relaxed', hi: 'आरामदायक', type: 'Adjective' },
      { w: 'gestaltet', role: 'r-verb', en: 'shaped (Satzende)', hi: 'बनाया जाता है (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Zuerst', role: 'r-adverb', en: 'first', hi: 'सबसे पहले', type: 'Adverb', why: 'zuerst — chronological adverb (recycled — Ch.8).' },
      { w: 'werden', role: 'r-verb', en: 'are (Position 2)', hi: 'जाते हैं', type: 'Verb · werden (Passiv)' },
      { w: 'die', role: 'r-subject', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Haare', role: 'r-subject', en: 'hair', hi: 'बाल', type: 'Noun · plural' },
      { w: 'gewaschen', role: 'r-verb', en: 'washed (Satzende)', hi: 'धोए जाते हैं (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: ',', plain: true },
      { w: 'danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', type: 'Adverb', why: 'danach — chronological adverb (recycled — Ch.8).' },
      { w: 'werden', role: 'r-verb', en: 'are (Position 2)', hi: 'जाते हैं', type: 'Verb · werden (Passiv)' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'ये', type: 'Pronoun' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Kamm', role: 'r-dativ', en: 'comb', hi: 'कंघी', type: 'Noun · masc.', why: 'der Kamm (this chapter).' },
      { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'Schere', role: 'r-dativ', en: 'scissors', hi: 'कैंची', type: 'Noun · fem.', why: 'die Schere (this chapter).' },
      { w: 'geschnitten', role: 'r-verb', en: 'cut (Satzende)', hi: 'काटे जाते हैं (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Auf', role: 'r-preposition', en: 'on', hi: 'पर', type: 'Preposition · Akk.' },
      { w: 'Wunsch', role: 'r-object', en: 'request', hi: 'अनुरोध', type: 'Noun · masc.', why: '"auf Wunsch" — a common set phrase in service notices.', ex: 'Auf Wunsch werden die Haare gefärbt.', exEn: 'On request, the hair is coloured.' },
      { w: 'werden', role: 'r-verb', en: 'are (Position 2)', hi: 'जाते हैं', type: 'Verb · werden (Passiv)' },
      { w: 'die', role: 'r-subject', en: 'the (plural)', hi: 'ये', type: 'Article' },
      { w: 'Haare', role: 'r-subject', en: 'hair', hi: 'बाल', type: 'Noun · plural' },
      { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'gefärbt', role: 'r-verb', en: 'coloured (Satzende)', hi: 'रंगे जाते हैं (Satzende)', type: 'Verb · Partizip II (Satzende)', why: 'färben (this chapter).' },
      { w: '.', plain: true },
      { w: 'Schließlich', role: 'r-adverb', en: 'finally', hi: 'आख़िरकार', type: 'Adverb', why: 'schließlich — chronological adverb (recycled — Ch.8).' },
      { w: 'werden', role: 'r-verb', en: 'are (Position 2)', hi: 'जाते हैं', type: 'Verb · werden (Passiv)' },
      { w: 'sie', role: 'r-subject', en: 'they', hi: 'ये', type: 'Pronoun' },
      { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'einer', role: 'r-dativ', en: 'a (fem. dat.)', hi: 'एक', type: 'Article · dat.' },
      { w: 'Bürste', role: 'r-dativ', en: 'brush', hi: 'ब्रश', type: 'Noun · fem.', why: 'die Bürste (this chapter).' },
      { w: 'geföhnt', role: 'r-verb', en: 'blow-dried (Satzende)', hi: 'सुखाए जाते हैं (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Termine', role: 'r-object', en: 'appointments', hi: 'नियुक्तियां', type: 'Noun · plural' },
      { w: 'werden', role: 'r-verb', en: 'are (Position 2)', hi: 'जाते हैं', type: 'Verb · werden (Passiv)' },
      { w: 'online', role: 'r-adverb', en: 'online', hi: 'ऑनलाइन', type: 'Adverb' },
      { w: 'oder', role: 'r-conjunction', en: 'or', hi: 'या', type: 'Conjunction' },
      { w: 'telefonisch', role: 'r-adverb', en: 'by phone', hi: 'फ़ोन पर', type: 'Adverb' },
      { w: 'vergeben', role: 'r-verb', en: 'assigned, booked (Satzende)', hi: 'दिए जाते हैं (Satzende)', type: 'Verb · Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Welcome to Salon Krause! Here, every visit is shaped to be relaxing. First the hair is washed, then it is cut with comb and scissors. On request, the hair is also coloured. Finally it is blow-dried with a brush. Appointments are booked online or by phone.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation — professionally scripted, not a copy of the Story Dialogue.
    dialogue: [
      { id: 'B1_010_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Frau Bruns, warum ist das ganze Museum geschlossen?', en: 'Frau Bruns, why is the whole museum closed?' },
      { id: 'B1_010_L002', speaker: 'Frau Bruns', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Weil gerade das große Gemälde restauriert wird — das dauert leider den ganzen Tag.', en: 'Because the big painting is being restored right now — that unfortunately takes all day.' },
      { id: 'B1_010_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Schade. Wird es morgen wieder geöffnet?', en: 'Too bad. Will it be opened again tomorrow?' },
      { id: 'B1_010_L004', speaker: 'Frau Bruns', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, ab neun Uhr. Dann wird auch die neue Ausstellung eröffnet.', en: 'Yes, from nine o\'clock. Then the new exhibition will be opened too.' }
    ],
    transcript: 'Frau Bruns, warum ist das ganze Museum geschlossen? Weil gerade das große Gemälde restauriert wird — das dauert leider den ganzen Tag. Schade. Wird es morgen wieder geöffnet? Ja, ab neun Uhr. Dann wird auch die neue Ausstellung eröffnet.',
    translation: 'Frau Bruns, why is the whole museum closed? Because the big painting is being restored right now — that unfortunately takes all day. Too bad. Will it be opened again tomorrow? Yes, from nine o\'clock. Then the new exhibition will be opened too.',
    tokens: [
      { w: 'Frau' },
      { w: 'Bruns' },
      { w: ',', plain: true },
      { w: 'warum' },
      { w: 'ist' },
      { w: 'das' },
      { w: 'ganze' },
      { w: 'Museum' },
      { w: 'geschlossen' },
      { w: '?', plain: true },
      { w: 'Weil' },
      { w: 'gerade' },
      { w: 'das' },
      { w: 'große' },
      { w: 'Gemälde' },
      { w: 'restauriert' },
      { w: 'wird' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'dauert' },
      { w: 'leider' },
      { w: 'den' },
      { w: 'ganzen' },
      { w: 'Tag' },
      { w: '.', plain: true },
      { w: 'Schade' },
      { w: '.', plain: true },
      { w: 'Wird' },
      { w: 'es' },
      { w: 'morgen' },
      { w: 'wieder' },
      { w: 'geöffnet' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'ab' },
      { w: 'neun' },
      { w: 'Uhr' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'wird' },
      { w: 'auch' },
      { w: 'die' },
      { w: 'neue' },
      { w: 'Ausstellung' },
      { w: 'eröffnet' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum ist das Museum geschlossen?', qEn: 'Why is the museum closed?', options: ['wegen eines Streiks', 'das Gemälde wird restauriert', 'es ist Feiertag', 'es ist zu voll'], optionsEn: ['because of a strike', 'the painting is being restored', 'it is a public holiday', 'it is too crowded'], answer: 1,
        explain: '"Weil gerade das große Gemälde restauriert wird."' },
      { q: 'Was passiert morgen um neun?', qEn: 'What happens tomorrow at nine?', options: ['nichts Besonderes', 'die neue Ausstellung wird eröffnet', 'das Museum bleibt zu', 'ein Konzert findet statt'], optionsEn: ['nothing special', 'the new exhibition is opening', 'the museum stays closed', 'a concert is taking place'], answer: 1,
        explain: '"Dann wird auch die neue Ausstellung eröffnet."' }
    ]
  },

  speaking: [
    { task: "Du bist mit einem Gast im Museum. Er fragt, was hier nicht erlaubt ist.", taskEn: "You're in the museum with a guest. He asks what isn't allowed here.", de: "Hier wird nicht fotografiert, und die Bilder werden nicht berührt.", en: "Photography isn't allowed here, and the pictures aren't touched." },
    { task: "Ein Freund will dein Lieblingsgericht kochen. Erklär ihm den Ablauf.", taskEn: "A friend wants to cook your favourite dish. Explain the steps.", de: "Zuerst wird das Gemüse geschnitten, dann wird alles langsam gekocht.", en: "First the vegetables are cut, then everything is cooked slowly." },
    { task: "Deine Freundin fragt, was beim Friseur mit ihren Haaren gemacht wird.", taskEn: "Your friend asks what happens to her hair at the hairdresser's.", de: "Die Haare werden gewaschen, geschnitten und dann geföhnt.", en: "The hair is washed, cut and then blow-dried." },
    { task: "Ein Gast fragt, warum das Museum heute geschlossen ist.", taskEn: "A guest asks why the museum is closed today.", de: "Das große Gemälde wird restauriert. Morgen wird wieder geöffnet.", en: "The large painting is being restored. It opens again tomorrow." },
    { task: "Du zeigst einem Gast den Imbiss, in dem du arbeitest.", taskEn: "You show a guest the snack bar where you work.", de: "Hier wird jeden Morgen frisch gekocht, und um elf wird geöffnet.", en: "Here everything is cooked fresh every morning, and we open at eleven." },
    { task: "Deine Mitbewohnerin fragt, wie die Aufgaben in der Wohnung verteilt sind.", taskEn: "Your flatmate asks how the chores are shared out.", de: "Die Küche wird jeden Abend geputzt, und der Müll wird montags rausgebracht.", en: "The kitchen is cleaned every evening and the bins go out on Mondays." },
    { task: "Im Museum kommt eine Ansage. Erklär einem Gast, was gesagt wurde.", taskEn: "There's an announcement in the museum. Tell a guest what was said.", de: "Es wurde gesagt, dass die neue Ausstellung morgen eröffnet wird.", en: "It was announced that the new exhibition opens tomorrow." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short notice, announcement, or product description (six to eight sentences) using Passiv Präsens throughout — describe rules, a process, or how something is made, without naming who does it.',
    starters: ['Hier wird …', 'Zuerst wird …', 'Danach wird …', 'Schließlich wird …'],
    placeholder: 'Im Restaurant wird täglich frisch gekocht. Zuerst wird das Gemüse gewaschen …',
    minWords: 40
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which is the correct passive of "Der Mechaniker repariert das Auto"?',
      options: ['Das Auto wird reparieren.', 'Das Auto wird repariert.', 'Das Auto ist repariert.'],
      answer: 1,
      explain: 'werden (conjugated) + Partizip II: "Das Auto wird repariert."'
    },
    gap: {
      sentence: ['Das Essen ', ' gekocht.'],
      gaps: [ { answer: 'wird', accepts: ['wird'] } ],
      explain: 'das Essen is singular, so werden must agree: wird.'
    },
    match: {
      q: 'Match each active sentence to its passive equivalent.',
      pairs: [
        { noun: 'Der Koch kocht das Essen.', art: 'Das Essen wird gekocht.' },
        { noun: 'Die Lehrerin erklärt die Grammatik.', art: 'Die Grammatik wird erklärt.' },
        { noun: 'Die Firma baut ein Hotel.', art: 'Ein Hotel wird gebaut.' }
      ]
    },
    builder: {
      target: 'Build: "The door is opened."',
      bank: ['Die', 'Tür', 'wird', 'geöffnet', '.'],
      answer: ['Die', 'Tür', 'wird', 'geöffnet', '.'],
      roles: { 'Tür': 'r-subject', 'wird': 'r-verb', 'geöffnet': 'r-verb' }
    },
    transformActiveToPassive: {
      title: 'Transform: Active → Passive',
      prompt: 'Rewrite in the passive: "Die Verkäuferin verkauft das Fahrrad."',
      answer: 'Das Fahrrad wird verkauft.',
      explain: 'The object (das Fahrrad) becomes the subject; the original subject (die Verkäuferin) can be dropped.'
    },
    transformPassiveToActive: {
      title: 'Transform: Passive → Active',
      prompt: 'Rewrite in the active, adding a subject "der Chef": "Die Hausaufgaben werden gemacht."',
      answer: 'Die Schüler machen die Hausaufgaben.',
      explain: 'The passive subject becomes the object; a doer is added (or reintroduced) as the new subject.'
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Das Auto wird repariert von der Mechaniker.',
      right: 'Das Auto wird repariert von dem Mechaniker.',
      explain: 'The agent after von needs the Dativ (dem Mechaniker), not the Nominativ (der Mechaniker).'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Die Tür ___ geöffnet."', options: ['wird', 'werden', 'ist'], answer: 0,
      explain: 'die Tür is singular, so werden must agree: wird.' },
    { q: 'Which is the correct passive of "Die Firma baut ein Hotel"?', options: ['Ein Hotel wird bauen.', 'Ein Hotel wird gebaut.', 'Ein Hotel ist gebaut.'], answer: 1,
      explain: 'werden + Partizip II: "Ein Hotel wird gebaut."' },
    { q: 'Which sentence uses the correct case for the agent?', options: ['Das Auto wird repariert von der Mechaniker.', 'Das Auto wird repariert von dem Mechaniker.', 'Das Auto wird repariert der Mechaniker.'], answer: 1,
      explain: 'The agent after von takes the Dativ: von dem Mechaniker.' },
    { q: 'Complete: "Hier ___ nicht geraucht."', options: ['wird', 'werden', 'wirst'], answer: 0,
      explain: 'The impersonal passive uses the 3rd person singular: wird.' },
    { q: 'Which sentence contains an error?', options: ['Das Auto wird repariert.', 'Das Essen werden gekocht.', 'Die Grammatik wird erklärt.'], answer: 1,
      explain: 'das Essen is singular, so it needs wird, not werden.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'Build the present passive with <span class="de r-verb">werden</span> (conjugated, Position 2) + <b>Partizip II</b> (Satzende): <span class="de">Das Auto wird repariert.</span>' },
    { c: 'r-verb', html: 'The object of the active sentence becomes the subject of the passive one: <span class="de">Der Mechaniker repariert das Auto.</span> → <span class="de">Das Auto wird repariert.</span>' },
    { c: 'r-verb', html: 'Use the passive for rules, announcements, and processes where the actor is unknown, unimportant, or obvious: <span class="de">Hier wird nicht geraucht.</span>' }
  ],
  revisionTips: [
    'Drill werden\'s conjugation until automatic — ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.',
    'Practise the active→passive swap: find the object, make it the subject, conjugate werden to match.',
    'Watch for von + Dativ whenever an agent is mentioned in a passive sentence — never von + Nominativ.'
  ]
};

window.CHAPTER = CHAPTER;
