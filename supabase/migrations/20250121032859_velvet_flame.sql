/*
  # Fix RLS policies for customer messages

  1. Changes
    - Drop existing policies
    - Create new policy to allow anonymous message submissions
    - Create new policy to allow authenticated users to view messages
  
  2. Security
    - Enable RLS on customer_messages table
    - Add policy for anonymous submissions
    - Add policy for authenticated users to view messages
*/

-- Enable RLS
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'customer_messages' 
    AND policyname = 'Allow anonymous message submissions'
  ) THEN
    DROP POLICY "Allow anonymous message submissions" ON customer_messages;
  END IF;

  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'customer_messages' 
    AND policyname = 'Allow viewing own messages'
  ) THEN
    DROP POLICY "Allow viewing own messages" ON customer_messages;
  END IF;
END $$;

-- Create new policies
CREATE POLICY "Allow anonymous message submissions"
ON customer_messages
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow viewing messages"
ON customer_messages
FOR SELECT
TO authenticated
USING (true);