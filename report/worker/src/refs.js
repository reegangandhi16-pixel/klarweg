/* Server-side section-ref validation.

   The client sends ONE location field: section_ref. Everything else about
   where the report came from (level, chapter, section, page path) is read
   from this table, so a forged payload cannot invent a location or poison
   the admin filters. */

const REF_SHAPE = /^klarweg:(a1|a2|b1|b2|c1|c2)\/[a-z0-9-]{1,64}\/[a-z0-9_-]{1,32}$/;

export function looksLikeRef(ref) {
  return typeof ref === 'string' && ref.length <= 128 && REF_SHAPE.test(ref);
}

/** Returns the canonical row, or null if the ref is not a real Klarweg section. */
export async function resolveRef(env, ref) {
  if (!looksLikeRef(ref)) return null;
  const row = await env.DB
    .prepare('SELECT ref, level, chapter_id, chapter_no, chapter_title, section_id, section_label, page_path FROM section_refs WHERE ref = ?')
    .bind(ref).first();
  return row || null;
}
