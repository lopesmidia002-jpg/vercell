import numpy as np
from PIL import Image

def analyze(path, name):
    img = Image.open(path).convert('RGB')
    arr = np.array(img)
    print(f"=== {name} ({arr.shape}) ===")
    
    # White card region: where pixels are white or almost white (e.g. > 250)
    # The laptop pixels are darker (screen borders, keyboard, etc.)
    # In the bottom half of the image, find the dark pixels belonging to the laptops
    h, w, _ = arr.shape
    bottom_half = arr[int(h*0.3):, :, :]
    
    # Laptop screen borders/bezel/keyboard are dark (say R,G,B < 60)
    laptop_mask = (bottom_half[:, :, 0] < 80) & (bottom_half[:, :, 1] < 80) & (bottom_half[:, :, 2] < 80)
    y_indices, x_indices = np.where(laptop_mask)
    if len(y_indices) > 0:
        min_y = int(h*0.3) + np.min(y_indices)
        max_y = int(h*0.3) + np.max(y_indices)
        min_x = np.min(x_indices)
        max_x = np.max(x_indices)
        print(f"Laptop dark pixels bbox: y=[{min_y}, {max_y}], x=[{min_x}, {max_x}]")
        print(f"Laptop height: {max_y - min_y} px ({(max_y - min_y)/h*100:.1f}% of image height)")
        print(f"Laptop width: {max_x - min_x} px ({(max_x - min_x)/w*100:.1f}% of image width)")
    
    # Also find card boundary
    # Background outside card is #F6F7F2 (~246, 247, 242)
    # Card is #FFFFFF (255, 255, 255)
    # Let's find rows and columns where pixels are pure white (255, 255, 255)
    card_mask = (arr[:, :, 0] > 250) & (arr[:, :, 1] > 250) & (arr[:, :, 2] > 250)
    y_c, x_c = np.where(card_mask)
    if len(y_c) > 0:
        c_min_y, c_max_y = np.min(y_c), np.max(y_c)
        c_min_x, c_max_x = np.min(x_c), np.max(x_c)
        print(f"Card bbox: y=[{c_min_y}, {c_max_y}], x=[{c_min_x}, {c_max_x}]")
        print(f"Card size: width={c_max_x - c_min_x}, height={c_max_y - c_min_y}")
        if len(y_indices) > 0:
            c_w = c_max_x - c_min_x
            c_h = c_max_y - c_min_y
            l_w = max_x - min_x
            l_h = max_y - min_y
            print(f"Ratio Laptop Width / Card Width: {l_w / c_w:.3f}")
            print(f"Ratio Laptop Height / Card Height: {l_h / c_h:.3f}")
            print(f"Laptop top relative to card top: {(min_y - c_min_y) / c_h:.3f}")
            print(f"Laptop bottom relative to card bottom: {(c_max_y - max_y)}")

analyze(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475351304_dedc412b.jpg', 'Current (dedc412b.jpg)')
analyze(r'C:/Users/Nilto/.gemini/antigravity/brain/72d170e4-9940-412d-a4b1-03f753d4e3a0/.user_uploaded/media_1793475387104_d83a993c.png', 'Original (d83a993c.png)')
