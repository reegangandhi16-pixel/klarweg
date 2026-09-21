export function createUserId() {
  return `usr_${crypto.randomUUID()}`;
}
