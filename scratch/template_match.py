from PIL import Image
import numpy as np

im1 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png").convert('RGB')
im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png").convert('RGB')

im_cur = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793476783543_7175d9d9.png").convert('RGB')
im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793476836082_47adfed7.png").convert('RGB')

# Let's search template match for im1 in im_cur
arr_im1 = np.array(im1)
arr_cur = np.array(im_cur)

best_diff = 1e9
best_pos = None
for y in range(0, arr_cur.shape[0] - arr_im1.shape[0] + 1, 2):
    for x in range(0, arr_cur.shape[1] - arr_im1.shape[1] + 1, 2):
        sub = arr_cur[y:y+arr_im1.shape[0], x:x+arr_im1.shape[1]]
        d = np.mean(np.abs(sub - arr_im1))
        if d < best_diff:
            best_diff = d
            best_pos = (x, y)

print("im1 match in im_cur:", best_pos, "diff:", best_diff)

# Template match for im2 in im_ref
arr_im2 = np.array(im2)
arr_ref = np.array(im_ref)

best_diff2 = 1e9
best_pos2 = None
for y in range(0, arr_ref.shape[0] - arr_im2.shape[0] + 1, 2):
    for x in range(0, arr_ref.shape[1] - arr_im2.shape[1] + 1, 2):
        sub = arr_ref[y:y+arr_im2.shape[0], x:x+arr_im2.shape[1]]
        d = np.mean(np.abs(sub - arr_im2))
        if d < best_diff2:
            best_diff2 = d
            best_pos2 = (x, y)

print("im2 match in im_ref:", best_pos2, "diff:", best_diff2)

