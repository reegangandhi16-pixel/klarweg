# Adjective gap + manual decisions — verification only

Nothing was authored. No entry, index key, chapter, card or systemic rule was
modified in this pass.

## The 24 bases — verified against corpus use and existing data

Every base is authored as **Adverb** (or Noun), never Adjective, so the
declension wave cannot fire. The question for each is whether the corpus really
uses it attributively, and whether the adjective sense already exists somewhere.

| # | Base | Authored as | Surfaces | × | Corpus use verified | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `klar` | Adverb "of course, sure" | klare, klarer, klaren, klares | 35 | *eine klare Aussage* · *einen klaren Zusammenhang* · *kein klares Signal* | **new entry** |
| 2 | `echt` | Adverb "really? (Echt?)" | echte, echter, echten, echtes | 26 | *eine echte Katastrophe* · *ein echter Stadtmensch* · *ein echtes Abenteuer* | **new entry** |
| 3 | `kurz` | Adverb "just (after/before)" | kurzen, kurze, kurzer, kurzes | 18 | *einen kurzen Text* · *ein kurzer Vokal* · *ein kurzes Workout* | **new entry** |
| 4 | `ehrlich` | Adverb "honest(ly); really?" | ehrliche, ehrlicher, ehrliches | 10 | *ehrliche Bewerber* · *ehrliches Feedback* | **new entry** |
| 5 | `wenig` | Adverb "a little, not much" | weniger | 19 | *weniger verdienen* · *kostet weniger* — **adverbial, not attributive** | **no entry — reclassify** |
| 6 | `letzte` | Noun "the last one" | letztes | 18 | *letztes Jahr* (twice, B1) | **new entry** |
| 7 | `natürlich` | Adverb "of course, naturally" | natürlichen, natürlicher | 3 | *natürlicher Fluss* · *je natürlicher der Text klingt* | **new entry** |
| 8 | `gründlich` | Adverb "thoroughly" | gründlicher, gründliche | 6 | *eine gründliche Vorbereitung* · *eine gründliche Überarbeitung* | **new entry** |
| 9 | `ursprünglich` | Adverb "originally" | ursprüngliche, ursprünglichen | 5 | *wegen der ursprünglichen Konzeption* | **new entry** |
| 10 | `gemeinsam` | Adverb "together, jointly" | gemeinsame, Gemeinsames | 5 | *gemeinsame Erfolge* · *Gemeinsames Schreiben* | **new entry** |
| 11 | `direkt` | Adverb "directly, right" | direkte | 5 | *eine direkte Frage* | **new entry** |
| 12 | `beste` | Noun "best" | besten | 7 | only *am besten* — **adverbial superlative of `gut`** | **no entry — reclassify** |
| 13 | `erst` | Adverb "only, not until" | Erster | 4 | *Erster Tag im A2-Kurs* — ordinal | **new entry** (`erste` Noun exists, ordinal adj does not) |
| 14 | `früh` | Adverb "early" | frühen, frühe | 2 | *am frühen Morgen* | **new entry** |
| 15 | `halb` | Adverb "half" | halben, halbe | 3 | *in einer halben Stunde* | **new entry** (see risk 3) |
| 16 | `selten` | Adverb "rarely, seldom" | seltene | 3 | *seltene Briefmarken* · *seltene Bücher* | **new entry** |
| 17 | `eigentlich` | Adverb "actually" | eigentliche | 2 | *meine eigentliche Rolle* | **new entry** |
| 18 | `regelmäßig` | Adverb "regularly" | regelmäßige | 1 | *regelmäßige Fortbildungen* | **new entry** |
| 19 | `völlig` | Adverb "completely" | völliger | 1 | *ein völliger Gegensatz* | **new entry** |
| 20 | `jahrelang` | Adverb "for years" | jahrelanger | 1 | authored token `{w:'jahrelanger', en:'years-long'}` | **new entry** |
| 21 | `deutsche` | Noun "German (language)" | deutschen | 2 | *im deutschen Gangsterkino* | **new entry** (adjective *deutsch*) |
| 22 | `länger` | Adverb "longer" | längeren | 1 | *die längeren Wege* | **already resolves** → `lang` ✓ |
| 23 | `scheinbar` | Adverb "apparent(ly)" | scheinbare | 1 | **no occurrence found** in 200 files | **verify before authoring** |
| 24 | `absolut` | Adverb "absolutely" | absoluter | 1 | **no occurrence found** in 200 files | **verify before authoring** |

