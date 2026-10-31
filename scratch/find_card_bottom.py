from PIL import Image
import numpy as np

cur = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')
arr = np.array(cur)

# In current render, background outside the card is #F6F7F2 (approx [246, 247, 242])
# Card background is #FFFFFF [255, 255, 255]
# Let's find the card's bottom border at x = 700
for y in range(480, 530):
    print(f"y={y}: color at x=700 is {arr[y, 700]}, color at x=780 is {arr[y, 780]}")

