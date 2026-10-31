from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr2 = np.array(im2)

# Background color outside the card is roughly [244-248, 245-249, 240-244]
bg_mask = (arr2[:, :, 0] > 240) & (arr2[:, :, 1] > 242) & (arr2[:, :, 2] > 237) & (arr2[:, :, 2] < 246)
# Save mask to see card contour
mask_img = Image.fromarray((~bg_mask * 255).astype(np.uint8))
mask_img.save(r"scratch/im2_card_mask.png")

# Let's inspect the card corner shape and position
# In im2:
print("im2 size:", im2.size)

# Find the rightmost non-bg pixel for each row
for y in range(0, im2.height, 10):
    row = np.where(~bg_mask[y, :])[0]
    if len(row) > 0:
        print(f"y={y:3d}: rightmost card pixel x={row.max():3d}, leftmost x={row.min():3d}")
    else:
        print(f"y={y:3d}: all background")

