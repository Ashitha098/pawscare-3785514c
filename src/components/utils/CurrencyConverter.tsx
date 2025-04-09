
import { useState, useEffect } from "react";
import { IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number>(83.5); // Default exchange rate (approximate)
  const [isConverting, setIsConverting] = useState<boolean>(false);

  // Update exchange rate periodically (simulated)
  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we're using a fixed rate with small random variations
    const interval = setInterval(() => {
      const randomVariation = (Math.random() * 0.5) - 0.25; // Random variation between -0.25 and 0.25
      setExchangeRate(prev => Number((prev + randomVariation).toFixed(2)));
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  const handleConvert = () => {
    if (!amount || isNaN(Number(amount))) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    setIsConverting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = Number(amount) * exchangeRate;
      setConvertedAmount(Number(result.toFixed(2)));
      setIsConverting(false);
      toast.success("Currency converted successfully");
    }, 500);
  };
  
  return (
    <div className="flex flex-col space-y-4 p-4 bg-white rounded-lg shadow-sm border">
      <h3 className="text-lg font-medium">USD to INR Converter</h3>
      <div className="flex items-center gap-2">
        <div className="flex-grow">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter USD amount"
            className="w-full"
            min="0"
          />
        </div>
        <Button 
          onClick={handleConvert}
          disabled={isConverting}
          className="bg-pawsorange-500 hover:bg-pawsorange-600"
        >
          Convert
        </Button>
      </div>
      
      {convertedAmount !== null && (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
          <div>
            <p className="text-sm text-gray-500">Result:</p>
            <p className="font-medium flex items-center">
              <IndianRupee className="h-4 w-4 mr-1 text-pawsorange-500" />
              {convertedAmount.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Exchange Rate:</p>
            <p className="text-sm">1 USD = ₹{exchangeRate}</p>
          </div>
        </div>
      )}
      
      <p className="text-xs text-gray-500 italic">
        Note: Exchange rates are approximate and updated periodically.
      </p>
    </div>
  );
};

export default CurrencyConverter;
