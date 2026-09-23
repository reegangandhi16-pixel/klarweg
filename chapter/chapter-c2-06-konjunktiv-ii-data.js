/* KLARWEG CHAPTER DATA — C2 · Chapter 6
   "Konjunktiv II" (C2) — pragmatic, stylistic and rhetorical mastery:
   Konjunktiv II as speaker attitude (dimmer switch, not on/off),
   degrees of hypothesis, diplomatic softening, academic hedging,
   scientific caution, journalistic/political commentary, literary
   irony. NOT forms/conjugation (already mastered A2/B1/C1) — focus
   is WHEN and WHY native speakers choose it and HOW it changes tone.
   Dialogue: Christel and Timo ONLY. Structural chapter — vocabulary is
   drilled through example sentences/expressions, no standalone list. */
const CHAPTER = {
  id: 'c2-06-konjunktiv-ii',
  phase: 'C2 · Modalität, Perspektive & rhetorische Präzision',
  number: 6,
  title: 'Konjunktiv II',
  titleEn: 'Konjunktiv II as speaker attitude',
  description: 'Konjunktiv II is a dimmer switch, not an ON/OFF switch. You are not changing reality — you are adjusting how strongly your statement shines.',
  xp: 1325, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 7, title: 'Konjunktiv I', titleEn: 'Konjunktiv I as invisible quotation marks' , href: 'chapter-c2-07-konjunktiv-i.html' },
  prevChapter: { number: 5, title: 'Goethe Mini 1', titleEn: 'Checkpoint — Chapters 1–4 integrated', href: 'chapter-c2-05-goethe-mini-1.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Konjunktiv II is not a tense — it is a speaker\'s <em>attitude</em> toward reality.',
    intro: 'Preparing a proposal for an international research conference, Christel and Timo keep reformulating direct statements — it would be sensible, one could suspect — turning Konjunktiv II into a dimmer switch for how strongly they commit to each claim.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly how native speakers dial certainty, diplomacy, and hedging up or down with Konjunktiv II'],
    scene: 'Vorbereitung eines Konferenzvorschlags',
    femaleSpeakers: ['Christel'],
    dialogue: [
      { speaker: 'Christel', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'dürfte', role: 'r-modalverb', en: 'probably is', hi: 'शायद है', pron: 'DÜR-ftuh', type: 'Modal · dürfte (höfliche Vermutung, recycled C1)', why: 'Das dürfte stimmen = a hedged, polite way of asserting probable truth (this chapter).', ex: 'Das dürfte stimmen.', exEn: 'That is probably true.' },
        { w: 'stimmen', role: 'r-verb', en: 'be true', hi: 'सही', pron: 'SHTI-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'That is probably true.', hi: 'Yeh shaayad sahi hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'sinnvoll', role: 'r-akkusativ', en: 'sensible', hi: 'उचित', pron: 'ZIN-fol', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'das', role: 'r-akkusativ', en: 'the (neut.)', hi: 'यह', pron: 'das', type: 'Article · neut. acc.' },
        { w: 'Projekt', role: 'r-akkusativ', en: 'project', hi: 'परियोजना', pron: 'pro-YEKT', type: 'Noun · neut.' },
        { w: 'neu', role: 'r-akkusativ', en: 'newly', hi: 'नए सिरे से', pron: 'noy', type: 'Adverb' },
        { w: 'auszurichten', role: 'r-verb', en: 'to realign', hi: 'संरेखित करना', pron: 'OWS-tsu-rikh-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It would be sensible to realign the project.', hi: 'Pariyojana ko naye sire se sanrekhit karna uchit hoga.' },
      { speaker: 'Christel', tokens: [
        { w: 'Man', role: 'r-subject', en: 'one', hi: 'कोई', pron: 'man', type: 'Pronoun · indefinite' },
        { w: 'könnte', role: 'r-modalverb', en: 'could', hi: 'शायद सोच सकता है', pron: 'KÖN-tuh', type: 'Modal · können (Konjunktiv II)' },
        { w: 'vermuten', role: 'r-verb', en: 'suspect', hi: 'अनुमान लगाना', pron: 'fer-MOO-ten', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Zeitplan', role: 'r-subject', en: 'timeline', hi: 'समय सारणी', pron: 'TSYTE-plahn', type: 'Noun · masc.' },
        { w: 'unrealistisch', role: 'r-akkusativ', en: 'unrealistic', hi: 'अवास्तविक', pron: 'un-ray-a-LIS-tish', type: 'Adjective' },
        { w: 'war', role: 'r-verb', en: 'was', hi: 'थी', pron: 'vahr', type: 'Verb · sein (Präteritum, Satzende)' },
        { w: '.', plain: true }
      ], en: 'One could suspect that the timeline was unrealistic.', hi: 'Koi anumaan laga sakta hai ki samay saarani avaastavik thi.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'denkbar', role: 'r-akkusativ', en: 'conceivable', hi: 'संभव', pron: 'DENK-bahr', type: 'Adjective (recycled C1)' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'an (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Fristverlängerung', role: 'r-akkusativ', en: 'deadline extension', hi: 'समय सीमा विस्तार', pron: 'FRIST-fer-len-ge-rung', type: 'Noun · fem.' },
        { w: 'beantragen', role: 'r-verb', en: 'apply for', hi: 'आवेदन करना', pron: 'be-AN-trah-gen', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It would be conceivable that we apply for a deadline extension.', hi: 'Yeh sambhav hoga ki hum samay seema vistaar ke liye aavedan karein.' },
      { speaker: 'Christel', tokens: [
        { w: 'Es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'wäre', role: 'r-verb', en: 'would need', hi: 'ज़रूरी होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'zu', role: 'r-conjunction', en: 'to', hi: '', pron: 'tsoo', type: 'Infinitive marker' },
        { w: 'prüfen', role: 'r-verb', en: 'check', hi: 'जांचना', pron: 'PRÜ-fen', type: 'Verb · infinitive (Satzende)' },
        { w: ',', plain: true },
        { w: 'ob', role: 'r-conjunction', en: 'whether', hi: 'क्या', pron: 'op', type: 'Conjunction · ob' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'überhaupt', role: 'r-akkusativ', en: 'at all', hi: 'बिल्कुल', pron: 'ü-ber-HOWPT', type: 'Adverb' },
        { w: 'möglich', role: 'r-akkusativ', en: 'possible', hi: 'संभव', pron: 'MÖK-likh', type: 'Adjective' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein (Satzende)' },
        { w: '.', plain: true }
      ], en: 'It would need to be checked whether that is possible at all.', hi: 'Yeh jaanchna zaroori hoga ki kya yeh bilkul sambhav hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'hätte', role: 'r-verb', en: 'would have', hi: 'मेरे पास है', pron: 'HE-tuh', type: 'Verb · haben (Konjunktiv II)' },
        { w: 'einen', role: 'r-akkusativ', en: 'an (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'alternativen', role: 'r-akkusativ', en: 'alternative', hi: 'वैकल्पिक', pron: 'al-ter-na-TEE-ven', type: 'Adjective' },
        { w: 'Vorschlag', role: 'r-akkusativ', en: 'suggestion', hi: 'सुझाव', pron: 'FOR-shlahk', type: 'Noun · masc.' },
        { w: '.', plain: true }
      ], en: 'I would have an alternative suggestion.', hi: 'Mere paas ek vaikalpik sujhaav hai.' },
      { speaker: 'Christel', tokens: [
        { w: 'Dies', role: 'r-subject', en: 'this (neut.)', hi: 'यह', pron: 'dees', type: 'Pronoun · demonstrative' },
        { w: 'wäre', role: 'r-verb', en: 'would be', hi: 'होगा', pron: 'VAI-ruh', type: 'Verb · sein (Konjunktiv II)' },
        { w: 'problematisch', role: 'r-akkusativ', en: 'problematic', hi: 'समस्याग्रस्त', pron: 'pro-ble-MAH-tish', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'wenn', role: 'r-conjunction', en: 'if', hi: 'अगर', pron: 'ven', type: 'Conjunction · wenn' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vorstand', role: 'r-akkusativ', en: 'board', hi: 'बोर्ड', pron: 'FOR-shtant', type: 'Noun · masc.' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: 'rechtzeitig', role: 'r-akkusativ', en: 'on time', hi: 'समय पर', pron: 'REKHT-tsy-tikh', type: 'Adjective' },
        { w: 'informieren', role: 'r-verb', en: 'inform', hi: 'सूचित करना', pron: 'in-for-MEE-ren', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'This would be problematic if we do not inform the board on time.', hi: 'Agar hum board ko samay par soochit na karein toh yeh samasyagrast hoga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Konjunktiv II is a <span class="de r-lichtschalter-metapher">dimmer switch, not an ON/OFF switch</span> — you adjust brightness, not reality.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is KONJUNKTIV II at C2 level — PRAGMATIC, STYLISTIC and RHETORICAL mastery: Konjunktiv II as speaker ATTITUDE toward reality (a "dimmer switch, not an on/off switch"), NOT basic forms/conjugation of würde, hätte, wäre, or irregular forms (already fully mastered in A2/B1/C1). Covered: degrees of hypothesis on a certainty scale (Das stimmt. → Das dürfte stimmen. → Das könnte stimmen. → Das müsste stimmen. → Das würde stimmen, wenn...); diplomatic softening in professional communication (Ich würde vorschlagen..., Es wäre sinnvoll..., Man könnte überlegen..., Ich hätte einen alternativen Vorschlag — replacing blunt statements like "Wir sollten..."); academic hedging (Die Ergebnisse könnten darauf hindeuten..., Es ließe sich argumentieren..., Man könnte vermuten..., Es wäre denkbar...) as more cautious and native-like than bare assertions; scientific caution (Die Daten könnten erklären..., Es wäre möglich..., Man müsste weitere Untersuchungen durchführen...); journalistic/political/legal commentary (Man könnte argumentieren..., Dies wäre problematisch, Es wäre zu prüfen..., Eine Änderung wäre denkbar) for rhetorical distance; and literary Konjunktiv II for hypothetical narration, emotional distance, and irony. The most important things to catch: overusing "würde" as a generic all-purpose Konjunktiv II marker instead of choosing the more precise/native alternative (hätte, wäre, dürfte, könnte, müsste, or a synthetic Konjunktiv II form); sounding too direct/blunt in contexts (academic, diplomatic, professional) where hedging or softening is expected; confusing degrees of certainty (using "könnte" when "dürfte" — much more certain — is meant, or vice versa); literal translation of English modal hedging into German; weak or absent academic hedging where a claim needs qualification; using an inappropriate register (e.g. overly casual Konjunktiv II in a legal or academic context). The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag places where a bare, direct/certain statement would sound more native as a hedged or diplomatically softened Konjunktiv II construction, especially in academic, diplomatic, or professional register. Flag confusion between certainty degrees (dürfte vs. könnte vs. müsste). Flag generic overuse of "würde" where a more precise alternative fits better. Do NOT flag basic Konjunktiv II form/conjugation errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around degree of certainty / diplomacy / register). If none: <li>No errors — well done.</li> 3) <p><b>Native-level attitude check:</b> one sentence on whether the learner adjusts the "dimmer" (certainty, diplomacy, hedging) deliberately rather than defaulting to bare statements or generic "würde".</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you adjust the dimmer switch deliberately across registers. Ready for the next chapter.', mid: 'Good. Re-read the Certainty Scale and Attitude Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: Konjunktiv II is a dimmer switch, not an on/off switch.' },
  parserSentence: [ { w: 'Das', role: 'plain' }, { w: 'dürfte', role: 'r-konjunktiv-hedging' }, { w: 'stimmen', role: 'r-konjunktiv-hedging' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: Konjunktiv II is a dimmer switch adjusting certainty, diplomacy, and distance, not an on/off switch.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Christel and Timo reformulate direct statements into diplomatic, hedged, academically appropriate Konjunktiv II.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn key C2 Konjunktiv II expressions across hedging, diplomacy, and debate registers — full popups with two examples and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master the certainty scale, diplomatic softening, academic hedging, and register-based Konjunktiv II selection.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic journal article, a political commentary, and a literary excerpt for pragmatic Konjunktiv II use.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify hedging, politeness, hypothesis, and pragmatic meaning in a seminar, panel discussion, and political interview.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice diplomatic discussion, academic presentation, and expressing disagreement politely at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite direct statements diplomatically, add academic hedging, and write a 550-word integrated essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill the certainty scale, hedging, diplomatic reformulation, and register selection.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1325 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter expressions with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '12 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Certainty scale, hedging, and diplomatic reformulation drills, plus the full 550-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '18 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Attitude Model, Certainty Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Das dürfte stimmen.', text: 'Hedge a claim with an appropriate degree of certainty (dürfte vs. könnte vs. müsste)' },
    { de: 'Es wäre sinnvoll, ...', text: 'Soften a professional recommendation diplomatically instead of stating it bluntly' },
    { de: 'Die Ergebnisse könnten darauf hindeuten, dass ...', text: 'Use authentic academic hedging instead of overclaiming' },
    { de: 'Es wäre zu prüfen, ob ...', text: 'Use political/legal Konjunktiv II for rhetorical distance' },
    { de: 'Konjunktiv II ist ein Dimmer, kein Ein-Aus-Schalter.', text: 'Understand the chapter\'s core "dimmer switch" metaphor for speaker attitude' }
  ],
  vocab: [
    { de: 'Das dürfte stimmen.', pos: 'expression (Konjunktiv II, epistemic)', level: 'C2', register: 'academic/formal', en: 'That is likely to be true.', hi: 'यह सही होना चाहिए (उच्च संभावना)', synonyms: 'Das müsste stimmen.', antonyms: 'Das stimmt definitiv nicht.', ex: 'Schreib nicht "Das stimmt", schreib lieber "Das dürfte stimmen".', exEn: 'Don\'t write "that\'s true", write instead "that is likely to be true".', exHi: '"Das stimmt" mat likho, behtar hai likho "das dürfte stimmen".', ex2: 'Die Hypothese dürfte sich mit weiteren Daten bestätigen.', ex2En: 'The hypothesis is likely to be confirmed with further data.', ex2Hi: 'Aur data ke saath hypothesis confirm ho sakti hai.' },
    { de: 'Es wäre sinnvoll, ...', pos: 'expression (Konjunktiv II, diplomatic)', level: 'C2', register: 'professional/diplomatic', en: 'It would make sense to ...', hi: 'यह समझदारी होगी कि ...', synonyms: 'Es könnte hilfreich sein, ...', antonyms: null, ex: 'Statt "Wir sollten" nutzen wir "Es wäre sinnvoll".', exEn: 'Instead of "We should" we use "It would be sensible".', exHi: '"Wir sollten" ki jagah hum "Es wäre sinnvoll" istemaal karte hain.', ex2: 'Es wäre sinnvoll, die Ergebnisse vor der Konferenz zu überprüfen.', ex2En: 'It would make sense to review the results before the conference.', ex2Hi: 'Conference se pehle parinaamon ko check karna samajhdaari hogi.' },
    { de: 'Man könnte vermuten, dass ...', pos: 'expression (Konjunktiv II, academic hedging)', level: 'C2', register: 'academic', en: 'One might suspect that ...', hi: 'ऐसा अनुमान लगाया जा सकता है कि ...', synonyms: 'Es ließe sich argumentieren, dass ...', antonyms: 'Es ist bewiesen, dass ...', ex: 'Man könnte vermuten, dass externe Faktoren das Ergebnis beeinflussten.', exEn: 'One might suspect that external factors influenced the result.', exHi: 'Yeh anumaan lagaya jaa sakta hai ki bahri factors ne result ko prabhaavit kiya.', ex2: 'Man könnte vermuten, dass die Stichprobe zu klein war.', ex2En: 'One might suspect that the sample was too small.', ex2Hi: 'Yeh anumaan lagaya jaa sakta hai ki sample bahut chhota tha.' },
    { de: 'Es wäre denkbar, dass ...', pos: 'expression (Konjunktiv II, hypothesis)', level: 'C2', register: 'academic/scientific', en: 'It would be conceivable that ...', hi: 'यह संभव है कि ...', synonyms: 'Es wäre möglich, dass ...', antonyms: 'Es ist ausgeschlossen, dass ...', ex: 'Es wäre denkbar, dass sich die Ergebnisse in einer größeren Studie bestätigen.', exEn: 'It would be conceivable that the results are confirmed in a larger study.', exHi: 'Yeh sambhav hai ki ek bade study mein parinaam confirm ho jaayein.', ex2: 'Es wäre denkbar, eine alternative Methode einzusetzen.', ex2En: 'It would be conceivable to employ an alternative method.', ex2Hi: 'Ek alag method ka istemaal karna sambhav hai.' },
    { de: 'Es wäre zu prüfen, ob ...', pos: 'expression (Konjunktiv II, political/legal)', level: 'C2', register: 'political/legal/formal', en: 'It would need to be examined whether ...', hi: 'यह जांचना होगा कि ...', synonyms: 'Man müsste untersuchen, ob ...', antonyms: null, ex: 'Es wäre zu prüfen, ob die Regelung mit geltendem Recht vereinbar ist.', exEn: 'It would need to be examined whether the regulation is compatible with current law.', exHi: 'Jaanchna hoga ki niyam maujooda kaanoon ke saath compatible hai ya nahi.', ex2: 'Es wäre zu prüfen, ob weitere Maßnahmen erforderlich sind.', ex2En: 'It would need to be examined whether further measures are necessary.', ex2Hi: 'Jaanchna hoga ki aur upaay zaroori hain ya nahi.' },
    { de: 'Ich hätte einen alternativen Vorschlag.', pos: 'expression (Konjunktiv II, diplomatic disagreement)', level: 'C2', register: 'professional/diplomatic', en: 'I would have an alternative suggestion.', hi: 'मेरे पास एक वैकल्पिक सुझाव होगा।', synonyms: 'Ich würde etwas anderes vorschlagen.', antonyms: null, ex: 'Ich hätte einen alternativen Vorschlag, der weniger Ressourcen benötigt.', exEn: 'I would have an alternative suggestion that requires fewer resources.', exHi: 'Mere paas ek alternative sujhaav hai jisme kam resources chahiye.', ex2: 'Bevor wir entscheiden, hätte ich einen alternativen Vorschlag.', ex2En: 'Before we decide, I would have an alternative suggestion.', ex2Hi: 'Faisla lene se pehle, mere paas ek alternative sujhaav hai.' },
    { de: 'Dies wäre problematisch.', pos: 'expression (Konjunktiv II, journalistic distance)', level: 'C2', register: 'journalism/political', en: 'This would be problematic.', hi: 'यह समस्याजनक होगा।', synonyms: 'Das könnte Probleme verursachen.', antonyms: 'Das wäre unproblematisch.', ex: 'Dies wäre problematisch, wenn die Daten öffentlich würden.', exEn: 'This would be problematic if the data became public.', exHi: 'Agar data public ho jaaye toh yeh samasyajanak hoga.', ex2: 'Ohne klare Regeln wäre dies problematisch für alle Beteiligten.', ex2En: 'Without clear rules this would be problematic for all involved.', ex2Hi: 'Saaf niyam ke bina yeh sabhi ke liye samasyajanak hoga.' }
  ],
  grammar: [
    { title: 'Konjunktiv II als Sprechereinstellung (Konjunktiv II as Speaker Attitude)', body: [ 'Reality → Speaker\'s Distance → Communicative Goal → Chosen Konjunktiv. The same reality can be expressed with different Konjunktiv II forms depending on the speaker\'s certainty, politeness, or emotional distance.' ], hinglish: 'C2 par Konjunktiv II ka kaam grammar se aage nikal jaata hai \u2014 yeh batata hai ki bolne wala apni baat se <b>kitni doori</b> rakhna chahta hai. Ek hi haqeeqat ko kai tarah se kaha jaa sakta hai, aur form badalne se certainty, politeness aur tone badal jaate hain. Isliye yahan sawaal yeh nahi ki form sahi hai, balki yeh ki form tumhari niyat se match karta hai.' },
    { title: 'Abstufungen der Hypothese (Degrees of Hypothesis)', body: [ 'Das stimmt. → Das dürfte stimmen. → Das könnte stimmen. → Das müsste stimmen. → Das würde stimmen, wenn... Each step down this scale expresses decreasing certainty and increasing hedging.' ], hinglish: 'Yeh certainty ka scale hai, aur C2 par yahi sabse zyada test hota hai. <span class="de">Das stimmt</span> poora dava hai. <b>d\u00fcrfte</b> matlab kaafi sambhavna. <b>m\u00fcsste</b> thoda alag hai \u2014 matlab tark se aisa hi hona chahiye. <b>k\u00f6nnte</b> matlab sirf mumkin hai. Aur <b>w\u00fcrde \u2026 wenn</b> matlab sirf ek shart par. Sabse aam galti yeh hai ki <b>k\u00f6nnte</b> wahan laga diya jaata hai jahan saboot majboot hai \u2014 tab <b>d\u00fcrfte</b> chahiye.' },
    { title: 'Diplomatische Kommunikation (Diplomatic Communication)', body: [ 'Ich würde vorschlagen..., Es wäre sinnvoll..., Man könnte überlegen..., Ich hätte einen alternativen Vorschlag. Native speakers avoid directness in professional and diplomatic contexts using Konjunktiv II.' ], hinglish: 'Office aur diplomatic baat mein seedha kehna rukha lagta hai, isliye Konjunktiv II se baat narm ki jaati hai: <span class="de">Ich w\u00fcrde vorschlagen, \u2026</span>, <span class="de">Es w\u00e4re sinnvoll, \u2026</span>, <span class="de">Man k\u00f6nnte \u00fcberlegen, \u2026</span>. Do baatein dhyaan mein rakho \u2014 <b>Es w\u00e4re sinnvoll</b> ke baad <b>zu + Infinitiv</b> aata hai, <i>dass</i> nahi. Aur <b>man</b> lagane se baat kisi par thopi hui nahi lagti.' },
    { title: 'Akademisches Hedging (Academic Hedging)', body: [ 'Die Ergebnisse könnten darauf hindeuten..., Es ließe sich argumentieren..., Man könnte vermuten..., Es wäre denkbar... Cautious academic writing avoids overclaiming by hedging strong statements with Konjunktiv II.' ], hinglish: 'Academic writing mein koi baat poore dave se nahi likhi jaati \u2014 aur yeh kamzori nahi, professional andaaz hai. <span class="de">Die Ergebnisse k\u00f6nnten darauf hindeuten, dass \u2026</span>, <span class="de">Es lie\u00dfe sich argumentieren, dass \u2026</span>, <span class="de">Es w\u00e4re denkbar, dass \u2026</span>. Par ek hedge kaafi hai \u2014 <i>k\u00f6nnte m\u00f6glicherweise vielleicht</i> likhne se baat dhili pad jaati hai, mazboot nahi.' },
    { title: 'Register-spezifischer Konjunktiv II (Register-Based Usage)', body: [ 'Scientific: Die Daten könnten erklären..., Man müsste weitere Untersuchungen durchführen. Journalism: Man könnte argumentieren..., Dies wäre problematisch. Political/Legal: Es wäre zu prüfen..., Eine Änderung wäre denkbar. Literature: Konjunktiv II expresses unreal worlds, emotional distance, and irony in narration.' ], hinglish: 'Har register mein Konjunktiv II ka kaam thoda alag hai. Scientific writing mein yeh caution dikhata hai (<span class="de">Man m\u00fcsste weitere Untersuchungen durchf\u00fchren</span>). News mein balance (<span class="de">Man k\u00f6nnte argumentieren, dass \u2026</span>). Legal texts mein zimmedaari se bachaav (<span class="de">Es w\u00e4re zu pr\u00fcfen</span> \u2014 dhyaan do, yahan <b>zu + Infinitiv</b> hai). Aur literature mein yeh un duniyaon ke liye aata hai jo asli nahi hain, ya lekhak ki doori aur vyang dikhane ke liye.' },
    {
      title: 'Die Formen \u2014 und wann w\u00fcrde Pflicht ist',
      body: [
        'The synthetic Konjunktiv II comes from the Pr\u00e4teritum stem plus <b>-e</b> and an umlaut where possible: <i>hatte \u2192 h\u00e4tte</i>, <i>war \u2192 w\u00e4re</i>, <i>kam \u2192 k\u00e4me</i>, <i>lie\u00df \u2192 lie\u00dfe</i>.',
        'Which form to use is not free choice. Three groups must use the synthetic form, and weak verbs must use <b>w\u00fcrde</b>.'
      ],
      table: {
        head: ['Group', 'Rule', 'Example'],
        rows: [
          ['haben, sein, modals', 'synthetic <b>compulsory</b>', '<span class="de">h\u00e4tte, w\u00e4re, k\u00f6nnte, m\u00fcsste, d\u00fcrfte</span>'],
          ['common strong verbs', 'synthetic preferred in writing', '<span class="de">k\u00e4me, ginge, lie\u00dfe, g\u00e4be, w\u00fcsste</span>'],
          ['weak verbs', '<b>w\u00fcrde</b> \u2014 the synthetic form equals the Pr\u00e4teritum', '<span class="de">w\u00fcrde pr\u00fcfen</span>, not <i>pr\u00fcfte</i>'],
          ['past hypothesis', 'h\u00e4tte / w\u00e4re + <b>Partizip II</b>', '<span class="de">H\u00e4tte ich das gewusst \u2026</span>'],
          ['past + modal', 'h\u00e4tte + Infinitiv + <b>modal</b> last', '<span class="de">Ich h\u00e4tte pr\u00fcfen <b>m\u00fcssen</b>.</span>']
        ]
      },
      note: 'The certainty scale is what C2 is really tested on: <b>m\u00fcsste</b> = logically must be so, <b>d\u00fcrfte</b> = very likely, <b>k\u00f6nnte</b> = possible, <b>m\u00f6chte</b> = wish. And weak verbs need w\u00fcrde because <i>pr\u00fcfte</i> is identical to the Pr\u00e4teritum \u2014 German avoids the ambiguity.',
      hinglish: 'Synthetic Konjunktiv II banta hai Pr\u00e4teritum stem se \u2014 uspar <b>-e</b> aur ho sake to umlaut: <i>hatte</i> se <b>h\u00e4tte</b>, <i>war</i> se <b>w\u00e4re</b>, <i>kam</i> se <b>k\u00e4me</b>. Ab sawaal yeh ki kab synthetic aur kab <b>w\u00fcrde</b> \u2014 aur yeh marzi ki baat nahi hai. <b>haben</b>, <b>sein</b> aur modals ke saath synthetic form <b>zaroori</b> hai; <i>w\u00fcrde haben</i> kabhi nahi. Weak verbs ke saath <b>w\u00fcrde</b> hi chalta hai, kyunki unka Konjunktiv II Pr\u00e4teritum jaisa hi dikhta hai (<i>pr\u00fcfte</i>), isliye confusion se bachne ke liye <b>w\u00fcrde pr\u00fcfen</b> kehte hain. Past ki baat ho to <b>h\u00e4tte/w\u00e4re + Partizip II</b>, aur modal ho to modal sabse end mein: <span class="de">Ich h\u00e4tte pr\u00fcfen m\u00fcssen.</span> Aur C2 par asal mein certainty ka scale test hota hai \u2014 <b>m\u00fcsste</b> matlab tark se aisa hi hona chahiye, <b>d\u00fcrfte</b> matlab kaafi sambhavna, <b>k\u00f6nnte</b> matlab ho sakta hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Function mapped to native purpose and typical register.' ], table: { head: ['Function', 'Native Purpose', 'Typical Register'], rows: [ ['Hypothesis', 'Possibility', 'Academic'], ['Hedging', 'Scientific caution', 'Scientific'], ['Diplomacy', 'Softening', 'Professional'], ['Counterfactual', 'Reflection', 'Literature'], ['Politeness', 'Respect', 'Everyday & Business'], ['Debate', 'Balanced argument', 'Politics'] ] }, hinglish: 'Function, uska maksad aur register \u2014 teen column. Par sabse kaam ki cheez neeche wala block hai, jo batata hai ki kaunsi form kab zaroori hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Five of these are formal \u2014 the compulsory forms, what follows each frame, and not doubling what is already marked. The third is the C2 error that matters most: a hedge that does not match the evidence.' ], mistakes: [
      { wrong: 'Wenn ich mehr Zeit w\u00fcrde haben, w\u00fcrde ich das pr\u00fcfen.', right: 'Wenn ich mehr Zeit h\u00e4tte, w\u00fcrde ich das pr\u00fcfen.', why: '<b>haben</b> and <b>sein</b> never combine with w\u00fcrde \u2014 their own forms <b>h\u00e4tte</b> and <b>w\u00e4re</b> are compulsory.' },
      { wrong: 'Es w\u00e4re sinnvoll, dass man die Daten pr\u00fcft.', right: 'Es w\u00e4re sinnvoll, die Daten zu pr\u00fcfen.', why: '<b>Es w\u00e4re sinnvoll</b> takes <b>zu + Infinitiv</b>, not a dass-clause \u2014 the impersonal frame is what makes it sound diplomatic.' },
      { wrong: 'Alle Daten sprechen daf\u00fcr \u2014 das k\u00f6nnte stimmen.', right: 'Alle Daten sprechen daf\u00fcr \u2014 das d\u00fcrfte stimmen. / das m\u00fcsste stimmen.', why: 'The hedge has to match the evidence. <b>k\u00f6nnte</b> is a bare possibility; with the evidence pointing one way you need <b>d\u00fcrfte</b> (very likely) or <b>m\u00fcsste</b> (logically must be so).' },
      { wrong: 'Es lie\u00dfe sich argumentiert werden, dass \u2026', right: 'Es lie\u00dfe sich argumentieren, dass \u2026', why: '<b>sich lassen</b> already carries the passive meaning, so it takes a plain infinitive \u2014 never a passive after it.' },
      { wrong: 'Die Ergebnisse k\u00f6nnten m\u00f6glicherweise vielleicht darauf hindeuten.', right: 'Die Ergebnisse k\u00f6nnten darauf hindeuten.', why: 'One hedge is enough. Stacking <i>k\u00f6nnte</i>, <i>m\u00f6glicherweise</i> and <i>vielleicht</i> weakens the sentence instead of making it more careful.' },
      { wrong: 'H\u00e4tte ich das gewusst, h\u00e4tte ich anders gehandelt gehabt.', right: 'H\u00e4tte ich das gewusst, h\u00e4tte ich anders gehandelt.', why: 'One <b>h\u00e4tte</b> per clause. (Note the dropped <i>wenn</i> in the first clause is correct and quite elegant, as long as the verb comes first.)' }
    ], hinglish: 'Paanch galtiyan form ki hain \u2014 zaroori forms, har frame ke baad kya aata hai, aur jo cheez pehle se mark ho chuki use dobara mark na karna. Aur teesri woh hai jo C2 par sabse zyada maayne rakhti hai: hedge jo saboot se match nahi karta.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'What is your communicative goal? State a fact? Express possibility? Be diplomatic? Hedge an academic claim? Create a hypothetical world? Choose the most appropriate Konjunktiv II structure.' ], note: 'Memory trick: imagine Konjunktiv II as a dimmer switch instead of an ON/OFF switch. You are not changing reality. You are adjusting how strongly your statement shines. Native speakers constantly adjust that brightness depending on politeness, certainty, diplomacy and style.', hinglish: 'Pehle yeh tay karo ki tum kya kar rahe ho \u2014 fact bata rahe ho, sambhavna, diplomacy, academic hedge, ya koi kalpanik baat. Uske baad certainty ke hisaab se form chuno, aur ek baar check karo: <b>haben/sein/modal</b> ke saath synthetic form lagi hai, weak verb ke saath <b>w\u00fcrde</b>, aur ek se zyada hedge nahi laga?' }
  ],
  reading: {
    title: 'Fachjournal: Ungeklärtes Massensterben vor der Küste',
    titleEn: 'Reading A — Journal: unexplained mass die-off off the coast',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'der', role: 'plain', en: 'of the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'Wasserproben', role: 'plain', en: 'water samples (Satzende)', hi: 'जल नमूनों (Satzende)', type: 'Noun · plural' },
      { w: 'könnten', role: 'r-konjunktiv-hedging', en: 'could (Konjunktiv II hedge, part of "könnten darauf hindeuten")', hi: '', type: 'Modalverb (Konjunktiv II)' },
      { w: 'darauf', role: 'r-konjunktiv-hedging', en: 'to this (part of the construction)', hi: '', type: 'Pronominaladverb' },
      { w: 'hindeuten', role: 'r-konjunktiv-hedging', en: 'point (Satzende, the hedged academic construction "könnten darauf hindeuten")', hi: 'संकेत दे सकते हैं (Satzende, hedged academic construction)', type: 'Verb (Infinitiv, Satzende)', why: 'This hedged construction ("könnten darauf hindeuten") is more scientifically cautious than a bare claim like "zeigen" (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'कि', type: 'Konjunktion' },
      { w: 'ein', role: 'plain', en: 'an (masc.)', hi: 'एक', type: 'Article' },
      { w: 'ungewöhnlich', role: 'plain', en: 'unusually', hi: 'असाधारण रूप से', type: 'Adverb' },
      { w: 'warmer', role: 'plain', en: 'warm', hi: 'गर्म', type: 'Adjective · Nom.' },
      { w: 'Meeresstrom', role: 'plain', en: 'ocean current (Satzende)', hi: 'समुद्री धारा (Satzende)', type: 'Noun · masc.' },
      { w: 'eine', role: 'plain', en: 'a (fem. akk.)', hi: 'एक', type: 'Article' },
      { w: 'zentrale', role: 'plain', en: 'central', hi: 'केंद्रीय', type: 'Adjective · Akk.' },
      { w: 'Rolle', role: 'plain', en: 'role (Satzende)', hi: 'भूमिका (Satzende)', type: 'Noun · fem.' },
      { w: 'spielte', role: 'plain', en: 'played (Satzende)', hi: 'निभाई (Satzende)', type: 'Verb (Präteritum, Satzende)' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'a (masc.)', hi: 'एक', type: 'Article' },
      { w: 'endgültiger', role: 'plain', en: 'definitive', hi: 'अंतिम', type: 'Adjective' },
      { w: 'Beweis', role: 'plain', en: 'proof (Satzende)', hi: 'सबूत (Satzende)', type: 'Noun · masc.' },
      { w: 'stehe', role: 'r-konjunktiv1', en: 'is (Konjunktiv I, reporting the lead author\'s own qualification)', hi: '(Konjunktiv I)', type: 'Verb · stehen (Konjunktiv I)' },
      { w: 'jedoch', role: 'plain', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'noch', role: 'plain', en: 'still', hi: 'अभी भी', type: 'Adverb' },
      { w: 'aus', role: 'plain', en: 'out (Satzende)', hi: '(Satzende)', type: 'Adverb (Satzende)' },
      { w: ',', plain: true },
      { w: 'so', role: 'plain', en: 'thus', hi: 'ऐसा', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Studienleiterin', role: 'plain', en: 'lead author (f.) (Satzende)', hi: 'अध्ययन प्रमुख (Satzende)', type: 'Noun · fem.' },
      { w: '.', plain: true }
    ],
    translation: 'The results of the water samples could point to an unusually warm ocean current having played a central role. However, definitive proof is still lacking, says the lead author.',
    comprehension: [
      { q: 'Warum wählt die Studie "könnten darauf hindeuten" statt "zeigen"?', options: ['Für wissenschaftliche Vorsicht (Hedging)', 'Weil "zeigen" grammatisch falsch ist', 'Aus Zufall'], answer: 0 },
      { q: 'Was signalisiert diese Konjunktiv-II-Konstruktion?', options: ['Eine vorsichtige, gehedgte Aussage', 'Eine absolute Gewissheit', 'Eine Frage'], answer: 0 },
      { q: 'Ist "könnten" hier stärker oder schwächer als "dürften"?', options: ['Schwächer (weniger sicher)', 'Stärker (sicherer)', 'Gleich stark'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Politischer Kommentar', titleEn: 'Reading B — Political commentary',
    tokens: [
      { w: 'Es', role: 'plain', en: 'it', hi: '', type: 'Pronomen · Nom.' },
      { w: 'wäre', role: 'r-konjunktiv-politik', en: 'would be (Konjunktiv II, political rhetorical distance, part of "es wäre zu prüfen")', hi: '(political rhetorical distance)', type: 'Verb · sein (Konjunktiv II)' },
      { w: 'zu', role: 'r-konjunktiv-politik', en: '(part of the construction)', hi: '(construction ka hissa)', type: 'Infinitivpartikel' },
      { w: 'prüfen', role: 'r-konjunktiv-politik', en: 'to examine (Satzende, the political/legal hedged construction)', hi: '(Satzende, political/legal construction)', type: 'Verb (Infinitiv, Satzende)' },
      { w: ',', plain: true },
      { w: 'ob', role: 'plain', en: 'whether', hi: 'kya', type: 'Konjunktion' },
      { w: 'die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Regelung', role: 'plain', en: 'regulation (Satzende)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: 'wirksam', role: 'plain', en: 'effective', hi: 'prabhaavi', type: 'Adjective' },
      { w: 'ist', role: 'plain', en: 'is (Satzende)', hi: 'hai (Satzende)', type: 'Verb (Präsens, Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'It would need to be examined whether the regulation is effective.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_006_L001', speaker: 'Christel', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, "das ist notwendig" klingt im Antrag zu absolut, findest du nicht?', en: 'Timo, "that is necessary" sounds too absolute in the proposal, don\'t you think?' },
      { id: 'C2_006_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, "das wäre sinnvoll" lässt mehr Verhandlungsspielraum.', en: 'True, "that would be sensible" leaves more room for negotiation.' },
      { id: 'C2_006_L003', speaker: 'Christel', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und bei der Kostenschätzung? "Es könnte teurer werden" statt "es wird teurer"?', en: 'And for the cost estimate? "It could get more expensive" instead of "it will get more expensive"?' },
      { id: 'C2_006_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, so klingen wir vorsichtig, ohne unsicher zu wirken.', en: 'Exactly, that way we sound cautious without seeming unsure.' }
    ],
    transcript: 'Timo, "das ist notwendig" klingt im Antrag zu absolut, findest du nicht? Stimmt, "das wäre sinnvoll" lässt mehr Verhandlungsspielraum. Und bei der Kostenschätzung? "Es könnte teurer werden" statt "es wird teurer"? Genau, so klingen wir vorsichtig, ohne unsicher zu wirken.',
    translation: 'Timo, "that is necessary" sounds too absolute in the proposal, don\'t you think? True, "that would be sensible" leaves more room for negotiation. And for the cost estimate? "It could get more expensive" instead of "it will get more expensive"? Exactly, that way we sound cautious without seeming unsure.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'das' },
      { w: 'ist' },
      { w: 'notwendig' },
      { w: '"', plain: true },
      { w: 'klingt' },
      { w: 'im' },
      { w: 'Antrag' },
      { w: 'zu' },
      { w: 'absolut' },
      { w: ',', plain: true },
      { w: 'findest' },
      { w: 'du' },
      { w: 'nicht' },
      { w: '?', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'das' },
      { w: 'wäre' },
      { w: 'sinnvoll' },
      { w: '"', plain: true },
      { w: 'lässt' },
      { w: 'mehr' },
      { w: 'Verhandlungsspielraum' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'bei' },
      { w: 'der' },
      { w: 'Kostenschätzung' },
      { w: '?', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Es' },
      { w: 'könnte' },
      { w: 'teurer' },
      { w: 'werden' },
      { w: '"', plain: true },
      { w: 'statt' },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'es' },
      { w: 'wird' },
      { w: 'teurer' },
      { w: '"?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'klingen' },
      { w: 'wir' },
      { w: 'vorsichtig' },
      { w: ',', plain: true },
      { w: 'ohne' },
      { w: 'unsicher' },
      { w: 'zu' },
      { w: 'wirken' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Welche Wendung schlägt Timo statt "das ist notwendig" vor?', qEn: 'What phrase does Timo suggest instead of "das ist notwendig"?', options: ['das ist sicher', 'das wäre sinnvoll', 'das muss sein', 'das ist fraglich'], optionsEn: ['that is certain', 'that would make sense', 'that has to be', 'that is questionable'], answer: 1,
        explain: '"Das wäre sinnvoll" — Konjunktiv II softens the claim.' },
      { q: 'Wie formulieren sie die Kostenschätzung?', qEn: 'How do they phrase the cost estimate?', options: ['es wird teurer', 'es könnte teurer werden', 'es ist zu teuer', 'die Kosten sind fix'], optionsEn: ['it is getting more expensive', 'it could get more expensive', 'it is too expensive', 'the costs are fixed'], answer: 1,
        explain: '"Es könnte teurer werden" statt "es wird teurer."' }
    ]
  },
  speaking: [
    { task: "Timo findet „das ist notwendig“ im Antrag zu absolut. Formuliere es um.", taskEn: "Timo finds 'that is necessary' too absolute in the proposal. Reformulate.", de: "Das wäre sinnvoll — so bleibt mehr Verhandlungsspielraum.", en: "That would be sensible — that leaves more room for negotiation." },
    { task: "Bei der Kostenschätzung willst du dich nicht festlegen.", taskEn: "On the cost estimate you don't want to commit.", de: "Es wäre zu prüfen, ob die Summe realistisch ist.", en: "It would have to be examined whether the sum is realistic." },
    { task: "Ein Gutachter fragt, ob der Effekt bestehen bleibt.", taskEn: "A reviewer asks whether the effect persists.", de: "Das dürfte stimmen, wenn man das Alter kontrolliert.", en: "That's likely right if age is controlled for." },
    { task: "Ein Gutachter fragt, wie du deine Annahme im Aufsatz formulierst.", taskEn: "A reviewer asks how you phrase your assumption in the essay.", de: "Es wäre denkbar, dass der Zusammenhang institutionell bedingt ist.", en: "It would be conceivable that the correlation is institutionally conditioned." },
    { task: "Du hältst den Vorschlag für schwach. Sag es tragbar.", taskEn: "You consider the proposal weak. Say it so it can be heard.", de: "Dies wäre problematisch, weil die Datenbasis zu schmal ist.", en: "This would be problematic, because the data basis is too narrow." }
  ],
  writing: {
    prompt: 'TASK 1 — Diplomatic reformulation (150 words): Rewrite direct statements into diplomatically appropriate Konjunktiv II. Explain every improvement.\n\nTASK 2 — Academic hedging (150 words): Rewrite an argumentative article using authentic academic hedging.\n\nTASK 3 — Essay (550 words): Write a C2 argumentative essay naturally integrating sophisticated Konjunktiv II across academic, political and professional registers.',
    starters: ['Das dürfte stimmen...', 'Es wäre sinnvoll...', 'Man könnte vermuten, dass...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Konjunktiv II als Sprechereinstellung...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which expression signals the highest degree of certainty on the Konjunktiv II scale?', options: ['Das dürfte stimmen.', 'Das könnte stimmen.', 'Das würde stimmen, wenn...'], answer: 0, explain: '"dürfte" signals very high probability, higher than "könnte" (possible) or a conditional "würde... wenn" construction.' },
    gap: { sentence: ['Es ', ' sinnvoll, weitere Daten zu sammeln.'], gaps: [ { answer: 'wäre', accepts: ['wäre'] } ], explain: '"Es wäre sinnvoll" is the diplomatic Konjunktiv II construction for softening a recommendation.' },
    match: { q: 'Match each Konjunktiv II function to its typical register.', pairs: [ { noun: 'Das dürfte stimmen.', art: 'Academic hedging' }, { noun: 'Es wäre sinnvoll...', art: 'Professional/diplomatic' }, { noun: 'Es wäre zu prüfen...', art: 'Political/legal' }, { noun: 'Man könnte vermuten...', art: 'Academic' } ] },
    builder: { target: 'Build: "One might suspect that the sample was too small." (academic hedging)', bank: ['Man', 'könnte', 'vermuten', ',', 'dass', 'die', 'Stichprobe', 'zu', 'klein', 'war', '.'], answer: ['Man', 'könnte', 'vermuten', ',', 'dass', 'die', 'Stichprobe', 'zu', 'klein', 'war', '.'], roles: { 'könnte': 'r-konjunktiv-hedging', 'vermuten': 'r-konjunktiv-hedging' } },
    errorCorrection: { title: 'Error correction', wrong: 'Das stimmt in einem sehr vorsichtigen akademischen Kontext.', right: 'Das dürfte stimmen.', explain: 'In a cautious academic context, the bare claim "Das stimmt" should be hedged with Konjunktiv II ("Das dürfte stimmen") to avoid overclaiming.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for Konjunktiv II in this chapter?', options: ['It is a dimmer switch, adjusting certainty/diplomacy/distance rather than an on/off switch', 'It always means the same as Konjunktiv I', 'It only appears in unreal conditional sentences'], answer: 0, explain: 'Native speakers use Konjunktiv II to dial the brightness of a claim up or down, not to switch reality on or off.' },
    { q: 'Which of these expresses the strongest degree of certainty?', options: ['dürfte', 'könnte', 'würde... wenn'], answer: 0, explain: '"dürfte" signals very high probability among the epistemic Konjunktiv II modals.' },
    { q: 'Why do native speakers say "Es wäre sinnvoll..." instead of "Wir sollten..."?', options: ['To soften a recommendation diplomatically in professional contexts', 'Because "sollten" is grammatically incorrect', 'They mean completely different things'], answer: 0, explain: 'Konjunktiv II softens directness, which is expected in diplomatic and professional communication.' },
    { q: 'What is a common C2 learner mistake with Konjunktiv II?', options: ['Overusing "würde" as a generic marker instead of a more precise alternative', 'Never using Konjunktiv II at all', 'Only using it in literature'], answer: 0, explain: '"würde" is often a default overused by learners when hätte, wäre, dürfte, könnte, or müsste would be more precise.' },
    { q: 'Why is academic hedging (e.g. "könnten darauf hindeuten") preferred over a bare claim?', options: ['It signals scientific caution and avoids overclaiming', 'It is shorter to write', 'Bare claims are grammatically incorrect'], answer: 0, explain: 'Cautious, hedged claims are the native academic norm; bare unhedged claims can sound overconfident.' }
  ],
  takeaways: [
    { c: 'r-lichtschalter-metapher', html: 'Konjunktiv II is a dimmer switch, not an on-off switch — it adjusts certainty, politeness, and distance rather than changing reality.' },
    { c: 'r-konjunktiv-hedging', html: 'Academic and scientific hedging (könnte darauf hindeuten, dürfte stimmen, ließe sich argumentieren) signals appropriate caution rather than overconfidence.' },
    { c: 'r-konjunktiv-diplomatie', html: 'Diplomatic softening (Es wäre sinnvoll, Ich hätte einen alternativen Vorschlag) replaces bluntness in professional communication.' }
  ],
  revisionTips: [
    'Take five direct/blunt statements and reformulate each along the certainty scale (dürfte / könnte / müsste).',
    'Rewrite one paragraph of academic writing, adding at least three authentic hedging expressions.',
    'Read one political commentary and identify every Konjunktiv II construction, noting whether it signals hedging, diplomacy, or rhetorical distance.'
  ]
};
window.CHAPTER = CHAPTER;
