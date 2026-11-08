#!/usr/bin/env python3
"""Render the 50 original learning guides from their editorial JSON. No runtime JS."""
from pathlib import Path
from html import escape as esc
import json,re,sys,collections
R=Path(__file__).resolve().parent.parent
DATA=json.loads((R/'docs/seo/data/next50-learning-guides.json').read_text())
REF=(R/'german-a1-vocabulary.html').read_text()
HEAD=re.sub(r'<!-- KW-LD:start[\s\S]*?<!-- KW-LD:end -->','',REF.split('</head>')[0])
NAV=REF.split('</head><body>')[1].split('<main')[0]
FOOT=REF[REF.index('<footer'):]
def p(s):return '<p>'+s+'</p>\n'
def a(u,t):return '<a href="'+u+'">'+esc(t)+'</a>'
def de(s):return '<span class="de" lang="de">'+esc(s)+'</span>'
def hi(s,tr):return '<span class="hi" lang="hi">'+esc(s)+'</span> <span class="tr">('+esc(tr)+')</span>'
def h2(i,t):return '<h2 id="'+i+'">'+esc(t)+'</h2>\n'
def li(items):return '<ul>'+''.join('<li>'+x+'</li>' for x in items)+'</ul>'
def table(cap,headers,rows):return '<div class="kg-table-wrap"><table class="kg-table vocab-table"><caption>'+esc(cap)+'</caption><thead><tr>'+''.join('<th scope="col">'+esc(x)+'</th>' for x in headers)+'</tr></thead><tbody>'+''.join('<tr><th scope="row">'+r[0]+'</th>'+''.join('<td>'+x+'</td>' for x in r[1:])+'</tr>' for r in rows)+'</tbody></table></div>'
def model(s,tr,label='Original Klarweg example'):
 return '<div class="kg-model"><span class="lbl">'+esc(label)+'</span><p class="de" lang="de">'+esc(s).replace('\n','<br>')+'</p>'+p(esc(tr))+'</div>'
