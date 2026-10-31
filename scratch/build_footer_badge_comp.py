import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793453729225_3061870f.png")
user_orig = os.path.join(brain_dir, ".user_uploaded", "media_1793453741505_9964db23.png")
local_after = os.path.join(brain_dir, "footer_fale_conosco_after.png")

im_bef = Image.open(user_before).convert("RGBA")
im_orig = Image.open(user_orig).convert("RGBA")
im_aft = Image.open(local_after).convert("RGBA")

target_h = 360
w_bef = int(target_h * (im_bef.width / im_bef.height))
w_orig = int(target_h * (im_orig.width / im_orig.height))
w_aft = int(target_h * (im_aft.width / im_aft.height))

im_bef_res = im_bef.resize((w_bef, target_h), Image.Resampling.LANCZOS)
im_orig_res = im_orig.resize((w_orig, target_h), Image.Resampling.LANCZOS)
im_aft_res = im_aft.resize((w_aft, target_h), Image.Resampling.LANCZOS)

total_w = w_bef + w_orig + w_aft + 80
comp = Image.new("RGBA", (total_w, target_h + 80), (16, 17, 20, 255))
draw = ImageDraw.Draw(comp)

# Col 1: Antes
draw.text((20, 15), "1. Antes (Espaco excessivo 109px)", fill=(160, 160, 160))
comp.paste(im_bef_res, (20, 45))

# Col 2: Original
x2 = 40 + w_bef
draw.text((x2, 15), "2. Original (Referencia)", fill=(210, 251, 7))
comp.paste(im_orig_res, (x2, 45))

# Col 3: Depois
x3 = x2 + w_orig + 20
draw.text((x3, 15), "3. Depois (Calibrado / Sem justify-between)", fill=(210, 251, 7))
comp.paste(im_aft_res, (x3, 45))

out_path = os.path.join(brain_dir, "footer_badge_spacing_comparison.png")
comp.save(out_path)
print("Saved", out_path)

