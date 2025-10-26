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
// 3 New Artworks
import ballerinaLeap from "@/assets/ballerina-leap.jpg";
import elevationPortrait from "@/assets/elevation-portrait.jpg";
import dancerRedMotion from "@/assets/dancer-red-motion.jpg";

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
      
      {/* Diagonal Split Grid Hero Section - 10 Artworks */}
      <section className="relative bg-background overflow-hidden">
        <div className="relative w-full max-h-[82vh] h-[82vh] overflow-hidden">
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50 z-[5]" />
          
          {/* Introductory Text Overlay */}
          <div className="absolute inset-0 z-[25] flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-[900px]"
            >
              <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[72px] font-bold mb-4 text-white tracking-[0.05em] leading-[1.1] drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)]">
                ARLINDO MAUNDE
              </h1>
              <p className="text-xl md:text-2xl lg:text-[24px] font-medium mb-3 text-white/95 tracking-[0.01em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Contemporary African Expressionist Art
              </p>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                Celebrating Movement, Culture & Humanity Through Paint
              </p>
              <Link to="/gallery">
                <Button 
                  size="lg"
                  className="bg-[#2C5FED] text-white hover:bg-[#1E4ACC] hover:shadow-[0_10px_24px_rgba(44,95,237,0.5)] hover:-translate-y-[3px] transition-all duration-300 px-10 md:px-12 py-5 md:py-[22px] text-base md:text-[18px] font-semibold rounded-[10px] shadow-[0_6px_16px_rgba(44,95,237,0.4)]"
                >
                  Explore Full Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Diagonal Grid Container with 10 Artworks */}
          <div className="absolute inset-0 w-full h-full">
            
            {/* Artwork 1 - Hero Trumpet Player (Large, Top-Left) - LIGHTER OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute top-[2%] left-[3%] w-[24%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-10 overflow-hidden"
              role="article"
            >
              {/* Uniform Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Trumpet Player artwork details"
              >
                <img
                  src={trumpetPlayer}
                  alt="Passionate trumpet player looking upward - Contemporary African expressionist painting by Arlindo Maunde"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 2 - Holy Bible (Medium, Top-Right) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-[12%] right-[8%] w-[18%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-8 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Holy Bible artwork details"
              >
                <img
                  src={holyBible}
                  alt="Figure holding Holy Bible with dripping paint effect - Spiritual artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 3 - Cultural Portrait (Small, Middle-Left) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[32%] left-[6%] w-[15%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-6 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Cultural Portrait artwork details"
              >
                <img
                  src={africanHeaddress}
                  alt="Cultural portrait with vibrant African headdress - Mixed media by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 4 - Blue Portrait (Medium, Middle-Center-Right) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-[28%] right-[13%] w-[20%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-7 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Blue Portrait artwork details"
              >
                <img
                  src={blueHeaddress}
                  alt="Elegant portrait with blue accents and flowing composition by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 5 - Portrait (Medium, Lower-Left) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[56%] left-[10%] w-[18%] aspect-[4/5] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-5 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Portrait artwork details"
              >
                <img
                  src={portraitSmall}
                  alt="Intimate portrait with emotional depth by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 6 - Contemporary Portrait (Medium, Lower-Center) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-[50%] left-[35%] w-[19%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-6 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Contemporary Portrait artwork details"
              >
                <img
                  src={portraitMedium}
                  alt="Contemporary expressive portrait - Mixed media artwork by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 7 - Expressive Portrait (Medium-Large, Bottom-Right) - LIGHTER OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="absolute bottom-[3%] right-[6%] w-[22%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-9 overflow-hidden"
              role="article"
            >
              {/* Uniform Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Expressive Portrait artwork details"
              >
                <img
                  src={smallPortrait}
                  alt="Expressive contemporary portrait by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 8 - Ballerina Leap (Small-Medium, Top-Center Gap) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[18%] left-[36%] w-[17%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-7 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Ballerina artwork details"
              >
                <img
                  src={ballerinaLeap}
                  alt="Dynamic ballerina in graceful motion - Contemporary dance painting by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 9 - Elevation Portrait (Medium, Middle-Left Area) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="absolute top-[44%] left-[3%] w-[20%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-8 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Elevation artwork details"
              >
                <img
                  src={elevationPortrait}
                  alt="Uplifting portrait expressing hope and elevation by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>

            {/* Artwork 10 - Dancer Red Motion (Medium, Lower-Right Extension) - STANDARD OVERLAY */}
            <motion.article
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="absolute bottom-[10%] right-[35%] w-[22%] aspect-[3/4] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-400 cursor-pointer group z-7 overflow-hidden"
              role="article"
            >
              {/* Individual Standard Overlay (50%) */}
              <div className="absolute inset-0 bg-black/50 z-[2] pointer-events-none" />
              <Link 
                to="/gallery" 
                className="block w-full h-full relative z-[3]"
                aria-label="View Dancer Red Motion artwork details"
              >
                <img
                  src={dancerRedMotion}
                  alt="Dynamic dancer with vibrant red motion blur - Energetic painting by Arlindo Maunde"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
              </Link>
            </motion.article>
          </div>
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
