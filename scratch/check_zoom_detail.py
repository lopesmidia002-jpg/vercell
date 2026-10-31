import numpy as np
from PIL import Image

im1 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475351304_dedc412b.jpg')
im2 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png')

print("im1 info:", im1.size)
print("im2 info:", im2.size)

# Let's save a visual comparison of im1 and im2 scaled to the same card width
# In im1, card width is ~783, card height is ~541
# In im2, card width is ~616, card height is ~343 (wait! Card height in im2 is 343? Wait, why is im2 card height 343?)
