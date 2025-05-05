import React, { useState, useEffect } from 'react';
import heic2any from 'heic2any';

const HeicImage = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const convertHeicToJpeg = async () => {
      try {
        if (src.toLowerCase().endsWith('.heic')) {
          setLoading(true);
          const response = await fetch(src);
          const blob = await response.blob();
          const conversionResult = await heic2any({
            blob,
            toType: 'image/jpeg',
            quality: 0.8
          });
          setImgSrc(URL.createObjectURL(conversionResult));
        } else {
          setImgSrc(src);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error converting HEIC image:', err);
        setError(true);
        setLoading(false);
      }
    };

    convertHeicToJpeg();
  }, [src]);

  if (loading) return <div className="image-loading">Loading image...</div>;
  if (error) return <div className="image-error">Failed to load image</div>;

  return <img src={imgSrc} alt={alt} className={className} />;
};

export default HeicImage;