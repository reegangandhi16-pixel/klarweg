# Live Classes — Terms and Privacy wording for legal review

> **Update 2026-10-21 (owner decision D11).** The manual payment flow described below (consultation requests by email, UPI or bank transfer on an emailed payment request, D7) is **withdrawn**: consultations are booked and paid online, and course fees are paid online in one full payment, through Cashfree only. `terms.html` §4A and `privacy.html` §2, §4, §4A, §8 and §9 have been rewritten for that (pending the owner's review). For a lawyer review, start from those published pages. The draft clauses and the email below are kept as the 2026-10-20 record; their UPI and email-payment lines no longer apply.

**Status: published as owner-approved wording on 2026-10-20 (D8, waitlist launch); not reviewed by a lawyer.** The live `terms.html` §4A, `privacy.html` §4A and `refund-policy.html` are based on this draft, with every `[OWNER]`/`[LEGAL]` point left out rather than decided: the Terms say those details are confirmed in writing before anyone pays, and no course fee is accepted until enrolment opens. A lawyer's review is still recommended before paid enrolment opens. The rest of this document is the original review brief, kept for that review. The business facts in §2 and §3 are the owner's decisions of 2026-10-20 (D3–D7, part A of [`live-classes-owner-decisions.md`](live-classes-owner-decisions.md)). The *legal wording* around them is a draft: it is not legal advice and nobody has reviewed it. A review by a qualified lawyer is recommended. Until the wording is approved, `terms.html`, `privacy.html` and `refund-policy.html` stay unchanged; a static test enforces this while the sheet says `Legal review status: pending`.

The homepage FAQ now uses a waitlist version of Variant B (§1): it names the A1 waitlist, says enrolment is not open and the start date is not announced.

`[OWNER: …]` marks a business point still to be decided, mostly with the accountant ([`live-classes-accounting-handoff.md`](live-classes-accounting-handoff.md)). `[LEGAL: …]` marks questions for the reviewer, numbered Q1–Q15 in §0. Do not publish a section while it contains either.

**For the lawyer:** read §0 (the brief), then §2–§4 (the proposed wording). §1 is the homepage FAQ, which is marketing text and needs review only for the launch sentence (Variant B). §5 holds a copy-ready email and the documents to send.

---

## 0. Brief for the legal reviewer

### What Klarweg is today

- Klarweg is a German-language education brand **operated by an individual**, not a registered company. It has no published business address, and its only contact is `klarwegofficial@gmail.com` (Terms §1, Privacy §1).
- It sells **self-paced** online courses (levels A1–C2) through a Cashfree checkout:
  - a single level gives 2 years' access; a Lifetime bundle covers all levels;
  - every self-paced purchase carries a **7-day, no-questions-asked full refund** (`refund-policy.html`, Terms §5).
- The live Terms, Privacy Policy and Refund Policy describe the self-paced service only.

### What is proposed: teacher-led live classes (not launched)

All of this was decided by the owner on 2026-10-20 ([decision sheet](live-classes-owner-decisions.md), part A). None of it is published.

- **The teacher** is the owner (Reegan Gandhi). No other teachers are engaged.
- **First course: Beginner German · A1, a group batch:**
  - 4 to 8 learners: it runs with at least 4 and takes at most 8;
  - Mon, Wed and Fri, 7:30–9:00 pm IST; 12 weeks, 36 classes of 90 minutes, 54 teaching hours;
  - on Google Meet; class notes, PDF worksheets and written homework feedback;
  - prepares for Goethe-Zertifikat A1: Start Deutsch 1, with the exam fee not included;
  - no start date set yet.
- **Fee:** ₹7,999, paid in full, in one payment, before the first class. There are no instalments (owner decision D10, 2026-10-21).
- **Consultation:**
  - ₹100 for 20 minutes on Google Meet;
  - paid by UPI after the time is confirmed by email; the joining link follows payment;
  - deducted from the course fee if the learner enrols within 7 days;
  - if Klarweg cancels: the learner chooses a full refund or a new time;
  - the learner may reschedule once, free, with at least 12 hours' notice; a no-show is not refunded.
- **The four live-class policies**, quoted in §2 §4A:
  - missed classes: group classes are not recorded, and a missed class is neither refunded nor repeated;
  - cancellation and refunds: a full refund up to 48 hours before the first class, then a refund of the classes still to come during the first two weeks, then no refund; if Klarweg cancels or postpones, everything not delivered is refunded;
  - scheduling: a fixed IST timetable, with 24 hours' notice and a replacement class if one moves;
  - what the fee includes.
- **Payment:**
  - manual UPI or bank transfer, on a payment request sent by email;
  - a person confirms each place by email once the money arrives;
  - live classes do **not** use the Cashfree checkout, and the Live Classes page takes no money.
- **Separate products:**
  - a live course gives no self-paced access, and a self-paced purchase includes no live classes;
  - the self-paced 7-day guarantee **does not apply** to live classes or consultations.
- **Recording and retention:**
  - classes are not recorded;
  - consultation and course-interest emails are kept for 12 months after the last contact, then **deleted by hand** from Gmail. There is no automatic deletion.

### How a request reaches Klarweg (verified in `kw-live.js` and `live-classes.html`)

- The Live Classes page has **no form submission, no `fetch` and no checkout**, and saves nothing in the browser. A static test enforces the first three.
- When the visitor presses "Prepare my request", the page shows a preview and opens the visitor's **own email app** with a pre-filled message to `klarwegofficial@gmail.com`. **Nothing reaches Klarweg unless the visitor sends that email.** A "copy the request" button offers the same text for pasting.
- The message contains:
  - the request type: a ₹100 consultation, or free interest in a course;
  - name and email (required);
  - WhatsApp/phone (optional);
  - current level and main goal (required);
  - preferred teacher and course of interest;
  - preferred times (IST);
  - a free-text message.
- A required consent box says: "I agree that Klarweg may use these details to respond to my request, as described in the Privacy Policy." That policy does not yet describe this request; it is a launch blocker.
- Like every Klarweg page, the page loads Google Fonts and checks the visitor's existing Klarweg sign-in state. Both are already covered by the Privacy Policy.

### Changes needed, by document

| Document · section | Purpose | Proposed wording | Questions for the reviewer |
|---|---|---|---|
| Terms §1 Who we are | Name live classes as part of the service | §2 below | — |
| Terms §2 The service | Live classes and consultations are separate from self-paced access | §2 below | Q1 |
| Terms **new §4A** | Course terms, consultations, payment, missed classes, cancellations and refunds, scheduling, changes, conduct, recordings | §2 below | Q2–Q6, Q10 |
| Terms §5 Refunds | Limit the 7-day guarantee to self-paced purchases | §2 below | Q2 |
| Terms §8, §10 | Price changes and the liability cap ("the course or bundle") as they apply to a live course | not drafted; check only | Q7 |
| Privacy §1 | Name live classes | §3 below | — |
| Privacy §2 table | Add consultation and course-interest requests; widen the phone-number row (it says "only when you begin a purchase") | §3 below | Q8 |
| Privacy **new §4A** | Classes on Google Meet, group visibility, no recording, payments by UPI or bank | §3 below | Q8, Q9, Q11 |
| Privacy §8 | Add Gmail, Google Meet and the bank or UPI app as processors | §3 below | Q8, Q12 |
| Privacy §9 | 12-month manual retention of request emails; payment records after the accounting review | §3 below | Q13 |
| Privacy §11 Minors | No minimum age today; live classes are group video calls | §3 below | Q9 |
| Privacy §13 Contact | It says "no separately designated grievance officer" | not drafted | Q14 |
| Refund Policy | Say the guarantee covers self-paced purchases only and point to Terms §4A | §4 below | Q2 |

### Material questions the reviewer should decide

Nothing in these drafts claims compliance with any law. These are questions, not conclusions.

1. **Separate services.** Is it clear enough that a live course and a self-paced purchase are separate, each with its own refund terms?
2. **Consumer and refund terms.** Are the live-course rules fair and enforceable for consumers in India, and does anything have to be disclosed before payment? The rules are: a full refund up to 48 hours before the start, a refund of the remaining classes during the first two weeks, no refund afterwards, and no refund for a consultation missed without notice. Consider, for example, the Consumer Protection Act 2019 and the Consumer Protection (E-Commerce) Rules 2020, if they apply to this service.
3. **Refunds of the classes still to come.** Not yet decided. The owner and the accountant should settle the business choice; the reviewer should check that the wording is clear.
   - How is "the classes still to come" calculated, for example per class at ₹7,999 ÷ 36? Every learner pays the full fee in one payment (D10).
4. **A missed second instalment.** No longer applies: instalments were withdrawn on 2026-10-21 (D10), and every course is paid in full before the first class.
5. **The consultation deduction.** Is the ₹100 deducted from the course fee, and is it refundable if the learner then cancels the course? Not decided yet.
6. **The minimum batch.** If fewer than 4 learners enrol, is "Klarweg cancels or postpones … we refund everything not yet delivered" enough, or must the 4-learner minimum be stated as a condition before payment?
7. **The liability cap and price changes.** Do Terms §8 ("pricing may change") and §10 (liability limited to "the course or bundle") work for a fixed-fee live course that has already been paid?
8. **Privacy notice and consent.** Personal data arrives by email and is handled in Gmail, and possibly on WhatsApp if the learner gives a number and is contacted there. What must the notice contain, is the consent box adequate, and should WhatsApp be named? Consider, for example, the Digital Personal Data Protection Act 2023 and its Rules, if they apply.
9. **Minors.** Klarweg sets no minimum age (Privacy §11), and group classes show each learner's name, voice and video to the others. Is a minimum age or parent/guardian consent needed for live classes?
10. **Conduct and removal.** Should a learner removed for disruptive behaviour get a refund of the classes not yet held?
11. **Teacher status.** The owner teaches today. If other teachers are engaged later, what agreement is needed, and what must the policies say about sharing learners' data with them?
12. **Third parties and transfers.** Google (Gmail, Meet), the bank and the UPI app process learners' data, possibly outside India. Does any of them need to be named, or need a transfer disclosure?
13. **Retention.** Is a 12-month manual retention period for request emails appropriate, and how should it be worded so it matches what is done by hand? The retention period for payment records waits for the accountant.
14. **Grievance contact and seller details.** Does offering paid live classes make it necessary to designate a grievance officer, or to publish a postal address or other operator details? Privacy §13 currently says there is none.
15. **Governing law and disputes.** Terms §11 says only "the laws of India". Is a jurisdiction or dispute clause advisable?

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
> **Payment.** Live-course and consultation fees are paid by UPI or bank transfer, on a payment request we send by email. A course fee is paid in full, in one payment, before the first class; there are no instalments. A place in a batch is confirmed only once payment is received. (D3, D7, D10) [OWNER + LEGAL: whether the consultation deduction applies and is refundable (Q5).]
>
> **Missed classes.** Group classes are not recorded, and a missed group class is not refunded or repeated individually. Your teacher shares the class notes and homework so you can catch up, and you can bring questions to the next class. One-to-one lessons can be moved free of charge with at least 24 hours' notice. (D5)
>
> **Cancellations and refunds.** If you cancel at least 48 hours before the first class, your course fee is refunded in full. If you cancel during the first two weeks of the course, we refund the classes still to come; after that, course fees are not refunded. If Klarweg cancels or postpones a course and the new dates don't suit you, we refund everything not yet delivered. The 7-day guarantee in section 5 covers self-paced purchases only, not live classes or consultations. (D5) [OWNER + LEGAL: how "the classes still to come" is calculated (Q3).]
>
> **Scheduling.** Group batches run on a fixed timetable in Indian Standard Time, shown on the course before you enrol. If a class has to move, we tell you at least 24 hours in advance and schedule a replacement class. One-to-one lessons are scheduled directly with your teacher. (D5)
>
> **What the fee includes.** The course fee covers every live class in the course, the teacher's class notes and worksheets, and written feedback on your homework. Goethe exam fees are not included. (D5)
>
> **Changes by Klarweg.** If your teacher becomes unavailable, we reschedule the affected classes and tell you in advance. If the new dates don't suit you, the cancellation and refund terms above apply. (Klarweg's only teacher today is its owner, D6, so this clause does not promise a substitute teacher.)
>
> **Conduct in class.** Be respectful to the teacher and other students. Do not record, share or redistribute classes or class materials without permission. We may remove a participant who disrupts a class. [LEGAL: whether to refund the classes not yet held in that case (Q10).]
>
> **Recordings.** Classes are not recorded. (D6)

