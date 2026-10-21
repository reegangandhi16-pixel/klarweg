-- klarweg-exam 0005: auditable exam-access management (OD-18). Records why a grant exists and who revoked it, and why.
-- Additive only: existing grants keep their meaning (NULL = not recorded, e.g. grants inserted by hand before this).
ALTER TABLE exam_access ADD COLUMN reason TEXT;
ALTER TABLE exam_access ADD COLUMN revoked_by TEXT;
ALTER TABLE exam_access ADD COLUMN revoke_reason TEXT;
