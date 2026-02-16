/*
  # Update portfolio images table

  1. Changes
    - Drop and recreate portfolio_images table with correct structure
    - Add new images
    - Set up proper RLS policies
  
  2. Security
    - Enable RLS
    - Ensure public read access
*/

-- Drop existing table and start fresh
DROP TABLE IF EXISTS portfolio_images CASCADE;

-- Create table with correct structure
CREATE TABLE portfolio_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON portfolio_images
  FOR SELECT
  TO public
  USING (true);

-- Insert initial images
INSERT INTO portfolio_images (image_url) VALUES
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1743473051/Amazing_Way-086_Compressed_bvlmac.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1743473042/Amazing_Way-088_Compressed_ronnjx.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1743473032/Amazing_Way-087_Compressed_viytho.jpg');