# Owner decisions of 2026-11-06: full B1 launch with the Mock M0, run by the owner

Recorded at the owner's instruction ("i do want to hire anyone, im c1 certifid trainer … i just check and merge the
pulls"). They change how some gates in `B1-FINAL-DECISION-REGISTER.md` are closed for the first B1 release. They do not
change the engine's safeguards, and every learner-facing text says what was actually done.

| ID | Decision | Replaces / affects | How it shows to learners |
|---|---|---|---|
| OWN-2026-11-06-1 | The owner (C1-certified German trainer) is the **sole content reviewer** of the Mock M0. Reviewed and approved rev @10 on 2026-11-06, keeping the 20 flagged names | EX-03 three-person panel; Q14 originality (not implemented) | Results say "kein offizielles Ergebnis"; no claim of an independent review or calibration (OD-51) |
| OWN-2026-11-06-2 | The owner is the **only examiner**. Each Schreiben/Sprechen unit is rated twice by the owner, blind to the first round. Enabled by the Worker variable `EXAM_SINGLE_EXAMINER=on` | OD-13 (two independent raters), EX-02 | Every affected result and feedback says: "Zweimal unabhängig bewertet von derselben zertifizierten Prüfperson (nicht von zwei verschiedenen Prüfenden)." |
| OWN-2026-11-06-3 | Hören and Sprechen audio from **Google Cloud Text-to-Speech** (de-DE voices). Google has no de-AT/de-CH voices | OD-14 route (premium neural voices: Azure was recommended), AUDIO B3 regional-voice gate (≥ 2 AT + ≥ 2 CH), the 10-rater MOS test (the owner listens instead), EX-06 | The start screen says the listening texts use synthetic voices |
| OWN-2026-11-06-4 | **No external security, accessibility, privacy or trademark review** before launch; an internal security review is done instead | EX-01, EX-04, EX-05, EX-07 | — (owner-accepted risk) |

Unchanged: server-side keys and scoring, timing, autosave, staff 2FA, consent before any recording, the result disclaimer,
and the rule that nothing is deployed or switched on without the owner.
