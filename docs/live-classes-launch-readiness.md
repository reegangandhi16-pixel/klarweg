# Live Classes — launch readiness

**Status (2026-10-20):** decision D1 is made: Klarweg intends to offer teacher-led live classes. No teacher, course, batch, schedule, fee, policy or enrolment date is approved yet. `live-classes.html` is an unlisted preview. It is `noindex`, not in `.github/pages-allowlist.txt`, `sitemap.xml` or any nav, and every teacher and course entry is a draft that never renders on a deployed host. **It is not ready to launch:** the repository contains no verified teacher, course, schedule, fee or policy information.

Check the current state at any time:

```
npm run live:readiness      # data errors + launch blockers (scripts/live-classes-readiness.mjs)
npm run test:live           # static guards incl. the launch gate, then the headless-Chrome checks
```

The launch gate in `scripts/live-classes-static.test.mjs` fails CI if the page is added to the Pages allowlist while any blocker below is open. Blockers reported today:

1. Consultation terms not confirmed (`consultation.termsConfirmed` is `false`).
2. Live-class policies not written: missed class, cancellation/refund, scheduling, fee inclusions.
3. No published teacher profile.
4. No published live course.
5. `terms.html` covers only self-paced content.
6. `privacy.html` does not describe the consultation request.

The former blocker "`index.html` says No live classes" is cleared in the repository by the homepage FAQ change (Variant A, see D1). Clearing it in the repository is not the same as publishing it; see the D1 status below.

The check also reports, when they occur:
- a fee in the meta descriptions that differs from `consultation.feeLabel`;
- a homepage FAQ whose FAQPage structured data differs from the visible answer;
- a homepage FAQ that says enrolment is open while no published course is open.

Proposed wording for the homepage FAQ and for blockers 5–6 (Terms, Privacy) is in **`docs/live-classes-review-drafts.md`**. It is a draft for review, not approved.

---

## 1. Verified information already in the repository

| Fact | Source | Use on the live page |
|---|---|---|
| Contact address `klarwegofficial@gmail.com` | `contact.html`, `privacy.html`, `terms.html`, `refund-policy.html` | Consultation requests are sent here (`live-classes-data.js` → `contact.email`; a test pins it to `contact.html`). |
| Reply time "within two working days, Monday to Friday" | `contact.html` ("Response time") | Shown on the form. |
| Self-paced prices: A1 ₹1,999, A2 ₹2,999, B1 ₹3,999, B2 ₹4,999, C1 ₹7,999, C2 ₹8,999, Lifetime ₹4,999 | `kw-products.js` | **Self-paced only.** Shown in the "two ways to learn" comparison, read from `kw-products.js`. Never a live-course fee. |
| 7-day money-back guarantee | `refund-policy.html` | Covers single-level and Lifetime purchases **only**. It does not cover live classes or consultations, and the page says so. |
| The service is self-paced content; a level gives 2 years' access | `terms.html` §2, §4 | Live classes are not yet part of the Terms. |
| Cashfree catalog has no live-course or consultation product | `kw-products.js`, `access/worker/src/products.js` | Nothing on the page takes payment; the form only prepares an email. |
| Brand positioning: self-learning platform with Klarweg AI | `uploads/klarweg-os.md`, `index.html` FAQ | Superseded for live classes by D1 (2026-10-20); the homepage FAQ now announces them (Variant A). |
| Klarweg AI gives feedback on German the learner writes or says | `privacy.html` (Klarweg AI feedback) | Basis for the AI sentence in the homepage FAQ. |
| The consultation form only opens the visitor's email app; nothing is sent or stored by the page | `kw-live.js`, static test "only hands off to email" | Basis for the proposed Privacy Policy row. |

**Not found anywhere in the repository, git history or project documents:** teacher names, qualifications or photos; live course offerings, schedules, batch sizes, start dates, durations, fees or materials; consultation duration, platform or payment method; live-class policies; testimonials.

**From the original page brief only, not confirmed in writing:** the ₹100 consultation fee and the 7-day adjustment against a course fee. They are marked UNCONFIRMED in `live-classes-data.js`.

---

## 2. Decisions that require the owner

Each item is needed before launch unless marked otherwise. A recommendation is given only where the repository supports one.

**D1. Are live classes part of Klarweg? DECIDED: YES (owner, 2026-10-20).**
Klarweg intends to offer teacher-led live German classes. This sets the direction only; it approves no teacher, course, schedule, fee, policy or date.
*Follow-up:*
- **Homepage announcement (Variant A).** The two stages are separate:
  - *Prepared:* the visible FAQ answer and the FAQPage structured data in `index.html` carry the Variant A wording, identical in both. A static test checks that it states the intention, says live classes are "not open for booking yet", has no link, fee, date or number, and matches its structured data.
  - *Published:* only when that change is merged to `main` and the site is deployed. Until then the live homepage still says "No live classes". Merging needs the owner's review of the wording, because once merged it is a public announcement.
