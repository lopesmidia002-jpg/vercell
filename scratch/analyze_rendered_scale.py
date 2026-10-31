from PIL import Image
import numpy as np

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
full = Image.open(r"scratch/card6_exact_viewport.png").convert('RGB')

arr2 = np.array(im2)
arr_full = np.array(full)

# In im2:
# 1. Purple donut center and diameter:
purple_mask2 = (arr2[:, :, 2] > 180) & (arr2[:, :, 0] > 100) & (arr2[:, :, 1] < 150)
py2, px2 = np.where(purple_mask2)
donut_w_im2 = px2.max() - px2.min()
donut_h_im2 = py2.max() - py2.min()
print(f"im2 purple donut: bbox x=[{px2.min()}, {px2.max()}], y=[{py2.min()}, {py2.max()}], size=({donut_w_im2}, {donut_h_im2})")

# In full:
purple_mask_full = (arr_full[:, :, 2] > 180) & (arr_full[:, :, 0] > 100) & (arr_full[:, :, 1] < 150)
py_f, px_f = np.where(purple_mask_full)
donut_w_full = px_f.max() - px_f.min()
donut_h_full = py_f.max() - py_f.min()
print(f"full purple donut: bbox x=[{px_f.min()}, {px_f.max()}], y=[{py_f.min()}, {py_f.max()}], size=({donut_w_full}, {donut_h_full})")

# Scale ratio between full and im2:
scale = donut_w_full / donut_w_im2
print(f"Scale of purple donut (full vs im2): {scale:.3f}")

# Now in im2:
# Distance from right edge of purple donut (px2.max()=80) to right edge of card (117):
# 117 - 80 = 37px in im2.
# In full, that distance should be: 37 * scale = 37 * 0.94 = ~35px.
# What is the distance in full?
# Card right edge in full is at 818 - 10 = 808px.
card_right_full = 808
dist_full = card_right_full - px_f.max()
print(f"Distance from purple donut right edge to card right edge in full: {dist_full} px (expected: ~{37*scale:.1f} px)")

# Now check the keyboard bottom in full:
# Card bottom in full is at 540 - 10 = 530px.
# Where is the keyboard bottom in full?
kb_mask = (arr_full[:, :, 0] < 50) & (arr_full[:, :, 1] < 50) & (arr_full[:, :, 2] < 50)
kby, kbx = np.where(kb_mask)
print(f"Keyboard in full: max y = {kby.max()} (card bottom is at 530, so distance to card bottom is {530 - kby.max()} px)")

