
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  PawPrint, 
  Users, 
  Calendar, 
  ShoppingCart, 
  Plus, 
  Edit, 
  Trash,
  Search,
  ArrowUpDown
} from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { pets } from "@/data/pets";
import { groomingServices } from "@/data/grooming";
import { accessories } from "@/data/accessories";
import { toast } from "sonner";

// Mock data for admin
const appointments = [
  { 
    id: 101, 
    petName: "Max", 
    ownerName: "John Doe", 
    service: "Bath & Brush", 
    date: "2025-04-15", 
    time: "10:00 AM", 
    status: "Confirmed" 
  },
  { 
    id: 102, 
    petName: "Bella", 
    ownerName: "Jane Smith", 
    service: "Full Grooming", 
    date: "2025-04-16", 
    time: "2:00 PM", 
    status: "Pending" 
  },
  { 
    id: 103, 
    petName: "Charlie", 
    ownerName: "Mike Johnson", 
    service: "Nail Trim", 
    date: "2025-04-17", 
    time: "11:30 AM", 
    status: "Completed" 
  }
];

const orders = [
  {
    id: 201,
    customerName: "Alice Brown",
    items: ["Plush Squeaky Toy", "Dog Collar"],
    total: 28.98,
    date: "2025-04-14",
    status: "Shipped"
  },
  {
    id: 202,
    customerName: "Bob Wilson",
    items: ["Cozy Cat Bed", "Pet Grooming Brush"],
    total: 44.98,
    date: "2025-04-15",
    status: "Processing"
  },
  {
    id: 203,
    customerName: "Carol Davis",
    items: ["Winter Dog Sweater"],
    total: 24.99,
    date: "2025-04-13",
    status: "Delivered"
  }
];

