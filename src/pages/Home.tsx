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
      
      {/* Hero Spotlight Grid Section */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-[60px] max-w-[1600px]">
          {/* Hero Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_1fr_1fr] grid-rows-[auto] md:grid-rows-[repeat(4,auto)] lg:grid-rows-[repeat(3,1fr)] gap-4 md:gap-5 lg:gap-6 min-h-[400px] lg:min-h-[85vh]">
            
            {/* Hero Artwork - Trumpet Player */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group col-span-1 row-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-3 min-h-[450px] md:min-h-full"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Trumpet Player artwork details"
              >
                <img
                  src={trumpetPlayer}
                  alt="Passionate trumpet player looking upward - Contemporary African expressionist painting by Arlindo Maunde"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 2: Holy Bible */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-2 lg:row-start-1"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Holy Bible artwork details"
              >
                <img
                  src={holyBible}
                  alt="Figure holding Holy Bible with dripping paint effect - Spiritual artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 3: African Headdress */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-3 lg:row-start-1"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Cultural Portrait artwork details"
              >
                <img
                  src={africanHeaddress}
                  alt="Cultural portrait with vibrant African headdress - Mixed media by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 4: Blue Headdress */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-2 lg:row-start-2"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Blue Portrait artwork details"
              >
                <img
                  src={blueHeaddress}
                  alt="Elegant portrait with blue accents and flowing composition by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 5: Portrait Medium */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-3 lg:row-start-2"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Contemporary Portrait artwork details"
              >
                <img
                  src={portraitMedium}
                  alt="Contemporary expressive portrait - Mixed media artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 6: Portrait Small */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-2 lg:row-start-3"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Intimate Portrait artwork details"
              >
                <img
                  src={portraitSmall}
                  alt="Intimate portrait with emotional depth by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>

            {/* Position 7: Small Portrait */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative overflow-hidden rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] transition-all duration-400 cursor-pointer group min-h-[250px] md:min-h-full lg:col-start-3 lg:row-start-3"
              role="article"
            >
              <Link 
                to="/gallery" 
                className="block w-full h-full"
                aria-label="View Expressive Portrait artwork details"
              >
                <img
                  src={smallPortrait}
                  alt="Expressive contemporary portrait by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.article>
          </div>

          {/* Text Section Below Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center mt-12 md:mt-16 lg:mt-20 max-w-[900px] mx-auto"
          >
            <h1 className="font-serif text-[42px] md:text-5xl lg:text-[64px] font-bold mb-4 md:mb-5 text-foreground tracking-[0.05em] leading-[1.1]">
              ARLINDO MAUNDE
            </h1>
            <p className="text-lg md:text-[22px] font-medium mb-3 text-foreground tracking-[0.01em]">
              Contemporary African Expressionist Art
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
              Celebrating Movement, Culture & Humanity Through Paint
            </p>
            <Link to="/gallery">
              <Button 
                size="lg"
                className="bg-[#2C5FED] text-white hover:bg-[#1E4ACC] hover:shadow-[0_10px_24px_rgba(44,95,237,0.4)] hover:-translate-y-[3px] transition-all duration-300 px-10 md:px-12 py-5 md:py-[18px] text-base md:text-[17px] font-semibold rounded-[10px] shadow-[0_4px_12px_rgba(44,95,237,0.3)]"
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
