
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login - would connect to backend in real implementation
    setTimeout(() => {
      toast.success("Login successful!");
      setIsLoading(false);
      // In a real app, you would redirect the user after successful login
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
              <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-xs text-pawsblue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-pawsblue-500 hover:bg-pawsblue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-pawsblue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
