/* SYNTHETIC B1 PRACTICE form P14: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P14 = buildPracticeForm({
  n: 14, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Liebe Fatou,\n\n'
        + 'jetzt bin ich schon sechs Monate in Deutschland! In meiner Heimat habe ich als Krankenschwester gearbeitet, aber hier muss mein Abschluss erst anerkannt werden. '
        + 'Dafür brauche ich ein Sprachzertifikat auf B2-Niveau. Im Moment besuche ich einen Deutschkurs am Vormittag, und nachmittags arbeite ich als Pflegehelferin in einem Seniorenheim.\n\n'
        + 'Die Arbeit gefällt mir, auch wenn ich weniger Verantwortung habe als früher. Die Bewohnerinnen und Bewohner sind sehr geduldig mit meinem Deutsch, '
        + 'und eine alte Dame bringt mir sogar Lieder aus ihrer Jugend bei. Schwierig finde ich nur die vielen Dokumentationen am Computer.\n\n'
        + 'Wenn alles klappt, mache ich im Mai die Prüfung. Danach kann ich hoffentlich wieder als Pflegefachkraft arbeiten. Drück mir die Daumen!\n\n'
        + 'Deine Amira',
      example: ['Amira lebt seit einem halben Jahr in Deutschland.', 'richtig'],
      items: [
        ['Amira darf in Deutschland sofort als Krankenschwester arbeiten.', 'falsch', 'hier muss mein Abschluss erst anerkannt werden', 'Bevor Amira wieder als Krankenschwester arbeiten darf, muss ihr Abschluss anerkannt werden.'],
        ['Für die Anerkennung braucht Amira ein Sprachzertifikat.', 'richtig', 'Dafür brauche ich ein Sprachzertifikat auf B2-Niveau.', 'Amira braucht ein Zertifikat auf B2-Niveau.'],
        ['Amira lernt am Abend Deutsch.', 'falsch', 'besuche ich einen Deutschkurs am Vormittag', 'Amira besucht den Kurs am Vormittag.'],
        ['In ihrer jetzigen Arbeit hat Amira mehr Verantwortung als früher.', 'falsch', 'auch wenn ich weniger Verantwortung habe als früher', 'Als Pflegehelferin trägt Amira weniger Verantwortung als früher in ihrer Heimat.'],
        ['Eine Bewohnerin bringt Amira alte Lieder bei.', 'richtig', 'eine alte Dame bringt mir sogar Lieder aus ihrer Jugend bei', 'Eine alte Dame aus dem Seniorenheim ist eine Bewohnerin, und sie lehrt Amira Lieder aus ihrer Jugend.'],
        ['Die Arbeit am Computer ist für Amira nicht leicht.', 'richtig', 'Schwierig finde ich nur die vielen Dokumentationen am Computer.', 'Die vielen Dokumentationen am Computer findet Amira als einzigen Teil der Arbeit schwierig.']
      ]
    },
    t2: [
      {
        text: 'Hörsaal für Seniorinnen und Senioren\n\nDie Hochschule Eichstein öffnet ab dem Wintersemester ausgewählte Vorlesungen für Menschen über 60. '
          + 'Zur Auswahl stehen Fächer wie Geschichte, Kunst und Biologie. Eine Prüfung müssen die Gasthörer nicht machen, einen Abschluss bekommen sie aber auch nicht. '
          + 'Die Gebühr beträgt 90 Euro pro Semester. Viele Professorinnen und Professoren freuen sich über die neuen Zuhörer, weil sie oft interessante Fragen stellen. '
          + 'Anmelden kann man sich bis Ende September im Studierendenbüro.',
        example: ['Die Vorlesungen sind für Menschen …', ['über 60.', 'unter 30.', 'jedes Alters.'], 'a'],
        items: [
          ['Die Gasthörer …', ['müssen am Ende eine Prüfung machen.', 'bekommen keinen Abschluss.', 'bekommen ein Zeugnis.'], 'b', 'einen Abschluss bekommen sie aber auch nicht', 'Gasthörer müssen keine Prüfung machen, erhalten dafür aber auch keinen Abschluss.'],
          ['Viele Lehrende finden die neuen Zuhörer gut, weil …', ['sie gute Fragen stellen.', 'sie Geld bezahlen.', 'die Räume sonst leer sind.'], 'a', 'weil sie oft interessante Fragen stellen', 'Die Professorinnen und Professoren freuen sich, weil die Senioren oft interessante Fragen stellen.'],
          ['Anmelden muss man sich …', ['in der ersten Vorlesung.', 'online bis Dezember.', 'bis Ende September.'], 'c', 'Anmelden kann man sich bis Ende September im Studierendenbüro.', 'Die Frist für die Anmeldung im Studierendenbüro endet Ende September.']
        ]
      },
      {
        text: 'Der Laden gehört dem Dorf\n\nAls der letzte Supermarkt in Hollbach vor zwei Jahren schloss, mussten die Bewohner für jedes Brot sechs Kilometer fahren. '
          + 'Jetzt haben 230 Bürgerinnen und Bürger zusammen einen Dorfladen gegründet: Jeder hat mindestens 100 Euro gegeben und ist damit Mitbesitzer. '
          + 'Im Laden arbeiten zwei Angestellte und viele Ehrenamtliche. Es gibt Lebensmittel von Bauern aus der Gegend, aber auch Waschmittel und Zeitungen. '
          + 'Besonders beliebt ist die kleine Kaffee-Ecke, in der man sich zum Plaudern trifft.',
        items: [
          ['Den Dorfladen haben …', ['viele Bewohner zusammen gegründet.', 'eine Supermarktkette eröffnet.', 'die Bauern gebaut.'], 'a', 'haben 230 Bürgerinnen und Bürger zusammen einen Dorfladen gegründet', '230 Einwohner haben jeweils mindestens 100 Euro gegeben und den Laden gemeinsam gegründet.'],
          ['Im Laden arbeiten …', ['nur Ehrenamtliche.', 'Angestellte und Freiwillige.', 'nur die Besitzer.'], 'b', 'Im Laden arbeiten zwei Angestellte und viele Ehrenamtliche.', 'Neben zwei Angestellten helfen viele Ehrenamtliche im Laden.'],
          ['In der Kaffee-Ecke …', ['kann man frühstücken.', 'gibt es Zeitungen gratis.', 'treffen sich Leute zum Reden.'], 'c', 'in der man sich zum Plaudern trifft', '„Plaudern“ bedeutet sich unterhalten, und dafür treffen sich die Leute in der Kaffee-Ecke.']
        ]
      }
    ],
    t3: {
      ads: [
        'Segeln lernen am Wochenende: Schnupperkurs für Erwachsene, Boote und Westen werden gestellt.',
        'Bügelservice: Wir holen Ihre Hemden ab und bringen sie gebügelt zurück.',
        'Kinderkleidung von 0 bis 6 Jahren – Basar im Gemeindehaus, Sonntag 10–13 Uhr.',
        'Klavierunterricht für Kinder ab 5 Jahren, bei Ihnen zu Hause.',
        'Schuhmacher: Reparatur von Schuhen, Taschen und Gürteln – Express in 24 Stunden.',
        'Gesprächskreis für Eltern von Kindern mit ADHS, einmal im Monat.',
        'Englisch für die Reise – Online-Kurs am Abend für Senioren.',
        'Gartenhäuschen aus Holz, selbst abzubauen und abzuholen.',
        'Beratung für Existenzgründer: So machen Sie sich selbstständig.',
        'Biohof sucht Erntehelfer für die Kartoffelernte im September.'
      ],
      example: ['Sie möchten einmal ausprobieren, ob Segeln Ihnen Spaß macht.', 'a'],
      situations: [
        ['Sie haben wenig Zeit und keine Lust, Ihre Hemden selbst zu bügeln.', 'b', 'Wir holen Ihre Hemden ab und bringen sie gebügelt zurück.', 'Wer nicht selbst bügeln will, gibt die Hemden dem Bügelservice in Anzeige b, der sie abholt und zurückbringt.'],
        ['Am Absatz Ihrer Lieblingsstiefel ist etwas kaputt.', 'e', 'Reparatur von Schuhen, Taschen und Gürteln', 'Ein Absatz gehört zum Schuh, und Anzeige e repariert Schuhe sogar innerhalb von 24 Stunden.'],
        ['Sie möchten ein eigenes kleines Geschäft eröffnen.', 'i', 'So machen Sie sich selbstständig.', 'Die Beratung (i) hilft beim Schritt in die Selbstständigkeit.'],
        ['Ihre Tochter wächst schnell, und Sie suchen günstige Kleidung für sie.', 'c', 'Kinderkleidung von 0 bis 6 Jahren', 'Beim Basar (c) gibt es Kinderkleidung.'],
        ['Ihr Sohn hat ADHS, und Sie möchten sich mit anderen Eltern austauschen.', 'f', 'Gesprächskreis für Eltern von Kindern mit ADHS', 'Der monatliche Gesprächskreis (f) richtet sich genau an Eltern, deren Kinder ADHS haben.'],
        ['Sie suchen im Herbst eine Arbeit an der frischen Luft.', 'j', 'Biohof sucht Erntehelfer', 'Kartoffelernte im September ist Arbeit im Herbst an der frischen Luft, und der Biohof (j) sucht dafür Helfer.'],
        ['Sie möchten Ihre Englischkenntnisse für ein Vorstellungsgespräch verbessern.', '0', 'Englisch für die Reise', 'Der Englischkurs (g) ist nur für Reisen und für Senioren, nicht für den Beruf: 0.', 'g']
      ]
    },
    t4: {
      topic: 'In einer Tierschutz-Zeitschrift wird gefragt: Sollen wilde Tiere im Zirkus verboten werden?',
      question: 'Ist die Person für ein Verbot von Wildtieren im Zirkus?',
      comments: [
        ['Larissa, 25', 'Elefanten und Löwen gehören nicht in einen Wagen, der jede Woche in eine andere Stadt fährt. Ich bin klar für ein Verbot.', 'ja'],
        ['Roberto, 54', 'Meine Familie hat seit vier Generationen einen Zirkus. Unsere Tiere werden gut versorgt und regelmäßig vom Tierarzt untersucht. Ein Verbot wäre unser Ende.', 'nein', 'Ein Verbot wäre unser Ende.', 'Roberto sagt, dass seine Tiere gut versorgt sind, und fürchtet um seinen Zirkus.'],
        ['Kerstin, 39', 'Meine Kinder haben einmal einen Tiger im Zirkus gesehen. Er lief die ganze Zeit hin und her. Das war traurig. Wilde Tiere sollten dort nicht mehr auftreten.', 'ja', 'Wilde Tiere sollten dort nicht mehr auftreten.', 'Kerstin hat einen unruhigen Tiger gesehen und ist für ein Verbot.'],
        ['Werner, 66', 'Für viele Kinder ist der Zirkus die einzige Möglichkeit, ein Zebra oder ein Kamel live zu sehen. Das sollte man nicht verbieten.', 'nein', 'Das sollte man nicht verbieten.', 'Werner meint, dass Kinder im Zirkus Tiere live sehen können.'],
        ['Aylin, 31', 'Es gibt tolle Zirkusse nur mit Artisten und Clowns. Die zeigen, dass es auch ohne Tiere geht. Deshalb bin ich für das Verbot.', 'ja', 'Deshalb bin ich für das Verbot.', 'Aylin kennt gute Zirkusse ohne Tiere.'],
        ['Bruno, 47', 'Ich finde, man sollte genauer kontrollieren, statt alles zu verbieten. Schlechte Zirkusse müssen schließen, gute dürfen weitermachen.', 'nein', 'statt alles zu verbieten', 'Bruno möchte mehr Kontrollen statt eines Verbots.'],
        ['Hanna, 19', 'Im Zoo haben die Tiere wenigstens große Gehege. Im Zirkus ist einfach zu wenig Platz. Ein Verbot ist überfällig.', 'ja', 'Ein Verbot ist überfällig.', 'Hanna findet, dass im Zirkus zu wenig Platz ist.'],
        ['Gisela, 58', 'Auch Löwen und Elefanten können im Zirkus gut leben, wenn ein Tierarzt regelmäßig kontrolliert. Ein Verbot halte ich deshalb für falsch.', 'nein', 'Ein Verbot halte ich deshalb für falsch.', 'Gisela meint, dass auch wilde Tiere mit regelmäßiger Kontrolle durch einen Tierarzt gut im Zirkus leben können, und ist gegen das Verbot.']
      ]
    },
    t5: {
      context: 'Ihr Vater liegt im Krankenhaus, und Sie lesen die Hinweise für Besucher.',
      text: 'Hinweise für Besucherinnen und Besucher – Klinikum Eichstein\n\n'
        + '1. Besuchszeiten: Besuche sind täglich von 14 bis 19 Uhr möglich. Auf der Intensivstation sprechen Sie die Zeit bitte vorher mit dem Personal ab.\n\n'
        + '2. Anzahl: Pro Patient dürfen höchstens zwei Personen gleichzeitig im Zimmer sein. Kinder unter 12 Jahren sind nur in Begleitung erlaubt.\n\n'
        + '3. Blumen: Topfpflanzen sind aus hygienischen Gründen nicht erlaubt. Schnittblumen dürfen Sie gern mitbringen, außer auf der Intensivstation.\n\n'
        + '4. Parken: Besucher parken im Parkhaus P2. Die erste Stunde ist kostenlos.',
      items: [
        ['Wer einen Patienten auf der Intensivstation besuchen will, …', ['kommt zwischen 14 und 19 Uhr.', 'muss die Zeit vorher absprechen.', 'darf nicht besuchen.'], 'b', 'sprechen Sie die Zeit bitte vorher mit dem Personal ab', 'Regel 1: Auf der Intensivstation spricht man die Zeit vorher ab.'],
        ['Im Zimmer dürfen gleichzeitig …', ['höchstens zwei Besucher sein.', 'beliebig viele Besucher sein.', 'keine Kinder sein.'], 'a', 'höchstens zwei Personen gleichzeitig im Zimmer', 'Regel 2: Höchstens zwei Besucher dürfen gleichzeitig im Zimmer sein.'],
        ['Eine Pflanze im Topf …', ['ist auf allen Stationen erlaubt.', 'darf man nur auf der Intensivstation mitbringen.', 'darf man nicht mitbringen.'], 'c', 'Topfpflanzen sind aus hygienischen Gründen nicht erlaubt.', 'Aus hygienischen Gründen dürfen nach Regel 3 keine Pflanzen im Topf mitgebracht werden.'],
        ['Im Parkhaus P2 …', ['ist die erste Stunde gratis.', 'parkt man den ganzen Tag gratis.', 'parken nur Mitarbeiter.'], 'a', 'Die erste Stunde ist kostenlos.', 'Wer im Parkhaus P2 parkt, zahlt für die erste Stunde nichts.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage beim Sportfest: Liebe Eltern, der Staffellauf der Grundschulkinder beginnt in zehn Minuten auf dem großen Platz hinter der Turnhalle.',
        rf: ['Gleich beginnt ein Lauf für Kinder.', 'richtig'], mc: ['Der Staffellauf ist …', ['in der Turnhalle.', 'hinter der Turnhalle.', 'vor der Schule.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Änderungsschneiderei: Guten Tag, Herr Varga, hier ist die Schneiderei Nadelöhr. Ihre Hose ist fertig, wir haben sie um drei Zentimeter gekürzt. Sie können sie morgen ab zehn Uhr abholen. Wir haben dienstags bis samstags geöffnet.',
          rf: ['Die Hose von Herrn Varga wurde länger gemacht.', 'falsch', 'wir haben sie um drei Zentimeter gekürzt', 'Die Schneiderei hat die Hose um drei Zentimeter kürzer gemacht, nicht länger.'],
          mc: ['Abholen kann Herr Varga die Hose …', ['heute Abend.', 'morgen ab zehn Uhr.', 'nur am Samstag.'], 'b', 'Sie können sie morgen ab zehn Uhr abholen.', 'Die Hose kann morgen ab zehn Uhr abgeholt werden.'] },
        { script: 'Radiomeldung: Wegen des Weinfests ist die Altstadt von Eichstein am Wochenende für Autos gesperrt. Die Busse fahren eine Umleitung über die Ringstraße. Besucher werden gebeten, mit dem Zug oder dem Fahrrad anzureisen.',
          rf: ['Am Wochenende dürfen Autos nicht in die Altstadt.', 'richtig', 'ist die Altstadt von Eichstein am Wochenende für Autos gesperrt', 'Weil die Altstadt wegen des Weinfests gesperrt ist, dürfen am Wochenende keine Autos hinein.'],
          mc: ['Die Busse …', ['fahren nicht.', 'fahren durch die Altstadt.', 'fahren über die Ringstraße.'], 'c', 'Die Busse fahren eine Umleitung über die Ringstraße.', 'Wegen der Sperrung nehmen die Busse eine Umleitung über die Ringstraße.'] },
        { script: 'Durchsage im Kaufhaus: Liebe Kunden, die Rolltreppe zwischen dem ersten und dem zweiten Stock ist leider defekt. Bitte benutzen Sie die Aufzüge neben dem Haupteingang oder das Treppenhaus.',
          rf: ['Alle Rolltreppen funktionieren nicht.', 'falsch', 'die Rolltreppe zwischen dem ersten und dem zweiten Stock ist leider defekt', 'Kaputt ist nur die eine Rolltreppe zwischen erstem und zweitem Stock, nicht alle.'],
          mc: ['Die Aufzüge sind …', ['neben dem Haupteingang.', 'im zweiten Stock.', 'außer Betrieb.'], 'a', 'die Aufzüge neben dem Haupteingang', 'Als Ersatz für die Rolltreppe nennt die Durchsage die Aufzüge beim Haupteingang.'] },
        { script: 'Nachricht vom Sohn: Hallo Papa, hier ist Leon. Ich komme heute später nach Hause, weil wir nach der Schule noch für das Referat in der Bibliothek arbeiten. Ich esse bei Jakob, du musst also nicht für mich kochen.',
          rf: ['Leon kommt heute früher nach Hause.', 'falsch', 'Ich komme heute später nach Hause', 'Leon kommt später nach Hause.'],
          mc: ['Leon isst heute …', ['zu Hause.', 'in der Schule.', 'bei einem Freund.'], 'c', 'Ich esse bei Jakob', 'Leon isst bei Jakob.'] },
        { script: 'Ansage der Theaterkasse: Sie haben die Theaterkasse Eichstein erreicht. Für die Vorstellung „Die Wanderin“ am Samstag gibt es nur noch Restkarten an der Abendkasse. Bestellte Karten können Sie bis eine halbe Stunde vor Beginn abholen.',
          rf: ['Für Samstag kann man noch Karten an der Abendkasse bekommen.', 'richtig', 'gibt es nur noch Restkarten an der Abendkasse', 'Restkarten gibt es nur noch direkt vor der Vorstellung an der Abendkasse.'],
          mc: ['Bestellte Karten muss man …', ['bis eine halbe Stunde vor Beginn abholen.', 'am Vortag abholen.', 'online ausdrucken.'], 'a', 'bis eine halbe Stunde vor Beginn abholen', 'Bestellte Karten holt man bis eine halbe Stunde vor Beginn ab.'] }
      ]
    },
    t2: {
      context: 'Sie machen einen Schnupperkurs in einem Segelverein und hören die Begrüßung.',
      script: 'Ahoi und herzlich willkommen beim Segelverein Eichsee! Heute Vormittag lernen Sie an Land die wichtigsten Begriffe und Knoten. '
        + 'Nach dem Mittagessen geht es dann aufs Wasser, immer zu dritt in einem Boot mit einem Trainer. '
        + 'Rettungswesten sind Pflicht, auch für gute Schwimmer. Handys lassen Sie bitte im Vereinsheim, im Boot werden sie schnell nass. '
        + 'Wer nach dem Kurs Mitglied wird, bekommt den Kurspreis zurück.',
      items: [
        ['Am Vormittag …', ['segeln die Teilnehmer schon.', 'lernen sie an Land.', 'gibt es eine Prüfung.'], 'b', 'Heute Vormittag lernen Sie an Land die wichtigsten Begriffe und Knoten.', 'Vormittags werden an Land Begriffe und Knoten gelernt, aufs Wasser geht es erst nachmittags.'],
        ['In jedem Boot sitzen …', ['drei Teilnehmer und ein Trainer.', 'zwei Teilnehmer.', 'zehn Personen.'], 'a', 'immer zu dritt in einem Boot mit einem Trainer', 'In jedem Boot sind drei Teilnehmer mit einem Trainer.'],
        ['Eine Rettungsweste …', ['brauchen nur Nichtschwimmer.', 'kann man ausleihen.', 'müssen alle tragen.'], 'c', 'Rettungswesten sind Pflicht, auch für gute Schwimmer.', 'Rettungswesten tragen alle, auch Teilnehmer, die sehr gut schwimmen können.'],
        ['Die Handys …', ['bleiben im Vereinsheim.', 'nimmt man mit ins Boot.', 'gibt man dem Trainer.'], 'a', 'Handys lassen Sie bitte im Vereinsheim', 'Damit sie nicht nass werden, bleiben die Handys im Vereinsheim.'],
        ['Wer Mitglied wird, …', ['bekommt ein Boot.', 'zahlt weniger Beitrag.', 'bekommt das Geld für den Kurs zurück.'], 'c', 'bekommt den Kurspreis zurück', 'Neue Mitglieder bekommen den Kurspreis zurück.']
      ]
    },
    t3: {
      context: 'Sie sind in der Küche einer Wohngemeinschaft und hören, wie sich zwei Mitbewohner unterhalten.',
      script: 'Lena: Jakob, wir müssen über den Putzplan reden. Das Bad war diese Woche schon wieder nicht sauber.\n'
        + 'Jakob: Oh, das tut mir leid. Ich hatte drei Prüfungen und habe es total vergessen.\n'
        + 'Lena: Verstehe ich. Aber dann sag doch Bescheid, dann tauschen wir.\n'
        + 'Jakob: Du hast recht. Ich mache das Bad heute Abend und nächste Woche auch noch die Küche.\n'
        + 'Lena: Okay, danke. Und noch etwas: Der Kühlschrank ist voll mit alten Sachen. Wem gehört der Käse ganz hinten?\n'
        + 'Jakob: Der gehört Nils, glaube ich. Aber der ist seit zwei Wochen bei seinen Eltern.\n'
        + 'Lena: Dann werfe ich ihn weg. Sollen wir für den Putzplan vielleicht eine App benutzen? Die erinnert einen automatisch.\n'
        + 'Jakob: Gute Idee. Ich lade sie heute noch herunter.',
      items: [
        ['Das Bad war diese Woche nicht geputzt.', 'richtig', 'Das Bad war diese Woche schon wieder nicht sauber.', 'Lena beschwert sich, dass Jakob das Putzen vergessen hat und das Bad schmutzig ist.'],
        ['Jakob hatte keine Lust zu putzen.', 'falsch', 'Ich hatte drei Prüfungen und habe es total vergessen.', 'Jakob hatte keine Zeit wegen dreier Prüfungen und hat das Putzen vergessen, nicht verweigert.'],
        ['Jakob putzt nächste Woche zusätzlich die Küche.', 'richtig', 'nächste Woche auch noch die Küche', 'Als Ausgleich übernimmt Jakob nächste Woche neben dem Bad auch die Küche.'],
        ['Der Käse im Kühlschrank gehört Jakob.', 'falsch', 'Der gehört Nils, glaube ich.', 'Jakob vermutet, dass der alte Käse seinem Mitbewohner Nils gehört.'],
        ['Nils ist zurzeit nicht in der Wohnung.', 'richtig', 'der ist seit zwei Wochen bei seinen Eltern', 'Nils besucht seit zwei Wochen seine Eltern und ist deshalb gerade nicht in der WG.'],
        ['Lena möchte den Käse für Nils aufheben.', 'falsch', 'Dann werfe ich ihn weg.', 'Lena wirft den Käse weg.'],
        ['Jakob lädt eine App für den Putzplan herunter.', 'richtig', 'Ich lade sie heute noch herunter.', 'Jakob lädt die App heute herunter.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Brandl', 'Frau Schmid'],
      script: 'Moderatorin: Guten Abend! Gurken in Folie, Äpfel in Plastikschalen – sollen Supermärkte auf Verpackungen aus Plastik verzichten? '
        + 'Ich spreche mit Herrn Brandl, er hat einen Laden für unverpackte Lebensmittel, und mit Frau Schmid, Mutter von drei Kindern.\n'
        + 'Herr Brandl: Bei mir bringen die Kunden ihre eigenen Gläser und Dosen mit. Am Anfang ist das ungewohnt, aber nach ein paar Wochen ist es ganz normal.\n'
        + 'Frau Schmid: Für eine große Familie ist das schwierig. Ich kaufe einmal pro Woche viel ein und kann nicht zwanzig Gläser mitnehmen.\n'
        + 'Moderatorin: Ist Einkaufen ohne Verpackung nicht auch teurer?\n'
        + 'Herr Brandl: Nicht unbedingt. Man kauft nur so viel, wie man braucht, und wirft weniger weg.\n'
        + 'Frau Schmid: In unserem Supermarkt kostet loses Obst manchmal mehr als verpacktes. Das verstehe ich nicht.\n'
        + 'Moderatorin: Gleich kommt eine Frage von einem Hörer.\n'
        + 'Herr Brandl: Ich wünsche mir, dass auch große Supermärkte Abfüllstationen für Nudeln und Reis anbieten.\n'
        + 'Frau Schmid: Und ich wünsche mir, dass die Politik klare Regeln macht, statt alles den Kunden zu überlassen.',
      example: ['Unser Thema: Supermärkte ohne Plastikverpackungen?', 'a'],
      items: [
        ['Nach kurzer Zeit gewöhnt man sich an eigene Behälter.', 'b', 'nach ein paar Wochen ist es ganz normal', 'Herr Brandl erzählt, dass mitgebrachte Gläser am Anfang ungewohnt sind, nach wenigen Wochen aber normal.'],
        ['Mit vielen Kindern ist das kaum möglich.', 'c', 'Für eine große Familie ist das schwierig.', 'Frau Schmid kann für den großen Familieneinkauf nicht zwanzig Gläser mitnehmen.'],
        ['Kostet das Einkaufen dann mehr?', 'a', 'Ist Einkaufen ohne Verpackung nicht auch teurer?', 'Die Moderatorin fragt, ob verpackungsfreies Einkaufen mehr Geld kostet.'],
        ['Man kauft nur die Menge, die man wirklich braucht.', 'b', 'Man kauft nur so viel, wie man braucht', 'Herr Brandl argumentiert, dass man unverpackt nur die nötige Menge kauft und weniger wegwirft.'],
        ['Unverpacktes Obst ist manchmal teurer.', 'c', 'loses Obst manchmal mehr als verpacktes', 'Frau Schmid wundert sich, dass loses Obst in ihrem Supermarkt manchmal mehr kostet als verpacktes.'],
        ['Ein Zuhörer hat gleich eine Frage.', 'a', 'Gleich kommt eine Frage von einem Hörer.', 'Die Moderatorin kündigt an, dass gleich ein Hörer seine Frage stellt.'],
        ['Große Läden sollten Nudeln zum Selbstabfüllen anbieten.', 'b', 'Abfüllstationen für Nudeln und Reis', 'Herr Brandl wünscht sich Abfüllstationen in großen Supermärkten.'],
        ['Der Staat sollte Regeln festlegen.', 'c', 'dass die Politik klare Regeln macht', 'Frau Schmid möchte, dass die Politik und nicht die Kunden über Verpackungen entscheiden.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'In Ihre Wohngemeinschaft ist ein neuer Mitbewohner eingezogen. Ihre Schwester Elif möchte wissen, wie er ist. Schreiben Sie Elif eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wer ist der neue Mitbewohner?\n– Begründen Sie: Was finden Sie gut, was nicht so gut?\n– Laden Sie Elif zu einem Besuch ein.', functions: ['describe', 'justify', 'invite'], register: 'du' },
    t2: { prompt: 'Sie haben im Radio eine Sendung zum Thema „Kinder im Sportverein“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Thorsten: Mein Sohn hat jeden Tag Training, am Wochenende sind Spiele. Für Freunde und Hausaufgaben bleibt kaum Zeit. Ist das zu viel für ein Kind?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Sie ziehen in eine andere Stadt und möchten Ihre Mitgliedschaft im Sportverein kündigen. Schreiben Sie an Herrn Lorenz vom Verein. Nennen Sie den Grund und bitten Sie um eine Bestätigung (circa 40 Wörter).',
      functions: ['inform', 'request'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ihre Nachbarin, Frau Peters, zieht nach 30 Jahren aus Ihrem Haus aus. Sie möchten mit den anderen Nachbarn ein kleines Abschiedsfest für sie organisieren.\n\n– Wann?\n– Wo?\n– Geschenk?\n– Essen?\n– Wer sagt ein paar Worte?',
      partner: [
        'Partner: Hallo! Wir wollen doch für Frau Peters ein Abschiedsfest machen. Wo könnten wir feiern?',
        'Partner: Schöne Idee. Was könnten wir ihr schenken?',
        'Partner: Gut. Und wer hält eine kleine Rede?'
      ]
    },
    t2: { topics: ['Tattoos – Kunst oder später ein Problem?', 'Das ganze Leben am selben Ort wohnen?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner: Mein Thema lautet: Das ganze Leben am selben Ort wohnen? Ich bin in meinem Leben schon sechsmal umgezogen, zuerst mit meinen Eltern und später wegen meines Studiums und meiner Arbeit. Jeder Umzug war anstrengend, aber ich habe jedes Mal neue Menschen und eine neue Gegend kennengelernt. In meinem Heimatland bleiben viele Menschen ihr ganzes Leben in ihrem Dorf, und die Familie wohnt oft im selben Haus oder in der Nähe. Wer an einem Ort bleibt, hat alte Freunde und Familie in der Nähe und kennt jeden Bäcker und jede Straße. Das gibt Sicherheit. Wer umzieht, wird dagegen offener und lernt, sich schnell anzupassen. Ein Nachteil ist, dass Freundschaften manchmal kaputtgehen, weil man sich selten sieht. Mir fehlen meine Schulfreunde wirklich. Ich finde, man sollte mindestens einmal woanders leben, aber man muss nicht ständig umziehen. Vielleicht gehe ich später auch wieder zurück in meine Heimatstadt. Vielen Dank.',
      examinerQuestion: 'Prüferin: Was denken Sie: Würden Sie selbst ein Tattoo tragen? Warum oder warum nicht?'
    }
  }
});
