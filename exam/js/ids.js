/* Request / device identifiers (CSPRNG). */
export function randomId(prefix) {
  const b = new Uint8Array(12);
  crypto.getRandomValues(b);
  return prefix + '_' + [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
}
