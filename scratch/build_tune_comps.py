import os
from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')

target_h = 320
target_w_orig = int(target_h * orig.width / orig.height)
orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)

tunes = [
    ('tune_A_660x250_mr72_mb64.png', 'Tune A (660x250, cut: R23, B15)'),
    ('tune_B_680x260_mr80_mb72.png', 'Tune B (680x260, cut: R31, B23)'),
    ('tune_C_640x245_mr64_mb60.png', 'Tune C (640x245, cut: R15, B11)'),
    ('tune_D_700x270_mr88_mb80.png', 'Tune D (700x270, cut: R39, B31)'),
    ('tune_E_670x255_mr76_mb68.png', 'Tune E (670x255, cut: R27, B19)'),
]

for filename, label in tunes:
    img = Image.open(os.path.join('scratch', filename)).convert('RGB')
    target_w_img = int(target_h * img.width / img.height)
    img_r = img.resize((target_w_img, target_h), Image.Resampling.LANCZOS)

    comp = Image.new('RGB', (target_w_orig + target_w_img + 30, target_h + 50), (16, 17, 20))
    draw = ImageDraw.Draw(comp)
    draw.text((15, 10), "1. Original (Referencia)", fill=(210, 251, 7))
    comp.paste(orig_r, (15, 35))

    draw.text((25 + target_w_orig, 10), f"2. {label}", fill=(255, 255, 255))
    comp.paste(img_r, (25 + target_w_orig, 35))

    out_name = f'scratch/comp_{filename}'
    comp.save(out_name)
    print(f'Saved {out_name}')
