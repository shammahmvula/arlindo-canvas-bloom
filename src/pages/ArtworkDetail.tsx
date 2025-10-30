import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ArtworkCard from "@/components/ArtworkCard";
import OptimizedImage from "@/components/OptimizedImage";
import { artworks } from "@/data/artworks";
import { useToast } from "@/hooks/use-toast";

const ArtworkDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const artwork = artworks.find((art) => art.id === id);

  if (!artwork) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Artwork Not Found</h1>
            <Button onClick={() => navigate("/gallery")} variant="hero">
              Back to Gallery
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedArtworks = artworks
    .filter((art) => art.category === artwork.category && art.id !== artwork.id)
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Artwork link copied to clipboard",
    });
  };

  const handleInquire = () => {
    navigate(`/contact?artwork=${artwork.title}`);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/gallery")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>

          {/* Artwork Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <OptimizedImage
                src={artwork.image}
                alt={`${artwork.title} - ${artwork.medium} by Arlindo Maunde, ${artwork.year}`}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority={true}
                aspectRatio="4/5"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {artwork.sold && (
                <Badge className="absolute top-4 right-4 bg-gold text-gold-foreground text-base px-4 py-2">
                  SOLD
                </Badge>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {artwork.title}
              </h1>
              
              <div className="space-y-3 mb-6 text-lg">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Year:</span> {artwork.year}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Medium:</span> {artwork.medium}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Dimensions:</span> {artwork.dimensions}
                </p>
              </div>

              {artwork.description && (
                <p className="text-base leading-relaxed mb-8 text-muted-foreground">
                  {artwork.description}
                </p>
              )}

              {artwork.price && !artwork.sold && (
                <p className="text-3xl font-bold text-accent mb-8">
                  R{artwork.price.toLocaleString()}
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                {artwork.sold ? (
                  <Button size="lg" variant="outline" disabled>
                    This piece has been sold
                  </Button>
                ) : (
                  <Button size="lg" variant="hero" onClick={handleInquire}>
                    Inquire About This Piece
                  </Button>
                )}
                <Button size="lg" variant="outline" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Shipping & Details</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Original artwork, signed by artist</li>
                  <li>• Professionally packaged and insured</li>
                  <li>• Certificate of authenticity included</li>
                  <li>• International shipping available</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Related Works */}
          {relatedArtworks.length > 0 && (
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArtworks.map((art) => (
                  <ArtworkCard key={art.id} {...art} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ArtworkDetail;