### Summary
- **19 genuinely require a new adjective entry.**
- **1 already resolves from existing data** — `längeren` → `lang` via the
  authored `compare.comparative: "länger"`. No action.
- **2 are not adjective gaps at all** — `weniger` and `besten` are used
  adverbially in every occurrence. Authoring an adjective for them would be wrong;
  they should move out of this list.
- **2 need context confirmation first** — `scheinbare`, `absoluter` produced no
  corpus hit in the 200 data files searched, so I cannot confirm the use.

### The meanings are already in the curriculum, not invented
This matters for how the authoring should be framed. Nine of the 19 already carry
an **explicitly authored adjective gloss** as a per-occurrence token or example:

`kurzer` `{role:'r-adjective', en:'short'}` · `kurzes` `{en:'short'}` ·
`klaren` `{en:'clear'}` · `ehrliches` `{en:'honest', why:'ehrlich = honest (this
chapter)'}` · `ursprünglichen` `{en:'original'}` · `gemeinsame` `{en:'joint'}` ·
`jahrelanger` `{en:'years-long'}` · `gründliche` `{en:'thorough'}` ·
`direkte` `{en:'direct'}`.

So the adjective senses are curriculum content that exists only at occurrence
level and never reached the dictionary — the same situation as the
`KW_GLOBAL_CAPS` noun overlay. **`kurz` additionally carries a full authored
`compare` triad** (`positive: kurz`, `comparative: kürzer`,
`superlative: am kürzesten`, `source: "authored"`), which is an adjective
paradigm — an adverb would not have one.

---

## The 6 manual-decision items

### 1. `erkältete` ×1 — B1·7 Präteritum · **this is a live wrong popup**
Sentence: *"Sie erkältete sich im Winter oft."*
Currently maps to the **adjective** `erkältet` ("having a cold"). It is the
**Präteritum of the reflexive verb** `sich erkälten`, which already exists with
`conj.praeteritum: "erkältete sich"` — the exact form, authored.
**Safest decision: repoint to `sich erkälten`. No authoring — existing data.**

### 2. `vermisst` ×2 — B2·24 · genuinely ambiguous, resolvable by context
Sentence: *"Er vermisst seine Schulzeit."* / *"…andererseits vermisst sie ihre Familie."*
Both readings are **fully authored**: `vermissen` (to miss) and `vermessen`
(to measure, survey) each have `conj.praesens: "vermisst"`. A real collision, so
it is correctly unindexed today.
Corpus evidence is unanimous for **`vermissen`**; `vermessen` never occurs as
this surface.
**Safest decision: pin to `vermissen` using the `Studien` precedent** — repoint
plus an explicit note in `BUILD_INFLECTION_INDEX.md` so a rebuild does not
re-drop it. No authoring.

### 3. `Kurzem` ×1 — B1·5
Sentence: *"Wegen ihrer Gesundheit ernährt sie sich **seit Kurzem** vegetarisch."*
Only ever occurs in the fixed adverbial phrase *seit Kurzem* ("recently"), where
the capitalised form is a nominalised adjective governed by the preposition.
Interpretations: (a) map to a `kurz` adjective entry once it exists; (b) treat
*seit Kurzem* as a phrase entry.
**Safest decision: defer until `kurz` is authored, then map `Kurzem` to it.**
A phrase entry would duplicate what the `kurz` entry will already cover.

