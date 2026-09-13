import os
import subprocess
import re

def find_file(filename):
    candidates = [
        filename,
        os.path.join('public', filename),
        os.path.join('public', 'images', filename),
        os.path.join('/app/applet', filename),
        os.path.join('/app/applet/public', filename),
        os.path.join('/app/applet/public/images', filename),
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def crop_shoes():
    img_6600 = find_file('IMG_6600.png')
    img_6599 = find_file('IMG_6599.png')

    if not img_6600 and not img_6599:
        print("Neither IMG_6600.png nor IMG_6599.png found.")
        print("Please place them in the project root or public/images/ directory.")
        return False

    out_dir = os.path.join('public', 'images')
    os.makedirs(out_dir, exist_ok=True)

    if img_6600:
        # Get dimensions of IMG_6600
        result = subprocess.run(['identify', '-format', '%w %h', img_6600], capture_output=True, text=True, check=True)
        w, h = map(int, result.stdout.strip().split())
        print(f"IMG_6600 dimensions: {w}x{h}")

        # In Instagram profile grid:
        # 3 columns. Each column is approx w / 3 wide.
        col_w = w / 3.0
        # Post grid starts below profile bio/highlights (~38% down)
        # 4 rows visible
        row_h = col_w # Instagram grid tiles are 1:1 squares
        grid_start_y = h - (row_h * 4.2) # dynamically approximate grid start

        # Define tile crops (col, row) 0-indexed
        crops = {
            'real_black_woven_sandals.jpg': (1, 0, "Classic Black Woven Sandals"),
            'real_blue_strap_sandals.jpg': (2, 0, "Blue Strap Comfort Sandals"),
            'real_labubu_sneakers.jpg': (0, 1, "Purple Labubu High-Top Sneakers"),
            'real_pastel_sandals.jpg': (0, 2, "Pastel Strap Kids Sandals"),
            'real_gold_sandals.jpg': (1, 2, "Gold Metallic Strappy Sandals"),
            'real_doit_sandals.jpg': (2, 2, "White DOIT Sport Sandals"),
            'real_black_combat_boots.jpg': (0, 3, "Black Rhinestone Combat Boots")
        }

        for out_name, (col, row, title) in crops.items():
            out_path = os.path.join(out_dir, out_name)
            # compute crop coordinates
            crop_x = int(col * col_w)
            crop_y = int(grid_start_y + row * row_h)
            crop_w = int(col_w)
            crop_h = int(row_h)

            cmd = [
                'convert', img_6600,
                '-crop', f'{crop_w}x{crop_h}+{crop_x}+{crop_y}',
                '+repage',
                '-quality', '92',
                out_path
            ]
            subprocess.run(cmd, check=True)
            print(f"Cropped {title} -> {out_path}")

    if img_6599:
        result = subprocess.run(['identify', '-format', '%w %h', img_6599], capture_output=True, text=True, check=True)
        w, h = map(int, result.stdout.strip().split())
        print(f"IMG_6599 dimensions: {w}x{h}")

        # Store shelf formal shoe crop: middle shelf
        crop_w = int(w * 0.75)
        crop_h = int(h * 0.3)
        crop_x = int(w * 0.12)
        crop_y = int(h * 0.42)
        out_path = os.path.join(out_dir, 'real_school_formal_shoes.jpg')
        subprocess.run([
            'convert', img_6599,
            '-crop', f'{crop_w}x{crop_h}+{crop_x}+{crop_y}',
            '+repage',
            '-quality', '92',
            out_path
        ], check=True)
        print(f"Cropped store formal shoes -> {out_path}")

    return True

if __name__ == '__main__':
    crop_shoes()
