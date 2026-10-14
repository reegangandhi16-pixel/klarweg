/* SYNTHETIC B1 PRACTICE form P15: original, fictional B1-style texts written for Klarweg (no Goethe-Institut or other
   published exam material, no real people, brands or venues). Content only — layout, ids, numbering and the server-only
   review data come from buildPracticeForm (tools/practice-lib.mjs). Registered in tools/practice-forms.mjs.
   Clearly synthetic practice: not an official exam, no official status. */
import { buildPracticeForm } from './practice-lib.mjs';

export const PRACTICE_FORM_P15 = buildPracticeForm({
  n: 15, date: '2026-10-14',
  lesen: {
    t1: {
      label: 'Blog',
      text: 'Ein Jahr mit Lucas aus Brasilien\n\n'
        + 'Im letzten August stand plötzlich ein großer, schüchterner Junge vor unserer Tür: Lucas, 16 Jahre alt, unser Austauschschüler aus Brasilien. '
        + 'Er hatte vorher nur ein halbes Jahr Deutsch gelernt. In den ersten Wochen haben wir viel mit Händen und Füßen gesprochen, und abends war er oft traurig, weil er seine Familie vermisst hat.\n\n'
        + 'Nach Weihnachten wurde es besser. Lucas ist in den Fußballverein eingetreten und hat dort schnell Freunde gefunden. '
        + 'Unser Sohn Tim, der genauso alt ist, war zuerst eifersüchtig, aber inzwischen sind die beiden wie Brüder.\n\n'
        + 'Gelernt haben auch wir: Lucas hat uns jeden Sonntag ein brasilianisches Gericht gekocht. Im Juli fliegt er zurück. '
        + 'Tim möchte ihn nächsten Sommer in São Paulo besuchen.\n\n'
        + 'Familie Herzog',
      example: ['Familie Herzog hatte ein Jahr lang einen Austauschschüler.', 'richtig'],
      items: [
        ['Lucas konnte am Anfang schon sehr gut Deutsch.', 'falsch', 'Er hatte vorher nur ein halbes Jahr Deutsch gelernt.', 'Lucas hatte nur ein halbes Jahr Deutsch gelernt.'],
        ['Lucas hatte am Anfang Heimweh.', 'richtig', 'weil er seine Familie vermisst hat', 'Lucas war abends traurig, weil er seine Familie vermisst hat.'],
        ['Im Fußballverein hat Lucas Freunde gefunden.', 'richtig', 'hat dort schnell Freunde gefunden', 'Im Fußballverein hat Lucas schnell Freunde gefunden.'],
        ['Tim hat sich von Anfang an über Lucas gefreut.', 'falsch', 'war zuerst eifersüchtig', 'Tim war zuerst eifersüchtig.'],
        ['Die Familie hat jeden Sonntag für Lucas gekocht.', 'falsch', 'Lucas hat uns jeden Sonntag ein brasilianisches Gericht gekocht.', 'Lucas hat sonntags für die Familie gekocht.'],
        ['Tim möchte Lucas in Brasilien besuchen.', 'richtig', 'Tim möchte ihn nächsten Sommer in São Paulo besuchen.', 'Tim will Lucas nächsten Sommer besuchen.']
      ]
    },
    t2: [
      {
        text: 'Bücher kommen ins Haus\n\nDie Stadtbücherei Sonnenberg bringt Bücher jetzt auch zu Menschen, die nicht mehr selbst kommen können. '
          + 'Ehrenamtliche Helferinnen und Helfer fahren einmal im Monat mit dem Fahrrad zu älteren, kranken oder behinderten Lesern. '
          + 'Die Leser wählen ihre Bücher am Telefon aus; wer möchte, bekommt auch Hörbücher oder Zeitschriften. Der Service ist kostenlos, nur einen Leseausweis braucht man. '
          + 'Viele Kunden freuen sich nicht nur über die Bücher, sondern auch über ein kurzes Gespräch an der Tür.',
        example: ['Die Bücherei bringt Bücher …', ['nach Hause.', 'in Schulen.', 'in Krankenhäuser.'], 'a'],
        items: [
          ['Die Bücher bringen …', ['Mitarbeiter mit dem Auto.', 'Freiwillige mit dem Fahrrad.', 'Postboten.'], 'b', 'Ehrenamtliche Helferinnen und Helfer fahren einmal im Monat mit dem Fahrrad', 'Ehrenamtliche bringen die Bücher mit dem Fahrrad.'],
          ['Die Bücher suchen die Leser …', ['telefonisch aus.', 'im Internet aus.', 'gar nicht selbst aus.'], 'a', 'Die Leser wählen ihre Bücher am Telefon aus', 'Die Leser wählen ihre Bücher am Telefon aus.'],
          ['Für den Service braucht man …', ['eine Bescheinigung vom Arzt.', 'eine Gebühr.', 'einen Leseausweis.'], 'c', 'nur einen Leseausweis braucht man', 'Man braucht nur einen Leseausweis.']
        ]
      },
      {
        text: 'Milch vom Automaten\n\nAuf dem Hof der Familie Kerner am Ortsrand von Sonnenberg steht seit dem Frühjahr ein Milchautomat. Dort gibt es rund um die Uhr frische Milch direkt von den Kühen des Hofes. '
          + 'Die Kunden bringen ihre eigenen Flaschen mit oder kaufen eine Glasflasche am Automaten. Ein Liter kostet 1,50 Euro. '
          + 'Für die Familie Kerner lohnt sich der Verkauf, weil die Molkerei zu wenig für die Milch bezahlt. Am Wochenende bilden sich manchmal sogar Schlangen vor dem Automaten.',
        items: [
          ['Die Milch …', ['kommt aus einer Molkerei.', 'kann man nur morgens kaufen.', 'kann man zu jeder Zeit kaufen.'], 'c', 'Dort gibt es rund um die Uhr frische Milch', 'Die Milch gibt es rund um die Uhr.'],
          ['Wer keine eigene Flasche hat, …', ['kann am Automaten eine kaufen.', 'bekommt keine Milch.', 'bekommt eine Flasche geschenkt.'], 'a', 'kaufen eine Glasflasche am Automaten', 'Man kann am Automaten eine Glasflasche kaufen.'],
          ['Die Familie verkauft die Milch selbst, weil …', ['die Kunden es wollten.', 'die Molkerei zu wenig bezahlt.', 'der Hof neu ist.'], 'b', 'weil die Molkerei zu wenig für die Milch bezahlt', 'Die Molkerei bezahlt zu wenig für die Milch.']
        ]
      }
    ],
    t3: {
      ads: [
        'Kochwettbewerb für Hobbyköche: Melden Sie sich mit Ihrem Lieblingsrezept an – tolle Preise!',
        'Astronomie für Kinder: Sterne beobachten in der Sternwarte, freitags bei klarem Himmel.',
        'Wohnung tauschen: Wir suchen eine größere Wohnung und bieten 2 Zimmer in der Altstadt.',
        'Selbstverteidigung für Frauen: Kurs an vier Abenden, auch für Anfängerinnen.',
        'Autowerkstatt bietet Wintercheck für 29 Euro – Termin auch am Samstag.',
        'Nachbarschaftshilfe: Wir gehen für Sie einkaufen, wenn Sie krank sind.',
        'Bücherflohmarkt der Schule: Erlös für die neue Schulbibliothek.',
        'Gitarrengruppe für Seniorinnen und Senioren – Lieder zum Mitsingen.',
        'Teppichreinigung: Wir holen Ihren Teppich ab und bringen ihn sauber zurück.',
        'Mietwagen für Umzüge – nur mit Führerschein der Klasse B seit mindestens drei Jahren.'
      ],
      example: ['Sie kochen sehr gern und möchten Ihr Können zeigen.', 'a'],
      situations: [
        ['Ihr Sohn interessiert sich für Planeten und Sterne.', 'b', 'Sterne beobachten in der Sternwarte', 'In der Sternwarte (b) beobachten Kinder die Sterne.'],
        ['Sie haben eine große Wohnung, aber die Kinder sind ausgezogen, und Sie wollen etwas Kleineres.', 'c', 'Wir suchen eine größere Wohnung und bieten 2 Zimmer', 'Beim Wohnungstausch (c) bietet jemand eine kleinere Wohnung an.'],
        ['Sie gehen abends oft allein nach Hause und möchten sich sicherer fühlen.', 'd', 'Selbstverteidigung für Frauen', 'Der Selbstverteidigungskurs (d) ist für Frauen.'],
        ['Bevor es kalt wird, möchten Sie Ihr Auto prüfen lassen.', 'e', 'Wintercheck für 29 Euro', 'Die Werkstatt (e) bietet einen Wintercheck an.'],
        ['Sie haben Grippe und können nicht einkaufen gehen.', 'f', 'Wir gehen für Sie einkaufen, wenn Sie krank sind.', 'Die Nachbarschaftshilfe (f) kauft für Kranke ein.'],
        ['Ihr Wohnzimmerteppich ist sehr schmutzig.', 'i', 'Wir holen Ihren Teppich ab und bringen ihn sauber zurück.', 'Die Teppichreinigung (i) reinigt Teppiche.'],
        ['Sie haben vor einem Jahr den Führerschein gemacht und brauchen einen Transporter für Ihren Umzug.', '0', 'seit mindestens drei Jahren', 'Für den Mietwagen (j) braucht man den Führerschein seit drei Jahren: 0.', 'j']
      ]
    },
    t4: {
      topic: 'In einem Karriere-Magazin wird gefragt: Braucht man im Büro eine Kleiderordnung?',
      question: 'Ist die Person für eine Kleiderordnung im Büro?',
      comments: [
        ['Jörg, 51', 'Wer Kunden empfängt, sollte ordentlich aussehen. Eine klare Kleiderordnung hilft dabei. Ich halte sie für richtig.', 'ja'],
        ['Mia, 26', 'Ich arbeite besser, wenn ich mich wohlfühle. In Jeans und Turnschuhen bin ich genauso professionell. Vorschriften brauche ich nicht.', 'nein', 'Vorschriften brauche ich nicht.', 'Mia fühlt sich in bequemer Kleidung wohl und will keine Vorschriften.'],
        ['Selim, 44', 'In unserer Bank tragen alle Anzug oder Kostüm. So sieht man gleich, wer zum Team gehört. Ich finde das gut.', 'ja', 'Ich finde das gut.', 'Selim findet gut, dass man das Team an der Kleidung erkennt.'],
        ['Petra, 59', 'Früher gab es bei uns strenge Regeln, heute nicht mehr. Seitdem ist die Stimmung lockerer und niemand arbeitet schlechter.', 'nein', 'niemand arbeitet schlechter', 'Petra sieht keinen Nachteil seit der Abschaffung der Regeln.'],
        ['Dominik, 33', 'Ein paar Grundregeln finde ich sinnvoll, zum Beispiel keine Badelatschen und keine kurzen Hosen. Ganz ohne Regeln geht es nicht.', 'ja', 'Ganz ohne Regeln geht es nicht.', 'Dominik möchte zumindest Grundregeln.'],
        ['Leonie, 30', 'Im Sommer ist es in unserem Büro sehr heiß. Ein Anzug wäre eine Qual. Jeder soll selbst entscheiden, was er anzieht.', 'nein', 'Jeder soll selbst entscheiden, was er anzieht.', 'Leonie möchte selbst über ihre Kleidung entscheiden.'],
        ['Frank, 62', 'Kleidung zeigt Respekt vor dem Kunden und vor der Arbeit. Deshalb bin ich für feste Regeln.', 'ja', 'Deshalb bin ich für feste Regeln.', 'Frank sieht Kleidung als Zeichen von Respekt.'],
        ['Nuri, 37', 'Bei uns arbeiten fast alle im Homeoffice. Wer sieht da, was ich trage? Eine Kleiderordnung wäre einfach überflüssig.', 'nein', 'Eine Kleiderordnung wäre einfach überflüssig.', 'Nuri arbeitet im Homeoffice und hält Regeln für überflüssig.']
      ]
    },
    t5: {
      context: 'Sie möchten beim Fotowettbewerb Ihrer Stadt mitmachen und lesen die Teilnahmebedingungen.',
      text: 'Fotowettbewerb „Mein Sonnenberg“ – Teilnahmebedingungen\n\n'
        + '1. Teilnahme: Mitmachen können alle, die in Sonnenberg wohnen. Jede Person darf höchstens drei Fotos einreichen.\n\n'
        + '2. Fotos: Die Bilder müssen in diesem Jahr in Sonnenberg aufgenommen worden sein. Sind Personen gut zu erkennen, brauchen Sie deren Erlaubnis.\n\n'
        + '3. Einsendung: Schicken Sie Ihre Fotos bis zum 31. August per E-Mail. Ausdrucke auf Papier werden nicht angenommen.\n\n'
        + '4. Preise: Die besten zwölf Fotos erscheinen im Stadtkalender. Die Gewinner werden im Oktober benachrichtigt.',
      items: [
        ['Jeder Teilnehmer darf …', ['so viele Fotos schicken, wie er möchte.', 'bis zu drei Fotos schicken.', 'nur ein Foto schicken.'], 'b', 'Jede Person darf höchstens drei Fotos einreichen.', 'Regel 1: Man darf höchstens drei Fotos einreichen.'],
        ['Wenn auf dem Foto Menschen zu sehen sind, …', ['muss man sie um Erlaubnis fragen.', 'darf man es nicht schicken.', 'muss man ihre Namen nennen.'], 'a', 'Sind Personen gut zu erkennen, brauchen Sie deren Erlaubnis.', 'Regel 2: Für erkennbare Personen braucht man ihre Erlaubnis.'],
        ['Die Fotos schickt man …', ['per Post.', 'persönlich ins Rathaus.', 'per E-Mail.'], 'c', 'Schicken Sie Ihre Fotos bis zum 31. August per E-Mail.', 'Regel 3: Die Fotos schickt man per E-Mail.'],
        ['Die besten Fotos …', ['werden verkauft.', 'kommen in einen Kalender.', 'hängen im Rathaus.'], 'b', 'Die besten zwölf Fotos erscheinen im Stadtkalender.', 'Regel 4: Die besten zwölf Fotos erscheinen im Stadtkalender.']
      ]
    }
  },
  hoeren: {
    t1: {
      example: { script: 'Ansage im Freibad: Liebe Badegäste, das Wasser im Schwimmerbecken hat heute 23 Grad. Die Liegewiese hinter dem Kiosk ist wegen Bauarbeiten gesperrt.',
        rf: ['Ein Teil der Liegewiese ist heute gesperrt.', 'richtig'], mc: ['Das Wasser hat …', ['20 Grad.', '23 Grad.', '26 Grad.'], 'b'] },
      texts: [
        { script: 'Nachricht vom Möbelhaus: Guten Tag, Frau Lehmann, hier ist der Lieferservice von Wohnwelt. Ihr neuer Schrank wird am Donnerstag zwischen acht und zwölf Uhr geliefert. Bitte sorgen Sie dafür, dass jemand zu Hause ist.',
          rf: ['Der Schrank kommt am Donnerstagvormittag.', 'richtig', 'am Donnerstag zwischen acht und zwölf Uhr geliefert', 'Der Schrank wird am Donnerstag zwischen acht und zwölf Uhr geliefert.'],
          mc: ['Frau Lehmann soll …', ['zu Hause sein.', 'zurückrufen.', 'den Schrank selbst aufbauen.'], 'a', 'Bitte sorgen Sie dafür, dass jemand zu Hause ist.', 'Es soll jemand zu Hause sein.'] },
        { script: 'Radiotipp: Am Sonntag lädt der Gärtnerhof Sonnenberg zum Kürbisfest ein. Kinder können Kürbisse schnitzen, und es gibt Kürbissuppe für alle. Wegen der wenigen Parkplätze fährt ab dem Bahnhof ein Sonderbus.',
          rf: ['Beim Kürbisfest gibt es genug Parkplätze.', 'falsch', 'Wegen der wenigen Parkplätze fährt ab dem Bahnhof ein Sonderbus.', 'Es gibt nur wenige Parkplätze, deshalb fährt ein Sonderbus.'],
          mc: ['Kinder können beim Fest …', ['Kürbisse schnitzen.', 'auf Pferden reiten.', 'Kürbisse pflanzen.'], 'a', 'Kinder können Kürbisse schnitzen', 'Kinder können Kürbisse schnitzen.'] },
        { script: 'Durchsage in der U-Bahn-Station: Sehr geehrte Fahrgäste, der Aufzug zum Bahnsteig Richtung Stadtmitte ist bis Freitag außer Betrieb. Fahrgäste mit Kinderwagen oder Rollstuhl nutzen bitte die Haltestelle Marktplatz.',
          rf: ['Der Aufzug funktioniert ab heute wieder.', 'falsch', 'ist bis Freitag außer Betrieb', 'Der Aufzug ist bis Freitag außer Betrieb.'],
          mc: ['Fahrgäste mit Kinderwagen sollen …', ['die Treppe nehmen.', 'zum Marktplatz gehen.', 'auf Hilfe warten.'], 'b', 'nutzen bitte die Haltestelle Marktplatz', 'Sie sollen die Haltestelle Marktplatz nutzen.'] },
        { script: 'Nachricht von der Tochter: Hallo Mama, hier ist Nele. Für die Klassenfahrt nach Hamburg brauche ich bis Montag noch die Unterschrift von dir oder Papa. Das Formular liegt auf dem Küchentisch. Und kannst du mir 30 Euro Taschengeld mitgeben?',
          rf: ['Nele fährt mit ihrer Klasse nach Hamburg.', 'richtig', 'Für die Klassenfahrt nach Hamburg', 'Nele macht eine Klassenfahrt nach Hamburg.'],
          mc: ['Das Formular liegt …', ['in der Schule.', 'in Neles Tasche.', 'auf dem Küchentisch.'], 'c', 'Das Formular liegt auf dem Küchentisch.', 'Das Formular liegt auf dem Küchentisch.'] },
        { script: 'Ansage der Gemeinde: Hier ist die Gemeindeverwaltung Sonnenberg. Sperrmüll wird nur noch nach Anmeldung abgeholt. Bitte melden Sie sich mindestens zwei Wochen vorher an. Elektrogeräte gehören nicht zum Sperrmüll.',
          rf: ['Sperrmüll kann man ohne Anmeldung an die Straße stellen.', 'falsch', 'Sperrmüll wird nur noch nach Anmeldung abgeholt.', 'Sperrmüll wird nur nach Anmeldung abgeholt.'],
          mc: ['Elektrogeräte …', ['holt die Gemeinde mit dem Sperrmüll ab.', 'darf man nicht zum Sperrmüll stellen.', 'muss man zwei Wochen vorher anmelden.'], 'b', 'Elektrogeräte gehören nicht zum Sperrmüll.', 'Elektrogeräte gehören nicht zum Sperrmüll.'] }
      ]
    },
    t2: {
      context: 'Sie besuchen mit Ihrer Familie eine Sternwarte und hören die Begrüßung.',
      script: 'Guten Abend und willkommen in der Sternwarte Sonnenberg! Zuerst zeige ich Ihnen im Vortragsraum einen kurzen Film über unser Sonnensystem, er dauert zwanzig Minuten. '
        + 'Danach gehen wir in die Kuppel zum großen Fernrohr. Bitte nicht fotografieren mit Blitz, das stört die Beobachtung. '
        + 'Heute können wir den Mond und den Jupiter sehen, wenn keine Wolken kommen. Am Ende gibt es für die Kinder eine kleine Sternkarte zum Mitnehmen.',
      items: [
        ['Zuerst sehen die Besucher …', ['einen Film.', 'den Mond.', 'eine Ausstellung.'], 'a', 'Zuerst zeige ich Ihnen im Vortragsraum einen kurzen Film', 'Zuerst gibt es einen Film.'],
        ['Der Film dauert …', ['zehn Minuten.', 'zwanzig Minuten.', 'eine Stunde.'], 'b', 'er dauert zwanzig Minuten', 'Der Film dauert zwanzig Minuten.'],
        ['In der Kuppel …', ['darf man nicht sprechen.', 'gibt es Getränke.', 'darf man nicht mit Blitz fotografieren.'], 'c', 'Bitte nicht fotografieren mit Blitz', 'Fotos mit Blitz sind nicht erlaubt.'],
        ['Den Jupiter sieht man nur, wenn …', ['der Himmel klar ist.', 'es dunkel ist.', 'man ein eigenes Fernglas hat.'], 'a', 'wenn keine Wolken kommen', 'Den Jupiter sieht man nur ohne Wolken.'],
        ['Die Kinder bekommen am Ende …', ['ein Foto.', 'ein Buch.', 'eine Sternkarte.'], 'c', 'eine kleine Sternkarte zum Mitnehmen', 'Die Kinder bekommen eine kleine Sternkarte.']
      ]
    },
    t3: {
      context: 'Sie sind in einem Möbelgeschäft und hören, wie ein Paar über ein Sofa spricht.',
      script: 'Kathrin: Schau mal, Marco, das graue Sofa hier. Das ist doch schön!\n'
        + 'Marco: Ja, schön schon, aber 1 400 Euro? Das ist mehr, als wir ausgeben wollten.\n'
        + 'Kathrin: Es ist im Angebot, normalerweise kostet es 1 900. Und es ist ein Schlafsofa – dann können deine Eltern bei uns übernachten.\n'
        + 'Marco: Das stimmt, das wäre praktisch. Passt es denn ins Wohnzimmer? Wir haben nur 2,20 Meter Platz.\n'
        + 'Kathrin: Es ist zwei Meter breit, ich habe schon nachgemessen.\n'
        + 'Marco: Und wie bekommen wir es in den vierten Stock? Wir haben keinen Aufzug.\n'
        + 'Kathrin: Das Geschäft liefert kostenlos und trägt es auch nach oben.\n'
        + 'Marco: Na gut, du hast mich überzeugt. Aber lass uns noch eine Nacht darüber schlafen.',
      items: [
        ['Marco findet das Sofa zu teuer.', 'richtig', 'Das ist mehr, als wir ausgeben wollten.', 'Das Sofa ist teurer, als sie ausgeben wollten.'],
        ['Das Sofa kostet heute mehr als normal.', 'falsch', 'Es ist im Angebot, normalerweise kostet es 1 900.', 'Das Sofa ist im Angebot und normalerweise teurer.'],
        ['Auf dem Sofa kann man auch schlafen.', 'richtig', 'es ist ein Schlafsofa', 'Es ist ein Schlafsofa.'],
        ['Das Sofa ist zu breit für das Wohnzimmer.', 'falsch', 'Es ist zwei Meter breit, ich habe schon nachgemessen.', 'Das Sofa ist zwei Meter breit, es gibt 2,20 Meter Platz.'],
        ['Kathrin und Marco haben einen Aufzug im Haus.', 'falsch', 'Wir haben keinen Aufzug.', 'Sie haben keinen Aufzug.'],
        ['Das Geschäft bringt das Sofa in die Wohnung.', 'richtig', 'Das Geschäft liefert kostenlos und trägt es auch nach oben.', 'Das Geschäft liefert und trägt das Sofa nach oben.'],
        ['Marco kauft das Sofa sofort.', 'falsch', 'lass uns noch eine Nacht darüber schlafen', 'Marco will noch eine Nacht darüber schlafen.']
      ]
    },
    t4: {
      speakers: ['Moderator', 'Frau Ritter', 'Herr Baumann'],
      script: 'Moderator: Guten Abend! Jugendliche dürfen schon mit 17 Auto fahren, wenn ein Erwachsener daneben sitzt. Sollte das schon ab 16 möglich sein? '
        + 'Bei mir sind Frau Ritter, Fahrlehrerin, und Herr Baumann, Vater einer 16-jährigen Tochter.\n'
        + 'Frau Ritter: Aus meiner Erfahrung machen Jugendliche, die lange mit Begleitung fahren, später weniger Unfälle. Ein Jahr mehr Übung wäre also gut.\n'
        + 'Herr Baumann: Meine Tochter würde sich freuen. Aber ich weiß nicht, ob ich die Nerven habe, jeden Tag neben ihr zu sitzen.\n'
        + 'Moderator: Und was kostet so ein Führerschein heute?\n'
        + 'Frau Ritter: Leider oft über 3 000 Euro. Das ist für viele Familien ein Problem.\n'
        + 'Herr Baumann: Auf dem Land braucht man trotzdem ein Auto. Bei uns fährt am Abend kein Bus mehr.\n'
        + 'Moderator: Ein Hörer hat uns dazu eine Nachricht geschickt.\n'
        + 'Frau Ritter: Wichtig ist, dass die Begleiter selbst ruhig fahren. Kinder machen nach, was sie sehen.\n'
        + 'Herr Baumann: Ich würde vorher gern selbst noch einmal eine Fahrstunde nehmen.',
      example: ['Thema heute: begleitetes Fahren schon ab 16?', 'a'],
      items: [
        ['Wer länger mit Begleitung fährt, hat später weniger Unfälle.', 'b', 'machen Jugendliche, die lange mit Begleitung fahren, später weniger Unfälle', 'Frau Ritter sagt, dass langes begleitetes Fahren Unfälle verringert.'],
        ['Ich bin nicht sicher, ob ich ruhig bleiben kann.', 'c', 'ob ich die Nerven habe', 'Herr Baumann weiß nicht, ob er die Nerven hat.'],
        ['Wie teuer ist ein Führerschein?', 'a', 'Und was kostet so ein Führerschein heute?', 'Der Moderator fragt nach den Kosten.'],
        ['Viele Familien können den Führerschein kaum bezahlen.', 'b', 'Das ist für viele Familien ein Problem.', 'Frau Ritter sagt, dass der Preis für viele Familien ein Problem ist.'],
        ['Ohne Auto kommt man bei uns abends nicht weg.', 'c', 'Bei uns fährt am Abend kein Bus mehr.', 'Herr Baumann sagt, dass abends kein Bus mehr fährt.'],
        ['Ein Hörer hat geschrieben.', 'a', 'Ein Hörer hat uns dazu eine Nachricht geschickt.', 'Der Moderator erwähnt die Nachricht eines Hörers.'],
        ['Die Erwachsenen sind ein Vorbild beim Fahren.', 'b', 'Kinder machen nach, was sie sehen.', 'Frau Ritter sagt, dass Jugendliche den Fahrstil der Begleiter nachmachen.'],
        ['Ich möchte selbst noch einmal üben.', 'c', 'Ich würde vorher gern selbst noch einmal eine Fahrstunde nehmen.', 'Herr Baumann möchte selbst eine Fahrstunde nehmen.']
      ]
    }
  },
  schreiben: {
    t1: { prompt: 'Sie haben am Samstag bei einem Kochwettbewerb mitgemacht. Ihr Freund Viktor möchte wissen, wie es war. Schreiben Sie Viktor eine E-Mail (circa 80 Wörter).\n\n'
      + '– Beschreiben Sie: Was haben Sie gekocht?\n– Begründen Sie: Waren Sie mit Ihrem Ergebnis zufrieden?\n– Machen Sie einen Vorschlag, zusammen zu kochen.', functions: ['describe', 'justify', 'propose'], register: 'du' },
    t2: { prompt: 'Sie haben in einer Zeitschrift einen Artikel zum Thema „Allein ins Restaurant gehen“ gelesen. Im Online-Forum der Zeitschrift finden Sie folgende Meinung. Schreiben Sie Ihre Meinung (circa 80 Wörter).',
      post: 'Renate: Seit ich allein lebe, gehe ich manchmal allein essen. Viele schauen komisch, aber ich genieße die Ruhe. Würden Sie allein in ein Restaurant gehen?', postLabel: 'Online-Forum', functions: ['opine', 'justify'], register: 'forum_neutral' },
    t3: { prompt: 'Ihre Tochter hat am Mittwoch um 11 Uhr einen Arzttermin und muss früher aus der Schule gehen. Schreiben Sie ihrem Klassenlehrer, Herrn Klein. Informieren Sie ihn und bitten Sie um Erlaubnis (circa 40 Wörter).',
      functions: ['inform', 'request'], register: 'Sie' }
  },
  sprechen: {
    t1: {
      card: 'Ihr Deutschkurs möchte am Freitag einen Filmabend im Kursraum machen. Sie planen den Abend zusammen.\n\n– Welcher Film?\n– Untertitel?\n– Essen und Getränke?\n– Technik?\n– Wer räumt auf?',
      partner: [
        'Partner: Hallo! Wir wollen doch den Filmabend für den Kurs planen. Welchen Film könnten wir zeigen?',
        'Partner: Gute Idee. Sollen wir den Film mit deutschen Untertiteln zeigen?',
        'Partner: Einverstanden. Und was gibt es zu essen und zu trinken?'
      ]
    },
    t2: { topics: ['Eine Fremdsprache im Ausland lernen?', 'Wie wichtig ist genug Schlaf?'] },
    t3: {
      partnerFemale: true,
      partnerTalk: 'Partnerin präsentiert das Thema „Wie wichtig ist genug Schlaf?“: Sie schläft nur sechs Stunden, weil sie zwei kleine Kinder hat. Am Wochenende versucht sie, am Nachmittag zu schlafen.',
      examinerQuestion: 'Prüferin: Haben Sie schon einmal im Ausland eine Sprache gelernt? Wie war das?'
    }
  }
});
