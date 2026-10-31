import os
from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793476836082_47adfed7.png').convert('RGB')

target_h = 320
target_w_orig = int(target_h * orig.width / orig.height)
orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)

options = [
    ('shift_neg_130px.png', '-130px (leftMargin 209, rightCut 81)'),
    ('shift_neg_145px.png', '-145px (leftMargin 224, rightCut 96)'),
    ('shift_neg_155px.png', '-155px (leftMargin 234, rightCut 106)'),
    ('shift_neg_165px.png', '-165px (leftMargin 244, rightCut 116)'),
    ('shift_neg_175px.png', '-175px (leftMargin 254, rightCut 126)'),
]

for filename, label in options:
    img = Image.open(os.path.join('scratch', filename)).convert('RGB')
    target_w_img = int(target_h * img.width / img.height)
    img_r = img.resize((target_w_img, target_h), Image.Resampling.LANCZOS)

    comp = Image.new('RGB', (target_w_orig + target_w_img + 30, target_h + 50), (16, 17, 20))
    draw = ImageDraw.Draw(comp)
    draw.text((15, 10), "1. Original (Referencia)", fill=(210, 251, 7))
    comp.paste(orig_r, (15, 35))

    draw.text((25 + target_w_orig, 10), f"2. MR = {label}", fill=(255, 255, 255))
    comp.paste(img_r, (25 + target_w_orig, 35))

    out_name = f'scratch/comp_{filename}'
    comp.save(out_name)
    print(f'Saved {out_name}')

