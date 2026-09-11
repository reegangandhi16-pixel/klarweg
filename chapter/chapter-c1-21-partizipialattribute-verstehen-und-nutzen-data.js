/* KLARWEG CHAPTER DATA — C1 · Chapter 21
   "Partizipialattribute verstehen und nutzen" — Partizip I/II
   attributes as a STYLISTIC device: folding relative clauses
   into compressed pre-noun attributes, expanded participial
   attributes, academic/journalistic compression. NOT basic
   Partizip I/II formation or adjective declension (mastered).
   Dialogue: Elke and Timo ONLY. */
const CHAPTER = {
  id: 'c1-21-partizipialattribute-verstehen-und-nutzen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 21,
  title: 'Partizipialattribute verstehen und nutzen',
  titleEn: 'Understanding and using participial attributes',
  description: 'Think of every participial attribute as a folded relative clause. Nothing disappears — the information is simply compressed into the noun phrase.',
  xp: 630, time: 105, difficulty: 'Advanced',
  nextChapter: { number: 22, title: 'Komplexe Attribute & Nominalgruppen', titleEn: 'Complex attributes and noun groups' , href: 'chapter-c1-22-komplexe-attribute-und-nominalgruppen.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Every participial attribute is a <em>folded relative clause</em>.',
    intro: 'Before submitting to an international journal, Elke and Timo replace relative clauses about steadily sinking figures and a resigning CEO with compact participial attributes — folded relative clauses, nothing lost.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See Partizip I and Partizip II attributes replace relative clauses for elegant, dense academic style'],
    scene: 'Überarbeitung eines Artikels vor der Einreichung bei einer internationalen Fachzeitschrift',
    femaleSpeakers: ['Elke'],
    dialogue: [
      { speaker: 'Elke', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'stetig', role: 'r-subject', en: 'steadily', hi: 'लगातार', pron: 'SHTAY-tikh', type: 'Adverb', why: 'stetig = steadily (this chapter).', ex: 'die stetig sinkenden Zahlen' },
        { w: 'sinkenden', role: 'r-subject', en: 'sinking', hi: 'गिरते हुए', pron: 'ZIN-ken-den', type: 'Partizip I als Attribut', why: 'Partizip I (sinkend) with adjective endings functions as an attributive modifier (this chapter).', ex: 'die sinkenden Zahlen', exEn: 'the sinking figures' },
        { w: 'Zahlen', role: 'r-subject', en: 'figures', hi: 'आंकड़े', pron: 'TSAH-len', type: 'Noun · plural' },
        { w: 'besorgen', role: 'r-verb', en: 'worry', hi: 'चिंतित करते हैं', pron: 'be-ZOR-gen', type: 'Verb · besorgen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: '.', plain: true }
      ], en: 'The steadily sinking figures worry me.', hi: 'Lagatar girte hue aankde mujhe chintit karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'zurücktretende', role: 'r-subject', en: 'resigning', hi: 'इस्तीफ़ा देते हुए', pron: 'tsu-RÜK-tre-ten-duh', type: 'Partizip I als Attribut', why: 'Partizip I (zurücktretend) as attributive modifier (this chapter).', ex: 'der zurücktretende CEO' },
        { w: 'CEO', role: 'r-subject', en: 'CEO', hi: 'सीईओ', pron: 'TSAY-ee-oh', type: 'Noun · masc.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'दिया है', pron: 'hat', type: 'Verb · haben' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'deutliche', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'DOYT-li-khuh', type: 'Adjective' },
        { w: 'Erklärung', role: 'r-akkusativ', en: 'explanation', hi: 'स्पष्टीकरण', pron: 'er-KLAI-rung', type: 'Noun · fem.' },
        { w: 'gegeben', role: 'r-verb', en: 'given', hi: 'दिया', pron: 'ge-GAY-ben', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'The resigning CEO has given a clear explanation.', hi: 'Isteefa dete hue CEO ne ek spasht spashtikaran diya hai.' },
      { speaker: 'Elke', tokens: [
        { w: 'Wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'brauchen', role: 'r-verb', en: 'need', hi: 'ज़रूरत है', pron: 'BROW-khen', type: 'Verb · brauchen' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'aussagekräftige', role: 'r-akkusativ', en: 'compelling', hi: 'प्रभावशाली', pron: 'OWS-zah-guh-kref-ti-guh', type: 'Adjective' },
        { w: 'Kürzung', role: 'r-akkusativ', en: 'cut', hi: 'कटौती', pron: 'KÜR-tsung', type: 'Noun · fem.', why: 'die Kürzung (this chapter).', ex: 'eine Kürzung vornehmen' },
        { w: 'des', role: 'r-dativ', en: 'the (neut. gen.)', hi: '', pron: 'des', type: 'Article · genitive' },
        { w: 'Budgets', role: 'r-dativ', en: 'budget (gen.)', hi: 'बजट के', pron: 'BUD-shets', type: 'Noun · neut. genitive' },
        { w: '.', plain: true }
      ], en: 'We need a compelling cut of the budget.', hi: 'Humein budget mein ek prabhaavshaali kataauti chahiye.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Die', role: 'r-subject', en: 'the (pl.)', hi: 'ये', pron: 'dee', type: 'Article · plural' },
        { w: 'von', role: 'r-preposition', en: 'decreased', hi: 'से', pron: 'fon', type: 'Preposition (part of von X gekürzten)' },
        { w: 'uns', role: 'r-dativ', en: 'us', hi: 'हमारे द्वारा', pron: 'uns', type: 'Pronoun · dative' },
        { w: 'gekürzten', role: 'r-subject', en: 'cut', hi: 'घटाई हुई', pron: 'ge-KÜRTS-ten', type: 'Partizip II als Attribut', why: 'Partizip II (gekürzt) with an agent phrase (von uns) as attributive modifier (this chapter).', ex: 'die von uns gekürzten Ausgaben', exEn: 'the expenses cut by us' },
        { w: 'Ausgaben', role: 'r-subject', en: 'expenses', hi: 'ख़र्च', pron: 'OWS-gah-ben', type: 'Noun · plural' },
        { w: 'reichen', role: 'r-verb', en: 'suffice', hi: 'पर्याप्त हैं', pron: 'RY-khen', type: 'Verb · ausreichen (Satzende)' },
        { w: 'vielleicht', role: 'r-akkusativ', en: 'maybe', hi: 'शायद', pron: 'fee-LYKHT', type: 'Adverb' },
        { w: 'nicht', role: 'r-negation', en: 'not', hi: 'नहीं', pron: 'nikht', type: 'Negation' },
        { w: '.', plain: true }
      ], en: 'The expenses cut by us maybe do not suffice.', hi: 'Humaare dwaara ghataaye gaye kharch shayad kaafi nahi hain.' },
      { speaker: 'Elke', tokens: [
        { w: 'Dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Plan', role: 'r-akkusativ', en: 'plan', hi: 'योजना', pron: 'plahn', type: 'Noun · masc.' },
        { w: 'falten', role: 'r-verb', en: 'fold', hi: 'मोड़ना', pron: 'FAL-ten', type: 'Verb · falten', why: 'falten = to fold, also used figuratively for restructuring plans (this chapter).', ex: 'den Plan neu falten' },
        { w: 'und', role: 'r-conjunction', en: 'and', hi: 'और', pron: 'unt', type: 'Conjunction' },
        { w: 'neu', role: 'r-akkusativ', en: 'newly', hi: 'नए सिरे से', pron: 'noy', type: 'Adverb' },
        { w: 'gestalten', role: 'r-verb', en: 'design', hi: 'बनाना', pron: 'ge-SHTAL-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Then we must fold and newly design the plan.', hi: 'Phir humein yojana ko mod kar naye sire se banana hoga.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Einverstanden', role: 'r-subject', en: 'agreed', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Reaction' },
        { w: '.', plain: true },
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'werde', role: 'r-verb', en: 'will', hi: 'करूंगा', pron: 'VAIR-duh', type: 'Verb · werden (Futur I)' },
        { w: 'einen', role: 'r-akkusativ', en: 'a (masc.)', hi: 'एक', pron: 'EYE-nen', type: 'Article · masc. acc.' },
        { w: 'neuen', role: 'r-akkusativ', en: 'new', hi: 'नया', pron: 'NOY-en', type: 'Adjective' },
        { w: 'Vorschlag', role: 'r-akkusativ', en: 'proposal', hi: 'सुझाव', pron: 'FOR-shlahk', type: 'Noun · masc.' },
        { w: 'vorbereiten', role: 'r-verb', en: 'prepare', hi: 'तैयार करना', pron: 'FOR-be-ry-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Agreed. I will prepare a new proposal.', hi: 'Sahmat. Main naya sujhaav taiyaar karunga.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think of every participial attribute as a <b>folded relative clause</b>. "Die Studie, die gestern veröffentlicht wurde" becomes "die <span class="de r-partizip2-attribut">gestern veröffentlichte</span> Studie" — nothing disappears, information is simply compressed.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is PARTIZIPIALATTRIBUTE VERSTEHEN UND NUTZEN at C1 level — using Partizip I and Partizip II attributes as a STYLISTIC device to fold relative clauses into compressed pre-noun attributes, NOT basic Partizip I/II formation or adjective declension (already mastered). Covered: Partizip I attributes for ongoing/active meaning (der lachende Junge, die wachsende Wirtschaft, die zunehmende Bedeutung, die steigenden Preise); Partizip II attributes for completed/passive meaning or resulting state (die veröffentlichte Studie, die entwickelte Methode, die geschlossene Tür, die erhobenen Daten); the systematic transformation from relative clause to participial attribute (Die Studie, die gestern veröffentlicht wurde → Die gestern veröffentlichte Studie); expanded participial attributes where modifiers are embedded before the participle itself (die im Labor erhobenen Daten, die von internationalen Forschern entwickelte Methode); academic and journalistic compression patterns; register scale where participial attributes become more frequent in formal written German. Do NOT expect or require basic Partizip I/II morphology or single-adjective declension — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: confusing Partizip I (ongoing/active) with Partizip II (completed/passive) meaning; keeping unnecessary relative clauses where a participial attribute would be more elegant in formal register; incorrect modifier placement within an expanded participial attribute (modifiers must come before the participle, not after); missing or wrong adjective endings on the participle itself; direct English translation producing impossible German participial constructions. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag Partizip I/II confusion (wrong aspect/voice for the intended meaning); flag missed opportunities to compress relative clauses into participial attributes in formal-register text; check modifier placement and adjective endings within expanded participial attributes; if unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Compression check:</b> one sentence on whether the learner used participial attributes appropriately to fold information elegantly, without losing meaning.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you fold relative clauses into elegant participial attributes like a native academic writer. Ready for the next chapter.', mid: 'Good. Re-read the Transformation Model and Compression Scale once, then continue.', low: 'Worth another pass through the Grammar section — remember: every participial attribute is a folded relative clause, nothing disappears.' },
  parserSentence: [ { w: 'die', role: 'plain' }, { w: 'gestern', role: 'r-partizip2-attribut' }, { w: 'veröffentlichte', role: 'r-partizip2-attribut' }, { w: 'Studie', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: participial attributes fold relative clauses into the noun phrase without losing information.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Elke and Timo revise an academic article, repeatedly replacing relative clauses with participial attributes.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key academic expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master Partizip I and Partizip II attributes, expanded participial attributes, and the transformation from relative clauses.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific research article and newspaper feature, identifying Partizip I/II attributes and compression.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify participial attributes and compressed information in a university lecture and editorial meeting.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Transform relative clauses, summarize research, and describe processes using participial attributes naturally.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Transform relative clauses into participial attributes, and write a 350-word academic article with high participial density.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill Partizip I vs II, relative clause transformation, and participial expansion.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 630 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 5 chapter words with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Partizip I vs II drills, relative-clause transformation exercises, and a full academic article writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Transformation Model, Compression Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Die gestern veröffentlichte Studie ist relevant.', text: 'Fold a relative clause into a Partizip II attribute (completed, passive)' },
    { de: 'Die wachsende Wirtschaft überrascht viele Ökonomen.', text: 'Use a Partizip I attribute for an ongoing, active process' },
    { de: 'Die im Labor erhobenen Daten sind aussagekräftig.', text: 'Expand a participial attribute with an embedded modifier' },
    { de: 'Die von internationalen Forschern entwickelte Methode überzeugt.', text: 'Expand a Partizip II attribute with an agent phrase' },
    { de: 'Die Information wird nur in die Nominalphrase verdichtet.', text: 'Describe the compression principle behind participial attributes' }
  ],
  vocab: [
    { de: 'falten', pos: 'verb', level: 'C1', register: 'both', en: 'to fold', hi: 'मोड़ना', ex: 'Falte den Relativsatz einfach in ein Partizipialattribut.', exEn: 'Just fold the relative clause into a participial attribute.', exHi: 'Bas relative clause ko participial attribute mein fold karo.', ex2: 'Man kann komplexe Sätze stilistisch falten.', ex2En: 'Complex sentences can be stylistically folded.', ex2Hi: 'Complex vaakyon ko stylistically fold kiya jaa sakta hai.', conj: { praesens: 'faltet', praeteritum: 'faltete', perfekt: 'hat gefaltet' } },
    { de: 'die Kürzung', art: 'die', gender: 'f', plural: 'Kürzungen', pos: 'noun', level: 'C1', register: 'written', en: 'shortening, compression', hi: 'संक्षिप्तीकरण', ex: 'Die Kürzung des Satzes verbessert den Stil.', exEn: 'The shortening of the sentence improves the style.', exHi: 'Vaakya ka sankshiptikaran style ko behtar banaata hai.', ex2: 'Journalisten nutzen häufig sprachliche Kürzungen.', ex2En: 'Journalists frequently use linguistic shortenings.', ex2Hi: 'Patrakaar aksar bhaashaayi sankshiptikaran ka upyog karte hain.' },
    { de: 'stetig', pos: 'adjective/adverb', level: 'C1', register: 'written', en: 'steadily, constantly', hi: 'लगातार', ex: 'Die wachsende Wirtschaft entwickelt sich stetig.', exEn: 'The growing economy is developing steadily.', exHi: 'Badhti hui arthavyavastha lagaataar vikasit ho rahi hai.', ex2: 'Die Nachfrage steigt stetig an.', ex2En: 'Demand is steadily increasing.', ex2Hi: 'Maang lagaataar badh rahi hai.' },
    { de: 'aussagekräftig', pos: 'adjective', level: 'C1', register: 'written', en: 'meaningful, telling', hi: 'सारगर्भित', ex: 'Die im Labor erhobenen Daten sind aussagekräftig.', exEn: 'The data collected in the lab are meaningful.', exHi: 'Lab mein ekatrit kiya gaya data saargarbhit hai.', ex2: 'Eine aussagekräftige Stichprobe ist entscheidend.', ex2En: 'A meaningful sample is crucial.', ex2Hi: 'Ek saargarbhit namoona mahatvapoorn hai.' },
    { de: 'zurücktreten', pos: 'verb', level: 'C1', register: 'written', en: 'to resign, step down', hi: 'इस्तीफा देना', ex: 'Der überraschend zurückgetretene Minister sorgte für Aufsehen.', exEn: 'The unexpectedly resigned minister caused a stir.', exHi: 'Aashcharyajanak roop se isteefa dene waale mantri ne halchal machaayi.', ex2: 'Sie ist von ihrem Amt zurückgetreten.', ex2En: 'She has resigned from her post.', ex2Hi: 'Usne apne pad se isteefa de diya hai.', conj: { praesens: 'tritt zurück', praeteritum: 'trat zurück', perfekt: 'ist zurückgetreten' } }
  ],
  grammar: [
    { title: 'Warum Partizipialattribute existieren', body: [ 'Relative Clause → Compression → Participial Attribute → Nominal Style → Academic German. Participial attributes are primarily a stylistic device — a folded relative clause, not new information.' ], hinglish: 'Partizipialattribut asal mein ek <b>folded relative clause</b> hai \u2014 koi nayi jaankaari nahi jodta, bas usi jaankaari ko noun ke aage samet deta hai. Isliye ise samajhne ka aasaan tareeka yeh hai: har attribute ko wapas relative clause mein khol kar dekho.' },
    { title: 'Partizip-I-Attribute (Ongoing/Active)', body: [ 'der lachende Junge / die wachsende Wirtschaft / die zunehmende Bedeutung / die steigenden Preise / die sinkende Nachfrage — Partizip I expresses ongoing, simultaneous, active meaning.' ], hinglish: '<b>Partizip I</b> batata hai ki kaam <b>ho raha hai</b> \u2014 active aur jaari. Banane ka tareeka simple hai: Infinitiv + <b>d</b>, phir adjective ki ending. <i>wachsen</i> se <b>wachsend</b>, phir <span class="de">die wachsende Wirtschaft</span>. Yahan koi <i>ge-</i> nahi lagta.' },
    { title: 'Partizip-II-Attribute (Completed/Passive)', body: [ 'die veröffentlichte Studie / die entwickelte Methode / die geschlossene Tür / der ausgezeichnete Forscher / die erhobenen Daten — Partizip II expresses completed action, passive meaning, or resulting state.' ], hinglish: '<b>Partizip II</b> batata hai ki kaam <b>ho chuka hai</b> \u2014 aksar passive matlab mein. Form wahi hai jo Perfekt mein aati hai: <span class="de">ver\u00f6ffentlicht</span>, <span class="de">erhoben</span>. Farak dekho \u2014 <span class="de">die wachsende Wirtschaft</span> matlab abhi badh rahi hai, aur <span class="de">die gewachsene Wirtschaft</span> matlab badh chuki hai.' },
    { title: 'Relativsatz → Partizipialattribut', body: [ 'Compression ka tareeka teen step ka hai. Relative pronoun aur conjugated verb hata do, participle ko noun ke aage le aao, aur uspar adjective ki ending laga do. Dhyaan do ki beech ke shabd (<i>gestern</i>, <i>im Labor</i>) apni jagah par rehte hain \u2014 article ke baad aur participle se pehle.' ], hinglish: 'Compression ka tareeka teen step ka hai. Relative pronoun aur conjugated verb hata do, participle ko noun ke aage le aao, aur uspar adjective ki ending laga do. Dhyaan do ki beech ke shabd (<i>gestern</i>, <i>im Labor</i>) apni jagah par rehte hain \u2014 article ke baad aur participle se pehle.' },
    { title: 'Erweiterte Partizipialattribute (Expanded)', body: [ 'die im vergangenen Jahr veröffentlichte Studie / die auf umfangreichen Daten basierende Analyse / die von internationalen Forschern entwickelte Methode / die unter realistischen Bedingungen getestete Software — modifiers integrate before the participle itself.' ], hinglish: 'Yeh lambe attributes academic texts mein bahut aate hain, aur pehli baar mein bhaari lagte hain. Padhne ka tareeka: sabse aakhir wala noun pakdo (<i>Methode</i>), phir uske theek pehle wala participle (<i>entwickelte</i>), aur uske baad beech ka hissa \u2014 woh sirf batata hai ki kisne ya kahan.' },
    { title: 'Stilistische Wahl (Stylistic Choice)', body: [ 'Relative Clause → Participial Attribute → Nominal Style — each step trades clarity/explicitness for brevity, formality, and information density. The choice depends on register.' ], hinglish: 'Har step mein text zyada compact aur formal hota jaata hai, par padhna thoda mushkil. Isliye yeh choice register par depend karta hai \u2014 academic writing mein compression achhi lagti hai, par agar sentence do baar padhna pade to relative clause hi behtar hai.' },
    {
      title: 'Endungen und Wortstellung',
      body: [
        'Two mechanical points decide whether a participial attribute is right, and both are what the exercises actually test.',
        'First, the participle is now an adjective, so it takes a normal adjective ending. Second, everything belonging to it stands in front of it \u2014 the noun always comes last.'
      ],
      table: {
        head: ['Pattern', 'Example'],
        rows: [
          ['article + participle + noun', '<span class="de">die ver\u00f6ffentlicht<b>e</b> Studie</span>'],
          ['article + modifier + participle + noun', '<span class="de">die gestern ver\u00f6ffentlicht<b>e</b> Studie</span>'],
          ['article + prepositional phrase + participle + noun', '<span class="de">die im Labor erhoben<b>en</b> Daten</span>'],
          ['plural after die \u2192 -en', '<span class="de">die steigend<b>en</b> Preise</span>'],
          ['after an ein-word \u2192 strong ending', '<span class="de">ein wachsend<b>es</b> Problem</span>']
        ]
      },
      note: 'Reading strategy: find the noun at the END of the phrase first, then read backwards. <i>die von internationalen Forschern entwickelte Methode</i> \u2192 the noun is <b>Methode</b>, the participle is <b>entwickelte</b>, and everything between the article and the participle describes it.',
      hinglish: 'Do mechanical baatein tay karti hain ki participial attribute sahi hai ya nahi \u2014 aur exercises inhi ko test karti hain. Pehli, participle ab ek adjective ban chuka hai, isliye uspar normal adjective ki ending lagti hai: <span class="de">die ver\u00f6ffentlichte Studie</span>, par plural mein <span class="de">die erhoben<b>en</b> Daten</span>. Doosri, jo kuch bhi participle se juda hai woh uske <b>aage</b> aata hai, aur noun hamesha sabse <b>aakhir</b> mein: article \u2192 modifiers \u2192 participle \u2192 noun. Padhne ka tareeka bhi yahi hai \u2014 pehle end wala noun dhoondo, phir peeche ki taraf padho.'
    },
    { title: 'Meister-Tabelle', body: [ 'Structure mapped to function.' ], table: { head: ['Structure', 'Function'], rows: [ ['Partizip I', 'Active / Ongoing Action'], ['Partizip II', 'Passive / Completed Action'], ['Expanded Partizipialattribut', 'Information Compression'], ['Relative Clause', 'Explicit Information'], ['Nominal Style', 'Maximum Information Density'] ] }, hinglish: 'Structure aur function ka table \u2014 pehle tay karo ki kaam ho raha hai ya ho chuka hai, phir Partizip I ya II chuno.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are mechanical \u2014 how the participle is formed, where the modifiers go, and the adjective ending. The last one is the limit worth knowing: not every verb can form a Partizip II attribute.' ], mistakes: [
      { wrong: 'Die gewachsende Wirtschaft schafft Arbeitspl\u00e4tze.', right: 'Die wachsende Wirtschaft schafft Arbeitspl\u00e4tze.', why: 'Partizip I is <b>Infinitiv + d</b> \u2014 <i>wachsen \u2192 wachsend</i>. There is no <i>ge-</i>; mixing the two forms produces a word that does not exist.' },
      { wrong: 'Die ver\u00f6ffentlichte gestern Studie ist wichtig.', right: 'Die gestern ver\u00f6ffentlichte Studie ist wichtig.', why: 'Everything that modifies the participle stands BEFORE it. The order is article \u2192 modifiers \u2192 participle \u2192 noun.' },
      { wrong: 'Die im Labor erhobene Daten sind eindeutig.', right: 'Die im Labor erhobenen Daten sind eindeutig.', why: 'The participle takes a normal adjective ending. After <i>die</i> (plural) that ending is <b>-en</b>.' },
      { wrong: 'Ein von Forschern entwickelter Methode wurde getestet.', right: 'Eine von Forschern entwickelte Methode wurde getestet.', why: 'The article and the participle both agree with the noun. <i>die Methode</i> is feminine, so it is <b>eine \u2026 entwickelte</b>.' },
      { wrong: 'Die Daten erhoben im Labor sind eindeutig.', right: 'Die im Labor erhobenen Daten sind eindeutig.', why: 'German cannot place the participle after the noun the way English does \u2014 the whole phrase must move in front of it.' },
      { wrong: 'Der geschlafene Mann wachte auf.', right: 'Der schlafende Mann wachte auf.', why: 'Only verbs that take a direct object form a passive Partizip II attribute. <i>schlafen</i> has no object, so only Partizip I works here.' }
    ], hinglish: 'Inme se chaar galtiyan mechanical hain \u2014 participle ki form, modifiers ki jagah, aur adjective ki ending. Aakhri wali ek limit batati hai: har verb se Partizip II attribute nahi banta.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to describe an ongoing action? Partizip I. Need to describe a completed action or resulting state? Partizip II. Need concise academic style? Expanded Partizipialattribut. Need maximum information density? Participial Attribute + Nominal Style.' ], note: 'Memory trick: think of every participial attribute as a folded relative clause. Nothing disappears — the information is simply compressed into the noun phrase, making the sentence more elegant and more typical of authentic C1 German.', hinglish: 'Kaam ho raha hai? <b>Partizip I</b> (Infinitiv + d). Ho chuka hai ya passive hai? <b>Partizip II</b>. Aur likhne ke baad do cheezein check karo \u2014 participle par sahi adjective ending hai, aur uske saare modifiers uske aage hain?' }
  ],
  reading: {
    title: 'Denkmalpflege: Die Restaurierung der Wismarer Speicher',
    titleEn: 'Reading A — Heritage conservation: restoring the Wismar warehouses',
    tokens: [
      { w: 'Die', role: 'r-erweitert', en: 'the (plural nom., expanded participial attribute opener)', hi: '', type: 'Article' },
      { w: 'auf', role: 'r-erweitert', en: 'on (part of expanded attribute)', hi: '', type: 'Präposition · Dat.' },
      { w: 'historischen', role: 'r-erweitert', en: 'historical (part of expanded attribute)', hi: '', type: 'Adjective · Dat.' },
      { w: 'Grundmauern', role: 'r-erweitert', en: 'foundation walls (part of expanded attribute)', hi: '', type: 'Noun · plural' },
      { w: 'beruhenden', role: 'r-erweitert', en: 'resting/based (expanded Partizip I attribute — ongoing, active meaning)', hi: 'आधारित (expanded Partizip I attribute)', type: 'Partizip I · Nom.', why: '"Beruhenden" is Partizip I (from "beruhen auf") expressing an ongoing state of being based on something (this chapter).' },
      { w: 'Neubauten', role: 'plain', en: 'new buildings (Satzende)', hi: 'नए भवन (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'überzeugen', role: 'plain', en: 'convince (Satzende)', hi: 'प्रभावित करते हैं (Satzende)', type: 'Verb · Satzende' },
      { w: 'sowohl', role: 'r-addition', en: 'both (correlative addition)', hi: 'दोनों', type: 'Konjunktion' },
      { w: 'Denkmalschützer', role: 'plain', en: 'heritage conservationists', hi: 'धरोहर संरक्षक', type: 'Noun · plural' },
      { w: 'als', role: 'r-addition', en: 'as (part of "als auch")', hi: '', type: 'Konjunktion' },
      { w: 'auch', role: 'r-addition', en: 'also (Satzende)', hi: 'भी (Satzende)', type: 'Adverb (Satzende)' },
      { w: 'Anwohner', role: 'plain', en: 'residents (Satzende)', hi: 'निवासी (Satzende)', type: 'Noun · plural' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-erweitert', en: 'the (plural nom., expanded participial attribute opener)', hi: '', type: 'Article' },
      { w: 'im', role: 'r-erweitert', en: 'in the (Kontraktion)', hi: '', type: 'Präposition (Kontraktion)' },
      { w: 'Zuge', role: 'r-erweitert', en: 'course (part of expanded attribute)', hi: '', type: 'Noun · masc.' },
      { w: 'der', role: 'r-erweitert', en: 'of the (fem. gen.)', hi: '', type: 'Article · Gen.' },
      { w: 'Sanierung', role: 'r-erweitert', en: 'renovation (part of expanded attribute)', hi: '', type: 'Noun · fem.' },
      { w: 'geborgenen', role: 'r-erweitert', en: 'recovered (expanded Partizip II attribute — completed, passive)', hi: 'निकाली गई (expanded Partizip II attribute)', type: 'Partizip II · Nom.', why: '"Geborgenen" is Partizip II, expressing a completed, passive action (this chapter).' },
      { w: 'Fundstücke', role: 'plain', en: 'artefacts (Satzende)', hi: 'अवशेष (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'sollen', role: 'plain', en: 'are meant to', hi: 'चाहिए', type: 'Verb · Modalverb' },
      { w: 'künftig', role: 'plain', en: 'in future', hi: 'भविष्य में', type: 'Adverb' },
      { w: 'im', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · in dem' },
      { w: 'Erdgeschoss', role: 'plain', en: 'ground floor (Satzende)', hi: 'भूतल (Satzende)', type: 'Noun · neut.' },
      { w: 'ausgestellt', role: 'plain', en: 'exhibited (Satzende)', hi: 'प्रदर्शित (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'plain', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true }
    ],
    translation: 'The new buildings based on historical foundation walls convince both heritage conservationists and residents. The artefacts recovered in the course of the renovation are to be exhibited on the ground floor in future.',
    comprehension: [
      { q: 'Ist "beruhenden" Partizip I oder Partizip II?', options: ['Partizip I (aktiv, andauernd)', 'Partizip II (passiv, abgeschlossen)', 'Weder noch'], answer: 0 },
      { q: 'Ist "geborgenen" Partizip I oder Partizip II?', options: ['Partizip II (passiv, abgeschlossen)', 'Partizip I (aktiv, andauernd)', 'Weder noch'], answer: 0 },
      { q: 'Was drücken beide Partizipialattribute stilistisch aus?', options: ['Kompakte, akademisch-journalistische Verdichtung von Information', 'Zufällige Wortwahl', 'Grammatikfehler'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungsreportage', titleEn: 'Reading B — Newspaper feature article',
    tokens: [
      { w: 'Der', role: 'r-partizip2-attribut', en: 'the (masc. nom., participial attribute opener)', hi: '(participial attribute opener)', type: 'Article' },
      { w: 'überraschend', role: 'r-partizip2-attribut', en: 'surprisingly (part of participial attribute)', hi: '(participial attribute ka hissa)', type: 'Adverb' },
      { w: 'zurückgetretene', role: 'r-partizip2-attribut', en: 'resigned (Partizip II attribute — completed action)', hi: 'isteefa diya hua (Partizip II attribute — completed action)', type: 'Partizip II · Nom.' },
      { w: 'Minister', role: 'plain', en: 'minister (Satzende)', hi: 'mantri (Satzende)', type: 'Noun · masc. (Satzende)' },
      { w: 'sorgte', role: 'plain', en: 'caused', hi: 'sabab bana', type: 'Verb (Präteritum)' },
      { w: 'für', role: 'plain', en: 'for', hi: 'ke liye', type: 'Präposition · Akk.' },
      { w: 'Aufsehen', role: 'plain', en: 'a stir (Satzende)', hi: 'halchal (Satzende)', type: 'Noun · neut. (Satzende)' },
      { w: '.', plain: true },
      { w: 'Die', role: 'r-partizip2-attribut', en: 'the (plural nom., participial attribute opener)', hi: '(participial attribute opener)', type: 'Article' },
      { w: 'schwer', role: 'r-partizip2-attribut', en: 'severely (part of participial attribute)', hi: '(participial attribute ka hissa)', type: 'Adverb' },
      { w: 'beschädigten', role: 'r-partizip2-attribut', en: 'damaged (Partizip II attribute — completed, passive)', hi: 'kshatigrast (Partizip II attribute)', type: 'Partizip II · Nom.' },
      { w: 'Gebäude', role: 'plain', en: 'buildings (Satzende)', hi: 'imaaraten (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: 'werden', role: 'plain', en: 'will be', hi: '', type: 'Verb · werden (Präsens)' },
      { w: 'renoviert', role: 'plain', en: 'renovated (Satzende)', hi: 'renovate ki jaayengi (Satzende)', type: 'Partizip II (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'The unexpectedly resigned minister caused a stir. The severely damaged buildings will be renovated.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_021_L001', speaker: 'Elke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, im dritten Absatz schreibst du: die Zahlen, die stetig sinken. Klingt das nicht etwas langatmig?', en: 'Timo, in the third paragraph you write: the numbers, which are steadily sinking. Doesn\'t that sound a bit long-winded?' },
      { id: 'C1_021_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Stimmt, "die stetig sinkenden Zahlen" wäre kompakter.', en: 'True, "the steadily sinking numbers" would be more compact.' },
      { id: 'C1_021_L003', speaker: 'Elke', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und beim scheidenden Geschäftsführer sparen wir uns gleich den ganzen Relativsatz.', en: 'And with the departing CEO we save the whole relative clause right away.' },
      { id: 'C1_021_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, das passt viel besser zum Stil einer Fachzeitschrift.', en: 'Exactly, that fits the style of a specialist journal much better.' }
    ],
    transcript: 'Timo, im dritten Absatz schreibst du: die Zahlen, die stetig sinken. Klingt das nicht etwas langatmig? Stimmt, "die stetig sinkenden Zahlen" wäre kompakter. Und beim scheidenden Geschäftsführer sparen wir uns gleich den ganzen Relativsatz. Genau, das passt viel besser zum Stil einer Fachzeitschrift.',
    translation: 'Timo, in the third paragraph you write: the numbers, which are steadily sinking. Doesn\'t that sound a bit long-winded? True, "the steadily sinking numbers" would be more compact. And with the departing CEO we save the whole relative clause right away. Exactly, that fits the style of a specialist journal much better.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'im' },
      { w: 'dritten' },
      { w: 'Absatz' },
      { w: 'schreibst' },
      { w: 'du' },
      { w: ':', plain: true },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'stetig' },
      { w: 'sinken' },
      { w: '.', plain: true },
      { w: 'Klingt' },
      { w: 'das' },
      { w: 'nicht' },
      { w: 'etwas' },
      { w: 'langatmig' },
      { w: '?', plain: true },
      { w: 'Stimmt' },
      { w: ',', plain: true },
      { w: '"', plain: true, spaceBefore: true, noSpaceAfter: true },
      { w: 'die' },
      { w: 'stetig' },
      { w: 'sinkenden' },
      { w: 'Zahlen' },
      { w: '"', plain: true },
      { w: 'wäre' },
      { w: 'kompakter' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'beim' },
      { w: 'scheidenden' },
      { w: 'Geschäftsführer' },
      { w: 'sparen' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'gleich' },
      { w: 'den' },
      { w: 'ganzen' },
      { w: 'Relativsatz' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'das' },
      { w: 'passt' },
      { w: 'viel' },
      { w: 'besser' },
      { w: 'zum' },
      { w: 'Stil' },
      { w: 'einer' },
      { w: 'Fachzeitschrift' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Was findet Elke zu umständlich?', qEn: 'What does Elke find too long-winded?', options: ['der Titel', '"die Zahlen, die stetig sinken"', 'die Einleitung', 'der letzte Satz'], optionsEn: ['the title', '"the numbers, which are steadily falling"', 'the introduction', 'the last sentence'], answer: 1,
        explain: '"… die Zahlen, die stetig sinken. Klingt das nicht etwas langatmig?"' },
      { q: 'Welche kompakte Alternative verwenden sie für den Geschäftsführer?', qEn: 'What compact alternative do they use for the CEO?', options: ['ein neuer Relativsatz', 'der scheidende Geschäftsführer', 'ein längerer Satz', 'ein Zitat'], optionsEn: ['a new relative clause', 'the outgoing managing director', 'a longer sentence', 'a quotation'], answer: 1,
        explain: '"Und beim scheidenden Geschäftsführer sparen wir uns gleich den ganzen Relativsatz."' }
    ]
  },
  speaking: [
    { task: "Timo findet „die Zahlen, die stetig sinken“ langatmig. Sag es kompakter.", taskEn: "Timo finds 'the figures that are steadily falling' long-winded. Say it more compactly.", de: "Die stetig sinkenden Zahlen wirken im Absatz deutlich kompakter.", en: "'The steadily falling figures' works far more compactly in the paragraph." },
    { task: "Eine Kollegin fragt, auf welche Studie sich dein Abstract stützt.", taskEn: "A colleague asks which study your abstract relies on.", de: "Ich stütze mich auf die 2023 veröffentlichte Studie, sie ist besonders aussagekräftig.", en: "I rely on the study published in 2023, it's particularly informative." },
    { task: "Beschreibe eine laufende Entwicklung im Bericht.", taskEn: "Describe an ongoing development in the report.", de: "Die stetig steigende Zahl älterer Patienten verändert die Versorgung.", en: "The steadily rising number of older patients is changing care." },
    { task: "Sag im Methodenteil, woher die Werte stammen.", taskEn: "State in the methods section where the values come from.", de: "Die im Labor erhobenen Werte weichen von den Feldwerten ab.", en: "The values collected in the lab deviate from the field values." },
    { task: "Eine Kollegin fragt nach der Kürzung im dritten Absatz.", taskEn: "A colleague asks about the cut in the third paragraph.", de: "Ich habe den Relativsatz gefaltet: das von uns entwickelte Verfahren.", en: "I folded the relative clause: 'the procedure developed by us'." }
  ],
  writing: {
    prompt: 'TASK 1 — Transformation (150 words): Transform relative clauses into authentic participial attributes. Include simple, intermediate, and advanced examples.\n\nTASK 2 — Academic article (350 words): Use a high density of Partizipialattribute instead of repetitive relative clauses, consciously varying between relative clauses, participial attributes, and nominal style.',
    starters: ['Die gestern veröffentlichte Studie bestätigt den Trend.', 'Die von internationalen Forschern entwickelte Methode überzeugt.'],
    placeholder: 'Die wachsende Bedeutung erneuerbarer Energien zeigt sich deutlich. Die im Labor erhobenen Daten bestätigen...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which participle form expresses an ongoing, active process?', options: ['Partizip I', 'Partizip II', 'Neither'], answer: 0, explain: 'Partizip I (wachsend, steigend, zunehmend) expresses ongoing/active meaning, unlike completed Partizip II.' },
    gap: { sentence: ['Die gestern ', ' Studie ist relevant.'], gaps: [ { answer: 'veröffentlichte', accepts: ['veröffentlichte'] } ], explain: '"Veröffentlichte" is the Partizip II attribute folding "die...veröffentlicht wurde" into one word.' },
    match: { q: 'Match each attribute to its type.', pairs: [ { noun: 'die wachsende Wirtschaft', art: 'Partizip I attribute' }, { noun: 'die veröffentlichte Studie', art: 'Partizip II attribute' }, { noun: 'die im Labor erhobenen Daten', art: 'Expanded Partizip II attribute' }, { noun: 'die von Forschern entwickelte Methode', art: 'Expanded attribute with agent phrase' } ] },
    builder: { target: 'Build: "The data collected in the lab are meaningful." (expanded Partizip II attribute)', bank: ['Die', 'im', 'Labor', 'erhobenen', 'Daten', 'sind', 'aussagekräftig', '.'], answer: ['Die', 'im', 'Labor', 'erhobenen', 'Daten', 'sind', 'aussagekräftig', '.'], roles: { 'erhobenen': 'r-erweitert' } },
    errorCorrection: { title: 'Error correction', wrong: 'Die Daten erhobenen im Labor sind aussagekräftig.', right: 'Die im Labor erhobenen Daten sind aussagekräftig.', explain: 'All modifiers of an expanded participial attribute must precede the participle, not follow it.' }
  },
  quiz: [
    { q: 'What does a participial attribute do to a relative clause?', options: ['Folds it into a compressed pre-noun attribute without losing information', 'Deletes the information entirely', 'Makes the sentence longer'], answer: 0, explain: 'Nothing disappears — the information is compressed into the noun phrase.' },
    { q: 'Which participle expresses completed, passive meaning?', options: ['Partizip II', 'Partizip I', 'Neither'], answer: 0, explain: 'Partizip II (veröffentlichte, entwickelte, erhobenen) expresses completed/passive meaning.' },
    { q: 'Where must modifiers go in an expanded participial attribute?', options: ['Before the participle', 'After the participle', 'Anywhere in the sentence'], answer: 0, explain: 'German participial attributes require modifiers to precede the participle itself.' },
    { q: 'Which register uses participial attributes most frequently?', options: ['Academic/scientific/journalistic', 'Casual conversation', 'They are equally frequent everywhere'], answer: 0, explain: 'Formal written registers favor compressed participial attributes over explicit relative clauses.' },
    { q: 'What is the C1 memory trick for participial attributes?', options: ['Think of every one as a folded relative clause', 'They are grammatically optional decorations', 'They always replace the main verb'], answer: 0, explain: 'The participial attribute is simply a compressed version of a relative clause, preserving all its meaning.' }
  ],
  takeaways: [
    { c: 'r-partizip1-attribut', html: 'Partizip I attributes (wachsende, steigende, zunehmende) express ongoing, active processes.' },
    { c: 'r-partizip2-attribut', html: 'Partizip II attributes (veröffentlichte, entwickelte, erhobenen) express completed actions or passive/resulting states.' },
    { c: 'r-erweitert', html: 'Expanded participial attributes embed modifiers (im Labor, von Forschern) before the participle for dense, elegant academic compression.' }
  ],
  revisionTips: [
    'Take five relative clauses and fold each into a simple participial attribute, checking Partizip I vs II carefully.',
    'Find a German scientific abstract and mark every expanded participial attribute, identifying the embedded modifier.',
    'Practise placing modifiers correctly by building three expanded attributes with agent phrases (von...).'
  ]
};
window.CHAPTER = CHAPTER;
