// Existing artworks
import soulfulSerenade from "@/assets/soulful-serenade.png";
import graceInMotion from "@/assets/grace-in-motion.png";
import unspokenWeight from "@/assets/unspoken-weight.png";
import lookingUpward from "@/assets/looking-upward.png";
import eleganceUnbound from "@/assets/elegance-unbound.png";

// New artworks from Cloudinary collection
import masekela from "@/assets/masekela-trumpet.jpg";
import dancerMotionLarge from "@/assets/dancer-motion-large.jpg";
import trumpetPassion from "@/assets/trumpet-passion.jpg";
import portraitSmall2 from "@/assets/portrait-small-2.jpg";
import breadWinner from "@/assets/bread-winner.jpg";
import innocence from "@/assets/innocence.jpg";
import ballerinaGrace from "@/assets/ballerina-grace.jpg";
import myZone from "@/assets/my-zone.jpg";
import africanPride from "@/assets/african-pride.jpg";
import brothers from "@/assets/brothers.jpg";
import elderSisterCare from "@/assets/elder-sister-care.jpg";
import elevation from "@/assets/elevation.jpg";
import sunshine from "@/assets/sunshine.jpg";
import culturalDancer from "@/assets/cultural-dancer.jpg";
import sixoloMusician from "@/assets/sixolo-musician.jpg";
import myselfAndI from "@/assets/myself-and-i.jpg";
import holyBookLarge from "@/assets/holy-book-large.jpg";
import dancerExpression from "@/assets/dancer-expression.jpg";
import breadWinnerLarge from "@/assets/bread-winner-large.jpg";
import dadsGirl from "@/assets/dads-girl.jpg";
import familyWalk from "@/assets/family-walk.jpg";
import makhulo from "@/assets/makhulo.jpg";
import dancerVibrant from "@/assets/dancer-vibrant.jpg";
import sweetSound from "@/assets/sweet-sound.jpg";
import portraitMini from "@/assets/portrait-mini.jpg";
import prayer1 from "@/assets/prayer-1.jpg";
import prayer2 from "@/assets/prayer-2.jpg";
import brothersSmall from "@/assets/brothers-small.jpg";
import childPortrait1 from "@/assets/child-portrait-1.jpg";
import childPortrait2 from "@/assets/child-portrait-2.jpg";
import childPortrait3 from "@/assets/child-portrait-3.jpg";
import portraitColorful from "@/assets/portrait-colorful.jpg";

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
  // Existing artworks
  {
    id: "1",
    title: "Soulful Serenade",
    image: soulfulSerenade,
    category: "musical",
    medium: "Mixed media on canvas",
    dimensions: "100 × 80 cm (39.4 × 31.5 inches)",
    year: 2024,
    price: 2800,
    description: "A celebration of music as the voice of the soul. This piece captures the raw emotion and passion of a street musician pouring his heart into every note, where sound becomes color and feeling becomes art.",
  },
  {
    id: "2",
    title: "Grace in Motion",
    image: graceInMotion,
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
    image: unspokenWeight,
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
    image: lookingUpward,
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
    image: eleganceUnbound,
    category: "feminine",
    medium: "Mixed media on canvas",
    dimensions: "110 × 85 cm (43.3 × 33.5 inches)",
    year: 2024,
    price: 3000,
    description: "A woman in her power, dressed in flowing elegance, stands grounded yet ready to soar. This piece celebrates the quiet strength and timeless beauty of Black femininity.",
  },

  // Musical Expression
  {
    id: "6",
    title: "Masekela's Echo",
    image: masekela,
    category: "musical",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "A tribute to the legendary Hugh Masekela, this piece captures the soul of African jazz. The trumpet becomes a voice of freedom, history, and hope—where every note tells a story of resistance and celebration.",
  },
  {
    id: "7",
    title: "Trumpet Dreams",
    image: trumpetPassion,
    category: "musical",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3200,
    description: "The musician lost in the moment, where instrument and artist become one. Bold strokes and vibrant colors express the explosive energy of jazz, the raw passion that transforms sound into visual poetry.",
  },
  {
    id: "8",
    title: "Sixolo - The Chosen One",
    image: sixoloMusician,
    category: "musical",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3400,
    description: "A powerful portrait of a traditional musician, where cultural heritage meets contemporary expression. The sixolo (chosen one) carries forward ancestral rhythms into the modern world.",
  },
  {
    id: "9",
    title: "Sweet Sound",
    image: sweetSound,
    category: "musical",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4200,
    description: "Music cascades through vibrant splashes of color and dynamic brushwork. This large-scale piece celebrates the sensory experience of sound made visible—sweet melodies transformed into visual harmony.",
  },

  // Ballet & Movement
  {
    id: "10",
    title: "Ballerina's Dream",
    image: ballerinaGrace,
    category: "ballet",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "Grace captured mid-flight. The ballerina defies gravity with poise and power, her form dissolving into expressive brushstrokes that convey both discipline and freedom.",
  },
  {
    id: "11",
    title: "Dynamic Energy",
    image: dancerMotionLarge,
    category: "ballet",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "Movement unleashed across the canvas in this explosive large-format work. The dancer's energy radiates through bold gestural marks, capturing the raw power of human motion.",
  },
  {
    id: "12",
    title: "Expressive Flow",
    image: dancerExpression,
    category: "ballet",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "Dance as emotional expression—each movement a word, each gesture a sentence. This piece explores the language of the body through vibrant color and fluid form.",
  },
  {
    id: "13",
    title: "Vibrant Spirit",
    image: dancerVibrant,
    category: "ballet",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "Pure joy in motion. The dancer's spirit shines through explosive colors and dynamic composition, celebrating the transformative power of movement and artistic expression.",
  },
  {
    id: "14",
    title: "Cultural Dance",
    image: culturalDancer,
    category: "cultural",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3200,
    description: "Traditional dance meets contemporary art. The dancer embodies ancestral rhythms and stories, connecting past and present through movement that transcends time.",
  },

  // Childhood & Family
  {
    id: "15",
    title: "Pure Innocence",
    image: innocence,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "The unburdened joy of childhood captured in expressive strokes. This piece celebrates the pure wonder in a child's eyes—a reminder of hope and possibility.",
  },
  {
    id: "16",
    title: "Brothers",
    image: brothers,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3200,
    description: "The unbreakable bond between siblings. Two souls united by blood and experience, their connection visible in every brushstroke—a celebration of brotherhood and shared journey.",
  },
  {
    id: "17",
    title: "Elder Sister's Care",
    image: elderSisterCare,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "The protective love of an older sibling. This tender portrait explores responsibility, care, and the quiet strength found in looking after those we love.",
  },
  {
    id: "18",
    title: "Daddy's Girl",
    image: dadsGirl,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "The special bond between father and daughter immortalized on canvas. Love, trust, and protection radiate from this touching family portrait.",
  },
  {
    id: "19",
    title: "Family Walk",
    image: familyWalk,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "Simple moments create lasting memories. This piece captures the beauty of togetherness—a family moving forward as one, united in their journey through life.",
  },
  {
    id: "20",
    title: "Young Spirit",
    image: childPortrait1,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1800,
    description: "A child's essence captured with vibrant energy. Small in scale but powerful in presence, this intimate portrait celebrates youthful vitality.",
  },
  {
    id: "21",
    title: "Childhood Wonder",
    image: childPortrait2,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1800,
    description: "Wide-eyed discovery and endless curiosity define childhood. This expressive portrait captures that magical moment of seeing the world with fresh eyes.",
  },
  {
    id: "22",
    title: "Joyful Heart",
    image: childPortrait3,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1800,
    description: "Pure happiness radiates from this small but impactful portrait. The child's joy is contagious, reminding us of life's simple pleasures.",
  },
  {
    id: "23",
    title: "Bond of Brothers",
    image: brothersSmall,
    category: "childhood",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1800,
    description: "Sibling connection in miniature—a tender study of brotherhood, loyalty, and the ties that bind families together across time.",
  },

  // Spiritual Contemplation
  {
    id: "24",
    title: "Sacred Prayer",
    image: prayer1,
    category: "spiritual",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1900,
    description: "A moment of communion with the divine. Hands clasped, head bowed—this intimate piece explores the universal human need for spiritual connection and hope.",
  },
  {
    id: "25",
    title: "Divine Moment",
    image: prayer2,
    category: "spiritual",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1900,
    description: "Faith made visible through gesture and expression. This contemplative portrait captures the peace found in spiritual practice and devotion.",
  },
  {
    id: "26",
    title: "Holy Scripture",
    image: holyBookLarge,
    category: "spiritual",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 90 cm (59.1 × 35.4 inches)",
    year: 2024,
    price: 3800,
    description: "The sacred text as source of wisdom and guidance. This powerful large-scale work explores the deep relationship between faith, knowledge, and spiritual journey.",
  },

  // Portraits
  {
    id: "27",
    title: "My Zone",
    image: myZone,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "A moment of self-possession and inner peace. This portrait celebrates the importance of personal space—the sacred zone where we reconnect with ourselves.",
  },
  {
    id: "28",
    title: "African Pride",
    image: africanPride,
    category: "cultural",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3200,
    description: "Cultural identity and heritage shine through traditional adornment. This powerful portrait celebrates African beauty, dignity, and the pride of ancestral connection.",
  },
  {
    id: "29",
    title: "Elevation",
    image: elevation,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "100 × 70 cm (39.4 × 27.6 inches)",
    year: 2024,
    price: 2800,
    description: "Rising above challenges, reaching for higher purpose. This uplifting portrait captures the human spirit's capacity for growth and transformation.",
  },
  {
    id: "30",
    title: "Sunshine Within",
    image: sunshine,
    category: "portraits",
    medium: "Mixed media on canvas",
    dimensions: "90 × 60 cm (35.4 × 23.6 inches)",
    year: 2024,
    price: 2600,
    description: "Inner light radiating outward. This warm portrait explores how our internal warmth and positivity illuminate the world around us.",
  },
  {
    id: "31",
    title: "Myself and I",
    image: myselfAndI,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 90 cm (59.1 × 35.4 inches)",
    year: 2024,
    price: 3800,
    description: "Self-reflection and identity exploration in monumental scale. This introspective work examines the complex relationship we have with ourselves.",
  },
  {
    id: "32",
    title: "Colorful Soul",
    image: portraitColorful,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "110 × 80 cm (43.3 × 31.5 inches)",
    year: 2024,
    price: 3200,
    description: "Vibrant personality expressed through explosive color. This dynamic portrait celebrates individuality and the beautiful complexity of human character.",
  },
  {
    id: "33",
    title: "Quiet Strength",
    image: portraitSmall2,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "50 × 35 cm (19.7 × 13.8 inches)",
    year: 2024,
    price: 1800,
    description: "Power doesn't always shout. This intimate portrait explores the dignity and resilience found in quiet determination.",
  },
  {
    id: "34",
    title: "Inner Universe",
    image: portraitMini,
    category: "portraits",
    medium: "Mixed media on Fabriano paper",
    dimensions: "35 × 25 cm (13.8 × 9.8 inches)",
    year: 2024,
    price: 1500,
    description: "The smallest canvas containing infinite depth. This miniature portrait proves that great art isn't measured by size but by emotional impact.",
  },

  // Cultural & Daily Life
  {
    id: "35",
    title: "The Bread Winner",
    image: breadWinner,
    category: "daily-life",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 90 cm (59.1 × 35.4 inches)",
    year: 2024,
    price: 3800,
    description: "The everyday hero—working, providing, sacrificing. This piece honors those who carry their families forward through dedication and hard work.",
  },
  {
    id: "36",
    title: "Provider's Journey",
    image: breadWinnerLarge,
    category: "daily-life",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4000,
    description: "The weight of responsibility carried with dignity. This large-scale work celebrates the unsung heroes who support their communities through daily labor.",
  },
  {
    id: "37",
    title: "Makhulo - Grandmother's Wisdom",
    image: makhulo,
    category: "cultural",
    medium: "Mixed media on Fabriano paper",
    dimensions: "150 × 110 cm (59.1 × 43.3 inches)",
    year: 2024,
    price: 4200,
    description: "Ancestral knowledge and cultural continuity embodied in the grandmother figure. This monumental portrait honors the keepers of tradition and family stories.",
  },
];

export const categories = [
  { id: "all", name: "All Works" },
  { id: "ballet", name: "Ballet & Movement" },
  { id: "musical", name: "Musical Expression" },
  { id: "portraits", name: "Portraits" },
  { id: "childhood", name: "Childhood & Family" },
  { id: "spiritual", name: "Spiritual Contemplation" },
  { id: "cultural", name: "Cultural Heritage" },
  { id: "feminine", name: "Feminine Grace" },
  { id: "daily-life", name: "Daily Life" },
];
