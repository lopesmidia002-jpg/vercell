from PIL import Image

im1 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478252791_25ca82ed.png')
im2 = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478266081_bae9590b.png')
c6 = Image.open('scratch/crop_c6_corner.png')

print("im1 size:", im1.size)
print("im2 size:", im2.size)
print("c6 size:", c6.size)

# Let's save a 3-way comparison of the corner
comp = Image.new('RGB', (im1.width + im2.width + c6.width + 40, 320), (16, 17, 20))
comp.paste(im1, (10, 10))
comp.paste(im2, (im1.width + 20, 10))
comp.paste(c6, (im1.width + im2.width + 30, 10))
comp.save('scratch/corner_3way.png')
print("Saved scratch/corner_3way.png")

