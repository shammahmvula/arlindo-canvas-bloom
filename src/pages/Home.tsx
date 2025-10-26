import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ArtworkCard from "@/components/ArtworkCard";
// Bento Box Hero Images from Cloudinary Collection
import trumpetPlayer from "@/assets/trumpet-player.jpg";
import holyBible from "@/assets/holy-bible.jpg";
import africanHeaddress from "@/assets/african-headdress.jpg";
import blueHeaddress from "@/assets/blue-headdress.jpg";
import portraitMedium from "@/assets/portrait-medium.jpg";
import portraitSmall from "@/assets/portrait-small.jpg";
import smallPortrait from "@/assets/small-portrait.jpg";

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
      
      {/* Bento Box Hero Section */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-10 max-w-[1400px]">
          {/* Bento Box Grid - 4 columns × 4 rows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[minmax(200px,auto)]"
          >
            {/* Position 1: Trumpet Player - HERO (2x2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 lg:row-span-2 group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full min-h-[300px] shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={trumpetPlayer}
                  alt="Trumpet Player - Jazz musician looking upward with trumpet by Arlindo Maunde"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 2: Holy Bible - Medium (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={holyBible}
                  alt="Holy Bible - Spiritual figure with dripping paint effect by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 3: African Headdress - Medium (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={africanHeaddress}
                  alt="African Headdress - Cultural portrait with vibrant colors by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 4: Portrait Medium - Medium (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={portraitMedium}
                  alt="Contemporary Portrait - Expressive artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 5: Blue Headdress - Large (2x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2 group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={blueHeaddress}
                  alt="Blue Headdress - Striking portrait with blue accents by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 6: Portrait Small - Medium (1x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={portraitSmall}
                  alt="Intimate Portrait - Detailed artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            {/* Position 7: Wide Bottom - Full Width (4x1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="lg:col-span-4 group"
            >
              <Link to="/gallery" className="block relative overflow-hidden rounded-2xl h-full max-h-[300px] shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={smallPortrait}
                  alt="Expressive Portrait - Contemporary artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Text Section Below Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12 md:mt-16"
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold mb-3 md:mb-4 text-foreground tracking-[0.02em]">
              ARLINDO MAUNDE
            </h1>
            <p className="text-lg md:text-xl font-medium mb-2 text-foreground">
              Contemporary African Expressionist Art
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
              Celebrating Movement, Culture & Humanity Through Paint
            </p>
            <Link to="/gallery">
              <Button 
                variant="default" 
                size="lg"
                className="bg-[hsl(var(--primary))] text-primary-foreground hover:bg-[hsl(var(--primary))]/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-8 md:px-10 py-5 md:py-6 text-base font-semibold rounded-lg"
              >
                Explore Full Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-background">
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
