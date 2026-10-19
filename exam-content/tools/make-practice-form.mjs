/* SYNTHETIC B1 PRACTICE form P1: original, fictional, realistic B1-style texts written for Klarweg (no Goethe-Institut
   or other published exam material, no real people, brands or venues), built with the shared practice builder
   (tools/practice-lib.mjs: TEST AUDIO tones with server-only scripts, explanations and evidence released only after
   submission). Registered via SYNTHETIC_FORMS in make-synthetic-form.mjs and byte-checked by check-public-boundary.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { countWords } from '../schemas/content-model.mjs';
import { createPracticeBuilder, PRACTICE_TIMING } from './practice-lib.mjs';

export const PRACTICE_REL = 'forms/synthetic/b1-synthetic-p1';
const FORM_ID = 'frm:b1:synthetic-p1@1';
const DATE = '2026-10-13';

const { textAsset, toneAsset, item, task, choice, explain, finish, RF, JN, abc } = createPracticeBuilder({ formId: FORM_ID, date: DATE });

const lesenInd = { inference_demand: 2, distractor_strength: 2, info_units: 7 };

/* ---------------- LESEN ---------------- */
const L1 = { m: 'lesen', p: 1 };
const l1Text = 'Liebe Jana,\n\n'
  + 'seit drei Wochen wohne ich jetzt in Lindenau, und ich wollte dir endlich von meinem neuen Leben erzählen. Die Wohnung ist kleiner als meine alte, '
  + 'aber sie hat einen Balkon, und morgens scheint dort die Sonne. Zur Arbeit fahre ich mit der Straßenbahn – nur zwölf Minuten, das ist viel besser als früher mit dem Auto im Stau.\n\n'
  + 'Meine Nachbarin, Frau Okafor, hat mich am ersten Tag zum Kaffee eingeladen. Sie hat mir gezeigt, wo man am Samstag auf dem Markt frisches Gemüse kaufen kann. '
  + 'Leider kenne ich sonst noch kaum jemanden. Deshalb habe ich mich für einen Kochkurs an der Volkshochschule angemeldet. Er beginnt erst im November, weil der Oktoberkurs schon voll war.\n\n'
  + 'Hast du Lust, mich bald zu besuchen? Am Wochenende vom 15. bin ich zu Hause. Du kannst bei mir übernachten – das Sofa ist ganz bequem!\n\n'
  + 'Viele Grüße\nMila';
task({ id: 'tsk:b1:p1-l1', module: 'lesen', part: 1, interaction: 'binary_choice',
  instructions: 'Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch?',
  stimuli: [{ role: 'text', asset: textAsset('ast:p1-l1-text', l1Text, 'E-Mail'), text: l1Text }], indicators: lesenInd,
  items: [
    choice('itm:b1:p1-l1-00', L1, 'tsk:b1:p1-l1', 'binary_choice', RF, 'Beispiel: Mila wohnt seit kurzer Zeit in Lindenau.', 'richtig', true),
    ...[['Milas neue Wohnung ist größer als die alte.', 'falsch'], ['Mila fährt jetzt mit der Straßenbahn zur Arbeit.', 'richtig'],
      ['Frau Okafor hat Mila den Markt gezeigt.', 'richtig'], ['Mila hat in Lindenau schon viele Freunde gefunden.', 'falsch'],
      ['Der Kochkurs beginnt im Oktober.', 'falsch'], ['Jana kann bei Mila übernachten.', 'richtig']]
      .map(([stem, key], i) => choice(`itm:b1:p1-l1-0${i + 1}`, L1, 'tsk:b1:p1-l1', 'binary_choice', RF, `${i + 1}. ${stem}`, key))
  ] });

const L2 = { m: 'lesen', p: 2 };
const l2aText = 'Stadtbibliothek öffnet am Sonntag\n\nAb dem ersten März ist die Stadtbibliothek Lindenau auch sonntags von 11 bis 17 Uhr geöffnet. '
  + 'Ein Test im letzten Winter war so erfolgreich, dass der Stadtrat das Angebot jetzt fest eingeführt hat. Vor allem Familien und Berufstätige, die unter der Woche keine Zeit haben, '
  + 'kamen am Sonntag. Am Sonntag gibt es allerdings keine Beratung: Bücher ausleihen und zurückgeben kann man nur an den Automaten. '
  + 'Für die zusätzlichen Stunden hat die Bibliothek zwei neue Mitarbeiterinnen eingestellt; ehrenamtliche Helfer lesen außerdem jeden Sonntag um 15 Uhr Geschichten für Kinder vor.';
const l2bText = 'Weniger Müll auf dem Wochenmarkt\n\nSeit Juni können Kundinnen und Kunden auf dem Wochenmarkt am Rathausplatz Pfandbecher und Pfandboxen benutzen. '
  + 'Wer zum Beispiel Suppe oder Salat kauft, zahlt zwei Euro Pfand und bekommt das Geld zurück, wenn er die Box an einem der Stände abgibt. '
  + 'Die Idee kam von einer Gruppe Schülerinnen, die im Unterricht ein Projekt zum Thema Verpackung gemacht haben. '
  + 'Nach drei Monaten sind die Händler zufrieden: Es gibt deutlich weniger Müll. Nur einige ältere Kunden finden das System noch zu kompliziert.';
task({ id: 'tsk:b1:p1-l2a', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie den Text aus der Zeitung und die Aufgaben 7 bis 9. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p1-l2a-text', l2aText, 'aus einer Lokalzeitung (erfunden)'), text: l2aText, label: 'aus einer Lokalzeitung (erfunden)' }], indicators: lesenInd,
  items: [
    choice('itm:b1:p1-l2-00', L2, 'tsk:b1:p1-l2a', 'mcq_single', abc('ist bald auch sonntags geöffnet.', 'schließt im März.', 'zieht in ein neues Gebäude.'), 'Beispiel: Die Stadtbibliothek …', 'a', true),
    choice('itm:b1:p1-l2-07', L2, 'tsk:b1:p1-l2a', 'mcq_single', abc('weil viele Leute es gewünscht haben.', 'weil ein Test erfolgreich war.', 'weil es neue Automaten gibt.'), '7. Die Bibliothek öffnet sonntags, …', 'b'),
    choice('itm:b1:p1-l2-08', L2, 'tsk:b1:p1-l2a', 'mcq_single', abc('kann man keine Bücher ausleihen.', 'gibt es keine Beratung.', 'ist der Eintritt teurer.'), '8. Am Sonntag …', 'b'),
    choice('itm:b1:p1-l2-09', L2, 'tsk:b1:p1-l2a', 'mcq_single', abc('Ehrenamtliche lesen Kindern vor.', 'die Mitarbeiter arbeiten länger.', 'Familien bekommen Rabatt.'), '9. Jeden Sonntag um 15 Uhr …', 'a')
  ] });
