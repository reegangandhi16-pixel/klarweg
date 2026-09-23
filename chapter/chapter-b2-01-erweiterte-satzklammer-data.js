/* ============================================================
   KLARWEG CHAPTER DATA — B2 · Phase 1 · Chapter 1
   "Erweiterte Satzklammer" — the extended sentence bracket:
   finite verb in the left bracket (position 2), everything else
   (infinitive, Partizip II, separable prefix, verb complement)
   in the right bracket at clause-end, with the Mittelfeld
   (time-cause-manner-place-object) between them.
   IMPORTANT: dialogue uses ONLY Franzi and Timo (two-voice audio
   system) — no other characters.
   Vocabulary source: uploaded chapter-1 list (35 items) — a
   migration/career theme (Migrationshintergrund, Chancengleichheit,
   Arbeitserlaubnis, Diskriminierung, Betriebswirtschaft…) — a
   natural fit for long B2 sentences about careers and moving
   abroad.
============================================================ */
const CHAPTER = {
  id: 'b2-01-erweiterte-satzklammer',
  phase: 'B2 · Phase 1',
  number: 1,
  title: 'Erweiterte Satzklammer',
  titleEn: 'The extended sentence bracket',
  description: 'Hold a long sentence together: the conjugated verb opens it (left bracket), everything else — infinitive, Partizip II, prefix, verb complement — closes it (right bracket), with the Mittelfeld in between.',
  xp: 320,
  time: 55,
  difficulty: 'Advanced',
  nextChapter: { number: 2, title: 'Mehrteilige Verben (Verbalkomplex)', titleEn: 'Multi-part verb clusters (Verbalkomplex)' , href: 'chapter-b2-02-verbalkomplex.html' },

  prevChapter: { number: 35, title: 'Goethe-Zertifikat B1 Final', titleEn: 'Goethe-Zertifikat B1 — Final exam & graduation', href: 'chapter-b1-35-goethe-zertifikat-b1-final.html' },
  heroAnimationPath: null,

  story: {
    eyebrow: 'Story-based learning',
    headline: 'The verb <em>opens and closes</em> the sentence.',
    intro: 'Franzi tells Timo her company has worked out a clear equal-opportunity policy, hiring criteria designed to be neutral — every long sentence held together by the verb bracket: it opens with the conjugated verb and closes with everything else at the end.',
    outcomes: [
      'Every word in every line is clickable',
      'Native-speed audio with adjustable playback',
      'Hear the left bracket (finite verb) and right bracket (infinitive/participle/prefix) work together in long B2 sentences'
    ],
    scene: 'Ein Gespräch über Migration und Karriere',
    femaleSpeakers: ['Franzi'],
    dialogue: [
      { speaker: 'Franzi', tokens: [
        { w: 'Unser', role: 'r-subject', en: 'our', hi: 'हमारी', pron: 'UN-zer', type: 'Possessive' },
        { w: 'Unternehmen', role: 'r-subject', en: 'company', hi: 'कंपनी', pron: 'un-ter-NAY-men', type: 'Noun · neut.' },
        { w: 'hat', role: 'r-verb', en: 'has', hi: 'रखी है', pron: 'hat', type: 'Verb · haben' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'mittlerweile', role: 'r-adverb', en: 'meanwhile', hi: 'इस बीच', pron: 'MIT-ler-vy-luh', type: 'Adverb', why: 'mittlerweile = meanwhile (this chapter).', ex: 'Mittlerweile hat sich viel verändert.', exEn: 'Meanwhile a lot has changed.' },
        { w: 'eine', role: 'r-akkusativ', en: 'a (fem.)', hi: 'एक', pron: 'EYE-nuh', type: 'Article · fem. acc.' },
        { w: 'klare', role: 'r-akkusativ', en: 'clear', hi: 'स्पष्ट', pron: 'KLAH-ruh', type: 'Adjective' },
        { w: 'Position', role: 'r-akkusativ', en: 'position', hi: 'रुख़', pron: 'po-zi-TSYON', type: 'Noun · fem.' },
        { w: 'zur', role: 'r-preposition', en: 'on', hi: 'के प्रति', pron: 'tsoor', type: 'Preposition + place' },
        { w: 'Chancengleichheit', role: 'r-dativ', en: 'equal opportunity (dat.)', hi: 'अवसर समानता के', pron: 'SHAN-sen-glykh-hite', type: 'Noun · fem. dat.', why: 'die Chancengleichheit (this chapter).', ex: 'Chancengleichheit ist wichtig.', exEn: 'Equal opportunity is important.' },
        { w: 'erarbeitet', role: 'r-verb', en: 'worked out', hi: 'तैयार की', pron: 'er-AR-by-tet', type: 'Partizip II · Satzende', why: 'erweiterte Satzklammer: material between the finite verb and the Partizip II at Satzende (this chapter).', ex: 'Sie hat sich eine Position erarbeitet.', exEn: 'She has worked out a position.' },
        { w: '.', plain: true }
      ], en: 'Our company has meanwhile worked out a clear position on equal opportunity.', hi: 'Hamaari company ne is beech avsar samaanta par ek spasht rukh taiyaar kiya hai.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'freut', role: 'r-verb', en: 'pleases', hi: 'ख़ुशी देता है', pron: 'FROYT', type: 'Verb · freuen' },
        { w: 'mich', role: 'r-akkusativ', en: 'me', hi: 'मुझे', pron: 'mikh', type: 'Pronoun · acc.' },
        { w: 'sehr', role: 'r-adverb', en: 'very', hi: 'बहुत', pron: 'zair', type: 'Adverb' },
        { w: '.', plain: true },
        { w: 'Wird', role: 'r-verb', en: 'is', hi: 'किया जाता है', pron: 'virt', type: 'Verb · werden (Passiv Präsens)' },
        { w: 'bei', role: 'r-preposition', en: 'with', hi: 'में', pron: 'by', type: 'Preposition + dative' },
        { w: 'der', role: 'r-dativ', en: 'the (fem. dat.)', hi: '', pron: 'dair', type: 'Article · dative' },
        { w: 'Einstellung', role: 'r-dativ', en: 'hiring (dat.)', hi: 'नियुक्ति में', pron: 'INE-shte-lung', type: 'Noun · fem. dat.', why: 'die Einstellung (recycled B1).', ex: 'bei der Einstellung' },
        { w: 'jedoch', role: 'r-adverb', en: 'however', hi: 'हालांकि', pron: 'yay-DOKH', type: 'Adverb', why: 'jedoch = however (this chapter).', ex: 'Es ist gut, jedoch schwierig.', exEn: 'It is good, however difficult.' },
        { w: 'auch', role: 'r-adverb', en: 'also', hi: 'भी', pron: 'owkh', type: 'Adverb' },
        { w: 'der', role: 'r-subject', en: 'the (masc.)', hi: 'यह', pron: 'dair', type: 'Article · masc.' },
        { w: 'Migrationshintergrund', role: 'r-subject', en: 'migration background', hi: 'प्रवासी पृष्ठभूमि', pron: 'mi-gra-TSYONS-hin-ter-grunt', type: 'Noun · masc.', why: 'der Migrationshintergrund (this chapter).', ex: 'Der Migrationshintergrund spielt keine Rolle.', exEn: 'The migration background plays no role.' },
        { w: 'berücksichtigt', role: 'r-verb', en: 'considered', hi: 'ध्यान में रखी जाती है', pron: 'be-RÜK-zikh-tikt', type: 'Partizip II · Satzende' },
        { w: '?', plain: true }
      ], en: 'That pleases me very much. However, in hiring, is the migration background also considered?', hi: 'Mujhe iski bahut khushi hai. Halaanki, niyukti mein, kya pravaasi prishthbhoomi bhi dhyaan mein rakhi jaati hai?' },
      { speaker: 'Franzi', tokens: [
        { w: 'Nein', role: 'r-negation', en: 'no', hi: 'नहीं', pron: 'nine', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'wir', role: 'r-subject', en: 'we', hi: 'हम', pron: 'veer', type: 'Pronoun · subject' },
        { w: 'haben', role: 'r-verb', en: 'have', hi: 'है', pron: 'HAH-ben', type: 'Verb · haben' },
        { w: 'sämtliche', role: 'r-akkusativ', en: 'all', hi: 'सभी', pron: 'ZEMT-li-khuh', type: 'Determiner', why: 'sämtlich = all, entire (this chapter).', ex: 'sämtliche Bewerber', exEn: 'all applicants' },
        { w: 'Kriterien', role: 'r-akkusativ', en: 'criteria', hi: 'मानदंड', pron: 'kri-TAY-ryen', type: 'Noun · plural' },
        { w: 'bewusst', role: 'r-adverb', en: 'deliberately', hi: 'सोच-समझ कर', pron: 'be-VUST', type: 'Adverb' },
        { w: 'neutral', role: 'r-adverb', en: 'neutral', hi: 'तटस्थ', pron: 'noy-TRAHL', type: 'Adjective' },
        { w: 'gestaltet', role: 'r-verb', en: 'designed', hi: 'डिज़ाइन', pron: 'ge-SHTAL-tet', type: 'Partizip II · Satzende' },
        { w: '.', plain: true }
      ], en: 'No, we have deliberately designed all criteria neutrally.', hi: 'Nahi, humne sabhi maapdand jaan boojh kar tatasth banaaye hain.' },
      { speaker: 'Timo', side: 'right', tokens: [
        { w: 'Das', role: 'r-subject', en: 'that', hi: 'यह', pron: 'das', type: 'Pronoun · subject' },
        { w: 'setzt', role: 'r-verb', en: 'requires', hi: 'आवश्यक बनाता है', pron: 'zetst', type: 'Verb · voraussetzen', lexicalUnit: 'voraussetzen', why: 'voraussetzen = to presuppose/require (this chapter).', ex: 'Das setzt viel Arbeit voraus.', exEn: 'That requires a lot of work.' },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'viel', role: 'r-akkusativ', en: 'a lot', hi: 'बहुत', pron: 'feel', type: 'Adverb' },
        { w: 'Arbeit', role: 'r-akkusativ', en: 'work', hi: 'काम', pron: 'AR-byte', type: 'Noun · fem.' },
        { w: 'voraus', role: 'r-verb', en: '(prefix of voraussetzen)', hi: '', pron: 'fo-ROWS', type: 'Separable prefix · Satzende', lexicalUnit: 'voraussetzen' },
        { w: '.', plain: true }
      ], en: 'That does however require a lot of work.', hi: 'Iske liye lekin bahut kaam ki zaroorat hoti hai.' },
      { speaker: 'Franzi', tokens: [
        { w: 'Ja', role: 'r-subject', en: 'yes', hi: 'हाँ', pron: 'yah', type: 'Answer particle' },
        { w: ',', plain: true },
        { w: 'aber', role: 'r-conjunction', en: 'but', hi: 'लेकिन', pron: 'AH-ber', type: 'Conjunction' },
        { w: 'es', role: 'r-subject', en: 'it', hi: 'यह', pron: 'es', type: 'Pronoun · subject' },
        { w: 'lohnt', role: 'r-verb', en: 'is worth', hi: 'लायक है', pron: 'LOHNT', type: 'Verb · sich lohnen', why: 'sich lohnen = to be worth it (recycled B1).', ex: 'sich lohnen' },
        { w: 'sich', role: 'r-akkusativ', en: 'itself', hi: 'ख़ुद', pron: 'zikh', type: 'Reflexive pronoun' },
        { w: 'für', role: 'r-preposition', en: 'for', hi: 'के लिए', pron: 'für', type: 'Preposition' },
        { w: 'die', role: 'r-akkusativ', en: 'the (fem.)', hi: 'यह', pron: 'dee', type: 'Article · fem. acc.' },
        { w: 'Chancengleichheit', role: 'r-akkusativ', en: 'equal opportunity', hi: 'अवसर समानता', pron: 'SHAN-sen-glykh-hite', type: 'Noun · fem.' },
        { w: 'wirklich', role: 'r-adverb', en: 'really', hi: 'सच में', pron: 'VIRK-likh', type: 'Adverb' },
        { w: '.', plain: true }
      ], en: 'Yes, but it is really worth it for equal opportunity.', hi: 'Haan, lekin avsar samaanta ke liye yeh sach mein layak hai.' }
    ]
  },

  overviewIntro: {
    eyebrow: 'The one idea',
    html: 'German holds a sentence together with two hooks: the <span class="de r-verb">finite verb</span> opens it in position 2 (the <b>left bracket</b>), and everything else — infinitive, Partizip II, separable prefix, or verb complement — closes it at the very end (the <b>right bracket</b>). Everything in between is the <b>Mittelfeld</b>.'
  },

  writingTutorPrompt:
    'You are a warm, encouraging German (B2) tutor for a Hindi/English-speaking learner. ' +
    'The lesson is ERWEITERTE SATZKLAMMER (B2 level): the finite verb sits in the left bracket (position 2 in main clauses, clause-final in Nebensätze); the right bracket holds the infinitive, Partizip II, separable prefix, or verb complement at the very end of the clause. The Mittelfeld (time-cause-manner-place-object order) sits between the two brackets. ' +
    'Do NOT expect Konjunktiv I, Nominalstil, or literary word order — those are out of scope; do not flag their absence. The learner wrote the text below.\n\n' +
    'TEXT:\n"""{{TEXT}}"""\n\n' +
    'ACCURACY RULES — follow these exactly; never contradict them:\n' +
    '- The finite verb must be in position 2 in a main clause (or clause-final in a subordinate clause), and the rest of the verb complex (infinitive/participle/prefix) must be at the very end.\n' +
    '- Never split a verb complex incorrectly, and never leave an infinitive/participle stranded mid-sentence.\n' +
    '- If unsure whether something is an error, do not flag it. Never invent a correction.\n\n' +
    'Give concise feedback as compact HTML (no markdown, no <html>/<body>, no code fences). Use exactly these parts:\n' +
    '1) <p><b>Overall:</b> one short encouraging sentence.</p>\n' +
    '2) <p><b>Corrections:</b></p> then a <ul> with one <li> per genuine issue. For each: show the wrong fragment in <span class="strike de"> … </span>, then "→", then the fix in <span class="de"> … </span>, then a short plain-English why. If there are no errors, write a single <li>No errors — well done.</li>\n' +
    '3) <p><b>Bracket check:</b> one sentence on whether the left and right brackets are correctly placed in each sentence.</p>\n' +
    'Keep it under 130 words. Be specific, kind, and precise. Do not invent text the learner did not write.',

  quizRecommendation: {
    high: 'Excellent — you correctly build the left and right brackets even in long, complex sentences. Move on to the next B2 chapter.',
    mid: 'Good. Re-read the Mittelfeld word-order guide once, then continue.',
    low: 'Worth another pass through the Grammar section — practise identifying the left and right brackets in short sentences before building longer ones.'
  },

  parserSentence: [
    { w: 'Anna', role: 'r-subject' }, { w: 'hat', role: 'r-verb' },
    { w: 'gestern', role: 'plain' }, { w: 'lange', role: 'plain' },
    { w: 'Deutsch', role: 'plain' }, { w: 'gelernt', role: 'r-verb' }
  ],

  sections: [
    { id: 'overview',   label: 'Overview',   tag: 'core',     auto: true,
      objective: 'See the one idea: the finite verb opens, everything else closes, at clause-end.' },
    { id: 'story',      label: 'Story',      tag: 'core',     auto: true,
      objective: 'Franzi and Timo build longer and longer sentences about migration and career.' },
    { id: 'vocabulary', label: 'Vocabulary', tag: 'core',
      objective: 'Learn the chapter\'s 35 words — full popups with an example, Hindi, and more.' },
    { id: 'grammar',    label: 'Grammar',    tag: 'core',
      objective: 'Master the left bracket, right bracket, and Mittelfeld across every tense and construction.' },
    { id: 'reading',    label: 'Reading',    tag: 'core',
      objective: 'Read a Goethe-style B2 passage full of long, correctly bracketed sentences.' },
    { id: 'listening',  label: 'Listening',  tag: 'practice',
      objective: 'Catch the left and right brackets in natural spoken German.' },
    { id: 'speaking',   label: 'Speaking',   tag: 'practice',
      objective: 'Build long, natural sentences describing work and study experiences.' },
    { id: 'writing',    label: 'Writing',    tag: 'practice',
      objective: 'Write a report or opinion text using correct sentence brackets consistently.' },
    { id: 'exercises',  label: 'Exercises',  tag: 'practice',
      objective: 'Drill identifying and building the left and right brackets.' },
    { id: 'quiz',       label: 'Quiz',       tag: 'assess',
      objective: 'Five questions. Pass to bank the full 320 XP.' },
    { id: 'summary',    label: 'Summary',    tag: 'assess',   auto: true,
      objective: 'Review what you completed and what comes next.' },
    { id: 'resources',  label: 'Study Resources', tag: 'assess', auto: true,
      objective: 'Download chapter resources for revision and offline study.' }
  ],

  resources: [
    { icon: '📚', title: 'Vocabulary PDF',
      desc: 'All 35 chapter words — migration and career vocabulary — with translations and examples.',
      pdfUrl: '/pdfs/vocabulary.pdf', size: '7 pages', kind: 'Vocabulary' },
    { icon: '📝', title: 'Homework PDF',
      desc: 'Bracket-identification drills, Mittelfeld ordering, error correction, and a long-sentence writing task.',
      pdfUrl: '/pdfs/homework.pdf', size: '9 pages', kind: 'Practice' },
    { icon: '📖', title: 'Grammar Rules PDF',
      desc: 'The complete sentence-bracket reference — left/right bracket, Mittelfeld order, common mistakes.',
      pdfUrl: '/pdfs/grammar.pdf', size: '8 pages', kind: 'Grammar' }
  ],

  outcomes: [
    { de: 'linke Klammer', text: 'Place the finite verb correctly in position 2' },
    { de: 'rechte Klammer', text: 'Close the sentence with infinitive/Partizip II/prefix/complement' },
    { de: 'Mittelfeld', text: 'Order time-cause-manner-place-object correctly' },
    { de: 'Hauptsatz vs Nebensatz', text: 'Move only the finite verb in subordinate clauses' },
    { de: 'lange Sätze', text: 'Build long, natural B2 sentences with confidence' }
  ],

  // ---------- Vocabulary (35 items — full chapter-1 upload list) ----------
  vocab: [
    { de: 'Chancengleichheit', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'equal opportunity', hi: 'समान अवसर', ex: 'Chancengleichheit ist wichtig für die Gesellschaft.', exEn: 'Equal opportunity is important for society.', exHi: 'Samaaj ke liye samaan avasar mahatvapurn hai.' },
    { de: 'führen', pos: 'verb', level: 'B2', en: 'to lead, guide', hi: 'ले जाना', ex: 'Führt das nicht manchmal zu einer atypischen Karriere?', exEn: 'Doesn\'t that sometimes lead to an atypical career?', exHi: 'Kya isse kabhi-kabhi asaamaanya career nahi banta?', conj: { praesens: 'führt', praeteritum: 'führte', perfekt: 'hat geführt' } },
    { de: 'jedoch', pos: 'adverb', level: 'B2', en: 'however, though', hi: 'हालांकि', ex: 'Jedoch musste er zunächst eine Arbeitserlaubnis beantragen.', exEn: 'However, he initially had to apply for a work permit.', exHi: 'Halanki, use shuru mein kaam ki anumati ke liye aavedan karna pada.' },
    { de: 'machen', pos: 'verb', level: 'B2', en: 'to make, do', hi: 'बनाना', ex: 'Das macht die Sache einfacher.', exEn: 'That makes the matter easier.', exHi: 'Isse maamla aasaan ho jaata hai.', conj: { praesens: 'macht', praeteritum: 'machte', perfekt: 'hat gemacht' } },
    { de: 'Migrationsdrama', art: 'das', gender: 'n', plural: 'Migrationsdramen', pos: 'noun', level: 'B2', en: 'migration drama', hi: 'प्रवासी नाटक', ex: 'Das Migrationsdrama wird in den Medien oft ausgenutzt.', exEn: 'The migration drama is often exploited in the media.', exHi: 'Media mein pravaasi naatak aksar shoshit kiya jaata hai.' },
    { de: 'Migrationshintergrund', art: 'der', gender: 'm', plural: 'Migrationshintergründe', pos: 'noun', level: 'B2', en: 'migration background', hi: 'प्रवासी पृष्ठभूमि', ex: 'Er musste wegen seines Migrationshintergrunds eine Arbeitserlaubnis beantragen.', exEn: 'He had to apply for a work permit because of his migration background.', exHi: 'Use apni pravaasi prishthbhoomi ki wajah se kaam ki anumati ke liye aavedan karna pada.' },
    { de: 'mittlerweile', pos: 'adverb', level: 'B2', en: 'meanwhile, by now', hi: 'इस बीच', ex: 'Ist die Diskriminierung mittlerweile zurückgegangen?', exEn: 'Has discrimination declined by now?', exHi: 'Kya bhedbhaav is beech kam ho gaya hai?' },
    { de: 'sämtlich', pos: 'adjective', level: 'B2', en: 'all, entire', hi: 'सभी', ex: 'Sämtliche Studien sollen eine positive Entwicklung zeigen.', exEn: 'All studies are supposed to show a positive development.', exHi: 'Sabhi adhyayan ek sakaaraatmak vikaas dikhaate hain.' },
    { de: 'Seite', art: 'die', gender: 'f', plural: 'Seiten', pos: 'noun', level: 'B2', en: 'page, side', hi: 'पेज, पक्ष', ex: 'Wir sollten das auf unserer Seite anfügen.', exEn: 'We should append that on our page.', exHi: 'Humein isko hamaare page par jodna chahiye.' },
    { de: 'stellen', pos: 'verb', level: 'B2', en: 'to put, place, pose, set', hi: 'रखना, पूछना', ex: 'Er stellte eine wichtige Frage.', exEn: 'He posed an important question.', exHi: 'Usne ek mahatvapurn sawaal poochha.', conj: { praesens: 'stellt', praeteritum: 'stellte', perfekt: 'hat gestellt' } },
    { de: 'voraussetzen', pos: 'verb', level: 'B2', en: 'to presuppose, require', hi: 'मान लेना, आवश्यकता होना', ex: 'Die Stelle setzt Auslandserfahrung voraus.', exEn: 'The position requires experience abroad.', exHi: 'Is pad ke liye videsh anubhav zaroori hai.', conj: { praesens: 'setzt voraus', praeteritum: 'setzte voraus', perfekt: 'hat vorausgesetzt' } },
    { de: 'Abstammung', art: 'die', gender: 'f', plural: 'Abstammungen', pos: 'noun', level: 'B2', en: 'descent, origin', hi: 'वंश', ex: 'Seine Abstammung spielt keine Rolle.', exEn: 'His descent doesn\'t matter.', exHi: 'Uske vansh se koi farak nahi padta.' },
    { de: 'anfügen', pos: 'verb', level: 'B2', en: 'to append, add', hi: 'जोड़ना', ex: 'Wir sollten Bekanntmachungen auf unserer Seite anfügen.', exEn: 'We should append announcements to our page.', exHi: 'Humein ghoshanaayein hamaare page par jodni chahiye.', conj: { praesens: 'fügt an', praeteritum: 'fügte an', perfekt: 'hat angefügt' } },
    { de: 'anhören', pos: 'verb', level: 'B2', en: 'to listen to', hi: 'सुनना', ex: 'Ich habe mir seine Geschichte angehört.', exEn: 'I listened to his story.', exHi: 'Maine uski kahaani suni.', conj: { praesens: 'hört an', praeteritum: 'hörte an', perfekt: 'hat angehört' } },
    { de: 'annehmen', pos: 'verb', level: 'B2', en: 'to assume, suppose; to accept, adopt', hi: 'मान लेना, स्वीकार करना', ex: 'Man kann annehmen, dass es besser wird.', exEn: 'One can assume that it will get better.', exHi: 'Yeh maana jaa sakta hai ki yeh behtar hoga.', conj: { praesens: 'nimmt an', praeteritum: 'nahm an', perfekt: 'hat angenommen' } },
    { de: 'Arbeitserlaubnis', art: 'die', gender: 'f', plural: 'Arbeitserlaubnisse', pos: 'noun', level: 'B2', en: 'work permit', hi: 'कार्य अनुमति', ex: 'Er musste eine Arbeitserlaubnis beantragen.', exEn: 'He had to apply for a work permit.', exHi: 'Use kaam ki anumati ke liye aavedan karna pada.' },
    { de: 'atypisch', pos: 'adjective', level: 'B2', en: 'atypical', hi: 'असामान्य', ex: 'Das führt zu einer atypischen Karriere.', exEn: 'That leads to an atypical career.', exHi: 'Isse asaamaanya career banta hai.' },
    { de: 'Auffassung', art: 'die', gender: 'f', plural: 'Auffassungen', pos: 'noun', level: 'B2', en: 'view, opinion', hi: 'राय', ex: 'Welche Auffassung vertrittst du dazu?', exEn: 'What view do you hold about that?', exHi: 'Iske baare mein tumhaari kya raay hai?' },
    { de: 'auflösen', pos: 'verb', level: 'B2', en: 'to dissolve, resolve', hi: 'भंग करना, सुलझाना', ex: 'Das Missverständnis wurde schnell aufgelöst.', exEn: 'The misunderstanding was quickly resolved.', exHi: 'Galatfahmi jaldi suljha di gayi.', conj: { praesens: 'löst auf', praeteritum: 'löste auf', perfekt: 'hat aufgelöst' } },
    { de: 'Auslandserfahrung', art: 'die', gender: 'f', plural: 'Auslandserfahrungen', pos: 'noun', level: 'B2', en: 'experience abroad', hi: 'विदेश अनुभव', ex: 'Auslandserfahrung ist heutzutage sehr begehrt.', exEn: 'Experience abroad is very sought-after nowadays.', exHi: 'Aajkal videsh anubhav bahut vaanchhit hai.' },
    { de: 'ausnutzen', pos: 'verb', level: 'B2', en: 'to exploit, take advantage', hi: 'शोषण करना', ex: 'Das Migrationsdrama wird in den Medien oft ausgenutzt.', exEn: 'The migration drama is often exploited in the media.', exHi: 'Media mein pravaasi naatak aksar shoshit kiya jaata hai.', conj: { praesens: 'nutzt aus', praeteritum: 'nutzte aus', perfekt: 'hat ausgenutzt' } },
    { de: 'auswandern', pos: 'verb', level: 'B2', en: 'to emigrate', hi: 'प्रवास करना', ex: 'Mein Freund ist letztes Jahr ausgewandert.', exEn: 'My friend emigrated last year.', exHi: 'Mera dost pichhle saal pravaas kar gaya.', conj: { praesens: 'wandert aus', praeteritum: 'wanderte aus', perfekt: 'ist ausgewandert' } },
    { de: 'bedenken', pos: 'verb', level: 'B2', en: 'to consider, bear in mind', hi: 'ध्यान रखना', ex: 'Man muss bedenken, dass Auslandserfahrung begehrt ist.', exEn: 'One must bear in mind that experience abroad is sought-after.', exHi: 'Yeh dhyaan rakhna chahiye ki videsh anubhav vaanchhit hai.', conj: { praesens: 'bedenkt', praeteritum: 'bedachte', perfekt: 'hat bedacht' } },
    { de: 'begehrt', pos: 'adjective', level: 'B2', en: 'sought-after, coveted', hi: 'वांछित', ex: 'Auslandserfahrung ist heutzutage sehr begehrt.', exEn: 'Experience abroad is very sought-after nowadays.', exHi: 'Aajkal videsh anubhav bahut vaanchhit hai.' },
    { de: 'Bekanntmachung', art: 'die', gender: 'f', plural: 'Bekanntmachungen', pos: 'noun', level: 'B2', en: 'announcement, notice', hi: 'घोषणा', ex: 'Wir sollten Bekanntmachungen über seinen Erfolg anfügen.', exEn: 'We should append announcements about his success.', exHi: 'Humein uski safalta ki ghoshanaayein jodni chahiye.' },
    { de: 'bereisen', pos: 'verb', level: 'B2', en: 'to travel through', hi: 'यात्रा करना', ex: 'Er hat schon viele Länder bereist.', exEn: 'He has already traveled through many countries.', exHi: 'Usne pehle hi kai deshon ki yatra ki hai.', conj: { praesens: 'bereist', praeteritum: 'bereiste', perfekt: 'hat bereist' } },
    { de: 'bereuen', pos: 'verb', level: 'B2', en: 'to regret', hi: 'पछताना', ex: 'Hat er das jemals bereut?', exEn: 'Has he ever regretted that?', exHi: 'Kya usne kabhi iska pachhtaava kiya?', conj: { praesens: 'bereut', praeteritum: 'bereute', perfekt: 'hat bereut' } },
    { de: 'betreffen', pos: 'verb', level: 'B2', en: 'to concern, affect', hi: 'प्रभावित करना', ex: 'Das betrifft uns alle.', exEn: 'That concerns all of us.', exHi: 'Yeh hum sabko prabhaavit karta hai.', conj: { praesens: 'betrifft', praeteritum: 'betraf', perfekt: 'hat betroffen' } },
    { de: 'Betriebswirtschaft', art: 'die', gender: 'f', plural: '— (Sg.)', pos: 'noun', level: 'B2', en: 'business administration', hi: 'व्यापार प्रबंधन', ex: 'Er wird ein Studium der Betriebswirtschaft abschließen.', exEn: 'He will complete a degree in business administration.', exHi: 'Woh business administration ki padhaai poori karega.' },
    { de: 'Diskriminierung', art: 'die', gender: 'f', plural: 'Diskriminierungen', pos: 'noun', level: 'B2', en: 'discrimination', hi: 'भेदभाव', ex: 'Ist die Diskriminierung am Arbeitsmarkt zurückgegangen?', exEn: 'Has discrimination in the labour market declined?', exHi: 'Kya shram baazaar mein bhedbhaav kam ho gaya hai?' },
    { de: 'eingehen', pos: 'verb', level: 'B2', en: 'to enter into, agree to; to respond to, engage with', hi: 'मान लेना, प्रतिक्रिया देना', ex: 'Er ging auf ihre Argumente ein.', exEn: 'He engaged with her arguments.', exHi: 'Usne uske tarkon par pratikriya di.', conj: { praesens: 'geht ein', praeteritum: 'ging ein', perfekt: 'ist eingegangen' } },
    { de: 'einig', pos: 'adjective', level: 'B2', en: 'in agreement, united', hi: 'सहमत', ex: 'Ich bin mit ihm einig, dass sich jeder einleben kann.', exEn: 'I agree with him that everyone can settle in.', exHi: 'Main uske saath sahmat hoon ki har koi bas sakta hai.' },
    { de: 'einleben', pos: 'verb', level: 'B2', en: 'to settle in', hi: 'बसना', ex: 'Jeder kann sich schnell einleben, wenn man offen bleibt.', exEn: 'Everyone can settle in quickly if one stays open.', exHi: 'Khule man se rehne par har koi jaldi bas jaata hai.', conj: { praesens: 'lebt sich ein', praeteritum: 'lebte sich ein', perfekt: 'hat sich eingelebt' } },
    { de: 'Einrichtung', art: 'die', gender: 'f', plural: 'Einrichtungen', pos: 'noun', level: 'B2', en: 'facility, furnishing, institution', hi: 'सुविधा, संस्थान', ex: 'Die Einrichtung hilft bei der Integration.', exEn: 'The institution helps with integration.', exHi: 'Sansthaan ekikaran mein madad karta hai.' }
  ],

  // ---------- Grammar (rule cards → accordion) ----------
  grammar: [
    {
      title: 'Was ist die Satzklammer?',
      body: [ 'German sentences have two verb positions: the LEFT BRACKET (finite verb) and the RIGHT BRACKET (infinitive, Partizip II, prefix, or verb complement). Everything else stays in the middle (Mittelfeld).' ],
      table: {
        head: ['Position', 'Example'],
        rows: [
          ['Linke Klammer (finites Verb)', '<span class="de">Anna hat …</span>'],
          ['Mittelfeld', '<span class="de">… gestern lange Deutsch …</span>'],
          ['Rechte Klammer', '<span class="de">… gelernt.</span>']
        ]
      },
      hinglish: 'German sentences mein do verb positions hoti hain: LEFT BRACKET (finite verb) aur RIGHT BRACKET (infinitive, Partizip II, prefix, ya verb complement).'
    },
    {
      title: 'Das Mittelfeld',
      body: [ 'Everything between the two brackets follows a typical order: time → cause → manner → place → object.' ],
      table: {
        head: ['Order', 'Example'],
        rows: [
          ['Zeit → Kausal → Modal → Lokal → Objekt', '<span class="de">Anna hat gestern wegen der Prüfung mit großer Motivation zu Hause Deutsch gelernt.</span>']
        ]
      },
      hinglish: 'Do brackets ke beech ka sab kuchh ek typical order follow karta hai: time → cause → manner → place → object.'
    },
    {
      title: 'Perfekt',
      body: [ 'Finite verb (haben/sein) = left bracket. Partizip II = right bracket.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['haben/sein … Partizip II', '<span class="de">Ich habe den Brief heute geschrieben.</span>']
        ]
      },
      hinglish: 'Finite verb (haben/sein) = left bracket. Partizip II = right bracket.'
    },
    {
      title: 'Modalverben',
      body: [ 'Finite modal verb = left bracket. Infinitive = right bracket.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Modalverb … Infinitiv', '<span class="de">Anna muss morgen lange arbeiten.</span>']
        ]
      },
      hinglish: 'Finite modal verb = left bracket. Infinitive = right bracket.'
    },
    {
      title: 'Trennbare Verben',
      body: [ 'The separable prefix forms the right bracket.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['Verb … Präfix', '<span class="de">Anna steht jeden Morgen früh auf.</span>']
        ]
      },
      hinglish: 'Separable prefix right bracket banata hai.'
    },
    {
      title: 'Infinitiv mit zu',
      body: [ 'The zu + Infinitiv group closes the sentence.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['… zu + Infinitiv', '<span class="de">Anna versucht jeden Tag Deutsch zu lernen.</span>']
        ]
      },
      hinglish: 'zu + Infinitiv group sentence ko close karta hai.'
    },
    {
      title: 'Passiv',
      body: [ 'werden (or sein for Perfekt) = left bracket. Partizip II (+ worden for Perfekt) = right bracket.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['werden … Partizip II', '<span class="de">Das Auto wird morgen repariert.</span>'],
          ['ist … Partizip II worden', '<span class="de">Der Brief ist bereits geschrieben worden.</span>']
        ]
      },
      hinglish: 'werden (ya sein) = left bracket. Partizip II (+ worden) = right bracket.'
    },
    {
      title: 'Mehrere Verbformen',
      body: [ 'B2 sentences often stack multiple verb forms at the very end, in a fixed order.' ],
      table: {
        head: ['Structure', 'Example'],
        rows: [
          ['… Infinitiv + Modalverb', '<span class="de">Anna hat heute lange lernen müssen.</span>'],
          ['… Partizip II + werden', '<span class="de">Der Bericht wird morgen fertiggestellt werden.</span>']
        ]
      },
      hinglish: 'B2 sentences mein aksar multiple verb forms aakhir mein fixed order mein aati hain.'
    },
    {
      title: 'Hauptsatz vs Nebensatz',
      body: [ 'In a main clause, the finite verb is in position 2. In a subordinate clause, ONLY the finite verb moves to the very end — the rest of the bracket stays in place before it.' ],
      table: {
        head: ['Type', 'Example'],
        rows: [
          ['Hauptsatz', '<span class="de">Anna hat heute viel gelernt.</span>'],
          ['Nebensatz', '<span class="de">…, weil Anna heute viel gelernt hat.</span>']
        ]
      },
      hinglish: 'Main clause mein finite verb position 2 mein. Nebensatz mein SIRF finite verb aakhir mein jaata hai.'
    },
    {
      title: 'Typische Fehler (common learner mistakes)',
      body: [ 'These mistakes come from breaking the bracket — leaving the right-bracket element mid-sentence, or moving the wrong verb in a Nebensatz.' ],
      mistakes: [
        { wrong: 'Ich habe gelernt heute.', right: 'Ich habe heute gelernt.', why: 'The Partizip II (gelernt) must stay at the very end — nothing follows it.' },
        { wrong: 'Anna muss arbeitet.', right: 'Anna muss arbeiten.', why: 'A modal verb needs the infinitive (arbeiten), not a conjugated form.' },
        { wrong: 'Wir haben können kommen.', right: 'Wir haben kommen können.', why: 'When two verbs stack at the end, the modal infinitive comes last, after the other infinitive.' },
        { wrong: 'Das Auto wird reparieren.', right: 'Das Auto wird repariert.', why: 'Passive needs Partizip II (repariert), not the infinitive.' },
        { wrong: '..., weil ich habe gearbeitet.', right: '..., weil ich gearbeitet habe.', why: 'In a Nebensatz, only the finite verb (habe) moves to the very end.' }
      ],
      hinglish: 'Yeh galtiyaan bracket todne se hoti hain — right-bracket element ko beech mein chhod dena, ya Nebensatz mein galat verb move karna.'
    },
    {
      title: 'Goethe-Prüfungstipps & Entscheidungshilfe',
      body: [ 'Correctly bracketed long sentences are the hallmark of B2 writing and speaking — examiners notice this immediately.' ],
      note: 'Quick check: what\'s the finite verb? Put it in position 2 (or clause-final in a Nebensatz). What\'s the rest of the verb complex? Put it all at the very end, in the fixed order.',
      hinglish: 'Sahi tarah bracket kiye lambe vaakya B2 writing aur speaking ki pehchaan hain — examiners isse turant notice karte hain.'
    }
  ],

  // ---------- Reading passage (clickable words) ----------
  reading: {
    title: 'Migration und Karriere in Deutschland',
    titleEn: 'Migration and career in Germany',
    tokens: [
      { w: 'Viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · Nom. Pl.' },
      { w: 'Menschen', role: 'plain', en: 'people', hi: 'लोग', type: 'Noun · plural' },
      { w: 'sind', role: 'r-verb', en: 'have (linke Klammer)', hi: 'हैं (बायाँ कोष्ठक)', type: 'Verb · sein (Linke Klammer)' },
      { w: 'wegen', role: 'plain', en: 'because of', hi: 'की वजह से', type: 'Preposition · Genitiv' },
      { w: 'besserer', role: 'plain', en: 'better', hi: 'बेहतर', type: 'Adjective · Genitiv' },
      { w: 'Chancengleichheit', role: 'plain', en: 'equal opportunity', hi: 'समान अवसर', type: 'Noun · fem.', why: 'die Chancengleichheit (this chapter).' },
      { w: 'nach', role: 'plain', en: 'to', hi: 'की तरफ़', type: 'Preposition · Dat.' },
      { w: 'Deutschland', role: 'plain', en: 'Germany (Satzende)', hi: 'जर्मनी (Satzende)', type: 'Name' },
      { w: 'ausgewandert', role: 'r-verb', en: 'emigrated (rechte Klammer)', hi: 'प्रवास किया (दायाँ कोष्ठक)', type: 'Verb · auswandern (Partizip II, Rechte Klammer)' },
      { w: '.', plain: true },
      { w: 'Wegen', role: 'plain', en: 'because of', hi: 'की वजह से', type: 'Preposition · Genitiv' },
      { w: 'ihres', role: 'plain', en: 'their (masc. gen.)', hi: 'अपने', type: 'Possessivartikel · Genitiv' },
      { w: 'Migrationshintergrunds', role: 'plain', en: 'migration background (gen.)', hi: 'प्रवासी पृष्ठभूमि का', type: 'Noun · masc.', why: 'der Migrationshintergrund (this chapter).' },
      { w: 'mussten', role: 'r-verb', en: 'had to (linke Klammer)', hi: 'चाहिए (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · Nom. Pl.' },
      { w: 'zunächst', role: 'plain', en: 'initially', hi: 'शुरुआत में', type: 'Adverb' },
      { w: 'eine', role: 'plain', en: 'a (fem. acc.)', hi: 'एक', type: 'Article · Akk.' },
      { w: 'Arbeitserlaubnis', role: 'plain', en: 'work permit', hi: 'कार्य अनुमति', type: 'Noun · fem.', why: 'die Arbeitserlaubnis (this chapter).' },
      { w: 'beantragen', role: 'r-verb', en: 'to apply for (rechte Klammer)', hi: 'आवेदन करना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: ',', plain: true },
      { w: 'bevor', role: 'r-connector', en: 'before', hi: 'से पहले', type: 'Konjunktion · bevor' },
      { w: 'sie', role: 'plain', en: 'they', hi: 'वे', type: 'Pronoun' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'passende', role: 'plain', en: 'suitable', hi: 'उपयुक्त', type: 'Adjective' },
      { w: 'Stelle', role: 'plain', en: 'position', hi: 'पद', type: 'Noun · fem.' },
      { w: 'finden', role: 'r-verb', en: 'find (rechte Klammer)', hi: 'ढूँढना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: 'konnten', role: 'r-verb', en: 'could (Satzende)', hi: 'सकते थे (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)', why: 'In a Nebensatz, the finite verb (konnten) moves to the very end.' },
      { w: '.', plain: true },
      { w: 'Sämtliche', role: 'plain', en: 'all, entire', hi: 'सभी', type: 'Adjective · Nom. Pl.', why: 'sämtlich (this chapter).' },
      { w: 'Studien', role: 'plain', en: 'studies', hi: 'अध्ययन', type: 'Noun · plural' },
      { w: 'zeigen', role: 'r-verb', en: 'show (linke Klammer)', hi: 'दिखाते हैं (बायाँ कोष्ठक)', type: 'Verb · zeigen (Linke Klammer)' },
      { w: 'inzwischen', role: 'plain', en: 'by now', hi: 'अब तक', type: 'Adverb' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Diskriminierung', role: 'plain', en: 'discrimination', hi: 'भेदभाव', type: 'Noun · fem.', why: 'die Diskriminierung (this chapter).' },
      { w: 'am', role: 'plain', en: 'in the', hi: 'में', type: 'Contraction · an dem' },
      { w: 'Arbeitsmarkt', role: 'plain', en: 'labour market', hi: 'श्रम बाज़ार', type: 'Noun · masc.' },
      { w: 'spürbar', role: 'plain', en: 'noticeably', hi: 'ध्यान देने योग्य रूप से', type: 'Adverb' },
      { w: 'zurückgegangen', role: 'plain', en: 'declined', hi: 'कम हुआ', type: 'Verb · zurückgehen (Partizip II)' },
      { w: 'ist', role: 'r-verb', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · sein (Nebensatz, Satzende)', why: 'The finite verb (ist) moves to the very end in the dass-Satz.' },
      { w: '.', plain: true },
      { w: 'Man', role: 'r-subject', en: 'one', hi: 'कोई', type: 'Pronoun · impersonal' },
      { w: 'muss', role: 'r-verb', en: 'must (linke Klammer)', hi: 'चाहिए (बायाँ कोष्ठक)', type: 'Verb · Modalverb (Linke Klammer)' },
      { w: 'jedoch', role: 'r-connector', en: 'however', hi: 'हालांकि', type: 'Adverb', why: 'jedoch (this chapter).' },
      { w: 'bedenken', role: 'r-verb', en: 'bear in mind (rechte Klammer)', hi: 'ध्यान रखना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)', why: 'bedenken (this chapter).' },
      { w: ',', plain: true },
      { w: 'dass', role: 'r-connector', en: 'that', hi: 'कि', type: 'Konjunktion · dass' },
      { w: 'Auslandserfahrung', role: 'plain', en: 'experience abroad', hi: 'विदेश अनुभव', type: 'Noun · fem.', why: 'die Auslandserfahrung (this chapter).' },
      { w: 'heutzutage', role: 'plain', en: 'nowadays', hi: 'आजकल', type: 'Adverb' },
      { w: 'besonders', role: 'plain', en: 'especially', hi: 'ख़ास तौर पर', type: 'Adverb' },
      { w: 'begehrt', role: 'plain', en: 'sought-after', hi: 'वांछित', type: 'Adjective', why: 'begehrt (this chapter).' },
      { w: 'ist', role: 'plain', en: 'is', hi: 'है', type: 'Verb · sein' },
      { w: 'und', role: 'plain', en: 'and', hi: 'और', type: 'Conjunction' },
      { w: 'viele', role: 'plain', en: 'many', hi: 'कई', type: 'Adjective · Nom. Pl.' },
      { w: 'Unternehmen', role: 'plain', en: 'companies', hi: 'कंपनियाँ', type: 'Noun · plural' },
      { w: 'sie', role: 'plain', en: 'it', hi: 'इसे', type: 'Pronoun · Akk.' },
      { w: 'ausdrücklich', role: 'plain', en: 'explicitly', hi: 'स्पष्ट रूप से', type: 'Adverb' },
      { w: 'voraussetzen', role: 'r-verb', en: 'require (Satzende)', hi: 'आवश्यक मानते हैं (Satzende)', type: 'Verb · voraussetzen (Nebensatz, Satzende)', why: 'voraussetzen = to presuppose/require (this chapter); untrennbar, so it stays whole at Satzende.' },
      { w: '.', plain: true },
      { w: 'Ein', role: 'plain', en: 'an', hi: 'एक', type: 'Article' },
      { w: 'Beispiel', role: 'plain', en: 'example', hi: 'उदाहरण', type: 'Noun · neut.' },
      { w: 'dafür', role: 'plain', en: 'for this', hi: 'इसके लिए', type: 'Pronominaladverb' },
      { w: 'ist', role: 'r-verb', en: 'is (linke Klammer)', hi: 'है (बायाँ कोष्ठक)', type: 'Verb · sein (Linke Klammer)' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'Softwarefirma', role: 'plain', en: 'software company', hi: 'सॉफ़्टवेयर कंपनी', type: 'Noun · fem.' },
      { w: 'Delta', role: 'plain', en: 'Delta', hi: 'डेल्टा', type: 'Name' },
      { w: 'GmbH', role: 'plain', en: 'GmbH (Ltd.)', hi: 'जीएमबीएच', type: 'Noun' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'which', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'sich', role: 'plain', en: 'itself', hi: 'ख़ुद', type: 'Reflexivpronomen' },
      { w: 'mittlerweile', role: 'plain', en: 'meanwhile', hi: 'इस बीच', type: 'Adverb', why: 'mittlerweile (this chapter).' },
      { w: 'eine', role: 'plain', en: 'a', hi: 'एक', type: 'Article · Akk.' },
      { w: 'klare', role: 'plain', en: 'clear', hi: 'स्पष्ट', type: 'Adjective' },
      { w: 'Position', role: 'plain', en: 'position', hi: 'रुख़', type: 'Noun · fem.' },
      { w: 'zur', role: 'plain', en: 'on', hi: 'के प्रति', type: 'Contraction · zu der' },
      { w: 'Chancengleichheit', role: 'plain', en: 'equal opportunity', hi: 'समान अवसर', type: 'Noun · fem.' },
      { w: 'erarbeitet', role: 'r-verb', en: 'worked out (rechte Klammer, Satzende)', hi: 'तैयार की (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Nebensatz, Satzende)' },
      { w: 'hat', role: 'r-verb', en: 'has (Satzende)', hi: 'है (Satzende)', type: 'Verb · haben (Nebensatz, Satzende)', why: 'Relative clause: finite verb (hat) and Partizip II (erarbeitet) both end up at Satzende, in fixed order.' },
      { w: ':', plain: true },
      { w: 'Bei', role: 'plain', en: 'in', hi: 'में', type: 'Preposition · Dat.' },
      { w: 'der', role: 'plain', en: 'the (fem. dat.)', hi: 'यह', type: 'Article · Dat.' },
      { w: 'Einstellung', role: 'plain', en: 'hiring', hi: 'नियुक्ति', type: 'Noun · fem.' },
      { w: 'wird', role: 'r-verb', en: 'is (linke Klammer)', hi: 'किया जाता है (बायाँ कोष्ठक)', type: 'Verb · werden (Passiv, Linke Klammer)' },
      { w: 'der', role: 'plain', en: 'the (masc.)', hi: 'यह', type: 'Article' },
      { w: 'Migrationshintergrund', role: 'plain', en: 'migration background', hi: 'प्रवासी पृष्ठभूमि', type: 'Noun · masc.' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'mehr', role: 'plain', en: 'anymore', hi: 'अब', type: 'Adverb' },
      { w: 'berücksichtigt', role: 'r-verb', en: 'considered (rechte Klammer)', hi: 'ध्यान में रखा जाता है (दायाँ कोष्ठक)', type: 'Verb · Partizip II (Rechte Klammer)' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but rather', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'ausschließlich', role: 'plain', en: 'exclusively', hi: 'विशेष रूप से', type: 'Adverb' },
      { w: 'die', role: 'plain', en: 'the (fem.)', hi: 'यह', type: 'Article' },
      { w: 'fachliche', role: 'plain', en: 'professional', hi: 'व्यावसायिक', type: 'Adjective' },
      { w: 'Qualifikation', role: 'plain', en: 'qualification', hi: 'योग्यता', type: 'Noun · fem.' },
      { w: '.', plain: true },
      { w: 'Diese', role: 'plain', en: 'this', hi: 'यह', type: 'Determiner' },
      { w: 'Entwicklung', role: 'plain', en: 'development', hi: 'विकास', type: 'Noun · fem.' },
      { w: 'betrifft', role: 'r-verb', en: 'affects (linke Klammer)', hi: 'प्रभावित करता है (बायाँ कोष्ठक)', type: 'Verb · betreffen (Linke Klammer)', why: 'betreffen = to concern, affect (this chapter).' },
      { w: 'längst', role: 'plain', en: 'by far', hi: 'बहुत पहले से', type: 'Adverb' },
      { w: 'nicht', role: 'plain', en: 'not', hi: 'नहीं', type: 'Negation' },
      { w: 'nur', role: 'plain', en: 'only', hi: 'केवल', type: 'Adverb' },
      { w: 'große', role: 'plain', en: 'large', hi: 'बड़े', type: 'Adjective' },
      { w: 'Konzerne', role: 'plain', en: 'corporations', hi: 'निगम', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'sondern', role: 'r-connector', en: 'but also', hi: 'बल्कि', type: 'Konjunktion' },
      { w: 'zunehmend', role: 'plain', en: 'increasingly', hi: 'तेज़ी से बढ़ते हुए', type: 'Adverb' },
      { w: 'auch', role: 'plain', en: 'also', hi: 'भी', type: 'Adverb' },
      { w: 'kleinere', role: 'plain', en: 'smaller', hi: 'छोटे', type: 'Adjective' },
      { w: 'Betriebe', role: 'plain', en: 'businesses', hi: 'व्यवसाय', type: 'Noun · plural' },
      { w: ',', plain: true },
      { w: 'die', role: 'r-connector', en: 'that', hi: 'जो', type: 'Relativpronomen · Nom.' },
      { w: 'ihre', role: 'plain', en: 'their', hi: 'अपने', type: 'Possessivartikel' },
      { w: 'Auswahlkriterien', role: 'plain', en: 'selection criteria', hi: 'चयन मानदंड', type: 'Noun · plural' },
      { w: 'bewusst', role: 'plain', en: 'deliberately', hi: 'सोच-समझ कर', type: 'Adverb' },
      { w: 'neutral', role: 'plain', en: 'neutrally', hi: 'तटस्थ रूप से', type: 'Adjective' },
      { w: 'gestalten', role: 'r-verb', en: 'to design (rechte Klammer)', hi: 'डिज़ाइन करना (दायाँ कोष्ठक)', type: 'Verb · Infinitiv (Rechte Klammer)' },
      { w: 'wollen', role: 'r-verb', en: 'want to (Satzende)', hi: 'चाहते हैं (Satzende)', type: 'Verb · Modalverb (Nebensatz, Satzende)', why: 'Relative clause: modal (wollen) closes after the infinitive (gestalten).' },
      { w: '.', plain: true }
    ],
    translation: 'Many people have emigrated to Germany because of better equal opportunity. Because of their migration background, many initially had to apply for a work permit before they could find a suitable position. All studies now show that discrimination in the labour market has noticeably declined. One must however bear in mind that experience abroad is especially sought-after nowadays, and many companies explicitly require it. One example is the software company Delta GmbH, which has meanwhile worked out a clear position on equal opportunity: in hiring, the migration background is no longer considered — only professional qualification is. This development affects by far not only large corporations, but increasingly smaller businesses too, who want to deliberately design their selection criteria to be neutral.'
  },

  // ---------- Listening ----------
  listening: {
    // Speakers reuse the chapter's Story Dialogue pair. New, related situation, natural spoken register.
    dialogue: [
      { id: 'B2_001_L001', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Franzi, ich hab gehört, dass ihr die neue Richtlinie letzte Woche endlich verabschiedet habt.', en: 'Franzi, I heard you finally passed the new policy last week.' },
      { id: 'B2_001_L002', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Ja, nach drei Monaten Diskussion haben wir uns wirklich auf klare Kriterien einigen können.', en: 'Yes, after three months of discussion we really managed to agree on clear criteria.' },
      { id: 'B2_001_L003', speaker: 'Timo', gender: 'male', voice: 'de-DE-Neural2-D', de: 'Und wird sie ab sofort auch bei allen neuen Stellen angewendet?', en: 'And will it be applied to all new positions starting now?' },
      { id: 'B2_001_L004', speaker: 'Franzi', gender: 'female', voice: 'de-DE-Neural2-F', de: 'Genau, jede Ausschreibung muss ab jetzt diese Kriterien enthalten.', en: 'Exactly, every job posting has to include these criteria from now on.' }
    ],
    transcript: 'Franzi, ich hab gehört, dass ihr die neue Richtlinie letzte Woche endlich verabschiedet habt. Ja, nach drei Monaten Diskussion haben wir uns wirklich auf klare Kriterien einigen können. Und wird sie ab sofort auch bei allen neuen Stellen angewendet? Genau, jede Ausschreibung muss ab jetzt diese Kriterien enthalten.',
    translation: 'Franzi, I heard you finally passed the new policy last week. Yes, after three months of discussion we really managed to agree on clear criteria. And will it be applied to all new positions starting now? Exactly, every job posting has to include these criteria from now on.',
    tokens: [
      { w: 'Franzi' },
      { w: ',', plain: true },
      { w: 'ich' },
      { w: 'hab' },
      { w: 'gehört' },
      { w: ',', plain: true },
      { w: 'dass' },
      { w: 'ihr' },
      { w: 'die' },
      { w: 'neue' },
      { w: 'Richtlinie' },
      { w: 'letzte' },
      { w: 'Woche' },
      { w: 'endlich' },
      { w: 'verabschiedet' },
      { w: 'habt' },
      { w: '.', plain: true },
      { w: 'Ja' },
      { w: ',', plain: true },
      { w: 'nach' },
      { w: 'drei' },
      { w: 'Monaten' },
      { w: 'Diskussion' },
      { w: 'haben' },
      { w: 'wir' },
      { w: 'uns' },
      { w: 'wirklich' },
      { w: 'auf' },
      { w: 'klare' },
      { w: 'Kriterien' },
      { w: 'einigen' },
      { w: 'können' },
      { w: '.', plain: true },
      { w: 'Und' },
      { w: 'wird' },
      { w: 'sie' },
      { w: 'ab' },
      { w: 'sofort' },
      { w: 'auch' },
      { w: 'bei' },
      { w: 'allen' },
      { w: 'neuen' },
      { w: 'Stellen' },
      { w: 'angewendet' },
      { w: '?', plain: true },
      { w: 'Genau' },
      { w: ',', plain: true },
      { w: 'jede' },
      { w: 'Ausschreibung' },
      { w: 'muss' },
      { w: 'ab' },
      { w: 'jetzt' },
      { w: 'diese' },
      { w: 'Kriterien' },
      { w: 'enthalten' },
      { w: '.', plain: true }
    ],
    questions: [
      { q: 'Wofür brauchte die Regelung drei Monate?', qEn: 'What did the policy take three months to do?', options: ['scheitern', 'sich auf klare Kriterien einigen', 'verschwinden', 'abgesagt werden'], optionsEn: ['fail', 'agree on clear criteria', 'disappear', 'be cancelled'], answer: 1,
        explain: '"… haben wir uns wirklich auf klare Kriterien einigen können."' },
      { q: 'Was muss von jetzt an jede Stellenanzeige enthalten?', qEn: 'From now on, what must every job posting contain?', options: ['ein Foto', 'diese Kriterien', 'eine Gehaltsangabe', 'nichts Neues'], optionsEn: ['a photo', 'these criteria', 'a salary figure', 'nothing new'], answer: 1,
        explain: '"Jede Ausschreibung muss ab jetzt diese Kriterien enthalten."' }
    ]
  },

  

  // ---------- Speaking prompts (Anna/Rohan role-play only) ----------
  speaking: [
    { task: "Eine Kollegin fragt, wie die neue Richtlinie zustande kam.", taskEn: "A colleague asks how the new guideline came about.", de: "Wir haben uns nach drei Monaten Diskussion auf klare Regeln geeinigt.", en: "After three months of discussion we agreed on clear rules." },
    { task: "Man fragt dich im Gespräch nach deiner Auslandserfahrung.", taskEn: "In the interview you're asked about your experience abroad.", de: "Ich habe während meines Studiums zwei Jahre im Ausland gearbeitet.", en: "During my studies I worked abroad for two years." },
    { task: "Ein Kollege fragt, was Chancengleichheit im Betrieb heißt.", taskEn: "A colleague asks what equal opportunity means in the company.", de: "Wir setzen voraus, dass Bewerber ohne Rücksicht auf ihre Abstammung beurteilt werden.", en: "We take it as given that applicants are judged regardless of their background." },
    { task: "Eine Praktikantin fragt, was sie bei der Arbeitserlaubnis beachten muss.", taskEn: "An intern asks what she must watch out for with the work permit.", de: "Du musst die Arbeitserlaubnis mittlerweile schon vor dem ersten Tag beantragt haben.", en: "You now have to have applied for the work permit before day one." },
    { task: "Deine Chefin fragt, wie du das Projekt weiterführen willst.", taskEn: "Your boss asks how you want to continue the project.", de: "Ich möchte die Aufgabe nach der Auswertung mit dem ganzen Team zu Ende bringen.", en: "After the analysis I'd like to finish the task with the whole team." },
    { task: "Rollenspiel: Ihr berichtet der Leitung über die Diskussion.", taskEn: "Role-play: you report the discussion to management.", de: "Wir haben die Auffassung, dass sämtliche Beteiligten mittlerweile angehört worden sind.", en: "We take the view that all those involved have by now been consulted." }
  ],

  // ---------- Writing prompt ----------
  writing: {
    prompt: 'Write a short report or opinion text (six to eight sentences) about migration, career, or study abroad — using correct left/right sentence brackets throughout, including at least one Perfekt sentence, one modal verb sentence, one Passiv sentence, and one Nebensatz.',
    starters: ['… hat …', '… muss …', '… wird … werden.', '…, weil … hat.'],
    placeholder: 'Mein Freund hat letztes Jahr wegen der Chancengleichheit ausgewandert …',
    minWords: 50
  },

  // ---------- Exercises (4 types + transformations, per spec) ----------
  exercises: {
    mcq: {
      q: 'Complete: "Anna ___ gestern lange Deutsch gelernt." (identify the left bracket)',
      options: ['hat', 'gelernt', 'lange'],
      answer: 0,
      explain: 'The finite verb "hat" forms the left bracket, in position 2.'
    },
    gap: {
      sentence: ['Anna muss morgen lange ', '.'],
      gaps: [ { answer: 'arbeiten', accepts: ['arbeiten'] } ],
      explain: 'With a modal verb, the infinitive closes the sentence (right bracket).'
    },
    match: {
      q: 'Match each sentence type to its right-bracket element.',
      pairs: [
        { noun: 'Perfekt', art: 'Partizip II' },
        { noun: 'Modalverb', art: 'Infinitiv' },
        { noun: 'Trennbares Verb', art: 'Präfix' },
        { noun: 'Passiv', art: 'Partizip II (+ werden)' }
      ]
    },
    builder: {
      target: 'Build: "Anna stands up early every morning."',
      bank: ['Anna', 'steht', 'jeden', 'Morgen', 'früh', 'auf', '.'],
      answer: ['Anna', 'steht', 'jeden', 'Morgen', 'früh', 'auf', '.'],
      roles: { 'steht': 'r-verb', 'auf': 'r-verb' }
    },
    errorCorrection: {
      title: 'Error correction',
      wrong: 'Ich habe gelernt heute.',
      right: 'Ich habe heute gelernt.',
      explain: 'The Partizip II (gelernt) must stay at the very end — nothing follows it.'
    }
  },

  // ---------- Quiz (5 questions) ----------
  quiz: [
    { q: 'Complete: "Das Auto wird morgen ___."', options: ['reparieren', 'repariert', 'reparierte'], answer: 1,
      explain: 'Passiv needs Partizip II (repariert) as the right bracket.' },
    { q: 'Complete: "Wir haben das Problem nicht lösen ___."', options: ['können', 'gekonnt', 'kann'], answer: 0,
      explain: 'When two verbs stack, the modal infinitive (können) comes last.' },
    { q: 'Which sentence has correct word order?', options: ['..., weil ich gearbeitet habe.', '..., weil ich habe gearbeitet.', '..., weil habe ich gearbeitet.'], answer: 0,
      explain: 'In a Nebensatz, only the finite verb (habe) moves to the very end.' },
    { q: 'Complete: "Anna versucht jeden Tag Deutsch ___."', options: ['lernen', 'zu lernen', 'gelernt'], answer: 1,
      explain: 'Infinitiv mit zu closes the sentence as the right bracket.' },
    { q: 'Which sentence contains an error?', options: ['Anna muss morgen arbeiten.', 'Anna muss arbeitet.', 'Der Zug kommt pünktlich an.'], answer: 1,
      explain: 'A modal verb needs the infinitive (arbeiten), not a conjugated form (arbeitet).' }
  ],

  // ---------- Summary takeaways ----------
  takeaways: [
    { c: 'r-verb', html: 'The finite verb opens the sentence (left bracket, position 2 in main clauses); everything else — infinitive, Partizip II, prefix, or verb complement — closes it (right bracket, at the very end).' },
    { c: 'r-verb', html: 'The Mittelfeld between the two brackets follows a typical order: time → cause → manner → place → object.' },
    { c: 'r-verb', html: 'In a Nebensatz, only the finite verb moves — it joins the rest of the bracket at the very end, in a fixed sequence.' }
  ],
  revisionTips: [
    'Before writing any sentence, identify the finite verb first — it always goes in the left bracket.',
    'Then identify everything that belongs in the right bracket — infinitive, participle, prefix, or complement — and place it at the very end.',
    'Practise building longer and longer sentences one piece at a time, checking the bracket stays intact at each step.'
  ]
};

window.CHAPTER = CHAPTER;
