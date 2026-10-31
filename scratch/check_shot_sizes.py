import glob
from PIL import Image

for f in sorted(glob.glob("scratch/shot_*.png")):
    im = Image.open(f)
    print(f, im.size)

