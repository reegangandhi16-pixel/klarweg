#!/usr/bin/env node
/* RECORDING PLAN for the practice library (OD-14 pilot preparation). Reads the server-only scripts (script_de) of every
   audio asset and splits them into spoken lines per voice slot, so a cast can be assigned and the synthesis volume
   costed once the owner has approved a vendor, licence and voices. It generates nothing and calls no service.

   Rules: a multi-line script is a dialogue of "Speaker: text" lines. A one-line script "Label: text" is spoken by a
   known role when the label is one (Partner, Prüferin, …); otherwise the label is a stage direction (e.g.
   "Wetterbericht:") and the text is spoken by the asset's single voice slot. A script that describes a speech instead of
   containing it (e.g. "Partnerin präsentiert das Thema …: Sie kauft …") is reported as not recordable as written.

   Usage: node exam-content/tools/audio-plan.mjs [p3] [--json] */
import { PRACTICE_FORMS } from './practice-forms.mjs';

const ROLES = /^(Moderator|Moderatorin|Partner|Partnerin|Prüfer|Prüferin|(Herr|Frau) \p{Lu}[\p{L}-]+)$/u;
const DESCRIBES = /^(Partner|Partnerin) präsentiert\b/;

function slotOf(assetId) {
  const m = assetId.match(/-(h1-ex|h1-t\d|h2-instr|h2|h3|h4|sp1-partner-\d|sp3-partner-talk(?:-t2)?|sp3-examiner-q(?:-t2)?)$/);
  return m ? m[1] : null;
}

export function planForm(form) {
  const assets = JSON.parse(form.files['assets.json']).filter((a) => a.kind === 'audio' && typeof a.script_de === 'string');
  const segments = [], issues = [];
  for (const a of assets) {
    const slot = slotOf(a.id);
    if (!slot) { issues.push(`${a.id}: unknown audio slot`); continue; }
    const lines = a.script_de.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length > 1) {   // dialogue / discussion
      for (const l of lines) {
        const m = l.match(/^([^:]{1,40}):\s+(.+)$/);
        if (!m) { issues.push(`${a.id}: line without a speaker: ${l.slice(0, 50)}`); continue; }
        segments.push({ asset_id: a.id, slot, speaker: m[1], text: m[2], chars: m[2].length });
      }
      continue;
    }
    const m = lines[0].match(/^([^:]{1,80}):\s+(.+)$/);
    if (DESCRIBES.test(lines[0])) {
      issues.push(`${a.id}: describes a presentation instead of containing it, not recordable as written`);
      segments.push({ asset_id: a.id, slot, speaker: lines[0].startsWith('Partnerin') ? 'Partnerin' : 'Partner', text: lines[0], chars: lines[0].length, recordable: false });
    } else if (m && ROLES.test(m[1])) segments.push({ asset_id: a.id, slot, speaker: m[1], text: m[2], chars: m[2].length });
    else if (m) segments.push({ asset_id: a.id, slot, speaker: `Stimme ${slot}`, stage_direction: m[1], text: m[2], chars: m[2].length });
    else segments.push({ asset_id: a.id, slot, speaker: slot === 'h2-instr' ? 'Ansagestimme' : `Stimme ${slot}`, text: lines[0], chars: lines[0].length });
  }
  // Hören Teil 3 is a dialogue of two people, Teil 4 a discussion of three; the speaker names must match the options
  const items = JSON.parse(form.files['items.json']);
  const speakersIn = (slot) => [...new Set(segments.filter((s) => s.slot === slot).map((s) => s.speaker))];
  if (speakersIn('h3').length !== 2) issues.push(`Hören Teil 3: ${speakersIn('h3').length} speakers, expected 2`);
  const h4Options = (items.find((i) => i.interaction === 'speaker_assignment') || { options: [] }).options.map((o) => o.label);
  if (JSON.stringify(speakersIn('h4').sort()) !== JSON.stringify([...h4Options].sort())) issues.push(`Hören Teil 4: speakers ${speakersIn('h4').join(', ')} ≠ answer options ${h4Options.join(', ')}`);
  const voiceSlots = [...new Set(segments.map((s) => `${s.slot.startsWith('h3') || s.slot.startsWith('h4') ? s.slot : s.slot.replace(/-(\d|t2)$/, '')}|${s.speaker}`))];
  return {
    form: form.name, form_id: form.form_id, segments, issues,
    voice_slots: voiceSlots.length,
    chars: { hoeren: segments.filter((s) => s.slot.startsWith('h')).reduce((n, s) => n + s.chars, 0), sprechen: segments.filter((s) => s.slot.startsWith('sp')).reduce((n, s) => n + s.chars, 0) }
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const pick = process.argv.slice(2).find((a) => !a.startsWith('--'));
  const plans = PRACTICE_FORMS.filter((f) => !pick || f.name.toLowerCase() === pick.toLowerCase()).map(planForm);
  if (process.argv.includes('--json')) { console.log(JSON.stringify(plans, null, 2)); process.exit(0); }
  for (const p of plans) {
    console.log(`${p.form}  voice slots ${p.voice_slots}  chars Hören ${p.chars.hoeren}  Sprechen ${p.chars.sprechen}`);
    for (const i of p.issues) console.log(`  ISSUE ${i}`);
  }
  const total = plans.reduce((n, p) => n + p.chars.hoeren + p.chars.sprechen, 0);
  console.log(`TOTAL spoken characters: ${total} (stage directions excluded)`);
}
