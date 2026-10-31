from PIL import Image

im1 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475351304_dedc412b.jpg')
im2 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png')
im_t9 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793474433276_c81e37fb.jpg')

print("im1:", im1.size)
print("im2:", im2.size)
print("im_t9:", im_t9.size)

# Let's save a composite of im1 and im2 side by side
# Normalize both to same width 800
w = 800
h1 = int(w * im1.height / im1.width)
h2 = int(w * im2.height / im2.width)

im1_r = im1.resize((w, h1), Image.Resampling.LANCZOS)
im2_r = im2.resize((w, h2), Image.Resampling.LANCZOS)

comp = Image.new("RGB", (w * 2 + 20, max(h1, h2)), (30, 30, 30))
comp.paste(im1_r, (0, 0))
comp.paste(im2_r, (w + 20, 0))
comp.save(r'scratch/side_by_side_user_images.png')
print("Saved scratch/side_by_side_user_images.png")

