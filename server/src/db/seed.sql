-- =============================================
-- Sewa Jaket Dieng - Seed Data
-- Sample items for development & testing
-- =============================================

USE sewa_jaket_dieng;

-- ---------------------------------------------
-- Seed: items (Rental Catalog)
-- ---------------------------------------------
INSERT INTO items (name, category, size, image_url, description, price_per_day, stock_total, status) VALUES

-- Jaket Gunung
('Summit Pro Windbreaker', 'Jaket Gunung', 'M', '/images/products/jacket-1.jpg',
 'Jaket windbreaker premium dengan lapisan tahan angin dan hujan ringan. Cocok untuk pendakian Dieng di musim kemarau. Material ringan, mudah dilipat.', 
 35000.00, 5, 'active'),

('Arctic Shield Parka', 'Jaket Gunung', 'L', '/images/products/jacket-2.jpg',
 'Parka tebal dengan insulasi sintetis untuk suhu ekstrem. Dilengkapi hoodie yang bisa dilepas dan banyak kantong. Ideal untuk camping malam di Dieng.', 
 50000.00, 3, 'active'),

('Glacier Down Jacket', 'Jaket Gunung', 'XL', '/images/products/jacket-3.jpg',
 'Jaket down berkualitas tinggi dengan fill power 700. Sangat hangat namun tetap ringan. Pilihan terbaik untuk suhu di bawah 5°C.', 
 75000.00, 2, 'active'),

('Trail Runner Shell', 'Jaket Gunung', 'S', '/images/products/jacket-4.jpg',
 'Jaket shell tipis dan breathable untuk aktivitas high-intensity. Tahan percikan air dan angin kencang. Berat hanya 200 gram.', 
 25000.00, 8, 'active'),

('Basecamp Fleece', 'Jaket Gunung', 'M', '/images/products/jacket-5.jpg',
 'Fleece jacket yang nyaman sebagai mid-layer atau outer layer di cuaca sejuk. Full-zip design dengan dua kantong hangat.', 
 30000.00, 6, 'active'),

('Everest Expedition Coat', 'Jaket Gunung', 'L', '/images/products/jacket-6.jpg',
 'Coat ekspedisi heavy-duty dengan triple insulation. Waterproof dan windproof. Cocok untuk kondisi cuaca paling ekstrem di puncak Dieng.', 
 85000.00, 2, 'active'),

('Ridge Softshell', 'Jaket Gunung', 'M', '/images/products/jacket-7.jpg',
 'Softshell jacket yang fleksibel dan stretchy. Water-resistant dengan ventilasi yang baik. Perfect untuk hiking aktif.', 
 40000.00, 4, 'active'),

('Peak Thermal Hoodie', 'Jaket Gunung', 'XL', '/images/products/jacket-8.jpg',
 'Hoodie thermal dengan teknologi heat-trap lining. Casual style yang bisa dipakai sehari-hari tapi tetap hangat di gunung.', 
 35000.00, 5, 'active'),

-- Sleeping Bag
('Dreamscape Mummy Bag -5°C', 'Sleeping Bag', 'ALL', '/images/products/sleeping-1.jpg',
 'Sleeping bag mummy shape rated untuk suhu -5°C. Bahan luar ripstop nylon, inner lining yang lembut. Dilengkapi compression sack.', 
 40000.00, 6, 'active'),

('Cozy Camp Envelope Bag 5°C', 'Sleeping Bag', 'ALL', '/images/products/sleeping-2.jpg',
 'Sleeping bag envelope style yang roomy dan nyaman. Comfort temperature 5°C. Bisa dibuka penuh jadi selimut. Cocok untuk camping keluarga.', 
 30000.00, 8, 'active'),

-- Jas Hujan
('Stormguard Rain Poncho', 'Jas Hujan', 'ALL', '/images/products/rain-1.jpg',
 'Poncho hujan besar yang bisa menutupi hingga tas ransel. Material PVC tebal anti-tembus. Ringan dan mudah dilipat.', 
 15000.00, 15, 'active'),

('Typhoon Rain Suit', 'Jas Hujan', 'L', '/images/products/rain-2.jpg',
 'Set jas hujan atas-bawah dengan sealed seams. Reflective strip untuk keamanan malam hari. Waterproof rating 10.000mm.', 
 25000.00, 10, 'active'),

-- Aksesoris
('Trekker Headlamp 300lm', 'Aksesoris', 'ALL', '/images/products/acc-1.jpg',
 'Headlamp LED 300 lumen dengan 3 mode cahaya (high, low, strobe). Tahan air IPX4. Baterai tahan hingga 30 jam.', 
 10000.00, 20, 'active'),

('Mountain Wool Beanie', 'Aksesoris', 'ALL', '/images/products/acc-2.jpg',
 'Beanie wol merino yang hangat dan breathable. Anti-bau dan cepat kering. Satu ukuran untuk semua.', 
 8000.00, 25, 'active');
