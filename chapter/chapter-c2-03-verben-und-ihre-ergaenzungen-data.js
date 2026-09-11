/* KLARWEG CHAPTER DATA — C2 · Chapter 3
   "Verben und ihre Ergänzungen" (C2) — verb valency, argument
   structure, obligatory vs. optional complements, semantic roles,
   complement alternation and register-based complement selection.
   NOT case rules or basic Präpositionalobjekte (already mastered) —
   focus is WHY verbs require certain complements and how native
   speakers manipulate them for precision and style.
   Dialogue: Almut and Timo ONLY. Vocabulary covers 100% of the
   uploaded Chapter 3 word list (11 verb+preposition items). */
const CHAPTER = {
  id: 'c2-03-verben-und-ihre-ergaenzungen',
  phase: 'C2 · Das Verbalsystem auf C2-Niveau',
  number: 3,
  title: 'Verben und ihre Ergänzungen',
  titleEn: 'Verbs and their complements at native level',
  description: 'Imagine every German verb is a stage director. The verb decides who appears, who receives the action, where it happens, what is optional, what cannot be omitted.',
  xp: 1250, time: 130, difficulty: 'Mastery',
  nextChapter: { number: 4, title: 'Nomen-Verb-Verbindungen', titleEn: 'Noun-verb constructions at native level' , href: 'chapter-c2-04-nomen-verb-verbindungen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every verb opens a <em>framework</em> — the complements complete it.',
    intro: 'Revising her master\'s thesis, Almut has been reflecting for weeks on how it ties to older studies, and Timo asks whether her new approach connects to practice — repeatedly restructuring verb complements for clarity and academic style.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See exactly how educated native speakers know which complements are required, optional, or stylistically preferable'],
    scene: 'Überarbeitung einer Masterarbeit',
    femaleSpeakers: ['Almut'],
    dialogue: [
      { speaker: 'Almut', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'reflektiere', role: 'r-verb', en: 'reflect', hi: 'सोचती हूँ', pron: 're-flek-TEE-ruh', type: 'Verb · reflektieren über (ich)', why: 'reflektieren über + Akkusativ = to reflect on (this chapter).', ex: 'Ich reflektiere über meine These.', exEn: 'I reflect on my thesis.' },
        { w: 'über', role: 'r-preposition', en: 'on', hi: 'पर', pron: 'Ü-ber', type: 'Preposition (part of reflektieren über)' },
        { w: 'meine', role: 'r-akkusativ', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive · acc.' },
        { w: 'These', role: 'r-akkusativ', en: 'thesis', hi: 'थीसिस', pron: 'TAY-zuh', type: 'Noun · fem.' },
        { w: 'schon', role: 'r-akkusativ', en: 'already', hi: 'पहले से', pron: 'shohn', type: 'Adverb' },
        { w: 'seit', role: 'r-preposition', en: 'since', hi: 'से', pron: 'zyte', type: 'Preposition + dative' },
        { w: 'Wochen', role: 'r-dativ', en: 'weeks (dat.)', hi: 'हफ़्तों से', pron: 'VO-khen', type: 'Noun · plural dat.' },
        { w: '.', plain: true }
      ], en: 'I have already been reflecting on my thesis for weeks.', hi: 'Main hafton se apni thesis par soch rahi hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Woran', role: 'r-question', en: 'on what', hi: 'किस पर', pron: 'vo-RAN', type: 'Question word · da-compound' },
        { w: 'zweifelst', role: 'r-verb', en: 'do you doubt', hi: 'शक करती हो', pron: 'TSVY-felst', type: 'Verb · zweifeln an (du)', why: 'zweifeln an + Dativ = to doubt something (this chapter).', ex: 'Woran zweifelst du?', exEn: 'What do you doubt?' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'genau', role: 'r-akkusativ', en: 'exactly', hi: 'ठीक से', pron: 'ge-NOW', type: 'Adverb' },
        { w: '?', plain: true }
      ], en: 'What exactly do you doubt?', hi: 'Tumhe theek se kis par shak hai?' },
      { speaker: 'Almut', tokens: [
        { w: 'Meine', role: 'r-subject', en: 'my (fem.)', hi: 'मेरी', pron: 'MY-nuh', type: 'Possessive' },
        { w: 'These', role: 'r-subject', en: 'thesis', hi: 'थीसिस', pron: 'TAY-zuh', type: 'Noun · fem.' },
        { w: 'knüpft', role: 'r-verb', en: 'ties', hi: 'जुड़ती है', pron: 'KNÜPFT', type: 'Verb · anknüpfen an', why: 'anknüpfen an + Akkusativ = to tie/connect to (this chapter).', ex: 'Meine These knüpft an ältere Studien an.', exEn: 'My thesis ties to older studies.' },
        { w: 'an', role: 'r-preposition', en: 'to', hi: 'से', pron: 'an', type: 'Preposition (part of anknüpfen an)' },
        { w: 'ältere', role: 'r-akkusativ', en: 'older', hi: 'पुराने', pron: 'EL-te-ruh', type: 'Adjective' },
        { w: 'Studien', role: 'r-akkusativ', en: 'studies', hi: 'अध्ययनों', pron: 'SHTOO-dyen', type: 'Noun · plural' },
        { w: 'an', role: 'r-verb', en: '(prefix of anknüpfen)', hi: '', pron: 'an', type: 'Separable prefix · Satzende' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'muss', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'mus', type: 'Modal · müssen (ich)' },
        { w: 'mich', role: 'r-akkusativ', en: 'myself', hi: 'ख़ुद को', pron: 'mikh', type: 'Reflexive pronoun' },
        { w: 'erst', role: 'r-akkusativ', en: 'first', hi: 'पहले', pron: 'airst', type: 'Adverb' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'einem', role: 'r-dativ', en: 'a (neut. dat.)', hi: 'एक', pron: 'EYE-naym', type: 'Article · dative' },
        { w: 'neuen', role: 'r-dativ', en: 'new', hi: 'नए', pron: 'NOY-en', type: 'Adjective · dative' },
        { w: 'Ansatz', role: 'r-dativ', en: 'approach (dat.)', hi: 'दृष्टिकोण से', pron: 'AN-zats', type: 'Noun · masc. dat.' },
        { w: 'auseinandersetzen', role: 'r-verb', en: 'engage', hi: 'जूझना', pron: 'ows-ine-AN-der-zet-sen', type: 'Verb · sich auseinandersetzen mit (Satzende)', why: 'sich auseinandersetzen mit + Dativ = to engage/grapple with (this chapter).', ex: 'sich mit einem neuen Ansatz auseinandersetzen' },
        { w: '.', plain: true }
      ], en: 'My thesis ties to older studies, but I must first engage with a new approach.', hi: 'Meri thesis purane adhyayanon se judti hai, par mujhe pehle ek naye drishtikon se joojhna hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Verweist', role: 'r-verb', en: 'does refer', hi: 'संदर्भित करता है', pron: 'fer-VYST', type: 'Verb · verweisen auf', why: 'verweisen auf + Akkusativ = to refer to (this chapter).', ex: 'Dein Ansatz verweist auf die Praxis.', exEn: 'Your approach refers to practice.' },
        { w: 'dein', role: 'r-subject', en: 'your (masc.)', hi: 'तुम्हारा', pron: 'dine', type: 'Possessive' },
        { w: 'Ansatz', role: 'r-subject', en: 'approach', hi: 'दृष्टिकोण', pron: 'AN-zats', type: 'Noun · masc.' },
        { w: 'auf', role: 'r-preposition', en: 'to', hi: 'पर', pron: 'owf', type: 'Preposition (part of verweisen auf)' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Praxis', role: 'r-akkusativ', en: 'practice', hi: 'व्यवहार', pron: 'PRAK-sis', type: 'Noun · fem.' },
        { w: '?', plain: true }
      ], en: 'Does your approach refer to practice?', hi: 'Kya tumhaara drishtikon vyavhaar par sandarbhit karta hai?' },
      { speaker: 'Almut', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'möchte', role: 'r-modalverb', en: 'would like', hi: 'चाहती हूँ', pron: 'MÖKH-tuh', type: 'Modal · möchten (ich)' },
        { w: 'Theorie', role: 'r-akkusativ', en: 'theory', hi: 'सिद्धांत', pron: 'tay-o-REE', type: 'Noun · fem.' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'Praxis', role: 'r-akkusativ', en: 'practice', hi: 'व्यवहार', pron: 'PRAK-sis', type: 'Noun · fem.' },
        { w: 'miteinander', role: 'r-akkusativ', en: 'with each other', hi: 'आपस में', pron: 'mit-ine-AN-der', type: 'Adverb' },
        { w: 'verbinden', role: 'r-verb', en: 'connect', hi: 'जोड़ना', pron: 'fer-BIN-den', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Yes. I would like to connect theory and practice with each other.', hi: 'Haan. Main siddhaant aur vyavhaar ko aapas mein jodna chahti hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'bist', role: 'r-verb', en: 'are', hi: 'हो', pron: 'bist', type: 'Verb · sein (du)' },
        { w: 'du', role: 'r-subject', en: 'you', hi: 'तुम', pron: 'doo', type: 'Pronoun · subject' },
        { w: 'auf', role: 'r-preposition', en: 'on', hi: 'सही', pron: 'owf', type: 'Preposition (part of auf dem richtigen Weg)' },
        { w: 'dem', role: 'r-dativ', en: 'the (masc. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'richtigen', role: 'r-dativ', en: 'right', hi: 'सही', pron: 'RIKH-ti-gen', type: 'Adjective · dative' },
        { w: 'Weg', role: 'r-dativ', en: 'path (dat.)', hi: 'रास्ते पर', pron: 'vayk', type: 'Noun · masc. dat.' },
        { w: '.', plain: true }
      ], en: 'Then you are on the right path.', hi: 'Toh tum sahi raaste par ho.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Every German verb is a <span class="de r-regisseur-metapher">stage director</span> — it decides who appears, who receives the action, and what cannot be omitted.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is VERBEN UND IHRE ERGÄNZUNGEN at C2 level — verb VALENCY (Valenz), argument structure, obligatory vs. optional complements, semantic roles (Agent, Patient, Recipient, Experiencer, Instrument, Location, Source, Goal), complement alternation, and register-based complement selection, NOT basic case rules (Akkusativ/Dativ/Genitiv objects) or Präpositionalobjekte formation (already fully mastered). Covered: obligatory complements a verb cannot omit without becoming semantically incomplete (e.g. "reflektieren über + Akk", "sich beziehen auf + Akk", "beruhen auf + Dat", "abhängen von + Dat", "verweisen auf + Akk", "sich auseinandersetzen mit + Dat", "zweifeln an + Dat", "investieren in + Akk", "anknüpfen an + Akk", "anpassen an + Akk", "sich erinnern an + Akk", "oszillieren zwischen + Dat", "schützen vor + Dat"); distinguishing obligatory complements from optional adverbial modifiers (e.g. "Er wohnt in Berlin" — location required — vs. "Er liest ein Buch im Park" — "im Park" optional); semantic roles that complements fill; complement alternation for stylistic variation (jemandem helfen → Unterstützung leisten → Hilfe anbieten → zur Seite stehen — same meaning, different register/formality); and register-based complement selection across academic (Die Studie untersucht..., Die Analyse berücksichtigt..., sich beziehen auf), scientific (beruhen auf, resultieren aus, abhängen von, zusammenhängen mit), journalistic (hinweisen auf, warnen vor, bestreiten), and professional (verfügen über, beauftragen mit, verantwortlich sein für) usage. The most important things to catch: omitting an obligatory complement (leaving a verb semantically incomplete, even if grammatically parseable); adding unnecessary/redundant complements; confusing an obligatory complement with an optional adverbial; using the wrong preposition for a given verb\'s complement (e.g. "reflektieren an" instead of "reflektieren über"); literal translation of English verb-preposition patterns into German (a major source of errors, since English and German verb complementation rarely map one-to-one); unnaturally expanding or contracting sentences instead of choosing the register-appropriate complement structure. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag missing obligatory complements (verbs left semantically incomplete); flag incorrect prepositional complements for a given verb; flag confusion between obligatory complements and optional adverbials; flag literal-translation-style verb-preposition patterns. Do NOT flag basic case-marking errors as the primary issue unless clearly present — that is not this chapter\'s focus. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why (framed around obligatory vs. optional complements). If none: <li>No errors — well done.</li> 3) <p><b>Native-level valency check:</b> one sentence on whether the learner supplies each verb\'s obligatory complements naturally, without omission or over-explanation.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Outstanding — you consistently supply the right obligatory complements without omission. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Valency Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: the verb is a stage director deciding who cannot be left out.' },
  parserSentence: [ { w: 'Die', role: 'plain' }, { w: 'Studie', role: 'plain' }, { w: 'reflektiert', role: 'r-obligatorisch' }, { w: 'über', role: 'r-obligatorisch' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: every verb is a stage director, deciding which complements are obligatory and cannot be omitted.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Almut and Timo revise a thesis, discovering which complements are obligatory and which are freely optional.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn 11 C2 verb+preposition complement patterns — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master valency, obligatory vs. optional complements, semantic roles, and complement alternation for style.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an academic research paper, a government report, and a literary excerpt for complement structure.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify complements and semantic roles in a university lecture, scientific presentation, and professional meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice paraphrasing, explaining valency, and reformulating arguments at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Rewrite sentences by changing complement structures, upgrade a text to academic prose, and write a 500-word essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill valency mapping, obligatory vs. optional identification, and semantic role analysis.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1250 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations, synonyms, antonyms, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '10 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Valency mapping, obligatory vs. optional identification, and complement transformation drills, plus the full 500-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '16 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Valency Model, Semantic Role Model, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '14 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die Studie reflektiert über die Konsequenzen.', text: 'Supply the obligatory "über + Akk" complement for "reflektieren"' },
    { de: 'Die Ergebnisse beruhen auf umfangreichen Daten.', text: 'Use "beruhen auf + Dat" precisely in academic writing' },
    { de: 'Er wohnt in Berlin. / Er liest ein Buch im Park.', text: 'Distinguish an obligatory location complement from an optional adverbial' },
    { de: 'Jemandem helfen vs. Unterstützung leisten vs. zur Seite stehen', text: 'Alternate complement structures for stylistic and register variation' },
    { de: 'Das Verb entscheidet, wer auftritt.', text: 'Understand the chapter\'s core "stage director" metaphor for verb valency' }
  ],
  vocab: [
    { de: 'reflektieren über', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'academic', en: 'to reflect on', hi: 'चिंतन करना', synonyms: 'nachdenken über, sich Gedanken machen über', antonyms: null, ex: 'Die Studie reflektiert über die gesellschaftlichen Konsequenzen.', exEn: 'The study reflects on the societal consequences.', exHi: 'Study samajik parinaamon par chintan karti hai.', ex2: 'Wir sollten gemeinsam über unsere Methodik reflektieren.', ex2En: 'We should reflect together on our methodology.', ex2Hi: 'Humein saath mein apni methodology par chintan karna chahiye.' },
    { de: 'abstrahieren von', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'academic', en: 'to abstract from', hi: 'से अमूर्तीकरण करना', synonyms: 'verallgemeinern von', antonyms: 'konkretisieren', ex: 'Man muss von Einzelfällen abstrahieren, um Muster zu erkennen.', exEn: 'One must abstract from individual cases to recognize patterns.', exHi: 'Pattern pehchaanne ke liye vyaktigat maamlon se abstract karna zaroori hai.', ex2: 'Die Theorie abstrahiert von konkreten historischen Ereignissen.', ex2En: 'The theory abstracts from concrete historical events.', ex2Hi: 'Yeh theory concrete aitihaasik ghatnaon se abstract karti hai.' },
    { de: 'anknüpfen an', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'academic', en: 'to build on, tie in with', hi: 'से जोड़ना (आगे बढ़ाना)', synonyms: 'sich beziehen auf, aufbauen auf', antonyms: 'sich distanzieren von', ex: 'Diese Arbeit knüpft an frühere Forschung zu diesem Thema an.', exEn: 'This work builds on earlier research on this topic.', exHi: 'Yeh kaam is vishay par pehle ke research se judta hai.', ex2: 'Der Vortrag knüpft direkt an die Diskussion von gestern an.', ex2En: 'The lecture directly ties in with yesterday\'s discussion.', ex2Hi: 'Lecture seedhe kal ki bahas se judta hai.' },
    { de: 'anpassen an', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'both', en: 'to adapt to', hi: 'के अनुकूल बनाना', synonyms: 'sich einstellen auf, angleichen an', antonyms: 'sich widersetzen', ex: 'Wir passen unsere Methodik an die neuen Anforderungen an.', exEn: 'We adapt our methodology to the new requirements.', exHi: 'Hum apni methodology naye requirements ke anusaar anukoolit karte hain.', ex2: 'Das Unternehmen musste sich schnell an den Markt anpassen.', ex2En: 'The company had to adapt quickly to the market.', ex2Hi: 'Company ko market ke anusaar tezi se dhalna pada.' },
    { de: 'erinnern an', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'both', en: 'to remind of; (sich erinnern an: to remember)', hi: 'याद दिलाना; याद करना', synonyms: 'gemahnen an, denken an', antonyms: 'vergessen', ex: 'Der Stil dieses Romans erinnert an frühere Werke des Autors.', exEn: 'The style of this novel reminds one of the author\'s earlier works.', exHi: 'Is novel ki style lekhak ke pehle ke kaam ki yaad dilaati hai.', ex2: 'Sie erinnert sich genau an das Gespräch von damals.', ex2En: 'She remembers exactly the conversation from back then.', ex2Hi: 'Use us waqt ki baatcheet bilkul yaad hai.' },
    { de: 'investieren in', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'professional/scientific', en: 'to invest in', hi: 'में निवेश करना', synonyms: 'anlegen in, stecken in', antonyms: 'abziehen aus', ex: 'Das Institut investiert erheblich in neue Forschungsprojekte.', exEn: 'The institute invests significantly in new research projects.', exHi: 'Institute naye research projects mein kaafi nivesh karta hai.', ex2: 'Wir investieren Zeit in eine gründliche Vorbereitung.', ex2En: 'We invest time in thorough preparation.', ex2Hi: 'Hum thorough taiyaari mein samay nivesh karte hain.' },
    { de: 'oszillieren zwischen', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'academic/literary', en: 'to oscillate between', hi: 'के बीच झूलना', synonyms: 'schwanken zwischen', antonyms: null, ex: 'Die Stimmung im Roman oszilliert zwischen Hoffnung und Verzweiflung.', exEn: 'The mood in the novel oscillates between hope and despair.', exHi: 'Novel ka mood umeed aur nirasha ke beech jhoolta hai.', ex2: 'Die Meinungen der Experten oszillieren zwischen zwei gegensätzlichen Theorien.', ex2En: 'The experts\' opinions oscillate between two opposing theories.', ex2Hi: 'Experts ki raay do virodhi theories ke beech jhoolti hai.' },
    { de: 'schützen vor', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'both', en: 'to protect from', hi: 'से बचाना', synonyms: 'bewahren vor, absichern gegen', antonyms: 'aussetzen (exposing to)', ex: 'Die Regelung soll Verbraucher vor unfairen Praktiken schützen.', exEn: 'The regulation is meant to protect consumers from unfair practices.', exHi: 'Yeh niyam upbhoktaon ko anuchit tareeqon se bachaane ke liye hai.', ex2: 'Nichts kann uns vollständig vor Fehlern schützen.', ex2En: 'Nothing can fully protect us from mistakes.', ex2Hi: 'Koi cheez humein galtiyon se poori tarah nahi bacha sakti.' },
    { de: 'sich auseinandersetzen mit', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'academic', en: 'to engage with, grapple with', hi: 'से गहराई से जूझना', synonyms: 'sich beschäftigen mit, sich befassen mit', antonyms: 'ignorieren', ex: 'Der Autor setzt sich kritisch mit früheren Theorien auseinander.', exEn: 'The author critically engages with earlier theories.', exHi: 'Lekhak pehle ki theories se aalochanaatmak roop se jhoodta hai.', ex2: 'Wir müssen uns ernsthaft mit den Grenzen unserer Methode auseinandersetzen.', ex2En: 'We must seriously engage with the limitations of our method.', ex2Hi: 'Humein apni method ki seemaaon se gambheerta se jhoodna hoga.' },
    { de: 'verweisen auf', pos: 'verb + präposition (Akk.)', level: 'C2', register: 'academic/formal', en: 'to refer to, point to', hi: 'की ओर संकेत करना', synonyms: 'hinweisen auf, sich beziehen auf', antonyms: null, ex: 'Der Bericht verweist auf mehrere frühere Untersuchungen.', exEn: 'The report refers to several earlier investigations.', exHi: 'Report kai pehle ki jaanchon ki taraf sanket karti hai.', ex2: 'Die Fußnote verweist auf die Originalquelle.', ex2En: 'The footnote refers to the original source.', ex2Hi: 'Footnote asli srot ki taraf sanket karti hai.' },
    { de: 'zweifeln an', pos: 'verb + präposition (Dat.)', level: 'C2', register: 'both', en: 'to doubt', hi: 'पर संदेह करना', synonyms: 'in Frage stellen, misstrauen', antonyms: 'vertrauen auf', ex: 'Kritiker zweifeln an der Aussagekraft der Ergebnisse.', exEn: 'Critics doubt the significance of the results.', exHi: 'Aalochak parinaamon ki mahatta par sandeh karte hain.', ex2: 'Er zweifelte nie an ihrer Loyalität.', ex2En: 'He never doubted her loyalty.', ex2Hi: 'Use kabhi bhi uski wafaadaari par sandeh nahi hua.' }
  ],
  grammar: [
    { title: 'Was ist Valenz? (What Is Valency?)', body: [ 'Verb → Required Participants → Sentence Meaning. Every verb opens a framework of required participants. "geben" requires a Giver, a Thing, and a Receiver — remove one argument and the sentence meaning collapses.' ], hinglish: 'Har verb apne saath ek structure leke aata hai — woh tay karta hai ki sentence mein kaun-kaun zaroori hai. <i>geben</i> ko teen cheezein chahiye: dene wala, cheez, aur paane wala. Inme se ek hata do aur sentence adhoora ho jaata hai. Isliye verb yaad karte waqt uske saath yeh bhi yaad karo ki woh kya maangta hai.' },
    { title: 'Obligatorische vs. optionale Ergänzungen (Obligatory vs. Optional Complements)', body: [ '"Er wohnt in Berlin" — the location is required (obligatory). Compare "Er liest ein Buch im Park" — "im Park" is optional, an adverbial, not a required complement. Native speakers instinctively distinguish complements from adverbials.' ], hinglish: '"Er wohnt in Berlin" — location required (obligatory) hai. Compare karo "Er liest ein Buch im Park" — "im Park" optional hai, ek adverbial, required complement nahi. Native speakers instinctively complement aur adverbial mein farak samajhte hain.' },
    { title: 'Semantische Rollen (Semantic Roles)', body: [ 'Complements fill semantic roles: Agent (the doer), Patient (the affected entity), Recipient (who receives), Experiencer (who perceives/feels), Instrument (the means), Location, Source, and Goal. Understanding these roles clarifies why a verb requires certain complements.' ], hinglish: 'Har complement sentence mein ek kirdaar nibhata hai \u2014 karne wala (Agent), jispar asar hua (Patient), jise mila (Recipient), jo mehsoos karta hai (Experiencer), aur zariya, jagah, shuruaat ya manzil. Yeh samajhne se pata chalta hai ki verb ko kuch cheezein <b>kyun</b> chahiye \u2014 <i>geben</i> ko Recipient chahiye kyunki dene ka matlab hi kisi ko dena hai.' },
    { title: 'Ergänzungsalternation (Complement Alternation)', body: [ 'jemandem helfen → Unterstützung leisten → Hilfe anbieten → zur Seite stehen — the same core meaning expressed through different complement structures, each with a distinct register and stylistic effect.' ], hinglish: 'Ek hi baat kai dhaanchon mein kahi jaa sakti hai, aur har dhaanche ka apna register hai. <span class="de">jemandem helfen</span> seedha aur aam hai, <span class="de">Unterst\u00fctzung leisten</span> formal, <span class="de">Hilfe anbieten</span> thoda polite, aur <span class="de">jemandem zur Seite stehen</span> zyada literary. Dhyaan do ki case bhi badalta hai \u2014 <b>helfen</b> aur <b>zur Seite stehen</b> Dativ lete hain, par <b>Unterst\u00fctzung leisten</b> mein cheez object ban jaati hai.' },
    { title: 'Register-spezifische Ergänzungen (Register-Based Complement Selection)', body: [ 'Har register ke apne verbs hain, aur inhe uske preposition ke saath yaad karna hi kaam ka hai. Scientific writing mein <b>beruhen auf</b>, <b>resultieren aus</b>, <b>abh\u00e4ngen von</b>, <b>zusammenh\u00e4ngen mit</b>. News mein <b>warnen vor</b>, <b>hinweisen auf</b>, <b>bestreiten</b>. Aur office mein <b>informieren \u00fcber</b>, <b>bitten um</b>, <b>verf\u00fcgen \u00fcber</b>, <b>teilnehmen an</b>. Sabse zyada galti English dekh kar preposition chunne se hoti hai \u2014 <i>warn about</i> se <b>warnen \u00fcber</b> ban jaata hai, jo galat hai.' ], hinglish: 'Har register ke apne verbs hain, aur inhe uske preposition ke saath yaad karna hi kaam ka hai. Scientific writing mein <b>beruhen auf</b>, <b>resultieren aus</b>, <b>abh\u00e4ngen von</b>, <b>zusammenh\u00e4ngen mit</b>. News mein <b>warnen vor</b>, <b>hinweisen auf</b>, <b>bestreiten</b>. Aur office mein <b>informieren \u00fcber</b>, <b>bitten um</b>, <b>verf\u00fcgen \u00fcber</b>, <b>teilnehmen an</b>. Sabse zyada galti English dekh kar preposition chunne se hoti hai \u2014 <i>warn about</i> se <b>warnen \u00fcber</b> ban jaata hai, jo galat hai.' },
    {
      title: 'Der Weglass-Test \u2014 und die feste Form',
      body: [
        'You do not need instinct to tell a complement from an adverbial \u2014 there is a test. Remove the element: if the sentence becomes ungrammatical or means something else, it was a complement. If it merely loses detail, it was an adverbial.',
        'And every prepositional complement comes with a fixed case. This is what actually has to be memorised, verb by verb.'
      ],
      table: {
        head: ['Verb', 'Complement', 'Case', 'Test'],
        rows: [
          ['wohnen', '<b>in</b> + place', 'Dativ', '<i>Er wohnt.</i> \u2192 incomplete \u2192 complement'],
          ['lesen', '(im Park)', '\u2014', '<i>Er liest ein Buch.</i> \u2192 fine \u2192 adverbial'],
          ['beruhen', '<b>auf</b>', 'Dativ', 'not reflexive'],
          ['sich beziehen', '<b>auf</b>', 'Akkusativ', 'reflexive'],
          ['warnen', '<b>vor</b>', 'Dativ', 'not <i>\u00fcber</i>'],
          ['verf\u00fcgen', '<b>\u00fcber</b>', 'Akkusativ', 'not Dativ'],
          ['resultieren', '<b>aus</b>', 'Dativ', 'not <i>von</i>'],
          ['helfen', 'bare object', 'Dativ', 'not Akkusativ']
        ]
      },
      note: 'Two pairs are worth learning against each other: <b>beruhen auf</b> + Dativ (no <i>sich</i>) versus <b>sich beziehen auf</b> + Akkusativ (with <i>sich</i>) \u2014 same preposition, different reflexivity and different case.',
      hinglish: 'Complement aur adverbial mein farak karne ke liye instinct ki zaroorat nahi \u2014 ek test hai. Us hisse ko <b>hata kar</b> dekho: agar sentence toot jaata hai ya matlab badal jaata hai, to woh complement tha. Aur agar sirf detail kam hoti hai, to woh adverbial tha. Jaise <span class="de">Er wohnt.</span> adhoora lagta hai, isliye <i>in Berlin</i> complement hai \u2014 par <span class="de">Er liest ein Buch.</span> poora hai, isliye <i>im Park</i> adverbial hai. Doosri baat jo asal mein yaad karni padti hai: har prepositional complement apna <b>case</b> leke aata hai. <b>beruhen auf</b> Dativ leta hai aur reflexive nahi hai, par <b>sich beziehen auf</b> Akkusativ leta hai aur reflexive hai \u2014 preposition ek jaisa, baaki sab alag. Aur <b>verf\u00fcgen \u00fcber</b> Akkusativ leta hai jabki <b>warnen vor</b> Dativ.'
    },
    { title: 'Meister-Tabelle', body: [ 'Verb mapped to required complements, semantic roles, and typical register.' ], table: { head: ['Verb', 'Required Complements', 'Semantic Roles', 'Typical Register'], rows: [ ['geben', 'Nom + Akk + Dat', 'Agent, Patient, Recipient', 'General'], ['beruhen', 'auf + Dat', 'Theme, Basis', 'Academic'], ['warnen', 'vor + Dat', 'Agent, Danger', 'Journalism'], ['verfügen', 'über + Akk', 'Holder, Resource', 'Professional'], ['sich beziehen', 'auf + Akk', 'Theme, Reference', 'Scientific'] ] }, hinglish: 'Verb, uske zaroori complements, kirdaar aur register \u2014 chaar column. Ise padhte waqt case par khaas dhyaan do, kyunki wahi sabse zyada galat hota hai.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Each of these gets the FORM of the complement wrong \u2014 a missing preposition, a spurious <i>sich</i>, the wrong case, or an English preposition mapped straight onto German.' ], mistakes: [
      { wrong: 'Die Studie bezieht sich die Ergebnisse.', right: 'Die Studie bezieht sich auf die Ergebnisse.', why: '<b>sich beziehen</b> requires <b>auf</b> + Akkusativ. Without the preposition the complement cannot attach at all.' },
      { wrong: 'Die Theorie beruht sich auf empirischen Daten.', right: 'Die Theorie beruht auf empirischen Daten.', why: '<b>beruhen</b> is not reflexive \u2014 adding <i>sich</i> licenses an argument the verb does not take. (Compare <b>sich beziehen auf</b>, which is reflexive.)' },
      { wrong: 'Er verf\u00fcgt \u00fcber umfangreichen Erfahrungen.', right: 'Er verf\u00fcgt \u00fcber umfangreiche Erfahrungen.', why: '<b>verf\u00fcgen \u00fcber</b> takes the <b>Akkusativ</b>, not the Dativ \u2014 so the adjective ending is <b>-e</b>, not <i>-en</i>.' },
      { wrong: 'Die Beh\u00f6rde warnt \u00fcber die Risiken.', right: 'Die Beh\u00f6rde warnt vor den Risiken.', why: '<b>warnen</b> takes <b>vor</b> + Dativ. English \u201cwarn about\u201d tempts learners into <i>\u00fcber</i>, which belongs to <i>informieren \u00fcber</i>.' },
      { wrong: 'Das Ergebnis resultiert von der Analyse.', right: 'Das Ergebnis resultiert aus der Analyse.', why: '<b>resultieren</b> takes <b>aus</b> + Dativ \u2014 the source. <i>von</i> would only work with a different verb, e.g. <b>abh\u00e4ngen von</b>.' },
      { wrong: 'Er hat mich geholfen.', right: 'Er hat mir geholfen.', why: '<b>helfen</b> takes the <b>Dativ</b>, not the Akkusativ \u2014 the complement\u2019s case is fixed by the verb, regardless of what the English equivalent suggests.' }
    ], hinglish: 'In sab mein complement ka <b>roop</b> galat hai \u2014 preposition chhoot gaya, ek fazool <i>sich</i> lag gaya, case galat ho gaya, ya English ka preposition seedha German mein utha liya gaya.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Choose the verb. What complements are obligatory? Which complements are optional? Check semantic roles. Adjust for register. Produce the most natural sentence.' ], note: 'Memory trick: imagine every German verb is a stage director. The verb decides who appears, who receives the action, where it happens, what is optional, what cannot be omitted. Without the correct actors, the scene cannot be performed.', hinglish: 'Verb chuno, phir poochho ki uske saath kya zaroori hai aur kya optional. Shak ho to <b>hata kar</b> dekho \u2014 sentence toot gaya to woh complement tha. Aur likhne se pehle ek cheez zaroor check karo: us complement ka preposition aur case sahi hai? Yahin sabse zyada marks katte hain.' }
  ],
  reading: {
    title: 'Soziologische Studie: Abwanderung aus ländlichen Regionen',
    titleEn: 'Reading A — Sociological study: emigration from rural regions',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'beruhen', role: 'r-obligatorisch', en: 'are based (part of "beruhen auf" — the obligatory academic complement pattern)', hi: '', type: 'Verb (Präsens)' },
      { w: 'auf', role: 'r-obligatorisch', en: 'on (the obligatory preposition completing "beruhen auf + Dat")', hi: 'पर (obligatory preposition)', type: 'Präposition · Dat.' },
      { w: 'Interviews', role: 'plain', en: 'interviews', hi: 'साक्षात्कारों', type: 'Noun · plural' },
      { w: 'mit', role: 'plain', en: 'with', hi: 'साथ', type: 'Preposition · Dat.' },
      { w: 'über', role: 'plain', en: 'more than', hi: 'से अधिक', type: 'Adverb' },
      { w: 'zweihundert', role: 'plain', en: 'two hundred', hi: 'दो सौ', type: 'Number' },
      { w: 'ehemaligen', role: 'plain', en: 'former', hi: 'पूर्व', type: 'Adjective · Dat.' },
      { w: 'Dorfbewohnern', role: 'plain', en: 'village residents (Satzende)', hi: 'गाँव के निवासियों (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Ohne', role: 'plain', en: 'without', hi: 'बिना', type: 'Präposition · Akk.' },
      { w: 'diese', role: 'plain', en: 'this (fem. akk.)', hi: 'इस', type: 'Demonstrativpronomen · Akk.' },
      { w: 'Ergänzung', role: 'r-obligatorisch', en: 'complement (Satzende, referring to the missing complement if omitted)', hi: '(Satzende)', type: 'Noun · fem. (Satzende)', why: 'Without "auf Interviews...", the verb "beruhen" is left semantically incomplete despite being grammatically well-formed alone (this chapter).' },
      { w: 'bliebe', role: 'plain', en: 'would remain (Satzende)', hi: 'रह जाता (Satzende)', type: 'Verb · bleiben (Konjunktiv II, Satzende)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Befund', role: 'plain', en: 'finding (Satzende)', hi: 'निष्कर्ष (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'bloße', role: 'plain', en: 'mere', hi: 'महज़', type: 'Adjective' },
      { w: 'Spekulation', role: 'plain', en: 'speculation (Satzende)', hi: 'अटकल (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Auffällig', role: 'plain', en: 'notably', hi: 'ख़ास तौर पर', type: 'Adjective' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective' },
      { w: 'Befragte', role: 'plain', en: 'respondents (Satzende)', hi: 'उत्तरदाता (Satzende)', type: 'Noun · plural' },
      { w: 'klagten', role: 'plain', en: 'complained (Satzende)', hi: 'शिकायत की (Satzende)', type: 'Verb · klagen (Präteritum)' },
      { w: 'über', role: 'plain', en: 'about', hi: 'के बारे में', type: 'Preposition · Akk.' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'fehlende', role: 'plain', en: 'lacking', hi: 'ग़ैरमौजूद', type: 'Adjective' },
      { w: 'ärztliche', role: 'plain', en: 'medical', hi: 'चिकित्सा', type: 'Adjective' },
      { w: 'Versorgung', role: 'plain', en: 'care (Satzende)', hi: 'देखभाल (Satzende)', type: 'Noun · fem. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The results are based on interviews with over two hundred former village residents. Without this complement, the finding would remain mere speculation. Notably many respondents complained about the lacking medical care.',
    comprehension: [
      { q: 'Welche Präposition verlangt "beruhen"?', options: ['auf + Dativ', 'über + Akkusativ', 'an + Dativ'], answer: 0 },
      { q: 'Was passiert, wenn man die Ergänzung weglässt?', options: ['Der Satz bleibt semantisch unvollständig', 'Der Satz wird grammatisch falsch', 'Nichts ändert sich'], answer: 0 },
      { q: 'Ist "auf Interviews..." hier obligatorisch oder optional?', options: ['Obligatorisch', 'Optional', 'Weder noch'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Regierungsbericht', titleEn: 'Reading B — Government report',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (fem. nom.)', hi: 'yeh', type: 'Article' },
      { w: 'Regelung', role: 'plain', en: 'regulation', hi: 'niyam', type: 'Noun · fem.' },
      { w: 'schützt', role: 'r-optional', en: 'protects (part of "schützen vor" — obligatory complement in professional/formal register)', hi: '(schützen vor, obligatory complement)', type: 'Verb (Präsens)' },
      { w: 'Verbraucher', role: 'plain', en: 'consumers', hi: 'upbhoktaon ko', type: 'Noun · plural · Akk.' },
      { w: 'vor', role: 'r-optional', en: 'from (obligatory preposition completing "schützen vor + Dat", Satzende)', hi: 'se (Satzende)', type: 'Präposition · Dat. (Satzende)' },
      { w: 'unfairen', role: 'plain', en: 'unfair', hi: 'anuchit', type: 'Adjective · Dat.' },
      { w: 'Praktiken', role: 'plain', en: 'practices (Satzende)', hi: '(Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The regulation protects consumers from unfair practices.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_003_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Almut, dieser Satz hier: "Die Studie bezieht sich auf ältere Ergebnisse." Reicht das als Ergänzung?', en: 'Almut, this sentence here: "The study relates to older results." Is that enough as a complement?' },
      { id: 'C2_003_L002', speaker: 'Almut', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Fast — ich möchte präzisieren: "bezieht sich explizit auf die Ergebnisse von 2015".', en: 'Almost — I want to be more precise: "relates explicitly to the 2015 results".' },
      { id: 'C2_003_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und der nächste Satz? "Die Methode beruht auf..."?', en: 'And the next sentence? "The method is based on..."?' },
      { id: 'C2_003_L004', speaker: 'Almut', gender: 'female', voice: 'de-DE-Neural2-F', de: '"…beruht auf einer Kombination aus qualitativen und quantitativen Verfahren."', en: '"…is based on a combination of qualitative and quantitative methods."' }
    ],
    transcript: 'Almut, dieser Satz hier: "Die Studie bezieht sich auf ältere Ergebnisse." Reicht das als Ergänzung? Fast — ich möchte präzisieren: "bezieht sich explizit auf die Ergebnisse von 2015". Und der nächste Satz? "Die Methode beruht auf..."? "…beruht auf einer Kombination aus qualitativen und quantitativen Verfahren."',
    translation: 'Almut, this sentence here: "The study relates to older results." Is that enough as a complement? Almost — I want to be more precise: "relates explicitly to the 2015 results". And the next sentence? "The method is based on..."? "…is based on a combination of qualitative and quantitative methods."',
    tokens: [
      { w: 'Almut' },
      { w: ',', plain: true },
      { w: 'dieser' },
      { w: 'Satz' },
      { w: 'hier' },
      { w: ':', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Die' },
      { w: 'Studie' },
      { w: 'bezieht' },
      { w: 'sich' },
      { w: 'auf' },
      { w: 'ältere' },
      { w: 'Ergebnisse' },
      { w: '."', plain: true },
      { w: 'Reicht' },
      { w: 'das' },
      { w: 'als' },
      { w: 'Ergänzung' },
      { w: '?', plain: true },
      { w: 'Fast' },
      { w: '—', plain: true },
      { w: 'ich' },
      { w: 'möchte' },
      { w: 'präzisieren' },
      { w: ':', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'bezieht' },
      { w: 'sich' },
      { w: 'explizit' },
      { w: 'auf' },
      { w: 'die' },
      { w: 'Ergebnisse' },
      { w: 'von' },
      { w: '2015', plain: true },
      { w: '".', plain: true },
      { w: 'Und' },
      { w: 'der' },
      { w: 'nächste' },
      { w: 'Satz' },
      { w: '?', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'Die' },
      { w: 'Methode' },
      { w: 'beruht' },
      { w: 'auf' },
      { w: '..."?', plain: true },
      { w: '"…', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'beruht' },
      { w: 'auf' },
      { w: 'einer' },
      { w: 'Kombination' },
      { w: 'aus' },
      { w: 'qualitativen' },
      { w: 'und' },
      { w: 'quantitativen' },
      { w: 'Verfahren' },
      { w: '."', plain: true }
    ],
    questions: [
      { q: 'Wie präzisiert Almut den Verweis?', qEn: 'How does Almut make the reference more precise?', options: ['sie löscht den Satz', 'sie nennt das Jahr 2015 explizit', 'sie fügt ein neues Kapitel hinzu', 'sie verändert die Methode'], optionsEn: ['she deletes the sentence', 'she names the year 2015 explicitly', 'she is adding a new chapter', 'she changes the method'], answer: 1,
        explain: '"Bezieht sich explizit auf die Ergebnisse von 2015."' },
      { q: 'Worauf beruht die Methode?', qEn: 'What is the method based on?', options: ['nur qualitativen Verfahren', 'nur quantitativen Verfahren', 'einer Kombination aus beidem', 'älteren Studien'], optionsEn: ['only qualitative methods', 'only quantitative methods', 'a combination of both', 'older studies'], answer: 2,
        explain: '"Beruht auf einer Kombination aus qualitativen und quantitativen Verfahren."' }
    ]
  },
  speaking: [
    { task: "Almut fragt, ob „bezieht sich auf ältere Ergebnisse“ als Ergänzung reicht.", taskEn: "Almut asks whether 'refers to older results' suffices as a complement.", de: "Ich würde präzisieren: bezieht sich explizit auf die Ergebnisse von 2019.", en: "I'd be precise: refers explicitly to the 2019 results." },
    { task: "Deine Betreuerin fragt, worüber dein Kapitel eigentlich nachdenkt.", taskEn: "Your supervisor asks what your chapter actually reflects on.", de: "Das Kapitel reflektiert über den Umgang mit fehlenden Werten.", en: "The chapter reflects on how missing values are handled." },
    { task: "Ein Kollege zweifelt an deiner Methode. Antworte präzise.", taskEn: "A colleague doubts your method. Answer precisely.", de: "Sie zweifeln an der Auswahl; ich knüpfe dabei an ein etabliertes Verfahren an.", en: "You doubt the selection; in doing so I build on an established procedure." },
    { task: "Stell im Kolloquium vor, wovon deine Arbeit abstrahiert.", taskEn: "Present in the colloquium what your work abstracts from.", de: "Ich abstrahiere von regionalen Unterschieden und verweise auf die Gesamtstichprobe.", en: "I abstract from regional differences and refer to the overall sample." },
    { task: "Ein Student liefert einen halben Satz. Vervollständige ihn.", taskEn: "A student produces half a sentence. Complete it.", de: "Sich auseinandersetzen verlangt mit: er setzt sich mit der Kritik auseinander.", en: "'Sich auseinandersetzen' requires 'mit': he engages with the criticism." }
  ],
  writing: {
    prompt: 'TASK 1 — Complement repair (150 words): Rewrite sentences by supplying missing obligatory complements while preserving meaning. Explain every improvement.\n\nTASK 2 — Transform (150 words): Transform a simple text into academic prose using sophisticated verb-complement structures.\n\nTASK 3 — Essay (500 words): Write a C2 academic essay demonstrating advanced control of verb valency, complement variation, and register.',
    starters: ['Die Studie reflektiert über...', 'Die Ergebnisse beruhen auf...', 'Wir setzen uns mit... auseinander'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über Verbergänzungen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which preposition does "beruhen" obligatorily require?', options: ['auf + Dativ', 'über + Akkusativ', 'mit + Dativ'], answer: 0, explain: '"beruhen auf + Dativ" is the fixed, obligatory complement pattern in academic German.' },
    gap: { sentence: ['Kritiker zweifeln ', ' der Aussagekraft der Ergebnisse.'], gaps: [ { answer: 'an', accepts: ['an'] } ], explain: '"zweifeln an + Dativ" is the obligatory complement pattern for this verb.' },
    match: { q: 'Match each verb to its obligatory prepositional complement.', pairs: [ { noun: 'reflektieren', art: 'über + Akkusativ' }, { noun: 'sich auseinandersetzen', art: 'mit + Dativ' }, { noun: 'verweisen', art: 'auf + Akkusativ' }, { noun: 'schützen', art: 'vor + Dativ' } ] },
    builder: { target: 'Build: "The study is based on extensive data." (beruhen auf, academic register)', bank: ['Die', 'Studie', 'beruht', 'auf', 'umfangreichen', 'Daten', '.'], answer: ['Die', 'Studie', 'beruht', 'auf', 'umfangreichen', 'Daten', '.'], roles: { 'beruht': 'r-obligatorisch', 'auf': 'r-obligatorisch' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Studie reflektiert die Konsequenzen.', right: 'Die Studie reflektiert über die Konsequenzen.', explain: '"reflektieren" obligatorily requires the prepositional complement "über + Akkusativ" — it cannot take a direct accusative object alone.' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for verb valency?', options: ['Every verb is a stage director, deciding who appears and what cannot be omitted', 'Every verb has exactly the same complement structure', 'Complements can always be omitted freely'], answer: 0, explain: 'Native speakers instinctively know which "actors" (complements) a verb requires for the scene to be complete.' },
    { q: 'Why is "Er wohnt in Berlin" different from "Er liest ein Buch im Park"?', options: ['The location is obligatory for "wohnen" but optional for "liest"', 'Both are obligatory', 'Neither is obligatory'], answer: 0, explain: '"wohnen" requires a location complement; "im Park" with "lesen" is merely an optional adverbial.' },
    { q: 'What does complement alternation demonstrate?', options: ['The same core meaning can be expressed via different complement structures with different registers', 'Every verb has only one possible complement', 'Complements never affect register'], answer: 0, explain: '"jemandem helfen" vs. "Unterstützung leisten" vs. "zur Seite stehen" all mean roughly the same thing but differ in formality.' },
    { q: 'Why is it a mistake to translate verb-preposition patterns literally from English?', options: ['English and German verb complementation patterns rarely map one-to-one', 'English and German always use the same prepositions', 'Only nouns require prepositions in German'], answer: 0, explain: 'Each German verb has its own conventional, often unpredictable, prepositional complement.' },
    { q: 'What is a common C2 learner mistake with verb complements?', options: ['Omitting an obligatory complement, leaving the verb semantically incomplete', 'Always including too many complements', 'Never using prepositional complements'], answer: 0, explain: 'A verb without its obligatory complement is grammatically parseable but semantically incomplete.' }
  ],
  takeaways: [
    { c: 'r-obligatorisch', html: 'Obligatory complements (reflektieren über, beruhen auf, zweifeln an) cannot be omitted without leaving a verb semantically incomplete, even if the sentence still parses grammatically.' },
    { c: 'r-optional', html: 'Optional modifiers/adverbials (like "im Park") can be freely added or removed without breaking the sentence\'s core meaning — unlike obligatory complements.' },
    { c: 'r-regisseur-metapher', html: 'The verb functions like a stage director, deciding which participants (complements) must appear and which are freely optional — the chapter\'s core memory metaphor.' }
  ],
  revisionTips: [
    'Take five verbs from this chapter and write one sentence each, deliberately including the obligatory complement.',
    'Practice complement alternation by rewriting "jemandem helfen" in three different registers (casual, professional, academic).',
    'Read one academic abstract and identify every obligatory verb complement, checking whether you would have supplied the same preposition.'
  ]
};
window.CHAPTER = CHAPTER;
