
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FavoritePetButtonProps {
  petId: number;
  petName: string;
  initialFavorite?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const FavoritePetButton = ({ 
  petId, 
  petName, 
  initialFavorite = false,
  variant = "outline",
  size = "icon"
}: FavoritePetButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newState = !isFavorite;
    setIsFavorite(newState);
    
    if (newState) {
      toast.success(`${petName} added to favorites!`);
    } else {
      toast.info(`${petName} removed from favorites`);
    }
  };

  return (
    <Button 
      onClick={handleFavoriteToggle}
      variant={variant}
      size={size}
      className={`transition-colors ${isFavorite ? 'text-red-500 hover:text-red-600' : 'text-gray-400 hover:text-gray-500'}`}
    >
      <Heart 
        className={`${isFavorite ? 'fill-current' : ''}`} 
      />
    </Button>
  );
};

export default FavoritePetButton;
