from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr2 = np.array(im2)

# Let's inspect what is in im2:
# What charts are there?
# Green wave chart:
green_mask = (arr2[:, :, 1] > 140) & (arr2[:, :, 0] < 120) & (arr2[:, :, 2] < 120)
gy, gx = np.where(green_mask)
print(f"Green pixels: count={len(gx)}, x range=[{gx.min() if len(gx) else 0}, {gx.max() if len(gx) else 0}], y range=[{gy.min() if len(gy) else 0}, {gy.max() if len(gy) else 0}]")

# Purple donut:
purple_mask = (arr2[:, :, 2] > 180) & (arr2[:, :, 0] > 100) & (arr2[:, :, 1] < 150)
py, px = np.where(purple_mask)
print(f"Purple pixels: count={len(px)}, x range=[{px.min() if len(px) else 0}, {px.max() if len(px) else 0}], y range=[{py.min() if len(py) else 0}, {py.max() if len(py) else 0}]")

# Blue bars?
blue_mask = (arr2[:, :, 2] > 180) & (arr2[:, :, 0] < 120)
by, bx = np.where(blue_mask)
print(f"Blue pixels: count={len(bx)}, x range=[{bx.min() if len(bx) else 0}, {bx.max() if len(bx) else 0}], y range=[{by.min() if len(by) else 0}, {by.max() if len(by) else 0}]")

# Orange line?
orange_mask = (arr2[:, :, 0] > 200) & (arr2[:, :, 1] > 120) & (arr2[:, :, 1] < 180) & (arr2[:, :, 2] < 100)
oy, ox = np.where(orange_mask)
print(f"Orange pixels: count={len(ox)}, x range=[{ox.min() if len(ox) else 0}, {ox.max() if len(ox) else 0}], y range=[{oy.min() if len(oy) else 0}, {oy.max() if len(oy) else 0}]")