task({ id: 'tsk:b1:p1-l2b', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie den Text aus der Zeitung und die Aufgaben 10 bis 12. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p1-l2b-text', l2bText, 'aus einer Lokalzeitung (erfunden)'), text: l2bText, label: 'aus einer Lokalzeitung (erfunden)' }], indicators: lesenInd,
  items: [
    choice('itm:b1:p1-l2-10', L2, 'tsk:b1:p1-l2b', 'mcq_single', abc('neue Marktstände.', 'Pfandbecher und Pfandboxen.', 'kostenlose Suppe.'), '10. Auf dem Wochenmarkt gibt es seit Juni …', 'b'),
    choice('itm:b1:p1-l2-11', L2, 'tsk:b1:p1-l2b', 'mcq_single', abc('von Schülerinnen.', 'von den Händlern.', 'vom Stadtrat.'), '11. Die Idee kam …', 'a'),
    choice('itm:b1:p1-l2-12', L2, 'tsk:b1:p1-l2b', 'mcq_single', abc('finden alle Kunden das System einfach.', 'wollen die Händler das System beenden.', 'gibt es weniger Müll als vorher.'), '12. Nach drei Monaten …', 'c')
  ] });

const L3 = { m: 'lesen', p: 3 };
const POOL = 'abcdefghij'.split('');
const ads = [
  'Gitarrenunterricht für Anfänger – Einzelstunden am Abend, auch online. Probestunde kostenlos.',
  'Fahrradwerkstatt zum Mitmachen: Jeden Samstag reparieren Sie Ihr Rad selbst – wir helfen und haben Werkzeug.',
  'Sprachcafé im Stadtteilzentrum: Deutsch sprechen in kleinen Gruppen, dienstags 18–20 Uhr, ohne Anmeldung.',
  'Wanderclub Lindenau sucht neue Mitglieder: Touren am Sonntag, 10–15 km, Kinder willkommen.',
  'Nachhilfe Mathematik für Schüler der Klassen 5–10, zu Hause oder in der Bibliothek.',
  'Gebrauchte Möbel günstig abzugeben: Tisch, Stühle, Regal – nur Abholung.',
  'Yoga für Berufstätige: Kurs am frühen Morgen, 7–8 Uhr, vor der Arbeit.',
  'Babysitterin mit Erfahrung, auch am Wochenende und abends, Erste-Hilfe-Kurs vorhanden.',
  'Computerkurs für Seniorinnen und Senioren: E-Mails schreiben und Videotelefonie, vormittags.',
  'Wohnung zu vermieten: 2 Zimmer, Balkon, ab 1. Dezember, Haustiere erlaubt.'
];
const POOL_OPTIONS = [...POOL.map((l) => ({ option_id: l, label: l })), { option_id: '0', label: '0 – keine passende Anzeige' }];
const situations = [
  ['Sie möchten Ihr Deutsch verbessern und abends mit anderen sprechen.', 'c'],
  ['Ihr Fahrrad ist kaputt, und Sie möchten lernen, es selbst zu reparieren.', 'b'],
  ['Sie suchen eine Wohnung mit drei Zimmern für Ihre Familie.', '0'],
  ['Ihre Großmutter möchte lernen, mit ihren Enkeln per Video zu telefonieren.', 'i'],
  ['Sie gehen am Wochenende gern in der Natur spazieren und suchen Gesellschaft.', 'd'],
  ['Sie möchten vor der Arbeit etwas für Ihren Körper tun.', 'g'],
  ['Ihr Sohn hat in der 7. Klasse Probleme in Mathematik.', 'e']
];
task({ id: 'tsk:b1:p1-l3', module: 'lesen', part: 3, interaction: 'matching_pool',
  instructions: 'Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Jede Anzeige darf nur einmal gewählt werden. Für eine Situation gibt es keine passende Anzeige; wählen Sie dann 0.',
  stimuli: ads.map((t, i) => ({ role: 'ad', asset: textAsset(`ast:p1-l3-ad-${POOL[i]}`, t), text: t, label: POOL[i] })), indicators: { ...lesenInd, info_units: 10 },
  items: [
    choice('itm:b1:p1-l3-00', L3, 'tsk:b1:p1-l3', 'matching_pool', POOL_OPTIONS, 'Beispiel: Sie möchten ein Instrument lernen.', 'a', true),
    ...situations.map(([stem, key], i) => choice(`itm:b1:p1-l3-${13 + i}`, L3, 'tsk:b1:p1-l3', 'matching_pool', POOL_OPTIONS, `${13 + i}. ${stem}`, key))
  ] });

const L4 = { m: 'lesen', p: 4 };
const l4Topic = 'In einem Online-Magazin wird gefragt: Sollen Schulen das Handy im Unterricht ganz verbieten?';
const comments = [
  ['Svenja, 34', 'Ja, unbedingt. Meine Tochter kann sich ohne Handy viel besser konzentrieren. Im Unterricht braucht man es nicht.', 'ja'],
  ['Mehmet, 17', 'Ich finde ein Verbot übertrieben. Wir benutzen das Handy oft für Recherchen, und das ist wichtig für später.', 'nein'],
  ['Clara, 45', 'Kinder werden heute ständig abgelenkt. Ein paar Stunden am Tag ohne Handy tun allen gut – also bitte verbieten.', 'ja'],
  ['Jonas, 29', 'Verbote helfen selten. Besser ist es, wenn die Schule zeigt, wie man das Handy sinnvoll benutzt.', 'nein'],
  ['Ilse, 66', 'Früher ging es auch ohne. Ich bin dafür, dass die Geräte während der Schulzeit im Schrank bleiben.', 'ja'],
  ['Tarek, 38', 'Als Lehrer erlebe ich, dass das Handy im Unterricht manchmal sehr nützlich ist, etwa für Wörterbücher. Ein totales Verbot lehne ich ab.', 'nein'],
  ['Paula, 16', 'Ehrlich gesagt bin ich froh, wenn das Handy weg ist. Dann gibt es in der Pause wieder echte Gespräche.', 'ja'],
  ['Benedikt, 52', 'Die Eltern müssen ihre Kinder im Notfall erreichen können. Deshalb bin ich gegen ein Verbot.', 'nein']
];
task({ id: 'tsk:b1:p1-l4', module: 'lesen', part: 4, interaction: 'binary_choice',
  instructions: `${l4Topic} Lesen Sie die Kommentare 20 bis 26. Ist die Person für ein Handyverbot? Wählen Sie Ja oder Nein.`,
  stimuli: comments.map(([who, text], i) => ({ role: 'text', asset: textAsset(`ast:p1-l4-c${i}`, `${who}: ${text}`), text: `${who}: ${text}`, label: who })), indicators: lesenInd,
  items: comments.map(([who, , key], i) => choice(`itm:b1:p1-l4-${i === 0 ? '00' : 19 + i}`, L4, 'tsk:b1:p1-l4', 'binary_choice', JN,
    i === 0 ? `Beispiel: ${who}` : `${19 + i}. ${who}`, key, i === 0)) });

