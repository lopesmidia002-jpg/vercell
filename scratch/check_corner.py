from PIL import Image, ImageDraw

f1 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478252791_25ca82ed.png'
f2 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478266081_bae9590b.png'

im1 = Image.open(f1).convert('RGB')
im2 = Image.open(f2).convert('RGB')

# Scale both to height 500
target_h = 500
w1 = int(target_h * im1.width / im1.height)
w2 = int(target_h * im2.width / im2.height)

im1_r = im1.resize((w1, target_h), Image.Resampling.LANCZOS)
im2_r = im2.resize((w2, target_h), Image.Resampling.LANCZOS)

comp = Image.new('RGB', (w1 + w2 + 40, target_h + 60), (16, 17, 20))
draw = ImageDraw.Draw(comp)

draw.text((20, 15), "Imagem 1 (25ca82ed)", fill=(255, 255, 255))
comp.paste(im1_r, (20, 40))

draw.text((30 + w1, 15), "Imagem 2 (bae9590b)", fill=(210, 251, 7))
comp.paste(im2_r, (30 + w1, 40))

comp.save('scratch/corner_comparison.png')
print("Saved scratch/corner_comparison.png")

