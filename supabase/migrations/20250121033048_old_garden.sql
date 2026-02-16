/*
  # Fix customer messages table policies

  1. Changes
    - Reset RLS and policies
    - Create proper public access policies for form submissions
    - Ensure anonymous users can submit messages
    - Allow public read access for messages

  2. Security
    - Enable RLS
    - Set up public insert and select policies
*/

-- First disable RLS to reset policies
ALTER TABLE customer_messages DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow anonymous message submissions" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing messages" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing own messages" ON customer_messages;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON customer_messages;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON customer_messages;
DROP POLICY IF EXISTS "public_insert" ON customer_messages;
DROP POLICY IF EXISTS "public_select" ON customer_messages;

-- Create new simplified policies
CREATE POLICY "allow_public_insert"
ON customer_messages
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "allow_public_select"
ON customer_messages
FOR SELECT
TO anon
USING (true);