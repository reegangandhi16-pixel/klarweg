/* SYNTHETIC B1 PRACTICE form P2: original, fictional, realistic B1-style texts written for Klarweg (no Goethe-Institut
   or other published exam material, no real people, brands or venues), built with the shared practice builder
   (tools/practice-lib.mjs: TEST AUDIO tones with server-only scripts, explanations and evidence released only after
   submission). Topics differ from P1. Registered via SYNTHETIC_FORMS in make-synthetic-form.mjs and byte-checked by
   check-public-boundary.mjs. Clearly synthetic practice: not an official exam, no official status. */
import { countWords } from '../schemas/content-model.mjs';
import { createPracticeBuilder, PRACTICE_TIMING } from './practice-lib.mjs';

export const PRACTICE_P2_REL = 'forms/synthetic/b1-synthetic-p2';
const FORM_ID = 'frm:b1:synthetic-p2@1';
const DATE = '2026-10-14';

const { textAsset, toneAsset, item, task, choice, explain, finish, RF, JN, abc } = createPracticeBuilder({ formId: FORM_ID, date: DATE });
const lesenInd = { inference_demand: 2, distractor_strength: 2, info_units: 7 };

/* ---------------- LESEN ---------------- */
const L1 = { m: 'lesen', p: 1 };
const l1Text = 'Hallo zusammen,\n\n'
  + 'vor einem Jahr habe ich mich endlich getraut: Ich singe jetzt im Chor „Stimmen am Fluss“ in Lindenbach. Am Anfang war ich sehr nervös, '
  + 'weil ich noch nie vor anderen Menschen gesungen hatte. Aber die Chorleiterin, Frau Brandt, hat mich sofort beruhigt. Sie sagt immer: '
  + '„Man muss keine Noten lesen können, man muss nur gut zuhören.“\n\n'
  + 'Wir proben jeden Mittwochabend im Gemeindehaus. Nach der Probe gehen viele noch zusammen etwas trinken – so habe ich in kurzer Zeit neue Freunde gefunden. '
  + 'Im Sommer hatten wir unser erstes Konzert im Stadtpark. Leider hat es den ganzen Nachmittag geregnet, deshalb kamen nur wenige Zuschauer. '
  + 'Trotzdem war es für mich ein wunderbarer Tag.\n\n'
  + 'Im Dezember singen wir in der Stadtkirche. Die Eintrittskarten sind kostenlos, aber man muss sie vorher in der Bücherei abholen. '
  + 'Wer Lust hat, kann auch einfach zu einer Probe kommen und mitsingen!\n\n'
  + 'Eure Selin';
task({ id: 'tsk:b1:p2-l1', module: 'lesen', part: 1, interaction: 'binary_choice',
  instructions: 'Lesen Sie den Text und die Aufgaben 1 bis 6. Wählen Sie: Sind die Aussagen richtig oder falsch?',
  stimuli: [{ role: 'text', asset: textAsset('ast:p2-l1-text', l1Text, 'Blog'), text: l1Text }], indicators: lesenInd,
  items: [
    choice('itm:b1:p2-l1-00', L1, 'tsk:b1:p2-l1', 'binary_choice', RF, 'Beispiel: Selin singt seit einem Jahr in einem Chor.', 'richtig', true),
    ...[['Selin hatte vorher schon oft vor Publikum gesungen.', 'falsch'], ['Im Chor muss man Noten lesen können.', 'falsch'],
      ['Der Chor probt einmal pro Woche.', 'richtig'], ['Selin hat im Chor neue Freunde gefunden.', 'richtig'],
      ['Zum Konzert im Sommer kamen sehr viele Zuschauer.', 'falsch'], ['Für das Konzert im Dezember braucht man eine Karte aus der Bücherei.', 'richtig']]
      .map(([stem, key], i) => choice(`itm:b1:p2-l1-0${i + 1}`, L1, 'tsk:b1:p2-l1', 'binary_choice', RF, `${i + 1}. ${stem}`, key))
  ] });

const L2 = { m: 'lesen', p: 2 };
const l2aText = 'Neue Buslinie zum Klinikum\n\nSeit dem 1. September fährt die neue Linie 14 vom Hauptbahnhof direkt zum Klinikum Nord. '
  + 'Bisher mussten Patientinnen, Patienten und Besucher am Marktplatz umsteigen. Die Busse fahren werktags alle 15 Minuten, am Wochenende alle 30 Minuten. '
  + 'Die Stadtwerke haben dafür drei neue Elektrobusse gekauft. Viele Beschäftigte des Klinikums freuen sich: Sie können jetzt auch nach der Spätschicht '
  + 'mit dem Bus nach Hause fahren, denn der letzte Bus fährt erst um 23.40 Uhr.';
const l2bText = 'Ein Garten auf dem Schuldach\n\nAuf dem Dach der Gesamtschule Ostend wachsen seit dem Frühjahr Tomaten, Kräuter und Erdbeeren. '
  + 'Die Idee hatte eine Biologielehrerin, die mit ihrer Klasse etwas über gesunde Ernährung lernen wollte. '
  + 'Das Geld für Erde und Pflanzen kam von einem Sommerfest, das die Eltern organisiert haben. Jeden Freitag arbeiten die Schülerinnen und Schüler zwei Stunden im Garten. '
  + 'In den Ferien gießen Nachbarn aus dem Viertel die Pflanzen. Das Gemüse wird in der Schulkantine verwendet.';
task({ id: 'tsk:b1:p2-l2a', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie den Text aus der Zeitung und die Aufgaben 7 bis 9. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p2-l2a-text', l2aText, 'aus einer Lokalzeitung (erfunden)'), text: l2aText, label: 'aus einer Lokalzeitung (erfunden)' }], indicators: lesenInd,
  items: [
    choice('itm:b1:p2-l2-00', L2, 'tsk:b1:p2-l2a', 'mcq_single', abc('fährt seit September.', 'fährt nur am Wochenende.', 'hält am Marktplatz.'), 'Beispiel: Die Linie 14 …', 'a', true),
    choice('itm:b1:p2-l2-07', L2, 'tsk:b1:p2-l2a', 'mcq_single', abc('zu Fuß gehen.', 'einmal umsteigen.', 'ein Taxi nehmen.'), '7. Früher mussten Fahrgäste auf dem Weg zum Klinikum …', 'b'),
    choice('itm:b1:p2-l2-08', L2, 'tsk:b1:p2-l2a', 'mcq_single', abc('alle 15 Minuten.', 'alle 30 Minuten.', 'gar nicht.'), '8. Am Samstag fährt der Bus …', 'b'),
    choice('itm:b1:p2-l2-09', L2, 'tsk:b1:p2-l2a', 'mcq_single', abc('können nach der Spätschicht den Bus nehmen.', 'bekommen kostenlose Fahrkarten.', 'haben die Buslinie geplant.'), '9. Die Beschäftigten des Klinikums …', 'a')
  ] });
