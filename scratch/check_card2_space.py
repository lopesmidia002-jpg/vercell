from PIL import Image
import numpy as np

im = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475724053_19fdf355.png').convert('RGB')
arr = np.array(im)

# Find bottom edge of the card
# Card is white, outside bottom is darker
for y in range(arr.shape[0]-1, -1, -1):
    # check row
    if np.mean(arr[y, 100:300]) > 245:
        print(f"Card bottom around y={y}")
        break

# Find text position
# Text "do seu sistema."
# scan y from 50 to 200
text_bottom_y = 0
for y in range(50, 250):
    # dark pixels of text (R,G,B < 150)
    for x in range(20, 300):
        if np.all(arr[y, x] < 150):
            if y > text_bottom_y:
                text_bottom_y = y

print(f"Text ends at y={text_bottom_y}")
print(f"Empty space below text: {y - text_bottom_y}px")

