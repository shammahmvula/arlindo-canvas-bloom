import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ArtworkCard from "./ArtworkCard";
import { Artwork } from "@/data/artworks";
import { Button } from "./ui/button";

interface GalleryGridProps {
  artworks: Artwork[];
  initialCount?: number;
  batchSize?: number;
}

const GalleryGrid = ({ 
  artworks, 
  initialCount = 9,
  batchSize = 6 
}: GalleryGridProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);

  const hasMore = visibleCount < artworks.length;
  const visibleArtworks = artworks.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    // Small delay to show loading state
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + batchSize, artworks.length));
      setIsLoading(false);
    }, 100);
  }, [artworks.length, batchSize]);

  // Reset visible count when artworks change (e.g., category filter)
  useEffect(() => {
    setVisibleCount(initialCount);
  }, [artworks, initialCount]);

  // Infinite scroll observer
  useEffect(() => {
    const sentinel = document.getElementById('gallery-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      {
        rootMargin: "400px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMore]);

  if (artworks.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-muted-foreground">No artworks found in this category.</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {visibleArtworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index < initialCount ? Math.min(index * 0.05, 0.2) : 0 
            }}
          >
            <ArtworkCard 
              {...artwork} 
              priority={index < 6} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Sentinel for infinite scroll */}
      <div id="gallery-sentinel" className="h-4" />

      {/* Manual load more button as fallback */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            onClick={loadMore}
            disabled={isLoading}
            className="min-w-[200px]"
          >
            {isLoading ? "Loading..." : `Load More (${artworks.length - visibleCount} remaining)`}
          </Button>
        </div>
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