task({ id: 'tsk:b1:p2-l2b', module: 'lesen', part: 2, interaction: 'mcq_single', instructions: 'Lesen Sie den Text aus der Zeitung und die Aufgaben 10 bis 12. Wählen Sie a, b oder c.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p2-l2b-text', l2bText, 'aus einer Lokalzeitung (erfunden)'), text: l2bText, label: 'aus einer Lokalzeitung (erfunden)' }], indicators: lesenInd,
  items: [
    choice('itm:b1:p2-l2-10', L2, 'tsk:b1:p2-l2b', 'mcq_single', abc('von den Eltern.', 'von einer Lehrerin.', 'von den Nachbarn.'), '10. Die Idee für den Garten kam …', 'b'),
    choice('itm:b1:p2-l2-11', L2, 'tsk:b1:p2-l2b', 'mcq_single', abc('kam von einem Sommerfest.', 'hat die Stadt bezahlt.', 'hat die Kantine gespendet.'), '11. Das Geld für den Garten …', 'a'),
    choice('itm:b1:p2-l2-12', L2, 'tsk:b1:p2-l2b', 'mcq_single', abc('ist der Garten geschlossen.', 'arbeiten die Schüler jeden Tag dort.', 'kümmern sich Nachbarn um die Pflanzen.'), '12. In den Ferien …', 'c')
  ] });

const L3 = { m: 'lesen', p: 3 };
const POOL = 'abcdefghij'.split('');
const ads = [
  'Klavierunterricht für Erwachsene – auch für Wiedereinsteiger, Termine nach Vereinbarung.',
  'Schwimmkurs für Erwachsene, die nie schwimmen gelernt haben – samstags im Hallenbad, kleine Gruppen.',
  'Kochabend „Küche der Welt“: Jeden Donnerstag kochen Teilnehmende Gerichte aus ihren Heimatländern und essen zusammen.',
  'Laufgruppe für Anfänger: dreimal pro Woche um 18 Uhr im Stadtpark, Treffpunkt am Brunnen, kostenlos.',
  'Hausaufgabenhilfe für Grundschulkinder, montags bis donnerstags von 14 bis 16 Uhr im Familienzentrum.',
  'Gebrauchte Kinderfahrräder günstig zu verkaufen – 16 und 20 Zoll, gut erhalten.',
  'Bewerbungstraining: Wir prüfen Ihren Lebenslauf und üben Vorstellungsgespräche – auch auf Englisch.',
  'Hundesitter gesucht: Wer geht mittags mit unserem ruhigen Labrador spazieren? Bezahlung nach Absprache.',
  'Nähkurs: Kleidung reparieren und ändern statt wegwerfen – Nähmaschinen sind vorhanden.',
  'Ferienwohnung an der Ostsee: 2 Zimmer, ruhige Lage, Haustiere leider nicht erlaubt.'
];
const POOL_OPTIONS = [...POOL.map((l) => ({ option_id: l, label: l })), { option_id: '0', label: '0 – keine passende Anzeige' }];
const situations = [
  ['Sie haben nie schwimmen gelernt und möchten das jetzt nachholen.', 'b'],
  ['Ihre Hose hat ein Loch, und Sie möchten lernen, sie selbst zu reparieren.', 'i'],
  ['Sie suchen für den Urlaub eine Ferienwohnung, in die Sie Ihren Hund mitnehmen können.', '0'],
  ['Sie haben bald ein Vorstellungsgespräch und möchten sich gut vorbereiten.', 'g'],
  ['Ihre Tochter geht in die 2. Klasse und braucht nachmittags Hilfe bei den Hausaufgaben.', 'e'],
  ['Sie möchten Menschen aus anderen Ländern kennenlernen und gern zusammen essen.', 'c'],
  ['Sie möchten mit dem Joggen anfangen, aber nicht allein.', 'd']
];
task({ id: 'tsk:b1:p2-l3', module: 'lesen', part: 3, interaction: 'matching_pool',
  instructions: 'Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Welche Anzeige passt zu welcher Situation? Jede Anzeige darf nur einmal gewählt werden. Für eine Situation gibt es keine passende Anzeige; wählen Sie dann 0.',
  stimuli: ads.map((t, i) => ({ role: 'ad', asset: textAsset(`ast:p2-l3-ad-${POOL[i]}`, t), text: t, label: POOL[i] })), indicators: { ...lesenInd, info_units: 10 },
  items: [
    choice('itm:b1:p2-l3-00', L3, 'tsk:b1:p2-l3', 'matching_pool', POOL_OPTIONS, 'Beispiel: Sie möchten als Erwachsener wieder Klavier spielen.', 'a', true),
    ...situations.map(([stem, key], i) => choice(`itm:b1:p2-l3-${13 + i}`, L3, 'tsk:b1:p2-l3', 'matching_pool', POOL_OPTIONS, `${13 + i}. ${stem}`, key))
  ] });

const L4 = { m: 'lesen', p: 4 };
const l4Topic = 'In einer Zeitschrift wird gefragt: Sollen Geschäfte auch am Sonntag öffnen dürfen?';
const comments = [
  ['Lena, 27', 'Ich arbeite unter der Woche bis 19 Uhr. Wenn die Läden auch sonntags offen wären, könnte ich in Ruhe einkaufen. Ich bin klar dafür.', 'ja'],
  ['Wolfgang, 61', 'Der Sonntag gehört der Familie. Ich finde, wir brauchen einen Tag, an dem sich nicht alles ums Kaufen dreht. Deshalb bin ich dagegen.', 'nein'],
  ['Aylin, 34', 'Als Verkäuferin arbeite ich schon sechs Tage pro Woche. Wenn Geschäfte am Sonntag öffnen, muss ich vielleicht auch noch sonntags arbeiten. Nein, danke!', 'nein'],
  ['Theo, 19', 'In vielen anderen Ländern ist das ganz normal. Ich würde mich freuen, wenn ich auch am Sonntag shoppen gehen könnte.', 'ja'],
  ['Martina, 45', 'Für kleine Geschäfte ist das ein Problem: Sie haben nicht genug Personal. Am Ende gewinnen nur die großen Ketten. Ich halte nichts davon.', 'nein'],
  ['Jakob, 38', 'Warum nicht? Wer sonntags arbeitet, bekommt mehr Geld, und niemand muss am Sonntag einkaufen gehen. Ich finde die Idee gut.', 'ja'],
  ['Edith, 72', 'Ich gehe sonntags gern spazieren, und die Stadt ist dann schön ruhig. Diese Ruhe möchte ich behalten.', 'nein'],
  ['Samir, 30', 'Ich bin Krankenpfleger und habe oft am Wochenende Dienst. Offene Geschäfte am Sonntag wären für Leute wie mich eine große Hilfe.', 'ja']
];
task({ id: 'tsk:b1:p2-l4', module: 'lesen', part: 4, interaction: 'binary_choice',
  instructions: `${l4Topic} Lesen Sie die Kommentare 20 bis 26. Ist die Person für die Öffnung am Sonntag? Wählen Sie Ja oder Nein.`,
  stimuli: comments.map(([who, text], i) => ({ role: 'text', asset: textAsset(`ast:p2-l4-c${i}`, `${who}: ${text}`), text: `${who}: ${text}`, label: who })), indicators: lesenInd,
  items: comments.map(([who, , key], i) => choice(`itm:b1:p2-l4-${i === 0 ? '00' : 19 + i}`, L4, 'tsk:b1:p2-l4', 'binary_choice', JN,
    i === 0 ? `Beispiel: ${who}` : `${19 + i}. ${who}`, key, i === 0)) });

