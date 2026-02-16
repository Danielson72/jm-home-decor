/*
  # Add phone number to customer messages

  1. Changes
    - Add phone column to customer_messages table
    
  2. Notes
    - Phone number is optional to maintain compatibility with existing data
    - Uses text type to accommodate various phone number formats and international numbers
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