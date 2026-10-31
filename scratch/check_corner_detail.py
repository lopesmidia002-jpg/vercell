from PIL import Image

f1 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478252791_25ca82ed.png'
f2 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793478266081_bae9590b.png'

im1 = Image.open(f1)
im2 = Image.open(f2)

# In both images, let's zoom in on the bottom-right 100x100 pixels
c1 = im1.crop((im1.width - 100, im1.height - 100, im1.width, im1.height))
c2 = im2.crop((im2.width - 100, im2.height - 100, im2.width, im2.height))

# Resize 3x for clear viewing
c1_large = c1.resize((300, 300), Image.Resampling.NEAREST)
c2_large = c2.resize((300, 300), Image.Resampling.NEAREST)

comp = Image.new('RGB', (620, 320), (20, 20, 20))
comp.paste(c1_large, (10, 10))
comp.paste(c2_large, (320, 10))
comp.save('scratch/corner_zoom_detail.png')
print("Saved scratch/corner_zoom_detail.png")

