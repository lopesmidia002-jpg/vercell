from PIL import Image

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")

# Let's save zoomed in crop of im2 between x=60 and 125, y=100 and 240
zoom = im2.crop((50, 100, 125, 235))
zoom.resize((zoom.width * 4, zoom.height * 4), Image.NEAREST).save(r"scratch/im2_corner_zoomed.png")
print("Saved scratch/im2_corner_zoomed.png")

