from PIL import Image, ImageDraw

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')
desk = Image.open('scratch/responsive_desktop_1280.png').convert('RGB')
before = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475351304_dedc412b.jpg').convert('RGB')

target_h = 360
target_w_orig = int(target_h * orig.width / orig.height)
target_w_desk = int(target_h * desk.width / desk.height)
target_w_bef = int(target_h * before.width / before.height)

orig_r = orig.resize((target_w_orig, target_h), Image.Resampling.LANCZOS)
desk_r = desk.resize((target_w_desk, target_h), Image.Resampling.LANCZOS)
bef_r = before.resize((target_w_bef, target_h), Image.Resampling.LANCZOS)

total_w = target_w_bef + target_w_orig + target_w_desk + 80
comp = Image.new('RGB', (total_w, target_h + 70), (16, 17, 20))
draw = ImageDraw.Draw(comp)

# Col 1: Antes (Zoom excessivo)
draw.text((20, 15), "1. Antes (Computadores com zoom excessivo)", fill=(240, 100, 100))
comp.paste(bef_r, (20, 45))

# Col 2: Original (Referencia)
x2 = 40 + target_w_bef
draw.text((x2, 15), "2. Original (Referencia - Zoom reduzido)", fill=(210, 251, 7))
comp.paste(orig_r, (x2, 45))

# Col 3: Depois (Zoom reduzido idêntico)
x3 = x2 + target_w_orig + 20
draw.text((x3, 15), "3. Depois (Zoom reduzido e proporcionado)", fill=(210, 251, 7))
comp.paste(desk_r, (x3, 45))

comp.save('scratch/final_zoom_comparison.png')
print('Saved scratch/final_zoom_comparison.png')
