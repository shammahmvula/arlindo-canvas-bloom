import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ArtworkCard from "@/components/ArtworkCard";
import heroBallerina from "@/assets/hero-ballerina.jpg";
import portraitPower from "@/assets/portrait-power.jpg";
import childhoodJoy from "@/assets/childhood-joy.jpg";
import culturalCelebration from "@/assets/cultural-celebration.jpg";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const featuredWorks = [
    {
      id: "2",
      title: "Portrait of Power",
      image: portraitPower,
      category: "portraits",
      medium: "Acrylic on canvas",
      dimensions: "100 x 100 cm",
      year: 2024,
      price: 3800,
    },
    {
      id: "3",
      title: "Childhood Joy",
      image: childhoodJoy,
      category: "children",
      medium: "Mixed media on canvas",
      dimensions: "100 x 100 cm",
      year: 2023,
      price: 3200,
    },
    {
      id: "4",
      title: "Cultural Celebration",
      image: culturalCelebration,
      category: "cultural",
      medium: "Oil and mixed media on canvas",
      dimensions: "120 x 100 cm",
      year: 2024,
      sold: true,
    },
  ];

  const collections = [
    {
      name: "Ballet & Movement",
      description: "Dynamic paintings celebrating grace, strength, and the poetry of human motion",
      link: "/gallery?category=ballet",
    },
    {
      name: "Portraits of Power",
      description: "Bold expressionist portraits capturing the beauty and dignity of Black excellence",
      link: "/gallery?category=portraits",
    },
    {
      name: "Childhood Joy",
      description: "Heartwarming pieces that celebrate the innocence and wonder of young life",
      link: "/gallery?category=children",
    },
    {
      name: "Cultural Celebration",
      description: "Works honoring African heritage, family bonds, and shared cultural pride",
      link: "/gallery?category=cultural",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBallerina})`,
            filter: "brightness(0.4)",
          }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-primary-foreground drop-shadow-lg">
            ARLINDO MAUNDE
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 drop-shadow-md">
            Contemporary African Expressionist Art
          </p>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Celebrating Movement, Culture & Humanity Through Paint
          </p>
          <Link to="/gallery">
            <Button variant="hero" size="xl">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Paint drip effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
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
              Featured Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent pieces available for acquisition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
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
