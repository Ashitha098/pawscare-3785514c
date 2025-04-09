
export interface GroomingService {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  petTypes: string[];
  popular: boolean;
}

export const groomingServices: GroomingService[] = [
  {
    id: 1,
    name: "Basic Bath & Brush",
    description: "A gentle cleansing bath with premium shampoo, followed by thorough brushing to remove loose fur and detangle the coat.",
    price: 35,
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog", "Cat"],
    popular: true
  },
  {
    id: 2,
    name: "Full Grooming Package",
    description: "Complete grooming service including bath, haircut, nail trimming, ear cleaning, and teeth brushing. Perfect for regular maintenance.",
    price: 75,
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog", "Cat"],
    popular: true
  },
  {
    id: 3,
    name: "Nail Trim & Filing",
    description: "Professional nail trimming service to keep your pet comfortable and prevent damage to floors and furniture.",
    price: 20,
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871c214838?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog", "Cat", "Bird"],
    popular: false
  },
  {
    id: 4,
    name: "Flea & Tick Treatment",
    description: "Special treatment to remove and prevent fleas and ticks, including medicated bath and preventative application.",
    price: 45,
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog", "Cat"],
    popular: false
  },
  {
    id: 5,
    name: "Premium Spa Package",
    description: "Luxury treatment including aromatherapy bath, deep conditioning, massage, and premium styling. A relaxing experience for your pet.",
    price: 95,
    duration: "120 min",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog"],
    popular: true
  },
  {
    id: 6,
    name: "Teeth Cleaning",
    description: "Professional cleaning to maintain oral hygiene and prevent dental issues. Includes gentle scaling and polishing.",
    price: 30,
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    petTypes: ["Dog", "Cat"],
    popular: false
  }
];
