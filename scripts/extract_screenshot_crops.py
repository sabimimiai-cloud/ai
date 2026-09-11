"""
Buubu Bloom Product Extraction Utility
Crops individual product photographs from Instagram screenshots (IMG_6493 and IMG_6494).
Uses ImageMagick (`convert`) to slice each product cell with exact coordinates.
"""

import os
import subprocess
import sys

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Grid layout mapping for IMG_6493:
# Row 2 (y ~ 0.20 to 0.40):
#   Col 0: boys_resort_outfit
#   Col 1: black_fisherman_sandals
#   Col 2: navy_sport_strap_sandals
# Row 3 (y ~ 0.40 to 0.60):
#   Col 0: purple_kids_sneakers
#   Col 1: black_rhinestone_collar_dress
#   Col 2: light_blue_peplum_shirt
# Row 4 (y ~ 0.60 to 0.80):
#   Col 0: white_chunky_sandals (already in catalogue)
#   Col 1: gold_strap_sandals
#   Col 2: white_doit_slide_sandals
# Row 5 (y ~ 0.80 to 1.00):
#   Col 0: black_kids_boots
#   Col 1: red_white_sports_jersey
#   Col 2: canvas_mommy_bag_set

# Grid layout mapping for IMG_6494:
# Row 1 (y ~ 0.145 to 0.35):
#   Col 0: blue_toile_print_shirt
#   Col 1: pink_ruffle_dress
#   Col 2: red_track_jacket (already in catalogue)
# Row 2 (y ~ 0.35 to 0.55):
#   Col 0: denim_vest_kids
#   Col 1: baby_floral_ruffle_set
#   Col 2: black_sparkle_graphic_tshirt
# Row 3 (y ~ 0.55 to 0.75):
#   Col 0: green_floral_tulle_set
#   Col 1: baby_heart_romper_set
#   Col 2: bear_ears_bucket_hat
# Row 4 (y ~ 0.75 to 0.95):
#   Col 0: pearl_embellished_jeans (already in catalogue)
#   Col 1: pink_bunny_baseball_cap
#   Col 2: jordan_23_tshirt

def get_dimensions(filepath):
    res = subprocess.run(['identify', '-format', '%w %h', filepath], capture_output=True, text=True)
    if res.returncode == 0:
        parts = res.stdout.strip().split()
        return int(parts[0]), int(parts[1])
    return None, None

def crop_cell(src_path, dest_name, x, y, w, h):
    dest_path = os.path.join(OUTPUT_DIR, dest_name)
    cmd = ['convert', src_path, '-crop', f'{w}x{h}+{x}+{y}', '+repage', '-quality', '92', dest_path]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"Extracted: {dest_name} ({w}x{h} from +{x}+{y})")
        # Also copy to dist/images if dist/images exists
        dist_dest = os.path.join(os.path.dirname(__file__), '..', 'dist', 'images', dest_name)
        if os.path.exists(os.path.dirname(dist_dest)):
            subprocess.run(['cp', dest_path, dist_dest])
        return True
    else:
        print(f"Failed to crop {dest_name}: {res.stderr}")
        return False

def process_img_6493(filepath):
    w, h = get_dimensions(filepath)
    if not w or not h:
        print(f"Could not read {filepath}")
        return
    print(f"Processing IMG_6493: {w}x{h}")
    cell_w = w // 3
    cell_h = cell_w
    # Row 1 is partially cut off at top (~20% visible).
    # Header & tabs take ~14% to 15% of screen height.
    # In IMG_6493, the first full row (Row 2) starts around 0.205 * h
    y_start = int(0.208 * h)
    
    # Margin inset to avoid borders & play icon overlays
    inset = int(cell_w * 0.04)
    crop_w = cell_w - (2 * inset)
    crop_h = cell_h - (2 * inset)
    
    crops = [
        # Row 2
        (0, 0, 'boys_resort_outfit.jpg'),
        (1, 0, 'black_fisherman_sandals.jpg'),
        (2, 0, 'navy_sport_strap_sandals.jpg'),
        # Row 3
        (0, 1, 'purple_kids_sneakers.jpg'),
        (1, 1, 'black_rhinestone_collar_dress.jpg'),
        (2, 1, 'light_blue_peplum_shirt.jpg'),
        # Row 4
        (0, 2, 'white_chunky_sandals_extracted.jpg'),
        (1, 2, 'gold_strap_sandals.jpg'),
        (2, 2, 'white_doit_slide_sandals.jpg'),
        # Row 5
        (0, 3, 'black_kids_boots.jpg'),
        (1, 3, 'red_white_sports_jersey.jpg'),
        (2, 3, 'canvas_mommy_bag_set.jpg'),
    ]
    
    for col, row, filename in crops:
        cx = (col * cell_w) + inset
        cy = y_start + (row * cell_h) + inset
        crop_cell(filepath, filename, cx, cy, crop_w, crop_h)

def process_img_6494(filepath):
    w, h = get_dimensions(filepath)
    if not w or not h:
        print(f"Could not read {filepath}")
        return
    print(f"Processing IMG_6494: {w}x{h}")
    cell_w = w // 3
    cell_h = cell_w
    # In IMG_6494, Row 1 starts directly beneath the tab bar, around 0.147 * h
    y_start = int(0.147 * h)
    
    inset = int(cell_w * 0.04)
    crop_w = cell_w - (2 * inset)
    crop_h = cell_h - (2 * inset)
    
    crops = [
        # Row 1
        (0, 0, 'blue_toile_print_shirt.jpg'),
        (1, 0, 'pink_ruffle_dress.jpg'),
        (2, 0, 'red_track_jacket_extracted.jpg'),
        # Row 2
        (0, 1, 'denim_vest_kids.jpg'),
        (1, 1, 'baby_floral_ruffle_set.jpg'),
        (2, 1, 'black_sparkle_graphic_tshirt.jpg'),
        # Row 3
        (0, 2, 'green_floral_tulle_set.jpg'),
        (1, 2, 'baby_heart_romper_set.jpg'),
        (2, 2, 'bear_ears_bucket_hat.jpg'),
        # Row 4
        (0, 3, 'pearl_embellished_jeans_extracted.jpg'),
        (1, 3, 'pink_bunny_baseball_cap.jpg'),
        (2, 3, 'jordan_23_tshirt.jpg'),
    ]
    
    for col, row, filename in crops:
        cx = (col * cell_w) + inset
        cy = y_start + (row * cell_h) + inset
        crop_cell(filepath, filename, cx, cy, crop_w, crop_h)

def find_file(names):
    search_dirs = [
        '.',
        'public',
        'public/images',
        'src/assets/images',
        '/tmp'
    ]
    for d in search_dirs:
        for name in names:
            p = os.path.join(d, name)
            if os.path.exists(p):
                return p
    return None

if __name__ == '__main__':
    f6493 = find_file(['IMG_6493.png', 'IMG_6493.jpg', 'IMG_6493.jpeg', 'img_6493.png'])
    f6494 = find_file(['IMG_6494.png', 'IMG_6494.jpg', 'IMG_6494.jpeg', 'img_6494.png'])
    
    if not f6493 and not f6494:
        print("Screenshots not found on disk yet.")
        print("Waiting for upload via file explorer or web crop tool.")
        sys.exit(0)
        
    if f6493:
        process_img_6493(f6493)
    if f6494:
        process_img_6494(f6494)
    print("Done extracting photographs!")
