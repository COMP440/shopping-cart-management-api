-- migrate:up
INSERT INTO users (username, email, password, created_at, updated_at) VALUES
('user1', 'user1@gmail.com', 'password1', NOW(), NOW()),
('user2', 'user2@gmail.com', 'password2', NOW(), NOW()),
('user3', 'user3@gmail.com', 'password3', NOW(), NOW());

INSERT INTO products (name, description, price, inventory, created_at, updated_at) VALUES
('Golf Club Set', 'Complete set of golf clubs for beginners', 499.99, 20, NOW(), NOW()),
('Golf Balls (12-pack)', 'High-quality golf balls, set of 12', 29.99, 100, NOW(), NOW()),
('Golf Gloves', 'Non-slip golf gloves with enhanced grip', 15.99, 50, NOW(), NOW()),
('Golf Hat', 'Stylish golf hat with UV protection', 24.99, 30, NOW(), NOW()),
('Golf Shoes', 'Comfortable and high-traction golf shoes', 89.99, 25, NOW(), NOW()),
('Golf Rangefinder', 'Laser rangefinder for accurate shot measurement', 199.99, 15, NOW(), NOW());

-- migrate:down

