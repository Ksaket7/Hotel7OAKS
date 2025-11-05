import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            OAK<span className="text-green-600">7</span>
          </h3>
          <p className="text-gray-400">
            Travel, Trek, and Explore the unexplored — with safety and trust.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Treks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@oak7.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-green-500">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-500">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Oak7 Tours & Travels. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
