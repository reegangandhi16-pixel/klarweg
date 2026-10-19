# Runbook — second factor for raters and admins (OD-19)

**Status:**
- Implemented in code: owner decisions D1–D8, authorised 2026-10-19.
- **Not provisioned anywhere:** no migration has been applied and no secret has been set.
- Before any rater uses it, D9 (non-production end-to-end test) and D10 (this runbook rehearsed) are required.
- Commands below are for the owner/operator. They are never run by automation. Never paste secret values into chat, tickets or the repository.

## What it does
- **Who needs it:** raters, lead raters and exam admins (`exam_roles`). They need a *fresh* second factor (TOTP, at most
  12 h old) on every `/exam/v1/admin/*` route, and when a lead rater or exam admin opens another learner's result
  (`/exam/v1/attempts/{id}/result`; audited as `result_viewed_by_staff`). Learners are not affected.
- **Where the check happens:**
  - The Access Worker attests the time of the last successful code per session (`sessions.mfa_verified_at`) in `X-KW-MFA-At`.
  - The exam Worker enforces freshness (`exam-worker/src/auth.js` `mfaFresh`).
  - Browser-sent `X-KW-*` headers are dropped by the proxy.
- **Limits:**
  - 5 wrong codes per user per 15 minutes, and 20 per network.
  - 30-minute lock after 10 consecutive failures.
  - Codes are single use, with no replay inside the ±30 s window.
- **Recovery codes:** 10 single-use codes, shown once, stored hashed. A new set invalidates the old one.
- **Without `TOTP_ENC_KEY`:** every second-factor route answers `mfa_unavailable`, so staff routes stay closed. There is no weaker fallback.

## 1. Provisioning (non-production first, D9)
1. **Secret:** generate 32 random bytes, base64 (for example `openssl rand -base64 32`), and set it as the Worker secret
   `TOTP_ENC_KEY` of the **non-production** Access Worker (`wrangler secret put TOTP_ENC_KEY`).
   - Store a copy offline in the owner's password manager. Losing it means every rater re-enrols (§5).
   - Use a different key per environment.
2. **Database:** apply `access/worker/migration-011-totp.sql` to the non-production Access D1.
   It is additive: three new tables and one nullable column on `sessions`.
3. **Deploy:** deploy the Access Worker and the exam Worker of the same commit to non-production. Exam routes must stay off
   in production.

## 2. End-to-end test in non-production (D9) — record date, tester, result per line
| # | Step | Expected |
|---|---|---|
| 1 | A rater account opens the rater screen | "Zweiten Faktor einrichten" |
| 2 | Enrol with an authenticator app (key or link) | Code accepted; 10 recovery codes shown once |
| 3 | Rating queue | Opens |
| 4 | The same code again (new session) | Refused (no replay) |
| 5 | 5 wrong codes | `mfa_rate_limited`; 10 consecutive → `mfa_locked` for 30 min (check `mfa_audit`) |
| 6 | Recovery code | Accepted once; the same code again refused |
| 7 | Set `sessions.mfa_verified_at` to 13 h ago for the test session | Rater screen asks for a code again |
| 8 | A learner account | Exam unchanged, never asked for a code |
| 9 | Browser devtools: send `X-KW-MFA-At` yourself | Still asked for a code |
| 10 | Unset `TOTP_ENC_KEY` | `mfa_unavailable`; staff routes closed |
| 11 | Owner reset (§3) | The rater can enrol again |

Only after every line passes: repeat §1 for production, and still keep exam routes off until the pilot is approved.

## 3. Owner reset — lost phone AND recovery codes (D6, owner only)
1. **Confirm identity outside the product** (for example a video call with the known rater). Never reset on an e-mail request alone.
2. **Run on the Access D1 of the environment concerned** (replace `<user_id>`):
   ```sql
   DELETE FROM user_recovery_codes WHERE user_id = '<user_id>';
   DELETE FROM user_totp WHERE user_id = '<user_id>';
   UPDATE sessions SET mfa_verified_at = NULL WHERE user_id = '<user_id>';
   INSERT INTO mfa_audit (at, user_id, event, detail) VALUES (strftime('%s','now'), '<user_id>', 'reset_by_owner', '{"reason":"<short reason>"}');
   ```
3. **The rater enrols again** on the next visit to the rater screen.

## 4. Suspected compromise of a rater account
1. **Revoke all of the rater's sessions:** `DELETE FROM sessions WHERE user_id = '<user_id>';`
2. **Reset the second factor** as in §3.
3. **Ask the rater to change the password.**
4. **Review recent `mfa_audit` events** and the rater's ratings in the exam audit log.

## 5. Loss or rotation of `TOTP_ENC_KEY`
Stored secrets can no longer be decrypted, so verification fails for everyone.
1. **Set a new key** (§1).
2. **Clear the enrolments:**
   ```sql
   DELETE FROM user_recovery_codes;
   DELETE FROM user_totp;
   UPDATE sessions SET mfa_verified_at = NULL;
   ```
3. **Audit and announce:** add one `mfa_audit` row per rater (`reset_by_owner`, reason "key rotation") and tell raters to enrol again.

## 6. Recovery codes used up / new phone
- **The rater still has the old phone or one code:**
  1. They verify on the rater screen.
  2. They enrol the new phone (`POST /auth/mfa/enroll`, which needs a fresh second factor).
  3. Optionally they generate a new code set (`POST /auth/mfa/recovery-codes`).
- **Otherwise:** owner reset (§3).
