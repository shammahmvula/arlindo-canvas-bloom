import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
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

          {/* Artwork Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArtworkCard {...artwork} />
              </motion.div>
            ))}
          </motion.div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No artworks found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
