import numpy as np
from PIL import Image

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png').convert('L')
asset = Image.open(r'public/assets/MacBook-Air-2022-3.webp').convert('L')

orig_arr = np.array(orig)
asset_arr = np.array(asset)

# In orig:
# Middle laptop notch is at x=400, y=212
# In asset:
# Let's find the middle laptop notch in asset
# Middle laptop notch is dark pixels in the top center of the middle laptop
# Let's find min y with dark pixels around x=1300 in asset
notch_y_asset = 999
notch_x_asset = 0
for y in range(40, 100):
    for x in range(1290, 1340):
        if asset_arr[y, x] < 20:
            if y < notch_y_asset:
                notch_y_asset = y
                notch_x_asset = x

print(f"Asset notch: x={notch_x_asset}, y={notch_y_asset}")

# Let's find the distance between the notch and the bottom of the central laptop screen in both images!
# In asset, where does the bottom bezel / hinge of central laptop screen occur?
# At x=notch_x_asset, scan down for the bottom bezel of the screen (around y=600-700)
# Screen is white (~250), then bezel is black (< 30)
hinge_y_asset = 0
for y in range(notch_y_asset + 50, 800):
    if asset_arr[y, notch_x_asset] < 30 and asset_arr[y-5, notch_x_asset] > 200:
        hinge_y_asset = y
        break

print(f"Asset central screen height (notch to hinge): {hinge_y_asset - notch_y_asset}px (hinge={hinge_y_asset})")

# In orig, at x=400 (or near notch):
# Let's find the notch in orig
orig_notch_y = 999
orig_notch_x = 0
for y in range(190, 230):
    for x in range(380, 420):
        if orig_arr[y, x] < 30:
            if y < orig_notch_y:
                orig_notch_y = y
                orig_notch_x = x

print(f"Orig notch: x={orig_notch_x}, y={orig_notch_y}")

# In orig, find screen hinge below notch
orig_hinge_y = 0
for y in range(orig_notch_y + 20, 340):
    if orig_arr[y, orig_notch_x] < 50 and orig_arr[y-2, orig_notch_x] > 180:
        orig_hinge_y = y
        break

print(f"Orig central screen height (notch to hinge): {orig_hinge_y - orig_notch_y}px (hinge={orig_hinge_y})")

scale = (orig_hinge_y - orig_notch_y) / (hinge_y_asset - notch_y_asset)
print(f"Scale of asset in orig: {scale:.4f}")

# At this scale:
scaled_w = int(asset.width * scale)
scaled_h = int(asset.height * scale)
print(f"Full scaled asset: {scaled_w}x{scaled_h}")

card_w = 616
card_h = 343
card_left = 27
card_bottom = 345

print(f"Laptops width relative to Card width: {scaled_w / card_w:.1%}")
print(f"Laptops height relative to Card height: {scaled_h / card_h:.1%}")

# Where is the left edge of the asset relative to card left?
# orig_notch_x = 400
# scaled notch_x = notch_x_asset * scale
asset_left_in_orig = orig_notch_x - (notch_x_asset * scale)
print(f"Asset left in orig: {asset_left_in_orig:.1f}px (distance from card left: {asset_left_in_orig - card_left:.1f}px = {(asset_left_in_orig - card_left)/card_w:.1%})")

# Asset right in orig:
asset_right_in_orig = asset_left_in_orig + scaled_w
print(f"Asset right in orig: {asset_right_in_orig:.1f}px (overflow beyond card right {card_left + card_w}: {asset_right_in_orig - (card_left + card_w):.1f}px = {(asset_right_in_orig - (card_left + card_w))/card_w:.1%})")

# Asset bottom in orig:
# notch in asset is notch_y_asset
asset_top_in_orig = orig_notch_y - (notch_y_asset * scale)
asset_bottom_in_orig = asset_top_in_orig + scaled_h
print(f"Asset bottom in orig: {asset_bottom_in_orig:.1f}px (overflow beyond card bottom {card_bottom}: {asset_bottom_in_orig - card_bottom:.1f}px = {(asset_bottom_in_orig - card_bottom)/card_h:.1%})")
