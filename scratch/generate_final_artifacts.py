from PIL import Image, ImageDraw, ImageFont
import numpy as np
import shutil
import os

native_path = "scratch/card6_native_rendered.png"
p_ref = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png"
p_before = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png"

im_native = Image.open(native_path).convert('RGB')
im_ref = Image.open(p_ref).convert('RGB')
im_before = Image.open(p_before).convert('RGB')

arr_native = np.array(im_native)
arr_ref = np.array(im_ref)

# Measurements:
card_r = im_native.width - 5
card_b = im_native.height - 5

# Purple donut in native:
purple_nat = (arr_native[:, :, 2] > 180) & (arr_native[:, :, 0] > 100) & (arr_native[:, :, 1] < 150)
py_n, px_n = np.where(purple_nat)
rl_mask = px_n > 600
px_rl = px_n[rl_mask]
py_rl = py_n[rl_mask]

dist_r_native = card_r - px_rl.max()
dist_b_native = card_b - py_rl.max()

# Purple donut in ref:
purple_ref = (arr_ref[:, :, 2] > 180) & (arr_ref[:, :, 0] > 100) & (arr_ref[:, :, 1] < 150)
pyr, pxr = np.where(purple_ref)
dist_r_ref = 117 - pxr.max()
dist_b_ref = 222 - pyr.max()

# Keyboard in native:
kb_nat = (arr_native[:, :, 0] < 60) & (arr_native[:, :, 1] < 60) & (arr_native[:, :, 2] < 60)
kby_n, kbx_n = np.where(kb_nat)
rl_kb = (kbx_n > 600) & (kby_n > 400)
kb_max_y_n = kby_n[rl_kb].max()
kb_dist_b_n = card_b - kb_max_y_n

# Keyboard in ref:
kb_ref = (arr_ref[:, :, 0] < 60) & (arr_ref[:, :, 1] < 60) & (arr_ref[:, :, 2] < 60)
kby_r, kbx_r = np.where(kb_ref)
kb_dist_b_r = 222 - kby_r.max()

print("COMPARISON METRICS:")
print(f"  Purple Donut to Right Border: Ref = {dist_r_ref}px | Native = {dist_r_native}px (diff = {dist_r_native - dist_r_ref:+d}px)")
print(f"  Purple Donut to Bottom Border: Ref = {dist_b_ref}px | Native = {dist_b_native}px (diff = {dist_b_native - dist_b_ref:+d}px)")
print(f"  Keyboard to Bottom Border: Ref = {kb_dist_b_r}px | Native = {kb_dist_b_n}px (diff = {kb_dist_b_n - kb_dist_b_r:+d}px)")

# Crop native corner to match im_ref framing:
# im_ref is (130, 249)
crop_w = 140
crop_h = 255
corner_native = im_native.crop((im_native.width - crop_w, im_native.height - crop_h, im_native.width, im_native.height))

# Save corner_native to artifact directory
art_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
corner_native.save(os.path.join(art_dir, "card6_corner_matched_after.png"))
im_native.save(os.path.join(art_dir, "card6_full_after.png"))

# Create high-quality comparison image with titles
canvas_h = max(im_before.height, im_ref.height, corner_native.height) + 100
item_w_1 = im_before.width
item_w_2 = im_ref.width
item_w_3 = corner_native.width
canvas_w = item_w_1 + item_w_2 + item_w_3 + 120

comp_img = Image.new('RGB', (canvas_w, canvas_h), (250, 250, 250))
draw = ImageDraw.Draw(comp_img)

# Try font or default
try:
    font = ImageFont.truetype("arial.ttf", 16)
    font_bold = ImageFont.truetype("arialbd.ttf", 18)
except:
    font = ImageFont.load_default()
    font_bold = font

x_cursor = 30
# 1. Antes
draw.text((x_cursor, 25), "1. Canto Desalinhado", fill=(180, 40, 40), font=font_bold)
draw.text((x_cursor, 48), "(Gráficos extras / folga à direita)", fill=(100, 100, 100), font=font)
comp_img.paste(im_before, (x_cursor, 75))
x_cursor += item_w_1 + 30

# Divider
draw.line([(x_cursor - 15, 20), (x_cursor - 15, canvas_h - 20)], fill=(220, 220, 220), width=2)

# 2. Referência Original
draw.text((x_cursor, 25), "2. Referência Original", fill=(30, 130, 30), font=font_bold)
draw.text((x_cursor, 48), "(Gráficos cortados / teclado no canto)", fill=(100, 100, 100), font=font)
comp_img.paste(im_ref, (x_cursor, 75))
x_cursor += item_w_2 + 30

# Divider
draw.line([(x_cursor - 15, 20), (x_cursor - 15, canvas_h - 20)], fill=(220, 220, 220), width=2)

# 3. Depois (Implementação)
draw.text((x_cursor, 25), "3. Depois (Ajustado)", fill=(20, 100, 200), font=font_bold)
draw.text((x_cursor, 48), "(Alinhamento pixel-perfect)", fill=(100, 100, 100), font=font)
comp_img.paste(corner_native, (x_cursor, 75))

comp_path = os.path.join(art_dir, "card6_corner_matched_comparison.png")
comp_img.save(comp_path)
print(f"Saved {comp_path}")

