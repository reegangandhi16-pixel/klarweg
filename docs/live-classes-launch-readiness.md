# Live Classes — launch readiness

**Status (2026-10-20):** `live-classes.html` is an unlisted preview. It is `noindex`, not in `.github/pages-allowlist.txt`, `sitemap.xml` or any nav, and every teacher and course entry is a draft that never renders on a deployed host. **It is not ready to launch:** the repository contains no verified teacher, course, schedule, fee or policy information.

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
5. `index.html` says "No live classes" (visible FAQ and FAQPage structured data).
6. `terms.html` covers only self-paced content.
7. `privacy.html` does not describe the consultation request.

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
| Brand positioning: self-learning platform with Klarweg AI | `uploads/klarweg-os.md`, `index.html` FAQ | Conflicts with launching live classes (decision D1). |

**Not found anywhere in the repository, git history or project documents:** teacher names, qualifications or photos; live course offerings, schedules, batch sizes, start dates, durations, fees or materials; consultation duration, platform or payment method; live-class policies; testimonials.

**From the original page brief only, not confirmed in writing:** the ₹100 consultation fee and the 7-day adjustment against a course fee. They are marked UNCONFIRMED in `live-classes-data.js`.

---

## 2. Decisions that require the owner

Each item is needed before launch unless marked otherwise. A recommendation is given only where the repository supports one.

**D1. Are live classes part of Klarweg?**
*Why it matters:* the homepage tells visitors, and search engines through structured data, "No live classes. … This is deliberate". The brand foundation (`uploads/klarweg-os.md`) defines the product as self-learning plus Klarweg AI. Publishing the page without resolving this contradicts the main site.
*If yes:* the homepage FAQ answer and its FAQPage JSON-LD must change in the same release as the page; the wording is yours to approve. No recommendation on the decision itself.

**D2. Teachers.**
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

**D6. Terms of Service and Privacy Policy.**
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

## 3. Optional improvements after launch

- Online consultation booking and payment, replacing the email hand-off. This needs a scheduling tool and a payment product (see D7).
- Course structured data (schema.org `Course`) once real courses are public.
- Teacher photos for every profile; the page works with initials until then.
- A waitlist or "notify me" list per course instead of free-text interest requests.
- Real screen-reader (VoiceOver/NVDA) and physical-device testing. The automated checks cover headless Chrome at 320–1280 px.

## Already handled, no owner input needed

- The data structure, draft handling and production-safety guard (drafts never render on a deployed host).
- Validation of every entry: ids, levels, groups, formats, enrolment status, teacher references, completeness of published entries, photo files, testimonial consent.
- The launch gate in CI.
- The contact address and reply time match `contact.html`.
- All consultation terms on the page read from one data field.
- Honest empty states and copy while nothing is published.
- Accessibility of filters, the profile dialog and the form.
- Layout at phone, tablet and desktop widths.
