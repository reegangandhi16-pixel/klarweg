# Live Classes — launch readiness

**Status (2026-10-20):**
- **Decided:** D1 (live classes, yes), D2 (the owner's teacher profile `reegan-gandhi`, fully confirmed), and D3–D7, approved by the owner on 2026-10-20 and recorded in [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md):
  - the first course, Beginner German · A1 at ₹7,999;
  - the ₹100 consultation terms;
  - the four live-class policies;
  - the product and privacy choices;
  - manual UPI or bank-transfer payment.
- **On hold:** D8, the launch. The teacher and `live-a1` stay `draft: true`, and the A1 start date is not set.
- **Pending:**
  - the legal review of the Terms and Privacy wording;
  - the accounting follow-up for manual payments.
- **Page status:** `live-classes.html` is an unlisted preview. It is `noindex` and not in `.github/pages-allowlist.txt`, `sitemap.xml` or any nav. Every teacher and course entry is a draft that never renders on a deployed host.

**It is not ready to launch.**

Check the current state at any time:

```
npm run live:readiness      # data errors + launch blockers (scripts/live-classes-readiness.mjs)
npm run test:live           # static guards incl. the launch gate, then the headless-Chrome checks
```

The launch gate in `scripts/live-classes-static.test.mjs` fails CI if the page is added to the Pages allowlist while any blocker below is open. Blockers reported today:

1. No published teacher profile. *(Removing `draft: true` is part of D8.)*
2. No published live course. *(The same; it also needs a start date before enrolment can open.)*
3. `terms.html` covers only self-paced content. *(It waits for the legal review.)*
4. `privacy.html` does not describe the consultation request. *(It waits for the legal review.)*

Cleared on 2026-10-20 by the approved decisions: consultation terms (`termsConfirmed: true`, D4) and the four live-class policies (D5).

### Owner checklist

**Everything still open is in part B of [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md):**
- the legal review of the Terms/Privacy drafts (a lawyer is recommended);
- the accounting follow-up (receipts or invoices, tax, payment-record keeping);
- the A1 start date;
- the D8 launch go-ahead;
- optionally, a photo and an availability line.

### Preview locally

```
# in live-classes-data.js set showDrafts: true (never commit it; the static tests reject it)
python3 -m http.server 8000      # from the repository root
# open http://localhost:8000/live-classes.html
```

- Drafts render only on `localhost`, `127.0.0.1` or `file://`.
- To see the page as it would launch, set `draft: false` on an entry **locally**. The validator (`npm run live:readiness`) shows what that entry still needs.

The former blocker "`index.html` says No live classes" is cleared in the repository by the homepage FAQ change (Variant A, see D1). Clearing it in the repository is not the same as publishing it; see the D1 status below.

The check also reports, when they occur:
- a fee in the meta descriptions that differs from `consultation.feeLabel`;
- a homepage FAQ whose FAQPage structured data differs from the visible answer;
- a homepage FAQ that says enrolment is open while no published course is open;
- a level range in the meta descriptions (e.g. "A1 to C2") that the published teachers and courses do not cover. The hero's range is computed from the data.

As data errors it also reports a published course offered at a level its teachers don't teach.

The wording for the homepage FAQ and for blockers 3–4 (Terms, Privacy) is in **`docs/live-classes-review-drafts.md`**. It carries the approved business decisions, but the legal wording awaits review and is not approved for publication. `terms.html`, `privacy.html` and `refund-policy.html` stay unchanged until then (a static test enforces this).

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
| The consultation form only opens the visitor's email app; nothing is sent or stored by the page | `kw-live.js`, static test "only hands off to email" | Basis for the drafted Privacy Policy row. |

**Confirmed by the owner on 2026-10-20 (not from repository evidence):** the teacher profile (D2), the A1 course and its ₹7,999 fee (D3), the consultation terms, including the ₹100 fee and 7-day adjustment from the original brief (D4), the policies (D5), and the payment method (D7). See the decision sheet.

**Still unknown:** the A1 start date; testimonials (none exist).

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
*Status (2026-10-20):* the owner's own profile is drafted as `reegan-gandhi` and stays `draft: true`. It is not approved for publication.
- **Confirmed by the owner:**
  - name;
  - headline;
  - German proficiency C1 (the level of German);
  - **5 years of teaching German**;
  - **Goethe-Zertifikat C1** (listed under Goethe certificates; it is also the profile's only confirmed qualification and is shown once);
  - levels taught A1–B2;
  - teaches in Hindi and English;
  - exam preparation "Goethe exam preparation at A1–B1";
  - formats: group batch and one-to-one;
  - teaching approach;
  - specialisms, approved as written on 2026-10-20: "German grammar", "Structured learning for Hindi-speaking learners", "Goethe exam preparation".
- No profile field is awaiting confirmation (`unconfirmed: []`).
- **Not claimed:** no university degree or separate teaching qualification.
- Optional, not required for launch: photo, availability.

The validator would refuse to publish the profile if any field became unconfirmed or held a placeholder. Two things still keep the profile off the public site:
- `draft: true`: drafts never render on a deployed host;
- the launch gate: the page cannot be allowlisted while blockers remain.

Publishing the profile is part of the launch go-ahead (D8).

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

**D3. Launch courses. DECIDED (2026-10-20):** Beginner German · A1, `live-a1`; see the decision sheet. Start date still open.
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

*Recommendation:* publish only courses that have a confirmed teacher. The validator rejects:
- a published course whose teacher is still a draft, because that teacher would be invisible on the live site;
- a published course offered at a level its teacher doesn't teach.

Today the only confirmed teacher teaches A1–B2 (Goethe preparation A1–B1). So the first course should sit in that range. The C1–C2 draft course and the template teachers `teacher-1`, `teacher-2` and `teacher-3` remain templates until real teachers exist.

**D4. Consultation terms. DECIDED (2026-10-20):** ₹100, 20 minutes, Google Meet, UPI after the time is confirmed, 7-day adjustment; `termsConfirmed: true`.
*Why it matters:* the fee and adjustment period appear in 16 places on the page (all read from the data file) and in the booking email. The reply email has to tell the student how to pay.
*Needed:*
- confirm or change the ₹100 fee and the 7-day adjustment;
- how the fee is paid (there is no consultation product in Cashfree);
- whether it is refunded if Klarweg cancels;
- optionally, the session length and platform.

Then set `consultation.termsConfirmed: true`. If the fee changes, also update the two meta descriptions (checklist item 6 in `live-classes.html`); the gate reports it if you forget.

**D5. Live-class policies. DECIDED (2026-10-20):** the four texts are in `policies` and shown in the page FAQ.
*Why it matters:* the FAQ currently says these are not published. The existing Refund Policy covers self-paced purchases only.
*Needed:* final text for
- missed classes;
- cancellation and refunds;
- how classes are scheduled;
- what the course fee includes.

Each is one sentence or paragraph in `policies` in `live-classes-data.js`.

**D6. Terms of Service and Privacy Policy.** Business choices DECIDED (2026-10-20): a live course does not include self-paced access; request emails are kept 12 months after the last contact and deleted by hand; classes are not recorded; the owner is the only teacher. The legal wording in `live-classes-review-drafts.md` **awaits legal review**.
*Why it matters:*
- `terms.html` §2 defines the service as self-paced only.
- `privacy.html` describes what the systems store "exactly", and says a phone number is collected only at checkout.
- The consultation form sends name, email, an optional phone number, level, goal, preferred times and a message to the Gmail inbox, and its consent box refers to the Privacy Policy.

*Recommendation:* update both pages to cover live classes and consultation requests before launch. The legal wording is yours to approve.

**D7. How live-course fees are collected. DECIDED (2026-10-20):** manual UPI or bank transfer on an emailed payment request; no Cashfree product and no new backend. The accounting follow-up is still open.
*Why it matters:* the Cashfree catalog and checkout know only self-paced products, so live fees need either a manual process or a new payment product. A new product changes the payment backend, which is a separate project.
The decision: manual for the first batch. A static test keeps live products out of the Cashfree catalogue, because `grantProduct()` would unlock self-paced content.

**D8. Launch go-ahead. ON HOLD (owner, 2026-10-20).**
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

## 2B. Owner input

Superseded by the reply template for the pending items in [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md).

---

## 3. Optional improvements after launch

- Online consultation booking and payment, replacing the email hand-off. This needs a scheduling tool and a payment product (see D7).
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
- **One-teacher experience:**
  - a featured profile layout;
  - copy that speaks of one teacher;
  - filters only when there are two or more teachers;
  - the hero level range computed from published data.
  The browser suite simulates the launch with the owner's profile published.
- Course cards link each teacher's name to their profile.
- **Two request types in the form:**
  - a paid consultation;
  - free "tell me when a course opens" interest.
  "Register interest" on a course that isn't open never leads to a paid request, and the email and confirmation text match the chosen type.
- **Works without JavaScript:**
  - every FAQ answer is open and readable;
  - filters and the request form, which need `kw-live.js`, are hidden;
  - a plain email route to the documented address replaces the form.
  The browser suite checks this with scripts disabled.
- **A structural accessibility audit** in the browser suite: control names, labels, unique ids, heading order, image alt text, radio groups. It runs in the production default, the preview and the launch simulation.
- **Structured data, built at runtime:**
  - a FAQPage identical to the visible FAQ;
  - a `Course` entry for each **published** course, with its published instructor;
  - no price, date or draft data ever enters it.
