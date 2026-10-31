import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_img = os.path.join(brain_dir, ".user_uploaded", "media_1793453396470_cfbbb98e.png")
local_img = os.path.join(brain_dir, "abrir_minha_conta_after.png")

im_u = Image.open(user_img).convert("RGBA")
im_l = Image.open(local_img).convert("RGBA")

target_w = 700
comp = Image.new("RGBA", (target_w, 240), (246, 247, 242, 255))
draw = ImageDraw.Draw(comp)

draw.text((20, 15), "Antes: Abrir minha conta (Captura usuario - com negrito)", fill=(120, 120, 120))
# user image scaled x1.8
u_w = int(im_u.width * 1.8)
u_h = int(im_u.height * 1.8)
im_u_res = im_u.resize((u_w, u_h), Image.Resampling.LANCZOS)
comp.paste(im_u_res, (20, 40), im_u_res)

draw.text((360, 15), "Depois: Abrir minha conta (Sem negrito / font-light / 300)", fill=(91, 117, 0))
# local image scaled
comp.paste(im_l, (360, 40))

out_path = os.path.join(brain_dir, "abrir_minha_conta_unbold_comparison.png")
comp.save(out_path)
print("Saved", out_path)

