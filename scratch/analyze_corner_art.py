from PIL import Image
import numpy as np

corner_art = Image.open("scratch/corner_art.png").convert('RGB')
im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')

arr_art = np.array(corner_art)
arr_ref = np.array(im_ref)

# Find purple in corner_art:
purple_art = (arr_art[:, :, 2] > 180) & (arr_art[:, :, 0] > 100) & (arr_art[:, :, 1] < 150)
py_a, px_a = np.where(purple_art)
if len(px_a) > 0:
    print(f"corner_art purple donut: x=[{px_a.min()}, {px_a.max()}], y=[{py_a.min()}, {py_a.max()}], size=({px_a.max() - px_a.min()}, {py_a.max() - py_a.min()})")
else:
    print("No purple in corner_art!")

# Find purple in im_ref:
purple_ref = (arr_ref[:, :, 2] > 180) & (arr_ref[:, :, 0] > 100) & (arr_ref[:, :, 1] < 150)
py_r, px_r = np.where(purple_ref)
print(f"im_ref purple donut: x=[{px_r.min()}, {px_r.max()}], y=[{py_r.min()}, {py_r.max()}], size=({px_r.max() - px_r.min()}, {py_r.max() - py_r.min()})")

# Look at card right edge in corner_art:
# corner_art is 200px wide, card right edge is at 190 (since 10px margin was added around 818px card)
# Distance from purple donut right edge to card right edge in corner_art:
if len(px_a) > 0:
    dist_art = 190 - px_a.max()
    print(f"corner_art: purple donut right edge to card border: {dist_art} px")

# In im_ref: card right edge is at 117
dist_ref = 117 - px_r.max()
print(f"im_ref: purple donut right edge to card border: {dist_ref} px")

