import glob
from PIL import Image
import numpy as np

for f in sorted(glob.glob("scratch/shot_*.png")):
    im = Image.open(f).convert('RGB')
    arr = np.array(im)
    purple = (arr[:, :, 2] > 180) & (arr[:, :, 0] > 100) & (arr[:, :, 1] < 150)
    py, px = np.where(purple)
    rl = px > 600
    if np.sum(rl) > 0:
        print(f, f"purple x: [{px[rl].min()}, {px[rl].max()}], y: [{py[rl].min()}, {py[rl].max()}]")

