# OD-14 — Listening-audio vendor research (decision support, not a decision)

> **Status:** research only, 2026-10-14. This note does **not** choose, approve, buy or licence any vendor, voice or audio.
> OD-14 (register v1.5, §B) stays **CONDITIONAL**: vendor, licence (EX-06), voices and the human quality review are
> all still owner decisions. Until they are made, every Hören stimulus stays a clearly labelled TEST AUDIO tone, and
> browser speech synthesis is never used (AUDIO-SPEC isolation, OS §23.5).

## 1. What OD-14 requires (B1-AUDIO-SPEC B3/B5, register OD-14)

| Gate | Requirement |
|---|---|
| Cast | ≥ 16 distinct standard-German voices, ≥ 8 female + ≥ 8 male, ages ≈ 20–70, **≥ 2 authentic Austrian + ≥ 2 authentic Swiss** standard pronunciation; 9–12 voices per form |
| Quality | Human naturalness review, **MOS ≥ 4.0 / 5 with 10 native raters** [PROVISIONAL]; OS §23.5 "premium audio only" |
| Licence | Written licence for exam use, **AI-training exclusion**, **perpetual** licence for the produced forms (EX-06) |
| Masters / delivery | WAV 48 kHz / 24-bit mono masters; Opus 64 kbps + AAC-LC 96 kbps, −18 LUFS ± 1 |

## 2. Volume and cost

The 15 practice forms contain **58,349 characters** of scripts (Hören 50,998; Sprechen partner/examiner turns 7,351;
counted from `exam-content/tools/practice-forms.mjs`). Full exam-length Hören (OD-43 gate 36–42 min) would be roughly
20,000 characters per form. A generous budget for 15 full-length forms plus three re-takes per line is **≈ 1–1.5 M
characters**. At every vendor below that is **under US $150 of synthesis**; the real cost is the human review
(10 native raters) and audio post-production, not the API.

## 3. Vendors compared (sources checked 2026-10-14)

| | Azure AI Speech | Google Cloud TTS | Amazon Polly | ElevenLabs |
|---|---|---|---|---|
| de-DE voices | 23 (11 F / 12 M), incl. HD voices [1] | 31 (16 F / 15 M), 20 of them Chirp 3 HD [2] | 5 (2 F / 3 M) [3] | Large community voice library (not enumerated by locale here) |
| **de-AT / de-CH** | **2 + 2** (Ingrid/Jonas, Leni/Jan) [1] | **none listed** [2] | 1 + 1 (Hannah, Sabrina) [3] | Library voices only; authenticity must be checked voice by voice |
| Meets "≥ 2 AT + ≥ 2 CH" on paper | **Yes (exactly)** | No | No | Unverified |
| Price / 1 M chars | Neural $15, Neural HD $22 [4] | Chirp 3 HD $30, Neural2 $16 [5] | Neural $16, Generative $30 [6] | v2/v3 $80 (API), plans from $22/month [7] |
| Output ownership | Customer is responsible for rights in its input; explicit output-ownership wording not confirmed in this pass [8] | not confirmed from terms in this pass | "your Polly output belongs to you"; replay/storage without extra fees [9] | "you retain all rights in and to your Output"; free tier non-commercial only [10] |
| Training on our scripts | Real-time synthesis: text and audio **not stored** [8] | not confirmed in this pass | Inputs may be used to improve services unless the **AWS Organizations opt-out policy** is applied [9] | Content may be used for training unless opted out in "Data use" [10] |
| Disclosure duty | Must disclose synthetic voices to users (Code of Conduct, Responsible AI req. 3) [11] | – | – | – |

Notes:
- **Age range 20–70** is the weakest point for every vendor: neural catalogues are dominated by voices that sound
  25–45. This can only be settled by listening, which is part of the owner's quality review.
- **Azure** is the only vendor whose official catalogue covers the Austrian and Swiss requirement, and only with the
  minimum (one female and one male voice each). With 23 de-DE voices it can also cover the 8 F + 8 M cast, but voice
  reuse limits (B3: no voice more than 4 forms in the same part) must be planned across 15 forms.
- **Disclosure:** Azure's Code of Conduct requires telling users that voices are synthetic. That fits the Klarweg
  practice labelling (synthetic, not an official exam), but the learner-facing wording is an owner decision.
- None of the standard terms is, by itself, the "written licence with AI-training exclusion and perpetual licence"
  that EX-06 asks for. Each vendor needs either an enterprise agreement or a written confirmation.

## 4. Recommendation (for the owner to accept or reject)

1. **Shortlist Azure AI Speech (Neural HD + the de-AT/de-CH neural voices)** as the primary candidate: it is the only
   catalogue that meets the regional-voice gate on paper, it does not store real-time synthesis text or audio, and its
   synthesis cost for the whole library is negligible.
2. Keep **Google Chirp 3 HD** as the second candidate for de-DE voices only (no Austrian/Swiss voices; it would need to
   be combined with another source for the regional gate).
3. Before any purchase: run a **listening pilot** of one form (P3 suggested) with the shortlisted voices, rated by
   10 native speakers against MOS ≥ 4.0, and check age spread and regional authenticity by ear.
4. In parallel, ask the chosen vendor in writing for the **EX-06 terms** (exam use, AI-training exclusion, perpetual
   rights in the produced files).

## 5. Exact owner decisions needed

- **OD-14a — Vendor:** approve one vendor (or reject all and fall back to studio voice actors, OD-14 option a).
- **OD-14b — Licence (EX-06):** approve the written terms obtained from that vendor.
- **OD-14c — Cast:** approve the voice list (≥ 16 voices, gender, age, ≥ 2 AT, ≥ 2 CH) after listening.
- **OD-14d — Quality review:** appoint the 10 native raters and accept the MOS result.
- **OD-14e — Disclosure text:** approve how learners are told that voices are synthetic (if a neural vendor is chosen).

Nothing in the repository depends on these decisions yet: forms already carry the scripts (`script_de`, server-only),
and the validator measures real audio durations (`EXAM-AUDIO-DURATION-VALIDATION.md`) once files exist.

## Sources

1. Azure AI Speech, language and voice support (TTS): https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts
2. Google Cloud Text-to-Speech, supported voices: https://docs.cloud.google.com/text-to-speech/docs/list-voices-and-types
3. Amazon Polly, available voices: https://docs.aws.amazon.com/polly/latest/dg/available-voices.html
4. Azure Retail Prices API, product "Azure Speech", West Europe (S1 Neural TTS $15 / 1M; Neural HD $22 / 1M): https://prices.azure.com/api/retail/prices
5. Google Cloud Text-to-Speech pricing: https://cloud.google.com/text-to-speech/pricing
6. Amazon Polly pricing: https://aws.amazon.com/polly/pricing/
7. ElevenLabs API pricing: https://elevenlabs.io/pricing/api
8. Azure TTS data, privacy and security: https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/speech-service/text-to-speech/data-privacy-security
9. Amazon Polly FAQ: https://aws.amazon.com/polly/faqs/
10. ElevenLabs Terms of Service: https://elevenlabs.io/terms-of-use
11. Microsoft Code of Conduct for AI Services: https://learn.microsoft.com/en-us/legal/ai-code-of-conduct
