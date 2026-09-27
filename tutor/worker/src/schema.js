/* ============================================================
   klarweg-tutor · STRICT OUTPUT SCHEMAS + VALIDATOR
   ------------------------------------------------------------
   Every model reply is parsed as JSON and validated here before
   anything reaches a learner. The same JSON Schema objects are
   passed to providers that support constrained decoding, but the
   validator below is the real guarantee — a provider's structured
   mode is treated as a convenience, never as trust.

   Rules enforced beyond shape:
     · strings are trimmed, HTML-stripped and length-capped
     · array minItems/maxItems (minItems rejects, maxItems truncates)
     · enums are closed (the grammar-role list is Klarweg's own
       role vocabulary; the CLIENT maps a role to its colour —
       the model never outputs a colour or markup)
     · unknown keys are dropped
   ============================================================ */

/* Klarweg grammar roles (CLAUDE.md "Spine 5" + cases + modifiers)
   plus the non-colour error categories a correction can carry. */
export const ROLES = [
  'subject', 'verb', 'object', 'time', 'place',
  'akkusativ', 'dativ', 'genitiv',
  'modalverb', 'article', 'preposition', 'negation', 'adjective', 'adverb', 'question',
  'word_order', 'conjunction', 'pronoun', 'spelling', 'capitalisation', 'vocabulary', 'register', 'other',
];

const str = (max) => ({ type: 'string', maxLength: max });

const CORRECTION = {
  type: 'object',
  properties: {
    wrong: str(160),
    right: str(160),
    role: { type: 'string', enum: ROLES },
    reason: str(260),
    severity: { type: 'string', enum: ['error', 'style'] },
  },
  required: ['wrong', 'right', 'role', 'reason', 'severity'],
  additionalProperties: false,
};

export const SCHEMAS = {
  /* Writing, speaking transcripts, exam writing. */
  feedback: {
    type: 'object',
    properties: {
      summary: str(240),
      corrections: { type: 'array', maxItems: 8, items: CORRECTION },
      focus: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['applied', 'partly', 'not_used', 'not_applicable'] },
          note: str(240),
        },
        required: ['status', 'note'],
        additionalProperties: false,
      },
      improved: str(1200),
      rubric: {
        type: 'array',
        maxItems: 6,
        items: {
          type: 'object',
          properties: {
            criterion: str(80),
            band: { type: 'string', enum: ['strong', 'adequate', 'weak'] },
            note: str(240),
          },
          required: ['criterion', 'band', 'note'],
          additionalProperties: false,
        },
      },
      hindi_bridge: str(300),
      next_action: str(200),
    },
    required: ['summary', 'corrections', 'focus', 'improved', 'rubric', 'hindi_bridge', 'next_action'],
    additionalProperties: false,
  },

  /* Free-text exercise check (hint ladder / "why is my answer wrong"). */
  exercise: {
    type: 'object',
    properties: {
      verdict: { type: 'string', enum: ['incorrect', 'acceptable_variant'] },
      rule_hint: str(240),
      focus_fragment: str(120),
      explanation: str(360),
      hindi_bridge: str(300),
    },
    required: ['verdict', 'rule_hint', 'focus_fragment', 'explanation', 'hindi_bridge'],
    additionalProperties: false,
  },

  /* "Give me one more like this" — a generated error-correction item. */
  practice: {
    type: 'object',
    properties: {
      wrong: str(160),
      right: str(160),
      explain: str(240),
    },
    required: ['wrong', 'right', 'explain'],
    additionalProperties: false,
  },

  /* Grammar "Explain differently". */
  explain: {
    type: 'object',
    properties: {
      explanation: str(700),
      // Every explain mode asks for examples; an empty array means the model
      // folded them into "explanation", where the UI renders them as plain
      // prose. Rejecting it triggers the one bounded retry.
      examples: {
        type: 'array',
        minItems: 1,
        maxItems: 3,
        items: {
          type: 'object',
          properties: { de: str(160), en: str(200) },
          required: ['de', 'en'],
          additionalProperties: false,
        },
      },
      hindi_bridge: str(300),
    },
    required: ['explanation', 'examples', 'hindi_bridge'],
    additionalProperties: false,
  },

  /* Post-quiz review. */
  quiz_review: {
    type: 'object',
    properties: {
      pattern: str(300),
      items: {
        type: 'array',
        maxItems: 12,
        items: {
          type: 'object',
          properties: { i: { type: 'integer' }, why: str(300) },
          required: ['i', 'why'],
          additionalProperties: false,
        },
      },
      review: {
        type: 'array',
        maxItems: 3,
        items: {
          type: 'object',
          properties: { section: str(40), reason: str(200) },
          required: ['section', 'reason'],
          additionalProperties: false,
        },
      },
      next_action: str(200),
    },
    required: ['pattern', 'items', 'review', 'next_action'],
    additionalProperties: false,
  },

  /* Homepage chat: only what the browser renders. Examples are optional
     (not every question needs one), but when present they live here and
     never inside "answer". */
  chat: {
    type: 'object',
    properties: {
      answer: str(1500),
      examples: {
        type: 'array',
        maxItems: 5,
        items: {
          type: 'object',
          properties: { de: str(160), en: str(200) },
          required: ['de', 'en'],
          additionalProperties: false,
        },
      },
      follow_ups: { type: 'array', maxItems: 3, items: str(120) },
    },
    required: ['answer', 'examples', 'follow_ups'],
    additionalProperties: false,
  },
};

