# Exam-room figures — sources and licences

`examiner-f.glb` (Prüferin), `partner-m.glb` (Gesprächspartner), `partner-f.glb` (Julia) are built by
`scripts/exam-room-figures.sh` → `scripts/exam-room-mpfb-build.py` (Blender + MPFB, isolated profile) from the specs
in `exam-room/figures/*.json`, then optimised by `scripts/exam-room-avatar.mjs` (texture resizing, colour changes
from the specs, sparse quantized morph targets). Checked 2026-11-09 (technical licence check, not legal advice).

| Part | Source | Licence |
|---|---|---|
| Base mesh, modelling targets (MPFB data) | MakeHuman / MPFB 2.0.18 | CC0 ("explicitly released as CC0 in September 2020") |
| Skins `middleage_caucasian_female`, `young_caucasian_male`, `young_caucasian_female` | MakeHuman system assets | CC0 |
| Eyes `high-poly` (material `brown`), `eyebrow001`, `eyebrow010`, `eyelashes01`, `eyelashes02`, `teeth_base`, `tongue01` | MakeHuman system assets | CC0 |
| Hair `braid01` (recoloured ash grey), `short02`, `ponytail01` | MakeHuman system assets | CC0 |
| Clothes `male_casualsuit01` | MakeHuman system assets | CC0 |
| Clothes `toigo_female_suit`, `toigo_female_suit_2` (recoloured camel) | MakeHuman community pack "suits01", author Margaret Toigo (MRT) | CC0 |
| Visemes (`visemes02`) and ARKit face units (`faceunits01`) | MakeHuman target packs, author Mika Suominen | CC0 |
| Rig `talkinghead.mpfbskel` | TalkingHead v1.8.2, `blender/MPFB/` (© Mika Suominen) | MIT (repository licence; see `exam-room/vendor/talkinghead/LICENSE`) |
| Rig weights `talkinghead.mhw` | TalkingHead v1.8.2, `blender/MPFB/` | CC0 |

Tools (not distributed, no code in these files): Blender 5.2 (GPL), MPFB 2.0.18 (GPL-3.0-or-later). The MPFB FAQ
"Can I use models made with MPFB in a closed-source game?" answers yes: all core assets are CC0; third-party assets
carry their own licences (here: the Toigo suits, also CC0). Source: static.makehumancommunity.org/mpfb/faq/use_in_closed_source.html

Downloads: `files.makehumancommunity.org/asset_packs/` (system assets, suits01, visemes02, faceunits01) and
`raw.githubusercontent.com/met4citizen/TalkingHead/v1.8.2/blender/MPFB/`. All are data files (OBJ/PNG/JSON); none is executed.
