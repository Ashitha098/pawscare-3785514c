
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PetCard from "@/components/pet/PetCard";
import { pets } from "@/data/pets";
import { toast } from "sonner";

const PetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [petType, setPetType] = useState<string | undefined>(undefined);
  const [filteredPets, setFilteredPets] = useState(pets);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);

  // Filter options
  const [filters, setFilters] = useState({
    goodWithChildren: false,
    goodWithDogs: false,
    goodWithCats: false,
    vaccinated: false,
    neutered: false,
  });

  useEffect(() => {
    // Animate pet cards when they first load
    setAnimateResults(true);
    const timer = setTimeout(() => setAnimateResults(false), 500);
    
    return () => clearTimeout(timer);
  }, [filteredPets]);

  // Handle search input as user types
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
      }
    }, 500);
    
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  const handleSearch = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = pets;
      
      // Apply search term filter
      if (searchTerm) {
        results = results.filter(
          (pet) =>
            pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply pet type filter
      if (petType && petType !== "All") {
        results = results.filter((pet) => pet.type === petType);
      }
      
      // Apply checkbox filters
      if (filters.goodWithChildren) {
        results = results.filter((pet) => pet.goodWith.children);
      }
      
      if (filters.goodWithDogs) {
        results = results.filter((pet) => pet.goodWith.dogs);
      }
      
      if (filters.goodWithCats) {
        results = results.filter((pet) => pet.goodWith.cats);
      }
      
      if (filters.vaccinated) {
        results = results.filter((pet) => pet.vaccinated);
      }
      
      if (filters.neutered) {
        results = results.filter((pet) => pet.neutered);
      }
      
      setFilteredPets(results);
      setIsLoading(false);
      
      if (results.length === 0) {
        toast.info("No pets match your search criteria. Try adjusting your filters.");
      } else if (results.length < pets.length) {
        toast.success(`Found ${results.length} pets that match your search`);
      }
    }, 400);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setPetType(undefined);
    setFilters({
      goodWithChildren: false,
      goodWithDogs: false,
      goodWithCats: false,
      vaccinated: false,
      neutered: false,
    });
    
    setIsLoading(true);
    setTimeout(() => {
      setFilteredPets(pets);
      setIsLoading(false);
      toast.info("All filters have been reset");
    }, 300);
  };

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName],
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="page-title mb-2">Find Your Perfect Pet</h1>
        <p className="text-gray-600 max-w-3xl mb-8">
          Browse our selection of adorable pets looking for their forever homes. Use the filters to narrow down your search and find your perfect match.
        </p>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  placeholder="Search pets by name or breed"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="col-span-1">
              <Select value={petType} onValueChange={(value) => {
                setPetType(value);
                // Auto-search when pet type changes
                setTimeout(() => handleSearch(), 100);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select pet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Pets</SelectItem>
                  <SelectItem value="Dog">Dogs</SelectItem>
                  <SelectItem value="Cat">Cats</SelectItem>
                  <SelectItem value="Bird">Birds</SelectItem>
                  <SelectItem value="Other">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-1 flex">
              <Button onClick={handleSearch} className="mr-2 flex-1 bg-pawsblue-500 hover:bg-pawsblue-600">
                {isLoading ? "Searching..." : "Search"}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex-shrink group transition-colors"
              >
                {showFilters ? (
                  <>
                    <Filter className="mr-2 h-4 w-4 animate-pulse text-pawsblue-600" />
                    Hide Filters
                  </>
                ) : (
                  <>
                    <SlidersHorizontal className="mr-2 h-4 w-4 group-hover:text-pawsblue-600" />
                    More Filters
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t animate-fade-in">
              <h3 className="text-lg font-medium mb-4">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goodWithChildren"
                      checked={filters.goodWithChildren}
                      onCheckedChange={() => handleFilterChange("goodWithChildren")}
                    />
                    <Label htmlFor="goodWithChildren">Good with children</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goodWithDogs"
                      checked={filters.goodWithDogs}
                      onCheckedChange={() => handleFilterChange("goodWithDogs")}
                    />
                    <Label htmlFor="goodWithDogs">Good with dogs</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goodWithCats"
                      checked={filters.goodWithCats}
                      onCheckedChange={() => handleFilterChange("goodWithCats")}
                    />
                    <Label htmlFor="goodWithCats">Good with cats</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="vaccinated"
                      checked={filters.vaccinated}
                      onCheckedChange={() => handleFilterChange("vaccinated")}
                    />
                    <Label htmlFor="vaccinated">Vaccinated</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="neutered"
                      checked={filters.neutered}
                      onCheckedChange={() => handleFilterChange("neutered")}
                    />
                    <Label htmlFor="neutered">Neutered/Spayed</Label>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button variant="outline" onClick={resetFilters} className="text-gray-600">
                  Reset Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Pets Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-48 w-full mb-3"></div>
                <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.map((pet, index) => (
              <div 
                key={pet.id} 
                className={`${animateResults ? "animate-fade-in" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PetCard pet={pet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No pets found</h3>
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

export default PetsPage;
