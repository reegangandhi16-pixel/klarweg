"""Deterministic Word Match scoring (reference implementation for the A1·01 Whisper pilot).

Whisper (or the browser) only produces a transcript. The score is computed here:

  normalise -> tokenise -> align target vs recognised (word-level edit distance)
  -> classify every word -> Word Match = matched target words / target words

Word Match is NOT a pronunciation score: it measures whether the recogniser
heard the target's words, which depends on the recogniser as much as on the learner.
"""
import re, unicodedata

LETTER_NAMES = {  # German letter names a recogniser may write out
    "a": "a", "be": "b", "beh": "b", "ce": "c", "ze": "c", "zeh": "c", "tse": "c", "de": "d", "deh": "d", "e": "e",
    "ef": "f", "eff": "f", "ge": "g", "geh": "g", "ha": "h", "hah": "h", "i": "i", "jot": "j", "ka": "k", "kah": "k",
    "el": "l", "ell": "l", "em": "m", "emm": "m", "en": "n", "enn": "n", "o": "o", "pe": "p", "peh": "p", "ku": "q",
    "kuh": "q", "er": "r", "err": "r", "es": "s", "ess": "s", "te": "t", "teh": "t", "u": "u", "vau": "v", "fau": "v",
    "we": "w", "weh": "w", "ix": "x", "ypsilon": "y", "zet": "z", "zett": "z", "ä": "ä", "ae": "ä", "ö": "ö", "oe": "ö",
    "ü": "ü", "ue": "ü", "eszett": "ß",
}
ONES = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf",
        "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn"]
TENS = {20: "zwanzig", 30: "dreißig", 40: "vierzig", 50: "fünfzig", 60: "sechzig", 70: "siebzig", 80: "achtzig", 90: "neunzig"}

def num_word(n):
    if n < 20: return ONES[n]
    if n < 100:
        t, o = n - n % 10, n % 10
        return TENS[t] if not o else ("ein" if o == 1 else ONES[o]) + "und" + TENS[t]
    return str(n)

PUNCT = re.compile(r"[„“”\"'‚‘’«»:;,.!?¿¡()\[\]…—–/]")

def tokens(text, spelled_ok=True):
    """[(norm, raw, is_letter)] — spelled groups like B-U-C-H become single letters."""
    t = unicodedata.normalize("NFC", str(text))
    out = []
    for raw in PUNCT.sub(" ", t).split():
        parts = [p for p in raw.split("-") if p]
        if spelled_ok and len(parts) > 1 and all(len(p) == 1 for p in parts):   # B-U-C-H
            out += [(p.lower(), p, True) for p in parts]
            continue
        for p in parts:
            low = p.lower()
            if low.isdigit():
                out.append((num_word(int(low)), p, False))
            else:
                out.append((low, p, len(p) == 1 and p.isalpha()))
    return out

def fold(w):  # spelling-variant equality: ä=ae, ö=oe, ü=ue, ß=ss
    return w.replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")

def same(tgt, rec):
    tn, _, t_letter = tgt; rn, rraw, _ = rec
    if fold(tn) == fold(rn): return True
    if t_letter and len(tn) == 1:                       # a spelled letter: accept its German letter name
        return LETTER_NAMES.get(rn) == tn or LETTER_NAMES.get(fold(rn)) == tn
    return False

def expand_caps(target_toks, rec_toks):
    """A recogniser often writes a spelled word as one uppercase run ("BUCH"). Expand it into
    letters ONLY when it is all-uppercase AND the target spells exactly those letters."""
    groups, cur = [], []
    for t in target_toks + [("", "", False)]:
        if t[2] and len(t[0]) == 1: cur.append(t[0])
        else:
            if len(cur) > 1: groups.append("".join(cur))
            cur = []
    out = []
    for r in rec_toks:
        raw = r[1]
        if len(raw) > 1 and raw.isupper() and raw.isalpha() and raw.lower() in groups:
            out += [(c.lower(), c, True) for c in raw]
        else:
            out.append(r)
    return out

def align(target, recognised):
    T = tokens(target); R = expand_caps(T, tokens(recognised))
    n, m = len(T), len(R)
    D = [[0] * (m + 1) for _ in range(n + 1)]
    for i in range(n + 1): D[i][0] = i
    for j in range(m + 1): D[0][j] = j
    for i in range(1, n + 1):
        for j in range(1, m + 1):
            D[i][j] = min(D[i - 1][j - 1] + (0 if same(T[i - 1], R[j - 1]) else 1), D[i - 1][j] + 1, D[i][j - 1] + 1)
    ops, i, j = [], n, m
    while i > 0 or j > 0:
        if i > 0 and j > 0 and same(T[i - 1], R[j - 1]) and D[i][j] == D[i - 1][j - 1]:
            ops.append(("match", T[i - 1][1], R[j - 1][1])); i -= 1; j -= 1
        elif i > 0 and j > 0 and D[i][j] == D[i - 1][j - 1] + 1:
            ops.append(("substitution", T[i - 1][1], R[j - 1][1])); i -= 1; j -= 1
        elif i > 0 and D[i][j] == D[i - 1][j] + 1:
            ops.append(("missing", T[i - 1][1], None)); i -= 1
        else:
            ops.append(("extra", None, R[j - 1][1])); j -= 1
    ops.reverse()
    matched = sum(1 for o in ops if o[0] == "match")
    return dict(target_words=n, matched=matched, word_match=round(100 * matched / n) if n else 0,
                substitutions=[(a, b) for k, a, b in ops if k == "substitution"],
                missing=[a for k, a, b in ops if k == "missing"], extra=[b for k, a, b in ops if k == "extra"], ops=ops)

def production_word_accuracy(target, heard):
    """Exact port of chapter-app.js wordAccuracy() — the score A1·01 shows today."""
    norm = lambda s: [w for w in re.split(r"\s+", re.sub(r"[.,!?]", "", s.lower())) if w]
    t, h = norm(target), set(norm(heard))
    return round(100 * sum(1 for w in t if w in h) / len(t)) if t else 0

def wer(reference, hypothesis):
    """Word error rate of a transcript against what was actually spoken (same normalisation)."""
    a = align(reference, hypothesis)
    return round(100 * (len(a["substitutions"]) + len(a["missing"]) + len(a["extra"])) / max(1, a["target_words"]))

if __name__ == "__main__":
    r = align("Ich möchte einen Kaffee.", "Ich möchte ein Kaffee.")
    for k, a, b in r["ops"]: print(("✓ " if k == "match" else "✗ ") + (a or "") + ("" if k == "match" else f"  [{k}: heard {b!r}]"))
    print("Word Match:", r["matched"], "/", r["target_words"], "=", r["word_match"], "%")
    print(align("B-U-C-H. Buch.", "BUCH Buch")["word_match"], align("B-U-C-H. Buch.", "be u ce ha Buch")["word_match"], align("Die Straße ist lang.", "Die Strasse ist lang")["word_match"], align("Ich bin fünfundzwanzig Jahre alt.", "Ich bin 25 Jahre alt")["word_match"])
