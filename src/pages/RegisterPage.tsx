
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { PawPrint } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { toast } from "sonner";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    if (!acceptTerms) {
      toast.error("Please accept the Terms and Conditions");
      return;
    }
    
    setIsLoading(true);
    
    // Mock registration - would connect to backend in real implementation
    setTimeout(() => {
      toast.success("Registration successful!");
      setIsLoading(false);
      // In a real app, you would redirect the user after successful registration
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-none">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-2">
                <div className="rounded-full bg-pawsblue-100 p-2">
                  <PawPrint className="h-8 w-8 text-pawsblue-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
              <CardDescription>
                Enter your information to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms}
                    onCheckedChange={() => setAcceptTerms(!acceptTerms)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I accept the{" "}
                    <Link to="/terms" className="text-pawsblue-600 hover:underline">
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-pawsblue-500 hover:bg-pawsblue-600"
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-pawsblue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
