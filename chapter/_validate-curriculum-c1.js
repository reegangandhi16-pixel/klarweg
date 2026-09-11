
/* Klarweg C1 CURRICULUM validator — same shape as _validate-curriculum-b2.js but
   gates match C1's own grammar/register sequence. Vocab pool = ALL A1+A2+B1+B2 + C1 chapters up to and including current.
   Usage: validateCurriculumC1(src, idxA1, idxA2, idxB1, idxB2, idxC1, file, lexSet) */

const GLUE_C1 = new Set(('ich du er sie es wir ihr man mich dich sich uns euch ihnen der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'name deutsch herr frau').split(/\s+/));

const C1_GATES = [
 { label: 'Präpositionen mit Genitiv (anspruchsvoll: mittels/kraft/zwecks)', gate: 7, re: /\b(mittels|kraft|zwecks)\b/ },
 { label: 'anspruchsvolle Präpositionen (unweit/binnen/seitens)', gate: 8, re: /\b(unweit|binnen|seitens)\b/ },
 { label: 'Modalverben Vermutungen (dürfte/müsste/könnte + sein/haben, präzise)', gate: 13, re: /\b(dürfte|müsste)\b/ },
 { label: 'Konjunktiv II für Irreales/Hypothesen (wäre/hätte + Konjunktiv-Konstruktion)', gate: 14, re: /\b(wäre|hätte|wären|hätten)\b[^.!?]*\b(wenn|falls)\b/ },
 { label: 'Konjunktiv I und indirekte Rede', gate: 15, re: /\b(sei|könne|wolle|müsse|solle|dürfe)\b/ },
 { label: 'Steigerung und sprachliche Abstufung (weitaus/bei weitem/ungleich + Komparativ)', gate: 19, re: /\b(weitaus|bei weitem|ungleich)\s+\w+(er|ere|eren)\b/ },
 { label: 'Partizipialattribute (erweitert: der/die/das + Adverb + Partizip + Nomen)', gate: 21, re: /\b(der|die|das)\s+\w+\s+ge\w+(te|ten|nes|ner|nde|nden)\s+[A-ZÄÖÜ]\w+/ },
 { label: 'komplexe Attribute und Nominalgruppen', gate: 22, re: /\b(der|die|das)\s+(im|in|an|auf|von|mit|zur|zum)\s+\w+\s+\w+(e|en|es|er)\s+[A-ZÄÖÜ]\w+/ },
 { label: 'Nominalisierung im formellen Stil', gate: 24, re: /\b(Erhöhung|Verringerung|Feststellung|Untersuchung|Betrachtung|Beobachtung|Umsetzung|Auswirkung|Berücksichtigung)\b/ },
 { label: 'Partizipien/Adjektive als Nomen', gate: 25, re: /\b(der|die)\s+(Betroffene|Beteiligte|Vorsitzende|Angestellte|Reisende)\b/ },
 { label: 'Passiversatzformen (sich lassen/-bar/-abel)', gate: 26, re: /\blässt?\s+sich\b|\b(mach|trink|lös|erklär|les|sicht|verfüg|zahl|nutz|sicht)(bar)\b|\w+(abel)\b/ },
 { label: 'Funktionsverbgefüge im akademischen Deutsch', gate: 27, re: /\b(in\s+Betracht\s+ziehen|zur\s+Anwendung\s+kommen|Berücksichtigung\s+finden|in\s+Anspruch\s+nehmen)\b/ },
 { label: 'Adversativangaben (jedoch/allerdings/hingegen/demgegenüber)', gate: 31, re: /\b(hingegen|demgegenüber)\b/ },
 { label: 'Kohärenz und Textverknüpfung (diesbezüglich/dementsprechend/somit)', gate: 32, re: /\b(diesbezüglich|dementsprechend|somit)\b/ },
 { label: 'Konzession und Abwägen (so...auch)', gate: 35, re: /\bso\s+\w+\s+(er|sie|es|wir|ich|du)\s+auch\b/ },
 { label: 'Register und Stilebenen (sehr formelle Verben: vermögen, gereichen, obliegen)', gate: 36, re: /\b(vermag|vermögen|gereicht|obliegt)\b/ }
];

function norm_c1(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases_c1(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper_c1(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculumC1(src, idxA1, idxA2, idxB1, idxB2, idxC1, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chaptersC1=idxC1.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chaptersC1.find(c=>c.id===id)||chaptersC1.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in C1 index'],warnings:[]};

  const firstIntro=new Map();
  idxA1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -4000+c.num); })));
  idxA2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -3000+c.num); })));
  idxB1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -2000+c.num); })));
  idxB2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c1(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -1000+c.num); })));
  chaptersC1.filter(c=>c.num<=me.num).forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c1(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w, c.num); })));
  const introOf=w=>{ let m=null; for(const b of bases_c1(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    C1_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate c1-ch'+g.gate+' > c1-ch'+me.num+')'); }});
  });

  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper_c1(t)) return;
    const w=norm_c1(t.w); if(!w) return; content++;
    if(GLUE_C1.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(c1-ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !unknown.includes(t.w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
