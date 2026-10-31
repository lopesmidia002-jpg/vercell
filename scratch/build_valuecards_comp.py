from PIL import Image, ImageDraw

# Load user upload (before: centered, broken into 2 lines)
im_user = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793452264787_119be73d.png')

# Load our rendered value cards shot (after: left-justified, single line)
im_after = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\valuecards_mobile_single_line.png')
# Crop header area (badge, title, subtitle)
crop_after = im_after.crop((0, 0, im_after.width, min(im_after.height, 460)))

# Resize user image to width 780
u_h = int(im_user.height * 780 / im_user.width)
u_resized = im_user.resize((780, u_h), Image.Resampling.LANCZOS)

comp_w = 780
comp_h = u_resized.height + crop_after.height + 120
canvas = Image.new('RGB', (comp_w, comp_h), (246, 247, 242))
draw = ImageDraw.Draw(canvas)

# Title
draw.rectangle([(0, 0), (comp_w, 40)], fill=(20, 20, 22))
draw.text((20, 12), "TITULO EM LINHA UNICA E JUSTIFICADO A ESQUERDA NO MOBILE (PIX SEM LIMITES)", fill=(210, 251, 7))

# Before
draw.text((20, 50), "ANTES (Enviado pelo usuario - centralizado e quebrado em 2 linhas):", fill=(180, 40, 40))
canvas.paste(u_resized, (0, 75))

# After
y_after = 75 + u_resized.height + 15
draw.text((20, y_after), "DEPOIS (Linha unica continua + justificado a esquerda na margem mobile):", fill=(30, 130, 30))
canvas.paste(crop_after, (0, y_after + 25))

out_path = r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\valuecards_title_single_line_comparison.png'
canvas.save(out_path)
print("Saved comparison to:", out_path)

