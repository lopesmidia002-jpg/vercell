from PIL import Image
import numpy as np

corner_art = Image.open("scratch/corner_art.png").convert('RGB')
arr_art = np.array(corner_art)

# In corner_art:
# Purple donut bottom is at y=233.
# Where is the keyboard?
for y in range(230, 300, 5):
    dark_in_row = np.where(arr_art[y, 100:190, 0] < 60)[0]
    if len(dark_in_row) > 0:
        print(f"y={y:3d}: dark pixels x range [{100 + dark_in_row.min()}, {100 + dark_in_row.max()}], count={len(dark_in_row)}")
    else:
        print(f"y={y:3d}: no dark pixels")

# Where is the card bottom border in corner_art?
# corner_art height is 300. Card bottom is at 300 - 10 = 290.
print("Card bottom border is at y = 290")

