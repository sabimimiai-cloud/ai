import React, { useEffect } from 'react';

/**
 * Ensures any stale extracted photos in localStorage are completely cleaned up,
 * so the applet directly and reliably serves the uploaded local image files.
 */
export const FootwearImageResolver: React.FC = () => {
  useEffect(() => {
    try {
      localStorage.removeItem('buubu_bloom_extracted_photos');
    } catch (err) {}
  }, []);

  return null;
};

