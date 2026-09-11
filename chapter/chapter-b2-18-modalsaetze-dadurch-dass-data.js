/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 18
   "Modalsätze: dadurch, dass" — the means/mechanism producing a
   result. Same verb-end word order as indem; both answer "Wie?"
   but dadurch,dass is more formal/written and emphasizes the
   mechanism itself. Contrasted with weil (reason). Does NOT
   introduce um...zu, ohne...zu, or anstatt...zu (later chapters).
   IMPORTANT: dialogue uses ONLY Wibke and Timo.
   Vocabulary source: uploaded chapter-18 list (55 items, user-edited
   general B2 vocabulary bank — craft/career/business themes).
============================================================ */
const CHAPTER = {
  id: 'b2-18-modalsaetze-dadurch-dass',
  phase: 'B2 · Phase 1',
  number: 18,
  title: 'Modalsätze: dadurch, dass',
  titleEn: 'Modal clauses: dadurch, dass',
  description: 'indem names the method plainly. dadurch, dass names the mechanism — the same idea, dressed for a report.',
  xp: 420,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 19, title: 'ohne ... zu', titleEn: 'without ... -ing' , href: 'chapter-b2-19-ohne-zu.html' },

  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The <em>mechanism</em> behind the result.',
    intro: 'Wibke has become a perfumer by training her sense of smell, testing new scents every day, and Timo is impressed by the skill it took — every achievement traced to its mechanism with dadurch, dass.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear dadurch, dass alongside indem — same meaning, more formal register'
    ],
    scene: 'Das Handwerksgeschäft',
    femaleSpeakers: ['Wibke'],
    dialogue: [
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'bin', role: 'r-verb', en: 'have become', hi: 'बन गयी हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'Parfümeurin', role: 'r-akkusativ', en: 'perfumer (f)', hi: 'इत्र निर्माता', pron: 'par-fü-MÖ-rin', type: 'Noun · fem.', why: 'die Parfümeurin (this chapter).', ex: 'Ich bin Parfümeurin geworden.', exEn: 'I have become a perfumer.' },
        { w: 'geworden', role: 'r-verb', en: 'become', hi: 'बनी', pron: 'ge-VOR-den', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'dadurch', role: 'r-conjunction', en: 'through the fact', hi: 'इसके ज़रिए', pron: 'da-DOORKH', type: 'Conjunction · dadurch, dass', why: 'dadurch, dass = through the fact that, modal clause of cause (this chapter).', ex: 'Ich wurde Parfümeurin, dadurch, dass ich meinen Geruchssinn trainierte.', exEn: 'I became a perfumer through the fact that I trained my sense of smell.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass (part of dadurch, dass)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'meinen', role: 'r-akkusativ', en: 'my (masc.)', hi: 'अपनी', pron: 'MY-nen', type: 'Possessive · acc.' },
        { w: 'Geruchssinn', role: 'r-akkusativ', en: 'sense of smell', hi: 'सूंघने की शक्ति', pron: 'ge-RUKHS-zin', type: 'Noun · masc.', why: 'der Geruchssinn (this chapter).', ex: 'meinen Geruchssinn trainieren' },
        { w: 'trainierte', role: 'r-verb', en: 'trained', hi: 'प्रशिक्षित की', pron: 'tray-NEER-tuh', type: 'Verb · trainieren (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I have become a perfumer through the fact that I trained my sense of smell.', hi: 'Main itra nirmaata ban gayi hoon apni soonghne ki shakti prashikshit karke.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Wie', role: 'r-question', en: 'how', hi: 'कैसे', pron: 'vee', type: 'Question word' },
        { w: 'hast', role: 'r-verb', en: 'have', hi: 'किया', pron: 'hast', type: 'Verb · haben' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'gemacht', role: 'r-verb', en: 'done', hi: 'किया', pron: 'ge-MAKHT', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'How did you do that?', hi: 'Tumne yeh kaise kiya?' },
      { speaker: 'Wibke', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'erreicht', role: 'r-verb', en: 'achieved', hi: 'हासिल', pron: 'er-RYKHT', type: 'Partizip II' },
        { w: ',', plain: true },
        { w: 'dadurch', role: 'r-conjunction', en: 'through the fact', hi: 'इसके ज़रिए', pron: 'da-DOORKH', type: 'Conjunction · dadurch, dass' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass (part of dadurch, dass)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'jeden', role: 'r-akkusativ', en: 'every', hi: 'हर', pron: 'YAY-den', type: 'Determiner' },
        { w: 'Tag', role: 'r-akkusativ', en: 'day', hi: 'दिन', pron: 'tahk', type: 'Noun · masc.' },
        { w: 'neue', role: 'r-akkusativ', en: 'new', hi: 'नए', pron: 'NOY-uh', type: 'Adjective' },
        { w: 'Düfte', role: 'r-akkusativ', en: 'scents', hi: 'ख़ुशबू', pron: 'DÜF-tuh', type: 'Noun · plural' },
        { w: 'testete', role: 'r-verb', en: 'tested', hi: 'जांची', pron: 'TES-te-tuh', type: 'Verb · testen (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'I achieved that through the fact that I tested new scents every day.', hi: 'Maine yeh haasil kiya har din nayi khushbu jaanch kar.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'nach', role: 'r-preposition', en: 'like', hi: 'जैसा', pron: 'nahkh', type: 'Preposition' },
        { w: 'viel', role: 'r-dativ', en: 'a lot of', hi: 'बहुत', pron: 'feel', type: 'Determiner' },
        { w: 'Geschick', role: 'r-dativ', en: 'skill (dat.)', hi: 'कौशल', pron: 'ge-SHIK', type: 'Noun · neut. dat.', why: 'das Geschick (this chapter).', ex: 'viel Geschick' },
        { w: '.', plain: true }
      ], en: 'That sounds like a lot of skill.', hi: 'Yeh bahut kaushal jaisa lagta hai.' },
      { speaker: 'Wibke', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'mein', role: 'r-akkusativ', en: 'my (neut.)', hi: 'अपना', pron: 'mine', type: 'Possessive · acc.' },
        { w: 'Lebensglück', role: 'r-akkusativ', en: 'life happiness', hi: 'जीवन की ख़ुशी', pron: 'LAY-benz-glük', type: 'Noun · neut.', why: 'das Lebensglück (this chapter).', ex: 'mein Lebensglück gefunden' },
        { w: 'gefunden', role: 'r-verb', en: 'found', hi: 'पाया', pron: 'ge-FUN-den', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'Thanks! I have found my life happiness.', hi: 'Dhanyavaad! Maine apni jeevan ki khushi paayi hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: '<span class="de r-dadurch">dadurch, dass</span> answers the same "Wie?" as <span class="de">indem</span>, but names the underlying MECHANISM producing a result, and reads more formal: <span class="de">Wir sind konkurrenzfähig, dadurch, dass wir hochwertiges Garn importieren.</span> — same idea as "indem wir importieren", dressed for a report.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is MODALSÄTZE MIT DADURCH, DASS (B2 level): "dadurch, dass" means "by/through the fact that" — it explains the means or mechanism producing a result, with verb-final word order (Wir sparen Kosten, dadurch, dass wir digitale Prozesse nutzen.). It answers the same "Wie?" question as "indem" (taught in Chapter 17), but is more formal/written and emphasizes the underlying mechanism rather than a simple action. Both are often interchangeable, but "dadurch, dass" is more common in reports, business communication, scientific texts, and Goethe B2 writing. Contrasted with "weil" (reason, "Warum?"). Can also be fronted: Dadurch, dass wir Fahrgemeinschaften bilden, sparen wir Geld. ' +
    'Do NOT expect um...zu, ohne...zu, or anstatt...zu — those are out of scope for this chapter; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- "dadurch, dass" clauses must have verb-final word order, with a comma both before "dadurch" and before "dass".\n' +
    '- "dadurch, dass" must express means/mechanism, not reason — if the learner uses it where "weil" is meant, flag it.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Means vs reason check:</b> one sentence on whether "dadurch, dass" was used correctly for means/mechanism (not reason), and whether "indem" might also have worked here.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly use "dadurch, dass" for means/mechanism with proper word order and comma placement. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the indem vs dadurch, dass comparison once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: dadurch, dass = the mechanism, more formal than indem, but answering the same "Wie?".'
  },

  parserSentence: [
    { w: 'Wir', role: 'plain' }, { w: 'sparen', role: 'plain' },
    { w: 'Kosten', role: 'plain' }, { w: ',', plain: true }, { w: 'dadurch', role: 'r-dadurch' }, { w: ',', plain: true }, { w: 'dass', role: 'r-dadurch' }, { w: 'wir', role: 'plain' }, { w: 'sparen', role: 'plain' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: dadurch, dass names the mechanism, more formal than indem.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Wibke and Timo discuss a craft business, naming exactly which mechanism produced each result.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 55 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master dadurch, dass word order, comma placement, and comparison to indem and weil.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of dadurch, dass mechanism sentences.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify the mechanism and distinguish dadurch, dass from indem in spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Explain processes and mechanisms using dadurch, dass naturally.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write reports and business communication using dadurch, dass appropriately.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill indem-vs-dadurch,dass, means-vs-reason, and sentence building.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 420 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 55 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '11 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'indem-vs-dadurch-dass drills, means-vs-reason classification, and a writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete dadurch, dass reference — word order, comma rules, indem comparison, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Wir sparen Zeit, dadurch, dass wir online arbeiten.', text: 'Use dadurch, dass with correct verb-final word order' },
    { de: 'Dadurch, dass wir Fahrgemeinschaften bilden, sparen wir Geld.', text: 'Front the dadurch, dass-clause correctly' },
    { de: 'indem vs. dadurch, dass', text: 'Choose the right register for spoken vs formal writing' },
    { de: 'weil (Warum?) vs. dadurch, dass (Wodurch?)', text: 'Distinguish reason from mechanism' },
    { de: 'Formal reports, business communication, scientific texts', text: 'Use dadurch, dass naturally in formal writing' }
  ],

  // ---------- Vocabulary (55 items — uploaded chapter-18 list) ----------
  vocab: [
    { de: 'fachlich', pos: 'adjective', level: 'B2', en: 'professional, technical', hi: 'व्यावसायिक', ex: 'Sie hat fachliche Kompetenz.', exEn: 'She has professional competence.', exHi: 'Uske paas vyavasaayik yogyata hai.', ex2: 'Die Frage war rein fachlich.', ex2En: 'The question was purely technical.', ex2Hi: 'Sawaal poori tarah tekniki tha.' },
    { de: 'final', pos: 'adjective', level: 'B2', en: 'final', hi: 'अंतिम', ex: 'Das ist die finale Version.', exEn: 'That is the final version.', exHi: 'Yeh antim sanskaran hai.', ex2: 'Die finale Entscheidung liegt bei dir.', ex2En: 'The final decision is up to you.', ex2Hi: 'Antim faisla tumhaara hai.' },
    { de: 'Finanzkrise', art: 'die', gender: 'f', plural: 'Finanzkrisen', pos: 'noun', level: 'B2', en: 'financial crisis', hi: 'वित्तीय संकट', ex: 'Trotz der Finanzkrise bleiben wir lukrativ, dadurch, dass wir restliche Kosten senken.', exEn: 'Despite the financial crisis, we remain lucrative, through the fact that we lower the remaining costs.', exHi: 'Vittiya sankat ke baavjood, hum laabhdaayak rehte hain, kyunki hum baaki lagat kam karte hain.', ex2: 'Die Finanzkrise traf viele Unternehmen hart.', ex2En: 'The financial crisis hit many companies hard.', ex2Hi: 'Vittiya sankat ne kai companiyon ko badi chot pahunchaayi.' },
    { de: 'frustriert', pos: 'adjective', level: 'B2', en: 'frustrated', hi: 'निराश', ex: 'Ich bin manchmal frustriert, aber ich löse Misserfolge, dadurch, dass ich respektvoll nachfrage.', exEn: 'I\'m sometimes frustrated, but I solve failures, through the fact that I inquire respectfully.', exHi: 'Main kabhi-kabhi niraash hoti hoon, lekin main asafalataaon ko hal karti hoon, kyunki main samaanjanak roop se poochti hoon.', ex2: 'Er wirkte sehr frustriert nach der Absage.', ex2En: 'He seemed very frustrated after the rejection.', ex2Hi: 'Asveekriti ke baad woh bahut niraash lag raha tha.' },
    { de: 'Garn', art: 'das', gender: 'n', plural: 'Garne', pos: 'noun', level: 'B2', en: 'yarn, thread', hi: 'धागा', ex: 'Wir sind konkurrenzfähig, dadurch, dass wir hochwertiges Garn importieren.', exEn: 'We are competitive, through the fact that we import high-quality yarn.', exHi: 'Hum pratispardhi hain, kyunki hum uch gunavatta waala dhaaga aayaat karte hain.', ex2: 'Das Garn ist aus reiner Wolle.', ex2En: 'The yarn is made of pure wool.', ex2Hi: 'Dhaaga shuddh ooni se bana hai.' },
    { de: 'genügend', pos: 'adjective', level: 'B2', en: 'sufficient, enough', hi: 'पर्याप्त', ex: 'Wir haben genügend Zeit.', exEn: 'We have sufficient time.', exHi: 'Humaare paas paryaapt samay hai.', ex2: 'Das ist genügend Material für das Projekt.', ex2En: 'That is enough material for the project.', ex2Hi: 'Yeh project ke liye paryaapt saamagri hai.' },
    { de: 'Geruchssinn', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'sense of smell', hi: 'सूंघने की क्षमता', ex: 'Der Parfümeur nutzt seinen Geruchssinn, dadurch, dass er jede Hautcreme testet.', exEn: 'The perfumer uses his sense of smell, through the fact that he tests every skin cream.', exHi: 'Itra nirmaata apni soonghne ki kshamata ka upyog karta hai, kyunki woh har twacha cream ka parikshan karta hai.', ex2: 'Ihr Geruchssinn ist außergewöhnlich fein.', ex2En: 'Her sense of smell is exceptionally fine.', ex2Hi: 'Uski soonghne ki kshamata asaadhaaran roop se sooksham hai.' },
    { de: 'Geschick', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'skill, knack', hi: 'हुनर', ex: 'Ich zeige mein handwerkliches Geschick, dadurch, dass ich alte Möbel restauriere.', exEn: 'I show my craftsmanship, through the fact that I restore old furniture.', exHi: 'Main apna hastashilp hunar dikhaati hoon, kyunki main purane furniture ko punarsthaapit karti hoon.', ex2: 'Er hat ein besonderes Geschick für Zahlen.', ex2En: 'He has a special knack for numbers.', ex2Hi: 'Sankhyaaon ke liye uska khaas hunar hai.' },
    { de: 'Handwerk', art: 'das', gender: 'n', plural: 'Handwerke', pos: 'noun', level: 'B2', en: 'craft, trade', hi: 'शिल्प', ex: 'Sie hat ein traditionelles Handwerk erlernt.', exEn: 'She has learned a traditional craft.', exHi: 'Usne ek paramparaagat shilp seekha hai.', ex2: 'Das Handwerk erfordert viel Geduld.', ex2En: 'The craft requires a lot of patience.', ex2Hi: 'Shilp mein bahut sahansheelta chahiye.' },
    { de: 'handwerklich', pos: 'adjective', level: 'B2', en: 'manual, craftsmanlike', hi: 'हस्तशिल्प संबंधी', ex: 'Ich zeige mein handwerkliches Geschick, dadurch, dass ich alte Möbel restauriere.', exEn: 'I show my craftsmanship, through the fact that I restore old furniture.', exHi: 'Main apna hastashilp hunar dikhaati hoon, kyunki main purane furniture ko punarsthaapit karti hoon.', ex2: 'Die Arbeit erfordert handwerkliches Können.', ex2En: 'The work requires craftsmanlike skill.', ex2Hi: 'Kaam mein hastashilp kaushal chahiye.' },
    { de: 'hauptberuflich', pos: 'adjective', level: 'B2', en: 'full-time, as a main profession', hi: 'पूर्णकालिक रूप से', ex: 'Mein Herzenswunsch erfüllt sich, dadurch, dass ich hauptberuflich als Näherin arbeite.', exEn: 'My heartfelt wish fulfils itself, through the fact that I work full-time as a seamstress.', exHi: 'Meri dil ki ichha poori hoti hai, kyunki main poorna-kaalik roop se sewing karne waali ke roop mein kaam karti hoon.', ex2: 'Er arbeitet hauptberuflich als Fotograf.', ex2En: 'He works full-time as a photographer.', ex2Hi: 'Woh poorna-kaalik roop se photographer ke roop mein kaam karta hai.' },
    { de: 'hauptsächlich', pos: 'adjective', level: 'B2', en: 'mainly, primarily', hi: 'मुख्य रूप से', ex: 'Wir verkaufen hauptsächlich handgemachte Produkte.', exEn: 'We mainly sell handmade products.', exHi: 'Hum mukhya roop se haath se bane products bechte hain.', ex2: 'Das Problem liegt hauptsächlich am Budget.', ex2En: 'The problem mainly lies in the budget.', ex2Hi: 'Samasya mukhya roop se budget mein hai.' },
    { de: 'Hautcreme', art: 'die', gender: 'f', plural: 'Hautcremes', pos: 'noun', level: 'B2', en: 'skin cream', hi: 'त्वचा क्रीम', ex: 'Der Parfümeur testet jede Hautcreme.', exEn: 'The perfumer tests every skin cream.', exHi: 'Itra nirmaata har twacha cream ka parikshan karta hai.', ex2: 'Diese Hautcreme ist sehr mild.', ex2En: 'This skin cream is very mild.', ex2Hi: 'Yeh twacha cream bahut halki hai.' },
    { de: 'herstellen', pos: 'verb', level: 'B2', en: 'to produce, manufacture', hi: 'उत्पादन करना', ex: 'Die Firma stellt handgefertigte Möbel her.', exEn: 'The company produces handmade furniture.', exHi: 'Company haath se bana furniture banaati hai.', ex2: 'Wir stellen nachhaltige Produkte her.', ex2En: 'We manufacture sustainable products.', ex2Hi: 'Hum tikaau products banaate hain.', conj: { praesens: 'stellt her', praeteritum: 'stellte her', perfekt: 'hat hergestellt' } },
    { de: 'Herzenswunsch', art: 'der', gender: 'm', plural: 'Herzenswünsche', pos: 'noun', level: 'B2', en: 'heartfelt wish', hi: 'दिल की इच्छा', ex: 'Mein Herzenswunsch erfüllt sich, dadurch, dass ich hauptberuflich als Näherin arbeite.', exEn: 'My heartfelt wish fulfils itself, through the fact that I work full-time as a seamstress.', exHi: 'Meri dil ki ichha poori hoti hai, kyunki main poorna-kaalik roop se sewing karne waali ke roop mein kaam karti hoon.', ex2: 'Ihr Herzenswunsch war schon immer, zu reisen.', ex2En: 'Her heartfelt wish was always to travel.', ex2Hi: 'Uski dil ki ichha hamesha se yatra karne ki thi.' },
    { de: 'hierzulande', pos: 'adverb', level: 'B2', en: 'in this country, here', hi: 'इस देश में', ex: 'Dadurch, dass wir eine Kampagne starten, werden wir hierzulande bekannter.', exEn: 'Through the fact that we launch a campaign, we become better known in this country.', exHi: 'Kyunki hum ek abhiyaan shuru karte hain, hum is desh mein adhik prasiddh ho jaate hain.', ex2: 'Hierzulande isst man viel Brot.', ex2En: 'In this country, people eat a lot of bread.', ex2Hi: 'Is desh mein log bahut roti khaate hain.' },
    { de: 'Highlight', art: 'das', gender: 'n', plural: 'Highlights', pos: 'noun', level: 'B2', en: 'highlight', hi: 'मुख्य आकर्षण', ex: 'Das Highlight der Reise war der Besuch der Stadt.', exEn: 'The highlight of the trip was the visit to the city.', exHi: 'Yatra ka mukhya aakarshan shahar ki yatra tha.', ex2: 'Dieses Event war das Highlight des Jahres.', ex2En: 'This event was the highlight of the year.', ex2Hi: 'Yeh aayojan saal ka mukhya aakarshan tha.' },
    { de: 'importieren', pos: 'verb', level: 'B2', en: 'to import', hi: 'आयात करना', ex: 'Wir sind konkurrenzfähig, dadurch, dass wir hochwertiges Garn importieren.', exEn: 'We are competitive, through the fact that we import high-quality yarn.', exHi: 'Hum pratispardhi hain, kyunki hum uch gunavatta waala dhaaga aayaat karte hain.', ex2: 'Das Land importiert viel Öl.', ex2En: 'The country imports a lot of oil.', ex2Hi: 'Desh bahut tel aayaat karta hai.', conj: { praesens: 'importiert', praeteritum: 'importierte', perfekt: 'hat importiert' } },
    { de: 'informativ', pos: 'adjective', level: 'B2', en: 'informative', hi: 'सूचनाप्रद', ex: 'Unser Profil wirkt informativer, dadurch, dass wir ein Internetportal einrichten.', exEn: 'Our profile seems more informative, through the fact that we set up an internet portal.', exHi: 'Hamaari profile adhik soochanaaprad lagti hai, kyunki hum ek internet portal sthaapit karte hain.', ex2: 'Der Vortrag war sehr informativ.', ex2En: 'The lecture was very informative.', ex2Hi: 'Vyaakhyaan bahut soochanaaprad tha.' },
    { de: 'Internetportal', art: 'das', gender: 'n', plural: 'Internetportale', pos: 'noun', level: 'B2', en: 'internet portal', hi: 'इंटरनेट पोर्टल', ex: 'Unser Profil wirkt informativer, dadurch, dass wir ein Internetportal einrichten.', exEn: 'Our profile seems more informative, through the fact that we set up an internet portal.', exHi: 'Hamaari profile adhik soochanaaprad lagti hai, kyunki hum ek internet portal sthaapit karte hain.', ex2: 'Das Internetportal wird täglich aktualisiert.', ex2En: 'The internet portal is updated daily.', ex2Hi: 'Internet portal roz update hota hai.' },
    { de: 'jetzig', pos: 'adjective', level: 'B2', en: 'current, present-day', hi: 'वर्तमान', ex: 'Meine jetzige Position gefällt mir.', exEn: 'I like my current position.', exHi: 'Mujhe meri vartamaan sthiti pasand hai.', ex2: 'Der jetzige Zustand ist unbefriedigend.', ex2En: 'The current state is unsatisfactory.', ex2Hi: 'Vartamaan sthiti asantoshjanak hai.' },
    { de: 'Jura', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'law (study of)', hi: 'कानून (विषय)', ex: 'Sie studiert Jura.', exEn: 'She studies law.', exHi: 'Woh kaanoon padhti hai.', ex2: 'Jura ist ein anspruchsvolles Studium.', ex2En: 'Law is a demanding course of study.', ex2Hi: 'Kaanoon ek maang waala vishay hai.' },
    { de: 'Jurist/in', art: 'der/die', gender: 'm/f', plural: 'Juristen/Juristinnen', pos: 'noun', level: 'B2', en: 'lawyer, jurist', hi: 'वकील', ex: 'Er arbeitet als Jurist bei einer großen Firma.', exEn: 'He works as a lawyer at a big company.', exHi: 'Woh ek badi company mein vakeel ke roop mein kaam karta hai.', ex2: 'Die Juristin vertritt ihre Mandanten gut.', ex2En: 'The lawyer represents her clients well.', ex2Hi: 'Vakeel apne mukvakkilon ka achha pratinidhitva karti hai.' },
    { de: 'Kampagne', art: 'die', gender: 'f', plural: 'Kampagnen', pos: 'noun', level: 'B2', en: 'campaign', hi: 'अभियान', ex: 'Dadurch, dass wir eine Kampagne starten, werden wir hierzulande bekannter.', exEn: 'Through the fact that we launch a campaign, we become better known in this country.', exHi: 'Kyunki hum ek abhiyaan shuru karte hain, hum is desh mein adhik prasiddh ho jaate hain.', ex2: 'Die Kampagne war ein großer Erfolg.', ex2En: 'The campaign was a great success.', ex2Hi: 'Abhiyaan ek badi safalta thi.' },
    { de: 'Kindesbein', art: 'das', gender: 'n', plural: '— (Sg., nur in "von Kindesbeinen an")', pos: 'noun', level: 'B2', en: 'early childhood', hi: 'बचपन', ex: 'Sie liebt Musik von Kindesbeinen an.', exEn: 'She has loved music since early childhood.', exHi: 'Use bachpan se hi sangeet pasand hai.', ex2: 'Von Kindesbeinen an wollte er Arzt werden.', ex2En: 'Since early childhood he wanted to become a doctor.', ex2Hi: 'Bachpan se hi woh doctor banna chaahta tha.' },
    { de: 'Komma', art: 'das', gender: 'n', plural: 'Kommas/Kommata', pos: 'noun', level: 'B2', en: 'comma', hi: 'अल्पविराम', ex: 'Vor "dass" steht immer ein Komma.', exEn: 'There is always a comma before "dass".', exHi: '"dass" se pehle hamesha alpviraam hota hai.', ex2: 'Das Komma fehlt in diesem Satz.', ex2En: 'The comma is missing in this sentence.', ex2Hi: 'Is vaakya mein alpviraam gaayab hai.' },
    { de: 'konkurrenzfähig', pos: 'adjective', level: 'B2', en: 'competitive', hi: 'प्रतिस्पर्धी', ex: 'Wir sind konkurrenzfähig, dadurch, dass wir hochwertiges Garn importieren.', exEn: 'We are competitive, through the fact that we import high-quality yarn.', exHi: 'Hum pratispardhi hain, kyunki hum uch gunavatta waala dhaaga aayaat karte hain.', ex2: 'Der Preis muss konkurrenzfähig bleiben.', ex2En: 'The price must remain competitive.', ex2Hi: 'Daam pratispardhi rehna chahiye.' },
    { de: 'Konzertpianist/in', art: 'der/die', gender: 'm/f', plural: 'Konzertpianisten/Konzertpianistinnen', pos: 'noun', level: 'B2', en: 'concert pianist', hi: 'संगीत कार्यक्रम पियानोवादक', ex: 'Sie ist eine bekannte Konzertpianistin.', exEn: 'She is a well-known concert pianist.', exHi: 'Woh ek prasiddh concert pianist hai.', ex2: 'Der Konzertpianist spielte meisterhaft.', ex2En: 'The concert pianist played masterfully.', ex2Hi: 'Concert pianist ne mahaarat se bajaaya.' },
    { de: 'kooperativ', pos: 'adjective', level: 'B2', en: 'cooperative', hi: 'सहयोगात्मक', ex: 'Das Team arbeitet sehr kooperativ.', exEn: 'The team works very cooperatively.', exHi: 'Team bahut sahyogaatmak roop se kaam karti hai.', ex2: 'Er zeigte sich kooperativ.', ex2En: 'He showed himself to be cooperative.', ex2Hi: 'Usne khud ko sahyogaatmak dikhaaya.' },
    { de: 'Lebensglück', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'life happiness', hi: 'जीवन की खुशी', ex: 'Ihr Lebensglück liegt in der Musik.', exEn: 'Her life happiness lies in music.', exHi: 'Uski jeevan ki khushi sangeet mein hai.', ex2: 'Geld allein bringt kein Lebensglück.', ex2En: 'Money alone doesn\'t bring life happiness.', ex2Hi: 'Sirf paisa jeevan ki khushi nahi laata.' },
    { de: 'Liebling', art: 'der', gender: 'm', plural: 'Lieblinge', pos: 'noun', level: 'B2', en: 'favourite, darling', hi: 'पसंदीदा', ex: 'Das ist mein Liebling unter den Büchern.', exEn: 'That is my favourite among the books.', exHi: 'Yeh kitaabon mein mera pasandeeda hai.', ex2: 'Sie ist der Liebling der Familie.', ex2En: 'She is the darling of the family.', ex2Hi: 'Woh parivaar ki pasandeeda hai.' },
    { de: 'Lifestyle', art: 'der', gender: 'm', plural: 'Lifestyles', pos: 'noun', level: 'B2', en: 'lifestyle', hi: 'जीवनशैली', ex: 'Ihr Lifestyle ist sehr gesund.', exEn: 'Her lifestyle is very healthy.', exHi: 'Uski jeevanshaili bahut swasth hai.', ex2: 'Er lebt einen minimalistischen Lifestyle.', ex2En: 'He lives a minimalist lifestyle.', ex2Hi: 'Woh ek minimalist jeevanshaili jeeta hai.' },
    { de: 'Lob', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'praise', hi: 'प्रशंसा', ex: 'Sie erhielt viel Lob für ihre Arbeit.', exEn: 'She received a lot of praise for her work.', exHi: 'Use apne kaam ke liye bahut prashansa mili.', ex2: 'Das Lob motivierte das ganze Team.', ex2En: 'The praise motivated the whole team.', ex2Hi: 'Prashansa ne poori team ko prerit kiya.' },
    { de: 'lukrativ', pos: 'adjective', level: 'B2', en: 'lucrative', hi: 'लाभदायक', ex: 'Trotz der Finanzkrise bleiben wir lukrativ, dadurch, dass wir restliche Kosten senken.', exEn: 'Despite the financial crisis, we remain lucrative, through the fact that we lower the remaining costs.', exHi: 'Vittiya sankat ke baavjood, hum laabhdaayak rehte hain, kyunki hum baaki lagat kam karte hain.', ex2: 'Das Geschäft ist sehr lukrativ.', ex2En: 'The business is very lucrative.', ex2Hi: 'Vyaapaar bahut laabhdaayak hai.' },
    { de: 'Management', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'management', hi: 'प्रबंधन', ex: 'Das Management trifft die endgültige Entscheidung.', exEn: 'The management makes the final decision.', exHi: 'Prabandhan antim faisla leta hai.', ex2: 'Gutes Management ist entscheidend.', ex2En: 'Good management is crucial.', ex2Hi: 'Achha prabandhan mahatvapurn hai.' },
    { de: 'Manager/in', art: 'der/die', gender: 'm/f', plural: 'Manager/innen', pos: 'noun', level: 'B2', en: 'manager', hi: 'प्रबंधक', ex: 'Der Manager leitet das Team erfolgreich.', exEn: 'The manager leads the team successfully.', exHi: 'Prabandhak team ka safaltapoorvak netritva karta hai.', ex2: 'Sie wurde zur Managerin befördert.', ex2En: 'She was promoted to manager.', ex2Hi: 'Use prabandhak ke roop mein pravonnat kiya gaya.' },
    { de: 'mangelnd', pos: 'adjective', level: 'B2', en: 'lacking, insufficient', hi: 'अभाव वाला', ex: 'Mangelnde Erfahrung war das Hauptproblem.', exEn: 'Lacking experience was the main problem.', exHi: 'Anubhav ki kami mukhya samasya thi.', ex2: 'Wegen mangelnder Zeit konnten wir nicht teilnehmen.', ex2En: 'Due to lack of time, we couldn\'t participate.', ex2Hi: 'Samay ki kami ke kaaran, hum bhaag nahi le sake.' },
    { de: 'Messecatering', art: 'das', gender: 'n', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'trade-fair catering', hi: 'व्यापार मेला खानपान', ex: 'Das Messecatering war professionell organisiert.', exEn: 'The trade-fair catering was professionally organized.', exHi: 'Vyaapaar mela khanpaan seva professional roop se aayojit thi.', ex2: 'Wir buchten das Messecatering früh.', ex2En: 'We booked the trade-fair catering early.', ex2Hi: 'Humne vyaapaar mela khanpaan seva jaldi book ki.' },
    { de: 'Misserfolg', art: 'der', gender: 'm', plural: 'Misserfolge', pos: 'noun', level: 'B2', en: 'failure', hi: 'असफलता', ex: 'Ich löse Misserfolge, dadurch, dass ich respektvoll nachfrage.', exEn: 'I solve failures, through the fact that I inquire respectfully.', exHi: 'Main asafalataaon ko hal karti hoon, kyunki main samaanjanak roop se poochti hoon.', ex2: 'Aus jedem Misserfolg kann man lernen.', ex2En: 'One can learn from every failure.', ex2Hi: 'Har asafalata se seekha ja sakta hai.' },
    { de: 'Mitarbeit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'collaboration, cooperation', hi: 'सहयोग', ex: 'Vielen Dank für Ihre Mitarbeit.', exEn: 'Thank you very much for your cooperation.', exHi: 'Aapke sahyog ke liye bahut dhanyavaad.', ex2: 'Die Mitarbeit aller war entscheidend.', ex2En: 'Everyone\'s cooperation was crucial.', ex2Hi: 'Sabka sahyog mahatvapurn tha.' },
    { de: 'Muster', art: 'das', gender: 'n', plural: 'Muster', pos: 'noun', level: 'B2', en: 'pattern, sample', hi: 'नमूना', ex: 'Dadurch, dass die Näherin jede Naht sorgfältig prüft, erreichen wir ein fehlerfreies Muster.', exEn: 'Through the fact that the seamstress carefully checks every seam, we achieve a flawless pattern.', exHi: 'Kyunki sewing karne waali har seam ko savdhaani se jaanchti hai, hum ek nirdosh namoona haasil karte hain.', ex2: 'Das Muster wiederholt sich regelmäßig.', ex2En: 'The pattern repeats regularly.', ex2Hi: 'Namoona niyamit roop se dohraata hai.' },
    { de: 'Nagel', art: 'der', gender: 'm', plural: 'Nägel', pos: 'noun', level: 'B2', en: 'nail', hi: 'कील', ex: 'Er schlägt den Nagel in die Wand.', exEn: 'He hammers the nail into the wall.', exHi: 'Woh kaeel deewaar mein thoktha hai.', ex2: 'Der Nagel ist zu kurz.', ex2En: 'The nail is too short.', ex2Hi: 'Kaeel bahut chhoti hai.' },
    { de: 'nahegelegen', pos: 'adjective', level: 'B2', en: 'nearby, close', hi: 'निकटवर्ती', ex: 'Wir kaufen im nahegelegenen Geschäft ein.', exEn: 'We shop at the nearby store.', exHi: 'Hum nikatvarti dukaan se khareedte hain.', ex2: 'Der nahegelegene Park ist sehr schön.', ex2En: 'The nearby park is very beautiful.', ex2Hi: 'Nikatvarti park bahut sundar hai.' },
    { de: 'Näher/in', art: 'der/die', gender: 'm/f', plural: 'Näher/innen', pos: 'noun', level: 'B2', en: 'seamstress, sewer', hi: 'सिलाई करने वाला/वाली', ex: 'Dadurch, dass die Näherin jede Naht sorgfältig prüft, erreichen wir ein fehlerfreies Muster.', exEn: 'Through the fact that the seamstress carefully checks every seam, we achieve a flawless pattern.', exHi: 'Kyunki sewing karne waali har seam ko savdhaani se jaanchti hai, hum ek nirdosh namoona haasil karte hain.', ex2: 'Die Näherin arbeitet sehr präzise.', ex2En: 'The seamstress works very precisely.', ex2Hi: 'Sewing karne waali bahut satikta se kaam karti hai.' },
    { de: 'Naht', art: 'die', gender: 'f', plural: 'Nähte', pos: 'noun', level: 'B2', en: 'seam', hi: 'सीवन', ex: 'Dadurch, dass die Näherin jede Naht sorgfältig prüft, erreichen wir ein fehlerfreies Muster.', exEn: 'Through the fact that the seamstress carefully checks every seam, we achieve a flawless pattern.', exHi: 'Kyunki sewing karne waali har seam ko savdhaani se jaanchti hai, hum ek nirdosh namoona haasil karte hain.', ex2: 'Die Naht ist perfekt gesteppt.', ex2En: 'The seam is perfectly stitched.', ex2Hi: 'Seam perfect roop se seelaa hua hai.' },
    { de: 'Nebenjob', art: 'der', gender: 'm', plural: 'Nebenjobs', pos: 'noun', level: 'B2', en: 'side job', hi: 'अतिरिक्त नौकरी', ex: 'Sie hat einen Nebenjob im Café.', exEn: 'She has a side job at the café.', exHi: 'Uski café mein ek atirikt naukri hai.', ex2: 'Der Nebenjob bringt zusätzliches Einkommen.', ex2En: 'The side job brings additional income.', ex2Hi: 'Atirikt naukri se atirikt aay hoti hai.' },
    { de: 'Nervenkitzel', art: 'der', gender: 'm', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'thrill', hi: 'रोमांच', ex: 'Der Nervenkitzel des Abenteuers zog sie an.', exEn: 'The thrill of the adventure attracted her.', exHi: 'Sahasik kaarya ke romaanch ne use aakarshit kiya.', ex2: 'Achterbahnen bieten viel Nervenkitzel.', ex2En: 'Roller coasters offer a lot of thrill.', ex2Hi: 'Roller coaster bahut romaanch dete hain.' },
    { de: 'Parfümeur/in', art: 'der/die', gender: 'm/f', plural: 'Parfümeure/Parfümeurinnen', pos: 'noun', level: 'B2', en: 'perfumer', hi: 'इत्र निर्माता', ex: 'Der Parfümeur nutzt seinen Geruchssinn, dadurch, dass er jede Hautcreme testet.', exEn: 'The perfumer uses his sense of smell, through the fact that he tests every skin cream.', exHi: 'Itra nirmaata apni soonghne ki kshamata ka upyog karta hai, kyunki woh har twacha cream ka parikshan karta hai.', ex2: 'Die Parfümeurin kreiert neue Düfte.', ex2En: 'The perfumer creates new fragrances.', ex2Hi: 'Itra nirmaata nayi khushboo banaati hai.' },
    { de: 'Praktikumszeit', art: 'die', gender: 'f', plural: 'Praktikumszeiten', pos: 'noun', level: 'B2', en: 'internship period', hi: 'इंटर्नशिप अवधि', ex: 'Die Praktikumszeit dauert drei Monate.', exEn: 'The internship period lasts three months.', exHi: 'Internship avadhi teen mahine ki hoti hai.', ex2: 'Während der Praktikumszeit lernte sie viel.', ex2En: 'During the internship period she learned a lot.', ex2Hi: 'Internship avadhi ke dauraan usne bahut kuch seekha.' },
    { de: 'Profil', art: 'das', gender: 'n', plural: 'Profile', pos: 'noun', level: 'B2', en: 'profile', hi: 'प्रोफ़ाइल', ex: 'Unser Profil wirkt informativer, dadurch, dass wir ein Internetportal einrichten.', exEn: 'Our profile seems more informative, through the fact that we set up an internet portal.', exHi: 'Hamaari profile adhik soochanaaprad lagti hai, kyunki hum ek internet portal sthaapit karte hain.', ex2: 'Sein Profil sieht sehr professionell aus.', ex2En: 'His profile looks very professional.', ex2Hi: 'Uski profile bahut professional dikhti hai.' },
    { de: 'relevant', pos: 'adjective', level: 'B2', en: 'relevant', hi: 'प्रासंगिक', ex: 'Diese Information ist sehr relevant.', exEn: 'This information is very relevant.', exHi: 'Yeh jaankaari bahut prasangik hai.', ex2: 'Der Punkt ist nicht relevant für die Diskussion.', ex2En: 'The point is not relevant to the discussion.', ex2Hi: 'Yeh bindu charcha ke liye prasangik nahi hai.' },
    { de: 'respektvoll', pos: 'adjective', level: 'B2', en: 'respectful', hi: 'सम्मानजनक', ex: 'Ich löse Misserfolge, dadurch, dass ich respektvoll nachfrage.', exEn: 'I solve failures, through the fact that I inquire respectfully.', exHi: 'Main asafalataaon ko hal karti hoon, kyunki main samaanjanak roop se poochti hoon.', ex2: 'Sie sprach immer respektvoll mit ihren Kollegen.', ex2En: 'She always spoke respectfully with her colleagues.', ex2Hi: 'Woh hamesha apne sahakarmiyon se samaanjanak roop se baat karti thi.' },
    { de: 'restaurieren', pos: 'verb', level: 'B2', en: 'to restore', hi: 'पुनर्स्थापित करना', ex: 'Ich zeige mein handwerkliches Geschick, dadurch, dass ich alte Möbel restauriere.', exEn: 'I show my craftsmanship, through the fact that I restore old furniture.', exHi: 'Main apna hastashilp hunar dikhaati hoon, kyunki main purane furniture ko punarsthaapit karti hoon.', ex2: 'Er restauriert alte Gemälde.', ex2En: 'He restores old paintings.', ex2Hi: 'Woh purane chitr punarsthaapit karta hai.', conj: { praesens: 'restauriert', praeteritum: 'restaurierte', perfekt: 'hat restauriert' } },
    { de: 'restlich', pos: 'adjective', level: 'B2', en: 'remaining', hi: 'बाकी', ex: 'Trotz der Finanzkrise bleiben wir lukrativ, dadurch, dass wir restliche Kosten senken.', exEn: 'Despite the financial crisis, we remain lucrative, through the fact that we lower the remaining costs.', exHi: 'Vittiya sankat ke baavjood, hum laabhdaayak rehte hain, kyunki hum baaki lagat kam karte hain.', ex2: 'Die restlichen Arbeiten sind bald fertig.', ex2En: 'The remaining work will soon be finished.', ex2Hi: 'Baaki kaam jald poora ho jaayega.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was bedeutet "dadurch, dass"?',
      body: [ '"dadurch, dass" means "by the fact that / through the fact that / by doing something." It explains HOW something becomes possible — the means or mechanism.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Anna verbessert ihr Deutsch dadurch, dass sie jeden Tag liest.</span>'],
          ['<span class="de">Die Firma spart Kosten dadurch, dass sie digitale Prozesse nutzt.</span>']
        ]
      },
      hinglish: '"dadurch, dass" ka matlab hai "is tareeke se ki" \u2014 matlab yeh batata hai ki kaam <b>kaise</b> mumkin hua. Iska focus us mechanism par hota hai jiski wajah se result aaya.'
    },
    {
      title: 'Satzstruktur',
      body: [ 'Watch the punctuation carefully: <b>dadurch</b> belongs to the main clause, so there is NO comma before it. The comma comes only before <b>dass</b>, and the dass-clause has verb-final word order \u2014 <span class="de">Wir sparen Zeit dadurch, dass wir online arbeiten.</span> (If the clause is fronted instead, it becomes <span class="de">Dadurch, dass wir online arbeiten, sparen wir Zeit.</span>)' ],
      table: {
        head: ['Main Clause', 'dadurch, dass-Nebensatz'],
        rows: [
          ['Wir sparen Zeit', 'dadurch, dass wir online arbeiten.'],
          ['Die Studenten lernen schneller', 'dadurch, dass sie regelmäßig üben.']
        ]
      },
      hinglish: 'Punctuation dhyaan se dekho. <b>dadurch</b> main clause ka hissa hai, isliye uske pehle comma nahi lagta \u2014 comma sirf <b>dass</b> se pehle aata hai, aur dass-clause ka verb sentence ke end mein jaata hai: <span class="de">Wir sparen Zeit dadurch, dass wir online arbeiten.</span> Agar clause ko aage rakho to <span class="de">Dadurch, dass wir online arbeiten, sparen wir Zeit.</span>'
    },
    {
      title: '"dadurch, dass" vs "indem"',
      body: [ 'Both answer "Wie?" — but they differ in directness and formality.' ],
      table: {
        head: ['indem', 'dadurch, dass'],
        rows: [
          ['More direct — describes the method itself', 'Focuses on the mechanism or means'],
          ['Natural in speech', 'Often sounds more formal'],
          ['<span class="de">Ich verbessere mein Deutsch, indem ich Podcasts höre.</span>', '<span class="de">Ich verbessere mein Deutsch dadurch, dass ich regelmäßig Podcasts höre.</span>']
        ]
      },
      hinglish: 'Dono hi "kaise?" ka jawaab dete hain. Fark itna hai ki <b>indem</b> seedha tareeka batata hai aur bolchaal mein natural lagta hai, jabki <b>dadurch, dass</b> mechanism par zor deta hai aur zyada formal lagta hai.'
    },
    {
      title: '"dadurch, dass" vs "weil"',
      body: [ 'Never confuse means with reason — they answer different questions.' ],
      table: {
        head: ['weil (Warum? / Reason)', 'dadurch, dass (Wodurch? / Means)'],
        rows: [
          ['<span class="de">Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.</span>', '<span class="de">Ich verbessere mein Deutsch dadurch, dass ich täglich spreche.</span>']
        ]
      },
      hinglish: 'Means aur reason ko mila mat do. <b>weil</b> batata hai kyun, aur <b>dadurch, dass</b> batata hai kis cheez ke zariye \u2014 dono alag sawaal hain.'
    },
    {
      title: 'Typische Goethe-Kontexte',
      body: [ 'These realistic examples show dadurch, dass in business and environmental contexts.' ],
      table: {
        head: ['Examples'],
        rows: [
          ['<span class="de">Das Unternehmen steigert die Produktivität dadurch, dass moderne Software eingesetzt wird.</span>'],
          ['<span class="de">Deutschland reduziert Emissionen dadurch, dass erneuerbare Energien genutzt werden.</span>']
        ]
      },
      hinglish: 'Yeh examples dikhate hain ki dadurch, dass asli mein kahan aata hai \u2014 business reports aur environment wale formal texts mein.'
    },
    {
      title: 'Formelles Schreiben',
      body: [ '"dadurch, dass" is very common in reports, business communication, scientific texts, newspaper articles, presentations, and Goethe B2 writing.' ]
    },
    {
      title: 'Satzvariationen',
      body: [ 'The dadurch,dass-clause can also come first, followed by a comma and the main clause starting with the verb.' ],
      table: {
        head: ['Order', 'Example'],
        rows: [
          ['Main Clause first', '<span class="de">Wir sparen Geld dadurch, dass wir Fahrgemeinschaften bilden.</span>'],
          ['dadurch, dass first', '<span class="de">Dadurch, dass wir Fahrgemeinschaften bilden, sparen wir Geld.</span>']
        ]
      },
      hinglish: 'Is clause ko aage bhi rakh sakte ho. Aise case mein "Dadurch" se sentence shuru hota hai, aur clause khatam hone par comma ke baad main clause apne verb se shuru hoga.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from missing commas, wrong word order, or confusing means with reason.' ],
      mistakes: [
        { wrong: 'Dadurch, dass wir lernen Deutsch.', right: 'Dadurch, dass wir Deutsch lernen, …', why: 'The verb must go to the END of the "dass"-clause: "Deutsch lernen", not "lernen Deutsch". This fragment also needs a main clause to complete the sentence.' },
        { wrong: 'Ich verbessere mein Deutsch dadurch ich lese.', right: 'Ich verbessere mein Deutsch dadurch, dass ich lese.', why: '"dadurch" must be followed by ", dass" — you cannot drop "dass" and attach the clause directly.' },
        { wrong: 'Dadurch, dass sie viel lernt verbessert sie ihr Deutsch.', right: 'Dadurch, dass sie viel lernt, verbessert sie ihr Deutsch.', why: 'A comma is required after the "dadurch, dass"-clause, before the main clause.' },
        { wrong: 'Ich lerne Deutsch, dadurch dass ich nach Deutschland möchte.', right: 'Ich lerne Deutsch, weil ich nach Deutschland möchte.', why: 'A wish/goal is a REASON, not a means — use "weil", not "dadurch, dass".' },
        { wrong: 'Dadurch, dass ich will Arzt werden.', right: 'Ich werde Arzt dadurch, dass ich das Studium abschließe.', why: '"dadurch, dass" needs a real mechanism (an action), not a wish — and the sentence needs a main clause.' }
      ],
      hinglish: 'Yeh galtiyan teen wajah se hoti hain \u2014 comma galat jagah lagana, verb ko clause ke end mein na bhejna, ya means ki jagah reason bata dena.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ '"dadurch, dass" appears frequently in Goethe B2 formal writing tasks — reports, business emails, and scientific summaries.' ],
      note: 'Memory trick: indem = Method, doing something. dadurch, dass = Means, through the fact that something happens. Need HOW, plainly? Use indem. Need to emphasize the mechanism, formally? Use dadurch, dass.',
      hinglish: '"dadurch, dass" Goethe B2 ki formal writing mein aksar kaam aata hai \u2014 reports, business emails aur scientific summaries mein.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Porträt: Die Schneiderin, die alte Stoffe rettet',
    titleEn: 'Profile: the tailor who rescues old fabrics',
    tokens: [
      { w: 'Frau', role: 'plain', en: 'Ms', hi: 'श्रीमती', type: 'Noun · fem.' },
      { w: 'Bauer', role: 'plain', en: 'Bauer', hi: 'बाउर', type: 'Name' },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'sich', role: 'plain', en: 'herself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'dadurch', role: 'r-connector', en: 'through the fact (Korrelat)', hi: 'इस तथ्य से (Korrelat)', type: 'Pronominaladverb · dadurch, dass', why: 'dadurch, dass: dadurch announces the means, the dass-Satz explains it — this chapter\'s pattern.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'zehn', role: 'plain', en: 'ten', hi: 'दस', type: 'Number' },
      { w: 'Jahre', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'als', role: 'plain', en: 'as a', hi: 'के रूप में', type: 'Preposition' },
      { w: 'Näherin', role: 'plain', en: 'seamstress', hi: 'दर्ज़ी', type: 'Noun · fem.', why: 'der/die Näher/in (this chapter).' },
      { w: 'gearbeitet', role: 'plain', en: 'worked (Satzende)', hi: 'काम किया (Satzende)', type: 'Verb · Partizip II' },
      { w: 'hat', role: 'plain', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'seltenes', role: 'plain', en: 'rare', hi: 'दुर्लभ', type: 'Adjective' },
      { w: 'Handwerk', role: 'plain', en: 'craft', hi: 'शिल्प', type: 'Noun · neut.', why: 'das Handwerk (this chapter).' },
      { w: 'gemeistert', role: 'plain', en: 'mastered (Satzende)', hi: 'महारत हासिल की (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'restauriert', role: 'plain', en: 'restores', hi: 'बहाल करती है', type: 'Verb · restaurieren', why: 'restaurieren (this chapter).' },
      { w: 'alte', role: 'plain', en: 'old', hi: 'पुराने', type: 'Adjective' },
      { w: 'Kleidungsstücke', role: 'plain', en: 'garments (Satzende)', hi: 'वस्त्र (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'indem', role: 'plain', en: 'by', hi: 'द्वारा', type: 'Modalkonjunktion · indem (recycled)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Naht', role: 'plain', en: 'seam', hi: 'सिलाई', type: 'Noun · fem.', why: 'die Naht (this chapter).' },
      { w: 'von', role: 'plain', en: 'by', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'Hand', role: 'plain', en: 'hand', hi: 'हाथ', type: 'Noun · fem.' },
      { w: 'näht', role: 'plain', en: 'sews (Satzende)', hi: 'सिलती है (Satzende)', type: 'Verb · nähen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Dadurch', role: 'r-connector', en: 'through this (Korrelat)', hi: 'इससे (Korrelat)', type: 'Pronominaladverb · dadurch, dass' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'so', role: 'plain', en: 'so', hi: 'इतनी', type: 'Adverb' },
      { w: 'gründlich', role: 'plain', en: 'thoroughly', hi: 'गहराई से', type: 'Adverb' },
      { w: 'arbeitet', role: 'plain', en: 'works (Satzende)', hi: 'काम करती है (Satzende)', type: 'Verb · arbeiten (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'उसने', type: 'Pronoun' },
      { w: 'sich', role: 'plain', en: 'herself', hi: 'ख़ुद को', type: 'Reflexivpronomen' },
      { w: 'einen', role: 'plain', en: 'a (masc. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Ruf', role: 'plain', en: 'reputation (Satzende)', hi: 'प्रतिष्ठा (Satzende)', type: 'Noun · masc.' },
      { w: 'weit', role: 'plain', en: 'far', hi: 'बहुत दूर', type: 'Adjective' },
      { w: 'über', role: 'plain', en: 'beyond', hi: 'से परे', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Stadtgrenzen', role: 'plain', en: 'city limits (Satzende)', hi: 'शहर की सीमाओं (Satzende)', type: 'Noun · plural' },
      { w: 'hinaus', role: 'plain', en: 'beyond (Satzende)', hi: 'से आगे (Satzende)', type: 'Adverb' },
      { w: 'erarbeitet', role: 'plain', en: 'built (Satzende)', hi: 'बनाई (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true },
      { w: 'Zwar', role: 'plain', en: 'admittedly', hi: 'हालांकि', type: 'Adverb' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'ihr', role: 'plain', en: 'her', hi: 'उसका', type: 'Possessivartikel' },
      { w: 'Beruf', role: 'plain', en: 'profession', hi: 'पेशा', type: 'Noun · masc.' },
      { w: 'selten', role: 'plain', en: 'rarely (Satzende)', hi: 'शायद ही कभी (Satzende)', type: 'Adjective' },
      { w: 'lukrativ', role: 'plain', en: 'lucrative (Satzende)', hi: 'लाभदायक (Satzende)', type: 'Adjective', why: 'lukrativ (this chapter).' },
      { w: ',', plain: true },
      { w: 'doch', role: 'plain', en: 'yet', hi: 'फिर भी', type: 'Konjunktion' },
      { w: 'dadurch', role: 'r-connector', en: 'through the fact (Korrelat)', hi: 'इस तथ्य से (Korrelat)', type: 'Pronominaladverb · dadurch, dass' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'jedes', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Stück', role: 'plain', en: 'piece', hi: 'टुकड़ा', type: 'Noun · neut.' },
      { w: 'wie', role: 'plain', en: 'like', hi: 'जैसे', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Kunstwerk', role: 'plain', en: 'work of art (Satzende)', hi: 'कलाकृति (Satzende)', type: 'Noun · neut.' },
      { w: 'behandelt', role: 'plain', en: 'treats (Satzende)', hi: 'मानती है (Satzende)', type: 'Verb · behandeln (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'empfindet', role: 'plain', en: 'feels', hi: 'महसूस करती है', type: 'Verb · empfinden' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'echten', role: 'plain', en: 'genuine', hi: 'असली', type: 'Adjective' },
      { w: 'Nervenkitzel', role: 'plain', en: 'thrill (Satzende)', hi: 'रोमांच (Satzende)', type: 'Noun · masc.', why: 'der Nervenkitzel (this chapter).' },
      { w: 'bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'jedem', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner · Dat.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective · Dat.' },
      { w: 'Auftrag', role: 'plain', en: 'commission (Satzende)', hi: 'कार्य (Satzende)', type: 'Noun · masc.' },
      { w: '.', plain: true },
      { w: 'Dadurch', role: 'r-connector', en: 'through the fact', hi: 'इसके ज़रिए', type: 'Pronominaladverb', why: 'dadurch, dass = through the fact that (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'jede', role: 'plain', en: 'every', hi: 'हर', type: 'Determiner' },
      { w: 'Anfrage', role: 'plain', en: 'inquiry', hi: 'पूछताछ', type: 'Noun · fem.' },
      { w: 'persönlich', role: 'plain', en: 'personally', hi: 'व्यक्तिगत रूप से', type: 'Adverb' },
      { w: 'beantwortet', role: 'plain', en: 'answers (Satzende)', hi: 'जवाब देती है (Satzende)', type: 'Verb · beantworten (Nebensatz, Satzende)' },
      { w: ',', plain: true },
      { w: 'hat', role: 'plain', en: 'has', hi: 'है', type: 'Verb · haben' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'वह', type: 'Pronoun' },
      { w: 'inzwischen', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb' },
      { w: 'sogar', role: 'plain', en: 'even', hi: 'यहाँ तक कि', type: 'Adverb' },
      { w: 'Stammkunden', role: 'plain', en: 'regular customers', hi: 'नियमित ग्राहक', type: 'Noun · plural' },
      { w: 'aus', role: 'plain', en: 'from', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the (neut. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Ausland', role: 'plain', en: 'abroad (Satzende)', hi: 'विदेश (Satzende)', type: 'Noun · neut.' },
      { w: 'gewonnen', role: 'plain', en: 'won (Satzende)', hi: 'जीत लिए हैं (Satzende)', type: 'Verb · Partizip II' },
      { w: '.', plain: true }
    ],
    translation: 'Ms Bauer mastered a rare craft through the fact that she worked ten years as a seamstress. She restores old garments by sewing every seam by hand. Through working so thoroughly, she has built herself a reputation far beyond the city limits. Admittedly her profession is rarely lucrative, but through treating every piece like a work of art, she feels a genuine thrill with every new commission. Through answering every inquiry personally, she has meanwhile even won regular customers from abroad.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_018_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Wibke, wie schaffst du es eigentlich, so viele Düfte auseinanderzuhalten?', en: 'Wibke, how do you actually manage to tell so many scents apart?' },
      { id: 'B2_018_L002', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Dadurch, dass ich meine Nase jeden Tag trainiere — manchmal zwanzig Proben am Stück.', en: 'By training my nose every day — sometimes twenty samples in a row.' },
      { id: 'B2_018_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zwanzig? Das stelle ich mir anstrengend vor.', en: 'Twenty? I imagine that\'s exhausting.' },
      { id: 'B2_018_L004', speaker: 'Wibke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ist es auch, aber dadurch, dass ich nie aufgehört habe, kann ich heute Nuancen erkennen, die andere übersehen.', en: 'It is, but by never having stopped, I can now recognize nuances others overlook.' }
    ],
    transcript: 'Wibke, wie schaffst du es eigentlich, so viele Düfte auseinanderzuhalten? Dadurch, dass ich meine Nase jeden Tag trainiere — manchmal zwanzig Proben am Stück. Zwanzig? Das stelle ich mir anstrengend vor. Ist es auch, aber dadurch, dass ich nie aufgehört habe, kann ich heute Nuancen erkennen, die andere übersehen.',
    translation: 'Wibke, how do you actually manage to tell so many scents apart? By training my nose every day — sometimes twenty samples in a row. Twenty? I imagine that\'s exhausting. It is, but by never having stopped, I can now recognize nuances others overlook.',
    tokens: [
      { w: 'Wibke' },
      { w: ',', plain: true },
      { w: 'wie' },
      { w: 'schaffst' },
      { w: 'du' },
      { w: 'es' },
      { w: 'eigentlich' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'viele' },
      { w: 'Düfte' },
      { w: 'auseinanderzuhalten' },
      { w: '?', plain: true },
      { w: 'Dadurch' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'ich' },
      { w: 'meine' },
      { w: 'Nase' },
      { w: 'jeden' },
      { w: 'Tag' },
      { w: 'trainiere' },
      { w: '—', plain: true },
      { w: 'manchmal' },
      { w: 'zwanzig' },
      { w: 'Proben' },
      { w: 'am' },
      { w: 'Stück' },
      { w: '.', plain: true },
      { w: 'Zwanzig' },
      { w: '?', plain: true },
      { w: 'Das' },
      { w: 'stelle' },
      { w: 'ich' },
      { w: 'mir' },
      { w: 'anstrengend' },
      { w: 'vor' },
      { w: '.', plain: true },
      { w: 'Ist' },
      { w: 'es' },
      { w: 'auch' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'dadurch' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'ich' },
      { w: 'nie' },
      { w: 'aufgehört' },
      { w: 'habe' },
      { w: ',', plain: true },
      { w: 'kann' },
      { w: 'ich' },
      { w: 'heute' },
      { w: 'Nuancen' },
      { w: 'erkennen' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'andere' },
      { w: 'übersehen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie trainiert Wibke ihren Geruchssinn?', qEn: 'How does Wibke train her sense of smell?', options: ['durch Bücher', 'durch tägliches Training mit Proben', 'durch Urlaub', 'durch Musik'], optionsEn: ['through books', 'through daily practice with samples', 'through holidays', 'through music'], answer: 1,
        explain: '"Dadurch, dass ich meine Nase jeden Tag trainiere."' },
      { q: 'Was kann Wibke jetzt erkennen?', qEn: 'What can Wibke recognize now?', options: ['nichts Besonderes', 'Nuancen, die andere übersehen', 'nur starke Düfte', 'nur ihre Lieblingsdüfte'], optionsEn: ['nothing special', 'nuances that others miss', 'only strong scents', 'only her favourite scents'], answer: 1,
        explain: '"… kann ich heute Nuancen erkennen, die andere übersehen."' }
    ]
  },

  speaking: [
    { task: "Eine Bekannte fragt, wie du so viele Düfte unterscheidest.", taskEn: "An acquaintance asks how you tell so many scents apart.", de: "Dadurch, dass ich meine Nase jeden Tag trainiere.", en: "By training my nose every day." },
    { task: "Sie fragt, wie du das Handwerk gelernt hast.", taskEn: "She asks how you learned the craft.", de: "Dadurch, dass ich zwei Jahre in der Werkstatt gearbeitet habe.", en: "By working in the workshop for two years." },
    { task: "Ein Kunde fragt, wie die Hautcreme hergestellt wird.", taskEn: "A customer asks how the skin cream is produced.", de: "Dadurch, dass die Öle langsam erwärmt werden, bleibt der Duft erhalten.", en: "By warming the oils slowly, the scent is preserved." },
    { task: "Deine Chefin fragt, wie du hauptberuflich davon leben kannst.", taskEn: "Your boss asks how you can make a living from it full-time.", de: "Dadurch, dass ich hierzulande direkt verkaufe, brauche ich keinen Zwischenhandel.", en: "By selling directly here, I don't need any middlemen." },
    { task: "Ein Kollege fragt, wie die Finanzkrise das Geschäft verändert hat.", taskEn: "A colleague asks how the financial crisis changed the business.", de: "Dadurch, dass weniger importiert wurde, sind die Preise gestiegen.", en: "Because less was imported, prices rose." },
    { task: "Rollenspiel: Ihr erklärt einem Gast die Produktion.", taskEn: "Role-play: you explain the production to a guest.", de: "Dadurch, dass alles von Hand gemacht wird, dauert es länger. — Und dadurch, dass wir wenig herstellen, bleibt die Qualität hoch.", en: "Because everything is made by hand, it takes longer. — And because we produce little, quality stays high." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short business report or email (six to eight sentences) about a company or project improvement — using "dadurch, dass" at least three times, with correct comma placement before both "dadurch" and "dass", and at least one example of the dadurch,dass-clause coming first.',
    starters: ['Wir sparen …, dadurch, dass …', 'Dadurch, dass …, erreichen wir …'],
    placeholder: 'Wir sind konkurrenzfähig, dadurch, dass wir hochwertiges Garn importieren …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Which sentence uses "dadurch, dass" correctly?',
      options: ['Wir sparen Zeit, dadurch, dass wir online arbeiten.', 'Wir sparen Zeit dadurch dass wir online arbeiten.', 'Dadurch wir sparen Zeit, dass wir online arbeiten.'],
      answer: 0,
      explain: 'A comma is required both before "dadurch" and before "dass".'
    },
    gap: {
      sentence: ['Die Studenten lernen schneller, dadurch, ', ' sie regelmäßig üben.'],
      gaps: [ { answer: 'dass', accepts: ['dass'] } ],
      explain: '"dadurch, dass" always appears as a fixed pair — "dass" introduces the subordinate clause.'
    },
    match: {
      q: 'Match each connector to its function.',
      pairs: [
        { noun: 'weil', art: 'Reason (Warum?)' },
        { noun: 'indem', art: 'Method (Wie?)' },
        { noun: 'dadurch, dass', art: 'Mechanism (Wodurch?)' }
      ]
    },
    builder: {
      target: 'Build: "We save money, through the fact that we form carpools."',
      bank: ['Wir', 'sparen', 'Geld', ',', 'dadurch', ',', 'dass', 'wir', 'Fahrgemeinschaften', 'bilden', '.'],
      answer: ['Wir', 'sparen', 'Geld', ',', 'dadurch', ',', 'dass', 'wir', 'Fahrgemeinschaften', 'bilden', '.'],
      roles: { 'dadurch': 'r-dadurch', 'dass': 'r-dadurch' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich lerne Deutsch, dadurch dass ich nach Deutschland möchte.',
      right: 'Ich lerne Deutsch, weil ich nach Deutschland möchte.',
      explain: 'A wish/goal is a REASON, not a means — use "weil", not "dadurch, dass".'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What does "dadurch, dass" express?', options: ['Means/mechanism (Wodurch?)', 'Reason (Warum?)', 'Time (Wann?)'], answer: 0,
      explain: '"dadurch, dass" names the means or mechanism producing a result.' },
    { q: 'How many commas does "dadurch, dass" need?', options: ['Two — before "dadurch" and before "dass"', 'One — only before "dass"', 'None'], answer: 0,
      explain: 'A comma is required both before "dadurch" and before "dass".' },
    { q: 'Which is more formal?', options: ['dadurch, dass', 'indem', 'Both equally informal'], answer: 0,
      explain: '"dadurch, dass" is more common in formal writing than "indem".' },
    { q: 'Which sentence contains an error?', options: ['Wir sparen Zeit, dadurch, dass wir online arbeiten.', 'Ich lerne Deutsch, dadurch dass ich nach Deutschland möchte.', 'Dadurch, dass wir üben, lernen wir schneller.'], answer: 1,
      explain: 'A wish/goal is a reason, not a means — it should use "weil" instead of "dadurch, dass".' },
    { q: 'Where does the verb go in the "dass"-part of "dadurch, dass"?', options: ['At the end', 'In Position 2', 'At the start'], answer: 0,
      explain: 'The "dass"-clause has verb-final word order, like all Nebensätze.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-dadurch', html: '"dadurch, dass" names the means or mechanism producing a result — the same "Wie?" question as "indem", but more formal.' },
    { c: 'r-dadurch', html: 'Two commas are required: one before "dadurch" and one before "dass".' },
    { c: 'r-dadurch', html: 'Never confuse means (dadurch, dass) with reason (weil) — a wish or goal is a reason, not a mechanism.' }
  ],
  revisionTips: [
    'Practise rewriting "indem" sentences as "dadurch, dass" sentences to feel the register shift.',
    'Always check for both commas — before "dadurch" and before "dass" — this is the most common written mistake.',
    'When writing formally (reports, business emails), reach for "dadurch, dass" instead of "indem" to sound more professional.'
  ]
};

window.CHAPTER = CHAPTER;
