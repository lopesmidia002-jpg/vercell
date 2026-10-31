from PIL import Image, ImageDraw

# Load user uploaded image (showing centered text)
im_user = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793451180824_3d95f5d2.png')

# Load our rendered security section
im_rendered = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\security_preview.png')

# User image resize to width 780
u_h = int(im_user.height * 780 / im_user.width)
u_resized = im_user.resize((780, u_h), Image.Resampling.LANCZOS)

# Crop the text area from im_rendered
# It has the badge, title, paragraph, policy link, and email contacts
rend_crop = im_rendered.crop((0, 0, 780, min(im_rendered.height, 650)))

comp_w = 780
comp_h = u_resized.height + rend_crop.height + 120
canvas = Image.new('RGB', (comp_w, comp_h), (246, 247, 242))
draw = ImageDraw.Draw(canvas)

# Title
draw.rectangle([(0, 0), (comp_w, 40)], fill=(20, 20, 22))
draw.text((20, 12), "ALINHAMENTO A ESQUERDA NO MOBILE (SECAO DE SEGURANCA)", fill=(210, 251, 7))

# Before
draw.text((20, 50), "ANTES (Textos e canais centralizados no mobile):", fill=(180, 40, 40))
canvas.paste(u_resized, (0, 75))

# After
y_after = 75 + u_resized.height + 15
draw.text((20, y_after), "DEPOIS (Textos, politicas e canais justificados a esquerda + badge centralizado):", fill=(30, 130, 30))
canvas.paste(rend_crop, (0, y_after + 25))

out_path = r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\security_mobile_justified_comparison.png'
canvas.save(out_path)
print("Saved comparison to:", out_path)