const L5 = { m: 'lesen', p: 5 };
const l5Text = 'Teilnahmebedingungen der Volkshochschule Lindenbach\n\n'
  + '1. Anmeldung: Sie können sich online, telefonisch oder persönlich im Servicebüro anmelden. Ihre Anmeldung ist erst gültig, wenn Sie die Kursgebühr bezahlt haben.\n\n'
  + '2. Abmeldung: Bis sieben Tage vor Kursbeginn können Sie sich kostenlos abmelden. Danach müssen Sie die volle Gebühr bezahlen, außer jemand anderes übernimmt Ihren Platz.\n\n'
  + '3. Ermäßigung: Schülerinnen, Schüler und Studierende zahlen die Hälfte. Bitte zeigen Sie dafür bei der Anmeldung einen gültigen Ausweis.\n\n'
  + '4. Ausfall: Wenn eine Kursstunde ausfällt, informieren wir Sie per E-Mail. Die Stunde wird am Ende des Kurses nachgeholt.';
task({ id: 'tsk:b1:p2-l5', module: 'lesen', part: 5, interaction: 'mcq_single',
  instructions: 'Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie a, b oder c.',
  context: 'Sie möchten an der Volkshochschule einen Fotokurs besuchen und lesen die Teilnahmebedingungen.',
  stimuli: [{ role: 'text', asset: textAsset('ast:p2-l5-text', l5Text), text: l5Text }], indicators: lesenInd,
  items: [
    ['Die Anmeldung gilt, …', abc('sobald man das Formular abschickt.', 'wenn man die Gebühr bezahlt hat.', 'nach dem ersten Kurstag.'), 'b'],
    ['Wer sich drei Tage vor Kursbeginn abmeldet, …', abc('bekommt das ganze Geld zurück.', 'zahlt die Hälfte.', 'muss die volle Gebühr zahlen, wenn niemand den Platz übernimmt.'), 'c'],
    ['Studierende …', abc('zahlen nur die Hälfte.', 'müssen sich persönlich anmelden.', 'bekommen einen neuen Ausweis.'), 'a'],
    ['Eine ausgefallene Kursstunde …', abc('wird nicht ersetzt.', 'wird später nachgeholt.', 'kostet weniger.'), 'b']
  ].map(([stem, opts, key], i) => choice(`itm:b1:p2-l5-${27 + i}`, L5, 'tsk:b1:p2-l5', 'mcq_single', opts, `${27 + i}. ${stem}`, key)) });

/* ---------------- HÖREN (TEST AUDIO tones; the script each tone stands for is in script_de) ---------------- */
const hInd = (plays, details, speakers = 1) => ({ speech_rate_wpm: null, speaker_count: speakers, plays, relevant_details: details, distractor_details: 0 });
const H1 = { m: 'hoeren', p: 1 };
const h1Ex = toneAsset('ast:p2-h1-ex', 1.5, 440, 'Hören Teil 1 Beispiel', 'Durchsage am Flughafen: Der Flug nach Wien hat etwa vierzig Minuten Verspätung. Die neue Abflugzeit ist 15.20 Uhr.');
task({ id: 'tsk:b1:p2-h1-ex', module: 'hoeren', part: 1, interaction: 'audio_item_pairs',
  instructions: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Lesen Sie zuerst das Beispiel. (Übungsform: die Hörtexte werden als Prüftöne abgespielt.)',
  stimuli: [{ role: 'audio', asset: h1Ex }], indicators: hInd(1, 2), items: [
    choice('itm:b1:p2-h1-01', H1, 'tsk:b1:p2-h1-ex', 'binary_choice', RF, '01 Beispiel: Der Flug nach Wien startet später.', 'richtig', true),
    choice('itm:b1:p2-h1-02', H1, 'tsk:b1:p2-h1-ex', 'mcq_single', abc('um 14.40 Uhr.', 'um 15.20 Uhr.', 'um 16.00 Uhr.'), '02 Beispiel: Der Flug startet …', 'b', true)
  ] });
