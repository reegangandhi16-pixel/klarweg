# Live Classes — Terms and Privacy wording for legal review

**Status: awaiting final legal review. Not published.** The business facts in §2 and §3 are the owner's decisions of 2026-10-20 (D3–D7, part A of [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md)). The *legal wording* around them is a draft: it is not legal advice and nobody has reviewed it. A review by a qualified lawyer is recommended. Until the wording is approved, `terms.html`, `privacy.html` and `refund-policy.html` stay unchanged; a static test enforces this while the sheet says `Legal review status: pending`.

Variant A of the homepage FAQ (§1) is already live on `index.html`. Variant B waits for the launch (D8, on hold).

`[OWNER: …]` marks one point that still needs a decision: the accounting follow-up for payment records. `[LEGAL: …]` marks questions for the reviewer. Do not publish a section while it contains either.

---

## 1. Homepage FAQ (`index.html`)

Before D1, the visible FAQ (around line 6035) and the FAQPage structured data (around line 76) both said "No live classes… This is deliberate". Both change together, with identical text: `npm run live:readiness` reports a mismatch between them.

### Variant A: before enrolment opens (can go live once approved)

**Question (unchanged):** Are there live classes or teachers?

**Answer:**

> Klarweg is preparing teacher-led live German classes to sit alongside the self-paced courses. Teachers, schedules and fees will be announced before enrolment opens; live classes are not open for booking yet. The self-paced courses work as they always have: you learn on your schedule, at your pace, and Klarweg AI gives feedback on the German you write and say.

Why this wording:
- It states the decision ("preparing") without implying that a teacher, batch or date exists.
- "Not open for booking yet" stays true until a course is published with open enrolment. The readiness check flags the homepage if it ever says enrolment is open while no published course is open.
- The old line "The AI handles the things a teacher would" is dropped, because it argues against the new offering.
- The Klarweg AI claim is limited to what the Privacy Policy already documents (feedback on German you write or say).
- There is no link to `live-classes.html`, because that page stays unlisted until launch.

Structured data: use the same answer text as the `"text"` value of the existing question's `acceptedAnswer`, with no HTML.

### Variant B: at launch (only together with the launch checklist, D8)

> Yes. Alongside the self-paced courses, Klarweg offers teacher-led live German classes. The first course is a small-group Beginner German (A1) batch. [At launch, name only the courses actually published.] See the teachers, current courses and how to book a consultation on the <a href="live-classes.html">Live Classes</a> page.

The structured-data copy should keep the sentence but drop the link markup.

---

## 2. Terms of Service (`terms.html`)

Current: §1 and §2 describe self-paced courses only. §5 offers a 7-day full refund on purchases, which as written would also apply to a live course.

### §1 Who we are: proposed change

> Klarweg is a German-language education brand offering self-paced online courses (levels A1 through C2, aligned to the Goethe-Zertifikat exam levels) and teacher-led live classes. …

The rest of §1 is unchanged.

### §2 The service: add a paragraph

> Klarweg also offers teacher-led live German classes and paid personal consultations, described in section 4A. Live classes are a separate service from the self-paced courses: buying a self-paced level does not include live classes, and a live course does not include access to the self-paced courses. (D6)

### New §4A Live classes and consultations

> **Course terms in writing.** Before you pay for a live course, we confirm its terms to you in writing: the teacher, level, format (group batch or one-to-one), number and length of sessions, schedule (in Indian Standard Time), start date, platform, materials and fee. Those course terms form part of these Terms.
>
> **Consultations.** A personal consultation costs ₹100 and lasts 20 minutes on Google Meet. We confirm a time slot by email, then ask you to pay by UPI; the joining link follows payment. If you enrol in a live course within 7 days of your consultation, the consultation fee is deducted from the course fee. If Klarweg cancels a consultation, you choose a full refund or a new time. You can move it once, free of charge, with at least 12 hours' notice; a consultation missed without notice is not refunded. (D4)
>
> **Course interest.** Registering interest in a course is free and commits you to nothing.
>
> **Payment.** Live-course and consultation fees are paid by UPI or bank transfer, on a payment request we send by email. A course fee is paid in full before the first class or, where the course terms offer it, in instalments (for Beginner German · A1: ₹4,000 before the start and ₹3,999 before week 7). A place in a batch is confirmed only once payment is received. (D3, D7)
>
> **Missed classes.** Group classes are not recorded, and a missed group class is not refunded or repeated individually. Your teacher shares the class notes and homework so you can catch up. One-to-one lessons can be moved free of charge with at least 24 hours' notice. (D5)
>
> **Cancellations and refunds.** If you cancel at least 48 hours before the first class, your course fee is refunded in full. If you cancel during the first two weeks of the course, we refund the classes still to come; after that, course fees are not refunded. If Klarweg cancels or postpones a course and the new dates don't suit you, we refund everything not yet delivered. The 7-day guarantee in section 5 covers self-paced purchases only, not live classes or consultations. (D5)
>
> **Scheduling.** Group batches run on a fixed timetable in Indian Standard Time, shown on the course before you enrol. If a class has to move, we tell you at least 24 hours in advance and schedule a replacement class. (D5)
>
> **Changes by Klarweg.** If your teacher becomes unavailable, we reschedule the affected classes and tell you in advance. If the new dates don't suit you, the cancellation and refund terms above apply. (Klarweg's only teacher today is its owner, D6, so this clause does not promise a substitute teacher.)
>
> **Conduct in class.** Be respectful to the teacher and other students. Do not record, share or redistribute classes or class materials without permission. We may remove a participant who disrupts a class. [LEGAL: whether to refund the classes not yet held in that case.]
>
> **Recordings.** Classes are not recorded. (D6)

