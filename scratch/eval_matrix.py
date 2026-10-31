import glob
from PIL import Image
import numpy as np

im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')
arr_ref = np.array(im_ref)

# Ref measurements:
purple_ref = (arr_ref[:, :, 2] > 180) & (arr_ref[:, :, 0] > 100) & (arr_ref[:, :, 1] < 150)
pyr, pxr = np.where(purple_ref)
# Card right border in im_ref is at 117, bottom is at 222
ref_donut_right = pxr.max()
ref_donut_bottom = pyr.max()
ref_dist_to_right = 117 - ref_donut_right
ref_dist_to_bottom = 222 - ref_donut_bottom

print(f"REFERENCE (bae9590b):")
print(f"  Purple donut right edge to card right: {ref_dist_to_right} px")
print(f"  Purple donut bottom to card bottom: {ref_dist_to_bottom} px")

# Check keyboard in im_ref:
kb_ref = (arr_ref[:, :, 0] < 60) & (arr_ref[:, :, 1] < 60) & (arr_ref[:, :, 2] < 60)
kby_r, kbx_r = np.where(kb_ref)
print(f"  Keyboard max y: {kby_r.max()} (dist to card bottom: {222 - kby_r.max()} px)")
print(f"  Keyboard max x in corner: {kbx_r[kby_r > 200].max()}")

print("\nEVALUATING CANDIDATES:")
files = sorted(glob.glob("scratch/shot_*.png"))

results = []
for f in files:
    img = Image.open(f).convert('RGB')
    arr = np.array(img)
    
    # In shot files, card has 5px margin around 798x520 card
    # Card right border: 808 - 5 = 803
    # Card bottom border: 530 - 5 = 525
    card_r = img.width - 5
    card_b = img.height - 5
    
    purple = (arr[:, :, 2] > 180) & (arr[:, :, 0] > 100) & (arr[:, :, 1] < 150)
    py, px = np.where(purple)
    
    # filter purple only on right laptop (x > 600)
    right_laptop_purple = px > 600
    if np.sum(right_laptop_purple) == 0:
        continue
    px_rl = px[right_laptop_purple]
    py_rl = py[right_laptop_purple]
    
    donut_right = px_rl.max()
    donut_bottom = py_rl.max()
    dist_r = card_r - donut_right
    dist_b = card_b - donut_bottom
    
    # Keyboard
    kb = (arr[:, :, 0] < 60) & (arr[:, :, 1] < 60) & (arr[:, :, 2] < 60)
    kby, kbx = np.where(kb)
    rl_kb = (kbx > 600) & (kby > 400)
    kb_max_y = kby[rl_kb].max() if np.sum(rl_kb) > 0 else 0
    kb_dist_b = card_b - kb_max_y
    
    score_r = abs(dist_r - ref_dist_to_right)
    score_b = abs(dist_b - ref_dist_to_bottom)
    score_kb = abs(kb_dist_b - (222 - kby_r.max()))
    total_error = score_r + score_b + score_kb
    
    tag = f.replace("scratch/shot_", "").replace(".png", "")
    results.append({
        'tag': tag,
        'dist_r': dist_r,
        'dist_b': dist_b,
        'kb_dist_b': kb_dist_b,
        'error': total_error,
        'file': f
    })
    print(f"[{tag}] dist_r={dist_r} (diff={score_r:+d}), dist_b={dist_b} (diff={score_b:+d}), kb_dist_b={kb_dist_b} (diff={score_kb:+d}), total_error={total_error}")

results.sort(key=lambda x: x['error'])
best = results[0]
print(f"\nBEST CONFIG: {best['tag']} with error={best['error']}")