- **Variant B** (with a link to the Live Classes page) replaces Variant A only as part of the launch checklist (D8).
- The brand foundation (`uploads/klarweg-os.md`) still describes a self-learning-only product and should be updated by the owner.

**D2. Teachers.**
*Status (2026-10-20):* the owner's own profile is drafted as `reegan-gandhi` and stays `draft: true`.
- **Confirmed by the owner:**
  - name;
  - headline;
  - German proficiency C1 (a stated level of German, not a certificate);
  - levels taught A1–B2;
  - teaches in Hindi and English;
  - exam preparation "Goethe exam preparation at A1–B1";
  - formats: group batch and one-to-one;
  - teaching approach.
- **Still awaiting confirmation** (listed in `unconfirmed`):
  - `experience`: no number of years supplied (`[bracketed]` placeholder);
  - `qualifications`: no qualification confirmed (`[bracketed]` placeholder);
  - `specialisms`: suggested wording, not yet approved.
- **No Goethe certificate is claimed**; `goethe` stays empty until the owner confirms one they hold.
- Optional: photo, availability.

The validator refuses to publish the profile while any field is unconfirmed or any placeholder remains.

*Why it matters:* the page shows only facts a teacher actually holds; a profile is published only from their CV and certificates.
*Needed per teacher:*
- name;
- one-line focus;
- years teaching German;
- German level;
- qualifications as on the certificate;
- Goethe certificates held, if any;
- levels taught and languages of instruction;
- formats (group / one-to-one);
- exam-prep experience;
- a short description of their approach;
- optionally, an approved photo (4:3, at least 800×600) and their availability;
- their consent to publish.

**D3. Launch courses.**
*Why it matters:* a course card shows level, format, schedule, length, next batch, materials, fee and enrolment status. Anything unknown shows "To be announced". The validator refuses open enrolment without a fee, start date and schedule.
*Needed per course:*
- title and objectives;
- levels;
- teacher(s);
- format and batch size;
- classes per week and session length;
- total length;
- next start date;
- materials;
- fee and payment terms;
- enrolment status.

*Recommendation:* publish only courses that have a confirmed teacher. The validator already rejects a published course whose teacher is still a draft, because that teacher would be invisible on the live site.

**D4. Consultation terms.**
*Why it matters:* the fee and adjustment period appear in 16 places on the page (all read from the data file) and in the booking email. The reply email has to tell the student how to pay.
*Needed:*
- confirm or change the ₹100 fee and the 7-day adjustment;
- how the fee is paid (there is no consultation product in Cashfree);
- whether it is refunded if Klarweg cancels;
- optionally, the session length and platform.

Then set `consultation.termsConfirmed: true`. If the fee changes, also update the two meta descriptions (checklist item 6 in `live-classes.html`); the gate reports it if you forget.

**D5. Live-class policies.**
*Why it matters:* the FAQ currently says these are not published. The existing Refund Policy covers self-paced purchases only.
*Needed:* final text for
- missed classes;
- cancellation and refunds;
- how classes are scheduled;
- what the course fee includes.

Each is one sentence or paragraph in `policies` in `live-classes-data.js`.

**D6. Terms of Service and Privacy Policy.** Proposed changes, with every business gap marked `[OWNER: …]`, are in `live-classes-review-drafts.md`.
*Why it matters:*
- `terms.html` §2 defines the service as self-paced only.
- `privacy.html` describes what the systems store "exactly", and says a phone number is collected only at checkout.
- The consultation form sends name, email, an optional phone number, level, goal, preferred times and a message to the Gmail inbox, and its consent box refers to the Privacy Policy.

*Recommendation:* update both pages to cover live classes and consultation requests before launch. The legal wording is yours to approve.

**D7. How live-course fees are collected.**
*Why it matters:* the Cashfree catalog and checkout know only self-paced products, so live fees need either a manual process or a new payment product. A new product changes the payment backend, which is a separate project.
No recommendation without your preference on manual versus automated payment.

**D8. Launch go-ahead.**
Publishing means the checklist at the top of `live-classes.html`:
- allowlist the three files and any photos;
- add nav and footer links on the other pages;
- add the page to `sitemap.xml`;
- remove `noindex` and add a canonical link.

Do it only after D1–D7. The tests that keep the page unpublished must then be updated deliberately.

*Optional:* **testimonials.** Only from real students, with written permission recorded in the `permission` field. The validator requires that field for every published testimonial.

---

## 2A. Minimum verified information for the first teacher and the first course