### §5 Refunds: proposed change

> **Self-paced courses:** Klarweg offers a 7-day refund on single-level and Lifetime purchases: … (current text). **Live classes and consultations** have their own refund terms in section 4A.

The Refund Policy page (`refund-policy.html`) needs a matching sentence that live classes and consultations are covered by section 4A of the Terms. Its self-paced guarantee itself does not change.

### §9 and §10

No change is needed. "We don't guarantee any particular learning outcome, exam result…" already covers live classes. §10 limits liability to "the course or bundle", which a live course falls under.

---

## 3. Privacy Policy (`privacy.html`)

Current: §1 says self-paced only. §2 claims to reflect "exactly what the Klarweg systems store today" and says the phone number is collected "only when you begin a purchase". The live-classes consultation form asks for an optional phone number, and its consent box points to this policy.

Verified facts about the form (from `kw-live.js` and the static test "the consultation form only hands off to email"):
- The page has no form action, no `fetch` and no checkout.
- On submit it opens the visitor's own email app with a pre-filled message to `klarwegofficial@gmail.com`.
- Nothing is sent or stored unless the visitor sends that email.
- The message contains:
  - the request type: a consultation, or free interest in a course;
  - name and email;
  - WhatsApp/phone (optional);
  - current level and main goal;
  - preferred teacher and course of interest;
  - preferred times (IST);
  - a free-text message.
- The consent box covers both request types: "to respond to my request, as described in the Privacy Policy".

### §1 Who we are: proposed change

The same change as Terms §1: "… self-paced online courses … and teacher-led live classes."

### §2: add a row to the table

| Data | Why we collect it |
|---|---|
| Consultation requests and course interest | If you send a request from the Live Classes page (a consultation, or interest in a course), your own email app sends us the details you entered: name, email, optional WhatsApp/phone number, current level, goal, preferred teacher and course, preferred times and your message. We use them only to answer your request, arrange a consultation and tell you about a suitable course. The page itself does not send or store anything: the request reaches us only if you send the email, and it is kept in our inbox, which is hosted by Google (Gmail), not on Klarweg's servers. |

### §2 "Phone number" row: proposed change

> Required by our payment processor, Cashfree, to create an order, collected when you begin a purchase. You may also choose to include a WhatsApp or phone number in a consultation or course-interest request so we can reach you about it.

### New §4A Live classes

> Live classes and consultations are taught by Klarweg's owner. They take place on Google Meet, which processes your name, voice and video as part of the call under Google's privacy policy. Classes are not recorded. (D4, D6) [LEGAL: if other teachers are ever engaged, this section must say how their data is shared before they teach.] [LEGAL: attendance or progress notes, if any are kept, and where.]
>
> **Paying for a live course or consultation.** You pay by UPI or bank transfer (D7). Your payment reaches us through our bank, which shows us your name and UPI ID or account reference. [OWNER: how payment records are kept and for how long, after the accounting follow-up. Do not publish a retention period for them before then.]

### §8 Third-party services: add

> Google (Gmail and Google Meet): receives consultation and course-interest requests and our replies, and hosts live classes and consultations. Our bank processes UPI and bank-transfer payments for live fees. [LEGAL: whether to name the bank.]

### §9 How long we keep data: add

> Consultation and course-interest requests and related emails are kept for 12 months after our last contact with you, then deleted from the inbox by hand, unless you ask us to delete them earlier. (D6) [OWNER: payment records, after the accounting follow-up.]

### Notes for the legal reviewer

- The table's opening line says "exactly what the Klarweg systems store today". Once a live-class process exists (attendance, payments for live courses, recordings), each new kind of data needs its own row before launch.
- The policy names no grievance officer (§13). Whether one is needed, for example under India's DPDP Act, is a question for a lawyer, not something decided here.
- The 12-month retention of request emails is a manual practice (deleted by hand in Gmail). Word it as a commitment Klarweg follows, not an automatic process.
- Nothing in these drafts claims compliance with any law. The reviewer decides whether any such statement belongs in the final text.
