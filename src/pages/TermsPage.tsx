
import MainLayout from "@/components/layout/MainLayout";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

const TermsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-pawsblue-600" />
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Last Updated: April 11, 2025
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to PawsCare. These Terms and Conditions govern your use of our website and services, including the purchase of products and pet adoption services. By accessing our website or using our services, you agree to these Terms.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p className="mb-4">
              "Website" refers to PawsCare, accessible at www.pawscare.com.<br />
              "Services" refers to the pet adoption, grooming, and accessory services offered on our Website.<br />
              "User," "You," and "Your" refers to the individual accessing the Website and accepting these Terms.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Account Registration</h2>
            <p className="mb-4">
              To access certain features of our Website, you may need to register for an account. You agree to provide accurate information and keep it updated. You are responsible for maintaining the security of your account and password.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Pet Adoption Terms</h2>
            <p className="mb-4">
              Our pet adoption process aims to find suitable homes for pets. By applying to adopt a pet, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate information in your application</li>
              <li>Participate in the screening process, which may include interviews and home checks</li>
              <li>Pay any applicable adoption fees</li>
              <li>Provide proper care for the adopted pet</li>
              <li>Comply with all local laws regarding pet ownership</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Products and Services</h2>
            <p className="mb-4">
              We offer various pet accessories and grooming services. We strive to provide accurate descriptions of our products and services, but we do not warrant that product descriptions or other content are accurate, complete, reliable, current, or error-free.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Orders and Payments</h2>
            <p className="mb-4">
              When placing an order, you agree to provide current, complete, and accurate purchase and account information. All payments must be made through our secure payment system. Prices are subject to change without notice.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Shipping and Delivery</h2>
            <p className="mb-4">
              We ship products to addresses within India. Delivery times are estimates and not guaranteed. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Returns and Refunds</h2>
            <p className="mb-4">
              You may return most new, unopened items within 30 days of delivery for a full refund. If the item is defective or damaged, we will replace it. Please contact our customer service for the return procedure.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
            <p className="mb-4">
              The content on our Website, including text, graphics, logos, images, and software, is the property of PawsCare and is protected by copyright and other intellectual property laws.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall PawsCare be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Website or Services.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Your continued use of the Website after any changes indicates your acceptance of the modified Terms.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">13. Contact Information</h2>
            <p className="mb-8">
              Questions about the Terms should be sent to us at:<br />
              Email: info@pawscare.com<br />
              Phone: +91 8105673860<br />
              Address: 123 Pet Avenue, Bangalore - 560013
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
