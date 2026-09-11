
/* Klarweg C2 CURRICULUM validator — same shape as _validate-curriculum-c1.js but
   gates match C2's own near-native grammar/register sequence. Vocab pool = ALL A1+A2+B1+B2+C1 + C2 chapters up to and including current.
   Usage: validateCurriculumC2(src, idxA1, idxA2, idxB1, idxB2, idxC1, idxC2, file, lexSet) */

const GLUE_C2 = new Set(('ich du er sie es wir ihr man mich dich sich uns euch ihnen der die das den dem des ein eine einen einem einer eines kein keine keinen keinem ' +
 'mein meine meinen meinem dein deine deinen deinem sein seine seinen ihr ihre unser unsere euer eure bin bist ist sind seid sein habe hast hat haben ' +
 'und oder aber denn sondern ja nein nicht doch bitte danke gut schön sehr genau super prima toll okay ok ah oh na klar gern richtig ' +
 'wer was wie wo wann warum woher wohin welche hier da dort jetzt heute auch noch schon nur mehr bald ' +
 'hallo tschüs ciao willkommen wiedersehen auf bis freut morgen tag abend nacht ' +
 'in an auf aus mit zu nach von bei über unter vor ' +
 'null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn zwanzig hundert ' +
 'name deutsch herr frau').split(/\s+/));

const C2_GATES = [
 { label: 'Diskursmarker (gehoben: demgegenüber/demnach/dennoch/gleichwohl/hingegen/indes/infolgedessen/mithin/wohingegen/zumal)', gate: 10, re: /\b(gleichwohl|indes|infolgedessen|mithin|wohingegen|zumal)\b/ },
 { label: 'Relativsätze mit Präposition+Pronomen (wonach/worauf/mittels derer/anhand derer)', gate: 11, re: /\b(wonach|worauf|mittels derer|anhand derer)\b/ },
 { label: 'Passiv-Nominalkonstruktionen (Es wurde festgestellt/Es konnte gezeigt werden/Es lässt sich beobachten)', gate: 12, re: /\bes\s+(wurde|wird)\s+\w*\s*(festgestellt|gezeigt|nachgewiesen)\b|\bes\s+lässt\s+sich\s+\w+\s*,?\s*dass\b/ },
 { label: 'Passiversatzformen auf -bar (belastbar/skalierbar/erneuerbar/haftbar/messbar)', gate: 13, re: /\b(belastbar|skalierbar|erneuerbar|haftbar|messbar)\b/ },
 { label: 'Partizipien als prädikative Adjektive (differenziert/richtungsweisend/wegweisend/bahnbrechend/reflektiert/fundiert)', gate: 15, re: /\b(richtungsweisend|wegweisend|bahnbrechend)\b/ },
 { label: 'nominalisierte Adjektive/Partizipien (der Abgeordnete/der Angeklagte/das Wesentliche/das Entscheidende)', gate: 16, re: /\b(der|die)\s+(Abgeordnete|Angeklagte)\b|\bdas\s+(Wesentliche|Entscheidende)\b/ },
 { label: 'Adjektive mit Ergänzungen (entschlossen zu/gewillt zu/verpflichtet zu)', gate: 19, re: /\b(entschlossen|gewillt|verpflichtet)\s+zu\b/ },
 { label: 'Wortbildung der Adjektive (lösungsorientiert/zukunftsfähig/wettbewerbsfähig/anpassungsfähig/durchsetzungsfähig/konkurrenzfähig)', gate: 21, re: /\b(lösungsorientiert|zukunftsfähig|wettbewerbsfähig|anpassungsfähig|durchsetzungsfähig|konkurrenzfähig)\b/ },
 { label: 'Apposition mit Komma-Beisatz (die Studie … , … , zeigt)', gate: 25, re: /\bdie\s+apposition\b|\bder\s+beisatz\b/ },
 { label: 'Kollokationen/Idiomatik (Schlagzeilen machen/den Nerv der Zeit treffen/am Puls der Zeit sein/sich einen Namen machen)', gate: 27, re: /\b(schlagzeilen\s+machen|den\s+nerv\s+der\s+zeit\s+treffen|am\s+puls\s+der\s+zeit|sich\s+einen\s+namen\s+machen)\b/ }
];

