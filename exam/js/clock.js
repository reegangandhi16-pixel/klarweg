/* Server clock. The browser never decides a deadline: it only estimates the
   offset between its clock and the server's (median of RTT-midpoint samples)
   to display the server deadline. A wrong device clock changes nothing. */
export class ServerClock {
  constructor(now = () => Date.now()) { this.now = now; this.samples = []; }
  /* sentAt/receivedAt: local ms around one request; serverNow from the reply */
  sample(sentAt, receivedAt, serverNow) {
    if (!Number.isFinite(serverNow) || receivedAt < sentAt) return;
    const rtt = receivedAt - sentAt;
    this.samples.push({ offset: serverNow - (sentAt + rtt / 2), rtt });
    if (this.samples.length > 9) this.samples.shift();
  }
  get offset() {
    if (!this.samples.length) return 0;
    const o = this.samples.map((s) => s.offset).sort((a, b) => a - b);
    return o[Math.floor(o.length / 2)];
  }
  serverNow() { return this.now() + this.offset; }
  remaining(deadlineAt) { return deadlineAt == null ? null : Math.max(0, deadlineAt - this.serverNow()); }
}

export function formatRemaining(ms) {
  if (ms == null) return '–';
  const s = Math.ceil(ms / 1000);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  const pad = (n) => String(n).padStart(2, '0');
  return h ? `${h}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
}
