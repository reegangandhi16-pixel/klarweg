// Extract Reading passages + Speaking model answers per chapter (line-scan, fast)
window.__rsx = async function(files, readFile){
  const out=[];
  for(const f of files){
    const t=await readFile('chapter/'+f);
    const cid=(t.match(/id:\s*'([^']+)'/)||[])[1]||f;
    const bound=k=>{const i=t.indexOf('\n  '+k+':');return i;};
    const NEXT=['id','phase','number','title','titleEn','description','xp','time','difficulty','nextChapter','story','sections','resources','outcomes','vocab','grammar','reading','listening','speaking','writing','exercises','quiz','takeaways','revisionTips','heroAnimationPath','overviewIntro'];
    function seg(k){const i=bound(k);if(i<0)return '';let e=t.length;for(const n of NEXT){if(n===k)continue;const j=t.indexOf('\n  '+n+':',i+3);if(j>0&&j<e)e=j;}return t.slice(i,e);}
    // reading
    const r=seg('reading');
    let reading=null;
    if(r&&!/reading:\s*null/.test(r)){
      const ws=[];
      for(const raw of r.split('\n')){
        const i=raw.indexOf("{ w: '");
        if(i<0) continue;
        const s=i+6, e=raw.indexOf("'",s);
        ws.push({w:raw.slice(s,e),plain:raw.includes('plain: true')});
      }
      let txt='';
      for(const tk of ws) txt += (tk.plain&&/^[.,!?;:]$/.test(tk.w)) ? tk.w : (txt?' ':'')+tk.w;
      reading={title:(r.match(/title:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||'',de:txt.trim(),tokens:ws.length,
        translation:(r.match(/translation:\s*'((?:[^'\\]|\\.)*)'/)||[])[1]||''};
    }
    // speaking
    const sp=seg('speaking');
    const speaking=[];
    if(sp&&!/speaking:\s*null/.test(sp)){
      for(const raw of sp.split('\n')){
        if(raw.indexOf('task:')<0&&raw.indexOf('de:')<0) continue;
        const g=k=>{for(const q of ['"',"'"]){const i=raw.indexOf(k+': '+q);if(i>=0){const s=i+k.length+3;const e=raw.indexOf(q+',',s);return raw.slice(s,e<0?raw.lastIndexOf(q):e);}}return null;};
        const de=g('de');
        if(de===null&&g('task')===null) continue;
        speaking.push({task:g('task'),taskEn:g('taskEn'),de,en:g('en')});
      }
    }
    out.push({cid,reading,speaking});
  }
  return out;
};