function norm_c2(w){ return String(w||'').toLowerCase().replace(/^[^a-zäöüß]+|[^a-zäöüß]+$/g,''); }
function bases_c2(w){
  const out=new Set([w]);
  ['e','st','t','en','te','test','ten','tet','er','es','em','n','s'].forEach(e=>{ if(w.length>e.length+1&&w.endsWith(e)){const st=w.slice(0,-e.length); out.add(st); out.add(st+'e'); out.add(st+'en');}});
  out.add(w+'en'); out.add(w+'e');
  return [...out];
}
function isProper_c2(t){
  const ty=(t.type||'').toLowerCase();
  return t.role==='r-name'||/name|city|country|letter|vowel|sound|greeting|title|district|surname/.test(ty);
}

function validateCurriculumC2(src, idxA1, idxA2, idxB1, idxB2, idxC1, idxC2, file, lexSet){
  lexSet = lexSet || new Set();
  const errors=[], warnings=[];
  let C; try{ C=(new Function('window',src+';return (typeof CHAPTER!=="undefined")?CHAPTER:window.CHAPTER;'))({}); }catch(e){ return {ok:false,file,errors:['parse: '+e.message],warnings:[]}; }
  const id=C&&C.id||file, S=C&&C.story;
  if(!S||!S.dialogue) return {ok:false,id,file,errors:['no dialogue'],warnings:[]};
  const chaptersC2=idxC2.chapters.slice().sort((a,b)=>a.num-b.num);
  const me=chaptersC2.find(c=>c.id===id)||chaptersC2.find(c=>file.includes('-'+c.num+'-'));
  if(!me) return {ok:false,id,file,errors:['chapter not in C2 index'],warnings:[]};

  const firstIntro=new Map();
  idxA1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -5000+c.num); })));
  idxA2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -4000+c.num); })));
  idxB1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -3000+c.num); })));
  idxB2.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -2000+c.num); })));
  idxC1.chapters.forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&!firstIntro.has(w)) firstIntro.set(w, -1000+c.num); })));
  chaptersC2.filter(c=>c.num<=me.num).forEach(c=>c.vocab.forEach(v=>v.split(/\s+/).forEach(w=>{ w=norm_c2(w); if(w&&(!firstIntro.has(w)||firstIntro.get(w)>c.num)) firstIntro.set(w, c.num); })));
  const introOf=w=>{ let m=null; for(const b of bases_c2(w)) if(firstIntro.has(b)){ const v=firstIntro.get(b); if(m==null||v<m) m=v; } return m; };

  const lineText=l=>(l.tokens?l.tokens.filter(t=>!t.plain).map(t=>t.w).join(' '):(l.de||''));
  S.dialogue.forEach((l,i)=>{
    const raw=lineText(l), txt=' '+raw.toLowerCase()+' ';
    C2_GATES.forEach(g=>{ if(g.gate>me.num && g.re.test(txt)){ errors.push('line '+(i+1)+': "'+((g.re.exec(txt)||[])[0]||'').trim()+'" → '+g.label+' (gate c2-ch'+g.gate+' > c2-ch'+me.num+')'); }});
  });

  let content=0,newCount=0; const future=[], unknown=[];
  S.dialogue.forEach(l=>(l.tokens||[]).forEach(t=>{
    if(t.plain||isProper_c2(t)) return;
    const w=norm_c2(t.w); if(!w) return; content++;
    if(GLUE_C2.has(w)) return;
    const fi=introOf(w);
    if(fi!=null && fi>me.num){ future.push(t.w+'(c2-ch'+fi+')'); }
    else if(fi===me.num){ newCount++; }
    else if(fi==null && !unknown.includes(t.w)){ unknown.push(t.w); }
  }));
  const ratio=content?newCount/content:0;
  if(future.length) errors.push('FUTURE vocab ('+future.length+'): '+[...new Set(future)].join(', '));
  if(unknown.length) warnings.push('unrecognized (check): '+[...new Set(unknown)].join(', '));
  return {ok:errors.length===0,id,file,num:me.num,errors,warnings,contentWords:content,newVocabPct:+(ratio*100).toFixed(0)};
}
