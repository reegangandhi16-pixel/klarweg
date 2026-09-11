/* KLARWEG CHAPTER DATA — C2 · Chapter 1
   "Zeitformen der Verben" (C2) — stylistic, native-level tense
   choice: narrative present, historical present, future-as-
   assumption, academic/scientific/journalistic register-based
   tense selection. NOT tense formation (already mastered) — focus
   is WHY native speakers choose one tense over another.
   Dialogue: Constanze and Timo ONLY. */
const CHAPTER = {
  id: 'c2-01-zeitformen-der-verben',
  phase: 'C2 · Das Verbalsystem auf C2-Niveau',
  number: 1,
  title: 'Zeitformen der Verben',
  titleEn: 'Verb tenses at native level',
  description: 'Imagine time as a camera. The event never changes — only the camera angle changes. Verb tenses are the camera angles of German. Native speakers choose the best angle, not simply the grammatical tense.',
  xp: 1200, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 2, title: 'Verben mit Präfixen', titleEn: 'Prefix verbs at native level' , href: 'chapter-c2-02-verben-mit-praefixen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Verb tense is not only grammar — it is <em>perspective</em>.',
    intro: 'Editing the narration of a historical documentary set in 1989, Constanze reads Timo the opening in the historical present — discovering how a single tense choice changes atmosphere, objectivity, and literary style.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly how educated native speakers choose tense for stylistic and rhetorical effect, not just grammatical correctness'],
    scene: 'Schnitt der Erzählung einer Geschichtsdokumentation',
    femaleSpeakers: ['Constanze'],
    dialogue: [
      { speaker: 'Constanze', tokens: [
        { w: 'Hör', role: 'r-verb', en: 'listen', hi: 'सुनो', pron: 'hör', type: 'Verb · hören (Imperativ du)' },
        { w: 'mal', role: 'r-akkusativ', en: 'just', hi: 'ज़रा', pron: 'mahl', type: 'Particle' },
        { w: ',', plain: true },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'lese', role: 'r-verb', en: 'read', hi: 'पढ़ती हूँ', pron: 'LAY-zuh', type: 'Verb · lesen (ich)' },
        { w: 'dir', role: 'r-dativ', en: 'you', hi: 'तुम्हें', pron: 'deer', type: 'Pronoun · dative' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Anfang', role: 'r-akkusativ', en: 'beginning', hi: 'शुरुआत', pron: 'AN-fank', type: 'Noun · masc.' },
        { w: 'vor', role: 'r-preposition', en: 'out', hi: 'से', pron: 'for', type: 'Preposition (part of vorlesen)' },
        { w: '.', plain: true }
      ], en: 'Listen, I will read you the beginning.', hi: 'Suno, main tumhe shuruaat padh kar sunaati hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gern', role: 'r-adverb', en: 'gladly', hi: 'ख़ुशी से', pron: 'GAIRN', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Gladly.', hi: 'Khushi se.' },
      { speaker: 'Constanze', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'Sommer', role: 'r-subject', en: 'summer', hi: 'गर्मी', pron: 'ZO-mer', type: 'Noun · masc.' },
        { w: '1989', plain: true },
        { w: '.', plain: true },
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Stadt', role: 'r-subject', en: 'city', hi: 'शहर', pron: 'shtat', type: 'Noun · fem.' },
        { w: 'schweigt', role: 'r-verb', en: 'stays silent', hi: 'चुप रहता है', pron: 'SHVYKT', type: 'Verb · schweigen', why: 'Das historische Präsens = the historical present, used to make a past narrative feel vivid and immediate (this chapter).', ex: 'Die Stadt schweigt. Ein Mann geht durch die leere Straße.', exEn: 'The city stays silent. A man walks through the empty street.' },
        { w: '.', plain: true },
        { w: 'Ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'Mann', role: 'r-subject', en: 'man', hi: 'आदमी', pron: 'man', type: 'Noun · masc.' },
        { w: 'geht', role: 'r-verb', en: 'walks', hi: 'चलता है', pron: 'GAYT', type: 'Verb · gehen' },
        { w: 'durch', role: 'r-preposition', en: 'through', hi: 'से होकर', pron: 'doorkh', type: 'Preposition + accusative' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'leere', role: 'r-akkusativ', en: 'empty', hi: 'ख़ाली', pron: 'LAY-ruh', type: 'Adjective' },
        { w: 'Straße', role: 'r-akkusativ', en: 'street', hi: 'सड़क', pron: 'SHTRAH-suh', type: 'Noun · fem.' },
        { w: '.', plain: true }
      ], en: 'It is summer 1989. The city stays silent. A man walks through the empty street.', hi: 'Yeh 1989 ki garmi hai. Shahar chup rehta hai. Ek aadmi khaali sadak se hokar chalta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Warum', role: 'r-question', en: 'why', hi: 'क्यों', pron: 'va-RUM', type: 'Question word' },
        { w: 'erzählst', role: 'r-verb', en: 'do you narrate', hi: 'सुनाती हो', pron: 'er-TSAILST', type: 'Verb · erzählen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'das', role: 'r-akkusativ', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · acc.' },
        { w: 'im', role: 'r-preposition', en: 'in the', hi: 'में', pron: 'im', type: 'Preposition + place' },
        { w: 'Präsens', role: 'r-dativ', en: 'present tense (dat.)', hi: 'वर्तमान काल में', pron: 'PRAY-zens', type: 'Noun · neut. dat.' },
        { w: '?', plain: true }
      ], en: 'Why do you narrate that in the present tense?', hi: 'Tum yeh vartamaan kaal mein kyun sunaati ho?' },
      { speaker: 'Constanze', tokens: [
        { w: 'Das', role: 'r-subject', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut.' },
        { w: 'historische', role: 'r-subject', en: 'historical', hi: 'ऐतिहासिक', pron: 'his-TOH-ri-shuh', type: 'Adjective' },
        { w: 'Präsens', role: 'r-subject', en: 'present', hi: 'वर्तमान काल', pron: 'PRAY-zens', type: 'Noun · neut.' },
        { w: 'macht', role: 'r-verb', en: 'makes', hi: 'बनाता है', pron: 'MAKHT', type: 'Verb · machen' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Erzählung', role: 'r-akkusativ', en: 'narrative', hi: 'कथा', pron: 'er-TSAY-lung', type: 'Noun · fem.', why: 'die Erzählung (this chapter).', ex: 'die Erzählung lebendig machen' },
        { w: 'lebendig', role: 'r-akkusativ', en: 'vivid', hi: 'जीवंत', pron: 'lay-BEN-dikh', type: 'Adjective', why: 'lebendig = vivid/alive (this chapter).', ex: 'Das Präsens macht die Erzählung lebendig.', exEn: 'The present tense makes the narrative vivid.' },
        { w: '.', plain: true }
      ], en: 'The historical present makes the narrative vivid.', hi: 'Aitihaasik vartamaan kaal katha ko jeevant banaata hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'welcher', role: 'r-dativ', en: 'which (fem. dat.)', hi: 'किस', pron: 'VEL-kher', type: 'Question word · dative' },
        { w: 'Perspektive', role: 'r-dativ', en: 'perspective (dat.)', hi: 'दृष्टिकोण से', pron: 'pair-SPEK-tee-vuh', type: 'Noun · fem. dat.', why: 'die Perspektive (this chapter).', ex: 'aus welcher Perspektive erzählen' },
        { w: 'erzählst', role: 'r-verb', en: 'do you narrate', hi: 'सुनाती हो', pron: 'er-TSAILST', type: 'Verb · erzählen (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: '?', plain: true }
      ], en: 'From which perspective do you narrate?', hi: 'Tum kis drishtikon se sunaati ho?' },
      { speaker: 'Constanze', tokens: [
        { w: 'Aus', role: 'r-preposition', en: 'from', hi: 'से', pron: 'ows', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Perspektive', role: 'r-dativ', en: 'perspective (dat.)', hi: 'दृष्टिकोण से', pron: 'pair-SPEK-tee-vuh', type: 'Noun · fem. dat.' },
        { w: 'des', role: 'r-dativ', en: 'the (masc. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Mannes', role: 'r-dativ', en: 'man (gen.)', hi: 'आदमी के', pron: 'MA-nes', type: 'Noun · masc. genitive' },
        { w: '.', plain: true },
        { w: 'Nur', role: 'r-akkusativ', en: 'only', hi: 'केवल', pron: 'noor', type: 'Adverb' },
        { w: 'so', role: 'r-akkusativ', en: 'this way', hi: 'इस तरह', pron: 'zo', type: 'Adverb' },
        { w: 'bleibt', role: 'r-verb', en: 'stays', hi: 'रहती है', pron: 'BLYPT', type: 'Verb · bleiben' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Vermutung', role: 'r-subject', en: 'suspense', hi: 'अनुमान', pron: 'fer-MOO-tung', type: 'Noun · fem.', why: 'die Vermutung (recycled B2/C1).', ex: 'die Vermutung bleiben lassen' },
        { w: 'bestehen', role: 'r-verb', en: 'intact', hi: 'बना रहना', pron: 'be-SHTAY-en', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'From the perspective of the man. Only this way the suspense stays intact.', hi: 'Aadmi ke drishtikon se. Kewal isi tarah anumaan bana rehta hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगता है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'wirklich', role: 'r-akkusativ', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: 'lebendig', role: 'r-akkusativ', en: 'vivid', hi: 'जीवंत', pron: 'lay-BEN-dikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'That really sounds vivid.', hi: 'Yeh sach mein jeevant lagta hai.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Imagine time as a <span class="de r-perspektive">camera</span>. The event never changes — only the camera angle changes.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is ZEITFORMEN DER VERBEN at C2 level — stylistic and native-level tense CHOICE for narrative perspective, historical narration, and academic/journalistic register, NOT basic tense formation (Präsens, Perfekt, Präteritum, Plusquamperfekt, Futur I/II conjugation — already fully mastered). Covered: the Historical Present (using Präsens for completed historical events, e.g. "1939 beginnt der Zweite Weltkrieg", for narrative immediacy); the Narrative Present in literature (Präsens instead of Präteritum for dramatic effect); using Präsens for future meaning without Futur (Morgen fliege ich nach Berlin); Futur I/II as epistemic assumption rather than literal future (Er wird schon angekommen sein = he must have already arrived, not "he will arrive"; Sie dürfte inzwischen schlafen); academic tense consistency (Die Studie zeigt..., Frühere Untersuchungen ergaben...); journalistic tense progression (Breaking News → Historical Background → Commentary → Forecast); and literary tense-shift analysis (identifying narrator perspective and stylistic intention behind tense changes). Do NOT expect or require correction of basic tense formation/conjugation errors as a primary focus — assume those are mastered; focus feedback on STYLISTIC and PERSPECTIVAL tense choices instead. The most important things to catch: overusing Futur I where Präsens or an epistemic modal would be more natural/native; incorrect sequence of tenses across a narrative; inconsistent, unintentional narration (switching tenses without stylistic purpose); translating English tense usage directly into German (English and German tense conventions diverge, especially around Präsens-for-future and reported speech); ignoring the stylistic/rhetorical effect a tense choice should achieve for its register (literary vs. academic vs. journalistic). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag tense choices that are grammatically correct but stylistically unnatural or inconsistent with the register/genre; flag unintentional tense-switching within one narrative; flag overuse of Futur I where native speakers would prefer Präsens or a modal-based epistemic expression. Do NOT flag basic conjugation errors as the primary issue unless clearly present. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around stylistic/perspectival effect). If none: <li>No errors — well done.</li> 3) <p><b>Native-level tense check:</b> one sentence on whether the tense choices reflect deliberate, native-like stylistic control rather than default/mechanical usage.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — your tense choices show genuine native-level stylistic control, not just grammatical correctness. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Perspective Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: verb tense is not only grammar, it is perspective.' },
  parserSentence: [ { w: '1939', role: 'r-historisches-praesens' }, { w: 'beginnt', role: 'r-historisches-praesens' }, { w: 'der', role: 'plain' }, { w: 'Krieg', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: verb tense is perspective, not just grammar — the event never changes, only the camera angle.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Constanze and Timo edit a documentary narration, discovering how tense choice shapes atmosphere and credibility.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key stylistic-tense expressions — full popups with two examples, register, synonyms/antonyms, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master Historical Present, Future-as-assumption, and register-based tense selection across literature, academia, and journalism.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a historical essay, a literary excerpt, and a scientific article for tense selection and stylistic effect.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify tense shifts and perspective in a historical documentary, university lecture, and literary audiobook excerpt.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice storytelling, historical narration, scientific presentation, and discussing tense choices at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite texts across tense perspectives, transform a news report into literary narrative, and write a 500-word C2 essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill timeline reconstruction, narrative perspective, Historical Present, and stylistic transformation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1200 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Timeline reconstruction, narrative perspective, and stylistic transformation drills, plus a full 500-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '16 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Perspective Model, Time Flow Model, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: '1939 beginnt der Zweite Weltkrieg.', text: 'Use the Historical Present for narrative immediacy in historical writing' },
    { de: 'Morgen fliege ich nach Berlin.', text: 'Use Präsens for future meaning instead of Futur I' },
    { de: 'Er wird schon angekommen sein.', text: 'Use Futur II as an epistemic assumption, not a literal future' },
    { de: 'Die Studie zeigt, dass frühere Untersuchungen andere Ergebnisse ergaben.', text: 'Maintain consistent academic tense sequencing when reporting research' },
    { de: 'Die Zeit ändert sich nicht, nur die Perspektive.', text: 'Understand the chapter\'s core "camera angle" metaphor for tense choice' }
  ],
  vocab: [
    { de: 'das Historische Präsens', art: 'das', gender: 'n', pos: 'noun (fixed grammatical term)', level: 'C2', register: 'written', en: 'the Historical Present', hi: 'ऐतिहासिक वर्तमान काल', synonyms: 'narratives Präsens', antonyms: 'Präteritum (in narration)', ex: '1939 beginnt der Zweite Weltkrieg — ein Beispiel für das Historische Präsens.', exEn: '1939 begins the Second World War — an example of the Historical Present.', exHi: '1939 mein dusra Vishwa Yudhh shuru hota hai — Historisches Präsens ka ek udhaaran.', ex2: 'Historiker nutzen das Historische Präsens für mehr Lebendigkeit.', ex2En: 'Historians use the Historical Present for more vividness.', ex2Hi: 'Historian zyaada jeevantaa ke liye Historisches Präsens ka istemaal karte hain.' },
    { de: 'die Vermutung', art: 'die', gender: 'f', plural: 'Vermutungen', pos: 'noun', level: 'C2', register: 'both', en: 'assumption, supposition', hi: 'अनुमान', synonyms: 'Annahme, Mutmaßung', antonyms: 'Gewissheit, Tatsache', ex: 'Er wird schon angekommen sein — das ist eine Vermutung, keine Tatsache.', exEn: 'He must have already arrived — that is an assumption, not a fact.', exHi: 'Voh pehle se pahunch chuka hoga — yeh ek anumaan hai, tathya nahi.', ex2: 'Diese Vermutung lässt sich mit Futur II ausdrücken.', ex2En: 'This assumption can be expressed with Futur II.', ex2Hi: 'Yeh anumaan Futur II se express kiya jaa sakta hai.' },
    { de: 'die Perspektive', art: 'die', gender: 'f', plural: 'Perspektiven', pos: 'noun', level: 'C2', register: 'both', en: 'perspective', hi: 'दृष्टिकोण', synonyms: 'Sichtweise, Blickwinkel', antonyms: null, ex: 'Die Zeit ändert sich nicht, nur die Perspektive.', exEn: 'Time itself doesn\'t change, only the perspective.', exHi: 'Zamaana nahi badalta, sirf nazariya badalta hai.', ex2: 'Der Erzähler wechselt die Perspektive im dritten Kapitel.', ex2En: 'The narrator changes perspective in the third chapter.', ex2Hi: 'Katha-vaachak teesre adhyaay mein nazariya badalta hai.' },
    { de: 'die Erzählung', art: 'die', gender: 'f', plural: 'Erzählungen', pos: 'noun', level: 'C2', register: 'both', en: 'narration, narrative', hi: 'कथा वर्णन', synonyms: 'Narration, Geschichte', antonyms: null, ex: 'Die Erzählung wechselt zwischen Präsens und Präteritum.', exEn: 'The narration alternates between present and past tense.', exHi: 'Katha vartaman aur bhoot kaal ke beech badalti hai.', ex2: 'Eine gute Erzählung nutzt die Zeitform bewusst.', ex2En: 'A good narration uses tense deliberately.', ex2Hi: 'Ek achhi katha jaan-boojh kar tense istemaal karti hai.' },
    { de: 'lebendig', pos: 'adjective', level: 'C2', register: 'both', en: 'lively, vivid', hi: 'जीवंत', synonyms: 'anschaulich, dynamisch', antonyms: 'leblos, statisch', ex: 'Das Präsens macht die historische Erzählung lebendiger.', exEn: 'The present tense makes the historical narration more vivid.', exHi: 'Präsens historical katha ko zyaada jeevant banaata hai.', ex2: 'Eine lebendige Beschreibung zieht den Leser in die Handlung.', ex2En: 'A vivid description draws the reader into the action.', ex2Hi: 'Ek jeevant vivaran padhne waale ko katha mein kheenchta hai.' }
  ],
  grammar: [
    { title: 'Zeit vs. Perspektive (Time vs. Perspective)', body: [ 'Real Time → Narrative Time → Speaker Perspective → Chosen Tense. The same event can be described using different tenses depending on perspective — this is the foundational insight of C2 tense mastery.' ], hinglish: 'C2 par tense ka sawaal badal jaata hai. Ab yeh nahi poochha jaata ki ghatna kab hui, balki yeh ki tum use <b>kis nazariye</b> se dikha rahe ho. Ek hi ghatna kai tenses mein aa sakti hai, aur har tense se doori aur asar badal jaata hai.' },
    { title: 'Erzählendes Präsens (Narrative Present)', body: [ 'Novels frequently use Präsens instead of Präteritum for dramatic effect, pulling the reader into the immediate action rather than distant past narration.' ], hinglish: 'Novels mein aksar Pr\u00e4teritum ki jagah Pr\u00e4sens aata hai, taaki ghatna abhi hoti hui lage aur reader usme khinch jaaye. Par ek baat zaroori hai \u2014 ek baar yeh perspective chun liya to poore hisse mein use nibhaana padta hai; beech mein Pr\u00e4teritum aa jaaye to effect toot jaata hai.' },
    { title: 'Historisches Präsens (Historical Present)', body: [ '1815 endet der Wiener Kongress. 1939 beginnt der Zweite Weltkrieg. Historians intentionally use Präsens for completed historical events to create narrative immediacy — not because the events are ongoing.' ], hinglish: 'History likhne mein bhi Pr\u00e4sens aata hai \u2014 <span class="de">1939 beginnt der Zweite Weltkrieg</span> \u2014 aur iska matlab yeh nahi ki baat aaj ki hai. Yeh jaan-boojhkar kiya jaata hai taaki ghatna saamne hoti hui lage. Isliye ise <b>historisches Pr\u00e4sens</b> kehte hain, aur ise poore paragraph mein ek jaisa rakhna padta hai.' },
    { title: 'Futur ohne Bedeutung von Zukunft (Future Meaning Without Futur)', body: [ 'Morgen fliege ich nach Berlin. Nächste Woche beginnt das Semester. Präsens is preferred over Futur I for planned future events when a time expression already makes the future clear.' ], hinglish: 'Agar sentence mein pehle se koi future ka time word hai (<i>morgen</i>, <i>n\u00e4chste Woche</i>), to German seedha Pr\u00e4sens use karta hai \u2014 <b>werden</b> lagane ki zaroorat nahi. Learners aksar har future ke liye Futur I laga dete hain, aur wahi ise non-native bana deta hai.' },
    { title: 'Futur als Vermutung (Future as Assumption)', body: [ 'Er wird schon angekommen sein. Sie dürfte inzwischen schlafen. Das wird wohl stimmen. These express epistemic probability/assumption, not literal future time — a defining C2 nuance.' ], hinglish: 'Yahan is chapter ka sabse important nuance hai \u2014 <b>werden</b> aur <b>d\u00fcrfte</b> aksar future ki baat hi nahi karte, balki <b>andaaza</b> batate hain. <span class="de">Er wird schon angekommen sein</span> matlab \u201cshaayad woh pahunch chuka hoga\u201d, aur <span class="de">Das wird wohl stimmen</span> matlab \u201cyeh theek hi hoga\u201d. Pehchaan ka tareeka: agar saath mein <i>schon</i>, <i>wohl</i> ya <i>inzwischen</i> hai, to baat andaaze ki hai, future ki nahi.' },
    { title: 'Register-spezifische Zeitwahl (Register-Based Tense Selection)', body: [ 'Academic: Die Studie zeigt..., Frühere Untersuchungen ergaben..., Es konnte festgestellt werden... Journalism: Breaking News → Historical Background → Commentary → Forecast, each with its own tense. Literature: tense shifts signal narrator perspective and stylistic intention.' ], hinglish: 'Register ke hisaab se tense badalta hai. Academic writing mein apni study Pr\u00e4sens mein aati hai (<span class="de">Die Studie zeigt</span>) par purani research Pr\u00e4teritum mein (<span class="de">Fr\u00fchere Untersuchungen ergaben</span>) \u2014 yeh farak dhyaan dene layak hai. Journalism mein ek hi article ke andar tense badalta rehta hai: taazi khabar, phir background, phir commentary, phir aage ka andaaza. Aur literature mein tense badalna narrator ka nazariya batata hai.' },
    {
      title: 'Futur II und die Form der Vermutung',
      body: [
        'The chapter\u2019s key nuance \u2014 <i>Er wird schon angekommen sein</i> \u2014 needs a form the earlier levels did not require, so here it is explicitly.',
        'Futur II is <b>werden</b> (position 2) + <b>Partizip II</b> + <b>haben</b> or <b>sein</b> at the very end. The auxiliary is the same one the Perfekt would take.'
      ],
      table: {
        head: ['Perfekt', 'Futur II', 'Reading'],
        rows: [
          ['er ist angekommen', 'er <b>wird</b> angekommen <b>sein</b>', 'he will probably have arrived'],
          ['sie hat es gelesen', 'sie <b>wird</b> es gelesen <b>haben</b>', 'she will probably have read it'],
          ['es hat gestimmt', 'es <b>wird</b> gestimmt <b>haben</b>', 'that was probably right'],
          ['\u2014 (present assumption)', 'sie <b>d\u00fcrfte</b> inzwischen schlafen', 'she is probably asleep by now'],
          ['\u2014 (present assumption)', 'das <b>wird</b> wohl stimmen', 'that is probably right']
        ]
      },
      note: 'Two readings, decided by context: with a future time marker it means \u201ccompleted by then\u201d; with <i>schon</i>, <i>wohl</i> or <i>sicher</i> it is an assumption about the past. And the modal stays in the present \u2014 <i>er wurde angekommen sein</i> is not German.',
      hinglish: 'Is chapter ki sabse khaas cheez \u2014 <span class="de">Er wird schon angekommen sein</span> \u2014 ke liye ek form chahiye jo pehle ke levels mein zaroori nahi thi, isliye woh yahan saaf-saaf de rahe hain. Futur II banta hai <b>werden</b> (position 2) + <b>Partizip II</b> + <b>haben</b> ya <b>sein</b> se, aur aakhri do sabse end mein aate hain. Auxiliary wahi rehta hai jo Perfekt mein hota \u2014 <i>ankommen</i> <b>sein</b> leta hai, isliye <b>angekommen sein</b>. Aur iske do matlab hote hain, jo context se tay hote hain: agar future ka time word hai to \u201ctab tak ho chuka hoga\u201d, aur agar <i>schon</i>, <i>wohl</i> ya <i>sicher</i> hai to yeh past ke baare mein andaaza hai. Ek baat pakki \u2014 <b>werden</b> khud present mein rehta hai; <i>er wurde angekommen sein</i> German nahi hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Tense mapped to its native function.' ], table: { head: ['Tense', 'Native Function'], rows: [ ['Präsens', 'Narrative / Future / Historical'], ['Präteritum', 'Narrative'], ['Perfekt', 'Conversation'], ['Plusquamperfekt', 'Background'], ['Futur I', 'Assumption / Formal Future'], ['Futur II', 'Completed Assumption'] ] }, hinglish: 'Har tense ka apna asli kaam \u2014 dhyaan do ki <b>Pr\u00e4sens</b> teen kaam karta hai (narration, future, history), aur <b>Futur I</b> ka asli kaam aksar andaaza hai, future nahi.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Two of these are formal errors \u2014 a doubled <b>werden</b> and the wrong Futur II auxiliary. The other three are the C2 issue proper: a timeline or a chosen perspective that is not sustained.' ], mistakes: [
      { wrong: 'Morgen werde ich nach Berlin fliegen werden.', right: 'Morgen fliege ich nach Berlin.', why: 'Two errors: <b>werden</b> cannot be doubled, and with <i>morgen</i> already marking the future the Pr\u00e4sens is the natural choice.' },
      { wrong: 'Als er ankam, verlie\u00df der Zug bereits den Bahnhof.', right: 'Als er ankam, hatte der Zug den Bahnhof bereits verlassen.', why: 'The earlier event needs the Plusquamperfekt. With both verbs in the Pr\u00e4teritum the sequence collapses \u2014 the reader cannot tell which came first.' },
      { wrong: 'Er betrat den Raum. Alle schauen ihn an. Dann setzte er sich.', right: 'Er betrat den Raum. Alle schauten ihn an. Dann setzte er sich.', why: 'Within one narrative level the tense stays constant. A single Pr\u00e4sens sentence signals a change of perspective that is not intended here.' },
      { wrong: 'Er wird schon angekommen haben.', right: 'Er wird schon angekommen sein.', why: 'Futur II keeps the auxiliary of the Perfekt \u2014 <i>ankommen</i> takes <b>sein</b>, so it is <b>angekommen sein</b>.' },
      { wrong: 'Im Jahr 1939 beginnt der Krieg, der 1945 endete.', right: 'Im Jahr 1939 beginnt der Krieg, der 1945 endet. / \u2026 begann der Krieg, der 1945 endete.', why: 'The historical present has to be sustained. Mixing it with the Pr\u00e4teritum in the same sentence breaks the chosen perspective.' }
    ], hinglish: 'Do galtiyan form ki hain \u2014 <b>werden</b> do baar lagana, aur Futur II mein galat auxiliary. Baaki teen asli C2 ki baat hain: timeline ya chuna hua nazariya beech mein toot jaana.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What is the communicative purpose? Narration? Academic reporting? Historical explanation? Prediction? Literary effect? Choose the most natural tense for that purpose.' ], note: 'Memory trick: imagine time as a camera. The event never changes. Only the camera angle changes. Verb tenses are the camera angles of German.', hinglish: 'Pehle yeh tay karo ki tum kya kar rahe ho \u2014 kahani sunana, research batana, history likhna, andaaza lagana, ya koi literary asar paida karna. Uske hisaab se tense chuno, aur phir use poore hisse mein nibhaao. Aur likhne ke baad do cheezein check karo: <b>werden</b> ek hi baar laga hai, aur Futur II mein auxiliary wahi hai jo Perfekt mein hota.' }
  ],
  reading: {
    title: 'Essay: Die Nacht, in der die Mauer fiel',
    titleEn: 'Reading A — Essay: the night the Wall fell',
    tokens: [
      { w: 'Es', role: 'plain', en: 'it', hi: 'यह', type: 'Pronomen · Nom.' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'kurz', role: 'plain', en: 'shortly', hi: 'थोड़ी देर', type: 'Adverb' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'बाद', type: 'Preposition · Dat.' },
      { w: 'neunzehn', role: 'plain', en: 'nineteen', hi: 'उन्नीस', type: 'Number' },
      { w: 'Uhr', role: 'plain', en: 'o\'clock (Satzende)', hi: 'बजे (Satzende)', type: 'Noun · fem.' },
      { w: ',', plain: true },
      { w: 'als', role: 'plain', en: 'when', hi: 'जब', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Politbüromitglied', role: 'plain', en: 'Politburo member (Satzende)', hi: 'पोलितब्यूरो सदस्य (Satzende)', type: 'Noun · neut.' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'verspricht', role: 'plain', en: 'misspeaks (Satzende)', hi: 'ग़लत बोल जाता है (Satzende)', type: 'Verb · sich versprechen (Nebensatz, Satzende)' },
      { w: '.', plain: true },
      { w: 'Von', role: 'r-historisches-praesens', en: 'from this moment on (introduces the historical present)', hi: 'इस पल से', type: 'Präposition · Dat.' },
      { w: 'diesem', role: 'r-historisches-praesens', en: 'this (neut. dat.)', hi: '', type: 'Determiner · Dat.' },
      { w: 'Moment', role: 'r-historisches-praesens', en: 'moment (Satzende)', hi: 'क्षण (Satzende)', type: 'Noun · masc.' },
      { w: 'an', role: 'r-historisches-praesens', en: '(Satzende, part of "von...an")', hi: '', type: 'Preposition · Dat.' },
      { w: 'erzählt', role: 'plain', en: 'tells', hi: 'बताता है', type: 'Verb · erzählen' },
      { w: 'dieser', role: 'plain', en: 'this (masc.)', hi: 'यह', type: 'Determiner' },
      { w: 'Essay', role: 'plain', en: 'essay (Satzende)', hi: 'निबंध (Satzende)', type: 'Noun · masc.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Ereignisse', role: 'plain', en: 'events (Satzende)', hi: 'घटनाएँ (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Präsens', role: 'plain', en: 'present tense (Satzende)', hi: 'वर्तमान काल (Satzende)', type: 'Noun · neut.' },
      { w: '.', plain: true },
      { w: 'Tausende', role: 'r-historisches-praesens', en: 'thousands (historical present, Satzende)', hi: 'हज़ारों (historical present, Satzende)', type: 'Noun · plural' },
      { w: 'strömen', role: 'r-historisches-praesens', en: 'stream (historical present — narrating a past event as if unfolding now)', hi: 'उमड़ पड़ते हैं (historical present)', type: 'Verb (Präsens, Historisches Präsens)', why: 'The historical present ("strömen" instead of "strömten") pulls the reader directly into the unfolding night — a deliberate stylistic choice, not automatic grammar (this chapter).' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'derselben', role: 'plain', en: 'the same (fem. dat.)', hi: 'उसी', type: 'Determiner · Dat.' },
      { w: 'Nacht', role: 'plain', en: 'night (Satzende)', hi: 'रात (Satzende)', type: 'Noun · fem.' },
      { w: 'zu', role: 'plain', en: 'to', hi: 'की ओर', type: 'Preposition · Dat.' },
      { w: 'den', role: 'plain', en: 'the (plural dat.)', hi: 'इन', type: 'Article · Dat.' },
      { w: 'Grenzübergängen', role: 'plain', en: 'border crossings (Satzende)', hi: 'सीमा चौकियों (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true },
      { w: 'Was', role: 'plain', en: 'what', hi: 'जो', type: 'Relativpronomen' },
      { w: 'damals', role: 'r-praeteritum', en: 'back then (signals a shift back into the narrated past, Präteritum)', hi: 'उस समय', type: 'Adverb' },
      { w: 'wie', role: 'plain', en: 'like', hi: 'जैसा', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'Missverständnis', role: 'plain', en: 'misunderstanding (Satzende)', hi: 'ग़लतफ़हमी (Satzende)', type: 'Noun · neut.' },
      { w: 'wirkte', role: 'r-praeteritum', en: 'seemed (Satzende, Präteritum — the historian\'s reflective distance)', hi: 'लग रहा था (Satzende, Präteritum)', type: 'Verb · wirken (Präteritum, Satzende)', why: 'The Präteritum here marks the historian\'s reflective, retrospective voice — contrasting with the immediacy of the historical present above (this chapter).' },
      { w: ',', plain: true },
      { w: 'gilt', role: 'plain', en: 'is considered', hi: 'माना जाता है', type: 'Verb · gelten als' },
      { w: 'heute', role: 'plain', en: 'today (Satzende)', hi: 'आज (Satzende)', type: 'Adverb' },
      { w: 'als', role: 'plain', en: 'as', hi: 'के रूप में', type: 'Preposition' },
      { w: 'einer', role: 'plain', en: 'one (fem. dat.)', hi: 'एक', type: 'Article · Dat.' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'की', type: 'Article · Genitiv' },
      { w: 'folgenreichsten', role: 'plain', en: 'most consequential (Satzende)', hi: 'सबसे दूरगामी (Satzende)', type: 'Adjective · Superlativ' },
      { w: 'Versprecher', role: 'plain', en: 'slips of the tongue (Satzende)', hi: 'ज़बान की फिसलन (Satzende)', type: 'Noun · plural' },
      { w: 'der', role: 'plain', en: 'of the', hi: 'के', type: 'Article · Genitiv' },
      { w: 'Geschichte', role: 'plain', en: 'history (Satzende)', hi: 'इतिहास (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'It is shortly after seven in the evening when a Politburo member misspeaks. From this moment on, this essay tells the events in the present tense. Thousands stream, that same night, towards the border crossings. What seemed like a misunderstanding back then is today considered one of history\'s most consequential slips of the tongue.',
    comprehension: [
      { q: 'Warum wechselt der Essay ins Präsens ("strömen")?', options: ['Für narrative Unmittelbarkeit (Historisches Präsens)', 'Weil das Präteritum grammatisch falsch wäre', 'Aus Versehen'], answer: 0 },
      { q: 'Welche Funktion hat "wirkte" im Kontrast zu "strömen"?', options: ['Es markiert die reflektierende, distanzierte Erzählstimme', 'Es zeigt eine Vermutung', 'Es ist ein Fehler'], answer: 0 },
      { q: 'Ist die Wahl der Zeitform hier automatisch oder bewusst?', options: ['Eine bewusste stilistische Entscheidung', 'Rein automatisch', 'Zufällig'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Literarischer Romanausschnitt', titleEn: 'Reading B — Literary novel excerpt',
    tokens: [
      { w: 'Sie', role: 'plain', en: 'she', hi: 'voh', type: 'Pronomen · Nom.' },
      { w: 'öffnet', role: 'r-erzaehlendes-praesens', en: 'opens (Narrative Present, used in the novel for dramatic immediacy)', hi: 'kholti hai (Narrative Present, dramatic immediacy)', type: 'Verb (Präsens, Satzende)' },
      { w: 'die', role: 'plain', en: 'the (fem. akk.)', hi: 'darwaaza', type: 'Article' },
      { w: 'Tür', role: 'plain', en: 'door (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'langsam', role: 'plain', en: 'slowly', hi: 'dheere se', type: 'Adverb' },
      { w: '.', plain: true }
    ],
    translation: 'She slowly opens the door.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_001_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Constanze, im Kommentar zum Wendejahr springst du ständig zwischen Präteritum und Präsens.', en: 'Constanze, in the commentary on the year of the Wende you keep jumping between preterite and present.' },
      { id: 'C2_001_L002', speaker: 'Constanze', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Bewusst — sobald die Zeitzeugin spricht, wechsle ich ins Präsens, damit ihre Erinnerung lebendig wirkt.', en: 'Deliberately — as soon as the witness speaks, I switch to present tense so her memory feels alive.' },
      { id: 'C2_001_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und danach fällst du wieder zurück ins Präteritum für die reine Chronologie?', en: 'And afterward you fall back into preterite for the plain chronology?' },
      { id: 'C2_001_L004', speaker: 'Constanze', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, so bleibt klar, was Erinnerung ist und was gesicherte Abfolge.', en: 'Exactly, that way it stays clear what is memory and what is established sequence.' }
    ],
    transcript: 'Constanze, im Kommentar zum Wendejahr springst du ständig zwischen Präteritum und Präsens. Bewusst — sobald die Zeitzeugin spricht, wechsle ich ins Präsens, damit ihre Erinnerung lebendig wirkt. Und danach fällst du wieder zurück ins Präteritum für die reine Chronologie? Genau, so bleibt klar, was Erinnerung ist und was gesicherte Abfolge.',
    translation: 'Constanze, in the commentary on the year of the Wende you keep jumping between preterite and present. Deliberately — as soon as the witness speaks, I switch to present tense so her memory feels alive. And afterward you fall back into preterite for the plain chronology? Exactly, that way it stays clear what is memory and what is established sequence.',
    tokens: [
      { w: 'Constanze' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'Kommentar' },
      { w: 'zum' },
      { w: 'Wendejahr' },
      { w: 'springst' },
      { w: 'du' },
      { w: 'ständig' },
      { w: 'zwischen' },
      { w: 'Präteritum' },
      { w: 'und' },
      { w: 'Präsens' },
      { w: '.', plain: true },
      { w: 'Bewusst' },
      { w: '—', plain: true },
      { w: 'sobald' },
      { w: 'die' },
      { w: 'Zeitzeugin' },
      { w: 'spricht' },
      { w: ',', plain: true },
      { w: 'wechsle' },
      { w: 'ich' },
      { w: 'ins' },
      { w: 'Präsens' },
      { w: ',', plain: true },
      { w: 'damit' },
      { w: 'ihre' },
      { w: 'Erinnerung' },
      { w: 'lebendig' },
      { w: 'wirkt' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'danach' },
      { w: 'fällst' },
      { w: 'du' },
      { w: 'wieder' },
      { w: 'zurück' },
      { w: 'ins' },
      { w: 'Präteritum' },
      { w: 'für' },
      { w: 'die' },
      { w: 'reine' },
      { w: 'Chronologie' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'bleibt' },
      { w: 'klar' },
      { w: ',', plain: true },
      { w: 'was' },
      { w: 'Erinnerung' },
      { w: 'ist' },
      { w: 'und' },
      { w: 'was' },
      { w: 'gesicherte' },
      { w: 'Abfolge' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wann wechselt Constanze ins Präsens?', qEn: 'When does Constanze switch to present tense?', options: ['für die ganze Dokumentation', 'sobald die Zeitzeugin spricht', 'nur am Anfang', 'nie'], optionsEn: ['for the whole documentation', 'as soon as the eyewitness speaks', 'only at the beginning', 'never'], answer: 1,
        explain: '"Sobald die Zeitzeugin spricht, wechsle ich ins Präsens."' },
      { q: 'Warum kehrt sie danach zum Präteritum zurück?', qEn: 'Why does she return to preterite afterward?', options: ['aus Versehen', 'für die reine Chronologie', 'weil das Präsens verboten ist', 'um Zeit zu sparen'], optionsEn: ['by accident', 'for pure chronology', 'because the present tense is forbidden', 'to save time'], answer: 1,
        explain: '"… fällst du wieder zurück ins Präteritum für die reine Chronologie."' }
    ]
  },
  speaking: [
    { task: "Constanze fragt, warum du im Kommentar zwischen Präteritum und Präsens springst.", taskEn: "Constanze asks why you jump between past and present in the commentary.", de: "Sobald die Zeitzeugin spricht, wechsle ich ins Präsens — das wirkt lebendiger.", en: "As soon as the witness speaks I switch to the present — that feels more vivid." },
    { task: "Erzähl der Redaktion das Wendejahr so, dass es unmittelbar wirkt.", taskEn: "Tell the editorial team about 1989 so it feels immediate.", de: "November 1989: die Menschen strömen zur Grenze, und die Wachen zögern.", en: "November 1989: people stream to the border, and the guards hesitate." },
    { task: "Ein Kollege ist seit Tagen nicht erreichbar. Formuliere eine Vermutung.", taskEn: "A colleague has been unreachable for days. Formulate an assumption.", de: "Er wird die Konferenz abgesagt und längst abgereist sein.", en: "He'll have cancelled the conference and left long ago." },
    { task: "Die Lektorin fragt, welche Perspektive das Präsens erzeugt.", taskEn: "The editor asks what perspective the present tense creates.", de: "Das Historische Präsens holt die Szene nah und nimmt der Erzählung die Distanz.", en: "The historical present brings the scene close and removes the narrative's distance." },
    { task: "Rollenspiel: Ihr redigiert einen Dokumentarfilm-Kommentar.", taskEn: "Role-play: you edit a documentary voice-over.", de: "Hier bleibt das Präsens, weil die Bilder laufen; im Rückblick nehmen wir das Plusquamperfekt.", en: "Here the present stays because the footage runs; in the flashback we take the past perfect." }
  ],
  writing: {
    prompt: 'TASK 1 — Rewrite (150 words): Rewrite a text using different tense perspectives (e.g. Präteritum narrative → Historical Present). Explain every stylistic change.\n\nTASK 2 — Transform (150 words): Rewrite a newspaper report as a literary narrative, shifting register and tense accordingly.\n\nTASK 3 — Essay (500 words): Write a C2 essay demonstrating sophisticated tense control across multiple registers (academic, journalistic, literary).',
    starters: ['1939 beginnt...', 'Er wird schon...', 'Die Studie zeigt, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über native-level Zeitwahl...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Why do historians write "1815 endet der Wiener Kongress" instead of "endete"?', options: ['To create narrative immediacy (Historical Present)', 'Because Präteritum is grammatically incorrect here', 'Because the Congress is still ongoing'], answer: 0, explain: 'The Historical Present is a deliberate stylistic choice for narrative vividness, not a grammatical requirement.' },
    gap: { sentence: ['Er ', ' schon angekommen sein.'], gaps: [ { answer: 'wird', accepts: ['wird'] } ], explain: '"Er wird schon angekommen sein" uses Futur II to express a confident assumption, not a literal future event.' },
    match: { q: 'Match each tense to its native function.', pairs: [ { noun: 'Präsens', art: 'Narrative / Future / Historical' }, { noun: 'Futur II', art: 'Completed Assumption' }, { noun: 'Perfekt', art: 'Conversation' }, { noun: 'Plusquamperfekt', art: 'Background' } ] },
    builder: { target: 'Build: "1939 begins the Second World War." (Historical Present)', bank: ['1939', 'beginnt', 'der', 'Zweite', 'Weltkrieg', '.'], answer: ['1939', 'beginnt', 'der', 'Zweite', 'Weltkrieg', '.'], roles: { '1939': 'r-historisches-praesens', 'beginnt': 'r-historisches-praesens' } },
    errorCorrection: { title: 'Error correction', wrong: 'Ich werde morgen nach Berlin fliegen werden.', right: 'Morgen fliege ich nach Berlin.', explain: 'With a clear time expression like "morgen", native speakers strongly prefer Präsens over the more formal, less natural Futur I.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for tense choice?', options: ['Imagine time as a camera — the event never changes, only the camera angle', 'Always use the grammatically simplest tense available', 'Futur I should be used as often as possible for clarity'], answer: 0, explain: 'Native speakers choose the tense that best serves their stylistic purpose, not simply "the correct" tense.' },
    { q: 'Why do historians use the Historical Present for completed events?', options: ['To create narrative immediacy and vividness', 'Because Präteritum would be grammatically wrong', 'Because the events are still happening'], answer: 0, explain: 'The Historical Present is a deliberate stylistic device, not a grammatical necessity.' },
    { q: 'What does "er wird schon angekommen sein" express?', options: ['A confident assumption about a completed action', 'A literal prediction about the future', 'A polite request'], answer: 0, explain: 'Futur II here functions epistemically, not as a literal future tense.' },
    { q: 'Why is "morgen fliege ich nach Berlin" preferred over "morgen werde ich nach Berlin fliegen"?', options: ['A clear time expression makes Präsens more natural than Futur I', 'Futur I is grammatically incorrect here', 'Präsens cannot refer to the future in German'], answer: 0, explain: 'German frequently uses Präsens with a time expression for planned future events.' },
    { q: 'What is a common C2 learner mistake regarding tense?', options: ['Overusing Futur I', 'Never using Präteritum', 'Avoiding Perfekt entirely'], answer: 0, explain: 'Learners often overuse Futur I where native speakers would prefer Präsens or an epistemic modal expression.' }
  ],
  takeaways: [
    { c: 'r-historisches-praesens', html: 'The Historical Present (1939 beginnt der Krieg) creates narrative immediacy for completed historical events — a deliberate stylistic choice, not a grammatical requirement.' },
    { c: 'r-vermutung', html: 'Futur I/II frequently expresses epistemic assumption (er wird schon angekommen sein), not literal future time — a defining C2 nuance.' },
    { c: 'r-perspektive', html: 'Tense choice is fundamentally about perspective and stylistic effect — the event never changes, only the "camera angle" used to narrate it.' }
  ],
  revisionTips: [
    'Take one Präteritum-narrated paragraph and rewrite it in the Historical Present, noting how the atmosphere changes.',
    'Practise distinguishing literal future statements from Futur-as-assumption by writing three of each and comparing them side by side.',
    'Read one German historical text and one German novel excerpt, and identify every deliberate tense shift you can find.'
  ]
};
window.CHAPTER = CHAPTER;
