from PIL import Image
import numpy as np

full = Image.open(r"scratch/card6_exact_viewport.png")
print("size:", full.size)

# Let's inspect colors in the bottom right of full
arr = np.array(full.convert('RGB'))
print("Min pixel:", arr.min(), "Max pixel:", arr.max())

# Let's check non-white pixels
non_white = np.where((arr[:, :, 0] < 240) | (arr[:, :, 1] < 240) | (arr[:, :, 2] < 240))
print("Non-white pixel count:", len(non_white[0]))
if len(non_white[0]) > 0:
    print(f"Non-white y range: [{non_white[0].min()}, {non_white[0].max()}], x range: [{non_white[1].min()}, {non_white[1].max()}]")

