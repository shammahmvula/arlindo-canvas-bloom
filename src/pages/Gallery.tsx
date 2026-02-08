import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { artworks, categories } from "@/data/artworks";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArtworks = selectedCategory === "all"
    ? artworks
    : artworks.filter((art) => art.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the complete collection of contemporary African expressionist art celebrating culture, movement, and humanity.
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "hero" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Artwork Grid with Progressive Loading */}
          <GalleryGrid 
            artworks={filteredArtworks}
            initialCount={9}
            batchSize={6}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
