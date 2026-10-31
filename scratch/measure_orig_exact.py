from PIL import Image
import numpy as np

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')
arr = np.array(orig)

# In orig:
# Find card borders
card_left = 999
card_right = 0
card_top = 999
card_bottom = 0

for y in range(arr.shape[0]):
    for x in range(arr.shape[1]):
        p = arr[y, x]
        if p[0] > 250 and p[1] > 250 and p[2] > 250:
            if x < card_left: card_left = x
            if x > card_right: card_right = x
            if y < card_top: card_top = y
            if y > card_bottom: card_bottom = y

card_w = card_right - card_left
card_h = card_bottom - card_top
print(f"Orig Card: left={card_left}, right={card_right}, top={card_top}, bottom={card_bottom}")
print(f"Orig Card dimensions: width={card_w}, height={card_h}")

# Now let's find where the laptops start in x and y (excluding text at the top)
# Text is at y < 190, laptops are at y >= 190
lap_pixels = []
for y in range(190, card_bottom + 1):
    for x in range(card_left, card_right + 1):
        p = arr[y, x]
        # not pure white card background
        if not (p[0] >= 253 and p[1] >= 253 and p[2] >= 253):
            lap_pixels.append((x, y))

lap_x = [p[0] for p in lap_pixels]
lap_y = [p[1] for p in lap_pixels]

lap_min_x = min(lap_x)
lap_max_x = max(lap_x)
lap_min_y = min(lap_y)
lap_max_y = max(lap_y)

print(f"Laptops in Orig: x=[{lap_min_x}, {lap_max_x}], y=[{lap_min_y}, {lap_max_y}]")
print(f"Laptops width: {lap_max_x - lap_min_x} px ({ (lap_max_x - lap_min_x) / card_w :.1%} of card width)")
print(f"Laptops height: {lap_max_y - lap_min_y} px ({ (lap_max_y - lap_min_y) / card_h :.1%} of card height)")
print(f"Laptops left offset: {lap_min_x - card_left} px ({ (lap_min_x - card_left) / card_w :.1%} of card width)")
print(f"Laptops right margin: {card_right - lap_max_x} px")
print(f"Laptops bottom margin: {card_bottom - lap_max_y} px")

