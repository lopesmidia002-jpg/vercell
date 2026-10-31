from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr2 = np.array(im2)

# Check what colors are in the region x in [80, 117], y in [100, 220]
# Is there red mountain chart?
# Red mountain chart has high red, low green and blue
red_mask = (arr2[:, :, 0] > 180) & (arr2[:, :, 1] < 120) & (arr2[:, :, 2] < 120)
ry, rx = np.where(red_mask)
print(f"Red pixels in im2: count={len(rx)}, x range=[{rx.min() if len(rx) else 0}, {rx.max() if len(rx) else 0}], y range=[{ry.min() if len(ry) else 0}, {ry.max() if len(ry) else 0}]")

# Is there dark keyboard?
# Dark keyboard has RGB < 50
dark_mask = (arr2[:, :, 0] < 60) & (arr2[:, :, 1] < 60) & (arr2[:, :, 2] < 60)
dy, dx = np.where(dark_mask)
print(f"Dark pixels in im2: count={len(dx)}, x range=[{dx.min() if len(dx) else 0}, {dx.max() if len(dx) else 0}], y range=[{dy.min() if len(dy) else 0}, {dy.max() if len(dy) else 0}]")

# Let's inspect where the keyboard is:
# Does keyboard reach x=115?
kb_at_corner = (arr2[200:220, 80:115, 0] < 80)
print(f"Keyboard pixels in corner (y: 200-220, x: 80-115): {np.sum(kb_at_corner)}")