const h1Texts = [
  ['Nachricht auf der Mailbox: Hallo Frau Krüger, hier ist Tim aus dem Büro. Die Teambesprechung morgen findet nicht um neun, sondern erst um elf Uhr statt. Bringen Sie bitte die Zahlen vom letzten Monat mit.',
    ['Die Besprechung beginnt morgen früher als geplant.', 'falsch'], ['Frau Krüger soll …', abc('Tim zurückrufen.', 'die Zahlen vom letzten Monat mitbringen.', 'einen Raum reservieren.'), 'b']],
  ['Verkehrsfunk: Auf der A7 zwischen Nordstadt und Seeheim gibt es nach einem Unfall einen langen Stau. Die Polizei empfiehlt, über die Bundesstraße 3 zu fahren. Die Bahnstrecke ist nicht betroffen.',
    ['Auf der A7 gibt es einen Stau.', 'richtig'], ['Die Polizei empfiehlt, …', abc('zu Hause zu bleiben.', 'den Zug zu nehmen.', 'über die Bundesstraße 3 zu fahren.'), 'c']],
  ['Durchsage im Supermarkt: Liebe Kundinnen und Kunden, unser Markt schließt heute wegen einer Inventur bereits um 18 Uhr. Ab morgen sind wir wieder wie gewohnt bis 22 Uhr für Sie da.',
    ['Der Supermarkt ist heute bis 22 Uhr geöffnet.', 'falsch'], ['Der Markt schließt heute früher wegen …', abc('einer Inventur.', 'eines Feiertags.', 'eines Stromausfalls.'), 'a']],
  ['Nachricht von der Autowerkstatt: Guten Tag, Herr Yilmaz, hier ist die Werkstatt Becker. Ihr Auto ist fertig. Die Reparatur war etwas teurer, weil wir auch die Bremsen wechseln mussten. Sie können den Wagen heute bis 17 Uhr abholen.',
    ['Herr Yilmaz kann sein Auto heute abholen.', 'richtig'], ['Die Reparatur …', abc('kostet weniger als geplant.', 'war teurer, weil auch die Bremsen neu sind.', 'ist noch nicht fertig.'), 'b']],
  ['Radiotipp: Am Samstag findet auf dem Domplatz das Stadtfest statt. Es gibt Musik, Essen aus vielen Ländern und ein Programm für Kinder. Der Eintritt ist frei. Bei Regen wird das Fest auf Sonntag verschoben.',
    ['Für das Stadtfest muss man Eintritt bezahlen.', 'falsch'], ['Wenn es regnet, …', abc('fällt das Fest aus.', 'findet das Fest am Sonntag statt.', 'feiert man in der Stadthalle.'), 'b']]
];
h1Texts.forEach(([script, [rf, rfKey], [q, opts, qKey]], i) => {
  const t = i + 1;
  const a = toneAsset(`ast:p2-h1-t${t}`, 2, 440 + t * 60, `Hören Teil 1 Text ${t}`, script);
  task({ id: `tsk:b1:p2-h1-t${t}`, module: 'hoeren', part: 1, interaction: 'audio_item_pairs', instructions: `Text ${t}`,
    stimuli: [{ role: 'audio', asset: a }], indicators: hInd(2, 2), items: [
      choice(`itm:b1:p2-h1-${String(2 * t - 1).padStart(2, '0')}x`, H1, `tsk:b1:p2-h1-t${t}`, 'binary_choice', RF, `${2 * t - 1}. ${rf}`, rfKey),
      choice(`itm:b1:p2-h1-${String(2 * t).padStart(2, '0')}x`, H1, `tsk:b1:p2-h1-t${t}`, 'mcq_single', opts, `${2 * t}. ${q}`, qKey)
    ] });
});
const H2 = { m: 'hoeren', p: 2 };
const h2 = toneAsset('ast:p2-h2', 3, 520, 'Hören Teil 2', 'Führung durch die Bäckerei Sonnenkorn: Herzlich willkommen! Ich zeige Ihnen heute, wie unser Brot entsteht. '
  + 'Bitte ziehen Sie zuerst die weißen Mäntel und die Haarnetze an. Wir beginnen in der Backstube, wo die Arbeit schon um drei Uhr nachts anfängt. '
  + 'Fotografieren dürfen Sie gern, aber bitte fassen Sie die Maschinen nicht an. Die Führung dauert ungefähr eine Stunde. '
  + 'Zum Schluss dürfen Sie im Laden ein frisches Brötchen probieren.');
const h2Instr = toneAsset('ast:p2-h2-instr', 1, 330, 'Hören Teil 2 Anweisung', 'Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben.');
task({ id: 'tsk:b1:p2-h2', module: 'hoeren', part: 2, interaction: 'mcq_single', context: 'Sie nehmen an einer Führung durch eine Bäckerei teil.',
  instructions: 'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben (11 bis 15). Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
  stimuli: [{ role: 'audio', asset: h2 }], indicators: hInd(1, 5), items: [
    ['Zuerst müssen die Besucher …', abc('Schutzkleidung anziehen.', 'ein Formular ausfüllen.', 'ihre Taschen abgeben.'), 'a'],
    ['Die Arbeit in der Backstube beginnt …', abc('um sechs Uhr morgens.', 'um drei Uhr nachts.', 'am Nachmittag.'), 'b'],
    ['Die Besucher dürfen …', abc('die Maschinen ausprobieren.', 'keine Fotos machen.', 'fotografieren.'), 'c'],
    ['Die Führung dauert …', abc('etwa eine Stunde.', 'den ganzen Vormittag.', 'eine halbe Stunde.'), 'a'],
    ['Am Ende der Führung …', abc('kauft man Brot zum halben Preis.', 'kann man ein Brötchen probieren.', 'bekommt man ein Rezept.'), 'b']
  ].map(([stem, opts, key], i) => choice(`itm:b1:p2-h2-${11 + i}`, H2, 'tsk:b1:p2-h2', 'mcq_single', opts, `${11 + i}. ${stem}`, key)) });
const H3 = { m: 'hoeren', p: 3 };
const h3 = toneAsset('ast:p2-h3', 3, 600, 'Hören Teil 3', 'Ben: Lisa! Schön, dich zu sehen. Wie war dein Urlaub in Portugal?\n'
  + 'Lisa: Wunderbar, danke! Eigentlich wollte ich ja nach Spanien, aber die Flüge dorthin waren leider ausgebucht.\n'
  + 'Ben: Und? Hast du viel gesehen?\n'
  + 'Lisa: Ja, wir waren zwei Wochen in Lissabon und sind jeden Tag durch die Stadt gelaufen. Nur am Strand war ich kaum, das Wasser war mir zu kalt.\n'
  + 'Ben: Bei mir war es dieses Jahr ruhiger. Ich habe meinen Urlaub zu Hause verbracht und endlich mein Zimmer gestrichen.\n'
  + 'Lisa: Das klingt auch nicht schlecht. Sag mal, kommst du am Freitag zu Annas Geburtstag?\n'
  + 'Ben: Leider nicht, ich habe Spätdienst. Aber ich rufe sie am Morgen an.\n'
  + 'Lisa: Schade! Wenn du willst, bringe ich ihr dein Geschenk mit.\n'
  + 'Ben: Das wäre super, danke!');
task({ id: 'tsk:b1:p2-h3', module: 'hoeren', part: 3, interaction: 'binary_choice', context: 'Sie sind in einem Café und hören, wie sich zwei Freunde unterhalten.',
  instructions: 'Sie hören ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben (16 bis 22). Wählen Sie: Sind die Aussagen richtig oder falsch?',
  stimuli: [{ role: 'audio', asset: h3, speakers: ['spk:a', 'spk:b'] }], indicators: hInd(1, 7, 2), items: [
    ['Lisa war im Urlaub in Spanien.', 'falsch'], ['Lisa war zwei Wochen in Lissabon.', 'richtig'], ['Lisa war oft am Strand.', 'falsch'],
    ['Ben ist im Urlaub zu Hause geblieben.', 'richtig'], ['Ben hat in seinem Urlaub ein Zimmer gestrichen.', 'richtig'],
    ['Ben geht am Freitag zu Annas Geburtstag.', 'falsch'], ['Lisa bringt Anna das Geschenk von Ben.', 'richtig']
  ].map(([stem, key], i) => choice(`itm:b1:p2-h3-${16 + i}`, H3, 'tsk:b1:p2-h3', 'binary_choice', RF, `${16 + i}. ${stem}`, key)) });
