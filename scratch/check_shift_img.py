from PIL import Image

im = Image.open("scratch/shift_neg_155px.png")
print("shift_neg_155px size:", im.size)

# Also let's check card6_laptops_shift_right_after.png in artifacts directory
p_art = r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\card6_laptops_shift_right_after.png"
im_art = Image.open(p_art)
print("im_art size:", im_art.size)

