import os
import sys
import subprocess

CANDIDATE_NAMES = [
    'buubu_footwear_crops_clean_contact_sheet.jpg',
    'buubu_footwear_crops_clean_contact_sheet.png',
    '15B49463-E79A-4E87-AB54-F19311D128FD.png',
    '15B49463-E79A-4E87-AB54-F19311D128FD.jpg',
    'footwear_sheet.png',
    'footwear_sheet.jpg',
    'shoes_reference.png',
    'shoes_reference.jpg',
    'IMG_6601.png',
    'reference_sheet.png'
]

SEARCH_DIRS = [
    '.',
    'public',
    'public/images',
    '/app/applet',
    '/app/applet/public',
    '/app/applet/public/images',
    '/tmp'
]

# 15 Products mapping: (row 0-indexed, col 0-indexed, filename, product_id, title)
PRODUCTS = [
    # Row 1
    (0, 0, 'black_woven_sandals.jpg', 'bb-s-003', 'Black Woven Sandals'),
    (0, 1, 'blue_fashion_sandals.jpg', 'bb-s-004', 'Blue Fashion Sandals'),
    (0, 2, 'purple_character_sneakers.jpg', 'bb-s-007', 'Purple Character Sneakers'),
    (0, 3, 'pastel_strap_sandals.jpg', 'bb-s-008', 'Pastel Strap Sandals'),
    (0, 4, 'gold_strappy_sandals.jpg', 'bb-s-009', 'Gold Strappy Sandals'),
    # Row 2
    (1, 0, 'white_doit_sport_sandals.jpg', 'bb-s-010', 'White DOIT Sport Sandals'),
    (1, 1, 'black_combat_boots.jpg', 'bb-s-011', 'Black Combat Boots'),
    (1, 2, 'black_buckle_school_shoes.jpg', 'bb-s-012', 'Black Buckle School Shoes'),
    (1, 3, 'black_lace_up_school_shoes.jpg', 'bb-s-005', 'Black Lace-Up School Shoes'),
    (1, 4, 'black_patent_mary_janes.jpg', 'bb-s-014', 'Black Patent Mary Janes'),
    # Row 3
    (2, 0, 'black_formal_shoes.jpg', 'bb-s-015', 'Black Formal Shoes'),
    (2, 1, 'black_school_shoes.jpg', 'bb-s-016', 'Black School Shoes'),
    (2, 2, 'cream_pink_slides.jpg', 'bb-s-017', 'Cream & Pink Slides'),
    (2, 3, 'brown_bow_loafers.jpg', 'bb-s-018', 'Brown Bow Loafers'),
    (2, 4, 'beige_chunky_sandals.jpg', 'bb-s-019', 'Beige Chunky Sandals'),
]

def find_source_image():
    for d in SEARCH_DIRS:
        for name in CANDIDATE_NAMES:
            p = os.path.join(d, name)
            if os.path.exists(p) and os.path.getsize(p) > 1000:
                return p
    return None

def crop_all(source_image_path):
    print(f"Found reference sheet at: {source_image_path}")
    # Get image dimensions using ImageMagick
    res = subprocess.run(['identify', '-format', '%w %h', source_image_path], capture_output=True, text=True, check=True)
    w, h = map(int, res.stdout.strip().split())
    print(f"Dimensions: {w}x{h}")

    out_dir = os.path.join('public', 'images')
    os.makedirs(out_dir, exist_ok=True)
    dist_dir = os.path.join('dist', 'images')
    os.makedirs(dist_dir, exist_ok=True)

    # Column boundaries (relative fractions of width)
    # 5 columns across: 0 to 4
    col_bounds = [
        (0.010, 0.200), # Col 0
        (0.205, 0.400), # Col 1
        (0.405, 0.600), # Col 2
        (0.605, 0.800), # Col 3
        (0.805, 0.990), # Col 4
    ]

    # Row boundaries (relative fractions of height)
    # Shoe areas exclude the text pill below each shoe
    row_bounds = [
        (0.140, 0.390), # Row 0
        (0.445, 0.655), # Row 1
        (0.700, 0.895), # Row 2
    ]

    cropped_files = []
    for row_idx, col_idx, filename, pid, title in PRODUCTS:
        x_start_rel, x_end_rel = col_bounds[col_idx]
        y_start_rel, y_end_rel = row_bounds[row_idx]

        crop_x = int(x_start_rel * w)
        crop_y = int(y_start_rel * h)
        crop_w = int((x_end_rel - x_start_rel) * w)
        crop_h = int((y_end_rel - y_start_rel) * h)

        target_public = os.path.join(out_dir, filename)
        target_dist = os.path.join(dist_dir, filename)

        # ImageMagick crop with +repage and subtle white border trimming if needed
        cmd = [
            'convert', source_image_path,
            '-crop', f'{crop_w}x{crop_h}+{crop_x}+{crop_y}',
            '+repage',
            '-quality', '95',
            target_public
        ]
        subprocess.run(cmd, check=True)
        # copy to dist
        subprocess.run(['cp', target_public, target_dist], check=True)
        print(f"Successfully cropped [{title}] -> {target_public}")
        cropped_files.append((filename, pid, title))

    return cropped_files

if __name__ == '__main__':
    src = find_source_image()
    if not src:
        print("Reference sheet not found in candidate paths.")
        sys.exit(1)
    crop_all(src)
