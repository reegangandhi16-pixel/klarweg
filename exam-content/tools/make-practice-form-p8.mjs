/* SYNTHETIC B1 PRACTICE form P8: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P8 = buildPracticeForm({
  n: 8, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'E-Mail',
      text: 'Liebe Oksana,\n\n'
        + 'du wolltest wissen, wie ich jetzt wohne. Also: Seit September lebe ich bei Frau Hildebrandt, einer 82-jährigen Dame. Das Projekt heißt „Wohnen für Hilfe“. '
        + 'Ich bezahle keine Miete, nur die Nebenkosten. Dafür helfe ich ihr ungefähr zehn Stunden im Monat: Ich trage die Getränkekisten, mache den Rasen und begleite sie manchmal zum Arzt.\n\n'
        + 'Am Anfang war ich unsicher, ob das gut geht, denn wir sind ja sehr verschieden. Aber Frau Hildebrandt ist offen und lustig. '
        + 'Sie hat früher als Lehrerin gearbeitet und korrigiert jetzt manchmal meine Hausarbeiten für die Uni – das hilft mir sehr.\n\n'
        + 'Nur eine Regel ist streng: Nach 22 Uhr soll ich keinen Besuch mehr haben. Aber das ist für mich in Ordnung. Komm doch im Dezember vorbei, dann lernst du sie kennen!\n\n'
        + 'Liebe Grüße\nYusuf',
      example: ['Yusuf wohnt bei einer älteren Frau.', 'richtig'],
      items: [
        ['Yusuf bezahlt für sein Zimmer keine Miete.', 'richtig', 'Ich bezahle keine Miete, nur die Nebenkosten.', 'Yusuf bezahlt nur die Nebenkosten, keine Miete.'],
        ['Yusuf hilft Frau Hildebrandt jeden Tag mehrere Stunden.', 'falsch', 'ungefähr zehn Stunden im Monat', 'Yusuf hilft ungefähr zehn Stunden im Monat.'],
        ['Yusuf war am Anfang nicht sicher, ob das Zusammenleben funktioniert.', 'richtig', 'Am Anfang war ich unsicher, ob das gut geht', 'Am Anfang war Yusuf unsicher, ob es gut geht.'],
        ['Frau Hildebrandt war früher Ärztin.', 'falsch', 'Sie hat früher als Lehrerin gearbeitet', 'Frau Hildebrandt war Lehrerin.'],
        ['Yusuf darf abends keinen Besuch haben.', 'falsch', 'Nach 22 Uhr soll ich keinen Besuch mehr haben.', 'Besuch ist nur nach 22 Uhr nicht erlaubt.'],
        ['Yusuf lädt Oksana ein.', 'richtig', 'Komm doch im Dezember vorbei', 'Yusuf schlägt Oksana vor, im Dezember vorbeizukommen.']
      ]
    },
    t2: [
      {
        text: 'Bohrmaschine leihen statt kaufen\n\nIm Gemeindezentrum Südviertel hat eine „Bibliothek der Dinge“ eröffnet. Dort kann man Werkzeuge, Campingausrüstung oder eine Nähmaschine ausleihen, '
          + 'genauso wie Bücher in einer normalen Bibliothek. Die Idee: Viele Geräte braucht man nur ein paarmal im Jahr. Die Mitgliedschaft kostet zehn Euro im Jahr. '
          + 'Die meisten Dinge haben Bürgerinnen und Bürger gespendet. Am häufigsten wird bisher die Bohrmaschine ausgeliehen, gefolgt vom Zelt.',
        example: ['In der „Bibliothek der Dinge“ kann man …', ['Geräte ausleihen.', 'gebrauchte Bücher kaufen.', 'Werkzeuge reparieren lassen.'], 'a'],
        items: [
          ['Die Idee ist, dass man viele Geräte …', ['jeden Tag braucht.', 'nur selten benutzt.', 'selbst bauen kann.'], 'b', 'Viele Geräte braucht man nur ein paarmal im Jahr.', 'Laut Text benutzt man viele Geräte nur selten, deshalb lohnt sich das Leihen.'],
          ['Die Dinge in der Bibliothek …', ['hat die Stadt gekauft.', 'kommen aus einem Baumarkt.', 'haben meistens Bürger geschenkt.'], 'c', 'Die meisten Dinge haben Bürgerinnen und Bürger gespendet.', 'Die meisten Geräte sind Spenden von Bürgerinnen und Bürgern.'],
          ['Am meisten ausgeliehen wird …', ['die Bohrmaschine.', 'das Zelt.', 'die Nähmaschine.'], 'a', 'Am häufigsten wird bisher die Bohrmaschine ausgeliehen', 'Die Bohrmaschine wird am häufigsten ausgeliehen.']
        ]
      },
      {
        text: 'Eine Bank zum Mitfahren\n\nIn Oberried steht seit dem Sommer eine gelbe „Mitfahrbank“ am Ortsausgang. Wer sich dort hinsetzt, zeigt den Autofahrern, dass er mitgenommen werden möchte. '
          + 'Mit einem Schild kann man das Ziel anzeigen, zum Beispiel den Nachbarort oder den Bahnhof. Die Idee kam von einer Jugendgruppe, weil abends kaum noch Busse fahren. '
          + 'Bisher hat es keine Probleme gegeben. Die Gemeinde empfiehlt trotzdem, dass Kinder die Bank nicht allein benutzen.',
        items: [
          ['Auf dem Schild an der Bank …', ['steht der Busfahrplan.', 'kann man das Ziel zeigen.', 'stehen die Regeln der Gemeinde.'], 'b', 'Mit einem Schild kann man das Ziel anzeigen', 'Mit dem Schild zeigt man das Ziel an.'],
          ['Die Bank gibt es, weil …', ['am Abend wenige Busse fahren.', 'der Bahnhof geschlossen ist.', 'viele Autofahrer allein fahren.'], 'a', 'weil abends kaum noch Busse fahren', 'Die Jugendgruppe hatte die Idee, weil abends kaum Busse fahren.'],
          ['Für Kinder gilt: Sie sollen …', ['einen Ausweis zeigen.', 'nur zum Bahnhof fahren.', 'nicht allein auf der Bank warten.'], 'c', 'dass Kinder die Bank nicht allein benutzen', 'Die Gemeinde empfiehlt, dass Kinder die Bank nicht allein benutzen.']
        ]
      }
    ],
    t3: {
      ads: [
        'Yoga für Schwangere: sanfte Übungen und Atemtechnik, montags 17 Uhr.',
        'Tierarztpraxis sucht Aushilfe am Empfang, 15 Stunden pro Woche.',
        'Repariere Waschmaschinen und Geschirrspüler – Anfahrt im Stadtgebiet kostenlos.',
        'Kostenlose Rechtsberatung für Mieter jeden zweiten Donnerstag im Bürgerhaus.',
        'Bauchtanz für Frauen jeden Alters, Probestunde gratis.',
        'Schachclub sucht neue Mitglieder – Anfänger und Kinder willkommen.',
        'Ferienbetreuung in den Sommerferien: Spiele, Ausflüge und Sport für Kinder von 6 bis 12.',
        'Lieferservice für Bio-Gemüse: jede Woche eine Kiste direkt vor die Haustür.',
        'Wir räumen Ihren Keller auf und bringen alles zum Wertstoffhof.',
        'Motorradtouren am Wochenende – nur mit eigenem Motorrad.'
      ],
      example: ['Sie sind schwanger und möchten sich etwas Gutes tun.', 'a'],
      situations: [
        ['Ihr Vermieter will die Miete stark erhöhen, und Sie möchten wissen, ob das erlaubt ist.', 'd', 'Kostenlose Rechtsberatung für Mieter', 'Die Rechtsberatung (d) ist kostenlos und für Mieter.'],
        ['Im Sommer müssen Sie arbeiten und suchen eine Betreuung für Ihren achtjährigen Sohn.', 'g', 'Ferienbetreuung in den Sommerferien', 'Die Ferienbetreuung (g) ist für Kinder von 6 bis 12 im Sommer.'],
        ['Ihre Spülmaschine ist kaputt.', 'c', 'Repariere Waschmaschinen und Geschirrspüler', 'Der Reparaturdienst (c) repariert Geschirrspüler.'],
        ['Sie möchten mit Ihrer Tochter zusammen ein Brettspiel richtig lernen.', 'f', 'Anfänger und Kinder willkommen', 'Im Schachclub (f) sind Anfänger und Kinder willkommen.'],
        ['Sie haben keine Zeit zum Einkaufen und möchten trotzdem frisches Gemüse.', 'h', 'jede Woche eine Kiste direkt vor die Haustür', 'Der Lieferservice (h) bringt jede Woche Gemüse vor die Haustür.'],
        ['Sie suchen einen Nebenjob und arbeiten gern mit Tieren.', 'b', 'Tierarztpraxis sucht Aushilfe am Empfang', 'Die Tierarztpraxis (b) sucht eine Aushilfe.'],
        ['Sie möchten Motorrad fahren lernen.', '0', 'nur mit eigenem Motorrad', 'Die Motorradtouren (j) sind nur für Leute, die schon fahren und ein Motorrad haben: 0.', 'j']
      ]
    },
    t4: {
      topic: 'In einem Wirtschaftsmagazin wird gefragt: Sollen sich Kolleginnen und Kollegen im Büro duzen?',
      question: 'Ist die Person dafür, sich im Büro zu duzen?',
      comments: [
        ['Sven, 31', 'In unserem Team duzen sich alle, auch der Chef. Das macht die Zusammenarbeit einfacher und schneller. Ich finde es gut.', 'ja'],
        ['Monika, 58', 'Das „Sie“ schafft eine gesunde Distanz. Wenn ich jemanden kritisieren muss, fällt mir das mit „Sie“ leichter. Ich bleibe lieber beim Sie.', 'nein', 'Ich bleibe lieber beim Sie.', 'Monika braucht die Distanz des „Sie“, besonders bei Kritik.'],
        ['Ahmet, 27', 'Ich komme aus einer Firma, in der alle per Du waren. Seitdem fühle ich mich mit dem „Sie“ immer etwas fremd. Für mich ist das Du besser.', 'ja', 'Für mich ist das Du besser.', 'Ahmet fühlt sich mit dem Du wohler.'],
        ['Ursula, 49', 'Bei uns gibt es viele Kunden, die gesiezt werden wollen. Wenn wir uns intern duzen, sagen wir das schnell auch zum Kunden. Das ist peinlich.', 'nein', 'Das ist peinlich.', 'Ursula fürchtet, dass man aus Versehen auch Kunden duzt.'],
        ['Fynn, 23', 'Ich bin Azubi und war am ersten Tag froh, dass mir alle das Du angeboten haben. So habe ich mich sofort willkommen gefühlt.', 'ja', 'So habe ich mich sofort willkommen gefühlt.', 'Fynn hat sich durch das Du sofort willkommen gefühlt.'],
        ['Gerhard, 61', 'Ein Du ist für mich etwas Persönliches. Das biete ich Freunden an, nicht jedem Kollegen. Deshalb bin ich dagegen.', 'nein', 'Deshalb bin ich dagegen.', 'Gerhard bietet das Du nur Freunden an.'],
        ['Vanessa, 35', 'Ehrlich gesagt ist mir das egal. Wichtiger ist, dass man respektvoll miteinander umgeht, ob mit Du oder Sie. Eine Pflicht zum Du brauche ich nicht.', 'nein', 'Eine Pflicht zum Du brauche ich nicht.', 'Vanessa findet Respekt wichtiger und möchte keine Pflicht zum Du.'],
        ['Kostas, 42', 'Seit wir uns duzen, fragen die Jüngeren viel öfter um Rat. Die Hemmung ist einfach weg. Das sehe ich positiv.', 'ja', 'Das sehe ich positiv.', 'Kostas sieht positiv, dass die Jüngeren öfter um Rat fragen.']
      ]
    },
    t5: {
      context: 'Sie möchten Mitglied bei einem Carsharing-Verein werden und lesen die Nutzungsbedingungen.',
      text: 'Nutzungsbedingungen – Carsharing Südviertel e. V.\n\n'
        + '1. Buchung: Autos buchen Sie in der App, höchstens 14 Tage im Voraus. Eine Buchung kann bis eine Stunde vor Beginn kostenlos storniert werden.\n\n'
        + '2. Tanken: Ist der Tank weniger als ein Viertel voll, tanken Sie bitte. Die Tankkarte liegt im Handschuhfach, Sie zahlen nichts extra.\n\n'
        + '3. Sauberkeit: Rauchen und Tiere ohne Transportbox sind im Auto nicht erlaubt.\n\n'
        + '4. Verspätung: Wenn Sie das Auto später zurückbringen, informieren Sie uns bitte sofort telefonisch. Sonst kostet jede angefangene Stunde 15 Euro extra.',
      items: [
        ['Ein Auto kann man …', ['bis zu zwei Wochen vorher buchen.', 'nur am selben Tag buchen.', 'nur telefonisch buchen.'], 'a', 'höchstens 14 Tage im Voraus', 'Regel 1: Man bucht höchstens 14 Tage im Voraus.'],
        ['Benzin …', ['bezahlt man selbst.', 'bezahlt man mit der Tankkarte im Auto.', 'muss man immer voll tanken.'], 'b', 'Die Tankkarte liegt im Handschuhfach, Sie zahlen nichts extra.', 'Regel 2: Man tankt mit der Tankkarte aus dem Handschuhfach.'],
        ['Den Hund …', ['darf man nicht mitnehmen.', 'darf man frei im Auto lassen.', 'darf man in einer Transportbox mitnehmen.'], 'c', 'Tiere ohne Transportbox sind im Auto nicht erlaubt', 'Regel 3: Tiere dürfen nur in einer Transportbox mit.'],
        ['Wer zu spät zurückkommt, …', ['muss sofort anrufen.', 'bekommt kein Auto mehr.', 'zahlt immer 15 Euro.'], 'a', 'informieren Sie uns bitte sofort telefonisch', 'Regel 4: Bei Verspätung ruft man sofort an.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Kino: Liebe Gäste, wegen eines technischen Problems beginnt der Film in Saal 2 etwa zehn Minuten später.',
        rf: ['Der Film beginnt später.', 'richtig'], mc: ['Das Problem gibt es in …', ['Saal 1.', 'Saal 2.', 'allen Sälen.'], 'b'] },
      texts: [
        { script: 'Nachricht von der Tierarztpraxis: Guten Tag, Herr Fischer, hier ist die Tierarztpraxis am Park. Die Blutwerte Ihrer Katze sind gut. Sie braucht keine Tabletten mehr, aber kommen Sie bitte in drei Monaten zur Kontrolle.',
          rf: ['Die Katze muss weiter Tabletten nehmen.', 'falsch', 'Sie braucht keine Tabletten mehr', 'Die Katze braucht keine Tabletten mehr.'],
          mc: ['Herr Fischer soll …', ['in drei Monaten wiederkommen.', 'morgen anrufen.', 'neues Futter kaufen.'], 'a', 'kommen Sie bitte in drei Monaten zur Kontrolle', 'Herr Fischer soll in drei Monaten zur Kontrolle kommen.'] },
        { script: 'Radiomeldung: Die Kinderbuchmesse im Kongresszentrum war am Wochenende ein großer Erfolg. Mehr als 9 000 Besucher kamen, viele davon mit Schulklassen. Im nächsten Jahr soll die Messe drei statt zwei Tage dauern.',
          rf: ['Viele Schulklassen haben die Messe besucht.', 'richtig', 'viele davon mit Schulklassen', 'Viele Besucher kamen mit Schulklassen.'],
          mc: ['Im nächsten Jahr …', ['ist die Messe kostenlos.', 'dauert die Messe länger.', 'gibt es keine Messe.'], 'b', 'soll die Messe drei statt zwei Tage dauern', 'Im nächsten Jahr dauert die Messe drei Tage.'] },
        { script: 'Ansage am Hafen: Die Hafenrundfahrt um 14 Uhr ist leider ausgebucht. Für die Fahrt um 15.30 Uhr gibt es noch Plätze. Tickets bekommen Sie am Schalter oder direkt auf dem Schiff.',
          rf: ['Für die Fahrt um 14 Uhr gibt es noch Tickets.', 'falsch', 'Die Hafenrundfahrt um 14 Uhr ist leider ausgebucht.', 'Die Fahrt um 14 Uhr ist ausgebucht.'],
          mc: ['Tickets kann man auch …', ['im Internet kaufen.', 'im Hotel kaufen.', 'auf dem Schiff kaufen.'], 'c', 'direkt auf dem Schiff', 'Tickets gibt es auch direkt auf dem Schiff.'] },
        { script: 'Nachricht von der Mutter: Hallo Schatz, hier ist Mama. Papa und ich kommen am Sonntag doch erst zum Abendessen, nicht schon zum Mittagessen. Wir bringen den Salat mit, du musst also nichts vorbereiten.',
          rf: ['Die Eltern kommen am Sonntag zum Mittagessen.', 'falsch', 'erst zum Abendessen, nicht schon zum Mittagessen', 'Die Eltern kommen erst zum Abendessen.'],
          mc: ['Die Eltern bringen …', ['einen Kuchen mit.', 'den Salat mit.', 'Getränke mit.'], 'b', 'Wir bringen den Salat mit', 'Die Eltern bringen den Salat mit.'] },
        { script: 'Ansage der Stadtwerke: Sie sind mit der Service-Hotline der Stadtwerke verbunden. Bei einem Stromausfall drücken Sie bitte die Eins. Für Fragen zu Ihrer Rechnung drücken Sie die Zwei. Alle anderen Anliegen schreiben Sie uns bitte per E-Mail.',
          rf: ['Bei Fragen zur Rechnung drückt man die Zwei.', 'richtig', 'Für Fragen zu Ihrer Rechnung drücken Sie die Zwei.', 'Für Fragen zur Rechnung drückt man die Zwei.'],
          mc: ['Bei einem Stromausfall …', ['drückt man die Eins.', 'schreibt man eine E-Mail.', 'ruft man später an.'], 'a', 'Bei einem Stromausfall drücken Sie bitte die Eins.', 'Bei einem Stromausfall drückt man die Eins.'] }
      ]
    },
    t2: {
      context: 'Sie machen eine geführte Fahrradtour durch die Stadt und hören die Informationen am Start.',
      script: 'Hallo zusammen und willkommen zur Radtour „Alte Mühlen am Fluss“! Die Tour ist zwanzig Kilometer lang und ziemlich flach, also auch für Anfänger gut. '
        + 'Wir fahren immer hintereinander, nie nebeneinander. Bitte setzen Sie alle einen Helm auf; wer keinen hat, bekommt einen von mir. '
        + 'In der zweiten Mühle gibt es eine Pause mit Kaffee und Kuchen, das ist im Preis enthalten. Gegen 17 Uhr sind wir wieder hier.',
      items: [
        ['Die Tour ist …', ['sehr anstrengend.', 'auch für Anfänger geeignet.', 'nur für Sportler.'], 'b', 'also auch für Anfänger gut', 'Die Tour ist flach und auch für Anfänger gut.'],
        ['Die Teilnehmer sollen …', ['hintereinander fahren.', 'in Gruppen fahren.', 'nebeneinander fahren.'], 'a', 'Wir fahren immer hintereinander, nie nebeneinander.', 'Alle fahren immer hintereinander.'],
        ['Wer keinen Helm hat, …', ['darf nicht mitfahren.', 'muss einen kaufen.', 'bekommt einen vom Tourleiter.'], 'c', 'wer keinen hat, bekommt einen von mir', 'Der Tourleiter gibt einen Helm.'],
        ['Kaffee und Kuchen …', ['muss man extra bezahlen.', 'sind im Preis enthalten.', 'gibt es am Ende.'], 'b', 'das ist im Preis enthalten', 'Kaffee und Kuchen sind im Preis enthalten.'],
        ['Die Tour endet …', ['um 15 Uhr.', 'in der zweiten Mühle.', 'gegen 17 Uhr.'], 'c', 'Gegen 17 Uhr sind wir wieder hier.', 'Gegen 17 Uhr ist die Gruppe zurück.']
      ]
    },
    t3: {
      context: 'Sie sind in der Teeküche Ihrer Firma und hören, wie sich zwei Kollegen unterhalten.',
      script: 'Paula: Hallo Ömer! Ich habe gehört, du warst letzte Woche nicht da?\n'
        + 'Ömer: Ja, meine Tochter hatte Windpocken. Ich bin drei Tage zu Hause geblieben, meine Frau die anderen zwei.\n'
        + 'Paula: Oh je. Geht es ihr wieder besser?\n'
        + 'Ömer: Ja, sie ist wieder im Kindergarten. Und du? Wie war deine Fortbildung in Leipzig?\n'
        + 'Paula: Ganz interessant. Es ging um Projektmanagement. Aber die Tage waren sehr lang, von acht bis sechs.\n'
        + 'Ömer: Kannst du uns im Team davon erzählen?\n'
        + 'Paula: Ja, ich soll am Montag in der Besprechung eine kurze Präsentation machen. Die bereite ich am Wochenende vor.\n'
        + 'Ömer: Wenn du willst, schaue ich sie mir vorher an.\n'
        + 'Paula: Gern, danke! Ich schicke sie dir am Sonntagabend.',
      items: [
        ['Ömers Tochter war krank.', 'richtig', 'meine Tochter hatte Windpocken', 'Ömers Tochter hatte Windpocken.'],
        ['Ömer ist die ganze Woche zu Hause geblieben.', 'falsch', 'Ich bin drei Tage zu Hause geblieben, meine Frau die anderen zwei.', 'Ömer blieb drei Tage zu Hause, seine Frau zwei.'],
        ['Die Tochter geht wieder in den Kindergarten.', 'richtig', 'sie ist wieder im Kindergarten', 'Die Tochter ist wieder im Kindergarten.'],
        ['Die Fortbildung war kurz und entspannt.', 'falsch', 'die Tage waren sehr lang, von acht bis sechs', 'Die Tage der Fortbildung waren sehr lang.'],
        ['Paula hält am Montag eine Präsentation.', 'richtig', 'ich soll am Montag in der Besprechung eine kurze Präsentation machen', 'Paula macht am Montag eine kurze Präsentation.'],
        ['Paula bereitet die Präsentation im Büro vor.', 'falsch', 'Die bereite ich am Wochenende vor.', 'Paula bereitet die Präsentation am Wochenende vor.'],
        ['Ömer möchte die Präsentation vorher lesen.', 'richtig', 'schaue ich sie mir vorher an', 'Ömer bietet an, sich die Präsentation vorher anzuschauen.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Vogt', 'Frau Engel'],
      script: 'Moderatorin: Herzlich willkommen! Immer mehr Menschen arbeiten weiter, obwohl sie schon Rente bekommen. Ist das eine gute Entwicklung? '
        + 'Ich spreche mit Herrn Vogt, 69 Jahre alt, er arbeitet in einem Baumarkt, und mit Frau Engel, Beraterin für ältere Arbeitnehmer.\n'
        + 'Herr Vogt: Ich arbeite drei Vormittage pro Woche in der Gartenabteilung. Zu Hause fiel mir einfach die Decke auf den Kopf.\n'
        + 'Frau Engel: Das ist ein guter Grund. Viele arbeiten aber, weil die Rente zum Leben nicht reicht. Das finde ich bedenklich.\n'
        + 'Moderatorin: Was haben die Firmen davon?\n'
        + 'Frau Engel: Ältere Mitarbeiter haben viel Erfahrung. Sie können jungen Kollegen eine Menge beibringen.\n'
        + 'Herr Vogt: Die Kunden fragen oft extra nach mir, weil ich früher selbst Gärtner war.\n'
        + 'Moderatorin: Wir haben dazu einen Anruf von einer Hörerin.\n'
        + 'Herr Vogt: Wichtig ist, dass man selbst entscheiden kann, wie viele Stunden man arbeitet.\n'
        + 'Frau Engel: Und die Gesundheit muss mitspielen. Körperlich schwere Arbeit ist im Alter oft nicht mehr möglich.',
      example: ['Thema: Arbeiten, obwohl man schon Rente bekommt.', 'a'],
      items: [
        ['Zu Hause war es mir zu langweilig.', 'b', 'Zu Hause fiel mir einfach die Decke auf den Kopf.', 'Herr Vogt sagt, dass ihm zu Hause die Decke auf den Kopf fiel.'],
        ['Manche müssen arbeiten, weil sie zu wenig Rente haben.', 'c', 'weil die Rente zum Leben nicht reicht', 'Frau Engel sagt, dass bei vielen die Rente nicht reicht.'],
        ['Welchen Vorteil haben die Firmen?', 'a', 'Was haben die Firmen davon?', 'Die Moderatorin fragt nach dem Vorteil für Firmen.'],
        ['Erfahrene Mitarbeiter können Jüngeren viel zeigen.', 'c', 'Sie können jungen Kollegen eine Menge beibringen.', 'Frau Engel sagt, dass Ältere Jüngeren viel beibringen können.'],
        ['Kunden wollen gern von mir beraten werden.', 'b', 'Die Kunden fragen oft extra nach mir', 'Herr Vogt sagt, dass Kunden oft nach ihm fragen.'],
        ['Eine Hörerin hat angerufen.', 'a', 'Wir haben dazu einen Anruf von einer Hörerin.', 'Die Moderatorin erwähnt den Anruf einer Hörerin.'],
        ['Man sollte die Arbeitszeit selbst bestimmen können.', 'b', 'dass man selbst entscheiden kann, wie viele Stunden man arbeitet', 'Herr Vogt findet es wichtig, die Stunden selbst zu bestimmen.'],
        ['Schwere körperliche Arbeit ist für Ältere oft zu viel.', 'c', 'Körperlich schwere Arbeit ist im Alter oft nicht mehr möglich.', 'Frau Engel sagt, dass schwere Arbeit im Alter oft nicht mehr geht.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben seit zwei Wochen eine Katze aus dem Tierheim. Ihre Freundin Mira hat auch eine Katze. Schreiben Sie Mira eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Wie ist Ihre Katze?\n– Begründen Sie: Was ist noch schwierig?\n– Bitten Sie Mira um einen Tipp und schlagen Sie ein Treffen vor.', functions: ['describe', 'justify', 'request'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Zeitschrift einen Artikel zum Thema „Fitness-Apps und Smartwatches“ gelesen. Im Online-Forum der Zeitschrift finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Bettina: Meine Uhr zählt jeden Schritt und erinnert mich, wenn ich zu lange sitze. Ohne sie würde ich mich viel weniger bewegen. Benutzen Sie auch so etwas?', postLabel: 'Online-Forum', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Die Klasse Ihres Sohnes macht am Freitag einen Ausflug. Ihr Sohn ist krank und kann nicht mitfahren. Schreiben Sie seiner Lehrerin, Frau Stein. Entschuldigen Sie Ihren Sohn und fragen Sie, ob er das Geld für den Ausflug zurückbekommt (circa 40 Wörter).',
      functions: ['apologise', 'ask'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Sie möchten in Ihrem Haus einen Spieleabend für die Nachbarn organisieren. Sie planen den Abend zusammen.\n\n– Wann?\n– Wo im Haus?\n– Welche Spiele?\n– Essen und Getränke?\n– Wie die Nachbarn einladen?',
      partner: [
        'Partner: Hallo! Wir wollten doch einen Spieleabend für die Nachbarn machen. Wo könnten wir uns treffen?',
        'Partner: Prima. Welche Spiele sollen wir mitbringen?',
        'Partner: Gut. Und wie laden wir die Nachbarn ein – mit einem Zettel im Treppenhaus?'
      ]
    },
    t2: { topics: ['Soziale Netzwerke – mehr Vor- oder Nachteile?', 'Allein wohnen oder in einer Wohngemeinschaft?'] },
    t3: {
      partnerFemale: false,
      partnerTalk: 'Partner präsentiert das Thema „Allein wohnen oder in einer Wohngemeinschaft?“: Er hat fünf Jahre in einer WG gewohnt und nie allein gegessen. Jetzt wohnt er allein und genießt die Ruhe.',
      examinerQuestion: 'Prüferin: Welches soziale Netzwerk benutzen Sie am meisten, und wofür?'
    }
  }
});
