
import React from "react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrderSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderDetails: {
    orderNumber: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    total: number;
  };
}

const OrderSuccessDialog = ({ 
  open, 
  onOpenChange, 
  orderDetails 
}: OrderSuccessDialogProps) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onOpenChange(false);
    navigate("/");
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-xl text-green-600">
            <CheckCheck className="mr-2 h-6 w-6" />
            Order Placed Successfully!
          </AlertDialogTitle>
          <AlertDialogDescription>
            Thank you for your order! We've received your payment and will process your order shortly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="py-4">
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <p><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
            <p><strong>Shipping Address:</strong> {orderDetails.address}, {orderDetails.city}, {orderDetails.state} {orderDetails.zip}</p>
            <p><strong>Total Amount:</strong> ${orderDetails.total.toFixed(2)}</p>
            <p className="mt-4 text-muted-foreground">A confirmation email has been sent to {orderDetails.email}</p>
          </div>
        </div>
        
        <AlertDialogFooter>
          <AlertDialogAction 
            onClick={handleContinueShopping}
            className="w-full sm:w-auto bg-pawsblue-500 hover:bg-pawsblue-600"
          >
            Continue Shopping
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderSuccessDialog;
