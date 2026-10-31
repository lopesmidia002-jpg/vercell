import os
from PIL import Image

brain_dir = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0"

comp_src = r"scratch\final_zoom_comparison.png"
after_src = r"scratch\responsive_desktop_1280.png"

comp_dest = os.path.join(brain_dir, "card6_laptop_zoom_reduced_comparison.png")
after_dest = os.path.join(brain_dir, "card6_laptop_zoom_reduced_after.png")

Image.open(comp_src).save(comp_dest)
Image.open(after_src).save(after_dest)

print("Saved artifacts to brain dir:")
print(comp_dest)
print(after_dest)
