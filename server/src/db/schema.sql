-- =============================================
-- Sewa Jaket Dieng - Database Schema
-- MySQL 8.0
-- =============================================

CREATE DATABASE IF NOT EXISTS sewa_jaket_dieng
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE sewa_jaket_dieng;

-- ---------------------------------------------
-- Table: users
-- Stores renter/customer information
-- ---------------------------------------------
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


-- ---------------------------------------------
-- Table: items
-- Catalog of rental items (jackets, etc.)
-- ---------------------------------------------
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


-- ---------------------------------------------
-- Table: reservations
-- Booking records with date ranges
-- ---------------------------------------------
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

  -- Foreign Keys
  CONSTRAINT fk_reservations_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,

  CONSTRAINT fk_reservations_item
    FOREIGN KEY (item_id) REFERENCES items(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,

  -- Indexes for availability queries
  INDEX idx_reservations_dates (item_id, start_date, end_date),
  INDEX idx_reservations_status (status),
  INDEX idx_reservations_user (user_id),

  -- Ensure end_date is after start_date
  CONSTRAINT chk_dates CHECK (end_date > start_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ---------------------------------------------
-- Table: transactions
-- Payment records linked to Midtrans
-- ---------------------------------------------
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

  -- Foreign Keys
  CONSTRAINT fk_transactions_reservation
    FOREIGN KEY (reservation_id) REFERENCES reservations(id)
    ON DELETE RESTRICT ON UPDATE CASCADE,

  -- Indexes
  INDEX idx_transactions_order (midtrans_order_id),
  INDEX idx_transactions_reservation (reservation_id),
  INDEX idx_transactions_status (transaction_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
