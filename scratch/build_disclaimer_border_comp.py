import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793453853905_525bed21.png")
user_orig = os.path.join(brain_dir, ".user_uploaded", "media_1793453866358_7fa30f21.png")
local_after = os.path.join(brain_dir, "footer_disclaimer_after.png")

im_bef = Image.open(user_before).convert("RGBA")
im_orig = Image.open(user_orig).convert("RGBA")
im_aft = Image.open(local_after).convert("RGBA")

target_w = 900
h_bef = int(target_w * (im_bef.height / im_bef.width))
h_orig = int(target_w * (im_orig.height / im_orig.width))
h_aft = int(target_w * (im_aft.height / im_aft.width))

im_bef_res = im_bef.resize((target_w, h_bef), Image.Resampling.LANCZOS)
im_orig_res = im_orig.resize((target_w, h_orig), Image.Resampling.LANCZOS)
im_aft_res = im_aft.resize((target_w, h_aft), Image.Resampling.LANCZOS)

total_h = h_bef + h_orig + h_aft + 140
comp = Image.new("RGBA", (target_w + 40, total_h), (16, 17, 20, 255))
draw = ImageDraw.Draw(comp)

# 1. Antes
y = 15
draw.text((20, y), "1. Antes (Listra branca em cima E embaixo):", fill=(160, 160, 160))
y += 25
comp.paste(im_bef_res, (20, y))
y += h_bef + 20

# 2. Original
draw.text((20, y), "2. Original de Referencia (SEM listra em cima, listra APENAS embaixo):", fill=(210, 251, 7))
y += 25
comp.paste(im_orig_res, (20, y))
y += h_orig + 20

# 3. Depois
draw.text((20, y), "3. Depois (Corrigido: Listra superior removida, listra posicionada exclusivamente embaixo):", fill=(210, 251, 7))
y += 25
comp.paste(im_aft_res, (20, y))

out_path = os.path.join(brain_dir, "footer_disclaimer_border_comparison.png")
comp.save(out_path)
print("Saved", out_path)

