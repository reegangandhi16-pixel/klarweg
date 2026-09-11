# Klarweg — Saved Words: Backend Handoff Spec

> The shipped pages persist saved words **on-device** (`localStorage`, see
> `kw-account.js`), which is the Klarweg-native, privacy-first model and needs
> no server. This document specifies the **real backend** to wire when Klarweg
> adds authenticated accounts and cross-device sync. The on-device `SavedWord`
> shape already matches the `saved_words` row below, so the swap is mechanical:
> replace the `localStorage` reads/writes in `KW_Account.Saved` with `fetch()`
> calls to the endpoints here.

---

## 1. Database schema (PostgreSQL)

```sql
-- Users come from your auth provider (Clerk / Auth0 / Supabase Auth / custom).
create table users (
  id           uuid primary key default gen_random_uuid(),
  email        text unique not null,
  display_name text not null default 'Learner',
  created_at   timestamptz not null default now()
);

-- One row per (user, word). Ownership is the user_id FK.
create table saved_words (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references users(id) on delete cascade,
  de          text not null,                 -- German word, with article for nouns
  en          text not null,                 -- English translation
  word_type   text not null,                 -- noun | verb | adjective | adverb | phrase
  level       text not null check (level in ('A1','A2','B1','B2','C1','C2')),
  gender      text check (gender in ('m','f','n')),  -- nullable (non-nouns)
  ipa         text,                          -- nullable
  source_ref  text,                          -- e.g. 'a1/ch3/vocab' — where it was saved
  created_at  timestamptz not null default now(),

  -- future-ready: spaced repetition / flashcards / review
  srs_box      smallint not null default 0,  -- Leitner box 0..5
  srs_due_at   timestamptz,                  -- next review time
  srs_reviews  integer not null default 0,

  unique (user_id, de, level)                -- a user can't save the same word twice
);

create index saved_words_user_idx       on saved_words (user_id);
create index saved_words_user_level_idx on saved_words (user_id, level);
create index saved_words_due_idx        on saved_words (user_id, srs_due_at);
```

---

## 2. REST API

All routes require an authenticated session. The server derives `user_id` from
the session/JWT — **never** trust a `user_id` from the request body. Every query
is scoped by `where user_id = :session_user` (ownership check).

| Method | Path | Purpose |
|---|---|---|
| `GET`    | `/api/saved-words` | List the current user's saved words. Query: `?level=A1&type=noun&q=haus&sort=new\|old\|az&page=1`. |
| `POST`   | `/api/saved-words` | Save a word. Body: `{ de, en, type, level, gender?, ipa?, sourceRef? }`. Idempotent on `(user, de, level)` → returns existing row if present. |
| `DELETE` | `/api/saved-words/:id` | Remove one. 404 if the row's `user_id` ≠ session user (never reveal other users' rows). |
| `GET`    | `/api/saved-words/counts` | `{ A1: 42, A2: 31, B1: 28, B2: 23, C1: 0, C2: 0, total: 124 }` for the level cards. |
| `GET`    | `/api/saved-words/review` | Future: due cards for review (`where srs_due_at <= now()` ordered by box). |
| `PATCH`  | `/api/saved-words/:id/review` | Future: record a review result `{ correct: bool }` → advance/reset Leitner box + set `srs_due_at`. |

### Response shape (matches the front-end `SavedWord`)
```json
{
  "id": "9b1c…",
  "de": "der Mann",
  "en": "man",
  "type": "noun",
  "level": "A1",
  "gender": "m",
  "ipa": "/man/",
  "savedAt": 1718000000000,
  "srs": { "box": 0, "due": null, "reviews": 0 }
}
```

### Ownership / authorization checklist
- [ ] `user_id` is taken from the session, not the request.
- [ ] Every `SELECT/UPDATE/DELETE` includes `where user_id = :session_user`.
- [ ] `DELETE`/`PATCH` on a non-owned `id` returns **404** (not 403 — don't leak existence).
- [ ] Rate-limit `POST` (e.g. 60/min) to prevent bulk-save abuse.
- [ ] `unique (user_id, de, level)` enforces no duplicates at the DB level.

---

## 3. Front-end swap (the only code change on shipped pages)

`kw-account.js` is the single seam. Replace the `localStorage` body of
`KW_Account.Saved` with thin `fetch()` wrappers — the page code
(`saved-words.html`, chapter `saveBtn`) calls the same method names and needs
**no** other change:

```js
KW_Account.Saved = {
  all:    () => fetch('/api/saved-words').then(r => r.json()),
  add:    (w) => fetch('/api/saved-words', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(w) }),
  remove: (id) => fetch('/api/saved-words/' + id, { method:'DELETE' }),
  counts: () => fetch('/api/saved-words/counts').then(r => r.json())
};
```

(The page's render functions become `async`; everything else is unchanged.)

---

## 4. Future-ready (already accounted for)
- **Flashcards / review mode / quizzes** read from `saved_words` filtered by
  `srs_due_at`. The `srs_*` columns + the front-end `srs` object are already in
  place — no migration needed to launch them.
- **Spaced repetition**: a Leitner schedule on `srs_box` (e.g. boxes due after
  0/1/3/7/16/35 days) driven by `PATCH …/review`.
