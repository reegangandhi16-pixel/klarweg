# B1 Mock M0 Specification (calibration instrument)

> **Status:** design only. **The Mock is not created here.** No items, keys, audio or visuals.
> **Role:** M0 is not "Set 00". It is the **reference and calibration instrument** that validates the platform and anchors difficulty before Sets 01–10 are authored.
> **Labels:** **[OFFICIAL]** · **[DESIGN]** · **[OD-xx]**. Gate IDs `M-xx` are referenced by the QA process (Standard §17).

---

## 1. Definition
| Property | Specification |
|---|---|
| Form id | `frm:b1:mock-m0@<rev>`; kind `mock` |
| Assignment | Only via mode `mock_m0`. **Never** assigned in set modes; never mixed with Set forms (engine spec §7) |
| Content target | Every Set Difficulty Profile indicator at the **centre** of Layer C (composite z within ±0.10; balancing spec) |
| Structure | Exactly the B1 adult structure [OFFICIAL] (Standard §4–§6): 4 modules, 30 + 30 items, 3 writing tasks, 3 speaking parts with a choice of 2 topics in Teil 2 |
| Anchors | Hosts the reference anchor tasks (calibration plan §6: Lesen T5, Hören T2) |
| Instrumentation | Item- and phase-level timestamps, answer-change events, play events, recording events, autosave/lease events, client capability report |
| Versions | `rev 1` engineering pilot → `rev 2` calibration pilot → `rev n` reference form (frozen) |

---

## 2. Acceptance gates (all must pass before Sets 01–10 authoring starts)

### 2.1 Engine and UI
| Gate | Test | Pass criterion |
|---|---|---|
| M-01 Rendering | All parts on the device matrix (§3) | No overflow or overlap; all controls reachable; 0 critical visual defects |
| M-02 Timer | 65-min Lesen run with clock skew ±5 min injected, refresh ×10, sleep/wake | Server deadline unchanged; auto-submit within 10 s of the deadline; display drift < 1 s |
| M-03 Module transitions | Full-simulation runs | Break screens; a module never re-openable after submission; content never fetched before start (verified in network logs) |
| M-04 Answer persistence | Fault injection: offline 5 min, kill tab, duplicate tab, device switch | 0 lost acknowledged answers; unsynced local answers recovered on the same device; takeover rules as specified |
| M-05 Recovery | Refresh/crash at 20 random points per module | Resumes the correct phase; no time gained |
| M-06 Expiration | Abandoned attempts | Auto-submit or abandon per rules; correct statuses |

### 2.2 Hören (audio spec)
| Gate | Test | Pass criterion |
|---|---|---|
| M-07 Preload | Throttled 3G profile | The pre-read timer never starts before decode is complete; wait time excluded |
| M-08 Play-count enforcement | Scripted attempts + manual tampering (devtools) | No extra play via the UI; server rejects out-of-plan play acks; anomalies logged |
| M-09 No pause/seek/speed | UI inspection + keyboard media keys + OS media controls | No effect on playback |
| M-10 Interruption | Sleep/lock, tab switch, refresh mid-play | Exactly one recovery play per module when eligible; logged |
| M-11 Phase timing | 50 runs | Module total within 36–42 min; phase drift ≤ 2 s |

### 2.3 Schreiben
| Gate | Test | Pass criterion |
|---|---|---|
| M-12 Editor | Typing in German incl. umlauts on Windows/Mac/iPad/Android; Indian keyboard layouts | Umlaut row works; spellcheck/autocorrect off; word count matches the reference counter on 50 sample texts (± 0) |
| M-13 Autosave/finalisation | Kill during typing; deadline during typing | ≤ 5 s text loss; the final text = the last acknowledged version; frozen with a hash |
| M-14 Paste policy | Per OD-06 | Policy enforced and logged |

