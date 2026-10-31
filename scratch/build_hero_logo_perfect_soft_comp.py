import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793457249419_4cd16021.jpg")
user_orig = os.path.join(brain_dir, ".user_uploaded", "media_1793457281856_a7db4885.jpg")

full = Image.open('scratch/hero_section_1440.png')
# Center is (1084, 384)
# Crop width 807, height 605
x1 = int(1084 - 807 / 2)
y1 = int(384 - 605 / 2)
crop = full.crop((x1, y1, x1 + 807, y1 + 605))

after_dest = os.path.join(brain_dir, "hero_logo_perfect_soft_after.png")
crop.save(after_dest)
print("Saved crop:", crop.size)

im_bef = Image.open(user_before).convert("RGBA")
im_orig = Image.open(user_orig).convert("RGBA")
im_aft = Image.open(after_dest).convert("RGBA")

target_h = 380
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
draw.text((20, 15), "1. Antes (Fundo verde-limão saturado nas quinas)", fill=(160, 160, 160))
comp.paste(im_bef_res, (20, 45))

# Col 2: Original
x2 = 40 + target_w_bef
draw.text((x2, 15), "2. Original (Referência - Halo aveludado e fundo puro)", fill=(210, 251, 7))
comp.paste(im_orig_res, (x2, 45))

# Col 3: Depois
x3 = x2 + target_w_orig + 20
draw.text((x3, 15), "3. Depois (Calibração pixel-perfect idêntica ao original)", fill=(210, 251, 7))
comp.paste(im_aft_res, (x3, 45))

out_path = os.path.join(brain_dir, "hero_logo_perfect_soft_comparison.png")
comp.save(out_path)
print("Saved comparison to:", out_path)

