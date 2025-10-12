import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  priority = false,
  aspectRatio = "auto"
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-secondary", className)} style={{ aspectRatio }}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-secondary">
          <div className="h-full w-full bg-gradient-to-r from-secondary via-muted to-secondary" />
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
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

export default OptimizedImage;
