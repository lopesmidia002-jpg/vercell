from PIL import Image
import numpy as np

mockup = Image.open(r"c:\Users\Nilto\OneDrive\Documentos\Projetos out26\versel\asserts\public\assets\MacBook-Air-2022-3.webp")
print("mockup mode:", mockup.mode, "size:", mockup.size)

arr = np.array(mockup)
alpha = arr[:, :, 3]

# Where are non-transparent pixels in mockup?
non_empty_y, non_empty_x = np.where(alpha > 10)
print(f"Mockup non-empty x: [{non_empty_x.min()}, {non_empty_x.max()}], y: [{non_empty_y.min()}, {non_empty_y.max()}]")
print(f"Total width: {mockup.width}, height: {mockup.height}")
print(f"Bottom empty space: {mockup.height - 1 - non_empty_y.max()} px")

