/* KLARWEG CHAPTER DATA — C2 · Chapter 12
   "Passiv" (C2) — native-level mastery of passive constructions as
   tools for perspective control, information focus, agent suppression
   and register-appropriate objectivity. NOT werden+Partizip II
   formation or Vorgangspassiv/Zustandspassiv basics (already mastered
   A2/B2, C1 Ch26). Structural chapter: no standalone vocabulary list
   uploaded — vocabulary section drills authentic academic/scientific/
   legal/journalistic passive & passive-alternative constructions from
   Parts 5-8 of the brief. Dialogue: Isolde and Timo ONLY. */
const CHAPTER = {
  id: 'c2-12-passiv',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 12,
  title: 'Passiv',
  titleEn: 'The passive voice at native level',
  description: 'Active voice points the camera at the actor. Passive voice points it at the action or result. At C2, native speakers don\'t ask "can I use the passive?" — they ask "where should I point the camera?"',
  xp: 1475, time: 145, difficulty: 'Mastery',
  nextChapter: { number: 13, title: 'Passiversatzformen', titleEn: 'Alternatives to the passive' , href: 'chapter-c2-13-passiversatzformen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Passive voice is a decision about where the <em>camera</em> points.',
    intro: 'Editing a scientific research paper, Isolde and Timo decide sentence by sentence where to point the camera — active, passive, or nominal style — as the stable values are established and the hypothesis holds.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See how native speakers choose passive voice to control focus, objectivity, and responsibility, not just to remove a subject'],
    scene: 'Überarbeitung eines wissenschaftlichen Forschungsartikels',
    femaleSpeakers: ['Isolde'],
    dialogue: [
      { speaker: 'Isolde', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject (unpersönliches Passiv)' },
        { w: 'wurde', role: 'r-verb', en: 'was', hi: 'था', pron: 'VUR-duh', type: 'Verb · werden (Passiv Präteritum)' },
        { w: 'festgestellt', role: 'r-verb', en: 'established', hi: 'स्थापित', pron: 'FEST-ge-shtelt', type: 'Partizip II · Satzende', why: 'Es wurde festgestellt, dass … = a fixed impersonal-passive formula for reporting a finding (this chapter).', ex: 'Es wurde festgestellt, dass die Werte stabil sind.', exEn: 'It was established that the values are stable.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Werte', role: 'r-subject', en: 'values', hi: 'मान', pron: 'VAIR-tuh', type: 'Noun · plural' },
        { w: 'stabil', role: 'r-akkusativ', en: 'stable', hi: 'स्थिर', pron: 'shta-BEEL', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It was established that the values are stable.', hi: 'Yeh sthaapit kiya gaya ki maan sthir hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Proben', role: 'r-subject', en: 'samples', hi: 'नमूने', pron: 'PROH-ben', type: 'Noun · plural' },
        { w: 'wurden', role: 'r-verb', en: 'were', hi: 'थे', pron: 'VUR-den', type: 'Verb · werden (Passiv Präteritum, plural)' },
        { w: 'gründlich', role: 'r-akkusativ', en: 'thoroughly', hi: 'अच्छी तरह से', pron: 'GRÜNT-likh', type: 'Adverb' },
        { w: 'untersucht', role: 'r-verb', en: 'examined', hi: 'जांचे गए', pron: 'un-ter-ZOOKHT', type: 'Partizip II · Satzende', why: 'die Proben wurden untersucht = the samples were examined, standard passive lab formula (this chapter).', ex: 'die Proben wurden untersucht' },
        { w: '.', plain: true }
      ], en: 'The samples were thoroughly examined.', hi: 'Namoone achhi tarah se jaanche gaye.' },
      { speaker: 'Isolde', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'konnte', role: 'r-modalverb', en: 'could', hi: 'सका', pron: 'KON-tuh', type: 'Modal · können (Passiv Präteritum)' },
        { w: 'gezeigt', role: 'r-verb', en: 'shown', hi: 'दिखाया', pron: 'ge-TSYKT', type: 'Partizip II' },
        { w: 'werden', role: 'r-verb', en: 'be', hi: '', pron: 'VAIR-den', type: 'Verb · infinitive (Passiv, Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Hypothese', role: 'r-subject', en: 'hypothesis', hi: 'परिकल्पना', pron: 'hü-po-TAY-zuh', type: 'Noun · fem. (recycled C2)' },
        { w: 'zutrifft', role: 'r-verb', en: 'holds', hi: 'सही बैठती है', pron: 'TSOO-trift', type: 'Verb · zutreffen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It could be shown that the hypothesis holds.', hi: 'Yeh dikhaaya ja saka ki parikalpana sahi baithti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'lässt', role: 'r-verb', en: 'can be', hi: 'सकता है', pron: 'LEST', type: 'Verb · lassen (part of es lässt sich)' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'beobachten', role: 'r-verb', en: 'observed', hi: 'देखा जा', pron: 'be-OP-akh-ten', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Effekt', role: 'r-subject', en: 'effect', hi: 'प्रभाव', pron: 'e-FEKT', type: 'Noun · masc.' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'के साथ', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Zeit', role: 'r-dativ', en: 'time (dat.)', hi: 'समय के साथ', pron: 'tsyte', type: 'Noun · fem. dat.' },
        { w: 'zunimmt', role: 'r-verb', en: 'increases', hi: 'बढ़ता है', pron: 'TSOO-nimt', type: 'Verb · zunehmen (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It can be observed that the effect increases with time.', hi: 'Yeh dekha ja sakta hai ki prabhaav samay ke saath badhta hai.' },
      { speaker: 'Isolde', tokens: [
        { w: 'Nach', role: 'r-preposition', en: 'according to', hi: 'के अनुसार', pron: 'nahkh', type: 'Preposition (part of nach Angaben)' },
        { w: 'Angaben', role: 'r-akkusativ', en: 'information', hi: 'जानकारी', pron: 'AN-gah-ben', type: 'Noun · plural', why: 'nach Angaben ... = according to (the) information from ..., a formal attribution phrase (this chapter).', ex: 'Nach Angaben des Labors ist der Test bestanden.', exEn: 'According to the laboratory information, the test is passed.' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Labors', role: 'r-dativ', en: 'laboratory (gen.)', hi: 'प्रयोगशाला के', pron: 'LAH-bors', type: 'Noun · neut. genitive' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Test', role: 'r-subject', en: 'test', hi: 'परीक्षण', pron: 'test', type: 'Noun · masc.' },
        { w: 'bestanden', role: 'r-verb', en: 'passed', hi: 'उत्तीर्ण', pron: 'be-SHTAN-den', type: 'Partizip II (Satzende)' },
        { w: '.', plain: true }
      ], en: 'According to the laboratory information, the test is passed.', hi: 'Prayogshaala ki jaankaari ke anusaar, test uttirn hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'vermutet', role: 'r-verb', en: 'suspected', hi: 'अनुमान', pron: 'fer-MOO-tet', type: 'Partizip II · Satzende', why: 'es wird vermutet, dass … = it is suspected that, formal impersonal passive (this chapter).', ex: 'Es wird vermutet, dass die Ergebnisse verallgemeinerbar sind.', exEn: 'It is suspected that the results are generalizable.' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'Ergebnisse', role: 'r-subject', en: 'results', hi: 'परिणाम', pron: 'er-GAYP-ni-suh', type: 'Noun · plural' },
        { w: 'verallgemeinerbar', role: 'r-akkusativ', en: 'generalizable', hi: 'सामान्यीकरण योग्य', pron: 'fer-al-ge-my-NER-bahr', type: 'Adjective' },
        { w: 'sind', role: 'r-verb', en: 'are', hi: 'हैं', pron: 'zint', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It is suspected that the results are generalizable.', hi: 'Anumaan hai ki parinaam saamaanyikaran yogya hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every sentence is a <span class="de r-kamera-metapher">camera shot</span> — active points at the actor, passive points at the process.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is PASSIV at C2 level — native-level mastery of passive constructions as tools for PERSPECTIVE CONTROL, INFORMATION FOCUS, AGENT SUPPRESSION, and register-appropriate OBJECTIVITY, NOT werden+Partizip-II formation or the basic Vorgangspassiv/Zustandspassiv distinction (already fully mastered A2/B2 and C1 Ch26). Covered: the event → perspective → focus → reader attention → chosen voice model, comparing "Die Forscher untersuchten die Daten" (active, actor focus) with "Die Daten wurden untersucht" (passive, process focus); when the agent is irrelevant, unknown, obvious, or intentionally hidden; the full spectrum of passive alternatives — passive → man → lassen → sein+zu → sich lassen → Partizipialattribute → Nominalisierung — and which sounds most natural in which context; authentic academic passive style (Es wurde festgestellt..., Es konnte gezeigt werden..., Es lässt sich beobachten..., Die Ergebnisse wurden analysiert...); scientific research language (Die Daten wurden erhoben, Die Proben wurden untersucht, Es konnte nachgewiesen werden, Die Hypothese wurde überprüft); legal/administrative passive (Der Antrag wurde genehmigt, Es ist zu beachten, Es wird darauf hingewiesen, Die Frist ist einzuhalten) for institutional neutrality; journalistic passive (Es wurde berichtet, Nach Angaben, Es wird vermutet, Die Ermittlungen wurden aufgenommen) for responsible reporting; and literary passive for atmosphere, mystery, and emotional distance. The most important things to catch: translating English passive constructions literally into German rather than choosing the natural German equivalent; using unnecessary passive where active voice is clearer and more direct; unintentionally hiding responsibility/agency through passive when the writer should be explicit; passive overload (too many consecutive passive sentences, reading as stiff or bureaucratic); mismatched register (informal passive alternatives in legal writing, or bureaucratic passive in casual prose); ignoring passive alternatives (man, lassen, sein+zu, sich lassen, nominalization) where they would sound more natural or more precise than werden-passive. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag literal English-to-German passive translation; flag unnecessary/unnatural passive where active voice or a passive alternative fits better; flag unintentional agent-hiding that obscures responsibility; flag passive overload across consecutive sentences; flag register-mismatched passive choices. Do NOT flag basic passive formation (werden + Partizip II, tense) as the primary issue unless clearly wrong — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around focus/perspective/register). If none: <li>No errors — well done.</li> 3) <p><b>Camera check:</b> one sentence on whether the learner deliberately chooses where to "point the camera" (actor vs. process) rather than defaulting to passive or active by habit.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you deliberately choose where to point the camera in every sentence. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Perspective Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: native speakers don\'t ask "can I use the passive?" — they ask "where should I point the camera?"' },
  parserSentence: [ { w: 'Es', role: 'plain' }, { w: 'konnte', role: 'r-passiv-akademisch' }, { w: 'gezeigt', role: 'r-passiv-akademisch' }, { w: 'werden', role: 'r-passiv-akademisch' }, { w: ',', plain: true }, { w: 'dass', role: 'plain' }, { w: 'die', role: 'plain' }, { w: 'Hypothese', role: 'plain' }, { w: 'zutrifft', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every sentence is a camera shot — active points at the actor, passive points at the process.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Isolde and Timo edit a research paper, deciding sentence by sentence where to focus the reader\'s attention.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic academic, scientific, legal, and journalistic passive constructions — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master perspective management, agent suppression, passive alternatives, and register-based passive selection.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze a scientific research article, government policy document, and literary excerpt for passive usage.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify passive constructions, active alternatives, and institutional language in a lecture, conference, and press briefing.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice presenting research, reformulating active/passive structures, and discussing information focus.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite for passive/active balance, replace unnecessary passives, and write a 600-word academic article.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill active vs. passive analysis, information focus, agent suppression, and register-based editing.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1475 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter passive and passive-alternative constructions with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '14 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Information focus, agent suppression, and register selection drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '20 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Perspective Model, Information Focus Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '16 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Daten wurden untersucht.', text: 'Choose passive voice to place the process, not the actor, in focus' },
    { de: 'Es konnte gezeigt werden, dass...', text: 'Use authentic academic passive alternatives for objectivity' },
    { de: 'Die Frist ist einzuhalten.', text: 'Use sein+zu for institutional/legal neutrality' },
    { de: 'Es wird vermutet, dass...', text: 'Use journalistic passive for responsible, agent-neutral reporting' },
    { de: 'Wohin soll ich die Kamera richten?', text: 'Understand the chapter\'s core "camera" metaphor for perspective control' }
  ],
  vocab: [
    { de: 'Es wurde festgestellt, dass ...', pos: 'academic passive construction', level: 'C2', register: 'academic', en: 'it was established/found that ...', hi: 'यह स्थापित किया गया कि ...', synonyms: 'Es zeigte sich, dass ...', antonyms: null, ex: 'Es wurde festgestellt, dass die Ergebnisse konsistent sind.', exEn: 'It was established that the results are consistent.', exHi: 'Yeh sthaapit kiya gaya ki parinaam consistent hain.', ex2: 'In der Studie wurde festgestellt, dass externe Faktoren eine Rolle spielten.', ex2En: 'In the study it was established that external factors played a role.', ex2Hi: 'Study mein sthaapit kiya gaya ki bahri factors ne bhoomika nibhaayi.' },
    { de: 'Es konnte gezeigt werden, dass ...', pos: 'academic passive construction', level: 'C2', register: 'academic', en: 'it could be shown that ...', hi: 'यह दिखाया जा सका कि ...', synonyms: 'Es ließ sich zeigen, dass ...', antonyms: null, ex: 'Es konnte gezeigt werden, dass die Hypothese zutrifft.', exEn: 'It could be shown that the hypothesis holds.', exHi: 'Yeh dikhaaya jaa saka ki hypothesis sahi hai.', ex2: 'Anhand der Daten konnte gezeigt werden, dass ein Zusammenhang besteht.', ex2En: 'On the basis of the data it could be shown that a connection exists.', ex2Hi: 'Data ke aadhaar par yeh dikhaaya jaa saka ki ek sambandh hai.' },
    { de: 'Es lässt sich beobachten, dass ...', pos: 'academic passive-alternative construction', level: 'C2', register: 'academic', en: 'it can be observed that ...', hi: 'यह देखा जा सकता है कि ...', synonyms: 'Man kann beobachten, dass ...', antonyms: null, ex: 'Es lässt sich beobachten, dass jüngere Teilnehmer anders reagieren.', exEn: 'It can be observed that younger participants react differently.', exHi: 'Yeh dekha jaa sakta hai ki chhote prathibhaagi alag pratikriya dete hain.', ex2: 'Über mehrere Jahre hinweg lässt sich beobachten, dass die Werte steigen.', ex2En: 'Over several years it can be observed that the values are rising.', ex2Hi: 'Kai saalon mein yeh dekha jaa sakta hai ki values badh rahe hain.' },
    { de: 'die Ergebnisse wurden analysiert', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'the results were analyzed', hi: 'परिणामों का विश्लेषण किया गया', synonyms: null, antonyms: null, ex: 'Die Ergebnisse wurden analysiert und mit früheren Studien verglichen.', exEn: 'The results were analyzed and compared with earlier studies.', exHi: 'Parinaamon ka vishleshan kiya gaya aur pehle ke studies se compare kiya gaya.', ex2: 'Die Ergebnisse wurden anschließend statistisch analysiert.', ex2En: 'The results were subsequently analyzed statistically.', ex2Hi: 'Parinaamon ka baad mein statistical vishleshan kiya gaya.' },
    { de: 'die Daten wurden erhoben', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'the data were collected', hi: 'डेटा एकत्र किया गया', synonyms: null, antonyms: null, ex: 'Die Daten wurden über einen Zeitraum von zwei Jahren erhoben.', exEn: 'The data were collected over a period of two years.', exHi: 'Data do saal ki avadhi mein ikattha kiya gaya.', ex2: 'Die Daten wurden anonymisiert erhoben.', ex2En: 'The data were collected anonymously.', ex2Hi: 'Data anonymous roop se ikattha kiya gaya.' },
    { de: 'die Proben wurden untersucht', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'the samples were examined', hi: 'नमूनों की जांच की गई', synonyms: null, antonyms: null, ex: 'Die Proben wurden im Labor untersucht.', exEn: 'The samples were examined in the laboratory.', exHi: 'Namoonon ki laboratory mein jaanch ki gayi.', ex2: 'Alle Proben wurden nach demselben Verfahren untersucht.', ex2En: 'All samples were examined according to the same procedure.', ex2Hi: 'Sabhi namoonon ki usi prakriya ke anusaar jaanch ki gayi.' },
    { de: 'es konnte nachgewiesen werden', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'it could be proven/demonstrated', hi: 'यह सिद्ध किया जा सका', synonyms: 'es wurde nachgewiesen', antonyms: null, ex: 'Es konnte nachgewiesen werden, dass die beiden Faktoren korrelieren.', exEn: 'It could be demonstrated that the two factors correlate.', exHi: 'Yeh sabit kiya jaa saka ki dono factors correlate karte hain.', ex2: 'Erst durch die neue Methode konnte nachgewiesen werden, dass der Effekt real ist.', ex2En: 'Only through the new method could it be demonstrated that the effect is real.', ex2Hi: 'Sirf naye method se hi yeh sabit kiya jaa saka ki prabhaav asli hai.' },
    { de: 'die Hypothese wurde überprüft', pos: 'scientific passive construction', level: 'C2', register: 'scientific', en: 'the hypothesis was tested', hi: 'परिकल्पना की जांच की गई', synonyms: null, antonyms: null, ex: 'Die Hypothese wurde anhand mehrerer Experimente überprüft.', exEn: 'The hypothesis was tested through several experiments.', exHi: 'Hypothesis ki kai experiments ke zariye jaanch ki gayi.', ex2: 'Die Hypothese wurde in einer Folgestudie erneut überprüft.', ex2En: 'The hypothesis was tested again in a follow-up study.', ex2Hi: 'Hypothesis ki ek follow-up study mein dobara jaanch ki gayi.' },
    { de: 'der Antrag wurde genehmigt', pos: 'legal/administrative passive construction', level: 'C2', register: 'legal/administrative', en: 'the application was approved', hi: 'आवेदन मंजूर किया गया', synonyms: null, antonyms: 'der Antrag wurde abgelehnt', ex: 'Der Antrag wurde nach eingehender Prüfung genehmigt.', exEn: 'The application was approved after thorough review.', exHi: 'Application gehri jaanch ke baad mansoor ki gayi.', ex2: 'Der Antrag wurde unter bestimmten Auflagen genehmigt.', ex2En: 'The application was approved subject to certain conditions.', ex2Hi: 'Application kuch shartein ke saath mansoor ki gayi.' },
    { de: 'es ist zu beachten', pos: 'legal/administrative passive-alternative (sein+zu)', level: 'C2', register: 'legal/administrative', en: 'it is to be noted/observed', hi: 'यह ध्यान देने योग्य है', synonyms: 'es muss beachtet werden', antonyms: null, ex: 'Es ist zu beachten, dass die Frist am Monatsende endet.', exEn: 'It is to be noted that the deadline ends at the end of the month.', exHi: 'Yeh dhyaan dene yogya hai ki deadline mahine ke ant mein khatam hoti hai.', ex2: 'Es ist zu beachten, dass Ausnahmen gesondert geregelt sind.', ex2En: 'It is to be noted that exceptions are regulated separately.', ex2Hi: 'Yeh dhyaan dene yogya hai ki apvaad alag se niyantrit hain.' },
    { de: 'es wird darauf hingewiesen', pos: 'legal/administrative passive construction', level: 'C2', register: 'legal/administrative', en: 'it is pointed out that', hi: 'यह इंगित किया जाता है कि', synonyms: null, antonyms: null, ex: 'Es wird darauf hingewiesen, dass verspätete Anträge nicht bearbeitet werden.', exEn: 'It is pointed out that late applications will not be processed.', exHi: 'Yeh ingit kiya jaata hai ki der se aaye applications process nahi honge.', ex2: 'Es wird darauf hingewiesen, dass sich die Öffnungszeiten geändert haben.', ex2En: 'It is pointed out that opening hours have changed.', ex2Hi: 'Yeh ingit kiya jaata hai ki opening hours badal gaye hain.' },
    { de: 'die Frist ist einzuhalten', pos: 'legal/administrative passive-alternative (sein+zu)', level: 'C2', register: 'legal/administrative', en: 'the deadline is to be observed/met', hi: 'समय सीमा का पालन करना है', synonyms: 'die Frist muss eingehalten werden', antonyms: null, ex: 'Die Frist ist strikt einzuhalten.', exEn: 'The deadline is to be strictly observed.', exHi: 'Deadline ka saktee se paalan karna hai.', ex2: 'Die gesetzliche Frist ist ohne Ausnahme einzuhalten.', ex2En: 'The statutory deadline is to be observed without exception.', ex2Hi: 'Kaanooni deadline ka bina apvaad ke paalan karna hai.' },
    { de: 'es wurde berichtet, dass ...', pos: 'journalistic passive construction', level: 'C2', register: 'journalism', en: 'it was reported that ...', hi: 'यह रिपोर्ट किया गया कि ...', synonyms: 'nach Berichten ...', antonyms: null, ex: 'Es wurde berichtet, dass die Verhandlungen gescheitert seien.', exEn: 'It was reported that the negotiations had failed.', exHi: 'Yeh report kiya gaya ki baatcheet vifal ho gayi thi.', ex2: 'Es wurde berichtet, dass mehrere Personen verletzt wurden.', ex2En: 'It was reported that several people were injured.', ex2Hi: 'Yeh report kiya gaya ki kai log ghayal hue.' },
    { de: 'nach Angaben ...', pos: 'journalistic passive-alternative construction', level: 'C2', register: 'journalism', en: 'according to statements/reports of ...', hi: '... के अनुसार', synonyms: 'laut ..., demnach', antonyms: null, ex: 'Nach Angaben der Behörde wurden alle Auflagen erfüllt.', exEn: 'According to the authority, all requirements were met.', exHi: 'Adhikaari ke anusaar, sabhi zarurten poori ki gayin.', ex2: 'Nach Angaben von Augenzeugen kam es zu einem Unfall.', ex2En: 'According to eyewitnesses, an accident occurred.', ex2Hi: 'Chashmadeed gawaahon ke anusaar, ek durghatna hui.' },
    { de: 'es wird vermutet, dass ...', pos: 'journalistic passive construction', level: 'C2', register: 'journalism', en: 'it is suspected/assumed that ...', hi: 'यह अनुमान लगाया जाता है कि ...', synonyms: 'man vermutet, dass ...', antonyms: null, ex: 'Es wird vermutet, dass technische Probleme die Ursache waren.', exEn: 'It is suspected that technical problems were the cause.', exHi: 'Yeh anumaan lagaaya jaata hai ki technical samasyaayein kaaran thin.', ex2: 'Es wird vermutet, dass die Zahl der Betroffenen höher liegt.', ex2En: 'It is suspected that the number of those affected is higher.', ex2Hi: 'Yeh anumaan lagaaya jaata hai ki prabhaavit logon ki sankhya zyaada hai.' },
    { de: 'die Ermittlungen wurden aufgenommen', pos: 'journalistic passive construction', level: 'C2', register: 'journalism/legal', en: 'investigations were opened', hi: 'जांच शुरू की गई', synonyms: null, antonyms: 'die Ermittlungen wurden eingestellt', ex: 'Die Ermittlungen wurden umgehend aufgenommen.', exEn: 'Investigations were opened immediately.', exHi: 'Jaanch turant shuru ki gayi.', ex2: 'Nach dem Vorfall wurden die Ermittlungen aufgenommen.', ex2En: 'After the incident, investigations were opened.', ex2Hi: 'Ghatna ke baad, jaanch shuru ki gayi.' }
  ],
  grammar: [
    { title: 'Warum Passiv existiert (Why Passive Exists)', body: [ 'Event → Perspective → Focus → Reader Attention → Chosen Voice. "Die Forscher untersuchten die Daten" (active) vs. "Die Daten wurden untersucht" (passive) — the second is preferred in academic contexts because it foregrounds the process, not the actor.' ], hinglish: 'Passive ka kaam hai spotlight hatana \u2014 karne wale se hatakar kaam par. <span class="de">Die Forscher untersuchten die Daten</span> mein focus researchers par hai, aur <span class="de">Die Daten wurden untersucht</span> mein kaam par. Isliye academic writing mein passive itna aata hai: wahan yeh batana zaroori nahi hota ki kisne kiya, balki yeh ki kya hua.' },
    { title: 'Agentenunterdrückung (Agent Suppression)', body: [ 'The agent is suppressed when it is irrelevant, unknown, obvious, or intentionally hidden. Native speakers make this a deliberate stylistic choice, not an automatic grammatical default.' ], hinglish: 'Karne wale ko chhodna chaar wajah se hota hai \u2014 woh zaroori nahi, pata nahi, saaf zaahir hai, ya jaan-boojhkar chhupaya jaa raha hai. Yeh aakhri wajah C2 par khaas hai: passive se zimmedaari dhundhli ho jaati hai. Isliye agar zimmedaari batani zaroori ho, to active use karo ya <b>von</b> + Dativ se agent naam le lo.' },
    { title: 'Passiv-Alternativen (Passive Alternatives)', body: [ 'Passive → man → lassen → sein+zu → sich lassen → Partizipialattribute → Nominalisierung. Each alternative shifts formality and focus slightly differently; choosing among them is a hallmark of native fluency.' ], hinglish: 'Yeh sab passive ka kaam karte hain, par har ek ka apna matlab hai \u2014 aur yahi chunav C2 par dekha jaata hai. <b>man</b> tab jab koi bhi kar sakta ho. <b>sich lassen</b> tab jab batana ho ki kuch <b>ho sakta hai</b>. <b>sein + zu</b> tab jab kuch <b>karna hai</b> \u2014 yeh official writing mein bahut aata hai. Aur <b>Nominalisierung</b> sabse formal hai. Inhe aapas mein badla nahi jaa sakta.' },
    { title: 'Register-spezifischer Passivgebrauch (Register-Specific Passive Use)', body: [ 'Har register ka apna passive hai. Academic mein <span class="de">Es wurde festgestellt, dass \u2026</span> aur <span class="de">Es konnte gezeigt werden, dass \u2026</span>. Official documents mein <b>sein + zu</b> \u2014 <span class="de">Es ist zu beachten</span>, <span class="de">Die Frist ist einzuhalten</span>. Aur news mein <span class="de">Es wird vermutet, dass \u2026</span>, jo hedge ka kaam karta hai. Dhyaan do ki <b>es</b> yahan sirf position 1 bharta hai \u2014 koi doosri cheez aage aaye to woh gayab ho jaata hai.' ], hinglish: 'Har register ka apna passive hai. Academic mein <span class="de">Es wurde festgestellt, dass \u2026</span> aur <span class="de">Es konnte gezeigt werden, dass \u2026</span>. Official documents mein <b>sein + zu</b> \u2014 <span class="de">Es ist zu beachten</span>, <span class="de">Die Frist ist einzuhalten</span>. Aur news mein <span class="de">Es wird vermutet, dass \u2026</span>, jo hedge ka kaam karta hai. Dhyaan do ki <b>es</b> yahan sirf position 1 bharta hai \u2014 koi doosri cheez aage aaye to woh gayab ho jaata hai.' },
    {
      title: 'Die Formen der Alternativen',
      body: [
        'The chapter names seven structures but never shows how each is built \u2014 and the errors above are almost all about mixing two of them.',
        'Each alternative also carries a specific meaning: possibility, obligation, or a general agent. They are not interchangeable.'
      ],
      table: {
        head: ['Structure', 'Form', 'Meaning'],
        rows: [
          ['Vorgangspassiv', 'werden + Partizip II', '<span class="de">Die Daten werden ausgewertet.</span> \u2014 process'],
          ['Vorgangspassiv Perfekt', 'sein + Partizip II + <b>worden</b>', '<span class="de">Die Daten sind ausgewertet worden.</span>'],
          ['Zustandspassiv', 'sein + Partizip II', '<span class="de">Die Daten sind gespeichert.</span> \u2014 resulting state'],
          ['sich lassen', 'l\u00e4sst sich + <b>Infinitiv</b>', '<span class="de">Das Problem l\u00e4sst sich l\u00f6sen.</span> \u2014 possibility'],
          ['sein + zu + Infinitiv', 'ist + <b>zu</b> + Infinitiv', '<span class="de">Die Frist ist einzuhalten.</span> \u2014 obligation'],
          ['man', 'man + active verb', '<span class="de">Man l\u00f6st das Problem.</span> \u2014 general agent'],
          ['Nominalisierung', 'noun + Genitiv attribute', '<span class="de">die Auswertung der Daten</span> \u2014 maximum formality']
        ]
      },
      note: 'The two forms to get exactly right: <b>worden</b> (passive) versus <b>geworden</b> (<i>werden</i> = become), and the <b>zu</b> inside a separable verb \u2014 <i>einzuhalten</i>, <i>vorzulegen</i>, <i>einzureichen</i>.',
      hinglish: 'Chapter saat structures ka naam leta hai par yeh nahi batata ki har ek banti kaise hai \u2014 aur upar wali lagbhag saari galtiyan do structures ko mila dene se hoti hain. Do cheezein sabse zyada galat hoti hain. Pehli \u2014 passive ke Perfekt mein <b>worden</b> aata hai, kabhi <i>geworden</i> nahi; <i>geworden</i> to <i>werden</i> ka apna matlab hai, \u201cbanna\u201d. Doosri \u2014 <b>sein + zu</b> mein <b>zu</b> zaroori hai, aur separable verb ho to woh word ke andar chala jaata hai: <b>ein<b>zu</b>halten</b>. Aur har alternative ka apna matlab hai \u2014 <b>sich lassen</b> sambhavna (uske baad plain infinitive), <b>sein + zu</b> zimmedaari, aur <b>man</b> jab koi bhi kar sakta ho. Inhe aapas mein badla nahi jaa sakta.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to its main purpose and typical register.' ], table: { head: ['Structure', 'Main Purpose', 'Typical Register'], rows: [ ['Active', 'Agent Focus', 'Conversation'], ['Passive', 'Process Focus', 'Academic'], ['man', 'General Agent', 'Everyday'], ['sein + zu', 'Obligation', 'Administrative'], ['sich lassen', 'Possibility', 'Academic'], ['Nominalization', 'Formal Objectivity', 'Scientific'] ] }, hinglish: 'Structure, purpose aur register ka table \u2014 pehle tay karo ki tumhe process batana hai, haalat batani hai, sambhavna ya zimmedaari, phir usi hisaab se form chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Every one of these combines two structures that each already do the job \u2014 <i>worden</i> with <i>geworden</i>, a passive after <b>sich lassen</b>, <b>man</b> with a passive, or a process form where a state is meant. Pick one and the sentence works.' ], mistakes: [
      { wrong: 'Die Daten sind ausgewertet geworden.', right: 'Die Daten sind ausgewertet worden.', why: 'The Perfekt of the Vorgangspassiv takes <b>worden</b>, never <i>geworden</i> \u2014 geworden belongs to <i>werden</i> in its own sense \u201cto become\u201d.' },
      { wrong: 'Das Problem l\u00e4sst sich gel\u00f6st werden.', right: 'Das Problem l\u00e4sst sich l\u00f6sen.', why: '<b>sich lassen</b> already carries the passive meaning, so it takes a plain infinitive \u2014 never a passive after it.' },
      { wrong: 'Die Frist ist einhalten.', right: 'Die Frist ist einzuhalten.', why: 'In <b>sein + zu + Infinitiv</b> the <b>zu</b> is compulsory \u2014 and with a separable verb it goes inside the word: <i>ein<b>zu</b>halten</i>.' },
      { wrong: 'Man wird das Problem gel\u00f6st.', right: 'Man l\u00f6st das Problem. / Das Problem wird gel\u00f6st.', why: '<b>man</b> is already an active substitute for the passive \u2014 combining it with a passive form gives one clause two competing structures.' },
      { wrong: 'Es wurde festgestellt, dass die Werte gestiegen sind, und die Daten sind vollst\u00e4ndig geworden.', right: 'Es wurde festgestellt, dass die Werte gestiegen sind, und die Daten sind vollst\u00e4ndig.', why: 'Here <b>sind vollst\u00e4ndig</b> is a simple state, not a passive. Adding <i>geworden</i> turns it into \u201cthe data became complete\u201d, which is not what is meant.' },
      { wrong: 'Die T\u00fcr wird geschlossen \u2014 seit gestern.', right: 'Die T\u00fcr ist geschlossen \u2014 seit gestern.', why: 'A lasting state takes the Zustandspassiv (<b>ist</b> geschlossen). <i>wird geschlossen</i> describes the act of closing, which cannot last since yesterday.' }
    ], hinglish: 'Chhe ki chhe galtiyan ek hi tarah ki hain \u2014 do structures mila dena, jabki dono apne aap mein poore hain. <i>worden</i> ke saath <i>geworden</i>, <b>sich lassen</b> ke baad passive, <b>man</b> ke saath passive, ya haalat ki jagah process wali form. Ek chuno, aur sentence theek ho jaayega.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What deserves the reader\'s attention? The actor? Use active. The process? Use passive. Need a more elegant alternative? Use a passive alternative or nominal style.' ], note: 'Memory trick: imagine every sentence is a camera shot. Active voice points the camera at the actor. Passive voice points it at the action or result. Passive alternatives change the camera angle even further. At C2, native speakers don\'t ask "can I use the passive?" — they ask "where should I point the camera?"', hinglish: 'Pehle poochho \u2014 reader ka dhyaan kis par hona chahiye? Karne wale par to active, kaam par to passive. Kaam ho chuka hai aur haalat batani hai to <b>ist</b> + Partizip II. Sambhavna batani hai to <b>sich lassen</b>, aur zimmedaari to <b>sein + zu</b>. Aur likhne ke baad ek baar dekho: kahin do structures ek saath to nahi lag gaye?' }
  ],
  reading: {
    title: 'Fachjournal: Neue Erkenntnisse zur Proteinfaltung',
    titleEn: 'Reading A — Journal: new findings on protein folding',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Daten', role: 'plain', en: 'data', hi: 'डेटा', type: 'Noun · plural' },
      { w: 'wurden', role: 'r-passiv-akademisch', en: 'were (part of the passive construction, foregrounding the process, not the researchers)', hi: '(passive construction)', type: 'Verb (Präteritum, Passiv)' },
      { w: 'über', role: 'plain', en: 'over', hi: '', type: 'Präposition · Akk.' },
      { w: 'zwei', role: 'plain', en: 'two', hi: 'दो', type: 'Zahl' },
      { w: 'Jahre', role: 'plain', en: 'years', hi: 'साल', type: 'Noun · plural' },
      { w: 'hinweg', role: 'plain', en: '(duration marker, Satzende)', hi: '(Satzende)', type: 'Adverb (Satzende)' },
      { w: 'erhoben', role: 'r-passiv-akademisch', en: 'collected (Satzende, completing the passive construction)', hi: 'एकत्र किया गया (Satzende)', type: 'Partizip II (Satzende)', why: 'The passive "wurden erhoben" foregrounds the data-collection process, keeping the researchers (the agent) in the background — appropriate for objective scientific reporting.' },
      { w: '.', plain: true },
      { w: 'Es', role: 'r-passiv-akademisch', en: 'it (part of the fixed academic passive construction)', hi: '(academic construction)', type: 'Pronomen · Nom.' },
      { w: 'konnte', role: 'r-passiv-akademisch', en: 'could be (part of the construction)', hi: '(construction का हिस्सा)', type: 'Modalverb (Präteritum)' },
      { w: 'gezeigt', role: 'r-passiv-akademisch', en: 'shown (part of the construction)', hi: '(construction का हिस्सा)', type: 'Partizip II' },
      { w: 'werden', role: 'r-passiv-akademisch', en: 'be (Satzende, completing "es konnte gezeigt werden")', hi: '(Satzende, academic passive)', type: 'Verb (Infinitiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Faltungshypothese', role: 'plain', en: 'folding hypothesis', hi: 'फोल्डिंग परिकल्पना', type: 'Noun · fem.' },
      { w: 'zutrifft', role: 'plain', en: 'holds/applies (Satzende)', hi: 'सही साबित होती है (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The data were collected over two years. It could be shown that the folding hypothesis holds.',
    comprehension: [
      { q: 'Warum wird "die Daten wurden erhoben" statt "die Forscher erhoben die Daten" verwendet?', options: ['Um den Prozess statt der Akteure in den Fokus zu rücken', 'Weil die aktive Form grammatisch falsch wäre', 'Aus Zufall'], answer: 0 },
      { q: 'Welche Funktion hat "es konnte gezeigt werden"?', options: ['Eine akademische Passivkonstruktion für objektive Aussagen', 'Eine restriktive Relativsatzkonstruktion', 'Ein Diskursmarker für Kontrast'], answer: 0 },
      { q: 'Wird in diesem Auszug der Akteur (die Forscher) genannt?', options: ['Nein, der Akteur wird bewusst unterdrückt', 'Ja, ausführlich', 'Nur teilweise'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungspolitikdokument', titleEn: 'Reading B — Government policy document',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Antrag', role: 'plain', en: 'application', hi: 'application', type: 'Noun · masc.' },
      { w: 'wurde', role: 'r-passiv-legal', en: 'was (part of the legal/administrative passive construction)', hi: '(legal/administrative construction)', type: 'Verb (Präteritum, Passiv)' },
      { w: 'nach', role: 'plain', en: 'after', hi: 'ke baad', type: 'Präposition · Dat.' },
      { w: 'eingehender', role: 'plain', en: 'thorough', hi: 'gehri', type: 'Adjective · Dat.' },
      { w: 'Prüfung', role: 'plain', en: 'review', hi: 'jaanch', type: 'Noun · fem. · Dat.' },
      { w: 'genehmigt', role: 'r-passiv-legal', en: 'approved (Satzende, completing the institutional passive construction)', hi: '(Satzende, institutional passive)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Frist', role: 'plain', en: 'deadline', hi: 'deadline', type: 'Noun · fem.' },
      { w: 'ist', role: 'r-passiv-legal', en: 'is (part of the sein+zu passive alternative)', hi: '(sein+zu passive alternative)', type: 'Verb (Präsens)' },
      { w: 'strikt', role: 'plain', en: 'strictly', hi: 'saktee se', type: 'Adverb' },
      { w: 'einzuhalten', role: 'r-passiv-legal', en: 'to be observed (Satzende, completing "ist einzuhalten" — an institutional obligation construction)', hi: '(Satzende, obligation construction)', type: 'Verb (zu-Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The application was approved after thorough review. The deadline is to be strictly observed.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_012_L001', speaker: 'Isolde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, im Ergebnisteil steht "wir haben die Werte gemessen" — das lenkt zu sehr auf uns.', en: 'Timo, in the results section it says "we measured the values" — that focuses too much on us.' },
      { id: 'C2_012_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Machen wir daraus "die Werte wurden unter kontrollierten Bedingungen gemessen".', en: 'Let\'s turn that into "the values were measured under controlled conditions".' },
      { id: 'C2_012_L003', speaker: 'Isolde', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und die Hypothese? "Wir bestätigen sie" klingt fast zu selbstsicher.', en: 'And the hypothesis? "We confirm it" sounds almost too self-assured.' },
      { id: 'C2_012_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: '"Die Hypothese wird durch die Ergebnisse gestützt" — das lässt den Daten den Vortritt.', en: '"The hypothesis is supported by the results" — that lets the data take precedence.' }
    ],
    transcript: 'Timo, im Ergebnisteil steht "wir haben die Werte gemessen" — das lenkt zu sehr auf uns. Machen wir daraus "die Werte wurden unter kontrollierten Bedingungen gemessen". Und die Hypothese? "Wir bestätigen sie" klingt fast zu selbstsicher. "Die Hypothese wird durch die Ergebnisse gestützt" — das lässt den Daten den Vortritt.',
    translation: 'Timo, in the results section it says "we measured the values" — that focuses too much on us. Let\'s turn that into "the values were measured under controlled conditions". And the hypothesis? "We confirm it" sounds almost too self-assured. "The hypothesis is supported by the results" — that lets the data take precedence.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'Ergebnisteil' },
      { w: 'steht' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'wir' },
      { w: 'haben' },
      { w: 'die' },
      { w: 'Werte' },
      { w: 'gemessen' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'lenkt' },
      { w: 'zu' },
      { w: 'sehr' },
      { w: 'auf' },
      { w: 'uns' },
      { w: '.', plain: true },
      { w: 'Machen' },
      { w: 'wir' },
      { w: 'daraus' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'Werte' },
      { w: 'wurden' },
      { w: 'unter' },
      { w: 'kontrollierten' },
      { w: 'Bedingungen' },
      { w: 'gemessen' },
      { w: '".', plain: true },
      { w: 'Und' },
      { w: 'die' },
      { w: 'Hypothese' },
      { w: '?', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Wir' },
      { w: 'bestätigen' },
      { w: 'sie' },
      { w: '"', plain: true },
      { w: 'klingt' },
      { w: 'fast' },
      { w: 'zu' },
      { w: 'selbstsicher' },
      { w: '.', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Die' },
      { w: 'Hypothese' },
      { w: 'wird' },
      { w: 'durch' },
      { w: 'die' },
      { w: 'Ergebnisse' },
      { w: 'gestützt' },
      { w: '"', plain: true },
      { w: '—', plain: true },
      { w: 'das' },
      { w: 'lässt' },
      { w: 'den' },
      { w: 'Daten' },
      { w: 'den' },
      { w: 'Vortritt' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wie formulieren sie "wir haben die Werte gemessen" um?', qEn: 'How do they rephrase "wir haben die Werte gemessen"?', options: ['die Werte messen wir', 'die Werte wurden unter kontrollierten Bedingungen gemessen', 'die Werte sind gemessen worden von uns', 'wir maßen die Werte'], optionsEn: ['we measure the values', 'the values were measured under controlled conditions', 'the values have been measured by us', 'we measured the values'], answer: 1,
        explain: '"Die Werte wurden unter kontrollierten Bedingungen gemessen."' },
      { q: 'Wie formulieren sie die Bestätigung der Hypothese?', qEn: 'How do they phrase the hypothesis confirmation?', options: ['wir bestätigen sie', 'die Hypothese wird durch die Ergebnisse gestützt', 'die Hypothese ist falsch', 'wir sind uns sicher'], optionsEn: ['we confirm it', 'the hypothesis is supported by the results', 'the hypothesis is wrong', 'we are certain'], answer: 1,
        explain: '"Die Hypothese wird durch die Ergebnisse gestützt."' }
    ]
  },
  speaking: [
    { task: "Timo findet „wir haben die Werte gemessen“ zu ichbezogen. Formuliere um.", taskEn: "Timo finds 'we measured the values' too self-focused. Reformulate.", de: "Die Werte wurden unter kontrollierten Bedingungen erhoben.", en: "The values were collected under controlled conditions." },
    { task: "Berichte im Ergebnisteil, was gezeigt werden konnte.", taskEn: "Report in the results section what could be shown.", de: "Es konnte nachgewiesen werden, dass der Effekt bestehen bleibt.", en: "It could be demonstrated that the effect persists." },
    { task: "Deine Lektorin fragt, wie der Hinweis auf die Frist im Bericht klingen soll.", taskEn: "Your editor asks how the note about the deadline should sound in the report.", de: "Es ist zu beachten, dass die Frist einzuhalten ist.", en: "It is to be noted that the deadline must be observed." },
    { task: "Gib die Meldung mit Quelle wieder.", taskEn: "Report the news with its source.", de: "Nach Angaben des Instituts wurde der Antrag genehmigt.", en: "According to the institute the application was approved." },
    { task: "Deine Lektorin fragt, warum der Handelnde fehlt.", taskEn: "Your editor asks why the agent is absent.", de: "Der Handelnde ist unwichtig; entscheidend ist, dass die Hypothese überprüft wurde.", en: "The agent is unimportant; what matters is that the hypothesis was tested." }
  ],
  writing: {
    prompt: 'TASK 1 — Passive upgrade (150 words): Rewrite an active text using appropriate passive constructions. Explain every stylistic improvement.\n\nTASK 2 — Passive reduction (150 words): Replace unnecessary passive structures with more natural alternatives where appropriate. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic article demonstrating sophisticated use of passive voice, passive alternatives, and information-focus strategies across academic, scientific, and administrative registers.',
    starters: ['Es wurde festgestellt, dass...', 'Die Daten wurden erhoben...', 'Es ist zu beachten, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Passiv als Perspektivwerkzeug...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which construction most precisely signals objective academic reporting of a result?', options: ['Es konnte gezeigt werden, dass ...', 'Die Forscher zeigten, dass ...', 'Ich zeige, dass ...'], answer: 0, explain: 'The academic passive "es konnte gezeigt werden" foregrounds the finding rather than the researchers, matching objective academic register.' },
    gap: { sentence: ['Die Frist ', ' strikt einzuhalten.'], gaps: [ { answer: 'ist', accepts: ['ist'] } ], explain: '"ist einzuhalten" (sein+zu) is the authentic institutional/administrative passive alternative expressing obligation.' },
    match: { q: 'Match each construction to its typical register.', pairs: [ { noun: 'Es konnte gezeigt werden, dass ...', art: 'Academic' }, { noun: 'Die Proben wurden untersucht', art: 'Scientific' }, { noun: 'Es ist zu beachten', art: 'Legal/Administrative' }, { noun: 'Es wird vermutet, dass ...', art: 'Journalism' } ] },
    builder: { target: 'Build: "It could be shown that the hypothesis holds." (academic passive)', bank: ['Es', 'konnte', 'gezeigt', 'werden', ',', 'dass', 'die', 'Hypothese', 'zutrifft', '.'], answer: ['Es', 'konnte', 'gezeigt', 'werden', ',', 'dass', 'die', 'Hypothese', 'zutrifft', '.'], roles: { 'konnte': 'r-passiv-akademisch', 'gezeigt': 'r-passiv-akademisch', 'werden': 'r-passiv-akademisch' } },
    errorCorrection: { title: 'Error correction', wrong: 'Es wurde von den Forschern gemacht die Analyse und es wurde gefunden dass die Daten korrekt sind.', right: 'Die Analyse wurde durchgeführt, und es wurde festgestellt, dass die Daten korrekt sind.', explain: 'The first version is an awkward literal-translation-style passive; the correction uses natural German passive constructions ("wurde durchgeführt", "wurde festgestellt") in proper word order.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for passive voice in this chapter?', options: ['Every sentence is a camera shot; active points at the actor, passive points at the process', 'Passive voice should always be avoided in formal writing', 'Active and passive are always interchangeable with no difference in meaning'], answer: 0, explain: 'Native speakers ask "where should I point the camera?" rather than treating passive as a mechanical transformation.' },
    { q: 'Why do academic writers often prefer "Die Daten wurden untersucht" over "Die Forscher untersuchten die Daten"?', options: ['It foregrounds the process rather than the actor, matching academic objectivity', 'Because the active version is grammatically incorrect', 'Because passive is always shorter'], answer: 0, explain: 'Passive shifts reader focus from the agent to the process/result — appropriate for objective academic reporting.' },
    { q: 'Which is a classic C2-level mistake with passive voice?', options: ['Translating English passive constructions literally into German', 'Never using passive voice at all', 'Using too many passive alternatives'], answer: 0, explain: 'Literal translation from English often produces unnatural German phrasing instead of the authentic native equivalent.' },
    { q: 'What is "es ist zu beachten" an example of?', options: ['A sein+zu passive alternative expressing institutional obligation', 'A journalistic hedge', 'An active voice construction'], answer: 0, explain: 'sein+zu constructions are typical of legal/administrative register, expressing what must be observed.' },
    { q: 'What is a risk of passive overload?', options: ['Consecutive passive sentences read as stiff, bureaucratic, and monotonous', 'The reader cannot understand the sentence at all', 'It becomes grammatically incorrect'], answer: 0, explain: 'Balancing passive with active voice and passive alternatives keeps writing natural and varied.' }
  ],
  takeaways: [
    { c: 'r-kamera-metapher', html: 'Every sentence is a camera shot — active voice points at the actor, passive voice points at the action or result.' },
    { c: 'r-passiv-akademisch', html: 'Academic passive constructions (es wurde festgestellt, es konnte gezeigt werden) foreground findings over researchers for objectivity.' },
    { c: 'r-passiv-legal', html: 'Legal/administrative passive and sein+zu constructions (der Antrag wurde genehmigt, die Frist ist einzuhalten) signal institutional neutrality and obligation.' },
    { c: 'r-passiv-akademisch', html: 'Passive alternatives (man, lassen, sein+zu, sich lassen, nominalization) offer more natural or precise options than a plain werden-passive.' }
  ],
  revisionTips: [
    'Take three active sentences and rewrite each as passive, then as one passive alternative (man, lassen, sein+zu), comparing the shift in focus.',
    'Read one scientific abstract and label each passive construction by function (process focus, agent suppression, objectivity).',
    'Rewrite one paragraph with passive overload, replacing at least two passives with active voice or a passive alternative for variety.'
  ]
};
window.CHAPTER = CHAPTER;
