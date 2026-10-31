from PIL import Image
import numpy as np

crop_best = Image.open("scratch/crop_best_150_100.png").convert('RGB')
im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')

arr_best = np.array(crop_best)
arr_ref = np.array(im_ref)

# Card right edge in crop_best:
bg_mask_best = (arr_best[:, :, 0] > 240) & (arr_best[:, :, 1] > 242) & (arr_best[:, :, 2] > 237) & (arr_best[:, :, 2] < 246)
bg_mask_ref = (arr_ref[:, :, 0] > 240) & (arr_ref[:, :, 1] > 242) & (arr_ref[:, :, 2] > 237) & (arr_ref[:, :, 2] < 246)

# Find purple in both:
p_b = (arr_best[:, :, 2] > 180) & (arr_best[:, :, 0] > 100) & (arr_best[:, :, 1] < 150)
p_r = (arr_ref[:, :, 2] > 180) & (arr_ref[:, :, 0] > 100) & (arr_ref[:, :, 1] < 150)

py_b, px_b = np.where(p_b)
py_r, px_r = np.where(p_r)

print(f"im_ref purple: x in [{px_r.min()}, {px_r.max()}], y in [{py_r.min()}, {py_r.max()}]")
print(f"crop_best purple: x in [{px_b.min()}, {px_b.max()}], y in [{py_b.min()}, {py_b.max()}]")

# Keyboard in both:
kb_b = (arr_best[:, :, 0] < 60) & (arr_best[:, :, 1] < 60) & (arr_best[:, :, 2] < 60)
kb_r = (arr_ref[:, :, 0] < 60) & (arr_ref[:, :, 1] < 60) & (arr_ref[:, :, 2] < 60)

kby_b, kbx_b = np.where(kb_b)
kby_r, kbx_r = np.where(kb_r)

print(f"im_ref keyboard max y: {kby_r.max()}, max x in corner: {kbx_r[kby_r > 200].max()}")
print(f"crop_best keyboard max y: {kby_b.max()}, max x in corner: {kbx_b[kby_b > 200].max()}")

