/* KLARWEG CHAPTER DATA — C2 · Chapter 28
   "Präpositionen der Schriftsprache" — formal written-register prepositions
   (aufgrund, hinsichtlich, gemäß, mittels, zugunsten, etc.) and their
   academic connective-phrase cousins (im Hinblick auf, vor diesem
   Hintergrund). NOT basic prepositions or case government in general
   (already mastered) — specifically the STYLISTIC register shift from
   spoken German (wegen, über, für, mit) to formal written German. Each
   vocab item includes case government, register, and two authentic C2
   examples. Follows the Chapter 27 template exactly. Dialogue: Anna and
   Rohan only. */
const CHAPTER = {
  id: 'c2-28-praepositionen-der-schriftsprache',
  phase: 'C2 · Kompression, Nominalstil & wissenschaftliche Präzision',
  number: 28,
  title: 'Präpositionen der Schriftsprache',
  titleEn: 'Prepositions of written German',
  description: 'In everyday conversation, simple prepositions are casual clothes. But entering a university, a courtroom, or a government office, native writers change into a business suit — aufgrund, hinsichtlich, gemäß, mittels, zugunsten.',
  xp: 1900, time: 140, difficulty: 'Mastery',
  nextChapter: { number: 29, title: 'Goethe C2 Finalprüfung', titleEn: 'Goethe C2 final exam' , href: 'chapter-c2-29-goethe-c2-final.html' },
  prevChapter: { number: 27, title: 'Kollokationen & Idiomatik', titleEn: 'Collocations and idiomatic usage', href: 'chapter-c2-27-kollokationen-und-idiomatik.html' },
  heroAnimationPath: null,
  story: {
    eyebrow: 'Story-based learning',
    headline: 'Formal prepositions are <em>business suits</em> — put them on for formal writing.',
    intro: 'Requesting a deadline extension from their university, Ursel writes "against this background" and Timo adds "pursuant to the law" — trading everyday prepositions for the formal ones a university, courtroom, or ministry expects.',
    outcomes: ['Every word in every line is clickable', 'Native-speed audio with adjustable playback', 'Recognize the formal written-register preposition behind every everyday equivalent'],
    scene: 'Überarbeitung eines Forschungsantrags vor der Einreichung',
    femaleSpeakers: ['Ursel'],
    dialogue: [
      { speaker: 'Ursel', tokens: [
        { w: 'Vor', role: 'r-preposition', en: 'against', hi: 'के', pron: 'for', type: 'Preposition (part of vor diesem Hintergrund)' },
        { w: 'diesem', role: 'r-dativ', en: 'this (masc. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Hintergrund', role: 'r-dativ', en: 'background (dat.)', hi: 'पृष्ठभूमि के अनुसार', pron: 'HINT-er-grunt', type: 'Noun · masc. dat.', why: 'vor diesem Hintergrund = against this background, formal discourse phrase (this chapter).', ex: 'Vor diesem Hintergrund beantragen wir eine Fristverlängerung.', exEn: 'Against this background we apply for a deadline extension.' },
        { w: 'beantragen', role: 'r-verb', en: 'apply for', hi: 'आवेदन करते हैं', pron: 'be-AN-trah-gen', type: 'Verb · beantragen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'Fristverlängerung', role: 'r-akkusativ', en: 'deadline extension', hi: 'समय सीमा विस्तार', pron: 'FRIST-fer-len-ge-rung', type: 'Noun · fem. (recycled C2)' },
        { w: '.', plain: true }
      ], en: 'Against this background we apply for a deadline extension.', hi: 'Is prishthbhoomi ke anusaar hum samay seema vistaar ke liye aavedan karte hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Bezüglich', role: 'r-preposition', en: 'regarding', hi: 'के संबंध में', pron: 'be-TSÜK-likh', type: 'Preposition + genitive', why: 'bezüglich + Genitiv = regarding, formal preposition (recycled C1).', ex: 'Bezüglich der Frist haben wir Bedenken.', exEn: 'Regarding the deadline we have concerns.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. gen.)', hi: '', pron: 'dair', type: 'Article · genitive' },
        { w: 'Frist', role: 'r-dativ', en: 'deadline (gen.)', hi: 'समय सीमा के', pron: 'frist', type: 'Noun · fem. genitive' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'हैं', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'Bedenken', role: 'r-akkusativ', en: 'concerns', hi: 'चिंताएं', pron: 'be-DEN-ken', type: 'Noun · plural (recycled C1)' },
        { w: '.', plain: true }
      ], en: 'Regarding the deadline we have concerns.', hi: 'Samay seema ke sambandh mein humein chintaayen hain.' },
      { speaker: 'Ursel', tokens: [
        { w: 'Entsprechend', role: 'r-preposition', en: 'according to', hi: 'के अनुसार', pron: 'ent-SHPRE-khent', type: 'Preposition + dative', why: 'entsprechend + Dativ = according to, formal preposition (this chapter).', ex: 'Entsprechend der Verordnung ist das zulässig.', exEn: 'According to the regulation, that is permissible.' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Verordnung', role: 'r-dativ', en: 'regulation (dat.)', hi: 'विनियम के अनुसार', pron: 'fer-OR-dnung', type: 'Noun · fem. dat.' },
        { w: 'ist', role: 'r-verb', en: 'is', hi: 'है', pron: 'ist', type: 'Verb · sein' },
        { w: 'das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'zulässig', role: 'r-akkusativ', en: 'permissible', hi: 'अनुमत', pron: 'TSOO-le-sikh', type: 'Adjective' },
        { w: '.', plain: true }
      ], en: 'According to the regulation, that is permissible.', hi: 'Viniyam ke anusaar, yeh anumat hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Gemäß', role: 'r-preposition', en: 'pursuant to', hi: 'के अनुसार', pron: 'ge-MEHS', type: 'Preposition + dative', why: 'gemäß + Dativ = pursuant to, formal preposition (this chapter).', ex: 'Gemäß dem Gesetz müssen wir warten.', exEn: 'Pursuant to the law we must wait.' },
        { w: 'dem', role: 'r-dativ', en: 'the (neut. dat.)', hi: '', pron: 'daym', type: 'Article · dative' },
        { w: 'Gesetz', role: 'r-dativ', en: 'law (dat.)', hi: 'कानून के', pron: 'ge-ZETS', type: 'Noun · neut. dat. (recycled C1)' },
        { w: 'müssen', role: 'r-modalverb', en: 'must', hi: 'ज़रूरी है', pron: 'MÜ-sen', type: 'Modal · müssen (wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'leider', role: 'r-akkusativ', en: 'unfortunately', hi: 'दुर्भाग्य से', pron: 'LY-der', type: 'Adverb (recycled C1)' },
        { w: 'warten', role: 'r-verb', en: 'wait', hi: 'इंतज़ार करना', pron: 'VAR-ten', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Pursuant to the law we unfortunately must wait.', hi: 'Kaanoon ke anusaar humein durbhagya se intezaar karna hoga.' },
      { speaker: 'Ursel', tokens: [
        { w: 'Entgegen', role: 'r-preposition', en: 'contrary to', hi: 'के विपरीत', pron: 'ent-GAY-gen', type: 'Preposition + dative', why: 'entgegen + Dativ = contrary to, formal preposition (this chapter).', ex: 'Entgegen unseren Erwartungen hat sich nichts geändert.', exEn: 'Contrary to our expectations nothing has changed.' },
        { w: 'unseren', role: 'r-dativ', en: 'our (pl. dat.)', hi: 'हमारी', pron: 'UN-ze-ren', type: 'Possessive · dative' },
        { w: 'Erwartungen', role: 'r-dativ', en: 'expectations (dat.)', hi: 'उम्मीदों के विपरीत', pron: 'er-VAR-tun-gen', type: 'Noun · plural dat. (recycled C2)' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'हुआ है', pron: 'hat', type: 'Verb · haben' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'nichts', role: 'r-subject', en: 'nothing', hi: 'कुछ नहीं', pron: 'NIKHTS', type: 'Pronoun · indefinite' },
        { w: 'geändert', role: 'r-verb', en: 'changed', hi: 'बदला', pron: 'ge-EN-dert', type: 'Partizip II (Satzende)' },
        { w: '.', plain: true }
      ], en: 'Contrary to our expectations, nothing has changed.', hi: 'Hamaari ummeedon ke viparit, kuch nahi badla hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Im', role: 'r-preposition', en: 'in', hi: '', pron: 'im', type: 'Preposition + place' },
        { w: 'Rahmen', role: 'r-dativ', en: 'framework (dat.)', hi: 'दायरे में', pron: 'RAH-men', type: 'Noun · masc. dat. (recycled C1/C2)' },
        { w: 'von', role: 'r-preposition', en: 'of', hi: 'के', pron: 'fon', type: 'Preposition (part of im Rahmen von)' },
        { w: 'diesem', role: 'r-dativ', en: 'this (neut. dat.)', hi: 'इस', pron: 'DEE-zaym', type: 'Determiner · dative' },
        { w: 'Verfahren', role: 'r-dativ', en: 'procedure (dat.)', hi: 'प्रक्रिया के', pron: 'fer-FAH-ren', type: 'Noun · neut. dat. (recycled C1)' },
        { w: 'sollten', role: 'r-modalverb', en: 'should', hi: 'चाहिए', pron: 'ZOL-ten', type: 'Modal · sollen (Konjunktiv II, wir)' },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'geduldig', role: 'r-akkusativ', en: 'patient', hi: 'धैर्यवान', pron: 'ge-DUL-dikh', type: 'Adjective' },
        { w: 'bleiben', role: 'r-verb', en: 'remain', hi: 'बने रहना', pron: 'BLY-ben', type: 'Verb · infinitive (Satzende)' },
        { w: '.', plain: true }
      ], en: 'In the framework of this procedure we should remain patient.', hi: 'Is prakriya ke dayre mein humein dhairyavaan bane rehna chahiye.' }
    ]
  },
  overviewIntro: { eyebrow: 'The one idea', html: 'Formal prepositions are <span class="de r-anzug-metapher">business suits</span> — aufgrund, hinsichtlich, gemäß, mittels, and zugunsten are what native writers put on when entering the university, the courtroom, or the ministry.' },
  writingTutorPrompt: 'You are a warm, encouraging German (C2) tutor for a Hindi/English-speaking learner. The lesson is PRÄPOSITIONEN DER SCHRIFTSPRACHE — formal written-register prepositions (angesichts, anhand, anlässlich, aufgrund, bezüglich, betreffend, binnen, dank, entsprechend, entgegen, gemäß, hinsichtlich, infolge, inklusive, kraft, mangels, mittels, seitens, trotz, ungeachtet, zufolge, zugunsten, zulasten, zwecks) and their academic connective-phrase cousins (im Hinblick auf, vor diesem Hintergrund, unter Berücksichtigung, im Rahmen von, in diesem Zusammenhang, aus wissenschaftlicher/politischer/ökonomischer Sicht). NOT basic prepositions or case government in general (already mastered) — specifically the STYLISTIC register shift from spoken German to formal written German: wegen → aufgrund, über → hinsichtlich, für → zugunsten, mit → mittels. Each formal preposition governs a specific case (almost all Genitiv, a few Dativ) and belongs to academic, scientific, legal, administrative, political, or journalistic writing. The most important things to catch: using everyday spoken prepositions (wegen, über, für, mit) in an academic or legal text where the formal equivalent is expected; incorrect case government (most formal prepositions take Genitiv — mixing this up with Dativ is a common error); literal English translation instead of the natural formal German preposition; confusing similar formal prepositions (hinsichtlich vs. bezüglich, kraft vs. mittels, zugunsten vs. zulasten — near-opposite meanings); using formal prepositions in casual spoken German, where they sound stiff and overly formal. Answer ONLY questions about this chapter\'s formal written prepositions; if asked about something else, gently redirect to Präpositionen der Schriftsprache. Keep answers short, concrete, example-driven. Mix in Hindi/Hinglish naturally, like a bilingual tutor would.',
  quizRecommendation: { high: 'Outstanding — you always know when to put on the business suit. Ready for the next chapter.', mid: 'Good. Re-read the Master Table and Register Model once, then continue.', low: 'Worth another pass through the Grammar section — remember: formal prepositions are business suits, worn in the university, the courtroom, and the ministry, not in casual conversation.' },
  parserSentence: [ { w: 'Aufgrund', role: 'r-anzug-metapher' }, { w: 'der', role: 'plain' }, { w: 'Ergebnisse', role: 'plain' }, { w: 'überzeugt', role: 'plain' }, { w: 'die', role: 'plain' }, { w: 'Studie', role: 'plain' } ],
  sections: [
    { id: 'overview', label: 'Overview', tag: 'core', auto: true, objective: 'See the one idea: formal prepositions are business suits, worn in formal written registers.' },
    { id: 'story', label: 'Story', tag: 'core', auto: true, objective: 'Ursel and Timo replace everyday prepositions with formal written-language alternatives for a research proposal.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core', objective: 'Master authentic formal written prepositions and connective phrases with case government across academia, law, administration, and politics.' },
    { id: 'grammar', label: 'Grammar', tag: 'core', objective: 'Master formal written prepositions, their case government, and the register shift from spoken to written German.' },
    { id: 'reading', label: 'Reading', tag: 'core', objective: 'Analyze an official government report for written prepositions, register, and information structure.' },
    { id: 'listening', label: 'Listening', tag: 'practice', objective: 'Identify formal prepositions and academic register in a university conference presentation.' },
    { id: 'speaking', label: 'Speaking', tag: 'practice', objective: 'Practice presenting research and choosing appropriate written-language prepositions at C2 level.' },
    { id: 'writing', label: 'Writing', tag: 'practice', objective: 'Replace everyday prepositions with formal alternatives, edit an article, and write a 600-word essay.' },
    { id: 'exercises', label: 'Exercises', tag: 'practice', objective: 'Drill correct preposition choice, register transformation, and case identification.' },
    { id: 'quiz', label: 'Quiz', tag: 'assess', objective: 'Five questions. Pass to bank the full 1900 XP.' },
    { id: 'summary', label: 'Summary', tag: 'assess', auto: true, objective: 'Review what you completed and what comes next.' },
    { id: 'resources', label: 'Study Resources', tag: 'assess', auto: true, objective: 'Download chapter resources for revision and offline study.' }
  ],
  resources: [
    { icon: '📚', title: 'Vocabulary PDF', desc: 'All chapter formal prepositions and connective phrases with case, register, translations, and examples.', pdfUrl: '/pdfs/vocabulary.pdf', size: '18 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF', desc: 'Correct preposition choice, register transformation, and case identification drills, plus the full 600-word essay task.', pdfUrl: '/pdfs/homework.pdf', size: '22 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF', desc: 'The full Master Table, Register Model, and Decision Flow.', pdfUrl: '/pdfs/grammar.pdf', size: '18 pages', kind: 'Grammar' }
  ],
  outcomes: [
    { de: 'aufgrund, hinsichtlich, gemäß, mittels, zugunsten', text: 'Replace everyday spoken prepositions with formal written-register equivalents' },
    { de: 'wegen → aufgrund, über → hinsichtlich, für → zugunsten', text: 'Recognize the spoken-to-written register pairs and their correct case government' },
    { de: 'kraft, seitens, zufolge, ungeachtet', text: 'Use authentic legal and administrative formal prepositions' },
    { de: 'im Hinblick auf, vor diesem Hintergrund', text: 'Use academic connective phrases that frame an argument formally' },
    { de: 'Formelle Präpositionen sind Anzüge.', text: 'Understand the chapter\'s core "business suit" register metaphor' }
  ],
  vocab: [
    { de: 'aufgrund', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'academic/legal/administrative', case: 'Genitiv', en: 'due to, because of', hi: 'के कारण', synonyms: 'wegen', antonyms: null, ex: 'Aufgrund der neuen Datenlage musste die Hypothese revidiert werden.', exEn: 'Due to the new data, the hypothesis had to be revised.', exHi: 'Naye data ki wajah se, hypothesis revise karni padi.', ex2: 'Aufgrund technischer Probleme verzögerte sich die Veröffentlichung.', ex2En: 'Due to technical problems, the publication was delayed.', ex2Hi: 'Technical problems ki wajah se, publication delay ho gaya.', why: 'The formal "business suit" of everyday "wegen" — both govern Genitiv, but "aufgrund" belongs in academic and official writing.' },
    { de: 'angesichts', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'academic/journalism', case: 'Genitiv', en: 'in view of, given', hi: 'को देखते हुए', synonyms: null, antonyms: null, ex: 'Angesichts der aktuellen Entwicklungen erscheint eine Reform unausweichlich.', exEn: 'In view of current developments, a reform appears unavoidable.', exHi: 'Current developments ko dekhte hue, reform avoidable nahi lagta.', ex2: 'Angesichts steigender Kosten überdenkt die Firma ihre Strategie.', ex2En: 'Given rising costs, the company is reconsidering its strategy.', ex2Hi: 'Badhti costs ko dekhte hue, company apni strategy reconsider kar rahi hai.' },
    { de: 'anhand', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'academic/scientific', case: 'Genitiv', en: 'on the basis of, using', hi: 'के आधार पर', synonyms: null, antonyms: null, ex: 'Anhand mehrerer Fallstudien belegt die Autorin ihre These.', exEn: 'On the basis of several case studies, the author supports her thesis.', exHi: 'Kai case studies ke aadhaar par, author apni thesis support karti hai.', ex2: 'Anhand der Messdaten lässt sich der Trend klar erkennen.', ex2En: 'On the basis of the measurement data, the trend can clearly be identified.', ex2Hi: 'Measurement data ke aadhaar par, trend saaf pehchaana ja sakta hai.' },
    { de: 'anlässlich', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'official/journalism', case: 'Genitiv', en: 'on the occasion of', hi: 'के अवसर पर', synonyms: null, antonyms: null, ex: 'Anlässlich des Jubiläums hielt die Rektorin eine Festrede.', exEn: 'On the occasion of the anniversary, the rector gave a ceremonial speech.', exHi: 'Anniversary ke avsar par, rector ne ek ceremonial speech di.', ex2: 'Anlässlich der Konferenz wurde ein neues Forschungszentrum eröffnet.', ex2En: 'On the occasion of the conference, a new research center was opened.', ex2Hi: 'Conference ke avsar par, ek naya research center khola gaya.' },
    { de: 'bezüglich', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'administrative/business', case: 'Genitiv', en: 'regarding, concerning', hi: 'के संबंध में', synonyms: 'hinsichtlich', antonyms: null, ex: 'Bezüglich Ihrer Anfrage senden wir Ihnen die gewünschten Unterlagen.', exEn: 'Regarding your inquiry, we are sending you the requested documents.', exHi: 'Aapki inquiry ke sambandh mein, hum aapko requested documents bhej rahe hain.', ex2: 'Bezüglich der Fristverlängerung wurde noch keine Entscheidung getroffen.', ex2En: 'Regarding the extension of the deadline, no decision has been made yet.', ex2Hi: 'Deadline extension ke sambandh mein, abhi tak koi decision nahi liya gaya.' },
    { de: 'hinsichtlich', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'academic/scientific', case: 'Genitiv', en: 'with regard to, in terms of', hi: 'की दृष्टि से', synonyms: 'bezüglich', antonyms: null, ex: 'Hinsichtlich der Methodik gibt es deutliche Unterschiede zwischen den Studien.', exEn: 'With regard to methodology, there are clear differences between the studies.', exHi: 'Methodology ki drishti se, studies ke beech saaf differences hain.', ex2: 'Hinsichtlich ihrer Aussagekraft bleibt die Studie umstritten.', ex2En: 'In terms of its explanatory power, the study remains controversial.', ex2Hi: 'Explanatory power ki drishti se, study vivaadaaspad bani hui hai.', why: 'The formal "business suit" of everyday "über" — "über die Methodik sprechen" becomes "hinsichtlich der Methodik" in academic register.' },
    { de: 'betreffend', pos: 'preposition (formal, +Akk., often postposed)', level: 'C2', register: 'administrative/legal', case: 'Akkusativ', en: 'concerning, regarding', hi: 'के विषय में', synonyms: 'bezüglich', antonyms: null, ex: 'Die Verordnung betreffend den Datenschutz tritt im Herbst in Kraft.', exEn: 'The regulation concerning data protection takes effect in autumn.', exHi: 'Data protection ke vishay mein regulation autumn mein effect mein aayegi.', ex2: 'Alle Fragen betreffend die Anmeldung richten Sie bitte an das Sekretariat.', ex2En: 'Please direct all questions concerning registration to the office.', ex2Hi: 'Registration ke vishay mein sabhi sawaal office ko bhejein.' },
    { de: 'binnen', pos: 'preposition (formal, +Gen./Dat.)', level: 'C2', register: 'legal/administrative', case: 'Genitiv (or Dativ)', en: 'within (a time period)', hi: 'के भीतर', synonyms: null, antonyms: null, ex: 'Der Antrag muss binnen einer Woche eingereicht werden.', exEn: 'The application must be submitted within a week.', exHi: 'Application ek hafte ke bhitar submit karni hogi.', ex2: 'Binnen weniger Tage lag die Genehmigung vor.', ex2En: 'Within a few days, the approval was granted.', ex2Hi: 'Kuch dinon ke bhitar, approval mil gayi.' },
    { de: 'dank', pos: 'preposition (formal, +Gen./Dat.)', level: 'C2', register: 'general/journalism', case: 'Genitiv (or Dativ)', en: 'thanks to', hi: 'के कारण (सकारात्मक)', synonyms: null, antonyms: null, ex: 'Dank intensiver Forschung konnte der Impfstoff schnell entwickelt werden.', exEn: 'Thanks to intensive research, the vaccine could be developed quickly.', exHi: 'Intensive research ki wajah se, vaccine jaldi develop kiya ja saka.', ex2: 'Dank der Unterstützung vieler Freiwilliger gelang das Projekt.', ex2En: 'Thanks to the support of many volunteers, the project succeeded.', ex2Hi: 'Kai volunteers ke support ki wajah se, project succeed hua.' },
    { de: 'entsprechend', pos: 'preposition (formal, +Dat., often postposed)', level: 'C2', register: 'legal/administrative', case: 'Dativ', en: 'in accordance with, according to', hi: 'के अनुसार', synonyms: 'gemäß', antonyms: null, ex: 'Entsprechend den Vorschriften wurde der Antrag abgelehnt.', exEn: 'In accordance with the regulations, the application was rejected.', exHi: 'Regulations ke anusaar, application reject kar di gayi.', ex2: 'Die Zahlung erfolgt entsprechend dem vereinbarten Zeitplan.', ex2En: 'Payment is made in accordance with the agreed schedule.', ex2Hi: 'Payment agreed schedule ke anusaar hoti hai.' },
    { de: 'entgegen', pos: 'preposition (formal, +Dat.)', level: 'C2', register: 'academic/legal', case: 'Dativ', en: 'contrary to', hi: 'के विपरीत', synonyms: null, antonyms: null, ex: 'Entgegen den Erwartungen stieg die Nachfrage weiter.', exEn: 'Contrary to expectations, demand continued to rise.', exHi: 'Expectations ke viparit, demand aur badhti gayi.', ex2: 'Entgegen der ursprünglichen Planung wurde das Projekt verschoben.', ex2En: 'Contrary to the original plan, the project was postponed.', ex2Hi: 'Original plan ke viparit, project postpone kar diya gaya.' },
    { de: 'gemäß', pos: 'preposition (formal, +Dat.)', level: 'C2', register: 'legal/administrative', case: 'Dativ', en: 'in accordance with, pursuant to', hi: 'के अनुसार', synonyms: 'entsprechend', antonyms: null, ex: 'Gemäß Artikel 5 der Verfassung ist die Meinungsfreiheit geschützt.', exEn: 'Pursuant to Article 5 of the constitution, freedom of speech is protected.', exHi: 'Constitution ke Article 5 ke anusaar, freedom of speech protected hai.', ex2: 'Gemäß den Vertragsbedingungen ist eine Kündigungsfrist einzuhalten.', ex2En: 'In accordance with the contract terms, a notice period must be observed.', ex2Hi: 'Contract terms ke anusaar, notice period follow karni hogi.' },
    { de: 'infolge', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'academic/journalism', case: 'Genitiv', en: 'as a result of, owing to', hi: 'के फलस्वरूप', synonyms: 'aufgrund', antonyms: null, ex: 'Infolge des Klimawandels häufen sich Extremwetterereignisse.', exEn: 'As a result of climate change, extreme weather events are increasing.', exHi: 'Climate change ke phalswaroop, extreme weather events badh rahe hain.', ex2: 'Infolge der Krise mussten zahlreiche Unternehmen schließen.', ex2En: 'As a result of the crisis, numerous companies had to close.', ex2Hi: 'Crisis ke phalswaroop, kai companies ko band karna pada.' },
    { de: 'inklusive', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'business/administrative', case: 'Genitiv', en: 'including', hi: 'सहित', synonyms: null, antonyms: 'exklusive', ex: 'Der Preis versteht sich inklusive aller Nebenkosten.', exEn: 'The price includes all additional costs.', exHi: 'Price mein sabhi additional costs shaamil hain.', ex2: 'Inklusive der Anlagen umfasst der Bericht fünfzig Seiten.', ex2En: 'Including the appendices, the report comprises fifty pages.', ex2Hi: 'Appendices sahit, report pachaas pages ki hai.' },
    { de: 'kraft', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal', case: 'Genitiv', en: 'by virtue of, on the strength of', hi: 'के बल पर', synonyms: null, antonyms: null, ex: 'Kraft seines Amtes unterzeichnete der Minister das Dekret.', exEn: 'By virtue of his office, the minister signed the decree.', exHi: 'Apne office ke bal par, minister ne decree par sign kiya.', ex2: 'Kraft Gesetzes ist die Behörde zur Auskunft verpflichtet.', ex2En: 'By virtue of the law, the authority is obliged to provide information.', ex2Hi: 'Law ke bal par, authority information dene ke liye obligated hai.' },
    { de: 'mangels', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal/administrative', case: 'Genitiv', en: 'for lack of, in the absence of', hi: 'के अभाव में', synonyms: null, antonyms: null, ex: 'Mangels ausreichender Beweise wurde der Fall eingestellt.', exEn: 'For lack of sufficient evidence, the case was dropped.', exHi: 'Sufficient evidence ke abhaav mein, case band kar diya gaya.', ex2: 'Mangels Masse konnte das Insolvenzverfahren nicht eröffnet werden.', ex2En: 'For lack of assets, insolvency proceedings could not be opened.', ex2Hi: 'Assets ke abhaav mein, insolvency proceedings nahi khole ja sake.' },
    { de: 'mittels', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'scientific/technical', case: 'Genitiv', en: 'by means of, using', hi: 'के माध्यम से', synonyms: 'mit', antonyms: null, ex: 'Mittels eines speziellen Verfahrens wurde die Probe analysiert.', exEn: 'By means of a special procedure, the sample was analyzed.', exHi: 'Ek special procedure ke maadhyam se, sample analyze kiya gaya.', ex2: 'Mittels moderner Software lässt sich der Prozess automatisieren.', ex2En: 'By means of modern software, the process can be automated.', ex2Hi: 'Modern software ke maadhyam se, process automate kiya ja sakta hai.', why: 'The formal "business suit" of everyday "mit" — "mit einer Methode" becomes "mittels einer Methode" in technical/scientific register.' },
    { de: 'seitens', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal/administrative', case: 'Genitiv', en: 'on the part of', hi: 'की ओर से', synonyms: null, antonyms: null, ex: 'Seitens der Regierung gab es bislang keine Stellungnahme.', exEn: 'On the part of the government, there has been no statement so far.', exHi: 'Government ki taraf se, abhi tak koi statement nahi aaya hai.', ex2: 'Seitens des Gerichts wurde eine Fristverlängerung gewährt.', ex2En: 'On the part of the court, an extension of the deadline was granted.', ex2Hi: 'Court ki taraf se, deadline ki extension di gayi.' },
    { de: 'trotz', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'general/academic', case: 'Genitiv', en: 'despite', hi: 'के बावजूद', synonyms: null, antonyms: null, ex: 'Trotz erheblicher Widerstände wurde die Reform verabschiedet.', exEn: 'Despite considerable resistance, the reform was passed.', exHi: 'Kaafi resistance ke bawajood, reform paarit ki gayi.', ex2: 'Trotz zahlreicher Studien bleibt die Ursache unklar.', ex2En: 'Despite numerous studies, the cause remains unclear.', ex2Hi: 'Kai studies ke bawajood, cause abhi bhi unclear hai.' },
    { de: 'ungeachtet', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal/academic', case: 'Genitiv', en: 'regardless of, irrespective of', hi: 'की परवाह किए बिना', synonyms: 'trotz', antonyms: null, ex: 'Ungeachtet der Kritik hält die Regierung an ihrem Kurs fest.', exEn: 'Regardless of the criticism, the government sticks to its course.', exHi: 'Criticism ki parwaah kiye bina, government apne course par ati hai.', ex2: 'Ungeachtet aller Bedenken wurde der Vertrag unterzeichnet.', ex2En: 'Regardless of all concerns, the contract was signed.', ex2Hi: 'Sabhi concerns ki parwaah kiye bina, contract sign kiya gaya.' },
    { de: 'zufolge', pos: 'preposition (formal, +Dat., postposed)', level: 'C2', register: 'journalism/academic', case: 'Dativ', en: 'according to', hi: 'के अनुसार', synonyms: 'gemäß', antonyms: null, ex: 'Einer aktuellen Studie zufolge sinkt die Zufriedenheit der Angestellten.', exEn: 'According to a recent study, employee satisfaction is declining.', exHi: 'Ek recent study ke anusaar, employee satisfaction ghat rahi hai.', ex2: 'Dem Bericht zufolge wurden alle Ziele erreicht.', ex2En: 'According to the report, all goals were achieved.', ex2Hi: 'Report ke anusaar, sabhi goals achieve kiye gaye.' },
    { de: 'zugunsten', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal/administrative', case: 'Genitiv', en: 'in favor of', hi: 'के पक्ष में', synonyms: null, antonyms: 'zulasten', ex: 'Das Gericht entschied zugunsten der Klägerin.', exEn: 'The court ruled in favor of the plaintiff.', exHi: 'Court ne plaintiff ke pakshe mein faisla diya.', ex2: 'Die Reform wirkt sich zugunsten kleiner Unternehmen aus.', ex2En: 'The reform works in favor of small businesses.', ex2Hi: 'Reform small businesses ke pakshe mein kaam karta hai.' },
    { de: 'zulasten', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'legal/administrative', case: 'Genitiv', en: 'at the expense of', hi: 'की क़ीमत पर', synonyms: null, antonyms: 'zugunsten', ex: 'Die Kürzungen gehen zulasten der ärmsten Haushalte.', exEn: 'The cuts come at the expense of the poorest households.', exHi: 'Cuts sabse gareeb households ki keemat par ho rahe hain.', ex2: 'Wachstum darf nicht zulasten der Umwelt gehen.', ex2En: 'Growth must not come at the expense of the environment.', ex2Hi: 'Growth environment ki keemat par nahi honi chahiye.' },
    { de: 'zwecks', pos: 'preposition (formal, +Gen.)', level: 'C2', register: 'administrative/legal', case: 'Genitiv', en: 'for the purpose of', hi: 'के प्रयोजन से', synonyms: null, antonyms: null, ex: 'Zwecks Identifikation ist ein amtlicher Ausweis vorzulegen.', exEn: 'For the purpose of identification, an official ID must be presented.', exHi: 'Identification ke prayojan se, ek official ID present karni hogi.', ex2: 'Zwecks Klärung des Sachverhalts wurde eine Anhörung anberaumt.', ex2En: 'For the purpose of clarifying the matter, a hearing was scheduled.', ex2Hi: 'Matter clarify karne ke prayojan se, ek hearing schedule ki gayi.' },
    { de: 'im Hinblick auf', pos: 'connective phrase (formal, +Akk.)', level: 'C2', register: 'academic', case: 'Akkusativ', en: 'with a view to, regarding', hi: 'को ध्यान में रखते हुए', synonyms: 'hinsichtlich', antonyms: null, ex: 'Im Hinblick auf die begrenzten Ressourcen muss priorisiert werden.', exEn: 'With a view to limited resources, priorities must be set.', exHi: 'Limited resources ko dhyaan mein rakhte hue, priorities set karni hongi.', ex2: 'Im Hinblick auf zukünftige Entwicklungen bleibt die Prognose vorsichtig.', ex2En: 'With a view to future developments, the forecast remains cautious.', ex2Hi: 'Future developments ko dhyaan mein rakhte hue, forecast cautious bana hua hai.' },
    { de: 'vor diesem Hintergrund', pos: 'connective phrase (formal)', level: 'C2', register: 'academic/journalism', case: null, en: 'against this background', hi: 'इस पृष्ठभूमि में', synonyms: null, antonyms: null, ex: 'Vor diesem Hintergrund erscheint die Entscheidung nachvollziehbar.', exEn: 'Against this background, the decision seems understandable.', exHi: 'Is background mein, decision samajh mein aata hai.', ex2: 'Vor diesem Hintergrund fordern Experten eine Gesetzesreform.', ex2En: 'Against this background, experts call for a legal reform.', ex2Hi: 'Is background mein, experts ek legal reform ki maang karte hain.' },
    { de: 'unter Berücksichtigung', pos: 'connective phrase (formal, +Gen.)', level: 'C2', register: 'academic/administrative', case: 'Genitiv', en: 'taking into account, in consideration of', hi: 'को ध्यान में रखते हुए', synonyms: null, antonyms: null, ex: 'Unter Berücksichtigung aller Aspekte empfiehlt der Ausschuss eine Reform.', exEn: 'Taking all aspects into account, the committee recommends a reform.', exHi: 'Sabhi aspects ko dhyaan mein rakhte hue, committee ek reform recommend karti hai.', ex2: 'Unter Berücksichtigung der Kosten wurde das Projekt angepasst.', ex2En: 'Taking costs into consideration, the project was adjusted.', ex2Hi: 'Costs ko dhyaan mein rakhte hue, project adjust kiya gaya.' },
    { de: 'im Rahmen von', pos: 'connective phrase (formal, +Dat.)', level: 'C2', register: 'academic/administrative', case: 'Dativ', en: 'within the framework of, as part of', hi: 'के ढांचे के अंतर्गत', synonyms: null, antonyms: null, ex: 'Im Rahmen von diesem Projekt entstanden mehrere Publikationen.', exEn: 'As part of this project, several publications were produced.', exHi: 'Is project ke antargat, kai publications produce hui.', ex2: 'Im Rahmen der Konferenz finden mehrere Workshops statt.', ex2En: 'As part of the conference, several workshops take place.', ex2Hi: 'Conference ke antargat, kai workshops hote hain.' },
    { de: 'in diesem Zusammenhang', pos: 'connective phrase (formal)', level: 'C2', register: 'academic/journalism', case: null, en: 'in this context, in this connection', hi: 'इस संदर्भ में', synonyms: null, antonyms: null, ex: 'In diesem Zusammenhang ist auch die Rolle der Medien zu betrachten.', exEn: 'In this context, the role of the media must also be considered.', exHi: 'Is sandarbh mein, media ki role bhi consider ki jaani chahiye.', ex2: 'In diesem Zusammenhang wurden mehrere Studien zitiert.', ex2En: 'In this connection, several studies were cited.', ex2Hi: 'Is sandarbh mein, kai studies cite ki gayi.' },
    { de: 'aus wissenschaftlicher Sicht', pos: 'connective phrase (formal)', level: 'C2', register: 'academic/scientific', case: null, en: 'from a scientific point of view', hi: 'वैज्ञानिक दृष्टिकोण से', synonyms: null, antonyms: null, ex: 'Aus wissenschaftlicher Sicht ist die Fragestellung noch nicht ausreichend geklärt.', exEn: 'From a scientific point of view, the question has not yet been sufficiently clarified.', exHi: 'Scientific point of view se, question abhi tak sufficiently clarify nahi hua hai.', ex2: 'Aus wissenschaftlicher Sicht überzeugt das Argument nicht vollständig.', ex2En: 'From a scientific point of view, the argument is not entirely convincing.', ex2Hi: 'Scientific point of view se, argument poori tarah convincing nahi hai.' }
  ],
  grammar: [
    { title: 'Präpositionen der Schriftsprache: Warum? (Why Formal Written Prepositions?)', body: [ 'Formal written prepositions signal register instantly — the same content, wrapped in aufgrund/hinsichtlich/gemäß instead of wegen/über/nach, immediately reads as academic, legal, or administrative rather than conversational.' ], hinglish: 'Yeh prepositions register turant badal dete hain. Baat wahi rehti hai, par <i>wegen</i> ki jagah <b>aufgrund</b> aur <i>über</i> ki jagah <b>hinsichtlich</b> likh do, aur text turant academic ya legal lagne lagta hai. Isliye inhe pehle <b>pehchaanne</b> ke liye seekho — formal texts mein yeh har jagah milenge — aur likhne mein sirf tab use karo jab register waisa ho.' },
    { title: 'Register-Paare (Spoken → Written Pairs)', body: [ 'wegen → aufgrund (both +Gen.). über → hinsichtlich (über +Akk., hinsichtlich +Gen.). für → zugunsten (für +Akk., zugunsten +Gen.). mit → mittels (mit +Dat., mittels +Gen.). nach → gemäß/zufolge (nach +Dat., gemäß +Dat., zufolge +Dat. postposed). Learning these pairs lets you deliberately raise or lower register.' ], hinglish: 'Yeh jodiyan yaad kar lo, phir tum apna register jaan-boojhkar upar ya neeche kar sakte ho: <i>wegen</i> se <b>aufgrund</b>, <i>über</i> se <b>hinsichtlich</b>, <i>für</i> se <b>zugunsten</b>, <i>mit</i> se <b>mittels</b>, aur <i>nach</i> se <b>gemäß</b>. Par ek baat dhyaan se — jodi badalne ke saath case bhi badal jaata hai: <i>über</i> Akkusativ leta hai par <b>hinsichtlich</b> Genitiv, aur <i>mit</i> Dativ leta hai par <b>mittels</b> Genitiv.' },
    { title: 'Rektion (Case Government)', body: [ 'The overwhelming majority of formal written prepositions govern the Genitiv (aufgrund, angesichts, anhand, anlässlich, bezüglich, hinsichtlich, infolge, inklusive, kraft, mangels, mittels, seitens, trotz, ungeachtet, zugunsten, zulasten, zwecks). A smaller Dativ group exists (entsprechend, entgegen, gemäß, zufolge — zufolge is postposed: "dem Bericht zufolge").' ], hinglish: 'Poori list ratne ki zaroorat nahi — ek shortcut hai. Maan lo ki yeh sab <b>Genitiv</b> lete hain, aur sirf chaar exceptions yaad rakho jo <b>Dativ</b> lete hain: <b>gemäß, entsprechend, entgegen, zufolge</b>. Aur <b>zufolge</b> ki ek khaas baat hai — woh apne noun ke <b>baad</b> aata hai: <span class="de">dem Bericht zufolge</span>, na ki "zufolge dem Bericht".' },
    { title: 'Konnektorphrasen (Connective Phrases)', body: [ 'Beyond single prepositions, academic writing relies on formal connective phrases: im Hinblick auf (+Akk.), vor diesem Hintergrund, unter Berücksichtigung (+Gen.), im Rahmen von (+Dat.), in diesem Zusammenhang, aus wissenschaftlicher/politischer/ökonomischer Sicht. These frame an argument or transition formally, at the paragraph level.' ], hinglish: 'Akele prepositions ke alawa kuch poore phrases bhi hote hain jo paragraph ko frame karte hain \u2014 <span class="de">im Hinblick auf</span>, <span class="de">unter Ber\u00fccksichtigung</span>, <span class="de">vor diesem Hintergrund</span>, <span class="de">aus wissenschaftlicher Sicht</span>. Inke case par dhyaan do, kyunki yeh alag-alag hain: <b>im Hinblick auf</b> Akkusativ leta hai, <b>unter Ber\u00fccksichtigung</b> Genitiv, aur <b>im Rahmen von</b> Dativ.' },
    { title: 'Register-Verwendung (Register Usage)', body: [ 'Academic/scientific: anhand, hinsichtlich, im Hinblick auf, aus wissenschaftlicher Sicht. Legal: kraft, mangels, zugunsten, zulasten, ungeachtet, entgegen. Administrative: bezüglich, betreffend, binnen, zwecks, seitens. Journalism: infolge, zufolge, anlässlich, angesichts, vor diesem Hintergrund.' ], hinglish: 'Har register ke apne prepositions hain, aur inhe pehchaanna reading mein bahut kaam aata hai. Academic texts mein <b>anhand</b> aur <b>hinsichtlich</b> milenge, legal mein <b>kraft</b>, <b>mangels</b> aur <b>ungeachtet</b>, official documents mein <b>bezüglich</b>, <b>binnen</b> aur <b>seitens</b>, aur news mein <b>infolge</b>, <b>zufolge</b> aur <b>angesichts</b>. Likhne ke liye pehle chaar-paanch hi kaafi hain.' },
    {
      title: 'Die Endung im Genitiv \u2014 nicht nur der Artikel',
      body: [
        'The chapter says most of these prepositions govern the Genitiv, but never shows what that looks like on the noun \u2014 and that is what the exercises test.',
        'Masculine and neuter nouns add <b>-s</b> or <b>-es</b>; feminine and plural nouns stay unchanged. And when there is no article to carry the Genitiv, German switches to <b>von</b> + Dativ.'
      ],
      table: {
        head: ['Gender', 'Article', 'Noun', 'Example'],
        rows: [
          ['masculine', 'des', '+ -s / -es', '<span class="de">aufgrund des Bericht<b>s</b></span>'],
          ['neuter', 'des', '+ -s / -es', '<span class="de">aufgrund des Ergebniss<b>es</b></span>'],
          ['feminine', 'der', 'unchanged', '<span class="de">hinsichtlich der Qualit\u00e4t</span>'],
          ['plural', 'der', 'unchanged', '<span class="de">ungeachtet der Bedenken</span>'],
          ['bare plural / number', '\u2014', '<b>von</b> + Dativ', '<span class="de">aufgrund von Problemen</span>'],
          ['Dativ group', 'dem / der', 'unchanged', '<span class="de">gem\u00e4\u00df dem Gesetz</span>, <span class="de">dem Bericht zufolge</span>']
        ]
      },
      note: 'Use <b>-es</b> after one-syllable nouns and those ending in -s, -\u00df, -z, -tz (<i>des Ergebnisses</i>, <i>des Gesetzes</i>); otherwise <b>-s</b>. Remember the four Dativ prepositions \u2014 <b>gem\u00e4\u00df, entsprechend, entgegen, zufolge</b> \u2014 and that <b>zufolge</b> follows its noun.',
      hinglish: 'Chapter kehta hai ki yeh prepositions zyada-tar Genitiv lete hain, par yeh nahi dikhata ki noun par kya lagta hai \u2014 aur exercises wahi test karti hain. Masculine aur neuter nouns par <b>-s</b> ya <b>-es</b> lagta hai, aur feminine aur plural mein noun waisa hi rehta hai, sirf article <b>der</b> ho jaata hai. Jab noun ek syllable ka ho ya <b>-s, -\u00df, -z, -tz</b> par khatam ho to <b>-es</b> aata hai (<span class="de">des Ergebnisses</span>, <span class="de">des Gesetzes</span>), warna seedha <b>-s</b>. Ek kaam ki baat \u2014 jab article hi nahi hota (khaali plural ya koi number), tab German <b>von</b> + Dativ par chala jaata hai: <span class="de">aufgrund von Problemen</span>. Aur chaar prepositions Genitiv nahi lete: <b>gem\u00e4\u00df, entsprechend, entgegen, zufolge</b> \u2014 yeh Dativ lete hain, aur <b>zufolge</b> apne noun ke <b>baad</b> aata hai.'
    },
    { title: 'Meister-Tabelle', body: [ 'Preposition mapped to its meaning, case, and preferred register.' ], table: { head: ['Preposition', 'Meaning', 'Case & Preferred Register'], rows: [ ['aufgrund', 'due to', 'Genitiv — academic/legal'], ['hinsichtlich', 'with regard to', 'Genitiv — academic/scientific'], ['gemäß', 'in accordance with', 'Dativ — legal/administrative'], ['mittels', 'by means of', 'Genitiv — scientific/technical'], ['zugunsten / zulasten', 'in favor of / at the expense of', 'Genitiv — legal/administrative'] ] }, hinglish: 'Preposition, matlab, case aur register ka table \u2014 par preposition chunne ke baad noun ki ending zaroor check karo, kyunki asli galtiyan wahin hoti hain.' },
    { title: 'Typische Fehler (common learner mistakes)', body: [ 'Four of these are case government \u2014 the mechanical rule this topic lives or dies by \u2014 plus <b>zufolge</b>\u2019s unique position and the <b>zugunsten</b>/<b>zulasten</b> pair, which mean opposite things.' ], mistakes: [
      { wrong: 'Aufgrund dem Ergebnis wurde das Verfahren eingestellt.', right: 'Aufgrund des Ergebnisses wurde das Verfahren eingestellt.', why: '<b>aufgrund</b> governs the Genitiv \u2014 so the article is <b>des</b> and the neuter noun adds <b>-es</b>.' },
      { wrong: 'Gem\u00e4\u00df des Gesetzes ist der Antrag einzureichen.', right: 'Gem\u00e4\u00df dem Gesetz ist der Antrag einzureichen.', why: '<b>gem\u00e4\u00df</b> is one of the few that takes the <b>Dativ</b>, not the Genitiv \u2014 along with <i>entsprechend</i>, <i>entgegen</i> and <i>zufolge</i>.' },
      { wrong: 'Zufolge dem Bericht sinken die Kosten.', right: 'Dem Bericht zufolge sinken die Kosten.', why: '<b>zufolge</b> is postposed \u2014 it comes AFTER its noun. This is the only preposition in the group that does so.' },
      { wrong: 'Die Regelung wirkt zugunsten der Mieter — sie müssen nun mehr zahlen.', right: 'Die Regelung wirkt zulasten der Mieter — sie müssen nun mehr zahlen.', why: '<b>zugunsten</b> means in favour of, <b>zulasten</b> at the expense of. They look alike and mean the opposite — the second half of the sentence gives it away.' },
      { wrong: 'Hinsichtlich \u00fcber die Kosten gibt es Fragen.', right: 'Hinsichtlich der Kosten gibt es Fragen.', why: '<b>hinsichtlich</b> already carries the meaning \u201cregarding\u201d and takes the Genitiv directly \u2014 adding <i>\u00fcber</i> both duplicates it and forces the wrong case.' }
    ], hinglish: 'Chaar galtiyan case ki hain \u2014 aur is topic mein case hi sabse zyada maayne rakhta hai. Baaki do: <b>zufolge</b> ki jagah (woh noun ke baad aata hai), aur <b>zugunsten</b> aur <b>zulasten</b> ka farak, jinke matlab ek doosre ke ulat hain.' },
    { title: 'Goethe-Prüfungstipps & Entscheidungshilfe', body: [ 'Writing formally? Academic, scientific, or legal? If yes, would a formal written preposition improve precision and register? If yes, use it — and double-check its case.' ], note: 'Memory trick: imagine formal prepositions as business suits. In everyday conversation, simple prepositions are like casual clothes. But when you enter a university, a courtroom, a government office, or a research conference, you change into a business suit. Words like aufgrund, hinsichtlich, gemäß, mittels and zugunsten are the business suits of German. They immediately make your writing sound professional and native-like.', hinglish: 'Formal likh rahe ho — academic, legal ya official? To yeh prepositions kaam aayenge. Par likhne ke baad teen cheezein check karo: case sahi hai (default <b>Genitiv</b>, aur chaar exceptions Dativ), masculine ya neuter noun par <b>-s</b> laga hai, aur <b>zufolge</b> use kiya ho to woh noun ke baad aaya hai.' }
  ],
  reading: {
    title: 'Offizieller Regierungsbericht', titleEn: 'Reading A — Official government report',
    tokens: [
      { w: 'Aufgrund', role: 'r-anzug-metapher', en: 'due to (the formal "business suit" preposition, Genitiv-governing)', hi: '(business suit, Anzug metaphor)', type: 'Präposition · Gen.' },
      { w: 'der', role: 'plain', en: 'the (fem. gen.)', hi: 'इस', type: 'Article' },
      { w: 'aktuellen', role: 'plain', en: 'current', hi: 'मौजूदा', type: 'Adjective · Gen.' },
      { w: 'Datenlage', role: 'plain', en: 'data situation', hi: 'डेटा स्थिति', type: 'Noun · fem. · Gen.' },
      { w: 'empfiehlt', role: 'plain', en: 'recommends', hi: 'सिफ़ारिश करता है', type: 'Verb (Präsens)' },
      { w: 'der', role: 'plain', en: 'the (masc. nom.)', hi: 'यह', type: 'Article' },
      { w: 'Ausschuss', role: 'plain', en: 'committee', hi: 'समिति', type: 'Noun · masc.' },
      { w: 'zugunsten', role: 'r-anzug-metapher', en: 'in favor of (formal legal/administrative preposition, Genitiv-governing, Satzende)', hi: '(business suit, Satzende)', type: 'Präposition · Gen. (Satzende)', why: '"zugunsten" is the formal business suit for "für" — used here in its typical legal/administrative register, governing Genitiv.' },
      { w: 'einer', role: 'plain', en: 'a (fem. gen.)', hi: 'एक', type: 'Article' },
      { w: 'Gesetzesreform', role: 'plain', en: 'legal reform (Satzende)', hi: 'क़ानूनी सुधार (Satzende)', type: 'Noun · fem. · Gen. (Satzende)' },
      { w: '.', plain: true }
    ],
    translation: 'Due to the current data situation, the committee recommends in favor of a legal reform.',
    comprehension: [
      { q: 'Welche everyday Präposition ersetzt "aufgrund" hier?', options: ['wegen', 'für', 'mit'], answer: 0 },
      { q: 'Welchen Kasus regiert "zugunsten"?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0 },
      { q: 'Was ist das Gegenteil von "zugunsten"?', options: ['zulasten', 'ungeachtet', 'mangels'], answer: 0 }
    ]
  },
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'C2_028_L001', speaker: 'Ursel', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Timo, angesichts der Verzögerung im Labor brauchen wir wirklich mehr Zeit für den Antrag.', en: 'Timo, given the delay in the lab we really need more time for the application.' },
      { id: 'C2_028_L002', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Dann formulieren wir: gemäß den Vorschriften ist eine einmalige Verlängerung möglich.', en: 'Then let\'s phrase it: pursuant to the regulations, a one-time extension is possible.' },
      { id: 'C2_028_L003', speaker: 'Ursel', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Und hinsichtlich der Begründung sollten wir die technischen Probleme genau auflisten.', en: 'And regarding the justification, we should list the technical problems precisely.' },
      { id: 'C2_028_L004', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Gut, so klingt der Antrag seriös und die Universität kann kaum ablehnen.', en: 'Good, that way the application sounds credible and the university can hardly refuse.' }
    ],
    transcript: 'Timo, angesichts der Verzögerung im Labor brauchen wir wirklich mehr Zeit für den Antrag. Dann formulieren wir: gemäß den Vorschriften ist eine einmalige Verlängerung möglich. Und hinsichtlich der Begründung sollten wir die technischen Probleme genau auflisten. Gut, so klingt der Antrag seriös und die Universität kann kaum ablehnen.',
    translation: 'Timo, given the delay in the lab we really need more time for the application. Then let\'s phrase it: pursuant to the regulations, a one-time extension is possible. And regarding the justification, we should list the technical problems precisely. Good, that way the application sounds credible and the university can hardly refuse.',
    tokens: [
      { w: 'Timo' },
      { w: ',', plain: true },
      { w: 'angesichts' },
      { w: 'der' },
      { w: 'Verzögerung' },
      { w: 'im' },
      { w: 'Labor' },
      { w: 'brauchen' },
      { w: 'wir' },
      { w: 'wirklich' },
      { w: 'mehr' },
      { w: 'Zeit' },
      { w: 'für' },
      { w: 'den' },
      { w: 'Antrag' },
      { w: '.', plain: true },
      { w: 'Dann' },
      { w: 'formulieren' },
      { w: 'wir' },
      { w: ':', plain: true },
      { w: 'gemäß' },
      { w: 'den' },
      { w: 'Vorschriften' },
      { w: 'ist' },
      { w: 'eine' },
      { w: 'einmalige' },
      { w: 'Verlängerung' },
      { w: 'möglich' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'hinsichtlich' },
      { w: 'der' },
      { w: 'Begründung' },
      { w: 'sollten' },
      { w: 'wir' },
      { w: 'die' },
      { w: 'technischen' },
      { w: 'Probleme' },
      { w: 'genau' },
      { w: 'auflisten' },
      { w: '.', plain: true },
      { w: 'Gut' },
      { w: ',', plain: true },
      { w: 'so' },
      { w: 'klingt' },
      { w: 'der' },
      { w: 'Antrag' },
      { w: 'seriös' },
      { w: 'und' },
      { w: 'die' },
      { w: 'Universität' },
      { w: 'kann' },
      { w: 'kaum' },
      { w: 'ablehnen' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Warum brauchen sie eine Verlängerung?', qEn: 'Why do they need an extension?', options: ['wegen Urlaub', 'wegen der Verzögerung im Labor', 'wegen eines Umzugs', 'ohne Grund'], optionsEn: ['because of holidays', 'because of the delay in the lab', 'because of a move', 'for no reason'], answer: 1,
        explain: '"Angesichts der Verzögerung im Labor brauchen wir mehr Zeit."' },
      { q: 'Was führen sie zur Begründung auf?', qEn: 'What do they list regarding the justification?', options: ['persönliche Gründe', 'die technischen Probleme', 'das Budget', 'die Teilnehmerliste'], optionsEn: ['personal reasons', 'the technical problems', 'the budget', 'the participant list'], answer: 1,
        explain: '"Hinsichtlich der Begründung sollten wir die technischen Probleme genau auflisten."' }
    ]
  },
  speaking: [
    { task: "Timo braucht wegen der Laborverzögerung mehr Zeit. Formuliere den Antrag.", taskEn: "Timo needs more time because of the lab delay. Phrase the application.", de: "Gemäß den Vorschriften ist eine einmalige Verlängerung möglich.", en: "In accordance with the regulations a single extension is possible." },
    { task: "Begründe die Verzögerung förmlich.", taskEn: "Justify the delay formally.", de: "Infolge des Ausfalls im Labor verschiebt sich die Auswertung.", en: "As a result of the lab failure the analysis is postponed." },
    { task: "Ein Gutachter fragt, worauf sich deine Auswertung stützt.", taskEn: "A reviewer asks what your analysis is based on.", de: "Anhand der Interviews wurden die Daten ausgewertet.", en: "On the basis of the interviews the data was analysed." },
    { task: "Das Amt fragt, wann du nachreichst und was gefehlt hat.", taskEn: "The authority asks when you'll submit and what was missing.", de: "Binnen zwei Wochen reichen wir nach; mangels Personal fehlte die Erhebung.", en: "Within two weeks we'll submit; for want of staff the survey was missing." },
    { task: "Eine Kollegin schreibt „wegen dem Labor“. Berate sie zum Register.", taskEn: "A colleague writes 'wegen dem Labor'. Advise her on register.", de: "Im Antrag schreibst du aufgrund des Labors oder bezüglich des Labors.", en: "In the proposal write 'aufgrund des Labors' or 'bezüglich des Labors'." }
  ],
  writing: {
    prompt: 'TASK 1 — Register upgrade (150 words): Replace everyday prepositions with formal written-language alternatives. Explain every change.\n\nTASK 2 — Academic editing (150 words): Edit an academic article by improving stylistic precision through appropriate preposition choice. Explain every decision.\n\nTASK 3 — Essay (600 words): Write a C2 academic essay naturally integrating sophisticated written-language prepositions across academic, scientific, legal, and administrative registers.',
    starters: ['Aufgrund der vorliegenden Daten...', 'Hinsichtlich der Methodik...', 'Im Hinblick auf die Ergebnisse...'],
    placeholder: 'Wähle eine Aufgabe und demonstriere deine Kontrolle über formelle Schriftsprache-Präpositionen und ihre Rektion...',
    minWords: 150
  },
  exercises: {
    mcq: { q: 'Which case does "aufgrund" govern?', options: ['Genitiv', 'Dativ', 'Akkusativ'], answer: 0, explain: '"aufgrund" is one of the large group of formal written prepositions governing Genitiv, like "wegen" in everyday speech.' },
    gap: { sentence: [' ', ' der neuen Ergebnisse musste die Theorie angepasst werden.'], gaps: [ { answer: 'Aufgrund', accepts: ['Aufgrund', 'aufgrund'] } ], explain: '"Aufgrund" (+Gen.) is the formal written-register business suit for everyday "wegen" — appropriate for this academic sentence.' },
    match: { q: 'Match each formal preposition to its everyday spoken equivalent.', pairs: [ { noun: 'aufgrund', art: 'wegen' }, { noun: 'hinsichtlich', art: 'über' }, { noun: 'mittels', art: 'mit' }, { noun: 'zugunsten', art: 'für' } ] },
    builder: { target: 'Build: "Due to the results, the study convinces." (formal preposition)', bank: ['Aufgrund', 'der', 'Ergebnisse', 'überzeugt', 'die', 'Studie', '.'], answer: ['Aufgrund', 'der', 'Ergebnisse', 'überzeugt', 'die', 'Studie', '.'], roles: { 'Aufgrund': 'r-anzug-metapher' } },
    errorCorrection: { title: 'Error correction', wrong: 'Wegen dem Ergebnis und für die Firma wurde eine Ausnahme gemacht.', right: 'Aufgrund des Ergebnisses und zugunsten der Firma wurde eine Ausnahme gemacht.', explain: 'Both spoken-register prepositions were upgraded: "wegen dem" (incorrect Dativ, and too casual) becomes "aufgrund des" (correct Genitiv, formal), and "für" becomes the formal "zugunsten" (+Gen.).' }
  },
  quiz: [
    { q: 'What is the C2 memory trick for formal prepositions in this chapter?', options: ['Formal prepositions are business suits — worn in the university, courtroom, and ministry, not in casual conversation', 'Formal prepositions can be used interchangeably with everyday ones', 'There is no difference between spoken and written prepositions'], answer: 0, explain: 'Choosing the formal "suit" preposition instantly signals register, just as clothing signals context.' },
    { q: 'Which case do most formal written prepositions govern?', options: ['Genitiv', 'Dativ', 'Nominativ'], answer: 0, explain: 'The large majority (aufgrund, hinsichtlich, mittels, zugunsten, trotz, and more) govern Genitiv; only a smaller group takes Dativ.' },
    { q: 'What is a classic C2-level mistake with formal prepositions?', options: ['Using the wrong case, e.g. "aufgrund dem" instead of "aufgrund des"', 'Using too many formal prepositions in a legal text', 'Avoiding Genitiv entirely'], answer: 0, explain: 'Incorrect case government is a frequent, highly noticeable error with these prepositions.' },
    { q: 'What is the everyday spoken equivalent of "hinsichtlich"?', options: ['über', 'für', 'mit'], answer: 0, explain: '"hinsichtlich" is the formal written-register "business suit" of everyday "über" — both mean "regarding/about".' },
    { q: 'What is the relationship between "zugunsten" and "zulasten"?', options: ['Near-opposites: "in favor of" vs. "at the expense of"', 'Exact synonyms', 'Unrelated words'], answer: 0, explain: 'These two are frequently confused because they look similar but mean opposite things.' }
  ],
  takeaways: [
    { c: 'r-anzug-metapher', html: 'Formal prepositions are business suits — aufgrund, hinsichtlich, gemäß, mittels, and zugunsten signal register instantly in academic, legal, and administrative writing.' },
    { c: 'r-anzug-metapher', html: 'Learning spoken-to-written pairs (wegen→aufgrund, über→hinsichtlich, für→zugunsten, mit→mittels) lets you deliberately control register.' },
    { c: 'r-anzug-metapher', html: 'Almost all formal written prepositions govern Genitiv; a smaller group (entsprechend, entgegen, gemäß, zufolge) governs Dativ.' },
    { c: 'r-anzug-metapher', html: 'Connective phrases like im Hinblick auf, vor diesem Hintergrund, and unter Berücksichtigung frame formal arguments at the paragraph level.' }
  ],
  revisionTips: [
    'Take five everyday prepositional phrases and rewrite each with its formal written equivalent, checking the correct case each time.',
    'Read one official report or academic article and underline every formal preposition, noting its case and register.',
    'Practice the confusable pairs (hinsichtlich/bezüglich, zugunsten/zulasten, kraft/mittels) until you can explain the difference without hesitation.'
  ]
};
window.CHAPTER = CHAPTER;
