/*
  # Fix customer messages table and policies

  1. Changes
    - Reset table structure with proper columns
    - Set up correct RLS policies for public access
    - Ensure proper timestamps and defaults

  2. Security
    - Enable RLS
    - Allow public insert access
    - Allow public select access for transparency
*/

-- Drop and recreate the table to ensure clean state
DROP TABLE IF EXISTS customer_messages;

CREATE TABLE customer_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  message text NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Drop any existing policies
DROP POLICY IF EXISTS "Allow anonymous message submissions" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing messages" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing own messages" ON customer_messages;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON customer_messages;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON customer_messages;
DROP POLICY IF EXISTS "public_insert" ON customer_messages;
DROP POLICY IF EXISTS "public_select" ON customer_messages;
DROP POLICY IF EXISTS "allow_public_insert" ON customer_messages;
DROP POLICY IF EXISTS "allow_public_select" ON customer_messages;

-- Create new policies for public access
CREATE POLICY "messages_insert_policy"
ON customer_messages
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "messages_select_policy"
ON customer_messages
FOR SELECT
TO public
USING (true);