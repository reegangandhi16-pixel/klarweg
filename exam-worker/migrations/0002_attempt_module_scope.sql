-- klarweg-exam 0002: single-module attempts (ENGINE §2 simulation_module; EXAM_MODULE_ONLY).
-- NULL = every module of the assigned form (all existing attempts); otherwise the one module the attempt contains.
-- Additive only: no existing row changes meaning.
ALTER TABLE attempts ADD COLUMN module_scope TEXT CHECK (module_scope IS NULL OR module_scope IN ('lesen','hoeren','schreiben','sprechen'));
