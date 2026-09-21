CREATE TABLE IF NOT EXISTS user_entitlements (
  user_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  source_order_id TEXT,
  granted_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, product_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_user_entitlements_user_id
  ON user_entitlements(user_id);
