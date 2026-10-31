from PIL import Image

p_art = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\card6_laptops_shift_right_after.png"
p_ref = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png"
p_cur_user = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png"

im_art = Image.open(p_art)
im_ref = Image.open(p_ref)
im_cur_user = Image.open(p_cur_user)

print("im_art:", im_art.size)
print("im_ref:", im_ref.size)
print("im_cur_user:", im_cur_user.size)

# Crop corner of im_art
w, h = im_art.size
corner_art = im_art.crop((w - 200, h - 300, w, h))
corner_art.save("scratch/corner_art.png")

# Now create a 3-way comparison:
# 1. im_cur_user (what user flagged as different)
# 2. im_ref (the original reference that user wants it to look like)
# 3. corner_art (what step 50 produced)
H = max(im_cur_user.height, im_ref.height, corner_art.height) + 60
W = im_cur_user.width + im_ref.width + corner_art.width + 80
comp = Image.new('RGB', (W, H), (255, 255, 255))
comp.paste(im_cur_user, (20, 30))
comp.paste(im_ref, (im_cur_user.width + 40, 30))
comp.paste(corner_art, (im_cur_user.width + im_ref.width + 60, 30))
comp.save("scratch/compare_step50_vs_user.png")
print("Saved scratch/compare_step50_vs_user.png")

