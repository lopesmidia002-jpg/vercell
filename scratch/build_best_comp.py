from PIL import Image

best_shot = Image.open("scratch/shot_neg_150px_neg_100px.png")
im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")
im1 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png")

# im_ref is (130, 249)
# Let's crop best_shot at the exact same size (130, 249) from the bottom-right corner!
# best_shot size is (808, 530). With 5px outer margin, card corner is at (803, 525).
# In im_ref, card right border was at 117, so 130 - 117 = 13px right margin in crop.
# Card bottom border was at 222, so 249 - 222 = 27px bottom margin in crop.
# So crop right = 803 + 13 = 816 -> clamped to best_shot.width = 808
# Crop bottom = 525 + 27 = 552 -> clamped to best_shot.height = 530
# To match the relative framing exactly:
crop_w = 140
crop_h = 255
x2 = best_shot.width
y2 = best_shot.height
x1 = x2 - crop_w
y1 = y2 - crop_h
crop_best = best_shot.crop((x1, y1, x2, y2))
crop_best.save("scratch/crop_best_150_100.png")

# Also crop im_ref and im1 to compare
H = max(im1.height, im_ref.height, crop_best.height) + 50
W = im1.width + im_ref.width + crop_best.width + 60

comp = Image.new('RGB', (W, H), (255, 255, 255))
comp.paste(im1, (10, 30))
comp.paste(im_ref, (im1.width + 25, 30))
comp.paste(crop_best, (im1.width + im_ref.width + 40, 30))
comp.save("scratch/side_by_side_best.png")
print("Saved scratch/side_by_side_best.png")

