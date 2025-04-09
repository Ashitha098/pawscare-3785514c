
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  X, 
  Heart, 
  ArrowLeft,
  Calendar, 
  PawPrint, 
  User,
  MessageCircle
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Pet, pets } from "@/data/pets";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import FavoritePetButton from "@/components/pet/FavoritePetButton";

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isApplying, setIsApplying] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      const foundPet = pets.find((p) => p.id === Number(id));
      setPet(foundPet || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  // Mock multiple images for the pet
  const mockImages = pet ? [
    pet.image,
    "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  ] : [];

  const handleAdoptionApplication = () => {
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Your application has been submitted! We'll contact you soon.");
      setIsApplying(false);
    }, 1500);
  };

  const handleAskQuestion = () => {
    if (!question.trim()) {
      toast.error("Please enter your question");
      return;
    }
    
    toast.success("Your question has been sent! A staff member will respond soon.");
    setQuestion("");
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
          {/* Pet Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={mockImages[activeImageIndex]} 
                alt={pet.name} 
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <Badge className={`absolute top-4 right-4 ${getStatusBadgeColor(pet.adoptionStatus)}`}>
                {pet.adoptionStatus}
              </Badge>
              <div className="absolute top-4 left-4">
                <FavoritePetButton petId={pet.id} petName={pet.name} />
              </div>
            </div>
            
            {/* Thumbnail images */}
            <div className="flex gap-2 mt-4">
              {mockImages.map((image, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeImageIndex === index ? "border-pawsblue-500" : "border-transparent"
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${pet.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
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

        {/* Tab Section */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
              <TabsTrigger value="ask">Ask About {pet.name}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Pet Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Basic Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><span className="font-medium">Breed:</span> {pet.breed}</li>
                        <li><span className="font-medium">Age:</span> {pet.age}</li>
                        <li><span className="font-medium">Gender:</span> {pet.gender}</li>
                        <li><span className="font-medium">Size:</span> {pet.size}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Adoption Information</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><span className="font-medium">Status:</span> {pet.adoptionStatus}</li>
                        <li><span className="font-medium">Adoption Fee:</span> $150</li>
                        <li><span className="font-medium">Location:</span> Main Shelter</li>
                        <li><span className="font-medium">Arrival Date:</span> 3 months ago</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="health">
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
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Microchipped</span>
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Special Needs</span>
                      <X className="h-5 w-5 text-red-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="compatibility">
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
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Good for first-time owners</span>
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Activity Level</span>
                      <span>Medium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ask">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Ask About {pet.name}</h2>
                  <p className="text-gray-600 mb-4">
                    Have a question about {pet.name}? Our staff will respond to your inquiry within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <Textarea 
                      placeholder={`What would you like to know about ${pet.name}?`}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <div className="flex justify-end">
                      <Button 
                        onClick={handleAskQuestion}
                        className="bg-pawsblue-500 hover:bg-pawsblue-600"
                      >
                        Send Question
                        <MessageCircle className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default PetDetailsPage;
