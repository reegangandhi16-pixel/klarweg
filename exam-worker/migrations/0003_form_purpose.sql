-- klarweg-exam 0003: store each form's declared purpose (synthetic forms: 'practice' | 'system_test'; NULL otherwise or
-- for rows imported before this migration). EXAM_RELEASE_FORMS only accepts synthetic forms whose purpose is 'practice',
-- so a row without a recorded purpose is never assignable from a release set until its registry is re-imported.
-- Additive only.
ALTER TABLE forms ADD COLUMN purpose TEXT CHECK (purpose IS NULL OR purpose IN ('practice','system_test'));
