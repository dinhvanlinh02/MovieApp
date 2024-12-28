import { useEffect, useState } from "react";

const ImageComponent = ({ src, width, height, className, alt = "image" }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=loading`
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };

    const handleError = () => {
      setCurrentSrc(`https://placehold.co/${width}x${height}?text=error`);
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, width, height]);

  return (
    <img
      className={`${className} ${isLoaded ? "" : "blur-md"}`}
      src={currentSrc}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default ImageComponent;
