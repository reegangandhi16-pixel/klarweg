# OD-14 — Listening audio: decision brief and pilot specification

> **Status:** decision support, revised 2026-10-14. Nothing here chooses, buys or licenses a vendor or voice, and no
> production audio exists. OD-14 (register v1.5) stays **CONDITIONAL**. Until the owner decides, every Hören and Sprechen
> stimulus remains a labelled TEST AUDIO tone; browser speech synthesis is never used (AUDIO-SPEC isolation, OS §23.5).

## 1. The gates OD-14 sets (AUDIO-SPEC B3/B5)
≥ 16 distinct standard-German voices, ≥ 8 female + ≥ 8 male, ages ≈ 20–70, **≥ 2 Austrian + ≥ 2 Swiss**; 9–12 voices per
form; human review **MOS ≥ 4.0 / 5 by 10 native raters** [PROVISIONAL]; written licence for exam use with **AI-training
exclusion** and a **perpetual** licence for the produced files (EX-06); masters WAV 48 kHz / 24-bit mono; delivery Opus
64 kbps + AAC-LC 96 kbps at −18 LUFS ± 1.

## 2. Voice gate — checked against vendor catalogues on 2026-10-14

| | Azure AI Speech [1] | Google Cloud TTS [2] | Amazon Polly [3] |
|---|---|---|---|
| Adult de-DE voices (distinct personas) | 9 F + 8 M (Seraphina, Katja, Amala, Elke, Klarissa, Louisa, Maja, Tanja, Mia; Florian, Conrad, Bernd, Christoph, Kasper, Killian, Klaus, Ralf); Gisela is a child voice | 16 F + 15 M (20 of them Chirp 3 HD) | 2 F + 3 M |
| de-AT / de-CH | Ingrid, Jonas / Leni, Jan | none | Hannah / Sabrina |
| ≥ 16 voices, ≥ 8 F, ≥ 8 M | **yes** (11 F, 10 M incl. AT/CH) | yes | no |
| ≥ 2 AT + ≥ 2 CH | **yes, exactly** | **no** | no |
| Ages 20–70 | **not verifiable from catalogues**: listening test required | same | same |

Only Azure passes the catalogue part of the gate on its own. Google could cover the German cast but needs another source for
the Austrian and Swiss voices. ElevenLabs' library was not verified voice by voice and is not recommended (community voices,
training on content unless opted out [7]).

## 3. Licence terms — verified text vs. what still needs written confirmation

| | Verified in the vendor's own terms | Not established (needs written confirmation under EX-06) |
|---|---|---|
| **Azure** | "Output Content is Customer Data. Microsoft does not own Customer's Output Content." [4] Real-time synthesis: input text and output audio are not stored [5]. Code of Conduct: customers must **disclose the synthetic nature of generated voices** [6]. | That synthesized speech falls under the "Output Content" definition (the glossary text was not retrievable); that the generative-AI no-training clause covers TTS; perpetual right to keep distributing files after the subscription ends. |
| **Google** | §18: "Google will not use Customer Data to train or fine-tune any AI/ML models without Customer's prior permission"; Text-to-Speech is listed among AI/ML Services [8][9]. | Output ownership: §20 ("does not assert any ownership rights … in the Generated Output") covers *Generative AI Services*, and TTS is not listed there. |
| **Polly** | "As between you and AWS, your Polly output belongs to you"; storing and replaying output has no restriction and no extra cost [10]. | Inputs may be used to improve AWS AI unless an **AWS Organizations opt-out** is applied [10]; no Austrian/Swiss second voice (fails the voice gate anyway). |

**Paid course redistribution:** no reviewed term forbids distributing generated audio inside a paid product, and Polly's
says so most directly. None of them is, by itself, the EX-06 licence (exam use, AI-training exclusion, perpetual rights).
That requires a written confirmation or enterprise agreement from the chosen vendor.

## 4. Cost at the actual volume
`node exam-content/tools/audio-plan.mjs` counts **78,385 spoken characters** for P1–P15. That includes both Sprechen
partner presentations per form (one per Teil 2 topic, OD-32) and both examiner questions; stage directions are excluded. Assuming
five takes per line (about 392,000 characters), list prices give:

| | Price / 1 M characters | One pass | Five takes |
|---|---|---|---|
| Azure Neural [11] | $15 | ≈ $1.18 | ≈ $5.88 |
| Azure Neural HD [11] | $22 | ≈ $1.72 | ≈ $8.62 |
| Google Chirp 3 HD [12] | $30 | ≈ $2.35 | ≈ $11.76 |
| Polly Neural / Generative [13] | $16 / $30 | ≈ $1.25 / $2.35 | ≈ $6.27 / $11.76 |

Synthesis cost is negligible. The real costs are the 10 native raters, audio post-production and the licence negotiation.

## 5. Recommendation
1. **Azure AI Speech** as the vendor candidate: it is the only catalogue that meets the voice gate, it does not store
   real-time synthesis, and its disclosure duty fits Klarweg's "synthetic practice" labelling.
2. **Before any purchase:** obtain Microsoft's written confirmation of the three open points in §3 (EX-06).
3. **Pilot one form (P3)** exactly as specified in §6; accept or reject the vendor on the measured MOS.

## 6. Smallest executable pilot (once OD-14a–c are decided)
- **Scope:** P3 Hören (texts 1–5 and the example, Teil 2–4, Teil 2 instruction) plus Sprechen partner turns, talk and examiner
  questions (both topic variants). About 5,500 spoken characters across 16 voice slots (`audio-plan.mjs p3`).
