/*
  # Update RLS policies for customer messages

  1. Changes
    - Drop and recreate policies with correct permissions
    - Ensure anonymous users can insert messages
    - Allow authenticated users to view messages
  
  2. Security
    - Enable RLS on customer_messages table
    - Add explicit policy for anonymous submissions
    - Add policy for authenticated users to view messages
*/

-- First disable RLS to reset policies
ALTER TABLE customer_messages DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous message submissions" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing messages" ON customer_messages;
DROP POLICY IF EXISTS "Allow viewing own messages" ON customer_messages;

-- Create new policies with correct permissions
CREATE POLICY "Enable insert for anonymous users"
ON customer_messages
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users"
ON customer_messages
FOR SELECT
TO authenticated
USING (true);