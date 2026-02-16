/*
  # Create portfolio images table

  1. New Tables
    - `portfolio_images`
      - `id` (serial, primary key)
      - `image_url` (text, not null)
      - `caption` (text, nullable)
      - `order` (integer, nullable)

  2. Security
    - Enable RLS on `portfolio_images` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS portfolio_images (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT,
  "order" INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON portfolio_images
  FOR SELECT
  TO public
  USING (true);

-- Insert sample data
INSERT INTO portfolio_images (image_url, caption, "order") VALUES
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093402/Amazing_Way-148_compressed_5_jffgs1.jpg', 'Modern Kitchen Renovation', 1),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093461/Amazing_Way-147_compressed_f7xwc4.jpg', 'Elegant Living Space', 2),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093460/Amazing_Way-146_compressed_k7ewlv.jpg', 'Contemporary Design', 3),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-145_compressed_jprqk8.jpg', 'Custom Cabinetry', 4),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-144_compressed_jjmmgu.jpg', 'Modern Fixtures', 5),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-143_compressed_adlqab.jpg', 'Luxurious Details', 6),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-142_compressed_tgvcvd.jpg', 'Spacious Layout', 7),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-141_compressed_xlwuup.jpg', 'Custom Built-ins', 8),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-140_compressed_s8nfu8.jpg', 'Modern Bathroom', 9),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093456/Amazing_Way-139_compressed_lg19wn.jpg', 'Elegant Finishes', 10);