/* ============================================================
   KLARWEG STORY LEXICON  —  Gold-standard, 100% explicit.
   Every distinct word that appears in any chapter Story Dialogue
   has an EXACT entry here. No inference, no POS fallback.
   Shape:  word(normalized, lowercase, no marks) :
           [ role, english, hindi(Roman), pronunciation, type ]
   role ∈ r-subject r-pronoun r-verb r-modalverb r-object r-adjective
          r-adverb r-time r-place r-preposition r-conjunction
          r-article r-negation r-akkusativ r-dativ r-question
          r-name r-letter
   Loaded before chapter-app.js; exposed as window.KW_STORY_LEX (expanded objects).
   ============================================================ */
(function () {
  var R = {
    // ---- letters & sounds (Alphabet / Vokale chapters) ----
    a:['r-letter','the letter A','akshar A','ah','Letter'], e:['r-letter','the letter E','akshar E','eh','Letter'],
    h:['r-letter','the letter H','akshar H','hah','Letter'], i:['r-letter','the letter I','akshar I','ee','Letter'],
    m:['r-letter','the letter M','akshar M','em','Letter'], n:['r-letter','the letter N','akshar N','en','Letter'],
    o:['r-letter','the letter O','akshar O','oh','Letter'], r:['r-letter','the letter R','akshar R','err','Letter'],
    u:['r-letter','the letter U','akshar U','oo','Letter'], x:['r-letter','the letter X','akshar X','iks','Letter'],
    'ä':['r-letter','the vowel Ä','swar Ä','eh','Vowel'], 'ö':['r-letter','the vowel Ö','swar Ö','er','Vowel'],
    'ü':['r-letter','the vowel Ü','swar Ü','ue','Vowel'], 'üüü':['r-letter','the Ü sound','Ü ki dhwani','ueee','Sound'],

    // ---- names (people, cities, regions) ----
    anna:['r-name','Anna (classmate)','Anna','A-na','Name · person'], max:['r-name','Max (classmate)','Max','maks','Name · person'],
    rohan:['r-name','Rohan (learner)','Rohan','RO-han','Name · person'], weber:['r-name','Weber (teacher)','Weber','VAY-ber','Name · surname'],
    sharma:['r-name','Sharma','Sharma','SHAR-ma','Name · surname'], klein:['r-name','Klein (surname)','Klein','kline','Name · surname'],
    berlin:['r-name','Berlin','Berlin','bair-LEEN','Name · city'], delhi:['r-name','Delhi','Delhi','DE-li','Name · city'],
    'münchen':['r-name','Munich','München','MÜN-khen','Name · city'], hamburg:['r-name','Hamburg','Hamburg','HAM-burk','Name · city'],
    kreuzberg:['r-name','Kreuzberg (Berlin area)','Kreuzberg','KROYTS-bairk','Name · district'], indien:['r-name','India','Bharat','IN-dee-en','Name · country'],

    // ---- pronouns: subject ----
    ich:['r-subject','I','main','ikh','Pronoun · subject'], du:['r-subject','you (informal)','tum','doo','Pronoun · subject'],
    es:['r-subject','it','yeh','es','Pronoun · subject'], wir:['r-subject','we','hum','veer','Pronoun · subject'],
    ihr:['r-subject','you (plural)','tum sab','eer','Pronoun · subject'], man:['r-subject','one / you','koi','mahn','Pronoun · impersonal'],
    sie:['r-subject','she / they / you (formal)','vah / ve / aap','zee','Pronoun · subject'],
    alle:['r-subject','everyone / all','sab','A-luh','Pronoun · indefinite'],
    // pronouns: accusative
    mich:['r-akkusativ','me','mujhe','mikh','Pronoun · accusative'], dich:['r-akkusativ','you','tumhe','dikh','Pronoun · accusative'],
    euch:['r-akkusativ','you (plural)','tum sabko','oykh','Pronoun · accusative'], etwas:['r-akkusativ','something','kuch','ET-vas','Pronoun · indefinite'],
    // pronouns: dative
    mir:['r-dativ','(to) me','mujhe','meer','Pronoun · dative'], dir:['r-dativ','(to) you','tumhe','deer','Pronoun · dative'],
    // indefinite object/negative pronouns
    alles:['r-object','everything','sab kuch','A-les','Pronoun · indefinite'], nichts:['r-negation','nothing','kuch nahi','nikhts','Pronoun · negative'],

    // ---- articles & possessives ----
    der:['r-article','the (masc.)','vah','dair','Article · definite'], die:['r-article','the (fem./pl.)','vah / ve','dee','Article · definite'],
    das:['r-article','the (neut.) / that','vah / yeh','das','Article · definite'], den:['r-article','the (masc. acc.)','vah','dayn','Article · accusative'],
    dem:['r-article','the (dat.)','vah','daym','Article · dative'], ein:['r-article','a / an (masc./neut.)','ek','ine','Article · indefinite'],
    eine:['r-article','a / an (fem.)','ek','EYE-nuh','Article · indefinite'], einen:['r-article','a / an (masc. acc.)','ek','EYE-nen','Article · accusative'],
    mein:['r-article','my','mera','mine','Possessive'], meine:['r-article','my','meri','MY-nuh','Possessive'],
    dein:['r-article','your','tera','dine','Possessive'], deine:['r-article','your','teri','DY-nuh','Possessive'],
    seine:['r-article','his / its','uska','ZY-nuh','Possessive'],
    welchen:['r-question','which (masc. acc.)','kaunsa','VEL-khen','Question · article'],

    // ---- negation ----
    nicht:['r-negation','not','nahi','nikht','Negation'], kein:['r-negation','no / not a (masc./neut.)','koi nahi','kine','Negation'],
    keine:['r-negation','no / not a (fem./pl.)','koi nahi','KY-nuh','Negation'], keinen:['r-negation','no / not a (masc. acc.)','koi nahi','KY-nen','Negation'],
    nein:['r-negation','no','nahi','nine','Answer · no'],

    // ---- question words ----
    was:['r-question','what','kya','vas','Question word'], wie:['r-question','how / what','kaise','vee','Question word'],
    wo:['r-question','where','kahan','voh','Question word'], woher:['r-question','where from','kahan se','vo-HAIR','Question word'],
    wann:['r-question','when','kab','van','Question word'], warum:['r-question','why','kyon','va-RUM','Question word'],
    wer:['r-question','who','kaun','vair','Question word'],

    // ---- prepositions ----
    'in':['r-preposition','in','mein','in','Preposition'], aus:['r-preposition','from / out of','se','ows','Preposition'],
    mit:['r-preposition','with','ke saath','mit','Preposition'], 'für':['r-preposition','for','ke liye','für','Preposition'],
    ohne:['r-preposition','without','ke bina','OH-nuh','Preposition'], zu:['r-preposition','to','ko','tsoo','Preposition'],
    zum:['r-preposition','to the','ke liye','tsoom','Preposition'], ins:['r-preposition','into the','ke andar','ins','Preposition'],
    bei:['r-preposition','at / with','ke paas','by','Preposition'], beim:['r-preposition','at the / while','ke samay','bime','Preposition'],
    am:['r-preposition','on / at the','par','am','Preposition'], von:['r-preposition','from / of','se / ka','fon','Preposition'],
    nach:['r-preposition','after / to','ke baad','nahkh','Preposition'], 'über':['r-preposition','about / over','ke baare mein','Ü-ber','Preposition'],
    vor:['r-preposition','before / in front of','ke saamne','for','Preposition'],

    // ---- conjunctions & connectors ----
    und:['r-conjunction','and','aur','unt','Conjunction'], oder:['r-conjunction','or','ya','OH-der','Conjunction'],
    aber:['r-conjunction','but','lekin','AH-ber','Conjunction'], bis:['r-conjunction','until / see you','tak','bis','Conjunction'],
    dann:['r-adverb','then','phir','dan','Adverb · connector'], noch:['r-adverb','still / yet','abhi bhi','nokh','Adverb · connector'],
    plus:['r-conjunction','plus','aur (jod)','plus','Math operator'],

    // ---- verbs: sein / haben ----
    bin:['r-verb','am','hoon','bin','Verb · sein (ich)'], bist:['r-verb','are','ho','bist','Verb · sein (du)'],
    ist:['r-verb','is','hai','ist','Verb · sein (er/sie/es)'], sind:['r-verb','are','hain','zint','Verb · sein (wir/sie)'],
    seid:['r-verb','are','ho','zide','Verb · sein (ihr)'], sein:['r-verb','to be','hona','zine','Verb · infinitive'],
    habe:['r-verb','have','hai (mere paas)','HA-buh','Verb · haben (ich)'], hast:['r-verb','have','hai (tere paas)','hast','Verb · haben (du)'],
    hat:['r-verb','has','hai (uske paas)','hat','Verb · haben (er/sie/es)'],

    // ---- verbs: common A1 ----
    'heiße':['r-verb','am called','naam hai','HY-suh','Verb · heißen (ich)'], 'heißt':['r-verb','is called','naam hai','hyst','Verb · heißen'],
    helfen:['r-verb','to help','madad karna','HEL-fen','Verb · helfen'], komme:['r-verb','come','aata hoon','KOM-uh','Verb · kommen (ich)'],
    kommst:['r-verb','come','aate ho','komst','Verb · kommen (du)'], kommt:['r-verb','comes','aata hai','komt','Verb · kommen'],
    wohne:['r-verb','live','rehta hoon','VOH-nuh','Verb · wohnen (ich)'], wohnst:['r-verb','live','rehte ho','vohnst','Verb · wohnen (du)'],
    lerne:['r-verb','learn','seekhta hoon','LAIR-nuh','Verb · lernen (ich)'], lernen:['r-verb','to learn','seekhna','LAIR-nen','Verb · lernen'],
    lernst:['r-verb','learn','seekhte ho','lairnst','Verb · lernen (du)'], arbeite:['r-verb','work','kaam karta hoon','AR-by-tuh','Verb · arbeiten (ich)'],
    beginnt:['r-verb','begins','shuru hota hai','be-GINT','Verb · beginnen'], besuche:['r-verb','visit','milta hoon','be-ZOO-khuh','Verb · besuchen (ich)'],
    brauche:['r-verb','need','zaroorat hai','BROW-khuh','Verb · brauchen (ich)'], brauchst:['r-verb','need','zaroorat hai','browkhst','Verb · brauchen (du)'],
    buchstabiere:['r-verb','spell','vartani bolta hoon','bookh-shta-BEE-ruh','Verb · buchstabieren'], esse:['r-verb','eat','khaata hoon','E-suh','Verb · essen (ich)'],
    essen:['r-verb','to eat','khaana','E-sen','Verb · essen'], finde:['r-verb','find','lagta hai','FIN-duh','Verb · finden (ich)'],
    findest:['r-verb','find','lagta hai','FIN-dest','Verb · finden (du)'], frag:['r-verb','ask!','poochho','frahk','Verb · fragen (imperative)'],
    gefunden:['r-verb','found','mil gaya','ge-FUN-den','Verb · finden (perfect)'], gehen:['r-verb','to go','jaana','GAY-en','Verb · gehen'],
    gehts:['r-verb','is going','chal raha hai','gayts','Verb · gehen (wie geht\u2019s)'], kaufe:['r-verb','buy','khareedta hoon','KOW-fuh','Verb · kaufen (ich)'],
    koche:['r-verb','cook','khaana banaata hoon','KO-khuh','Verb · kochen (ich)'], mache:['r-verb','do / make','karta hoon','MA-khuh','Verb · machen (ich)'],
    machen:['r-verb','to do / make','karna','MA-khen','Verb · machen'], machst:['r-verb','do / make','karte ho','makhst','Verb · machen (du)'],
    sagen:['r-verb','to say','kehna','ZAH-gen','Verb · sagen'], sagt:['r-verb','says','kehta hai','zahkt','Verb · sagen'],
    schreibe:['r-verb','write','likhta hoon','SHRY-buh','Verb · schreiben (ich)'], spiele:['r-verb','play','khelta hoon','SHPEE-luh','Verb · spielen (ich)'],
    sprecht:['r-verb','speak','bolte ho','shprekht','Verb · sprechen (ihr)'], sprich:['r-verb','speak!','bolo','shprikh','Verb · sprechen (imperative)'],
    stellt:['r-verb','introduce / place','rakhta hai','shtelt','Verb · stellen'], suche:['r-verb','look for','dhoondhta hoon','ZOO-khuh','Verb · suchen (ich)'],
    trinke:['r-verb','drink','peeta hoon','TRIN-kuh','Verb · trinken (ich)'], 'übt':['r-verb','practise!','abhyaas karo','üpt','Verb · üben (ihr)'],
    'üben':['r-verb','to practise','abhyaas karna','Ü-ben','Verb · üben'], warte:['r-verb','wait','ruko','VAR-tuh','Verb · warten'],
    'zählen':['r-verb','to count','ginna','TSAY-len','Verb · zählen'], tut:['r-verb','does (tut mir leid)','hota hai','toot','Verb · tun'],
    klinge:['r-verb','sound','aawaaz karta hoon','KLING-uh','Verb · klingen (ich)'],

    // ---- modal verbs ----
    muss:['r-modalverb','must / have to','chahiye','mus','Modal · müssen (ich)'], 'möchte':['r-modalverb','would like','chahta hoon','MÖKH-tuh','Modal · möchten (ich)'],
    'möchtet':['r-modalverb','would like','chahte ho','MÖKH-tet','Modal · möchten (ihr)'], 'mögt':['r-modalverb','like','pasand hai','mökt','Modal · mögen (ihr)'],

    // ---- adjectives ----
    alt:['r-adjective','old','purana / umar','alt','Adjective'], arm:['r-adjective','poor','gareeb','arm','Adjective'],
    bereit:['r-adjective','ready','taiyaar','be-RITE','Adjective'], blau:['r-adjective','blue','neela','blow','Adjective'],
    faul:['r-adjective','lazy','aalsi','fowl','Adjective'], feminin:['r-adjective','feminine','streeling','FE-mi-neen','Adjective · grammar'],
    'fleißig':['r-adjective','hardworking','mehnati','FLY-sikh','Adjective'], frei:['r-adjective','free','khaali / mukt','fry','Adjective'],
    frisch:['r-adjective','fresh','taaza','frish','Adjective'], froh:['r-adjective','glad','khush','froh','Adjective'],
    'groß':['r-adjective','big','bada','grohs','Adjective'], 'grün':['r-adjective','green','hara','grün','Adjective'],
    gut:['r-adjective','good','achha','goot','Adjective'], guten:['r-adjective','good (greeting form)','achha','GOO-ten','Adjective'],
    guter:['r-adjective','good (masc.)','achha','GOO-ter','Adjective'], interessant:['r-adjective','interesting','dilchasp','in-te-re-SANT','Adjective'],
    internationale:['r-adjective','international','antarrashtriya','in-ter-nat-syo-NAH-luh','Adjective'], kalt:['r-adjective','cold','thanda','kalt','Adjective'],
    kaputt:['r-adjective','broken','kharaab','ka-PUT','Adjective'], kleiner:['r-adjective','small (masc.) / smaller','chhota','KLY-ner','Adjective'],
    kurz:['r-adjective','short','chhota / kam','kurts','Adjective'], lang:['r-adjective','long','lamba','lang','Adjective'],
    langsam:['r-adjective','slow','dheere','LANG-zam','Adjective'], lecker:['r-adjective','tasty','swaadisht','LE-ker','Adjective'],
    lustig:['r-adjective','funny','mazedaar','LUS-tikh','Adjective'], nett:['r-adjective','nice','achha','net','Adjective'],
    neu:['r-adjective','new','naya','noy','Adjective'], neutrum:['r-object','neuter (gender)','napunsak ling','NOY-trum','Noun · grammar'],
    orange:['r-adjective','orange','naarangi','o-RAHN-zhuh','Adjective'], perfekt:['r-adjective','perfect','perfect','per-FEKT','Adjective'],
    praktisch:['r-adjective','practical','vyavhaarik','PRAK-tish','Adjective'], richtig:['r-adjective','correct','sahi','RIKH-tikh','Adjective'],
    rund:['r-adjective','round','gol','runt','Adjective'], schwer:['r-adjective','hard / heavy','mushkil','shvair','Adjective'],
    'schön':['r-adjective','lovely / nice','sundar','shön','Adjective'], super:['r-adjective','great','badhiya','ZOO-per','Adjective'],
    supernett:['r-adjective','super nice','bahut achhe','ZOO-per-net','Adjective'], toll:['r-adjective','great','shaandaar','tol','Adjective'],
    typisch:['r-adjective','typical','typical','TÜ-pish','Adjective'], wunderbar:['r-adjective','wonderful','adbhut','VUN-der-bar','Adjective'],
    wunderbare:['r-adjective','wonderful','adbhut','VUN-der-bah-ruh','Adjective'], 'wunderschön':['r-adjective','beautiful','khoobsurat','VUN-der-shön','Adjective'],
    entspannt:['r-adjective','relaxed','relaxed','ent-SHPANT','Adjective'],

    // ---- adverbs / interjections / politeness ----
    auch:['r-adverb','also / too','bhi','owkh','Adverb'], bitte:['r-adverb','please','kripya','BI-tuh','Politeness'],
    danke:['r-adverb','thanks','dhanyavaad','DAN-kuh','Politeness'], 'früh':['r-adverb','early','jaldi','frü','Adverb · time'],
    genau:['r-adverb','exactly','bilkul','ge-NOW','Adverb'], gern:['r-adverb','gladly','khushi se','gairn','Adverb'],
    gerne:['r-adverb','gladly','khushi se','GAIR-nuh','Adverb'], herzlich:['r-adverb','warmly','dil se','HERTS-likh','Adverb'],
    immer:['r-adverb','always','hamesha','IM-er','Adverb'], leid:['r-adverb','sorry (tut mir leid)','afsos','lite','Idiom · sorry'],
    los:['r-adverb','let\u2019s go / off','chalo','lohs','Adverb'], mehr:['r-adverb','more','aur / zyaada','mair','Adverb'],
    'natürlich':['r-adverb','of course','bilkul','na-TÜR-likh','Adverb'], nur:['r-adverb','only','sirf','noor','Adverb'],
    sehr:['r-adverb','very','bahut','zair','Adverb'], 'überall':['r-adverb','everywhere','har jagah','Ü-ber-al','Adverb'],
    viel:['r-adverb','a lot / much','bahut','feel','Adverb'], hey:['r-adverb','hey','arey','hay','Interjection'],
    'tschüs':['r-adverb','bye','alvida','chüs','Greeting · informal'], hallo:['r-adverb','hello','namaste','HA-lo','Greeting · informal'],
    willkommen:['r-adjective','welcome','swaagat','vil-KOM-en','Adjective · greeting use'], entschuldigung:['r-adverb','excuse me / sorry','maaf kijiye','ent-SHUL-di-gung','Politeness'],
    ja:['r-adverb','yes','haan','yah','Answer · yes'],

    // ---- time words / nouns ----
    abend:['r-time','evening','shaam','AH-bent','Noun · time'], heute:['r-time','today','aaj','HOY-tuh','Adverb · time'],
    jetzt:['r-time','now','abhi','yetst','Adverb · time'], 'später':['r-time','later','baad mein','SHPAY-ter','Adverb · time'],
    morgen:['r-time','tomorrow / morning','kal / subah','MOR-gen','Noun/Adverb · time'], winter:['r-time','winter','sardi','VIN-ter','Noun · season'],
    wochenende:['r-time','weekend','weekend','VO-khen-en-duh','Noun · time'], jahre:['r-object','years','saal','YAH-ruh','Noun · plural'],
    zeit:['r-object','time','samay','tsite','Noun'], tag:['r-object','day','din','tahk','Noun'], jeden:['r-object','every','har','YAY-den','Adjective · determiner'],

    // ---- nouns (objects) ----
    alphabet:['r-object','alphabet','varnmala','AL-fa-bet','Noun'], alter:['r-object','age','umar','AL-ter','Noun'],
    apfel:['r-object','apple','seb','AP-fel','Noun · masc.'], arbeit:['r-object','work / job','kaam','AR-bite','Noun · fem.'],
    artikel:['r-object','article','article','ar-TEE-kel','Noun · masc.'], bananen:['r-object','bananas','kele','ba-NAH-nen','Noun · plural'],
    betonung:['r-object','stress / emphasis','zor','be-TOH-nung','Noun · fem.'], 'brötchen':['r-object','bread roll','bun','BRÖT-khen','Noun · neut.'],
    buch:['r-object','book','kitaab','bookh','Noun · neut.'], buchstaben:['r-object','letters','akshar','BOOKH-shtah-ben','Noun · plural'],
    computerspiele:['r-object','computer games','computer games','kom-PYOO-ter-shpee-luh','Noun · plural'], fahrrad:['r-object','bicycle','cycle','FAR-raht','Noun · neut.'],
    farben:['r-object','colours','rang','FAR-ben','Noun · plural'], fleisch:['r-object','meat','maans','flysh','Noun · neut.'],
    freund:['r-object','friend','dost','froynt','Noun · masc.'], freunde:['r-object','friends','dost','FROYN-duh','Noun · plural'],
    freunden:['r-object','friends (dat.)','doston','FROYN-den','Noun · plural'], geld:['r-object','money','paise','gelt','Noun · neut.'],
    geist:['r-object','mind / spirit','dimaag','guyst','Noun · masc.'], 'geschäft':['r-object','shop','dukaan','ge-SHEFT','Noun · neut.'],
    gitarre:['r-object','guitar','guitar','gi-TA-ruh','Noun · fem.'], gruppe:['r-object','group','samooh','GRU-puh','Noun · fem.'],
    handynummer:['r-object','mobile number','mobile number','HEN-di-num-er','Noun · fem.'], heft:['r-object','exercise book','copy','heft','Noun · neut.'],
    hunger:['r-object','hunger','bhookh','HUNG-er','Noun · masc.'], kaffee:['r-object','coffee','coffee','KA-fay','Noun · masc.'],
    kaffeemaschine:['r-object','coffee machine','coffee machine','KA-fay-ma-shee-nuh','Noun · fem.'], karte:['r-object','card / map','card','KAR-tuh','Noun · fem.'],
    'käse':['r-object','cheese','cheese','KAY-zuh','Noun · masc.'], kurs:['r-object','course / class','course','kurs','Noun · masc.'],
    leute:['r-object','people','log','LOY-tuh','Noun · plural'], mund:['r-object','mouth','muh','munt','Noun · masc.'],
    'müsli':['r-object','muesli','muesli','MÜS-li','Noun · neut.'], nachname:['r-object','surname','upnaam','NAHKH-nah-muh','Noun · masc.'],
    name:['r-object','name','naam','NAH-muh','Noun · masc.'], nomen:['r-object','noun','sangya','NOH-men','Noun · neut.'],
    obst:['r-object','fruit','phal','ohpst','Noun · neut.'], phase:['r-object','phase','charan','FAH-zuh','Noun · fem.'],
    preise:['r-object','prices','daam','PRY-zuh','Noun · plural'], problem:['r-object','problem','samasya','pro-BLAYM','Noun · neut.'],
    'schlüssel':['r-object','key','chaabi','SHLÜ-sel','Noun · masc.'], stadt:['r-object','city','sheher','shtat','Noun · fem.'],
    stift:['r-object','pen','pen','shtift','Noun · masc.'], tee:['r-object','tea','chai','tay','Noun · masc.'],
    telefon:['r-object','telephone','phone','TE-le-fohn','Noun · neut.'], test:['r-object','test','test','test','Noun · masc.'],
    tisch:['r-object','table','mez','tish','Noun · masc.'], trick:['r-object','trick','tarkeeb','trik','Noun · masc.'],
    umlaute:['r-object','umlauts','umlaut','UM-low-tuh','Noun · plural'], vokal:['r-object','vowel','swar','vo-KAHL','Noun · masc.'],
    vokale:['r-object','vowels','swar','vo-KAH-luh','Noun · plural'], vorname:['r-object','first name','pehla naam','FOR-nah-muh','Noun · masc.'],
    wetter:['r-object','weather','mausam','VE-ter','Noun · neut.'], zahlen:['r-object','numbers','sankhya','TSAH-len','Noun · plural'],
    deutsch:['r-object','German (language)','German','doytsh','Noun · language'], deutschkurs:['r-object','German course','German course','DOYTSH-kurs','Noun · masc.'],
    wfrage:['r-object','W-question','W-prashna','VAY-frah-guh','Noun · fem.'], frage:['r-object','question','prashna','FRAH-guh','Noun · fem.'],
    caf:['r-object','café','café','ka-FAY','Noun · neut.'], schade:['r-adverb','what a pity','afsos','SHAH-duh','Interjection'],

    // ---- numbers ----
    null:['r-object','zero','shoonya','nul','Number'], eins:['r-object','one','ek','ines','Number'], zwei:['r-object','two','do','tsvy','Number'],
    drei:['r-object','three','teen','dry','Number'], vier:['r-object','four','char','feer','Number'], sieben:['r-object','seven','saat','ZEE-ben','Number'],
    acht:['r-object','eight','aath','akht','Number'], neun:['r-object','nine','nau','noyn','Number'], zehn:['r-object','ten','das','tsayn','Number'],
    einundzwanzig:['r-object','twenty-one','ikkees','INE-unt-tsvan-tsikh','Number'], sechsundzwanzig:['r-object','twenty-six','chhabbees','ZEKS-unt-tsvan-tsikh','Number'],

    // ---- place ----
    hier:['r-place','here','yahan','heer','Adverb · place'], hause:['r-place','home (zu Hause)','ghar','HOW-zuh','Noun · place'],
    rein:['r-place','in / inside (komm rein)','andar','rine','Adverb · place'],
    zusammen:['r-adverb','together','saath','tsu-ZA-men','Adverb'],
    frau:['r-object','Mrs / woman','shrimati','frow','Noun · title'],
    im:['r-preposition','in the','mein','im','Preposition (in dem)']
  };

  var KEYS = ['role','en','hi','pron','type'];
  var OUT = {};
  for (var k in R) {
    var a = R[k], o = {};
    for (var j = 0; j < KEYS.length; j++) o[KEYS[j]] = a[j];
    OUT[k] = o;
  }
  window.KW_STORY_LEX = OUT;
})();
