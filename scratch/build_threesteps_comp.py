import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_img = os.path.join(brain_dir, ".user_uploaded", "media_1793453377585_ad0fd42f.png")
local_img = os.path.join(brain_dir, "threesteps_titles_after.png")

im_u = Image.open(user_img).convert("RGBA")
im_l = Image.open(local_img).convert("RGBA")

target_w = 1100
comp = Image.new("RGBA", (target_w, 240), (246, 247, 242, 255))
draw = ImageDraw.Draw(comp)

draw.text((20, 15), "Antes: Fale com a gente / Conta aprovada / Integre e receba (Captura usuario - com negrito)", fill=(120, 120, 120))
u_w = int(im_u.width * 0.95)
u_h = int(im_u.height * 0.95)
im_u_res = im_u.resize((u_w, u_h), Image.Resampling.LANCZOS)
comp.paste(im_u_res, (20, 40), im_u_res)

draw.text((20, 120), "Depois: Fale com a gente / Conta aprovada / Integre e receba (Sem negrito / font-light / Helvetica Neue Light 300)", fill=(91, 117, 0))
l_w = int(im_l.width * 0.9)
l_h = int(im_l.height * 0.9)
im_l_res = im_l.resize((l_w, l_h), Image.Resampling.LANCZOS)
comp.paste(im_l_res, (20, 145))

out_path = os.path.join(brain_dir, "threesteps_unbold_comparison.png")
comp.save(out_path)
print("Saved", out_path)

