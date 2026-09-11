// extract listening dialogue lines per chapter file (line-based, fast)
window.__lext = async function(files, readFile){
  const out=[];
  for(const f of files){
    const t=await readFile('chapter/'+f);
    const cid=(t.match(/id:\s*'([^']+)'/)||[])[1]||f;
    const li=t.indexOf('\n  listening:'); if(li<0){out.push({cid,lines:[]});continue;}
    let end=t.length;
    for(const k of ['speaking','writing','exercises','quiz','takeaways','revisionTips'])
      {const j=t.indexOf('\n  '+k+':',li+3); if(j>0&&j<end) end=j;}
    const lines=[];
    for(const raw of t.slice(li,end).split('\n')){
      if(raw.indexOf("voice:")<0||raw.indexOf("id: '")<0) continue;
      const g=k=>{const i=raw.indexOf(k+": '"); if(i<0) return null; const s=i+k.length+3; const e=raw.indexOf("',",s); return raw.slice(s,e<0?raw.lastIndexOf("'"):e);};
      lines.push({id:g('id'),speaker:g('speaker'),gender:g('gender'),voice:g('voice'),de:g('de'),en:g('en')});
    }
    out.push({cid,lines});
  }
  return out;
};