const L5 = { m: 'lesen', p: 5 };
const l5Text = 'Nutzungsordnung der Gemeinschaftsräume, Wohnanlage Am Lindenhof\n\n'
  + '1. Der Gemeinschaftsraum kann von allen Mieterinnen und Mietern für private Feiern gebucht werden. Die Buchung erfolgt mindestens zwei Wochen vorher bei der Hausverwaltung.\n\n'
  + '2. Für jede Buchung zahlen Sie eine Kaution von 50 Euro. Sie bekommen die Kaution zurück, wenn der Raum sauber und ohne Schäden übergeben wird.\n\n'
  + '3. Ab 22 Uhr ist Musik nur noch leise erlaubt. Feiern müssen spätestens um Mitternacht enden.\n\n'
  + '4. Den Schlüssel holen Sie am Tag der Feier ab 14 Uhr beim Hausmeister ab und geben ihn am nächsten Morgen bis 10 Uhr zurück.';
task({ id: 'tsk:b1:p1-l5', module: 'lesen', part: 5, interaction: 'mcq_single',
  instructions: 'Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie a, b oder c.',
  context: 'Sie möchten im Gemeinschaftsraum Ihrer Wohnanlage einen Geburtstag feiern und lesen die Regeln.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p1-l5-text', l5Text), text: l5Text }], indicators: lesenInd,
  items: [
    ['Den Raum bucht man …', abc('am Tag der Feier beim Hausmeister.', 'mindestens zwei Wochen vorher bei der Hausverwaltung.', 'online ohne Frist.'), 'b'],
    ['Die Kaution …', abc('bekommt man zurück, wenn alles in Ordnung ist.', 'ist im Mietpreis enthalten.', 'zahlt man nur bei Schäden.'), 'a'],
    ['Nach 22 Uhr …', abc('muss die Feier zu Ende sein.', 'darf man keine Gäste mehr einladen.', 'darf die Musik nur leise sein.'), 'c'],
    ['Den Schlüssel …', abc('bringt man am nächsten Morgen zurück.', 'bekommt man eine Woche vorher.', 'kann man bei der Hausverwaltung abholen.'), 'a']
  ].map(([stem, opts, key], i) => choice(`itm:b1:p1-l5-${27 + i}`, L5, 'tsk:b1:p1-l5', 'mcq_single', opts, `${27 + i}. ${stem}`, key)) });

/* ---------------- HÖREN (TEST AUDIO tones; the script each tone stands for is in script_de) ---------------- */
const hInd = (plays, details, speakers = 1) => ({ speech_rate_wpm: null, speaker_count: speakers, plays, relevant_details: details, distractor_details: 0 });
const H1 = { m: 'hoeren', p: 1 };
const h1Ex = toneAsset('ast:p1-h1-ex', 1.5, 440, 'Hören Teil 1 Beispiel', 'Ansage am Bahnhof: Der Regionalzug nach Bergheim fährt heute von Gleis 4 statt von Gleis 2.');
task({ id: 'tsk:b1:p1-h1-ex', module: 'hoeren', part: 1, interaction: 'audio_item_pairs',
  instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. (Übungsform: die Hörtexte werden als Prüftöne abgespielt.)',
  stimuli: [{ role: 'audio', asset: h1Ex }], indicators: hInd(1, 2), items: [
    choice('itm:b1:p1-h1-01', H1, 'tsk:b1:p1-h1-ex', 'binary_choice', RF, '01 Beispiel: Der Zug nach Bergheim fährt heute von einem anderen Gleis.', 'richtig', true),
    choice('itm:b1:p1-h1-02', H1, 'tsk:b1:p1-h1-ex', 'mcq_single', abc('von Gleis 4.', 'von Gleis 2.', 'heute nicht.'), '02 Beispiel: Der Zug fährt …', 'a', true)
  ] });
const h1Texts = [
  ['Nachricht auf dem Anrufbeantworter: Hallo Ben, hier ist Lea. Das Kino um acht ist ausverkauft. Wollen wir stattdessen um halb zehn gehen? Ruf mich bitte bis sechs zurück.',
    ['Lea möchte den Kinobesuch absagen.', 'falsch'], ['Ben soll Lea …', abc('bis sechs Uhr anrufen.', 'Karten kaufen.', 'um acht abholen.'), 'a']],
  ['Radiohinweis: Wegen Bauarbeiten ist die Brücke an der Hafenstraße am Wochenende gesperrt. Autofahrer fahren bitte über die Ringstraße. Busse fahren normal.',
    ['Am Wochenende kann man nicht über die Brücke fahren.', 'richtig'], ['Die Busse …', abc('fahren über die Ringstraße.', 'fahren wie immer.', 'fahren am Wochenende nicht.'), 'b']],
  ['Durchsage im Kaufhaus: Liebe Kundinnen und Kunden, nur heute gibt es in der Sportabteilung im dritten Stock zwanzig Prozent auf alle Laufschuhe.',
    ['Die Laufschuhe sind die ganze Woche billiger.', 'falsch'], ['Die Sportabteilung ist …', abc('im Erdgeschoss.', 'im zweiten Stock.', 'im dritten Stock.'), 'c']],
  ['Nachricht von der Arztpraxis: Guten Tag, Frau Weber. Ihr Termin am Donnerstag muss leider ausfallen. Bitte rufen Sie uns an, damit wir einen neuen Termin finden.',
    ['Frau Weber soll in der Praxis anrufen.', 'richtig'], ['Der Termin am Donnerstag …', abc('findet nicht statt.', 'beginnt später.', 'ist eine Stunde früher.'), 'a']],
  ['Wetterbericht: Morgen bleibt es im Norden trocken, im Süden regnet es ab Mittag. Am Abend wird es überall deutlich kühler.',
    ['Morgen regnet es im ganzen Land.', 'falsch'], ['Am Abend …', abc('scheint überall die Sonne.', 'wird es kälter.', 'gibt es Gewitter.'), 'b']]
];
h1Texts.forEach(([script, [rf, rfKey], [q, opts, qKey]], i) => {
  const t = i + 1;
  const a = toneAsset(`ast:p1-h1-t${t}`, 2, 440 + t * 60, `Hören Teil 1 Text ${t}`, script);
  task({ id: `tsk:b1:p1-h1-t${t}`, module: 'hoeren', part: 1, interaction: 'audio_item_pairs', instructions: `Text ${t}`,
    stimuli: [{ role: 'audio', asset: a }], indicators: hInd(2, 2), items: [
      choice(`itm:b1:p1-h1-${String(2 * t - 1).padStart(2, '0')}x`, H1, `tsk:b1:p1-h1-t${t}`, 'binary_choice', RF, `${2 * t - 1}. ${rf}`, rfKey),
      choice(`itm:b1:p1-h1-${String(2 * t).padStart(2, '0')}x`, H1, `tsk:b1:p1-h1-t${t}`, 'mcq_single', opts, `${2 * t}. ${q}`, qKey)
    ] });
});
const H2 = { m: 'hoeren', p: 2 };
const h2 = toneAsset('ast:p1-h2', 3, 520, 'Hören Teil 2', 'Führung durch das Stadtmuseum: Willkommen! Wir beginnen im Erdgeschoss mit der Geschichte des Hafens. '
  + 'Die Führung dauert etwa neunzig Minuten. Fotos sind erlaubt, aber bitte ohne Blitz. Um 12 Uhr machen wir eine Pause im Museumscafé. Am Ende können Sie im Shop Postkarten kaufen.');
