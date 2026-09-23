/* KLARWEG CHAPTER DATA — C1 · Chapter 35
   "Konzession & Abwägen" — conceding opposing viewpoints,
   qualifying strong claims, weighing advantages/disadvantages,
   stating limitations, balanced conclusions. NOT basic concessive
   conjunctions or adversative connectors (already mastered).
   Dialogue: Nadja and Timo ONLY. */
const CHAPTER = {
  id: 'c1-35-konzession-und-abwaegen',
  phase: 'C1 · Nominalstil & Präzision',
  number: 35,
  title: 'Konzession & Abwägen',
  titleEn: 'Concession and weighing arguments',
  description: 'Think like a scientist, not a lawyer. A lawyer proves one side. A scientist asks: what supports this, what speaks against it, what are the limitations, what conclusion is justified? That mindset produces authentic C1 academic German.',
  xp: 890, time: 110, difficulty: 'Advanced',
  nextChapter: { number: 36, title: 'Register & Stilebenen beherrschen', titleEn: 'Mastering register and style levels' , href: 'chapter-c1-36-register-und-stilebenen-beherrschen.html' },
  prevChapter: { number: 34, title: 'Argumentieren auf C1-Niveau', titleEn: 'Arguing at C1 level', href: 'chapter-c1-34-argumentieren-auf-c1-niveau.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Concede a valid point — it <em>strengthens</em>, not weakens, your position.',
    intro: 'Preparing a seminar on renewable energy, Nadja agrees fundamentally with a merger while Timo concedes its advantages but flags the small figures — weighing benefits, drawbacks, and limitations like scientists, not lawyers defending one side.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'See concession, qualification, and balanced evaluation used to reach a nuanced, credible conclusion'],
    scene: 'Vorbereitung eines Seminars über erneuerbare Energien',
    femaleSpeakers: ['Nadja'],
    dialogue: [
      { speaker: 'Nadja', tokens: [
        { w: 'Grundsätzlich', role: 'r-akkusativ', en: 'fundamentally', hi: 'मूल रूप से', pron: 'GRUNT-zets-likh', type: 'Adverb', why: 'grundsätzlich = fundamentally (this chapter).', ex: 'Grundsätzlich bin ich einverstanden.', exEn: 'Fundamentally I agree.' },
        { w: 'bin', role: 'r-verb', en: 'am', hi: 'हूँ', pron: 'bin', type: 'Verb · sein' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'mit', role: 'r-preposition', en: 'with', hi: 'से', pron: 'mit', type: 'Preposition' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Fusion', role: 'r-dativ', en: 'merger (dat.)', hi: 'विलय से', pron: 'fu-ZYON', type: 'Noun · fem. dat.' },
        { w: 'einverstanden', role: 'r-akkusativ', en: 'in agreement', hi: 'सहमत', pron: 'INE-fer-shtan-den', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Fundamentally I agree with the merger.', hi: 'Moolroop se main vilay se sahmat hoon.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'räume', role: 'r-verb', en: 'concede', hi: 'मानता हूँ', pron: 'ROY-muh', type: 'Verb · einräumen (ich)', lexicalUnit: 'einräumen', why: 'einräumen = to concede/admit (this chapter).', ex: 'Ich räume ein, dass die Fusion Vorteile hat.', exEn: 'I concede that the merger has advantages.' },
        { w: 'ein', role: 'r-verb', en: '(prefix of einräumen)', hi: '', pron: 'ine', type: 'Separable prefix', lexicalUnit: 'einräumen' },
        { w: ',', plain: true },
        { w: 'dass', role: 'r-conjunction', en: 'that', hi: 'कि', pron: 'das', type: 'Conjunction · dass' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Fusion', role: 'r-subject', en: 'merger', hi: 'विलय', pron: 'fu-ZYON', type: 'Noun · fem.' },
        { w: 'Vorteile', role: 'r-akkusativ', en: 'advantages', hi: 'फ़ायदे', pron: 'FOR-ty-luh', type: 'Noun · plural' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'है', pron: 'hat', type: 'Verb · haben (Satzende)' },
        { w: '.', plain: true }
      ], en: 'I concede that the merger has advantages.', hi: 'Main maanta hoon ki vilay ke faayde hain.' },
      { speaker: 'Nadja', tokens: [
        { w: 'Weitgehend', role: 'r-akkusativ', en: 'largely', hi: 'ज़्यादातर', pron: 'VYT-gay-hent', type: 'Adverb', why: 'weitgehend = largely (this chapter).', ex: 'Weitgehend stimme ich zu.', exEn: 'Largely I agree.' },
        { w: 'stimme', role: 'r-verb', en: 'agree', hi: 'सहमत', pron: 'SHTI-muh', type: 'Verb · zustimmen (ich)', lexicalUnit: 'zustimmen' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'zu', role: 'r-verb', en: '(prefix of zustimmen)', hi: '', pron: 'tsoo', type: 'Separable prefix', lexicalUnit: 'zustimmen' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'die', role: 'r-subject', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem.' },
        { w: 'Aussagekraft', role: 'r-subject', en: 'significance', hi: 'महत्ता', pron: 'OWS-zah-guh-kraft', type: 'Noun · fem.', why: 'die Aussagekraft = the significance/persuasive weight of an argument (this chapter).', ex: 'Die Aussagekraft der Zahlen ist gering.', exEn: 'The significance of the figures is small.' },
        { w: 'der', role: 'r-dativ', en: 'the (pl. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Zahlen', role: 'r-dativ', en: 'figures (gen.)', hi: 'आंकड़ों के', pron: 'TSAH-len', type: 'Noun · plural genitive' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'gering', role: 'r-akkusativ', en: 'small', hi: 'कम', pron: 'ge-RING', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'Largely I agree, but the significance of the figures is small.', hi: 'Zyaadatar main sahmat hoon, par aankdon ki mahatta kam hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Insgesamt', role: 'r-akkusativ', en: 'overall', hi: 'कुल मिलाकर', pron: 'ins-guh-ZAMT', type: 'Adverb', why: 'insgesamt = overall (this chapter).', ex: 'Insgesamt sollten wir zustimmen.', exEn: 'Overall we should agree.' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'trotzdem', role: 'r-adverb', en: 'nevertheless', hi: 'फिर भी', pron: 'trots-DAYM', type: 'Adverb · connector' },
        { w: 'zustimmen', role: 'r-verb', en: 'agree', hi: 'सहमत होना', pron: 'TSOO-shti-men', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Overall we should nevertheless agree.', hi: 'Kul milakar humein phir bhi sahmat hona chahiye.' },
      { speaker: 'Nadja', tokens: [
        { w: 'Gut', role: 'r-adjective', en: 'good', hi: 'अच्छा', pron: 'goot', type: 'Adjective' },
        { w: ',', plain: true },
        { w: 'dann', role: 'r-adverb', en: 'then', hi: 'फिर', pron: 'dan', type: 'Adverb' },
        { w: 'unterschreibe', role: 'r-verb', en: 'sign', hi: 'हस्ताक्षर करती हूँ', pron: 'un-ter-SHRY-buh', type: 'Verb · unterschreiben (ich)' },
        { w: 'ich', role: 'r-subject', en: 'I', hi: 'मैं', pron: 'ikh', type: 'Pronoun · subject' },
        { w: 'den', role: 'r-akkusativ', en: 'the (masc.)', hi: 'यह', pron: 'dayn', type: 'Article · masc. acc.' },
        { w: 'Vertrag', role: 'r-akkusativ', en: 'contract', hi: 'अनुबंध', pron: 'fer-TRAHK', type: 'Noun · masc.' },
        { w: 'morgen', role: 'r-time', en: 'tomorrow', hi: 'कल', pron: 'MOR-gen', type: 'Adverb · time' },
        { w: '.', plain: true }
      ], en: 'Good, then I will sign the contract tomorrow.', hi: 'Achha, toh main kal anubandh par hastakshaar karti hoon.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Think like a scientist, not a lawyer. Ask: what supports this? what speaks against it? what are the <span class="de r-einschraenkung">limitations</span>? what conclusion is justified?' },
  writingTutorPrompt: 'You are a warm, encouraging German (C1) tutor for a Hindi/English-speaking learner. The lesson is KONZESSION & ABWÄGEN at C1 level — conceding opposing viewpoints, qualifying strong claims, weighing advantages/disadvantages, and reaching balanced conclusions, NOT basic concessive conjunctions (obwohl, trotzdem) or adversative connectors (already mastered). Covered: concession phrases (zwar...jedoch, zwar...dennoch, auch wenn, selbst wenn, wenngleich, obgleich); qualification/hedging phrases that avoid absolute claims (grundsätzlich, weitgehend, größtenteils, teilweise, nur bedingt, unter bestimmten Voraussetzungen, im Allgemeinen, in vielen Fällen); weighing structures (einerseits...andererseits, dem stehen...gegenüber, demgegenüber, auf der einen Seite...auf der anderen Seite, insgesamt überwiegen); academic/scientific limitation statements (die Aussagekraft ist begrenzt, erhebt keinen Anspruch auf Vollständigkeit, muss vorsichtig interpretiert werden); the full evaluation model (Situation → Advantages → Disadvantages → Limitations → Evaluation → Recommendation); and the key C1 principle that conceding a valid opposing point strengthens rather than weakens one\'s own position. Do NOT expect or require basic obwohl/trotzdem formation or elementary adversative connectors — this chapter assumes those are mastered; do not flag their absence. The most important things to catch: presenting only one side of an issue without acknowledging counterpoints; making absolute, unqualified claims where a hedge (grundsätzlich, weitgehend) would be more credible; ignoring or omitting limitations in scientific/academic claims; confusing concession (acknowledging a valid point) with simple contradiction; overusing plain "aber" instead of nuanced concession/qualification phrases; reaching a biased or one-sided conclusion instead of a balanced recommendation. The learner wrote the text below.\n\nTEXT:\n"""{{TEXT}}"""\n\nACCURACY RULES: Flag one-sided arguments lacking acknowledgment of the opposing view; flag absolute claims that should be qualified; flag missing limitation statements in scientific-register claims; check that weighing structures (einerseits...andererseits, insgesamt überwiegen) lead to a genuinely balanced, not biased, conclusion. If unsure, do not flag. Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences): 1) <p><b>Overall:</b> one short encouraging sentence.</p> 2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue, wrong in <span class="strike de">, fix in <span class="de">, brief why. If none: <li>No errors — well done.</li> 3) <p><b>Balance check:</b> one sentence on whether the learner\'s conclusion reflects genuine, evidence-based weighing rather than a one-sided opinion.</p> Keep under 130 words.',
  quizRecommendation: { high: 'Excellent — you weigh evidence like a scientist, conceding valid points and reaching genuinely balanced conclusions. Ready for the next chapter.', mid: 'Good. Re-read the Evaluation Model and Master Table once, then continue.', low: 'Worth another pass through the Grammar section — remember: think like a scientist, not a lawyer.' },
  parserSentence: [ { w: 'Einerseits', role: 'r-abwaegen' }, { w: 'senken', role: 'plain' }, { w: 'sie', role: 'plain' }, { w: 'Emissionen', role: 'plain' }, { w: ',', role: 'plain' }, { w: 'andererseits', role: 'r-abwaegen' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: conceding a valid opposing point strengthens, not weakens, your position.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Nadja and Timo prepare a seminar, carefully weighing benefits, drawbacks, and limitations instead of one-sided defense.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Learn the chapter\'s key concession/evaluation expressions — full popups with two examples, register, and Hindi.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master concession, qualification, weighing structures, and limitation statements across registers.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Read a scientific discussion article and a newspaper opinion piece, identifying concessions and balanced evaluation.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify concessions, reservations, and balanced conclusions in a university seminar and expert panel.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Weigh advantages and disadvantages, evaluate evidence, and present balanced recommendations.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Add concessions and limitations to a text, and write a 350-word discussion essay with balanced judgement.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill concession selection, qualification practice, and advantages-vs-disadvantages evaluation.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 890 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter words with translations and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '8 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Concession selection and advantages-vs-disadvantages drills, plus a full discussion essay writing task.', pdfUrl: '/pdfs/homework.pdf', size: '13 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Evaluation Model, Academic Discussion Scale, and Decision Flowchart.', pdfUrl: '/pdfs/grammar.pdf', size: '12 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'Erneuerbare Energien bieten Vorteile, bringen jedoch auch Herausforderungen mit sich.', text: 'Concede a drawback without undermining a positive claim' },
    { de: 'Grundsätzlich sind sich die Experten einig, allerdings gibt es weitgehend unbeantwortete Fragen.', text: 'Qualify a strong claim with "grundsätzlich" and "weitgehend"' },
    { de: 'Einerseits senken sie die Emissionen, andererseits stehen hohe Anfangskosten gegenüber.', text: 'Weigh two sides using "einerseits...andererseits" and "stehen...gegenüber"' },
    { de: 'Die Aussagekraft der Studie ist begrenzt.', text: 'State a scientific limitation with a fixed phrase' },
    { de: 'Insgesamt überwiegen die Vorteile.', text: 'Reach a balanced conclusion after weighing both sides' }
  ],
  vocab: [
    { de: 'grundsätzlich', pos: 'adverb', level: 'C1', register: 'written', en: 'fundamentally, in principle', hi: 'मूल रूप से', ex: 'Grundsätzlich sind sich die Experten einig.', exEn: 'In principle, experts are in agreement.', exHi: 'Moolroop se, visheshagya ekmat hain.', ex2: 'Grundsätzlich ist die Idee gut, erfordert aber Anpassungen.', ex2En: 'Fundamentally, the idea is good, but requires adjustments.', ex2Hi: 'Moolroop se, vichaar achha hai, lekin adjustments chahiye.' },
    { de: 'weitgehend', pos: 'adverb', level: 'C1', register: 'written', en: 'largely, mostly', hi: 'ज़्यादातर', ex: 'Es gibt weitgehend unbeantwortete Fragen.', exEn: 'There are largely unanswered questions.', exHi: 'Zyaadatar anuttarit sawaal hain.', ex2: 'Die Reform wurde weitgehend positiv aufgenommen.', ex2En: 'The reform was largely received positively.', ex2Hi: 'Sudhaar ko zyaadatar sakaaratmak roop se sweekaara gaya.' },
    { de: 'die Aussagekraft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'C1', register: 'written', en: 'explanatory power, validity', hi: 'व्याख्यात्मक शक्ति', ex: 'Die Aussagekraft der Studie ist begrenzt.', exEn: 'The explanatory power of the study is limited.', exHi: 'Adhyayan ki vyaakhyaatmak shakti seemit hai.', ex2: 'Die Aussagekraft dieser Umfrage ist umstritten.', ex2En: 'The validity of this survey is disputed.', ex2Hi: 'Iss survey ki vyaakhyaatmak shakti vivaadit hai.' },
    { de: 'einräumen', pos: 'verb', level: 'C1', register: 'written', en: 'to concede, admit', hi: 'स्वीकार करना', ex: 'Kritiker räumen zwar ein, dass Fortschritte gemacht wurden.', exEn: 'Critics do concede that progress has been made.', exHi: 'Aalochak yeh svikaar karte hain ki pragati hui hai.', ex2: 'Sie räumte ihren Fehler ein.', ex2En: 'She admitted her mistake.', ex2Hi: 'Usne apni galti svikaar ki.', conj: { praesens: 'räumt ein', praeteritum: 'räumte ein', perfekt: 'hat eingeräumt' } },
    { de: 'insgesamt', pos: 'adverb', level: 'C1', register: 'both', en: 'overall, in total', hi: 'कुल मिलाकर', ex: 'Insgesamt überwiegen die Vorteile.', exEn: 'Overall, the advantages outweigh.', exHi: 'Poore taur par faayde zyaada hote hain.', ex2: 'Insgesamt war das Projekt erfolgreich.', ex2En: 'Overall, the project was successful.', ex2Hi: 'Kul milaakar, project safal raha.' }
  ],
  grammar: [
    { title: 'Was ist Konzession? (What is Concession?)', body: [ 'Opinion → Opposing View → Acknowledgement → Evaluation → Balanced Position → Conclusion. Conceding part of an opposing argument strengthens, not weakens, one\'s own position.' ], hinglish: 'Concession ka matlab hai doosri taraf ki ek baat maan lena \u2014 aur isse tumhari baat kamzor nahi hoti, mazboot hoti hai. Kyunki jab tum khud objection utha kar uska jawaab dete ho, to reader ko lagta hai ki tumne poora socha hai. Exam mein iske marks bhi milte hain.' },
    { title: 'Konzession ausdrücken (Expressing Concession)', body: [ 'Zwar...jedoch, zwar...dennoch, obwohl, auch wenn, selbst wenn, wenngleich, obgleich — each carries a distinct register/nuance, from spoken (auch wenn) to formal written (wenngleich, obgleich).' ], hinglish: 'Register ke hisaab se chuno \u2014 <b>obwohl</b> aur <b>auch wenn</b> har jagah chalte hain, aur <b>wenngleich</b> aur <b>obgleich</b> sirf formal writing mein. <b>selbst wenn</b> thoda zyada zor deta hai (\u201cchahe \u2026 to bhi\u201d). Par grammar par dhyaan do \u2014 yeh saare verb ko clause ke <b>end</b> mein bhejte hain, jabki <b>zwar \u2026 jedoch</b> mein verb doosri jagah par rehta hai.' },
    { title: 'Aussagen qualifizieren (Qualifying Statements)', body: [ 'grundsätzlich, weitgehend, größtenteils, teilweise, nur bedingt, unter bestimmten Voraussetzungen, im Allgemeinen, in vielen Fällen — native speakers avoid overly absolute statements by hedging with these qualifiers.' ], hinglish: 'Academic German mein poore dave se bacha jaata hai, aur yeh shabd usi kaam ke hain. <b>grunds\u00e4tzlich</b> aur <b>im Allgemeinen</b> matlab \u201caam taur par\u201d, <b>weitgehend</b> aur <b>gr\u00f6\u00dftenteils</b> matlab \u201czyada-tar\u201d, aur <b>nur bedingt</b> matlab \u201csirf kuch hadd tak\u201d. Yeh kamzori nahi dikhate \u2014 balki imaandaari, aur isliye yeh zyada credible lagte hain. Dhyaan do ki yeh sentence ke beech mein baithte hain.' },
    { title: 'Vor- und Nachteile abwägen (Weighing Advantages and Disadvantages)', body: [ 'Einerseits...andererseits, dem stehen...gegenüber, demgegenüber, auf der einen Seite...auf der anderen Seite, insgesamt überwiegen — structures for balanced evaluation leading to a final judgment.' ], hinglish: 'Dono taraf taulne ke liye <b>einerseits \u2026 andererseits</b> sabse common hai \u2014 aur dono hisson mein verb doosri jagah par aata hai. Ant mein faisla dena zaroori hai, warna text adhoora lagta hai: <span class="de">Insgesamt \u00fcberwiegen die Vorteile.</span> Yahi woh line hai jo batati hai ki tumhari raay kya hai.' },
    { title: 'Wissenschaftliche Einschränkungen (Scientific Limitation Statements)', body: [ 'Die Ergebnisse sind vielversprechend, müssen jedoch vorsichtig interpretiert werden. Diese Untersuchung erhebt keinen Anspruch auf Vollständigkeit. Die Aussagekraft ist begrenzt. Acknowledging limitations increases scientific credibility.' ], hinglish: 'Scientific writing mein apni study ki kami khud batayi jaati hai \u2014 aur yeh weakness nahi, standard practice hai. <span class="de">Die Ergebnisse sind vielversprechend, m\u00fcssen jedoch vorsichtig interpretiert werden</span> aur <span class="de">Die Aussagekraft ist begrenzt</span> jaise vaakya har paper mein milte hain. Inhe poore chunk ki tarah yaad karo.' },
    {
      title: 'Wortstellung bei Konzessionen',
      body: [
        'Concession has exactly two grammatical shapes, and confusing them is what most errors in this chapter are.',
        'The conjunctions open a subordinate clause and send the verb to the end. The adverbs open a main clause and take verb-second.'
      ],
      table: {
        head: ['Type', 'Word order', 'Members'],
        rows: [
          ['subordinating conjunction', '<b>verb last</b>', '<span class="de">obwohl, obgleich, wenngleich, auch wenn, selbst wenn</span>'],
          ['adverb in position 1', '<b>verb second</b>', '<span class="de">jedoch, dennoch, trotzdem, allerdings, gleichwohl</span>'],
          ['fixed pair', 'zwar in pos. 1 \u2192 verb second', '<span class="de">zwar \u2026 jedoch / zwar \u2026 dennoch</span>'],
          ['balanced pair', 'both halves pos. 1 \u2192 verb second', '<span class="de">einerseits \u2026 andererseits</span>'],
          ['qualifier', 'sits in the middle field', '<span class="de">Die Aussage ist <b>weitgehend</b> zutreffend.</span>']
        ]
      },
      note: 'Never combine two concessive markers: <i>obwohl \u2026 trotzdem</i>, <i>zwar \u2026 aber dennoch</i> and <i>auch wenn \u2026 jedoch</i> are all wrong. One marker per relationship.',
      hinglish: 'Concession ke sirf do grammatical roop hain, aur is chapter ki zyada-tar galtiyan inhe mila dene se hoti hain. <b>obwohl, obgleich, wenngleich, auch wenn, selbst wenn</b> subordinating conjunctions hain \u2014 inke clause ka verb <b>end</b> mein jaata hai: <span class="de">auch wenn die Studie umfangreich <b>ist</b></span>. Aur <b>jedoch, dennoch, trotzdem, allerdings, gleichwohl</b> adverbs hain \u2014 yeh naya main clause kholte hain, isliye inke turant baad <b>verb</b> aata hai: <span class="de">dennoch <b>liefert</b> sie gute Daten</span>. <b>einerseits \u2026 andererseits</b> mein dono hisse position 1 lete hain, isliye dono mein verb doosri jagah par. Aur ek pakki baat \u2014 do concessive markers ek saath kabhi nahi: <i>obwohl \u2026 trotzdem</i> aur <i>zwar \u2026 aber dennoch</i> dono galat hain.'
    },
    { title: 'Meister-Tabelle', body: [ 'Function mapped to typical expressions.' ], table: { head: ['Function', 'Typical Expressions'], rows: [ ['Concession', 'zwar ..., jedoch; obwohl'], ['Qualification', 'grundsätzlich; weitgehend'], ['Evaluation', 'einerseits ..., andererseits'], ['Limitation', 'nur bedingt; eingeschränkt'], ['Recommendation', 'insgesamt; abschließend'] ] }, hinglish: 'Function aur expression ka table \u2014 par expression chunne ke baad uska type bhi dekh lo, kyunki word order usi se tay hoga.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are word order \u2014 concessive conjunctions need verb-final, the adverbs need verb-second. The other two double a contrast that one word already carries, or concede and then contradict the concession.' ], mistakes: [
      { wrong: 'Zwar ist die Methode teuer, aber dennoch liefert sie gute Daten.', right: 'Zwar ist die Methode teuer, dennoch liefert sie gute Daten. / \u2026, aber sie liefert gute Daten.', why: '<b>zwar</b> pairs with ONE partner \u2014 either <b>aber</b> or <b>dennoch</b>, never both. Two contrast words mark the same relationship twice.' },
      { wrong: 'Obwohl die Daten begrenzt sind, trotzdem \u00fcberwiegen die Vorteile.', right: 'Obwohl die Daten begrenzt sind, \u00fcberwiegen die Vorteile.', why: '<b>obwohl</b> already carries the concession. Adding <b>trotzdem</b> in the main clause repeats it \u2014 and displaces the verb from position 2.' },
      { wrong: 'Auch wenn die Studie ist umfangreich, bleiben Fragen offen.', right: 'Auch wenn die Studie umfangreich ist, bleiben Fragen offen.', why: '<b>auch wenn</b> is a subordinating conjunction, so its verb goes to the END of the clause \u2014 unlike the adverbs <i>jedoch</i> and <i>dennoch</i>.' },
      { wrong: 'Die Ergebnisse sind nur bedingt aussagekr\u00e4ftig, aber sie sind vollst\u00e4ndig \u00fcberzeugend.', right: 'Die Ergebnisse sind nur bedingt aussagekr\u00e4ftig, dennoch sind sie ein wichtiger Hinweis.', why: 'A concession has to stay consistent: after conceding limited validity you cannot claim full certainty. Scale the second half down too.' },
      { wrong: 'Einerseits sind die Kosten hoch, andererseits der Nutzen ist gro\u00df.', right: 'Einerseits sind die Kosten hoch, andererseits ist der Nutzen gro\u00df.', why: 'Both halves of <b>einerseits \u2026 andererseits</b> take position 1, so the verb comes second in each \u2014 before the subject.' },
      { wrong: 'Insgesamt \u00fcberwiegen die Vorteile, obgleich die Kosten sind hoch.', right: 'Insgesamt \u00fcberwiegen die Vorteile, obgleich die Kosten hoch sind.', why: '<b>obgleich</b> behaves exactly like <b>obwohl</b> \u2014 verb-final. The register is more formal, the syntax identical.' }
    ], hinglish: 'Chaar galtiyan word order ki hain \u2014 concessive conjunctions ke baad verb end mein, aur adverbs ke baad verb doosri jagah par. Baaki do mein contrast do baar laga diya gaya hai, ya concession dekar phir ulta dava kar diya gaya hai.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Need to evaluate an issue? Present both sides. Acknowledge strengths. Recognize weaknesses. Evaluate evidence. State limitations. Reach a balanced conclusion.' ], note: 'Memory trick: think like a scientist, not a lawyer. A lawyer proves one side; a scientist asks what supports this, what speaks against it, what are the limitations, what conclusion is justified.', hinglish: 'Kisi baat par raay deni hai? Dono taraf rakho, doosri taraf ki achhi baat maano, uski kami batao, saboot tolo, apni study ki limits batao, aur ant mein ek saaf nateeja do. Aur likhne ke baad ek baar word order check karo \u2014 concessive conjunction ke baad verb end mein, aur adverb ke baad verb doosri jagah par?' }
  ],
  reading: {
    title: 'Fachartikel: Neues Diabetes-Medikament in der Diskussion',
    titleEn: 'Reading A — Journal article: new diabetes medication under discussion',
    tokens: [
      { w: 'Die', role: 'plain', en: 'the (plural nom.)', hi: 'ये', type: 'Article' },
      { w: 'Ergebnisse', role: 'plain', en: 'results', hi: 'नतीजे', type: 'Noun · plural' },
      { w: 'einer', role: 'plain', en: 'of a (fem. gen.)', hi: 'एक', type: 'Article · Gen.' },
      { w: 'aktuellen', role: 'plain', en: 'current', hi: 'हालिया', type: 'Adjective · Gen.' },
      { w: 'Phase-III-Studie', role: 'plain', en: 'phase-III trial (Satzende)', hi: 'चरण-III परीक्षण (Satzende)', type: 'Noun · fem.' },
      { w: 'sind', role: 'plain', en: 'are', hi: 'हैं', type: 'Verb · sein' },
      { w: 'vielversprechend', role: 'plain', en: 'promising (Satzende)', hi: 'आशाजनक (Satzende)', type: 'Adjective' },
      { w: ',', plain: true },
      { w: 'müssen', role: 'r-konzession', en: 'must (concession connector — weighing strengths against limitations)', hi: '', type: 'Verb · Modalverb', why: '"Vielversprechend, müssen jedoch...vorsichtig interpretiert werden" weighs a strength against a limitation in one balanced sentence (this chapter).' },
      { w: 'jedoch', role: 'r-konzession', en: 'however', hi: 'हालांकि', type: 'Adverb' },
      { w: 'aufgrund', role: 'plain', en: 'due to', hi: 'के कारण', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'इस', type: 'Article · Gen.' },
      { w: 'kurzen', role: 'plain', en: 'short', hi: 'छोटी', type: 'Adjective · Gen.' },
      { w: 'Beobachtungsdauer', role: 'plain', en: 'observation period (Satzende)', hi: 'निगरानी अवधि (Satzende)', type: 'Noun · fem.' },
      { w: 'vorsichtig', role: 'r-konzession', en: 'cautiously', hi: 'सावधानी से', type: 'Adjective (Adverbial)' },
      { w: 'interpretiert', role: 'r-konzession', en: 'interpreted (Satzende)', hi: 'व्याख्यायित (Satzende)', type: 'Verb · Partizip II' },
      { w: 'werden', role: 'r-konzession', en: 'be (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Infinitiv Passiv)' },
      { w: '.', plain: true }
    ],
    translation: 'The results of a current phase-III trial are promising, but must be interpreted cautiously due to the short observation period.',
    comprehension: [
      { q: 'Welche Funktion hat "müssen jedoch...vorsichtig interpretiert werden"?', options: ['Eine Einschränkung nach einem positiven Befund einräumen', 'Ein Gegenargument widerlegen', 'Eine Tatsache feststellen'], answer: 0 },
      { q: 'Warum ist Vorsicht geboten?', options: ['Wegen der kurzen Beobachtungsdauer', 'Wegen fehlender Finanzierung', 'Wegen ethischer Bedenken'], answer: 0 },
      { q: 'Ist der Text einseitig positiv oder abwägend?', options: ['Abwägend', 'Rein positiv', 'Rein negativ'], answer: 0 }
    ]
  },

  readingBArchive: {
    title: 'Zeitungskommentar', titleEn: 'Reading B — Newspaper opinion article',
    tokens: [
      { w: 'Kritiker', role: 'r-konzession', en: 'critics (subject of "Kritiker räumen zwar ein", concession-introducing phrase)', hi: 'aalochak (concession-introducing phrase)', type: 'Noun · plural' },
      { w: 'räumen', role: 'r-konzession', en: 'concede (part of "räumen zwar ein")', hi: '(räumen zwar ein ka hissa)', type: 'Verb (Präsens)' },
      { w: 'zwar', role: 'r-konzession', en: 'admittedly (part of "zwar...ein", concession)', hi: '(zwar...ein, concession)', type: 'Adverb' },
      { w: 'ein', role: 'r-konzession', en: '(Satzende, part of "einräumen" — to concede/admit)', hi: 'svikaar karte hain (Satzende)', type: 'Partikel · trennbar (Satzende)', why: '"Kritiker räumen zwar ein" is a standard journalistic phrase where critics concede a valid point before raising further doubts.' },
      { w: ',', plain: true },
      { w: 'dass', role: 'plain', en: 'that', hi: 'ki', type: 'Konjunktion' },
      { w: 'Fortschritte', role: 'plain', en: 'progress', hi: 'pragati', type: 'Noun · plural' },
      { w: 'gemacht', role: 'plain', en: 'made', hi: 'hui hai', type: 'Partizip II' },
      { w: 'wurden', role: 'plain', en: 'were (Satzende)', hi: '(Satzende)', type: 'Verb · werden (Satzende)' },
      { w: '.', plain: true },
      { w: 'Dennoch', role: 'plain', en: 'nevertheless', hi: 'phir bhi', type: 'Adverb' },
      { w: 'bestehen', role: 'plain', en: 'persist', hi: 'baaki hain', type: 'Verb (Präsens)' },
      { w: 'Zweifel', role: 'plain', en: 'doubts (Satzende)', hi: 'sandeh (Satzende)', type: 'Noun · plural (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Critics do concede that progress has been made. Nevertheless, doubts persist.'
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C1_035_L001', speaker: 'Nadja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, ich bin grundsätzlich für die Fusion — sie würde beiden Unternehmen enorme Vorteile bringen.', en: 'Timo, I\'m fundamentally in favor of the merger — it would bring enormous advantages to both companies.' },
      { id: 'C1_035_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Zugegeben, die Vorteile sind beachtlich, aber die Zahlen im letzten Quartal geben mir doch zu denken.', en: 'Admittedly, the advantages are considerable, but the figures from last quarter give me pause.' },
      { id: 'C1_035_L003', speaker: 'Nadja', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ein berechtigter Einwand, obwohl die Zahlen klein sind, sollten wir sie nicht einfach ignorieren.', en: 'A valid objection, although the figures are small, we shouldn\'t simply ignore them.' },
      { id: 'C1_035_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Genau, lass uns die Risiken und Chancen noch einmal in Ruhe gegeneinander abwägen.', en: 'Exactly, let\'s calmly weigh the risks and opportunities against each other once more.' }
    ],
    transcript: 'Timo, ich bin grundsätzlich für die Fusion — sie würde beiden Unternehmen enorme Vorteile bringen. Zugegeben, die Vorteile sind beachtlich, aber die Zahlen im letzten Quartal geben mir doch zu denken. Ein berechtigter Einwand, obwohl die Zahlen klein sind, sollten wir sie nicht einfach ignorieren. Genau, lass uns die Risiken und Chancen noch einmal in Ruhe gegeneinander abwägen.',
    translation: 'Timo, I\'m fundamentally in favor of the merger — it would bring enormous advantages to both companies. Admittedly, the advantages are considerable, but the figures from last quarter give me pause. A valid objection, although the figures are small, we shouldn\'t simply ignore them. Exactly, let\'s calmly weigh the risks and opportunities against each other once more.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'bin' },
      { w: 'grundsätzlich' },
      { w: 'für' },
      { w: 'die' },
      { w: 'Fusion' },
      { w: '—', plain: true },
      { w: 'sie' },
      { w: 'würde' },
      { w: 'beiden' },
      { w: 'Unternehmen' },
      { w: 'enorme' },
      { w: 'Vorteile' },
      { w: 'bringen' },
      { w: '.', plain: true },
      { w: 'Zugegeben' },
      { w: ',', plain: true },
      { w: 'die' },
      { w: 'Vorteile' },
      { w: 'sind' },
      { w: 'beachtlich' },
      { w: ',', plain: true },
      { w: 'aber' },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: 'im' },
      { w: 'letzten' },
      { w: 'Quartal' },
      { w: 'geben' },
      { w: 'mir' },
      { w: 'doch' },
      { w: 'zu' },
      { w: 'denken' },
      { w: '.', plain: true },
      { w: 'Ein' },
      { w: 'berechtigter' },
      { w: 'Einwand' },
      { w: ',', plain: true },
      { w: 'obwohl' },
      { w: 'die' },
      { w: 'Zahlen' },
      { w: 'klein' },
      { w: 'sind' },
      { w: ',', plain: true },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'sie' },
      { w: 'nicht' },
      { w: 'einfach' },
      { w: 'ignorieren' },
      { w: '.', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'lass' },
      { w: 'uns' },
      { w: 'die' },
      { w: 'Risiken' },
      { w: 'und' },
      { w: 'Chancen' },
      { w: 'noch' },
      { w: 'einmal' },
      { w: 'in' },
      { w: 'Ruhe' },
      { w: 'gegeneinander' },
      { w: 'abwägen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür ist Nadja grundsätzlich?', qEn: 'What is Nadja fundamentally in favor of?', options: ['einer Entlassung', 'der Fusion', 'einer Kündigung', 'eines Umzugs'], optionsEn: ['a dismissal', 'the merger', 'a resignation', 'a move'], answer: 1,
        explain: '"Ich bin grundsätzlich für die Fusion."' },
      { q: 'Was macht Timo nachdenklich?', qEn: 'What gives Timo pause?', options: ['die Vorteile', 'die Zahlen im letzten Quartal', 'das Wetter', 'die Konkurrenz'], optionsEn: ['the advantages', 'the figures in the last quarter', 'the weather', 'the competition'], answer: 1,
        explain: '"Die Zahlen im letzten Quartal geben mir doch zu denken."' }
    ]
  },
  speaking: [
    { task: "Timo ist grundsätzlich für die Fusion. Räume die Vorteile ein.", taskEn: "Timo is basically in favour of the merger. Concede the advantages.", de: "Zugegeben, die Vorteile sind beachtlich, aber die Zahlen sind dünn.", en: "Admittedly the advantages are considerable, but the figures are thin." },
    { task: "Deine Betreuerin findet deine Aussage zu absolut. Relativiere.", taskEn: "Your supervisor finds your claim too absolute. Qualify it.", de: "Grundsätzlich gilt der Zusammenhang, weitgehend jedoch nur für Städte.", en: "In principle the correlation holds, though largely only for cities." },
    { task: "Ein Gutachter fragt nach der Aussagekraft deiner Studie.", taskEn: "A reviewer asks about your study's explanatory power.", de: "Die Aussagekraft ist begrenzt, weil nur zwei Regionen einbezogen wurden.", en: "The explanatory power is limited, because only two regions were included." },
    { task: "Bewerte im Seminar ein Förderprogramm ausgewogen.", taskEn: "Assess a funding programme in a balanced way in the seminar.", de: "Einerseits erreicht es viele Familien, andererseits fehlt die Wirkungskontrolle.", en: "On the one hand it reaches many families, on the other there's no impact review." },
    { task: "Zieh im Fazit die Gesamtbewertung.", taskEn: "Draw the overall assessment in your conclusion.", de: "Insgesamt halte ich das Vorhaben für sinnvoll, wenngleich riskant.", en: "Overall I consider the project sensible, albeit risky." }
  ],
  writing: {
    prompt: 'TASK 1 — Improve (150 words): Improve an argumentative text by adding concessions, limitations, and balanced evaluation. Explain every improvement.\n\nTASK 2 — Discussion essay (350 words): Demonstrate balanced judgement, concessions, advantages vs disadvantages, academic register, and evidence-based reasoning.',
    starters: ['Grundsätzlich sind sich die Experten einig, allerdings gibt es weitgehend unbeantwortete Fragen.', 'Einerseits senken erneuerbare Energien die Emissionen, andererseits stehen hohe Anfangskosten gegenüber.'],
    placeholder: 'Die Aussagekraft der Studie ist begrenzt. Trotzdem überwiegen insgesamt die Vorteile...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which phrase acknowledges a scientific limitation?', options: ['Die Aussagekraft ist begrenzt.', 'Insgesamt überwiegen die Vorteile.', 'Meines Erachtens ist dies richtig.'], answer: 0, explain: '"Die Aussagekraft ist begrenzt" is a standard scientific phrase acknowledging a study\'s limits.' },
    gap: { sentence: ['', ' sind sich die Experten einig, allerdings gibt es unbeantwortete Fragen.'], gaps: [ { answer: 'Grundsätzlich', accepts: ['Grundsätzlich'] } ], explain: '"Grundsätzlich" qualifies the claim as generally, not absolutely, true.' },
    match: { q: 'Match each function to its expression.', pairs: [ { noun: 'zwar...jedoch', art: 'Concession' }, { noun: 'weitgehend', art: 'Qualification' }, { noun: 'einerseits...andererseits', art: 'Weighing/Evaluation' }, { noun: 'die Aussagekraft ist begrenzt', art: 'Limitation' } ] },
    builder: { target: 'Build: "Overall, the advantages outweigh." (balanced conclusion)', bank: ['Insgesamt', 'überwiegen', 'die', 'Vorteile', '.'], answer: ['Insgesamt', 'überwiegen', 'die', 'Vorteile', '.'], roles: { 'Insgesamt': 'r-abwaegen', 'überwiegen': 'r-abwaegen' } },
    errorCorrection: { title: 'Error correction', wrong: 'Erneuerbare Energien sind perfekt und haben keine Nachteile.', right: 'Erneuerbare Energien bieten Vorteile, bringen jedoch auch Herausforderungen mit sich.', explain: 'An absolute claim with no acknowledged drawback is unqualified and less credible than a balanced statement.' }
  },
  quiz: [
    { q: 'What is the C1 memory trick for concession and weighing?', options: ['Think like a scientist, not a lawyer — ask what supports and opposes a claim, and its limitations', 'Always argue only one side as strongly as possible', 'Avoid any qualification of claims'], answer: 0, explain: 'A scientist mindset weighs both sides and acknowledges limitations, unlike a lawyer arguing one side.' },
    { q: 'What does "grundsätzlich" do in an argument?', options: ['Qualifies a claim as generally, not absolutely, true', 'Introduces a counter-argument', 'States a scientific limitation'], answer: 0, explain: '"Grundsätzlich" softens an otherwise absolute statement.' },
    { q: 'What does conceding a valid opposing point do to your argument?', options: ['Strengthens it by showing balanced, credible reasoning', 'Weakens it by admitting defeat', 'Has no effect'], answer: 0, explain: 'C1 argumentation values balanced judgement over one-sided defense.' },
    { q: 'Why do scientific texts state limitations like "die Aussagekraft ist begrenzt"?', options: ['To increase credibility by being honest about the evidence\'s scope', 'To weaken the argument unnecessarily', 'It is required by law'], answer: 0, explain: 'Acknowledging limitations is a mark of rigorous, credible scientific writing.' },
    { q: 'What phrase signals a final balanced conclusion after weighing both sides?', options: ['Insgesamt überwiegen', 'Zwar...jedoch', 'Grundsätzlich'], answer: 0, explain: '"Insgesamt überwiegen" states which side wins after a fair weighing process.' }
  ],
  takeaways: [
    { c: 'r-konzession', html: 'Concession (zwar...jedoch, obwohl) acknowledges a valid opposing point without abandoning the overall position.' },
    { c: 'r-qualifizierung', html: 'Qualifiers (grundsätzlich, weitgehend, unter bestimmten Voraussetzungen) avoid overly absolute claims, increasing credibility.' },
    { c: 'r-abwaegen', html: 'Weighing structures (einerseits...andererseits, insgesamt überwiegen) and limitation statements (die Aussagekraft ist begrenzt) lead to genuinely balanced conclusions.' }
  ],
  revisionTips: [
    'Take one strong opinion you hold and rewrite it with at least one concession and one qualifier.',
    'Find a German scientific abstract and locate its limitation statement — note the exact phrasing used.',
    'Practise the full evaluation model by writing one paragraph moving through: situation, advantages, disadvantages, limitations, balanced conclusion.'
  ]
};
window.CHAPTER = CHAPTER;
