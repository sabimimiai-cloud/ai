import React, { useEffect } from 'react';

// Exact 15 products grid configuration:
// 5 columns across, 3 rows down
const PRODUCT_GRID = [
  // Row 1
  { col: 0, row: 0, id: 'bb-s-003', filename: 'black_woven_sandals.jpg', name: 'Black Woven Sandals' },
  { col: 1, row: 0, id: 'bb-s-004', filename: 'blue_fashion_sandals.jpg', name: 'Blue Fashion Sandals' },
  { col: 2, row: 0, id: 'bb-s-007', filename: 'purple_character_sneakers.jpg', name: 'Purple Character Sneakers' },
  { col: 3, row: 0, id: 'bb-s-008', filename: 'pastel_strap_sandals.jpg', name: 'Pastel Strap Sandals' },
  { col: 4, row: 0, id: 'bb-s-009', filename: 'gold_strappy_sandals.jpg', name: 'Gold Strappy Sandals' },

  // Row 2
  { col: 0, row: 1, id: 'bb-s-010', filename: 'white_doit_sport_sandals.jpg', name: 'White DOIT Sport Sandals' },
  { col: 1, row: 1, id: 'bb-s-011', filename: 'black_combat_boots.jpg', name: 'Black Combat Boots' },
  { col: 2, row: 1, id: 'bb-s-012', filename: 'black_buckle_school_shoes.jpg', name: 'Black Buckle School Shoes' },
  { col: 3, row: 1, id: 'bb-s-005', filename: 'black_lace_up_school_shoes.jpg', name: 'Black Lace-Up School Shoes' },
  { col: 4, row: 1, id: 'bb-s-014', filename: 'black_patent_mary_janes.jpg', name: 'Black Patent Mary Janes' },

  // Row 3
  { col: 0, row: 2, id: 'bb-s-015', filename: 'black_formal_shoes.jpg', name: 'Black Formal Shoes' },
  { col: 1, row: 2, id: 'bb-s-016', filename: 'black_school_shoes.jpg', name: 'Black School Shoes' },
  { col: 2, row: 2, id: 'bb-s-017', filename: 'cream_pink_slides.jpg', name: 'Cream & Pink Slides' },
  { col: 3, row: 2, id: 'bb-s-018', filename: 'brown_bow_loafers.jpg', name: 'Brown Bow Loafers' },
  { col: 4, row: 2, id: 'bb-s-019', filename: 'beige_chunky_sandals.jpg', name: 'Beige Chunky Sandals' },
];

export const FootwearImageResolver: React.FC = () => {
  useEffect(() => {
    const processReferenceSheet = (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          if (w < 400 || h < 400) return;

          // Relative boundaries for clean contact sheet (3 rows x 5 cols, no header)
          const colBounds = [
            [0.005, 0.198],
            [0.202, 0.398],
            [0.402, 0.598],
            [0.602, 0.798],
            [0.802, 0.995],
          ];

          const rowBounds = [
            [0.010, 0.295],
            [0.340, 0.625],
            [0.670, 0.955],
          ];

          let existingData: Record<string, string> = {};
          try {
            existingData = JSON.parse(localStorage.getItem('buubu_bloom_extracted_photos') || '{}');
          } catch (err) {}

          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          PRODUCT_GRID.forEach(({ col, row, id, filename }) => {
            const [xStartRel, xEndRel] = colBounds[col];
            const [yStartRel, yEndRel] = rowBounds[row];

            const cropX = Math.round(xStartRel * w);
            const cropY = Math.round(yStartRel * h);
            const cropW = Math.round((xEndRel - xStartRel) * w);
            const cropH = Math.round((yEndRel - yStartRel) * h);

            canvas.width = cropW;
            canvas.height = cropH;
            ctx.clearRect(0, 0, cropW, cropH);
            ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

            const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
            existingData[filename] = dataUrl;
            existingData[id] = dataUrl;
          });

          localStorage.setItem('buubu_bloom_extracted_photos', JSON.stringify(existingData));
          window.dispatchEvent(new Event('buubu_photos_updated'));
        };
        if (e.target?.result) {
          img.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          processReferenceSheet(file);
        }
      }
    };

    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.items) {
        for (let i = 0; i < e.clipboardData.items.length; i++) {
          const item = e.clipboardData.items[i];
          if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            if (file) {
              processReferenceSheet(file);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', handleDrop);
    window.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('drop', handleDrop);
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  return null;
};
