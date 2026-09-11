
function replaceDialogue(src, nd){
  const start = src.indexOf('dialogue: [');
  let depth=0, end=-1;
  for (let k=src.indexOf('[', start); k<src.length; k++){ const c=src[k]; if(c==='[')depth++; else if(c===']'){depth--; if(depth===0){end=k;break;}} }
  return src.slice(0,start) + nd + src.slice(end+1);
}
function setFemale(src, list){
  const a=src.indexOf('story:'), b=src.indexOf('sections:');
  let st=src.slice(a,b).replace(/femaleSpeakers: \[[^\]]*\],/, "femaleSpeakers: ["+list.map(x=>"'"+x+"'").join(', ')+"],");
  return src.slice(0,a)+st+src.slice(b);
}
