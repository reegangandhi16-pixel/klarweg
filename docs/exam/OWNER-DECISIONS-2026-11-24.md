# Owner decisions — 2026-11-24 (Issue #384)

Recorded from the owner's message of 2026-11-24. Each entry states what was decided and what engineering did. Nothing
here is a legal, academic or originality approval.

| Id | Decision (owner) | Implemented |
|---|---|---|
| OWN-2026-11-24-1 (O-8) | Remove "zertifizierte Prüfperson" and any unverified examiner-certification claim. Use transparent wording ("Bewertung durch eine Lehrkraft von Klarweg") and disclose that this is a Klarweg practice assessment, not an official Goethe examination or certificate. **Supersedes the wording of OWN-2026-11-06-2** (the single-examiner process itself is unchanged). | `SAME_EXAMINER_NOTE` (core.js + render.js), Modelltest intro; guard test fails on any certification claim in client or Worker |
| OWN-2026-11-24-2 (O-5) | Accurate Goethe-format references plus an explicit non-affiliation disclaimer; legal/trademark clearance (OD-08) stays **pending**. | `RESULT_DISCLAIMER` and the Worker result disclaimer keep the locked OD-45 sentence and add: practice assessment, no Goethe exam/certificate, not affiliated; permanent footer on every exam screen |
| OWN-2026-11-24-3 (O-6) | Prepare a secure HTTPS staging preview with dummy content only, isolated from production; confirm no production impact, cost or private-content exposure before redeploying. | `docs/exam/STAGING-PREVIEW-DEVICE-TEST.md` |
| OWN-2026-11-24-4 (O-3) | Prepare the three missing M0 Hören instructions with the existing audio system; show exact clips and cost before any paid TTS call. | private repo `authoring/b1/mock-m0/instructions-o3/` (no TTS call made) |
| OWN-2026-11-24-5 (O-2) | The 11 loudness candidates stay pending the owner's listening approval; never auto-approved. | candidates stay outside `forms/` |
| OWN-2026-11-24-6 (O-4) | Explain the exact unresolved OD-14 issue and its impact on live M0 before a decision is requested. | tracker §6 O-4 |
| OWN-2026-11-24-7 (O-10) | Prepare the live-M0 fixes with full regression and security tests; no merge/deploy without explicit approval. | separate draft PR, tests listed there |
