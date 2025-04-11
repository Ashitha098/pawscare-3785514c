
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import OrderSuccessDialog from "@/components/checkout/OrderSuccessDialog";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "credit-card",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentMethodChange = (method: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.address || !formData.city || !formData.state || !formData.zip) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (formData.paymentMethod === "credit-card") {
      if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
        toast.error("Please fill in all payment details");
        return;
      }
    }
    
    // Generate random order number
    const generatedOrderNumber = `PW${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setOrderNumber(generatedOrderNumber);
    
    // Show success dialog
    setShowSuccessDialog(true);
  };
  
  const handleOrderComplete = () => {
    clearCart();
    setShowSuccessDialog(false);
    navigate("/");
    toast.success("Your order has been placed successfully!");
  };
  
  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-10 text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to your cart before checking out.</p>
          <Button 
            onClick={() => navigate("/accessories")}
            className="bg-pawsblue-500 hover:bg-pawsblue-600"
          >
            Browse Accessories
          </Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="text-sm text-gray-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </div>
                      </div>
                      <div className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  
                  <div className="flex justify-between font-semibold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>${(subtotal + 5).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Checkout Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact & Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea 
                    id="address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input 
                      id="state" 
                      name="state" 
                      value={formData.state} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="zip">Zip/Postal Code *</Label>
                    <Input 
                      id="zip" 
                      name="zip" 
                      value={formData.zip} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      id="credit-card" 
                      name="paymentMethod" 
                      value="credit-card" 
                      checked={formData.paymentMethod === "credit-card"} 
                      onChange={() => handlePaymentMethodChange("credit-card")} 
                      className="h-4 w-4 text-pawsblue-500" 
                    />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="radio" 
                      id="cash" 
                      name="paymentMethod" 
                      value="cash" 
                      checked={formData.paymentMethod === "cash"} 
                      onChange={() => handlePaymentMethodChange("cash")} 
                      className="h-4 w-4 text-pawsblue-500" 
                    />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                </div>
                
                {formData.paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        placeholder="1234 5678 9012 3456" 
                        value={formData.cardNumber} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date *</Label>
                        <Input 
                          id="cardExpiry" 
                          name="cardExpiry" 
                          placeholder="MM/YY" 
                          value={formData.cardExpiry} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cardCvc">CVC/CVV *</Label>
                        <Input 
                          id="cardCvc" 
                          name="cardCvc" 
                          placeholder="123" 
                          value={formData.cardCvc} 
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <Alert variant="default" className="mb-6 border-yellow-200 bg-yellow-50">
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  This is a demo store. No real payments will be processed and no actual products will be shipped.
                </AlertDescription>
              </Alert>
              
              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-pawsblue-500 hover:bg-pawsblue-600"
              >
                Place Order - ${(subtotal + 5).toFixed(2)}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Order Success Dialog */}
        <OrderSuccessDialog 
          open={showSuccessDialog} 
          onOpenChange={setShowSuccessDialog}
          orderDetails={{
            orderNumber: orderNumber,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            total: subtotal + 5
          }}
        />
      </div>
    </MainLayout>
  );
};

export default CheckoutPage;
