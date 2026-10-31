import os
from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')

target_h = 320
target_w_orig = int(target_h * orig.width / orig.height)
orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)

options = [
    ('depth_D1_670x270_mr75_mb95.png', 'D1 (670x270, mr-75, mb-95)'),
    ('depth_D2_680x280_mr80_mb105.png', 'D2 (680x280, mr-80, mb-105)'),
    ('depth_D3_650x260_mr70_mb85.png', 'D3 (650x260, mr-70, mb-85)'),
    ('depth_D4_700x290_mr85_mb115.png', 'D4 (700x290, mr-85, mb-115)'),
]

for filename, label in options:
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
