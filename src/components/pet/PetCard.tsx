
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pet } from "@/data/pets";
import FavoritePetButton from "./FavoritePetButton";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
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
    <Link to={`/pets/${pet.id}`}>
      <Card className="paws-card overflow-hidden h-full transition-transform hover:scale-[1.02] group">
        <div className="relative">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          <Badge className={`absolute top-3 right-3 ${getStatusBadgeColor(pet.adoptionStatus)}`}>
            {pet.adoptionStatus}
          </Badge>
          <div className="absolute top-3 left-3">
            <FavoritePetButton petId={pet.id} petName={pet.name} />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold">{pet.name}</h3>
            <Badge variant="outline" className="text-xs border-pawsblue-300 text-pawsblue-600">
              {pet.type}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm mb-2">{pet.breed}, {pet.age}</p>
          <p className="text-gray-500 text-sm line-clamp-2">{pet.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PetCard;
