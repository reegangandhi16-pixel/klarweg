# Vocabulary audio additions — 2026-11-20 (owner-approved TTS)

Renamed headwords from the 19 owner corrections had no studio recording (browser TTS fallback).
Rendered with the vocabulary voice policy (audio-manifests/voice-policy.json → vocabulary-headword:
female de-DE-Neural2-F, male de-DE-Neural2-B, rate 1; forms: female de-DE-Neural2-F), MP3 24 kHz.
Request text = vocabTerm(art, de), exactly what the card asks the engine for.

| Text | Manifest | Path(s) |
|---|---|---|
| das Roadmovie | vocab/manifest.json | audio/{female,male}/das_Roadmovie.mp3 |
| um sich herum | vocab/manifest.json | audio/{female,male}/um_sich_herum.mp3 |
| erröten | vocab/manifest.json | audio/{female,male}/erroeten.mp3 |
| die Beherrschung | vocab/manifest.json | audio/{female,male}/die_Beherrschung.mp3 |
| errötet | vocab/manifest-conjugation.json | audio/conjugation/female/erroetet-db3f8d6fb7f29aea.mp3 |
| errötete | vocab/manifest-conjugation.json | audio/conjugation/female/erroetete-564c498029917ae8.mp3 |
| Roadmovies | vocab/manifest-word-form.json | public/audio/forms/65b0d8439c4652d4.mp3 |

Verification: Google Speech-to-Text (de-DE) transcribed every file back to the intended text
(das Roadmovie / „das Rot-Movie“ = standard German [ˈroːtmuːviː]; die Beherrschung 0.97;
um sich herum 0.96; erröten; errötet; errötete; Roadmovies).

**Release step (not done — needs owner approval):** upload the 11 files from
`~/klarweg-work/vocab-img-store/audio-staging/vocab/` to the private media bucket under the key
prefix `vocab/` (served as `/api/media/vocab/<path>`), BEFORE the site deploy. Until then the
manifest entries 404 and the engine falls back to browser TTS (no silent card).
