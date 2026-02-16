/*
  # Rename phone column to phone_number

  1. Changes
    - Rename 'phone' column to 'phone_number' in customer_messages table
*/

DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'customer_messages' AND column_name = 'phone'
  ) THEN
    ALTER TABLE customer_messages RENAME COLUMN phone TO phone_number;
  END IF;
END $$;