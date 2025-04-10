import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Star } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { accessories, Accessory } from "@/data/accessories";
import { useCart } from "@/context/CartContext";

const AccessoriesPage = () => {
  const [filteredAccessories, setFilteredAccessories] = useState(accessories);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedPetType, setSelectedPetType] = useState<string | undefined>(undefined);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  
  // Filter checkboxes
  const [filters, setFilters] = useState({
    inStock: false,
    featured: false,
  });

  const categories = ["Toys", "Beds", "Clothing", "Feeding", "Collars", "Grooming"];
  
  const handleSearch = () => {
    let results = accessories;
    
    // Apply search term filter
    if (searchTerm) {
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== "All") {
      results = results.filter((item) => item.category === selectedCategory);
    }
    
    // Apply pet type filter
    if (selectedPetType && selectedPetType !== "All") {
      results = results.filter(
        (item) => item.petType === selectedPetType || item.petType === "Both"
      );
    }
    
    // Apply price range filter
    results = results.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    // Apply checkbox filters
    if (filters.inStock) {
      results = results.filter((item) => item.inStock);
    }
    
    if (filters.featured) {
      results = results.filter((item) => item.featured);
    }
    
    setFilteredAccessories(results);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(undefined);
    setSelectedPetType(undefined);
    setPriceRange([0, 100]);
    setFilters({
      inStock: false,
      featured: false,
    });
    setFilteredAccessories(accessories);
  };

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  const handleAddToCart = (accessory: Accessory) => {
    addToCart(accessory);
  };

  const renderRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="h-4 w-4 text-gray-300" />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {Array(5 - fullStars - (hasHalfStar ? 1 : 0))
          .fill(0)
          .map((_, i) => (
            <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
          ))}
        <span className="text-xs text-gray-600 ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="page-title mb-2">Pet Accessories</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Browse our selection of high-quality accessories for your furry friends. From toys to beds, collars to feeding supplies, we have everything you need to keep your pets happy and healthy.
        </p>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Search accessories"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="col-span-1">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-1">
              <Button onClick={handleSearch} className="w-full bg-pawsblue-500 hover:bg-pawsblue-600">
                Search
              </Button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <Button variant="ghost" onClick={() => setShowFilters(!showFilters)} className="text-gray-600">
              {showFilters ? "Hide Filters" : "More Filters"}
            </Button>
            <Button variant="outline" onClick={resetFilters} className="text-gray-600">
              Reset Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Pet Type</h3>
                  <Select value={selectedPetType} onValueChange={setSelectedPetType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Pets</SelectItem>
                      <SelectItem value="Dog">Dogs</SelectItem>
                      <SelectItem value="Cat">Cats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Price Range</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="minPrice">Min ($)</Label>
                      <Input
                        id="minPrice"
                        type="number"
                        min="0"
                        max="100"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxPrice">Max ($)</Label>
                      <Input
                        id="maxPrice"
                        type="number"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Options</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="inStock"
                        checked={filters.inStock}
                        onCheckedChange={() => handleFilterChange("inStock")}
                      />
                      <Label htmlFor="inStock">In Stock Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={filters.featured}
                        onCheckedChange={() => handleFilterChange("featured")}
                      />
                      <Label htmlFor="featured">Featured Items</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredAccessories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <Card key={accessory.id} className="paws-card overflow-hidden flex flex-col">
                <div className="relative">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-40 object-cover"
                  />
                  <Badge
                    className={`absolute top-3 right-3 ${
                      accessory.inStock
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {accessory.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                  {accessory.featured && (
                    <Badge className="absolute top-3 left-3 bg-pawsorange-500">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4 flex-grow">
                  <div className="mb-1">
                    <Badge variant="outline" className="text-xs">
                      {accessory.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs ml-1">
                      {accessory.petType}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-1">{accessory.name}</h3>
                  <div className="mb-2">{renderRating(accessory.rating)}</div>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {accessory.description}
                  </p>
                  <p className="font-bold text-lg text-pawsblue-700">
                    ${accessory.price.toFixed(2)}
                  </p>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button
                    onClick={() => handleAddToCart(accessory)}
                    className="w-full bg-pawsblue-500 hover:bg-pawsblue-600"
                    disabled={!accessory.inStock}
                  >
                    {accessory.inStock ? (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    ) : (
                      "Out of Stock"
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No accessories found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more results.
            </p>
            <Button onClick={resetFilters} className="mt-4 bg-pawsblue-500 hover:bg-pawsblue-600">
              Reset All Filters
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AccessoriesPage;
