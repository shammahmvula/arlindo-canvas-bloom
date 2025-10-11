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
    title: "Dance of Freedom",
    image: "/src/assets/hero-ballerina.jpg",
    category: "ballet",
    medium: "Mixed media on canvas",
    dimensions: "120 x 90 cm",
    year: 2024,
    price: 4500,
    description: "A powerful expressionist painting celebrating the grace and strength of a Black ballet dancer, rendered in bold black and white with explosive blue and orange paint drips that capture the energy of movement.",
  },
  {
    id: "2",
    title: "Portrait of Power",
    image: "/src/assets/portrait-power.jpg",
    category: "portraits",
    medium: "Acrylic on canvas",
    dimensions: "100 x 100 cm",
    year: 2024,
    price: 3800,
    description: "An emotionally striking portrait that celebrates Black feminine beauty and strength through bold brushstrokes and vibrant magenta and orange accents.",
  },
  {
    id: "3",
    title: "Childhood Joy",
    image: "/src/assets/childhood-joy.jpg",
    category: "children",
    medium: "Mixed media on canvas",
    dimensions: "100 x 100 cm",
    year: 2023,
    price: 3200,
    description: "A heartwarming piece capturing the pure joy and innocence of childhood through expressive black and white contrasts with playful blue and orange paint splashes.",
  },
  {
    id: "4",
    title: "Cultural Celebration",
    image: "/src/assets/cultural-celebration.jpg",
    category: "cultural",
    medium: "Oil and mixed media on canvas",
    dimensions: "120 x 100 cm",
    year: 2024,
    sold: true,
    description: "A celebration of African family bonds and cultural pride, featuring traditional patterns mixed with modern expressionist techniques in golden ochre and magenta.",
  },
  {
    id: "5",
    title: "Leap of Faith",
    image: "/src/assets/dancer-leap.jpg",
    category: "ballet",
    medium: "Acrylic on canvas",
    dimensions: "90 x 120 cm",
    year: 2024,
    price: 4200,
    description: "Dynamic painting of a male dancer mid-leap, showcasing the athleticism and artistry of movement through dramatic black silhouette with electric blue dripping paint.",
  },
  {
    id: "6",
    title: "Contemplation",
    image: "/src/assets/contemplation.jpg",
    category: "portraits",
    medium: "Oil on canvas",
    dimensions: "90 x 120 cm",
    year: 2023,
    price: 4000,
    description: "An elegant profile portrait capturing a moment of quiet contemplation, rendered in sophisticated black and white with subtle orange and magenta fabric accents.",
  },
];

export const categories = [
  { id: "all", name: "All Works" },
  { id: "ballet", name: "Ballet & Movement" },
  { id: "portraits", name: "Portraits" },
  { id: "children", name: "Children" },
  { id: "cultural", name: "Cultural Celebration" },
];
