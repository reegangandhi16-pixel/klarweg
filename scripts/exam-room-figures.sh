#!/usr/bin/env bash
# Build the three Sprechen exam-room figures in an ISOLATED Blender profile (no change to the global Blender
# installation, its preferences or its extensions).
#
#   KX_FIG_WORK=<dir> KX_FIG_ASSETS=<dir> KX_FIG_RIG=<dir> KX_FIG_PACKS=<dir> scripts/exam-room-figures.sh
#
#   KX_FIG_WORK    working directory (outside the repo): the isolated Blender profile + raw GLBs go here
#   KX_FIG_ASSETS  MakeHuman CC0 system assets (skins/, eyes/, eyebrows/, eyelashes/, teeth/, tongue/, hair/, clothes/)
#   KX_FIG_RIG     TalkingHead v1.8.2 blender/MPFB rig: talkinghead.mpfbskel (MIT repo), talkinghead.mhw (CC0)
#   KX_FIG_PACKS   visemes02.zip, faceunits01.zip (MakeHuman target packs, CC0)
#   MPFB_SRC       the MPFB extension to copy (default: the one installed from extensions.blender.org)
#
# Executes only: Blender (installed app), the MPFB extension (GPL-3, Blender extension platform), and this repo's
# scripts/exam-room-mpfb-build.py. All downloaded inputs are data (OBJ/PNG/JSON); none is executed.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BLENDER="${BLENDER:-/Applications/Blender.app/Contents/MacOS/Blender}"
MPFB_SRC="${MPFB_SRC:-$HOME/Library/Application Support/Blender/5.2/extensions/blender_org/mpfb}"
: "${KX_FIG_WORK:?}" "${KX_FIG_ASSETS:?}" "${KX_FIG_RIG:?}" "${KX_FIG_PACKS:?}"

RES="$KX_FIG_WORK/blender-user"                                  # BLENDER_USER_RESOURCES (config, extensions, data)
DATA="$RES/extensions/.user/blender_org/mpfb/data"                # MPFB user data inside the isolated profile
mkdir -p "$RES/extensions/blender_org" "$DATA/rigs" "$KX_FIG_WORK/out"
rsync -a --delete --exclude '__pycache__' "$MPFB_SRC/" "$RES/extensions/blender_org/mpfb/"
rsync -a "$KX_FIG_ASSETS/" "$DATA/"
unzip -oq "$KX_FIG_PACKS/visemes02.zip" -d "$DATA"
unzip -oq "$KX_FIG_PACKS/faceunits01.zip" -d "$DATA"
# MPFB lists a custom rig only with "identifying_bones" (the GUI asks for it when saving a rig to the library)
python3 -I - "$KX_FIG_RIG/talkinghead.mpfbskel" "$DATA/rigs/talkinghead.json" <<'PY'
import json, sys
d = json.load(open(sys.argv[1])); assert 'LeftToe_End' in d['bones']
d['identifying_bones'] = ['LeftToe_End']; json.dump(d, open(sys.argv[2], 'w'))
PY
cp "$KX_FIG_RIG/talkinghead.mhw" "$DATA/rigs/weights.talkinghead.json"

for fig in examiner-f partner-m partner-f; do
  echo "== $fig"
  BLENDER_USER_RESOURCES="$RES" "$BLENDER" -b --python "$ROOT/scripts/exam-room-mpfb-build.py" -- \
    "$ROOT/exam-room/figures/$fig.json" "$KX_FIG_WORK/out/$fig.glb" 2>&1 \
    | grep -E 'MESHES|EXPORTED|RECOLORED|Error|Traceback|File "|line [0-9]+|ValueError|not found|Could not' || true
  test -s "$KX_FIG_WORK/out/$fig.glb"
done
ls -la "$KX_FIG_WORK/out"
