# Live Classes — teacher intake

**Status (2026-10-20):** Reegan Gandhi (`reegan-gandhi`), the owner, is the only teacher. No other teacher is engaged (decision sheet D6), and no other teacher's details exist in the repository, its history or the project documents. `teacher-1`, `teacher-2` and `teacher-3` in `live-classes-data.js` are **templates, not people**. They stay `draft: true` and never render on the public site.

Use this document when a real teacher agrees to teach for Klarweg.

The 10 further people the owner named on 2026-10-20 are recorded only as fact-free drafts with opaque ids in [`live-classes-candidates.json`](live-classes-candidates.json); their names are in a private roster outside the repository. Publish any of them only through this process. Reviews and same-day booking: see [`live-classes-consultation-booking.md`](live-classes-consultation-booking.md).

**Keep the filled-in intake private.** The repository is public. Use [`templates/live-classes-teacher-intake.csv`](templates/live-classes-teacher-intake.csv) (headings only) as a spreadsheet, kept outside every Git folder. Only the fields the teacher approved for publication go into `live-classes-data.js`. Certificates, CVs, contracts, phone numbers and IDs never enter the repository.

Don't announce new teachers, recruitment or "more teachers joining soon" on the site or in marketing until the owner approves that plan.

## 1. Intake fields

Every published field must come from the teacher's own documents or their written statement, and the owner must confirm it.

| Data field | Shown on the page | What to collect | Evidence to see (kept privately) |
|---|---|---|---|
| `id` | in links (`#teacher-<id>`) | lower-case name, e.g. `anna-sharma` | — |
| `name` | yes | full name, as the teacher wants it shown | ID or certificate |
| `headline` | yes | one line on their teaching focus, in their words | teacher's written text |
| `experience` | yes | e.g. "4 years of teaching German" | CV or employer reference |
| `proficiency` | yes | the level of German: `A1`–`C2` or `Native speaker` | certificate, or the teacher's statement for a native speaker |
| `qualifications` | yes | degrees and teaching qualifications, exactly as on the certificate | the certificates |
| `goethe` | yes | Goethe certificates actually held, as issued, e.g. "Goethe-Zertifikat B2" | the certificates |
| `levels` | yes | CEFR levels they will teach | teacher + owner decision |
| `teachesIn` | yes | languages used for explanation, e.g. Hindi, English | teacher's statement |
| `specialisms` | yes | 1–3 areas, in their words | teacher's statement |
| `examPrep` | yes | Goethe exam-preparation experience: levels and modules | teacher's statement |
| `approach` | yes | 2–3 sentences on how they run a class | teacher's written text |
| `formats` | yes | `Group batch` and/or `One-to-one` | owner decision |
| `availability` | yes, if set | only a confirmed slot, e.g. "Weekday evenings (IST)" | teacher's written confirmation |
| `photo`, `photoAlt` | yes | 4:3 landscape, at least 800×600, in `public/teachers/<id>.jpg`; plain-language alt text | — |
| `consent` | **no** | how and when the teacher approved publishing the profile, e.g. "Email, 2026-11-02" | the email or signed form |
| `photoConsent` | **no** | the same for the photo | the email or signed form |
| `unconfirmed` | **no** | fields still awaiting confirmation; must be empty to publish | — |

**Also agree before publishing (not page fields):**
- the teaching agreement;
- how learners' data is shared with the teacher. The Privacy Policy says live classes are taught by the owner, so it must change before another teacher teaches.
- that any course they teach is published separately, with its own approved terms.

## 2. What the validator enforces

`scripts/live-classes-readiness.mjs` refuses a published (non-draft) teacher whose profile has any of these:
- `[bracketed]` placeholder text;
- anything left in `unconfirmed`;
- no `consent`;
- a photo without `photoAlt`, `photoConsent` or an existing file;
- a `proficiency` that isn't a CEFR level or "Native speaker";
- a `goethe` entry that isn't named as issued ("Goethe-Zertifikat A1"–"C2");
- a `qualification` naming a Goethe certificate that isn't listed in `goethe`.

The templates list their non-bracket values (levels, languages, formats, and so on) in `unconfirmed`. Deleting `draft: true` and the brackets alone therefore cannot publish a template's guesses.

A course can name only published teachers, at levels those teachers teach.

## 3. Missing facts, per template

Every item below is missing for all three. None of them is a real person.

| Template | Missing before it could be published |
|---|---|
| `teacher-1` | name; headline; years of teaching; German level; qualifications; Goethe certificates (or remove); levels taught (template: A1–B1); teaching languages (template: Hindi, English); specialisms; exam-prep experience; approach; formats (template: both); availability (optional); photo + photoConsent (optional); **consent** |
| `teacher-2` | name; headline; years of teaching; German level; qualification; Goethe certificates, if any (template: none); levels (template: B1–B2); teaching languages (template: English, German); specialisms; exam prep, if any (template: none); approach; formats (template: group only); availability (optional); photo + photoConsent (optional); **consent** |
| `teacher-3` | name; headline; years of teaching; German level; qualification; Goethe certificates; levels (template: B2–C2); teaching languages (template: German, English); specialisms; exam-prep experience; approach; formats (template: one-to-one only); availability (optional); photo + photoConsent (optional); **consent** |

Rename the template's `id` to the teacher's own, and delete any template you don't use.

## 4. Publishing a new teacher (one PR)

1. Fill the private intake sheet. See the evidence, and get written consent.
2. Edit the template entry: set every field, record `consent` (and `photoConsent`), empty `unconfirmed`, and remove `draft: true`.
3. Update the Privacy Policy §4A ("taught by Klarweg's owner") and Terms §4A. This is legal wording: it needs the owner's approval.
4. Run:
   - `npm run live:readiness`: no data errors, no blockers;
   - `npm run test:live`.

   The static test listing the published teachers (`LIVE D8`) must be updated deliberately.
5. Review the page locally: the teacher cards, filters, count, profile dialog, and course links.
