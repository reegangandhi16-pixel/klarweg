#!/bin/bash
# Klarweg AI provider benchmark — the ONE command to run in Terminal:
#   bash ~/Downloads/klarweg-prelaunch/tutor/eval/run-benchmark.sh
# Prompts (hidden input) only for keys not already in the environment.
# Keys stay in this process's memory; they are never written to disk.
# Output (already redacted) → ~/klarweg-benchmark-last-run.log
# Completion marker        → ~/klarweg-benchmark-complete.json
# Exit code 0 only if at least one provider completed a verified run.
set -uo pipefail
cd "$(dirname "$0")/../.." || exit 1
LOG="$HOME/klarweg-benchmark-last-run.log"
echo "Run started: $(date '+%Y-%m-%d %H:%M:%S')  host=$(hostname -s) user=$(whoami)" | tee "$LOG"
for NAME in GEMINI_API_KEY OPENAI_API_KEY ANTHROPIC_API_KEY; do
  if [ -z "${!NAME:-}" ]; then
    printf '%s (hidden input, Enter to skip this provider): ' "$NAME" >&2
    IFS= read -rs VALUE; printf '\n' >&2
    VALUE="$(printf '%s' "$VALUE" | tr -d '[:space:]"'"'"'')"
    export "$NAME=$VALUE"; VALUE=""
  fi
done
node tutor/eval/run-benchmark.mjs 2>&1 | tee -a "$LOG"
CODE=${PIPESTATUS[0]}
unset GEMINI_API_KEY OPENAI_API_KEY ANTHROPIC_API_KEY
exit "$CODE"
