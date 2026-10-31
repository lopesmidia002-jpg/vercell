import os
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_abrir = os.path.join(brain_dir, ".user_uploaded", "media_1793453256267_6aef18e5.png")
user_row1 = os.path.join(brain_dir, ".user_uploaded", "media_1793453313865_dab1822f.png")
user_row2 = os.path.join(brain_dir, ".user_uploaded", "media_1793453324026_e33bb9fb.png")

local_abrir = os.path.join(brain_dir, "bento_abrir_conta_after.png")
local_row1 = os.path.join(brain_dir, "solutions_row1_after.png")
local_row2 = os.path.join(brain_dir, "solutions_row2_after.png")

# 1. Abrir conta gratis comparison
im_u_abrir = Image.open(user_abrir).convert("RGBA")
im_l_abrir = Image.open(local_abrir).convert("RGBA")

# Resize both to reasonable scale for side-by-side comparison
w_card = max(im_u_abrir.width * 2, im_l_abrir.width)
h_card = max(im_u_abrir.height * 2, im_l_abrir.height)

comp_abrir = Image.new("RGBA", (800, 200), (246, 247, 242, 255))
draw = ImageDraw.Draw(comp_abrir)
draw.text((30, 20), "Antes (Com Negrito / font-semibold - Referencia usuario)", fill=(100, 100, 100))
draw.text((430, 20), "Depois (Sem Negrito / font-normal)", fill=(91, 117, 0))

# paste user image scaled
u_scaled = im_u_abrir.resize((im_u_abrir.width * 2, im_u_abrir.height * 2), Image.Resampling.LANCZOS)
comp_abrir.paste(u_scaled, (30, 60), u_scaled)

# paste local image
comp_abrir.paste(im_l_abrir, (430, 60))

out_abrir = os.path.join(brain_dir, "abrir_conta_unbold_comparison.png")
comp_abrir.save(out_abrir)
print("Saved", out_abrir)

# 2. Solutions titles comparison
im_u_r1 = Image.open(user_row1).convert("RGBA")
im_l_r1 = Image.open(local_row1).convert("RGBA")

im_u_r2 = Image.open(user_row2).convert("RGBA")
im_l_r2 = Image.open(local_row2).convert("RGBA")

# Build a clean stacked card comparison
target_w = 1100
comp_sol = Image.new("RGBA", (target_w, 400), (246, 247, 242, 255))
draw_sol = ImageDraw.Draw(comp_sol)

# Row 1
draw_sol.text((20, 15), "Antes: SaaS / E-commerce / Infoproduto (Captura usuario - com negrito)", fill=(120, 120, 120))
r1_u_w = int(im_u_r1.width * 0.95)
r1_u_h = int(im_u_r1.height * 0.95)
im_u_r1_res = im_u_r1.resize((r1_u_w, r1_u_h), Image.Resampling.LANCZOS)
comp_sol.paste(im_u_r1_res, (20, 40), im_u_r1_res)

draw_sol.text((20, 95), "Depois: SaaS / E-commerce / Infoproduto (Sem negrito / font-light / Helvetica Neue Light 300)", fill=(91, 117, 0))
r1_l_w = int(im_l_r1.width * 0.9)
r1_l_h = int(im_l_r1.height * 0.9)
im_l_r1_res = im_l_r1.resize((r1_l_w, r1_l_h), Image.Resampling.LANCZOS)
comp_sol.paste(im_l_r1_res, (20, 120))

# Row 2
draw_sol.text((20, 200), "Antes: ERP / Gateways e plataformas / Nicho hot (Captura usuario - com negrito)", fill=(120, 120, 120))
r2_u_w = int(im_u_r2.width * 0.95)
r2_u_h = int(im_u_r2.height * 0.95)
im_u_r2_res = im_u_r2.resize((r2_u_w, r2_u_h), Image.Resampling.LANCZOS)
comp_sol.paste(im_u_r2_res, (20, 225), im_u_r2_res)

draw_sol.text((20, 285), "Depois: ERP / Gateways e plataformas / Nicho hot (Sem negrito / font-light / Helvetica Neue Light 300)", fill=(91, 117, 0))
r2_l_w = int(im_l_r2.width * 0.9)
r2_l_h = int(im_l_r2.height * 0.9)
im_l_r2_res = im_l_r2.resize((r2_l_w, r2_l_h), Image.Resampling.LANCZOS)
comp_sol.paste(im_l_r2_res, (20, 310))

out_sol = os.path.join(brain_dir, "solutions_titles_unbold_comparison.png")
comp_sol.save(out_sol)
print("Saved", out_sol)

