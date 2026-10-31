from PIL import Image, ImageDraw, ImageFont

# Load images
im_u1 = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793450947550_7a1315cf.png')
im_u2 = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793450985797_56c64aa2.png')

im_dev_after = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\dev_mobile_left_aligned.png')
im_sec_after = Image.open(r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\security_mobile_left_aligned.png')

# Create comparison canvas
# Column 1: ANTES (User screenshots)
# Column 2: DEPOIS (Rendered mobile layout: single line title + left-justified subtitles & lists)
target_w = 900
target_h = 1100
canvas = Image.new('RGB', (target_w, target_h), (246, 247, 242))
draw = ImageDraw.Draw(canvas)

# Headers
draw.rectangle([(0, 0), (target_w, 45)], fill=(20, 20, 22))
draw.text((25, 12), "COMPARATIVO VISUAL: AJUSTE DE TITULO EM 1 LINHA E SUBTITULOS JUSTIFICADOS A ESQUERDA", fill=(210, 251, 7))

# Section 1: DevSection Title & Subtitles
draw.rectangle([(20, 60), (430, 95)], fill=(230, 232, 225))
draw.text((30, 70), "ANTES (Enviado pelo usuario)", fill=(180, 40, 40))

draw.rectangle([(470, 60), (880, 95)], fill=(230, 232, 225))
draw.text((480, 70), "DEPOIS (Linha unica + Justificado a esquerda)", fill=(30, 130, 30))

# Paste user image 2 (title in 2 lines)
u2_w = 390
u2_h = int(im_u2.height * u2_w / im_u2.width)
u2_resized = im_u2.resize((u2_w, u2_h), Image.Resampling.LANCZOS)
canvas.paste(u2_resized, (30, 110))

# Paste user image 1 (subtitle centered)
u1_w = 390
u1_h = int(im_u1.height * u1_w / im_u1.width)
u1_resized = im_u1.resize((u1_w, u1_h), Image.Resampling.LANCZOS)
canvas.paste(u1_resized, (30, 110 + u2_h + 15))

# Paste after DevSection crop
# im_dev_after is 780x1120 (since scale=2). Let's resize it to width 390
dev_after_w = 400
dev_after_h = int(im_dev_after.height * dev_after_w / im_dev_after.width)
dev_after_resized = im_dev_after.resize((dev_after_w, dev_after_h), Image.Resampling.LANCZOS)
# Crop to top 550px
dev_crop = dev_after_resized.crop((0, 0, dev_after_w, min(520, dev_after_h)))
canvas.paste(dev_crop, (475, 110))

# Bottom row: SecuritySection after
draw.rectangle([(20, 650), (880, 685)], fill=(230, 232, 225))
draw.text((30, 660), "PROPAGACAO NAS DEMAIS SECOES: SecuritySection com subtitulo e canais justificados a esquerda", fill=(40, 40, 40))

sec_w = 400
sec_h = int(im_sec_after.height * sec_w / im_sec_after.width)
sec_resized = im_sec_after.resize((sec_w, sec_h), Image.Resampling.LANCZOS)
sec_crop = sec_resized.crop((0, 0, sec_w, min(370, sec_h)))
canvas.paste(sec_crop, (250, 700))

out_path = r'C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\subtitles_mobile_comparison.png'
canvas.save(out_path)
print("Saved comparison:", out_path)

