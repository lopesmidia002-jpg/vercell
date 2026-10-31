from PIL import Image, ImageDraw

# Load user upload (before: badge left-aligned)
im_user = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793451110722_8f0c2a93.png')

# Load after screenshot (hero_mobile_centered_badge.png)
im_after = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\hero_mobile_centered_badge.png')

# Crop the top badge & title area from after screenshot
# im_after is 780x840 (scale 2). In 390px terms, badge and title are y ~ 50 to 220, so at 2x it is y ~ 100 to 440
crop_after = im_after.crop((0, 140, im_after.width, 480))

# Resize user image to width 780
u_h = int(im_user.height * 780 / im_user.width)
u_resized = im_user.resize((780, u_h), Image.Resampling.LANCZOS)

comp_w = 780
comp_h = u_resized.height + crop_after.height + 120
canvas = Image.new('RGB', (comp_w, comp_h), (246, 247, 242))
draw = ImageDraw.Draw(canvas)

# Title
draw.rectangle([(0, 0), (comp_w, 40)], fill=(20, 20, 22))
draw.text((20, 12), "CENTRALIZACAO DO BADGE NO MOBILE E TEXTO EM LINHA UNICA (HERO)", fill=(210, 251, 7))

# Before
draw.text((20, 50), "ANTES (Badge alinhado a esquerda no mobile):", fill=(180, 40, 40))
canvas.paste(u_resized, (0, 75))

# After
y_after = 75 + u_resized.height + 15
draw.text((20, y_after), "DEPOIS (Badge 100% centralizado no mobile + texto em linha unica whitespace-nowrap):", fill=(30, 130, 30))
canvas.paste(crop_after, (0, y_after + 25))

out_path = r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\hero_badge_centered_comparison.png'
canvas.save(out_path)
print("Saved:", out_path)