const users = [
  {
    id: 301,
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "2024-12-10",
    adoptions: 1,
    purchases: 3
  },
  {
    id: 302,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    joinDate: "2025-01-05",
    adoptions: 2,
    purchases: 5
  },
  {
    id: 303,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    joinDate: "2025-02-15",
    adoptions: 0,
    purchases: 2
  }
];

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingPet, setIsAddingPet] = useState(false);
  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    description: ""
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication (in a real app, this would be a backend call)
    if (loginData.email === "admin@pawscare.com" && loginData.password === "admin123") {
      toast.success("Login successful!");
      setIsAuthenticated(true);
    } else {
      toast.error("Invalid credentials");
    }
  };

  const handleAddPet = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`${newPet.name} has been added successfully!`);
    setNewPet({
      name: "",
      type: "",
      breed: "",
      age: "",
      description: ""
    });
    setIsAddingPet(false);
  };

  const handleDeleteItem = (id: number, type: string) => {
    toast.success(`${type} #${id} has been deleted.`);
  };

  const handleDeleteAppointment = (id: number) => {
    toast.success(`Appointment #${id} has been cancelled.`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "completed":
        return "bg-blue-500";
      case "shipped":
        return "bg-purple-500";
      case "processing":
        return "bg-orange-500";
      case "delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">Admin Login</CardTitle>
              <CardDescription>
                Sign in to access the Paws Care admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="admin@example.com" 
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    required 
                  />
                  <div className="text-xs text-muted-foreground">
                    <p>Demo credentials:</p>
                    <p>Email: admin@pawscare.com</p>
                    <p>Password: admin123</p>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-pawsblue-500 hover:bg-pawsblue-600">
                  Sign in
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="page-title mb-6">Admin Dashboard</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-5 md:w-fit">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="pets">Pets</TabsTrigger>
            <TabsTrigger value="services">Appointments</TabsTrigger>
            <TabsTrigger value="accessories">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pet Stats */}
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500">Total Pets</p>
                    <h3 className="text-3xl font-bold">{pets.length}</h3>
                    <p className="text-sm text-green-600">3 available for adoption</p>
                  </div>
                  <div className="bg-pawsblue-100 p-4 rounded-full">
                    <PawPrint size={28} className="text-pawsblue-600" />
                  </div>
                </CardContent>
              </Card>

              {/* Users Stats */}
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500">Users</p>
                    <h3 className="text-3xl font-bold">{users.length}</h3>
                    <p className="text-sm text-green-600">2 new this week</p>
                  </div>
                  <div className="bg-pawsblue-100 p-4 rounded-full">
                    <Users size={28} className="text-pawsblue-600" />
                  </div>
                </CardContent>
              </Card>

              {/* Appointments Stats */}
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500">Appointments</p>
                    <h3 className="text-3xl font-bold">{appointments.length}</h3>
                    <p className="text-sm text-green-600">1 today</p>
                  </div>
                  <div className="bg-pawsblue-100 p-4 rounded-full">
                    <Calendar size={28} className="text-pawsblue-600" />
                  </div>
                </CardContent>
              </Card>

              {/* Orders Stats */}
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-gray-500">Orders</p>
                    <h3 className="text-3xl font-bold">{orders.length}</h3>
                    <p className="text-sm text-green-600">$98.95 revenue</p>
                  </div>
                  <div className="bg-pawsblue-100 p-4 rounded-full">
                    <ShoppingCart size={28} className="text-pawsblue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-2 border-green-500 pl-4 ml-4 relative">
                      <div className="absolute w-3 h-3 rounded-full bg-green-500 top-0 -left-[7px]"></div>
                      <p className="font-medium">New adoption application</p>
                      <p className="text-gray-500 text-sm">John applied to adopt Max</p>
                      <p className="text-gray-400 text-xs">20 minutes ago</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-4 ml-4 relative">
                      <div className="absolute w-3 h-3 rounded-full bg-blue-500 top-0 -left-[7px]"></div>
                      <p className="font-medium">New grooming appointment</p>
                      <p className="text-gray-500 text-sm">Bella is scheduled for a Full Grooming</p>
                      <p className="text-gray-400 text-xs">1 hour ago</p>
                    </div>
                    <div className="border-l-2 border-orange-500 pl-4 ml-4 relative">
                      <div className="absolute w-3 h-3 rounded-full bg-orange-500 top-0 -left-[7px]"></div>
                      <p className="font-medium">New order placed</p>
                      <p className="text-gray-500 text-sm">Bob purchased Cozy Cat Bed</p>
                      <p className="text-gray-400 text-xs">3 hours ago</p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4 ml-4 relative">
                      <div className="absolute w-3 h-3 rounded-full bg-purple-500 top-0 -left-[7px]"></div>
                      <p className="font-medium">New user registered</p>
                      <p className="text-gray-500 text-sm">Carol created an account</p>
                      <p className="text-gray-400 text-xs">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1">
                <CardHeader className="pb-3">
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-pawsblue-500 hover:bg-pawsblue-600" onClick={() => setIsAddingPet(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Pet
                  </Button>
                  <Button className="w-full bg-pawsorange-500 hover:bg-pawsorange-600">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Appointment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                  <Button variant="outline" className="w-full">
                    Generate Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pets Tab */}
          <TabsContent value="pets" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    placeholder="Search pets"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-pawsblue-500 hover:bg-pawsblue-600" onClick={() => setIsAddingPet(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Pet
              </Button>
            </div>

            {/* Pets Table */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                      ID
                      <ArrowUpDown size={14} className="ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Breed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pets
                    .filter((pet) =>
                      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((pet) => (
                      <tr key={pet.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {pet.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {pet.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {pet.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {pet.breed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={`${
                            pet.adoptionStatus === "Available"
                              ? "bg-green-500"
                              : pet.adoptionStatus === "Pending"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                          }`}>
                            {pet.adoptionStatus}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2">
                          <Button size="sm" variant="ghost" onClick={() => navigate(`/pets/${pet.id}`)}>
                            View
                          </Button>
                          <Button size="sm" variant="ghost" className="text-blue-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-600"
                            onClick={() => handleDeleteItem(pet.id, "Pet")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Add Pet Modal */}
            {isAddingPet && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <Card className="w-full max-w-lg">
                  <CardHeader>
                    <CardTitle>Add New Pet</CardTitle>
                    <CardDescription>
                      Fill in the details to add a new pet to the adoption list
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddPet} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Pet Name</Label>
                        <Input
                          id="name"
                          value={newPet.name}
                          onChange={(e) => setNewPet({...newPet, name: e.target.value})}
                          placeholder="Enter pet name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Pet Type</Label>
                        <Input
                          id="type"
                          value={newPet.type}
                          onChange={(e) => setNewPet({...newPet, type: e.target.value})}
                          placeholder="Dog, Cat, etc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="breed">Breed</Label>
                        <Input
                          id="breed"
                          value={newPet.breed}
                          onChange={(e) => setNewPet({...newPet, breed: e.target.value})}
                          placeholder="Enter breed"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          value={newPet.age}
                          onChange={(e) => setNewPet({...newPet, age: e.target.value})}
                          placeholder="2 years, 6 months, etc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Input
                          id="description"
                          value={newPet.description}
                          onChange={(e) => setNewPet({...newPet, description: e.target.value})}
                          placeholder="Brief description of the pet"
                          required
                        />
                      </div>
                      <div className="flex justify-end space-x-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => setIsAddingPet(false)}>
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-pawsblue-500 hover:bg-pawsblue-600">
                          Save Pet
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    placeholder="Search appointments"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button className="bg-pawsorange-500 hover:bg-pawsorange-600">
                <Plus className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </div>

            {/* Appointments Table */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pet
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date / Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments
                    .filter((apt) =>
                      apt.petName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      apt.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      apt.service.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((apt) => (
                      <tr key={apt.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {apt.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {apt.petName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {apt.ownerName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {apt.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {apt.date} at {apt.time}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getStatusColor(apt.status)}>
                            {apt.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2">
                          <Button size="sm" variant="ghost" className="text-blue-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-600"
                            onClick={() => handleDeleteAppointment(apt.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="accessories" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    placeholder="Search orders"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">
                Export Orders
              </Button>
            </div>

            {/* Orders Table */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders
                    .filter((order) =>
                      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      order.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    )
                    .map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customerName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.items.join(", ")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2">
                          <Button size="sm" variant="ghost">
                            View
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-600"
                            onClick={() => handleDeleteItem(order.id, "Order")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <Input
                    placeholder="Search users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Adoptions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Purchases
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users
                    .filter((user) =>
                      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      user.email.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.adoptions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.purchases}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 space-x-2">
                          <Button size="sm" variant="ghost" className="text-blue-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="text-red-600"
                            onClick={() => handleDeleteItem(user.id, "User")}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AdminPage;
