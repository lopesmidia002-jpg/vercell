from PIL import Image
import numpy as np

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png')
curr = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475351304_dedc412b.jpg')

print("orig size:", orig.size)
print("curr size:", curr.size)

# In orig:
# Where is the card bottom?
# Let's inspect column 100 from top to bottom
arr_orig = np.array(orig)
# Find card bottom border in column 100
for y in range(arr_orig.shape[0]-1, -1, -1):
    pixel = arr_orig[y, 100]
    # If pixel is near #FFFFFF
    if pixel[0] > 250 and pixel[1] > 250 and pixel[2] > 250:
        print("orig card bottom at col 100:", y)
        break

# In orig, where is the notch of the middle laptop?
# Middle laptop screen is roughly x around 520 (let's check)
# Let's find dark pixels near middle laptop top
# Let's scan x from 450 to 600, y from 100 to 250
notch_y = 999
notch_x = 0
for y in range(100, 250):
    for x in range(400, 600):
        # notch is black
        if arr_orig[y, x, 0] < 30 and arr_orig[y, x, 1] < 30 and arr_orig[y, x, 2] < 30:
            if y < notch_y:
                notch_y = y
                notch_x = x
print(f"orig middle laptop top: x={notch_x}, y={notch_y}")

# In orig, where is the bottom of the middle laptop?
# Let's check below the screen at notch_x
bottom_laptop_y = 0
for y in range(notch_y, arr_orig.shape[0]):
    if arr_orig[y, notch_x, 0] < 50 and arr_orig[y, notch_x, 1] < 50 and arr_orig[y, notch_x, 2] < 50:
        bottom_laptop_y = y
print(f"orig middle laptop dark pixel bottom at x={notch_x}: y={bottom_laptop_y}")

# Let's find where the left laptop starts and where the right laptop ends in orig
left_x = 999
right_x = 0
for y in range(150, arr_orig.shape[0]):
    for x in range(arr_orig.shape[1]):
        if arr_orig[y, x, 0] < 40 and arr_orig[y, x, 1] < 40 and arr_orig[y, x, 2] < 40:
            if x < left_x:
                left_x = x
            if x > right_x:
                right_x = x
print(f"orig laptops horizontal span: x=[{left_x}, {right_x}], width={right_x - left_x}")

