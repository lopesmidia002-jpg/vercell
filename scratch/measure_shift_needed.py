from PIL import Image
import numpy as np

f1 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793476783543_7175d9d9.png'
f2 = r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793476836082_47adfed7.png'

def measure(path, name):
    img = Image.open(path).convert('RGB')
    arr = np.array(img)
    # card borders
    card_left = 999
    card_right = 0
    card_top = 999
    card_bottom = 0
    for y in range(arr.shape[0]):
        for x in range(arr.shape[1]):
            if arr[y, x, 0] > 250 and arr[y, x, 1] > 250 and arr[y, x, 2] > 250:
                if x < card_left: card_left = x
                if x > card_right: card_right = x
                if y < card_top: card_top = y
                if y > card_bottom: card_bottom = y
    
    card_w = card_right - card_left
    card_h = card_bottom - card_top

    # find middle laptop notch
    # scan y from int(card_top + card_h*0.4) to int(card_top + card_h*0.8)
    notch_y = 999
    notch_x = 0
    for y in range(int(card_top + card_h*0.4), int(card_top + card_h*0.75)):
        for x in range(int(card_left + card_w*0.35), int(card_left + card_w*0.75)):
            if np.all(arr[y, x] < 30):
                if y < notch_y:
                    notch_y = y
                    notch_x = x

    # find leftmost dark pixel of left laptop
    # in lower 30% of card
    leftmost_x = 999
    for y in range(int(card_top + card_h*0.6), card_bottom):
        for x in range(card_left + 20, int(card_left + card_w*0.6)):
            if np.all(arr[y, x] < 40):
                if x < leftmost_x:
                    leftmost_x = x

    print(f"=== {name} ===")
    print(f"Card: w={card_w}, h={card_h}, left={card_left}, right={card_right}")
    print(f"Notch: x={notch_x} ({(notch_x - card_left)/card_w:.1%} of card width), y={notch_y}")
    print(f"Left laptop start: x={leftmost_x} ({(leftmost_x - card_left)/card_w:.1%} of card width)")

measure(f1, 'Atual (7175d9d9)')
measure(f2, 'Original (47adfed7)')

