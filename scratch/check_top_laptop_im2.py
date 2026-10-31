from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr2 = np.array(im2)

# Find top black bezel of right laptop screen
# Laptop bezel has dark pixels (RGB < 50)
for y in range(0, 100, 5):
    dark_in_row = np.where(arr2[y, :, 0] < 50)[0]
    if len(dark_in_row) > 0:
        print(f"y={y:2d}: dark pixels x range [{dark_in_row.min()}, {dark_in_row.max()}], count={len(dark_in_row)}")
    else:
        print(f"y={y:2d}: no dark pixels")

