from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')
curr = Image.open('scratch/card6_current.png').convert('RGB')

target_h = 360
target_w_orig = int(target_h * orig.width / orig.height)
target_w_curr = int(target_h * curr.width / curr.height)

orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)
curr_r = curr.resize((target_w_curr, target_h), Image.Resampling.LANCZOS)

comp = Image.new('RGB', (target_w_orig + target_w_curr + 40, target_h + 60), (16, 17, 20))
draw = ImageDraw.Draw(comp)

draw.text((20, 10), "1. Original (Referencia)", fill=(210, 251, 7))
comp.paste(orig_r, (20, 35))

draw.text((30 + target_w_orig, 10), "2. Atual (w=600, h=225, mr=-32, mb=-40)", fill=(255, 255, 255))
comp.paste(curr_r, (30 + target_w_orig, 35))

comp.save('scratch/compare_card6_v1.png')
print('Saved scratch/compare_card6_v1.png')

