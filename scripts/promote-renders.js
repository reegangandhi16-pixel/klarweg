/* Klarweg — render-approval promotion step.
   Reads the audit layer + audio-manifests/approved-renders.json and writes the
   optional `renderDe` field onto production manifest entries.

   FAIL CLOSED. A row is promoted only when an ENABLED category approval matches
   it, or it is listed explicitly in approved-renders.rows[]. The presence of a
   renderText in the audit layer authorises nothing on its own — that separation
   is the entire point of this step.

   NEVER modified here: de, contentHash, id, audioFilename, voice, speakingRate.
   Identity stays bound to the displayed text; only the synthesized string moves.

   Run with --dry-run (default) to report; --write to apply. */
(function (root) {
  'use strict';

  var HARD_BLOCKED_CLASSES = ['C', 'D', 'E'];
  var BLOCKED_KINDS = ['task-prompt'];

  /* Letters and digits only — the equivalence guard. A promoted renderDe must
     say the same WORDS as the row's lookup text; it may differ only in
     punctuation, spacing and case. This is what stops a mis-keyed approval
     from silently swapping one sentence for another. */
  function canon(s) {
    return String(s == null ? '' : s).toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  }

  function isBlockedRow(row, policy) {
    if (row.kind && BLOCKED_KINDS.indexOf(row.kind) !== -1) return 'blocked kind: ' + row.kind;
    var named = (policy.hardBlocked && policy.hardBlocked.namedRows) || [];
    for (var i = 0; i < named.length; i++) {
      var term = named[i].split(' — ')[0];
      if (row.text === term || row.de === term) return 'named hard-block: ' + term;
    }
    return null;
  }

  function enabledCategories(policy) {
    return (policy.categoryApprovals || []).filter(function (c) {
      return c.enabled === true && HARD_BLOCKED_CLASSES.indexOf(c.class) === -1;
    });
  }

  /* Decide one audit row. Returns {promote:false, reason} or
     {promote:true, renderDe, via, provenance}. */
  function decide(row, policy) {
    var blocked = isBlockedRow(row, policy);
    if (blocked) return { promote: false, reason: blocked };

    var explicit = (policy.rows || []).find(function (r) { return r.assetId === row.assetId; });
    if (explicit) {
      if (HARD_BLOCKED_CLASSES.indexOf(explicit.provenance) !== -1)
        return { promote: false, reason: 'explicit row has blocked provenance ' + explicit.provenance };
      if (!explicit.approvedOn) return { promote: false, reason: 'explicit row not signed off (approvedOn null)' };
      return { promote: true, renderDe: explicit.renderDe, via: 'rows[]', provenance: explicit.provenance };
    }

    var rt = row.renderText;
    if (!rt || rt === row.text) return { promote: false, reason: 'no override needed' };

    var src = String(row.renderTextSource || '');
    var cat = enabledCategories(policy).find(function (c) {
      if (c.id === 'A-manifest-punctuation-recovery') return /authored manifest \(punctuated\)/.test(src);
      if (c.id === 'A-authored-chapter-field') return /^A · authored chapter-data field/.test(src);
      return false;
    });
    if (!cat) return { promote: false, reason: 'no enabled approval matches provenance: ' + (src || '(none)') };

    // Equivalence guard — refuse anything that changes the words themselves.
    if (canon(rt) !== canon(row.text))
      return { promote: false, reason: 'refused: renderDe is not punctuation-equivalent to the lookup text' };

    return { promote: true, renderDe: rt, via: cat.id, provenance: cat.class };
  }

  function run(auditRows, policy) {
    var promoted = [], blocked = [];
    (auditRows || []).forEach(function (row) {
      var d = decide(row, policy);
      if (d.promote) promoted.push({ assetId: row.assetId, renderDe: d.renderDe, via: d.via, provenance: d.provenance, text: row.text });
      else blocked.push({ assetId: row.assetId, reason: d.reason });
    });
    return { promoted: promoted, blocked: blocked };
  }

  root.KW_PROMOTE_RENDERS = { decide: decide, run: run, canon: canon, HARD_BLOCKED_CLASSES: HARD_BLOCKED_CLASSES, BLOCKED_KINDS: BLOCKED_KINDS };
})(typeof globalThis !== 'undefined' ? globalThis : this);