const h2Instr = toneAsset('ast:p1-h2-instr', 1, 330, 'Hören Teil 2 Anweisung', 'Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben.');
task({ id: 'tsk:b1:p1-h2', module: 'hoeren', part: 2, interaction: 'mcq_single', context: 'Sie nehmen an einer Führung durch das Stadtmuseum teil.',
  instructions: 'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben (11 bis 15). Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
  stimuli: [{ role: 'audio', asset: h2 }], indicators: hInd(1, 5), items: [
    ['Die Führung beginnt …', abc('im Erdgeschoss.', 'im Museumscafé.', 'im Shop.'), 'a'],
    ['Die Führung dauert …', abc('eine halbe Stunde.', 'ungefähr anderthalb Stunden.', 'den ganzen Tag.'), 'b'],
    ['Fotografieren ist …', abc('verboten.', 'nur im Shop erlaubt.', 'ohne Blitz erlaubt.'), 'c'],
    ['Um 12 Uhr …', abc('gibt es eine Pause.', 'endet die Führung.', 'öffnet das Museum.'), 'a'],
    ['Im Shop kann man …', abc('Eintrittskarten kaufen.', 'Postkarten kaufen.', 'Fotos ausdrucken.'), 'b']
  ].map(([stem, opts, key], i) => choice(`itm:b1:p1-h2-${11 + i}`, H2, 'tsk:b1:p1-h2', 'mcq_single', opts, `${11 + i}. ${stem}`, key)) });
const H3 = { m: 'hoeren', p: 3 };
const h3 = toneAsset('ast:p1-h3', 3, 600, 'Hören Teil 3', 'Paul: Hallo Nora! Lange nicht gesehen. Was machst du denn jetzt?\n'
  + 'Nora: Hallo Paul! Stell dir vor, ich habe eine neue Stelle gefunden – in einer Gärtnerei am Stadtrand.\n'
  + 'Paul: In einer Gärtnerei? Ich dachte, du arbeitest noch im Café.\n'
  + 'Nora: Nein, das Café habe ich im Sommer verlassen. In der Gärtnerei arbeite ich nur vormittags, weil ich nachmittags noch eine Weiterbildung mache.\n'
  + 'Paul: Das klingt anstrengend, aber gut. Bei mir gibt es auch Neues: Ich ziehe im Frühling um, in eine größere Wohnung.\n'
  + 'Nora: Toll! Brauchst du Hilfe beim Umzug?\n'
  + 'Paul: Gern! Hast du am Wochenende Zeit?\n'
  + 'Nora: Am Samstag ja. Am Sonntag besuche ich meine Eltern.\n'
  + 'Paul: Super, dann am Samstag. Und danach lade ich dich zum Essen ein.');
task({ id: 'tsk:b1:p1-h3', module: 'hoeren', part: 3, interaction: 'binary_choice', context: 'Sie sind im Bus und hören, wie sich zwei Bekannte unterhalten.',
  instructions: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben (16 bis 22). Wählen Sie: Sind die Aussagen richtig oder falsch?',
  stimuli: [{ role: 'audio', asset: h3, speakers: ['spk:a', 'spk:b'] }], indicators: hInd(1, 7, 2), items: [
    ['Nora hat eine neue Arbeit.', 'richtig'], ['Nora arbeitet in einem Café.', 'falsch'], ['Nora arbeitet nur am Vormittag.', 'richtig'],
    ['Paul macht eine Weiterbildung.', 'falsch'], ['Paul zieht im Frühling um.', 'richtig'], ['Nora hilft Paul am Sonntag.', 'falsch'], ['Paul lädt Nora zum Essen ein.', 'richtig']
  ].map(([stem, key], i) => choice(`itm:b1:p1-h3-${16 + i}`, H3, 'tsk:b1:p1-h3', 'binary_choice', RF, `${16 + i}. ${stem}`, key)) });
const H4 = { m: 'hoeren', p: 4 };
const SPEAKERS = [{ option_id: 'a', label: 'Moderatorin' }, { option_id: 'b', label: 'Herr Lang' }, { option_id: 'c', label: 'Frau Demir' }];
const h4 = toneAsset('ast:p1-h4', 3, 660, 'Hören Teil 4', 'Moderatorin: Guten Abend und herzlich willkommen! Unser Thema heute: das Auto in der Stadt. '
  + 'Bei mir im Studio sind Herr Lang, er hat ein Taxiunternehmen, und Frau Demir, Lehrerin.\n'
  + 'Herr Lang: Für mich ist die Sache klar. Denken Sie an Handwerker: Die müssen schweres Werkzeug mitnehmen – mit dem Fahrrad geht das einfach nicht.\n'
  + 'Frau Demir: Bei mir ist es anders. Ich habe kein Auto und fahre schon lange bei jedem Wetter mit dem Fahrrad zu meiner Schule.\n'
  + 'Moderatorin: Erzählen Sie doch etwas mehr: Wie sieht das bei Ihnen im Alltag aus?\n'
  + 'Herr Lang: Vergessen Sie die Seniorinnen und Senioren nicht. Viele können nicht mehr weit laufen und brauchen das Auto.\n'
  + 'Frau Demir: Das stimmt, aber dann muss die Stadt mehr für Radfahrer tun. Wir brauchen viel mehr sichere Radwege.\n'
  + 'Moderatorin: Eine letzte Frage noch an Sie beide: Was wünschen Sie sich für die nächsten zehn Jahre?\n'
  + 'Herr Lang: Für viele Menschen ohne eigenes Auto ist das Taxi oft die einzige Lösung, zum Beispiel nachts oder für den Weg zum Arzt.\n'
  + 'Frau Demir: Mir geht es vor allem um die Kinder. Sie müssen ohne Gefahr mit dem Rad zur Schule fahren können.');
