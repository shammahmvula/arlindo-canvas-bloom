import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ArtworkCard from "@/components/ArtworkCard";
// Hero Images - Three Featured Artworks
import trumpetPlayerLookingUp from "@/assets/gallery/trumpet-player-looking-up.jpg";
import soulfulSerenade from "@/assets/soulful-serenade.png";
import africanHeaddress from "@/assets/african-headdress.jpg";

// Featured Works for Gallery Section
import graceInMotion from "@/assets/grace-in-motion.png";
import unspokenWeight from "@/assets/unspoken-weight.png";
import lookingUpward from "@/assets/looking-upward.png";
import eleganceUnbound from "@/assets/elegance-unbound.png";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredWorks = [
    {
      id: "2",
      title: "Grace in Motion",
      image: graceInMotion,
      medium: "Mixed media on canvas",
      dimensions: "100 × 80 cm (39.4 × 31.5 inches)",
      price: 2800,
    },
    {
      id: "3",
      title: "Unspoken Weight",
      image: unspokenWeight,
      medium: "Mixed media on canvas",
      dimensions: "90 × 70 cm (35.4 × 27.6 inches)",
      price: 2500,
    },
    {
      id: "4",
      title: "Looking Upward",
      image: lookingUpward,
      medium: "Mixed media on canvas",
      dimensions: "85 × 65 cm (33.5 × 25.6 inches)",
      price: 2400,
    },
    {
      id: "5",
      title: "Elegance Unbound",
      image: eleganceUnbound,
      medium: "Mixed media on canvas",
      dimensions: "110 × 85 cm (43.3 × 33.5 inches)",
      price: 3000,
    },
  ];

  const collections = [
    {
      name: "Ballet & Movement",
      description: "Dynamic paintings celebrating grace, strength, and the poetry of human motion",
      link: "/gallery?category=ballet",
    },
    {
      name: "Portraits",
      description: "Emotionally powerful portraits exploring hope, struggle, and human expression",
      link: "/gallery?category=portraits",
    },
    {
      name: "Cultural Expression",
      description: "Celebrating music, heritage, and the soulful voices of Black culture",
      link: "/gallery?category=cultural",
    },
    {
      name: "Feminine Grace",
      description: "Honoring the quiet strength and timeless beauty of Black femininity",
      link: "/gallery?category=feminine",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Mobile Hero Section - Single Image */}
      <section className="md:hidden relative bg-background overflow-hidden h-screen">
        <img 
          src={trumpetPlayerLookingUp}
          alt="Trumpet Dreams by Arlindo Maunde - Jazz musician looking upward"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-serif text-[42px] font-bold mb-4 text-white tracking-[0.05em] leading-[1.2] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              ARLINDO MAUNDE
            </h1>
            <p className="text-base font-normal mb-3 text-white/95 tracking-[0.01em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-[1.6]">
              Contemporary African Expressionist Art
            </p>
            <p className="text-base text-white/90 max-w-md mx-auto mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Celebrating Movement, Culture & Humanity Through Paint
            </p>
            <Link to="/gallery">
              <Button 
                size="lg"
                className="bg-[#2C5FED] text-white hover:bg-[#1E4ACC] hover:shadow-[0_10px_30px_rgba(44,95,237,0.6)] transition-all duration-300 px-9 py-4 text-base font-semibold rounded-[10px] shadow-[0_6px_20px_rgba(44,95,237,0.5)] uppercase tracking-[1.5px]"
              >
                EXPLORE FULL COLLECTION →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Three-Image Row Hero Section - Desktop & Tablet */}
      <section className="hidden md:block relative bg-[#1A1A1A] overflow-hidden h-[85vh] min-h-[600px] max-h-[900px]">
        {/* Three-image row */}
        <div className="flex w-full h-full">
          {/* Image 1: Trumpet Dreams (Looking Upward) */}
          <div className="flex-1 h-full overflow-hidden relative group">
            <img 
              src={trumpetPlayerLookingUp}
              alt="Trumpet Dreams - Jazz musician looking upward, contemporary African expressionist painting by Arlindo Maunde"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
          </div>

          {/* Image 2: Soulful Serenade (Brown/Ochre Trumpet) */}
          <div className="flex-1 h-full overflow-hidden relative group">
            <img 
              src={soulfulSerenade}
              alt="Soulful Serenade - Trumpet player in warm ochre tones by Arlindo Maunde"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
          </div>

          {/* Image 3: Regal Heritage (Woman with Headdress) */}
          <div className="flex-1 h-full overflow-hidden relative group">
            <img 
              src={africanHeaddress}
              alt="Regal Heritage - Woman with elaborate headdress, cultural portrait by Arlindo Maunde"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Dark overlay across all three images */}
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

        {/* Text content centered over the images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-[900px] px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-serif text-[56px] lg:text-[72px] font-bold mb-5 text-white tracking-[4px] leading-[1.1] drop-shadow-[0_6px_20px_rgba(0,0,0,0.95)]">
              ARLINDO MAUNDE
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-medium mb-3 text-white tracking-[1px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            Contemporary African Expressionist Art
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg font-normal mb-9 text-white/95 leading-[1.6] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            Celebrating Movement, Culture & Humanity Through Paint
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/gallery">
              <Button 
                size="lg"
                className="bg-[#2C5FED] text-white hover:bg-[#1E4ACC] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(44,95,237,0.6)] transition-all duration-300 px-[50px] py-5 text-lg font-semibold rounded-xl shadow-[0_6px_20px_rgba(44,95,237,0.5)] uppercase tracking-[1.5px]"
                aria-label="Explore Arlindo Maunde's full art collection"
              >
                EXPLORE FULL COLLECTION →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="pt-12 md:pt-[100px] pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore curated collections celebrating different aspects of Black culture and human experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={collection.link}
                  className="group block p-8 bg-secondary rounded-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{collection.description}</p>
                  <span className="text-accent font-medium group-hover:underline">
                    View Collection →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Latest Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent pieces available for acquisition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {featuredWorks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ArtworkCard {...artwork} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button variant="hero" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Where Culture Meets Canvas
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Through bold black and white compositions accented with explosive color, Arlindo Maunde creates emotionally powerful artwork that celebrates the beauty, strength, and cultural pride of Black life. Each painting captures moments of movement and humanity, inviting viewers into a world where art honors heritage.
            </p>
            <Link to="/about">
              <Button variant="vibrant" size="lg">
                Read Full Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-vibrant/10 to-magenta/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be first to view new works and exclusive releases
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-md px-4 py-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="hero" size="lg" type="submit">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