### 4. `meiste` ×1 — B1·20
Context: *"haben (meiste Verben)"* — attributive, "most verbs".
Currently maps to `viel/viele`, which is semantically the right paradigm
(*viel → mehr → meiste*) but reads oddly as a lemma. `meist` exists only as
Adverb "mostly"; `meiste` has no entry.
**Safest decision: leave as-is for now.** The mapping is not wrong, and changing
it belongs with the `viel`/`meist` paradigm decision rather than in isolation.

### 5–6. `deren` ×1 and `denen` ×1 — B1·30 and B1·18
Contexts are grammar explanations *about* these pronouns: *"the Genitiv pronoun
is dessen/deren, never des"* and *"dem/der/das/denen"*.
**Neither `deren`, `denen` nor `dessen` has any entry**, so no mapping is
possible — the earlier suggestion of `deren → der` was wrong in class (genitive
**relative pronoun**, not article).
**Safest decision: author a small relative-pronoun paradigm** (`der/die/das`,
`dessen/deren`, `dem/denen`) as its own closed set. That is authoring, so it
stays out of scope here. Leaving them unresolved is safe meanwhile — the surfaces
are metalinguistic, not learner vocabulary.

---

## Risks and unexpected collisions

### Risk 1 — a closed set of 6 reflexive verbs has the same defect as `erkältete`
Scanning for the general pattern found that in every case the participial
adjective's declined form has taken the key the verb's Präteritum needs:

| Surface | Points at | Should also reach |
| --- | --- | --- |
| `erkältete` | `erkältet` [Adjective] | `sich erkälten` [Präteritum] |
| `entspannte` | `entspannt` [Adjective] | `sich entspannen` [Präteritum] |
| `erholte` | `erholt` [Adjective] | `sich erholen` [Präteritum] |
| `konzentrierte` | `konzentriert` [Adjective] | `konzentrieren (sich)` |
| `orientierte` | `orientiert` [Adjective] | `orientieren (sich)` |
| `verspätete` | `verspätet` [Adjective] | `sich verspäten` |

All six are genuine homographs in German — *die verspätete Bahn* (adjective) and
*sie verspätete sich* (verb) are both correct. The current behaviour is only wrong
where the sentence is verbal. **Reported, not changed**, per your instruction to
make no further systemic changes; it needs a per-occurrence decision, which the
authored-token layer can already express.

### Risk 2 — authoring these 19 adjectives will create new homographs by design
Each new entry sits alongside an existing adverb of the same spelling (`klar`
adjective + `klar` adverb). Since the dictionary is keyed by lowercased surface,
**one key cannot hold both** — exactly the `kosten`/`Kosten` problem. The
existing overlay is case-sensitive and so cannot separate two lowercase entries.
This needs a decision before authoring: distinct keys (`klar` / `klar (adj)`),
or one merged entry carrying both senses. **The 19 entries cannot be safely
authored until this is settled.**

### Risk 3 — `halbe Stunde` is an approved noun-phrase card
The curriculum authors *halbe Stunde* as a single noun card
(`art:'die', gender:'f', plural:'halbe Stunden', pos:'noun'`). Authoring `halb`
as an adjective would make `halben` resolve to the adjective while the approved
card teaches the phrase. Worth confirming which the popup should show.

### Risk 4 — `Gemeinsames` and `Erster` are capitalised
Both are nominalised/sentence-initial capitals (*Gemeinsames Schreiben*,
*Erster Tag*). They will need the caps overlay or the sentence-initial path, not
plain declension.

## Recommended order when you do authorise authoring
1. Repoint `erkältete` → `sich erkälten` (existing data, fixes a live defect).
2. Pin `vermisst` → `vermissen` (existing data, `Studien` precedent).
3. Settle Risk 2 — the adjective/adverb key collision policy.
4. Author the 19 adjectives, reusing the authored token glosses above.
5. Then `Kurzem`, and the relative-pronoun paradigm as a separate closed set.
6. Confirm `scheinbare`/`absoluter` contexts before including them.
7. Drop `weniger` and `besten` from the adjective list entirely.
