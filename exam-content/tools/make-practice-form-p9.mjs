/* SYNTHETIC B1 PRACTICE form P9: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P9 = buildPracticeForm({
  n: 9, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Ein Jahr ohne neue Kleidung\n\n'
        + 'Letzten Januar habe ich mir etwas vorgenommen: Zwölf Monate lang kaufe ich keine neue Kleidung. Der Grund war ein Film über Textilfabriken, den ich im Fernsehen gesehen hatte. '
        + 'Außerdem war mein Kleiderschrank so voll, dass die Tür nicht mehr richtig zuging.\n\n'
        + 'Die ersten Wochen waren leicht. Schwierig wurde es im Frühling, als mich eine Freundin zu ihrer Hochzeit eingeladen hat. '
        + 'Ich habe mir dann ein Kleid von meiner Schwester geliehen – und viele Komplimente bekommen. Einmal habe ich eine kaputte Jeans selbst genäht, zum ersten Mal in meinem Leben.\n\n'
        + 'Ganz ohne Ausnahme ging es aber nicht: Im Herbst brauchte ich neue Arbeitsschuhe, weil die alten kaputt waren. '
        + 'Gelernt habe ich vor allem eins: Ich brauche viel weniger, als ich dachte. Im Dezember habe ich drei Säcke Kleidung zur Kleiderkammer gebracht.\n\n'
        + 'Marta',
      example: ['Marta wollte ein Jahr lang keine neue Kleidung kaufen.', 'richtig'],
      items: [
        ['Ein Fernsehbeitrag hat Marta auf die Idee gebracht.', 'richtig', 'Der Grund war ein Film über Textilfabriken', 'Ein Film im Fernsehen über Textilfabriken war für Marta der Anlass, also stimmt die Aussage.'],
        ['Am Anfang fiel Marta das Projekt sehr schwer.', 'falsch', 'Die ersten Wochen waren leicht.', 'Marta schreibt, dass die ersten Wochen leicht waren; schwierig wurde es erst im Frühling.'],
        ['Für die Hochzeit hat Marta ein Kleid gekauft.', 'falsch', 'Ich habe mir dann ein Kleid von meiner Schwester geliehen', 'Marta hat sich ein Kleid von ihrer Schwester geliehen.'],
        ['Marta hat zum ersten Mal selbst eine Hose repariert.', 'richtig', 'Einmal habe ich eine kaputte Jeans selbst genäht, zum ersten Mal in meinem Leben.', 'Eine Jeans ist eine Hose, und Marta hat sie zum ersten Mal in ihrem Leben selbst genäht.'],
        ['Marta hat das ganze Jahr nichts zum Anziehen gekauft.', 'falsch', 'Im Herbst brauchte ich neue Arbeitsschuhe', 'Im Herbst hat Marta neue Arbeitsschuhe gekauft.'],
        ['Am Ende hat Marta Kleidung weggegeben.', 'richtig', 'drei Säcke Kleidung zur Kleiderkammer gebracht', 'Mit drei Säcken für die Kleiderkammer hat Marta im Dezember viel Kleidung abgegeben.']
      ]
    },
    t2: [
      {
        text: 'Schulhöfe werden am Wochenende zu Spielplätzen\n\nIn Neustadt bleiben ab Mai fünf Schulhöfe auch am Samstag und Sonntag geöffnet. Familien aus Wohnungen ohne Garten sollen dort einen sicheren Platz zum Spielen haben. '
          + 'Ehrenamtliche Helfer schließen die Tore morgens auf und abends um 19 Uhr wieder ab. Hunde sind auf den Schulhöfen nicht erlaubt. '
          + 'Die Schulleitungen waren zuerst skeptisch, weil sie Müll und Schäden befürchteten. Nach einem Testjahr an einer Schule sind sie jetzt einverstanden.',
        example: ['Die Schulhöfe sind …', ['am Wochenende offen.', 'nur für Schüler offen.', 'nachts offen.'], 'a'],
        items: [
          ['Die Schulhöfe sollen vor allem …', ['Hundebesitzern helfen.', 'Familien ohne Garten helfen.', 'Sportvereinen helfen.'], 'b', 'Familien aus Wohnungen ohne Garten sollen dort einen sicheren Platz zum Spielen haben.', 'Die Schulhöfe sind vor allem für Familien gedacht, die in Wohnungen ohne Garten leben.'],
          ['Die Tore …', ['öffnen und schließen Freiwillige.', 'bleiben immer offen.', 'öffnet der Hausmeister.'], 'a', 'Ehrenamtliche Helfer schließen die Tore morgens auf', 'Morgens auf- und abends um 19 Uhr abschließen übernehmen ehrenamtliche Helfer, also Freiwillige.'],
          ['Die Schulleitungen …', ['sind immer noch dagegen.', 'haben die Idee gehabt.', 'haben ihre Meinung geändert.'], 'c', 'Nach einem Testjahr an einer Schule sind sie jetzt einverstanden.', 'Zuerst waren die Schulleitungen skeptisch, nach dem Testjahr stimmen sie zu, sie haben ihre Meinung also geändert.']
        ]
      },
      {
        text: 'Ein Kühlschrank für alle\n\nVor dem Stadtteilladen in der Mühlgasse steht seit drei Monaten ein öffentlicher Kühlschrank. Wer Lebensmittel übrig hat, kann sie dort hineinlegen, '
          + 'und jeder darf sich kostenlos etwas herausnehmen. Ein Team von zwölf Freiwilligen kontrolliert jeden Tag, ob alles noch frisch ist. '
          + 'Rohes Fleisch und Fisch dürfen nicht in den Kühlschrank. Besonders oft bringen Bäckereien am Abend Brot und Brötchen vorbei, die sie nicht verkauft haben.',
        items: [
          ['Aus dem Kühlschrank darf …', ['nur der Stadtteilladen etwas nehmen.', 'jeder etwas nehmen.', 'man nur gegen Geld etwas nehmen.'], 'b', 'jeder darf sich kostenlos etwas herausnehmen', 'Der Kühlschrank ist öffentlich, jeder darf ohne Bezahlung etwas mitnehmen.'],
          ['Die Freiwilligen …', ['kochen mit den Lebensmitteln.', 'kontrollieren die Lebensmittel täglich.', 'verkaufen das Brot.'], 'b', 'kontrolliert jeden Tag, ob alles noch frisch ist', 'Zwölf Freiwillige prüfen jeden Tag, ob die Lebensmittel noch frisch sind.'],
          ['Nicht in den Kühlschrank darf man …', ['Brot legen.', 'Obst legen.', 'rohen Fisch legen.'], 'c', 'Rohes Fleisch und Fisch dürfen nicht in den Kühlschrank.', 'Brot und Obst sind erlaubt, rohes Fleisch und Fisch dagegen verboten.']
        ]
      }
    ],
    t3: {
      ads: [
        'Zeichenkurs für Kinder ab 8: Comics zeichnen, freitags nach der Schule.',
        'Hauswirtschaftshilfe für ältere Menschen: Einkaufen, Putzen, Wäsche – stundenweise.',
        'Lauftreff am Fluss: Anfänger trainieren für die ersten fünf Kilometer, zweimal pro Woche.',
        'Elektrofahrrad zu verkaufen, zwei Jahre alt, neuer Akku.',
        'Deutsch-Stammtisch für Fortgeschrittene: Wir diskutieren über Zeitungsartikel, jeden zweiten Dienstag.',
        'Kostüm-Verleih für Fasching und Theater – große Auswahl für Erwachsene und Kinder.',
        'Klavierstimmer kommt ins Haus – auch für alte Klaviere und Flügel.',
        'Ferienwohnung auf dem Bauernhof: Kinder dürfen bei den Tieren helfen.',
        'Bewerbungsmappe zu teuer? Wir drucken Lebenslauf und Zeugnisse günstig.',
        'Seminar „Endlich Nichtraucher“: drei Abende mit Ärztin und Gruppe.'
      ],
      example: ['Ihre Tochter ist neun und zeichnet sehr gern Comics.', 'a'],
      situations: [
        ['Sie rauchen seit zwanzig Jahren und möchten endlich aufhören.', 'j', 'Seminar „Endlich Nichtraucher“', 'Das Seminar (j) hilft beim Aufhören mit dem Rauchen.'],
        ['Sie sprechen schon gut Deutsch und möchten über aktuelle Themen diskutieren.', 'e', 'Deutsch-Stammtisch für Fortgeschrittene', 'Wer schon gut Deutsch spricht, passt zum Stammtisch für Fortgeschrittene (e), dort werden Zeitungsartikel diskutiert.'],
        ['Ihre Mutter lebt allein und braucht Hilfe im Haushalt.', 'b', 'Hauswirtschaftshilfe für ältere Menschen', 'Die Hauswirtschaftshilfe (b) hilft älteren Menschen im Haushalt.'],
        ['Sie gehen auf ein Kostümfest und haben nichts zum Anziehen.', 'f', 'Kostüm-Verleih für Fasching und Theater', 'Beim Kostüm-Verleih (f) kann man Kostüme leihen.'],
        ['Sie möchten mit dem Laufen beginnen und brauchen Unterstützung.', 'c', 'Anfänger trainieren für die ersten fünf Kilometer', 'Im Lauftreff (c) trainieren Anfänger zusammen.'],
        ['Sie möchten mit dem Rad zur Arbeit fahren, aber der Weg ist sehr hügelig.', 'd', 'Elektrofahrrad zu verkaufen', 'Ein Elektrofahrrad (d) hilft auf hügeligen Wegen.'],
        ['Sie suchen jemanden, der Ihre alte Geige repariert.', '0', 'Klavierstimmer kommt ins Haus', 'Der Klavierstimmer (g) arbeitet nur an Klavieren, nicht an Geigen: 0.', 'g']
      ]
    },
    t4: {
      topic: 'In einer Elternzeitschrift wird gefragt: Soll die Schule morgens erst um 9 Uhr beginnen?',
      question: 'Ist die Person für einen späteren Schulbeginn?',
      comments: [
        ['Antje, 45', 'Mein Sohn ist morgens um halb acht kaum wach. Er würde viel besser lernen, wenn die Schule später anfängt. Ich bin dafür.', 'ja'],
        ['Rainer, 50', 'Ich fange um sieben Uhr in der Fabrik an. Wenn die Schule erst um neun beginnt, wer bringt dann meine Kinder hin? Das passt nicht.', 'nein', 'Das passt nicht.', 'Rainer arbeitet früh und kann seine Kinder dann nicht zur Schule bringen.'],
        ['Mina, 16', 'Wir hätten dann zwar morgens mehr Schlaf, aber auch nachmittags länger Unterricht. Mein Training im Verein würde ich dann verpassen. Nein danke.', 'nein', 'Nein danke.', 'Mina würde wegen des längeren Unterrichts ihr Training verpassen.'],
        ['Dr. Kowalczyk, 39', 'Als Kinderarzt weiß ich: Jugendliche werden abends später müde. Ein späterer Beginn wäre gut für ihre Gesundheit.', 'ja', 'Ein späterer Beginn wäre gut für ihre Gesundheit.', 'Der Kinderarzt meint, dass ein späterer Beginn gesünder für Jugendliche wäre.'],
        ['Tanja, 37', 'An unserer Schule gibt es seit einem Jahr eine „Gleitzeit“: Man darf zwischen acht und neun kommen. Das funktioniert prima. So sollte es überall sein.', 'ja', 'So sollte es überall sein.', 'Tanja hat gute Erfahrungen mit flexiblem Beginn und möchte das überall.'],
        ['Heinz, 71', 'Früher sind wir alle um acht in die Schule gegangen, und es hat uns nicht geschadet. Ich sehe keinen Grund für eine Änderung.', 'nein', 'Ich sehe keinen Grund für eine Änderung.', 'Heinz sieht keinen Grund, etwas zu ändern.'],
        ['Jasmin, 17', 'In der ersten Stunde schlafen bei uns die halbe Klasse und manchmal auch der Lehrer. Später anfangen wäre für alle besser.', 'ja', 'Später anfangen wäre für alle besser.', 'Jasmin glaubt, dass ein späterer Beginn für alle besser wäre.'],
        ['Frank, 44', 'Die Busse sind auf den Schulbeginn um acht geplant. Eine Änderung wäre teuer und kompliziert. Ich halte das für unrealistisch.', 'nein', 'Ich halte das für unrealistisch.', 'Frank findet die Änderung wegen der Busse unrealistisch.']
      ]
    },
    t5: {
      context: 'Sie möchten Ihre Tochter in der Musikschule anmelden und lesen die Unterrichtsbedingungen.',
      text: 'Unterrichtsbedingungen der Musikschule Neustadt\n\n'
        + '1. Probestunde: Vor der Anmeldung können Sie eine kostenlose Probestunde machen. Bitte vereinbaren Sie dafür telefonisch einen Termin.\n\n'
        + '2. Unterricht: Der Unterricht findet einmal pro Woche statt, nicht in den Schulferien. Fällt eine Stunde wegen Krankheit der Lehrkraft aus, wird sie nachgeholt.\n\n'
        + '3. Instrumente: Für das erste Jahr kann man ein Instrument für 15 Euro im Monat mieten.\n\n'
        + '4. Kündigung: Der Vertrag kann zum Ende eines Halbjahres gekündigt werden, schriftlich mit einer Frist von sechs Wochen.',
      items: [
        ['Für die Probestunde muss man …', ['vorher anrufen.', 'etwas bezahlen.', 'ein Instrument mitbringen.'], 'a', 'Bitte vereinbaren Sie dafür telefonisch einen Termin.', 'Die Probestunde ist kostenlos, aber man muss nach Regel 1 vorher telefonisch einen Termin ausmachen.'],
        ['Wenn die Lehrerin krank ist, …', ['bekommt man Geld zurück.', 'wird die Stunde später gemacht.', 'fällt die Stunde einfach aus.'], 'b', 'wird sie nachgeholt', '„Nachgeholt“ heißt, dass eine ausgefallene Stunde später stattfindet, Geld gibt es nicht zurück.'],
        ['Im ersten Jahr kann man ein Instrument …', ['kostenlos leihen.', 'günstig kaufen.', 'mieten.'], 'c', 'kann man ein Instrument für 15 Euro im Monat mieten', 'Im ersten Jahr muss man kein Instrument kaufen, man kann es für 15 Euro monatlich mieten.'],
        ['Kündigen kann man …', ['jederzeit per Telefon.', 'zum Halbjahresende schriftlich.', 'nur nach einem Jahr.'], 'b', 'zum Ende eines Halbjahres gekündigt werden, schriftlich', 'Kündigen geht nach Regel 4 nur schriftlich, zum Ende eines Halbjahres und mit sechs Wochen Frist.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Bus: Liebe Fahrgäste, wegen einer Baustelle können wir die Haltestelle Lindenplatz heute nicht anfahren. Bitte steigen Sie am Rathaus aus.',
        rf: ['Der Bus hält heute nicht am Lindenplatz.', 'richtig'], mc: ['Die Fahrgäste sollen …', ['am Rathaus aussteigen.', 'auf den nächsten Bus warten.', 'zu Fuß gehen.'], 'a'] },
      texts: [
        { script: 'Nachricht vom Hausmeister: Guten Tag, hier ist Herr Lehmann, der Hausmeister. Der Aufzug ist von Montag bis Mittwoch außer Betrieb, weil er gewartet wird. Wenn Sie Hilfe mit schweren Einkäufen brauchen, rufen Sie mich an.',
          rf: ['Der Aufzug funktioniert die ganze Woche nicht.', 'falsch', 'von Montag bis Mittwoch außer Betrieb', 'Der Aufzug fehlt nur drei Tage, von Montag bis Mittwoch, nicht die ganze Woche.'],
          mc: ['Herr Lehmann bietet an, …', ['beim Tragen zu helfen.', 'einzukaufen.', 'den Aufzug schneller zu reparieren.'], 'a', 'Wenn Sie Hilfe mit schweren Einkäufen brauchen, rufen Sie mich an.', 'Herr Lehmann bietet Hilfe beim Hochtragen schwerer Einkäufe an, solange der Aufzug nicht geht.'] },
        { script: 'Radiotipp: Diesen Freitag gibt es im Freibad ein Kino unter freiem Himmel. Gezeigt wird eine Familienkomödie. Bringen Sie eine Decke mit, Stühle gibt es nicht. Der Film beginnt, wenn es dunkel ist, ungefähr um 21 Uhr.',
          rf: ['Im Freibad gibt es Stühle für die Zuschauer.', 'falsch', 'Stühle gibt es nicht', 'Stühle gibt es nicht, man bringt eine Decke mit.'],
          mc: ['Der Film beginnt …', ['um 19 Uhr.', 'am Nachmittag.', 'gegen 21 Uhr.'], 'c', 'ungefähr um 21 Uhr', 'Der Film beginnt ungefähr um 21 Uhr.'] },
        { script: 'Durchsage im Supermarkt: Liebe Kunden, wir öffnen jetzt zusätzlich Kasse 5. Und denken Sie an unser Angebot: Erdbeeren aus der Region, heute nur 1,99 Euro pro Schale.',
          rf: ['Im Supermarkt wird eine weitere Kasse geöffnet.', 'richtig', 'wir öffnen jetzt zusätzlich Kasse 5', 'Die Durchsage meldet, dass zu den offenen Kassen noch die Nummer fünf dazukommt.'],
          mc: ['Im Angebot sind heute …', ['Äpfel.', 'Erdbeeren.', 'Kirschen.'], 'b', 'Erdbeeren aus der Region, heute nur 1,99 Euro pro Schale', 'Das Sonderangebot sind regionale Erdbeeren für 1,99 Euro pro Schale, nicht Äpfel oder Kirschen.'] },
        { script: 'Nachricht von einer Freundin: Hallo Elena, hier ist Bea. Kannst du am Samstagabend auf meine Kinder aufpassen? Wir sind auf einer Hochzeit eingeladen. Die Kinder gehen um acht ins Bett, du kannst also ganz in Ruhe einen Film schauen.',
          rf: ['Bea fragt, ob Elena am Samstag babysitten kann.', 'richtig', 'Kannst du am Samstagabend auf meine Kinder aufpassen?', 'Bea fragt Elena, ob sie auf die Kinder aufpassen kann.'],
          mc: ['Bea und ihr Mann gehen …', ['ins Kino.', 'auf eine Hochzeit.', 'in ein Konzert.'], 'b', 'Wir sind auf einer Hochzeit eingeladen.', 'Bea und ihr Mann sind auf einer Hochzeit eingeladen.'] },
        { script: 'Ansage im Fitnessstudio: Liebe Mitglieder, über die Feiertage haben wir geänderte Öffnungszeiten. Am 24. und 31. Dezember schließen wir schon um 14 Uhr. Am 25. Dezember bleibt das Studio geschlossen.',
          rf: ['Am 25. Dezember ist das Studio geöffnet.', 'falsch', 'Am 25. Dezember bleibt das Studio geschlossen.', 'Am 25. Dezember öffnet das Fitnessstudio gar nicht.'],
          mc: ['Am 31. Dezember schließt das Studio …', ['um 14 Uhr.', 'um 18 Uhr.', 'gar nicht.'], 'a', 'Am 24. und 31. Dezember schließen wir schon um 14 Uhr.', 'Für den 31. Dezember gilt wie für den 24. ein früher Schluss um 14 Uhr.'] }
      ]
    },
    t2: {
      context: 'Sie nehmen an einer Abendführung durch die Altstadt teil.',
      script: 'Guten Abend, meine Damen und Herren! Ich bin heute Ihr Nachtwächter und zeige Ihnen die Altstadt, wie sie vor dreihundert Jahren war. '
        + 'Die Führung dauert ungefähr neunzig Minuten. Wir beginnen am alten Stadttor und gehen dann durch die engen Gassen zum Marktplatz. '
        + 'Bitte bleiben Sie in der Nähe meiner Laterne, denn manche Wege sind dunkel. Am Ende bekommt jeder einen warmen Tee.',
      items: [
        ['Der Nachtwächter zeigt, wie die Stadt …', ['heute aussieht.', 'früher war.', 'in Zukunft aussehen soll.'], 'b', 'wie sie vor dreihundert Jahren war', 'Der Nachtwächter zeigt die Stadt, wie sie vor dreihundert Jahren aussah, also früher.'],
        ['Die Führung dauert …', ['etwa anderthalb Stunden.', 'eine halbe Stunde.', 'drei Stunden.'], 'a', 'Die Führung dauert ungefähr neunzig Minuten.', 'Neunzig Minuten sind anderthalb Stunden.'],
        ['Die Führung beginnt …', ['am Marktplatz.', 'in einer Kirche.', 'am alten Stadttor.'], 'c', 'Wir beginnen am alten Stadttor', 'Startpunkt der Führung ist das alte Stadttor, der Marktplatz kommt erst später.'],
        ['Die Teilnehmer sollen …', ['eine Taschenlampe mitbringen.', 'nah bei der Laterne bleiben.', 'leise sein.'], 'b', 'Bitte bleiben Sie in der Nähe meiner Laterne', 'Weil manche Wege dunkel sind, sollen die Teilnehmer nahe bei der Laterne bleiben.'],
        ['Am Ende gibt es …', ['ein Foto.', 'ein Abendessen.', 'einen Tee.'], 'c', 'Am Ende bekommt jeder einen warmen Tee.', 'Zum Abschluss bekommt jede Person einen warmen Tee, ein Foto oder Essen gibt es nicht.']
      ]
    },
    t3: {
      context: 'Sie sind auf einer Party und hören, wie sich zwei alte Schulfreunde unterhalten.',
      script: 'Nico: Clara! Wir haben uns seit dem Abitur nicht gesehen. Was machst du jetzt?\n'
        + 'Clara: Ich bin Krankenschwester in einer Kinderklinik. Und im Januar ziehe ich nach Freiburg, ich habe dort eine neue Stelle.\n'
        + 'Nico: Freiburg! Da wohnt doch mein Bruder. Hast du schon eine Wohnung?\n'
        + 'Clara: Noch nicht. Die ersten zwei Monate wohne ich bei einer Kollegin, die ein Zimmer frei hat.\n'
        + 'Nico: Ich frage meinen Bruder, vielleicht kennt er jemanden. Und sonst? Spielst du noch Klavier?\n'
        + 'Clara: Leider nur noch selten, mit den Schichten ist das schwer. Aber ich singe jetzt in einer Band.\n'
        + 'Nico: Wirklich? Habt ihr bald ein Konzert?\n'
        + 'Clara: Ja, am Samstag in drei Wochen, im Jugendhaus. Komm doch vorbei!\n'
        + 'Nico: Gern, ich bringe meine Freundin mit.',
      items: [
        ['Clara arbeitet in einem Krankenhaus für Kinder.', 'richtig', 'Ich bin Krankenschwester in einer Kinderklinik.', 'Clara ist Krankenschwester und hat ihre Stelle in einer Klinik für junge Patienten.'],
        ['Clara zieht im Januar um.', 'richtig', 'im Januar ziehe ich nach Freiburg', 'Clara hat in Freiburg eine neue Stelle und zieht deshalb im Januar dorthin.'],
        ['Clara hat in Freiburg schon eine eigene Wohnung.', 'falsch', 'Noch nicht.', 'Clara hat noch keine Wohnung, sie wohnt zuerst bei einer Kollegin.'],
        ['Nicos Schwester wohnt in Freiburg.', 'falsch', 'Da wohnt doch mein Bruder.', 'In Freiburg lebt nicht Nicos Schwester, sondern sein Bruder.'],
        ['Clara spielt noch oft Klavier.', 'falsch', 'Leider nur noch selten', 'Clara spielt nur noch selten Klavier.'],
        ['Claras Band spielt bald ein Konzert.', 'richtig', 'am Samstag in drei Wochen, im Jugendhaus', 'Die Band spielt in drei Wochen im Jugendhaus.'],
        ['Nico kommt allein zum Konzert.', 'falsch', 'ich bringe meine Freundin mit', 'Nico sagt zu und will zum Konzert seine Freundin mitnehmen.']
      ]
    },
    t4: {
      speakers: ['Moderatorin', 'Herr Peters', 'Frau Albrecht'],
      script: 'Moderatorin: Guten Abend! Viele Städte führen in Wohngebieten Tempo 30 ein. Ist das sinnvoll? '
        + 'Ich begrüße Herrn Peters, er fährt seit zwanzig Jahren Taxi, und Frau Albrecht, Anwohnerin und Mutter von zwei Kindern.\n'
        + 'Herr Peters: Für mich bedeutet Tempo 30, dass ich länger brauche. Die Fahrgäste beschweren sich dann bei mir, nicht bei der Stadt.\n'
        + 'Frau Albrecht: Seit in unserer Straße Tempo 30 gilt, ist es viel leiser. Die Kinder können auch wieder allein über die Straße gehen.\n'
        + 'Moderatorin: Halten sich die Autofahrer denn an die Regel?\n'
        + 'Frau Albrecht: Leider nicht alle. Wir brauchen mehr Kontrollen, sonst bringt das Schild nichts.\n'
        + 'Herr Peters: Auf großen Straßen finde ich Tempo 30 übertrieben. In kleinen Wohnstraßen habe ich nichts dagegen.\n'
        + 'Moderatorin: Ein Hörer hat uns dazu eine E-Mail geschrieben.\n'
        + 'Herr Peters: Ehrlich gesagt fahre ich mit Tempo 30 auch entspannter. Das hätte ich nicht gedacht.\n'
        + 'Frau Albrecht: Mein Wunsch wäre, dass auch vor allen Schulen und Kindergärten Tempo 30 gilt.',
      example: ['Unser Thema ist Tempo 30 in Wohngebieten.', 'a'],
      items: [
        ['Die Fahrgäste ärgern sich über die längere Fahrt.', 'b', 'Die Fahrgäste beschweren sich dann bei mir', 'Wenn die Fahrt mit Tempo 30 länger dauert, beschweren sich die Fahrgäste bei Herrn Peters.'],
        ['In unserer Straße ist es jetzt ruhiger.', 'c', 'ist es viel leiser', 'Frau Albrecht sagt, dass es in ihrer Straße viel leiser ist.'],
        ['Fahren die Leute wirklich langsamer?', 'a', 'Halten sich die Autofahrer denn an die Regel?', 'Die Moderatorin will wissen, ob die Autofahrer sich wirklich an Tempo 30 halten.'],
        ['Die Polizei sollte öfter kontrollieren.', 'c', 'Wir brauchen mehr Kontrollen', 'Frau Albrecht meint, dass das Schild ohne Kontrollen wenig bringt.'],
        ['Auf Hauptstraßen ist Tempo 30 zu viel.', 'b', 'Auf großen Straßen finde ich Tempo 30 übertrieben.', 'Herr Peters akzeptiert Tempo 30 in kleinen Wohnstraßen, auf großen Straßen hält er es für übertrieben.'],
        ['Ein Zuhörer hat geschrieben.', 'a', 'Ein Hörer hat uns dazu eine E-Mail geschrieben.', 'Die Moderatorin führt durch das Gespräch und teilt den Gästen mit, dass Post von einem Hörer gekommen ist.'],
        ['Langsamer fahren ist weniger stressig.', 'b', 'fahre ich mit Tempo 30 auch entspannter', '„Entspannter fahren“ heißt weniger Stress, das hat Herr Peters selbst überrascht.'],
        ['Vor jeder Schule sollte man langsam fahren müssen.', 'c', 'dass auch vor allen Schulen und Kindergärten Tempo 30 gilt', 'Frau Albrecht möchte langsames Fahren vor jeder Schule und jedem Kindergarten.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie waren am Sonntag auf einem großen Flohmarkt und haben etwas Besonderes gekauft. Ihre Freundin Nora geht auch gern auf Flohmärkte. Schreiben Sie Nora eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Was haben Sie gekauft?\n– Begründen Sie: Warum gefällt es Ihnen so gut?\n– Schlagen Sie vor, zusammen auf den nächsten Flohmarkt zu gehen.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben im Radio eine Sendung zum Thema „Frühaufsteher oder Nachtmensch – wann lernt man am besten?“ gehört. Im Online-Gästebuch der Sendung finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Olga: Ich lerne am besten frühmorgens, wenn alle noch schlafen. Mein Mann lernt dagegen nur nachts. Wann lernen Sie am liebsten, und warum?', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Ihre Kollegin, Frau Akın, geht in Rente und hat das Team am Freitag zu einem Abschiedsessen eingeladen. Sie können leider nicht kommen. Schreiben Sie Frau Akın. Entschuldigen Sie sich und wünschen Sie ihr alles Gute (circa 40 Wörter).',
      functions: ['apologise', 'wish'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ein Freund möchte sein Wohnzimmer neu streichen und renovieren. Sie helfen ihm und planen die Arbeit zusammen.\n\n– Wann?\n– Welche Farbe?\n– Was kaufen?\n– Wer hilft noch?\n– Möbel wohin?',
      partner: [
        'Partner: Hallo! Wir wollen doch Tim beim Streichen helfen. Wann hast du Zeit?',
        'Partner: Gut. Welche Farbe würdest du für das Wohnzimmer vorschlagen?',
        'Partner: Okay. Was machen wir so lange mit den Möbeln?'
      ]
    },
    t2: { topics: ['Bücher lesen oder Hörbücher hören?', 'Sollte man jeden Tag Sport machen?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin: Ich möchte über die Frage sprechen, ob man jeden Tag Sport machen sollte. Ich gehe seit einem Jahr jeden Morgen eine halbe Stunde joggen, bevor ich zur Arbeit fahre. Am Anfang war das schwer, aber jetzt schlafe ich viel besser und bin im Büro weniger müde. Am Wochenende mache ich bewusst Pause, oder ich gehe nur mit meinem Bruder spazieren. In meinem Heimatland treiben vor allem junge Männer Sport, für Frauen gibt es weniger Angebote, aber das ändert sich langsam. Täglicher Sport hat viele Vorteile: Er ist gut für Herz und Rücken, und man hat mehr Energie. Es gibt aber auch Risiken. Wer jeden Tag zu hart trainiert, kann sich verletzen, und manche Menschen haben einfach keine Zeit, zum Beispiel Eltern mit kleinen Kindern. Ich finde, man muss nicht jeden Tag ins Fitnessstudio, aber jeden Tag ein bisschen Bewegung ist wichtig, auch Treppen statt Aufzug. Danke, dass Sie zugehört haben.',
      examinerQuestion: 'Prüferin: Welches Buch oder Hörbuch hat Ihnen zuletzt gefallen? Warum?'
    }
  }
});
