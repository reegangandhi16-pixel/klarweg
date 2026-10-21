# Teacher profile: details and consent request (template)

For the owner to send **personally** to a teacher (email or WhatsApp). Nothing here is sent automatically. Review the wording before first use; it is not legal advice.

Record the reply in that teacher's **private** intake sheet (a copy of [`live-classes-teacher-intake.csv`](live-classes-teacher-intake.csv) kept outside every Git folder), then run:

    node scripts/live-classes-intake.mjs <path to the private sheet>

The script says exactly what is still missing, or prints the profile entry once everything is verified and consented.

---

**Subject:** Your teacher profile on the Klarweg Live Classes page

> Hello {first name},
>
> Thank you for agreeing to teach with Klarweg. Before we show your profile on our Live Classes page, we need a few details from you and your written permission. Nothing is published until you have approved it.
>
> **Please send:**
> 1. Your name exactly as it should appear.
> 2. One line on your teaching focus, in your own words.
> 3. How many years you have taught German.
> 4. Your level of German (A1–C2, or native speaker).
> 5. Degrees or teaching qualifications, exactly as on the certificate, and any Goethe certificates you hold. Please show us the certificates (a scan or a video call is fine). We keep copies private and never publish them.
> 6. The CEFR levels you would like to teach, and the languages you explain in (e.g. Hindi, English).
> 7. Optional: up to three specialisms; any Goethe exam-preparation experience; two or three sentences on how you run a class.
> 8. Optional: a photo (landscape, at least 800×600). If you send one, please confirm separately that we may show it.
>
> **Your permission.** Please reply with: *"I agree that Klarweg may publish the profile details I have approved on its Live Classes page."* If you send a photo, also: *"I agree that Klarweg may show my photo with my profile."* You can ask us to change or remove your profile at any time.
>
> **What stays private:** your certificates, CV, ID, contact details and this conversation. They are never published.
>
> Best regards,
> {owner name}
> Klarweg

---

**Before publishing** (also in [the intake guide](../live-classes-teacher-intake.md)): the teaching agreement and the learner-data arrangement are recorded in the private sheet. Privacy §4A and Terms §4A (which say live classes are taught by the owner) are updated with owner-approved wording in the same PR.

Ratings, reviews and availability are not part of this request. A profile shows "No reviews yet" until genuine, permission-backed reviews exist. Availability is shown only from confirmed dates.
