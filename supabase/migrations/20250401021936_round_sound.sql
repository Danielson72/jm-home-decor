/*
  # Restore portfolio images
  
  1. Changes
    - Insert historical images while maintaining new schema
    - Preserve existing images
    - Maintain RLS policies
*/

-- Insert historical images while preserving existing ones
INSERT INTO portfolio_images (image_url) VALUES
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096528/Amazing_Way-121_compressed_j0o15e.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096529/Amazing_Way-122_compressed_ka9wwy.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096528/Amazing_Way-120_compressed_wc4btt.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742096527/Amazing_Way-119_compressed_qfvsut.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095496/Amazing_Way-138_compressed_eurhqv.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095496/Amazing_Way-137_compressed_fzobp6.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095495/Amazing_Way-136_compressed_ldf1qr.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095494/Amazing_Way-135_compressed_efqjkh.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095493/Amazing_Way-134_compressed_vsc290.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095493/Amazing_Way-133_compressed_lw94fm.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095492/Amazing_Way-132_compressed_zmgvm9.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095492/Amazing_Way-131_compressed_iziz70.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095491/Amazing_Way-130_compressed_wfyh7d.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742095491/Amazing_Way-129_compressed_aebubh.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093461/Amazing_Way-147_compressed_f7xwc4.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093460/Amazing_Way-146_compressed_k7ewlv.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-144_compressed_jjmmgu.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093459/Amazing_Way-145_compressed_jprqk8.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-143_compressed_adlqab.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093458/Amazing_Way-142_compressed_tgvcvd.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-141_compressed_xlwuup.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093457/Amazing_Way-140_compressed_s8nfu8.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742093456/Amazing_Way-139_compressed_lg19wn.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742091831/Amazing_Way-096_envgmo.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-118_Compressed_i0hwd7.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-113_Compressed_ug1axu.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-111_Compressed_o3ov7q.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-109_Compressed_aw6yre.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-116_Compressed_ihi8an.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-110_Compressed_styht0.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-112_Compressed_beehox.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-114_Compressed_pio9a3.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308384/Amazing_Way-115_Compressed_utdsgi.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-101_Compressed_cshuxb.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-099_Compressed_vwxsq8.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308385/Amazing_Way-117_Compressed_megqod.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-100_Compressed_bkatca.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-103_Compressed_ds3yqq.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308437/Amazing_Way-102_Compressed_ylbr31.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-104_Compressed_ahchrr.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-106_Compressed_idfyd9.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308438/Amazing_Way-105_Compressed_sppfzf.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-091_Compressed_q7xjs3.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308441/Amazing_Way-108_Compressed_arhqzx.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742308440/Amazing_Way-107_Compressed_zrpqba.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-090_Compressed_sxllji.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-092_Compressed_jysmpy.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-089_Compressed_br4lbr.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-095_Compressed_o66uud.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-093_Compressed_hcvy8r.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309758/Amazing_Way-094_Compressed_d7yy6r.jpg'),
  ('https://res.cloudinary.com/ddridqpei/image/upload/v1742309759/Amazing_Way-098_Compressed_eyvewg.jpg');