### 2.4 Sprechen (speaking spec)
| Gate | Test | Pass criterion |
|---|---|---|
| M-15 Device check + consent | 30 devices | Clear failure guidance; consent recorded and versioned |
| M-16 Recording | 4:30 continuous Teil 2 + multi-turn Teil 1/3 | ≥ 99 % of turns complete with all chunks; checksums match; no gaps > 200 ms |
| M-17 Interruption | Network drop 60 s, mic unplug, refresh | Behaviour per spec §5; no data loss for uploaded chunks |
| M-18 Partner/examiner simulation | 20 pilot sessions | Turn timing within plan; learner comprehension of turn-taking ≥ 90 % (post-survey) |
| M-19 Transcription + AI pre-rating | All pilot recordings | ≥ 98 % processed; AI JSON validates; Aussprache excluded |

### 2.5 Scoring and results
| Gate | Test | Pass criterion |
|---|---|---|
| M-20 Objective scoring | Golden attempts (scoring spec §8) | 100 % match with hand scoring; all 31 table rows |
| M-21 Rubric aggregation | Synthetic rating sets incl. the third-rating boundaries | Correct per spec; OD-07 and OD-30 decided and implemented |
| M-22 Result model | Learner + admin views | Disclaimer present; no Goethe-score wording; no keys before submission; feedback separated from status |
| M-23 Security | Penetration test checklist: IDOR on attempts, replayed leases, forged seq, signed-URL tampering/expiry, CSRF, key exfiltration via package/API/logs | 0 high/critical findings |

### 2.6 Accessibility and devices
| Gate | Test | Pass criterion |
|---|---|---|
| M-24 Accessibility | axe-core + manual NVDA/VoiceOver + keyboard-only full run | 0 serious/critical; full keyboard completion of Lesen/Hören/Schreiben |
| M-25 Mobile | Full Lesen/Hören/Schreiben on 360×640 Android + iPhone | Completion without blocking defects; Sprechen per OD-27 |
| M-26 Desktop | Chrome/Edge/Firefox/Safari latest 2 | Full simulation passes |

### 2.7 Content quality and calibration
| Gate | Test | Pass criterion |
|---|---|---|
| M-27 Teacher review | ≥ 2 B1 teachers + 1 native linguist review all items | Every item signed off (validity, key, distractors, register, regional usage) |
| M-28 Originality | Q14 similarity + human sign-off | Pass |
| M-29 Engineering pilot | N = 40–60 adult learners at about B1 | Workflow gates M-01…M-26 hold in the field; incident rate < 2 % per module |
| M-30 Calibration pilot | N = 100–150 | No item in hard-fail (calibration plan §3); ≤ 3 flagged items per module after revision; Lesen/Hören α ≥ 0.80 [INFERENCE]; pass rates plausible for the cohort (documented, not targeted) |
| M-31 Rater quality | Double ratings on all pilot scripts/recordings | Agreement targets (calibration plan §5.2) met |
| M-32 Timing behaviour | Pilot dwell times | No Lesen part median > 1.5× advisory; Schreiben time-outs < 10 % |
| M-33 External anchor (indicative) | Learners self-report official Modellsatz online-training scores (taken outside Klarweg) | Correlation reported; **no equivalence claim** |

**Exit:** all M-gates pass → M0 frozen as the reference form → Sets 01–10 authoring may start (balancing spec), with the calibration plan's set pilots.

---

## 3. Device and browser matrix (minimum)
| Class | Devices |
|---|---|
| Desktop | Windows 11 (Chrome, Edge, Firefox), macOS (Safari, Chrome) |
| Tablet | iPad (Safari), Android tablet (Chrome) |
| Phone | Android mid-range 360×640 (Chrome, Samsung Internet), iPhone SE/13 (Safari) |
| Network | Fibre, 4G, throttled 3G profile, intermittent (scripted drop) |
| Audio | Built-in speakers, wired headphones, Bluetooth headphones (latency check) |

---

## 4. Out of scope for M0
- Live AI partner.
- Adaptive features.
- A1/A2/B2 configs (the engine must stay generic, verified by a config-only smoke test with a dummy level config).
- Public launch.
