import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import artistStudio from "@/assets/arlindo-gallery.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About the Artist</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating Black culture, movement, and humanity through contemporary expressionist art
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <OptimizedImage
                src={artistStudio}
                alt="Arlindo Maunde in gallery with his artwork"
                className="w-full h-auto rounded-lg shadow-2xl"
                priority={true}
                aspectRatio="auto"
              />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold">Arlindo Maunde</h2>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                Arlindo Maunde is a contemporary African expressionist artist whose powerful paintings celebrate the beauty, strength, and grace of Black culture. Born and raised in Mozambique, Arlindo's work is deeply influenced by the vibrant energy of African dance, the emotional depth of everyday human experiences, and the rich cultural heritage of his homeland.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                His signature style combines bold black and white figurative compositions with explosive bursts of color—electric blues, vibrant oranges, and rich magentas—that seem to drip and flow across the canvas. This technique creates a dynamic tension between stillness and movement, capturing fleeting moments of human emotion and physical expression.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground">
                Through his art, Arlindo seeks to challenge conventional representations of Black figures in fine art, presenting them not just as subjects, but as powerful expressions of joy, dignity, strength, and cultural pride. Each painting invites viewers to see the profound beauty in Black life and movement.
              </p>

              <div className="pt-4">
                <Link to="/gallery">
                  <Button variant="hero" size="lg">
                    Explore the Collection
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Artistic Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-secondary rounded-lg p-8 md:p-12 mb-20"
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Artistic Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">Movement</h3>
                <p className="text-sm text-muted-foreground">
                  Capturing the energy and grace of human motion, from ballet to everyday gestures, celebrating the body's natural poetry.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-1 bg-vibrant mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Honoring African heritage and Black excellence through art that speaks to shared experiences and collective pride.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-1 bg-magenta mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-3">Emotion</h3>
                <p className="text-sm text-muted-foreground">
                  Using bold contrasts and vibrant accents to evoke deep feelings and create visceral connections with viewers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Technique & Process</h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Arlindo works primarily with mixed media on canvas, combining acrylics, oils, and various painting techniques to achieve his signature dramatic style. His process begins with gestural sketches that capture the essence of movement and emotion.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              The characteristic dripping paint effect is achieved through a carefully controlled yet spontaneous application technique, allowing gravity and chance to play a role in the final composition. This creates a sense of raw energy and authenticity that defines his work.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Each piece can take several weeks to complete, as Arlindo layers paint, allows sections to dry, and returns with fresh eyes to refine the emotional impact and compositional balance.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
