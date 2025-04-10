
import { Link } from "react-router-dom";
import { PawPrint, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pawsblue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint size={32} className="text-pawsorange-400" />
              <span className="text-2xl font-bold text-white">
                Paws<span className="text-pawsorange-400">Care</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Connecting loving homes with pets in need. Our mission is to ensure every pet finds the caring family they deserve.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pets" className="text-gray-300 hover:text-white transition-colors">
                  Adopt a Pet
                </Link>
              </li>
              <li>
                <Link to="/grooming" className="text-gray-300 hover:text-white transition-colors">
                  Grooming Services
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-300 hover:text-white transition-colors">
                  Pet Accessories
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  How to Adopt
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-pawsorange-400" />
                <span className="text-gray-300">info@pawscare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-pawsorange-400" />
                <span className="text-gray-300">+91 8105673860</span>
              </li>
              <li className="text-gray-300 mt-2">
                123 Pet Avenue, <br />
                Bangalore - 560013
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} PawsCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
