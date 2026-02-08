import { useState, useRef, useEffect, memo } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  placeholderColor?: string;
}

const ProgressiveImage = memo(({ 
  src, 
  alt, 
  className, 
  priority = false,
  aspectRatio = "auto",
  sizes = "100vw",
  objectFit = "cover",
  placeholderColor = "hsl(0 0% 96%)"
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px", // Start loading 300px before viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )} 
      style={{ 
        aspectRatio,
        backgroundColor: placeholderColor,
      }}
    >
      {/* Shimmer placeholder - only show when not loaded */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, ${placeholderColor} 0%, hsl(0 0% 92%) 50%, ${placeholderColor} 100%)`,
            backgroundSize: '200% 100%',
          }}
        />
      )}
      
      {/* Actual image - only render when should load */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "w-full h-full transition-opacity duration-500",
            objectFitClass,
            isLoaded ? "opacity-100" : "opacity-0",
            hasError && "hidden"
          )}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary text-muted-foreground">
          <p className="text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
});

ProgressiveImage.displayName = "ProgressiveImage";

export default ProgressiveImage;
