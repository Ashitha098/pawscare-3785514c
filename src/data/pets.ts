export interface Pet {
  id: number;
  name: string;
  type: "Dog" | "Cat" | "Bird" | "Other";
  breed: string;
  age: string;
  gender: "Male" | "Female";
  size: "Small" | "Medium" | "Large";
  description: string;
  image: string;
  adoptionStatus: "Available" | "Pending" | "Adopted";
  vaccinated: boolean;
  neutered: boolean;
  goodWith: {
    children: boolean;
    dogs: boolean;
    cats: boolean;
  };
}

export const pets: Pet[] = [
  {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: "2 years",
    gender: "Male",
    size: "Large",
    description: "Max is a friendly and energetic Golden Retriever who loves to play fetch and go on long walks. He's great with children and other pets, making him a perfect addition to an active family.",
    image: "/lovable-uploads/f4727d12-2f92-41d3-81ed-cb22ec9a0a6b.png",
    adoptionStatus: "Available",
    vaccinated: true,
    neutered: true,
    goodWith: {
      children: true,
      dogs: true,
      cats: true
    }
  },
  {
    id: 2,
    name: "Bella",
    type: "Cat",
    breed: "Persian",
    age: "1 year",
    gender: "Female",
    size: "Small",
    description: "Bella is a beautiful Persian cat with a gentle temperament. She enjoys lounging in sunny spots and being groomed. She's looking for a quiet home where she can be pampered.",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?auto=format&fit=crop&w=500&h=350",
    adoptionStatus: "Available",
    vaccinated: true,
    neutered: true,
    goodWith: {
      children: true,
      dogs: false,
      cats: true
    }
  },
  {
    id: 3,
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    age: "3 years",
    gender: "Male",
    size: "Medium",
    description: "Charlie is a curious and friendly Beagle who loves to explore. He has a great nose and will follow interesting scents wherever they lead. He's a loyal companion who enjoys cuddling after a day of adventure.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=500&h=350",
    adoptionStatus: "Available",
    vaccinated: true,
    neutered: false,
    goodWith: {
      children: true,
      dogs: true,
      cats: false
    }
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "2 years",
    gender: "Female",
    size: "Small",
    description: "Luna is a vocal Siamese cat who loves attention. She's playful and intelligent, often figuring out how to open cabinets and doors. She would thrive in a home where she gets plenty of mental stimulation.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=500&h=350",
    adoptionStatus: "Pending",
    vaccinated: true,
    neutered: true,
    goodWith: {
      children: false,
      dogs: false,
      cats: true
    }
  },
  {
    id: 5,
    name: "Cooper",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "4 years",
    gender: "Male",
    size: "Large",
    description: "Cooper is a well-trained Labrador who previously worked as a service dog. He's calm, obedient, and excellent with people of all ages. He enjoys swimming and playing with toys.",
    image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=500&h=350",
    adoptionStatus: "Available",
    vaccinated: true,
    neutered: true,
    goodWith: {
      children: true,
      dogs: true,
      cats: true
    }
  },
  {
    id: 6,
    name: "Oliver",
    type: "Cat",
    breed: "Tabby",
    age: "1 year",
    gender: "Male",
    size: "Medium",
    description: "Oliver is a playful tabby cat with a lot of energy. He loves chasing toys and climbing cat trees. He's looking for an active home where he can exercise and play.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=500&h=350",
    adoptionStatus: "Available",
    vaccinated: true,
    neutered: true,
    goodWith: {
      children: true,
      dogs: true,
      cats: true
    }
  }
];
