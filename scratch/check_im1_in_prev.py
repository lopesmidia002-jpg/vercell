from PIL import Image
import numpy as np

im1 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png").convert('RGB')
im_prev = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793476783543_7175d9d9.png").convert('RGB')

arr1 = np.array(im1)
arr_prev = np.array(im_prev)

# Find where arr1 appears in arr_prev
h1, w1 = arr1.shape[:2]
H, W = arr_prev.shape[:2]

found = False
for y in range(H - h1 + 1):
    for x in range(W - w1 + 1):
        if np.array_equal(arr_prev[y:y+h1, x:x+w1], arr1):
            print(f"EXACT MATCH found at x={x}, y={y}!")
            found = True
            break
    if found:
        break

if not found:
    print("No exact match, trying min difference...")
    # Fast check around bottom right
    min_diff = 1e9
    min_pos = None
    for y in range(max(0, H - h1 - 30), H - h1 + 1):
        for x in range(max(0, W - w1 - 30), W - w1 + 1):
            d = np.mean(np.abs(arr_prev[y:y+h1, x:x+w1].astype(float) - arr1.astype(float)))
            if d < min_diff:
                min_diff = d
                min_pos = (x, y)
    print(f"Closest match at {min_pos} with diff {min_diff}")

