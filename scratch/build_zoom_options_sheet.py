import os
from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')

# Let's normalize all cards to width 600
target_w = 600
orig_h = int(target_w * orig.height / orig.width)
orig_res = orig.resize((target_w, orig_h), Image.Resampling.LANCZOS)

options = [
    ('Original (Referencia)', orig_res),
    ('Current (860x320)', Image.open('scratch/test_zoom_0.png')),
    ('Opt 1 (640x250, mr-36, mb-45)', Image.open('scratch/test_zoom_1.png')),
    ('Opt 2 (600x240, mr-32, mb-50)', Image.open('scratch/test_zoom_2.png')),
    ('Opt 3 (560x220, mr-28, mb-40)', Image.open('scratch/test_zoom_3.png')),
    ('Opt 4 (620x230, mr-30, mb-40)', Image.open('scratch/test_zoom_4.png')),
    ('Opt 5 (580x225, mr-24, mb-38)', Image.open('scratch/test_zoom_5.png')),
]

# Build a vertical comparison sheet
total_w = target_w + 40
card_h_standard = int(target_w * 540 / 800) # ~405px
total_h = len(options) * (card_h_standard + 40) + 20

sheet = Image.new('RGB', (total_w, total_h), (20, 20, 20))
draw = ImageDraw.Draw(sheet)

y_cursor = 20
for title, img in options:
    draw.text((20, y_cursor - 15), title, fill=(210, 251, 7) if 'Original' in title else (255, 255, 255))
    h = int(target_w * img.height / img.width)
    img_res = img.resize((target_w, h), Image.Resampling.LANCZOS)
    sheet.paste(img_res, (20, y_cursor))
    y_cursor += h + 40

sheet.save('scratch/all_zoom_options_sheet.png')
print('Saved scratch/all_zoom_options_sheet.png')