task({ id: 'tsk:b1:p1-h4', module: 'hoeren', part: 4, interaction: 'speaker_assignment',
  instructions: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben (23 bis 30). Wer sagt was?',
  stimuli: [{ role: 'audio', asset: h4, speakers: ['spk:m', 'spk:g1', 'spk:g2'] }], indicators: hInd(2, 8, 3), items: [
    choice('itm:b1:p1-h4-00', H4, 'tsk:b1:p1-h4', 'speaker_assignment', SPEAKERS, 'Beispiel: Heute sprechen wir über das Auto in der Stadt.', 'a', true),
    ...[['Ohne Auto können viele Handwerker nicht arbeiten.', 'b'], ['Ich fahre seit Jahren jeden Tag mit dem Rad zur Schule.', 'c'],
      ['Welche Erfahrungen haben Sie im Alltag gemacht?', 'a'], ['Ältere Menschen sind oft auf das Auto angewiesen.', 'b'],
      ['Die Stadt sollte viel mehr Radwege bauen.', 'c'], ['Zum Schluss möchte ich Sie beide noch etwas fragen.', 'a'],
      ['Ein Taxi ist für viele Menschen die einzige Möglichkeit.', 'b'], ['Kinder sollten sicher mit dem Rad fahren können.', 'c']]
      .map(([stem, key], i) => choice(`itm:b1:p1-h4-${23 + i}`, H4, 'tsk:b1:p1-h4', 'speaker_assignment', SPEAKERS, `${23 + i}. ${stem}`, key))
  ] });

/* ---------------- SCHREIBEN ---------------- */
const sTasks = [
  [1, 80, 'Sie sind letzte Woche in eine neue Wohnung umgezogen. Ihr Freund Tom konnte nicht beim Umzug helfen. Schreiben Sie Tom eine E-Mail (circa 80 Wörter).\n\n'
    + '– Beschreiben Sie: Wie ist die neue Wohnung?\n– Begründen Sie: Warum sind Sie umgezogen?\n– Machen Sie einen Vorschlag für ein Treffen.', ['describe', 'justify', 'propose'], 'du'],
  [2, 80, 'Sie haben im Online-Forum einer Zeitschrift einen Beitrag zum Thema „Homeoffice“ gelesen. Schreiben Sie Ihre Meinung (circa 80 Wörter).', ['opine', 'justify'], 'forum_neutral'],
  [3, 40, 'Ihr Deutschkurs findet am Montag statt. Sie können nicht kommen. Schreiben Sie Ihrer Kursleiterin, Frau Hansen. Entschuldigen Sie sich höflich und erklären Sie, warum Sie nicht kommen können (circa 40 Wörter).',
    ['apologise', 'inform'], 'Sie']
];
for (const [p, target, prompt, fns, register] of sTasks) {
  const stimuli = [{ role: 'prompt', asset: textAsset(`ast:p1-s${p}-prompt`, prompt), text: prompt }];
  if (p === 2) {
    const post = 'Lukas: Seit einem Jahr arbeite ich drei Tage pro Woche zu Hause. Ich spare Zeit und kann mich besser konzentrieren. Aber ich vermisse meine Kolleginnen und Kollegen. Wie sehen Sie das?';
    stimuli.push({ role: 'guestbook_post', asset: textAsset('ast:p1-s2-post', post), text: post, label: 'Online-Forum' });
  }
  const id = item({ id: `itm:b1:p1-s${p}`, module: 'schreiben', part: p, task: `tsk:b1:p1-s${p}`, interaction: 'text_response', stem: `Schreiben Teil ${p}`,
    response_spec: { type: 'text', target_words: target, min_words_target: Math.ceil(target / 2), editor: 'plain' }, indicators: { synthetic: true },
    keyspec: { kind: 'rubric', rubric_id: `rub:b1:schreiben:p${p}@1` } });
  task({ id: `tsk:b1:p1-s${p}`, module: 'schreiben', part: p, interaction: 'text_response', instructions: prompt, stimuli, items: [id],
    indicators: { functions: fns, function_count: fns.length, planning_demand: p === 2 ? 3 : 2, register, target_words: target, stimulus_words: stimuli.reduce((n, s) => n + countWords(s.text), 0) } });
}

