from PIL import Image

im_ref = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478266081_bae9590b.png")
full_art = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\card6_laptops_shift_right_after.png")

# im_ref is (130, 249)
# In im_ref, purple donut center is at (69, 155)
# In full_art, purple donut center was at (759, 426)
# Full art size is (818, 540)
# Card right border is at 808, bottom border is at 530
# In im_ref, card right border is at 117, bottom border is at 222
# So right border offset: 130 - 117 = 13px
# Bottom border offset: 249 - 222 = 27px
# In full_art, if we crop relative to card right (808) and card bottom (530):
# Crop box in full_art:
# x_right = 808 + 13 = 821 (or clamp to 818) -> x_right = 818
# y_bottom = 530 + 27 = 557 (or clamp to 540) -> y_bottom = 540
# x_left = x_right - 130 = 688
# y_top = y_bottom - 249 = 291

crop_rendered = full_art.crop((full_art.width - 135, full_art.height - 250, full_art.width, full_art.height))
crop_rendered.save("scratch/crop_rendered_1to1.png")

# Side by side comparison:
# 1. User current error report (im1: 25ca82ed)
# 2. Original reference (im2: bae9590b)
# 3. Current implementation (crop_rendered_1to1)
im1 = Image.open(r"C:\Users\Nilto\.gemini\antigravity\brain\72d170e4-9940-412d-a4b1-03f753d4e3a0\.user_uploaded\media_1793478252791_25ca82ed.png")

H = max(im1.height, im_ref.height, crop_rendered.height) + 60
W = im1.width + im_ref.width + crop_rendered.width + 80
comp = Image.new('RGB', (W, H), (255, 255, 255))
comp.paste(im1, (20, 40))
comp.paste(im_ref, (im1.width + 40, 40))
comp.paste(crop_rendered, (im1.width + im_ref.width + 60, 40))
comp.save("scratch/side_by_side_validation.png")
print("Saved scratch/side_by_side_validation.png")