### §5 Refunds: proposed change

> **Self-paced courses:** Klarweg offers a 7-day refund on single-level and Lifetime purchases: … (current text). **Live classes and consultations** have their own refund terms in section 4A.

The Refund Policy page (`refund-policy.html`) needs a matching sentence that live classes and consultations are covered by section 4A of the Terms. Its self-paced guarantee itself does not change.

### §9 and §10

Not drafted. §9 ("We don't guarantee any particular learning outcome, exam result…") appears to cover live classes as written. Whether §8 ("pricing may change") and §10 (liability limited to "the course or bundle") work for a live course is Q7.

---

## 3. Privacy Policy (`privacy.html`)

Current: §1 says self-paced only. §2 claims to reflect "exactly what the Klarweg systems store today" and says the phone number is collected "only when you begin a purchase". The live-classes consultation form asks for an optional phone number, and its consent box points to this policy.

How the request form works, verified in the code, is described in §0 ("How a request reaches Klarweg").

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

### §4A addition: group classes (Q9)

> In a group class, the other learners in your batch can see your name and, if you turn them on, your camera and microphone. Please don't record or share them.

### §11 Children and minors: decision needed (Q9)

> [LEGAL: a minimum age for live classes, or how a parent or guardian consents for a learner under 18.]

### §8 Third-party services: add

