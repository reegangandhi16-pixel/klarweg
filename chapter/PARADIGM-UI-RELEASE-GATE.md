# Paradigm UI — Permanent Release Gate

Any change to `renderParadigmGrid()`, its CSS (`.wp-compare*`), or the
active-state precedence rule (`.wp-compare-cell.is-current .de-link`) must
re-pass this full scenario checklist before being marked Production Ready
/ Frozen. Passing implementation tests alone is not sufficient — visual
QA against every scenario below is required.

## Required scenarios

**Verbs:** exact form, separable verb, irregular verb, participle, infinitive.
**Nouns:** singular, plural, declined forms.
**Articles:** all four cases (Nominativ/Akkusativ/Dativ/Genitiv).
**Pronouns:** personal, possessive, relative.
**Adjectives:** comparison, adjective endings.

## Each scenario must verify

✓ exactly one active cell
✓ correct active ring
✓ correct active background
✓ correct active text color
✓ recursive navigation still works (word remains clickable)
✓ no blue link color inside active cells
✓ fragment emphasis only where appropriate (separable-verb fragment cases)
✓ no duplicate emphasis
✓ no conflicting semantic colors
✓ mobile layout remains readable

Only when every scenario passes may the Paradigm UI be marked:
**Production Ready — Frozen.**

---

## Project Status

Architecture — ✓ Complete
Implementation — ✓ Complete
Bulk Authoring — ✓ Complete
Automated Integrity — ✓ Complete
Human Verification — ⏳ Pending
Production QA — ⏳ Pending

Feature is marked **Production Ready** only after:
1. Human verification of lexical units (spot-check clicked forms resolve to correct dictionary entry, banner, audio).
2. Paradigm UI Release Gate passes (see `PARADIGM-UI-RELEASE-GATE.md`).
3. Final curriculum-wide click-through QA confirms: correct popup, correct dictionary entry, correct audio, correct paradigm highlight, no broken pointers, no visual regressions.

