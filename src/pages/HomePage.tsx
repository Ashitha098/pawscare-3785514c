
import { Link } from "react-router-dom";
import { PawPrint, Search, Heart, Calendar, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";

const HomePage = () => {
  // Sample featured pets
  const featuredPets = [
    {
      id: 1,
      name: "Max",
      type: "Dog",
      breed: "Golden Retriever",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=300",
    },
    {
      id: 2,
      name: "Bella",
      type: "Cat",
      breed: "Persian",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=300",
    },
    {
      id: 3,
      name: "Charlie",
      type: "Dog",
      breed: "Beagle",
      age: "3 years",
      image: "https://images.unsplash.com/photo-1501286353178-1ec871c214838?auto=format&fit=crop&w=400&h=300",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect <br className="hidden md:block" />
            Furry Companion
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Connecting loving homes with pets who need them. Browse our selection of adorable animals waiting for their forever home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pets">
              <Button className="paws-btn-primary text-base">
                Find a Pet
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="paws-btn-outline bg-white/80 border-white text-gray-800 hover:bg-white text-base">
                Register to Adopt
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adoption Service */}
            <Card className="paws-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-pawsblue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-pawsblue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pet Adoption</h3>
                <p className="text-gray-600 mb-4">
                  Find your perfect companion from our selection of lovable, adoptable pets in need of forever homes.
                </p>
                <Link to="/pets" className="text-pawsblue-600 font-medium hover:underline flex items-center justify-center gap-1">
                  Explore Pets <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Grooming Service */}
            <Card className="paws-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-pawsblue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-pawsblue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Grooming Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional grooming services to keep your pet looking fresh, clean, and healthy all year round.
                </p>
                <Link to="/grooming" className="text-pawsblue-600 font-medium hover:underline flex items-center justify-center gap-1">
                  Book Appointment <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Accessories Service */}
            <Card className="paws-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-pawsblue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-pawsblue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pet Accessories</h3>
                <p className="text-gray-600 mb-4">
                  Shop high-quality toys, beds, clothes, and more to keep your furry friend happy and comfortable.
                </p>
                <Link to="/accessories" className="text-pawsblue-600 font-medium hover:underline flex items-center justify-center gap-1">
                  Shop Now <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-16 bg-gray-50 paw-pattern">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-2">Featured Pets</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Meet some of our adorable pets waiting for their forever homes. Each one is special and ready to bring joy to your life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPets.map((pet) => (
              <Link to={`/pets/${pet.id}`} key={pet.id} className="block group">
                <Card className="paws-card overflow-hidden h-full">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden relative">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{pet.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-600">{pet.breed}</p>
                        <p className="text-gray-500 text-sm">{pet.age}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-pawsblue-500 hover:text-pawsblue-700 hover:bg-pawsblue-50 rounded-full">
                        View details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/pets">
              <Button className="paws-btn-primary">
                View All Pets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-2">Adoption Process</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We've made adopting a pet simple and rewarding. Follow these steps to welcome a new family member.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pawsorange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse Pets</h3>
              <p className="text-gray-600">
                Search through our available pets to find your perfect match
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pawsorange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Fill out our adoption application form with your information
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pawsorange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Meet & Greet</h3>
              <p className="text-gray-600">
                Schedule a time to meet your potential new family member
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pawsorange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Welcome Home</h3>
              <p className="text-gray-600">
                Complete the adoption and welcome your pet to their forever home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pawsblue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">Ready to Find Your New Best Friend?</h2>
              <p className="text-pawsblue-100">
                Start your journey today and give a pet a loving forever home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="paws-btn-secondary">
                  Register Now
                </Button>
              </Link>
              <Link to="/pets">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-pawsblue-600 paws-btn">
                  Browse Pets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