> Google (Gmail and Google Meet): receives consultation and course-interest requests and our replies, and hosts live classes and consultations. Our bank processes UPI and bank-transfer payments for live fees. [LEGAL: whether to name the bank and the UPI app (Q12), and whether to name WhatsApp if learners are contacted there (Q8).]

### §9 How long we keep data: add

> Consultation and course-interest requests and related emails are kept for 12 months after our last contact with you, then deleted from the inbox by hand, unless you ask us to delete them earlier. (D6) [OWNER: payment records, after the accounting follow-up.]

### Notes for the legal reviewer

- The table's opening line says "exactly what the Klarweg systems store today". Once a live-class process exists (attendance, payments for live courses, recordings), each new kind of data needs its own row before launch.
- The policy names no grievance officer (§13). Whether one is needed, for example under India's DPDP Act, is a question for a lawyer, not something decided here.
- The 12-month retention of request emails is a manual practice (deleted by hand in Gmail). Word it as a commitment Klarweg follows, not an automatic process.
- Nothing in these drafts claims compliance with any law. The reviewer decides whether any such statement belongs in the final text.

---

## 4. Refund Policy (`refund-policy.html`)

Today the page offers a 7-day refund on "any paid level or the Lifetime bundle". It also says "If a Klarweg purchase doesn't work for you…", which a learner could read as covering a live course.

