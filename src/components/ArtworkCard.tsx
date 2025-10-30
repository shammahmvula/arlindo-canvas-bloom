import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import OptimizedImage from "./OptimizedImage";

interface ArtworkCardProps {
  id: string;
  title: string;
  image: string;
  medium: string;
  dimensions: string;
  price?: number;
  sold?: boolean;
}

const ArtworkCard = ({ id, title, image, medium, dimensions, price, sold }: ArtworkCardProps) => {
  return (
    <Link to={`/artwork/${id}`} className="artwork-card group block">
      <div className="relative overflow-hidden rounded-lg">
        <OptimizedImage
          src={image}
          alt={`${title} - Mixed media painting by Arlindo Maunde`}
          className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
          aspectRatio="4/5"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {sold && (
          <Badge className="absolute top-4 right-4 bg-gold text-gold-foreground">
            SOLD
          </Badge>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-lg font-bold group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{medium}</p>
        <p className="text-sm text-muted-foreground">{dimensions}</p>
        {price && !sold && (
          <p className="text-base font-semibold text-accent">R{price.toLocaleString()}</p>
        )}
      </div>
    </Link>
  );
};

export default ArtworkCard;
