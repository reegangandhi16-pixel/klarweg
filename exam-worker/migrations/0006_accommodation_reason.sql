-- klarweg-exam 0006: auditable accommodations (OD-41: admin-granted only). Records why an accommodation exists.
-- Additive only. Removing an accommodation deletes its row; the audit log keeps the history.
ALTER TABLE accommodations ADD COLUMN reason TEXT;
