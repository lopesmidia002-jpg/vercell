from PIL import Image, ImageDraw

# Load user upload
im_user = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793452373810_9d23e7a1.png')

# Load our rendered buttons shot
im_after = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\dev_buttons_centered_shot.png')

# User image resize to width 780
u_h = int(im_user.height * 780 / im_user.width)
u_resized = im_user.resize((780, u_h), Image.Resampling.LANCZOS)

comp_w = 780
comp_h = u_resized.height + im_after.height + 120
canvas = Image.new('RGB', (comp_w, comp_h), (246, 247, 242))
draw = ImageDraw.Draw(canvas)

# Title
draw.rectangle([(0, 0), (comp_w, 40)], fill=(20, 20, 22))
draw.text((20, 12), "CENTRALIZACAO DAS DUAS BADGES/BOTOES DE ACAO NO MOBILE (DEV SECTION)", fill=(210, 251, 7))

# Before
draw.text((20, 50), "REFERENCIA DO USUARIO (Duas badges/acoes side-by-side):", fill=(180, 40, 40))
canvas.paste(u_resized, (0, 75))

# After
y_after = 75 + u_resized.height + 15
draw.text((20, y_after), "DEPOIS (Centralizadas no mobile em linha unica side-by-side - centro exato delta 0.0px):", fill=(30, 130, 30))
canvas.paste(im_after, (0, y_after + 25))

out_path = r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\dev_buttons_centered_comparison.png'
canvas.save(out_path)
print("Saved comparison to:", out_path)

