/* Schreiben paste policy (register OD-06, ENGINE §9): writing.paste_policy ∈ {allow, internal_only, block}; default
   internal_only = paste only what was copied or cut inside this exam's own editor; drag-and-drop disabled. A refused
   paste is logged for integrity analytics and never penalised. Pure decision helper (testable in Node). */
export const PASTE_POLICIES = ['allow', 'internal_only', 'block'];
export const DEFAULT_PASTE_POLICY = 'internal_only';
const norm = (s) => String(s ?? '').replace(/\r\n?/g, '\n');
export function pasteAllowed(policy, pasted, internalClip) {
  const p = PASTE_POLICIES.includes(policy) ? policy : DEFAULT_PASTE_POLICY;
  if (p === 'allow') return true;
  if (p === 'block') return false;
  return internalClip != null && norm(pasted) !== '' && norm(pasted) === norm(internalClip);
}
export const PASTE_REFUSED = 'Einfügen von außerhalb der Prüfung ist hier nicht möglich. Text, den Sie in diesem Editor kopiert haben, können Sie einfügen.';
