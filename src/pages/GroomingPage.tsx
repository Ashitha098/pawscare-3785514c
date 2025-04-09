
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Clock, Check, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import MainLayout from "@/components/layout/MainLayout";
import { groomingServices } from "@/data/grooming";
import { toast } from "sonner";

const GroomingPage = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [bookingData, setBookingData] = useState({
    petName: "",
    petType: "",
    serviceId: 0,
    notes: "",
    timeSlot: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);

  const timeSlots = [
    "9:00 AM", 
    "10:00 AM", 
    "11:00 AM", 
    "1:00 PM", 
    "2:00 PM", 
    "3:00 PM", 
    "4:00 PM"
  ];

  const handleServiceSelect = (serviceId: number) => {
    setBookingData({
      ...bookingData,
      serviceId,
    });
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast.error("Please select a date");
      return;
    }
    
    if (!bookingData.timeSlot) {
      toast.error("Please select a time slot");
      return;
    }
    
    setIsBooking(true);
    
    // Mock booking process
    setTimeout(() => {
      toast.success("Your grooming appointment has been booked!");
      setIsBooking(false);
      navigate("/");
    }, 1500);
  };

  const getSelectedService = () => {
    return groomingServices.find((service) => service.id === bookingData.serviceId);
  };

  return (
    <MainLayout>
      {currentStep === 1 ? (
        <div className="container mx-auto px-4 py-10">
          <h1 className="page-title mb-2">Pet Grooming Services</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            Keep your furry friend looking and feeling their best with our professional grooming services. Choose from our range of treatments designed for all pet types and breeds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groomingServices.map((service) => (
              <Card key={service.id} className="paws-card overflow-hidden flex flex-col">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover"
                  />
                  {service.popular && (
                    <Badge className="absolute top-3 right-3 bg-pawsorange-500">
                      Popular
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="flex justify-between items-center">
                    <span>${service.price}</span>
                    <span className="flex items-center text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {service.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="py-0">
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.petTypes.map((type) => (
                      <Badge key={type} variant="outline" className="text-xs border-gray-300 text-gray-700">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 mt-auto">
                  <Button 
                    onClick={() => handleServiceSelect(service.id)} 
                    className="w-full bg-pawsblue-500 hover:bg-pawsblue-600"
                  >
                    Book This Service
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-pawsblue-50 rounded-xl p-6 md:p-8 border border-pawsblue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-pawsblue-800 mb-4">Why Choose Our Grooming Services?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-pawsblue-500 mr-2 mt-1" size={18} />
                    <span>Professional groomers with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-pawsblue-500 mr-2 mt-1" size={18} />
                    <span>Premium, pet-safe products and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-pawsblue-500 mr-2 mt-1" size={18} />
                    <span>Stress-free environment for your pet</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-pawsblue-500 mr-2 mt-1" size={18} />
                    <span>Personalized care for each pet's unique needs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-pawsblue-800 mb-4">Grooming FAQ</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">How often should I groom my pet?</h3>
                    <p className="text-sm text-gray-600">This varies by breed, but generally every 4-8 weeks is recommended.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Do I need to stay during the grooming session?</h3>
                    <p className="text-sm text-gray-600">You're welcome to wait, but most pet parents drop off and pick up later.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">What if my pet has special needs?</h3>
                    <p className="text-sm text-gray-600">Our groomers are experienced with elderly pets, anxious pets, and those with medical conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-10">
          <Button 
            variant="outline" 
            className="mb-6" 
            onClick={() => setCurrentStep(1)}
          >
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to Services
          </Button>

          <h1 className="text-3xl font-bold mb-8">Book Your Grooming Appointment</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Details</CardTitle>
                  <CardDescription>
                    Fill in the details below to schedule your pet's grooming session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="petName">Pet Name</Label>
                        <Input
                          id="petName"
                          value={bookingData.petName}
                          onChange={(e) => setBookingData({...bookingData, petName: e.target.value})}
                          placeholder="Enter your pet's name"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="petType">Pet Type</Label>
                        <Select
                          value={bookingData.petType}
                          onValueChange={(value) => setBookingData({...bookingData, petType: value})}
                          required
                        >
                          <SelectTrigger id="petType">
                            <SelectValue placeholder="Select pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Dog">Dog</SelectItem>
                            <SelectItem value="Cat">Cat</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Select Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Select a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => 
                                date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                date.getDay() === 0
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label>Select Time</Label>
                        <Select
                          value={bookingData.timeSlot}
                          onValueChange={(value) => setBookingData({...bookingData, timeSlot: value})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="notes">Special Instructions (Optional)</Label>
                        <Textarea
                          id="notes"
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                          placeholder="Any special requests or information about your pet"
                          className="resize-none"
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-pawsblue-500 hover:bg-pawsblue-600"
                      disabled={isBooking}
                    >
                      {isBooking ? "Booking Appointment..." : "Confirm Booking"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-gray-700">Selected Service</h3>
                      <p className="font-semibold">{getSelectedService()?.name}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700">Duration</h3>
                      <p>{getSelectedService()?.duration}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700">Price</h3>
                      <p className="text-lg font-semibold">${getSelectedService()?.price}</p>
                    </div>
                    
                    {date && (
                      <div>
                        <h3 className="font-medium text-gray-700">Date</h3>
                        <p>{format(date, "PPP")}</p>
                      </div>
                    )}
                    
                    {bookingData.timeSlot && (
                      <div>
                        <h3 className="font-medium text-gray-700">Time</h3>
                        <p>{bookingData.timeSlot}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-4 border">
                <h3 className="font-semibold mb-2">Booking Policy</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Please arrive 10 minutes before your appointment. Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.
                </p>
                <p className="text-sm text-gray-600">
                  All pets must be up to date on vaccinations and be on flea prevention.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default GroomingPage;
