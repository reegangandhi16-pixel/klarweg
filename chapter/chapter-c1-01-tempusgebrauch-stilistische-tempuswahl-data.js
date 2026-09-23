/* ============================================================
   KLARWEG CHAPTER DATA — C1 · Chapter 1
   "Tempusgebrauch & Stilistische Tempuswahl" — advanced,
   stylistic tense choice (Präsens/Historic Present, Präteritum
   vs Perfekt, Plusquamperfekt, Futur I/II) across journalism,
   academic writing and literature. NOT basic tense formation.
   Dialogue: Meret and Timo ONLY.
============================================================ */
const CHAPTER = {
  id: 'c1-01-tempusgebrauch-stilistische-tempuswahl',
  phase: 'C1 · Präzise Satzarchitektur',
  number: 1,
  title: 'Tempusgebrauch & Stilistische Tempuswahl',
  titleEn: 'Advanced tense usage & stylistic choice',
  description: 'B2 asks: which tense is correct? C1 asks: which tense sounds best. Master why native writers deliberately switch tenses for effect.',
  xp: 250,
  time: 95,
  difficulty: 'Advanced',
  nextChapter: { number: 2, title: 'Raum & Zeit präzise ausdrücken', titleEn: 'Expressing space & time precisely' , href: 'chapter-c1-02-raum-und-zeit-praezise-ausdruecken.html' },

  prevChapter: { number: 69, title: 'Goethe-Zertifikat B2 Final', titleEn: 'Goethe-Zertifikat B2 — Final Examination', href: 'chapter-b2-69-goethe-zertifikat-b2-final.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'Correct German. <em>Natural</em> German. <em>Elegant</em> German.',
    intro: 'Preparing a university research presentation, Meret uses the historical present for her opening scene to create tension, and Timo wonders if the tense-shifting mid-article will confuse readers — discovering why native writers deliberately switch tenses for effect.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'See Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I and Futur II chosen for effect, not just correctness'
    ],
    scene: 'Vorbereitung einer Forschungspräsentation',
    femaleSpeakers: ['Meret'],
    dialogue: [
      { speaker: 'Meret', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'habe', role: 'r-verb', en: 'have', hi: 'इस्तेमाल किया है', pron: 'HAH-buh', type: 'Verb · haben' },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'historische', role: 'r-akkusativ', en: 'historical', hi: 'ऐतिहासिक', pron: 'his-TO-ri-shuh', type: 'Adjective' },
        { w: 'Präsens', role: 'r-akkusativ', en: 'present tense', hi: 'वर्तमान काल', pron: 'PRAY-zens', type: 'Noun · neut.', why: 'das historische Präsens = using present tense for past events, for dramatic effect (this chapter).', ex: 'Das historische Präsens macht die Szene lebendig.', exEn: 'The historical present makes the scene vivid.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Eröffnungsszene', role: 'r-akkusativ', en: 'opening scene', hi: 'शुरुआती दृश्य', pron: 'er-ÖF-nungs-tsay-nuh', type: 'Noun · fem.', why: 'die Eröffnungsszene (this chapter).', ex: 'die Eröffnungsszene' },
        { w: 'genutzt', role: 'r-verb', en: 'used', hi: 'इस्तेमाल किया', pron: 'ge-NUTST', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'I have used the historical present for the opening scene.', hi: 'Maine shuruaati drishya ke liye aitihasik vartamaan kaal ka istemaal kiya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'kluge', role: 'r-akkusativ', en: 'clever', hi: 'समझदार', pron: 'KLOO-guh', type: 'Adjective' },
        { w: 'Tempuswahl', role: 'r-akkusativ', en: 'tense choice', hi: 'काल चयन', pron: 'TEM-pus-vahl', type: 'Noun · fem.', why: 'die Tempuswahl (this chapter).', ex: 'eine kluge Tempuswahl' },
        { w: ',', plain: true },
        { w: 'da', role: 'r-conjunction', en: 'since', hi: 'चूंकि', pron: 'dah', type: 'Conjunction · da' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'Spannung', role: 'r-akkusativ', en: 'tension', hi: 'तनाव', pron: 'SHPA-nung', type: 'Noun · fem.' },
        { w: 'erzeugt', role: 'r-verb', en: 'creates', hi: 'पैदा करता है', pron: 'er-TSOYKT', type: 'Verb · erzeugen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is a clever tense choice, since it creates tension.', hi: 'Yeh ek samajhdaar kaal chayan hai, kyunki yeh tanaav paida karta hai.' },
      { speaker: 'Meret', tokens: [
        { w: 'Danach', role: 'r-adverb', en: 'after that', hi: 'उसके बाद', pron: 'da-NAHKH', type: 'Adverb' },
        { w: 'wechsle', role: 'r-verb', en: 'I switch', hi: 'बदलती हूँ', pron: 'VEK-sluh', type: 'Verb · wechseln (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zur', role: 'r-preposition', en: 'to the', hi: 'की ओर', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Zeitschichtung', role: 'r-dativ', en: 'layering of time (dat.)', hi: 'समय की परत', pron: 'TSYTE-shikh-tung', type: 'Noun · fem. dat.', why: 'die Zeitschichtung = the layering of tenses in narration, contrasting past and present layers (this chapter).', ex: 'die Zeitschichtung im Text' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'mittleren', role: 'r-dativ', en: 'middle', hi: 'बीच के', pron: 'MIT-le-ren', type: 'Adjective · dative' },
        { w: 'Absatz', role: 'r-dativ', en: 'paragraph (dat.)', hi: 'अनुच्छेद में', pron: 'AP-zats', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'After that I switch to the layering of time in the middle paragraph.', hi: 'Uske baad main beech ke anuchhed mein samay ki parat ki or badalti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'verwirrend', role: 'r-akkusativ', en: 'confusing', hi: 'उलझन भरा', pron: 'fer-VIR-rent', type: 'Adjective', why: 'verwirrend = confusing (this chapter).', ex: 'Das ist verwirrend.', exEn: 'That is confusing.' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural acc.' },
        { w: 'Leser', role: 'r-akkusativ', en: 'readers', hi: 'पाठक', pron: 'LAY-zer', type: 'Noun · plural' },
        { w: '?', plain: true }
      ], en: 'Is that not confusing for the readers?', hi: 'Kya yeh paathakon ke liye ulajhan bhara nahi hai?' },
      { speaker: 'Meret', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Vermutung', role: 'r-subject', en: 'assumption', hi: 'अनुमान', pron: 'fer-MOO-tung', type: 'Noun · fem.', why: 'die Vermutung (this chapter).', ex: 'meine Vermutung' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Leser', role: 'r-subject', en: 'readers', hi: 'पाठक', pron: 'LAY-zer', type: 'Noun · plural' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Wechsel', role: 'r-akkusativ', en: 'change', hi: 'बदलाव', pron: 'VEK-sel', type: 'Noun · masc.' },
        { w: 'klar', role: 'r-akkusativ', en: 'clearly', hi: 'साफ़', pron: 'klahr', type: 'Adjective' },
        { w: 'erkennen', role: 'r-verb', en: 'recognize', hi: 'पहचान लेंगे', pron: 'er-KE-nen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'My assumption is that the readers will clearly recognize the change.', hi: 'Mera anumaan hai ki paathak badlaav ko saaf pehchaan lenge.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'Schlussfolgerung', role: 'r-subject', en: 'conclusion', hi: 'निष्कर्ष', pron: 'SHLUS-fol-ge-rung', type: 'Noun · fem.', why: 'die Schlussfolgerung (this chapter).', ex: 'meine Schlussfolgerung' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Artikel', role: 'r-subject', en: 'article', hi: 'लेख', pron: 'ar-TI-kel', type: 'Noun · masc.' },
        { w: 'insgesamt', role: 'r-adverb', en: 'overall', hi: 'कुल मिलाकर', pron: 'ins-guh-ZAMT', type: 'Adverb' },
        { w: 'gelungen', role: 'r-akkusativ', en: 'successful', hi: 'सफल', pron: 'ge-LUN-gen', type: 'Adjective', why: 'gelungen = successful (this chapter).', ex: 'Der Artikel ist gelungen.', exEn: 'The article is successful.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'My conclusion is that the article is overall successful.', hi: 'Mera nishkarsh hai ki lekh kul milakar safal hai.' },
      { speaker: 'Meret', tokens: [
        { w: 'Danke', role: 'r-subject', en: 'thanks', hi: 'धन्यवाद', pron: 'DAN-kuh', type: 'Interjection' },
        { w: '!', plain: true },
        { w: 'Deine', role: 'r-subject', en: 'your (fem.)', hi: 'तुम्हारी', pron: 'DY-nuh', type: 'Possessive' },
        { w: 'Rückmeldung', role: 'r-subject', en: 'feedback', hi: 'प्रतिक्रिया', pron: 'RÜK-mel-dung', type: 'Noun · fem.', why: 'die Rückmeldung (this chapter).', ex: 'deine Rückmeldung' },
        { w: 'hilft', role: 'r-verb', en: 'helps', hi: 'मदद करती है', pron: 'hilft', type: 'Verb · helfen' },
        { w: 'mir', role: 'r-dativ', en: 'me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Thanks! Your feedback helps me very much.', hi: 'Dhanyavaad! Tumhaari pratikriya mujhe bahut madad karti hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'B2 asks: <b>"Which tense is correct?"</b> C1 asks: <b>"Which tense sounds best?"</b> Native-like writing depends on <span class="de r-praesens">stilistische Tempuswahl</span> — deliberate, purposeful tense choice.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is TEMPUSGEBRAUCH & STILISTISCHE TEMPUSWAHL at C1 level — advanced, STYLISTIC tense choice, not basic tense formation. Students already master all forms from B2; this chapter is about WHY native writers deliberately pick one tense over another correct alternative. Covered: Präsens beyond the present (historic present, scientific writing, instructions, universal truths, newspaper headlines); Präteritum vs Perfekt (literary/written narration vs spoken/conversational narration); Plusquamperfekt (background information, earlier events, narrative layering); Futur I (assumptions, predictions, academic forecasts, formal announcements — not just literal future); Futur II (completed future events, assumptions about the past, academic interpretation, journalistic speculation, e.g. "werden...ausgewertet haben"); narrative tense switching (present → past → background → commentary → return to narrative); tense choice in academic writing, journalism, and literature. ' +
    'Do NOT expect or require basic tense formation, conjugation tables, or elementary grammar explanations — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: using Perfekt throughout an academic paper (should be Präsens/Präteritum), switching tenses randomly without narrative purpose, using Historic Present in inappropriate contexts, mixing narration levels confusingly, incorrect timeline/background management. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- Flag tense choices that are grammatically correct but stylistically inappropriate for the register (e.g. Perfekt throughout a formal academic report where Präsens/Präteritum is expected).\n' +
    '- Flag random or unmotivated tense switching that confuses the narrative timeline.\n' +
    '- Check Futur II formation (werden + Partizip II + haben/sein) when used for past speculation.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Stylistic tense check:</b> one sentence on whether the learner\'s tense choices matched the register (academic, literary, journalistic, or conversational) they intended.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you choose tenses for effect, not just correctness. Ready for space & time expressions next.',
    mid: 'Good. Re-read the Register Comparison table once, then continue.',
    low: 'Worth another pass through the Grammar section — remember: B2 asks what\'s correct, C1 asks what sounds best.'
  },

  parserSentence: [
    { w: 'Das', role: 'r-plusquam' }, { w: 'Ereignis', role: 'plain' }, { w: 'war', role: 'r-plusquam' }, { w: 'bereits', role: 'plain' }, { w: 'geschehen', role: 'r-plusquam' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: C1 tense mastery is about stylistic choice, not just correctness.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Meret and Timo move between newspaper, novel and academic tense conventions while preparing a presentation.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s key words — full popups with two examples, register, and Hindi.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master stylistic tense selection across Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I and Futur II.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a newspaper feature article and a literary excerpt, identifying tense shifts and their narrative effect.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Identify tense usage and stylistic purpose in a university lecture and a radio documentary.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Retell events, give academic presentations, and interpret deliberate tense choices.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Rewrite a B2-level text with C1 stylistic tense variation, and write an analytical article.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill stylistic tense selection, timeline reconstruction, and narrative rewriting.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 250 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 15 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Stylistic tense-selection drills, timeline reconstruction, and a full analytical article writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '12 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The full Master Tense Table, Register Comparison, and Narrative Timeline diagrams.',
      pdfUrl: '/pdfs/grammar.pdf', size: '11 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'Das Interview beginnt im Präsens, obwohl es gestern stattfand.', text: 'Recognize and use historic present for vivid narration' },
    { de: 'Der Roman wird konsequent im Präteritum erzählt.', text: 'Choose Präteritum for literary narration, Perfekt for spoken narration' },
    { de: 'Das Ereignis war bereits vor der Studie geschehen.', text: 'Use Plusquamperfekt to layer background information' },
    { de: 'Die Forscher werden die Daten schon ausgewertet haben.', text: 'Use Futur II to speculate about a completed past action' },
    { de: 'Wir sollten Vermutungen im Futur I formulieren.', text: 'Choose Futur I for academic forecasts and predictions' }
  ],

  vocab: [
    { de: 'das historische Präsens', ipa: '[hɪsˈtoːʁɪʃə ˈpʁɛːzɛns]', en: 'historic present', hi: 'aitihaasik vartamaan kaal', pos: 'Noun · neut.', register: 'C1 · literary/journalistic',
      note: 'Using present tense to narrate a past event for vividness and immediacy.',
      ex1: { de: 'Der Roman beginnt im historischen Präsens, um Spannung zu erzeugen.', en: 'The novel begins in the historic present to create suspense.', hi: 'Upanyaas tanaav paida karne ke liye aitihaasik vartamaan mein shuru hota hai.' },
      ex2: { de: 'Journalisten nutzen oft das historische Präsens in Schlagzeilen.', en: 'Journalists often use the historic present in headlines.', hi: 'Patrakaar aksar sirshak mein aitihaasik vartamaan istemaal karte hain.' },
      collocations: ['im historischen Präsens erzählen', 'das historische Präsens nutzen'] },
    { de: 'die Tempuswahl', ipa: '[ˈtɛmpuːsˌvaːl]', en: 'tense choice', hi: 'kaal chunaav', pos: 'Noun · fem.', register: 'C1 · academic',
      note: 'The deliberate selection of a tense for stylistic or rhetorical effect.',
      ex1: { de: 'Die Tempuswahl beeinflusst den Ton des gesamten Textes.', en: 'The tense choice influences the tone of the entire text.', hi: 'Kaal chunaav poore text ke tone ko prabhavit karta hai.' },
      ex2: { de: 'Eine bewusste Tempuswahl macht den Stil eleganter.', en: 'A deliberate tense choice makes the style more elegant.', hi: 'Ek soch samajhkar kiya gaya kaal chunaav style ko zyaada sundar banaata hai.' },
      collocations: ['bewusste Tempuswahl', 'stilistische Tempuswahl'] },
    { de: 'die Zeitschichtung', ipa: '[ˈtsaɪtˌʃɪçtʊŋ]', en: 'temporal layering', hi: 'samay parat', pos: 'Noun · fem.', register: 'C1 · literary/academic',
      note: 'The narrative technique of layering multiple time levels (background, main narrative, commentary).',
      ex1: { de: 'Die Zeitschichtung im Roman verwirrt manche Leser zunächst.', en: 'The temporal layering in the novel confuses some readers at first.', hi: 'Upanyaas mein samay parat shuru mein kuch pathakon ko uljhaa deti hai.' },
      ex2: { de: 'Das Plusquamperfekt ermöglicht eine klare Zeitschichtung.', en: 'The Plusquamperfekt enables clear temporal layering.', hi: 'Plusquamperfekt ek spasht samay parat sambhav banaata hai.' },
      collocations: ['narrative Zeitschichtung', 'Zeitschichtung ermöglichen'] },
    { de: 'die Vermutung', ipa: '[fɛɐ̯ˈmuːtʊŋ]', en: 'assumption / conjecture', hi: 'anumaan', pos: 'Noun · fem.', register: 'C1 · academic/journalistic',
      note: 'Often expressed via Futur I (present assumption) or Futur II (assumption about the past).',
      ex1: { de: 'Die Vermutung wird im Futur II ausgedrückt.', en: 'The assumption is expressed in the Futur II.', hi: 'Anumaan Futur II mein vyakt kiya jaata hai.' },
      ex2: { de: 'Journalisten äußern ihre Vermutungen oft vorsichtig.', en: 'Journalists often express their assumptions cautiously.', hi: 'Patrakaar aksar apne anumaan saavdhaani se vyakt karte hain.' },
      collocations: ['eine Vermutung äußern', 'im Futur II ausdrücken'] },
    { de: 'die Schlussfolgerung', ipa: '[ˈʃlʊsˌfɔlɡəʁʊŋ]', en: 'conclusion', hi: 'nishkarsh', pos: 'Noun · fem.', register: 'C1 · academic',
      note: 'The concluding section of an academic text, often using Futur I for predictions.',
      ex1: { de: 'In der Schlussfolgerung formulieren die Autoren Vermutungen im Futur I.', en: 'In the conclusion, the authors formulate assumptions in the Futur I.', hi: 'Nishkarsh mein, lekhak Futur I mein anumaan formulate karte hain.' },
      ex2: { de: 'Eine überzeugende Schlussfolgerung fasst die Ergebnisse präzise zusammen.', en: 'A convincing conclusion summarizes the results precisely.', hi: 'Ek vishvaasneey nishkarsh parinaamon ko sateek roop se saaraansh karta hai.' },
      collocations: ['eine Schlussfolgerung ziehen', 'in der Schlussfolgerung'] }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Warum die Tempuswahl zählt',
      body: [ 'Correct German → Natural German → Elegant German → Professional German. Several tenses may be grammatically correct, but only one may sound stylistically appropriate.' ],
      hinglish: 'C1 par sawaal badal jaata hai. B2 tak tum poochhte the \u201ckaunsa tense sahi hai?\u201d, aur ab poochhna hai \u201ckaunsa tense yahan sabse achha lagta hai?\u201d Kai tenses grammar ke hisaab se sahi ho sakte hain, par har context mein ek hi natural lagta hai.'
    },
    {
      title: 'Präsens jenseits der Gegenwart',
      body: [ 'Präsens is used for present facts, historic present (vivid past narration), scientific writing, instructions, universal truths, and newspaper headlines — not only literal present time.' ],
      hinglish: 'Pr\u00e4sens sirf \u201cabhi\u201d ke liye nahi hota. Yeh scientific writing mein aata hai, instructions mein, universal sach batane mein, newspaper headlines mein, aur historic present mein \u2014 jahan purani ghatna ko jaan-boojhkar present mein sunaya jaata hai taaki woh jeevit lage.'
    },
    {
      title: 'Präteritum vs Perfekt (stilistisch)',
      body: [ 'Präteritum dominates novels, journalism and academic texts; Perfekt dominates spoken German, interviews and conversational storytelling.' ],
      table: {
        head: ['Context', 'Preferred Tense'],
        rows: [
          ['Novel', 'Präteritum'],
          ['Conversation', 'Perfekt'],
          ['Scientific article', 'Präsens'],
          ['Newspaper', 'Mixed'],
          ['Literary commentary', 'Präsens']
        ]
      },
      hinglish: 'Yeh farak style ka hai, time ka nahi. <b>Pr\u00e4teritum</b> likhi hui German mein chalta hai \u2014 novels, news aur academic texts. Aur <b>Perfekt</b> bolne mein \u2014 baatcheet, interviews aur kahaani sunaate waqt. Dono ka matlab past hi hai.'
    },
    {
      title: 'Plusquamperfekt: narrative Schichtung',
      body: [ 'Plusquamperfekt marks background information and earlier events, allowing authors to move backward in time naturally within a narrative.' ],
      hinglish: 'Plusquamperfekt ek layer peeche jaane ke liye hota hai. Jab kahani Pr\u00e4teritum mein chal rahi ho aur tumhe batana ho ki usse <b>pehle</b> kya hua tha, tab yeh lagta hai. Isliye ise background wala tense samjho.'
    },
    {
      title: 'Futur I: stilistischer Gebrauch',
      body: [ 'Futur I is not merely "future" — it expresses assumptions, predictions, academic forecasts, planning, and formal announcements.' ],
      hinglish: 'Futur I sirf future ke liye nahi hai. Yeh andaaza lagane, prediction karne, planning batane aur formal announcements mein bhi aata hai \u2014 aur B2 se yaad hoga ki <i>jetzt</i> ke saath iska matlab present ka andaaza ho jaata hai.'
    },
    {
      title: 'Futur II: Vermutung über Vergangenes',
      body: [ 'Futur II expresses completed future events, assumptions about the past, academic interpretation, and journalistic speculation — e.g. "Die Forscher werden die Daten schon ausgewertet haben."' ],
      hinglish: 'Futur II do kaam karta hai. Ek, woh kaam batata hai jo kisi future point tak poora ho chuka hoga. Aur do, past ke baare mein andaaza \u2014 <span class="de">Die Forscher werden die Daten schon ausgewertet haben</span> matlab \u201cshaayad unhone data analyse kar hi liya hoga\u201d. Academic aur journalistic writing mein yeh doosra use zyada aata hai.'
    },
    {
      title: 'Futur II: die Form',
      body: [
        'Futur II is the only tense here you have not built before, so here is the shape: <b>werden</b> (conjugated, position 2) + <b>Partizip II</b> + <b>haben</b> or <b>sein</b>, both at the very end.',
        'Which auxiliary you use is the same decision as in the Perfekt \u2014 movement and change-of-state verbs take <i>sein</i>, everything else <i>haben</i>.'
      ],
      table: {
        head: ['Perfekt', 'Futur II', 'Reading'],
        rows: [
          ['er hat ausgewertet', 'er <b>wird</b> ausgewertet <b>haben</b>', 'he will probably have evaluated'],
          ['sie ist angekommen', 'sie <b>wird</b> angekommen <b>sein</b>', 'she will probably have arrived'],
          ['wir haben besprochen', 'wir <b>werden</b> besprochen <b>haben</b>', 'we will have discussed (by then)']
        ]
      },
      note: 'Two readings, decided by context: with a future time marker it means \u201ccompleted by then\u201d; with <i>wohl</i>, <i>schon</i> or <i>sicher</i> it means \u201cprobably has already happened\u201d \u2014 an assumption about the past.',
      hinglish: 'Futur II hi ek aisa tense hai jo tumne pehle nahi banaya, isliye iski shape dekh lo: <b>werden</b> (conjugated, position 2) + <b>Partizip II</b> + <b>haben</b> ya <b>sein</b>, dono sabse end mein. Auxiliary ka faisla wahi hai jo Perfekt mein hota hai \u2014 movement aur state change wale verbs <b>sein</b> lete hain, baaki <b>haben</b>. Aur iske do matlab hote hain, jo context se tay hote hain: agar future ka time word ho to matlab hai \u201ctab tak ho chuka hoga\u201d, aur agar <i>wohl</i>, <i>schon</i> ya <i>sicher</i> ho to matlab hai \u201cshaayad ho hi chuka hai\u201d \u2014 yani past ke baare mein andaaza.'
    },
    {
      title: 'Narrative Tempuswechsel',
      body: [ 'Professional writers switch tenses intentionally: Present → Past → Background → Commentary → Return to narrative.' ],
      hinglish: 'Achhe writers tense jaan-boojhkar badalte hain, bina wajah nahi. Pattern aksar yeh hota hai \u2014 kahani Pr\u00e4teritum mein, background Plusquamperfekt mein, aur beech mein koi tippani Pr\u00e4sens mein, phir wapas kahani par. Reader ko har badlav se pata chalna chahiye ki ab kaunsi layer chal rahi hai.'
    },
    {
      title: 'Meister-Tempustabelle',
      body: [ 'Every C1 tense has both a primary function and a stylistic function.' ],
      table: {
        head: ['Tense', 'Primary Function', 'Stylistic Function'],
        rows: [
          ['Präsens', 'Present', 'Historic present, scientific writing'],
          ['Perfekt', 'Spoken past', 'Conversational narration'],
          ['Präteritum', 'Written past', 'Literary narration'],
          ['Plusquamperfekt', 'Earlier past', 'Background information'],
          ['Futur I', 'Future', 'Prediction, assumption'],
          ['Futur II', 'Completed future', 'Speculation, deduction']
        ]
      },
      hinglish: 'Har tense ke do kaam hote hain \u2014 ek uska basic matlab, aur ek uska style wala use. C1 par asli farak doosre column se padta hai, isliye is table ko usi nazar se dekho.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'Each of these is grammatically possible but stylistically wrong for its context \u2014 exactly the kind of error that separates B2 from C1.' ],
      mistakes: [
        { wrong: 'Die Studie hat gezeigt, dass der Effekt stark gewesen ist.', right: 'Die Studie zeigt, dass der Effekt stark ist.', why: 'Academic German reports findings in the Pr\u00e4sens \u2014 the results are treated as currently valid, not as a past event.' },
        { wrong: 'Er betrat den Raum. Alle schauen ihn an. Dann setzte er sich.', right: 'Er betrat den Raum. Alle schauten ihn an. Dann setzte er sich.', why: 'Within one narrative level the tense stays constant. Switching to Pr\u00e4sens for a single sentence signals a change of level that is not intended here.' },
        { wrong: 'Im Jahr 2019 gründet das Unternehmen eine Tochtergesellschaft in Polen.', right: 'Im Jahr 2019 gründete das Unternehmen eine Tochtergesellschaft in Polen.', why: 'The historic present belongs to vivid storytelling. A neutral company report keeps the Pr\u00e4teritum.' },
        { wrong: 'Als er ankam, verließ der Zug bereits den Bahnhof.', right: 'Als er ankam, hatte der Zug den Bahnhof bereits verlassen.', why: 'The earlier event needs the Plusquamperfekt. With both verbs in the Pr\u00e4teritum the reader cannot tell which happened first.' },
        { wrong: 'Die Forscher werden die Daten morgen schon ausgewertet haben, bevor sie beginnen.', right: 'Die Forscher werden die Daten ausgewertet haben, bevor sie mit der Analyse beginnen.', why: 'Futur II marks an action completed BEFORE a later point. Adding <i>morgen schon</i> next to <i>bevor sie beginnen</i> puts two conflicting reference points in one sentence.' }
      ],
      hinglish: 'In paanchon mein grammar galat nahi hai \u2014 style galat hai. Yahi woh farak hai jo B2 aur C1 ke beech hota hai, aur exam mein yahi dekha jaata hai.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Need to describe an event? Conversation → Perfekt. Literature → Präteritum. Research → Präsens. Prediction → Futur I. Deduction → Futur II.' ],
      note: 'Memory trick: B2 asks "Which tense is correct?" C1 asks "Which tense sounds best?" Mastering stylistic tense choice is the first major step from B2 to C1.',
      hinglish: 'Koi ghatna batani hai? Baatcheet mein <b>Perfekt</b>, novel ya kahani mein <b>Pr\u00e4teritum</b>, research aur academic writing mein <b>Pr\u00e4sens</b>, prediction ke liye <b>Futur I</b>, aur past ke andaaze ke liye <b>Futur II</b>. Pehle context dekho, phir tense chuno.'
    }
  ],

  // ---------- Reading: TWO passages ----------
  reading: {
    title: 'Wissenschaftsnachricht: Neuer Energiespeicher aus Dresden',
    titleEn: 'Reading A — Science news report',
    tokens: [
      { w: 'Ein', role: 'plain', en: 'a', hi: 'एक', type: 'Article' },
      { w: 'Team', role: 'plain', en: 'team', hi: 'टीम', type: 'Noun · neut.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'Technischen', role: 'plain', en: 'technical', hi: 'तकनीकी', type: 'Adjective · Genitiv' },
      { w: 'Universität', role: 'plain', en: 'university', hi: 'विश्वविद्यालय', type: 'Noun · fem.' },
      { w: 'Dresden', role: 'plain', en: 'Dresden', hi: 'ड्रेसडेन', type: 'Name' },
      { w: 'präsentiert', role: 'r-praesens', en: 'presents (Präsens, journalistic immediacy)', hi: 'प्रस्तुत करती है', type: 'Verb (Präsens)', why: 'Präsens in a news lead creates immediacy even though the underlying research took years (this chapter).' },
      { w: 'heute', role: 'plain', en: 'today', hi: 'आज', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results (Satzende)', hi: 'नतीजे (Satzende)', type: 'Noun · plural' },
      { w: 'einer', role: 'plain', en: 'of a', hi: 'एक', type: 'Article · Genitiv' },
      { w: 'außergewöhnlichen', role: 'plain', en: 'extraordinary', hi: 'असाधारण', type: 'Adjective' },
      { w: 'Studie', role: 'plain', en: 'study', hi: 'अध्ययन', type: 'Noun · fem.' },
      { w: 'zur', role: 'plain', en: 'on', hi: 'पर', type: 'Contraction · zu der' },
      { w: 'Energiespeicherung', role: 'plain', en: 'energy storage (Satzende)', hi: 'ऊर्जा भंडारण (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Bereits', role: 'r-plusquam', en: 'already (signals Plusquamperfekt background)', hi: 'पहले से', type: 'Adverb' },
      { w: 'seit', role: 'plain', en: 'for', hi: 'से', type: 'Preposition · Dat.' },
      { w: 'fünf', role: 'plain', en: 'five', hi: 'पाँच', type: 'Number' },
      { w: 'Jahren', role: 'plain', en: 'years (Satzende)', hi: 'सालों (Satzende)', type: 'Noun · plural' },
      { w: 'hatten', role: 'r-plusquam', en: 'had (Plusquamperfekt)', hi: 'थे', type: 'Verb · haben (Plusquamperfekt)', why: 'Plusquamperfekt steps back before the news-lead\'s "today" to give background (this chapter).' },
      { w: 'die', role: 'plain', en: 'the', hi: 'ये', type: 'Article' },
      { w: 'Forscher', role: 'plain', en: 'researchers', hi: 'शोधकर्ता', type: 'Noun · plural' },
      { w: 'an', role: 'plain', en: 'on', hi: 'पर', type: 'Preposition · Dat.' },
      { w: 'dem', role: 'plain', en: 'the', hi: 'इस', type: 'Article · Dat.' },
      { w: 'neuen', role: 'plain', en: 'new', hi: 'नए', type: 'Adjective · Dat.' },
      { w: 'Material', role: 'plain', en: 'material (Satzende)', hi: 'पदार्थ (Satzende)', type: 'Noun · neut.' },
      { w: 'gearbeitet', role: 'r-plusquam', en: 'worked (Satzende, Plusquamperfekt)', hi: 'काम किया था (Satzende)', type: 'Partizip II (Plusquamperfekt, Satzende)' },
      { w: ',', plain: true },
      { w: 'bevor', role: 'plain', en: 'before', hi: 'से पहले', type: 'Konjunktion' },
      { w: 'der', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Durchbruch', role: 'plain', en: 'breakthrough', hi: 'सफलता', type: 'Noun · masc.' },
      { w: 'gelang', role: 'plain', en: 'succeeded (Satzende)', hi: 'मिली (Satzende)', type: 'Verb · gelingen (Präteritum, Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Laut', role: 'plain', en: 'according to', hi: 'के अनुसार', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Studienleiterin', role: 'plain', en: 'study leader (f., Satzende)', hi: 'अध्ययन प्रमुख (Satzende)', type: 'Noun · fem.' },
      { w: 'habe', role: 'r-konji', en: 'had (Konjunktiv I, reported speech)', hi: '(Konjunktiv I)', type: 'Verb · haben (Konjunktiv I)', why: 'Konjunktiv I reports her exact claim without the writer endorsing it — standard in German news style (this chapter).' },
      { w: 'man', role: 'plain', en: 'one', hi: 'लोगों ने', type: 'Pronoun · impersonal' },
      { w: 'zunächst', role: 'plain', en: 'at first', hi: 'पहले', type: 'Adverb' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'deutlich', role: 'plain', en: 'noticeably', hi: 'काफ़ी', type: 'Adverb' },
      { w: 'geringeren', role: 'plain', en: 'lower', hi: 'कम', type: 'Adjective · Komparativ, Dat.' },
      { w: 'Wirkungsgraden', role: 'plain', en: 'efficiency rates (Satzende)', hi: 'दक्षता दर (Satzende)', type: 'Noun · plural' },
      { w: 'gerechnet', role: 'r-konji', en: 'reckoned (Satzende, Konjunktiv I Perfekt)', hi: 'अनुमान लगाया था (Satzende)', type: 'Verb · Partizip II (Konjunktiv I Perfekt, Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Fachwelt', role: 'plain', en: 'expert community', hi: 'विशेषज्ञ समुदाय', type: 'Noun · fem.' },
      { w: 'reagiert', role: 'r-praesens', en: 'reacts (Präsens, reporting current state)', hi: 'प्रतिक्रिया देती है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: 'überrascht', role: 'plain', en: 'surprised (Satzende)', hi: 'चौंकी हुई (Satzende)', type: 'Adjective' },
      { w: ':', plain: true },
      { w: 'Mehrere', role: 'plain', en: 'several', hi: 'कई', type: 'Determiner' },
      { w: 'Institute', role: 'plain', en: 'institutes', hi: 'संस्थान', type: 'Noun · plural' },
      { w: 'wollen', role: 'plain', en: 'want to', hi: 'चाहते हैं', type: 'Verb · Modalverb' },
      { w: 'die', role: 'plain', en: 'the', hi: 'यह', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the', hi: 'आने वाले', type: 'Article · Dat.' },
      { w: 'kommenden', role: 'plain', en: 'coming', hi: 'महीनों', type: 'Adjective · Dat.' },
      { w: 'Monaten', role: 'plain', en: 'months (Satzende)', hi: '(Satzende)', type: 'Noun · plural' },
      { w: 'unabhängig', role: 'plain', en: 'independently', hi: 'स्वतंत्र रूप से', type: 'Adverb' },
      { w: 'überprüfen', role: 'plain', en: 'verify (Satzende)', hi: 'जाँचना चाहते हैं (Satzende)', type: 'Verb · Infinitiv' },
      { w: '.', plain: true },
      { w: 'Bis', role: 'plain', en: 'until', hi: 'तक', type: 'Preposition · Akk.' },
      { w: 'dahin', role: 'plain', en: 'then', hi: 'तब', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'so', role: 'plain', en: 'so, as', hi: 'ऐसा', type: 'Adverb' },
      { w: 'vermuten', role: 'plain', en: 'assume (Satzende)', hi: 'मानते हैं (Satzende)', type: 'Verb · vermuten' },
      { w: 'Branchenkenner', role: 'plain', en: 'industry insiders (Satzende)', hi: 'उद्योग जानकार (Satzende)', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'werden', role: 'r-futur2', en: 'will (Futur II auxiliary)', hi: 'होगी', type: 'Verb · werden (Futur II)' },
      { w: 'die', role: 'plain', en: 'the', hi: 'ये', type: 'Article' },
      { w: 'Wissenschaftler', role: 'plain', en: 'scientists', hi: 'वैज्ञानिक', type: 'Noun · plural' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपनी', type: 'Possessivartikel' },
      { w: 'Methode', role: 'plain', en: 'method (Satzende)', hi: 'पद्धति (Satzende)', type: 'Noun · fem.' },
      { w: 'bereits', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'weiterentwickelt', role: 'r-futur2', en: 'further developed (Satzende, Futur II)', hi: 'विकसित कर ली होगी (Satzende)', type: 'Partizip II (Futur II, Satzende)', why: 'Futur II (werden + Partizip II + haben) here expresses a confident speculation about a completed future action (this chapter).' },
      { w: 'haben', role: 'r-futur2', en: 'have (Satzende, Futur II)', hi: '(Satzende)', type: 'Verb · haben (Futur II, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'A team from the Technical University of Dresden presents today the results of an extraordinary study on energy storage. The researchers had already been working on the new material for five years before the breakthrough succeeded. According to the study leader, they had at first reckoned with noticeably lower efficiency rates. The expert community reacts with surprise: several institutes want to independently verify the results in the coming months. By then, industry insiders assume, the scientists will already have further developed their method.',
    comprehension: [
      { q: 'Warum steht "präsentiert" im Präsens, obwohl die Forschung Jahre dauerte?', options: ['Journalistischer Stil für Unmittelbarkeit', 'Weil es die einzig mögliche Form ist', 'Weil es sich um die Zukunft handelt'], answer: 0 },
      { q: 'Welche Funktion hat "hatten...gearbeitet"?', options: ['Hintergrundinformation vor dem Durchbruch (Plusquamperfekt)', 'Eine Vermutung', 'Eine wörtliche Rede'], answer: 0 },
      { q: 'Was drückt "werden...weiterentwickelt haben" aus?', options: ['Eine Vermutung über eine künftig abgeschlossene Handlung (Futur II)', 'Eine einfache Zukunft', 'Einen Befehl'], answer: 0 }
    ]
  },
readingBArchive: {
    title: 'Literarischer Auszug',
    titleEn: 'Reading B — Literary excerpt',
    tokens: [
      { w: 'Sie', role: 'plain', en: 'she', hi: 'woh', type: 'Pronomen · Nom.' },
      { w: 'ging', role: 'r-praeteritum', en: 'walked (Präteritum, literary narration)', hi: 'chal padi (Präteritum, literary narration)', type: 'Verb (Präteritum)' },
      { w: 'langsam', role: 'plain', en: 'slowly', hi: 'dheere dheere', type: 'Adverb' },
      { w: 'durch', role: 'plain', en: 'through', hi: 'se hokar', type: 'Präposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'us', type: 'Article' },
      { w: 'leere', role: 'plain', en: 'empty', hi: 'khaali', type: 'Adjective · Akk.' },
      { w: 'Straße', role: 'plain', en: 'street (Satzende)', hi: 'sadak (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Plötzlich', role: 'r-praesens', en: 'suddenly (historic present shift)', hi: 'achaanak (historic present shift)', type: 'Adverb', why: 'A shift to historic present creates a sudden burst of narrative immediacy.' },
      { w: 'hört', role: 'r-praesens', en: 'hears (historic present)', hi: 'sunti hai (historic present)', type: 'Verb (Präsens)' },
      { w: 'sie', role: 'plain', en: 'she', hi: 'woh', type: 'Pronomen · Nom.' },
      { w: 'Schritte', role: 'plain', en: 'footsteps (Satzende)', hi: 'kadmon ki aawaaz (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'She walked slowly through the empty street. Suddenly she hears footsteps.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_001_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Meret, in deinem Entwurf wechselst du mitten im Absatz vom Präteritum ins Präsens. War das Absicht?', en: 'Meret, in your draft you switch from Präteritum to Präsens in the middle of a paragraph. Was that intentional?' },
      { id: 'C1_001_L002', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, genau da will ich die Spannung erhöhen — das historische Präsens zieht den Leser direkt ins Geschehen.', en: 'Yes, exactly there I want to raise the tension — the historical present pulls the reader straight into the action.' },
      { id: 'C1_001_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Interessant, aber wirkt das nicht sprunghaft, wenn man es nicht kennt?', en: 'Interesting, but doesn\'t that seem jarring if you\'re not familiar with it?' },
      { id: 'C1_001_L004', speaker: 'Meret', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht, deshalb setze ich den Wechsel bewusst nur an einer einzigen Stelle ein.', en: 'Maybe, that\'s why I deliberately use the shift in only a single spot.' }
    ],
    transcript: 'Meret, in deinem Entwurf wechselst du mitten im Absatz vom Präteritum ins Präsens. War das Absicht? Ja, genau da will ich die Spannung erhöhen — das historische Präsens zieht den Leser direkt ins Geschehen. Interessant, aber wirkt das nicht sprunghaft, wenn man es nicht kennt? Vielleicht, deshalb setze ich den Wechsel bewusst nur an einer einzigen Stelle ein.',
    translation: 'Meret, in your draft you switch from Präteritum to Präsens in the middle of a paragraph. Was that intentional? Yes, exactly there I want to raise the tension — the historical present pulls the reader straight into the action. Interesting, but doesn\'t that seem jarring if you\'re not familiar with it? Maybe, that\'s why I deliberately use the shift in only a single spot.',
    tokens: [
      { w: 'Meret' },
      { w: ',', plain: true },
      { w: 'in' },
      { w: 'deinem' },
      { w: 'Entwurf' },
      { w: 'wechselst' },
      { w: 'du' },
      { w: 'mitten' },
      { w: 'im' },
      { w: 'Absatz' },
      { w: 'vom' },
      { w: 'Präteritum' },
      { w: 'ins' },
      { w: 'Präsens' },
      { w: '.', plain: true },
      { w: 'War' },
      { w: 'das' },
      { w: 'Absicht' },
      { w: '?', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'genau' },
      { w: 'da' },
      { w: 'will' },
      { w: 'ich' },
      { w: 'die' },
      { w: 'Spannung' },
      { w: 'erhöhen' },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'historische' },
      { w: 'Präsens' },
      { w: 'zieht' },
      { w: 'den' },
      { w: 'Leser' },
      { w: 'direkt' },
      { w: 'ins' },
      { w: 'Geschehen' },
      { w: '.', plain: true },
      { w: 'Interessant' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'wirkt' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'sprunghaft' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'man' },
      { w: 'es' },
      { w: 'nicht' },
      { w: 'kennt' },
      { w: '?', plain: true },
      { w: 'Vielleicht' },
      { w: ',', plain: true },
      { w: 'deshalb' },
      { w: 'setze' },
      { w: 'ich' },
      { w: 'den' },
      { w: 'Wechsel' },
      { w: 'bewusst' },
      { w: 'nur' },
      { w: 'an' },
      { w: 'einer' },
      { w: 'einzigen' },
      { w: 'Stelle' },
      { w: 'ein' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum wechselt Meret ins historische Präsens?', qEn: 'Why does Meret switch to the historical present?', options: ['aus Versehen', 'um Spannung zu erhöhen', 'weil sie das Präteritum vergessen hat', 'um den Text zu kürzen'], optionsEn: ['by accident', 'to build tension', 'because she has forgotten the past tense', 'to shorten the text'], answer: 1,
        explain: '"… das historische Präsens zieht den Leser direkt ins Geschehen."' },
      { q: 'Wo setzt Meret den Tempuswechsel ein?', qEn: 'Where does Meret use the tense shift?', options: ['im ganzen Text', 'nur an einer einzigen Stelle', 'am Anfang und Ende', 'in jedem Absatz'], optionsEn: ['throughout the text', 'in one single place only', 'at the beginning and the end', 'in every paragraph'], answer: 1,
        explain: '"… setze ich den Wechsel bewusst nur an einer einzigen Stelle ein."' }
    ]
  },

  // ---------- Speaking prompts (Anna/Rohan style only) ----------
  speaking: [
    { task: "Timo fragt: Warum wechselst du mitten im Absatz vom Präteritum ins Präsens?", taskEn: "Timo asks: why do you switch from past to present mid-paragraph?", de: "Genau dort will ich die Spannung erhöhen; das historische Präsens holt die Szene näher.", en: "That's exactly where I want to heighten the tension; the historical present brings the scene closer." },
    { task: "Erzähl der Lerngruppe ein historisches Ereignis so, dass es unmittelbar wirkt.", taskEn: "Tell your study group a historical event so it feels immediate.", de: "1989 fällt die Mauer: die Menschen strömen zur Grenze, und die Wachen zögern.", en: "In 1989 the Wall falls: people stream to the border, and the guards hesitate." },
    { task: "Deine Betreuerin fragt, welche Zeitschichtung dein Kapitel hat.", taskEn: "Your supervisor asks about the tense layering in your chapter.", de: "Der Hintergrund steht im Präteritum, die Zitate im Perfekt, die Deutung im Präsens.", en: "The background is in the past simple, the quotes in the perfect, the interpretation in the present." },
    { task: "Der Kollege ist seit Tagen nicht erreichbar. Formuliere eine Vermutung.", taskEn: "Your colleague has been unreachable for days. Formulate an assumption.", de: "Er wird die Konferenz abgesagt haben.", en: "He'll have cancelled the conference." },
    { task: "Meret fragt, ob die Tempuswahl im Vortrag Absicht war. Begründe sie.", taskEn: "Meret asks whether the tense choice in your talk was deliberate. Justify it.", de: "Ja, die Tempuswahl war Absicht: im Präsens klingt die Schlussfolgerung verbindlicher.", en: "Yes, the tense choice was deliberate: in the present the conclusion sounds more binding." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Take a B2-level text written entirely in one tense and rewrite it with deliberate C1 stylistic tense variation (historic present, Plusquamperfekt for background, Futur II for speculation).\n\nTASK 2 — Analytical article (350 words): Write an analytical article demonstrating deliberate stylistic tense variation across at least four different tenses.',
    starters: ['Der Bericht beginnt im Präsens, obwohl das Ereignis bereits stattgefunden hatte.', 'Die Forscher werden die Ergebnisse schon veröffentlicht haben.'],
    placeholder: 'Der Wissenschaftler präsentiert heute seine Ergebnisse. Er hatte bereits vor Monaten mit der Untersuchung begonnen...',
    minWords: 150
  },

  // ---------- Exercises ----------
  exercises: {
    mcq: {
      q: 'Which tense is stylistically preferred for narrating in novels?',
      options: ['Präteritum', 'Perfekt', 'Präsens'],
      answer: 0,
      explain: 'Präteritum dominates written literary narration, while Perfekt dominates spoken conversational narration.'
    },
    gap: {
      sentence: ['Die Forscher ', ' die Daten schon ausgewertet haben.'],
      gaps: [ { answer: 'werden', accepts: ['werden'] } ],
      explain: '"werden...ausgewertet haben" forms the Futur II, expressing a speculative assumption about a completed past action.'
    },
    match: {
      q: 'Match each context to its preferred tense.',
      pairs: [
        { noun: 'Novel', art: 'Präteritum' },
        { noun: 'Conversation', art: 'Perfekt' },
        { noun: 'Scientific article', art: 'Präsens' },
        { noun: 'Academic prediction', art: 'Futur I' }
      ]
    },
    builder: {
      target: 'Build: "The event had already happened." (Plusquamperfekt)',
      bank: ['Das', 'Ereignis', 'war', 'bereits', 'geschehen', '.'],
      answer: ['Das', 'Ereignis', 'war', 'bereits', 'geschehen', '.'],
      roles: { 'Das': 'r-plusquam', 'war': 'r-plusquam', 'geschehen': 'r-plusquam' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Der ganze wissenschaftliche Bericht ist im Perfekt geschrieben: "Wir haben die Daten gesammelt, wir haben sie analysiert, wir haben die Ergebnisse präsentiert."',
      right: 'Der ganze wissenschaftliche Bericht ist im Präsens/Präteritum geschrieben: "Wir sammeln die Daten, analysieren sie und präsentieren die Ergebnisse."',
      explain: 'Perfekt is conversational; academic reports expect Präsens or Präteritum for objective, formal narration.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'What is historic present used for?', options: ['Narrating a past event vividly, as if happening now', 'Only literal present-time statements', 'Forming the passive voice'], answer: 0,
      explain: 'Historic present borrows present tense forms to make past events feel immediate.' },
    { q: 'Which tense dominates literary/written narration?', options: ['Präteritum', 'Perfekt', 'Futur II'], answer: 0,
      explain: 'Novels and formal narration consistently use Präteritum.' },
    { q: 'What does Plusquamperfekt typically express?', options: ['Background information / earlier events', 'The immediate present', 'A polite request'], answer: 0,
      explain: 'Plusquamperfekt lets writers step further back in time to give background before the main narrative.' },
    { q: 'What can Futur II express besides a completed future event?', options: ['An assumption about the past', 'A simple present fact', 'A command'], answer: 0,
      explain: 'Futur II (werden + Partizip II + haben/sein) is used for speculation about something that already happened.' },
    { q: 'B2 asks "which tense is correct?" What does C1 ask?', options: ['"Which tense sounds best?"', '"Which tense is easiest?"', '"Which tense is shortest?"'], answer: 0,
      explain: 'Mastering stylistic tense choice is the defining step from B2 to C1 writing.' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-praesens', html: 'Präsens goes beyond the present: historic present, scientific writing, instructions, universal truths, and newspaper headlines all use it deliberately.' },
    { c: 'r-plusquam', html: 'Präteritum vs Perfekt is a stylistic choice, not just a grammatical one: Präteritum for literature/writing, Perfekt for spoken narration; Plusquamperfekt layers background information.' },
    { c: 'r-futur2', html: 'Futur I expresses predictions and forecasts; Futur II expresses speculation about a completed past event ("werden...ausgewertet haben").' }
  ],
  revisionTips: [
    'Read one page of a German novel and one German newspaper article, and note every tense shift and its purpose.',
    'Rewrite a short personal story three times: once in Perfekt (spoken style), once in Präteritum (literary style), once mixing in Plusquamperfekt for background.',
    'Practise forming Futur II sentences ("werden...Partizip II...haben/sein") to speculate about completed past events.'
  ]
};

window.CHAPTER = CHAPTER;
