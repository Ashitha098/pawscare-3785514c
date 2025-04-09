
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  X, 
  Heart, 
  ArrowLeft,
  Calendar, 
  PawPrint, 
  User
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Pet, pets } from "@/data/pets";
import { toast } from "sonner";

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const foundPet = pets.find((p) => p.id === Number(id));
      setPet(foundPet || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-pulse space-y-6 w-full max-w-4xl">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-80 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!pet) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Pet Not Found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find the pet you're looking for. It may have been adopted or removed from our system.
            </p>
            <Link to="/pets">
              <Button className="bg-pawsblue-500 hover:bg-pawsblue-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Pets
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const handleAdoptionApplication = () => {
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Your application has been submitted! We'll contact you soon.");
      setIsApplying(false);
    }, 1500);
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500 hover:bg-green-600";
      case "Pending":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "Adopted":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <Link 
          to="/pets" 
          className="inline-flex items-center text-pawsblue-600 hover:text-pawsblue-700 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Pets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pet Image */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={pet.image} 
                alt={pet.name} 
                className="w-full h-auto object-cover rounded-xl"
              />
              <Badge className={`absolute top-4 right-4 ${getStatusBadgeColor(pet.adoptionStatus)}`}>
                {pet.adoptionStatus}
              </Badge>
            </div>
          </div>

          {/* Pet Info */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold mb-2">{pet.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-sm border-pawsblue-300 text-pawsblue-600">
                {pet.type}
              </Badge>
              <span className="text-gray-600">{pet.breed}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar size={18} className="mr-2 text-pawsorange-500" />
                <span>{pet.age}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <User size={18} className="mr-2 text-pawsorange-500" />
                <span>{pet.gender}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <PawPrint size={18} className="mr-2 text-pawsorange-500" />
                <span>{pet.size} Size</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">About {pet.name}</h2>
              <p className="text-gray-700">{pet.description}</p>
            </div>
            
            {pet.adoptionStatus === "Available" && (
              <Button 
                onClick={handleAdoptionApplication} 
                disabled={isApplying}
                className="w-full mb-4 bg-pawsorange-500 hover:bg-pawsorange-600"
              >
                {isApplying ? "Submitting..." : "Apply to Adopt"}
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Health Information</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Vaccinated</span>
                  {pet.vaccinated ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Neutered/Spayed</span>
                  {pet.neutered ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Compatibility</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Good with children</span>
                  {pet.goodWith.children ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Good with dogs</span>
                  {pet.goodWith.dogs ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Good with cats</span>
                  {pet.goodWith.cats ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default PetDetailsPage;
