// Read-only credential check. This script never creates or publishes content.
const required=['FACEBOOK_PAGE_ID','FACEBOOK_PAGE_TOKEN','THREADS_ACCESS_TOKEN'];
for(const name of required){
  if(!process.env[name]){
    console.error('NOT CONFIGURED: '+name+' (add required Actions Secret before activating publishing)');
    process.exitCode=2;
  }
}
if(process.exitCode)process.exit();
async function inspect(url,token){
  const res=await fetch(url,{headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(15000)});
  if(!res.ok)throw new Error('HTTP '+res.status+' (check token/scopes/expiry)');
  const data=await res.json();
  if(!data.id)throw new Error('API did not return account ID');
  return data;
}
try{
  const facebook=await inspect('https://graph.facebook.com/v27.0/me?fields=id%2Cname',process.env.FACEBOOK_PAGE_TOKEN);
  if(String(facebook.id)!==String(process.env.FACEBOOK_PAGE_ID)){
    throw new Error('Facebook token controls a different Page (ID mismatch)');
  }
  console.log('FACEBOOK CONNECTED: '+facebook.name+' (Page ID verified)');
  const threads=await inspect('https://graph.threads.net/v1.0/me?fields=id%2Cusername',process.env.THREADS_ACCESS_TOKEN);
  console.log('THREADS CONNECTED: @'+(threads.username||'(username unavailable)')+' (account ID verified)');
  console.log('Read-only connection checks passed. This DOES NOT verify write permissions or publish any post.');
}catch(e){
  console.error('CONNECTION CHECK FAILED: '+e.message);
  process.exitCode=1;
}
