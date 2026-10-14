/* SYNTHETIC B1 PRACTICE form P3: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P3 = buildPracticeForm({
  n: 3, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Führerschein mit 34 – mein Erfahrungsbericht\n\n'
        + 'Lange habe ich gedacht, dass ich in der Stadt kein Auto brauche. Aber seit ich in einer Pflegeeinrichtung am Stadtrand arbeite, '
        + 'fahre ich jeden Morgen über eine Stunde mit zwei Bussen. Im Frühling habe ich mich deshalb bei einer Fahrschule angemeldet.\n\n'
        + 'Die Theorie war einfacher, als ich dachte: Ich habe abends mit einer App geübt und die Prüfung beim ersten Versuch bestanden. '
        + 'Die Fahrstunden waren dagegen anstrengend. Mein Fahrlehrer, Herr Wolters, ist sehr geduldig, aber beim Einparken war ich oft verzweifelt. '
        + 'Insgesamt habe ich 28 Fahrstunden gebraucht – mehr, als ich geplant hatte, und leider auch teurer.\n\n'
        + 'Bei der praktischen Prüfung war ich so nervös, dass ich zuerst vergessen habe, den Sicherheitsgurt anzulegen. Zum Glück hat der Prüfer nur gelächelt. '
        + 'Seit drei Wochen habe ich jetzt den Führerschein. Ein eigenes Auto kaufe ich aber noch nicht: Ich leihe mir manchmal das Auto meiner Schwester.\n\n'
        + 'Tomasz',
      example: ['Tomasz hat erst mit 34 Jahren den Führerschein gemacht.', 'richtig'],
      items: [
        ['Tomasz fährt jeden Tag mit dem Bus zur Arbeit.', 'richtig', 'fahre ich jeden Morgen über eine Stunde mit zwei Bussen', 'Bisher fährt Tomasz jeden Morgen mit zwei Bussen zur Arbeit.'],
        ['Für die Theorieprüfung hat Tomasz einen Kurs am Abend besucht.', 'falsch', 'Ich habe abends mit einer App geübt', 'Tomasz hat abends allein mit einer App geübt, nicht in einem Kurs.'],
        ['Das Einparken war für Tomasz schwierig.', 'richtig', 'beim Einparken war ich oft verzweifelt', 'Tomasz war beim Einparken oft verzweifelt, das zeigt, wie schwer es ihm fiel.'],
        ['Tomasz hat weniger Fahrstunden gebraucht als geplant.', 'falsch', 'mehr, als ich geplant hatte', 'Er hat 28 Fahrstunden gebraucht, also mehr als geplant.'],
        ['In der Prüfung hat Tomasz zuerst den Gurt vergessen.', 'richtig', 'dass ich zuerst vergessen habe, den Sicherheitsgurt anzulegen', 'Vor Nervosität hat er zuerst vergessen, den Gurt anzulegen.'],
        ['Tomasz hat sich nach der Prüfung ein Auto gekauft.', 'falsch', 'Ein eigenes Auto kaufe ich aber noch nicht', 'Tomasz kauft noch kein Auto, er leiht sich das Auto seiner Schwester.']
      ]
    },
    t2: [
      {
        text: 'Kaputt? Nicht wegwerfen!\n\nIm Stadtteilzentrum Weidenhof gibt es seit Oktober ein Reparatur-Café. Jeden zweiten Samstag im Monat helfen ehrenamtliche Fachleute dabei, '
          + 'Toaster, Lampen, Fahrräder oder Kleidung wieder in Ordnung zu bringen. Die Besucherinnen und Besucher reparieren dabei selbst mit, '
          + 'denn sie sollen etwas lernen. Die Hilfe ist kostenlos, über eine kleine Spende freut sich das Team aber. '
          + 'Beim ersten Treffen kamen über 40 Menschen; nicht alles konnte am selben Tag repariert werden. Wer ein großes Gerät mitbringen möchte, '
          + 'soll sich deshalb vorher telefonisch anmelden.',
        example: ['Das Reparatur-Café …', ['gibt es seit Oktober.', 'ist jeden Samstag geöffnet.', 'gehört zu einem Elektrogeschäft.'], 'a'],
        items: [
          ['Im Reparatur-Café …', ['reparieren nur Fachleute die Geräte.', 'arbeiten die Besucher selbst mit.', 'kann man gebrauchte Geräte kaufen.'], 'b', 'Die Besucherinnen und Besucher reparieren dabei selbst mit', 'Die Besucher reparieren selbst mit, damit sie etwas lernen.'],
          ['Für die Hilfe …', ['muss man eine feste Gebühr bezahlen.', 'braucht man eine Mitgliedskarte.', 'muss man nichts bezahlen.'], 'c', 'Die Hilfe ist kostenlos', 'Die Hilfe ist kostenlos; eine Spende ist freiwillig.'],
          ['Wer ein großes Gerät reparieren lassen will, …', ['soll vorher anrufen.', 'muss am Sonntag kommen.', 'bekommt Hilfe zu Hause.'], 'a', 'soll sich deshalb vorher telefonisch anmelden', 'Für große Geräte soll man sich vorher telefonisch anmelden.']
        ]
      },
      {
        text: 'Hallenbad Nord wieder offen\n\nNach fast zwei Jahren Renovierung hat das Hallenbad Nord am Montag wieder geöffnet. Das Becken ist jetzt flacher, '
          + 'damit auch Kinder und ältere Menschen dort Schwimmkurse machen können. Neu ist außerdem eine kleine Sauna, die man ohne Aufpreis benutzen kann. '
          + 'Die Eintrittspreise sind leicht gestiegen: Erwachsene zahlen nun 4,50 Euro statt 4 Euro. Für Familien gibt es aber eine günstige Jahreskarte. '
          + 'Montags bleibt das Bad am Vormittag für Schulklassen reserviert.',
        items: [
          ['Das Becken wurde flacher gemacht, …', ['weil das Wasser zu teuer war.', 'damit mehr Gruppen dort Kurse machen können.', 'weil es zu wenige Besucher gab.'], 'b', 'damit auch Kinder und ältere Menschen dort Schwimmkurse machen können', 'Das flachere Becken ist für Kurse mit Kindern und älteren Menschen gedacht.'],
          ['Die Sauna …', ['kostet extra.', 'ist nur für Familien.', 'ist im Eintritt enthalten.'], 'c', 'die man ohne Aufpreis benutzen kann', '„Ohne Aufpreis“ bedeutet, dass die Sauna schon im normalen Eintrittspreis enthalten ist.'],
          ['Am Montagvormittag …', ['schwimmen dort Schulklassen.', 'ist der Eintritt billiger.', 'ist die Sauna geschlossen.'], 'a', 'Montags bleibt das Bad am Vormittag für Schulklassen reserviert.', 'Wenn das Bad montags vormittags für Schulklassen reserviert ist, schwimmen dann Schüler dort.']
        ]
      }
    ],
    t3: {
      ads: [
        'Tanzkurs für Paare: Walzer, Tango und Discofox – freitags 20 Uhr, Anmeldung nur zu zweit.',
        'Umzugshilfe mit Transporter: zwei kräftige Studenten helfen beim Tragen, auch kurzfristig und am Wochenende.',
        'Fotokurs im Freien: Lernen Sie, mit dem Handy schöne Bilder zu machen – Treffpunkt Botanischer Garten.',
        'Gesprächskreis für pflegende Angehörige: Erfahrungen austauschen und Tipps bekommen, jeden ersten Montag im Monat.',
        'Erste-Hilfe-Kurs am Wochenende – mit Bescheinigung für die Führerscheinprüfung.',
        'Gemeinschaftsgarten sucht Mitgärtner: Beet für eine Saison mieten, Werkzeug und Wasser vorhanden.',
        'Steuererklärung leicht gemacht: Abendkurs für Angestellte, drei Termine im Februar.',
        'Gebrauchter Kinderwagen, sehr gut erhalten, nur an Selbstabholer.',
        'Theatergruppe für Erwachsene sucht Mitspielende – keine Erfahrung nötig, Proben dienstags.',
        'Hotel am See: Zimmer mit Frühstück, nur für Erwachsene, ab 80 Euro pro Nacht.'
      ],
      example: ['Sie möchten mit Ihrem Mann tanzen lernen.', 'a'],
      situations: [
        ['Sie ziehen nächsten Samstag um und brauchen Leute, die Ihnen beim Tragen helfen.', 'b', 'helfen beim Tragen, auch kurzfristig und am Wochenende', 'Für den Umzug am Samstag passt Anzeige b, weil die Studenten tragen helfen und auch am Wochenende kommen.'],
        ['Sie machen den Führerschein und brauchen noch einen Nachweis über Erste Hilfe.', 'e', 'mit Bescheinigung für die Führerscheinprüfung', 'Der Erste-Hilfe-Kurs (e) gibt eine Bescheinigung für die Führerscheinprüfung.'],
        ['Sie pflegen Ihre Mutter zu Hause und möchten mit Menschen in derselben Situation sprechen.', 'd', 'Gesprächskreis für pflegende Angehörige', 'Wer seine Mutter pflegt, ist eine pflegende Angehörige, genau für diese Gruppe ist der Gesprächskreis (d).'],
        ['Sie suchen für den Urlaub ein Hotel, in das Sie mit Ihren zwei kleinen Kindern fahren können.', '0', 'nur für Erwachsene', 'Das einzige Hotel (j) ist nur für Erwachsene, deshalb passt keine Anzeige: 0.', 'j'],
        ['Sie wohnen in einer Wohnung ohne Balkon und möchten gern eigenes Gemüse anbauen.', 'f', 'Beet für eine Saison mieten', 'Im Gemeinschaftsgarten (f) kann man ein eigenes Beet mieten.'],
        ['Sie spielen gern Rollen und möchten einmal auf einer Bühne stehen.', 'i', 'Theatergruppe für Erwachsene sucht Mitspielende', 'Die Theatergruppe (i) sucht Erwachsene, auch ohne Erfahrung.'],
        ['Sie arbeiten in einem Büro und wollen lernen, Ihre Steuererklärung selbst zu machen.', 'g', 'Abendkurs für Angestellte', 'Als Büroangestellte passen Sie zum Steuerkurs (g), denn er ist für Angestellte gedacht.']
      ]
    },
    t4: {
      topic: 'In einem Elternmagazin wird gefragt: Sollen Kinder in der Grundschule Hausaufgaben bekommen?',
      question: 'Ist die Person für Hausaufgaben in der Grundschule?',
      comments: [
        ['Petra, 39', 'Bei den Hausaufgaben sehe ich, was meine Tochter in der Schule lernt. Ich finde sie deshalb sinnvoll.', 'ja'],
        ['Kemal, 42', 'Mein Sohn sitzt nach der Schule oft zwei Stunden am Schreibtisch und weint. Kinder sollen am Nachmittag spielen. Ich bin gegen Hausaufgaben.', 'nein', 'Ich bin gegen Hausaufgaben.', 'Kemal möchte, dass Kinder nachmittags spielen, und ist gegen Hausaufgaben.'],
        ['Ingrid, 66', 'Ich war 35 Jahre Lehrerin. Kurze Übungen zu Hause helfen, damit man das Gelernte nicht vergisst. Zehn Minuten am Tag reichen schon.', 'ja', 'Kurze Übungen zu Hause helfen', 'Ingrid hält kurze Übungen zu Hause für hilfreich.'],
        ['Luca, 17', 'Ich erinnere mich gut: Hausaufgaben haben mir gezeigt, wie man selbstständig arbeitet. Das brauche ich heute in der Oberstufe.', 'ja', 'wie man selbstständig arbeitet', 'Luca hat durch Hausaufgaben gelernt, selbstständig zu arbeiten.'],
        ['Fatima, 35', 'Nicht alle Eltern können ihren Kindern helfen, weil sie arbeiten oder die Sprache nicht gut sprechen. Das ist ungerecht. Üben sollte man in der Schule.', 'nein', 'Üben sollte man in der Schule.', 'Fatima findet Hausaufgaben ungerecht und möchte, dass man in der Schule übt.'],
        ['Rolf, 48', 'Ehrlich gesagt machen bei uns oft die Eltern die Aufgaben. Was soll das bringen? Man sollte sie einfach abschaffen.', 'nein', 'Man sollte sie einfach abschaffen.', 'Rolf möchte die Hausaufgaben abschaffen.'],
        ['Mia, 29', 'Ich bin Erzieherin im Hort. Wenn die Kinder bei uns ihre Aufgaben machen, lernen sie auch voneinander. Ich halte das für gut.', 'ja', 'Ich halte das für gut.', 'Mia sieht im Hort, dass Kinder bei den Aufgaben voneinander lernen.'],
        ['Andrzej, 51', 'Ein Kind hat nach sechs Stunden Unterricht einen langen Tag hinter sich. Mehr Arbeit zu Hause halte ich für falsch.', 'nein', 'Mehr Arbeit zu Hause halte ich für falsch.', 'Andrzej findet, dass Kinder nach der Schule keine zusätzliche Arbeit brauchen.']
      ]
    },
    t5: {
      context: 'Sie haben sich in einem Fitnessstudio angemeldet und lesen die Hausordnung.',
      text: 'Hausordnung – Fitnessstudio Kraftwerk Weidenhof\n\n'
        + '1. Zutritt: Bitte halten Sie beim Eingang Ihre Mitgliedskarte an das Lesegerät. Wer seine Karte vergessen hat, meldet sich an der Theke und zeigt einen Ausweis.\n\n'
        + '2. Trainingsfläche: Aus hygienischen Gründen legen Sie bitte immer ein Handtuch auf die Geräte. Sportschuhe dürfen nur im Studio getragen werden, nicht auf der Straße.\n\n'
        + '3. Kurse: Für alle Gruppenkurse ist eine Anmeldung in der App nötig. Plätze, die zehn Minuten nach Kursbeginn nicht besetzt sind, werden freigegeben.\n\n'
        + '4. Schließfächer: Die Fächer müssen am Ende des Besuchs geleert werden. Für Wertsachen übernimmt das Studio keine Haftung.',
      items: [
        ['Wer die Mitgliedskarte vergessen hat, …', ['darf nicht trainieren.', 'muss an der Theke einen Ausweis zeigen.', 'bekommt sofort eine neue Karte.'], 'b', 'meldet sich an der Theke und zeigt einen Ausweis', 'Regel 1: Ohne Karte meldet man sich an der Theke und zeigt einen Ausweis.'],
        ['Auf der Trainingsfläche …', ['braucht man ein Handtuch.', 'darf man Straßenschuhe tragen.', 'muss man einen Trainer fragen.'], 'a', 'legen Sie bitte immer ein Handtuch auf die Geräte', 'Regel 2 verlangt ein Handtuch auf jedem Gerät, deshalb braucht man es beim Training.'],
        ['Wer zu spät zum Kurs kommt, …', ['muss eine Strafe zahlen.', 'darf nur zuschauen.', 'kann seinen Platz verlieren.'], 'c', 'Plätze, die zehn Minuten nach Kursbeginn nicht besetzt sind, werden freigegeben.', 'Wer mehr als zehn Minuten zu spät kommt, dessen Platz wird nach Regel 3 an andere vergeben.'],
        ['Die Schließfächer …', ['kann man für einen Monat mieten.', 'muss man nach dem Training leer machen.', 'sind für Wertsachen versichert.'], 'b', 'Die Fächer müssen am Ende des Besuchs geleert werden.', 'Regel 4: Am Ende des Besuchs muss man das Fach leeren.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Kaufhaus: Liebe Kundinnen und Kunden, in unserer Spielwarenabteilung im dritten Stock gibt es heute alle Puzzles zum halben Preis.',
        rf: ['Im Kaufhaus gibt es heute ein Sonderangebot.', 'richtig'], mc: ['Die Spielwarenabteilung ist …', ['im ersten Stock.', 'im dritten Stock.', 'im Erdgeschoss.'], 'b'] },
      texts: [
        { script: 'Nachricht auf dem Anrufbeantworter: Guten Tag, Herr Brenner, hier ist die Zahnarztpraxis Dr. Kühn. Ihr Termin am Donnerstag muss leider ausfallen, weil die Ärztin krank ist. Bitte melden Sie sich bei uns, nächste Woche haben wir noch freie Termine.',
          rf: ['Herr Brenner hat am Donnerstag einen Termin beim Zahnarzt.', 'falsch', 'Ihr Termin am Donnerstag muss leider ausfallen', 'Die Praxis sagt den Termin am Donnerstag ab, weil die Ärztin krank ist, er findet also nicht statt.'],
          mc: ['Herr Brenner soll …', ['am Freitag kommen.', 'sich bei der Praxis melden.', 'eine Überweisung abholen.'], 'b', 'Bitte melden Sie sich bei uns', 'Die Praxis bittet Herrn Brenner, sich wegen eines neuen Termins zu melden.'] },
        { script: 'Wetterbericht: Morgen bleibt es im Norden trocken, aber windig, bei Temperaturen um zwölf Grad. Im Süden regnet es den ganzen Tag. Erst am Wochenende wird es überall wieder sonnig und wärmer.',
          rf: ['Morgen regnet es im Norden.', 'falsch', 'Morgen bleibt es im Norden trocken', 'Im Norden bleibt es morgen trocken; Regen gibt es im Süden.'],
          mc: ['Am Wochenende …', ['wird es sonnig.', 'gibt es Schnee.', 'bleibt es kalt.'], 'a', 'Erst am Wochenende wird es überall wieder sonnig und wärmer.', 'Laut Wetterbericht kommen Sonne und Wärme erst am Wochenende, vorher regnet es im Süden.'] },
        { script: 'Durchsage im Zug: Sehr geehrte Fahrgäste, wegen einer Störung an einem Signal hat unser Zug etwa zwanzig Minuten Verspätung. Reisende nach Hellbrunn können in Altdorf in den Bus umsteigen, der dort auf Sie wartet.',
          rf: ['Der Zug kommt später an.', 'richtig', 'hat unser Zug etwa zwanzig Minuten Verspätung', 'Zwanzig Minuten Verspätung wegen einer Signalstörung bedeuten, dass der Zug später ankommt.'],
          mc: ['Wer nach Hellbrunn fährt, …', ['muss ein Taxi nehmen.', 'bleibt im Zug.', 'kann in Altdorf einen Bus nehmen.'], 'c', 'Reisende nach Hellbrunn können in Altdorf in den Bus umsteigen', 'Die Durchsage bietet Reisenden nach Hellbrunn einen wartenden Anschlussbus in Altdorf an, ein Taxi oder Weiterfahren im Zug ist nicht nötig.'] },
        { script: 'Nachricht von einer Freundin: Hi Nadia, hier ist Jule. Ich habe zwei Karten für das Konzert am Freitag, aber Paul kann nicht mitkommen. Hast du Lust? Das Konzert fängt um acht an, wir könnten vorher noch zusammen essen.',
          rf: ['Jule möchte mit Nadia ins Konzert gehen.', 'richtig', 'Hast du Lust?', 'Jule hat eine Karte übrig und fragt Nadia, ob sie Lust hat.'],
          mc: ['Vor dem Konzert möchte Jule …', ['Paul abholen.', 'mit Nadia essen.', 'Karten kaufen.'], 'b', 'wir könnten vorher noch zusammen essen', 'Jule schlägt vor, vorher zusammen zu essen.'] },
        { script: 'Information der Stadtbücherei: Ab nächster Woche können Sie Bücher auch am Automaten im Eingang zurückgeben, rund um die Uhr. Bitte beachten Sie: Spiele und DVDs geben Sie weiterhin nur an der Theke ab.',
          rf: ['Bücher kann man bald auch nachts zurückgeben.', 'richtig', 'rund um die Uhr', 'Am Automaten kann man Bücher rund um die Uhr zurückgeben.'],
          mc: ['DVDs gibt man …', ['am Automaten zurück.', 'an der Theke zurück.', 'per Post zurück.'], 'b', 'Spiele und DVDs geben Sie weiterhin nur an der Theke ab.', 'Nur Bücher kann man bald am Automaten abgeben, für Spiele und DVDs bleibt die Theke zuständig.'] }
      ]
    },
    t2: {
      context: 'Sie beginnen ein Praktikum in einem Hotel und hören die Begrüßung am ersten Tag.',
      script: 'Begrüßung im Hotel Seeblick: Guten Morgen und herzlich willkommen zu Ihrem Praktikum! '
        + 'Heute Vormittag zeige ich Ihnen das Haus, am Nachmittag bekommen Sie Ihre Arbeitskleidung. '
        + 'In den ersten zwei Wochen arbeiten Sie nur in der Frühschicht, also von sechs bis vierzehn Uhr. '
        + 'Ihr Mittagessen bekommen Sie kostenlos in der Personalküche. '
        + 'Wenn Sie krank sind, rufen Sie bitte vor Schichtbeginn an der Rezeption an – eine E-Mail reicht nicht. '
        + 'Am Freitag laden wir alle Neuen zu einem kleinen Frühstück ein.',
      items: [
        ['Am Nachmittag bekommen die Praktikanten …', ['einen Schlüssel.', 'ihre Arbeitskleidung.', 'einen Arbeitsplan.'], 'b', 'am Nachmittag bekommen Sie Ihre Arbeitskleidung', 'Frau Ostermann zeigt am Vormittag das Haus und verteilt am Nachmittag die Arbeitskleidung.'],
        ['In den ersten zwei Wochen arbeiten sie …', ['nur morgens und mittags.', 'auch nachts.', 'nur am Wochenende.'], 'a', 'nur in der Frühschicht, also von sechs bis vierzehn Uhr', 'Die Frühschicht von sechs bis vierzehn Uhr umfasst den Morgen und den Mittag, aber keinen Abend.'],
        ['Das Mittagessen …', ['muss man selbst mitbringen.', 'kostet wenig.', 'ist kostenlos.'], 'c', 'Ihr Mittagessen bekommen Sie kostenlos in der Personalküche.', 'In der Personalküche müssen die Praktikanten für das Mittagessen nichts bezahlen.'],
        ['Wer krank ist, soll …', ['eine E-Mail schreiben.', 'an der Rezeption anrufen.', 'eine Kollegin informieren.'], 'b', 'rufen Sie bitte vor Schichtbeginn an der Rezeption an', 'Man ruft vor Schichtbeginn an der Rezeption an; eine E-Mail reicht nicht.'],
        ['Am Freitag gibt es …', ['eine Besprechung.', 'einen Ausflug.', 'ein Frühstück für die Neuen.'], 'c', 'Am Freitag laden wir alle Neuen zu einem kleinen Frühstück ein.', 'Das kleine Frühstück am Freitag ist eine Einladung speziell für alle neuen Kolleginnen und Kollegen.']
      ]
    },
    t3: {
      context: 'Sie sind in der Kantine und hören, wie sich zwei Kolleginnen unterhalten.',
      script: 'Sabine: Na, Elif, wie läuft die Wohnungssuche?\n'
        + 'Elif: Ach, frag nicht. Ich habe schon fünf Wohnungen angeschaut, aber entweder waren sie zu teuer oder zu weit weg von der Firma.\n'
        + 'Sabine: Und die Wohnung in der Gartenstraße, von der du letzte Woche erzählt hast?\n'
        + 'Elif: Die war eigentlich toll, mit Balkon und neuer Küche. Aber der Vermieter wollte keine Katzen, und meine Katze gebe ich nicht weg.\n'
        + 'Sabine: Verstehe. Weißt du was? Im Haus meiner Eltern wird im Dezember eine Wohnung frei. Drei Zimmer, im zweiten Stock.\n'
        + 'Elif: Wirklich? Ist das weit von hier?\n'
        + 'Sabine: Mit dem Fahrrad zehn Minuten. Ich frage meine Mutter heute Abend, wer der Vermieter ist.\n'
        + 'Elif: Das wäre wunderbar. Ich lade dich dafür auf einen Kaffee ein!',
      items: [
        ['Elif hat noch keine Wohnung angeschaut.', 'falsch', 'Ich habe schon fünf Wohnungen angeschaut', 'Elif hat bereits fünf Wohnungen besichtigt, aber keine passende gefunden.'],
        ['Die Wohnungen waren zum Teil zu weit von Elifs Arbeit entfernt.', 'richtig', 'zu weit weg von der Firma', 'Einige Wohnungen waren zu weit weg von der Firma.'],
        ['Die Wohnung in der Gartenstraße hatte einen Balkon.', 'richtig', 'mit Balkon und neuer Küche', 'Die Wohnung in der Gartenstraße hatte einen Balkon und eine neue Küche.'],
        ['Elif möchte ihre Katze abgeben.', 'falsch', 'meine Katze gebe ich nicht weg', 'Elif sagt, dass sie ihre Katze nicht weggibt.'],
        ['Im Haus von Sabines Eltern ist schon jetzt eine Wohnung frei.', 'falsch', 'wird im Dezember eine Wohnung frei', '„Schon jetzt“ stimmt nicht, denn Sabine kündigt die Wohnung erst für Dezember an.'],
        ['Man fährt mit dem Fahrrad etwa zehn Minuten dorthin.', 'richtig', 'Mit dem Fahrrad zehn Minuten.', 'Sabine schätzt den Weg mit dem Rad auf zehn Minuten, die Aussage stimmt also.'],
        ['Sabine fragt heute ihren Vater nach dem Vermieter.', 'falsch', 'Ich frage meine Mutter heute Abend', 'Sabine fragt ihre Mutter, nicht ihren Vater.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Lang', 'Frau Demir'],
      script: 'Moderatorin: Willkommen zu unserer Sendung „Stadtgespräch“. Unsere Frage heute: Sollen Schülerinnen und Schüler neben der Schule jobben? '
        + 'Bei mir sind Herr Lang, er bildet in einem Supermarkt junge Leute aus, und Frau Demir, Schulsozialarbeiterin.\n'
        + 'Herr Lang: Ich finde Nebenjobs sehr gut. Wer schon mit fünfzehn an der Kasse arbeitet, lernt pünktlich zu sein und mit Kunden zu sprechen.\n'
        + 'Frau Demir: Das stimmt schon. Aber ich sehe auch Jugendliche, die abends so lange arbeiten, dass sie in der Schule müde sind und schlechtere Noten bekommen.\n'
        + 'Moderatorin: Wie viele Stunden pro Woche sind denn sinnvoll?\n'
        + 'Herr Lang: Bei uns arbeiten Schüler höchstens acht Stunden pro Woche, und nie vor einer Klassenarbeit.\n'
        + 'Frau Demir: Viele Jugendliche jobben auch, weil ihre Familie wenig Geld hat. Diese Schüler brauchen eher Unterstützung als einen Job.\n'
        + 'Moderatorin: Wir haben dazu auch eine Nachricht von einem Hörer bekommen.\n'
        + 'Herr Lang: Ein eigenes Gehalt macht stolz. Man lernt, dass Geld nicht einfach vom Himmel fällt.\n'
        + 'Frau Demir: Ich würde mir wünschen, dass Schulen und Betriebe mehr zusammenarbeiten, zum Beispiel mit Praktika in den Ferien.',
      example: ['Unser Thema sind Nebenjobs von Schülern.', 'a'],
      items: [
        ['Im Job lernen Jugendliche, pünktlich zu sein.', 'b', 'lernt pünktlich zu sein und mit Kunden zu sprechen', 'Herr Lang sagt, dass man im Job Pünktlichkeit und den Umgang mit Kunden lernt.'],
        ['Manche Schüler sind wegen ihres Jobs im Unterricht müde.', 'c', 'dass sie in der Schule müde sind und schlechtere Noten bekommen', 'Frau Demir erlebt Jugendliche, die nach langer Arbeit in der Schule müde sind.'],
        ['Wie viel Zeit sollte ein Schüler arbeiten?', 'a', 'Wie viele Stunden pro Woche sind denn sinnvoll?', 'Die Moderatorin will wissen, wie viele Wochenstunden ein Nebenjob haben sollte.'],
        ['Vor Klassenarbeiten müssen die Schüler nicht arbeiten.', 'b', 'nie vor einer Klassenarbeit', 'Herr Lang sagt, dass Schüler nie vor einer Klassenarbeit arbeiten.'],
        ['Einige Jugendliche arbeiten, weil ihre Familie das Geld braucht.', 'c', 'weil ihre Familie wenig Geld hat', 'Frau Demir sagt, dass manche Jugendliche jobben, weil die Familie wenig Geld hat.'],
        ['Ein Hörer hat uns geschrieben.', 'a', 'Wir haben dazu auch eine Nachricht von einem Hörer bekommen.', 'Die Moderatorin weist auf die Zuschrift eines Hörers hin, die die Sendung bekommen hat.'],
        ['Wer selbst Geld verdient, ist stolz darauf.', 'b', 'Ein eigenes Gehalt macht stolz.', '„Ein eigenes Gehalt“ ist selbst verdientes Geld, und Herr Lang sagt, dass es stolz macht.'],
        ['Schulen und Firmen sollten mehr zusammen machen.', 'c', 'dass Schulen und Betriebe mehr zusammenarbeiten', 'Frau Demir möchte, dass Schulen und Betriebe zusammenarbeiten, etwa mit Praktika in den Ferien.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben vor zwei Wochen eine neue Arbeitsstelle begonnen. Ihr Freund Jonas möchte wissen, wie es Ihnen geht. Schreiben Sie Jonas eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Was machen Sie bei Ihrer neuen Arbeit?\n– Begründen Sie: Was gefällt Ihnen dort nicht so gut?\n– Schlagen Sie einen Termin für ein Treffen vor.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Radio eine Sendung zum Thema „Fleisch essen – ja oder nein?“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Mehmet: Ich esse seit zwei Jahren kein Fleisch mehr und fühle mich gesünder. Trotzdem finde ich, dass jeder selbst entscheiden soll. Was meinen Sie?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Die Hausverwaltung hat Ihnen geschrieben: Am Dienstagvormittag kommt ein Handwerker, um die Heizung zu prüfen. Sie sind an diesem Tag nicht zu Hause. Schreiben Sie an Frau Albers von der Hausverwaltung. Entschuldigen Sie sich und bitten Sie um einen anderen Termin (circa 40 Wörter).',
      functions: ['apologise', 'request'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'In Ihrer Straße soll an einem Samstag ein Nachbarschaftsfest stattfinden. Sie organisieren das Fest zusammen.\n\n– Wo feiern?\n– Wann?\n– Essen und Getränke?\n– Programm für Kinder?\n– Wer hilft beim Aufräumen?',
      partner: [
        'Partner: Hallo! Wir wollen doch das Nachbarschaftsfest planen. Wo könnten wir denn feiern?',
        'Partner: Gute Idee. Und was machen wir mit dem Essen – soll jeder etwas mitbringen?',
        'Partner: Einverstanden. Was können wir für die Kinder anbieten?'
      ]
    },
    t2: { topics: ['Allein reisen oder in einer Gruppe?', 'Kleidung aus zweiter Hand kaufen?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin: Ich spreche heute über Kleidung aus zweiter Hand. Seit ungefähr drei Jahren kaufe ich fast alles gebraucht, vor allem auf Flohmärkten und in einem kleinen Laden in meiner Straße. Angefangen hat das, als meine Tochter so schnell gewachsen ist, dass neue Hosen nach wenigen Monaten zu klein waren. In meinem Heimatland war gebrauchte Kleidung lange etwas für arme Leute, heute ist es bei jungen Menschen dagegen richtig modern. Der größte Vorteil ist der Preis: Für einen Wintermantel habe ich nur zwölf Euro bezahlt. Außerdem hilft es der Umwelt, wenn Kleidung länger getragen wird. Ein Nachteil ist, dass man viel Zeit zum Suchen braucht, und oft findet man nicht die richtige Größe. Schuhe und Unterwäsche kaufe ich deshalb immer neu im Geschäft. Ich finde, man sollte zuerst schauen, ob es etwas gebraucht gibt, bevor man neu kauft. Zum Schluss ein Tipp: Viele Städte haben Tauschpartys, dort bekommt man Kleidung sogar kostenlos. Danke schön.',
      examinerQuestion: 'Prüferin: Was ist für Sie auf einer Reise am wichtigsten – und warum?',
      partnerTalkForTopic2: 'Partnerin: Mein Thema ist: Allein reisen oder in einer Gruppe? Letztes Jahr bin ich zum ersten Mal ganz allein verreist, für eine Woche an die Küste. Am Anfang hatte ich ein bisschen Angst, besonders abends im Restaurant. Nach zwei Tagen habe ich aber gemerkt, wie frei ich war: Ich konnte schlafen, so lange ich wollte, und jeden Tag selbst planen. Früher bin ich immer mit einer Reisegruppe gefahren. In meinem Heimatland reisen Frauen selten allein, die meisten fahren mit der Familie. Eine Gruppenreise hat Vorteile: Alles ist organisiert, man ist sicher und findet schnell Gesprächspartner. Dafür muss man sich nach den anderen richten und hat wenig Zeit für sich. Allein zu reisen ist oft teurer, weil das Einzelzimmer mehr kostet. Ich finde, jeder sollte einmal allein reisen, weil man dabei viel über sich selbst lernt. Für weite Reisen in fremde Länder würde ich aber lieber eine Gruppe wählen. Danke.',
      examinerQuestionForTopic2: 'Prüferin: Haben Sie selbst schon einmal etwas Gebrauchtes gekauft? Was war das?'
    }
  }
});
