import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import OptimizedImage from "./OptimizedImage";

interface ArtworkImage {
  main: string;
  thumbnail: string;
  alt: string;
}

interface ArtworkGalleryProps {
  images: ArtworkImage[];
  title: string;
}

const ArtworkGallery = ({ images, title }: ArtworkGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentImage = images[activeIndex];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      if (e.key === "ArrowLeft" && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {/* Main Image Container */}
      <div 
        className="relative w-full bg-secondary rounded-xl overflow-hidden shadow-elegant"
        style={{ aspectRatio: "3/4" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <OptimizedImage
              src={currentImage.main}
              alt={currentImage.alt}
              className="w-full h-full"
              priority={activeIndex === 0}
              aspectRatio="3/4"
              objectFit="contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
            {activeIndex + 1} / {images.length}
          </div>
        )}

        {/* Zoom Indicator */}
        <button 
          className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm hover:bg-background w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
          aria-label="Zoom image"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1 px-1 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={cn(
                "flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all cursor-pointer border-3",
                activeIndex === index
                  ? "border-accent shadow-lg scale-105"
                  : "border-transparent hover:border-muted-foreground/30 hover:scale-105"
              )}
              aria-label={`View ${image.alt}`}
            >
              <OptimizedImage
                src={image.thumbnail}
                alt={image.alt}
                className="w-full h-full"
                aspectRatio="1/1"
                objectFit="cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Swipe Hint for Mobile */}
      {images.length > 1 && (
        <p className="text-xs text-muted-foreground text-center md:hidden">
          Swipe or tap thumbnails to view more images
        </p>
      )}
    </div>
  );
};

export default ArtworkGallery;