const H4 = { m: 'hoeren', p: 4 };
const SPEAKERS = [{ option_id: 'a', label: 'Moderator' }, { option_id: 'b', label: 'Frau Hoffmann' }, { option_id: 'c', label: 'Herr Okoye' }];
const h4 = toneAsset('ast:p2-h4', 3, 660, 'Hören Teil 4', 'Moderator: Guten Abend! Heute geht es um die Frage, ob Kochen ein Schulfach werden soll. '
  + 'Bei mir sind Frau Hoffmann, sie ist Köchin, und Herr Okoye, Lehrer und Vater von zwei Kindern.\n'
  + 'Frau Hoffmann: In meiner Küche arbeiten junge Leute, die zum ersten Mal Kartoffeln schälen. Viele können nicht einmal ein einfaches Essen zubereiten.\n'
  + 'Herr Okoye: Die Idee ist gut, aber unsere Schüler haben schon jetzt so viele Stunden, dass kaum Zeit für ein neues Fach bleibt.\n'
  + 'Moderator: Und wie stellen Sie sich das praktisch vor?\n'
  + 'Frau Hoffmann: Man könnte das mit anderen Fächern verbinden. Wer ein Rezept für zwanzig Personen umrechnet, übt Mathematik, und wer einkauft, muss planen.\n'
  + 'Herr Okoye: Das klingt schön, aber an unserer Schule gibt es nicht einmal eine Küche. Wer soll die bezahlen?\n'
  + 'Moderator: Dazu hat uns eine Hörerin geschrieben. Ich lese ihre Frage gleich vor.\n'
  + 'Frau Hoffmann: Wer selbst kocht, isst gesünder und weniger Fertiggerichte. Das ist doch das Wichtigste.\n'
  + 'Herr Okoye: Ich finde, das ist zuerst die Aufgabe der Familie. Bei uns kochen die Kinder am Wochenende mit.');
task({ id: 'tsk:b1:p2-h4', module: 'hoeren', part: 4, interaction: 'speaker_assignment',
  instructions: 'Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben (23 bis 30). Wer sagt was?',
  stimuli: [{ role: 'audio', asset: h4, speakers: ['spk:m', 'spk:g1', 'spk:g2'] }], indicators: hInd(2, 8, 3), items: [
    choice('itm:b1:p2-h4-00', H4, 'tsk:b1:p2-h4', 'speaker_assignment', SPEAKERS, 'Beispiel: Heute sprechen wir über Kochen als Schulfach.', 'a', true),
    ...[['Viele Jugendliche können nicht kochen.', 'b'], ['Für ein neues Schulfach fehlt die Zeit.', 'c'],
      ['Wie könnte so ein Unterricht aussehen?', 'a'], ['Beim Kochen lernt man auch rechnen und planen.', 'b'],
      ['Viele Schulen haben gar keine Küche.', 'c'], ['Wir haben eine Frage von einer Hörerin.', 'a'],
      ['Kochen ist wichtig für die Gesundheit.', 'b'], ['Kochen lernen sollte man zuerst in der Familie.', 'c']]
      .map(([stem, key], i) => choice(`itm:b1:p2-h4-${23 + i}`, H4, 'tsk:b1:p2-h4', 'speaker_assignment', SPEAKERS, `${23 + i}. ${stem}`, key))
  ] });

/* ---------------- SCHREIBEN ---------------- */
const sTasks = [
  [1, 80, 'Sie waren am Wochenende auf einem Stadtfest. Ihre Freundin Mara war krank und konnte nicht mitkommen. Schreiben Sie Mara eine E-Mail (circa 80 Wörter).\n\n'
    + '– Beschreiben Sie: Was haben Sie auf dem Fest erlebt?\n– Begründen Sie: Was hat Ihnen besonders gut gefallen?\n– Machen Sie einen Vorschlag für ein gemeinsames Treffen.', ['describe', 'justify', 'propose'], 'du'],
  [2, 80, 'Sie haben in einer Fernsehsendung eine Diskussion zum Thema „Lernen im Internet“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).', ['opine', 'justify'], 'forum_neutral'],
  [3, 40, 'Ihr Nachbar, Herr Petersen, hat Sie zu seiner Geburtstagsfeier am Samstag eingeladen. Sie können leider nicht kommen. Schreiben Sie Herrn Petersen. Bedanken Sie sich für die Einladung und erklären Sie höflich, warum Sie nicht kommen können (circa 40 Wörter).',
    ['apologise', 'inform'], 'Sie']
];
for (const [p, target, prompt, fns, register] of sTasks) {
  const stimuli = [{ role: 'prompt', asset: textAsset(`ast:p2-s${p}-prompt`, prompt), text: prompt }];
  if (p === 2) {
    const post = 'Daniel: Mein Sprachkurs findet seit einem halben Jahr nur noch online statt. Ich spare den Weg, aber mir fehlt der Kontakt zu den anderen Teilnehmern. Wie sehen Sie das?';
    stimuli.push({ role: 'guestbook_post', asset: textAsset('ast:p2-s2-post', post), text: post, label: 'Online-Gästebuch' });
  }
  const id = item({ id: `itm:b1:p2-s${p}`, module: 'schreiben', part: p, task: `tsk:b1:p2-s${p}`, interaction: 'text_response', stem: `Schreiben Teil ${p}`,
    response_spec: { type: 'text', target_words: target, min_words_target: Math.ceil(target / 2), editor: 'plain' }, indicators: { synthetic: true },
    keyspec: { kind: 'rubric', rubric_id: `rub:b1:schreiben:p${p}@1` } });
  task({ id: `tsk:b1:p2-s${p}`, module: 'schreiben', part: p, interaction: 'text_response', instructions: prompt, stimuli, items: [id],
    indicators: { functions: fns, function_count: fns.length, planning_demand: p === 2 ? 3 : 2, register, target_words: target, stimulus_words: stimuli.reduce((n, s) => n + countWords(s.text), 0) } });
}