- **Cast:** the owner-approved voice list. Teil 3 man + woman; Teil 4 three contrasting voices (Moderatorin, Herr Lang,
  Frau Demir); ≥ 1 Austrian or Swiss voice in Teil 1.
- **Production:** synthesize each line per `audio-plan.mjs --json`, keep 48 kHz / 24-bit WAV masters, normalize to
  −18 LUFS ± 1, encode Opus 64 kbps + AAC 96 kbps. Files go to the **private** content repository; this public repository
  allows no media (boundary rule 5). Then record `audio.file` + `duration_ms` and validate with `validate.mjs`, which
  measures the real duration.
- **Review:** 10 native German raters (not the authors), blind to the vendor, each rating every clip for naturalness on a
  1–5 scale, plus one intelligibility check per clip. Gate (register): MOS ≥ 4.0 [PROVISIONAL]. The register sets no
  per-clip floor; per-clip scores are recorded so the owner can set one.
- **Evidence to keep:** vendor, model/voice ids and versions, synthesis date and settings per clip; loudness / true peak
  / duration per file; rater pseudonym, native-speaker declaration and region, date, per-clip scores and comments; the
  aggregated MOS; the licence document reference (EX-06). Without this record the review counts as not done.

## 7. Owner decisions required
1. **OD-14a Vendor:** approve Azure AI Speech (or another vendor, or studio voice actors per OD-14 option a).
2. **OD-14b Licence:** accept written terms covering exam/paid-course use, the AI-training exclusion and perpetual rights.
3. **OD-14c Voice cast:** approve the voice list after listening (gender, age spread, AT/CH authenticity).
4. **OD-14d Raters:** appoint 10 native German raters for the MOS review.
5. **OD-14e Disclosure:** approve the learner-facing sentence stating that the audio uses synthetic voices.

## 8. Draft inquiry to Microsoft (EX-06), ready to send; NOT sent
Send only after the owner approves it, through the owner's Azure account or Microsoft licensing contact. Sending it buys
nothing and accepts nothing.

> **Subject:** Licensing clarification: Azure AI Speech neural TTS audio in a paid German-learning course (exam practice)
>
> Dear Microsoft Licensing / Azure AI Speech team,
>
> We are evaluating Azure AI Speech (prebuilt neural and Neural HD voices, de-DE, de-AT, de-CH) to produce pre-recorded
> listening and speaking prompts for a paid online German course. The material is original practice for a B1-level
> language exam, written by us. It is not an official exam and is not affiliated with any exam provider. We would generate
> about 80,000 characters once (with re-takes, up to about 400,000), store the audio files, and stream them to
> enrolled learners for as long as the course is offered. Before any purchase we need written confirmation of the
> following:
>
> 1. **Ownership and use of the audio:** that synthesized speech audio is "Output Content" under the Microsoft Product
>    Terms (Universal License Terms for Online Services), that Microsoft does not own it, and that we may use it
>    commercially in a paid course.
> 2. **Redistribution and retention:** that we may store the generated files and keep distributing them to paying
>    learners (streaming and download) indefinitely, **including after our Azure subscription ends**, without
>    regenerating them or paying further fees.
> 3. **Exam-practice use:** that use in graded practice tests (learners hear the audio and answer questions) is permitted
>    under the Product Terms and the Code of Conduct for Microsoft AI Services, with no restriction on educational
>    assessment use.
> 4. **Synthetic-voice disclosure:** what wording and placement satisfy the Code of Conduct requirement to disclose the
>    synthetic nature of generated voices. We plan a statement on the course page and in the listening instructions.
> 5. **Training and data:** that our input scripts and the generated audio are not used to train or improve Microsoft
>    models (please confirm which clause covers Azure AI Speech), and that real-time synthesis inputs and outputs are not
>    retained, as described in the Azure TTS data-privacy documentation; and, if we use the batch synthesis API, how long
>    inputs and outputs are kept and how to delete them.
> 6. **Voices:** that no additional licence, attribution or limited-access approval is required for the prebuilt voices
>    Ingrid, Jonas (de-AT), Leni, Jan (de-CH) and the de-DE neural / Neural HD voices for this use.
> 7. **Change protection:** whether voice retirement or later changes to the terms affect audio files we have already
>    generated.
>
> Please reply in writing, or point us to the exact contractual clauses, so we can file the confirmation with our
> licensing records.
>
> Kind regards, [owner name, company, Azure tenant / subscription id if any]

The listening-quality review stays as specified in §6 (10 native raters, MOS ≥ 4.0). A positive reply from Microsoft
does not replace it.

## Sources (checked 2026-10-14)
1. Azure voice list: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts
2. Google voice list: https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types
3. Polly voices: https://docs.aws.amazon.com/polly/latest/dg/available-voices.html
4. Microsoft Universal License Terms for Online Services: https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all
5. Azure TTS data, privacy and security: https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/speech-service/text-to-speech/data-privacy-security
6. Microsoft Code of Conduct for AI Services: https://learn.microsoft.com/en-us/legal/ai-code-of-conduct
7. ElevenLabs Terms of Service: https://elevenlabs.io/terms-of-use
8. Google Cloud Service Specific Terms (§18, §20): https://cloud.google.com/terms/service-terms
9. Google Cloud services summary (AI/ML Services): https://cloud.google.com/terms/services
10. Amazon Polly FAQ: https://aws.amazon.com/polly/faqs/
11. Azure Retail Prices API, "Azure Speech", West Europe: https://prices.azure.com/api/retail/prices
12. Google TTS pricing: https://cloud.google.com/text-to-speech/pricing
13. Amazon Polly pricing: https://aws.amazon.com/polly/pricing/