/* ---------------- SPRECHEN ---------------- */
const spPartner = [
  'Partner: Hallo! Wir wollen doch für unsere Kollegin Eva eine Abschiedsfeier organisieren. Wann passt es dir?',
  'Partner: Gute Idee. Und wo sollen wir feiern – im Büro oder lieber in einem Restaurant?',
  'Partner: Okay. Wer kümmert sich um das Geschenk? Ich könnte die Einladung schreiben.'
].map((script, n) => toneAsset(`ast:p1-sp1-partner-${n + 1}`, 1, 740 + n * 40, `Sprechen Teil 1 Partner-Turn ${n + 1}`, script));
const sp1Card = 'Eine Kollegin, Eva, verlässt nach zehn Jahren die Firma. Sie möchten gemeinsam eine kleine Abschiedsfeier planen.\n\n– Wann feiern?\n– Wo feiern?\n– Essen und Getränke?\n– Geschenk?\n– Wer lädt ein?';
const sp1 = item({ id: 'itm:b1:p1-sp1', module: 'sprechen', part: 1, task: 'tsk:b1:p1-sp1', interaction: 'spoken_response', stem: 'Sprechen Teil 1',
  response_spec: { type: 'audio', max_seconds: 210, turns: spPartner.map((a, i) => ({ turn: `t${i + 1}`, prompt_asset: a, seconds: 30 })) },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p1@1' } });
task({ id: 'tsk:b1:p1-sp1', module: 'sprechen', part: 1, interaction: 'spoken_response',
  instructions: 'Teil 1: Etwas gemeinsam planen. Sprechen Sie mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge.',
  stimuli: [{ role: 'planning_card', asset: textAsset('ast:p1-sp1-card', sp1Card), text: sp1Card }, ...spPartner.map((a) => ({ role: 'partner_audio', asset: a }))], items: [sp1],
  indicators: { functions: ['propose', 'react', 'negotiate', 'plan'], function_count: 4, planning_demand: 2, interaction_demand: 4, prep_seconds: 900 } });

const SLIDES = (title) => [`${title}: Thema vorstellen`, 'Meine persönlichen Erfahrungen', 'Die Situation in meinem Heimatland', 'Vor- und Nachteile & meine Meinung', 'Abschluss & Dank'];
const t1Slides = SLIDES('Mit dem Fahrrad zur Arbeit?').map((s, i) => textAsset(`ast:p1-sp2-t1-slide${i + 1}`, `Thema 1 – Folie ${i + 1}: ${s}`));
const t2Slides = SLIDES('Sollen Kinder ein eigenes Smartphone haben?').map((s, i) => textAsset(`ast:p1-sp2-t2-slide${i + 1}`, `Thema 2 – Folie ${i + 1}: ${s}`));
const topic = item({ id: 'itm:b1:p1-sp2-topic', module: 'sprechen', part: 2, task: 'tsk:b1:p1-sp2', interaction: 'topic_choice', stem: 'Wählen Sie ein Thema (Thema 1 oder Thema 2).',
  options: [{ option_id: 't1', label: 'Thema 1: Mit dem Fahrrad zur Arbeit?' }, { option_id: 't2', label: 'Thema 2: Sollen Kinder ein eigenes Smartphone haben?' }],
  response_spec: { type: 'choice' }, indicators: { synthetic: true }, keyspec: { kind: 'none' } });
const sp2 = item({ id: 'itm:b1:p1-sp2', module: 'sprechen', part: 2, task: 'tsk:b1:p1-sp2', interaction: 'spoken_response', stem: 'Sprechen Teil 2',
  response_spec: { type: 'audio', max_seconds: 240, turns: [{ turn: 't1', seconds: 240 }] }, indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p2@1' } });
task({ id: 'tsk:b1:p1-sp2', module: 'sprechen', part: 2, interaction: 'spoken_response',
  instructions: 'Teil 2: Ein Thema präsentieren. Stellen Sie Ihr Thema anhand der fünf Folien vor: Thema, persönliche Erfahrungen, Situation in Ihrem Heimatland, Vor- und Nachteile mit Ihrer Meinung, Abschluss.',
  stimuli: [...t1Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 1' })), ...t2Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 2' }))], items: [topic, sp2],
  indicators: { functions: ['present', 'narrate', 'compare', 'opine', 'conclude'], function_count: 5, planning_demand: 3, interaction_demand: 0, prep_seconds: 900 } });

const partnerTalk = toneAsset('ast:p1-sp3-partner-talk', 2, 780, 'Sprechen Teil 3 Partner-Präsentation', 'Partnerin: Ich möchte heute über die Frage sprechen, ob Kinder ein eigenes Smartphone haben sollen. Meine Tochter ist elf und fragt mich jede Woche danach, weil fast alle Kinder in ihrer Klasse schon eins haben. Bisher hat sie nur ein einfaches Handy, mit dem sie mich anrufen kann, wenn der Bus nicht kommt. Ich selbst hatte mein erstes Handy erst mit achtzehn, das war damals ganz normal. In meinem Heimatland bekommen Kinder heute sehr früh ein Smartphone, oft schon in der Grundschule, und viele Eltern finden das praktisch. Es gibt natürlich Vorteile: Die Kinder sind erreichbar, sie können Fotos machen und mit ihren Freunden schreiben. Es gibt aber auch Nachteile. Viele Kinder schauen stundenlang Videos und schlafen schlecht, und manche werden in Gruppen-Chats geärgert. Meiner Meinung nach ist ein eigenes Smartphone ab zwölf Jahren sinnvoll, aber nur mit klaren Regeln, zum Beispiel kein Handy beim Essen und nachts nicht im Kinderzimmer. Zum Schluss möchte ich sagen: Wichtig ist, dass Eltern mit ihren Kindern darüber sprechen. Danke fürs Zuhören.');
const examinerQ = toneAsset('ast:p1-sp3-examiner-q', 1, 840, 'Sprechen Teil 3 Prüferfrage', 'Prüferin: Wie kommen Sie selbst zur Arbeit oder zum Kurs, und warum gerade so?');
/* OD-32: the partner presents the topic the learner did NOT choose; the examiner asks about the learner's own topic. */
const partnerTalk2 = toneAsset('ast:p1-sp3-partner-talk-t2', 2, 790, 'Sprechen Teil 3 Partner-Präsentation (Thema 1)', 'Partnerin: Heute spreche ich über die Frage: Mit dem Fahrrad zur Arbeit? Seit dem letzten Frühling fahre ich fast jeden Tag mit dem Rad ins Büro, ungefähr acht Kilometer. Vorher bin ich mit dem Auto gefahren und stand morgens oft im Stau. Jetzt brauche ich etwa dreißig Minuten und bin danach richtig wach. In meinem Heimatland fahren nur wenige Erwachsene mit dem Rad zur Arbeit, weil es kaum Radwege gibt und es im Sommer sehr heiß ist. Für das Fahrrad spricht viel: Man spart Geld für Benzin und Parkplätze, man bewegt sich und tut etwas für die Umwelt. Es gibt aber auch Probleme. Bei Regen und im Winter ist es unangenehm, und auf großen Straßen fühle ich mich manchmal nicht sicher. Außerdem braucht man im Büro eine Möglichkeit, sich umzuziehen. Meine Meinung: Für Strecken bis zehn Kilometer ist das Rad ideal, wenn die Stadt gute Radwege baut. Vielen Dank fürs Zuhören.');
const examinerQ2 = toneAsset('ast:p1-sp3-examiner-q-t2', 1, 850, 'Sprechen Teil 3 Prüferfrage (Thema 2)', 'Prüferin: Wie viel Zeit verbringen Sie selbst am Tag mit dem Smartphone?');
const sp3 = item({ id: 'itm:b1:p1-sp3', module: 'sprechen', part: 3, task: 'tsk:b1:p1-sp3', interaction: 'spoken_response', stem: 'Sprechen Teil 3',
  response_spec: { type: 'audio', max_seconds: 150, turns: [
    { turn: 't1', seconds: 60, prompt_asset: partnerTalk, prompt_asset_by_topic: { t1: partnerTalk, t2: partnerTalk2 } },
    { turn: 't2', seconds: 45, prompt_asset: examinerQ, prompt_asset_by_topic: { t1: examinerQ, t2: examinerQ2 } }] },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p3@1' } });
task({ id: 'tsk:b1:p1-sp3', module: 'sprechen', part: 3, interaction: 'spoken_response',
  instructions: 'Teil 3: Über ein Thema sprechen. Geben Sie nach der Präsentation Ihrer Gesprächspartnerin eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie danach die Frage der Prüferin.',
  stimuli: [{ role: 'partner_audio', asset: partnerTalk, forTopic: 't1' }, { role: 'partner_audio', asset: partnerTalk2, forTopic: 't2' },
    { role: 'examiner_audio', asset: examinerQ }, { role: 'examiner_audio', asset: examinerQ2 }], items: [sp3],
  indicators: { functions: ['react', 'ask', 'answer'], function_count: 3, planning_demand: 1, interaction_demand: 3, prep_seconds: 900 } });

/* ---------------- REVIEW: explanation + evidence per scored item (server only; released after submission) ---------------- */
const EXPLAIN = {
  'itm:b1:p1-l1-01': ['ast:p1-l1-text', 'Die Wohnung ist kleiner als meine alte', 'Mila schreibt, dass die neue Wohnung kleiner ist als die alte.'],
  'itm:b1:p1-l1-02': ['ast:p1-l1-text', 'Zur Arbeit fahre ich mit der Straßenbahn', 'Mila fährt jetzt mit der Straßenbahn; früher fuhr sie mit dem Auto.'],
  'itm:b1:p1-l1-03': ['ast:p1-l1-text', 'Sie hat mir gezeigt, wo man am Samstag auf dem Markt frisches Gemüse kaufen kann', 'Mila schreibt, dass Frau Okafor ihr gezeigt hat, wo man samstags auf dem Markt frisches Gemüse kaufen kann, deshalb ist die Aussage richtig.'],
  'itm:b1:p1-l1-04': ['ast:p1-l1-text', 'Leider kenne ich sonst noch kaum jemanden.', 'Außer ihrer Nachbarin kennt Mila noch kaum jemanden.'],
  'itm:b1:p1-l1-05': ['ast:p1-l1-text', 'Er beginnt erst im November, weil der Oktoberkurs schon voll war.', 'Nicht im Oktober: Weil dieser Kurs schon voll war, beginnt Milas Kochkurs erst im November.'],
  'itm:b1:p1-l1-06': ['ast:p1-l1-text', 'Du kannst bei mir übernachten', 'Mila bietet Jana an, bei ihr auf dem Sofa zu übernachten.'],
  'itm:b1:p1-l2-07': ['ast:p1-l2a-text', 'Ein Test im letzten Winter war so erfolgreich', 'Der Grund ist der erfolgreiche Test im Winter; von Wünschen der Leute steht nichts im Text.'],
  'itm:b1:p1-l2-08': ['ast:p1-l2a-text', 'Am Sonntag gibt es allerdings keine Beratung', 'Am Sonntag gibt es keine Beratung, ausleihen kann man aber an den Automaten.'],
  'itm:b1:p1-l2-09': ['ast:p1-l2a-text', 'ehrenamtliche Helfer lesen außerdem jeden Sonntag um 15 Uhr Geschichten für Kinder vor', 'Das Vorlesen am Sonntag machen ehrenamtliche Helfer, also Ehrenamtliche und keine Angestellten der Bibliothek.'],
  'itm:b1:p1-l2-10': ['ast:p1-l2b-text', 'Pfandbecher und Pfandboxen benutzen', 'Seit Juni gibt es auf dem Markt Pfandbecher und Pfandboxen.'],
  'itm:b1:p1-l2-11': ['ast:p1-l2b-text', 'Die Idee kam von einer Gruppe Schülerinnen', 'Die Idee hatte eine Gruppe Schülerinnen in einem Schulprojekt, nicht die Händler oder der Stadtrat.'],
  'itm:b1:p1-l2-12': ['ast:p1-l2b-text', 'Es gibt deutlich weniger Müll.', 'Nach drei Monaten gibt es deutlich weniger Müll; nur einige ältere Kunden finden das System kompliziert.'],
  'itm:b1:p1-l3-13': ['ast:p1-l3-ad-c', 'Deutsch sprechen in kleinen Gruppen, dienstags 18–20 Uhr', 'Im Sprachcafé (c) spricht man abends in kleinen Gruppen Deutsch.'],
  'itm:b1:p1-l3-14': ['ast:p1-l3-ad-b', 'Jeden Samstag reparieren Sie Ihr Rad selbst', 'In der Fahrradwerkstatt (b) reparieren Sie Ihr Rad selbst und bekommen Hilfe.'],
  'itm:b1:p1-l3-15': ['ast:p1-l3-ad-j', '2 Zimmer', 'Die einzige Wohnungsanzeige (j) hat nur zwei Zimmer, deshalb passt keine Anzeige: 0.'],
  'itm:b1:p1-l3-16': ['ast:p1-l3-ad-i', 'E-Mails schreiben und Videotelefonie', 'Der Computerkurs für Seniorinnen und Senioren (i) zeigt, wie Videotelefonie funktioniert.'],
  'itm:b1:p1-l3-17': ['ast:p1-l3-ad-d', 'Touren am Sonntag', 'Der Wanderclub (d) macht sonntags Touren und sucht neue Mitglieder.'],
  'itm:b1:p1-l3-18': ['ast:p1-l3-ad-g', 'Kurs am frühen Morgen, 7–8 Uhr, vor der Arbeit', 'Der Yogakurs (g) findet am frühen Morgen vor der Arbeit statt.'],
  'itm:b1:p1-l3-19': ['ast:p1-l3-ad-e', 'Nachhilfe Mathematik für Schüler der Klassen 5–10', 'Die Nachhilfe (e) deckt die Klassen 5 bis 10 ab, darin liegt auch die 7. Klasse Ihres Sohnes.'],
  'itm:b1:p1-l4-20': ['ast:p1-l4-c1', 'Ich finde ein Verbot übertrieben.', 'Mehmet findet ein Verbot übertrieben, weil man das Handy für Recherchen braucht.'],
  'itm:b1:p1-l4-21': ['ast:p1-l4-c2', 'also bitte verbieten', 'Clara möchte ein Verbot, weil Kinder ständig abgelenkt werden.'],
  'itm:b1:p1-l4-22': ['ast:p1-l4-c3', 'Verbote helfen selten.', 'Jonas glaubt nicht an Verbote; die Schule soll den sinnvollen Umgang mit dem Handy zeigen.'],
  'itm:b1:p1-l4-23': ['ast:p1-l4-c4', 'Ich bin dafür, dass die Geräte während der Schulzeit im Schrank bleiben.', 'Ilse möchte, dass die Handys während der Schulzeit im Schrank bleiben.'],
  'itm:b1:p1-l4-24': ['ast:p1-l4-c5', 'Ein totales Verbot lehne ich ab.', 'Tarek findet das Handy im Unterricht manchmal nützlich und lehnt ein totales Verbot ab.'],
  'itm:b1:p1-l4-25': ['ast:p1-l4-c6', 'bin ich froh, wenn das Handy weg ist', 'Paula ist froh ohne Handy, weil es dann in der Pause echte Gespräche gibt.'],
  'itm:b1:p1-l4-26': ['ast:p1-l4-c7', 'Deshalb bin ich gegen ein Verbot.', 'Benedikt ist gegen ein Verbot, weil Eltern ihre Kinder im Notfall erreichen müssen.'],
  'itm:b1:p1-l5-27': ['ast:p1-l5-text', 'Die Buchung erfolgt mindestens zwei Wochen vorher bei der Hausverwaltung.', 'Nach Regel 1 bucht man nicht spontan, sondern spätestens zwei Wochen vorher über die Hausverwaltung.'],
  'itm:b1:p1-l5-28': ['ast:p1-l5-text', 'Sie bekommen die Kaution zurück, wenn der Raum sauber und ohne Schäden übergeben wird.', 'Regel 2 nennt die Bedingung für die Rückzahlung: Wer den Raum sauber und ohne Schäden abgibt, erhält die Kaution wieder.'],
  'itm:b1:p1-l5-29': ['ast:p1-l5-text', 'Ab 22 Uhr ist Musik nur noch leise erlaubt.', 'Regel 3: Ab 22 Uhr darf die Musik nur leise sein; die Feier endet erst um Mitternacht.'],
  'itm:b1:p1-l5-30': ['ast:p1-l5-text', 'geben ihn am nächsten Morgen bis 10 Uhr zurück', 'Regel 4: Den Schlüssel gibt man am nächsten Morgen bis 10 Uhr zurück.'],
  'itm:b1:p1-h1-01x': ['ast:p1-h1-t1', 'Wollen wir stattdessen um halb zehn gehen?', 'Lea sagt nicht ab, sondern schlägt eine spätere Vorstellung um halb zehn vor.'],
  'itm:b1:p1-h1-02x': ['ast:p1-h1-t1', 'Ruf mich bitte bis sechs zurück.', 'Lea bittet Ben, sie bis sechs Uhr zurückzurufen.'],
  'itm:b1:p1-h1-03x': ['ast:p1-h1-t2', 'ist die Brücke an der Hafenstraße am Wochenende gesperrt', 'Die Brücke ist am Wochenende wegen Bauarbeiten gesperrt.'],
  'itm:b1:p1-h1-04x': ['ast:p1-h1-t2', 'Busse fahren normal.', 'Nur Autofahrer sollen über die Ringstraße fahren; die Busse fahren normal.'],
  'itm:b1:p1-h1-05x': ['ast:p1-h1-t3', 'nur heute gibt es', 'Der Rabatt gilt nur heute, nicht die ganze Woche.'],
  'itm:b1:p1-h1-06x': ['ast:p1-h1-t3', 'in der Sportabteilung im dritten Stock', 'Die Durchsage nennt für die Sportabteilung den dritten Stock, die anderen Stockwerke kommen nicht vor.'],
  'itm:b1:p1-h1-07x': ['ast:p1-h1-t4', 'Bitte rufen Sie uns an', 'Die Praxis bittet Frau Weber anzurufen, damit sie einen neuen Termin bekommt.'],
  'itm:b1:p1-h1-08x': ['ast:p1-h1-t4', 'Ihr Termin am Donnerstag muss leider ausfallen.', '„Muss leider ausfallen“ bedeutet, dass der Termin am Donnerstag nicht stattfindet.'],
  'itm:b1:p1-h1-09x': ['ast:p1-h1-t5', 'Morgen bleibt es im Norden trocken', 'Im Norden bleibt es trocken; Regen gibt es nur im Süden.'],
  'itm:b1:p1-h1-10x': ['ast:p1-h1-t5', 'Am Abend wird es überall deutlich kühler.', '„Deutlich kühler“ heißt in der Aufgabe „kälter“, das gilt für den Abend überall.'],
  'itm:b1:p1-h2-11': ['ast:p1-h2', 'Wir beginnen im Erdgeschoss', 'Die Führung beginnt im Erdgeschoss mit der Geschichte des Hafens.'],
  'itm:b1:p1-h2-12': ['ast:p1-h2', 'Die Führung dauert etwa neunzig Minuten.', 'Neunzig Minuten sind ungefähr anderthalb Stunden.'],
  'itm:b1:p1-h2-13': ['ast:p1-h2', 'Fotos sind erlaubt, aber bitte ohne Blitz.', 'Die Führerin erlaubt Fotos und verbietet nur den Blitz, darum ist Fotografieren ohne Blitz erlaubt.'],
  'itm:b1:p1-h2-14': ['ast:p1-h2', 'Um 12 Uhr machen wir eine Pause im Museumscafé.', 'Um 12 Uhr macht die Gruppe eine Pause im Museumscafé.'],
  'itm:b1:p1-h2-15': ['ast:p1-h2', 'Am Ende können Sie im Shop Postkarten kaufen.', 'Im Shop kann man Postkarten kaufen, keine Eintrittskarten.'],
  'itm:b1:p1-h3-16': ['ast:p1-h3', 'ich habe eine neue Stelle gefunden', 'Nora erzählt, dass sie eine neue Stelle gefunden hat, und „Stelle“ bedeutet hier „Arbeit“.'],
  'itm:b1:p1-h3-17': ['ast:p1-h3', 'das Café habe ich im Sommer verlassen', 'Nora hat früher im Café gearbeitet; jetzt arbeitet sie in einer Gärtnerei.'],
  'itm:b1:p1-h3-18': ['ast:p1-h3', 'arbeite ich nur vormittags', 'Nora arbeitet nur vormittags, weil sie nachmittags eine Weiterbildung macht.'],
  'itm:b1:p1-h3-19': ['ast:p1-h3', 'weil ich nachmittags noch eine Weiterbildung mache', 'Die Weiterbildung macht Nora am Nachmittag; Paul sagt nicht, dass er selbst eine Weiterbildung macht.'],
  'itm:b1:p1-h3-20': ['ast:p1-h3', 'Ich ziehe im Frühling um', 'Paul sagt, dass er im Frühling in eine größere Wohnung zieht.'],
  'itm:b1:p1-h3-21': ['ast:p1-h3', 'Am Sonntag besuche ich meine Eltern.', 'Nora hilft am Samstag; am Sonntag besucht sie ihre Eltern.'],
  'itm:b1:p1-h3-22': ['ast:p1-h3', 'danach lade ich dich zum Essen ein', 'Paul lädt Nora nach dem Umzug zum Essen ein.'],
  'itm:b1:p1-h4-23': ['ast:p1-h4', 'Denken Sie an Handwerker: Die müssen schweres Werkzeug mitnehmen – mit dem Fahrrad geht das einfach nicht.', 'Herr Lang sagt, dass Handwerker ihr Werkzeug nicht mit dem Fahrrad transportieren können.'],
  'itm:b1:p1-h4-24': ['ast:p1-h4', 'fahre schon lange bei jedem Wetter mit dem Fahrrad zu meiner Schule', 'Frau Demir ist Lehrerin und fährt schon lange mit dem Rad zur Schule.'],
  'itm:b1:p1-h4-25': ['ast:p1-h4', 'Wie sieht das bei Ihnen im Alltag aus?', 'Die Moderatorin fragt die Gäste nach ihrem Alltag.'],
  'itm:b1:p1-h4-26': ['ast:p1-h4', 'Viele können nicht mehr weit laufen und brauchen das Auto.', 'Herr Lang spricht über Seniorinnen und Senioren, die das Auto brauchen.'],
  'itm:b1:p1-h4-27': ['ast:p1-h4', 'Wir brauchen viel mehr sichere Radwege.', 'Frau Demir verlangt „viel mehr sichere Radwege“, das entspricht der Forderung nach mehr Radwegen in der Stadt.'],
  'itm:b1:p1-h4-28': ['ast:p1-h4', 'Eine letzte Frage noch an Sie beide', 'Die Moderatorin stellt beiden Gästen zum Schluss eine Frage.'],
  'itm:b1:p1-h4-29': ['ast:p1-h4', 'ist das Taxi oft die einzige Lösung', 'Herr Lang sagt, dass das Taxi für viele Menschen ohne Auto die einzige Lösung ist.'],
  'itm:b1:p1-h4-30': ['ast:p1-h4', 'Sie müssen ohne Gefahr mit dem Rad zur Schule fahren können.', 'Frau Demir möchte, dass Kinder sicher mit dem Rad fahren können.']
};
explain(EXPLAIN);

export const PRACTICE_FORM = finish({
  rel: PRACTICE_REL, label: 'Synthetische Übungsform P1 (Klarweg-Übung, kein Original)',
  releaseNote: 'SYNTHETIC PRACTICE CONTENT — original Klarweg texts; Hören as TEST AUDIO tones',
  hoerenInstructions: { 2: h2Instr }, timingOverrides: PRACTICE_TIMING
});
