from PIL import Image

full = Image.open(r"scratch/card6_exact_viewport.png")
im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")

print("full size:", full.size)
print("im2 size:", im2.size)

# The card has 10px margin around it in card6_exact_viewport.png
# Bottom right corner of card is at (full.width - 10, full.height - 10)
# Let's crop corner of the card
w_crop = 250
h_crop = 350
crop_cur = full.crop((full.width - w_crop, full.height - h_crop, full.width, full.height))
crop_cur.save(r"scratch/card6_rendered_corner.png")

# Also side by side with im2
comp = Image.new('RGB', (im2.width + crop_cur.width + 20, max(im2.height, crop_cur.height)), (255, 255, 255))
comp.paste(im2, (0, 0))
comp.paste(crop_cur, (im2.width + 20, 0))
comp.save(r"scratch/compare_im2_vs_rendered_corner.png")
print("Saved scratch/compare_im2_vs_rendered_corner.png")

