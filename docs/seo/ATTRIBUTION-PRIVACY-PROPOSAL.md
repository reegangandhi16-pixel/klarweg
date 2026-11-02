# Purchase attribution: privacy implications and proposed wording

Status: **proposal only.** No code was written and `privacy.html` is unchanged.

## What is proposed (option 2 from the Sprint 1 measurement plan)
When a learner buys, the checkout sends two values with the order, and the Access Worker stores them on the order row:
- **Landing page**: the first Klarweg page opened in that browser tab session, path only (e.g. `/grammar/dativ.html`). No query string, so no campaign IDs or personal parameters.
- **Referrer type**: one of `search`, `direct`, `other`, derived in the browser from `document.referrer`. The full referrer URL is not stored.

Held in `sessionStorage` until checkout, then discarded. No cookies, no third party, no cross-site tracking, nothing sent before a purchase.

## Privacy implications
| Point | Detail |
|---|---|
| Is it "analytics"? | It is limited, first-party, purchase-only attribution. `privacy.html` §7 currently says Klarweg uses no analytics, so the policy must be updated **before** this ships, or it would contradict the policy. |
| Personal data? | The values are linked to an order, which is linked to an account, so they are personal data (DPDP Act 2023 in India; GDPR for EU learners). |
| Legal basis | Legitimate interest in knowing which free content leads to purchases; minimal data. Offer an opt-out request by email. |
| Cookie consent | `sessionStorage` used only for this purpose, cleared at the end of the session; no cookie. Low risk, but disclose it. |
| Retention | Same as order records, or shorter (e.g. erase the two fields after 24 months). |
| Not collected | IP-based location, device fingerprint, full referrer URL, browsing history, anything from non-buyers. |

## Proposed privacy-policy text (not applied)
Add to §7, replacing the sentence that says Klarweg uses no analytics:

> **How you found Klarweg.** We do not use Google Analytics, advertising trackers or third-party analytics. When you buy a course, we record two things with your order: the first Klarweg page you opened in that visit (for example, a grammar guide) and whether you arrived from a search engine, directly, or from another website. We do not record the address of the other website. Until you buy, this stays only in your browser and is deleted when you close the tab. We use it only to understand which free pages help learners, and we keep it as long as your order record. You can ask us to delete it at any time by emailing us.

Option 3 (an optional "How did you find Klarweg?" question after purchase) needs only a one-line addition: "If you answer the optional question about how you found Klarweg, we store your answer with your order."

## Before any implementation
1. You approve option 2, option 3, or neither.
2. You approve the policy text (or edit it) and the policy goes live first.
3. Then a separate branch for the checkout + Worker change, which touches checkout data and needs its own review.
