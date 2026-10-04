/**
 * Script untuk import schema dan seed data ke Aiven MySQL
 * Jalankan: node server/scripts/importDb.js
 */

const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const connection_config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false },
  multipleStatements: true,
};

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) DEFAULT NULL,
  ktp_url VARCHAR(500) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_users_phone (phone),
  INDEX idx_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  category VARCHAR(50) NOT NULL DEFAULT 'Jaket Gunung',
  size VARCHAR(10) NOT NULL DEFAULT 'L',
  image_url VARCHAR(500) DEFAULT NULL,
  description TEXT DEFAULT NULL,
  price_per_day DECIMAL(10, 2) NOT NULL,
  stock_total INT NOT NULL DEFAULT 1,
  status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_items_category (category),
  INDEX idx_items_status (status),
  INDEX idx_items_size (size)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  item_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  total_price DECIMAL(12, 2) NOT NULL,
  status ENUM('pending', 'confirmed', 'active', 'completed', 'cancelled') NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_reservations_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_reservations_item FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  INDEX idx_reservations_dates (item_id, start_date, end_date),
  INDEX idx_reservations_status (status),
  INDEX idx_reservations_user (user_id),
  CONSTRAINT chk_dates CHECK (end_date > start_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reservation_id INT NOT NULL,
  midtrans_order_id VARCHAR(100) NOT NULL UNIQUE,
  payment_type VARCHAR(50) DEFAULT NULL,
  transaction_status VARCHAR(50) NOT NULL DEFAULT 'pending',
  gross_amount DECIMAL(12, 2) NOT NULL,
  midtrans_response JSON DEFAULT NULL,
  snap_token VARCHAR(255) DEFAULT NULL,
  snap_redirect_url VARCHAR(500) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_transactions_reservation FOREIGN KEY (reservation_id) REFERENCES reservations(id) ON DELETE RESTRICT ON UPDATE CASCADE,
  INDEX idx_transactions_order (midtrans_order_id),
  INDEX idx_transactions_reservation (reservation_id),
  INDEX idx_transactions_status (transaction_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

const seed = `
INSERT IGNORE INTO items (id, name, category, size, image_url, description, price_per_day, stock_total, status) VALUES
(1, 'Summit Pro Windbreaker', 'Jaket Gunung', 'M', '/images/products/jacket-1.jpg', 'Jaket windbreaker premium dengan lapisan tahan angin dan hujan ringan. Cocok untuk pendakian Dieng di musim kemarau. Material ringan, mudah dilipat.', 35000.00, 5, 'active'),
(2, 'Arctic Shield Parka', 'Jaket Gunung', 'L', '/images/products/jacket-2.jpg', 'Parka tebal dengan insulasi sintetis untuk suhu ekstrem. Dilengkapi hoodie yang bisa dilepas dan banyak kantong. Ideal untuk camping malam di Dieng.', 50000.00, 3, 'active'),
(3, 'Glacier Down Jacket', 'Jaket Gunung', 'XL', '/images/products/jacket-3.jpg', 'Jaket down berkualitas tinggi dengan fill power 700. Sangat hangat namun tetap ringan. Pilihan terbaik untuk suhu di bawah 5°C.', 75000.00, 2, 'active'),
(4, 'Trail Runner Shell', 'Jaket Gunung', 'S', '/images/products/jacket-4.jpg', 'Jaket shell tipis dan breathable untuk aktivitas high-intensity. Tahan percikan air dan angin kencang. Berat hanya 200 gram.', 25000.00, 8, 'active'),
(5, 'Basecamp Fleece', 'Jaket Gunung', 'M', '/images/products/jacket-5.jpg', 'Fleece jacket yang nyaman sebagai mid-layer atau outer layer di cuaca sejuk. Full-zip design dengan dua kantong hangat.', 30000.00, 6, 'active'),
(6, 'Everest Expedition Coat', 'Jaket Gunung', 'L', '/images/products/jacket-6.jpg', 'Coat ekspedisi heavy-duty dengan triple insulation. Waterproof dan windproof. Cocok untuk kondisi cuaca paling ekstrem di puncak Dieng.', 85000.00, 2, 'active'),
(7, 'Ridge Softshell', 'Jaket Gunung', 'M', '/images/products/jacket-7.jpg', 'Softshell jacket yang fleksibel dan stretchy. Water-resistant dengan ventilasi yang baik. Perfect untuk hiking aktif.', 40000.00, 4, 'active'),
(8, 'Peak Thermal Hoodie', 'Jaket Gunung', 'XL', '/images/products/jacket-8.jpg', 'Hoodie thermal dengan teknologi heat-trap lining. Casual style yang bisa dipakai sehari-hari tapi tetap hangat di gunung.', 35000.00, 5, 'active');
`;

async function main() {
  let conn;
  try {
    console.log('Connecting to Aiven MySQL...');
    console.log(`Host: ${process.env.DB_HOST}`);
    conn = await mysql.createConnection(connection_config);
    console.log('✅ Connected!\n');

    console.log('Creating tables...');
    await conn.query(schema);
    console.log('✅ Tables created!\n');

    console.log('Inserting seed data...');
    await conn.query(seed);
    console.log('✅ Seed data inserted!\n');

    // Verify
    const [rows] = await conn.query('SELECT COUNT(*) as count FROM items');
    console.log(`✅ Total items in database: ${rows[0].count}`);

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    if (conn) await conn.end();
  }
}

main();
