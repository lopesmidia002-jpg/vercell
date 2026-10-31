from PIL import Image

cur_card = Image.open(r"scratch/current_card6_rendered.png")
im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")

print("cur_card size:", cur_card.size)
print("im2 size:", im2.size)

# im2 is (130, 249)
# Let's crop the bottom right of cur_card with proportional or various widths/heights
# In cur_card, there is 5px padding on all sides from clip
W, H = cur_card.size
# Let's crop bottom right corner
corner_cur = cur_card.crop((W - 200, H - 300, W, H))
corner_cur.save(r"scratch/cur_card_corner.png")

# Also let's save a side by side of im2 and corner_cur
comp = Image.new('RGB', (im2.width + corner_cur.width + 20, max(im2.height, corner_cur.height)), (255, 255, 255))
comp.paste(im2, (0, 0))
comp.paste(corner_cur, (im2.width + 20, 0))
comp.save(r"scratch/compare_im2_vs_cur_corner.png")
print("Saved scratch/compare_im2_vs_cur_corner.png")

