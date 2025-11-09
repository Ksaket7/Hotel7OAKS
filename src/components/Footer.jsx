import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Brand Section === */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            OAK<span className="text-green">7</span>
          </h3>
          <p className="text-gray-400">
            Travel, Trek, and Explore the unexplored — with safety and trust.
          </p>
        </div>

        {/* === Quick Links Section === */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/treks"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Treks
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* === Contact Section === */}
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
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-200"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-200"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Oak7 Tours & Travels. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
