
import React from "react";
import { Link } from "react-router-dom";
import { PawPrint, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import MainLayout from "@/components/layout/MainLayout";

const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center mb-4">
              <PawPrint size={40} className="text-pawsorange-500" />
            </div>
            <h1 className="text-4xl font-bold text-pawsblue-600 mb-4">
              Welcome to Paws Care – Where Every Paw Finds a Home
            </h1>
            <p className="text-lg text-gray-600">
              At Paws Care, we believe that every pet deserves a loving, forever home. Our mission is to rescue, rehabilitate, and rehome animals in need while advocating for responsible pet ownership. Whether you're looking to adopt a furry companion or support our cause, you're helping us make a difference—one paw at a time.
            </p>
          </div>

          {/* Our Story Section */}
          <section className="mb-12 bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-pawsblue-600 mb-4">Our Story</h2>
            <p className="text-gray-600">
              Paws Care was founded with a simple yet powerful vision: to provide a second chance for abandoned, stray, and surrendered pets. What started as a small group of animal lovers quickly grew into a dedicated community committed to rescuing animals and connecting them with caring families. Over the years, we've helped hundreds of pets find happiness, and we won't stop until every animal has a place to call home.
            </p>
          </section>

          {/* Adoption Process - Interactive Accordion */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pawsblue-600 mb-4">Our Adoption Process</h2>
            <p className="text-gray-600 mb-6">
              We know that adopting a pet is a big decision, and we're here to guide you every step of the way. Our adoption process is designed to ensure the best match between pets and families. Here's how it works:
            </p>
            
            <Accordion type="single" collapsible className="border rounded-lg">
              <AccordionItem value="step-1">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pawsorange-100 text-pawsorange-600 font-bold">1</span>
                    Find Your Match
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="pl-10 text-gray-600">
                    Browse our available pets and choose the one that melts your heart. 
                    <Link to="/pets" className="ml-1 text-pawsblue-500 hover:underline">View our pets</Link>
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="step-2">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pawsorange-100 text-pawsorange-600 font-bold">2</span>
                    Apply Online
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="pl-10 text-gray-600">
                    Fill out a quick adoption application to help us learn about you and your home. This helps us ensure a good match for both you and the pet.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="step-3">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pawsorange-100 text-pawsorange-600 font-bold">3</span>
                    Meet & Greet
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="pl-10 text-gray-600">
                    Spend time with your chosen pet to make sure it's the perfect fit. This important step ensures compatibility and gives you a chance to bond before finalizing the adoption.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="step-4">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-pawsorange-100 text-pawsorange-600 font-bold">4</span>
                    Final Approval
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0">
                  <p className="pl-10 text-gray-600">
                    Once approved, you'll complete the adoption paperwork and bring your new best friend home! We'll provide you with all the information you need to help your pet settle in.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 bg-pawsblue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-pawsblue-600 mb-4">Why Choose Paws Care?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pawsblue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">We provide thorough health checks, vaccinations, and spaying/neutering for all pets.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pawsblue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Our dedicated team ensures that every pet is matched with a loving and responsible owner.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-pawsblue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">We offer post-adoption support to help you and your pet adjust to your new life together.</span>
              </li>
            </ul>
          </section>
          
          {/* Success Stories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-pawsblue-600 mb-4">Success Stories</h2>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Heart className="h-12 w-12 text-pawsorange-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-6">
                Nothing makes us happier than seeing our rescued pets thriving in their new homes! From once-forgotten strays to beloved family members, our success stories remind us why we do what we do.
              </p>
              <Button className="paws-btn-primary">
                Read Happy Tails
              </Button>
            </div>
          </section>
          
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pawsblue-600 mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-600 mb-6">
              Whether you're looking to adopt, volunteer, or donate, your support helps us continue our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pets">
                <Button className="paws-btn-primary">Find a Pet</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="paws-btn-outline border-pawsblue-500 text-pawsblue-500 hover:bg-pawsblue-50">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUsPage;
