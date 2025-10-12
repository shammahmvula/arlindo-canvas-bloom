export interface Artwork {
  id: string;
  title: string;
  image: string;
  category: string;
  medium: string;
  dimensions: string;
  year: number;
  price?: number;
  sold?: boolean;
  description?: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Soulful Serenade",
    image: "/src/assets/childhood-joy.jpg", // Will be replaced with musician image
    category: "cultural",
    medium: "Mixed media on canvas",
    dimensions: "100 × 80 cm (39.4 × 31.5 inches)",
    year: 2024,
    price: 2800,
    description: "A celebration of music as the voice of the soul. This piece captures the raw emotion and passion of a street musician pouring his heart into every note, where sound becomes color and feeling becomes art.",
  },
  {
    id: "2",
    title: "Grace in Motion",
    image: "/src/assets/hero-ballerina.jpg",
    category: "ballet",
    medium: "Mixed media on canvas",
    dimensions: "120 × 90 cm (47.2 × 35.4 inches)",
    year: 2024,
    price: 3200,
    description: "The ballerina embodies strength wrapped in elegance. Each brushstroke drips like sweat and sacrifice, revealing the beauty found in disciplined movement and artistic dedication.",
  },
  {
    id: "3",
    title: "Unspoken Weight",
    image: "/src/assets/portrait-power.jpg", // Will be replaced with hands covering face image
    category: "portraits",
    medium: "Mixed media on canvas",
    dimensions: "90 × 70 cm (35.4 × 27.6 inches)",
    year: 2024,
    price: 2500,
    description: "Sometimes words fail us, and all we can do is hide behind our hands. This piece explores the silent struggles we carry, the emotions too heavy to speak, yet too powerful to ignore.",
  },
  {
    id: "4",
    title: "Looking Upward",
    image: "/src/assets/contemplation.jpg", // Will be replaced with upward-gazing portrait
    category: "portraits",
    medium: "Mixed media on canvas",
    dimensions: "85 × 65 cm (33.5 × 25.6 inches)",
    year: 2024,
    price: 2400,
    description: "In moments of doubt, we lift our eyes. This portrait captures the universal human gesture of seeking something greater—hope, faith, answers, or simply the courage to continue.",
  },
  {
    id: "5",
    title: "Elegance Unbound",
    image: "/src/assets/cultural-celebration.jpg", // Will be replaced with woman in flowing dress
    category: "feminine",
    medium: "Mixed media on canvas",
    dimensions: "110 × 85 cm (43.3 × 33.5 inches)",
    year: 2024,
    price: 3000,
    description: "A woman in her power, dressed in flowing elegance, stands grounded yet ready to soar. This piece celebrates the quiet strength and timeless beauty of Black femininity.",
  },
];

export const categories = [
  { id: "all", name: "All Works" },
  { id: "ballet", name: "Ballet & Movement" },
  { id: "portraits", name: "Portraits" },
  { id: "cultural", name: "Cultural Expression" },
  { id: "feminine", name: "Feminine Grace" },
];
