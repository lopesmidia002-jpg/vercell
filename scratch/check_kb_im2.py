from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr2 = np.array(im2)

for y in range(160, 230, 5):
    dark_in_row = np.where(arr2[y, :, 0] < 60)[0]
    if len(dark_in_row) > 0:
        print(f"y={y:3d}: dark pixels x range [{dark_in_row.min()}, {dark_in_row.max()}], count={len(dark_in_row)}")
    else:
        print(f"y={y:3d}: no dark pixels")

