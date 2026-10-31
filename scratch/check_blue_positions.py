from PIL import Image
import numpy as np

cur_card = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')
arr_cur = np.array(cur_card)

blue_mask = (arr_cur[:, :, 2] > 180) & (arr_cur[:, :, 0] < 120)
by, bx = np.where(blue_mask)

print("Total blue pixels in cur_card:", len(bx))
for x_start in range(0, cur_card.width, 100):
    mask_slice = (bx >= x_start) & (bx < x_start + 100)
    if np.sum(mask_slice) > 0:
        print(f"Blue pixels x in [{x_start}, {x_start+100}]: {np.sum(mask_slice)} pixels")

