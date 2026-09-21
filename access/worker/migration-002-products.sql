ALTER TABLE orders ADD COLUMN product_id TEXT NOT NULL DEFAULT 'UNKNOWN';

CREATE INDEX IF NOT EXISTS idx_orders_product_id
  ON orders(product_id);