from PIL import Image

orig = Image.open(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png')
# crop right side
right_crop = orig.crop((orig.width - 250, orig.height - 200, orig.width, orig.height))
right_crop.save(r'scratch/orig_right_laptop.png')

# crop left side of laptops
left_crop = orig.crop((180, orig.height - 200, 400, orig.height))
left_crop.save(r'scratch/orig_left_laptop.png')

print("Saved right and left crops of orig")

