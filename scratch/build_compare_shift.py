from PIL import Image, ImageDraw

f1 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793476783543_7175d9d9.png'
f2 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793476836082_47adfed7.png'

im1 = Image.open(f1).convert('RGB')
im2 = Image.open(f2).convert('RGB')

target_h = 400
target_w1 = int(target_h * im1.width / im1.height)
target_w2 = int(target_h * im2.width / im2.height)

im1_r = im1.resize((target_w1, target_h), Image.Resampling.LANCZOS)
im2_r = im2.resize((target_w2, target_h), Image.Resampling.LANCZOS)

comp = Image.new('RGB', (target_w1 + target_w2 + 40, target_h + 60), (16, 17, 20))
draw = ImageDraw.Draw(comp)

draw.text((20, 15), "1. Atual (Laptops precisam ir mais para a direita)", fill=(240, 100, 100))
comp.paste(im1_r, (20, 45))

draw.text((30 + target_w1, 15), "2. Original (Referencia)", fill=(210, 251, 7))
comp.paste(im2_r, (30 + target_w1, 45))

comp.save('scratch/compare_shift_right.png')
print("Saved scratch/compare_shift_right.png")

