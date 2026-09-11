import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, CheckCircle, Image as ImageIcon, X, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';

interface ExtractedProduct {
  id: string;
  name: string;
  filename: string;
  dataUrl: string;
  sourceScreenshot: string;
  gridLocation: string;
}

interface ScreenshotExtractorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExtractionComplete?: (photos: Record<string, string>) => void;
}

export const ScreenshotExtractorModal: React.FC<ScreenshotExtractorModalProps> = ({
  isOpen,
  onClose,
  onExtractionComplete
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [extractedList, setExtractedList] = useState<ExtractedProduct[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Definition of grid crops for both screenshots
  const IMG_6493_CROPS = [
    { filename: 'boys_resort_outfit.jpg', name: 'Boys Matching Resort Set', col: 0, row: 0, id: 'bb-b-006' },
    { filename: 'black_fisherman_sandals.jpg', name: 'Black Fisherman Sandals', col: 1, row: 0, id: 'bb-na-014' },
    { filename: 'navy_sport_strap_sandals.jpg', name: 'Navy Sport Strap Sandals', col: 2, row: 0, id: 'bb-na-015' },
    { filename: 'purple_kids_sneakers.jpg', name: 'Purple Kids Sneakers', col: 0, row: 1, id: 'bb-na-011' },
    { filename: 'black_rhinestone_collar_dress.jpg', name: 'Black Rhinestone Collar Dress', col: 1, row: 1, id: 'bb-na-019' },
    { filename: 'light_blue_peplum_shirt.jpg', name: 'Light Blue Peplum Shirt', col: 2, row: 1, id: 'bb-na-020' },
    { filename: 'white_chunky_sandals.jpg', name: 'White Fisherman Sandals', col: 0, row: 2, id: 'bb-na-010' },
    { filename: 'gold_strap_sandals.jpg', name: 'Gold Strap Sandals', col: 1, row: 2, id: 'bb-na-012' },
    { filename: 'white_doit_slide_sandals.jpg', name: 'White DO IT Slide Sandals', col: 2, row: 2, id: 'bb-na-016' },
    { filename: 'black_kids_boots.jpg', name: 'Black Kids Boots', col: 0, row: 3, id: 'bb-na-013' },
    { filename: 'red_white_sports_jersey.jpg', name: 'Red & White Sports Jersey', col: 1, row: 3, id: 'bb-na-017' },
    { filename: 'canvas_mommy_bag_set.jpg', name: 'Canvas Mommy Bag & Pouch Set', col: 2, row: 3, id: 'bb-na-018' },
  ];

  const IMG_6494_CROPS = [
    { filename: 'blue_toile_print_shirt.jpg', name: 'Blue Toile Print Shirt', col: 0, row: 0, id: 'bb-na-023' },
    { filename: 'pink_ruffle_dress.jpg', name: 'Pink Ruffle Dress', col: 1, row: 0, id: 'bb-na-022' },
    { filename: 'red_track_jacket.jpg', name: 'Red Hooded Track Jacket', col: 2, row: 0, id: 'bb-na-008' },
    { filename: 'denim_vest_kids.jpg', name: 'Denim Sleeveless Vest', col: 0, row: 1, id: 'bb-b-007' },
    { filename: 'baby_floral_ruffle_set.jpg', name: 'Baby Floral Ruffle Two-Piece Set', col: 1, row: 1, id: 'bb-na-025' },
    { filename: 'black_sparkle_graphic_tshirt.jpg', name: 'Black Sparkle Graphic T-Shirt', col: 2, row: 1, id: 'bb-na-027' },
    { filename: 'green_floral_tulle_set.jpg', name: 'Green Floral Tulle Two-Piece Set', col: 0, row: 2, id: 'bb-na-026' },
    { filename: 'baby_heart_romper_set.jpg', name: 'Baby Heart Romper & Headband Set', col: 1, row: 2, id: 'bb-na-024' },
    { filename: 'bear_ears_bucket_hat.jpg', name: 'Bear Ears Bucket Hat', col: 2, row: 2, id: 'bb-na-028' },
    { filename: 'pearl_embellished_jeans.jpg', name: 'Grey Denim Jeans', col: 0, row: 3, id: 'bb-na-009' },
    { filename: 'pink_bunny_baseball_cap.jpg', name: 'Pink Bunny Baseball Cap', col: 1, row: 3, id: 'bb-na-029' },
    { filename: 'jordan_23_tshirt.jpg', name: 'Jordan 23 T-Shirt', col: 2, row: 3, id: 'bb-na-021' },
  ];

  const cropImageCanvas = (
    img: HTMLImageElement,
    cropConfig: { filename: string; name: string; col: number; row: number; id: string },
    yStartRatio: number,
    sourceName: string
  ): ExtractedProduct => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    const cellW = Math.floor(w / 3);
    const cellH = cellW; // Instagram posts are 1:1 square
    const yStart = Math.floor(h * yStartRatio);

    // Inset to avoid grid dividers and borders
    const inset = Math.floor(cellW * 0.04);
    const cropW = cellW - 2 * inset;
    const cropH = cellH - 2 * inset;

    const cropX = cropConfig.col * cellW + inset;
    const cropY = yStart + cropConfig.row * cellH + inset;

    const canvas = document.createElement('canvas');
    canvas.width = cropW;
    canvas.height = cropH;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
    }
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);

    return {
      id: cropConfig.id,
      name: cropConfig.name,
      filename: cropConfig.filename,
      dataUrl,
      sourceScreenshot: sourceName,
      gridLocation: `Row ${cropConfig.row + 1}, Col ${cropConfig.col + 1}`
    };
  };

  const processFile = async (file: File) => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFiles = async (files: FileList | File[]) => {
    setIsProcessing(true);
    setStatusMessage('Analysing screenshots and cropping authentic product photographs...');

    const newExtracted: ExtractedProduct[] = [];
    const photoMap: Record<string, string> = {};

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const lowerName = file.name.toLowerCase();
        const img = await processFile(file);

        // Determine if it's IMG_6493 or IMG_6494 based on name or aspect
        const is6493 = lowerName.includes('6493') || (!lowerName.includes('6494') && i === 0);
        const is6494 = lowerName.includes('6494') || (!lowerName.includes('6493') && i === 1);

        if (is6493) {
          setStatusMessage(`Extracting 12 genuine product photos from IMG_6493...`);
          // Row 2 starts at ~0.208 * h
          for (const crop of IMG_6493_CROPS) {
            const result = cropImageCanvas(img, crop, 0.208, 'IMG_6493');
            newExtracted.push(result);
            photoMap[crop.filename] = result.dataUrl;

            // Save to server endpoint
            fetch('/api/save-cropped-photo', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ filename: crop.filename, dataUrl: result.dataUrl })
            }).catch(() => {});
          }
        } else if (is6494) {
          setStatusMessage(`Extracting 12 genuine product photos from IMG_6494...`);
          // Row 1 starts at ~0.147 * h
          for (const crop of IMG_6494_CROPS) {
            const result = cropImageCanvas(img, crop, 0.147, 'IMG_6494');
            newExtracted.push(result);
            photoMap[crop.filename] = result.dataUrl;

            // Save to server endpoint
            fetch('/api/save-cropped-photo', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ filename: crop.filename, dataUrl: result.dataUrl })
            }).catch(() => {});
          }
        }
      }

      setExtractedList(prev => [...prev, ...newExtracted]);
      setStatusMessage(`Successfully extracted ${newExtracted.length} genuine product photographs!`);

      // Persist in localStorage for instant reload
      try {
        const stored = JSON.parse(localStorage.getItem('buubu_bloom_extracted_photos') || '{}');
        localStorage.setItem('buubu_bloom_extracted_photos', JSON.stringify({ ...stored, ...photoMap }));
      } catch (e) {}

      if (onExtractionComplete) {
        onExtractionComplete(photoMap);
      }
    } catch (err) {
      console.error(err);
      setStatusMessage('Error processing images. Please make sure they are valid PNG or JPG files.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="screenshot-extractor-modal"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-[#F4F1EA]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-[#F4F1EA] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#123B68] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Authentic Photos
                </span>
                <h2 className="text-xl font-bold text-[#123B68]">Screenshot Photo Extractor</h2>
              </div>
              <p className="text-xs text-[#5A6E85] mt-1">
                Extracts the actual product photographs from your uploaded Instagram screenshots (<code className="bg-gray-100 px-1 py-0.5 rounded">IMG_6493</code> & <code className="bg-gray-100 px-1 py-0.5 rounded">IMG_6494</code>) without AI generation or illustrations.
              </p>
            </div>
            <button 
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Drop Zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                dragOver 
                  ? 'border-[#F58220] bg-[#FFF8F0]' 
                  : 'border-[#D5E2EE] hover:border-[#123B68] bg-[#F8FAFC]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/png,image/jpeg"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    handleFiles(e.target.files);
                  }
                }}
              />
              <div className="w-14 h-14 rounded-2xl bg-[#EAF2F8] text-[#123B68] flex items-center justify-center mx-auto mb-3">
                <Upload className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-base text-[#123B68]">
                Drag & drop <span className="text-[#F58220]">IMG_6493.png</span> & <span className="text-[#F58220]">IMG_6494.png</span> here
              </h3>
              <p className="text-xs text-[#5A6E85] mt-1">
                or click to browse from your device. The tool slices each grid cell pixel-by-pixel.
              </p>
            </div>

            {/* Status Message */}
            {statusMessage && (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EAF2F8] text-[#123B68] text-xs font-semibold">
                {isProcessing ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-[#F58220]" />
                ) : (
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}

            {/* Extracted Photos Grid */}
            {extractedList.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#123B68] mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Extracted Photographs ({extractedList.length})
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {extractedList.map((item, idx) => (
                    <div key={idx} className="group relative rounded-xl overflow-hidden border border-[#E2E8F0] bg-white shadow-xs">
                      <div className="aspect-square w-full overflow-hidden bg-gray-100">
                        <img 
                          src={item.dataUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                        />
                      </div>
                      <div className="p-1.5 text-center">
                        <p className="text-[10px] font-bold text-[#123B68] truncate" title={item.name}>
                          {item.name}
                        </p>
                        <span className="text-[9px] text-[#5A6E85] block truncate">
                          {item.sourceScreenshot}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#F4F1EA] bg-[#F8FAFC] flex items-center justify-between">
            <span className="text-xs text-[#5A6E85]">
              Crops are saved to <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">public/images/</code>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#123B68] text-white text-xs font-bold hover:bg-[#0E2E52] transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
