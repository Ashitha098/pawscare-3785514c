
import MainLayout from "@/components/layout/MainLayout";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-6 w-6 text-pawsblue-600" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Last Updated: April 11, 2025
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to PawsCare. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make a purchase.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping/billing address when you register or make a purchase.</li>
              <li><strong>Account Information:</strong> Login credentials and account preferences.</li>
              <li><strong>Transaction Information:</strong> Order details, purchase history, and payment information.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies.</li>
              <li><strong>Usage Information:</strong> How you interact with our website, including pages visited and links clicked.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Create and manage your account</li>
              <li>Communicate with you about orders, products, and services</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Companies that help us operate our business, such as payment processors, shipping companies, and marketing services.</li>
              <li><strong>Business Partners:</strong> Third parties with whom we collaborate on joint offerings.</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Restrict or object to processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, accidental loss, or destruction.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-8">
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

export default PrivacyPolicyPage;
