from PIL import Image
import numpy as np

cur = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')
arr = np.array(cur)

# In current render:
# Find right laptop keyboard and right laptop top bezel:
# Purple donut was at x ~ 759, y ~ 426
# Let's inspect the corner area around x in [650, 808], y in [300, 530]

print("Scanning current render corner:")
for y in range(350, 528, 15):
    dark_in_row = np.where(arr[y, 650:805, 0] < 60)[0]
    if len(dark_in_row) > 0:
        print(f"y={y:3d}: dark pixels x range [{650 + dark_in_row.min()}, {650 + dark_in_row.max()}], count={len(dark_in_row)}")
    else:
        print(f"y={y:3d}: no dark pixels")

