import os
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793474826222_23d073b9.png")
local_after = r"scratch\bento_mobile_cards_2_to_5.png"

# Copy / save after screenshot
after_dest = os.path.join(brain_dir, "bento_mobile_cards_after.png")
im_after_orig = Image.open(local_after)
im_after_orig.save(after_dest)

im_bef = Image.open(user_before).convert("RGBA")
im_aft = Image.open(after_dest).convert("RGBA")

# Target height for side by side
target_h = 800
target_w_bef = int(target_h * (im_bef.width / im_bef.height))
im_bef_res = im_bef.resize((target_w_bef, target_h), Image.Resampling.LANCZOS)

target_w_aft = int(target_h * (im_aft.width / im_aft.height))
im_aft_res = im_aft.resize((target_w_aft, target_h), Image.Resampling.LANCZOS)

total_w = target_w_bef + target_w_aft + 60
total_h = target_h + 80

comp = Image.new("RGBA", (total_w, total_h), (16, 17, 20, 255))
draw = ImageDraw.Draw(comp)

# Col 1: Antes
draw.text((20, 15), "1. Antes (Espaco vazio excessivo no mobile)", fill=(240, 100, 100))
comp.paste(im_bef_res, (20, 50))

# Col 2: Depois
x2 = 40 + target_w_bef
draw.text((x2, 15), "2. Depois (Cards compactos e proporcionais)", fill=(210, 251, 7))
comp.paste(im_aft_res, (x2, 50))

out_path = os.path.join(brain_dir, "bento_mobile_cards_comparison.png")
comp.save(out_path)
print("Saved comparison to:", out_path)

