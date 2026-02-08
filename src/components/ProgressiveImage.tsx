import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  sizes?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const ProgressiveImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  aspectRatio = "auto",
  sizes = "100vw",
  objectFit = "cover",
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-secondary",
        className
      )} 
      style={{ aspectRatio }}
    >
      {/* Simple placeholder - only show when not loaded */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-secondary" />
      )}
      
      {/* Image - always render, use native lazy loading */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          objectFitClass,
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "hidden"
        )}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary text-muted-foreground">
          <p className="text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  );
};

export default ProgressiveImage;
