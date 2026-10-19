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
    /* true while the page is an unlisted preview. Set to false
       before publishing: draft teachers / courses / testimonials
       disappear and the honest empty states show instead. */
    showDrafts: true,

    contact: {
      email: 'hallo@klarweg.app',
      replyTime: 'within two working days, Monday to Friday'
    },

    /* ---------- ₹100 personal consultation (owner decision) ---------- */
    consultation: {
      feeLabel: '₹100',
      adjustmentDays: 7,
      durationMinutes: null,   // e.g. 20 — shown only when set
      platform: null,          // e.g. 'Google Meet' — shown only when set
      /* How a request becomes a booking. There is no scheduling or
         payment integration for consultations yet, so every request is
         confirmed by a person over email. */
      steps: [
        'You send a request with your level, goal and preferred times.',
        'We reply by email with a confirmed time slot and how to pay the ₹100 fee.',
        'Once your payment is confirmed, we email you the joining link.',
        'You meet the teacher, who assesses your level and recommends a course.'
      ]
    },

    /* ---------- live-class policies ----------
       null = not yet published. The FAQ then says so plainly instead
       of inventing a policy. Write the final text as a full sentence. */
    policies: {
      missedClass: null,
      cancellationRefund: null,
      scheduling: null,
      feeIncludes: null
    },

    /* ---------- teachers ---------- */
    teachers: [
      {
        id: 'teacher-1',
        draft: true,
        name: '[Teacher 1 · full name]',
        photo: null,               // e.g. 'public/teachers/anna-k.jpg' (approved portrait, 4:5)
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
        availability: null         // e.g. 'Weekday evenings (IST)' — only if confirmed
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
        availability: null
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
        availability: null
      }
    ],

    /* ---------- live courses ----------
       group: 'beginner' | 'intermediate' | 'advanced' | 'exam' | 'speaking'
       format: 'Group batch' | 'One-to-one'
       enrolment: 'open' | 'waitlist' | 'not-open'
       Any null field shows as "To be announced" on the card. */
    courses: [
      {
        id: 'live-a1', draft: true, group: 'beginner', levels: ['A1'],
        title: 'Beginner German · A1',
        objectives: ['Introduce yourself and talk about daily routines', 'Build present-tense sentences with correct word order', 'Handle simple everyday situations in speech and writing'],
        teacherIds: ['teacher-1'],
        format: 'Group batch', batchSize: null,
        frequency: null, sessionLength: null, totalDuration: null,
        nextBatch: null, materials: null, examPrep: null,
        priceLabel: null, paymentTerms: null,
        enrolment: 'not-open'
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
       { quote, name, detail (e.g. 'Passed Goethe B1, 2026'), draft } */
    testimonials: []
  };
})(window);