### "What's covered": add

> This guarantee covers self-paced purchases only: single levels and the Lifetime bundle. It does not cover live classes or consultations. Their cancellation and refund terms are in section 4A of our <a href="terms.html">Terms of Service</a>.

### "How it works": change the first sentence

> If a self-paced Klarweg purchase doesn't work for you, …

The guarantee itself does not change.

---

## 5. Sending this to a lawyer

### Copy-ready email

> **Subject:** Legal review: Terms, Privacy and Refund Policy updates for live German classes (Klarweg)
>
> Hello [name],
>
> I run Klarweg (klarweg.in), a German-language learning site that I operate as an individual. Today it sells self-paced online courses through a Cashfree checkout, with a 7-day money-back guarantee.
>
> I plan to add teacher-led live classes, taught by me on Google Meet. The first is a 12-week A1 group course: 4–8 learners, 36 classes, ₹7,999, paid in full before the start. I would also offer a ₹100, 20-minute consultation. Both would be booked and paid online on my website through the payment gateway Cashfree, which I already use for my self-paced courses; nothing is paid by email or manual transfer. People can also join a free waitlist, which opens their own email app with a pre-filled message.
>
> Before launching, I would like you to review:
> 1. the proposed changes to my Terms of Service, Privacy Policy and Refund Policy (attached, with the current pages);
> 2. the questions listed in the brief, in particular consumer and refund terms, privacy notice and consent, minors in group video classes, grievance contact requirements, and how to word the separation from the self-paced refund guarantee.
>
> I am not asking for a general compliance audit, only for this change. Could you let me know your fee and timeline?
>
> Thank you,
> Reegan Gandhi
> klarwegofficial@gmail.com

### Documents and facts to send

- [ ] This document, `live-classes-review-drafts.md` (the brief, the drafts and the questions).
- [ ] The current pages as PDF or links: `terms.html`, `privacy.html`, `refund-policy.html`.
- [ ] Screenshots of the Live Classes page from a local preview: the course card, the consultation section with "Good to know", the FAQ and the request form with its consent box. The page itself is not public.
- [ ] The four policy texts and the consultation terms. They are quoted in §2; the source is `live-classes-data.js`.
- [ ] Your answers, or your preference, on Q3 and Q5 (refunds of the classes still to come, the consultation deduction), so the lawyer can word them. Q4 no longer applies (full payment only, D10).
- [ ] Your legal status: an individual, any GST registration, and the address you would be willing to publish, if one is required.
- [ ] Whether you contact learners on WhatsApp, and which bank and UPI app receive payments.
- [ ] Whether minors may join, and from what age.
