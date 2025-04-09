
export interface Accessory {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "Toys" | "Beds" | "Clothing" | "Feeding" | "Collars" | "Grooming";
  petType: "Dog" | "Cat" | "Both";
  image: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
}

export const accessories: Accessory[] = [
  {
    id: 1,
    name: "Plush Squeaky Toy",
    description: "Soft plush toy with a squeaker inside. Perfect for small to medium-sized dogs.",
    price: 12.99,
    category: "Toys",
    petType: "Dog",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Cozy Cat Bed",
    description: "Plush, comfortable bed for cats to lounge and sleep in. Machine washable cover.",
    price: 29.99,
    category: "Beds",
    petType: "Cat",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: true,
    rating: 4.8
  },
  {
    id: 3,
    name: "Reflective Dog Collar",
    description: "Adjustable collar with reflective strips for visibility during night walks.",
    price: 15.99,
    category: "Collars",
    petType: "Dog",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: false,
    rating: 4.2
  },
  {
    id: 4,
    name: "Interactive Treat Dispenser",
    description: "Keep your pet mentally stimulated with this treat-dispensing toy.",
    price: 18.99,
    category: "Toys",
    petType: "Both",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=500&h=350",
    inStock: false,
    featured: false,
    rating: 4.7
  },
  {
    id: 5,
    name: "Pet Grooming Brush",
    description: "Gentle brush for removing loose fur and preventing mats.",
    price: 14.99,
    category: "Grooming",
    petType: "Both",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: true,
    rating: 4.4
  },
  {
    id: 6,
    name: "Winter Dog Sweater",
    description: "Keep your dog warm during winter walks with this cozy sweater.",
    price: 24.99,
    category: "Clothing",
    petType: "Dog",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: false,
    rating: 4.1
  },
  {
    id: 7,
    name: "Automatic Water Fountain",
    description: "Fresh, flowing water to encourage your pet to stay hydrated.",
    price: 39.99,
    category: "Feeding",
    petType: "Both",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871c214838?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: true,
    rating: 4.9
  },
  {
    id: 8,
    name: "Cat Scratching Post",
    description: "Durable scratching post to satisfy your cat's natural instinct to scratch.",
    price: 34.99,
    category: "Toys",
    petType: "Cat",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: false,
    rating: 4.3
  },
  {
    id: 9,
    name: "Orthopedic Dog Bed",
    description: "Supportive bed for senior dogs or those with joint issues.",
    price: 59.99,
    category: "Beds",
    petType: "Dog",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    inStock: true,
    featured: true,
    rating: 4.6
  }
];
