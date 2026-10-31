from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')
opt2 = Image.open('scratch/test_zoom_2.png').convert('RGB')
opt3 = Image.open('scratch/test_zoom_3.png').convert('RGB')
opt4 = Image.open('scratch/test_zoom_4.png').convert('RGB')

target_h = 360
target_w_orig = int(target_h * orig.width / orig.height)
target_w_opt2 = int(target_h * opt2.width / opt2.height)
target_w_opt3 = int(target_h * opt3.width / opt3.height)
target_w_opt4 = int(target_h * opt4.width / opt4.height)

orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)
opt2_r = opt2.resize((target_w_opt2, target_h), Image.Resampling.LANCZOS)
opt3_r = opt3.resize((target_w_opt3, target_h), Image.Resampling.LANCZOS)
opt4_r = opt4.resize((target_w_opt4, target_h), Image.Resampling.LANCZOS)

comp = Image.new('RGB', (target_w_orig + target_w_opt2 + 60, target_h * 2 + 100), (16, 17, 20))
draw = ImageDraw.Draw(comp)

# Row 1: Original vs Opt 2
draw.text((20, 15), "1. Original (Referencia)", fill=(210, 251, 7))
comp.paste(orig_r, (20, 40))

draw.text((40 + target_w_orig, 15), "2. Opt 2 (600x240, mr-32, mb-50)", fill=(255, 255, 255))
comp.paste(opt2_r, (40 + target_w_orig, 40))

# Row 2: Opt 3 vs Opt 4
y2 = target_h + 60
draw.text((20, y2 - 25), "3. Opt 3 (560x220, mr-28, mb-40)", fill=(255, 255, 255))
comp.paste(opt3_r, (20, y2))

draw.text((40 + target_w_orig, y2 - 25), "4. Opt 4 (620x230, mr-30, mb-40)", fill=(255, 255, 255))
comp.paste(opt4_r, (40 + target_w_orig, y2))

comp.save('scratch/compare_zoom_matrix.png')
print('Saved scratch/compare_zoom_matrix.png')
