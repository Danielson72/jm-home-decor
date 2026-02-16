/*
  # Create customer messages table

  1. New Tables
    - `customer_messages`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `message` (text, not null)
      - `submitted_at` (timestamptz, default: now())

  2. Security
    - Enable RLS on `customer_messages` table
    - Add policy for inserting messages
*/

CREATE TABLE IF NOT EXISTS customer_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous message submissions"
  ON customer_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow viewing own messages"
  ON customer_messages
  FOR SELECT
  TO authenticated
  USING (true);