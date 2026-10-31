import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_error = os.path.join(brain_dir, ".user_uploaded", "media_1793453452730_55e073e0.png")
user_original = os.path.join(brain_dir, ".user_uploaded", "media_1793453518218_89fb4e60.jpg")
local_fixed = os.path.join(brain_dir, "dev_section_fixed_shot.png")

im_err = Image.open(user_error).convert("RGBA")
im_orig = Image.open(user_original).convert("RGBA")
im_fix = Image.open(local_fixed).convert("RGBA")

# Build a clean 3-part or 2-part comparison
target_w = 1200
comp = Image.new("RGBA", (target_w, 640), (246, 247, 242, 255))
draw = ImageDraw.Draw(comp)

# Section 1: Erro reportado vs Original de referencia (topo)
draw.text((20, 15), "1. Erro Reportado (Texto cortado por forcar linha unica / colisao com terminal):", fill=(200, 30, 30))
err_w = int(im_err.width * 0.75)
err_h = int(im_err.height * 0.75)
im_err_res = im_err.resize((err_w, err_h), Image.Resampling.LANCZOS)
comp.paste(im_err_res, (20, 35), im_err_res)

draw.text((580, 15), "2. Original de Referencia (Quebra exata em 2 linhas):", fill=(100, 100, 100))
orig_w = int(im_orig.width * 0.58)
orig_h = int(im_orig.height * 0.58)
im_orig_res = im_orig.resize((orig_w, orig_h), Image.Resampling.LANCZOS)
comp.paste(im_orig_res, (580, 35))

# Section 2: Resultado Corrigido (embaixo)
draw.text((20, 320), "3. Resultado Corrigido (Fiel ao Original: 'API de Pix simples e' na linha 1 e 'robusta' na linha 2 sem colisao):", fill=(91, 117, 0))
fix_w = int(im_fix.width * 0.92)
fix_h = int(im_fix.height * 0.48)
# crop top portion of fixed shot
fix_crop = im_fix.crop((0, 0, im_fix.width, int(im_fix.height * 0.55)))
fix_crop_res = fix_crop.resize((fix_w, 280), Image.Resampling.LANCZOS)
comp.paste(fix_crop_res, (20, 345))

out_path = os.path.join(brain_dir, "dev_title_overlap_fixed_comparison.png")
comp.save(out_path)
print("Saved", out_path)

