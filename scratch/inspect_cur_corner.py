from PIL import Image

im2 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")
cur = Image.open(r"scratch/cur_card_corner.png")

print("im2 size:", im2.size)
print("cur size:", cur.size)

# Let's inspect where the card edge is in cur_card_corner:
# In scratch/current_card6_rendered.png:
# Card width is 798px (+ 5px padding on left/right -> 808px)
# Card height is 520px (+ 5px padding on top/bottom -> 530px)
# Bottom-right corner of card is at (803, 525)

