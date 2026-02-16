/*
  # Fix RLS policies for customer messages

  1. Changes
    - Reset and simplify RLS policies
    - Enable public access for inserts
    - Allow public read access
  
  2. Security
    - Enable RLS on customer_messages table
    - Add policy for public submissions
    - Add policy for public viewing
*/

-- Reset RLS
ALTER TABLE customer_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow anonymous message submissions" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing messages" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing own messages" ON customer_messages;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON customer_messages;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON customer_messages;

-- Create simplified policies for public access
CREATE POLICY "public_insert"
ON customer_messages FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_select"
ON customer_messages FOR SELECT
TO public
USING (true);