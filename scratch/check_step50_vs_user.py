from PIL import Image

im1 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478252791_25ca82ed.png')
im2 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478266081_bae9590b.png')
c6 = Image.open('scratch/c6_corner_step50.png')

print("im1 size:", im1.size)
print("im2 size:", im2.size)
print("c6 size:", c6.size)

# scale all to same height
h = 350
im1_r = im1.resize((int(h * im1.width / im1.height), h), Image.Resampling.LANCZOS)
im2_r = im2.resize((int(h * im2.width / im2.height), h), Image.Resampling.LANCZOS)
c6_r = c6.resize((int(h * c6.width / c6.height), h), Image.Resampling.LANCZOS)

comp = Image.new('RGB', (im1_r.width + im2_r.width + c6_r.width + 40, h + 20), (16, 17, 20))
comp.paste(im1_r, (10, 10))
comp.paste(im2_r, (im1_r.width + 20, 10))
comp.paste(c6_r, (im1_r.width + im2_r.width + 30, 10))
comp.save('scratch/compare_step50_vs_user.png')
print("Saved scratch/compare_step50_vs_user.png")

