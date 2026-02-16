/*
  # Add phone column to customer_messages table

  1. Changes
    - Add phone column to customer_messages table
    - Make it nullable since not all customers may provide a phone number

  2. Notes
    - Uses IF NOT EXISTS to prevent errors if column already exists
    - Preserves existing data
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'customer_messages' AND column_name = 'phone'
  ) THEN
    ALTER TABLE customer_messages ADD COLUMN phone text;
  END IF;
END $$;