GROUPS={'vocabulary':'Vocabulary by topic','conversation':'Conversations and speaking','writing':'Writing tasks and email examples','reading':'Reading passages and questions'}
# Existing pages only. Topic-specific links are additional to the course CTA.
LINKS={
'vocabulary':[('german-a1-vocabulary.html','A1 starter vocabulary'),('german-a2-vocabulary.html','A2 vocabulary practice'),('german-grammar.html','Grammar syllabus')],
'conversation':[('grammar/w-fragen.html','Build information questions'),('grammar/word-order.html','Understand German word order'),('goethe/a1-sprechen.html','A1 speaking task guide')],
'writing':[('goethe/a1-schreiben.html','A1 writing guide'),('goethe/b1-schreiben.html','B1 writing guide'),('grammar/word-order.html','Check sentence order')],
'reading':[('german-a1-vocabulary.html','Revisit starter vocabulary'),('free-german-learning-pdfs.html','Find authorised learning PDFs'),('german-exam-practice-papers.html','Official examination practice papers')]}
reports=[]
for index,d in enumerate(DATA):
 f=d['slug']+'.html';kind=d['kind'];title=d['title']+' — Klarweg'
 # Unique topic-led descriptions. Keep readable whole words and the brand at all lengths.
 desc=d['title']+' with Klarweg: original examples, Hindi meanings, guided exercises and answers for independent German practice.'
 if len(desc)>155:desc=d['title']+' with Klarweg: Hindi meanings, original examples, practice tasks and answers for independent study.'
 if len(desc)>155:desc=d['title']+' with Klarweg: original examples, Hindi meanings, exercises and answers for German learners.'
 if len(desc)<140:desc=desc[:-1]+' at your own pace.'
 assert 140<=len(desc)<=155,(f,len(desc),desc)
 h=HEAD
 h=re.sub(r'<title>.*?</title>','<title>'+esc(title)+'</title>',h)
 for field in ['description','og:description','twitter:description']:
  h=re.sub(r'(<meta (?:name|property)="'+field+r'" content=")[^"]*',lambda m:m[1]+esc(desc,quote=True),h)
 for field in ['og:title','twitter:title']:
  h=re.sub(r'(<meta (?:name|property)="'+field+r'" content=")[^"]*',lambda m:m[1]+esc(title,quote=True),h)
 h=h.replace('https://klarweg.in/german-a1-vocabulary.html','https://klarweg.in/'+f)
 h=h.replace('<link rel="preconnect"','<meta name="twitter:image" content="https://klarweg.in/site-icon-512.png">\n<link rel="preconnect"',1)
 # Print styles support personal offline copies without advertising a nonexistent downloadable PDF.
 h=h.replace('</style>','\n@media print { header,footer,.kg-toc,.kg-course {display:none!important} .kg {max-width:none;padding:0} .kg-model,.kg-table-wrap {break-inside:avoid} .kg h2 {margin-top:24px} }\n</style>')
 body='<main class="kg" id="main" tabindex="-1"><nav class="kg-crumbs" aria-label="Breadcrumb">'+a('index.html','Klarweg')+' / '+a('resources.html#practice-library','Resources')+' / <span aria-current="page">'+esc(d['title'])+'</span></nav><span class="eyebrow">'+esc(GROUPS[kind])+'</span><h1>'+esc(d['title'])+'</h1><p class="kg-lede">Use this guide to '+esc(d['focus'])+'. Work through original German examples, Hindi meaning checks and exercises with explanations.</p><p class="kg-meta">Original Klarweg learning material · 9 November 2026</p>'
 summary={'vocabulary':'Learn the article or sentence frame as well as the meaning; then retrieve the word in a useful situation.','conversation':'Listen and respond to the other turn. Change the practical detail rather than memorising one fixed conversation.','writing':'Identify the reader, purpose and requested action. Study the model, then write a fresh response to a different situation.','reading':'Read first for purpose, then for the requested details. Base answers on the passage rather than outside assumptions.'}[kind]
 body+='<div class="kg-summary"><p>Quick answer</p>'+li([esc(summary),'German examples and answer explanations are original practice, not official examination questions or predicted papers.','Hindi transliteration helps you read the Hindi gloss; it is not German pronunciation.'])+'</div>'
 items=[('approach','Understand the task'),('material','Words and original examples'),('practice','Try it yourself'),('answers','Answers and explanations'),('transfer','Use it in a new situation'),('questions','Questions'),('related','Continue learning')]
 body+='<nav class="kg-toc" aria-labelledby="toc-h"><h2 id="toc-h">On this page</h2><ol>'+''.join('<li>'+a('#'+i,t)+'</li>' for i,t in items)+'</ol></nav>'
 body+=h2('approach','Understand this topic')+p(esc(d['note']))
 body+=h2('material',{'vocabulary':'Words, forms and meanings','conversation':'A conversation to understand and adapt','writing':'An original worked writing example','reading':'Read the original passage'}[kind])
 if kind=='vocabulary':
  rows=[]
  for word,form,en,hin,roman in d['words']:
   formhtml=de(form) if form.startswith(('die ','der ','das ','Ich ')) else esc(form)
   rows.append([de(word),formhtml,esc(en)+'<br>'+hi(hin,roman)])
  body+=table('Selected vocabulary · context-specific meanings',['German','Form or use','English / Hindi'],rows)
  body+=p('The meaning column selects the use practised here. It is not a complete dictionary entry. A plural form shows how the noun changes when it is countable; “usually singular” marks how the selected meaning is normally used in these examples. Activity nouns and adjective frames are labelled separately, so do not apply a noun-plural rule to every row.')
  for s,t in d['model']:body+=model(s,t)
  body+=p('Cover the meaning column and retrieve the word from a situation. Then cover the German column and rebuild a short sentence. If the article is uncertain, check it before expanding the sentence. If the meaning is uncertain, return to the specific context rather than trusting a similar-looking English word. Record the two problems separately: recognising a word and using its correct form need different practice.')
 elif kind=='conversation':
  body+=model('\n'.join(x[0] for x in d['model']),'Read the meaning notes below before rehearsing with a partner.','Original fictional dialogue')
  body+=table('Follow what each turn does',['Turn','Meaning'],[[de(s),esc(t)] for s,t in d['model']])
  body+=p('Read one turn, hide its response and decide what information the speaker needs next. Then uncover the answer and compare its function with your own. A different answer can be appropriate if it is clear, relevant and grammatical. Do not treat this single model as the only permitted wording for the situation.')
 else:
  body+=model(d['text'],d['translation'],'Original fictional text · not an official paper')
  if kind=='writing':
   body+=p('<strong>Subject:</strong> '+de(d['subject']))
   body+='<h3>Why the message is organised this way</h3>'+li([esc(x) for x in d['points']])
   body+=p('The English note explains the whole message rather than giving a word-for-word substitute for every German expression. Before copying a phrase, identify the job it does: greeting, context, reason, question or closing. Remove details that do not belong to your own task. A fluent-looking sentence that gives the wrong information still leaves the reader’s question unanswered.')
  else:
   body+=p('Try the questions before reading the English overview again. The overview is a meaning check, not the source of extra facts to add to the passage. When a detail is absent, distinguish “not stated” from “false”: those are different reading decisions. Do not infer a real timetable, service policy or general research finding from this fictional text.')
 if kind!='vocabulary':
  body+='<h3>Useful language with Hindi meaning checks</h3>'+table('Meaning support · Roman text transliterates Hindi',['German','English','Hindi + Roman'],[[de(s),esc(en),hi(hin,roman)] for s,en,hin,roman in d['phrases']])
 body+=h2('practice','Try it yourself')
 body+=p({'vocabulary':'Work without the table for this round. Write an answer or say it aloud, then note which part you were uncertain about. Use the answer key after making a real attempt; looking at a correct form and recognising it is easier than retrieving it independently.','conversation':'Respond to the prompts without reading the dialogue. For an open response, aim to perform the requested action with information you understand. The key gives one possible wording, not an official scoring rule. Compare the response’s purpose as well as its grammar.','writing':'Answer the content questions first, then create the requested language. Use the model only to check a point after your own attempt. For a new message, the names, relationships and practical details must fit the new situation; accuracy matters more than copying the model’s length.','reading':'Write a short answer to each question and identify the sentence or phrase that supports it. Do not use a likely real-world answer if the passage says something different. The key explains why the answer follows from this particular text.'}[kind])
 body+='<ol>'+''.join('<li>'+esc(q)+'</li>' for q,ans,why in d['exercise'])+'</ol>'
 body+=h2('answers','Answers and explanations')+'<details class="kg-note"><summary>Show answers after your attempt</summary><ol>'
 for q,ans,why in d['exercise']:
  # Answers can be either German or English; identify German sentences explicitly in the source data below.
  german=ans.startswith(('Ich ','Meine ','Wir ','Die ','Der ','Das ','Es ','Sie ','Hier ','Bitte ','Könn','Wo ','Wie ','Wann ','Haben ','Hast ','Leider ','Mit ','Auf ','Geben ','Sag ','In ','Welche','Also ','Muss ','Zum ','Hätten ','Vielen ','Sehr ','Ein ','Guten ')) or ans in [x[1] for x in d.get('words',[]) if x[1].startswith(('die ','der ','das '))]
  body+='<li><strong>'+esc(q)+'</strong>'+p((de(ans) if german else esc(ans))+' '+esc(why))+'</li>'
 body+='</ol></details>'
 body+=h2('transfer','Use it in a new situation')
 transfer=d.get('transfer','Choose four entries from the table and build a small situation around them. Change a person, place or number from the models, then check what else must change in the sentence. Use one singular and one plural where the meaning allows it. Ask a partner to identify the intended meaning from your German alone before you show the English or Hindi gloss. If the partner understands a different message, locate the specific word or form that caused the confusion.')
 body+=p(esc(transfer))
 body+=p({'vocabulary':'Make a compact review card with the German form on one side and a context cue on the other. Keep the cue specific enough to distinguish related words. At the next review, retrieve the entry before opening the answer, then place it in a new sentence. A familiar card is not proof that you can understand the word in every spoken or written context.','conversation':'For a second round, exchange roles and remove the script. Give your partner one new detail to react to. Afterward, each person summarises the agreed information or outcome. Compare those summaries: a grammatically accurate turn is not enough if the speakers leave with different understandings of the practical arrangement.','writing':'For revision, check the purpose before checking small spelling details. Can the reader identify what happened and what response you want? Then check forms of address, verb position, article changes and the spelling of names or dates. Ask a proficient reviewer about uncertain wording; an answer key for the content questions is not a complete assessment of a fresh text.','reading':'Finish by writing a short summary without adding facts from outside the passage. Reopen the source and remove any detail you cannot support. Then choose one unfamiliar expression and study its role in the sentence. This combines meaning, evidence and vocabulary work instead of turning reading into the translation of isolated words.'}[kind])
 body+=h2('questions','Questions')+'<div class="kg-faq">'
 faqs={
 'vocabulary':[('Should I learn every word at once?','Start with a small set you can retrieve and use. Add new entries when you can distinguish the earlier meanings; there is no required daily number in this guide.'),('Why include a form or usage column?','The English meaning alone does not show a German noun’s article, plural or a useful adjective frame. The extra column supports the pattern used in this topic.'),('Does the Hindi text give German pronunciation?','No. Devanagari and Roman text explain the meaning. German spelling and reliable German audio are the sound reference.'),('Is this a complete official word list?','No. It is a focused original selection for '+d['focus']+'. Broader provider reference material is linked separately.')],
 'conversation':[('Do I have to memorise the whole dialogue?','Learn what each turn does, then change a practical detail. Being able to respond to a new question is more useful than reciting an unchanged script.'),('Can I use a different response?','Yes, when it performs the required action clearly and correctly. The answer key gives sample wording and does not replace feedback on every possible response.'),('Should I use du or Sie?','Follow the relationship in the model and in your actual situation. Keep the chosen form consistent; a new relationship may require changes across the sentence.'),('Are these official examination questions?','No. The dialogue and tasks are original fictional practice for '+d['focus']+'. They do not predict an examination card.')],
 'writing':[('Can I copy this email for every writing task?','Use its structure only when the purpose and relationship fit. Replace the information carefully and remove sentences that do not serve your actual message.'),('Is there a required word count here?','This page teaches a focused writing activity. It does not set an exam word limit; follow the official instructions of any examination you actually take.'),('Does the model guarantee a pass?','No. It is original learning material. A fresh text needs feedback on task completion, clarity and language; no examination result is promised.'),('How should I check my own draft?','First check whether it helps the recipient respond. Then review address forms, sentence order and spelling. Use the worked example to understand choices rather than copy unrelated details.')],
 'reading':[('Should I translate the entire passage first?','Try identifying its purpose and requested details first. Use the glossary for a focused meaning check, then return to the relevant sentence.'),('Can I answer from general knowledge?','Base comprehension answers on this fictional passage. A plausible real-world fact does not supply evidence for something the text does not say.'),('Does a correct answer establish my CEFR level?','No. One short reading activity cannot certify a level or predict a full examination result. The level in the title describes the intended practice context.'),('What should I do after checking the key?','Locate the supporting phrase for each answer, explain any error and summarise the text in your own words. Revisit a specific unclear expression rather than rereading without a purpose.')]
 }[kind]
 for q,ans in faqs:body+='<h3>'+esc(q)+'</h3>'+p(esc(ans))
 body+='</div>'+h2('related','Continue learning')+li([a(u,t) for u,t in LINKS[kind]])
 # Related pages in this new batch are separate practices; all fifty are published together.
 peers=[x for x in DATA if x['kind']==kind];pos=peers.index(d);nextd=peers[(pos+1)%len(peers)]
 body+=p('Next topic: '+a(nextd['slug']+'.html',nextd['title'])+'. '+a('resources.html#practice-library','Browse all topic practice')+'.')
 body+='<section class="kg-course" aria-labelledby="course-h"><h2 id="course-h">Start a connected German learning path</h2>'+p('Use these free examples alongside a structured course. Find the free Chapter 1 links in the course overview to see how explanations, vocabulary and practice fit together.')+'<div class="ctas"><a class="btn btn-primary btn-cta-green" href="courses.html">Find your free Chapter 1</a></div></section>'
 body+=h2('references','Reference and offline study')
 body+=p('The examples, translations, passages and exercises on this page are original Klarweg material. For broader provider reference, open the '+a('https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf','official Goethe A2 word-list PDF')+' or '+a('https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf','official B1 word-list PDF')+'. Those documents are separate resources, not the source of our example sentences or an exclusive classification for each word. Klarweg is independent of the Goethe-Institut.')
 body+=p('For a personal offline copy, use your browser’s Print option and choose Save as PDF if available. This does not download an official paper or a paid book. Sources checked 9 November 2026. These learning pages contain no diagnosis, legal requirement, fee schedule or official assessment decision.')
 body+='</main>'
 (R/f).write_text(h+'</head><body>'+NAV+body+FOOT)
 words=len(re.sub('<[^>]+>',' ',body).split());reports.append(dict(file=f,kind=kind,title=title,description=desc,words=words))
