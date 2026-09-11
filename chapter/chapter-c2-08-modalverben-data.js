/* KLARWEG CHAPTER DATA — C2 · Chapter 8
   "Modalverben" (C2) — modal verbs as tools for epistemic meaning,
   speaker attitude, probability, and pragmatic nuance. NOT
   conjugation or basic obligation/ability meanings (already mastered
   A1/B1/C1) — focus is WHY native speakers choose one modal verb
   over another and HOW it changes the speaker's attitude, not the
   facts. Dialogue: Waltraud and Timo ONLY. Vocabulary covers 100% of
   the uploaded Chapter 8 certainty/probability word list (27 items). */
const CHAPTER = {
  id: 'c2-08-modalverben',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 8,
  title: 'Modalverben',
  titleEn: 'Modal verbs as a pair of glasses',
  description: 'Imagine every modal verb is a pair of glasses. The event stays exactly the same. Only the lens changes — certainty, possibility, obligation, or politeness.',
  xp: 1375, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 9, title: 'Goethe Mini 2', titleEn: 'Checkpoint — Chapters 1–8 integrated' , href: 'chapter-c2-09-goethe-mini-2.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Changing a modal verb changes the <em>lens</em>, not the reality.',
    intro: 'Drafting a policy recommendation for an international organization, Waltraud calls their hypothesis plausible while Timo insists the probability of an error feels very real — the same modal verb changing the lens of certainty, not the facts underneath.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly how native speakers choose one modal verb over another to shift certainty, obligation, or diplomacy'],
    scene: 'Vorbereitung einer Politikempfehlung für eine internationale Organisation',
    femaleSpeakers: ['Waltraud'],
    dialogue: [
      { speaker: 'Waltraud', tokens: [
        { w: 'Unsere', role: 'r-subject', en: 'our (fem.)', hi: 'हमारी', pron: 'UN-ze-ruh', type: 'Possessive' },
        { w: 'Hypothese', role: 'r-subject', en: 'hypothesis', hi: 'परिकल्पना', pron: 'hü-po-TAY-zuh', type: 'Noun · fem.', why: 'die Hypothese (this chapter).', ex: 'unsere Hypothese' },
        { w: 'klingt', role: 'r-verb', en: 'sounds', hi: 'लगती है', pron: 'klinkt', type: 'Verb · klingen' },
        { w: 'plausibel', role: 'r-akkusativ', en: 'plausible', hi: 'विश्वसनीय', pron: 'plow-ZEE-bel', type: 'Adjective', why: 'plausibel = plausible (this chapter).', ex: 'Das klingt plausibel.', exEn: 'That sounds plausible.' },
        { w: '.', plain: true }
      ], en: 'Our hypothesis sounds plausible.', hi: 'Hamaari parikalpana vishvasniy lagti hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'bleibt', role: 'r-verb', en: 'remains', hi: 'रहता है', pron: 'BLYPT', type: 'Verb · bleiben' },
        { w: 'ein', role: 'r-subject', en: 'a (masc.)', hi: 'एक', pron: 'ine', type: 'Article · masc.' },
        { w: 'Zweifel', role: 'r-subject', en: 'doubt', hi: 'संदेह', pron: 'TSVY-fel', type: 'Noun · masc.', why: 'der Zweifel (this chapter).', ex: 'ein Zweifel bleibt' },
        { w: '.', plain: true }
      ], en: 'Nevertheless a doubt remains.', hi: 'Phir bhi ek sandeh rehta hai.' },
      { speaker: 'Waltraud', tokens: [
        { w: 'Welcher', role: 'r-subject', en: 'which (masc.)', hi: 'कौनसा', pron: 'VEL-kher', type: 'Question word' },
        { w: 'Aspekt', role: 'r-subject', en: 'aspect', hi: 'पहलू', pron: 'as-PEKT', type: 'Noun · masc.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'dich', role: 'r-akkusativ', en: 'you', hi: 'तुम्हारे लिए', pron: 'dikh', type: 'Pronoun · acc.' },
        { w: 'noch', role: 'r-akkusativ', en: 'still', hi: 'अभी भी', pron: 'nokh', type: 'Adverb' },
        { w: 'unklar', role: 'r-akkusativ', en: 'unclear', hi: 'अस्पष्ट', pron: 'UN-klahr', type: 'Adjective', why: 'unklar = unclear (this chapter).', ex: 'Das ist mir noch unklar.', exEn: 'That is still unclear to me.' },
        { w: '?', plain: true }
      ], en: 'Which aspect is still unclear for you?', hi: 'Tumhaare liye kaunsa pehlu abhi bhi aspasht hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Wahrscheinlichkeit', role: 'r-subject', en: 'probability', hi: 'संभावना', pron: 'vahr-SHYNE-likh-kite', type: 'Noun · fem.', why: 'die Wahrscheinlichkeit (this chapter).', ex: 'die Wahrscheinlichkeit einschätzen' },
        { w: 'eines', role: 'r-dativ', en: 'a (neut. gen.)', hi: 'एक', pron: 'EYE-nes', type: 'Article · genitive' },
        { w: 'Fehlers', role: 'r-dativ', en: 'error (gen.)', hi: 'त्रुटि के', pron: 'FAY-lers', type: 'Noun · masc. genitive' },
        { w: 'scheint', role: 'r-verb', en: 'seems', hi: 'लगता है', pron: 'SHYNT', type: 'Verb · scheinen' },
        { w: 'mir', role: 'r-dativ', en: 'to me', hi: 'मुझे', pron: 'meer', type: 'Pronoun · dative' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'vage', role: 'r-akkusativ', en: 'vague', hi: 'अस्पष्ट', pron: 'VAH-guh', type: 'Adjective', why: 'vage = vague (this chapter).', ex: 'Das klingt sehr vage.', exEn: 'That sounds very vague.' },
        { w: ',', plain: true },
        { w: 'sondern', role: 'r-conjunction', en: 'but rather', hi: 'बल्कि', pron: 'ZON-dern', type: 'Conjunction' },
        { w: 'sehr', role: 'r-akkusativ', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: 'real', role: 'r-akkusativ', en: 'real', hi: 'वास्तविक', pron: 'ray-AHL', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'The probability of an error seems to me not vague, but rather very real.', hi: 'Truti ki sambhaavna mujhe aspasht nahi, balki bahut vaastavik lagti hai.' },
      { speaker: 'Waltraud', tokens: [
        { w: 'Ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'etwas', role: 'r-akkusativ', en: 'somewhat', hi: 'कुछ', pron: 'ET-vas', type: 'Adverb' },
        { w: 'zweifelhaft', role: 'r-akkusativ', en: 'doubtful', hi: 'संदिग्ध', pron: 'TSVY-fel-haft', type: 'Adjective', why: 'zweifelhaft = doubtful (this chapter).', ex: 'Das ist zweifelhaft.', exEn: 'That is doubtful.' },
        { w: '?', plain: true }
      ], en: 'Is that not somewhat doubtful?', hi: 'Kya yeh kuch sandigdh nahi hai?' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'nahezu', role: 'r-akkusativ', en: 'nearly', hi: 'लगभग', pron: 'NAH-ay-tsoo', type: 'Adverb' },
        { w: 'unbestreitbar', role: 'r-akkusativ', en: 'undeniable', hi: 'निर्विवाद', pron: 'un-be-SHTRYT-bahr', type: 'Adjective', why: 'unbestreitbar = undeniable (this chapter).', ex: 'Das ist unbestreitbar.', exEn: 'That is undeniable.' },
        { w: '.', plain: true }
      ], en: 'No. It is nearly undeniable.', hi: 'Nahi. Yeh lagbhag nirvivaad hai.' },
      { speaker: 'Waltraud', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'führen', role: 'r-verb', en: 'let us carry out', hi: 'करते हैं', pron: 'FÜ-ren', type: 'Verb · durchführen (wir, recycled C1/C2)', lexicalUnit: 'durchführen' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'weiteren', role: 'r-akkusativ', en: 'further', hi: 'अगला', pron: 'VY-te-ren', type: 'Adjective' },
        { w: 'Test', role: 'r-akkusativ', en: 'test', hi: 'परीक्षण', pron: 'test', type: 'Noun · masc.' },
        { w: 'durch', role: 'r-verb', en: '(prefix of durchführen)', hi: '', pron: 'doorkh', type: 'Separable prefix · Satzende', lexicalUnit: 'durchführen' },
        { w: '.', plain: true }
      ], en: 'Good, then let us carry out a further test.', hi: 'Achha, toh hum ek aur pareekshan karte hain.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every modal verb is a <span class="de r-brille-metapher">pair of glasses</span> — the event stays the same, only the lens changes.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is MODALVERBEN at C2 level — modal verbs as tools for EPISTEMIC MEANING, SPEAKER ATTITUDE, PROBABILITY, and PRAGMATIC NUANCE, NOT conjugation or basic obligation/ability/permission meanings (already fully mastered in A1/B1/C1). Covered: the three types of modality — epistemic (speaker\'s evaluation of likelihood: Er muss zu Hause sein > Er dürfte zu Hause sein > Er könnte zu Hause sein > Er mag zu Hause sein, a decreasing certainty scale), deontic (obligation/permission: müssen vs. sollen vs. dürfen), and dynamic (ability/circumstance: können); the pragmatic difference between obligation and recommendation (Du musst. > Du solltest. > Du könntest. > Du dürftest. > Du möchtest vielleicht...) for diplomatic softening; academic modality for hedging claims (Man könnte argumentieren..., Dies dürfte darauf hindeuten..., Es muss berücksichtigt werden..., Die Ergebnisse lassen vermuten...); scientific modality (Die Ergebnisse könnten erklären..., Die Daten müssen interpretiert werden..., Es dürfte sich um...); legal/administrative modality (Der Antrag muss eingereicht werden. Die Frist ist einzuhalten. Es darf nicht... Die Behörde kann...) distinguishing legal obligation from permission; and political/media modality using Konjunktiv-I-marked modals for reported claims (Die Regierung müsse handeln. Die Opposition wolle...). The most important things to catch: translating English modal verbs directly into German (English "must/should/could/might" do not map cleanly onto müssen/sollen/können/mögen — a major source of pragmatic errors); confusing müssen (logical necessity/strong obligation) with sollen (recommendation/reported obligation) — a classic C2-level confusion; overusing können as a catch-all modal where a more precise epistemic or deontic modal fits better; ignoring epistemic meaning entirely (missing that müssen/dürfte/könnte/mag can express degrees of certainty about present reality, not just obligation/ability); choosing an inappropriate certainty level for the claim being made; using an inappropriate register (e.g. casual modal phrasing in legal or academic contexts). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag confusion between müssen and sollen (obligation vs. recommendation); flag modal verb choices with a mismatched certainty level (e.g. "könnte" used where "dürfte" or "muss" reflects the intended confidence); flag literal English-to-German modal translation; flag missed opportunities to use epistemic modality for hedging in academic/scientific writing. Do NOT flag basic modal verb conjugation or infinitive-position errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around certainty/obligation/register). If none: <li>No errors — well done.</li> 3) <p><b>Native-level modality check:</b> one sentence on whether the learner chooses the modal "lens" deliberately (epistemic vs. deontic, degree of certainty) rather than defaulting to one modal verb.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you choose the modal "lens" deliberately across registers. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Modality Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: every modal verb is a pair of glasses, and the reality never changes, only the lens.' },
  parserSentence: [ { w: 'Er', role: 'plain' }, { w: 'dürfte', role: 'r-epistemisch' }, { w: 'zu', role: 'plain' }, { w: 'Hause', role: 'plain' }, { w: 'sein', role: 'r-epistemisch' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every modal verb is a pair of glasses — the event stays the same, only the lens changes.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Waltraud and Timo reformulate a policy recommendation, choosing between obligation, recommendation, and epistemic modal verbs.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn 27 C2 certainty/probability words (plausibel, die Annahme, hypothetisch, wahrscheinlich, etc.) — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master epistemic, deontic, and dynamic modality, the certainty scale, and register-based modal verb selection.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic article, a government policy paper, and a literary essay for pragmatic modal verb use.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify epistemic modality, obligation, and recommendation in a university lecture, political debate, and scientific conference.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice presenting recommendations, expressing certainty, and diplomatic negotiation at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite sentences with different modals, soften recommendations diplomatically, and write a 550-word integrated essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill modality identification, the certainty scale, and recommendation vs. obligation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1375 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All 27 chapter words with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Certainty scale, recommendation vs. obligation, and register selection drills, plus the full 550-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '18 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Modality Model, Certainty Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Er dürfte zu Hause sein.', text: 'Use epistemic modality to express high probability, not permission' },
    { de: 'Die Regierung sollte handeln.', text: 'Soften an obligation into a diplomatic recommendation' },
    { de: 'Man könnte argumentieren, dass ...', text: 'Use academic modal hedging appropriately' },
    { de: 'Der Antrag muss eingereicht werden.', text: 'Distinguish legal obligation from permission (dürfen/können)' },
    { de: 'Jedes Modalverb ist eine Brille.', text: 'Understand the chapter\'s core "glasses" metaphor for modal choice' }
  ],
  vocab: [
    { de: 'plausibel', pos: 'adjective', level: 'C2', register: 'academic', en: 'plausible', hi: 'तर्कसंगत', synonyms: 'nachvollziehbar, einleuchtend', antonyms: 'unplausibel', ex: 'Die Erklärung erscheint durchaus plausibel.', exEn: 'The explanation seems entirely plausible.', exHi: 'Spashteekaran bilkul tarksangat lagta hai.', ex2: 'Es ist plausibel, dass externe Faktoren eine Rolle spielten.', ex2En: 'It is plausible that external factors played a role.', ex2Hi: 'Yeh tarksangat hai ki bahri factors ne bhoomika nibhaayi.' },
    { de: 'die Annahme', art: 'die', gender: 'f', plural: 'Annahmen', pos: 'noun', level: 'C2', register: 'academic', en: 'assumption', hi: 'धारणा', synonyms: 'Vermutung, Voraussetzung', antonyms: 'Gewissheit', ex: 'Die Annahme, dass die Stichprobe repräsentativ ist, wird kritisch hinterfragt.', exEn: 'The assumption that the sample is representative is critically questioned.', exHi: 'Yeh dhaarna ki sample pratinidhik hai, gehraai se prashn ki jaati hai.', ex2: 'Unsere Analyse beruht auf mehreren Annahmen.', ex2En: 'Our analysis is based on several assumptions.', ex2Hi: 'Humaara analysis kai dhaarnaon par aadhaarit hai.' },
    { de: 'die Hypothese', art: 'die', gender: 'f', plural: 'Hypothesen', pos: 'noun', level: 'C2', register: 'academic/scientific', en: 'hypothesis', hi: 'परिकल्पना', synonyms: 'Annahme, These', antonyms: 'bewiesene Tatsache', ex: 'Die Hypothese müsste durch weitere Experimente überprüft werden.', exEn: 'The hypothesis would need to be tested through further experiments.', exHi: 'Hypothesis ko aur experiments se check karna hoga.', ex2: 'Diese Hypothese dürfte sich als richtig erweisen.', ex2En: 'This hypothesis is likely to prove correct.', ex2Hi: 'Yeh hypothesis sahi sabit ho sakti hai.' },
    { de: 'die Prognose', art: 'die', gender: 'f', plural: 'Prognosen', pos: 'noun', level: 'C2', register: 'both', en: 'prognosis, forecast', hi: 'पूर्वानुमान', synonyms: 'Vorhersage, Einschätzung', antonyms: null, ex: 'Die Prognose könnte sich als zu optimistisch erweisen.', exEn: 'The forecast could prove too optimistic.', exHi: 'Poorvaanumaan bahut zyaada optimistic sabit ho sakta hai.', ex2: 'Ökonomen stellen unterschiedliche Prognosen für das nächste Jahr.', ex2En: 'Economists present different forecasts for next year.', ex2Hi: 'Economists agle saal ke liye alag-alag poorvaanumaan dete hain.' },
    { de: 'der Zweifel', art: 'der', gender: 'm', plural: 'Zweifel', pos: 'noun', level: 'C2', register: 'both', en: 'doubt', hi: 'संदेह', synonyms: 'Skepsis, Unsicherheit', antonyms: 'Gewissheit', ex: 'Es bestehen erhebliche Zweifel an der Methodik.', exEn: 'There are considerable doubts about the methodology.', exHi: 'Methodology ke baare mein kaafi sandeh hai.', ex2: 'Trotz aller Zweifel hält der Autor an seiner These fest.', ex2En: 'Despite all doubts, the author sticks to his thesis.', ex2Hi: 'Sabhi sandehon ke baavjood, lekhak apni thesis par kaayam hai.' },
    { de: 'die Erwartung', art: 'die', gender: 'f', plural: 'Erwartungen', pos: 'noun', level: 'C2', register: 'both', en: 'expectation', hi: 'अपेक्षा', synonyms: 'Hoffnung, Vorwegnahme', antonyms: 'Überraschung', ex: 'Die Ergebnisse entsprechen weitgehend den Erwartungen.', exEn: 'The results largely correspond to expectations.', exHi: 'Parinaam bahut hadd tak apekshaaon ke anuroop hain.', ex2: 'Man sollte realistische Erwartungen an das Projekt stellen.', ex2En: 'One should set realistic expectations for the project.', ex2Hi: 'Project se realistic apekshaayein rakhni chahiye.' },
    { de: 'evident', pos: 'adjective', level: 'C2', register: 'academic/formal', en: 'evident', hi: 'स्पष्ट', synonyms: 'offensichtlich, augenscheinlich', antonyms: 'unklar', ex: 'Der Zusammenhang ist evident.', exEn: 'The connection is evident.', exHi: 'Sambandh spashtha hai.', ex2: 'Es ist evident, dass weitere Maßnahmen erforderlich sind.', ex2En: 'It is evident that further measures are necessary.', ex2Hi: 'Yeh spashtha hai ki aur upaay zaroori hain.' },
    { de: 'die Gewissheit', art: 'die', gender: 'f', pos: 'noun', level: 'C2', register: 'both', en: 'certainty', hi: 'निश्चितता', synonyms: 'Sicherheit, Bestimmtheit', antonyms: 'Ungewissheit, Zweifel', ex: 'Mit absoluter Gewissheit lässt sich das nicht sagen.', exEn: 'That cannot be said with absolute certainty.', exHi: 'Yeh poori nishchitata ke saath nahi kaha jaa sakta.', ex2: 'Die Gewissheit über den Ausgang wächst mit jeder neuen Studie.', ex2En: 'Certainty about the outcome grows with every new study.', ex2Hi: 'Har naye study ke saath outcome ke baare mein nishchitata badhti hai.' },
    { de: 'hypothetisch', pos: 'adjective', level: 'C2', register: 'academic', en: 'hypothetical', hi: 'काल्पनिक', synonyms: 'angenommen, spekulativ', antonyms: 'real, tatsächlich', ex: 'Das ist zunächst nur ein hypothetisches Szenario.', exEn: 'This is initially only a hypothetical scenario.', exHi: 'Yeh abhi sirf ek kalpanik scenario hai.', ex2: 'Hypothetisch betrachtet, könnte die Reform Vorteile bringen.', ex2En: 'Viewed hypothetically, the reform could bring benefits.', ex2Hi: 'Kalpanik roop se dekhein toh, sudhaar faayde de sakta hai.' },
    { de: 'die Möglichkeit', art: 'die', gender: 'f', plural: 'Möglichkeiten', pos: 'noun', level: 'C2', register: 'both', en: 'possibility', hi: 'संभावना', synonyms: 'Chance, Option', antonyms: 'Unmöglichkeit', ex: 'Es besteht die Möglichkeit, dass sich die Lage verschlechtert.', exEn: 'There is the possibility that the situation deteriorates.', exHi: 'Sambhavna hai ki sthiti bigad jaaye.', ex2: 'Diese Möglichkeit sollte nicht ausgeschlossen werden.', ex2En: 'This possibility should not be ruled out.', ex2Hi: 'Is sambhavna ko khaarij nahi karna chahiye.' },
    { de: 'sicher', pos: 'adjective', level: 'C2', register: 'both', en: 'certain', hi: 'निश्चित', synonyms: 'gewiss, zweifelsfrei', antonyms: 'unsicher, ungewiss', ex: 'Es ist noch nicht sicher, ob das Projekt genehmigt wird.', exEn: 'It is not yet certain whether the project will be approved.', exHi: 'Abhi tak yeh nishchit nahi hai ki project mansoor hoga ya nahi.', ex2: 'Sicher ist, dass weitere Untersuchungen nötig sind.', ex2En: 'What is certain is that further investigations are necessary.', ex2Hi: 'Yeh nishchit hai ki aur jaanch zaroori hai.' },
    { de: 'spekulativ', pos: 'adjective', level: 'C2', register: 'academic/journalism', en: 'speculative', hi: 'अटकलबाज़ी वाला', synonyms: 'vermutet, hypothetisch', antonyms: 'gesichert, belegt', ex: 'Diese Interpretation bleibt vorerst spekulativ.', exEn: 'This interpretation remains speculative for now.', exHi: 'Yeh interpretation abhi tak sirf atkal hai.', ex2: 'Spekulative Aussagen sollten klar gekennzeichnet werden.', ex2En: 'Speculative statements should be clearly marked.', ex2Hi: 'Atkalbaazi waale statements saaf taur par chinhit kiye jaane chahiye.' },
    { de: 'die Wahrscheinlichkeit', art: 'die', gender: 'f', pos: 'noun', level: 'C2', register: 'both', en: 'probability', hi: 'संभावना', synonyms: 'Chance, Aussicht', antonyms: 'Unwahrscheinlichkeit', ex: 'Die Wahrscheinlichkeit eines Erfolgs steigt mit besserer Vorbereitung.', exEn: 'The probability of success increases with better preparation.', exHi: 'Behtar taiyaari se safalta ki sambhaavna badhti hai.', ex2: 'Mit hoher Wahrscheinlichkeit wird sich die Prognose bestätigen.', ex2En: 'With high probability the forecast will be confirmed.', ex2Hi: 'Uchch sambhaavna ke saath poorvaanumaan sahi sabit hoga.' },
    { de: 'zweifelsfrei', pos: 'adjective', level: 'C2', register: 'formal/legal', en: 'beyond doubt', hi: 'संदेह से परे', synonyms: 'unbestreitbar, eindeutig', antonyms: 'zweifelhaft, fraglich', ex: 'Die Schuld des Angeklagten wurde zweifelsfrei nachgewiesen.', exEn: 'The defendant\'s guilt was proven beyond doubt.', exHi: 'Aaropi ka dosh sandeh se pare sabit ho gaya.', ex2: 'Zweifelsfrei ist, dass Reformen notwendig sind.', ex2En: 'Beyond doubt, reforms are necessary.', ex2Hi: 'Sandeh se pare, sudhaar zaroori hain.' },
    { de: 'denkbar', pos: 'adjective', level: 'C2', register: 'academic/formal', en: 'conceivable', hi: 'सोचने योग्य', synonyms: 'möglich, vorstellbar', antonyms: 'undenkbar', ex: 'Es wäre denkbar, eine alternative Methode einzusetzen.', exEn: 'It would be conceivable to employ an alternative method.', exHi: 'Ek alag method ka istemaal karna sochne yogya hai.', ex2: 'Ein solcher Ausgang ist durchaus denkbar.', ex2En: 'Such an outcome is quite conceivable.', ex2Hi: 'Aisa parinaam bilkul sochne yogya hai.' },
    { de: 'fraglich', pos: 'adjective', level: 'C2', register: 'both', en: 'questionable, doubtful', hi: 'संदिग्ध', synonyms: 'zweifelhaft, unsicher', antonyms: 'gewiss, eindeutig', ex: 'Es ist fraglich, ob die Reform ausreicht.', exEn: 'It is questionable whether the reform is sufficient.', exHi: 'Yeh sandigdh hai ki sudhaar kaafi hai ya nahi.', ex2: 'Der Nutzen dieser Maßnahme bleibt fraglich.', ex2En: 'The benefit of this measure remains questionable.', ex2Hi: 'Is upaay ka faayda sandigdh hi raha.' },
    { de: 'gewiss', pos: 'adjective', level: 'C2', register: 'both', en: 'certain', hi: 'निश्चित', synonyms: 'sicher, bestimmt', antonyms: 'ungewiss, zweifelhaft', ex: 'Eines ist gewiss: Die Lage wird sich verändern.', exEn: 'One thing is certain: the situation will change.', exHi: 'Ek baat nishchit hai: sthiti badlegi.', ex2: 'Ein gewisser Erfolg lässt sich nicht garantieren.', ex2En: 'A certain amount of success cannot be guaranteed.', ex2Hi: 'Kuch had tak safalta ki guarantee nahi di jaa sakti.' },
    { de: 'möglich', pos: 'adjective', level: 'C2', register: 'both', en: 'possible', hi: 'संभव', synonyms: 'denkbar, machbar', antonyms: 'unmöglich', ex: 'Es ist durchaus möglich, dass sich die Situation entspannt.', exEn: 'It is quite possible that the situation eases.', exHi: 'Yeh bilkul sambhav hai ki sthiti aasaan ho jaaye.', ex2: 'Eine schnelle Lösung erscheint kaum möglich.', ex2En: 'A quick solution seems hardly possible.', ex2Hi: 'Ek tezz solution mushkil se hi sambhav lagta hai.' },
    { de: 'naheliegend', pos: 'adjective', level: 'C2', register: 'academic/formal', en: 'obvious, natural (as a conclusion)', hi: 'स्वाभाविक', synonyms: 'plausibel, einleuchtend', antonyms: 'fernliegend', ex: 'Es wäre naheliegend, aus diesen Daten einen Trend abzuleiten.', exEn: 'It would be natural to derive a trend from this data.', exHi: 'Is data se ek trend nikaalna swaabhaavik hoga.', ex2: 'Ein naheliegender Schluss ist, dass die Nachfrage steigt.', ex2En: 'An obvious conclusion is that demand is rising.', ex2Hi: 'Ek swaabhaavik nishkarsh yeh hai ki maang badh rahi hai.' },
    { de: 'unbestreitbar', pos: 'adjective', level: 'C2', register: 'formal/academic', en: 'undeniable', hi: 'निर्विवाद', synonyms: 'unbestritten, eindeutig', antonyms: 'fraglich, umstritten', ex: 'Der Einfluss dieser Entwicklung ist unbestreitbar.', exEn: 'The influence of this development is undeniable.', exHi: 'Is badlaav ka prabhaav nirvivaad hai.', ex2: 'Es bleibt unbestreitbar, dass weitere Forschung nötig ist.', ex2En: 'It remains undeniable that further research is necessary.', ex2Hi: 'Yeh nirvivaad hai ki aur shodh zaroori hai.' },
    { de: 'ungewiss', pos: 'adjective', level: 'C2', register: 'both', en: 'uncertain', hi: 'अनिश्चित', synonyms: 'unsicher, unklar', antonyms: 'gewiss, sicher', ex: 'Der Ausgang der Verhandlungen bleibt ungewiss.', exEn: 'The outcome of the negotiations remains uncertain.', exHi: 'Baatcheet ka parinaam anishchit hai.', ex2: 'Über die Zukunft des Projekts herrscht ungewisse Stimmung.', ex2En: 'There is an uncertain mood about the project\'s future.', ex2Hi: 'Project ke bhavishya ke baare mein anishchit maahaul hai.' },
    { de: 'die Ungewissheit', art: 'die', gender: 'f', pos: 'noun', level: 'C2', register: 'both', en: 'uncertainty', hi: 'अनिश्चितता', synonyms: 'Unsicherheit, Zweifel', antonyms: 'Gewissheit', ex: 'Die Ungewissheit über die Entwicklung belastet die Märkte.', exEn: 'The uncertainty about the development burdens the markets.', exHi: 'Vikaas ke baare mein anishchitata baazaaron par bhaari padti hai.', ex2: 'Trotz aller Ungewissheit bleibt die Grundhaltung optimistisch.', ex2En: 'Despite all uncertainty the basic attitude remains optimistic.', ex2Hi: 'Sabhi anishchitata ke baavjood, moolbhoot rukh optimistic raha.' },
    { de: 'unklar', pos: 'adjective', level: 'C2', register: 'both', en: 'unclear', hi: 'अस्पष्ट', synonyms: 'ungewiss, undeutlich', antonyms: 'klar, eindeutig', ex: 'Es bleibt unklar, wie die Behörde reagieren wird.', exEn: 'It remains unclear how the authority will react.', exHi: 'Yeh ashpashtha hai ki adhikaari kaise pratikriya denge.', ex2: 'Die Ursache des Problems ist noch unklar.', ex2En: 'The cause of the problem is still unclear.', ex2Hi: 'Samasya ka kaaran abhi bhi ashpashtha hai.' },
    { de: 'unsicher', pos: 'adjective', level: 'C2', register: 'both', en: 'uncertain, insecure', hi: 'असुरक्षित, अनिश्चित', synonyms: 'ungewiss, zweifelhaft', antonyms: 'sicher, gewiss', ex: 'Die wirtschaftliche Lage bleibt unsicher.', exEn: 'The economic situation remains uncertain.', exHi: 'Aarthik sthiti anishchit bani hui hai.', ex2: 'Ein unsicheres Umfeld erschwert langfristige Planung.', ex2En: 'An uncertain environment complicates long-term planning.', ex2Hi: 'Ek anishchit maahaul long-term planning ko mushkil banaata hai.' },
    { de: 'vage', pos: 'adjective', level: 'C2', register: 'both', en: 'vague', hi: 'अस्पष्ट, धुंधला', synonyms: 'unklar, unbestimmt', antonyms: 'präzise, eindeutig', ex: 'Die Angaben in dem Bericht bleiben vage.', exEn: 'The statements in the report remain vague.', exHi: 'Report mein diye gaye vivaran ashpashtha rehte hain.', ex2: 'Eine vage Vermutung reicht für eine Anklage nicht aus.', ex2En: 'A vague suspicion is not enough for an indictment.', ex2Hi: 'Ek ashpashtha shak aarop lagaane ke liye kaafi nahi hai.' },
    { de: 'wahrscheinlich', pos: 'adjective/adverb', level: 'C2', register: 'both', en: 'probable, probably', hi: 'संभावित रूप से', synonyms: 'vermutlich, mutmaßlich', antonyms: 'unwahrscheinlich', ex: 'Es ist wahrscheinlich, dass sich die Situation bald klärt.', exEn: 'It is probable that the situation will soon become clear.', exHi: 'Yeh sambhavit hai ki sthiti jald spashtha ho jaayegi.', ex2: 'Wahrscheinlich wird die Entscheidung nächste Woche fallen.', ex2En: 'The decision will probably be made next week.', ex2Hi: 'Faisla shaayad agle hafte hoga.' },
    { de: 'zweifelhaft', pos: 'adjective', level: 'C2', register: 'both', en: 'doubtful', hi: 'संदिग्ध', synonyms: 'fraglich, unsicher', antonyms: 'zweifelsfrei, gewiss', ex: 'Der Erfolg dieser Strategie ist zweifelhaft.', exEn: 'The success of this strategy is doubtful.', exHi: 'Is strategy ki safalta sandigdh hai.', ex2: 'Es erscheint zweifelhaft, ob die Frist eingehalten werden kann.', ex2En: 'It seems doubtful whether the deadline can be met.', ex2Hi: 'Yeh sandigdh lagta hai ki deadline poori ho paayegi ya nahi.' }
  ],
  grammar: [
    { title: 'Drei Arten von Modalität (Three Types of Modality)', body: [ 'Reality → Speaker → Evaluation → Chosen Modal Verb. Epistemic modality expresses the speaker\'s evaluation of likelihood; deontic modality expresses obligation/permission; dynamic modality expresses ability/circumstance.' ], hinglish: 'C2 par ek hi modal teen bilkul alag kaam kar sakta hai. <b>Epistemic</b> matlab bolne wala kitna yakeen rakhta hai: <span class="de">Er muss zu Hause sein</span> \u2014 yahan koi majboori nahi, sirf nateeja. <b>Deontic</b> matlab majboori ya ijaazat: <span class="de">Er muss arbeiten</span>. Aur <b>dynamic</b> matlab kshamta ya haalat: <span class="de">Er kann schwimmen</span>. Ek aasaan pehchaan \u2014 agar saath mein <i>sein</i> jaisa state wala verb hai, to matlab aksar andaaza hota hai.' },
    { title: 'Sicherheitsgrade (Degrees of Certainty)', body: [ 'Er ist zu Hause. → Er muss zu Hause sein. → Er dürfte zu Hause sein. → Er könnte zu Hause sein. → Er mag zu Hause sein. This scale moves from certainty through decreasing degrees of epistemic probability.' ], hinglish: 'Yeh certainty ki seedhi hai. <span class="de">Er ist zu Hause</span> poora dava hai. <b>muss</b> matlab tark se aisa hi hona chahiye, <b>d\u00fcrfte</b> matlab kaafi sambhavna, <b>k\u00f6nnte</b> matlab ho sakta hai, aur <b>mag</b> matlab \u201cho to sakta hai, par\u2026\u201d \u2014 isme aksar ek chhupa vireodh hota hai. Sabse aam galti <b>k\u00f6nnen</b> ko har jagah laga dena hai, jab saboot majboot ho aur <b>muss</b> ya <b>d\u00fcrfte</b> chahiye tha.' },
    { title: 'Verpflichtung vs. Empfehlung (Obligation vs. Recommendation)', body: [ 'Du musst. → Du solltest. → Du könntest. → Du dürftest. → Du möchtest vielleicht... Each step down softens the pragmatic force from strict obligation to a gentle suggestion.' ], hinglish: 'Yeh politeness ki seedhi hai. <span class="de">Du musst</span> seedha order hai, <span class="de">Du solltest</span> salaah, <span class="de">Du k\u00f6nntest</span> halka sujhav, aur <span class="de">Du m\u00f6chtest vielleicht \u2026</span> sabse narm. Office ke emails mein aksar beech wale hi theek rehte hain \u2014 pehla rukha lagta hai.' },
    { title: 'Akademisches Deutsch (Academic German)', body: [ 'Man könnte argumentieren..., Dies dürfte darauf hindeuten..., Es muss berücksichtigt werden..., Die Ergebnisse lassen vermuten... These modal constructions cautiously hedge academic claims rather than overclaiming.' ], hinglish: 'Academic writing mein modals hedge ka kaam karte hain \u2014 <span class="de">Man k\u00f6nnte argumentieren, dass \u2026</span>, <span class="de">Dies d\u00fcrfte darauf hindeuten, dass \u2026</span>. Dhyaan do ki <span class="de">Es muss ber\u00fccksichtigt werden</span> mein <b>muss</b> hedge nahi hai \u2014 woh zor de raha hai ki is baat ko dhyaan mein rakhna zaroori hai. Isliye ek hi modal jagah dekh kar alag kaam karta hai.' },
    { title: 'Rechtliche, Wissenschaftliche & Politische Sprache (Legal, Scientific & Political Modality)', body: [ 'Legal: Der Antrag muss eingereicht werden. Die Behörde kann... (obligation vs. permission). Scientific: Die Ergebnisse könnten erklären..., Es dürfte sich um... Political: Die Regierung müsse handeln. (Konjunktiv I + modal, for reported claims).' ], hinglish: 'Har register mein modal ka kaam badal jaata hai. Legal texts mein <b>muss</b> majboori batata hai aur <b>kann</b> ijaazat \u2014 <span class="de">Der Antrag muss eingereicht werden</span> ke saath dhyaan do ki <b>zu</b> nahi lagta. Scientific writing mein <b>k\u00f6nnten</b> aur <b>d\u00fcrfte</b> hedge karte hain. Aur political reporting mein modal Konjunktiv I mein chala jaata hai: <span class="de">Die Regierung m\u00fcsse handeln</span> \u2014 matlab yeh sprecher ka dava hai, akhbaar ka nahi.' },
    {
      title: 'Die Formen der epistemischen Modalit\u00e4t',
      body: [
        'Epistemic modality has a reliable shape: the modal stays in the PRESENT, and the infinitive at the end carries the time of the assumption.',
        'Three further forms are worth having exactly right, because each is a separate C2 error.'
      ],
      table: {
        head: ['Situation', 'Form', 'Example'],
        rows: [
          ['assumption about now', 'modal + Infinitiv', '<span class="de">Er muss krank sein.</span>'],
          ['assumption about the past', 'modal + Partizip II + haben/sein', '<span class="de">Er muss krank gewesen sein.</span>'],
          ['others report it', 'sollen + Partizip II + haben', '<span class="de">Er soll das gesagt haben.</span>'],
          ['he claims it himself', 'wollen + Partizip II + haben', '<span class="de">Er will nichts gesehen haben.</span>'],
          ['Perfekt of a modal', 'haben + Infinitiv + <b>Ersatzinfinitiv</b>', '<span class="de">Ich habe arbeiten m\u00fcssen.</span>'],
          ['inside reported speech', 'Konjunktiv I of the modal', '<span class="de">Die Regierung m\u00fcsse handeln.</span>']
        ]
      },
      note: 'Never add <b>zu</b> after a modal, and never push the modal itself into the past for an assumption \u2014 <i>Er musste krank gewesen sein</i> flips the meaning back to obligation.',
      hinglish: 'Epistemic modality ki shape fix hai: <b>modal khud present mein rehta hai</b>, aur assumption kab ki hai yeh end wala infinitive batata hai. Abhi ki baat ho to plain infinitive \u2014 <span class="de">Er muss krank sein.</span> Aur past ki baat ho to perfect infinitive \u2014 <span class="de">Er muss krank gewesen sein.</span> Teen forms alag se pakki kar lo, kyunki teeno alag galtiyan banti hain. Pehli \u2014 <b>sollen</b> matlab doosre keh rahe hain aur <b>wollen</b> matlab woh khud daava kar raha hai. Doosri \u2014 modal ka Perfekt Ersatzinfinitiv se banta hai: <span class="de">Ich habe arbeiten <b>m\u00fcssen</b></span>, na ki <i>gemusst</i>. Aur teesri \u2014 reported speech ke andar modal Konjunktiv I mein chala jaata hai: <span class="de">Die Regierung m\u00fcsse handeln.</span> Do cheezein kabhi mat karo: modal ke baad <b>zu</b> lagana, aur andaaze ke liye modal ko khud past mein daalna \u2014 usse matlab wapas obligation ban jaata hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Modal verb mapped to its core pragmatic meaning and typical register.' ], table: { head: ['Modal Verb', 'Core Pragmatic Meaning', 'Typical Register'], rows: [ ['müssen', 'Logical certainty / obligation', 'General, Legal'], ['sollen', 'Recommendation / reported obligation', 'Professional, Political'], ['dürfen', 'Permission / probability', 'General, Academic'], ['können', 'Ability / possibility', 'General'], ['mögen', 'Tentative possibility', 'Literary, Formal'], ['wollen', 'Claimed intention', 'Journalism, Politics'] ] }, hinglish: 'Har modal ka C2 par apna khaas kaam hai \u2014 dhyaan do ki har row mein woh matlab hai jo B1 wale matlab se alag hai, jaise <b>wollen</b> ka \u201cdaava karna\u201d.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Three of these choose a modal whose certainty does not match the evidence or the source. The other three are formal: the perfect infinitive, <b>zu</b> after a modal, and the Ersatzinfinitiv.' ], mistakes: [
      { wrong: 'Er muss gestern krank sein.', right: 'Er muss gestern krank gewesen sein.', why: 'An epistemic conclusion about the PAST needs the perfect infinitive \u2014 <b>gewesen sein</b>. The modal itself stays in the present.' },
      { wrong: 'Die Firma muss angeblich Verluste gemacht haben.', right: 'Die Firma soll Verluste gemacht haben.', why: 'For an unverified report German uses <b>sollen</b>. <b>m\u00fcssen</b> states the speaker\u2019s own firm conclusion, which contradicts <i>angeblich</i>.' },
      { wrong: 'Alle Daten sprechen daf\u00fcr \u2014 das kann stimmen.', right: 'Alle Daten sprechen daf\u00fcr \u2014 das muss stimmen. / das d\u00fcrfte stimmen.', why: '<b>k\u00f6nnen</b> only opens a possibility. When the evidence points one way you need <b>m\u00fcssen</b> (logical certainty) or <b>d\u00fcrfte</b> (very likely).' },
      { wrong: 'Der Zeuge will nichts gesehen zu haben.', right: 'Der Zeuge will nichts gesehen haben.', why: 'A modal takes a bare infinitive \u2014 never <b>zu</b>. Here <b>will</b> means \u201cclaims to have seen nothing\u201d, not a wish.' },
      { wrong: 'Ich habe lange arbeiten gemusst.', right: 'Ich habe lange arbeiten m\u00fcssen.', why: 'When a modal carries a second infinitive, its Perfekt uses the Ersatzinfinitiv <b>m\u00fcssen</b> \u2014 never the Partizip II <i>gemusst</i>.' },
      { wrong: 'Der Sprecher sagte, die Regierung muss handeln.', right: 'Der Sprecher sagte, die Regierung m\u00fcsse handeln.', why: 'Inside reported speech the modal goes into Konjunktiv I \u2014 <b>m\u00fcsse</b>. The Indikativ would make the claim the reporter\u2019s own.' }
    ], hinglish: 'Teen galtiyan aisa modal chunne se hain jiski certainty saboot ya source se match nahi karti. Baaki teen form ki hain \u2014 past wala infinitive, modal ke baad <b>zu</b>, aur Ersatzinfinitiv.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What do you want to express? Fact? Possibility? Logical conclusion? Recommendation? Obligation? Diplomatic suggestion? Choose the most appropriate modal verb.' ], note: 'Memory trick: imagine every modal verb is a pair of glasses. The event stays exactly the same. Only the lens changes. One lens shows certainty. Another shows possibility. Another shows obligation. Another shows politeness. Native speakers don\'t change reality — they change the lens through which reality is presented.', hinglish: 'Pehle tay karo ki tum kya kar rahe ho \u2014 fact, sambhavna, tark se nikla nateeja, salaah, majboori, ya narm sujhav. Uske baad certainty ke hisaab se modal chuno. Aur likhne se pehle do cheezein check karo: baat past ki hai to end mein <b>Partizip II + haben/sein</b> lagaya, aur modal ke baad <b>zu</b> nahi laga?' }
  ],
  reading: {
    title: 'Fachartikel: Neue Auswertung zur Wirkung von Höhentraining',
    titleEn: 'Reading A — Journal article: new analysis of altitude-training effects',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'dürften', role: 'r-epistemisch', en: 'are likely to (epistemic modality, high probability, part of "dürfte darauf hindeuten")', hi: '', type: 'Modalverb (Konjunktiv II)' },
      { w: 'darauf', role: 'r-epistemisch', en: 'to this (part of the construction)', hi: '', type: 'Pronominaladverb' },
      { w: 'hindeuten', role: 'r-epistemisch', en: 'point (Satzende, the hedged epistemic construction)', hi: 'संकेत देने की संभावना है (Satzende, hedged epistemic construction)', type: 'Verb (Infinitiv, Satzende)', why: '"dürften darauf hindeuten" hedges the claim with high epistemic probability, more cautious than a bare assertion (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'individuelle', role: 'plain', en: 'individual', hi: 'व्यक्तिगत', type: 'Adjective' },
      { w: 'Trainingspläne', role: 'plain', en: 'training plans (Satzende)', hi: 'प्रशिक्षण योजनाएँ (Satzende)', type: 'Noun · plural' },
      { w: 'nötig', role: 'plain', en: 'necessary', hi: 'ज़रूरी', type: 'Adjective' },
      { w: 'sind', role: 'plain', en: 'are (Satzende)', hi: 'हैं (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true },
      { w: 'Athleten', role: 'plain', en: 'athletes', hi: 'खिलाड़ियों', type: 'Noun · plural' },
      { w: 'sollten', role: 'r-empfehlung', en: 'should (recommendation, Konjunktiv II of sollen)', hi: '', type: 'Modalverb (Konjunktiv II)' },
      { w: 'diese', role: 'plain', en: 'this (fem. akk.)', hi: 'इस', type: 'Demonstrativpronomen · Akk.' },
      { w: 'Erkenntnis', role: 'plain', en: 'insight (Satzende)', hi: 'अंतर्दृष्टि (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'schon', role: 'plain', en: 'already', hi: 'पहले से', type: 'Adverb' },
      { w: 'in', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'इस', type: 'Article · Dat.' },
      { w: 'Saisonvorbereitung', role: 'plain', en: 'season preparation (Satzende)', hi: 'सीज़न की तैयारी (Satzende)', type: 'Noun · fem.' },
      { w: 'berücksichtigen', role: 'r-empfehlung', en: 'take into account (Satzende, academic recommendation)', hi: 'ध्यान में रखना (Satzende, academic recommendation)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The results are likely to point to individual training plans being necessary. Athletes should already take this insight into account during season preparation.',
    comprehension: [
      { q: 'Welche Art von Modalität zeigt "dürften darauf hindeuten"?', options: ['Epistemische Modalität (Wahrscheinlichkeit)', 'Deontische Modalität (Pflicht)', 'Dynamische Modalität (Fähigkeit)'], answer: 0 },
      { q: 'Was drückt "sollten berücksichtigen" aus?', options: ['Eine Empfehlung, keine strikte Pflicht', 'Eine absolute Verpflichtung', 'Eine Erlaubnis'], answer: 0 },
      { q: 'Warum verwendet der Artikel "dürften" statt "müssen"?', options: ['Um wissenschaftliche Vorsicht auszudrücken', 'Weil "müssen" grammatisch falsch wäre', 'Aus Zufall'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungspolitikpapier', titleEn: 'Reading B — Government policy paper',
    tokens: [
      { w: 'Der', role: 'plain', en: 'the (masc. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Antrag', role: 'plain', en: 'application', hi: 'application', type: 'Noun · masc.' },
      { w: 'muss', role: 'r-deontisch', en: 'must (deontic obligation, part of legal/administrative construction)', hi: '(deontic obligation)', type: 'Modalverb (Präsens)' },
      { w: 'fristgerecht', role: 'plain', en: 'on time', hi: 'samay par', type: 'Adjective' },
      { w: 'eingereicht', role: 'plain', en: 'submitted', hi: 'prastut', type: 'Partizip II' },
      { w: 'werden', role: 'r-deontisch', en: 'be (Satzende, completing the passive obligation construction)', hi: '(Satzende, passive obligation)', type: 'Verb (Infinitiv, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The application must be submitted on time.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_008_L001', speaker: 'Waltraud', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, unsere Empfehlung dürfte auf Widerstand stoßen, aber sie müsste trotzdem geprüft werden.', en: 'Timo, our recommendation is likely to meet resistance, but it should still be examined.' },
      { id: 'C2_008_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Ich finde, sie könnte sogar auf breite Zustimmung stoßen, wenn wir die Vorteile klarer benennen.', en: 'I think it could even meet broad approval if we name the advantages more clearly.' },
      { id: 'C2_008_L003', speaker: 'Waltraud', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Vielleicht, aber die Umsetzung dürfte teuer werden, das sollten wir nicht verschweigen.', en: 'Maybe, but the implementation is likely to become expensive, we shouldn\'t hide that.' },
      { id: 'C2_008_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Einverstanden, Transparenz über die Kosten kann nur helfen.', en: 'Agreed, transparency about the costs can only help.' }
    ],
    transcript: 'Timo, unsere Empfehlung dürfte auf Widerstand stoßen, aber sie müsste trotzdem geprüft werden. Ich finde, sie könnte sogar auf breite Zustimmung stoßen, wenn wir die Vorteile klarer benennen. Vielleicht, aber die Umsetzung dürfte teuer werden, das sollten wir nicht verschweigen. Einverstanden, Transparenz über die Kosten kann nur helfen.',
    translation: 'Timo, our recommendation is likely to meet resistance, but it should still be examined. I think it could even meet broad approval if we name the advantages more clearly. Maybe, but the implementation is likely to become expensive, we shouldn\'t hide that. Agreed, transparency about the costs can only help.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'unsere' },
      { w: 'Empfehlung' },
      { w: 'dürfte' },
      { w: 'auf' },
      { w: 'Widerstand' },
      { w: 'stoßen' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'sie' },
      { w: 'müsste' },
      { w: 'trotzdem' },
      { w: 'geprüft' },
      { w: 'werden' },
      { w: '.', plain: true },
      { w: 'Ich' },
      { w: 'finde' },
      { w: ',', plain: true },
      { w: 'sie' },
      { w: 'könnte' },
      { w: 'sogar' },
      { w: 'auf' },
      { w: 'breite' },
      { w: 'Zustimmung' },
      { w: 'stoßen' },
      { w: ',', plain: true },
      { w: 'wenn' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'Vorteile' },
      { w: 'klarer' },
      { w: 'benennen' },
      { w: '.', plain: true },
      { w: 'Vielleicht' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Umsetzung' },
      { w: 'dürfte' },
      { w: 'teuer' },
      { w: 'werden' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'nicht' },
      { w: 'verschweigen' },
      { w: '.', plain: true },
      { w: 'Einverstanden' },
      { w: ',', plain: true },
      { w: 'Transparenz' },
      { w: 'über' },
      { w: 'die' },
      { w: 'Kosten' },
      { w: 'kann' },
      { w: 'nur' },
      { w: 'helfen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was prognostiziert Waltraud zur Empfehlung?', qEn: 'What does Waltraud predict about the recommendation?', options: ['sie wird sicher abgelehnt', 'sie dürfte auf Widerstand stoßen', 'sie ist bereits akzeptiert', 'sie betrifft niemanden'], optionsEn: ['it will certainly be rejected', 'it is likely to meet resistance', 'it has already been accepted', 'it affects nobody'], answer: 1,
        explain: '"Sie dürfte auf Widerstand stoßen."' },
      { q: 'Was soll laut Waltraud nicht verschwiegen werden?', qEn: 'What should not be hidden, according to Waltraud?', options: ['die Vorteile', 'dass die Umsetzung teuer werden dürfte', 'der Zeitplan', 'die Autoren'], optionsEn: ['the advantages', 'that implementation is likely to be expensive', 'the schedule', 'the authors'], answer: 1,
        explain: '"Die Umsetzung dürfte teuer werden, das sollten wir nicht verschweigen."' }
    ]
  },
  speaking: [
    { task: "Timo erwartet Widerstand gegen die Empfehlung. Antworte mit deiner Einschätzung.", taskEn: "Timo expects resistance to the recommendation. Answer with your assessment.", de: "Sie könnte sogar auf breite Zustimmung stoßen, das halte ich für plausibel.", en: "It could even meet with broad approval, I consider that plausible." },
    { task: "Ein Kollege fehlt bei der Sitzung. Formuliere eine Annahme.", taskEn: "A colleague is missing from the meeting. Formulate an assumption.", de: "Er dürfte zu Hause sein, die Verbindung war heute gestört.", en: "He's probably at home, the connection was disrupted today." },
    { task: "Ein Journalist fragt, was die Politik jetzt tun sollte.", taskEn: "A journalist asks what politics should do now.", de: "Die Regierung sollte handeln, ein Verbot wäre kaum durchsetzbar.", en: "The government should act, a ban would hardly be enforceable." },
    { task: "Deine Betreuerin hält den Befund für sicher. Bremse vorsichtig.", taskEn: "Your supervisor considers the finding certain. Slow it down carefully.", de: "Zweifelsfrei ist er nicht; die Prognose bleibt hypothetisch.", en: "It isn't beyond doubt; the forecast remains hypothetical." },
    { task: "Ein Praktikant nennt alles evident. Differenziere die Grade.", taskEn: "An intern calls everything evident. Differentiate the degrees.", de: "Evident ist der Zusammenhang, fraglich bleibt die Ursache.", en: "The correlation is evident, the cause remains questionable." }
  ],
  writing: {
    prompt: 'TASK 1 — Modal reformulation (150 words): Rewrite sentences using different modal verbs. Explain how each modal changes meaning.\n\nTASK 2 — Diplomatic softening (150 words): Transform direct recommendations into diplomatically appropriate academic language.\n\nTASK 3 — Essay (550 words): Write a C2 argumentative essay naturally integrating sophisticated modal verbs across academic, legal and political registers.',
    starters: ['Er dürfte...', 'Man sollte...', 'Es muss berücksichtigt werden, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Modalverben als Bedeutungslinsen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which modal verb expresses the highest epistemic certainty on the scale (excluding a bare statement of fact)?', options: ['muss', 'dürfte', 'mag'], answer: 0, explain: '"muss" expresses the strongest logical certainty short of a bare factual statement, ahead of "dürfte" and "mag".' },
    gap: { sentence: ['Die Regierung ', ' handeln.'], gaps: [ { answer: 'sollte', accepts: ['sollte'] } ], explain: '"sollte" (Konjunktiv II of sollen) softens the statement into a diplomatic recommendation rather than a strict obligation.' },
    match: { q: 'Match each modal verb to its core pragmatic meaning.', pairs: [ { noun: 'müssen', art: 'Logical certainty / obligation' }, { noun: 'sollen', art: 'Recommendation / reported obligation' }, { noun: 'dürfen', art: 'Permission / probability' }, { noun: 'mögen', art: 'Tentative possibility' } ] },
    builder: { target: 'Build: "He is likely to be at home." (epistemic modality)', bank: ['Er', 'dürfte', 'zu', 'Hause', 'sein', '.'], answer: ['Er', 'dürfte', 'zu', 'Hause', 'sein', '.'], roles: { 'dürfte': 'r-epistemisch', 'sein': 'r-epistemisch' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Regierung muss handeln, sagt der diplomatische Bericht.', right: 'Die Regierung sollte handeln.', explain: 'A diplomatic policy recommendation is softened with "sollte" (recommendation) rather than the strong obligation "muss".' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for modal verbs in this chapter?', options: ['Every modal verb is a pair of glasses — the event stays the same, only the lens changes', 'Modal verbs always express obligation', 'German modal verbs map one-to-one onto English modals'], answer: 0, explain: 'Native speakers change the lens (modal verb) to shift certainty, obligation, or politeness — not the underlying reality.' },
    { q: 'What is the key difference between müssen and sollen?', options: ['müssen expresses strong obligation/logical necessity; sollen expresses recommendation/reported obligation', 'They are always fully interchangeable', 'sollen is only used in questions'], answer: 0, explain: 'Confusing these two is a classic C2-level mistake that changes the pragmatic force of a statement.' },
    { q: 'What does "er dürfte zu Hause sein" express?', options: ['A high-probability epistemic assumption, not permission', 'Permission to be at home', 'A strict obligation'], answer: 0, explain: 'Epistemic "dürfte" signals the speaker\'s confident guess, unrelated to the deontic "permission" meaning of dürfen.' },
    { q: 'Why do academic writers use "könnte" or "dürfte" instead of bare claims?', options: ['To hedge claims cautiously and avoid overclaiming', 'Because bare claims are grammatically incorrect', 'To make the sentence shorter'], answer: 0, explain: 'Epistemic modal hedging is the native academic norm for expressing appropriate scientific caution.' },
    { q: 'What is a common C2 learner mistake with modal verbs?', options: ['Translating English modal verbs directly into German', 'Never using modal verbs in academic writing', 'Avoiding können entirely'], answer: 0, explain: 'English "must/should/could/might" do not map cleanly onto müssen/sollen/können/mögen, causing pragmatic errors.' }
  ],
  takeaways: [
    { c: 'r-brille-metapher', html: 'Every modal verb is a pair of glasses — the event stays the same, only the lens (certainty, obligation, politeness) changes.' },
    { c: 'r-epistemisch', html: 'Epistemic modality (muss/dürfte/könnte/mag) expresses degrees of certainty about present reality, from near-certain to speculative.' },
    { c: 'r-deontisch', html: 'Deontic modality (müssen/sollen/dürfen) expresses obligation, recommendation, or permission — each with a distinct pragmatic force.' },
    { c: 'r-empfehlung', html: 'Softening obligation into recommendation (musst → solltest → könntest) is essential for diplomatic, professional, and academic communication.' }
  ],
  revisionTips: [
    'Take one statement and rewrite it five times using müssen, sollen, dürfen, können, and mögen, noting the meaning shift each time.',
    'Rewrite one paragraph of direct recommendations as diplomatic academic language using modal softening.',
    'Read one academic abstract and identify every modal verb, classifying each as epistemic, deontic, or dynamic.'
  ]
};
window.CHAPTER = CHAPTER;