/* ---------- validation ---------- */

export class SchemaError extends Error {
  constructor(path, msg) { super(`${path}: ${msg}`); this.name = 'SchemaError'; }
}

/* Plain text only: models occasionally emit markup or markdown
   emphasis even when told not to. The client renders with
   textContent, so this is defence in depth, not the only guard. */
export function cleanText(s) {
  return String(s)
    .replace(/<[^>]*>/g, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/`+/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

export function validate(schema, value, path = '$') {
  switch (schema.type) {
    case 'object': {
      if (!value || typeof value !== 'object' || Array.isArray(value)) throw new SchemaError(path, 'expected object');
      const out = {};
      for (const key of schema.required || []) {
        if (!(key in value)) throw new SchemaError(path, `missing "${key}"`);
      }
      for (const [key, sub] of Object.entries(schema.properties || {})) {
        if (key in value) out[key] = validate(sub, value[key], `${path}.${key}`);
      }
      return out;
    }
    case 'array': {
      if (!Array.isArray(value)) throw new SchemaError(path, 'expected array');
      if (schema.minItems != null && value.length < schema.minItems) throw new SchemaError(path, `expected at least ${schema.minItems} item(s)`);
      const items = schema.maxItems != null ? value.slice(0, schema.maxItems) : value;
      return items.map((v, i) => validate(schema.items, v, `${path}[${i}]`));
    }
    case 'string': {
      if (typeof value !== 'string') throw new SchemaError(path, 'expected string');
      let s = cleanText(value);
      if (schema.enum) {
        if (!schema.enum.includes(s)) throw new SchemaError(path, `"${s}" not in enum`);
        return s;
      }
      if (schema.maxLength && s.length > schema.maxLength) s = s.slice(0, schema.maxLength - 1).trimEnd() + '…';
      return s;
    }
    case 'integer': {
      if (!Number.isInteger(value)) throw new SchemaError(path, 'expected integer');
      return value;
    }
    default:
      throw new SchemaError(path, `unsupported schema type ${schema.type}`);
  }
}

/* Models sometimes wrap JSON in prose or a code fence. Take the
   outermost {...} block; anything else is a hard failure. */
export function parseModelJson(text) {
  if (typeof text !== 'string') throw new SchemaError('$', 'no text');
  let t = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start === -1 || end <= start) throw new SchemaError('$', 'no JSON object in reply');
  try {
    return JSON.parse(t.slice(start, end + 1));
  } catch (e) {
    throw new SchemaError('$', 'invalid JSON: ' + e.message);
  }
}
