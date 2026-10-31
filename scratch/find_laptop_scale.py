import cv2
import numpy as np
from PIL import Image

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('RGB')
asset = Image.open(r'public/assets/MacBook-Air-2022-3.webp').convert('RGB')

orig_cv = np.array(orig)[:, :, ::-1]
asset_cv = np.array(asset)[:, :, ::-1]

# Let's find the scale of asset in orig
# We can template match a distinct feature: the notch of the central laptop, or the central laptop header
# Let's crop the central laptop header from asset
# In asset, central laptop screen center is roughly around x=1312, y=200
# Let's crop a 200x100 patch around the notch in asset
notch_patch = asset_cv[60:160, 1262:1362]

# Let's test different scales of asset_cv to find the best match with orig_cv
best_scale = None
best_val = -1
best_loc = None

for scale in np.linspace(0.15, 0.45, 60):
    resized_patch = cv2.resize(notch_patch, (0, 0), fx=scale, fy=scale)
    if resized_patch.shape[0] >= orig_cv.shape[0] or resized_patch.shape[1] >= orig_cv.shape[1]:
        continue
    res = cv2.matchTemplate(orig_cv, resized_patch, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    if max_val > best_val:
        best_val = max_val
        best_scale = scale
        best_loc = max_loc

print(f"Best match for orig: scale={best_scale:.4f}, confidence={best_val:.3f}, loc={best_loc}")

# At best_scale, what are the dimensions of the full asset?
scaled_w = int(asset_cv.shape[1] * best_scale)
scaled_h = int(asset_cv.shape[0] * best_scale)
print(f"At this scale, full asset dimensions would be: width={scaled_w}px, height={scaled_h}px")

# And where is the asset located relative to the card in orig?
# The notch patch was at (1262, 60) in asset
notch_scaled_x = int(1262 * best_scale)
notch_scaled_y = int(60 * best_scale)
asset_top_in_orig = best_loc[1] - notch_scaled_y
asset_left_in_orig = best_loc[0] - notch_scaled_x
print(f"Asset top in orig: y={asset_top_in_orig}px")
print(f"Asset left in orig: x={asset_left_in_orig}px")
print(f"Asset bottom in orig: y={asset_top_in_orig + scaled_h}px")
print(f"Asset right in orig: x={asset_left_in_orig + scaled_w}px")

# Card in orig was: left=27, right=643, width=616, top=2, bottom=345, height=343
card_w = 616
card_h = 343
card_left = 27
card_bottom = 345

print(f"\n--- RELATIVE TO CARD (width={card_w}, height={card_h}) ---")
print(f"Asset width / Card width: {scaled_w / card_w:.1%}")
print(f"Asset height / Card height: {scaled_h / card_h:.1%}")
print(f"Asset left offset from card left: {(asset_left_in_orig - card_left) / card_w:.1%}")
print(f"Asset right offset from card right: {(asset_left_in_orig + scaled_w - 643) / card_w:.1%}")
print(f"Asset bottom offset from card bottom: {asset_top_in_orig + scaled_h - card_bottom}px (overflow: {(asset_top_in_orig + scaled_h - card_bottom)/card_h:.1%})")
print(f"Asset top offset from card top: {(asset_top_in_orig - 2) / card_h:.1%}")

