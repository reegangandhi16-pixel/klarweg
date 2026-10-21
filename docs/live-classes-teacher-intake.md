# Live Classes — teacher intake

**Status (2026-10-20):** Reegan Gandhi (`reegan-gandhi`), the owner, is the only teacher. No other teacher is engaged (decision sheet D6), and no other teacher's details exist in the repository, its history or the project documents. `teacher-1`, `teacher-2` and `teacher-3` in `live-classes-data.js` are **templates, not people**. They stay `draft: true` and never render on the public site.

Use this document when a real teacher agrees to teach for Klarweg.

The 10 further people the owner named on 2026-10-20 are recorded only as fact-free drafts with opaque ids in [`live-classes-candidates.json`](live-classes-candidates.json); their names are in a private roster outside the repository. Publish any of them only through this process. Reviews and same-day booking: see [`live-classes-consultation-booking.md`](live-classes-consultation-booking.md).

**Keep the filled-in intake private.** The repository is public. Use [`templates/live-classes-teacher-intake.csv`](templates/live-classes-teacher-intake.csv) (headings only) as a spreadsheet, kept outside every Git folder. Only the fields the teacher approved for publication go into `live-classes-data.js`. Certificates, CVs, contracts, phone numbers and IDs never enter the repository.

Don't announce new teachers, recruitment or "more teachers joining soon" on the site or in marketing until the owner approves that plan.

## 0. Fast path and current status

1. Send the teacher the [details and consent request](templates/live-classes-teacher-consent-request.md) yourself.
2. Record the reply in their private intake sheet: value, evidence seen, and your confirmation date for each field.
3. Run `node scripts/live-classes-intake.mjs <private sheet>`. It refuses a sheet inside this repository. It lists exactly what is still missing, or prints a profile entry that the site's own validator already accepts. Evidence and notes never appear in its output.
4. Publish in one PR (§4).

**Status, 2026-10-21.** All local Klarweg material was searched for the 10 people named on 2026-10-20 (`candidate-01` … `candidate-10`): the project worktrees, `~/Documents`, `~/Downloads`, `~/Desktop`, a Spotlight full-text search of the home folder, and this repository's issues and PRs.
- No qualification, teaching experience, level, language, specialism, approach, format, photo, availability, teaching agreement or **publication consent** was found for any of them.
- None has a full profile, and every field in §1 is still missing for each.
- Only `reegan-gandhi` has a full profile.

**Listed teachers, 2026-10-21.** On the owner's instruction, and with each teacher's agreement as confirmed by the owner, the 10 are now **listed** on the page (`tier: 'listed'` in `live-classes-data.js`; `status: "listed"` with `listedAs` in `docs/live-classes-candidates.json`).
- A listed card shows only the name, the title "German Language Teacher", "No reviews yet", and levels where the owner stated them (`candidate-01`: A1–B1). It has a monogram, no photo, no profile dialog and no booking or consultation action, and the teacher is not offered in the consultation form.
- The validator (`LISTED_KEYS` in `scripts/live-classes-readiness.mjs`) refuses anything else on a listed card: experience, qualifications, certificates, headline, languages, formats, ratings or availability.
- To upgrade a listed teacher to a full profile, run this guide's intake under the same id. The intake script accepts a listed id.
- **Legal pages not yet updated:** Terms §4A ("Live classes and consultations are taught online by Klarweg's owner") and Privacy §4A ("Live classes and consultations are taught by Klarweg's owner…") now contradict the listed teachers. They need owner-approved wording; this change does not edit them.



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
| `tier` | **no** | `listed` only for a name-and-title card (see §0); leave it out for a full profile | — |
| `title` | yes, listed cards only | exactly "German Language Teacher" | owner instruction |

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
