from PIL import Image
import numpy as np

cur = Image.open(r"scratch/current_card6_rendered.png").convert('RGB')
arr = np.array(cur)

for y in range(470, 520, 5):
    print(f"y={y}: color at x=400 is {arr[y, 400]}")