# Idempotent registrations: replace this batch's marked regions only.
start='// NEXT50:start';end='// NEXT50:end'
pth=R/'scripts/seo-structured-data.mjs';s=pth.read_text();s=re.sub(r'\n  // NEXT50:start[\s\S]*?// NEXT50:end\n+','\n',s)
entries='\n  '+start+'\n'+''.join("  ['"+d['slug']+".html', '"+d['title'].replace("'","\\'")+"', RESOURCES, null],\n" for d in DATA)+'  '+end+'\n';pth.write_text(s.replace('const GUIDES = [','const GUIDES = ['+entries))
pth=R/'.github/pages-allowlist.txt';lines=pth.read_text().splitlines();lines=[x for x in lines if x not in {d['slug']+'.html' for d in DATA}];pth.write_text('\n'.join(lines).rstrip()+'\n'+''.join(d['slug']+'.html\n' for d in DATA))
pth=R/'sitemap.xml';s=pth.read_text()
for d in DATA:s=re.sub(r'[ \t]*<url>\s*<loc>https://klarweg.in/'+re.escape(d['slug'])+r'\.html</loc>[\s\S]*?</url>\s*','',s)
xml=''.join('  <url>\n    <loc>https://klarweg.in/'+d['slug']+'.html</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n' for d in DATA);pth.write_text(s.replace('</urlset>',xml+'</urlset>'))
pth=R/'resources.html';s=pth.read_text();s=re.sub(r'<!-- NEXT50:start -->[\s\S]*?<!-- NEXT50:end -->','',s)
hub='<!-- NEXT50:start --><section class="section" id="practice-library" aria-labelledby="practice-library-h"><div class="container"><div class="section-head"><span class="eyebrow">Free topic practice</span><h2 class="display-md" id="practice-library-h">Practise a specific situation.</h2><p class="lede">Choose a vocabulary topic, conversation, writing task or reading passage. Each original guide has meaning support, practice prompts and answers.</p></div><nav class="resource-shortcuts" aria-label="Practice categories">'+''.join(a('#practice-'+k,v) for k,v in GROUPS.items())+'</nav>'
for k,v in GROUPS.items():hub+='<h3 id="practice-'+k+'">'+v+'</h3><ul>'+''.join('<li>'+a(d['slug']+'.html',d['title'])+'</li>' for d in DATA if d['kind']==k)+'</ul>'
hub+='</div></section><!-- NEXT50:end -->';pth.write_text(s.replace('</main>',hub+'</main>'))
(R/'docs/seo/NEXT50-MANIFEST.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'pages':len(DATA),'word_range':[min(x['words'] for x in reports),max(x['words'] for x in reports)],'total_words':sum(x['words'] for x in reports)},indent=2))
