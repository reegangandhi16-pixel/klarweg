/* ============================================================
   KLARWEG · LIVE CLASSES DATA (live-classes-data.js)
   ------------------------------------------------------------
   The ONE place to edit teachers, live courses, the consultation
   and live-class policies shown on live-classes.html.

   HONESTY RULES (read before editing):
   - Only publish facts you can verify. Every teacher field must
     come from the teacher's own CV / certificates.
   - Entries with `draft: true` are templates. They render with a
     visible "Draft" label and are hidden entirely when
     `showDrafts` is false. Never flip a draft to real by only
     deleting `draft: true` — replace every [bracketed] value.
   - Leave a field null / [] when it is unknown. The page omits
     unknown fields, or shows "To be announced" where the student
     needs to know the information is still missing.
   - Prices here are DISPLAY ONLY. No payment is taken on this page.

   PUBLISH CHECKLIST: see the comment at the top of
   live-classes.html.
   ============================================================ */
(function (global) {
  'use strict';
  if (global.KWLive) return;

  global.KWLive = {
    /* false = production-safe: draft teachers / courses / testimonials
       are never rendered and the honest empty states show instead.
       To review the draft templates, set true LOCALLY only: kw-live.js
       also ignores it on any host other than localhost / 127.0.0.1 /
       file://, so a forgotten `true` can never reach the live site. */
    showDrafts: false,
    /* true shows the SAMPLE ratings in live-classes-sample-data.js, and
       only on localhost: a design preview, never genuine reviews. The
       sample file is not published (not in the Pages allowlist). */
    previewSampleRatings: false,

    /* The site's documented address, as on contact.html, privacy.html
       and terms.html (the old klarweg-domain inbox is retired). */
    contact: {
      email: 'klarwegofficial@gmail.com',
      replyTime: 'within two working days, Monday to Friday'
    },

    /* ---------- personal consultation ----------
       CONFIRMED by the owner on 2026-10-20 (D4 in
       docs/live-classes-owner-decisions.md): ₹100, 20 minutes on Google
       Meet, deducted from a live course fee if the learner enrols within
       7 days. Booked and paid online only, never by email or manual UPI
       (D11, 2026-10-21); online booking is not open yet. */
    consultation: {
      /* true only once the owner has confirmed fee, adjustment period and
         payment method in writing; the launch check blocks publishing
         while it is false. Confirmed 2026-10-20. */
      termsConfirmed: true,
      feeLabel: '₹100',
      adjustmentDays: 7,
      durationMinutes: 20,
      platform: 'Google Meet',
      /* Shown under "Good to know"; null hides the line. */
      cancellation: 'If we have to cancel, you choose a full refund or a new time. You can move your consultation once, free of charge, with at least 12 hours’ notice; a consultation missed without notice is not refunded.',
      /* How online booking works (kw-consult.js). Until onlineBooking is
         enabled the page shows "Online demo booking is not open yet"
         beside these steps. {fee} is replaced by feeLabel. */
      steps: [
        'You sign in, then choose a teacher and a time on this page.',
        'You pay the {fee} fee online through Cashfree. The booking is confirmed only once the payment is verified.',
        'Your joining link appears on this page once your booking is confirmed.',
        'You meet the teacher, who assesses your level and recommends a course.'
      ],
      /* Same-day online booking with a ₹100 Cashfree payment
         (kw-consult.js + the access Worker's /consult routes). OFF: while
         enabled is false the page loads no booking script and says
         plainly that online booking is not open yet; there is no email
         booking. The free course waitlist works either way.
         Enabling it is an owner decision (docs/live-classes-consultation-
         booking.md): the validator refuses enabled: true until all three
         fields below are recorded. Turning on payments also needs the
         Worker's CONSULT_BOOKING switch, which is separate and off.
         NEVER put a Google Meet link (or any other private joining detail)
         in this file or the page: everything here is public. Links live in
         the Worker secret CONSULT_JOIN_LINKS and are shown only to the
         signed-in learner of a confirmed booking. */
      onlineBooking: {
        enabled: false,
        ownerApproval: 'Owner reviewed the Terms §4A and Privacy wording and merged PR #183 (merge 237f3486), 2026-10-21. Legal copy only: this does not enable the switch.',
        legalTermsUpdated: true,    // Terms §4A, Privacy §4A and this page's copy rewritten for online booking (PR #183)
        joinLinksConfigured: false  // true once the owner has set the CONSULT_JOIN_LINKS Worker secret for every bookable teacher
      }
    },

    /* ---------- online course enrolment ----------
       Pay a live course's fee on this page (kw-enrol.js + the access
       Worker's /enrol routes): the full course fee in one payment. There
       are no instalments (owner decision, 2026-10-21).
       OFF: while enabled is false the page loads no enrolment script and
       the course cards keep their waitlist / consultation buttons. The
       Worker computes every amount from its own copy of the published fee
       (LIVE_COURSES in access/worker/src/enrolments.js; a test keeps the
       two identical) and confirms a place only after verifying the
       payment with Cashfree. A teacher's displayed price (coursePricing)
       sells nothing by itself: only a course configured in the Worker and
       open with a batch date can be paid for. Enabling it is an owner decision
       (docs/live-classes-online-payments.md): the validator refuses
       enabled: true until both fields below are recorded and at least one
       published course has enrolment "open" with payment terms that no
       longer describe an emailed payment request. The Worker's
       ENROL_PAYMENTS switch is separate and off. */
    liveEnrolment: {
      enabled: false,
      ownerApproval: 'Owner reviewed the Terms §4A and Privacy wording and merged PR #183 (merge 237f3486), 2026-10-21. Legal copy only: this does not enable the switch.',
      legalTermsUpdated: true     // Terms, Privacy and the course payment terms rewritten for online payment (PR #183)
    },

    /* ---------- live-class policies ----------
       Approved by the owner on 2026-10-20 (D5). Shown in the page FAQ;
       each text is also the FAQ's no-JavaScript fallback in
       live-classes.html, and a static test keeps the two identical.
       They cover live classes only; the self-paced Refund Policy is
       separate and unchanged. */
    policies: {
      missedClass: 'Group classes are not recorded, and a missed group class is not refunded or repeated individually. Your teacher shares the class notes and homework so you can catch up, and you can bring questions to the next class. One-to-one lessons can be moved free of charge with at least 24 hours’ notice.',
      cancellationRefund: 'If you cancel at least 48 hours before the first class, your course fee is refunded in full. If you cancel during the first two weeks of the course, we refund the classes still to come; after that, course fees are not refunded. If Klarweg cancels or postpones a course and the new dates don’t suit you, we refund everything not yet delivered. The 7-day guarantee in our Refund Policy covers self-paced purchases only, not live classes.',
      scheduling: 'Group batches run on a fixed timetable in Indian Standard Time, shown on the course before you enrol. If a class has to move, we tell you at least 24 hours in advance and schedule a replacement class. One-to-one lessons are scheduled directly with your teacher.',
      feeIncludes: 'The course fee covers every live class in the course, the teacher’s class notes and worksheets, and written feedback on your homework. Goethe exam fees are not included.'
    },

    /* ---------- teachers ----------
       Fill a profile from docs/live-classes-teacher-intake.md only.
       `unconfirmed` (optional) lists the fields still awaiting the
       owner's confirmation: suggested wording, preliminary information,
       or a template value that only looks real. A teacher cannot be
       published while it lists anything.
       `consent` records how and when the teacher approved publishing
       this profile; `photoConsent` the same for the photo. Both are
       required for a published teacher (photoConsent only with a photo)
       and are never shown on the page.
       Checked by scripts/live-classes-readiness.mjs. */
    /* ---------- A1 course fee per teacher (decision sheet D9) ----------
       The one place these prices are set; each teacher's row and
       profile read them from here. Only the current fee is shown: no
       discount or crossed-out "original" price (D9). Checked by
       scripts/live-classes-readiness.mjs. */
    coursePricing: {
      label: 'A1 course',
      teachers: {
        'reegan-gandhi': '₹7,999',
        'geetika-dhawan': '₹7,999',
        'priyanshi-verma': '₹15,000',
        'sunidhi-jain': '₹14,000',
        'mansi-kapoor': '₹13,000',
        'gaurav-singhal': '₹12,000',
        'kanika-taneja': '₹14,000',
        'trisha-khanna': '₹13,000',
        'rashi-gupta': '₹12,000',
        'deepika-agarwal': '₹13,000',
        'sahil-arora': '₹15,000'
      }
    },

    teachers: [
      {
        /* The owner's own profile, PUBLISHED. Confirmed by the owner
           (2026-10-20): name, headline, German proficiency C1 (the level
           of German), levels taught, teaching languages, exam-prep
           description, approach and formats. Confirmed later: 5 years of
           teaching German and the Goethe-Zertifikat C1 certificate (listed
           in `goethe`, and in `qualifications` as the only confirmed
           qualification; the profile shows it once). No degree or
           separate teaching qualification is claimed. The owner approved
           the three specialisms as written on 2026-10-20. Every field is
           now confirmed, and the owner approved the profile for
           publication on 2026-10-20 (D8, waitlist launch).
           This repository is public: add education or certificate
           details only once confirmed and approved for publication. */
        id: 'reegan-gandhi',
        name: 'Reegan Gandhi',
        photo: null,
        photoAlt: '',
        headline: 'German grammar and Goethe exam preparation, explained in Hindi and English',
        experience: '5 years of teaching German',
        proficiency: 'C1',
        qualifications: ['Goethe-Zertifikat C1'],
        goethe: ['Goethe-Zertifikat C1'],
        levels: ['A1', 'A2', 'B1', 'B2'],
        teachesIn: ['Hindi', 'English'],
        specialisms: ['German grammar', 'Structured learning for Hindi-speaking learners', 'Goethe exam preparation'],
        examPrep: 'Goethe exam preparation at A1–B1',
        approach: 'Every topic starts with a clear explanation of the grammar, in Hindi or English, followed by practical examples. You then practise with the structure yourself and get corrected as you go, one step at a time.',
        formats: ['Group batch', 'One-to-one'],
        availability: null,
        consent: 'Own profile: approved for publication by the owner on 2026-10-20 (decision sheet D2, D8)',
        photoConsent: null,
        unconfirmed: []
      },
      /* ---------- listed teachers (tier: 'listed') ----------
         Named by the owner (2026-10-20) and listed on the owner's
         instruction (2026-10-21): name and the title "German Language
         Teacher" only. No experience, qualifications, certificates,
         ratings or photo: none is confirmed yet, and none may be added
         here. Geetika Dhawan's levels A1–B1 are the owner's statement
         (2026-10-21); no other levels are known. A listed teacher has
         no profile dialog, is not offered in the consultation form and
         is never bookable: booking needs a full profile through
         docs/live-classes-teacher-intake.md. Validator: LISTED_KEYS in
         scripts/live-classes-readiness.mjs. */
      {
        id: 'geetika-dhawan',
        tier: 'listed',
        name: 'Geetika Dhawan',
        title: 'German Language Teacher',
        levels: ['A1', 'A2', 'B1'],
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'priyanshi-verma',
        tier: 'listed',
        name: 'Priyanshi Verma',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'sunidhi-jain',
        tier: 'listed',
        name: 'Sunidhi Jain',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'mansi-kapoor',
        tier: 'listed',
        name: 'Mansi Kapoor',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'gaurav-singhal',
        tier: 'listed',
        name: 'Gaurav Singhal',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'kanika-taneja',
        tier: 'listed',
        name: 'Kanika Taneja',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'trisha-khanna',
        tier: 'listed',
        name: 'Trisha Khanna',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'rashi-gupta',
        tier: 'listed',
        name: 'Rashi Gupta',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'deepika-agarwal',
        tier: 'listed',
        name: 'Deepika Agarwal',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'sahil-arora',
        tier: 'listed',
        name: 'Sahil Arora',
        title: 'German Language Teacher',
        photo: null,
        consent: 'Owner confirmed on 2026-10-21 that the teacher agreed to be listed by name and title'
      },
      {
        id: 'teacher-1',
        draft: true,
        name: '[Teacher 1 · full name]',
        photo: null,               // e.g. 'public/teachers/<id>.jpg': approved photo, 4:3 landscape, at least 800×600; cards crop around the upper third
        photoAlt: '',
        headline: '[One-line teaching focus, from the teacher]',
        experience: '[Verified years] of teaching German',
        proficiency: '[Verified German level, e.g. C2 / native speaker]',
        qualifications: ['[Degree or teaching qualification, as on certificate]'],
        goethe: ['[Goethe certificate actually held — or remove this line]'],
        levels: ['A1', 'A2', 'B1'],
        teachesIn: ['Hindi', 'English'],
        specialisms: ['[Specialism]', '[Specialism]'],
        examPrep: '[Exam preparation experience, in the teacher\'s words]',
        approach: '[Two or three sentences on how this teacher runs a class.]',
        formats: ['Group batch', 'One-to-one'],
        availability: null,         // e.g. 'Weekday evenings (IST)' — only if confirmed
        consent: null,             // how and when the teacher approved publication (required to publish)
        photoConsent: null,        // the same for the photo (required with a photo)
        unconfirmed: ['levels', 'teachesIn', 'formats']   // template values to replace with the teacher's own; empty this list only once each is confirmed
      },
      {
        id: 'teacher-2',
        draft: true,
        name: '[Teacher 2 · full name]',
        photo: null,
        photoAlt: '',
        headline: '[One-line teaching focus, from the teacher]',
        experience: '[Verified years] of teaching German',
        proficiency: '[Verified German level]',
        qualifications: ['[Teaching qualification]'],
        goethe: [],
        levels: ['B1', 'B2'],
        teachesIn: ['English', 'German'],
        specialisms: ['[Specialism]'],
        examPrep: null,
        approach: '[Two or three sentences on how this teacher runs a class.]',
        formats: ['Group batch'],
        availability: null,
        consent: null,             // how and when the teacher approved publication (required to publish)
        photoConsent: null,        // the same for the photo (required with a photo)
        unconfirmed: ['levels', 'teachesIn', 'formats', 'goethe', 'examPrep']   // template values to replace with the teacher's own; empty this list only once each is confirmed
      },
      {
        id: 'teacher-3',
        draft: true,
        name: '[Teacher 3 · full name]',
        photo: null,
        photoAlt: '',
        headline: '[One-line teaching focus, from the teacher]',
        experience: '[Verified years] of teaching German',
        proficiency: '[Verified German level]',
        qualifications: ['[Teaching qualification]'],
        goethe: ['[Goethe certificate actually held]'],
        levels: ['B2', 'C1', 'C2'],
        teachesIn: ['German', 'English'],
        specialisms: ['[Specialism]', '[Specialism]'],
        examPrep: '[Exam preparation experience]',
        approach: '[Two or three sentences on how this teacher runs a class.]',
        formats: ['One-to-one'],
        availability: null,
        consent: null,             // how and when the teacher approved publication (required to publish)
        photoConsent: null,        // the same for the photo (required with a photo)
        unconfirmed: ['levels', 'teachesIn', 'formats']   // template values to replace with the teacher's own; empty this list only once each is confirmed
      }
    ],

    /* ---------- live courses ----------
       group: 'beginner' | 'intermediate' | 'advanced' | 'exam' | 'speaking'
       format: 'Group batch' | 'One-to-one'
       enrolment: 'open' | 'waitlist' | 'not-open'
       Any null field shows as "To be announced" on the card.
       live-a1 is the first course, APPROVED by the owner on 2026-10-20
       (D3), and published as a WAITLIST on 2026-10-20 (D8). No start
       date is set, so enrolment stays "waitlist", never "open"; the
       other courses below stay drafts. */
    courses: [
      {
        id: 'live-a1', group: 'beginner', levels: ['A1'],
        title: 'Beginner German · A1',
        objectives: ['Introduce yourself and talk about daily routines', 'Build present-tense sentences with correct word order', 'Handle simple everyday situations in speech and writing'],
        teacherIds: ['reegan-gandhi'],
        format: 'Group batch', batchSize: 'Up to 8 learners; runs with at least 4',
        frequency: '3 classes a week · Mon, Wed, Fri, 7:30–9:00 pm IST', sessionLength: '90 minutes', totalDuration: '12 weeks · 36 classes · 54 hours',
        nextBatch: null,   // no start date set yet: never invent one
        materials: 'Class notes and PDF worksheets; homework with written feedback',
        examPrep: 'Prepares for Goethe-Zertifikat A1: Start Deutsch 1 (exam fee not included)',
        priceLabel: '₹7,999',
        paymentTerms: '₹7,999 in full, in one payment, before the first class. Paid online on this page once enrolment opens.',
        enrolment: 'waitlist'
      },
      {
        id: 'live-a2', draft: true, group: 'beginner', levels: ['A2'],
        title: 'Beginner German · A2',
        objectives: ['Talk about past events with Perfekt', 'Use Dativ and two-way prepositions with confidence', 'Follow and join short conversations about work and family'],
        teacherIds: ['teacher-1'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      },
      {
        id: 'live-b1', draft: true, group: 'intermediate', levels: ['B1'],
        title: 'Intermediate German · B1',
        objectives: ['Give opinions and reasons with subordinate clauses', 'Write structured letters and emails', 'Manage travel, work and study conversations'],
        teacherIds: ['teacher-2'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      },
      {
        id: 'live-b2', draft: true, group: 'intermediate', levels: ['B2'],
        title: 'Intermediate German · B2',
        objectives: ['Argue a point and discuss abstract topics', 'Use passive, Konjunktiv II and complex clause structure', 'Read and summarise longer texts'],
        teacherIds: ['teacher-2', 'teacher-3'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      },
      {
        id: 'live-c1', draft: true, group: 'advanced', levels: ['C1', 'C2'],
        title: 'Advanced German · C1–C2',
        objectives: ['Express yourself fluently for academic and professional life', 'Refine register, nuance and style', 'Work with authentic long-form texts and debate'],
        teacherIds: ['teacher-3'],
        format: 'One-to-one', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      },
      {
        id: 'live-goethe', draft: true, group: 'exam', levels: ['A1', 'A2', 'B1', 'B2'],
        title: 'Goethe exam preparation',
        objectives: ['Work through each module: Lesen, Hören, Schreiben, Sprechen', 'Practise under timed conditions', 'Get individual feedback on writing and speaking tasks'],
        teacherIds: ['teacher-1', 'teacher-3'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: '[Mock exams / module practice actually included]',
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      },
      {
        id: 'live-speaking', draft: true, group: 'speaking', levels: ['A2', 'B1', 'B2'],
        title: 'Speaking practice',
        objectives: ['Speak more, in guided conversation', 'Get corrected on grammar and pronunciation as you speak', 'Prepare for real situations: interviews, appointments, small talk'],
        teacherIds: ['teacher-2'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
      }
    ],

    /* ---------- testimonials ----------
       Only real students, quoted with their written permission.
       { quote, name, detail (e.g. 'Passed Goethe B1, 2026'),
         permission (how and when consent was given, e.g.
         'Email, 2026-11-02'; kept here, not shown), draft } */
    testimonials: [],

    /* ---------- reviews ----------
       Only genuine ratings from real learners of a PUBLISHED teacher,
       each one traceable to a real consultation or class. The page shows
       "No reviews yet" until one exists, and otherwise the average and
       count computed from these entries only: never a typed-in rating,
       count or badge.
       { teacherId, rating (whole number 1–5), date ('YYYY-MM-DD'),
         evidence (the booking reference or batch that proves the learner
         was taught; kept here, not shown),
         permission (how and when the learner agreed to publication;
         not shown), quote (optional), draft } */
    reviews: []
  };
})(window);
