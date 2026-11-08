"""Optional PDF authoring: python3 scripts/generate-vocabulary-sheet.py (ReportLab)."""
import json
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
ROOT=Path(__file__).resolve().parents[1]
rows=json.loads((ROOT/'docs/seo/data/a1-starter-vocabulary.json').read_text())
for name,file in [('Inter','Inter-400.ttf'),('Bold','Inter-600.ttf'),('Display','Fraunces-600.ttf')]:
 pdfmetrics.registerFont(TTFont(name,str(ROOT/'scripts/chapter-resources/fonts'/file)))
out=ROOT/'downloads/german-a1-starter-vocabulary.pdf';out.parent.mkdir(exist_ok=True)
c=canvas.Canvas(str(out),pagesize=(595.28,841.89),invariant=1)
c.setTitle('German starter vocabulary: 24 nouns | Klarweg');c.setAuthor('Klarweg')
def text(x,y,t,font='Inter',size=10):
 c.setFillColor(HexColor('#0E0E10'));c.setFont(font,size);c.drawString(x,y,t)
c.setFillColor(HexColor('#FAFAF7'));c.rect(0,0,595.28,841.89,fill=1,stroke=0)
text(40,800,'KLARWEG / BEGINNER VOCABULARY',size=9)
text(40,763,'24 nouns to start with',font='Display',size=28)
text(40,739,'German-English starter sheet. A small practice selection, not a complete A1 list.',size=10)
text(40,719,'Keep the article and plural with each noun. Cover a column to practise recall.',size=10)
text(40,685,'SINGULAR',font='Bold',size=9);text(222,685,'PLURAL',font='Bold',size=9);text(404,685,'ENGLISH',font='Bold',size=9)
y=660;topic=None
for row in rows:
 if row['topic']!=topic:
  topic=row['topic'];text(40,y,topic,font='Bold',size=10);y-=24
 text(40,y,row['singular']);text(222,y,row['plural']);text(404,y,row['english'],size=9)
 c.setStrokeColor(HexColor('#D8D9D2'));c.line(40,y-6,555,y-6);y-=18
text(40,87,'Review: which article or plural needs another attempt? __________________',size=10)
url='https://klarweg.in/german-a1-vocabulary.html'
text(40,58,'Hindi glosses, study method and official word-list links:',size=9)
text(40,42,url,size=9);c.linkURL(url,(40,38,450,54),relative=0,thickness=0)
c.showPage();c.save();print(out)
