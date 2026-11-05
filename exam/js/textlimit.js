/* Schreiben text length (pure, testable in Node). The exam Worker refuses a text longer than MAX_TEXT_CHARS
   (exam-worker/src/api.js, 413 text_too_long) and stays the final authority; the editor only helps the learner stay
   under it. Length = String.length (UTF-16 code units, a line break counts 1), which is what the server checks and
   what Chrome's maxlength counts. */
export const MAX_TEXT_CHARS = 20_000;
export const WARN_TEXT_CHARS = 18_000;   // 90 %: the counter turns into a warning

/* 20 000 with a no-break space as the thousands separator (as in the existing "höchstens 20 000 Zeichen" notice) */
export const formatChars = (n) => String(Math.max(0, n | 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/* 'ok' | 'warn' (from WARN_TEXT_CHARS) | 'limit' (exactly MAX) | 'over' (a held or restored text above MAX) */
export function limitState(len) {
  if (len > MAX_TEXT_CHARS) return 'over';
  if (len === MAX_TEXT_CHARS) return 'limit';
  if (len >= WARN_TEXT_CHARS) return 'warn';
  return 'ok';
}

/* length after replacing the selection [start, end) of value by insert */
export function projectedLength(value, start, end, insert) {
  const v = String(value ?? ''); const s = Math.max(0, Math.min(start ?? v.length, v.length)); const e = Math.max(s, Math.min(end ?? s, v.length));
  return v.length - (e - s) + String(insert ?? '').length;
}

export const counterText = (len) => `${formatChars(len)} / ${formatChars(MAX_TEXT_CHARS)} Zeichen`;
export function counterNote(len) {
  const st = limitState(len);
  if (st === 'warn') return `Noch ${formatChars(MAX_TEXT_CHARS - len)} Zeichen.`;
  if (st === 'limit') return 'Höchstlänge erreicht.';
  if (st === 'over') return `${formatChars(len - MAX_TEXT_CHARS)} Zeichen zu viel – bitte kürzen.`;
  return '';
}

export const LIMIT_WARNING = (len) => `Ihr Text hat ${formatChars(len)} von höchstens ${formatChars(MAX_TEXT_CHARS)} Zeichen.`;
export const LIMIT_REACHED = `Höchstlänge erreicht: höchstens ${formatChars(MAX_TEXT_CHARS)} Zeichen pro Text. Weitere Zeichen werden nicht angenommen.`;
export const PASTE_TOO_LONG = (len) => `Nicht eingefügt: Der Text wäre dann ${formatChars(len)} Zeichen lang, erlaubt sind höchstens ${formatChars(MAX_TEXT_CHARS)}. Kürzen Sie den Text oder fügen Sie weniger ein.`;

/* F2 — a composition (IME, macOS dead key such as Option+u → ü) cannot be cancelled by script and the browser may cut
   the committed text at maxlength without telling anyone. base = text length outside the composed range at
   compositionstart, committed = compositionend data, finalLen = text length once the commit has landed.
   True when characters of the commit did not make it in because of the limit. A cancelled composition (empty data)
   is never "truncated". */
export function compositionTruncated(base, committed, finalLen) {
  const want = Math.max(0, base | 0) + String(committed ?? '').length;
  return want > MAX_TEXT_CHARS && finalLen < want;
}

/* F3 — Safari: at (or one code unit short of) the limit, WebKit trims the text to what fits BEFORE beforeinput, so a
   refused key arrives as insertText with data '' and nothing would explain why the key did nothing. Narrow on purpose:
   only typing / replacement text, only an empty string (not null: Enter and deletions carry null), only when the text
   outside the selection is within one code unit of the limit (a surrogate pair such as an emoji needs two). */
export function emptyInsertAtLimit(inputType, data, len, selected = 0) {
  return (inputType === 'insertText' || inputType === 'insertReplacementText') && data === ''
    && (len | 0) - Math.max(0, selected | 0) >= MAX_TEXT_CHARS - 1;
}
