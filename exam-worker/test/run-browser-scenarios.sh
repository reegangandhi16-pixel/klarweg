#!/usr/bin/env bash
# Runs a named group of exam browser scenarios one after another in ONE CI job
# (browser-e2e.mjs runs one scenario per KX_E2E_ONLY). Every scenario runs even
# if an earlier one fails; the job fails if any failed.
#
#   GROUP=rest bash exam-worker/test/run-browser-scenarios.sh
#   GROUP=smoke KX_DEV_PROXY=1 bash exam-worker/test/run-browser-scenarios.sh
#
# Groups:
#   practice, flagged, sprechen-topic  the three long scenarios, one per job
#   rest                               every other scenario
#   smoke                              fast subset that exercises the klarweg-access
#                                      Worker (session, MFA, admin grant/revoke, lease,
#                                      takeover, confidentiality, precheck)
# The ALL list must equal SCENARIOS in browser-e2e.mjs; the check below fails
# the job if a scenario is added there but not here.
set -uo pipefail
cd "$(dirname "$0")/../.."

LONG="practice flagged sprechen-topic"
REST="autoplay hoeren-autoplay lease-expiry two-tabs rater-2fa lesen-only part-practice access-admin precheck review-form confidentiality sleep-wake focus-not-obscured autosave-rejected text-limit"
SMOKE="access-admin rater-2fa lease-expiry two-tabs confidentiality precheck"

declared=$(node -e '
  const src = require("fs").readFileSync("exam-worker/test/browser-e2e.mjs", "utf8");
  const m = src.match(/const SCENARIOS = \[(.*)\];/);
  if (!m) { console.error("SCENARIOS list not found"); process.exit(2); }
  console.log([...m[1].matchAll(/\[\x27([a-z0-9-]+)\x27/g)].map((x) => x[1]).sort().join(" "));
') || exit 2
covered=$(echo $LONG $REST | tr ' ' '\n' | sort | tr '\n' ' ' | sed 's/ $//')
if [ "$declared" != "$covered" ]; then
  echo "::error::scenario groups out of sync with browser-e2e.mjs"
  echo "declared: $declared"
  echo "grouped:  $covered"
  exit 2
fi

case "${GROUP:-}" in
  practice|flagged|sprechen-topic) LIST="$GROUP" ;;
  rest) LIST="$REST" ;;
  smoke) LIST="$SMOKE" ;;
  *) echo "::error::unknown GROUP='${GROUP:-}'"; exit 2 ;;
esac

failed=""
for s in $LIST; do
  echo "::group::scenario $s (proxy=${KX_DEV_PROXY:-0})"
  start=$SECONDS
  if KX_E2E_ONLY="$s" node exam-worker/test/browser-e2e.mjs; then
    echo "PASS $s ($((SECONDS - start))s)"
  else
    echo "::error::FAIL $s ($((SECONDS - start))s)"
    failed="$failed $s"
  fi
  echo "::endgroup::"
done

if [ -n "$failed" ]; then
  echo "Failed:$failed"
  exit 1
fi
echo "All passed: $LIST"
