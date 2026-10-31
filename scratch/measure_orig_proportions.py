from PIL import Image
import numpy as np

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png')
arr = np.array(orig)

# Card bounding box in orig
# Card background is pure white #FFFFFF (255, 255, 255)
# Outside is #F6F7F2 (~246, 247, 242)
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

print(f"Orig Card: left={card_left}, right={card_right}, top={card_top}, bottom={card_bottom}")
card_w = card_right - card_left
card_h = card_bottom - card_top
print(f"Orig Card dimensions: width={card_w}, height={card_h}")

# Laptops in orig
# Laptop pixels are darker than white, in the region y > 150
# Let's find laptop bounding box
lap_left = 999
lap_right = 0
lap_top = 999
lap_bottom = 0

for y in range(card_top, card_bottom + 1):
    for x in range(card_left, card_right + 1):
        p = arr[y, x]
        # not pure white background or text
        # text is located in x < 400, y < 190
        # laptops are in y > 160 or x > 200
        if y > 180 or (x > 220 and y > 160):
            # check if dark pixel belonging to laptop (bezel, keyboard, screen graphics)
            if p[0] < 240 or p[1] < 240 or p[2] < 240:
                if x < lap_left: lap_left = x
                if x > lap_right: lap_right = x
                if y < lap_top: lap_top = y
                if y > lap_bottom: lap_bottom = y

print(f"Orig Laptops: left={lap_left}, right={lap_right}, top={lap_top}, bottom={lap_bottom}")
lap_w = lap_right - lap_left
lap_h = lap_bottom - lap_top
print(f"Orig Laptops dimensions: width={lap_w}, height={lap_h}")

print(f"\n--- PROPORTIONS IN ORIGINAL ---")
print(f"Laptop Width / Card Width: {lap_w / card_w:.1%}")
print(f"Laptop Height / Card Height: {lap_h / card_h:.1%}")
print(f"Laptop Left Offset / Card Width: {(lap_left - card_left) / card_w:.1%}")
print(f"Laptop Right Bleed / Card Width: {(card_right - lap_right) / card_w:.1%}")
print(f"Laptop Top Offset / Card Height: {(lap_top - card_top) / card_h:.1%}")
print(f"Laptop Bottom Offset from Card Bottom: {card_bottom - lap_bottom}px")

# Also find where the middle laptop notch and screen are
# Let's find the middle laptop top notch exactly
# scan y from 160 to 220, x from 350 to 450
min_notch_y = 999
for y in range(160, 230):
    for x in range(350, 450):
        p = arr[y, x]
        if p[0] < 50 and p[1] < 50 and p[2] < 50:
            if y < min_notch_y:
                min_notch_y = y
                notch_x = x

print(f"Middle Laptop Notch: x={notch_x} ({(notch_x - card_left) / card_w:.1%} of card width), y={min_notch_y} ({(min_notch_y - card_top) / card_h:.1%} of card height)")
