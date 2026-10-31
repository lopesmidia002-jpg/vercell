from PIL import Image
import numpy as np

cur_card = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')
arr_cur = np.array(cur_card)

# Purple mask
purple_mask_cur = (arr_cur[:, :, 2] > 180) & (arr_cur[:, :, 0] > 100) & (arr_cur[:, :, 1] < 150)
py, px = np.where(purple_mask_cur)

print(f"Total purple pixels: {len(px)}")
# Group purple pixels by x
for x_start in range(0, cur_card.width, 100):
    mask_slice = (px >= x_start) & (px < x_start + 100)
    if np.sum(mask_slice) > 0:
        print(f"x in [{x_start}, {x_start+100}]: {np.sum(mask_slice)} pixels, x mean = {px[mask_slice].mean():.1f}, y mean = {py[mask_slice].mean():.1f}")

