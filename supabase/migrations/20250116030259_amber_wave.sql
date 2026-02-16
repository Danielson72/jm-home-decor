/*
  # Update customer messages table

  1. Changes
    - Ensure customer_messages table exists with correct structure
    - Add policies if they don't exist
  2. Security
    - Maintain RLS
    - Keep existing policies or create them if missing
*/

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS customer_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  submitted_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE customer_messages ENABLE ROW LEVEL SECURITY;

-- Create policies if they don't exist
DO $$ 
BEGIN
  -- Check and create anonymous submissions policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'customer_messages' 
    AND policyname = 'Allow anonymous message submissions'
  ) THEN
    CREATE POLICY "Allow anonymous message submissions"
      ON customer_messages
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  -- Check and create viewing policy
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'customer_messages' 
    AND policyname = 'Allow viewing own messages'
  ) THEN
    CREATE POLICY "Allow viewing own messages"
      ON customer_messages
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;