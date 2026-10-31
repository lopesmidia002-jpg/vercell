import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793457669664_15bf2f1c.jpg")
user_orig = os.path.join(brain_dir, ".user_uploaded", "media_1793457704474_48c4751f.jpg")

full = Image.open('scratch/hero_section_1440.png')
# Logo is X [862, 1306] Y [158, 612]
# In im2, logo is X [132, 563] in a image of width 875, height 553.
# Logo left in im2 is at x=132 (margin 132 from left edge).
# In our screenshot, logo left is at 862.
# So crop x1 = 862 - 132 = 730.
# Crop y1 = 158 - 50 = 108.
# Width 875, Height 553
# x2 = 730 + 875 = 1605 (exceeds 1440).
# Let's cap x2 at 1440 and expand x1 to the left:
# Or crop centered on logo:
cx = 1084
cy = 385
target_w = 875
target_h = 553
x1 = max(0, min(full.width - target_w, int(cx - target_w * 0.45)))
y1 = max(0, min(full.height - target_h, int(cy - target_h * 0.5)))
crop = full.crop((x1, y1, x1 + target_w, y1 + target_h))

after_dest = os.path.join(brain_dir, "hero_logo_right_shift_after.png")
crop.save(after_dest)
print("Saved crop:", crop.size)

im_bef = Image.open(user_before).convert("RGBA")
im_orig = Image.open(user_orig).convert("RGBA")
im_aft = Image.open(after_dest).convert("RGBA")

target_h = 360
target_w_bef = int(target_h * (im_bef.width / im_bef.height))
im_bef_res = im_bef.resize((target_w_bef, target_h), Image.Resampling.LANCZOS)

target_w_orig = int(target_h * (im_orig.width / im_orig.height))
im_orig_res = im_orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)

target_w_aft = int(target_h * (im_aft.width / im_aft.height))
im_aft_res = im_aft.resize((target_w_aft, target_h), Image.Resampling.LANCZOS)

total_w = target_w_bef + target_w_orig + target_w_aft + 80
comp = Image.new("RGBA", (total_w, target_h + 80), (16, 17, 20, 255))
draw = ImageDraw.Draw(comp)

# Col 1: Antes
draw.text((20, 15), "1. Antes (Sombreamento centralizado à esquerda)", fill=(160, 160, 160))
comp.paste(im_bef_res, (20, 45))

# Col 2: Original
x2 = 40 + target_w_bef
draw.text((x2, 15), "2. Original (Referência - Halo deslocado à direita)", fill=(210, 251, 7))
comp.paste(im_orig_res, (x2, 45))

# Col 3: Depois
x3 = x2 + target_w_orig + 20
draw.text((x3, 15), "3. Depois (Sombreamento posicionado à direita)", fill=(210, 251, 7))
comp.paste(im_aft_res, (x3, 45))

out_path = os.path.join(brain_dir, "hero_logo_right_shift_comparison.png")
comp.save(out_path)
print("Saved comparison to:", out_path)