/* ---------------- SPRECHEN ---------------- */
const spPartner = [
  'Partner: Hallo! Wir sollen doch den Ausflug für unseren Deutschkurs planen. Wohin könnten wir fahren?',
  'Partner: Das klingt gut. Und wie kommen wir dorthin – mit dem Zug oder mit dem Bus?',
  'Partner: Einverstanden. Sollen wir ein Picknick mitnehmen oder lieber in ein Restaurant gehen?'
].map((script, n) => toneAsset(`ast:p2-sp1-partner-${n + 1}`, 1, 740 + n * 40, `Sprechen Teil 1 Partner-Turn ${n + 1}`, script));
const sp1Card = 'Ihr Deutschkurs möchte zum Kursende einen gemeinsamen Ausflug machen. Sie planen den Ausflug zusammen.\n\n– Wohin fahren?\n– Wann?\n– Wie hinkommen?\n– Essen und Trinken?\n– Was kostet es?';
const sp1 = item({ id: 'itm:b1:p2-sp1', module: 'sprechen', part: 1, task: 'tsk:b1:p2-sp1', interaction: 'spoken_response', stem: 'Sprechen Teil 1',
  response_spec: { type: 'audio', max_seconds: 210, turns: spPartner.map((a, i) => ({ turn: `t${i + 1}`, prompt_asset: a, seconds: 30 })) },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p1@1' } });
task({ id: 'tsk:b1:p2-sp1', module: 'sprechen', part: 1, interaction: 'spoken_response',
  instructions: 'Teil 1: Etwas gemeinsam planen. Sprechen Sie mit Ihrer Gesprächspartnerin oder Ihrem Gesprächspartner. Machen Sie Vorschläge und reagieren Sie auf die Vorschläge.',
  stimuli: [{ role: 'planning_card', asset: textAsset('ast:p2-sp1-card', sp1Card), text: sp1Card }, ...spPartner.map((a) => ({ role: 'partner_audio', asset: a }))], items: [sp1],
  indicators: { functions: ['propose', 'react', 'negotiate', 'plan'], function_count: 4, planning_demand: 2, interaction_demand: 4, prep_seconds: 900 } });

const SLIDES = (title) => [`${title}: Thema vorstellen`, 'Meine persönlichen Erfahrungen', 'Die Situation in meinem Heimatland', 'Vor- und Nachteile & meine Meinung', 'Abschluss & Dank'];
const t1Slides = SLIDES('Ehrenamtlich arbeiten – eine gute Idee?').map((s, i) => textAsset(`ast:p2-sp2-t1-slide${i + 1}`, `Thema 1 – Folie ${i + 1}: ${s}`));
const t2Slides = SLIDES('Haustiere in der Stadtwohnung?').map((s, i) => textAsset(`ast:p2-sp2-t2-slide${i + 1}`, `Thema 2 – Folie ${i + 1}: ${s}`));
const topic = item({ id: 'itm:b1:p2-sp2-topic', module: 'sprechen', part: 2, task: 'tsk:b1:p2-sp2', interaction: 'topic_choice', stem: 'Wählen Sie ein Thema (Thema 1 oder Thema 2).',
  options: [{ option_id: 't1', label: 'Thema 1: Ehrenamtlich arbeiten – eine gute Idee?' }, { option_id: 't2', label: 'Thema 2: Haustiere in der Stadtwohnung?' }],
  response_spec: { type: 'choice' }, indicators: { synthetic: true }, keyspec: { kind: 'none' } });
const sp2 = item({ id: 'itm:b1:p2-sp2', module: 'sprechen', part: 2, task: 'tsk:b1:p2-sp2', interaction: 'spoken_response', stem: 'Sprechen Teil 2',
  response_spec: { type: 'audio', max_seconds: 240, turns: [{ turn: 't1', seconds: 240 }] }, indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p2@1' } });
task({ id: 'tsk:b1:p2-sp2', module: 'sprechen', part: 2, interaction: 'spoken_response',
  instructions: 'Teil 2: Ein Thema präsentieren. Stellen Sie Ihr Thema anhand der fünf Folien vor: Thema, persönliche Erfahrungen, Situation in Ihrem Heimatland, Vor- und Nachteile mit Ihrer Meinung, Abschluss.',
  stimuli: [...t1Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 1' })), ...t2Slides.map((a) => ({ role: 'slide', asset: a, label: 'Thema 2' }))], items: [topic, sp2],
  indicators: { functions: ['present', 'narrate', 'compare', 'opine', 'conclude'], function_count: 5, planning_demand: 3, interaction_demand: 0, prep_seconds: 900 } });

const partnerTalk = toneAsset('ast:p2-sp3-partner-talk', 2, 780, 'Sprechen Teil 3 Partner-Präsentation', 'Partner präsentiert das Thema „Haustiere in der Stadtwohnung?“: Er meint, ein Hund braucht viel Platz und Zeit, eine Katze passt besser in eine kleine Wohnung.');
const examinerQ = toneAsset('ast:p2-sp3-examiner-q', 1, 840, 'Sprechen Teil 3 Prüferfrage', 'Prüferin: Sie haben gerade über Ihr Thema gesprochen. Welcher Punkt ist für Sie persönlich am wichtigsten, und warum?');
const sp3 = item({ id: 'itm:b1:p2-sp3', module: 'sprechen', part: 3, task: 'tsk:b1:p2-sp3', interaction: 'spoken_response', stem: 'Sprechen Teil 3',
  response_spec: { type: 'audio', max_seconds: 150, turns: [{ turn: 't1', seconds: 60, prompt_asset: partnerTalk }, { turn: 't2', seconds: 45, prompt_asset: examinerQ }] },
  indicators: { synthetic: true }, keyspec: { kind: 'rubric', rubric_id: 'rub:b1:sprechen:p3@1' } });
task({ id: 'tsk:b1:p2-sp3', module: 'sprechen', part: 3, interaction: 'spoken_response',
  instructions: 'Teil 3: Über ein Thema sprechen. Geben Sie nach der Präsentation Ihres Gesprächspartners eine Rückmeldung und stellen Sie eine Frage. Beantworten Sie danach die Frage der Prüferin.',
  stimuli: [{ role: 'partner_audio', asset: partnerTalk }, { role: 'examiner_audio', asset: examinerQ }], items: [sp3],
  indicators: { functions: ['react', 'ask', 'answer'], function_count: 3, planning_demand: 1, interaction_demand: 3, prep_seconds: 900 } });

/* ---------------- REVIEW: explanation + evidence per scored item (server only; released after submission) ---------------- */
explain({
  'itm:b1:p2-l1-01': ['ast:p2-l1-text', 'weil ich noch nie vor anderen Menschen gesungen hatte', 'Selin war nervös, weil sie noch nie vor anderen Menschen gesungen hatte.'],
  'itm:b1:p2-l1-02': ['ast:p2-l1-text', 'Man muss keine Noten lesen können', 'Die Chorleiterin betont das Gegenteil: Wichtig ist gutes Zuhören, Notenlesen ist keine Bedingung.'],
  'itm:b1:p2-l1-03': ['ast:p2-l1-text', 'Wir proben jeden Mittwochabend im Gemeindehaus.', 'Der Chor probt jeden Mittwochabend, also einmal pro Woche.'],
  'itm:b1:p2-l1-04': ['ast:p2-l1-text', 'so habe ich in kurzer Zeit neue Freunde gefunden', 'Nach den Proben trifft sich die Gruppe, so hat Selin schnell Freunde gefunden.'],
  'itm:b1:p2-l1-05': ['ast:p2-l1-text', 'deshalb kamen nur wenige Zuschauer', 'Wegen des Regens kamen nur wenige Zuschauer zum Sommerkonzert.'],
  'itm:b1:p2-l1-06': ['ast:p2-l1-text', 'man muss sie vorher in der Bücherei abholen', 'Die kostenlosen Karten für Dezember holt man vorher in der Bücherei ab.'],
  'itm:b1:p2-l2-07': ['ast:p2-l2a-text', 'Bisher mussten Patientinnen, Patienten und Besucher am Marktplatz umsteigen.', '„Am Marktplatz umsteigen“ bedeutet, dass man früher einmal den Bus wechseln musste.'],
  'itm:b1:p2-l2-08': ['ast:p2-l2a-text', 'am Wochenende alle 30 Minuten', 'Samstag ist Wochenende: Dann fährt der Bus alle 30 Minuten.'],
  'itm:b1:p2-l2-09': ['ast:p2-l2a-text', 'nach der Spätschicht', 'Der letzte Bus fährt erst um 23.40 Uhr, deshalb passt er auch nach der Spätschicht.'],
  'itm:b1:p2-l2-10': ['ast:p2-l2b-text', 'Die Idee hatte eine Biologielehrerin', 'Die Idee hatte eine Biologielehrerin; die Eltern haben nur das Sommerfest organisiert.'],
  'itm:b1:p2-l2-11': ['ast:p2-l2b-text', 'Das Geld für Erde und Pflanzen kam von einem Sommerfest', 'Das Geld kam von einem Sommerfest, das die Eltern organisiert haben.'],
  'itm:b1:p2-l2-12': ['ast:p2-l2b-text', 'In den Ferien gießen Nachbarn aus dem Viertel die Pflanzen.', 'Wenn Nachbarn die Pflanzen gießen, kümmern sie sich in den Ferien um den Garten.'],
  'itm:b1:p2-l3-13': ['ast:p2-l3-ad-b', 'die nie schwimmen gelernt haben', 'Anzeige b richtet sich genau an Erwachsene ohne Schwimmkenntnisse, die es jetzt lernen wollen.'],
  'itm:b1:p2-l3-14': ['ast:p2-l3-ad-i', 'Kleidung reparieren und ändern statt wegwerfen', 'Im Nähkurs (i) lernt man, Kleidung selbst zu reparieren.'],
  'itm:b1:p2-l3-15': ['ast:p2-l3-ad-j', 'Haustiere leider nicht erlaubt', 'In der einzigen Ferienwohnung (j) sind Haustiere nicht erlaubt, deshalb passt keine Anzeige: 0.'],
  'itm:b1:p2-l3-16': ['ast:p2-l3-ad-g', 'üben Vorstellungsgespräche', 'Im Bewerbungstraining (g) wird das Vorstellungsgespräch geübt, das ist die beste Vorbereitung darauf.'],
  'itm:b1:p2-l3-17': ['ast:p2-l3-ad-e', 'Hausaufgabenhilfe für Grundschulkinder', 'Die Hausaufgabenhilfe (e) ist nachmittags und für Grundschulkinder, also auch für die 2. Klasse.'],
  'itm:b1:p2-l3-18': ['ast:p2-l3-ad-c', 'kochen Teilnehmende Gerichte aus ihren Heimatländern und essen zusammen', 'Beim Kochabend (c) kochen Menschen aus vielen Ländern und essen zusammen.'],
  'itm:b1:p2-l3-19': ['ast:p2-l3-ad-d', 'Laufgruppe für Anfänger', 'Die Laufgruppe (d) ist für Anfänger, man läuft dort zusammen.'],
  'itm:b1:p2-l4-20': ['ast:p2-l4-c1', 'Deshalb bin ich dagegen.', 'Wolfgang möchte den Sonntag für die Familie und ist dagegen.'],
  'itm:b1:p2-l4-21': ['ast:p2-l4-c2', 'Nein, danke!', 'Aylin fürchtet, dass sie dann auch sonntags arbeiten muss.'],
  'itm:b1:p2-l4-22': ['ast:p2-l4-c3', 'Ich würde mich freuen, wenn ich auch am Sonntag shoppen gehen könnte.', 'Theo würde gern auch sonntags einkaufen gehen.'],
  'itm:b1:p2-l4-23': ['ast:p2-l4-c4', 'Ich halte nichts davon.', 'Martina glaubt, dass nur große Ketten davon profitieren, und ist dagegen.'],
  'itm:b1:p2-l4-24': ['ast:p2-l4-c5', 'Ich finde die Idee gut.', 'Jakob findet die Idee gut, weil Sonntagsarbeit besser bezahlt wird.'],
  'itm:b1:p2-l4-25': ['ast:p2-l4-c6', 'Diese Ruhe möchte ich behalten.', 'Edith genießt die stille Stadt beim Sonntagsspaziergang und will das nicht verlieren, sie ist also dagegen.'],
  'itm:b1:p2-l4-26': ['ast:p2-l4-c7', 'wären für Leute wie mich eine große Hilfe', 'Samir arbeitet oft am Wochenende; offene Geschäfte am Sonntag würden ihm helfen.'],
  'itm:b1:p2-l5-27': ['ast:p2-l5-text', 'Ihre Anmeldung ist erst gültig, wenn Sie die Kursgebühr bezahlt haben.', 'Regel 1: Die Anmeldung gilt erst, wenn die Gebühr bezahlt ist.'],
  'itm:b1:p2-l5-28': ['ast:p2-l5-text', 'Danach müssen Sie die volle Gebühr bezahlen, außer jemand anderes übernimmt Ihren Platz.', 'Regel 2: Kostenlos abmelden kann man nur bis sieben Tage vorher; danach zahlt man die volle Gebühr, außer jemand übernimmt den Platz.'],
  'itm:b1:p2-l5-29': ['ast:p2-l5-text', 'Schülerinnen, Schüler und Studierende zahlen die Hälfte.', 'Regel 3 gibt Studierenden, wie Schülern, eine Ermäßigung von fünfzig Prozent.'],
  'itm:b1:p2-l5-30': ['ast:p2-l5-text', 'Die Stunde wird am Ende des Kurses nachgeholt.', 'Nach Regel 4 fällt eine Stunde nicht einfach weg, sondern kommt als Ersatztermin am Kursende dazu.'],
  'itm:b1:p2-h1-01x': ['ast:p2-h1-t1', 'nicht um neun, sondern erst um elf Uhr', 'Die Besprechung beginnt später, um elf statt um neun Uhr.'],
  'itm:b1:p2-h1-02x': ['ast:p2-h1-t1', 'Bringen Sie bitte die Zahlen vom letzten Monat mit.', 'Tim bittet Frau Krüger, die Zahlen vom letzten Monat mitzubringen.'],
  'itm:b1:p2-h1-03x': ['ast:p2-h1-t2', 'gibt es nach einem Unfall einen langen Stau', 'Der Verkehrsfunk meldet nach einem Unfall einen langen Stau auf der A7, die Aussage stimmt also.'],
  'itm:b1:p2-h1-04x': ['ast:p2-h1-t2', 'Die Polizei empfiehlt, über die Bundesstraße 3 zu fahren.', 'Die Polizei empfiehlt die Bundesstraße 3; vom Zug ist keine Rede.'],
  'itm:b1:p2-h1-05x': ['ast:p2-h1-t3', 'schließt heute wegen einer Inventur bereits um 18 Uhr', 'Heute schließt der Markt schon um 18 Uhr; bis 22 Uhr ist er erst ab morgen wieder offen.'],
  'itm:b1:p2-h1-06x': ['ast:p2-h1-t3', 'wegen einer Inventur', 'Der Grund für die frühe Schließung ist eine Inventur.'],
  'itm:b1:p2-h1-07x': ['ast:p2-h1-t4', 'Sie können den Wagen heute bis 17 Uhr abholen.', 'Das Auto ist fertig und kann heute bis 17 Uhr abgeholt werden.'],
  'itm:b1:p2-h1-08x': ['ast:p2-h1-t4', 'weil wir auch die Bremsen wechseln mussten', 'Die Reparatur war teurer, weil auch die Bremsen gewechselt wurden.'],
  'itm:b1:p2-h1-09x': ['ast:p2-h1-t5', 'Der Eintritt ist frei.', 'Der Radiotipp sagt, dass der Eintritt frei ist, man muss also nichts bezahlen.'],
  'itm:b1:p2-h1-10x': ['ast:p2-h1-t5', 'Bei Regen wird das Fest auf Sonntag verschoben.', '„Verschoben“ heißt, dass das Fest bei Regen nicht ausfällt, sondern einen Tag später stattfindet.'],
  'itm:b1:p2-h2-11': ['ast:p2-h2', 'Bitte ziehen Sie zuerst die weißen Mäntel und die Haarnetze an.', 'Weiße Mäntel und Haarnetze sind Schutzkleidung, und die ziehen die Besucher als Erstes an.'],
  'itm:b1:p2-h2-12': ['ast:p2-h2', 'wo die Arbeit schon um drei Uhr nachts anfängt', 'Der Führer nennt drei Uhr nachts als Arbeitsbeginn, nicht sechs Uhr morgens oder den Nachmittag.'],
  'itm:b1:p2-h2-13': ['ast:p2-h2', 'Fotografieren dürfen Sie gern', 'Fotos sind erlaubt; nur die Maschinen darf man nicht anfassen.'],
  'itm:b1:p2-h2-14': ['ast:p2-h2', 'Die Führung dauert ungefähr eine Stunde.', '„Ungefähr eine Stunde“ in der Führung entspricht „etwa eine Stunde“ in der Aufgabe.'],
  'itm:b1:p2-h2-15': ['ast:p2-h2', 'im Laden ein frisches Brötchen probieren', 'Am Ende darf man im Laden ein Brötchen probieren.'],
  'itm:b1:p2-h3-16': ['ast:p2-h3', 'die Flüge dorthin waren leider ausgebucht', 'Lisa wollte nach Spanien, ist aber nach Portugal gefahren.'],
  'itm:b1:p2-h3-17': ['ast:p2-h3', 'wir waren zwei Wochen in Lissabon', 'Lisa berichtet, dass sie zwei Wochen lang in Lissabon war und jeden Tag durch die Stadt gelaufen ist.'],
  'itm:b1:p2-h3-18': ['ast:p2-h3', 'Nur am Strand war ich kaum', 'Lisa war kaum am Strand, weil ihr das Wasser zu kalt war.'],
  'itm:b1:p2-h3-19': ['ast:p2-h3', 'Ich habe meinen Urlaub zu Hause verbracht', 'Ben ist nicht weggefahren, sondern hat die freien Tage daheim verbracht und sein Zimmer gestrichen.'],
  'itm:b1:p2-h3-20': ['ast:p2-h3', 'endlich mein Zimmer gestrichen', 'Ben hat im Urlaub sein Zimmer gestrichen.'],
  'itm:b1:p2-h3-21': ['ast:p2-h3', 'Leider nicht, ich habe Spätdienst.', 'Ben hat am Freitag Spätdienst und kommt nicht zur Feier.'],
  'itm:b1:p2-h3-22': ['ast:p2-h3', 'bringe ich ihr dein Geschenk mit', 'Lisa bietet an, Anna das Geschenk von Ben mitzubringen.'],
  'itm:b1:p2-h4-23': ['ast:p2-h4', 'Viele können nicht einmal ein einfaches Essen zubereiten.', 'Frau Hoffmann erlebt junge Leute, die nicht einmal einfach kochen können.'],
  'itm:b1:p2-h4-24': ['ast:p2-h4', 'dass kaum Zeit für ein neues Fach bleibt', 'Herr Okoye sagt, dass die Schüler schon zu viele Stunden haben.'],
  'itm:b1:p2-h4-25': ['ast:p2-h4', 'Und wie stellen Sie sich das praktisch vor?', 'Der Moderator fragt, wie der Unterricht praktisch aussehen soll.'],
  'itm:b1:p2-h4-26': ['ast:p2-h4', 'Wer ein Rezept für zwanzig Personen umrechnet, übt Mathematik, und wer einkauft, muss planen.', 'Frau Hoffmann verbindet Kochen mit Mathematik und Planen.'],
  'itm:b1:p2-h4-27': ['ast:p2-h4', 'an unserer Schule gibt es nicht einmal eine Küche', 'Herr Okoye spricht von seiner eigenen Schule ohne Küche und fragt, wer eine bezahlen soll.'],
  'itm:b1:p2-h4-28': ['ast:p2-h4', 'Dazu hat uns eine Hörerin geschrieben.', 'Der Moderator leitet zur Zuschrift einer Hörerin über und will ihre Frage vorlesen.'],
  'itm:b1:p2-h4-29': ['ast:p2-h4', 'Wer selbst kocht, isst gesünder und weniger Fertiggerichte.', 'Frau Hoffmann betont, dass Selberkochen gesünder ist.'],
  'itm:b1:p2-h4-30': ['ast:p2-h4', 'das ist zuerst die Aufgabe der Familie', 'Herr Okoye sieht das Kochenlernen zuerst als Aufgabe der Familie.']
});

export const PRACTICE_FORM_P2 = finish({
  rel: PRACTICE_P2_REL, label: 'Synthetische Übungsform P2 (Klarweg-Übung, kein Original)',
  releaseNote: 'SYNTHETIC PRACTICE CONTENT — original Klarweg texts; Hören as TEST AUDIO tones',
  hoerenInstructions: { 2: h2Instr }, timingOverrides: PRACTICE_TIMING
});
