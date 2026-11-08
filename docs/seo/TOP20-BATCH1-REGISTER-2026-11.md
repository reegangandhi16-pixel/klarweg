# Register the four module guides

Complete HTML files are already generated in the repository; structured data was written by `node scripts/seo-structured-data.mjs`, not hand-authored. Add these registrations before rerunning that script in another checkout.

## goethe/a1-sprechen.html

Allowlist:
```text
goethe/a1-sprechen.html
```

Sitemap:
```xml
  <url>
    <loc>https://klarweg.in/goethe/a1-sprechen.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

GUIDES:
```js
['goethe/a1-sprechen.html', 'A1 Sprechen', GOETHE, 'A1'],
```

Inbound: `goethe-exam.html` and `goethe/a1-exam.html`. Main query: goethe a1 sprechen examples.

## goethe/a2-sprechen.html

Allowlist:
```text
goethe/a2-sprechen.html
```

Sitemap:
```xml
  <url>
    <loc>https://klarweg.in/goethe/a2-sprechen.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

GUIDES:
```js
['goethe/a2-sprechen.html', 'A2 Sprechen', GOETHE, 'A2'],
```

Inbound: `goethe-exam.html` and `goethe/a2-exam.html`. Main query: goethe a2 sprechen examples.

## goethe/a1-schreiben.html

Allowlist:
```text
goethe/a1-schreiben.html
```

Sitemap:
```xml
  <url>
    <loc>https://klarweg.in/goethe/a1-schreiben.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

GUIDES:
```js
['goethe/a1-schreiben.html', 'A1 Schreiben', GOETHE, 'A1'],
```

Inbound: `goethe-exam.html` and `goethe/a1-exam.html`. Main query: goethe a1 schreiben examples.

## goethe/a2-schreiben.html

Allowlist:
```text
goethe/a2-schreiben.html
```

Sitemap:
```xml
  <url>
    <loc>https://klarweg.in/goethe/a2-schreiben.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

GUIDES:
```js
['goethe/a2-schreiben.html', 'A2 Schreiben', GOETHE, 'A2'],
```

Inbound: `goethe-exam.html` and `goethe/a2-exam.html`. Main query: goethe a2 schreiben examples.

## Official sources

- https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A1_Start_Deutsch_1.pdf
- https://www.goethe.de/pro/relaunch/prf/en/Durchfuehrungsbestimmungen_A2.pdf
- https://www.goethe.de/pro/relaunch/prf/materialien/A1_sd1/sd_1_modellsatz.pdf
- https://www.goethe.de/pro/relaunch/prf/materialien/A2/A2_Modellsatz_Erwachsene.pdf
- https://www.goethe.de/ins/in/en/spr/prf/ueb/pa1.html
- https://www.goethe.de/ins/in/en/spr/prf/ueb/pa2.html

Review notes and every German/Hindi example: `TOP20-BATCH1-A1-A2-2026-11.md`. Do not publish before reviewer sign-off.
