import os
from PIL import Image, ImageDraw

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"
user_before = os.path.join(brain_dir, ".user_uploaded", "media_1793453655428_c0209d52.png")
local_after = os.path.join(brain_dir, "prefooter_icons_after.png")

im_u = Image.open(user_before).convert("RGBA")
im_l = Image.open(local_after).convert("RGBA")

target_w = 600
comp = Image.new("RGBA", (target_w, 200), (16, 17, 20, 255))
draw = ImageDraw.Draw(comp)

draw.text((20, 15), "Antes (Espacamento largo - 28px):", fill=(160, 160, 160))
comp.paste(im_u, (20, 40))

draw.text((20, 110), "Depois (Espacamento reduzido e calibrado - 18px / gap-1.5):", fill=(210, 251, 7))
comp.paste(im_l, (20, 135))

out_path = os.path.join(brain_dir, "prefooter_icons_spacing_comparison.png")
comp.save(out_path)
print("Saved", out_path)

