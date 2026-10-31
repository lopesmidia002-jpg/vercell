from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
cur_card = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')

# Let's find purple pixels in im2:
# Purple color: high R and B, low G (e.g. R around 100-160, G around 80-120, B around 200-255)
arr2 = np.array(im2)
purple_mask2 = (arr2[:, :, 2] > 180) & (arr2[:, :, 0] > 100) & (arr2[:, :, 1] < 150)
py2, px2 = np.where(purple_mask2)
if len(px2) > 0:
    print(f"im2 purple donut: x range [{px2.min()}, {px2.max()}], y range [{py2.min()}, {py2.max()}], center ({px2.mean():.1f}, {py2.mean():.1f})")
    print(f"im2 image width: {im2.width}, height: {im2.height}")
    print(f"Distance from purple donut right edge to im2 right edge: {im2.width - px2.max()}")

# Now in cur_card:
arr_cur = np.array(cur_card)
purple_mask_cur = (arr_cur[:, :, 2] > 180) & (arr_cur[:, :, 0] > 100) & (arr_cur[:, :, 1] < 150)
py_cur, px_cur = np.where(purple_mask_cur)
if len(px_cur) > 0:
    print(f"cur_card purple donut: x range [{px_cur.min()}, {px_cur.max()}], y range [{py_cur.min()}, {py_cur.max()}], center ({px_cur.mean():.1f}, {py_cur.mean():.1f})")
    print(f"cur_card width: {cur_card.width}, height: {cur_card.height}")
    # Card boundary in cur_card is at width - 5 (clip margin)
    print(f"Distance from purple donut right edge to card right edge: {cur_card.width - 5 - px_cur.max()}")
else:
    print("NO PURPLE FOUND IN cur_card!")

# Also let's find the card's right and bottom borders in im2
# Look at background outside the card in im2:
# What color is the bottom-right corner of im2?
print("im2 bottom right pixel colors:")
for dy in range(1, 20, 5):
    for dx in range(1, 20, 5):
        print(f"offset (-{dx}, -{dy}): {arr2[-dy, -dx]}")
