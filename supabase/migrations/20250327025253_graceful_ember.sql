/*
  # Create portfolio images table with full image set

  1. New Tables
    - `portfolio_images`
      - `id` (serial, primary key)
      - `image_url` (text, not null)
      - `caption` (text, nullable)
      - `order` (integer, nullable)
      - `created_at` (timestamptz, default: now())

  2. Security
    - Enable RLS on `portfolio_images` table
    - Add policy for public read access
*/

-- Drop existing table and policies
DROP TABLE IF EXISTS portfolio_images CASCADE;

CREATE TABLE portfolio_images (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption TEXT,
  "order" INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON portfolio_images
  FOR SELECT
  TO public
  USING (true);

-- Insert all images with captions and order
INSERT INTO portfolio_images (image_url, caption, "order") VALUES
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096528/Amazing_Way-121_compressed_j0o15e.jpg', 'Amazing Way Project #1', 1),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096529/Amazing_Way-122_compressed_ka9wwy.jpg', 'Amazing Way Project #2', 2),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096528/Amazing_Way-120_compressed_wc4btt.jpg', 'Amazing Way Project #3', 3),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096527/Amazing_Way-119_compressed_qfvsut.jpg', 'Amazing Way Project #4', 4),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095496/Amazing_Way-138_compressed_eurhqv.jpg', 'Amazing Way Project #5', 5),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095496/Amazing_Way-137_compressed_fzobp6.jpg', 'Amazing Way Project #6', 6),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095495/Amazing_Way-136_compressed_ldf1qr.jpg', 'Amazing Way Project #7', 7),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095494/Amazing_Way-135_compressed_efqjkh.jpg', 'Amazing Way Project #8', 8),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095493/Amazing_Way-134_compressed_vsc290.jpg', 'Amazing Way Project #9', 9),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095493/Amazing_Way-133_compressed_lw94fm.jpg', 'Amazing Way Project #10', 10),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095492/Amazing_Way-132_compressed_zmgvm9.jpg', 'Amazing Way Project #11', 11),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095492/Amazing_Way-131_compressed_iziz70.jpg', 'Amazing Way Project #12', 12),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095491/Amazing_Way-130_compressed_wfyh7d.jpg', 'Amazing Way Project #13', 13),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095491/Amazing_Way-129_compressed_aebubh.jpg', 'Amazing Way Project #14', 14),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093461/Amazing_Way-147_compressed_f7xwc4.jpg', 'Amazing Way Project #15', 15),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093460/Amazing_Way-146_compressed_k7ewlv.jpg', 'Amazing Way Project #16', 16),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-144_compressed_jjmmgu.jpg', 'Amazing Way Project #17', 17),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-145_compressed_jprqk8.jpg', 'Amazing Way Project #18', 18),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-143_compressed_adlqab.jpg', 'Amazing Way Project #19', 19),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-142_compressed_tgvcvd.jpg', 'Amazing Way Project #20', 20),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-141_compressed_xlwuup.jpg', 'Amazing Way Project #21', 21),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-140_compressed_s8nfu8.jpg', 'Amazing Way Project #22', 22),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093456/Amazing_Way-139_compressed_lg19wn.jpg', 'Amazing Way Project #23', 23),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742091831/Amazing_Way-096_envgmo.jpg', 'Amazing Way Project #24', 24),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-118_Compressed_i0hwd7.jpg', 'Amazing Way Project #25', 25),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-113_Compressed_ug1axu.jpg', 'Amazing Way Project #26', 26),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-111_Compressed_o3ov7q.jpg', 'Amazing Way Project #27', 27),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-109_Compressed_aw6yre.jpg', 'Amazing Way Project #28', 28),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-116_Compressed_ihi8an.jpg', 'Amazing Way Project #29', 29),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-110_Compressed_styht0.jpg', 'Amazing Way Project #30', 30),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-112_Compressed_beehox.jpg', 'Amazing Way Project #31', 31),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-114_Compressed_pio9a3.jpg', 'Amazing Way Project #32', 32),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-115_Compressed_utdsgi.jpg', 'Amazing Way Project #33', 33),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-101_Compressed_cshuxb.jpg', 'Amazing Way Project #34', 34),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-099_Compressed_vwxsq8.jpg', 'Amazing Way Project #35', 35),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-117_Compressed_megqod.jpg', 'Amazing Way Project #36', 36),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-100_Compressed_bkatca.jpg', 'Amazing Way Project #37', 37),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-103_Compressed_ds3yqq.jpg', 'Amazing Way Project #38', 38),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-102_Compressed_ylbr31.jpg', 'Amazing Way Project #39', 39),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-104_Compressed_ahchrr.jpg', 'Amazing Way Project #40', 40),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-106_Compressed_idfyd9.jpg', 'Amazing Way Project #41', 41),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-105_Compressed_sppfzf.jpg', 'Amazing Way Project #42', 42),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-091_Compressed_q7xjs3.jpg', 'Amazing Way Project #43', 43),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308441/Amazing_Way-108_Compressed_arhqzx.jpg', 'Amazing Way Project #44', 44),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308440/Amazing_Way-107_Compressed_zrpqba.jpg', 'Amazing Way Project #45', 45),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-090_Compressed_sxllji.jpg', 'Amazing Way Project #46', 46),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-092_Compressed_jysmpy.jpg', 'Amazing Way Project #47', 47),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-089_Compressed_br4lbr.jpg', 'Amazing Way Project #48', 48),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-095_Compressed_o66uud.jpg', 'Amazing Way Project #49', 49),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-093_Compressed_hcvy8r.jpg', 'Amazing Way Project #50', 50),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-094_Compressed_d7yy6r.jpg', 'Amazing Way Project #51', 51),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309759/Amazing_Way-098_Compressed_eyvewg.jpg', 'Amazing Way Project #52', 52);