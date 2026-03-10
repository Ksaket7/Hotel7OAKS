import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-4 select-none">
            OAK<span className="text-green">7</span>
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            Travel, Trek, and Explore the unexplored — with safety and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-5">Quick Links</h4>
          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-green transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className="hover:text-green transition-colors duration-300"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                to="/treks"
                className="hover:text-green transition-colors duration-300"
              >
                Treks
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-5">Get in Touch</h4>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <a href="tel:+919876543210" className="hover:text-green transition-colors duration-300">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <a href="mailto:info@oak7.com" className="hover:text-green transition-colors duration-300">
                info@oak7.com
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-green transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-green transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        © {new Date().getFullYear()} Oak7 Tours & Travels. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
