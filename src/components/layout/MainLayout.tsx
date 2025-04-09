
import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import CurrencyConverter from "../utils/CurrencyConverter";
import { toast } from "sonner";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showConverter, setShowConverter] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Page load animation
  useEffect(() => {
    setPageLoaded(true);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleConverter = () => {
    setShowConverter(prev => !prev);
    if (!showConverter) {
      toast.info("Currency converter opened");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow transition-opacity duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </main>
      <Footer />
      
      {/* Currency Converter */}
      <div className={`fixed left-8 bottom-8 transition-all duration-300 z-20 max-w-xs ${
        showConverter ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}>
        <CurrencyConverter />
      </div>
      
      <Button
        onClick={toggleConverter}
        size="icon"
        className="fixed left-8 bottom-8 bg-pawsorange-500 hover:bg-pawsorange-600 shadow-lg rounded-full z-10"
        aria-label="Toggle currency converter"
      >
        <IndianRupee className="h-5 w-5" />
      </Button>
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`fixed bottom-8 right-8 bg-pawsblue-500 hover:bg-pawsblue-600 shadow-lg rounded-full transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default MainLayout;
