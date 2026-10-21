-- klarweg-exam 0004: single-part practice attempts (ENGINE §2 practice_part; EXAM_PRACTICE_PARTS).
-- NULL = every part of the attempt's module(s) (all existing attempts). Otherwise the one part of module_scope that the
-- attempt contains. Additive only: no existing row changes meaning. Apply BEFORE deploying a Worker that creates part
-- attempts (until then no part attempt can be created; nothing else reads the column).
ALTER TABLE attempts ADD COLUMN part_scope INTEGER CHECK (part_scope IS NULL OR (part_scope BETWEEN 1 AND 9 AND module_scope IS NOT NULL));
