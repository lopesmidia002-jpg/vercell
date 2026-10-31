from PIL import Image
import numpy as np

im1 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png").convert('RGB')
arr1 = np.array(im1)

# Purple:
purple_mask = (arr1[:, :, 2] > 180) & (arr1[:, :, 0] > 100) & (arr1[:, :, 1] < 150)
py, px = np.where(purple_mask)
print(f"im1 Purple pixels: count={len(px)}, x range=[{px.min() if len(px) else 0}, {px.max() if len(px) else 0}], y range=[{py.min() if len(py) else 0}, {py.max() if len(py) else 0}]")

# Blue bars:
blue_mask = (arr1[:, :, 2] > 180) & (arr1[:, :, 0] < 120)
by, bx = np.where(blue_mask)
print(f"im1 Blue pixels: count={len(bx)}, x range=[{bx.min() if len(bx) else 0}, {bx.max() if len(bx) else 0}], y range=[{by.min() if len(by) else 0}, {by.max() if len(by) else 0}]")

# Orange line:
orange_mask = (arr1[:, :, 0] > 200) & (arr1[:, :, 1] > 120) & (arr1[:, :, 1] < 180) & (arr1[:, :, 2] < 100)
oy, ox = np.where(orange_mask)
print(f"im1 Orange pixels: count={len(ox)}, x range=[{ox.min() if len(ox) else 0}, {ox.max() if len(ox) else 0}], y range=[{oy.min() if len(oy) else 0}, {oy.max() if len(oy) else 0}]")

# Card boundary in im1:
bg_mask = (arr1[:, :, 0] > 240) & (arr1[:, :, 1] > 242) & (arr1[:, :, 2] > 237) & (arr1[:, :, 2] < 246)
print(f"im1 rightmost non-bg at y=100: {np.where(~bg_mask[100, :])[0].max() if len(np.where(~bg_mask[100, :])[0]) else 'none'}")

