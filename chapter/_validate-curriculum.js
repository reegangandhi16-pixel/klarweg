/* Klarweg CURRICULUM validator — fails a chapter that reaches beyond its
   curriculum position. Pairs with _validate-story.js (technical gate).
   Signature: validateCurriculum(src, index, file, lexSet)
     index  = parsed _curriculum-<level>.json  {level, chapters:[{num,id,vocab}]}
     lexSet = Set of normalized KW_STORY_LEX keys (recognized German words) */

// Always-available survival glue — greetings, reactions, pronouns, articles,
// sein/haben, question words, connectors, numbers, core prepositions.
const GLUE = new Set((
 'ich du er sie es wir ihr man mich dich sich uns euch ihnen ' +
 'der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure ' +
 'bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ' +
 'ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche ' +
 'hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'guten gute herzlich zusammen wunderbar freund freunde lehrer lehrerin punkt punkte umlaut umlaute schule kurs klasse spät später gestern immer wichtig ' +
 'lang kurz schwer leicht rund mund vokal vokale silbe wort wörter klar deutlich laut leise langsam schnell ' +
 'heißen heiße heißt kommen komme kommst kommt wohnen wohne wohnst wohnt machen mache macht machst gehen gehe geht gehst ' +
 'sagen sage sagt sag sprechen spreche spricht sprich lernen lerne lernt lernst üben übe übt buchstabieren buchstabier klingen klinge klingt ' +
 'alt jung neu klein groß gleich hoch ' +
 'name deutsch herr frau'
).split(/\s+/));

const A1_GATES = [
  { label: 'Akkusativ (den/einen/für/ohne)', gate: 12, re: /\b(den|einen|keinen|deinen|meinen|seinen|ihren|unseren|euren|für|ohne|durch|gegen)\b/ },
  { label: 'Modal verb', gate: 20, re: /\b(kann|kannst|können|könnt|will|willst|wollen|wollt|muss|musst|müssen|müsst|darf|darfst|dürfen|dürft|soll|sollst|sollen|sollt|möchte|möchtest|möchten|möchtet|mag|magst|mögen)\b/ },
  { label: 'Clock time (Uhr/halb/Viertel)', gate: 21, re: /\b(uhr|halb|viertel)\b/ },
  { label: 'Präteritum', gate: 27, re: /\b(war|warst|waren|hatte|hattest|hatten|ging|kam|gab|fuhr|sah|wurde)\b/ },
  { label: 'Perfekt participle', gate: 28, re: /\bge\w+(t|en)\b|\b(gemacht|gegangen|gekommen|gesehen|gegessen|getrunken|gekauft|gelernt|gewohnt|gespielt|gesagt|gehabt|gewesen|gefahren|geblieben)\b/ },
  { label: 'Dativ (dem/einem/mir/dir/ihm)', gate: 36, re: /\b(dem|einem|keinem|meinem|deinem|seinem|ihrem|unserem|eurem|mir|dir|ihm|ihnen)\b/ },
  { label: 'man (impersonal)', gate: 43, re: /\bman\b/ },
  { label: 'Subordinate conj (weil/dass/obwohl…)', gate: 999, re: /\b(weil|dass|obwohl|damit|deshalb|trotzdem)\b/ },
  { label: 'wenn-clause', gate: 999, re: /\bwenn\b/ },
  { label: 'Komparativ (…er als / am …sten)', gate: 999, re: /\b\w+er als\b|\bam \w+sten\b/ }
];
const PLACE_CHUNK = /\b(aus|in|nach)\s+[A-ZÄÖÜ]/;

function norm(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculum(src, index, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chapters=index.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chapters.find(c=>c.id===id)||chapters.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in index'],warnings:[]};
  // firstIntro: base word -> earliest chapter number that lists it in vocab
  const firstIntro=new Map();
  chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w,c.num); })));
  const introOf=w=>{ let m=null; for(const b of bases(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };
  const recog=w=>{ if(GLUE.has(w)) return true; for(const b of bases(w)){ if(GLUE.has(b)||lexSet.has(b)||firstIntro.has(b)) return true; } return false; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  // grammar gates
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    A1_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ if(g.gate===36&&PLACE_CHUNK.test(raw)) return; errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate ch'+(g.gate===999?'A2+':g.gate)+' > ch'+me.num+')'); }});
  });
  // vocabulary
  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper(t)) return;
    const w=norm(t.w); if(!w) return; content++;
    if(GLUE.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !recog(w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(ratio>0.15) errors.push('new-vocab ratio '+(ratio*100).toFixed(0)+'% > 15% ('+newCount+'/'+content+')');
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