This is the smallest set the validator (`checkData`) and the page need. Everything must come from the teacher's own documents or the owner's written decision. **Nothing in the repository can be reused for these fields.**
- The draft course titles and objectives in `live-classes-data.js` are generic CEFR-level descriptions written as templates. Keep them only if the teacher confirms they describe the course.
- Self-paced prices are never live fees.

**First teacher (required to publish a profile):**
- full name;
- one-line teaching focus;
- years teaching German;
- German level;
- at least one qualification, as on the certificate;
- levels taught (A1–C2);
- language(s) of instruction;
- formats (Group batch / One-to-one);
- **written consent to be shown on the site**.

Optional: Goethe certificates, specialisms, exam-prep experience, approach, availability, a photo (4:3, at least 800×600, with consent).

**First course, by the enrolment status you want to show:**

| Status shown | Minimum needed |
|---|---|
| "Not open yet" (`not-open`) | title, objectives, level(s), a published teacher, format |
| "Join the waitlist" (`waitlist`) | the above plus the fee |
| "Enrolment open" (`open`) | the above plus start date, classes per week, session length, total duration, and batch size for a group batch |

The fee and payment terms should also be settled.

*Recommendation:* launch the first course as `waitlist` or `open` only after D4, D5 and D7 are settled, because a student who sees a fee will ask how to pay and what happens if they miss a class.

The whole launch also needs, regardless of course status: D4 (consultation terms), D5 (four policies), D6 (Terms and Privacy approved), D7 (payment method).

## 2B. Owner input template

Copy, fill in, and send back. Leave a line blank if it is not decided. Nothing blank will be published.

```
=== TEACHER 1 ===
Full name:
Consent to publish profile (yes / date given):
One-line teaching focus:
Years teaching German:
German level (e.g. C2, native):
Qualifications (exactly as on certificate):
Goethe certificates held (or "none"):
Levels taught (A1 A2 B1 B2 C1 C2):
Languages of instruction (e.g. Hindi, English, German):
Formats (Group batch / One-to-one):
Exam-prep experience (optional):
Teaching approach, 2–3 sentences (optional):
Availability, e.g. "Weekday evenings IST" (optional):
Photo approved for the site (yes/no; file to follow):

=== COURSE 1 ===
Title:
Level(s):
Teacher:
What students will be able to do (3 points):
Format (Group batch / One-to-one):
Batch size (group only):
Classes per week:
Session length:
Total duration (e.g. 12 weeks):
Next start date:
Materials included:
Fee (₹):
Payment terms (e.g. full upfront / instalments):
Status to show (not open yet / waitlist / open):

=== CONSULTATION (D4) ===
Fee (confirm ₹100 or new amount):
Adjusted against course fee if enrolling within __ days (confirm 7 or new):
Length (minutes):
Platform (e.g. Google Meet):
How the fee is paid:
Refunded if Klarweg cancels? (yes/no):

=== POLICIES (D5), one sentence or paragraph each ===
Missed classes:
Cancellation and refunds (student cancels before start / after start; Klarweg cancels):
How classes are scheduled:
What the course fee includes:

=== LEGAL / PRIVACY (D6), see docs/live-classes-review-drafts.md ===
Are classes recorded? (no / yes: who keeps it, for how long):
Are teachers Klarweg itself or independent tutors?:
How long are consultation emails kept?:
Does a live course include self-paced access? (yes/no):
Removed for disruption: refund or not?:
Terms/Privacy drafts approved (yes / with edits / lawyer review first):

=== PAYMENT (D7) ===
How live fees are collected (manual UPI/bank transfer / new online product):

=== HOMEPAGE FAQ (D1 follow-up) ===
Variant A wording approved for publication (yes / edits):
Publish it now, before the page launches? (yes / only at launch):
```

---

## 3. Optional improvements after launch

- Online consultation booking and payment, replacing the email hand-off. This needs a scheduling tool and a payment product (see D7).
- Course structured data (schema.org `Course`) once real courses are public.
- Teacher photos for every profile; the page works with initials until then.
- A waitlist or "notify me" list per course instead of free-text interest requests.
- Real screen-reader (VoiceOver/NVDA) and physical-device testing. The automated checks cover headless Chrome at 320–1280 px.

## Already handled, no owner input needed

- The data structure, draft handling and production-safety guard (drafts never render on a deployed host).
- Validation of every entry: ids, levels, groups, formats, enrolment status, teacher references, completeness of published entries, photo files, testimonial consent.
- The launch gate in CI, including homepage FAQ ↔ structured-data parity and no "enrolment open" claim without an open course.
- The contact address and reply time match `contact.html`.
- All consultation terms on the page read from one data field.
- Honest empty states and copy while nothing is published.
- Accessibility of filters, the profile dialog and the form.
- Layout at phone, tablet and desktop widths.
