# Live Classes — proposed wording for owner review

**Status: PROPOSED. Not approved, not published.** Nothing in this document is live. The legal wording below is a starting point for the owner (and, if wanted, a lawyer). It is not legal advice and has not been reviewed by anyone. Variant A of the homepage FAQ (§1) has been applied to `index.html` for review; it is published only once merged and deployed. `terms.html` and `privacy.html` are unchanged.

Context: the owner decided on 2026-10-20 that Klarweg intends to offer teacher-led live German classes (decision D1 in `live-classes-launch-readiness.md`). That decision confirms the direction only. No teacher, course, batch, schedule, fee, policy or enrolment date is approved yet. Every wording below is written so that it stays true until those are approved.

`[OWNER: …]` marks text that cannot be written without a business decision. Do not publish a section while it still contains one.

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

> Yes. Alongside the self-paced courses, Klarweg offers teacher-led live German classes. [OWNER: one line on formats, e.g. "small group batches and one-to-one lessons", only what is actually offered.] See the teachers, current courses and how to book a consultation on the <a href="live-classes.html">Live Classes</a> page.

The structured-data copy should keep the sentence but drop the link markup.

---

## 2. Terms of Service (`terms.html`)

Current: §1 and §2 describe self-paced courses only. §5 offers a 7-day full refund on purchases, which as written would also apply to a live course.

### §1 Who we are: proposed change

> Klarweg is a German-language education brand offering self-paced online courses (levels A1 through C2, aligned to the Goethe-Zertifikat exam levels) and teacher-led live classes. …

The rest of §1 is unchanged.

### §2 The service: add a paragraph

> Klarweg also offers teacher-led live German classes and paid personal consultations, described in section 4A. Live classes are a separate service from the self-paced courses: buying a self-paced level does not include live classes, and a live course does not include self-paced access unless its course terms say so. [OWNER: confirm both halves of the last sentence.]

### New §4A Live classes and consultations

> **Course terms in writing.** Before you pay for a live course, we confirm its terms to you in writing: the teacher, level, format (group batch or one-to-one), number and length of sessions, schedule (in Indian Standard Time), start date, platform, materials and fee. Those course terms form part of these Terms.
>
> **Consultations.** A personal consultation costs [OWNER: fee] and lasts [OWNER: minutes] on [OWNER: platform]. We confirm a time slot by email and tell you how to pay. If you enrol in a live course within [OWNER: days] days of your consultation, the consultation fee is [OWNER: adjusted against / deducted from] the course fee.
>
> **Payment.** Live-course and consultation fees are paid by [OWNER: method, see D7]. A place in a batch is confirmed only once payment is received.
>
> **Missed classes.** [OWNER: policy text, D5.]
>
> **Cancellations and refunds.** [OWNER: policy text, D5. It must cover: the student cancels before the start, after the start, and mid-course; Klarweg cancels or reschedules; and consultation refunds.]
>
> **Changes by Klarweg.** If a teacher becomes unavailable, we may assign another qualified teacher or reschedule, and we will tell you in advance. [OWNER: confirm, and say what the student may do if they do not accept the change.]
>
> **Conduct in class.** Be respectful to the teacher and other students. Do not record, share or redistribute classes or class materials without permission. We may remove a participant who disrupts a class [OWNER: with or without a refund].
>
> **Recordings.** [OWNER: either "Classes are not recorded." or say who records them, who receives the recording and for how long it is kept. This also has to appear in the Privacy Policy.]

### §5 Refunds: proposed change

> **Self-paced courses:** Klarweg offers a 7-day refund on single-level and Lifetime purchases: … (current text). **Live classes and consultations** have their own refund terms in section 4A.

The Refund Policy page (`refund-policy.html`) would need a matching sentence that live classes and consultations are covered by section 4A. Its wording is the owner's to approve.

### §9 and §10

No change is needed. "We don't guarantee any particular learning outcome, exam result…" already covers live classes. §10 limits liability to "the course or bundle", which a live course falls under.

---

## 3. Privacy Policy (`privacy.html`)

Current: §1 says self-paced only. §2 claims to reflect "exactly what the Klarweg systems store today" and says the phone number is collected "only when you begin a purchase". The live-classes consultation form asks for an optional phone number, and its consent box points to this policy.

Verified facts about the form (from `kw-live.js` and the static test "the consultation form only hands off to email"):
- The page has no form action, no `fetch` and no checkout.
- On submit it opens the visitor's own email app with a pre-filled message to `klarwegofficial@gmail.com`.
- Nothing is sent or stored unless the visitor sends that email.
- The message contains: name, email, WhatsApp/phone (optional), current level, main goal, preferred teacher, course of interest, preferred times (IST) and a free-text message.

### §1 Who we are: proposed change

The same change as Terms §1: "… self-paced online courses … and teacher-led live classes."

### §2: add a row to the table

| Data | Why we collect it |
|---|---|
| Consultation and live-class requests | If you send a consultation request from the Live Classes page, your own email app sends us the details you entered: name, email, optional WhatsApp/phone number, current level, goal, preferred teacher and course, preferred times and your message. We use them only to arrange your consultation and recommend a course. The request is not stored on Klarweg's servers; it arrives as an email in our inbox, which is hosted by Google (Gmail). |

### §2 "Phone number" row: proposed change

> Required by our payment processor, Cashfree, to create an order, collected when you begin a purchase. You may also choose to include a WhatsApp or phone number in a consultation request so we can reach you about it.

### New §4A Live classes

> To run a live class we share your name [OWNER: and email?] with your teacher. Classes take place on [OWNER: platform], which processes your name, voice and video as part of the call under its own privacy policy. [OWNER: recordings: none, or what is recorded, who can see it, how long it is kept.] [OWNER: if teachers are not Klarweg itself, say so: e.g. "Teachers are independent tutors who use your details only to teach your class."] [OWNER: attendance or progress notes, if any are kept, and where.]

### §8 Third-party services: add

> Google (Gmail): receives consultation requests and our email replies. [OWNER: the video platform used for classes and consultations.] [OWNER: the payment method for live fees, if it is not Cashfree, D7.]

### §9 How long we keep data: add

> Consultation requests and related emails are kept for [OWNER: period, e.g. "12 months after the last contact"], unless you ask us to delete them earlier.

### Notes for the owner

- The table's opening line says "exactly what the Klarweg systems store today". Once a live-class process exists (attendance, payments for live courses, recordings), each new kind of data needs its own row before launch.
- The policy names no grievance officer (§13). Whether one is needed, for example under India's DPDP Act, is a question for a lawyer, not something decided here.
